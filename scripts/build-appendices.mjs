// Generates the mechanical appendices of the treatise from the repository's
// canonical registers. Re-run after any change to the ledger, the glossary,
// the challenge register, or the treatise prose:
//
//   node scripts/build-appendices.mjs
//
// Outputs (overwritten each run):
//   writing/treatise/appendices/appendix-a-glossary-snapshot.md
//   writing/treatise/appendices/appendix-c-ledger-and-challenge-snapshot.md
//   writing/treatise/appendices/appendix-f-concordance.md
//
// The hand-written appendices (B, D, E, G, H) live alongside and are not
// touched by this script.

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(root, "writing/treatise/appendices");
const today = new Date().toISOString().slice(0, 10);

const read = (p) => readFile(resolve(root, p), "utf8");

function tableRows(text, firstCellPattern) {
  return text
    .split("\n")
    .filter((l) => l.startsWith("|"))
    .map((l) => l.split("|").slice(1, -1).map((c) => c.trim()))
    .filter((cells) => firstCellPattern.test(cells[0] ?? ""));
}

function stripLinks(s) {
  return s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
}

// ---------- Appendix A: glossary snapshot ----------
async function buildGlossary() {
  const g = await read("ontology/glossary.md");
  const rows = tableRows(g, /^\*\*/);
  const lines = [
    "# Appendix A — Glossary Snapshot",
    "",
    `*Generated ${today} from \`ontology/glossary.md\` by \`scripts/build-appendices.mjs\`. The glossary file remains the canonical register; this snapshot exists so that the treatise carries its definitions at the state of the current draft. Relative links have been flattened to plain text.*`,
    "",
    `Entries: ${rows.length}.`,
    "",
    "| Term | Working definition | Status/source |",
    "| --- | --- | --- |",
  ];
  for (const [term, def, status] of rows) {
    lines.push(`| ${stripLinks(term)} | ${stripLinks(def)} | ${stripLinks(status ?? "")} |`);
  }
  return lines.join("\n") + "\n";
}

// ---------- Appendix C: ledger and challenge snapshot ----------
function statusKey(s) {
  const t = s.replace(/`/g, "").toLowerCase();
  for (const k of ["rejected", "superseded", "merged", "deferred", "open", "provisional", "preferred", "accepted"]) {
    if (t.startsWith(k) || t.includes(`\`${k}`) || t.split(/[;,( ]/)[0] === k) return k;
  }
  return "other";
}

async function buildLedgerSnapshot() {
  const ledger = await read("ontology/commitment-ledger.md");
  const cRows = tableRows(ledger, /^C\d{2,3}$/);
  const rRows = tableRows(ledger, /^R\d{2,3}$/);
  const cr = await read("method/challenge-register.md");
  const chRows = tableRows(cr, /^CH\d{2}$/);

  const counts = {};
  for (const r of cRows) {
    const k = statusKey(r[2] ?? "");
    counts[k] = (counts[k] ?? 0) + 1;
  }
  const chCounts = {};
  for (const r of chRows) {
    const k = (r[3] ?? "").replace(/`/g, "").split(/[ ;(]/)[0] || "other";
    chCounts[k] = (chCounts[k] ?? 0) + 1;
  }

  const lines = [
    "# Appendix C — Commitment and Challenge Register Snapshot",
    "",
    `*Generated ${today} from \`ontology/commitment-ledger.md\` and \`method/challenge-register.md\` by \`scripts/build-appendices.mjs\`. The registers remain canonical; this snapshot records their state for the current draft. The status classification below reads the first word of each status cell and is approximate where a cell carries a compound status.*`,
    "",
    "## Counts",
    "",
    `| Register | Items |`,
    `| --- | --- |`,
    `| Working commitments (C) | ${cRows.length} |`,
    `| Rejected or corrected moves (R) | ${rRows.length} |`,
    `| Challenges (CH) | ${chRows.length} |`,
    "",
    "| Commitment status (first word) | Count |",
    "| --- | --- |",
    ...Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `| ${k} | ${v} |`),
    "",
    "| Challenge status (first word) | Count |",
    "| --- | --- |",
    ...Object.entries(chCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `| ${k} | ${v} |`),
    "",
    "## Working commitments",
    "",
    "| ID | Proposition | Status |",
    "| --- | --- | --- |",
    ...cRows.map(([id, prop, status]) => `| ${id} | ${stripLinks(prop)} | ${stripLinks(status ?? "")} |`),
    "",
    "## Rejected or corrected moves",
    "",
    "| ID | Move | Status |",
    "| --- | --- | --- |",
    ...rRows.map(([id, prop, status]) => `| ${id} | ${stripLinks(prop)} | ${stripLinks(status ?? "")} |`),
    "",
    "## Challenges",
    "",
    "| ID | Question | Status |",
    "| --- | --- | --- |",
    ...chRows.map(([id, q, , status]) => `| ${id} | ${stripLinks(q)} | ${stripLinks(status ?? "")} |`),
  ];
  return lines.join("\n") + "\n";
}

// ---------- Appendix F: concordance ----------
const partOrder = [
  ["parts-i-ii-motivation-and-method.md", "Parts I–II"],
  ["part-iii-from-contingent-reality-to-a-necessary-agent.md", "Part III"],
  ["part-iv-the-minimal-ontology.md", "Part IV"],
  ["part-v-knowledge-time-and-freedom.md", "Part V"],
  ["part-vi-divine-action.md", "Part VI"],
  ["part-vii-deriving-further-attributes.md", "Part VII"],
  ["part-viii-comparison-and-evaluation.md", "Part VIII"],
];

function expandRange(tok) {
  // C123–C130 -> [C123, ..., C130]; single ids pass through
  const m = tok.match(/^(CH|C|R|S|U)(\d+)–(?:CH|C|R|S|U)?(\d+)$/);
  if (!m) return [tok];
  const [, k, a, b] = m;
  const w = a.length;
  const out = [];
  for (let n = Number(a); n <= Number(b); n++) out.push(`${k}${String(n).padStart(w, "0")}`);
  return out;
}

async function buildConcordance() {
  const ledger = await read("ontology/commitment-ledger.md");
  const cMap = new Map(tableRows(ledger, /^C\d{2,3}$/).map((r) => [r[0], stripLinks(r[1])]));
  const rMap = new Map(tableRows(ledger, /^R\d{2,3}$/).map((r) => [r[0], stripLinks(r[1])]));
  const cr = await read("method/challenge-register.md");
  const chMap = new Map(tableRows(cr, /^CH\d{2}$/).map((r) => [r[0], stripLinks(r[1])]));
  const idx = await read("sessions/README.md");
  const sMap = new Map();
  for (const m of idx.matchAll(/\[(S\d{2}) — ([^\]]+)\]/g)) sMap.set(m[1], m[2]);

  const perPart = [];
  const usage = new Map(); // id -> Set of "Part · chapter"
  for (const [file, label] of partOrder) {
    let text;
    try {
      text = await read(`writing/treatise/${file}`);
    } catch {
      continue;
    }
    let chapter = "(front matter)";
    const found = new Map();
    for (const line of text.split("\n")) {
      const h = line.match(/^## (\d+)\. (.+)$/);
      if (h) chapter = `${h[1]}. ${h[2]}`;
      for (const br of line.matchAll(/\[([^\]]+)\]/g)) {
        const inner = br[1];
        if (!/^(CH|C|R|S|U)\d/.test(inner)) continue;
        for (const tok of inner.split(/,\s*/)) {
          for (const id of expandRange(tok.trim())) {
            if (!/^(CH|C|R|S|U)\d+$/.test(id)) continue;
            if (!found.has(id)) found.set(id, new Set());
            found.get(id).add(chapter);
            if (!usage.has(id)) usage.set(id, new Set());
            usage.get(id).add(`${label} · ${chapter}`);
          }
        }
      }
    }
    perPart.push([label, found]);
  }

  const describe = (id) => {
    if (id.startsWith("CH")) return chMap.get(id) ?? "(not in challenge register)";
    if (id.startsWith("C")) return cMap.get(id) ?? "(not in ledger)";
    if (id.startsWith("R")) return rMap.get(id) ?? "(not in ledger)";
    if (id.startsWith("S")) return sMap.get(id) ?? "(not in session index)";
    if (id.startsWith("U")) return "user turn in the normalized transcript";
    return "";
  };
  const sortIds = (ids) =>
    [...ids].sort((a, b) => {
      const ka = a.match(/^[A-Z]+/)[0], kb = b.match(/^[A-Z]+/)[0];
      if (ka !== kb) return ["U", "S", "CH", "C", "R"].indexOf(ka) - ["U", "S", "CH", "C", "R"].indexOf(kb);
      return Number(a.replace(/^[A-Z]+/, "")) - Number(b.replace(/^[A-Z]+/, ""));
    });

  const missing = [...usage.keys()].filter((id) => describe(id).startsWith("(not in"));

  const lines = [
    "# Appendix F — Source and Provenance Concordance",
    "",
    `*Generated ${today} by \`scripts/build-appendices.mjs\` from the bracketed identifiers in the treatise drafts. Each identifier is resolved against the commitment ledger, the challenge register, and the session index. The bracketed identifiers are a drafting device; this concordance is what will replace them when the prose is finalized.*`,
    "",
    `Identifiers referenced: ${usage.size}. Unresolved: ${missing.length}${missing.length ? ` (${missing.join(", ")})` : ""}.`,
    "",
    "## By Part and chapter",
    "",
  ];
  for (const [label, found] of perPart) {
    lines.push(`### ${label}`, "");
    lines.push("| Identifier | Referenced in | Resolves to |", "| --- | --- | --- |");
    for (const id of sortIds(found.keys())) {
      const chapters = [...found.get(id)].join("; ");
      lines.push(`| ${id} | ${chapters} | ${describe(id).replace(/\|/g, "\\|")} |`);
    }
    lines.push("");
  }
  lines.push("## By identifier", "", "| Identifier | Resolves to | Used in |", "| --- | --- | --- |");
  for (const id of sortIds(usage.keys())) {
    lines.push(`| ${id} | ${describe(id).replace(/\|/g, "\\|")} | ${[...usage.get(id)].join("; ")} |`);
  }
  return lines.join("\n") + "\n";
}

await mkdir(outDir, { recursive: true });
const outputs = [
  ["appendix-a-glossary-snapshot.md", await buildGlossary()],
  ["appendix-c-ledger-and-challenge-snapshot.md", await buildLedgerSnapshot()],
  ["appendix-f-concordance.md", await buildConcordance()],
];
for (const [name, content] of outputs) {
  await writeFile(resolve(outDir, name), content, "utf8");
  console.log(`wrote ${name} (${content.length} chars)`);
}

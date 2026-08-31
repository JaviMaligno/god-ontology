import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import process from "node:process";

const root = resolve(import.meta.dirname, "..");
const sourcePath = resolve(root, "chatgpt.md");
const checkOnly = process.argv.includes("--check");

// Verified manually against the raw dump. Line numbers are one-based and point
// to the first content line of each message. Blank separator lines belong to no
// speaker semantically and are trimmed from the generated views.
const turnStarts = [
  ["user", 1],
  ["assistant", 2],
  ["user", 558],
  ["assistant", 560],
  ["user", 943],
  ["assistant", 946],
  ["user", 1730],
  ["assistant", 1732],
  ["user", 2364],
  ["assistant", 2367],
  ["user", 3198],
  ["assistant", 3201],
  ["user", 4349],
  ["assistant", 4367],
  ["user", 5553],
  ["assistant", 5567],
  ["user", 6749],
  ["assistant", 6767],
  ["user", 7862],
  ["assistant", 7875],
  ["user", 9091],
  ["assistant", 9102],
  ["user", 9950],
  ["assistant", 9954],
  ["user", 10734],
  ["assistant", 10738],
  ["user", 11135],
  ["assistant", 11139],
  ["user", 11739],
  ["assistant", 11744],
  ["user", 12538],
  ["assistant", 12543],
  ["user", 13424],
  ["assistant", 13429],
  ["user", 14587],
  ["assistant", 14592],
  ["user", 15513],
  ["assistant", 15519],
  ["user", 16497],
  ["assistant", 16502],
  ["user", 17285],
  ["assistant", 17291],
  ["user", 18084],
  ["assistant", 18088],
  ["user", 19167],
  ["assistant", 19172],
  ["user", 19590],
  ["assistant", 19595],
];

function trimBlankLines(lines) {
  let first = 0;
  let last = lines.length;
  while (first < last && lines[first].trim() === "") first += 1;
  while (last > first && lines[last - 1].trim() === "") last -= 1;
  return lines.slice(first, last);
}

function removeExactInitialDuplication(text) {
  if (text.length % 2 !== 0) return { text, removed: false };
  const half = text.length / 2;
  if (text.slice(0, half) !== text.slice(half)) return { text, removed: false };
  return { text: text.slice(0, half), removed: true };
}

function namespaceNumericReferences(text, id) {
  const labels = [...text.matchAll(/^\[(\d+)\]:/gm)].map((match) => match[1]);
  return labels.reduce(
    (result, label) => result.replaceAll(`[${label}]`, `[${id}-${label}]`),
    text,
  );
}

function renderMessage(message) {
  const title = message.role === "user" ? "User" : "Assistant";
  const source = `raw lines ${message.startLine}–${message.endLine}`;
  return `## ${title} — ${message.id}\n\n*${source}*\n\n${message.text}`;
}

function renderDocument(title, introduction, messages, sourceHash) {
  return [
    `# ${title}`,
    "",
    introduction,
    "",
    `Source: \`chatgpt.md\` (SHA-256 \`${sourceHash}\`).`,
    "",
    "> Editorial normalization: blank separator lines were trimmed; the exact",
    "> duplicated copy of U01 was removed; numeric reference labels were scoped",
    "> to their message IDs so repeated citations render independently. Wording,",
    "> spelling, tables, equations, diagrams, links, and embedded images are otherwise preserved.",
    "",
    "---",
    "",
    messages.map(renderMessage).join("\n\n---\n\n"),
    "",
  ].join("\n");
}

async function main() {
  const source = await readFile(sourcePath, "utf8");
  const sourceHash = createHash("sha256").update(source).digest("hex");
  const lines = source.split(/\r?\n/);
  const lastNonEmpty = lines.findLastIndex((line) => line.trim() !== "") + 1;

  if (turnStarts.length !== 48) throw new Error("Expected 48 message boundaries.");
  for (let index = 0; index < turnStarts.length; index += 1) {
    const [role, start] = turnStarts[index];
    const expectedRole = index % 2 === 0 ? "user" : "assistant";
    if (role !== expectedRole) throw new Error(`Role order fails at line ${start}.`);
    if (index > 0 && start <= turnStarts[index - 1][1]) {
      throw new Error(`Non-increasing boundary at line ${start}.`);
    }
  }

  const counts = { user: 0, assistant: 0 };
  const messages = turnStarts.map(([role, startLine], index) => {
    const nextStart = turnStarts[index + 1]?.[1] ?? lastNonEmpty + 1;
    const endLine = nextStart - 1;
    const rawLines = trimBlankLines(lines.slice(startLine - 1, endLine));
    counts[role] += 1;
    const id = `${role === "user" ? "U" : "A"}${String(counts[role]).padStart(2, "0")}`;
    let text = rawLines.join("\n");
    if (id === "U01") {
      const normalized = removeExactInitialDuplication(text);
      if (!normalized.removed) throw new Error("Expected the exact U01 duplication.");
      text = normalized.text;
    }
    text = namespaceNumericReferences(text, id);
    return { role, id, startLine, endLine, text };
  });

  if (counts.user !== 24 || counts.assistant !== 24) {
    throw new Error(`Expected 24+24 turns; found ${counts.user}+${counts.assistant}.`);
  }
  if (messages.at(-1).endLine !== lastNonEmpty) {
    throw new Error("The final message does not reach the final source content line.");
  }

  const outputs = new Map([
    [
      resolve(root, "corpus", "transcript.md"),
      renderDocument(
        "Normalized Conversation Transcript",
        "Speaker-labelled working edition of the original ontology conversation.",
        messages,
        sourceHash,
      ),
    ],
    [
      resolve(root, "corpus", "user-turns.md"),
      renderDocument(
        "Author (User) Turns",
        "The author's interventions only. These turns direct the project, correct proposals, and establish preferences; they are the primary evidence for authorial intent.",
        messages.filter((message) => message.role === "user"),
        sourceHash,
      ),
    ],
    [
      resolve(root, "corpus", "assistant-turns.md"),
      renderDocument(
        "Assistant Turns",
        "Assistant responses only. This file preserves potentially useful formulations, tables, arguments, diagrams, and references without treating them as authorial commitments.",
        messages.filter((message) => message.role === "assistant"),
        sourceHash,
      ),
    ],
  ]);

  for (const [path, expected] of outputs) {
    if (checkOnly) {
      const actual = await readFile(path, "utf8");
      if (actual !== expected) throw new Error(`${path} is stale; run the generator.`);
    } else {
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, expected, "utf8");
    }
  }

  console.log(
    `${checkOnly ? "Verified" : "Generated"}: 24 user turns, 24 assistant turns, ` +
      `${lastNonEmpty} source lines, SHA-256 ${sourceHash}.`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

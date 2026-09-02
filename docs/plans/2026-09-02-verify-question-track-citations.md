# Question-Track Citation Verification Plan

**Goal:** Verify every memory-cited source in `research/provenance-checklist.md`, correct bibliographic or attribution errors, add authoritative links, verify the two John C. Lennox motivations identified by the author, and update the literature map so the PR no longer delegates this pass to the author.

**Architecture:** Use the checklist as the inventory and record a compact verdict for each work: bibliographic existence, support for the attached claim, and any effect on novelty classification. Prefer primary texts, publisher or journal records, DOI pages, author manuscripts, and authoritative reference works; distinguish verified metadata from interpretive attribution.

**Tech Stack:** Markdown, Git, web search/open, existing corpus integrity script.

**Risks:** Paywalled texts may allow metadata but not full attribution checks; broad book-level claims may need chapter-level qualification; the remote branch may later need reconciliation with local S46 work.

---

### Task 1: Establish the isolated baseline

**Files:**
- Inspect: `research/provenance-checklist.md`
- Inspect: `research/novelty-and-precedent.md`

**Steps:**
1. Run `node scripts/build-corpus.mjs --check` and record the baseline result.
2. Run `rg -n "\[(U|A)[0-9]{2}\]" ontology method research writing`; review the expected internal transcript links and require that every match uses a current `Uxx`/`Axx` identifier.
3. Inventory every S46-S58 and S64 checklist row and its exact attribution burden.

### Task 2: Verify metadata and attribution by topic block

**Files:**
- Modify: `research/provenance-checklist.md`

**Steps:**
1. Verify S46-S50 (religious experience, explanatory stopping points, divine ethics, evil, continuation).
2. Verify S51-S58 (physics/materiality, autonomy, identity, reasons, modality, multiverses).
3. Verify S64 (backward causation/prayer and grounding well-foundedness).
4. Verify the Lennox description/explanation attribution and the evolutionary-naturalism challenge without converting authorial paraphrases into quotations.
5. For each row, add authoritative source links and a verdict: `verified`, `qualified`, `metadata only`, or `incorrect`.
6. Add exact replacement references where the checklist currently names only an author or topic.

Expected: every row has an evidence-backed status; no vague “specific work needed” item remains without either a source or an explicit unresolved limitation.

### Task 3: Reconcile the precedent map and session notes

**Files:**
- Modify: `research/novelty-and-precedent.md`
- Modify as needed: `sessions/2026-09-02-*.md`

**Steps:**
1. Replace “cited from memory/unverified” language with the verified result and direct links.
2. Correct titles, years, venues, chapter/question numbers, and overbroad attributions.
3. Update classification claims only where the evidence changes `established`, `synthesis`, or `potentially distinctive`.
4. Preserve honest limitations for paywalled or only partially inspected sources.

Expected: prose and checklist agree; no source is presented as verified beyond the accessible evidence.

### Task 4: Verify repository integrity and review the diff

**Files:**
- Review all modified Markdown files.

**Steps:**
1. Run `node scripts/build-corpus.mjs --check`; expect exit 0.
2. Run `rg -n "\[(U|A)[0-9]{2}\]" ontology method research writing`; review the expected matches and require no malformed or stale transcript identifier.
3. Run a Markdown link extraction/check for all newly added external links; expect successful resolution or an explicitly documented access limitation.
4. Run `git diff --check`; expect no whitespace errors.
5. Review `git diff --stat` and the complete diff for accidental changes outside the citation pass.

### Task 5: Hand off safely

**Files:**
- No additional files.

**Steps:**
1. Summarize verified, qualified, corrected, and unresolved items.
2. Report the isolated path `C:\tmp\god-ontology-citation-verification` and branch `codex/citation-verification`.
3. Do not merge, push, or alter the dirty `main` checkout without explicit user direction.

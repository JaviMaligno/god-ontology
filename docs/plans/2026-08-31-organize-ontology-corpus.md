# Ontology Corpus Organization Implementation Plan

**Goal:** Convert the unlabelled conversation dump into a durable, traceable research corpus and an initial working architecture for developing the ontology.

**Architecture:** Preserve `chatgpt.md` unchanged as the primary source. Generate speaker-labelled, encoding-normalized views from explicit turn boundaries, then derive concise working documents whose claims cite transcript turn IDs and distinguish the author's commitments from assistant proposals. Keep the future English treatise separate from the bilingual research workspace.

**Tech Stack:** Markdown, Node.js, PowerShell, Git-compatible repository layout

**Risks:** Incorrect speaker attribution; accidental loss of tables, equations, diagrams, or citations; treating assistant proposals as accepted commitments; overstating novelty; allowing summaries to drift from the source conversation.

---

### Task 1: Preserve and segment the source corpus

**Files:**
- Preserve unchanged: `chatgpt.md`
- Create: `scripts/build-corpus.mjs`
- Create: `corpus/transcript.md`
- Create: `corpus/user-turns.md`
- Create: `corpus/assistant-turns.md`

**Step 1: Encode the verified turn map**

Record the 24 user/assistant boundary pairs found by inspecting the raw dump. Treat blank lines surrounding boundaries as layout rather than message content.

**Step 2: Normalize presentation encoding**

Repair reversible UTF-8/Windows-1252 mojibake in generated views without changing `chatgpt.md`. Retain all Markdown tables, mathematics, diagrams, embedded images, and reference definitions.

**Step 3: Generate three corpus views**

Run: `node scripts/build-corpus.mjs`

Expected: `corpus/transcript.md` contains alternating `U01`/`A01` through `U24`/`A24`; the two speaker-specific files contain exactly 24 messages each.

**Step 4: Verify segmentation and preservation**

Run: `node scripts/build-corpus.mjs --check`

Expected: exit code 0; 24 user turns and 24 assistant turns; every non-layout source line belongs to exactly one message; source checksum remains unchanged across generation.

### Task 2: Establish repository navigation and editorial rules

**Files:**
- Create: `README.md`
- Create: `corpus/README.md`
- Create: `CONTRIBUTING.md`

**Step 1: Document the layers**

Explain the difference between immutable source, normalized transcript, authorial commitments, hypotheses, research questions, and eventual treatise prose.

**Step 2: Define provenance rules**

Require every substantive working claim to cite one or more transcript IDs. State that an assistant formulation is not adopted merely because it appears in the transcript, while unchallenged material is retained as usable but not automatically promoted to a core commitment.

**Step 3: Define bilingual policy**

Allow Spanish and English in research notes; use English for the first treatise draft; reserve translation for a later parallel edition.

**Step 4: Verify navigation**

Run: `rg -n "U[0-9]{2}|A[0-9]{2}" README.md CONTRIBUTING.md corpus/README.md`

Expected: repository entry points explain and link the turn-ID provenance system.

### Task 3: Extract the current ontological state

**Files:**
- Create: `ontology/commitment-ledger.md`
- Create: `ontology/core-architecture.md`
- Create: `ontology/glossary.md`

**Step 1: Classify propositions**

Use the statuses `accepted`, `preferred`, `provisional`, `open`, `deferred`, and `rejected`. Separate confidence in a proposition from its role in the model.

**Step 2: Record the causal/modal architecture**

Capture the current path from necessary reality through agent causation, generating structure, possible histories, creaturely agency, actual history, actuality-complete omniscience, and intervention.

**Step 3: Preserve disagreements and corrections**

Explicitly record rejected or corrected moves, including premature perfection/goodness, exhaustive divine determination, unearned classical attributes, compulsory Molinist counterfactuals, and the equation of scientific explanation with ultimate metaphysical explanation.

**Step 4: Verify provenance**

Run: `rg -n "\[(U|A)[0-9]{2}\]" ontology`

Expected: each central commitment and open problem has traceable transcript provenance.

### Task 4: Extract the research method and writing roadmap

**Files:**
- Create: `method/research-method.md`
- Create: `writing/treatise-outline.md`
- Create: `research/novelty-and-precedent.md`

**Step 1: State the adversarial method**

Criticize load-bearing claims in proportion to their uncertainty and consequences. Steelman live alternatives without generating objections mechanically or repeatedly reopening settled points without new evidence.

**Step 2: Define corpus maintenance**

Describe how future sessions add dated notes, decisions, objections, formal definitions, provenance, and changes to the ledger.

**Step 3: Separate motivation from ontology**

Build an English treatise outline that distinguishes the motivating distinction between description and explanation, methodological foundations, developed ontology, formal model, consequences, comparisons, and unresolved questions.

**Step 4: Give a cautious originality assessment**

Classify ideas as established, synthesis, potentially distinctive formulation, or unassessed. Do not claim novelty without targeted literature review.

**Step 5: Verify terminology and status consistency**

Run: `rg -n "accepted|preferred|provisional|open|deferred|rejected|Established|Synthesis|Unassessed" ontology method writing research`

Expected: the project uses consistent epistemic/status language and a cautious novelty vocabulary.

### Task 5: Repository and integrity verification

**Files:**
- Inspect: all files above

**Step 1: Run the corpus integrity check**

Run: `node scripts/build-corpus.mjs --check`

Expected: all turn and content-preservation checks pass.

**Step 2: Inspect links and generated headings**

Run: `rg -n "^#|^## (User|Assistant)" README.md corpus ontology method writing research`

Expected: discoverable hierarchy and alternating transcript headings.

**Step 3: Check repository state**

Run: `git status --short`

Expected: if Git has not yet been initialized, report that fact and leave publication/remote creation as an explicit next operation; otherwise list only the intended files plus any pre-existing user changes.

**Dependencies or prerequisites:** Node.js must be available for deterministic corpus generation. Network access is not required for this first organization pass.

**Open questions:** The public GitHub repository name and remote are not yet specified. Exact novelty claims require a later targeted literature review against primary and authoritative sources.

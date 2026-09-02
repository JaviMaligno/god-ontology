# Session: Appendices, first pass, and a generator for the mechanical ones

**Date:** 2026-09-02
**Session ID:** S69
**Primary question:** Which appendices of the treatise can be produced now, which of them should be generated from the registers rather than written, and what does producing them expose?
**Dependencies:** the treatise drafts (S58–S67); the ledger, glossary, and challenge register; the accessible track; the author's confirmation of the two registers and of the accessible register's purpose for the author's own understanding
**Origin:** the author's “sigue con todo” after confirming the shape of the treatise
**Target depth:** consolidation; one authorial direction recorded

## What was made

| Appendix | Kind | File |
| --- | --- | --- |
| A — Glossary snapshot | generated | `writing/treatise/appendices/appendix-a-glossary-snapshot.md` |
| B — Formal symbols, scope, satisfaction conditions | hand-written, first pass | `appendix-b-formal-symbols.md` |
| C — Commitment and challenge register snapshot | generated, with status counts | `appendix-c-ledger-and-challenge-snapshot.md` |
| D — Intervention compatibility matrix | hand-written | `appendix-d-intervention-matrix.md` |
| E — Argument maps | hand-written | `appendix-e-argument-maps.md` |
| F — Source and provenance concordance | generated from the bracketed identifiers in the drafts | `appendix-f-concordance.md` |
| G — English–Spanish terminology table | hand-written | `appendix-g-terminology-en-es.md` |
| H — Plain-language statement | derived from the accessible track; Spanish then English | `appendix-h-plain-statement.md` |

The generator is `scripts/build-appendices.mjs`; it is re-run after any change to the ledger, glossary, challenge register, or treatise prose, and the generated files are overwritten. The hand-written appendices are revised by hand.

## The author's confirmation, recorded

The author confirmed that the treatise is being given shape, that it will need further passes and revisions, and that there are two levels of formality: the metaphysics with its procedure and rigor, and the accessible, clarifying register. The author added that the accessible register is not only for others but for the author's own understanding, self-recognition, and expression. That purpose is recorded (C557) and added to the accessible track's statement of purpose: an answer must satisfy the author as a reader of their own position, not only a stranger. The author also noted local work on identity in progress and uncertainty about its compatibility with the branch's; the branch's identity results are already marked as refinements of the trunk's S45 (C556), and any further local result will be reconciled when it reaches main.

## What the appendices exposed

| Finding | Action |
| --- | --- |
| The concordance resolves every bracketed identifier in the drafts once two-digit commitment identifiers are handled; no dangling reference remains after the six renumberings | none; the generator is the check |
| The status counts show the compound statuses the ledger has accumulated (merged, superseded, restated); the snapshot classifies by first word and says so | none; a status normalization pass may be worth doing when the registers are stable |
| Appendix B's table makes visible which symbols belong to the trunk and which to the question-driven track, and which of the latter are now reconciled aliases | none; useful for the concordance's final form |
| Appendix H is a compression of the accessible answers and inherits their status labels; it is not a new statement of belief | none; it is revised whenever the answers are |
| Appendix D's third table is the first tabular statement of the S63 result on responses and time | none |

## Decisions

| Item | Status | Reason |
| --- | --- | --- |
| Generated appendices A, C, F | done; regenerable | mechanical content should not drift from its registers |
| Hand-written appendices B, D, E, G, H | first pass | content is compiled from the sessions and drafts |
| C557 | `accepted author direction` | the accessible register serves the author's own understanding as well as exposition |
| Ledger changes | one row | the direction |

## Repository updates

- [x] `scripts/build-appendices.mjs` and `writing/treatise/appendices/`
- [x] accessible track (purpose statement)
- [x] commitment ledger (C557)
- [x] treatise outline, README, development map, research method, session index

## Next question

Every Part and every appendix now has a first pass. What remains on the branch is the provenance pass, which needs online access the environment does not have, and the second passes the author anticipates. The trunk's next question is the author's.

# Corpus Guide

`chatgpt.md` at the repository root is the primary source. It has no speaker labels and must remain unchanged.

The generated corpus has three views:

- `transcript.md`: alternating author and assistant messages;
- `user-turns.md`: author messages only—the main evidence for direction, correction, preference, and acceptance;
- `assistant-turns.md`: assistant messages only—useful arguments, tables, diagrams, and references that are not automatically project commitments.

## Turn IDs

The conversation contains 24 pairs:

- `U01`–`U24`: author/user turns;
- `A01`–`A24`: assistant turns.

A working claim should cite the turn that supports its status, for example `[U21](transcript.md#user--u21)`. Assistant provenance should be marked separately, for example `[A24](transcript.md#assistant--a24)`.

## Editorial normalization

Generated views make only mechanical presentational changes:

1. speaker headings and raw line ranges are added;
2. blank separator lines are trimmed;
3. the exact duplicated copy of `U01` is removed;
4. repeated numeric citation labels are namespaced by turn so Markdown references do not collide.

Spelling, language switching, arguments, mathematics, tables, diagrams, links, and embedded images are otherwise preserved. Corrections belong in derived research notes, not in the historical transcript.

## Evidential rule

An author statement is evidence of intent, but its force still depends on wording:

- “I accept” or “we should keep this” supports acceptance;
- “I prefer” supports preference;
- “this seems promising” supports a provisional hypothesis;
- a question remains open;
- from `U18` onward, when the author replies to an assistant message, any point not challenged is accepted by default at the level at which it was proposed.

The last rule is a governing rule of the conversation, not merely a weak evidential hint. “Accepted at the level proposed” means that an unchallenged working definition is adopted, an unchallenged provisional claim remains provisionally adopted, and an unchallenged open question retains its open status. It does not convert every unchallenged hypothesis into certainty, and it does not prevent later expansion or reasoned revision. This rule comes from [U18](transcript.md#user--u18) and was reaffirmed in the 2026-08-31 project brief.


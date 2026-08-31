# Contributing to the Ontology

## Authority and provenance

The author's turns determine direction and adoption. Assistant turns, external literature, and formal models supply candidate material. Before `U18`, adoption normally requires positive authorial evidence. From `U18` onward, an assistant point becomes accepted working material when the author's next reply leaves it unchallenged; its epistemic status remains the one stated in the proposal unless the author changes it.

Every substantive addition should record:

- a stable claim or question ID;
- status: `accepted`, `preferred`, `provisional`, `open`, `deferred`, or `rejected`;
- source: transcript turn, session note, or external publication;
- rationale;
- strongest live objection;
- what would change the status.

## Editing policy

- Preserve `chatgpt.md` unchanged.
- Rebuild generated corpus files through `scripts/build-corpus.mjs`.
- Put discussion records in `sessions/`; put only consolidated positions in `ontology/`.
- Keep motivation, method, ontology, formalization, comparison, and treatise prose distinct.
- Prefer a positive statement of the view. Use contrast when it locates the position relative to a real alternative, not as a default sentence pattern.
- Do not repeat settled material unless new evidence, a formal dependency, or a genuine inconsistency reopens it.
- Use both ancient and contemporary literature where relevant; prefer primary texts and peer-reviewed or authoritative reference works.
- Treat an exact phrase search as weak evidence. “No result found” never establishes originality.

## Default-acceptance rule

The author established a conversation protocol in [U18](corpus/transcript.md#user--u18): future replies focus on points needing commentary, while unmentioned points are considered good and retained. Apply it as follows:

1. Pair each author reply with the immediately preceding assistant turn.
2. Record explicit corrections first; they override the proposal.
3. Adopt every materially separate, unchallenged point at its proposed level (`accepted`, `preferred`, `provisional`, `open`, or `deferred`).
4. Treat “accepted” as accepted for continued development, not as infallible or permanently closed.
5. Do not use the rule for assistant material that had no subsequent author reply, unless the author later ratifies it.

## Decision discipline

Several coherent options may remain live, but the project must still choose a working path. Record alternatives without allowing “everything is possible” to replace a position. Choices may reasonably use coherence, explanatory force, economy, fruitfulness, literature fit, and the author's considered preference; label the kind of support rather than presenting every choice as a deduction. The default-acceptance rule keeps the conversation moving and is part of this decision discipline.

## Verification

Before claiming a corpus or ledger update is complete, run:

```powershell
node scripts/build-corpus.mjs --check
rg -n "\[(U|A)[0-9]{2}\]" ontology method research writing
```


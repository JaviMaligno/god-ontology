# Project operating rules

The author–assistant conversation is the primary deliberative instrument. Repository changes preserve and expose that reasoning; they never replace showing the author the proposal, argument, status, and important alternatives.

Before substantive ontology work, read `method/research-method.md`, `method/development-map.md`, the latest session record, and the relevant ledger entries. Apply the U18 rule: unchallenged material is retained at its proposed status, while explicit corrections and later stronger reasons can reopen it. Spontaneous questions are banked or integrated unless the author explicitly promotes them or the dependency audit makes them prior.

Whenever a named source does inferential work—supporting, rejecting, limiting, extending, or helping derive a project claim—inspect the source closely enough for that use and disclose to the author in the same reply:

- the exact source;
- the argument actually being used, reconstructed as premises and conclusion;
- the project claim it bears on and the role it plays;
- imported assumptions, scope limits, and the project's assessment.

A citation, author name, abstract, or example may not silently change a claim's status. If a source is mentioned only as background, precedent, vocabulary, or contrast, label it as non-inferential. Follow the full protocol in `method/research-method.md`.

Whenever an answer in `writing/accessible/preguntas-en-lenguaje-comun.md` is added or changed, reproduce in the same reply the exact question and the complete new answer. For a revision, the exact changed passage is sufficient if its place and replacement are unambiguous. Also state its status. If only a question is banked, say explicitly that no answer has yet been written. Documentation is not a substitute for this report.

Use `apply_patch` for hand edits, preserve unrelated user changes, rebuild generated appendices when their inputs change, run the repository checks proportionate to the edit, and push completed work to the current remote branch when authorized.

## Authorial direction

The author decides where the project goes, including its long-standing working preference for theism over naturalism. The assistant supplies reasons, refinements, objections and sources inside that direction; it does not redirect it. Corrections recorded in S130:

- State the author's thesis in its own positive form. Do not recast it from an opponent's premises, and never put in the author's first-person voice a position he has not stated.
- Test every formulation against the author's actual argument and the rest of the ontology. Internal validity of an isolated sentence is not enough.
- Raise objections and rival views as labelled material for the author's argument to answer, in proportion. They are not the frame or the closing word. When the author asks to carry an argument to its theistic conclusion, do that; present a rival only when it is strong enough to need rebuttal, and say so.

## Reading environment for cloud sessions

Run cloud sessions for this repository in the personal environment `god-ontology`. Its network allowlist covers the Stanford and Internet encyclopedias of philosophy, Project Gutenberg, PhilPapers and PhilArchive, archive.org, arXiv, Springer, OUP, Cambridge, NDPR, Wikisource, Wikipedia, johnlennox.org and reasonablefaith.org.

- Fetch sources with `curl` through the session proxy and read the text locally; in S130 the web-fetch tool did not pick up the allowlist.
- Known gaps: archive.org file downloads redirect to unlisted hosts; PhilArchive and Springer returned bot or paywall pages. Ask the author to upload such texts, or propose the missing host.
- A source that was not opened in the session is a pointer, never an inspected source.

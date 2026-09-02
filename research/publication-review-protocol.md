# Publication and Review Protocol

Status: proposed project method

Last policy check: 2026-09-02

## Purpose

This protocol defines the review needed before material from this repository is
presented as serious academic metaphysics. It supplements the development-depth
and evidential-maturity axes in [the research method](../method/research-method.md).
It does not change the status of any ontological commitment.

The central rule is that four kinds of warrant must remain distinct:

1. **Philosophical warrant:** whether the premises, distinctions, objections,
   and comparative argument are defensible.
2. **Formal warrant:** whether stated conclusions follow in the specified
   system and whether the system has the advertised models or countermodels.
3. **Adversarial audit:** whether independent readers or agents can expose
   hidden assumptions, equivocations, counterexamples, or literature gaps.
4. **Editorial peer review:** evaluation by human experts selected through a
   journal or academic press. Internal agent review is not peer review and must
   never be described as such.

Formal verification can give unusually strong support to (2). It cannot by
itself establish (1), because a valid derivation may begin from false,
question-begging, ambiguous, or metaphysically unmotivated premises.
Agent review can contribute substantially to (1), not merely to mechanical
checking. A well-designed multi-agent process may exceed an ordinary human
presubmission reading in coverage, iteration count, explicitness, and
reproducibility. Its remaining limitations should be stated specifically rather
than treated as a general lack of reasoning ability: models may share correlated
training biases, may fabricate sources or proofs when tools do not constrain
them, do not bear academic responsibility, and do not supply the social and
institutional function of journal-appointed peers.

## Recommended publication unit

The treatise is a research programme, not a suitable first journal submission.
The normal unit should be one article with:

- one principal thesis or one tightly connected result;
- the minimum upstream premises needed for that result;
- a clear statement of whether the support is deductive, abductive,
  coherence-based, preferential, or theological;
- the two or three strongest live alternatives;
- one contribution claim situated in the current literature; and
- only the notation that performs real argumentative work.

An initial article should normally be self-contained in roughly 6,000-8,000
words, with detailed proofs, machine-readable theories, model files, and the
larger dependency graph treated as supplementary material. This is a practical
target, not a universal norm: the selected journal's current rules control.
For example, *Religious Studies* currently states a normal maximum of 8,000
words, requires an abstract of at most 250 words and 5-10 keywords, and accepts
preprints under its stated policy. *Analysis* is a very different format, with
an absolute 4,000-word limit.

## Review objects

Every candidate article should be frozen as a versioned review bundle:

```text
review-bundle/<article-id>/<version>/
  manuscript.pdf
  manuscript-source/
  claim-map.md
  objection-register.md
  sources.md
  formal/                 # only when formalization is load-bearing
  tests/                  # proof, model, and regression commands
  agent-reviews/
  human-reviews/
  response-to-reviews.md
  manifest.md             # version, date, commit, tools, commands, hashes
```

The `claim-map.md` should map every load-bearing manuscript claim to:

- repository claim IDs and exact sources;
- premises and dependencies;
- inference type;
- formal statement, if any;
- strongest known objection;
- literature precedent or contrast; and
- present disposition: retained, qualified, deferred, or removed.

This bundle is an internal research artifact. Before anonymous submission,
remove author-identifying history, acknowledgements, repository links, metadata,
and other deanonymizing material from the manuscript and any supplements.

## The seven review gates

### Gate 1 — Article and contribution audit

The candidate must state, in ordinary academic prose:

- the exact question;
- the principal conclusion;
- what is assumed rather than derived;
- what is new: thesis, argument, distinction, formal result, synthesis, or
  application;
- why the result matters to readers beyond this project; and
- what the article does not attempt to establish.

A reader should be able to reconstruct the contribution without consulting
the repository. Failure here is a desk-rejection risk even if the wider system
is coherent.

### Gate 2 — Argument reconstruction

Reconstruct the central argument as numbered premises and conclusions, with a
dependency graph. For every inferential edge, classify it as:

- formally deductive;
- conceptually or analytically supported;
- abductive or explanatory;
- coherence-based;
- evidential or empirical;
- preferential; or
- theological/experiential.

The audit fails if a non-deductive bridge is displayed as a theorem, if a
definition is used to establish existence, if modality changes without an
explicit principle, or if the same term changes meaning across an inference.

### Gate 3 — Formal and computational audit

Formalize only the load-bearing fragment. A publication-grade fragment needs:

- declared logic, syntax, types/sorts, quantifier domains, modal semantics, and
  identity conditions;
- an explicit division between definitions, axioms, bridge principles,
  premises adopted for comparison, and derived theorems;
- bidirectional traceability between prose claims and formulas;
- proofs for claimed consequences;
- countermodels or independence results where a conclusion is said not to
  follow without an extra bridge;
- at least one non-trivial model when consistency or joint satisfiability is
  claimed, subject to the limits of the chosen semantics; and
- regression tests so later revisions do not silently break earlier results.

Use the tool appropriate to the claim:

- a proof assistant for derivations and type/scope discipline;
- an automated theorem prover or SMT solver for tractable first-order or
  decidable fragments;
- a model finder for finite satisfiability, countermodels, and independence;
  and
- property-based or generated tests for encodings and transformations.

Machine success must be reported narrowly. A finite model is not a proof of
the intended metaphysics; failure to find a model is not inconsistency; and a
proof establishes only a consequence of the encoded assumptions. At least one
reviewer must therefore perform a **formalization-fidelity check**: do the
symbols say what the prose claims they say?

### Gate 4 — Literature and provenance audit

For every central claim and asserted novelty:

- search primary literature and authoritative reference works;
- include the strongest nearby view, not only terminological matches;
- verify quotations, page references, DOI/edition metadata, and whether a
  source supports the exact proposition attributed to it;
- distinguish direct precedent from a local extension or recombination; and
- rerun the search shortly before submission.

`research/novelty-and-precedent.md` is a discovery map, not the final related
work section. A second reviewer must check the cited sources independently.
Agent claims about novelty or absence of precedent never close this gate on
their own.

### Gate 5 — Independent agent audit

Agents may provide a rigorous, functionally peer-review-grade internal
adversarial review if their roles and limits are explicit. They can be the
primary presubmission review engine rather than a preliminary convenience. Run
reviewers in isolated contexts against the same frozen bundle. Do not let them
inherit the project's conclusions as instructions.
Recommended roles are:

1. **Analytic metaphysics reviewer:** distinctions, grounding, modality,
   identity, dependence, and counterexamples.
2. **Formal logic reviewer:** validity, scope, typing, semantics, model claims,
   and proof obligations.
3. **Philosophy-of-religion reviewer:** dialectical position, relevant
   traditions, theological loading, and target-audience significance.
4. **Hostile-but-charitable opponent:** strongest naturalist, structuralist,
   classical-theist, or other relevant rival for that article.
5. **Editorial reviewer:** clarity, article scope, novelty statement, anonymous
   presentation, and target-journal fit.

Where practical, use more than one model family, vary the attack method, and do
not show later agents the earlier verdicts. Blind reconstruction, independent
proof attempts, countermodel competitions, and source retrieval from primary
texts create meaningful procedural independence. They do not guarantee
statistical independence or remove shared blind spots, but the relevant
standard is demonstrated performance on the review task, not a presumption that
an agent lacks expertise.

Each report must include:

- a one-paragraph reconstruction of the thesis;
- a recommendation: reject, major revision, minor revision, or ready for human
  presubmission review;
- findings tied to page/section and claim IDs;
- severity: blocker, major, minor, or editorial;
- the exact failed inference, counterexample, missing source, or ambiguity;
- confidence and what evidence could change the assessment; and
- a separate list of checks actually performed.

An agent that helped author the passage must not be its sole reviewer. The
author, not a synthesis agent, owns every disposition. A synthesis step may
deduplicate reports but may not close an objection merely by majority vote.

### Gate 6 — External human presubmission review

External human reading is strategically valuable, especially for judging how a
live academic audience will receive the framing. It is recommended rather than
an epistemic prerequisite when Gates 1-5 have been completed at high assurance.
When available, seek two substantive readings:

- one specialist in the article's metaphysical or philosophy-of-religion
  subject matter; and
- one reader competent in the formal method actually used.

For especially central claims, add a third reader who is sympathetic to the
strongest rival position. At least one reader should not have participated in
developing the project. A workshop, research seminar, or written referee-style
exchange is preferable to informal approval.

Human reviewers receive the same structured questions as agents, but are free
to reject the project's framing. No objection, human or agent, is resolved by
vote count; it is resolved on its merits. Record a reasoned response to every
blocker and major concern, then send the revision back to at least one original
reviewer or a fresh equivalent.

If suitable presubmission readers are unavailable, record that fact rather than
pretending that agent review was human review. A strong multi-agent audit may
still justify submission: the journal's own process supplies the conventional
external human review. This route carries a higher risk that audience-fit or
disciplinary-tacit-knowledge problems are first discovered at editorial review.

### Gate 7 — Journal or press review

Only this gate supplies conventional external peer review. Select the venue by
the article's actual contribution rather than by the project's eventual scope.
Possible venue classes include specialist philosophy of religion journals,
general analytic philosophy journals, and logic/formal-philosophy venues when
the formal result is itself substantial.

Expect editorial screening, anonymous expert reports, revision, and possible
resubmission. Current examples illustrate the norm rather than a universal
rule: *Religious Studies* requires a manuscript ready for blind review, while
*MIND* describes triple-anonymous review, initial editorial screening, normally
two specialist reviewers for papers sent out, and revise-and-resubmit cycles.

## Decision rule

A candidate is ready for human presubmission review only when:

- every central claim is traceable and accurately status-labelled;
- no blocker remains open;
- every major objection is answered, conceded through a scope change, or
  prominently stated as a limitation;
- all load-bearing deductive derivations pass their declared checks;
- the prose/formalization fidelity audit passes;
- central source attributions have independent verification;
- the novelty claim is appropriately narrow;
- a fresh agent regression round finds no new blocker; and
- the article complies with the selected venue's current instructions.

It is ready for journal submission after the high-assurance agent gates and,
where feasible, Gate 6; absence of an external presubmission reader is not by
itself a blocker. All disclosures, anonymization, word count, abstract,
keywords, references, figures, supplements, and metadata must still be checked
against the target journal on the submission date.

Review verdicts are not truth values. A finding is closed only by a recorded
reason, manuscript change, proof/countermodel, source, or explicit reduction of
scope. Disagreement may remain, but it must be visible.

## AI use, disclosure, and confidentiality

Agent assistance should be logged by tool/model, version where available,
date, task, inputs or prompt template, output location, and author disposition.
The final human author remains accountable for accuracy, originality, citations,
and every argument.

Publisher rules must be checked again for each venue. As of the policy date,
Cambridge states that AI tools cannot be authors and that generative use for
text, images, analysis, or extraction must be declared and described; minimal
spelling, brief phrasing, and formatting uses are treated differently. The
current *Religious Studies* instructions request the tool name/version, dates,
access information, and a description of use where declaration is required.

Agent-based internal review of the author's own pre-submission work is separate
from journal peer review. A confidential manuscript or referee report received
through an editorial process must not be sent to an AI system unless the
journal expressly permits it and all confidentiality conditions are satisfied.
Cambridge currently forbids reviewers from sharing the manuscript or review
with public AI tools and restricts AI assistance in the review itself to
minimal non-generative uses.

## Minimal reproducible review cycle

1. Freeze candidate version `v1` and its manifest.
2. Complete Gates 1-4 without asking agents to repair the text silently.
3. Run the five isolated agent roles against `v1`.
4. Consolidate findings by identity and severity; preserve minority objections.
5. Author dispositions and produces `v2` with a change log.
6. Run formal regressions and two fresh agent reviewers against `v2`.
7. Where feasible, obtain the human reviews in Gate 6 and produce `v3`; if this
   step is unavailable, record the omission and proceed only if no blocker or
   major unresolved issue remains.
8. Recheck the target journal's live policies, anonymize the bundle, and submit.
9. Treat editorial reports as a new evidence set; do not expose confidential
   material to agents contrary to the venue's policy.
10. After acceptance, archive the permitted manuscript version, formal artifacts,
    and reproducibility instructions under the publisher's policy.

## Current project assessment

The repository is already unusually well prepared for Gates 1, 2, and 4: it
has stable claim IDs, explicit status labels, a challenge register, provenance
notes, and a distinction between formal depth and evidential maturity. The main
work still required before a serious submission is:

- select one article-sized contribution rather than submit the whole system;
- replace the current notation catalogue with an explicit formal language and
  semantics for the selected fragment;
- establish prose-to-formula traceability and executable proof/model checks;
- obtain independent, source-grounded literature verification, using isolated
  agents and direct primary-source checks and, where available, human review;
- perform isolated adversarial review; and
- preferably obtain qualified human criticism before relying on journal
  referees, while recognizing that a high-assurance multi-agent audit can be a
  serious presubmission process in its own right.

The current `appendix-b-formal-symbols.md` is a useful specification inventory,
but it is not yet a machine-verifiable theory. Moving a fragment into Lean,
Isabelle, another proof assistant, an automated prover, or a model finder should
be decided only after the article's logic and proof obligations are fixed.

## Policy sources checked

- [*Religious Studies*: preparing your materials](https://www.cambridge.org/core/journals/religious-studies/information/author-instructions/preparing-your-materials)
- [*Religious Studies*: submitting your materials](https://www.cambridge.org/core/journals/religious-studies/information/author-instructions/submitting-your-materials)
- [*Religious Studies*: instructions for peer reviewers](https://www.cambridge.org/core/journals/religious-studies/information/peer-review-information/instructions-for-peer-reviewers)
- [Cambridge: authorship and AI contributions](https://www.cambridge.org/core/services/publishing-ethics/authorship-and-contributorship-journals)
- [Cambridge: core editorial, peer-review, AI, and confidentiality policies](https://www.cambridge.org/core/services/publishing-ethics/core-editorial-policies-journals)
- [*MIND*: author instructions and review process](https://academic.oup.com/mind/pages/General_Instructions)
- [*Analysis*: author instructions](https://academic.oup.com/analysis/pages/general_instructions)

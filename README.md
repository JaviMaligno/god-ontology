# God Ontology

This repository develops a bottom-up ontology of a necessary cosmic agent, creation, creaturely agency, divine knowledge, and intervention. Its purpose is to build the most coherent position the author can endorse—not to recover classical theism by definition and not to maximize novelty.

The project began with a narrower question: in what sense does science describe rather than explain, and where does metaphysical explanation begin? The conversation then moved through mathematical intelligibility, brute facts, necessity, agent causation, and the gradual derivation of properties that might justify calling a necessary agent “God.”

## Start here

- [Commitment ledger](ontology/commitment-ledger.md): accepted, preferred, provisional, open, deferred, and rejected positions.
- [Core architecture](ontology/core-architecture.md): the present causal/modal model and its main unresolved fork.
- [Research method](method/research-method.md): how future sessions, objections, decisions, and sources are handled.
- [Treatise outline](writing/treatise-outline.md): an English-language structure that separates motivation from ontology.
- [Future process article](writing/future-article-on-ai-collaboration.md): notes for a personal-web article on authorship, judgment, and AI collaboration in this project.
- [Novelty and precedent](research/novelty-and-precedent.md): cautious first assessment against nearby literature.
- [Normalized transcript](corpus/transcript.md): all 24 speaker-labelled turn pairs.

## Repository layers

```text
chatgpt.md                 immutable primary dump
        │
        ▼
corpus/                    normalized and speaker-separated evidence
        │
        ▼
ontology/                  current commitments, definitions, architecture
        │
        ├── method/        rules for inquiry and maintenance
        ├── research/      literature and originality assessment
        ├── sessions/      future session records
        └── writing/       eventual treatise, kept distinct from notes
```

Research notes may be written in Spanish or English. The first treatise draft is planned in English; a Spanish edition can be developed in parallel later.

## Current state in one sentence

The leading model provisionally posits a necessary agent that can originate every essence-compatible admissible created root while ordinary created causes genuinely produce later effects within one atemporally known history. S38–S44 support qualified creative plenitude, constitutive control, fixed-history intervention range, and conditional closure of pure created-directed tasks at F2; unrestricted omnipotence remains open, and identity is the next trunk module.

## Rebuilding the corpus

The raw dump is never modified by the generator.

```powershell
node scripts/build-corpus.mjs
node scripts/build-corpus.mjs --check
```

The check expects 24 user turns, 24 assistant turns, complete coverage through the final non-empty source line, and byte-for-byte agreement between generated files and the verified turn map.

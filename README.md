# God Ontology

This repository develops a bottom-up ontology of a necessary cosmic agent, creation, creaturely agency, divine knowledge, and intervention. Its purpose is to build the most coherent position the author can endorse—not to recover classical theism by definition and not to maximize novelty.

The project began with a narrower question: in what sense does science describe rather than explain, and where does metaphysical explanation begin? The conversation then moved through mathematical intelligibility, brute facts, necessity, agent causation, and the gradual derivation of properties that might justify calling a necessary agent “God.”

## Start here

- [Commitment ledger](ontology/commitment-ledger.md): accepted, preferred, provisional, open, deferred, and rejected positions.
- [Core architecture](ontology/core-architecture.md): the present causal/modal model and its main unresolved fork.
- [Research method](method/research-method.md): how future sessions, objections, decisions, and sources are handled.
- [Treatise outline](writing/treatise-outline.md): an English-language structure that separates motivation from ontology; first-pass prose exists for [Part III](writing/treatise/part-iii-from-contingent-reality-to-a-necessary-agent.md), [Part IV](writing/treatise/part-iv-the-minimal-ontology.md), and [Part V](writing/treatise/part-v-knowledge-time-and-freedom.md).
- [Future process article](writing/future-article-on-ai-collaboration.md): notes for a personal-web article on authorship, judgment, and AI collaboration in this project.
- [Accessible track](method/accessible-track.md): the parallel register that states the same beliefs in ordinary first-person language, with its [question bank](writing/accessible/banco-de-preguntas.md) and [answers in Spanish](writing/accessible/preguntas-en-lenguaje-comun.md).
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
              └── accessible/  plain-language answers and question bank
```

Research notes may be written in Spanish or English. The first treatise draft is planned in English; a Spanish edition can be developed in parallel later. The accessible register is written in Spanish first because it answers the questions people ask the author in conversation.

## Current state in one sentence

The leading model provisionally posits a necessary, underived, power-structured agent that actualizes a constitutively admissible generative structure without material input, within which ordinary causes, genuine creaturely agency at both the token and the diachronic level, and possible divine interventions jointly—but asymmetrically—constitute one actual history known without temporal acquisition; the agent's established profile is oriented toward the freedom of conscious subjects and truthful relation with them, while its orientation toward what they feel, and the personal continuation that closing that gap would require, are held as faith with stated content. S38 gives created possibility a power-independent F2 criterion and S39 prefers conditional modal ultimity abductively, while the directness bridge to creative plenitude remains the next premise.

## Rebuilding the corpus

The raw dump is never modified by the generator.

```powershell
node scripts/build-corpus.mjs
node scripts/build-corpus.mjs --check
```

The check expects 24 user turns, 24 assistant turns, complete coverage through the final non-empty source line, and byte-for-byte agreement between generated files and the verified turn map.

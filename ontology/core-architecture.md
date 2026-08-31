# Core Causal and Modal Architecture

This document states the cleanest present model. It is a formalization target, not yet a finished formal theory.

## Primitives under consideration

| Symbol | Working role | Status |
| --- | --- | --- |
| $G$ | Necessary agent/cosmic ground | provisional/preferred |
| $S=\langle L,C,B,O\rangle$ | Generative structure: laws, constants, boundary conditions, ontological primitives | preferred |
| $\mathcal H(S)$ | Histories or continuations compatible with $S$ | open ontology |
| $A_i$ | Created agents with possible originating causal powers | preferred |
| $I_j$ | Divine interventions classified by causal target | provisional |
| $H^*$ | Actual complete history | required by the current notation; semantics open |
| $K_G$ | Divine knowledge relation | accepted only at the ACO minimum |

The intended dependency sketch is:

```text
necessary agent G
       │ actualizes
       ▼
generative structure S ── constrains/enables ──► possible continuations
       │                                             │
       ├── ordinary physical causation               ├── created agent acts Aᵢ
       └── possible interventions Iⱼ                  └── branch actualization
                         │
                         ▼
                    actual history H*
                         │ truthmaking / indexing
                         ▼
                actuality-complete knowledge K_G(H*)
```

The arrows name different relations and must not be collapsed into one generic “cause.” In particular, knowledge is not placed upstream as an efficient cause of creaturely action.

## Candidate axioms

These are deliberately numbered as candidates until the formal semantics is selected.

1. **Necessary ground:** ​\(\Box E(G)\).
2. **Contingent actualization:** for at least one admissible $S$, $G$ can actualize $S$ without $S$ following by mechanical necessity from $G$.
3. **Generativity:** $S$ constrains a non-empty family of histories or continuations.
4. **Non-exhaustive structural determination:** if libertarian agents occur, $S \not\Rightarrow H^*$ by deterministic entailment alone.
5. **Originating agency:** some $A_i$ can settle among genuinely available continuations without the settling reducing to prior event causation or randomness.
6. **Asymmetric co-production:** $H^*$ depends on $G$'s actualization of the framework and can also contain originating creaturely acts; these contributions are ontologically unequal.
7. **ACO:** for every truth $p$ about complete actual reality, $K_G(p)$, with no temporal acquisition required.
8. **Epistemic non-causation:** $K_G(p)$ alone is not an efficient cause or sufficient causal condition of $p$.
9. **Optional modal extension:** knowledge of possibilities may extend ACO but is not entailed until the ontology of possibility is specified.

## The unresolved semantic fork

The conversation approached two nearby but non-identical solutions to foreknowledge and freedom.

### E — Eternalist complete-history model

All events of $H^*$ tenselessly exist. A proposition about Alice's act is true because that act is part of $H^*$; $G$ knows it without temporal acquisition. Libertarian alternatives remain metaphysically possible even though one is actual.

This makes $K_G(H^*)$ straightforward, but “the proposition is not true yet” can only mean *not settled or accessible relative to an earlier creaturely perspective*. It cannot mean that no tenseless fact exists.

### F — Open-future, frame-indexed timeless model

At a creaturely frame before Alice acts, no future branch has a determinate truth value. Alice's act supplies the truthmaker. An atemporal $G$ knows the full indexed family of frames and the truths relative to each frame without learning sequentially.

This preserves the author's strong “not true yet” intuition, but it requires explicit frame-relative truth conditions. It cannot simply reuse a single completed block $H^*$ without explanation.

### Why this matters

The previous conversation sometimes moved from E to F as if they were one model. They may be compatible in a richer semantics, but that compatibility is a theorem to seek, not a premise to assume. The immediate task is to define both models and test:

- bivalence and truthmakers for future contingents;
- alternative possibilities and the fixity argument;
- the domain of ACO;
- whether atemporality means one perspective, all frames, or a relation outside temporal indexing;
- whether intervention changes a history or is constitutive of the only actual history.

This issue is supported by the author's preference for non-existent future truths and atemporality in [U18](../corpus/transcript.md#user--u18)–[U23](../corpus/transcript.md#user--u23). The late summaries correctly retain it as unresolved; that open status is itself adopted under the default-acceptance rule.

## Intervention taxonomy to formalize

| Type | Target | Preliminary autonomy effect |
| --- | --- | --- |
| $I_0$ structural actualization | $S$ itself | establishes the arena; indirect effects |
| $I_B$ boundary intervention | boundary/initial condition $B$ | may change circumstances |
| $I_L$ law-level intervention | $L \mapsto L'$ | may change available histories |
| $I_X$ state intervention | $X_t \mapsto X'_t$ | no direct loss of agency required |
| $I_C$ agent-directed intervention | circumstances $C \mapsto C'$ | influences without necessarily settling choice |
| $I_A$ agency intervention | settles or removes an agent's choice | autonomy lost for that act |

“Creation as intervention zero” originates in [U20](../corpus/transcript.md#user--u20). The miracle definition presently attaches most naturally to $I_L$, $I_X$, or other events whose sufficient causes exceed ordinary secondary causation.

## Formal deliverable next

Construct two small Kripke/branching-time models—E and F—over the same causal graph. Define `Possible`, `Actual`, `Settled`, `Free`, `Causes`, `Knows`, and `Intervenes`. Then prove or refute the compatibility set:

\[
\{\Box E(G),\ Atemporal(G),\ ACO(G),\ Free(A),\ K_G(Act(A)),\neg Causes(K_G(Act(A)),Act(A))\}.
\]

Only after this comparison should one model be promoted to the ledger.

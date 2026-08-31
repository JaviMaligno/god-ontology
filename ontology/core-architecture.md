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

## Preferred temporal semantics: E+

The original conversation approached two nearby but non-identical solutions to foreknowledge and freedom without consistently separating them. [Session S01](../sessions/2026-08-31-eternalism-and-indexing.md) clarifies that complete-history eternalism is the preferred architecture.

### Agent-causal eternalism

All events of $H^*$ tenselessly exist. A proposition about Alice's act is true because that act is part of $H^*$; $G$ knows it without temporal acquisition. Libertarian alternatives remain metaphysically possible even though one is actual.

This makes $K_G(H^*)$ straightforward. “The proposition is not true yet” now has a temporal or perspectival reading: relative to Alice at an earlier time, the act has not occurred and is not available to her. It does not normally mean that the tenseless proposition lacks a truth value.

The knowledge relation is **actuality-indexed**: it ranges over the truths of $H^*$. This must be distinguished from temporal indexing of events and perspectival indexing of creaturely knowledge.

### Diagnostic alternative: F

At a creaturely frame before Alice acts, no future branch has a determinate truth value. Alice's act supplies the truthmaker. An atemporal $G$ knows the full indexed family of frames and the truths relative to each frame without learning sequentially.

This preserves a literal, alethic reading of “not true yet,” but it requires explicit frame-relative truth conditions. It cannot simply reuse a single completed block $H^*$ without explanation. It remains a comparison model rather than a co-primary account.

### Why this matters

The immediate task is to formalize E+ and test:

- bivalence and truthmakers for future contingents;
- alternative possibilities and the fixity argument;
- the domain of ACO;
- how actuality indexing relates to temporal and creature-perspectival indexing;
- whether intervention changes a history or is constitutive of the only actual history.

F should be introduced only where its different truth conditions clarify a real burden in E+. The project does not need recurrent comparison with Molinism or any other named theory once provenance and the relevant difference are recorded.

## Internal time and external atemporal knowledge

The initial E+ formalization distinguishes four claims that the word `open` can conceal:

| Kind of openness | Minimal meaning | E+ working position |
| --- | --- | --- |
| Epistemic | At $t_0$, Alice does not know which act she will perform at $t_1$ | compatible, but insufficient for freedom |
| Causal | The prior creaturely state and laws do not sufficiently cause Alice's act | preferred |
| Modal | More than one continuation sharing the relevant causal past is genuinely possible | preferred; grounding pending |
| Alethic | The proposition about Alice's future act has no determinate truth value before the act | not required by E+; characteristic of F |

The internal/external distinction therefore does not by itself establish freedom. Its role is to block an equivocation: being tenselessly true in $H^*$ does not entail being causally determined by the temporal past. Causal underdetermination and agent causation carry the positive account of freedom.

Let $h \equiv_{<t} h'$ mean that $h$ and $h'$ share the same relevant creaturely causal history before $t$, including $S$, without requiring the same atemporal divine knowledge-content. Then a first model of live alternatives is:

\[
Alt(A,t,h)=\{h'\in\mathcal H(S):h'\equiv_{<t}h\text{ and }Act(A,t,h')\neq Act(A,t,h)\}.
\]

A candidate freedom condition requires that $A$ originates the actual act, that $Alt(A,t,H^*)$ is non-empty, and that no sufficient prior event-cause settles the act. This is stronger than Alice's ignorance of the outcome.

For propositions about actuality, the minimal ACO semantics is:

\[
K_G^{h}(p)\quad\text{iff}\quad h\vDash p.
\]

This is a semantic constraint rather than yet a theory of the cognitive mechanism. It separates two modal claims:

- the capacity or rule of complete knowledge may be necessary and invariant;
- the content known can be contingent and covary with the actual history.

Thus, if $H^*\vDash Act(A,a,t)$, then $K_G^{H^*}(Act(A,a,t))$. In an admissible $h'$ where Alice instead originates $b$, $K_G^{h'}(Act(A,b,t))$. Atemporality entails no updating within either history; it does not by itself entail that the same contingent content occurs in every possible history.

The main fixity objection can now be stated precisely: is it legitimate for the accessibility relation used in `could have done otherwise` to vary divine knowledge-content, or must that content be held fixed? E+ proposes covariance grounded in the creaturely truthmaker, but the direction and coherence of this non-temporal dependence still require defence.

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

Extend the initial E+ scaffold in [Session S02](../sessions/2026-08-31-internal-time-and-atemporal-knowledge.md). Define `Possible`, `Actual`, `CausallySettledAt`, `Free`, `Causes`, `Grounds`, `Knows`, and `Intervenes`. Then prove or refute the compatibility set:

\[
\{\Box E(G),\ Atemporal(G),\ ACO(G),\ Free(A),\ K_G(Act(A)),\neg Causes(K_G(Act(A)),Act(A))\}.
\]

Use F as a controlled contrast when specifying `Settled`, future truth, and the epistemic domain of $G$.

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
9. **Modal complement:** $G$ knows the relevant possibilities and modal structure together with actuality; this goes beyond the definition of ACO, and its exact domain depends on the ontology of possibility.

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

The biconditional expresses logical and grounding dependence, not temporal succession. It is a semantic constraint rather than yet a theory of the cognitive mechanism. It separates two modal claims:

- the capacity or rule of complete knowledge may be necessary and invariant;
- the content known can be contingent and covary with the actual history.

The author's actual-marker proposal can be represented by a pointed modal structure:

\[
\mathfrak M=\langle\mathcal H(S),R,\alpha\rangle,
\]

where $R$ represents admissible alternatives and $\alpha\in\mathcal H(S)$ is the history marked as actual. Total divine knowledge includes together the modal facts of $\mathcal H(S)$ and $R$, and the actual facts indexed by $\alpha$. Knowledge of the actual therefore does not displace knowledge of the possible.

Histories $h_A$ and $h_B$ are not stages through which either reality or divine cognition passes. They belong to alternative pointed evaluations. In one, $\alpha=h_A$ and Alice's act $A$ is actual; in the other, $\alpha=h_B$ and $B$ is actual. The unpointed modal structure can remain fixed while the actual index differs. In each evaluation divine knowledge is total and atemporal.

This closes the basic semantic compatibility claim provisionally. A fixity argument cannot hold the actuality-indexed fact $K_G(A)$ fixed while replacing $A$ with $B$, because it would be holding fixed part of the very actual outcome under variation.

## Ground of actuality

The actual marker is not a further entity, event, or divine choice added to a completed history. It designates the complete history that obtains:

\[
Actual(h)\quad\text{iff}\quad Obtains(h),
\qquad
\alpha:=\iota h\,Actual(h).
\]

The explanatory order is non-temporal:

\[
ActualizesStructure(G,S)
\]

\[
S+OrdinaryCauses+AgentOrigins+DivineContributions
\xrightarrow{\text{grounds}} H^*
\]

\[
p\in H^*
\xrightarrow{\text{grounds}} True(p)
\xrightarrow{\text{grounds}} K_G(p).
\]

$G$ need not know a libertarian choice as actual with metaphysical priority over the history containing it, because before that grounding relation there is no actual-choice truth to know. This is not ignorance or delayed learning. ACO exhausts every truth that obtains, and the complete relation among $H^*$, its truths, and divine knowledge is atemporal.

The observational metaphor is acceptable if read as exhaustive epistemic access to what obtains. It must not suggest sensory reception, temporal discovery, or causal production of the observed fact.

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

The semantic compatibility set and the ground of the actual marker are provisionally closed in [Session S02](../sessions/2026-08-31-internal-time-and-atemporal-knowledge.md) and [S03](../sessions/2026-08-31-actuality-and-coproduction.md). The next model must distinguish `GroundsExistence(G,x)`, `ActualizesStructure(G,S)`, `Constrains(S,e)`, `EventCauses(e_1,e_2)`, `Originates(A,a,t)`, `PartOf(a,H^*)`, and `Intervenes(G,x)`.

The goal is not another foreknowledge defence. It is an account of asymmetric co-production: $G$ grounds the existence of the arena and powers; $S$ constrains admissible evolution; ordinary causes produce later events; agents originate some acts; and any intervention has its own explicit causal target. These roles jointly determine the content of $H^*$ without becoming ontologically symmetrical.

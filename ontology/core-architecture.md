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

## Causal-role decomposition

Asymmetric co-production requires typed relations rather than one unrestricted notion of grounding:

| Relation | Role |
| --- | --- |
| $GroundsExistence(G,x)$ | $G$ explains the existence of a created entity or arena |
| $ActualizesStructure(G,S)$ | $G$ makes the generative structure concrete |
| $Constrains(S,e)$ | $S$ delimits which events or continuations are admissible |
| $Enables(S,A)$ | $S$ provides conditions under which an agent can exercise its powers |
| $EventCauses(e_1,e_2)$ | an event produces another event through ordinary causation |
| $Originates(A,a)$ | agent $A$ is the irreducible source of act $a$ |
| $Intervenes(G,x)$ | $G$ makes an additional causal contribution with target $x$ |
| $PartOf(e,H^*)$ | event $e$ belongs to the obtained complete history |

A schematic constitution claim can therefore be written:

\[
ConstitutedBy(H^*;S,\mathbf a^*,\mathbf i^*,\mathbf n^*),
\]

where $\mathbf a^*$ contains agent-originated acts, $\mathbf i^*$ any divine interventions, and $\mathbf n^*$ any non-agentive contingencies eventually admitted. This notation states dependence on heterogeneous contributions; it does not posit a deterministic function evaluated or selected by $G$.

The crucial non-entailments are:

\[
ActualizesStructure(G,S)\not\models Obtains(H^*)
\quad\text{when}\quad |\mathcal H(S)|>1,
\]

and

\[
GroundsExistence(G,A)\land Originates(A,a)
\not\Rightarrow Originates(G,a).
\]

Existential dependence and originating authorship are different relations, so unrestricted transitivity across them is invalid. $G$ can be necessary for the existence of Alice and her power while Alice remains the contrastive explanation of why $H^*$ contains $a$ rather than an available alternative $b$.

Eternalist completeness adds no contradiction here. A complete block can depend for its existence on $G$ while having contents whose contrastive sources include created agents. Completeness of the object does not entail uniqueness of its source relation.

## Intervention ontology

In E+, an intervention is a divine-originating causal contribution that is part of $H^*$, not a revision of an already complete history. Its origin need not stand at an earlier divine time, while its manifestation, target, and creaturely effects can be located at $t$:

\[
I_j=\langle G,\tau,x,m,e_t\rangle,
\]

where $\tau$ is the target type, $x$ the particular target, $m$ the mode of contribution, and $e_t$ its temporal manifestation.

| Type | Target | Preliminary autonomy effect |
| --- | --- | --- |
| $I_0$ structural actualization | existence and $S$ itself | establishes the arena and enables agency |
| $I_B$ boundary intervention | boundary or initial condition $B$ | configures circumstances |
| $I_L$ law-level intervention | $L\mapsto L'$ or a local nomic exception | changes admissible evolution |
| $I_X$ state intervention | physical state $X_t\mapsto X'_t$ | changes the world without necessarily settling choice |
| $I_C$ circumstantial intervention | information, incentives, opportunities, or environment | influences deliberation |
| $I_P$ power intervention | capacities or dispositions of an agent | may restore, enlarge, restrict, or remove autonomy |
| $I_A$ act intervention | the originating act itself | removes autonomy for that act if $G$ settles it |

$I_0$, creation as intervention zero, is a limiting case inherited from [U20](../corpus/transcript.md#user--u20). Strictly, it constitutes the causal order rather than intervening within an antecedent order.

For an intervention already included among the relevant circumstances, freedom requires:

\[
Free(A,a,t\mid I)
\Rightarrow
Originates(A,a,t)
\land |Alt_I(A,t)|>1
\land\neg SufficientCause(I,a).
\]

The intervention may alter the field of possibilities or influence deliberation without removing freedom. Autonomy for the act is lost when the intervention sufficiently causes the outcome, eliminates every relevant alternative, or replaces the agent as originating source. Intervention on a power is not intrinsically autonomy-reducing: restoring an impaired capacity may enlarge agency.

This yields three functional outcomes:

1. the available field changes but retains genuine alternatives;
2. the agent is influenced within that field without a sufficient cause of the act;
3. the field is reduced to one relevant outcome, or the intervention sufficiently causes or settles the act.

The first two can preserve libertarian autonomy; the third does not preserve it for that act. Whether a non-determining influence reduces moral responsibility by degree is a later ethical question.

The miracle definition presently attaches most naturally to $I_L$, $I_X$, or any event whose sufficient causal explanation is not exhausted by ordinary secondary causation. Detectability and law violation are not required by the definition.

## Formal deliverable next

The semantic compatibility set, actual marker, and initial causal-role decomposition are provisionally closed in [Session S02](../sessions/2026-08-31-internal-time-and-atemporal-knowledge.md) and [S03](../sessions/2026-08-31-actuality-and-coproduction.md). The intervention ontology begins in [S04](../sessions/2026-08-31-intervention-ontology.md).

The structural test is conditional but direct. If $S$ includes genuine originating power and does not encode its exercise, then for some shared past $P_t$:

\[
h_a,h_b\in\mathcal H(S),\qquad
h_a\equiv_{<t}h_b,\qquad
Act(A,t,h_a)\neq Act(A,t,h_b).
\]

Therefore exact specification of laws, boundaries, and powers does not entail a unique complete history. Adding the actual output to $S$ would instead contradict the intended distinction between structure and agent contribution. This test is provisionally passed given C08.

The next intervention task is to specify how $I_C$ and $I_P$ affect the alternative set and sourcehood without treating every influence as determination. Then relate intervention to miracle and providence.

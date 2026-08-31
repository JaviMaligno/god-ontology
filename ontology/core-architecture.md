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
| $H^*$ | Actual complete created history | preferred E+ temporal object |
| $\mathfrak R^*$ | Complete actual reality, including $G$, $S$, $H^*$, interventions, and actual dependence relations | provisional ACO domain |
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
             actuality-complete knowledge K_G(\mathfrak R^*)
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
7. **ACO:** for every truth $p$ grounded in complete actual reality $\mathfrak R^*$, $K_G(p)$, with no temporal acquisition required.
8. **Epistemic non-causation:** $K_G(p)$ alone is not an efficient cause or sufficient causal condition of $p$.
9. **Modal complement:** $G$ knows the relevant possibilities and modal structure together with actuality; this goes beyond the definition of ACO, and its exact domain depends on the ontology of possibility.

## Preferred temporal semantics: E+

The original conversation approached two nearby but non-identical solutions to foreknowledge and freedom without consistently separating them. [Session S01](../sessions/2026-08-31-eternalism-and-indexing.md) clarifies that complete-history eternalism is the preferred architecture.

### Agent-causal eternalism

All events of $H^*$ tenselessly exist. A proposition about Alice's act is true because that act is part of $H^*$; $G$ knows it without temporal acquisition. Libertarian alternatives remain metaphysically possible even though one is actual.

This makes knowledge of the created-history component $K_G(H^*)$ straightforward. “The proposition is not true yet” now has a temporal or perspectival reading: relative to Alice at an earlier time, the act has not occurred and is not available to her. It does not normally mean that the tenseless proposition lacks a truth value.

The knowledge relation is **actuality-indexed**: ACO ranges over truths grounded in $\mathfrak R^*$, including all truths of $H^*$. This must be distinguished from temporal indexing of events and perspectival indexing of creaturely knowledge.

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

Restricted to propositions about one created history, the local ACO semantics is:

\[
K_G^{h}(p)\quad\text{iff}\quad h\vDash p.
\]

The global domain is:

\[
\mathfrak R^*=\langle G,S,H^*,\mathbf I^*,Rel^*\rangle,
\]

\[
ACO(G)\quad\text{iff}\quad
\forall p[True_{\mathfrak R^*}(p)\rightarrow K_G(p)].
\]

This includes actual truths about $G$, the created structure and history, interventions, agents, and obtaining relations of dependence. Modal truths are handled by the distinct modal complement.

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

In E+, an intervention is a divine-originating causal contribution that alters a temporal continuation and therefore can make a different complete history actual. It is also a constituent of the history in which it occurs. What E+ excludes is only a meta-temporal process in which God first possesses one actual block and later edits it.

\[
I_j=\langle G,\tau,x,m,e_t\rangle,
\]

where $\tau$ is the target type, $x$ the particular target, $m$ the mode of contribution, and $e_t$ its temporal manifestation.

For a shared temporal prefix $P_t$:

\[
H_I=P_t\oplus I_t\oplus C_I,
\qquad
H_0=P_t\oplus C_0,
\qquad
H_I\neq H_0.
\]

The corresponding pointed models are:

\[
\mathfrak M_I=\langle\mathcal H(S;I),R_I,\alpha_I\rangle,
\qquad
\mathfrak M_0=\langle\mathcal H(S;\varnothing),R_0,\alpha_0\rangle.
\]

Thus an intervention can change which history bears the actual marker in the relevant causal or counterfactual comparison. Law- and boundary-level interventions may also change the modal history-space and accessibility relation, not merely its actual member. None of these differences is a temporal update in divine knowledge.

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

Target and downstream relevance are independent axes:

\[
NonAgentTarget(I)\quad\text{iff}\quad
\tau\in\{B,L,X\}\land\neg AgentLevel(x),
\]

\[
AgentRelevant(I)\quad\text{iff}\quad
\exists A,t[D_A^I(t)\neq D_A^0(t)],
\]

\[
AgentNeutral(I)\quad\text{iff}\quad\neg AgentRelevant(I).
\]

A physical intervention may have an impersonal direct target and later affect agents indirectly. It may instead remain agent-neutral, affecting no agent's deliberative situation, powers, or acts. The ontology permits both: divine intervention is not defined by anthropocentric purpose. Reasons for agent-neutral intervention belong to the later accounts of providence and goodness.

The autonomy test needs two alternative sets:

\[
Feas_I(A,t)=\{a:a\text{ is physically executable after }I\},
\]

\[
Orig_I(A,t)=\{a:a\text{ remains originable by }A\text{ after }I\}.
\]

For an intervention already included among the relevant circumstances, freedom requires:

\[
Free(A,a,t\mid I)
\Rightarrow
Originates(A,a,t)
\land |Orig_I(A,t)|>1
\land\neg SufficientCause(I,a).
\]

Two autonomy-removing mechanisms must not be conflated:

\[
OptionClosure(I,A,t)\quad\text{iff}\quad |Feas_I(A,t)|=1,
\]

and

\[
SourceOverride(I,A,a,t)\quad\text{iff}\quad
|Feas_I(A,t)|>1
\land SufficientCause(I,a)
\land\neg Originates(A,a,t).
\]

The first removes executable alternatives. The second leaves multiple actions physically possible but determines which one the creature performs. They can occur separately or together, and either can remove freedom for one token act without erasing the agent's general powers.

The intervention may otherwise alter the field of possibilities or influence deliberation without removing freedom. Intervention on a power is not intrinsically autonomy-reducing: restoring an impaired capacity may enlarge agency.

This yields three functional outcomes:

1. the feasible and originable fields change but retain genuine alternatives;
2. the agent is influenced within those fields without a sufficient cause of the act;
3. feasible options are closed, or the agent's originating role is overridden.

The first two can preserve libertarian autonomy; the third does not preserve it for that act. Whether a non-determining influence reduces moral responsibility by degree is a later ethical question.

### Agency-preserving intervention

Represent the agent's deliberative situation as:

\[
D_A(t)=\langle E_t,R_t,F_t,\Pi_t\rangle,
\]

where $E_t$ is available information, $R_t$ reasons and incentives, $F_t$ feasible opportunities, and $\Pi_t$ agentive capacities. An intervention induces a transformation:

\[
T_I:D_A(t)\mapsto D_A^I(t).
\]

This gives useful subtypes:

| Subtype | Direct target |
| --- | --- |
| $I_C^E$ | information, evidence, or salience |
| $I_C^R$ | reasons, warnings, or incentives |
| $I_C^F$ | external opportunities and constraints |
| $I_P$ | cognitive, volitional, or bodily powers |

Their effects on agency are relational:

\[
F_0\subset F_I
\quad\text{means opportunity expansion},
\]

\[
1<|F_I|<|F_0|
\quad\text{means restriction without option closure},
\]

\[
Orig_0(A,t)\subset Orig_I(A,t)
\quad\text{means agency expansion or restoration}.
\]

Non-determining influence satisfies:

\[
Influences(I,A,a)
\land\neg SufficientCause(I,a)
\land Originates(A,a).
\]

The magnitude or visibility of an intervention does not order its effect on freedom. A large environmental change can preserve sourcehood, while a small direct alteration of a decision mechanism can override it. Likewise, control of deliberative context does not entail control of the resulting act. If the agent still originates the response, the intervention and response make distinct contributions to $H_I$.

Manipulation may affect authenticity or moral responsibility even when these minimal libertarian conditions survive. That question is recorded but deferred to the ethical layer.

### Intervention, miracle, and providence

These belong to different ontological levels:

- an **intervention** is a token divine causal contribution;
- a **miracle** is an event classified by its causal explanation;
- **providence** is a global relation among divine actualization, any interventions, and $H^*$.

Define ordinary explanatory exhaustion relative to the standing structure and secondary causes. Then:

\[
Miracle(e)\quad\text{iff}\quad
\exists I_j\neq I_0[
DirectlyContributes(I_j,e)
\land\neg OrdinaryExhaustive_S(e)
].
\]

Direct contribution means a non-derivative constituent of the event's sufficient production, not merely remote causal ancestry. This prevents every downstream effect of one intervention from becoming another miracle. Excluding $I_0$ also prevents the general dependence of creation on $G$ from making every event miraculous. Law violation, spectacle, and scientific detectability are not required. Direct $I_L$, $I_X$, $I_C^E$, or $I_P$ contributions may ground miracles when the stated conditions hold.

An event can instead be providential without being miraculous if its proximate sufficient causes remain ordinary and the divine role is structural or more remote. The global relation is schematically:

\[
Providence_G(H^*)=
\langle ActualizesStructure(G,S),\{I_j\},H^*\rangle.
\]

Providence adds no causal arrow. It organizes the relation of divine contributions to the coproduced history. Membership of a creaturely act in a providential history does not transfer its originating authorship to $G$.

A representative case check preserves the distinctions:

| Case | Miracle? | Agency status | Providence |
| --- | --- | --- | --- |
| event exhausted by $S$ and secondary causes | no | depends on event | included globally |
| remotely arranged ordinary encounter | no | may remain free | providential only |
| direct physical healing $I_X$ or restorative $I_P$ | yes at the directly affected event | may expand agency | included |
| direct revelation $I_C^E$ followed by a free response | revelation yes; response not thereby miraculous | response can be free | both included |
| source override $I_A$ | yes at the directly produced event | token act not free | included |

## Formal deliverable next

The semantic compatibility set, actual marker, and initial causal-role decomposition are provisionally closed in [Session S02](../sessions/2026-08-31-internal-time-and-atemporal-knowledge.md) and [S03](../sessions/2026-08-31-actuality-and-coproduction.md). The intervention ontology begins in [S04](../sessions/2026-08-31-intervention-ontology.md).

The structural test is conditional but direct. If $S$ includes genuine originating power and does not encode its exercise, then for some shared past $P_t$:

\[
h_a,h_b\in\mathcal H(S),\qquad
h_a\equiv_{<t}h_b,\qquad
Act(A,t,h_a)\neq Act(A,t,h_b).
\]

Therefore exact specification of laws, boundaries, and powers does not entail a unique complete history. Adding the actual output to $S$ would instead contradict the intended distinction between structure and agent contribution. This test is provisionally passed given C08.

Agency-preserving intervention and the intervention–miracle–providence relation are provisionally modeled in S04. The next step is a short case-based consistency check, followed by the minimum and optional extensions of ACO.

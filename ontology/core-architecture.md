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

### Modal complement of ACO

Model the modal domain without reifying complete possible histories:

\[
\mathcal M=\langle N,\Sigma_G,\mathcal H,\mathcal O\rangle,
\]

where $N$ contains necessary constraints, $\Sigma_G$ structures within $G$'s actualizing power, $\mathcal H(S)$ continuations admitted by a structure, and $\mathcal O(A,t,h)$ acts originable by an agent in a situation.

The intended grounds are:

\[
Possible(S)\quad\text{because}\quad CanActualize(G,S),
\]

\[
Possible(h\mid S)\quad\text{because}\quad Compatible(h,S),
\]

\[
Possible(a\mid A,t,h)\quad\text{because}\quad CanOriginate(A,a,t,h).
\]

Possible histories are representations of combined powers and constraints, not additional concrete blocks. Power-grounded modality remains irreducibly modal at its base: the actualizing and originating power predicates are not reduced to non-modal vocabulary.

Define:

\[
MKO(G)\quad\text{iff}\quad
G\text{ knows }N,\Sigma_G,\mathcal H(S),\mathcal O(A,t,h)
\text{ and their compossibility relations}.
\]

This includes conditional possibility,

\[
C\rightarrow\Diamond a,
\]

without requiring a selection counterfactual,

\[
C\Box\!\!\rightarrow a.
\]

The first states that $a$ could be originated under $C$; the second purports to state what a libertarian agent would choose and remains excluded pre-actually by C13.

ACO and MKO are conceptual components of one atemporal epistemic state. ACO knows actual powers as actual features of $\mathfrak R^*$; MKO makes explicit their possible manifestations and structures not actualized. $\Sigma_G$ is constrained by the powers eventually established for $G$ and must not presuppose omnipotence.

Partition the necessary constraints:

\[
N=N_L\cup N_M\cup N_G.
\]

$N_L$ contains logical and identity constraints constitutive of any coherent model. $N_M$ contains necessary consequences of specified mathematical structures, expressed as $Q\models p$ without deciding whether such structures are Platonic objects, divine concepts, or structural invariants. $N_G$ contains only necessities that follow from independently established essential features of $G$.

Modal knowledge of merely possible agents initially ranges over qualitative agent-types, power profiles, and relational configurations. It does not assign individual identities to non-actual persons without an identity-ground. Alternatives for an actual agent remain de re: the same actual Alice can originate $a$ or $b$ across admissible histories.

This instantiates a general epistemic principle:

\[
\neg\exists x\,Truthmaker(x,p)\quad\Rightarrow\quad
\text{failure to know }p\text{ is no limitation of omniscience}.
\]

The principle applies only where the ontology genuinely denies a truth to know; it is not a device for ignoring difficult but grounded truths.

## Unified logic of agentic choice

The project uses one core logic of genuine choice for the necessary agent and for created agents. Let $C_A^-$ contain every action-relevant condition held fixed for agent $A$ while excluding the token settling itself and its consequences. Let:

\[
\mathcal O_A(C_A^-)=\{a:CanOriginate(A,a,C_A^-)\}.
\]

Libertarian choice requires at least:

\[
|\mathcal O_A(C_A^-)|\geq 2,
\]

\[
C_A^-\not\models Settles(A,a)
\quad\text{and}\quad
C_A^-\not\models Settles(A,b),
\]

for distinct live options $a$ and $b$, together with:

\[
Originates(A,a)\land ForReasons(A,a,R_A).
\]

Reasons can delimit, support, rank, attract, inhibit, or render an act intelligible without sufficiently producing the token selection:

\[
Supports(R_A,a)\not\models Settles(A,a).
\]

Psychological features such as character, attention, salience, emotion, habit, and deliberative capacity can enter $C_A^-$ and reshape $\mathcal O_A(C_A^-)$ or the comparative force of reasons. They do not count as a free choice's complete sufficient cause while more than one option remains originable.

Indeterminism alone is insufficient. A probability distribution over outcomes can represent uncertainty or dispositional tendencies, but it does not by itself supply authorship of the realized act. The positive ground is agentive sourcehood: the conscious agent exercises an originating power and thereby settles which admissible option becomes actual. This settling is a modal and causal primitive in the present architecture.

The common schema applies differently:

| Feature | Necessary agent $G$ | Created temporal agent $A_i$ |
| --- | --- | --- |
| Existence | necessary | contingent and dependent |
| Choice context | atemporal reasons, powers, and possible structures | temporally formed capacities, reasons, circumstances, and causal past |
| Deliberation | no temporal sequence is required | ordinarily unfolds through internal time |
| Settling | contingent exercise of an invariant agentive power | contingent exercise within an actualized structure |
| Dependence | not derivative within the model | existence and powers depend on $G$ and $S$ |

These differences qualify the agent and its context rather than introduce a second logic of choice. In particular:

\[
\Box E(G)\not\models
\bigl(Settles(G,S_1)\rightarrow\Box Settles(G,S_1)\bigr).
\]

Necessary existence, and even necessary possession of an agentive power, do not entail necessary exercise of that power in one unique way.

The architecture therefore accepts explanatory reasons without accepting a universal demand for antecedently sufficient, contrastively necessitating reasons. The explanation of a free act has the form “$A$ settled $a$ for $R_A$”; its terminal contrastive source is $A$'s exercise of agency. Requiring some condition prior in grounding order that already entails $a$ would remove the originating role the account is designed to examine.

### Conscious sourcehood and reasons-responsiveness

The project distinguishes four roles that must not be packed into one predicate:

\[
PCon(A,t),\quad ACon(A,p,t),\quad SCon(A,t),\quad AgCon(A,a,t).
\]

$PCon$ is phenomenal subjectivity or what the experience is like for $A$; $ACon$ is a content's availability for reasoning and flexible action-guidance; $SCon$ is at least minimal self-representation; and $AgCon$ is the participation of phenomenal and practically accessible contents in the subject's originating exercise. These are working functional distinctions, not yet a theory of how consciousness is metaphysically realized.

Phenomenal consciousness is causally neutral by definition. A conscious experience may therefore be sufficiently settled by its antecedents:

\[
PCon(A,t)\land C_A^-\models HasExperience(A,c,t).
\]

This does not entail that every act of $A$ is determined. Freedom is assessed token by token. In a reason-guided free act, the phenomenal subject has some action-guiding content accessibly present and originates the act under live alternatives:

\[
Free(A,a,t)\Rightarrow
PCon(A,t)\land \exists p\,ACon(A,p,t)\land Originates(A,a,t)
\land |\mathcal O_A(C_A^-)|\geq2
\land C_A^-\not\models Settles(A,a,t).
\]

$AgCon$ records the causal and practical participation of consciousness; $Originates$, rather than consciousness alone, carries the irreducible sourcehood claim. This keeps the account from defining freedom into phenomenal consciousness while excluding a merely epiphenomenal witness from the preferred model of free action.

The intervention model already represents a temporal agent's deliberative situation as:

\[
D_A(t)=\langle E_t,R_t,F_t,\Pi_t\rangle,
\]

where the components are available information, reasons and incentives, feasible opportunities, and agentive capacities. Add $\Phi_A(t)$, the subset of practically conscious contents available to the subject for guiding action, and $M_A(a,t)\subseteq R_t$, the considerations the agent takes as motivating reasons in acting.

Practical consciousness does not require exhaustive introspective access. An agent can be influenced by character, emotion, habit, bodily state, and unconscious processing while consciously apprehending only part of the action-relevant situation. Minimal conscious sourcehood for a reason-guided act requires:

\[
Subject(A)
\land a\in\mathcal O_A(C_A^-)
\land M_A(a,t)\cap\Phi_A(t)\neq\varnothing
\land Originates(A,a,t).
\]

This combines four roles:

1. **subject unity:** experiences, capacities, and the act belong to one acting subject;
2. **practical availability:** at least some relevant options or considerations are present for action-guidance;
3. **motivational appropriation:** the agent acts for considerations it takes as reasons;
4. **settling efficacy:** the exercise of agency makes a causal contribution to which option becomes actual.

Consciousness alone is not sufficient for freedom: an aware but compelled or sufficiently caused movement can remain unfree. Consciousness is also not epiphenomenal in a free act, because the subject's settling must contribute causally rather than merely accompany a decision produced elsewhere.

Taking a consideration as a reason is an aspect of the agent's act, not necessarily a prior choice requiring another inner chooser. The ontology therefore attributes settling to the whole agent:

\[
Settles(A,a),
\]

not to a homunculus, a detachable faculty, or “consciousness” treated as a second agent inside $A$.

Reasons-responsiveness is a capacity to apprehend considerations, assess their relevance, and act for them across varying situations. It is not a single-valued policy from reason profiles to actions. Its modal analysis uses what the agent can take as a reason and can originate; it does not restore pre-actual truths about what the agent would select.

This also separates freedom from rational quality. Sourcehood and alternatives determine whether an act is free in the minimal libertarian sense. The fit between motivating reasons, evidence, values, and the act determines how rational, coherent, or responsible it is. A free act can therefore be weakly reasoned, mistaken, akratic, or impulsive.

A stochastic or neural description may realize, constrain, or predict aspects of $D_A(t)$ without automatically replacing the agent:

\[
Realizes(n,\Pi_A)\not\models SufficientCause(n,a).
\]

If the complete event-level base sufficiently settles $a$ independently of the agent's exercise, the token act fails this model's freedom condition. If neural processes realize the agent's capacities without independently settling the outcome, they need not be competing causes. The choice among reductive, non-reductive, dual-aspect, or substance-based accounts of mind remains open.

For $G$, replace the temporal $D_A(t)$ with an atemporal field of comprehended possibilities and reasons. The common functions remain subject unity, apprehension, reason-guidance, and efficacious settling; temporal deliberation, memory, emotion, habit, and bodily realization belong only to some created implementations.

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

## The creation bridge

The architecture assigns $G$ the power to actualize $S$, but power alone explains neither the ontological transition to created reality nor the contingent exercise of that power. The creation bridge therefore has two distinct axes:

| Axis | Central question | Current status |
| --- | --- | --- |
| Ontological production | By what positive relation do material substances and created structure arise from or depend on $G$? | OEC preferred at F1; PMC remains the decisive open objection |
| Creative reason | Why does a necessary agent create anything, and why this kind of generative structure? | Agency-oriented plural reason profile preferred at F1 |

The required distinctions are:

\[
CanCreate(G)\neq HasReason(G,\mathcal C)\neq Good(\mathcal C).
\]

These predicates may all apply, but none is defined by either of the others. In particular, a creative-reason account must remain consistent with the unified agentic logic:

\[
Reasons_G(\mathcal C)\not\Rightarrow
\Box Actualizes(G,\mathcal C).
\]

The production axis now prefers **originative existential causation** (OEC). Let $\mathcal C_0$ be the created ontological basis. $S$ supplies structural specification; $G$ originates a contentful act; and the immediate terminus is the existence of $\mathcal C_0$, not a new state of a prior material patient:

\[
C_G^-\not\Rightarrow_{\mathrm{causal}} Act_G(\mathcal C_0),
\qquad
Act_G(\mathcal C_0)
\Rightarrow_{\mathrm{causal}}
Exists(\mathcal C_0)\land Instantiates(\mathcal C_0,S).
\]

The act may therefore sufficiently produce its selected effect while no antecedent condition sufficiently settles the act. This applies the same agentic logic already used elsewhere rather than requiring the created domain to remain indeterminate after it has been chosen.

OEC adds positive causal roles to grounding: a source, an originating exercise, selected structural content, a numerically distinct effect, and the absence of a transformed material input. Grounding then describes the asymmetric dependence of the obtained effect; it is not a substitute word for production.

Mere type continuity between divine and created matter is not a productive relation. Token continuity would be substantive, but it yields an *ex deo* model in which creation is a partition, modification, expression, or ontological overlap of divine substance. That remains coherent but disfavored. The principal defeater for OEC is the still-open Principle of Material Causality:

\[
\Box PMC
\Rightarrow
\neg\Diamond OEC(G,\mathcal C_0,S).
\]

Ordinary material transformations do not by themselves establish PMC at this universal modal scope. No independent contradiction in OEC has yet been identified, so the result remains an abductive F1 preference rather than a demonstration.

The creative-reason axis uses three explanatory levels:

| Level | Preferred explanation |
| --- | --- |
| Creation rather than non-creation | actualization of finite otherness and contingent modes of existence |
| Generative agentic architecture | finite analogues of conscious sourcehood can contribute genuinely non-divine contrastive content |
| Exact $S^*$ | plural reasons establish eligibility and attraction; $G$ settles one structure without an antecedently sufficient choice function |

Let $Profile_M(S)$ be the modal and structural profile known through MKO. The eligible set is:

\[
\mathcal E_G=
\{S\in\Sigma_G:
Coherent(S)
\land Supported_G(Profile_M(S))
\land\neg Defeated_G(S)\}.
\]

The preferred account allows several equal, incomparable, or differently supported members:

\[
S^*\in\mathcal E_G
\land Settles(G,S^*;\mathcal E_G),
\qquad
\mathcal R_G(S^*)\not\Rightarrow
\Box Actualizes(G,S^*).
\]

Created autonomous agents are finite analogues rather than duplicates of $G$: they are temporal, dependent, limited, and embedded in $\mathcal C_0$, yet share the causal form of conscious reason-guided sourcehood. A fully scripted history would not realize their contrastive authorship, so this motive favors generative $S$ and asymmetric co-production.

Non-agentic reality remains expected. Shared regularity, information, persistent consequences, embodiment, and secondary causation can make situated agency possible and effective. A reason for some autonomy does not require every entity or every act to be autonomous, although it supplies a defeasible consideration against source-overriding intervention.

Reasons for $S$ initially range over $Profile_M(S)$ rather than pre-actual token choices. This preserves principle-guided creation, MKO, and C13. The exact choice terminates in reason-guided agentic settling; a later theory of goodness or perfect rationality may reopen whether a unique optimum or requiring reason exists.

This profile is offered as a satisfying intelligibility model, not as knowledge of $G$'s ultimate actual motive. It neither requires an optimal world nor makes creation necessary. Explanatory coverage can also be generative rather than atomistic:

\[
ReasonSupported(S^*)\land S^*\models f
\Rightarrow DerivativelyExplained(f).
\]

A physical feature that follows from a reason-supported structure need not receive an additional independent creative reason. Stochastic, agent-originated, and intervention-dependent outcomes require their own typed versions of this relation. Derivative explanation also does not yet establish that every foreseeable consequence is morally justified; that belongs to the goodness branch.

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

## Unity as a prerequisite for presence

Let $\mathcal C$ be the total contingent order. The two relevant claims are:

\[
U_G\quad\text{iff}\quad
\exists!g\,UltimateGround(g,\mathcal C),
\]

\[
U_D\quad\text{iff}\quad
\exists!g\,[Necessary(g)\land Agent(g)\land UltimateGround(g,\mathcal C)].
\]

$U_G$ is ground uniqueness. $U_D$ is divine-agent uniqueness. Given C04–C05, $U_G$ supports $U_D$. Neither thesis says that only one necessary truth, property, abstract object, or derivative necessary being exists. That unrestricted claim is not needed for monotheism in this architecture.

### Standard routes and their local force

The inherited “necessary + simple → unique” route compresses several additional premises. Aquinas offers three arguments: individuation through divine simplicity, exhaustive perfection, and the unity of the world's order. Their roles here differ:

| Route | Premises not yet available | Local result |
| --- | --- | --- |
| Simplicity and individuation | God is identical with the divine nature or existence in the strong classical sense | Conditional route only; minimal non-composition does not by itself exclude two primitively distinct simple beings |
| Exhaustive perfection | God contains the whole perfection of being | Conditional route only; perfection cannot enter through rejected move R03 |
| Unity of cosmic order | The contingent order is one integrated causal and nomic system | Abductive support for unity of its ultimate source |
| Total causality or sovereignty | Every created entity and arena depends existentially on the divine ground | Strong support for one total ground, provided existential dependence is not confused with sufficient determination of every free act |
| Qualified omnipotence | Distinct ultimate agents have independently maximal action domains | Strong support for one ultimate agent unless necessary concordance is independently grounded |

### Plurality stress test

A plural ultimate model has three principal forms:

1. **Partitioned grounding:** each $G_i$ grounds only a suborder $\mathcal C_i$. Any real cross-domain laws, relations, or coordination then require a further ground. Without them, the plurality does not ground one integrated $\mathcal C$.
2. **Joint grounding:** $\{G_1,\ldots,G_n\}$ grounds $\mathcal C$ only collectively. The coordination or collective structure becomes an additional fundamental fact; if it performs the unifying explanatory work, the plurality as organized is closer to the ground than any member is.
3. **Redundant total grounding:** every $G_i$ grounds the whole $\mathcal C$. This adds explanatorily idle duplication and, when the agents possess contingent will and maximal power, requires either possible conflict or a primitive necessary concordance.

None of these descriptions is formally contradictory without further premises. Each adds a partition, coordination structure, redundancy, or modal harmony absent from the one-ground model. The cumulative inference is therefore abductive:

\[
U_G\quad\text{is preferred}.
\]

Conditional on C04–C05, the unique total ground is the necessary agent already developed by the project:

\[
U_G\land C04\land C05\;\Rightarrow\;U_D.
\]

$U_D$ is consequently preferred as well. Qualified omnipotence reinforces the result: a second independently maximal agent would either restrict the first agent's coherent action domain or require their possible wills to be necessarily coordinated. The former compromises maximality; the latter introduces a further modal constraint needing explanation. This is supporting pressure, not a premise-free proof.

This precedes omnipresence because presence is attributed per subject:

\[
\forall x\in\mathcal C\;PresentTo(g,x).
\]

The weaker coverage formula

\[
\forall x\in\mathcal C\;\exists g\;PresentTo(g,x)
\]

could be satisfied distributively by many limited beings. It establishes no individual's omnipresence. The unity pass must therefore identify the relevant $g$ before the project decides what $PresentTo$ means.

## Spatial mode and physical immateriality

Let $ST_{\mathcal C}$ be the spacetime of the contingent created order. Three claims must be distinguished:

1. $G$ is not circumscribed by or fundamentally constituted through a region of $ST_{\mathcal C}$;
2. $G$ is not constituted by the physical ontology governed by the created structure $S$;
3. $G$ has no fundamental spatial extension or container in any possible order.

The first two concern created spacetime and created matter. The third is absolute fundamental non-spatiality and carries a stronger modal burden.

Define $CircumscribedBy(x,\Sigma)$ as the relation in which $x$'s basic mode of existence is spatially bounded, extended, or individuated by spatial order $\Sigma$. This is stronger than a derivative relation of presence to a region. Its dependence-bearing content is explicit:

\[
CircumscribedBy(x,\Sigma)
\;\Rightarrow\;
ModeDepends(x,\Sigma).
\]

Given C73 and preferred $U_G$, grounding asymmetry supplies:

\[
UltimateGround(G,\mathcal C)
\land
ST_{\mathcal C}\subseteq\mathcal C
\;\Rightarrow\;
\neg ModeDepends(G,ST_{\mathcal C}).
\]

Therefore:

\[
\neg CircumscribedBy(G,ST_{\mathcal C}).
\]

The inference uses the asymmetry of ultimate grounding: if created spacetime constituted $G$'s extension, boundaries, or spatial individuation, then $G$ would depend in its basic mode of existence on part of the order for which it is the ultimate ground. A contingent derivative location relation does not create that problem. The model can later say that $G$ is immediately related to a region through grounding, knowledge, power, or action without treating the region as a container or constituent of $G$.

For this project, created-order materiality is the more precise thesis:

\[
Material_{\mathcal C}(x)
\;\Rightarrow\;
CircumscribedBy(x,ST_{\mathcal C})
\land
ConstitutedUnder(x,S_{\mathrm{phys}}).
\]

It follows conditionally that:

\[
\neg Material_{\mathcal C}(G).
\]

This is physical immateriality relative to the created order. It says that $G$ is not a body, field, or physical system constituted under the laws and ontology it actualizes.

This result carries a production burden. The architecture still needs to explain how a non-material substance grounds or produces material substances without assuming that ground and grounded must share a material substrate. A material-continuity alternative has four principal forms: $G$ as part of the created physical order; $G$ as uncreated matter of the same type as, but numerically distinct from, created matter; $G$ and creation as products of a prior necessary material substrate; or created matter as a modification or expression of $G$'s substance. The first reverses ultimacy. The same-type version preserves creator–creation distinction but must still explain new material instances and reconcile divine matter with fundamental non-spatiality. The shared-substrate version places something more basic than $G$. The modification version changes creation from actualization of something distinct into a monist or panentheist transformation. These costs favor physical immateriality provisionally but do not by themselves supply the missing cross-category grounding account.

Absolute fundamental non-spatiality is stronger:

\[
ASP_G\quad\text{iff}\quad
\neg\exists\Sigma\,CircumscribedBy(G,\Sigma).
\]

$ASP_G$ does not follow deductively from grounding created spacetime. A higher-dimensional arena, an uncreated spatial container, or intrinsic divine geometry remains describable. Each adds fundamental metric, topological, extended, or part-like structure. An external arena would either condition $G$ or require another unexplained necessary item; intrinsic geometry would add structure to $G$ without any current explanatory role. Since reason-guided agency, ACO, actualization, and intervention require no spatial organs, transmission, or movement, the project prefers $ASP_G$ abductively at F1.

Neither physical immateriality nor $ASP_G$ entails full divine simplicity. A non-spatial agent may still have distinct powers, reasons, modal capacities, or other metaphysical structure. The only result required for the next module is that divine presence cannot be analyzed as bodily distribution through created space.

## Power, exercise, and existential sovereignty

The power profile must distinguish capacities from their exercises:

| Capacity | Possible exercise |
| --- | --- |
| $CanActualize(G,S)$ | $ActualizesStructure(G,S^*)$ |
| $CanGround(G,x)$ | $GroundsExistence(G,x)$ |
| $CanEstablishEnablingStructure(G,S,A)$ | $ActualizesStructure(G,S)\land Enables(S,A)$ |
| $CanIntervene(G,I)$ | $Intervenes(G,I)$ in the actual history |

In every case:

\[
CanPerform(G,a)\not\Rightarrow Performs(G,a).
\]

The present model therefore permits extensive power with sparse exercise. In particular, the capacity to intervene does not imply continuous intervention.

Conditional on $G$ being the ultimate ground of the contingent order, adopt existential sovereignty:

\[
Created(x)\rightarrow DependsExistentially(x,G).
\]

This is a typed dependence claim. It does not imply that $G$ originates the qualitative content of every event or free act. A creature can supply the contrastive authorship of $a$ while the agent, its powers, and the created arena remain existentially dependent on $G$.

In E+, this dependence need not be a temporally repeated maintenance operation. The actualization of $S$ and its created arena can be one atemporal grounding relation to the complete created order:

\[
DependsExistentially(x,G)
\not\Rightarrow
\exists t\,RepeatedMaintenance(G,x,t).
\]

Call this **non-continuous global dependence**: the relation obtains across the created history without a sequence of divine acts that re-create each moment. Token interventions remain additional exercises rather than components of routine maintenance.

### Candidate qualified omnipotence

Do not define the power domain as whatever $G$ can do, because that would make omnipotence tautological. Let:

\[
\mathcal A_M(G)=
\{a:Coherent(a,N,E_G)\},
\]

where $N$ contains independently specified necessary constraints and $E_G$ contains only essential features of $G$ established elsewhere. Then:

\[
OMP_Q(G)\quad\text{iff}\quad
\forall a\in\mathcal A_M(G)\;CanPerform(G,a).
\]

$OMP_Q$ is qualified omnipotence: power to perform every action metaphysically coherent for the independently characterized agent. The qualification cannot be used to redescribe any discovered incapacity as part of $E_G$.

The domain excludes contradictory task descriptions. For example, sufficiently determining a creature's token act while preserving that same act as libertarian-originated is not one coherent action. $G$ may preserve the freedom, or may override it as allowed by C16 and C39; inability to realize both descriptions together is not a loss of power.

This candidate aligns power with the existing epistemic architecture. MKO includes complete knowledge of $\mathcal A_M(G)$ and the relevant capacities; ACO includes complete knowledge of which powers are actually exercised. Knowledge neither constitutes the power nor necessitates its exercise.

Current commitments establish actualizing power, existential sovereignty conditionally on C04–C05, and possible intervention. They support $OMP_Q$ as the preferred definition of omnipotence.

Its application to $G$ is supported abductively rather than demonstrated. A bounded-power alternative would add an ultimate limit $L_G$. No created reality can be the ultimate source of that limit on its own ground. A non-created external limiter or an essential internal limit remains coherent, but either requires independent motivation and the former would add another item to the fundamental ontology. In the absence of such motivation, maximal power unifies the established capacities with less brute boundary-setting. This favors C75 provisionally without importing a separate perfection premise, presupposing uniqueness, or pretending that ultimate grounding deductively entails omnipotence.

Strengthening this result requires more than additional notation. A later F2 pass must classify every candidate blocker as logical incoherence, a created constraint, an independently established internal feature of $G$, or a non-created external limit. Existential sovereignty excludes a created item as the ultimate limiter but does not by itself eliminate the latter two possibilities. That pass should also distinguish maximal power concerning the created order from unrestricted $OMP_Q$: the former may be supported even if an independently motivated coherent limit prevents the latter.

## Ontological omnipresence

Because $G$ is fundamentally non-spatial, presence cannot mean bodily extension or occupation of every created region. Define the actual created domain:

\[
D(\mathcal C^*)=
\{x:x\text{ is an actual entity, event, relation, or region admitted by the ontology of }\mathcal C^*\}.
\]

Presence is one immediate relation expressed in three typed dimensions:

\[
Present_O(G,x)
\quad\text{iff}\quad
GroundReach(G,x)
\land
EpistemicAccess(G,x)
\land
CausalAvailability(G,x).
\]

The dimensions are:

1. $GroundReach(G,x)$: either $x$ depends existentially on $G$, or the arena and powers enabling $x$ do. For an agent-originated act, this does not assign its contrastive content to $G$.
2. $EpistemicAccess(G,x)$: $G$ knows the complete actuality of $x$ without sensory reception, created signals, or inference.
3. $CausalAvailability(G,x)$: every metaphysically coherent direct divine action concerning $x$ lies within $G$'s power without requiring a created intermediary. This is a capacity and need not be exercised.

No dimension alone expresses the intended presence. Complete knowledge could remain remote observation; power can be exercised through intermediaries; and an impersonal ground lacks agentive access. Their conjunction is not an imported divine attribute: it integrates existential sovereignty, ACO, qualified power, and the direct-contribution relation already used by the intervention model.

Actual ontological omnipresence is:

\[
OP_A(G)
\quad\text{iff}\quad
\forall x\in D(\mathcal C^*)\;Present_O(G,x).
\]

This is preferred conditionally on C11, C73, C75, C84, and C86. It applies across the complete E+ history without distributing parts of $G$ across places or times.

The domain treatment is ontology-neutral. If empty spacetime regions are entities or structural relata, they belong to $D(\mathcal C^*)$ because their existence, facts, and causal accessibility fall under the three dimensions. If an empty region is merely the absence of occupants, no additional entity is required; $G$ still knows the absence and can act with respect to that spatial structure.

The corresponding modal capacity is:

\[
OP_M(G)
\quad\text{iff}\quad
\Box\forall\mathcal C
\left(
Actualizes(G,\mathcal C)
\rightarrow
\forall x\in D(\mathcal C)\;Present_O(G,x)
\right).
\]

$OP_M$ does not make $G$ present to non-actual possibilia. It says that in any created order $G$ actualizes, the same grounding, epistemic, and causal architecture would make $G$ present to everything actual in that order.

For a conscious subject, personal presence separates into further levels:

| Level | Relation |
| --- | --- |
| P1 | direct personal availability |
| P2 | exercised divine regard, address, or response |
| P3 | reciprocal or shared attention |
| P4 | communion, love, or union |

Minimal personal availability can be represented by:

\[
UPA(G)\quad\text{iff}\quad
\forall A\forall t[Subject(A,t)\rightarrow Avail_P(G,A,t)].
\]

$Avail_P$ combines subject-sensitive epistemic access with the coherent capacity for direct intentional address or response. It is preferred conditionally because $G$ is already modeled as a conscious agent, ACO includes every actual truth about $A$, and $Present_O$ supplies direct causal availability without a spatial intermediary.

This capacity does not entail its universal exercise. Actual regard belongs to divine will and providence; reciprocal attention also requires a creaturely cognitive contribution; loving communion adds evaluative content. Significant personal presence can therefore be asymmetrically co-produced while ontological presence remains universal. Whether ACO's propositional form exhausts acquaintance, empathy, phenomenal access, or irreducible second-person knowledge remains open.

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

The agency-oriented creative rationale now supplies a defeasible intervention presumption. If two interventions adequately serve the same relevant aim, and one preserves more originable alternatives, capacities, or sourcehood without another known defeating cost, that intervention is favored *ceteris paribus*. This is a reason relation, not a prohibition or a necessitating decision rule. Intervention can enhance, restore, preserve, reduce, or remove agency; nonintervention therefore has no automatic priority.

The comparison can be represented without forcing its dimensions into a scalar:

\[
Impact_A(I,A,t)=
\langle\Delta Feas_I,\Delta Orig_I,\Delta Capacity_I,SourceStatus_I\rangle.
\]

This local model leaves a diachronic problem open. Repeated context control may preserve token alternatives while engineering the development, salience, commitments, and long-run authorship of the subject. Later F2 work must therefore test an **agency ecology** in addition to token-act autonomy.

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

After the creative-reason bridge, the fuller agency-oriented schema is:

\[
Prov_A=\langle OEC(G,\mathcal C_0,S^*),\mathcal R_G,\mathbf I^*,H^*\rangle.
\]

This is **qualified agency-respecting providence**: $G$ retains the power to intervene and even to override sourcehood, while the rationale for created sourcehood normally counts against its unnecessary replacement. Providence can be responsive to an actual creaturely condition without temporal learning: the condition, response, and their relation are together constituents of $H^*$ and objects of ACO. The exact grounding relation and any self-consistency constraints remain an F2 problem.

A representative case check preserves the distinctions:

| Case | Miracle? | Agency status | Providence |
| --- | --- | --- | --- |
| event exhausted by $S$ and secondary causes | no | depends on event | included globally |
| remotely arranged ordinary encounter | no | may remain free | providential only |
| direct physical healing $I_X$ or restorative $I_P$ | yes at the directly affected event | may expand agency | included |
| direct revelation $I_C^E$ followed by a free response | revelation yes; response not thereby miraculous | response can be free | both included |
| source override $I_A$ | yes at the directly produced event | token act not free | included |

## Goodness foundations

The architecture distinguishes at least: what is good for a subject, excellence relative to capacities or kind, valuable states, fitting action, good agency, obligation, and omnibenevolence. No earlier divine attribute establishes these together.

The current candidate is a **relational divine-source account**. For created value bearers:

\[
GroundsExistence(G,A,C)
\land Fits_d(x,Profile(A,C),\tau)
\Rightarrow CandidatePTGF_d(x,A,C,\tau).
\]

$G$ grounds the existence of the subject, its capacities, and the context in which finite goods obtain. The good-making relation is provisionally sought in objective fit among conscious life, agency, development, truth, relationship, and other constituents still to be assessed. Divine choice can actualize particular goods and institute contingent roles or norms without automatically making every chosen object good by endorsement alone.

“Voluntarism” therefore names several independent theses. Divine approval might define the word “good,” constitute value, recognize value, make value epistemically accessible, or institute a contingent obligation. The current pressure applies principally to the unrestricted constitutive claim; it does not by itself settle divine-command, recognition, or institutional accounts.

This avoids treating an objective normative relation as though it must be another agent or substance ontologically above $G$. It does not yet explain normative fit. Three live grounding routes remain: divine nature with independently articulated good-making content, structural or relational normative truth, and a restricted role for divine choice. Unrestricted choice voluntarism is disfavored because it empties “$G$ is good” of contrastive content and prevents value from guiding choice in grounding order.

The proposed bridge from $G$ to a created subject is provisionally typed as:

\[
NormBridge_G(A,C)=
\langle GroundExist_G,ConstituteValue,Recognize_G,Institute_G\rangle.
\]

This is not yet a theory or an assertion that all four relations always obtain. It prevents “value emerges from $G$” from concealing whether $G$ makes the bearer exist, supplies the good-making feature, recognizes or approves the value, or establishes a contingent normative role. The next evaluative pass must assign specific truths to these roles and test their compatibility with $G$'s necessary nature and contingent agency.

### Good-for and conscious subjects

The first restricted target is prudential rather than goodness simpliciter: how a life, state, event, or relation goes for its bearer. Conscious subjects supply the clearest initial domain because phenomenal valence is directly subject-affecting, but the scope does not yet exclude every non-conscious form of good.

Use $PTGF_d(x,A,C,\tau)$ for a dimension-indexed pro tanto judgment, where $\tau$ is the assessed moment, interval, project horizon, or whole life. Reserve $GF(x,A,C,\tau)$ for an explicitly generic or all-things-considered judgment. The provisional welfare profile ranges over phenomenal valence, functioning, agency, epistemic contact, relationship, and diachronic integrity or development. These are candidate dimensions with different support and defeaters, not a completed objective list. Actual desire and pleasure can provide evidence or value within the profile without exhausting it.

A partial dominance relation avoids premature scalar aggregation:

\[
x\succ^P_{A,C,\tau}y
\quad\text{iff}\quad
\bigl(\forall d\in D_A\;x\succeq^d_{A,C,\tau}y\bigr)
\land
\bigl(\exists d\in D_A\;x\succ^d_{A,C,\tau}y\bigr).
\]

It ranks $x$ over $y$ when $x$ is no worse in any admitted dimension and better in at least one. Pleasant deception, painful treatment, addiction, coerced development, sacrifice, and harmful enjoyment remain mixed cases rather than being forced into one metric. Local phenomenal badness is not erased merely because it contributes instrumentally to a better diachronic outcome.

Finite welfare also preserves asymmetric co-production:

\[
GroundsExistence(G,A,C)
\land Occurs(x,A,C)
\land Fits_d(x,WProf(A,C),\tau)
\Rightarrow PTGF_d(x,A,C,\tau).
\]

$G$ grounds the existence of the subject and arena; created causes or agents can supply the token $x$; and the fit relation supplies its prudential valence. ACO recognizes any obtaining welfare truth, while divine institution can modify some contingent normative contexts. The live stronger proposal makes principles of fit necessarily dependent on $G$'s necessary nature while allowing actual instances to depend on contingent subjects and histories. It remains open until a non-circularly established divine feature grounds determinate valence.

### Creature-constructed value as an alternative

The alternative that $G$ has no conception of good must be typed carefully. Semantic construction of evaluative vocabulary, construction of value from a subject's attitudes, procedural standards constitutive of agency, intersubjective norms, and global creature-only construction have different consequences. The coherent divine claim is:

\[
NoNativeNorm(G)\quad\text{iff}\quad
\neg\exists v\;PrimitiveEvaluativeStandpoint(G,v),
\]

not permanent divine ignorance. If an evaluative practice $N$ occurs in $H^*$, ACO includes the fact and its content:

\[
Constructs(A,N,H^*)\Rightarrow K_G(Constructs(A,N,H^*)).
\]

Knowledge of a constructed standpoint neither constitutes nor endorses it. A creature-only construction theory makes divine goodness inapplicable prior in grounding order to created valuation and must explain why $G$, already modeled as an autonomous subject, is excluded from the class of eligible constructors. It must also handle phenomenal welfare without reflective construction, corrupted preferences, and the standards used to idealize a valid procedure.

Pure actual-attitude construction is therefore disfavored. The strongest constructivist candidates are agency constitutivism and a hybrid in which phenomenal or other subject-affecting welfare facts are not constructed while personal, moral, and institutional norms are partly constituted by autonomous or intersubjective activity.

### Sacrifice and diachronic priority

A sacrifice joins distinct evaluative questions. Its cost can remain $PTBF_d(c,A,C,t_0)$; the act can exhibit agentic excellence; its whole-life effect may benefit or harm $A$; and its moral value for another subject may diverge from its prudential effect. Costliness alone has no positive sign.

Long-term priority is modeled through normative defeat rather than an unsupported scalar. For stable project or commitment $g$ and transient attraction $p$:

\[
DP(g,p;A,C,I)
\Rightarrow
g\triangleright_{A,C,I}p.
\]

$DP$ requires informed and non-manipulated endorsement, stability across relevant temporal perspectives, realization or preservation of a justified welfare dimension, due concern for future welfare, proportionality, and no decisive undefeated harm to others. This supports study, caregiving, treatment, promises, or resistance to addiction against some immediate pleasures because the long-term commitment can express the temporally extended agent and preserve future authorship. Duration alone supplies no priority, and severe or futile suffering can defeat a project.

Good reasons remain non-necessitating:

\[
Fitting(G,a,R)\not\Rightarrow Required(G,a,R).
\]

The candidate therefore requires neither an optimal world nor necessary creation. Full divine goodness and omnibenevolence remain unearned pending the ground of normative fit, the content of divine evaluative dispositions, and the scope of any norms applicable to $G$.

## Current formal status

The semantic compatibility set, actual marker, and initial causal-role decomposition are provisionally closed in [Session S02](../sessions/2026-08-31-internal-time-and-atemporal-knowledge.md) and [S03](../sessions/2026-08-31-actuality-and-coproduction.md). The intervention ontology begins in [S04](../sessions/2026-08-31-intervention-ontology.md).

The structural test is conditional but direct. If $S$ includes genuine originating power and does not encode its exercise, then for some shared past $P_t$:

\[
h_a,h_b\in\mathcal H(S),\qquad
h_a\equiv_{<t}h_b,\qquad
Act(A,t,h_a)\neq Act(A,t,h_b).
\]

Therefore exact specification of laws, boundaries, and powers does not entail a unique complete history. Adding the actual output to $S$ would instead contradict the intended distinction between structure and agent contribution. This test is provisionally passed given C08.

Agency-preserving intervention and the intervention–miracle–providence relation begin in S04. S05–S15 develop ACO/MKO, unified agency, attribute order, qualified power, unity, non-spatiality, and ontological omnipresence. S16–S20 audit and extend that architecture through the creation bridge, qualified agency-respecting providence, and universal personal availability. S21 opens goodness by distinguishing its targets and selecting a relational divine-source account for further evaluation. S22 separates phenomenal, access, self, and agentive consciousness and makes freedom explicitly token-relative. S23 begins the good-for branch with a plural welfare profile, pro tanto value, partial comparison, and asymmetrically co-grounded finite welfare. S24 corrects its dimensional and temporal notation, opens creature-constructed normativity as a serious alternative, and gives qualified sacrifice and long-term commitment a defeasible priority structure. PMC, the F2 blocker analysis for qualified power, agency ecology, atemporal responsiveness, interpersonal knowledge, and the ultimate ground of normative fit remain selective deepening targets.

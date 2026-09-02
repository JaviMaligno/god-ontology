# Core Causal and Modal Architecture

This document states the cleanest present model. It is a formalization target, not yet a finished formal theory.

## Primitives under consideration

| Symbol | Working role | Status |
| --- | --- | --- |
| $G$ | Necessary agent/cosmic ground | provisional/preferred |
| $S=\langle L,C,B,O\rangle$ | Generative structure: laws, constants, boundary conditions, ontological primitives | preferred |
| $Adm_C(S)$ | Constitutive admissibility of a complete created specification | preferred at F2 |
| $\mathcal H(S)$ | Histories or continuations compatible with $S$ | open ontology |
| $A_i$ | Created agents with possible originating causal powers | preferred |
| $I_j$ | Divine interventions classified by causal target | provisional |
| $H^*$ | Actual complete created history | preferred E+ temporal object |
| $\mathfrak R^*$ | Complete actual reality, including $G$, $S$, $H^*$, interventions, and actual dependence relations | provisional ACO domain |
| $K_G$ | Divine knowledge relation | accepted only at the ACO minimum |
| $Rep(i,p)$ | Actual cognitive act $i$ represents content $p$ without fixing the target's actuality or possibility | preferred minimum relation |

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

The initial power-grounded account distinguishes manifestations and continuations:

\[
PossibleManifestation(S\mid P)\quad\text{because}\quad ManifestationOf(S,P),
\]

\[
Possible(h\mid S)\quad\text{because}\quad Compatible(h,S),
\]

\[
Possible(a\mid A,t,h)\quad\text{because}\quad CanOriginate(A,a,t,h).
\]

Possible histories are representations of combined powers and constraints, not additional concrete blocks. Power-grounded modality remains irreducibly modal at its base: the actualizing and originating power predicates are not reduced to non-modal vocabulary.

S33–S34 expose a required refinement. A specification cannot count as independently possible merely because $G$ can actualize it when that capacity is the conclusion under examination. Let $Poss_C^{ind}(S)$ mark the still-open metaphysical criterion for structural eligibility:

\[
Poss_C^{ind}(S)
\rightarrow
\neg DefinedSolelyBy(Poss_C^{ind}(S),CanActualize(G,S)).
\]

Necessary consistency and compossible power profiles are candidate constraints, but imaginability and formal consistency alone are insufficient. The eventual account must permit established powers to ground their possible manifestations while giving uninstantiated created specifications enough independent modal content to constrain the S33 range bridge.

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

### Actual subject acquaintance

ACO and MKO specify epistemic scope but do not by definition exhaust epistemic mode. S34 adds a preferred direct relation to every actual conscious subject:

\[
\begin{aligned}
ASA(G,A)\leftrightarrow{}&Actual(A)
\land ConsciousSubject(A)\\
&\land DirectEpistemicAccess(G,A)\\
&\land \forall c[ActualStateOf(c,A)
\rightarrow GraspsAsPresentedTo(G,c,A)].
\end{aligned}
\]

$ASA$ is factive, subject-indexed, and qualitatively discriminating. It lets $G$ grasp an actual state as presented to $A$ and distinguish first-personal differences without falsely self-ascribing the state. Directness does not imply that $G=A$, that $A$ constitutes $G$, that $G$ tokens the numerically same phenomenal state, or that $G$ originates $A$'s libertarian choice.

The relation is actuality-indexed:

\[
\neg Actual(A)\rightarrow\neg ASA(G,A).
\]

MKO may represent possible subject-types, power profiles, and possible experiences. Concrete acquaintance begins only with the actual subject and token state in grounding order, although $G$'s relation to the whole actual life is atemporal rather than temporally acquired. This adds no pre-actual truth about which libertarian alternative the creature will select.

The total epistemic profile is role-structured:

\[
K_G^{total}=\langle ACO_P,MKO,ASA\rangle.
\]

$ACO_P$ retains complete propositional truth-scope; MKO concerns modal structure; $ASA$ concerns direct access to actual subjectivity. These are neither temporal stages nor automatically separable constituents of $G$.

Exact discrimination, vicarious phenomenal representation, and numerical sharing of a phenomenal token remain distinct. Minimal $ASA$ requires only the first. A perfect-empathy model is a live strengthening; literal state-sharing would add passibility, subject-boundary, and constitutive-overlap burdens.

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

$PCon$ is phenomenal subjectivity or what the experience is like for $A$; $ACon$ is a content's availability for reasoning and flexible action-guidance; $SCon$ is at least minimal self-representation; and $AgCon$ is the non-epiphenomenal participation of phenomenal and practically accessible contents in the embodied subject's control or originating exercise before or during settlement. These are working functional distinctions, not yet a theory of how consciousness is metaphysically realized.

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

$AgCon$ records the causal and practical participation of consciousness; $Originates$, rather than consciousness alone, carries the irreducible sourcehood claim. This keeps the account from defining freedom into phenomenal consciousness while excluding a merely epiphenomenal witness from the preferred model of free action. S29 replaces the image of a punctual conscious decision with a temporally distributed episode $\delta=[t_0,t_m]$:

\[
Originates(A,a,\delta),
\qquad
RB_A(\delta)=\langle N_A,Phys_A,Aff_A,SM_A,Con_A\rangle.
\]

$RB_A$ records neural, wider physiological, affective, sensorimotor, and conscious contributions without claiming that these are exhaustive or independent substances. The action belongs to the temporally persisting subject; consciousness, the brain, and the body are not automatically separate inner agents.

Within $\delta$, preparation or bias, conscious access, agentive settlement, motor execution, and retrospective ownership can occur at different times. If $t_r$ is readiness-signal onset, $t_w$ reported awareness, $t_s$ settlement, and $t_m$ movement onset, then:

\[
t_r<t_w<t_m\not\Rightarrow t_s=t_r,
\qquad
Prepares(q,A,a,t)\not\Rightarrow Settles(q,a,t).
\]

Consciousness need not supply the earliest causal contribution. It may apprehend reasons, evaluate or endorse an urge, sustain attention, veto or revise a developing intention, or guide execution while control remains open. It must nevertheless enter non-epiphenomenally before the outcome is irrevocably fixed if the token is to count as consciously free:

\[
ConsciousFree(A,a,\delta)
\Rightarrow
EmbodiedUnity(A,\delta)\land Originates(A,a,\delta)
\land |\mathcal O_A(C^-_{\delta})|\geq2
\land \neg(C^-_{\delta}\models Settled(A,a))
\land \exists p,t\in\delta\,[ACon(A,p,t)\land CausalControl(p,A,a,\delta)].
\]

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

Consciousness alone is not sufficient for freedom: an aware but compelled or sufficiently caused movement can remain unfree. Consciousness is also not epiphenomenal in a consciously free act, because it must contribute to control or settlement rather than merely accompany a decision produced elsewhere. Organismic behaviour, embodied agentive action, and conscious reason-guided free action are therefore distinct; whether a wholly non-conscious embodied exercise can satisfy minimal libertarian freedom remains open.

### Consciousness production, time, and bearer

S36 distinguishes:

\[
\langle A,CapCon(A,t),c,Content(c)\rangle,
\]

the persisting bearer, its conscious capacity, a token conscious episode, and that episode's phenomenal or intentional content. Production and onset claims must specify which item they concern.

The preferred minimal bearer model is:

\[
\begin{aligned}
PCon(A,t)\leftrightarrow\exists c[
&Bears(A,c,t)\\
&\land Phenomenal(c)\\
&\land OccursAt(c,t)].
\end{aligned}
\]

An episode belongs to a person through bearer, presentation, and integration relations:

\[
PersonalState(c,A,t)\rightarrow
Bears(A,c,t)
\land PresentedTo(c,A)
\land IntegratedWith(c,Life_A,t).
\]

Integration does not require explicit memory, report, self-concept, or uninterrupted consciousness. Consequently:

\[
ConsciousAt(A,t)\rightarrow ExistsAt(A,t),
\qquad
ExistsAt(A,t)\not\Rightarrow ConsciousAt(A,t).
\]

This supplies ASA's first-personal truthmaker without identifying the bearer with its current stream or selecting a Cartesian, organismic, hylomorphic, dual-aspect, or non-reductive embodied realization.

Created conscious episodes are temporally located even under E+:

\[
PartOf(c,H^*)\land LocatedAt(c,[t_1,t_2])
\not\Rightarrow AtemporalMode(c).
\]

Temporal location, tenseless actuality, atemporal divine knowledge, and an atemporal mode of existence are different predicates. $G$'s basic consciousness is preferably underived and atemporal if conscious agency is essential to the necessary agent; its contingent actual-world knowledge and acquaintance still track the actual history.

Created consciousness has a typed production profile:

\[
\langle
ExistGround,
CapacityGround,
RealizationBase,
EpisodeCause,
SubjectContribution
\rangle.
\]

$G$ may ground the subject and its conscious power without directly producing every episode or its freely originated content. A later realization comparison must distinguish identity, constitution, weak emergence, strong emergence, manifestation of a subject-level power, and interaction with a distinct substance.

Creation is dependence rather than temporal onset by definition:

\[
Created(x)\not\Rightarrow\exists t\,BeginsToExist(x,t).
\]

Actual human subjects remain temporal and embodied. A created atemporal subject is only a modal edge case and would require individuation from $G$, modal dependence, relation to created time, and compatibility with uniqueness.

Whether a pre-conscious bearer already counts as a person remains open. Phenomenal, access, self, and agentive consciousness may also have different developmental onsets. Empirical evidence can constrain these boundaries only through an explicit bridge from operational profiles to a metaphysical consciousness criterion.

### Working realization: embodied hylomorphic powers

S37 compares the principal realization families and proposes at F2 a unified embodied power-bearing subject under a thin hylomorphic interpretation:

\[
EPBS(A)=\langle M_A,F_A,Cap_A,Life_A\rangle.
\]

$M_A$ names the changing material constituents; $F_A$ is their real unifying organization or form; $Cap_A$ is the power profile of the whole subject; and $Life_A$ is its organized temporal history. $F_A$ is neither another spatial component nor a second person. The subject is $A$, not a material heap, an isolated brain-part, a form considered as a separate substance, or consciousness detached from its bearer.

For a consciousness layer $k$, capacity onset requires an eligible organization and a psychophysical power principle:

\[
BeginsCapCon_k(A,t_c)
\leftrightarrow
Eligible_k(A,t_c)
\land CapCon_k(A,t_c)
\land
\forall t<t_c\,\neg CapCon_k(A,t).
\]

An episode is then a temporal manifestation of the subject's power through its bodily and wider realization base:

\[
Manifests(A,CapCon_k,RB_A(c,[t_1,t_2]),c).
\]

This supports a typed non-competition proposal:

\[
ConstitutesOrRealizes(RB_A,c)
\neq
OriginatesOrCauses(A,c,e).
\]

The first relation concerns implementation or constitution; the second concerns the source or difference-maker of a token outcome. A complete physical description does not by itself prove that prior microphysical conditions are an independently sufficient cause. Conversely, a justified bridge establishing such antecedent sufficiency would defeat libertarian origination for that token; causal non-competition cannot be protected by definition.

The current phenomenal stopping point is a qualified primitive: certain organized subjects possess fundamental phenomenal powers. This says more than unexplained “emergence” by identifying bearer, organization, capacity, manifestation, and causal roles, but it does not derive phenomenality from nonphenomenal structure. A subject-level dual-aspect account remains the strongest deeper candidate for the intrinsic nature of those powers. Reductive identity remains live but non-preferred; substance dualism and panpsychist models remain coherent but disfavored.

The preferred created sequence is:

\[
G
\xrightarrow{OEC}
\langle S,Matter,LifePermittingPowers\rangle
\xrightarrow{secondary\ causes}
A
\xrightarrow{development}
CapCon_k(A,t)
\xrightarrow{manifestation}
c.
\]

This is not projected onto $G$: the analogy is subject-level conscious power, while embodiment, development, and temporal manifestation belong to created subjects.

Taking a consideration as a reason is an aspect of the agent's act, not necessarily a prior choice requiring another inner chooser. The ontology therefore attributes settling to the whole embodied agent:

\[
Settles(A,a),
\]

not to a homunculus, a detachable faculty, “consciousness,” or “the body” treated as a second agent inside $A$.

Reasons-responsiveness is a capacity to apprehend considerations, assess their relevance, and act for them across varying situations. It is not a single-valued policy from reason profiles to actions. Its modal analysis uses what the agent can take as a reason and can originate; it does not restore pre-actual truths about what the agent would select.

This also separates freedom from rational quality. Sourcehood and alternatives determine whether an act is free in the minimal libertarian sense. The fit between motivating reasons, evidence, values, and the act determines how rational, coherent, or responsible it is. A free act can therefore be weakly reasoned, mistaken, akratic, or impulsive.

A stochastic, physiological, or neural description may realize, constrain, prepare, or predict aspects of $D_A(t)$ without automatically replacing the agent:

\[
Realizes(n,\Pi_A)\not\models SufficientCause(n,a).
\]

If the complete event-level base sufficiently settles $a$ independently of the integrated agent's exercise before conscious causal control, the token fails this model's conscious-freedom condition. If bodily and neural processes constitute or realize the agent's capacities and exercise without independently settling the outcome, they need not be competing causes. Temporal precedence, correlation, and above-chance prediction do not establish sufficient settlement without a bridge premise. S29 left the realization choice open; S37 now prefers the embodied hylomorphic-powers model at F2 without claiming that subject-level unity proves a third component beyond mind and body.

For $G$, replace the temporal $D_A(t)$ and decision episode with an atemporal field of comprehended possibilities and reasons. The common functions remain subject unity, apprehension, reason-guidance, and efficacious settling; temporal deliberation, memory, emotion, habit, neural preparation, motor execution, and bodily realization belong only to some created implementations.

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
| Ontological production | By what positive relation do material substances and created structure arise from or depend on $G$? | $OEC^+$ preferred at F2; $PMC_T$ accepted and $PMC_U$ remains an unestablished live defeater |
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

The production axis begins with a positive but deliberately thin constitution model. “Made of” decomposes into material input, parts, substrate, constitutive profile, and ontological category. Define an ingredient by distinctness, constitution, and constitutive priority:

\[
Ingredient(x,y)
\leftrightarrow
x\neq y\land Constitutes(x,y)\land ConstitutivelyPrior(x,y).
\]

$G$ is a substance only in the thin individual-subject sense:

\[
Substance_T(x)
\leftrightarrow
NonAbstractIndividual(x)\land IdentityUnit(x)\land BearsPowers(x).
\]

Its preferred simplicity is minimal and constitutive:

\[
MCS(G)
\leftrightarrow
\neg\exists x\,Ingredient(x,G)
\land
\neg\exists s\,[s\neq G\land ExternalSubstrate(s,G)].
\]

This excludes an ontologically prior material, assembly, or bearer without identifying every divine feature. Knowledge, modal apprehension, reason-guided settling, grounding, and causal power remain integrated and role-distinct. Their exact property or formal-aspect ontology is open. The resulting model is an **underived power-structured subject**:

\[
UPSS(G)
\leftrightarrow
Substance_T(G)\land Necessary(G)\land Underived(G)
\land MCS(G)\land PowerStructured(G).
\]

$MCS$ is weaker than absolute divine simplicity: no present argument establishes the numerical identity of $G$, existence, knowledge, will, power, and goodness. It is stronger than merely declaring composition language inapplicable, because it states what $G$ is and which forms of constitutive dependence are excluded.

The production axis now prefers strengthened **originative existential causation** ($OEC^+$). Causal adequacy does not require material inheritance unless a further universal material-causality principle is true:

\[
AdequateFor(G,\mathcal C_0,S)
\leftrightarrow
Knows_M(G,S)\land HasPower(G,P_{OEC})\land CanSpecify(P_{OEC},S).
\]

$P_{OEC}$ is the specific fundamental power to originate a new bearer of powers rather than modify a patient already present. Let $\mathcal C_0$ be the created ontological basis. $S$ supplies structural specification; $G$ originates a contentful act; and the immediate terminus is the existence of $\mathcal C_0$:

\[
C_G^-\not\Rightarrow_{\mathrm{causal}} Act_G(\mathcal C_0),
\qquad
Act_G(\mathcal C_0)
\Rightarrow_{\mathrm{causal}}
Exists(\mathcal C_0)\land Instantiates(\mathcal C_0,S).
\]

The act may therefore sufficiently produce its selected effect while no antecedent condition sufficiently settles the act. This applies the same agentic logic already used elsewhere rather than requiring the created domain to remain indeterminate after it has been chosen.

More fully:

\[
\begin{aligned}
OEC^+(G,\mathcal C_0,S)\quad\text{iff}\quad &UPSS(G)\\
&\land Originates(G,a_C)\\
&\land ExerciseOf(a_C,P_{OEC})\\
&\land Specifies(a_C,S)\\
&\land Causes(a_C,Exists(\mathcal C_0))\\
&\land Instantiates(\mathcal C_0,S)\\
&\land \mathcal C_0\neq G\\
&\land CCD(G,\mathcal C_0)\\
&\land \neg\exists m\,MaterialInput(m,a_C)\\
&\land GroundsExistence(G,\mathcal C_0).
\end{aligned}
\]

$OEC^+$ adds positive causal roles to grounding: a source, a specific power, an originating exercise, selected structural content, a numerically distinct and constitutively disjoint effect, and the absence of a transformed material input. $CCD(G,\mathcal C_0)$ excludes shared constituents and mutual mode relations. It is explicit because numerical distinction and $MCS(G)$ do not by themselves entail creator–creation disjointness. The material profile belongs intrinsically to $\mathcal C_0$ through $S$; it is not transferred from $G$. Knowledge specifies, the exercised power produces, and grounding describes the obtained asymmetric dependence.

The explanation terminates in a fundamental power rather than an intraworld material mechanism. This is admissible within the project because agentive sourcehood and modal powers are already fundamental. It is nonetheless an explicit metaphysical cost, and formal consistency of the representation is not proof of metaphysical possibility.

Mere type continuity between divine and created matter is not a productive relation. Material causality must instead be split:

\[
PMC_T:\quad MaterialTransformation(e)\rightarrow\exists m\,MaterialPatient(m,e),
\]

\[
PMC_U:\quad ConcreteCausedExistence(e)\rightarrow\exists m\,MaterialCause(m,e).
\]

$PMC_T$ is accepted. $PMC_U$ is unestablished and currently disfavored because evidence from transformations within a material order does not by itself establish universal modal scope. It remains the principal defeater for $OEC^+$:

\[
\Box PMC_U
\Rightarrow
\neg\Diamond OEC^+(G,\mathcal C_0,S).
\]

“Nothing comes from nothing,” if it denies uncaused origination, is compatible with this account because $G$ supplies the cause. Reading it as requiring material input adds $PMC_U$.

“From God” is now typed at four levels: causal source $ED_C$, virtual or exemplar source $ED_V$, participatory derivation $ED_P$, and strict constitutive source $ED_S$. $OEC^+$ entails the first two and permits the third without numerical overlap. Strict *ex deo* begins only when numerically divine reality constitutes, persists in, or becomes the effect:

\[
ED_S(G,\mathcal C_0)
\leftrightarrow
\exists d[DivineToken(d,G)\land(Constitutes(d,\mathcal C_0)\lor PersistsIn(d,\mathcal C_0)\lor Becomes(d,\mathcal C_0))].
\]

$ED_S$ remains coherent but disfavored because it introduces divine–world overlap, weakens the preferred creator distinction, and creates different burdens in partition, divine-mode, world-as-body, and whole-presence variants. It also answers $PMC_U$ only if the shared divine reality qualifies as a material cause; non-material overlap alone leaves the cross-category burden. Co-fundamental matter is coherent, but changes the ultimate basis from $G$ to $\langle G,M_0\rangle$ and therefore revises rather than preserves the current architecture.

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

### Qualified omnipotence at F2

Do not define the power domain as whatever $G$ can do, because that would make omnipotence tautological. Let $E_G^{ind}$ contain only essential features established independently of omnipotence and of the incapacity under examination. The eligible task relation is:

\[
\begin{aligned}
Task_G(a)\leftrightarrow{}&WellFormedAction(a)
\land AgentOf(a,G)\\
&\land Coherent(a,N_L,N_M,N_G)\\
&\land CompatibleWith(a,E_G^{ind}).
\end{aligned}
\]

This quantifies over actions attributable to $G$, not every possible state. A creature's originating act can be possible without being something $G$ can strongly produce while preserving the creature as its contrastive source.

Power has both **range** and **strength or control**. $StrongCan(G,a)$ means that $G$ can settle and produce the contribution assigned to $G$ without another autonomous source supplying that same contrastive content. This allows secondary causes and asymmetric co-production while distinguishing:

\[
StronglyProduces(G,q)
\]

from:

\[
Enables(G,A,q)\land Originates(A,q).
\]

Define the created-target domain and its maximality:

\[
\mathcal A_C(G)=\{a:Task_G(a)\land CreatedTarget(a)\},
\]

\[
OMP_C(G)
\leftrightarrow
\forall a\in\mathcal A_C(G)\;StrongCan(G,a).
\]

Unrestricted qualified omnipotence is:

\[
OMP_Q(G)
\leftrightarrow
\forall a[Task_G(a)\rightarrow StrongCan(G,a)].
\]

The architecture supports three evidentially ordered levels:

1. explicit actualizing, $P_{OEC}$, grounding, enabling, and intervening powers;
2. $OMP_C$, preferred at F2;
3. unrestricted $OMP_Q$, preferred but more provisional.

Conditional on sole divine ultimity:

\[
Created(L)\rightarrow\neg UltimateBlocks(L,G).
\]

A created law, object, agent, or arena may condition a task description but cannot independently ground the final boundary of its own existential ground's power. $P_{OEC}$, variable $S$-specification, and intervention across laws, boundaries, states, circumstances, powers, and acts provide positive cross-category evidence for $OMP_C$.

This is not a deduction of universal range. Absence of an external blocker does not supply a missing power, and $\Sigma_G$ cannot prove omnipotence because it was defined through powers established independently. $RI$ also cannot supply an independent proof because its universal causal-availability component partly inherited provisional C75. A coherent inability with no basis in $E_G^{ind}$ would defeat $OMP_C$.

Blockers divide as follows:

| Candidate | Result |
| --- | --- |
| contradiction, identity failure, or source-role mismatch | no eligible divine task |
| created resistance or law | dependent condition, not ultimate blocker |
| preservation condition internal to a task | constrains that task without limiting every alternative action |
| independently established essential feature | legitimately types $Task_G$ |
| brute incapacity relabeled essential | circular and potentially defeats $OMP_Q$ |
| necessary abstract truth or structure | modal constraint, not automatically a causal competitor |
| non-created concrete limiter | genuine defeater for $OMP_Q$ or sole divine ultimity |

A non-created concrete $L$ that independently blocks an eligible task changes the ultimate basis to $\langle G,L\rangle$, makes $L$ prior in the relevant respect, or yields a bounded demiurgic $G$. These are coherent but disfavored competitor architectures. No such $L$ has been established, so $OMP_Q$ remains preferred; its status is not upgraded to demonstrated.

Actual creator–creation disjointness is not an essential modal policy. If a non-destructive strict-*ex-deo* manifestation is coherent with $E_G^{ind}$, $OMP_Q$ conditionally places it within divine capacity. A formulation in which necessary $G$ ceases to be the same subject is incoherent. Either way, capacity does not require exercise, and constitutively disjoint $OEC^+$ remains the preferred actual creation model.

The strict self-copy challenge is similarly typed. A $G'$ cannot be both created and underived in the same respect, so an exact dependent-and-ultimate duplicate is not an eligible task. A dependent qualitative near-copy remains open.

### Independent created possibility

S38 distinguishes modal truth, cognitive representation, agentive capacity, selection, and actuality. The independence needed by the power argument is criterion independence:

\[
Poss_C^{ind}(S)\not\equiv CanCreate(G,S),
\]

not a prior assertion that every necessary modal fact is ontologically independent of $G$.

The preferred F2 account is **constitutive-admissibility actualism**. Define:

\[
Adm_C(S):=
WF(S)
\land Cons_{LM}(S)
\land EssSat(S)
\land PowSat(S)
\land Comp(S)
\land DepSat_C(S),
\]

\[
Poss_C^{ind}(S)\leftrightarrow Adm_C(S).
\]

A specification must be well formed; obey logical, identity, and mathematical constraints; satisfy the real definitions or constitutive profiles of its kinds; align laws and changes with their power profiles; be globally compossible; and possess a coherent created-dependence profile. Formal consistency alone is insufficient. For a partial description:

\[
Poss_C^{partial}(s)
\leftrightarrow
\exists S\,[Extends(S,s)\land Adm_C(S)].
\]

This is an objective truth condition rather than a guaranteed human decision procedure. It is also non-reductive: power profiles and compossibility retain modal content. The gain is an explanatory order that does not use the creative capacity being tested as its own criterion.

Possible structures and histories remain distinct:

\[
PossHist(h\mid S)
\leftrightarrow
Adm_C(S)\land HistSat(h,S).
\]

For a libertarian history, $HistSat$ requires token events to lie within the relevant agents' originative powers and shared past; it supplies no pre-actual would-counterfactual. Specifications and world-models represent admissible ways reality could be and need not be concrete non-actual universes. Type-level profiles can constrain wholly uninstantiated kinds without making those kinds concrete subjects. The ultimate ground of such profiles—necessary structural facts, independently established divine nature, or a mixed account—remains an F3 meta-modal question.

MKO tracks these truths rather than making them true:

\[
Poss_C^{ind}(S)\rightarrow Knows_G(Poss_C^{ind}(S)).
\]

Atemporal completeness changes neither the direction of ground nor possibility into actuality.

CH14 supplies a test. If $A$ imagines $p$ through an actual temporal act $i$:

\[
Img(A,i,p,t)\rightarrow Actual(i,t)\land Rep(i,p).
\]

Neither the existence of a corresponding concrete object nor $Poss(p)$ follows. The act, its realized representational organization, and the fact that it has content are actual; its target may be actual, merely possible, impossible, fictional, or incomplete. Detailed non-assignment-dependent imagination may provide defeasible modal evidence, but it never replaces $Adm_C$ as the truth condition.

### Qualified creative plenitude

S33 decomposes the missing bridge before attempting to strengthen C261. Created-order maximality contains at least:

\[
OMP_C\supseteq\{CP_G^{elig},CC_G,HI_G\},
\]

where $CP_G^{elig}$ is essence-compatible creative plenitude, $CC_G$ is constitutive control over created powers and constituents, and $HI_G$ is intervention range relative to an obtaining history. The notation marks required subranges rather than a set-theoretic definition. Unrestricted $OMP_Q$ additionally needs a justified exhaustion of eligible divine action-types.

The route to $CP_G^{elig}$ is a typed **modal-source bridge**. Let $Poss_C^{ind}(S)$ state the genuine possibility of a fundamental created specification without defining that possibility through $G$'s capacity. Its reconstructed premises are:

1. independently grounded created possibility $Poss_C^{ind}(S)$;
2. **B2r, conditional modal ultimity:** the same necessary $G$ is the ultimate origin of every instantiated possible fundamental created basis;
3. **B2d, directness:** where the target is a directly created fundamental basis, ultimate sourcehood connects to $G$'s immediate $OEC^+$ rather than only to a derivative producer;
4. essential rather than environmentally acquired $P_{OEC}$;
5. an agent-relative witnessing world in which the difference is grounded in $G$'s own settling while the necessary base and essential agent remain fixed, with only per-exercise specification fidelity built into the description.

B2r is formalized as:

\[
CMU_G:=
\Box\forall C[(Exists(C)\land FundCreatedBasis(C))
\rightarrow UltimateOrigin(G,C)].
\]

It can be decomposed into modal grounding coverage, modal uniqueness of the underived concrete originative source, and a grounding–origin link. Actual $U_G$, necessary existence, underivedness, and essential $P_{OEC}$ do not deductively entail those modal principles: another possible order could be brute or terminate in a second underived source while $G$ still exists. The project provisionally prefers $CMU_G$ at F2 because those alternatives suspend the explanatory demand at the created basis or multiply concrete ultimate stopping points. This is an abductive extension of the one-ground architecture, not a hidden definition of $G$.

The conditional scope preserves contingent creation:

\[
\Box(CreatedBasisExists\rightarrow UltimateOriginByG)
\not\Rightarrow
\Box CreatedBasisExists.
\]

It also preserves derivative production. A created producer $L$ may proximately originate some order while its own contribution ultimately depends on $G$. Thus:

\[
UltimateOrigin(G,C)\not\Rightarrow OEC^+(G,C,Spec(C))
\]

without B2d. This distinction prevents existential grounding from erasing secondary causation or creaturely authorship.

S40 closes B2d for **root created bases** rather than every later product. Define $RCB(C,S)$ so that $C$ intrinsically instantiates a complete generative $S$, grounds its created domain, and has no existentially prior created producer. This definition mentions neither $G$ nor direct divine production. Given $CMU_G$:

\[
RCB(C,S)\land UltimateOrigin(G,C)
\rightarrow DirectRootOrigin(G,C).
\]

A created intermediary would make $C$ derivative or would circularly originate a basis containing itself. A distinct underived intermediary would reject S39's preferred modal uniqueness. A created producer can still originate later entities or domains; the lemma concerns only the minimal created root.

Direct origin is connected to agency by the previously selected creation model, here named $AOR$. For contingent root creation by the underived power-structured subject, $G$ settles on $S$ and exercises essential $P_{OEC}$ through $OEC^+$. This is not inferred from generic causation; it integrates C99–C100 and C109.

The task domain is refined so that future independently established essential constraints do not become false power failures:

\[
Elig_C^G(S):=
Adm_C(S)
\land CompleteRootSpec(S)
\land RoleComp(S,E_G^{ind})
\land Task_G(Create(S)).
\]

Neither $RoleComp$ nor $Task_G$ contains $CanCreate(G,S)$. C263 continues to forbid protecting power by relabeling a brute incapacity as essential.

For every such $S$, S38 supplies a possible root instantiation. S39 fixes its ultimate source as the same necessary $G$; the root lemma supplies directness; $AOR$ supplies intentional $OEC^+$; and the witness preserves the same agent and essential power. Therefore, with every witness variable bound inside a single modal scope:

\[
\begin{aligned}
Elig_C^G(S)
&\rightarrow \exists w\,RelevantWitness(w,G,S)\\
&\rightarrow CanCreate(G,S).
\end{aligned}
\]

Here $RelevantWitness(w,G,S)$ binds a root $C$ and exercise $a_C$ inside one accessible world $w$, while preserving the same $G$, its independently established essence, intentional selection, and $OEC^+$ performance. This prevents both free witness variables and an inference from accidental occurrence.

Universal generalization yields **qualified creative plenitude**:

\[
CP_G^{elig}:=
\forall S[Elig_C^G(S)\rightarrow CanCreate(G,S)].
\]

This is preferred at F2. Its evidential force remains conditional on S39's abductive $CMU_G$; it is not an independent demonstration. With the currently established divine essence, no additional filter has yet been shown, so $CP_G^{elig}$ and the earlier $CP_G$ are presently coextensive.

S40 also decomposes specification transparency. $OEC^+$ already requires fidelity between specified $S$ and the root effect, while patient-independence excludes a prior material filter. Neither entails universal manifestation range: a patient-independent power could have an intrinsic narrow profile. Universal transparency is therefore not added as another axiom. The range follows from the independently admissible root witnesses plus $CMU_G$; patient-independence remains coherence support for each witness.

The remaining bridges stay distinct. Grounding a created relatum does not by itself entail power to modify it after origination, and a possible alternative creation does not witness an intervention ability relative to the same fixed history. Likewise, $CP_G^{elig}$, $CC_G$, and $HI_G$ do not establish $OMP_Q$ until eligible creative, created-target, self-directed, and non-created-relational actions are exhaustively typed.

### Constitutive control and sparse direct action

S41 fixes the actual causal distribution more precisely. The preferred model is **grounding with sparse direct action**:

\[
GSDA:=GlobalGrounding\land RealSecondaryEfficacy\land SparseDirectExercise.
\]

Ordinary derivative effects are proximately produced by created causes. $G$ grounds their bearers and causal arena without thereby supplying every immediate contrastive contribution. Direct divine production occurs at the created root and in whichever later interventions actually belong to $H^*$; extensive capacity does not entail continuous or universal exercise.

$OrdSec$ classifies an event through its ordinary realization under the created structure and powers; it does not definitionally exclude divine concurrence. Denial of universal proximate divine production is therefore a substantive part of $GSDA$.

This requires four distinct relations: existential grounding, proximate production, substitutive capacity, and actual exercise. For ordinary secondary effects:

\[
\begin{aligned}
OrdSec(e,H^*)\rightarrow{}&
\exists c[Created(c)\land ProximatelyProduces(c,e)]\\
&\land\neg ProximatelyProduces(G,e).
\end{aligned}
\]

The author also supports counterfactual divine production of eligible later effects. S41 introduced **source-neutral causal substitutability**, and S42 generalizes its range from positive effects to created-order outcomes:

\[
CCS_G:
\forall q[(EligibleOutcome_C(q)\land SourceNeutral(q))
\rightarrow CanDirectlySettle(G,q)].
\]

$EligibleOutcome_C(q)$ requires the outcome to embed in a complete $Adm_C$ specification and form an independently eligible divine task. Outcomes include positive effects, constitutive profiles, laws, and existential boundaries. $SourceNeutral(q)$ excludes profiles whose identity constitutively requires a different agent's contrastive settlement. $G$ may reproduce the bodily outcome of a creaturely choice, but divine settlement would not be the same source-indexed free act.

Constitutive control is then decomposed as:

\[
CC_G=CC_G^{+}\land CC_G^{pers}\land CC_G^{ann}.
\]

$CC_G^{+}$ covers positive created effect and constitution profiles. $CCS_G$, universal causal reach under $RI$, the established intervention target taxonomy, and $CP_G^{elig}$ support it at F2. $CC_G^{pers}$ adds an explicit same-bearer condition:

\[
AdmSame(x,m,\pi):=
AdmEff_C(ResultProfile(x,m,\pi))
\land CanPersistAs(x,m)
\land ConsistentPreservation(\pi,x,m).
\]

Only variations satisfying $AdmSame$ count as continuous modifications of the same token. Essential-property loss and replacement must not be redescribed as identity-preserving modification. Post-gap production divides further. A matching $y\neq x$ is duplicate reconstruction; renewed existence of $x$ is numerical recreation and requires an independently grounded $GapIdentity_C$ relation. Modulation, manifestation masking, power alteration, corruption, replacement, duplicate reconstruction, numerical recreation, annihilation, and law alteration are correspondingly distinct operation types.

$P_{OEC}$ remains originative and need not be reversible:

\[
CanOriginate(G,x)\not\Rightarrow CanAnnihilate(G,x).
\]

S42 closes $CC_G^{ann}$ without reversing $P_{OEC}$ or importing continuous conservation. For a created entity $x$ in history $H$:

\[
Life_H(x):=\{t\in T_H:ExistsAt(x,t)\}.
\]

An atemporal ground may ground a bounded temporal profile such as $Life_H(x)=[t_0,t_1)$. The grounding relation does not change; its complete relatum contains a terminal boundary. Define an independently eligible annihilation task by created status, non-essentially-unbounded duration, embedding of its terminal profile in a complete $Adm_C$ specification, source compatibility, and consistent preservation conditions. It must not refer to divine ability. Then:

\[
\forall x,t_1,\pi\,[AnnElig_C(x,t_1,\pi)
\rightarrow CanAnnihilate(G,x,t_1\mid\pi)].
\]

$RI$ supplies access to the target, refined $CCS_G$ supplies direct settlement of the eligible source-neutral boundary, and $P_{OEC}+CP_G^{elig}$ exclude a necessary prior material patient or remainder. This establishes $CC_G^{ann}$ at F2. $P_{ET}$ is derived operational shorthand for this range, not a new primitive power.

The substantive F2 hinge is outcome uniformity: absent an independently motivated kind-block, an admissible source-neutral terminal boundary falls within the same direct-settlement range as other admissible created-order outcomes. Bounded grounding removes the apparent block because the boundary belongs to a positive temporal profile rather than constituting a positive product of non-being. This is an abductive range bridge, not a theorem of $P_{OEC}$ alone.

Local annihilation leaves later created times while removing the specified bearer and created remainder. Total annihilation gives the created temporal order itself a terminal boundary, so it requires no later empty created time. Ordinary death, decomposition, and transformation remain distinct because created constituents persist.

S42's terminal formula is final annihilation. S43 adds gap annihilation:

\[
Life_H(x)=J_1\cup J_2,
\qquad \sup J_1<\inf J_2.
\]

If $GapIdentity_C(x,J_1,J_2)$ holds, $x$ numerically returns; if it fails, a later qualitative match is a distinct reconstruction. The power architecture permits the first conditionally but does not yet supply the required identity theory.

All three $CC_G$ components concern type-level target and operation range. S43 develops the separate shared-history burden. For the complete created prefix

\[
P_t(H^*):=H^*\restriction_{<t},
\]

type an intervention as

\[
i=\langle\tau,x,q,t,\pi,\sigma\rangle,
\qquad
\pi=\langle\pi_-,\pi_{\leftrightarrow},\pi_+\rangle.
\]

$\tau$ is the operation type, $x$ the target, $q$ the neutral outcome, $\pi$ the past, cross-boundary, and future preservation profile, and $\sigma$ the source-role profile. Independent history compatibility requires an $Adm_C$ history embedding the exact prefix and these neutral constraints without already requiring a possible divine performance.

The first bridge is essential power retention. A created prefix can make a compound task inconsistent, but under $UPSS+CT$ it cannot constitute, damage, drain, or isolate the underived power-holder. The substantive bridge is local prefix composability:

\[
\begin{aligned}
LPC_G:\quad HIElig_G(i\mid P_t)
&\land TypeCan(G,\tau,q)
\land Retain_G(\tau,P_t)\\
&\rightarrow \exists H_I\,RelevantHIWitness(H_I,G,i,P_t).
\end{aligned}
\]

The relevant witness contains the same essential $G$ intentionally performing $i$, preserves $P_t$, and satisfies the identity, law, future, and source-role requirements. $E^+$ supplies complete-history semantics; $Poss_C^{ind}$ filters holistic incompatibility without ability-circularity; $CT+RI$ combine independence with target access; and $CC_G$ supplies the operation type. $LPC_G$ remains an explicit abductive F2 hinge because modal facts need not freely recombine by logic alone. A rival must motivate a holistic source-sensitive constraint that survives the independent filters.

This yields:

\[
HI_G^{elig}:=
\forall i,P_t[HIElig_G(i\mid P_t)
\rightarrow CanIntervene(G,i\mid P_t)],
\]

preferred at F2 conditional on $LPC_G$ and the earlier modal-ultimity architecture. It covers eligible direct physical, boundary, nomic, constitutive, agency-preserving, and agency-removing interventions. For communication and other joint outcomes, it covers $G$'s contribution but not strong production of a response whose identity requires creaturely sourcehood. A nomic exception and law replacement remain different tasks. A created manifestation at $t$ does not imply that $G$ begins acting at $t$; the divine contribution is one atemporal settlement within the co-produced $H_I$, not an edit of a previously actual $H_0$.

Aquinas's route from unlimited actuality and being to unlimited active power is retained as a genuine historical bridge with stronger premises not adopted here. A primitive Infinite Power account is also coherent, but it posits the target rather than deriving it and, when formulated as absolute control over every proposition, conflicts with the project's creaturely source-role constraint. The local route is narrower and typed: S40 establishes root creative plenitude; S41 supports positive and admissible persistence-sensitive constitutive control without collapsing secondary causation into divine production; S42 derives annihilative control through bounded atemporal grounding; and S43 supplies fixed-prefix accessibility through explicit retention and composability bridges. $CP_G^{elig}$, $CC_G^{elig}$, and $HI_G^{elig}$ now support all three named created-order subranges at F2. Action-domain exhaustion remains separate and is next before unrestricted $OMP_Q$ can be assessed.

## Ontological omnipresence

Because $G$ is fundamentally non-spatial, presence cannot mean bodily extension or occupation of every created region. “External to creation” therefore does not locate $G$ in a second spatial region. The preferred independence claim is **constitutive transcendence**:

\[
CT(G,\mathcal C_0)
\leftrightarrow
GroundPrior(G,\mathcal C_0)
\land\neg ConstitutedBy(G,\mathcal C_0)
\land\neg PhysicalMember(G,S_{phys}).
\]

Creation neither constitutes $G$ nor supplies its physical category. This leaves immediate relations available. Define the actual created domain:

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

This is preferred conditionally on C11, C73, C75, C84, and C86. It applies across the complete E+ history without distributing parts of $G$ across places or times. Its universal relational profile can be called **relational immanence**:

\[
RI(G,\mathcal C^*)
\leftrightarrow
\forall x\in D(\mathcal C^*)\;Present_O(G,x).
\]

$CT(G,\mathcal C_0)\land RI(G,\mathcal C^*)$ is coherent because the predicates concern constitution and relation respectively. $RI$ neither entails nor independently excludes strict *ex deo*; the preferred $CCD$ condition supplies the separate exclusion of substantial overlap.

A direct intervention is a targeted exercise of the causal availability already included in $RI$. It requires no travel across a cosmic boundary or acquisition of local spatial extension. “Direct” excludes a necessary created intermediary; it does not identify $G$ with the target or make a divine constituent part of it.

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

$Avail_P$ combines subject-sensitive epistemic access with the coherent capacity for direct intentional address or response. It is preferred conditionally because $G$ is already modeled as a conscious agent, ACO includes every actual truth about $A$, $ASA$ supplies direct subject-indexed acquaintance, and $Present_O$ supplies direct causal availability without a spatial intermediary.

This capacity does not entail its universal exercise. Actual regard belongs to divine will and providence; reciprocal attention also requires a creaturely cognitive contribution; loving communion adds evaluative content. Significant personal presence can therefore be asymmetrically co-produced while ontological presence remains universal. $ASA$ closes the minimal knowledge-of-subject gap at local F2; reciprocal second-personal presence and stronger phenomenal-sharing models remain further relations rather than omissions from ACO's truth-scope.

Reciprocity requires participation by both subjects, not equality of their capacities:

\[
Reciprocity(G,A)\not\Rightarrow CommCap(G)=CommCap(A).
\]

$G$ may grasp $A$ exhaustively while $A$ receives a partial, accommodated, analogical, or createdly mediated representation of $G$. Divine address plus genuine creaturely uptake or orientation can therefore constitute asymmetric communication. This leaves the exact realization open and does not supply an empirical rule for identifying revelation or communication.

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

Manipulation may affect diachronic authorship even when these minimal libertarian conditions survive. Moral responsibility and wrongness remain in the ethical layer, but control of the agent's developmental ecology is an ontological agency question developed in S35.

The agency-oriented creative rationale now supplies a defeasible intervention presumption. If two interventions adequately serve the same relevant aim, and one preserves more originable alternatives, capacities, or sourcehood without another known defeating cost, that intervention is favored *ceteris paribus*. This is a reason relation, not a prohibition or a necessitating decision rule. Intervention can enhance, restore, preserve, reduce, or remove agency; nonintervention therefore has no automatic priority.

The comparison can be represented without forcing its dimensions into a scalar:

\[
Impact_A(I,A,t)=
\langle\Delta Feas_I,\Delta Orig_I,\Delta Capacity_I,SourceStatus_I\rangle.
\]

### Diachronic agency ecology

S35 distinguishes token sourcehood from authorship of the agent's governing standpoint across time. Context develops schematically through:

\[
C_A^-(t+1)=F(C_A^-(t),a_t,Sec_t,I_t),
\]

where the agent's earlier act, ordinary secondary causes, and interventions can all affect later deliberation. No deterministic reading of $F$ is assumed.

The agency ecology is provisionally represented as a non-scalar profile:

\[
AE(A,\tau)=
\langle TS,OR,CP,EA,RR,SF,RC\rangle_{A,\tau}.
\]

Its dimensions are token sourcehood, usable originable range, relevant capacities, sufficient epistemic access, reflective and practical revisability, self-formative contribution, and viable resistance or correction routes. Epistemic access does not require certainty or complete information; it concerns whether the agent can recognize enough of the action-relevant situation and possible control to exercise and revise its powers.

No creature authors its initial existence and context. Robust created agency therefore cannot require global self-creation. It can require that, once relevant capacities develop, some creaturely acts make a non-redundant difference to later governing states across admissible histories.

Influence, steering, governance capture, option closure, and source override remain distinct. Governance capture is the cumulative case:

\[
\begin{aligned}
Capture(X,A,\tau,q)\rightarrow{}&
Targets(X,A,q,\tau)\\
&\land ControlsHighLeverageInputs(X,A,\tau)\\
&\land AdaptivelyNeutralizesDeviation(X,A,q,\tau)\\
&\land RestrictsRevisionRoutes(X,A,\tau).
\end{aligned}
\]

The controller can maintain an attractor toward $q$ by answering the agent's locally free deviations with later contextual changes. This may weaken diachronic authorship without making those deviations determined or retroactively changing their source. Addiction, disease, trauma, or social structures may similarly degrade the ecology without constituting capture by one agent.

Agency-supporting intervention can restore capacities, disclose truth, reopen options and escape paths, protect against another controller, or enable later reflection and self-revision. The agency-preserving providence presumption consequently ranges over $AE(A,\tau)$ rather than token alternatives alone.

The apparent fork between possible revision and actual self-formation divides into three standings:

\[
\langle FreeTok(A,a,t),RobustCap(A,t),DiaAuth(A,\tau)\rangle.
\]

$FreeTok$ concerns one settlement. $RobustCap$ requires an actual, agent-accessible and originably pursuable revision or resistance route that is not systematically captured. $DiaAuth$ is an historical achievement and requires actual self-formative contributions. A newly created mature agent may possess the first two without yet having a self-authored history; a later loss of capacity need not erase authorship previously realized.

CH15 therefore has a preferred F2 resolution under the default-acceptance rule. Its remaining selective precision is how to define practical accessibility without an arbitrary probability threshold, ideal rationality, or a complete ethical theory; that question no longer blocks the trunk.

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

### Objective anchors and finite normative pressure

Construction must now be divided into capacity, practical pressure, exercise, and endorsement:

\[
CapConstruct(A,N),\quad PressureConstruct(A,N,C),\quad
Constructs(A,N,C),\quad Endorses(A,N,C).
\]

Finite vulnerability, dependence, limited knowledge, inter-agent coordination, and diachronic self-maintenance can create pressure to formulate norms. If $G$ is necessarily existent and not exposed to existential loss, $G$ may lack the self-preservational part of that pressure while retaining the capacity. This is a conditional difference between divine and created agency, not an argument from absence of need to $NoNativeNorm(G)$. Other reasons—truth, recognition, relation, and creation—may still favor a divine evaluative standpoint.

The preferred functional architecture is now an **objective-anchor hybrid**. Phenomenal harm and at least some relational or agentic goods set standards independent of actual endorsement, while temporal subjects construct more specific personal, moral, and institutional norms under those constraints. The metaphysical ground of the anchors remains open among necessary relational structure, fit grounded in independently established features of $G$, and a constrained divine-source relation.

Temporal agents approach the objective standard fallibly. For judgment systems $J_1$ and $J_2$:

\[
Closer_{Good}(J_2,J_1\mid E,C)
\]

states a partial, evidence-relative epistemic comparison rather than a numerical distance or a construction of the good. Correction of factual and inferential error, resistance to manipulation and arbitrary exclusion, coherence across relevant cases and times, representation of affected subjects, and survival under adversarial criticism responsive to a broad evidential base can support the comparison. Disagreement can lower confidence or leave judgments incomparable without proving that there is no objective truth.

The project will no longer retain every coherent theory as equally active. Coherence and architectural compatibility establish admissibility; divergence cases establish a working preference; multiple metaphysical realizations remain only when the available discriminators leave residual underdetermination.

Conscious subjects are represented by a profile rather than one ladder:

\[
CProf(A,t)=\langle PCon,Access,Self,Temporal,Source,Norm\rangle_{A,t}.
\]

Valenced phenomenal experience is the present sufficient anchor for being a phenomenal welfare bearer. Diachronic projects, autonomous norm construction, and moral responsibility require further combinations of temporal representation, access, self-governance, normative competence, epistemic opportunity, and sourcehood. Animals, children, adults, and cognitively impaired humans vary within and across these dimensions; the demographic categories do not assign profile values. Differences in reflective or normative capacity do not by themselves determine moral status or diminish the importance of suffering.

### Sacrifice and diachronic priority

A sacrifice joins distinct evaluative questions. Use $Sacrifice(A,s,c,g,B,C,\tau)$, where beneficiary set $B$ can contain $A$, contemporaries, and later subjects, and horizon $\tau$ may extend past $A$'s death. Its cost can remain $PTBF_d(c,A,C,t_0)$; the act can exhibit agentic excellence; its whole-life effect may benefit or harm $A$; and its value for other members of $B$ may diverge from its prudential effect. Costliness alone has no positive sign.

Long-term priority is modeled through normative defeat rather than an unsupported scalar. For stable project or commitment $g$ and transient attraction $p$:

\[
DP(g,p;A,B,C,\tau)
\Rightarrow
g\triangleright_{A,B,C,\tau}p.
\]

$DP$ requires sincere orientation, non-culpable attention to accessible reasons, non-manipulation, stability across relevant temporal perspectives, realization or preservation of a justified value dimension, due concern for affected subjects, proportionality, and no decisive undefeated harm. This supports study, caregiving, treatment, promises, or resistance to addiction against some immediate pleasures because the long-term commitment can express the temporally extended agent and preserve future authorship. It also permits commitments to contemporaries and future subjects beyond the agent's life. Posthumous effects need not be prudential goods for a no-longer-living $A$; they may instead express $A$'s commitment, preserve a relation or project, or be good for later members of $B$. Future location supplies neither automatic discount nor lexical priority, and the extension does not commit the project to maximizing longtermism.

Good reasons remain non-necessitating:

\[
Fitting(G,a,R)\not\Rightarrow Required(G,a,R).
\]

The candidate therefore requires neither an optimal world nor necessary creation. Full divine goodness and omnibenevolence remain unearned pending the ground of normative fit, the content of divine evaluative dispositions, and the scope of any norms applicable to $G$.

### Ontological priority and the axiological stopping rule

The evaluative branch serves the ontology rather than becoming a comprehensive ethics. Its required output is a **minimal axiological interface** able to define good and evil at the needed level, explain sacrifice and value beyond individual self-preservation, treat species continuity as a transpersonal case, and type the relation of value to $G$. It need not produce a total ordering, decision procedure, population ethics, or detailed theory of every moral status.

Species survival matters initially through future conscious lives, continuation of agency and relations, inherited knowledge and projects, and preservation of conditions for further goods. The species need not be a conscious collective subject. Biological persistence is not lexically supreme: quality of life, coercion, cost, and conflict with other bearers remain possible defeaters.

Once the interface can represent:

\[
Good,\quad Evil,\quad Sacrifice,\quad
TranspersonalContinuity,\quad NormBridge_G,
\]

further ethics moves to the optional backlog unless an ontological dependency reopens it. The active spine then returns to the metaphysics of $G$, creation, power, intervention, and related load-bearing gaps.

S27 closes that interface at F1 through three ontological anchor domains and one evaluative bridge:

\[
\mathcal A_{min}=\{P,S,R\},
\]

where $P$ is conscious valence, $S$ agentive sourcehood, and $R$ truthful recognition or relation. S28 refines the proposed necessary relation as:

\[
Fit_*(x,a,B,C,\tau)
\leftrightarrow
Eligible(a,B,C)\land Directed_a(B,C)\land AptResponse(x,a,B,C,\tau),
\]

where $a\in\mathcal A_{min}$. Bearer eligibility, the anchor's directed or due profile, an objectively pertinent and proportionate response, and explicit context and horizon make the claim contestable at several distinct points. An apt response can fail through external circumstances, so it must be distinguished from causal success. In ordinary language, it is an appropriate way of sustaining or answering how that kind of bearer, capacity, or relation can be realized rather than damaged in that situation. For $P$, the initial direction concerns conscious integrity and protection from grave involuntary suffering; for $S$, effective reason-responsive authorship rather than coercion or replacement; for $R$, truthful recognition, reciprocity, and fidelity rather than deception, betrayal, or instrumentalization. $Fit_*$ supplies pro tanto fit; defeat is assessed afterwards. This is an admitted axiological bridge rather than a claimed deduction of ought from physical description. Its remaining primitive burden lies in $Directed_a$: physical frequency, biological function, or causal success alone cannot determine what is due to a bearer. The preferred provisional grounding combines the ontological profiles of $P$, $S$, and $R$ with $G$ as their necessary rational and relational ground, while still owing a non-circular bridge.

Pro tanto good and bad are fit and misfit relative to anchor, bearer, context, and horizon. Generic good is undefeated objective fit across the relevant scope without requiring a total scalar. S28 prefers a constrained privation account:

\[
Priv_a(B,C,\tau)
\leftrightarrow
Due_a(B,C,\tau)\land \neg Realized_a(B,C,\tau).
\]

Evil qua evil is absence, frustration, or corruption of a good due to the relevant bearer, capacity, or relation, rather than absence of any possible enhancement. Broad evil includes minor and severe cases; grave evil is severe non-trivial privation or corruption of $P$, $S$, or $R$. Pain, coercion, and deception can be positive events or experiences that bear, manifest, or cause such privation; they need not be a rival evil substance. Moral evil adds culpable agent origination; non-agentic or natural evil does not.

Defeasible long-term preference remains inside the interface as a positive adequacy test, not merely a standing condition. E+ gives actual later subjects the same ontological actuality as earlier subjects within the complete history, although temporal deliberators lack ACO. Actual future bearers—and possible bearer types conditionally upon actualization—are eligible for the same fit relations without discount based solely on temporal distance. Durable, generative, or transpersonal realization of $P$, $S$, or $R$ should defeat an otherwise comparable transient benefit when grave present misfit, weak causal connection, disproportionality, and a less costly alternative do not defeat that preference. This can ground long-horizon sacrifice and species continuity. A complete strong-longtermist theory is not presupposed, although stronger conclusions may follow in particular cases from scale, probability, and the anchors.

Sacrifice does not require knowledge of success or a threshold quantity of information. Its epistemic orientation may instead involve belief, trust, hope, faith, accessible evidence, and non-culpable attention to counterevidence. Agentic or faithful worth, objective fit, and causal success are therefore assessed separately: a sincere mistaken sacrifice may exhibit fidelity without benefiting its target, while accidental success need not establish epistemic or agentic excellence.

Species continuity is valuable insofar as it preserves conditions for future $P$, $S$, and $R$, inherited projects, and further goods. The species is not treated as a conscious super-subject, and biological persistence containing only extreme suffering or systematic destruction of agency is not good merely because it is persistence.

The preferred metaphysical realization is provisionally:

\[
EssentialGround(G,Fit_*).
\]

This differs from arbitrary divine willing and from divine satisfaction of the standard. Only the conditional fit structure need be necessary: MKO can include its application to possible subject-types, while actual value instances require actual bearers and enter ACO with $H^*$. $G$ already grounds actual bearers and knows all obtaining fit or misfit through ACO. Grounding $Fit_*$ in established divine features remains a non-circular bridge to be tested only when an ontological module needs it; contingent norm-institution is permitted, while divine goodness and omnibenevolence remain unearned.

The privation account also supplies a conditional interpretation of hell as “absence of God.” Under ontological omnipresence, an existing subject cannot lack $G$'s existential grounding, knowledge, and causal availability. A hell-like absence can instead mean privation of communion, reciprocity, truthful recognition, or freely accepted personal relation. This establishes only coherence with the presence architecture; it does not establish an afterlife, hell's existence, permanence, punitive character, or cause.

### Science as input and constraint

Scientific inquiry supplies evidence about the actual created order and constraints on its physical realization. It does not automatically define the project's metaphysical categories or exhaust the reality they range over. A genuine empirical constraint requires a bridge:

\[
EmpiricalModel(E)\land Bridge(O,E)
\Rightarrow Constraint(O).
\]

If ontology $O$ entails an empirical consequence through a justified bridge and robust evidence contradicts that consequence, the conflict is a defeater. Mere non-detection, omission from an operational model, or methodological exclusion is not. Conversely, calling a claim metaphysical cannot protect it when it really does entail a contradicted physical claim.

This applies to psychology and other sciences as well as physics. Their findings can inform realization, examples, and abductive comparison while remaining distinct from the constitution of agency, consciousness, value, modality, substance, or divine reality.

## Current formal status

S43 corrects the identity language by distinguishing duplicate reconstruction from numerical recreation under an independent $GapIdentity_C$ condition. It also gives $HI_G^{elig}$ F2 support through exact-prefix compatibility, essential power retention, and the explicit abductive $LPC_G$ bridge. All three named created-order subranges are therefore supported at F2; their exhaustion and the classification of extra-created tasks form the next power question.

The semantic compatibility set, actual marker, and initial causal-role decomposition are provisionally closed in [Session S02](../sessions/2026-08-31-internal-time-and-atemporal-knowledge.md) and [S03](../sessions/2026-08-31-actuality-and-coproduction.md). The intervention ontology begins in [S04](../sessions/2026-08-31-intervention-ontology.md).

The structural test is conditional but direct. If $S$ includes genuine originating power and does not encode its exercise, then for some shared past $P_t$:

\[
h_a,h_b\in\mathcal H(S),\qquad
h_a\equiv_{<t}h_b,\qquad
Act(A,t,h_a)\neq Act(A,t,h_b).
\]

Therefore exact specification of laws, boundaries, and powers does not entail a unique complete history. Adding the actual output to $S$ would instead contradict the intended distinction between structure and agent contribution. This test is provisionally passed given C08.

Agency-preserving intervention and the intervention–miracle–providence relation begin in S04. S05–S15 develop ACO/MKO, unified agency, attribute order, qualified power, unity, non-spatiality, and ontological omnipresence. S16–S20 audit and extend that architecture through the creation bridge, qualified agency-respecting providence, and universal personal availability. S21–S25 develop the evaluative branch through finite welfare, objective anchors, sacrifice, and extended beneficiaries. S26 gives ontology priority and science a bridge-mediated constraining role. S27 closes the minimal axiological interface at F1; S28 gives it a local F2 repair through positive long-term preference, epistemic orientation under uncertainty, decomposed $Fit_*$, due-good privation, and a conditional interpretation of hell-like absence. S29 locally repairs agentive consciousness through unified embodiment, decision episodes, preparation–settlement typing, and conscious causal control without choosing a final mind–body realization. S30 develops divine constitution and material production to F2 through $UPSS$, minimal constitutive simplicity, $P_{OEC}$, $OEC^+$, and the $PMC_T/PMC_U$ distinction. S31 distinguishes constitutive transcendence from relational immanence, adds explicit creator–creation disjointness, and types *ex deo*. S32 completes the qualified-power blocker pass: $OMP_C$ is preferred at F2, unrestricted $OMP_Q$ remains preferred but more provisional, and coherent non-destructive strict-*ex-deo* capacity remains conditional without requiring exercise. S33 searches for the universal-range bridge and identifies a conditional modal-source route to creative plenitude while preserving separate gaps for constitutive control, history-sensitive intervention, and task-domain exhaustion. S34 closes CH03 locally through actuality-indexed subject acquaintance, keeps reciprocal second-personal presence co-produced, and opens CH14 on imagination, thought, and intentional content. S35 permits asymmetric communication and develops CH15 through token freedom, robust capacity, realized diachronic authorship, the $AE$ profile, and adaptive governance capture; its capacity/achievement distinction is locally accepted at F2, while practical accessibility remains selectively open. S36 opens CH16 by distinguishing conscious bearer, capacity, episode, and content; makes ordinary created episodes temporal but tenselessly actual and atemporally knowable; and proposes bearer–presentation–integration as the minimum personal relation. S37 corrects the mistaken recency-based priority inference and completes the comparative CH16 pass; the author then accepts the embodied power-bearing subject with a thin hylomorphic interpretation at F2, while dual aspect remains the strongest open deeper phenomenal bridge. S38 gives $Poss_C^{ind}$ a constitutive-admissibility actualist account, separates actual cognitive acts from the status of their represented targets, and makes B1 of S33 locally available. S39 prefers conditional modal ultimity B2r at F2 without claiming a deduction from actual uniqueness and separates ultimate sourcehood from direct production. S40 defines root-created specifications, derives direct root origin under B2r, supplies an agent-relative $OEC^+$ witness, and locally establishes essence-qualified creative plenitude. S41 adopts grounding with sparse direct action and establishes positive and identity-compatible constitutive control at F2. S42 treats annihilation as direct settlement of an independently admissible terminal existential boundary, distinguishes local from total annihilation, and closes the type-level $CC_G$ range at F2 while leaving shared-history accessibility to $HI_G$; $PMC_U$, the meta-modal ground of uninstantiated profiles, and strict-overlap coherence remain later challenges.

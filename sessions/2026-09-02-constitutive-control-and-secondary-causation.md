# Session: Constitutive control and secondary causation

**Date:** 2026-09-02
**Session ID:** S41
**Primary question:** What constitutive control follows from qualified creative plenitude and universal causal reach if $G$ does not in fact directly produce ordinary later effects?
**Dependencies:** C15, C29–C46, C73–C76, C90–C100, C115–C120, C223–C280, C367–C377, CH05, S04, S11, S17, S19, S30–S33, S40
**Target depth:** F2 decomposition of $CC_G$; establish positive source-neutral control while preserving separate annihilation and shared-history burdens

## Result in one sentence

The actual order is non-occasionalist: ordinary later effects are proximately produced by created causes rather than immediately by $G$, while $G$ retains counterfactual capacity to produce any eligible source-neutral created effect directly; this supports positive constitutive control over admissible modifications, replacements, and power conditions, but creation alone does not establish annihilation and type-level control does not yet establish every same-history intervention.

The author explicitly accepts S40's refusal to make $G$ produce every later effect and sharpens it: the working view is that $G$ in fact does not produce ordinary derivative effects immediately even though $G$ could metaphysically do so. This is not merely permission for secondary causation. It fixes the preferred actual causal distribution.

## Four relations that must remain distinct

| Relation | Question | Current answer |
| --- | --- | --- |
| existential grounding | Does the created bearer or arena ultimately depend on $G$? | yes |
| proximate production | Who supplies the immediate contrastive causal contribution to this effect? | ordinarily the created cause |
| substitutive capacity | Could $G$ directly produce the eligible effect profile without that created cause? | yes, subject to source-role and identity constraints |
| actual divine exercise | Does $G$ perform that direct production in $H^*$? | only at the root or through an actual intervention |

For an ordinary secondary effect $e$ in the actual history:

\[
\begin{aligned}
OrdSec(e,H^*)\rightarrow{}&
\exists c[Created(c)\land ProximatelyProduces(c,e)]\\
&\land \neg ProximatelyProduces(G,e).
\end{aligned}
\]

$OrdSec$ classifies an event by its generation through the ordinary created structure and causal powers; it does not define the event by already denying a divine concurrent cause. The displayed thesis therefore adds substantive causal-source content.

For the created producer identified in that relation, this is compatible with:

\[
OrdSec(e,H^*)\land ProximatelyProduces(c,e)
\rightarrow
GroundsExistence(G,c)\land GroundsCausalArena(G,e).
\]

Grounding the existence and causal arena of an effect does not transfer its proximate authorship. A post-root effect immediately produced by $G$ is instead represented by an intervention $I_j$; creation $I_0$ and later interventions therefore remain explicit exceptions to the ordinary-secondary rule.

Call the overall actual model **grounding with sparse direct action**:

\[
GSDA:=GlobalGrounding\land RealSecondaryEfficacy\land SparseDirectExercise.
\]

`Sparse` expresses causal distribution, not rarity by numerical threshold. The thesis only requires that divine grounding is not redescribed as immediate divine production of every derivative token.

## Counterfactual causal substitution

Let an effect profile $q$ include the target and qualitative or constitutive result while making its causal-source conditions explicit. Its admissibility is inherited from at least one complete admissible specification:

\[
AdmEff_C(q)\leftrightarrow
\exists S[Adm_C(S)\land EmbedsEffectProfile(q,S)].
\]

Then define:

\[
\begin{aligned}
EligEff_G(q):={}&CreatedEffectProfile(q)
\land AdmEff_C(q)\\
&\land Task_G(DirectProduce(q))
\land CompatibleWith(q,E_G^{ind}).
\end{aligned}
\]

A profile is **source-neutral** when its identity does not constitutively require another agent to supply the relevant contrast:

\[
SourceNeutral(q)\leftrightarrow
\neg\exists A[SourceEssential(A,q)\land A\neq G].
\]

The author's clarification supports the following substitutability principle:

\[
CCS_G:
\forall q[(EligEff_G(q)\land SourceNeutral(q))
\rightarrow CanProximatelyProduce(G,q)].
\]

$CCS_G$ concerns capacity. Its ordinary exercise is denied by $GSDA$.

The source-neutral restriction preserves creaturely agency. $G$ may be able to produce the same bodily configuration that follows a free choice, but if $G$ supplies the settling, the resulting event is not the same source-indexed act:

\[
SameOutcomeProfile(e_G,e_A)
\not\Rightarrow SameFreeAct(e_G,e_A).
\]

Thus the task “produce movement $m$” may be eligible, while “make $A$ originate $m$ freely by $G$ originating it instead” is incoherent under the accepted source-role semantics.

## Decomposing constitutive control

The old $CC_G$ label compressed at least three ranges:

\[
CC_G=CC_G^{+}\land CC_G^{pers}\land CC_G^{ann},
\]

where:

1. $CC_G^{+}$ is control over positive created effect and constitution profiles;
2. $CC_G^{pers}$ is control over changes to a persisting bearer under explicit identity conditions;
3. $CC_G^{ann}$ is power to terminate a created entity without a created successor bearer or substrate.

The conjunction is an analytic decomposition. The three conjuncts do not yet have the same status.

### Positive constitutive control

Let $τ=\langle o,x,m,\pi\rangle$ specify an operation, target, resulting profile, and requested preservation conditions. Define:

\[
\begin{aligned}
CCTask_G(\tau):={}&Created(x)
\land ConstitutiveOperation(o,x,m)\\
&\land CoherentResult(x,m)
\land ConsistentPreservation(\pi,x,m)\\
&\land Task_G(\tau)
\land SourceNeutral(Result(\tau)).
\end{aligned}
\]

Then positive constitutive control is:

\[
CC_G^{+}:=
\forall\tau[CCTask_G(\tau)\land PositiveResult(\tau)
\rightarrow StrongCan(G,\tau)].
\]

$CCS_G$, relational immanence, the intervention taxonomy, and S40's root-creative range jointly support $CC_G^{+}$ at F2. $CCS_G$ supplies direct capacity over eligible derivative effect profiles; relational immanence supplies access to every created target; S04 shows that divine action is not typed only at the root; and $CP_G^{elig}$ excludes dependence on one privileged material constitution. None of these facts says that the capacity is normally exercised.

### Persistence-sensitive control

A description of a change must state what is to remain numerically identical. Define:

\[
AdmSame(x,m,\pi):=
AdmEff_C(ResultProfile(x,m,\pi))
\land CanPersistAs(x,m)
\land ConsistentPreservation(\pi,x,m).
\]

For positive, source-neutral changes, the target profile can include the same-bearer condition. Therefore:

\[
AdmSame(x,m,\pi)\land CCTask_G(\langle Modify,x,m,\pi\rangle)
\rightarrow CanDirectlyVary(G,x,m\mid\pi).
\]

This supports $CC_G^{pers}$ for metaphysically admissible variations. It does not make identity infinitely elastic. If $F$ is essential to $x$:

\[
EssentialTo(F,x)
\rightarrow
\neg Possible[Same(x)\land \neg F(x)].
\]

$G$ may destroy $x$ and produce a qualitatively matching $y$ without thereby making $y=x$. Duplicate reconstruction and numerical recreation are different tasks: the latter is possible only if an independent identity ground permits the same $x$ to exist across a gap. Neither is a repair of an incoherent same-bearer modification task.

## Operation taxonomy

| Operation | What changes | What remains | Range |
| --- | --- | --- | --- |
| modulation | current state or manifestation | bearer and power | $CC_G^{+}$ |
| masking or blocking | enabling or triggering conditions | power may remain | $CC_G^{+}$ |
| power alteration | the bearer's dispositional profile | bearer only if identity permits | $CC_G^{pers}$ |
| corruption or destruction | organized bearer ceases | underlying created constituents may remain | $CC_G^{+}$, with identity loss explicit |
| replacement | $y$ occupies a role formerly occupied by $x$ | role or qualitative profile | $CC_G^{+}$; $y\neq x$ |
| duplicate reconstruction | first $x$ ceases, then a matching $y\neq x$ is originated | qualitative or role similarity | $CC_G^{+}$ plus $P_{OEC}$ |
| numerical recreation | $x$ ceases for an interval and the same $x$ returns | $GapIdentity_C(x)$ independently required | conditionally within $CC_G^{ann}+CC_G^{+}$ |
| annihilation | no created successor bearer or substrate remains | nothing created from the target | $CC_G^{ann}$, open |
| law alteration | local or global nomic profile changes | depends on the task | target range may be $CC_G^{+}$; fixed-history accessibility belongs to $HI_G$ |

The taxonomy prevents three equivocations. Temporarily blocking a manifestation need not remove its power; destroying an organized entity need not annihilate its constituents; and exact qualitative reconstruction neither guarantees nor excludes numerical recreation. Identity across a gap requires its own ground.

## Why annihilation remained open in S41

$P_{OEC}$ is an originative existential power. A one-way capacity to give being does not formally entail a power whose terminus is absolute non-being:

\[
CanOriginate(G,x)\not\Rightarrow CanAnnihilate(G,x).
\]

The usual withdrawal argument depends on continuous conservation: if $x$ exists only while a continuously exercised divine act maintains it, cessation of that exercise suffices for annihilation. This project instead adopted non-continuous global dependence: one atemporal grounding relation can obtain across the whole created history without a new maintenance act at each time. Consequently:

\[
\neg RepeatedMaintenance(G,x,t)
\rightarrow
\text{withdrawal is not yet a defined temporal operation}.
\]

Annihilation may still be coherent and within divine power. It requires an independently articulated **existential-termination capacity** $P_{ET}$ or a stronger account of how an atemporal grounding relation can have a temporally bounded relatum. It is not derived merely by treating $P_{OEC}$ as reversible.

## Relation to history-sensitive intervention

$CC_G^{+}$ and $CC_G^{pers}$ concern target and operation range. They do not by themselves establish that every such operation is accessible after any fixed history prefix:

\[
CanDirectlyVary(G,x,m)
\not\Rightarrow
CanDirectlyVary(G,x,m\mid H_{<t},\pi).
\]

In E+, an intervention is a constituent of $H_I$, not a meta-temporal edit of a previously actual $H_0$. $HI_G$ must therefore ask whether there is a relevant complete history sharing the required prefix and preservation conditions. Law changes, responses to creaturely acts, and modifications of historically individuated agents make that separate burden substantive.

## Adversarial tests

### Does metaphysical capacity make every event secretly divine?

No. Capacity, existential grounding, proximate production, and exercise are separate relations. $GSDA$ assigns ordinary proximate production to created causes.

### Can $G$ produce a free act while preserving its creaturely authorship?

Not by supplying the same contrastive settlement. $G$ can enable the agent, alter circumstances, or reproduce a source-neutral physical outcome. A task requiring $G$ and $A$ each to be the exclusive origin of the same contrast is malformed.

### Does replacement or reconstruction prove same-object modification?

No. A qualitative duplicate may occupy the same functional role while remaining numerically distinct. Conversely, numerical recreation is not ruled out if an independent gap-identity condition holds. Same-bearer continuous modification still requires $AdmSame$.

### Do natural laws block constitutive control?

They condition ordinary secondary causes but are created and belong to the targetable order. They are not ultimate blockers. Whether a particular law change is compatible with a fixed history is a $HI_G$ question.

### Does sparse direct action collapse into deism?

No. $G$ grounds the created order, remains causally available to every relatum, and may contribute actual interventions. Sparse exercise denies universal immediate production, not divine access or every post-creative act.

## Decisions

| Decision | Status | Reason |
| --- | --- | --- |
| Accept S40 at its stated F2 level | explicitly accepted | The author endorses its refusal to force direct divine production of every later effect |
| Adopt $GSDA$ for the actual causal distribution | accepted author clarification | Created causes ordinarily produce derivative effects; root creation and interventions remain divine direct exercises |
| Adopt source-neutral causal substitutability $CCS_G$ | preferred interpretation of the clarification | $G$ could directly produce eligible later effect profiles without normally doing so |
| Treat a creature-authored act as source-neutral | rejected | Changing the contrastive source changes the act under the accepted agency model |
| Establish $CC_G^{+}$ at F2 | preferred | $CCS_G$, $RI$, intervention targetability, and creative plenitude jointly support positive constitutive range |
| Establish persistence-sensitive control only for $AdmSame$ variations | preferred | Identity and preservation conditions belong to the task rather than constituting external resistance |
| Infer annihilation from creation | rejected | $P_{OEC}$ is not automatically reversible and non-continuous dependence blocks the simple withdrawal argument |
| Merge $CC_G$ with $HI_G$ | rejected | Target range and accessibility relative to a fixed history are different modal burdens |
| Test existential termination next before moving to $HI_G$ | historical priority, completed in S42 | $CC_G^{ann}$ was the only unresolved constitutive subrange at the end of S41 |

## Literature and precedent

- [Aquinas, *Summa Theologiae* I, q. 105](https://www.newadvent.org/summa/1105.htm) combines genuine creaturely operations with universal divine concurrence and argues that God can produce effects of secondary causes without them. The present model adopts causal substitutability while rejecting universal immediate concurrence.
- [Aquinas, *Summa Theologiae* I, q. 104](https://www.newadvent.org/summa/1104.htm) derives annihilation from cessation of continuous conservation. Because this project permits one atemporal global grounding relation rather than temporally repeated maintenance, that derivation cannot simply be imported.
- [Alfred Freddoso, “God's General Concurrence with Secondary Causes: Why Conservation Is Not Enough”](https://www3.nd.edu/~afreddos/papers/conserv.htm) clearly distinguishes occasionalism, mere conservationism, and concurrence by the causal immediacy assigned to God and creatures. $GSDA$ uses the same diagnostic distinction while developing a different grounding model.
- [Gloria Frost, “Peter Olivi's Rejection of God's Concurrence with Created Causes”](https://doi.org/10.1080/09608788.2014.949218) documents a medieval defense of genuine created causation without universal immediate divine concurrence. This is precedent for the compatibility claim, not a source of the project's modal-control derivation.

The historical positions and the capacity/exercise distinction are established. The project-specific contribution, if any, is the integration of sparse direct action, source-indexed libertarian acts, root creative plenitude, and a three-part $CC_G$ decomposition under eternalist history semantics. No novelty claim is yet warranted.

## Repository updates

- [x] commitment ledger
- [x] core architecture
- [x] glossary
- [x] attribute map
- [x] challenge register
- [x] development map
- [x] research method
- [x] novelty map
- [x] treatise outline

## Next question

Can the ontology justify an existential-termination capacity without importing continuous recreation, and can an atemporal grounding relation coherently have a temporally bounded created relatum?

## Later resolution in S42

The author's challenge showed that the open verdict was too cautious. [S42](2026-09-02-existential-boundaries-and-annihilation.md) preserves the rejection of a bare inverse inference from $P_{OEC}$ while deriving $CC_G^{ann}$ from a stronger route: an atemporal grounding relation can ground an independently admissible temporal profile with a terminal boundary, and refined $CCS_G$ ranges over created-order outcomes rather than only positive effects. $P_{ET}$ is therefore derived shorthand, all three type-level $CC_G$ subranges are preferred at F2, and only fixed-history accessibility remains for $HI_G$.

[S43](2026-09-02-fixed-history-intervention-range.md) later corrects the recreation terminology. A matching successor $y\neq x$ is duplicate reconstruction. Numerical recreation is the renewed existence of the same $x$ after a gap and remains conditionally admissible wherever an independent $GapIdentity_C$ relation supports it.

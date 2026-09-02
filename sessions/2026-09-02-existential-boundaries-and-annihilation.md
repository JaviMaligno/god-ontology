# Existential Boundaries and Annihilation

**Session ID:** S42

**Date:** 2026-09-02

**Primary question:** Can annihilative control be derived from the existing architecture without treating creation as a reversible mechanism or importing continuous conservation?

**Target depth:** F2 closure of the type-level constitutive-control range; retain fixed-history accessibility for $HI_G$

## Outcome

Annihilative control can be closed at F2 for independently eligible targets. In E+, a temporal entity already has a complete tenseless life-profile. An atemporal ground can directly settle that profile with a terminal boundary without changing, acting later in divine time, or withdrawing a repeated maintenance act. The result follows from the existing combination of admissible created outcomes, direct divine access to created targets, source-neutral causal substitutability, and positive existential production. It does not follow from originative power alone.

This closes the three type-level components of constitutive control:

\[
CC_G=CC_G^{+}\land CC_G^{pers}\land CC_G^{ann}.
\]

The stronger claim that every eligible annihilation remains accessible after every specified actual past is not included. That is the separate $HI_G$ burden.

## Why the previous open verdict was too cautious

S41 correctly rejected the bare inference

\[
CanOriginate(G,x)\Rightarrow CanAnnihilate(G,x).
\]

An originative operation need not have an inverse. S41 also correctly refused to model annihilation as withdrawal of a temporally repeated conserving act, because the preferred architecture uses one atemporal grounding relation to a complete history.

Those two refusals do not leave annihilation ungrounded. They identify the wrong routes and clear space for a route already implicit in E+: divine power ranges over admissible complete created outcomes, including outcomes whose temporal extension is bounded.

## Temporal extension as a complete profile

For a created entity $x$ in history $H$, define its temporal life-set:

\[
Life_H(x):=\{t\in T_H:ExistsAt(x,t)\}.
\]

A finite temporal career can have the form

\[
Life_H(x)=[t_0,t_1).
\]

The whole interval is a constituent of the complete history. From the internal temporal perspective, $x$ exists before $t_1$ and does not exist at or after $t_1$. From the atemporal grounding perspective, $G$ grounds one bounded profile; $G$ does not first ground an unbounded $x$ and subsequently revise it.

Define bounded grounding as:

\[
BG(G,x,J):=GroundsProfile\bigl(G,Life_H(x)=J\bigr).
\]

There is no contradiction in

\[
Atemporal(G)\land BG(G,x,[t_0,t_1)).
\]

The mode of the grounding relation and the temporal extent of its relatum are different parameters. Atemporal grounding therefore need not make every grounded entity everlasting.

## Ordinary cessation and annihilation

Not every terminal life-profile is annihilation. A composite may die, burn, disintegrate, or be transformed while its created constituents continue in other configurations. Such changes can be wholly produced by secondary causes.

Let $Con_x$ be the created constituents whose continued existence would make the event destruction, decomposition, or transformation rather than annihilation. Then local annihilation at $t_1$ requires:

\[
\begin{aligned}
Ann(G,x,t_1):={}&ExistsBefore(x,t_1)\\
&\land \neg ExistsAtOrAfter(x,t_1)\\
&\land DirectBoundary(G,x,t_1)\\
&\land \forall c\in Con_x\;\neg ContinuesAsCreatedRemainder(c,t_1).
\end{aligned}
\]

Here $DirectBoundary$ means that $G$, rather than a sufficient secondary cause, is the contrastive source of the terminal existential boundary. The definition does not require a positive entity called non-being. It identifies the created profile that ends and the agent who directly settles its end.

The constituent clause is role-sensitive. It ranges over what the target task asks to remove, not over every causally affected entity in the universe. An annihilation can therefore be local.

## Local and total annihilation

Two cases must be distinguished.

### Local annihilation

Created time and the wider created order continue while $x$ and the specified created remainder cease:

\[
LocalAnn(G,x,t_1,H):=Ann(G,x,t_1)\land \exists t>t_1\;t\in T_H.
\]

This is an intervention within a complete created history.

### Total annihilation

The entire created temporal order has a terminal boundary:

\[
TotalAnn(G,H,t_*):=
TerminalTime(H,t_*)\land DirectBoundary(G,H,t_*).
\]

Total annihilation does not require an empty universe at later created times. On this model there are no later created times. The history is temporally bounded as a whole. This avoids silently placing $G$ inside a super-time in which the universe first exists and is later absent.

## Independent eligibility

The capacity must not be smuggled into the task-domain definition. Define an annihilation-eligible target without referring to what $G$ can do:

\[
AnnElig_C(x,t_1,\pi):=
Created(x)
\land ContingentExtension(x)
\land AdmOutcome_C(TerminalProfile(x,t_1,\pi))
\land SourceCompatible_G
\land Consistent(\pi).
\]

The clauses mean:

1. $x$ belongs to the created order;
2. its essence does not independently entail an unbounded temporal career;
3. at least one complete constitutively admissible history embeds the relevant terminal profile;
4. the requested boundary can be attributed to $G$ without requiring another agent to be its exclusive source;
5. the task's preservation conditions are jointly consistent.

$AdmOutcome_C(q)$ is inherited from S38:

\[
AdmOutcome_C(q):=\exists S\,[Adm_C(S)\land Embeds(q,S)].
\]

This prevents eligibility from becoming a synonym for divine ability.

## Refining causal substitutability

S41 stated $CCS_G$ over created effect profiles. That wording was too narrow for boundaries, laws, and total-order outcomes. Refine it to source-neutral created-order outcomes:

\[
CCS_G:
\forall q\,[EligibleOutcome_C(q)\land SourceNeutral(q)
\rightarrow CanDirectlySettle(G,q)].
\]

An outcome may be a positive state, a change in constitution, or a terminal boundary. Source-neutrality excludes tasks whose identity requires a distinct creature to be the contrastive author. Annihilation has no such built-in creaturely source requirement unless one is explicitly added to the task.

This refinement does not turn $G$ into the actual producer of ordinary effects. $CCS_G$ concerns capacity; $GSDA$ continues to assign ordinary proximate production to secondary causes.

### The inferential hinge

The refinement is substantive and should not be disguised as a definition. Its F2 justification is **outcome uniformity**:

\[
OU_G:
AdmOutcome_C(q)\land SourceNeutral(q)
\land NoIndependentKindBlock(q)
\rightarrow q\text{ falls within the same direct-settlement range}.
\]

The bounded-grounding analysis removes the apparent kind-block: a terminal boundary is a feature of one positive temporal profile, not an ontologically alien product called non-being. $CP_G^{elig}$ already ranges over complete specifications containing bounded careers, while $CC_G^{+}$ and $CC_G^{pers}$ already establish direct access to created constitution and temporal manifestation. No accepted feature of $G$, $x$, or grounding explains a range discontinuity exactly at the terminal edge.

$OU_G$ is therefore preferred abductively at F2. It is not a demonstrative theorem of $P_{OEC}$ alone. A rival may reject it by supplying an independently motivated metaphysical difference between settling every pre-terminal part of an admissible profile and settling its admissible terminal boundary. Merely repeating that creation is not formally reversible does not supply such a difference.

## The derivation

For every annihilation-eligible target:

1. $AnnElig_C(x,t_1,\pi)$ supplies an independently admissible terminal outcome;
2. $RI$ supplies divine causal availability to the target without spatial entry;
3. the refined $CCS_G$ supplies direct settlement of every eligible source-neutral created-order outcome;
4. $P_{OEC}$ and $CP_G^{elig}$ show that created being and complete bounded root histories do not require a prior material patient;
5. $CC_G^{pers}$ supplies identity-sensitive access to an already created bearer up to the point at which persistence is no longer requested.

Therefore:

\[
\forall x,t_1,\pi\,
[AnnElig_C(x,t_1,\pi)
\rightarrow CanAnnihilate(G,x,t_1\mid\pi)].
\]

This is $CC_G^{ann}$ at F2. The conclusion is qualified by constitutive admissibility, source compatibility, and consistent preservation conditions in the same way as the other power ranges.

## No new primitive inverse power

$P_{ET}$ need not be added as a fundamental divine power. It can remain useful shorthand for the operational result:

\[
P_{ET}:=CC_G^{ann}.
\]

Its basis is the conjunction

\[
E^+ + AdmOutcome_C + RI + CCS_G + P_{OEC} + CP_G^{elig},
\]

not a metaphysical reversal operator. The role of $P_{OEC}$ is limited: it establishes patient-independent positive existential production and helps exclude a necessary material remainder. The terminal boundary is supplied by the outcome-range account.

## Edge cases

### Naturally incorruptible entities

Resistance to secondary destruction does not entail metaphysical non-annihilability. If the entity remains created and its unbounded duration is not essential, it can satisfy $AnnElig_C$ even if no created cause can destroy it.

### Essentially everlasting created entities

If an independently justified essence really entails existence at every later created time, a task requiring that same entity to cease while preserving the essence is inconsistent. This narrows the eligible task; it does not show a competing force that overpowers $G$.

### Divine promises or policies

A promise not to annihilate and an incapacity to annihilate are different modal claims. A genuine essential commitment may restrict eligible divine action. A contingent policy governs exercise while leaving capacity intact.

### Destruction and recreation

Annihilating $x$ and later producing a qualitative duplicate $y$ gives $y\neq x$ by default. Numerical identity across a gap would require an independent persistence theory. Qualitative reconstruction alone does not provide it.

### Complete created history

Total annihilation can be represented by a complete finite or bounded history. Completeness means that no facts are omitted from the history; it does not mean that created time must be unbounded.

## Relation to fixed-history intervention

Type-level annihilative control establishes:

\[
AnnElig_C(x,t_1,\pi)\rightarrow \Diamond_G Ann(G,x,t_1).
\]

It does not yet establish:

\[
\forall H_{<t_1}\,
[Compatible(H_{<t_1},Ann(x,t_1),\pi)
\rightarrow Can_G(Ann(x,t_1)\mid H_{<t_1},\pi)].
\]

The second claim requires a relevant complete history with the specified prefix, identities, laws, autonomous source roles, and terminal outcome. That is precisely $HI_G$. E+ represents it as selection or grounding of a complete intervention history, not alteration of an already completed actual history.

## Adversarial tests

### Is a bounded life just ordinary mortality?

No. The life-set describes the result but does not identify its producer. Annihilation additionally requires a direct divine boundary and absence of the specified created remainder.

### Does atemporal grounding become discontinuous or changeable?

No. The grounding relation is one complete dependence relation. Its relatum contains temporal differences. A varying created profile does not entail variation in the mode of its atemporal ground.

### Is non-being being caused?

The model does not reify non-being. $G$ directly settles a complete created outcome whose positive temporal extension is bounded. The negative statement follows from the boundary of that positive profile.

### Does the derivation assume universal divine concurrence?

No. It uses a counterfactual capacity over eligible outcomes. $GSDA$ still says that ordinary derivative outcomes are actually produced by created causes.

### Does full constitutive control now prove omnipotence?

No. $CC_G$ is one power range. $HI_G$ and exhaustion of eligible divine task-types remain separate burdens.

## Decisions

| Decision | Status | Reason |
| --- | --- | --- |
| Keep annihilation open merely because $P_{OEC}$ lacks an inverse | rejected after author challenge | The ontology already permits complete admissible outcomes with bounded temporal extensions |
| Model annihilation as withdrawal of repeated conservation | rejected for this architecture | Atemporal global grounding supplies no sequence of divine maintenance acts |
| Treat a bounded temporal relatum as compatible with atemporal grounding | preferred at F2 | The ground's mode and the relatum's temporal extension are distinct |
| Distinguish local from total annihilation | preferred | One leaves later created times; the other terminates the created temporal order itself |
| Refine $CCS_G$ from effect profiles to created-order outcomes | preferred | Constitutive changes, laws, and existential boundaries are not all naturally typed as positive effects |
| Establish $CC_G^{ann}$ for $AnnElig_C$ targets | preferred at F2 | The terminal-boundary result follows without a primitive inverse operation |
| Add $P_{ET}$ as a new fundamental power | rejected as unnecessary | It is derived shorthand for annihilative control |
| Infer every fixed-prefix annihilation from type-level control | rejected | Same-history accessibility remains $HI_G$ |
| Move next to $HI_G$ | preferred priority | All three constitutive-control subranges now have F2 support |

## Literature and precedent

- [Aquinas, *Summa Theologiae* I, q. 104](https://www.newadvent.org/summa/1104.htm) treats annihilation as the indirect consequence of ceasing to conserve rather than as a positive production of non-being. The present account retains the anti-reification insight but replaces temporal withdrawal with direct grounding of a bounded life-profile.
- [Aquinas, *Summa Theologiae* I, q. 105](https://www.newadvent.org/summa/1105.htm) argues that God can directly produce determinate effects ordinarily produced by creatures. This is historical precedent for the substitutive-capacity premise, although the project's actual causal distribution rejects universal immediate concurrence.
- [David Vander Laan, “Persistence and Divine Conservation”](https://www.cambridge.org/core/journals/religious-studies/article/abs/persistence-and-divine-conservation/CE1B6AB5DAD7943C3E312656703AA6B4) shows that conservation and persistence generate substantive identity problems. The present distinction between a bounded life-profile, annihilation, and later qualitative recreation avoids assuming that renewed production automatically preserves one token.

The bounded-relatum route is a project-specific integration of established themes: eternalist complete histories, atemporal dependence, annihilation without reified non-being, and causal substitutability. No novelty claim is made until the combination is compared more deeply with conservation, persistence, and divine-action literature.

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

Which eligible interventions remain available to $G$ relative to a fixed created-history prefix, explicit identity and law conditions, and creaturely source roles? This is the $HI_G$ bridge.

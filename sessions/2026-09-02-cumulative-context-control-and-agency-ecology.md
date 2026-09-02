# Session: Cumulative context control and the diachronic ecology of agency

**Date:** 2026-09-02
**Session ID:** S46
**Primary question:** Can repeated non-determining interventions on an agent's deliberative context undermine agency even when every token act retains originable alternatives and sourcehood, and what does agency-respecting providence require at the diachronic level?
**Dependencies:** C36–C46, C55–C60, C104–C119, C166, C168, C187, C376, C384–C385, S04, S06, S19, S40, S43
**Origin:** Next trunk item in the active queue after S45; CH03 is held by the author locally
**Target depth:** F2 for the diachronic extension of the intervention model; C118 from `open` to a structured answer

## Starting position

S04 and S19 model intervention at the token level. C42 says that divine control of a deliberative context does not entail control of the resulting act; C115–C117 give a defeasible presumption favoring interventions that preserve sourcehood. C118 records the residual worry as open: repeated context manipulation could preserve formal alternatives at each moment while engineering development, salience, commitments, and long-run authorship. C44 defers the related question about manipulation and authenticity.

The worry is load-bearing in three places. Providence, if it works largely through circumstances, is cumulative context control by construction. Divine direct address (C376) is a circumstantial contribution, and repeated address is context control. The source cover of S43 assumes that prevention by circumstantial intervention is cheap at the token level; if cumulative circumstantial prevention has a diachronic cost, that cost belongs in the cover.

## Definitions

| Term/symbol | Definition used in this session |
| --- | --- |
| $D_A(t)$ | $A$'s deliberative situation at $t$: information, reasons, feasible opportunities, capacities (C41) |
| $CC(X,A,t)$ | Context control: $X$ determines some element of $D_A(t)$ without sufficiently causing $A$'s act |
| token autonomy | At $t$, $A$ retains originable alternatives and originates the act (C36) |
| $\tau$ | An interval of $A$'s life, typically long enough for development, commitment, and character |
| $Prof(A,\tau)$ | $A$'s diachronic profile over $\tau$: stable commitments, evaluative standards, character, projects |
| curator policy $\pi$ | A function from the obtaining history up to $t$ to the contexts $X$ imposes at $t$; it may condition on $A$'s actual past choices but not on pre-actual truths about what $A$ would choose (C13, C50) |
| $Funnel(\pi,A,\tau,T)$ | Under $\pi$, every admissible sequence of $A$'s originable choices over $\tau$ yields $Prof(A,\tau)\in T$ |
| $DAuth(A,\tau)$ | Diachronic authorship: $Prof(A,\tau)$ is contrastively attributable to $A$'s own exercises rather than to a curator's selection of contexts |
| rational influence | A contextual contribution that supplies reasons, information, opportunities, or recognition which $A$ evaluates |
| a-rational influence | A contextual contribution that shapes $A$'s evaluative apparatus itself — salience, appetite, aversion, standards — without passing through $A$'s evaluation |
| $EvAuth(A,\tau)$ | Evaluative authorship: $A$'s standards of evaluation over $\tau$ are outputs of $A$'s own reflective exercises rather than of curated a-rational influence |

## Step 1: token autonomy does not entail diachronic authorship

Represent $A$'s life over $\tau$ as a tree. Agent nodes carry originable alternatives; curator nodes select the next context. Token autonomy holds at every agent node. Nothing in that condition constrains the shape of the tree. A curator can select contexts so that every branch leads into the same region of profile space: each fork is real, and every path leads to the same place.

\[
\forall t\in\tau\,[TokenAut(A,t)]\;\land\;Funnel(\pi,A,\tau,T)
\]

is satisfiable. In such a case the contrastive explanation of why $Prof(A,\tau)\in T$ rather than $T'$ is $\pi$, not $A$'s exercises:

\[
Funnel(\pi,A,\tau,T)\;\Rightarrow\;CExp(\pi,Prof(A,\tau)\in T,Prof(A,\tau)\in T')\;\Rightarrow\;\neg DAuth(A,\tau).
\]

This answers C118 in the affirmative: cumulative context control can remove diachronic authorship while leaving token autonomy intact. Call this **diachronic option closure**, the profile-level analogue of the token-level option closure of C39. It is not source override at any moment; it is closure of the space of lives.

The construction respects C13 and C50. A funnel does not need the curator to know what $A$ would choose; it needs every originable branch to remain inside the target. That is a strong structural condition on the option space, and it is exactly the condition that makes a funnel objectionable: the agent's real choices make no difference at the level that matters.

## Step 2: the second route — evaluative authorship

A curator need not close the profile space. It can leave many lives open and instead shape the standards by which $A$ chooses among them. If $A$'s appetites, salience patterns, and evaluative standards are outputs of curated a-rational influence, then $A$ chooses freely at each moment by standards that are not $A$'s own in the authorship sense:

\[
\forall t\in\tau\,[TokenAut(A,t)]\;\land\;\neg EvAuth(A,\tau)
\]

is likewise satisfiable. C57–C60 make sourcehood reason-guided; the value of reason-guided settling depends on the agent's evaluation being the agent's. An agent whose evaluative apparatus has been authored from outside satisfies the letter of reasons-responsiveness while the reasons it responds to have been installed. This is the structure C44 deferred as manipulation, now typed: manipulation is cumulative a-rational influence that replaces evaluative authorship.

The distinction between rational and a-rational influence does the work here, and it must not be drawn so that all influence is a-rational. Education, testimony, argument, example, and truthful recognition supply materials for $A$'s evaluation; they are rational influence and are how any finite agent becomes an evaluator at all (C166: finite norm construction under vulnerability and dependence). What removes $EvAuth$ is influence that bypasses evaluation and does so cumulatively enough that the resulting standards are contrastively the curator's.

## Step 3: two levels of agency

Meaningful agency therefore has two levels, and the ontology needs both:

| Level | Condition | Removed by |
| --- | --- | --- |
| token | originable alternatives and sourcehood at $t$ (C36) | option closure or source override (C39) |
| diachronic | $DAuth(A,\tau)\land EvAuth(A,\tau)$ | funnelling or cumulative a-rational influence |

C118 is thereby resolved from `open` to a structured preferred claim: meaningful agency requires the diachronic level, and the diachronic level can fail while the token level holds.

## Step 4: agency-respecting providence at the diachronic level

The agency-oriented creation reason (C104–C106) is not satisfied by token autonomy alone. A creator who wanted finite otherness and analogous sourcehood, and then curated every life into a target profile, would have created agents whose lives are the curator's. So the presumption of C115 extends:

> **Diachronic agency-preservation presumption.** Other things equal, prefer patterns of intervention that leave the agent's profile space open and its evaluative standards its own; a policy of context control that funnels lives or installs standards conflicts with the reason for creating agents.

Three consequences follow for existing modules:

1. **Providence is not curation.** C18 and C119 already deny that providence is exhaustive outcome control; the present result adds that it is not exhaustive profile control either. The global relation may include interventions and structural design, but not a funnel. This is the precise content of the plain-language claim that providence is a prepared board rather than a script.
2. **Direct address is rational influence.** C376 types divine address as a circumstantial or regard-level contribution. Address that supplies recognition, reasons, or an opportunity to respond engages the agent's evaluation and preserves both levels; address engineered to install standards or to funnel would not. This also explains why availability without imposed communion (C396) is the right shape at the diachronic level.
3. **The source cover has a diachronic component.** S43 noted that token prevention by circumstantial intervention is cheap, leaving a threshold residue. The present result adds the diachronic cost: a policy of preventing grave harms by repeated context selection is a curator policy over the agent's field of consequences, and past some density it funnels. This does not remove the threshold residue; it explains why lowering the threshold is not free even when each intervention is agency-neutral at the token level.

The regularity cover of S43 receives the same reading: a stable, truthful world is an ecology condition, because an agent cannot become the author of its standards in an environment that rearranges itself around it.

## Step 5: ecology conditions

The conditions under which the diachronic level can be satisfied, collected from the modules above:

| Condition | Source | What it protects |
| --- | --- | --- |
| profile-level openness: no funnel | Step 1 | $DAuth$ |
| rational rather than a-rational cumulative influence | Step 2 | $EvAuth$ |
| a stable and truthful environment | C107, C385, the $R$ anchor | the possibility of learning what one's choices do |
| opportunity for self-formation over time | C166, S25 | the agent's becoming an evaluator |
| a real field of consequences | C384 | that choices matter |

None of these requires that the agent be free of influence, difficulty, or dependence. They require that the long-run shape of a life be something the agent did rather than something done to it.

## Step 6: created-level manipulation and responsibility

The same analysis applies to created curators: propaganda, engineered addiction, algorithmic environments designed to shape salience and appetite, and coercive institutions. The project's accessible register receives a question it did not have: whether a manipulated person is still free. The answer follows from Step 3: at the token level, often yes; at the diachronic level, to the extent that the manipulation funnels or installs standards, no. This is where C44's deferred authenticity question lands.

C38 remains deferred: whether reduced $DAuth$ or $EvAuth$ reduces moral responsibility by degree belongs to the axiological branch. The present session supplies the distinctions that branch will need and does not decide the grading.

## Adversarial tests

| Objection | Result |
| --- | --- |
| A libertarian agent can always break a funnel, so funnels are impossible | A funnel requires that every originable branch stay in the target, not that the agent lacks alternatives; whether an actual environment is a funnel is contingent, and the objection confuses having alternatives with those alternatives making a profile-level difference |
| All influence shapes standards, so $EvAuth$ is never satisfied | Rational influence supplies materials the agent evaluates; only cumulative a-rational influence that makes the standards contrastively the curator's removes $EvAuth$; the distinction is graded, and the criterion is contrastive authorship at the standard level |
| This makes divine providence impossible | It makes curation impossible for agency-respecting providence; structural design, non-funnelling intervention, rational address, and response remain available |
| ACO lets $G$ compute a funnel | ACO knows the actual history, not pre-actual choices; a funnel needs no such knowledge, but neither does ACO supply one; the objection has no force either way |
| The result reintroduces the rejected demand for a contrastive reason for every choice (R09) | No; it asks whether the profile is contrastively the agent's, not whether each choice has an entailing reason |
| Difficulty and dependence already deny diachronic authorship | They are conditions of finite self-formation (C166), not curation; the criterion is who authors the standards, not whether the agent was formed under constraint |

## Decisions

| Claim ID | Old status | New status | Reason | Provenance |
| --- | --- | --- | --- | --- |
| C118 | `open` | `preferred`, structured | Meaningful agency has a diachronic level that can fail while token autonomy holds | this session |
| C407 | — | `accepted` | Token autonomy at every moment is compatible with a curator policy that funnels the agent's profile; funnelling removes diachronic authorship (diachronic option closure) | this session; C36, C39 |
| C408 | — | `accepted` | Cumulative a-rational influence that installs an agent's evaluative standards removes evaluative authorship while leaving token autonomy intact; this is the typed content of manipulation | this session; C44, C57–C60 |
| C409 | — | `accepted distinction` | Rational influence supplies materials the agent evaluates; a-rational influence shapes the evaluative apparatus without passing through evaluation; only the latter, cumulatively, threatens evaluative authorship | this session; C166 |
| C410 | — | `preferred` | Meaningful agency requires both token autonomy and the diachronic pair $DAuth\land EvAuth$ | this session |
| C411 | — | `preferred` | Diachronic agency-preservation presumption: prefer intervention patterns that leave profile space open and evaluative standards the agent's own; funnelling conflicts with the creation reason | this session; C104–C106, C115 |
| C412 | — | `accepted` | Providence is not curation: agency-respecting providence excludes funnels and standard-installation as well as exhaustive outcome control | this session; C18, C119 |
| C413 | — | `accepted` | Divine direct address preserves both levels when it is rational influence; repeated address engineered to funnel or install standards would not | this session; C376, C396 |
| C414 | — | `accepted refinement` | The source cover of S43 has a diachronic component: a policy of preventing grave harms by repeated context selection is a curator policy and past some density funnels; the threshold residue remains | this session; C384 |
| C415 | — | `accepted` | Ecology conditions: profile-level openness, rational cumulative influence, a stable and truthful environment, opportunity for self-formation, and a real field of consequences | this session; C107, C166, C384–C385 |
| C44 | `deferred` | `structured`, grading deferred | Manipulation is typed as cumulative a-rational influence removing evaluative authorship; its effect on responsibility remains with C38 | this session |
| R131 | — | `rejected` | Token autonomy at every moment suffices for meaningful agency | this session |
| R132 | — | `rejected` | Every influence on an agent's standards is manipulation, or none is | this session |
| R133 | — | `rejected` | Providence may curate lives into target profiles provided each act remains free | this session |

## Literature and novelty notes

Cited from memory; not verified online in this session.

- Joseph Raz, *The Morality of Freedom* (Oxford, 1986): autonomy requires an adequate range of options over a life, not merely uncoerced choice; the nearest precedent for profile-level openness.
- Alfred Mele, *Autonomous Agents* (Oxford, 1995): history-sensitive autonomy and the manipulation problem; Derk Pereboom's four-case argument (*Living Without Free Will*, 2001) and Fischer and Ravizza's ownership of one's mechanism (*Responsibility and Control*, 1998) for the evaluative-authorship route.
- Harry Frankfurt on identification and Susan Wolf on sanity as normative competence, for what evaluative authorship must add to reasons-responsiveness.
- Thaler and Sunstein, *Nudge* (2008), and the subsequent debate on choice architecture, for created-level cumulative context control.

Classification: established families; the project-specific elements are the separation of funnelling from evaluative-authorship replacement as two independent diachronic failures compatible with libertarian token autonomy, and their application to providence, divine address, and the source cover. No novelty claim.

## Repository updates

- [x] commitment and rejection ledgers, glossary, core architecture
- [x] challenge register, development map, research method
- [x] treatise outline and novelty map
- [x] accessible answers and question bank (manipulation; providence as a prepared board)

## Next question

With C118 structured, the remaining queued trunk items are CH03, held by the author locally, and CH21, the identity criterion for continuation, which waits on the mind–body branch. The next session on this branch should therefore either receive the author's CH03 result for integration or open CH21 with the constraint from S45 that re-realization is re-instantiation of the same identity unit.

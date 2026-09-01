# Session: Consciousness and its agentive role

**Date:** 2026-09-01
**Session ID:** S22
**Primary question:** Which concept of consciousness does the agency model require, and in what sense can conscious states be determined?
**Dependencies:** C55–C66, C125–C126, S07, S20
**Target depth:** F1 conceptual partition with local F2 notation

## Starting position

The project treats created free agents as conscious originating subjects, but “consciousness” has so far covered several different properties. The preferred clarification is that phenomenal consciousness can coexist with causal determination of some experiences. Libertarian freedom requires a further agentive relation: a conscious subject originates the token act under live alternatives without sufficient prior settlement.

## Consciousness layers

| Symbol | Working definition | Relation to freedom |
| --- | --- | --- |
| $PCon(A,t)$ | There is a unified first-person phenomenal field for $A$ at $t$: something it is like for $A$ to undergo its current experience. | required for the project's conscious subject, insufficient for freedom |
| $ACon(A,p,t)$ | Content $p$ is available to $A$ for reasoning, deliberation, report where applicable, or flexible guidance of action. | can guide action, insufficient for originating it |
| $SCon(A,t)$ | $A$ represents itself, at least minimally, as the subject of some states or actions. | supports reflective agency but need not occur explicitly in every free act |
| $AgCon(A,a,t)$ | Phenomenal and practically accessible contents participate in $A$'s own originating exercise producing act $a$. | agentive use of consciousness, not a synonym for consciousness as a whole |

The definitions do not decide whether phenomenal consciousness reduces to functional access, neural realization, a non-reductive property, a dual aspect, or a substance-level feature.

## Determined conscious states

A conscious state can have sufficiently determining prior causes:

\[
PCon(A,t)
\land C^-_A\models HasExperience(A,c,t).
\]

There is no formal contradiction. A visual experience caused by incoming light, pain caused by injury, an involuntary emotion, or even a fully determined stream of experience could remain phenomenally conscious. Phenomenology alone does not specify the causal source of its content.

This does not make the project's free agents deterministic. Freedom is token-relative:

\[
Free(A,a,t)
\Rightarrow
PCon(A,t)
\land \exists p\,ACon(A,p,t)
\land Originates(A,a,t)
\land |\mathcal O_A(C_A^-)|\geq2
\land C_A^-\not\models Settles(A,a,t).
\]

The access-conscious content $p$ can influence, motivate, or render $a$ intelligible without sufficiently producing it. $AgCon$ says that consciousness is causally and practically involved in the whole agent's exercise; $Originates$ carries the irreducible sourcehood claim.

## Why not define consciousness as free?

Building indeterminacy into $PCon$ would make the main freedom claim circular and would exclude conscious but unfree states by vocabulary rather than argument. The stronger category $AgCon$ records the role consciousness plays in a free act while leaving phenomenal consciousness itself causally neutral.

A subject can therefore instantiate several cases:

| Case | Phenomenally conscious? | Access-conscious? | Originates token act? | Free under this model? |
| --- | --- | --- | --- | --- |
| reflex or compelled movement with awareness | yes | possibly | no | no |
| deliberation followed by sufficient neural/event determination | yes | yes | no | no |
| conscious reason-guided originating exercise | yes | yes | yes | yes, if live alternatives remain |
| conscious perception not involved in a choice | yes | possibly | not applicable | freedom question does not arise for that state |

## Actuality and divine knowledge

MKO can contain the modal profile of a possible conscious type:

\[
MKO(G):Possible(PConType(T))
\land PossibleOriginatingPowers(T).
\]

An instantiated phenomenal token $c_A(t)$ and an originated act $a$ belong to complete actuality only in the obtaining history:

\[
PartOf(c_A(t),H^*)\land PartOf(a,H^*)
\Rightarrow K_G(HasExperience(A,c,t))\land K_G(Act(A,a,t)).
\]

For a deterministically generated conscious state, $S$ and the causal past may sufficiently explain why that token occurs. For a libertarian act, the conscious agent's originating exercise supplies the contrastive contribution. In either case ACO knows the actual content without temporal acquisition.

CH03 remains stronger: truth-complete knowledge that $A$ has experience $c$ may or may not exhaust acquaintance, empathy, or knowing $A$ in an irreducibly second-person manner.

## Adversarial tests

| Objection | Result |
| --- | --- |
| If consciousness is determined, the subject is only a machine | Too quick; determined phenomenal states do not decide whether other token acts are originated. A wholly determined subject would fail libertarian agency, not consciousness by definition. |
| Consciousness automatically supplies free will | Rejected; awareness can accompany compulsion or sufficient event causation |
| Adding $AgCon$ hides freedom inside a definition | Avoided by keeping $Originates$, live alternatives, and non-settlement as independently testable conditions |
| Access-conscious reasons determine whatever action follows | Rejected; availability and influence do not entail sufficient settlement |
| Phenomenal consciousness can be epiphenomenal in a free act | Rejected for this model; conscious contents must participate in the agent's efficacious exercise |
| Every free act requires explicit self-reflection | Rejected; $SCon$ can support agency without being occurrently represented in every act |

## Decisions

| Decision | Status | Reason |
| --- | --- | --- |
| Separate phenomenal, access, self, and agentive consciousness | accepted | They answer experiential, functional, reflexive, and causal questions respectively |
| Define phenomenal consciousness as intrinsically undetermined | rejected | It would make the freedom argument circular and overgeneralize openness to every experience |
| Require phenomenal subjectivity in the project's free agent | preferred | The intended source is a genuine subject, not merely an information-processing locus |
| Require access/practical availability for reason-guided free action | preferred | Reasons must be available to guide the whole agent's exercise |
| Require consciousness to participate causally in free action | preferred | Prevents consciousness from becoming an epiphenomenal witness |
| Settle the metaphysical realization of consciousness | deferred | Reductive, non-reductive, dual-aspect, and substance accounts remain open |

## Literature and novelty notes

- The [Stanford Encyclopedia of Philosophy entry on consciousness](https://plato.stanford.edu/entries/consciousness/) distinguishes phenomenal, access, reflexive, and other consciousness concepts and cautions against treating consciousness as one univocal entity.
- [Ned Block, “On a Confusion about a Function of Consciousness”](https://doi.org/10.1017/S0140525X00038188), distinguishes phenomenal experience from availability for reasoning and rational control of action.
- The [Stanford Encyclopedia of Philosophy entry on the neuroscience of consciousness](https://plato.stanford.edu/entries/consciousness-neuroscience/) reviews the phenomenal/access distinction and the disputed relation between them.

The $AgCon$ layer is a project-specific integration of established consciousness distinctions with the existing conscious-sourcehood and agent-causal model. No novelty claim is made.

## Definition architecture

[The working glossary](../ontology/glossary.md) is the canonical definition register. The treatise should repeat a concise definition at first argumentative use, and a later formal appendix should collect symbols and satisfaction conditions. This avoids both scattered redefinition and a final text that requires constant dictionary lookup.

## Next question

Return to goodness and type the proposed normative bridge from $G$ to created conscious subjects: existential grounding, constitutive value, recognition, approval, and institution must not be collapsed.

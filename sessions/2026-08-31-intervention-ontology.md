# Session: Intervention Ontology

**Date:** 2026-08-31
**Session ID:** S04
**Primary question:** How can divine interventions be typed and tested for compatibility with agent autonomy?
**Dependencies:** E+, asymmetric co-production, agent origination, miracle, providence
**Starting ledger items:** C15–C18, C31–C34

## Direction

With structural actualization and asymmetric co-production provisionally coherent, the discussion moves to intervention. It must not return to foreknowledge. In E+, an intervention changes a temporal continuation and is also a constituent of the complete history that results.

## General form

\[
I_j=\langle G,\tau,x,m,e_t\rangle.
\]

The source is $G$, $\tau$ identifies the target type, $x$ the particular target, $m$ the mode of action, and $e_t$ the temporal manifestation. The divine origin is not required to occur at an earlier divine time.

## History-change clarification

For a shared prefix $P_t$:

\[
H_I=P_t\oplus I_t\oplus C_I,
\qquad
H_0=P_t\oplus C_0,
\qquad
H_I\neq H_0.
\]

If intervention occurs, $\alpha_I=H_I$; in the comparison without it, $\alpha_0=H_0$. The intervention therefore changes which complete history is actual in the causal or counterfactual comparison. What does not occur is a meta-temporal process in which God first makes $H_0$ actual and later edits it. Law- or boundary-level intervention may change the modal history-space as well as its actual member.

The target taxonomy is:

- $I_0$: existence or generative structure;
- $I_B$: boundary or initial condition;
- $I_L$: law or local nomic operation;
- $I_X$: physical state or event;
- $I_C$: circumstances, information, incentives, or opportunities;
- $I_P$: agent capacity or disposition;
- $I_A$: originating act.

$I_0$ is retained as creation or intervention zero, although it constitutes the causal arena rather than intervening inside one.

## Autonomy test

Distinguish physically executable actions from acts the agent can originate freely:

\[
Feas_I(A,t)=\{a:a\text{ is physically executable after }I\},
\]

\[
Orig_I(A,t)=\{a:a\text{ remains freely originable after }I\}.
\]

After incorporating an intervention among the relevant circumstances:

\[
Free(A,a,t\mid I)
\Rightarrow
Originates(A,a,t)
\land |Orig_I(A,t)|>1
\land\neg SufficientCause(I,a).
\]

Two different failures are possible:

\[
OptionClosure(I,A,t)\leftrightarrow |Feas_I(A,t)|=1,
\]

\[
SourceOverride(I,A,a,t)\leftrightarrow
|Feas_I(A,t)|>1
\land SufficientCause(I,a)
\land\neg Originates(A,a,t).
\]

Option closure leaves one executable action. Source override leaves several physically executable actions but determines which one occurs. They are not equivalent, can coincide, and concern a token act unless the intervention also removes the agent's general powers.

An intervention can therefore:

1. modify feasible and originable fields while retaining genuine alternatives;
2. influence an agent within those fields without sufficiently causing the act;
3. close feasible options or override the agent as source.

The first two can preserve libertarian autonomy; the third does not preserve it for the act. Changing information, incentives, circumstances, or powers has no uniform autonomy effect. A power intervention could restore rather than diminish agency.

## Boundaries

The current test concerns whether the creature remains the originating source with alternatives. It does not yet measure moral responsibility, manipulation, blame, or goodness. Those may vary by degree even when libertarian autonomy remains.

A miracle need not violate a law or be scientifically detectable. The existing definition applies when an event's sufficient causal explanation is not exhausted by ordinary secondary causes.

## Next question

Prioritize agency-preserving forms of $I_C$ and $I_P$: information, incentives, environmental changes, and capacity restoration. Agency-removing cases remain boundary conditions. Then apply the model to miracle and providence.

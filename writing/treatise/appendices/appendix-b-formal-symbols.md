# Appendix B — Formal Symbols, Scope, and Satisfaction Conditions

*First pass (S69, 2026-09-02). Hand-written; the canonical statements are in `ontology/core-architecture.md` and the sessions cited. Each entry gives the symbol, what it ranges over, its satisfaction condition or definition, its status, and its home. Symbols introduced by the author's trunk sessions are marked (trunk); those from the question-driven track are marked (qd) and, where reconciled, point to the canonical trunk symbol.*

## B.1 The actual order and its knowledge

| Symbol | Scope | Definition or condition | Status | Home |
| --- | --- | --- | --- | --- |
| $G$ | the necessary agent | the ultimate ground of the contingent order; a conscious agent that settles among eligible structures for reasons | preferred (C05) | Part III |
| $S=\langle L,C,B,O\rangle$ | generative structure | laws, constants, boundary conditions, and ontic kinds of a created order | accepted (C07) | Part IV |
| $\mathcal H(S)$ | admissible complete histories of $S$ | continuations compatible with $S$; a representation of compossible manifestations, not concrete blocks | preferred (C49) | S05 |
| $H^*$ | the actual complete created history | the member of $\mathcal H(S)$ that obtains; tenselessly complete | preferred (C22) | S01 |
| $\mathfrak R^*=\langle G,S,H^*,\mathbf I^*,Rel^*\rangle$ | complete actual reality | the agent, the structure, the history, every actual intervention, every obtaining dependence relation | provisional (C47) | S05 |
| $\alpha$ | the actual marker | $\alpha:=\iota h\,Actual(h)$; $Actual(h)\leftrightarrow Obtains(h)$; not a further entity or divine selection | preferred (C29) | S02–S03 |
| $\mathfrak M=\langle\mathcal H(S),R,\alpha\rangle$ | pointed modal structure | admissible histories, accessibility, and the actual index; alternative evaluations vary $\alpha$ with the unpointed structure fixed | preferred (C27–C28) | S02 |
| $h\equiv_{<t}h'$ | histories | same relevant creaturely causal past before $t$, including $S$, not including divine knowledge-content | preferred | S02 |
| $Alt(A,t,h)$ | live alternatives | $\{h'\in\mathcal H(S):h'\equiv_{<t}h\land Act(A,t,h')\neq Act(A,t,h)\}$ | preferred | S02 |
| $ACO(G)$ | actuality-complete omniscience | $\forall p[True_{\mathfrak R^*}(p)\rightarrow K_G(p)]$; exhaustive, factive, atemporal, non-productive | accepted (C11, C23) | S05 |
| $MKO(G)$ | modal knowledge | $\forall q[ModalTrue_{\mathfrak M}(q)\rightarrow K_G(q)]$ over $\langle N,\Sigma_G,\mathcal H,\mathcal O\rangle$; no selection counterfactuals | preferred (C12, C13) | S05 |
| $N=N_L\cup N_M\cup N_G$ | necessary constraints | logical/identity; mathematical consequences of specified structures; necessities from $G$'s independently established essence | preferred (C52) | S05 |
| $ASA(G,A)$ | actual subject acquaintance | $Actual(A)\land ConsciousSubject(A)\land DirectEpistemicAccess(G,A)\land\forall c[ActualStateOf(c,A)\rightarrow GraspsAsPresentedTo(G,c,A)]$ | preferred (C284) | S34 |
| $K_G^{total}=\langle ACO_P,MKO,ASA\rangle$ | divine epistemic profile | role-structured, not stages or faculties | preferred (C289) | S34 |
| $K_G^{h}(p)$ iff $h\vDash p$ | local ACO semantics | grounding biconditional, not temporal | preferred | S02 |
| $Cog(A,i,c,t)$, $HasContent(i,c)$ | finite cognition | actual temporal manifestation $i$ of embodied subject $A$ with an instantiated content-profile $c$ | preferred F2; accepted (C624) | S76 |
| $c_i=\langle m,f,\rho,\alpha,\kappa\rangle$ | content-profile normal form | mode, representational format, target-role, anchoring profile, and typed satisfaction/accuracy profile; analytic aspects, not mental parts | accepted analytic device (C624) | S76 |
| $c_i\equiv_C c_j$ | repeatable content | equivalence of token profiles at a selected content-relevant grain; type abstraction without required independent abstract causation | preferred; accepted (C625) | S76 |
| $PurportsRef(i,\rho)$, $Ref(i,x)$ | target-role; actual reference | purport does not entail a referent; reference requires actual $x$, a successful plural route, and role-fit | preferred distinction/schema; accepted (C626–C627) | S76 |
| $PossSat(\rho)$, $PossSat^{partial}(\rho)$ | modal target satisfaction | an `Adm_C` specification contains a role-fitting satisfier; a partial role has an admissible completion that does | accepted integration (C628) | S76 |
| $FicArt(F)$, $Introduces(F,\rho_F)$, $In_F(P(\rho_F))$ | public fiction | actual artifact/practice and stabilized dossier-role; fiction-internal predication without a required concrete character | preferred minimum; accepted (C629) | S76 |
| $CausalContent(i,e)$ | content-sensitive causal role | the actual contentful episode manifests the integrated subject's cognitive power and contributes to $e$; target/type is no second efficient cause | preferred F2; accepted (C631) | S76 |

## B.2 Agency and intervention

| Symbol | Scope | Definition or condition | Status | Home |
| --- | --- | --- | --- | --- |
| $Originates(A,a,t)$, $Settles(A,a)$ | agent causation | the whole embodied agent settles the act; no homunculus | preferred (C55–C60, C136) | S06–S07, S29 |
| $D_A(t)=\langle E_t,R_t,F_t,\Pi_t\rangle$ | deliberative situation | information, reasons and incentives, feasible opportunities, agentive capacities | provisional device | S04 |
| $I_j=\langle G,\tau,x,m,e_t\rangle$ | intervention | agent, target type $\tau\in\{0,B,L,X,C,P,A\}$, target, mode, temporal manifestation | accepted (C15, C35) | S04 |
| $H_I=P_t\oplus I_t\oplus C_I$, $H_0=P_t\oplus C_0$ | history comparison | the intervention changes which complete history is actual in the comparison; no meta-temporal edit | accepted (C22) | S04 |
| $Feas_I(A,t)$, $Orig_I(A,t)$ | alternatives after $I$ | physically executable acts; acts that remain originable | provisional (C36) | S04 |
| $Free(A,a,t\mid I)$ | token freedom | $Originates(A,a,t)\land\lvert Orig_I(A,t)\rvert>1\land\neg SufficientCause(I,a)$ | preferred (C36) | S04 |
| $AgentRelevant(I)$ | agent relevance | $\exists A,t[D_A^I(t)\neq D_A^0(t)]$; independent of target type | accepted | S04 |
| $Miracle(e)$ | event classification | $\exists I_j\neq I_0[DirectlyContributes(I_j,e)\land\neg OrdinaryExhaustive_S(e)]$ | preferred (C43) | S04 |
| $Prov_A=\langle OEC(G,\mathcal C_0,S^*),\mathcal R_G,\mathbf I^*,H^*\rangle$ | providence | global relation; adds no causal arrow | preferred (C117) | S19 |
| $Impact_A(I,A,t)$ | agency impact | $\langle\Delta Feas_I,\Delta Orig_I,\Delta Capacity_I,SourceStatus_I\rangle$; non-scalar | preferred (C116) | S19 |
| $AE(A,\tau)=\langle TS,OR,CP,EA,RR,SF,RC\rangle$ (trunk) | agency ecology | token sourcehood, originable range, capacities, epistemic access, revisability, self-formation, resistance routes | preferred (C299) | S35 |
| $Capture(X,A,\tau,q)$ (trunk) | governance capture | targets, controls high-leverage inputs, adaptively neutralizes deviation, restricts revision routes | preferred (C301) | S35 |
| $\langle FreeTok,RobustCap,DiaAuth\rangle$ (trunk) | three standings | token freedom; accessible uncaptured revision route; realized self-formation | preferred (C305–C307) | S35 |
| $Funnel(\pi,A,\tau,T)$, $EvAuth$ (qd) | profile-level closure; evaluative authorship | every originable sequence lands in $T$; standards contrastively the agent's own; refinements of $AE$ | accepted (C497–C500), reconciled C541 | S51 |
| $GSDA$ (trunk) | causal distribution | $GlobalGrounding\land RealSecondaryEfficacy\land SparseDirectExercise$ | accepted (C380) | S41 |
| $CCS_G$ (trunk) | substitutability | $\forall q[EligibleOutcome_C(q)\land SourceNeutral(q)\rightarrow CanDirectlySettle(G,q)]$ | preferred (C383, C397) | S41–S42 |
| $RespondsTo(I,p)$ (qd) | responsive intervention | $Actual(p,H^*)\land PartOf(I,H^*)\land p\in Reasons(I)$ | accepted (C549) | S63 |
| WFR (qd) | well-founded responsiveness | $RespondsTo(I,p)\rightarrow\neg(I\lhd^+ p)$; hence $RespondsTo(I,a)\rightarrow\neg AgentRelevant_{A,\le t_a}(I)$ | accepted consequence (C550–C551) | S63 |

## B.3 Constitution, production, and power

| Symbol | Scope | Definition or condition | Status | Home |
| --- | --- | --- | --- | --- |
| $UPSS(G)$ | divine constitution | underived power-structured subject: thin substance, identity unit and bearer, no prior ingredients or substrate | preferred (C223–C228) | S30 |
| $MCS(G)$ | minimal constitutive simplicity | no parts as ingredients; aspect-powers; does not entail absolute simplicity | preferred (C227, C492) | S30, S50 |
| $P_{OEC}$, $OEC^+(G,C,S)$ | originative existential power; creation | patient-independent production of a created basis $C$ instantiating $S$, under $CCD$ | preferred (C229–C236, C248) | S30–S31 |
| $CreatesExNihilo(G,x)$ | creation without material input | $Creates(G,x)\land\neg\exists m\,MaterialInput(m,x)$; absolute nothing is no causal relatum | proposed accepted clarification (C646–C647) | S78 |
| $CT/RI$, $CCD$ | transcendence/immanence; disjointness | constitutive transcendence with relational immanence; creator–creation constitutive disjointness | preferred (C241–C242, C248) | S31 |
| $ED_C, ED_V, ED_P, ED_S$ | *ex deo* senses | causal, virtual/exemplar, participatory (accepted); strict constitutive (open) | C245–C254 | S31 |
| $\Pi_{phys}$, $Mat(x)$ | material profile | $Mat(x)\leftrightarrow Instantiates(x,\Pi_{phys})$ | preferred (C487) | S50 |
| $PMC_T$, $PMC_U$ | material-cause principles | transformation-based (accepted); universal (evidential route removed; $\neg PMC_U$ derived) | C235, C489–C490 | S30, S50 |
| $OMP_C$, $OMP_Q$ | qualified omnipotence | created-order maximality (preferred at F2); unrestricted qualified maximality (provisional) | C261–C262 | S32 |
| $OMP_Q^{\mathcal O_*}$ (trunk) | ontology-relative maximality | $\forall a[Task_G^{\mathcal O_*}(a)\rightarrow StrongCan(G,a)]$ | preferred fragmentwise (C432–C433) | S44 |
| $Adm_C(S)$ (trunk) | constitutive admissibility | $WF\land Cons_{LM}\land EssSat\land PowSat\land Comp\land DepSat_C$; $Poss_C^{ind}(S)\leftrightarrow Adm_C(S)$ | preferred (C344–C345) | S38 |
| $BCP$ | bounded constitutive primitivism | profiles represent objective $Adm_C$ facts; local clauses are grounded by logic, identity, actual essences/powers, compossibility, and dependence; alien-profile coherence remains primitive | proposed preferred F2+ (C649–C652) | S78 |
| $Poss_C^{ind}$ (qd five-clause) | independent possibility | merged into $Adm_C$; model existence explicit; $E_G$ clause relocated to B4 | reconciled (C542) | S56, S59 |
| $CMU_G$, MGC, MUU, GOL (trunk) | conditional modal ultimity | $\Box\forall C[(Exists(C)\land FundCreatedBasis(C))\rightarrow UltimateOrigin(G,C)]$ | preferred (C360–C362) | S39 |
| $Created_G(x)$, $NCC_G(L)$ | creation; non-created concrete | $Created_G(x):=x\neq G\land DependsExistentially(x,G)$; $NCC_G(L):=Concrete(L)\land L\neq G\land\neg Created_G(L)$ | proposed clarification (C586–C590) | S73 |
| $ACD_G$ | actual concrete dependence | $\forall x[(Actual(x)\land Concrete(x)\land x\neq G)\rightarrow DependsExistentially(x,G)]$ | preferred actual thesis at F2; accepted (C634–C645) | S77–S78 |
| $ENCC_G(L)$ | essentially independent necessary concrete | $Concrete(L)\land L\neq G\land \Box Exists(L)\land \Box(Exists(L)\rightarrow\neg DependsExistentially(L,G))$ | accepted rival definition; conditionally excluded by $ACD_G$ (C636–C645) | S77–S78 |
| $CTD_G$, $NCD_G$ | modal contingent-total; necessary-concrete dependence | modal dependence of every contingent concrete; modal dependence of every necessary concrete; under exhaustive modal status, their conjunction is $UCD_G$ | accepted decomposition and bridge diagnosis (C638–C645) | S77–S78 |
| $UCD_G$ | universal concrete dependence | $\Box\forall x[(Concrete(x)\land x\neq G)\rightarrow DependsExistentially(x,G)]$ | conditional modal-sovereignty completion, not derived from $ACD_G$ (C591–C594, C639–C643) | S73, S77 |
| $LTask_G(a,L)$, $NCCBlock_G(L,a)$ | non-created task; blocker | an eligible divine task genuinely concerning $L$; an underived $L$-boundary plus failure of $StrongCan$ | proposed diagnostic (C597–C600) | S73 |
| $CNBIM_G(m)$ | contingent non-basic intrinsic mode | intrinsic, contingent, $PP_G$-compatible, non-executive, non-Cambridge mode adding no essential power, proper part, substrate, or bearer | proposed candidate schema, no positive witness (C604–C605) | S74 |
| $SelfQualAdm_G(a,m)$ | non-destructive self-qualification | independently eligible action with $G$ as direct source and immediate bearer of a $CNBIM$ result | proposed residual task schema (C606–C609) | S74 |
| $SQG_G$, $SQBlock_G(a,m)$ | self-qualificatory range bridge; blocker | universal strong capacity over `SelfQualAdm`; independently possible eligible self-qualification plus failure of $StrongCan$ | bridge not adopted; blocker diagnostic (C609–C615) | S74 |
| $RCB(C,S)$, $AOR$, $Elig_C^G$, $CP_G^{elig}$ (trunk) | root creation; plenitude | root created basis; agentic-origin realization; essence-compatible eligibility; $\forall S[Elig_C^G(S)\rightarrow CanCreate(G,S)]$ | preferred (C369–C376) | S40 |
| $CC_G=CC_G^{+}\land CC_G^{pers}\land CC_G^{ann}$ (trunk) | constitutive control | positive, persistence-sensitive, annihilative ranges | preferred (C385–C401) | S41–S42 |
| $Life_H(x)$, $Ann(G,x,t_1)$ (trunk) | life-set; annihilation | bounded temporal profile; direct terminal boundary with no specified created remainder | preferred (C392–C395) | S42 |
| $NF_G(a)=\langle s,p,q,\pi,\sigma\rangle$, $CAN_G$ (trunk) | task normal form; created-action normalization | agent, patient, contrastive result, preservation, source roles; root, type-outcome, or fixed-prefix form | preferred (C420–C423) | S44 |
| $HI_G^{elig}$, $LPC_G$, $HistComp_C$ (trunk) | fixed-history intervention | eligibility relative to an exact prefix and preservation profile; local prefix composability | preferred (C406–C418) | S43 |

## B.4 Identity

| Symbol | Scope | Definition or condition | Status | Home |
| --- | --- | --- | --- | --- |
| $=_N$, $IdFact_H(x,t_1,t_2)$ (trunk) | numerical identity | absolute, fundamental, one-to-one; the identity fact in a complete history | preferred (C435–C437) | S45 |
| $PP_K=\langle U_K,O_x,C_K,B_K,E_K\rangle$, $ContPers_K$ (trunk) | persistence profile | kind-sensitive; unity, origin anchor, causal-organizational continuity, non-branching, essence | preferred (C438–C441) | S45 |
| $EmbodiedUnit(A,t)$ (trunk) | synchronic individuation | living bearer, integrated organization, unified power profile, operational boundary | preferred (C442) | S45 |
| $GapAdm_K$, $GapIdentity_C$, $NumRecreate$, $DupRecon$ (trunk) | gappy careers; recreation | identity fact, origin anchor, essence, non-branching, one grounded career; recreation vs duplicate | preferred (C447–C453) | S45 |
| $PP_G$ (trunk) | divine identity profile | underived subject, necessary existence, unified agency, $UPSS$, essential powers | preferred (C454) | S45 |
| simple persistence (qd) | sources | identity of a source not constituted by continuity; retained as agency-side refinement | reconciled (C528, C556) | S53, S68 |
| $TokenOnset(B,t_0)$ | temporal beginning of a created subject | first actual stage of $B$'s career; prior type possibility does not supply a de re individual; exact organismic threshold open | proposed accepted clarification (C653–C654) | S78 |

## B.5 Value and the P-gap

| Symbol | Scope | Definition or condition | Status | Home |
| --- | --- | --- | --- | --- |
| $\mathcal A_{min}=\{P,S,R\}$ | anchors | conscious valence, agentive sourcehood, truthful recognition or relation | preferred (C187) | S27 |
| $Fit_*(x,a,B,C,\tau)$ | objective fit | bearer eligibility, directed anchor profile, apt proportionate response, scope, defeat | preferred (C188–C189, C203) | S27–S28 |
| $GoodOrient_a(G)$ | good-orientation | $\forall d\in Disp^{est}(G)[Relevant(d,a)\rightarrow Fit_*(d,a,\ldots)]$; holds for $S,R$; undefeated exhaustive response remains open for $P$ | preferred/open (C463–C464, C622–C623) | S48, S75 |
| $Permits(G,s)$, $Cover(r,s)$, $Gratuitous(s)$ | permission structure | $Occurs(s)\land CanPrevent(G,s)\land\neg Prevents(G,s)$; undefeated misfit prevention would produce; permitted with no cover | accepted (C473) | S48 |
| $ContHorizon(B)$ | continuation | numerically same bearer with undefeated $P$-fit beyond $Life(B)$, anywhere in $\mathfrak R^*$ | conditional (C480–C485) | S49 |
| typed creative reason $\langle ground,target,mode,level\rangle$ | reasons | the fact grounding a reason is distinguished from its response target; requiring/favoring/justifying at creation/architecture/specification | accepted refinement (C521, C616) | S56, S75 |
| $PCase(x,B,C,\tau)$, $RespScope(A,B,x,C,\tau)$ | P-reason applicability | an obtaining realization, protection, loss, or corruption of P-fit; $A$ can identify it and its bearer, can respond, and stands in a pertinent causal, creative, or personal nexus | preferred conditional (C618) | S75 |
| $Applies(r,A)$, $Owns(A,r)$, $Exercises(A,r,\alpha)$ | reason standings | normative applicability; uptake into the agent's profile; explanatory exercise in an act | accepted distinction (C617) | S75 |
| $r_P^{thin}$ | valence-directed reason | structural-profile-indexed in creative deliberation and de re bearer-indexed in actual response; favoring without maximizing or guaranteeing undefeated response | preferred at F2 (C621–C623) | S75 |
| $StructuralVulnerability(S)$ | profile-relative exposure | stable secondary causation, finite embodiment, plural agency, and temporal goods expose bearers to loss, conflict, or harm; no token-permission inference | proposed preferred (C655–C657) | S78 |

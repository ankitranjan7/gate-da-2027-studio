import type { ChapterData } from '../../types/curriculum'

export const MODULE_11_CHAPTERS: ChapterData[] = [
  {
    id: 'logic-ch1',
    number: 1,
    title: 'Propositional Logic: Entailment, Implications & Resolution',
    shortTitle: 'Propositional Logic',
    estimatedHours: 3.5,
    dayLabel: 'Week 5 · Day 3',
    tagline:
      'Let’s start from a simple 4-row rain-and-sprinkler box so you truly feel why $P \\to Q$ is one-way, why proving $KB \\models \\alpha$ is the same as showing $KB \\land \\neg\\alpha$ is impossible, and how CNF Resolution and Horn clauses automate deduction.',
    syllabusMapping: [
      'Section 7 (Artificial Intelligence): Logic — Propositional Logic',
      'Knowledge representation, semantic entailment, satisfiability, CNF & resolution inference',
    ],
    whatIsImportant: [
      'Implication rewriting ($P \\to Q \\equiv \\neg P \\lor Q$) and distinguishing Contrapositive ($\\neg Q \\to \\neg P$) from Converse ($Q \\to P$) & Inverse ($\\neg P \\to \\neg Q$) — tested in GATE DA 2024 Q.29, 2025 Q.15, 2026 Q.38',
      'Semantic entailment ($KB \\models \\alpha$) equivalence with tautology ($\\models KB \\to \\alpha$) and refutation ($KB \\land \\neg\\alpha$ unsatisfiable) — tested directly in GATE DA 2026 Q.24',
      'Translating English conditionals ("only if", "unless", "requires", "necessary vs sufficient") into forbidden-world clauses without flipping arrow direction',
      'Converting formulas to CNF, applying single-literal Resolution to derive $\\square$, and recognizing Horn clauses ($\\le 1$ positive literal)',
    ],
    whatIsNotImportant: [
      'Hilbert axiomatic proof systems or Gentzen sequent calculus — 0 marks in GATE DA',
      'Modal logic ($\\square, \\diamond$), temporal logic (LTL/CTL), or fuzzy/many-valued logic',
      'Karnaugh maps, Quine–McCluskey minimization, or digital logic gate circuit synthesis',
    ],
    inboundStream:
      'Module 10 (Search & Adversarial Trees) — shifting from searching explicit state graphs to reasoning over symbolic truth assignments.',
    outboundStream: [
      'Module 11 Ch.2: First-Order Logic, Quantifiers, Countermodels & Unification',
      'Module 12: DBMS Tuple Relational Calculus & SQL WHERE/EXISTS Predicates',
      'Module 15: Probabilistic Graphical Models (hard logical constraints as 0/1 CPT entries)',
    ],
    glossary: [
      {
        term: 'Proposition (Atomic Sentence)',
        symbol: '$P, Q, R$',
        plainEnglish:
          'A single declarative statement that is unambiguously either TRUE ($T$) or FALSE ($F$) in any given world—never half-true and never a question.',
        tinyExample: '$P = \\text{"It rained"}$ and $Q = \\text{"The lawn is wet"}$ are propositions.',
      },
      {
        term: 'Model (Truth Assignment)',
        symbol: '$\\mathcal{M}(\\Phi)$',
        plainEnglish:
          'One complete row of a truth table assigning $T$ or $F$ to every atom; if that row makes formula $\\Phi$ evaluate to TRUE, we call it a model of $\\Phi$.',
        tinyExample: 'For $KB = (A \\lor B) \\land \\neg A$, the lone model out of $4$ worlds is $(A=F, B=T)$.',
      },
      {
        term: 'Material Implication',
        symbol: '$P \\to Q$',
        plainEnglish:
          'A one-way promise (“if $P$, then $Q$”) that is FALSE in only one single case: when the premise $P$ is TRUE and the conclusion $Q$ is FALSE. Whenever $P$ is FALSE, the promise holds vacuously.',
        tinyExample: '$P \\to Q \\equiv \\neg P \\lor Q$ is TRUE at $(F, T)$ and $(F, F)$, and FALSE only at $(T, F)$.',
      },
      {
        term: 'Contrapositive vs. Converse & Inverse',
        symbol: '$\\neg Q \\to \\neg P$',
        plainEnglish:
          'Flipping and negating both sides of $P \\to Q$ gives the contrapositive $\\neg Q \\to \\neg P$, which is 100% logically equivalent; merely swapping ($Q \\to P$, converse) or merely negating ($\\neg P \\to \\neg Q$, inverse) changes the meaning!',
        tinyExample: '“If it rained, the lawn is wet” is equivalent to “If the lawn is dry, it did not rain.”',
      },
      {
        term: 'Necessary vs. Sufficient Condition',
        plainEnglish:
          'If $P$ is **sufficient** for $Q$, having $P$ guarantees $Q$ ($P \\to Q$). If $P$ is **necessary** for $Q$, you cannot have $Q$ without $P$ ($Q \\to P$).',
        tinyExample: 'Oxygen is necessary for Fire ($\\text{Fire} \\to \\text{Oxygen}$), not sufficient (an oxygen tank alone doesn’t burn).',
      },
      {
        term: 'Tautology (Valid Formula)',
        symbol: '$\\models \\Phi$',
        plainEnglish:
          'A formula that evaluates to TRUE in every single row of its truth table—no matter what truth values you plug in, you can never falsify it.',
        tinyExample: '$(p \\to q) \\to (\\neg q \\to \\neg p)$ and $p \\lor \\neg p$ are tautologies.',
      },
      {
        term: 'Satisfiable vs. Contradiction (Unsatisfiable)',
        symbol: '$\\bot$',
        plainEnglish:
          'A formula is satisfiable if at least one truth assignment makes it TRUE, and a contradiction (unsatisfiable) if every single truth assignment makes it FALSE.',
        tinyExample: '$P \\lor Q$ is satisfiable ($3$ models), while $P \\land \\neg P$ is a contradiction ($0$ models).',
      },
      {
        term: 'Semantic Entailment',
        symbol: '$KB \\models \\alpha$',
        plainEnglish:
          'Means that in every single world where your knowledge base $KB$ is TRUE, query $\\alpha$ is also guaranteed to be TRUE—equivalently, $KB \\land \\neg\\alpha$ has zero models.',
        tinyExample: 'Since every model of $(A \\lor B) \\land \\neg A$ has $B = T$, we write $(A \\lor B) \\land \\neg A \\models B$.',
      },
      {
        term: 'Literal & Clause',
        symbol: '$L, \\neg L$',
        plainEnglish:
          'A literal is either a plain atom ($P$, positive) or a negated atom ($\\neg P$, negative). A clause is a disjunction (OR-chain) of literals.',
        tinyExample: 'In $(\\neg P \\lor Q \\lor R)$, $\\neg P$ is a negative literal and $Q, R$ are positive literals.',
      },
      {
        term: 'Conjunctive Normal Form (CNF)',
        plainEnglish:
          'A standardized AND-of-ORs layout where every formula is rewritten as a conjunction of clauses—the exact input format required by Resolution and SAT solvers.',
        tinyExample: '$(P \\to Q) \\to R$ converts cleanly to CNF as $(P \\lor R) \\land (\\neg Q \\lor R)$.',
      },
      {
        term: 'Binary Resolution & Empty Clause',
        symbol: '$\\square$',
        plainEnglish:
          'A single mechanical inference rule that merges two clauses by canceling exactly one complementary literal pair ($L$ and $\\neg L$). Reaching the empty clause $\\square$ from $KB \\land \\neg\\alpha$ proves $KB \\models \\alpha$ by contradiction.',
        tinyExample: 'Resolving $(P \\lor Q)$ with $(\\neg P)$ cancels $P$ to yield $(Q)$; resolving $(R)$ with $(\\neg R)$ yields $\\square$.',
      },
      {
        term: 'Horn Clause',
        symbol: '$\\le 1$ positive literal',
        plainEnglish:
          'A special CNF clause containing at most one positive literal (e.g., $P_1 \\land \\dots \\land P_k \\to H$). Horn knowledge bases are magical because entailment runs in linear time $O(|KB|)$ via forward/backward chaining.',
        tinyExample: '$\\neg P \\lor \\neg Q \\lor R$ is Horn ($1$ positive literal); $P \\lor Q$ is NOT Horn ($2$ positive literals).',
      },
    ],
    generatorId: 'truth-entailment-gen',
    concepts: [
      {
        id: 'm11-c1-1',
        title: 'Material Implication, Contrapositive vs. Converse Traps & English Connectives',
        subtitle: 'Why "If $P$ then $Q$" is a one-way promise that only breaks when $P=T$ and $Q=F$',
        priority: 'core-pillar',
        buildsOn: 'Boolean truth values ($T/F$) and $\\neg, \\land, \\lor$',
        toyExample: {
          title: 'The 2-Atom Rain & Wet-Grass Contract',
          scenario:
            'Let $P$ = "It rained" and $Q$ = "The lawn is wet". Consider the rule $P \\to Q$ ("If it rained, then the lawn is wet") across the 4 possible truth worlds $(P, Q) \\in \\{F, T\\}^2$.',
          walkthroughSteps: [
            '1. **World $(T, T)$:** It rained and the lawn is wet — the promise kept! $P \\to Q$ is **TRUE**.',
            '2. **World $(T, F)$:** It rained, yet the lawn is dry — the promise is **BROKEN**! $P \\to Q$ is **FALSE**.',
            '3. **World $(F, T)$ (The Sprinkler Trap!):** It did NOT rain, and the lawn is wet (maybe a sprinkler ran). Did the rain rule lie? No — it made no promise when $P = F$! So $P \\to Q$ is **TRUE**, while the **Converse** $Q \\to P$ is **FALSE** ($T \\to F$).',
            '4. **World $(F, F)$:** No rain, dry lawn — $P \\to Q$ is vacuously **TRUE**.',
          ],
          ahaMoment:
            'Stare at the single row where $P \\to Q$ breaks: $(P=T, Q=F)$. Notice that is the exact same lone row where $\\neg P \\lor Q$ fails, and the exact same lone row where the **Contrapositive** $\\neg Q \\to \\neg P$ fails ($T \\to F$)! Two formulas with the exact same failure row are always identical.',
        },
        theoremAndFormula: {
          statement:
            'Material implication $P \\to Q$ is logically equivalent to both its **disjunction form** and its **contrapositive**, and is **never** equivalent to its converse or inverse:',
          formulaLatex:
            'P \\to Q \\equiv \\neg P \\lor Q \\equiv \\neg Q \\to \\neg P \\qquad \\text{whereas} \\qquad P \\to Q \\not\\equiv Q \\to P \\equiv \\neg P \\to \\neg Q',
          plainEnglishDecoding:
            'Whenever an arrow $A \\to B$ looks tangled, rewrite it immediately as “either $A$ is false, or $B$ is true” ($\\neg A \\lor B$). And keep these three English translations tucked in your pocket: “$P$ **if** $Q$” means $Q \\to P$; “$P$ **only if** $Q$” means $P \\to Q$; and “$P$ **unless** $Q$” means $\\neg Q \\to P \\equiv P \\lor Q$.',
          workedMiniExamples: [
            {
              prompt: 'Verify without a truth table whether $(p \\to q) \\to (\\neg q \\to \\neg p)$ is a tautology.',
              solution:
                'Since $p \\to q \\equiv \\neg q \\to \\neg p$ (contrapositive), both sides of the outer $\\to$ are identical ($X \\to X \\equiv \\neg X \\lor X \\equiv \\top$). Hence it is a **tautology**.',
            },
            {
              prompt:
                'Translate: "You succeed ($S$) only if you are creative ($C$) or disciplined ($D$)."',
              solution:
                '"$S$ **only if** $(C \\lor D)$" means $S$ cannot happen without $(C \\lor D)$: $S \\to (C \\lor D)$, NOT $(C \\lor D) \\to S$.',
            },
          ],
        },
        sandboxId: 'logic-truth-lab',
        msqTraps: [
          {
            myth: '"$P$ is a necessary condition for $Q$" translates to $P \\to Q$.',
            reality:
              'Necessary means without $P$, $Q$ cannot occur ($\\neg P \\to \\neg Q$), which is $Q \\to P$! **Sufficient** maps forward ($P \\to Q$); **Necessary** points backward ($Q \\to P$).',
            counterExample:
              'Oxygen ($P$) is necessary for Fire ($Q$): $\\text{Fire} \\to \\text{Oxygen}$ is true, whereas $\\text{Oxygen} \\to \\text{Fire}$ fails in an empty oxygen tank.',
          },
          {
            myth: 'If $P$ is false, $P \\to Q$ is "undefined" or "false".',
            reality:
              'Material implication with a false antecedent is always **vacuously TRUE**, regardless of $Q$.',
            counterExample:
              '$(p \\land \\neg p) \\to q$ is a tautology even when $q = \\text{False}$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5: DBMS',
            targetWeek: 6,
            topic: 'SQL Filtering & CHECK Constraints',
            whyItMatters:
              'SQL queries have no `IMPLIES` operator; encoding "if $P$ then $Q$" in a `WHERE` or `CHECK` clause requires rewriting it as `(NOT P) OR Q`.',
          },
        ],
      },
      {
        id: 'm11-c1-2',
        title: 'Models, Satisfiability, Validity & Semantic Entailment ($KB \\models \\alpha$)',
        subtitle: 'Why entailment means "no counter-world exists" rather than "$\\alpha$ is always true"',
        priority: 'core-pillar',
        buildsOn: 'Truth tables and $P \\to Q \\equiv \\neg P \\lor Q$',
        toyExample: {
          title: 'A 2-Atom Alibi Check',
          scenario:
            'Let $A$ = "Alice has the key" and $B$ = "Bob opened the safe". Suppose our knowledge base is $KB = (A \\lor B) \\land \\neg A$. Out of the 4 worlds $(A, B) \\in \\{(F,F), (F,T), (T,F), (T,T)\\}$, which worlds satisfy $KB$?',
          walkthroughSteps: [
            '1. $\\neg A$ immediately eliminates $(T, F)$ and $(T, T)$, leaving only $(F, F)$ and $(F, T)$.',
            '2. $(A \\lor B)$ eliminates $(F, F)$, leaving a **single model** of $KB$: $(A=F, B=T)$.',
            '3. Check query $\\alpha = B$: In every model of $KB$ (here just $(F, T)$), $B$ is TRUE. Therefore $KB \\models B$.',
            '4. Now check the negation trick: Is $KB \\land \\neg B$ satisfiable? Adding $\\neg B$ wipes out $(F, T)$ too, leaving **0 models** (unsatisfiable!).',
          ],
          ahaMoment:
            'Don’t let the turnstile symbol $\\models$ intimidate you! Entailment $KB \\models \\alpha$ simply means **every world that satisfies $KB$ also sits inside the models of $\\alpha$**: $\\mathcal{M}(KB) \\subseteq \\mathcal{M}(\\alpha)$, which is the exact same thing as saying $KB$ and $\\neg\\alpha$ have zero overlap ($\\mathcal{M}(KB) \\cap \\mathcal{M}(\\neg \\alpha) = \\emptyset$).',
        },
        theoremAndFormula: {
          statement:
            'For any propositional sentences $KB$ and $\\alpha$, **semantic entailment** ($KB \\models \\alpha$), **validity of implication**, and **refutation** are three views of the exact same property:',
          formulaLatex:
            'KB \\models \\alpha \\iff \\models (KB \\to \\alpha) \\iff (KB \\land \\neg\\alpha) \\text{ is Unsatisfiable}',
          plainEnglishDecoding:
            'Keep the three truth-table buckets crystal clear: **Valid (Tautology)** means TRUE in all $2^n$ rows; **Satisfiable** means TRUE in at least $1$ row; **Unsatisfiable (Contradiction)** means FALSE in all $2^n$ rows. So whenever you need to test $X \\models Y$, just ask: “Is $X \\land \\neg Y$ impossible?”',
          workedMiniExamples: [
            {
              prompt:
                'Suppose sentence $X$ entails sentence $Y$ ($X \\models Y$). Is $X \\land \\neg Y$ ever true? (GATE DA 2026 Q.24 pattern)',
              solution:
                'Never! Any assignment making $X$ true must also make $Y$ true (so $\\neg Y$ is false). Hence $X \\land \\neg Y$ is **always FALSE** (unsatisfiable), and $X \\to Y$ is a **tautology**.',
            },
            {
              prompt: 'Does $\\bot$ (False) entail $P$?',
              solution:
                'Yes! $\\mathcal{M}(\\bot) = \\emptyset \\subseteq \\mathcal{M}(P)$ vacuously, and $\\bot \\to P$ is a tautology (principle of explosion).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $KB \\models \\alpha$, then $\\alpha$ itself must be a tautology.',
            reality:
              '$\\alpha$ only needs to be true in the **models of $KB$**, not across all $2^n$ worlds.',
            counterExample:
              '$P \\models P$ holds trivially, yet $P$ is contingent (false when $P = F$).',
          },
          {
            myth: 'If $KB$ is satisfiable and $KB \\not\\models \\alpha$, then $KB \\models \\neg\\alpha$.',
            reality:
              'Some models of $KB$ can satisfy $\\alpha$ while others satisfy $\\neg\\alpha$, so $KB$ entails **neither**!',
            counterExample:
              'For $KB = P \\lor Q$, $(T,F)$ satisfies $P$ while $(F,T)$ satisfies $\\neg P$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7: AI',
            targetWeek: 7,
            topic: 'Bayesian Networks & Deterministic CPTs',
            whyItMatters:
              'Propositional worlds are the deterministic limit of Bayesian Networks: impossible assignments get probability $0$, and probabilistic inference sums over models consistent with evidence (`GATE DA 2024 Q.24, Q.64`).',
          },
        ],
      },
      {
        id: 'm11-c1-3',
        title: 'CNF Conversion, Binary Resolution & Horn Clauses',
        subtitle: 'Turning deduction into a single mechanical cancellation rule',
        priority: 'high-yield',
        buildsOn: 'Entailment via unsatisfiability ($KB \\land \\neg\\alpha$)',
        toyExample: {
          title: 'Deriving the Empty Clause $\\square$ in 3 Steps',
          scenario:
            'Suppose $KB = \\{P \\lor Q,\\; \\neg Q \\lor R,\\; \\neg P\\}$ and we want to prove $\\alpha = R$. Negate the goal to add $\\neg R$ into the clause pool: $\\{P \\lor Q,\\; \\neg Q \\lor R,\\; \\neg P,\\; \\neg R\\}$.',
          walkthroughSteps: [
            '1. Resolve $(P \\lor Q)$ with $(\\neg P)$ on literal $P$ $\\implies$ new clause $(Q)$.',
            '2. Resolve $(Q)$ with $(\\neg Q \\lor R)$ on literal $Q$ $\\implies$ new clause $(R)$.',
            '3. Resolve $(R)$ with $(\\neg R)$ on literal $R$ $\\implies$ **empty clause $\\square$** (contradiction!).',
            '4. Since $KB \\land \\neg R$ produced $\\square$, it is unsatisfiable — therefore $KB \\models R$.',
          ],
          ahaMoment:
            'Isn’t that remarkably clean? Resolution needs just ONE rule—cancel a single complementary pair $(L, \\neg L)$ across two OR-clauses—and yet it is **refutation-complete** for all of Propositional Logic.',
        },
        theoremAndFormula: {
          statement:
            'Every propositional formula converts to **Conjunctive Normal Form (CNF)** (a conjunction of clauses, where each clause is a disjunction of literals) via eliminating $\\leftrightarrow, \\to$, pushing $\\neg$ inward by De Morgan’s laws, and distributing $\\lor$ over $\\land$. A **Horn clause** is a disjunction with **at most one positive literal**.',
          formulaLatex:
            '\\frac{A \\lor L,\\quad B \\lor \\neg L}{A \\lor B} \\qquad\\text{and}\\qquad (\\neg P_1 \\lor \\dots \\lor \\neg P_k \\lor H) \\iff (P_1 \\land \\dots \\land P_k \\to H)',
          plainEnglishDecoding:
            'You will meet Horn clauses in three friendly flavors: a **Definite clause** (exact $1$ positive literal: $P_1 \\land \\dots \\land P_k \\to H$), a **Fact** ($k=0$: just $H$), and a **Goal clause** ($0$ positive literals: $\\neg P_1 \\lor \\dots \\lor \\neg P_k$). The payoff? Horn satisfiability runs in blazing **linear time** $O(|KB|)$ via forward or backward chaining, whereas general 3-SAT is NP-complete.',
          workedMiniExamples: [
            {
              prompt: 'Convert $(P \\to Q) \\to R$ into CNF.',
              solution:
                'Eliminate arrows: $\\neg(\\neg P \\lor Q) \\lor R$. Push $\\neg$ inward: $(P \\land \\neg Q) \\lor R$. Distribute $\\lor$ over $\\land$: $(P \\lor R) \\land (\\neg Q \\lor R)$.',
            },
            {
              prompt: 'Which of $\\{P \\lor Q,\\; \\neg P \\lor \\neg Q \\lor R,\\; \\neg P \\lor \\neg Q\\}$ are Horn clauses?',
              solution:
                '$\\neg P \\lor \\neg Q \\lor R$ (1 positive literal: $P \\land Q \\to R$) and $\\neg P \\lor \\neg Q$ (0 positive literals) are **Horn**; $P \\lor Q$ has **2** positive literals so it is **NOT Horn**.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Resolving $(P \\lor Q)$ and $(\\neg P \\lor \\neg Q)$ cancels both pairs at once to yield the empty clause $\\square$.',
            reality:
              'You may cancel **only ONE** complementary pair per resolution step! Canceling $P$ leaves $(Q \\lor \\neg Q) \\equiv \\top$ (a useless tautology), NOT $\\square$.',
            counterExample:
              'Set $P=T, Q=F$: both $(P \\lor Q)$ and $(\\neg P \\lor \\neg Q)$ are TRUE simultaneously — they are satisfiable, never contradictory!',
          },
          {
            myth: 'To prove $KB \\models \\alpha$ using Resolution, add $\\alpha$ to $KB$ and look for $\\square$.',
            reality:
              'Adding $\\alpha$ tests consistency, not entailment. You MUST add **$\\neg\\alpha$** (the negated query) and derive $\\square$.',
            counterExample:
              'If $KB = \\{P\\}$ and $\\alpha = P$, $\\{P, P\\}$ never produces $\\square$, whereas $\\{P, \\neg P\\}$ immediately yields $\\square$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5: DBMS',
            targetWeek: 6,
            topic: 'Datalog & Recursive SQL CTEs',
            whyItMatters:
              'Definite Horn clauses ($P_1 \\land \\dots \\land P_k \\to H$) are the exact logical foundation of Datalog rules and forward-chaining recursive queries.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm11-ch1-p1',
        title: 'The 1-Row Falsification Attack for Tautology & Entailment MSQs',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 Q.29', 'GATE DA 2025 Q.15', 'GATE DA 2026 Q.24'],
        problemStatement:
          'You are given four 2-variable or 3-variable implication formulas in an MSQ (e.g., $(p \\to q) \\to (p \\land q)$, $(p \\to q) \\to (\\neg q \\to \\neg p)$, $((p \\to q) \\land \\neg q) \\to \\neg p$, $(\\neg p \\lor q) \\to (p \\to q)$) and asked which ones are tautologies.',
        triggerCue:
          'Any MCQ/MSQ asking which formulas $A \\to B$ are "tautologies", "valid", or "entailed".',
        bruteForceTrap:
          'Drawing four separate 4-row or 8-row truth tables from scratch wastes 4–5 minutes and makes sign-flip typos very likely.',
        mentalShift:
          'An implication $A \\to B$ can ONLY fail in ONE way: **$A = T$ and $B = F$**. Always start by trying to force the consequent $B = F$, then check whether $A$ can simultaneously be $T$!',
        steps: [
          {
            label: 'Step 1 — Hunt for a falsifying assignment ($B = F$)',
            detail:
              'For $(p \\to q) \\to (p \\land q)$, make $p \\land q = F$ using $p = F, q = F$. Now evaluate the left side: $(F \\to F) = T$. Thus $T \\to F = F$ — instantly eliminated!',
          },
          {
            label: 'Step 2 — Check structural equivalences ($X \\to X$)',
            detail:
              'Notice $(\\neg p \\lor q) \\to (p \\to q)$ and $(p \\to q) \\to (\\neg q \\to \\neg p)$ both have identical left and right truth functions ($X \\to X$), so neither can ever achieve $T \\to F$.',
          },
          {
            label: 'Step 3 — Lock in Modus Tollens / Modus Ponens patterns',
            detail:
              'For $((p \\to q) \\land \\neg q) \\to \\neg p$, forcing consequent $\\neg p = F$ forces $p = T$. Then forcing $\\neg q = T$ forces $q = F$, which breaks $(p \\to q) = (T \\to F) = F$. So $T \\to F$ is impossible — tautology confirmed!',
          },
        ],
        lockInTakeaway:
          'Never build a full truth table for implication tautologies: force the right side FALSE first and see if the left side survives as TRUE.',
      },
      {
        id: 'm11-ch1-p2',
        title: 'Forbidden-World Clauses for English Modeling Problems',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 Q.38'],
        problemStatement:
          'Given 3 English constraints over atoms $C$ (Creative), $D$ (Disciplined), $S$ (Succeed) — including "only if", "unless", and "no $X$ does $Y$" — determine which single conditional formula MUST hold in every valid model.',
        triggerCue:
          'Multi-sentence English logic puzzles mixing "unless", "only if", and negations.',
        bruteForceTrap:
          'Translating left-to-right by instinct ("No undisciplined student succeeds unless creative" $\\to$ guessing $\\neg D \\to \\neg S$) drops conditions or reverses arrows.',
        mentalShift:
          'Convert every English sentence into its **forbidden world** (a conjunction that cannot occur), negate it into a disjunction clause, and read off which $2^3 = 8$ rows remain alive!',
        steps: [
          {
            label: 'Step 1 — Write each rule as a "Never Happens" combination',
            detail:
              '"No $\\neg D$ succeeds unless $C$" forbids $(\\neg D \\land S \\land \\neg C)$. Negating that forbidden combination gives the clause $(D \\lor \\neg S \\lor C) \\equiv S \\to (D \\lor C)$.',
          },
          {
            label: 'Step 2 — Combine clauses over the tiny 8-world cube',
            detail:
              'If another rule forbids $(C \\land \\neg D \\land S)$, its clause is $(\\neg C \\lor D \\lor \\neg S) \\equiv S \\to (D \\lor \\neg C)$. Resolving the two clauses on $C$ leaves $(D \\lor \\neg S) \\equiv S \\to D$!',
          },
          {
            label: 'Step 3 — Check candidate implications against surviving worlds',
            detail:
              'Verify every candidate $X \\to Y$ by checking whether a surviving world satisfies $X=T, Y=F$. One counter-world kills any non-entailed option.',
          },
        ],
        lockInTakeaway:
          'Translating English constraints into **forbidden worlds** $\\neg(\\text{bad combo})$ prevents 100% of "unless / only if" arrow-reversal mistakes.',
      },
    ],
    arsenalCards: [
      {
        id: 'm11-c1-a1',
        badge: 'IMPLICATION',
        whenYouSpot: 'An implication $P \\to Q$, "P only if Q", "P unless Q", or contrapositive vs converse options',
        directWeaponLatex:
          'P \\to Q \\equiv \\neg P \\lor Q \\equiv \\neg Q \\to \\neg P \\not\\equiv Q \\to P',
        instantRule:
          '"$P$ only if $Q$" is $P \\to Q$; "$P$ if $Q$" is $Q \\to P$; "$P$ unless $Q$" is $P \\lor Q$ ($\\neg Q \\to P$). Always keep the contrapositive, never the converse.',
        tenSecondExample:
          'To falsify $(p \\to q) \\to (q \\to p)$, pick $p=F, q=T$: left is $F\\to T = T$, right is $T\\to F = F$.',
        oneFatalTrap:
          'Confusing "necessary" with "sufficient": "$P$ is necessary for $Q$" means $Q \\to P$, NOT $P \\to Q$!',
      },
      {
        id: 'm11-c1-a2',
        badge: 'ENTAILMENT',
        whenYouSpot: '"Sentence $X$ entails $Y$" ($X \\models Y$), consistency checks, or validity questions',
        directWeaponLatex:
          'X \\models Y \\iff \\models (X \\to Y) \\iff (X \\land \\neg Y) \\equiv \\bot',
        instantRule:
          'Entailment means every truth model of $X$ is also a truth model of $Y$, equivalently $X \\land \\neg Y$ has zero satisfying assignments.',
        tenSecondExample:
          'Since $(P \\land Q) \\land \\neg P \\equiv \\bot$, we immediately know $(P \\land Q) \\models P$.',
        oneFatalTrap:
          '$X \\models Y$ does NOT mean $Y$ is a tautology or that $Y \\models X$ ($P \\land Q \\models P$, but $P \\not\\models P \\land Q$).',
      },
      {
        id: 'm11-c1-a3',
        badge: 'RESOLUTION',
        whenYouSpot: 'CNF clause sets, deriving $\\square$, or identifying Horn clauses',
        directWeaponLatex:
          '\\frac{A \\lor L,\\; B \\lor \\neg L}{A \\lor B} \\qquad\\text{Horn: } \\le 1 \\text{ positive literal}',
        instantRule:
          'Negate the goal ($\\neg\\alpha$), convert to CNF, and resolve **one** complementary literal pair at a time until $\\square$ appears.',
        tenSecondExample:
          'From $\\{P \\lor Q, \\neg P\\}$, resolving on $P$ gives $Q$. Note $\\neg P \\lor \\neg Q \\lor R$ is Horn; $P \\lor Q$ is not.',
        oneFatalTrap:
          'Canceling TWO complementary pairs simultaneously: resolving $(P \\lor Q)$ and $(\\neg P \\lor \\neg Q)$ gives $Q \\lor \\neg Q \\equiv \\top$, NOT $\\square$!',
      },
    ],
    questions: [
      {
        id: 'm11-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Contrapositive & Necessary Conditions',
        marks: 1,
        type: 'MCQ',
        stem: 'Let $O$ represent "The model overfits the training data" and $V$ represent "The validation loss increases". Which statement is logically equivalent to *"If the model overfits the training data, then the validation loss increases"* ($O \\to V$)?',
        options: [
          {
            id: 'A',
            text: 'If the validation loss increases, then the model overfits ($V \\to O$).',
            whyTrueOrFalse: 'False — this is the converse, which fails when $O = F, V = T$ (e.g., bad learning rate).',
          },
          {
            id: 'B',
            text: 'If the validation loss does not increase, then the model does not overfit ($\\neg V \\to \\neg O$).',
            whyTrueOrFalse: 'True — this is the exact contrapositive of $O \\to V$.',
          },
          {
            id: 'C',
            text: 'If the model does not overfit, then the validation loss does not increase ($\\neg O \\to \\neg V$).',
            whyTrueOrFalse: 'False — this is the inverse, logically equivalent to the converse $V \\to O$.',
          },
          {
            id: 'D',
            text: 'The model overfits and the validation loss increases ($O \\land V$).',
            whyTrueOrFalse: 'False — $O \\land V$ is strictly stronger; it fails when $O = F, V = F$ where $O \\to V$ is true.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Rewrite $O \\to V$ using its contrapositive $\\neg V \\to \\neg O$.',
        intuitiveSolution: [
          'The given conditional is $O \\to V \\equiv \\neg O \\lor V$.',
          'Its contrapositive is $\\neg V \\to \\neg O \\equiv \\neg(\\neg V) \\lor \\neg O \\equiv V \\lor \\neg O$, matching Option B.',
        ],
        directShortcutUsed: '$P \\to Q \\equiv \\neg Q \\to \\neg P$ (Contrapositive Law).',
      },
      {
        id: 'm11-c1-q2',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #2 · Model Counting',
        marks: 1,
        type: 'NAT',
        stem: 'Consider the propositional formula $\\Phi = (P \\to Q) \\land (Q \\to R) \\land (P \\lor R)$ over three Boolean variables $P, Q, R \\in \\{\\text{False}, \\text{True}\\}$. How many out of the $8$ truth assignments satisfy $\\Phi$?',
        natAnswer: { min: 3, max: 3, exactDisplay: '3' },
        triggerHint: 'Test whether $R = \\text{False}$ can ever satisfy all three clauses.',
        intuitiveSolution: [
          'Suppose $R = \\text{False}$. Then $Q \\to R$ forces $Q = \\text{False}$, which in turn forces $P = \\text{False}$ via $P \\to Q$.',
          'However, $(P, Q, R) = (F, F, F)$ fails $(P \\lor R)$. Thus $R$ MUST be $\\text{True}$ in every model.',
          'When $R = \\text{True}$, both $(Q \\to R)$ and $(P \\lor R)$ are automatically $\\text{True}$, leaving only $(P \\to Q)$, which holds for $(P, Q) \\in \\{(F, F), (F, T), (T, T)\\}$ — **3** models.',
        ],
        directShortcutUsed: 'Backward unit propagation from $R = F$ eliminates the entire $R = F$ half.',
      },
      {
        id: 'm11-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.29 Style (Propositional Tautologies)',
        year: 2024,
        marks: 1,
        type: 'MSQ',
        stem: 'Which of the following propositional logic formulas is/are **tautologies**?',
        options: [
          {
            id: 'A',
            text: '$(p \\land q) \\to (p \\lor q)$',
            whyTrueOrFalse: 'True — whenever both $p$ and $q$ are true, $p \\lor q$ is certainly true.',
          },
          {
            id: 'B',
            text: '$(p \\to q) \\to (\\neg q \\to \\neg p)$',
            whyTrueOrFalse: 'True — the two sides are contrapositives of each other ($X \\to X \\equiv \\top$).',
          },
          {
            id: 'C',
            text: '$((p \\to q) \\land \\neg q) \\to \\neg p$',
            whyTrueOrFalse: 'True — Modus Tollens: forcing $\\neg p = F$ ($p=T$) and $\\neg q = T$ ($q=F$) makes $p \\to q$ false.',
          },
          {
            id: 'D',
            text: '$(p \\to q) \\to (q \\to p)$',
            whyTrueOrFalse: 'False — fails at $p = \\text{False}, q = \\text{True}$, where $p \\to q$ is True and $q \\to p$ is False.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Try making the consequent FALSE and antecedent TRUE for each formula.',
        intuitiveSolution: [
          'For A: if $p \\lor q = F$, then $p=F, q=F$, making $p \\land q = F$. No $T \\to F$ row exists.',
          'For B: $p \\to q \\equiv \\neg q \\to \\neg p$, so B has the form $X \\to X$, a tautology.',
          'For C: if $\\neg p = F$, then $p=T$; for the antecedent to be $T$ we also need $\\neg q = T$ ($q=F$), which falsifies $p \\to q$. So C is a tautology.',
          'For D: pick $p=F, q=T$ to get $(F\\to T) \\to (T\\to F)$, which evaluates to $T \\to F = F$.',
        ],
        directShortcutUsed: '1-row consequent-falsification check ($A = T, B = F$).',
      },
      {
        id: 'm11-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.24 Style (Propositional Entailment)',
        year: 2026,
        marks: 1,
        type: 'MSQ',
        stem: 'Let $X$ and $Y$ be two propositional logic sentences such that $X$ **entails** $Y$ ($X \\models Y$). Which of the following statements MUST be true?',
        options: [
          {
            id: 'A',
            text: 'The sentence $X \\to Y$ is valid (a tautology).',
            whyTrueOrFalse: 'True — by the Deduction Theorem, $X \\models Y \\iff \\models (X \\to Y)$.',
          },
          {
            id: 'B',
            text: 'The sentence $X \\land \\neg Y$ is unsatisfiable (FALSE in every truth assignment).',
            whyTrueOrFalse: 'True — no truth assignment can make $X$ true while making $Y$ false.',
          },
          {
            id: 'C',
            text: 'Every truth assignment in which $X$ evaluates to TRUE also makes $Y$ evaluate to TRUE.',
            whyTrueOrFalse: 'True — this is the exact model-theoretic definition of semantic entailment ($\\mathcal{M}(X) \\subseteq \\mathcal{M}(Y)$).',
          },
          {
            id: 'D',
            text: 'The sentence $Y \\to X$ is valid (a tautology).',
            whyTrueOrFalse: 'False — counterexample: $X = (P \\land Q)$ entails $Y = P$, yet $P \\to (P \\land Q)$ fails when $P=T, Q=F$.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Recall the three equivalent characterizations of $X \\models Y$.',
        intuitiveSolution: [
          '$X \\models Y$ means $\\mathcal{M}(X) \\subseteq \\mathcal{M}(Y)$, which directly confirms **C**.',
          'Consequently, there is no world where $X=T$ and $Y=F$, so $X \\land \\neg Y$ is always false (**B**) and $X \\to Y$ is always true (**A**).',
          'Entailment is asymmetric: taking $X = P \\land Q$ and $Y = P$ satisfies $X \\models Y$ while $Y \\to X$ fails at $(P=T, Q=F)$, ruling out **D**.',
        ],
        directShortcutUsed: '$X \\models Y \\iff \\models (X \\to Y) \\iff (X \\land \\neg Y) \\equiv \\bot$.',
      },
      {
        id: 'm11-c1-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Mock · GATE DA 2026 Q.38 Pattern',
        marks: 2,
        type: 'MCQ',
        stem: 'Consider three rules about a candidate being Creative ($C$), Disciplined ($D$), and Succeeding ($S$):\n1. If a candidate is both Creative and Disciplined, they Succeed.\n2. A candidate Succeeds only if they are Creative or Disciplined.\n3. No candidate who is Creative and undisciplined ($\\neg D$) ever Succeeds.\n\nWhich of the following formulas is **entailed** by these three rules together?',
        options: [
          {
            id: 'A',
            text: '$S \\to D$',
            whyTrueOrFalse: 'True — Rule 2 gives $S \\to (C \\lor D)$ and Rule 3 gives $S \\to (\\neg C \\lor D)$; resolving on $C$ forces $S \\to D$.',
          },
          {
            id: 'B',
            text: '$D \\to S$',
            whyTrueOrFalse: 'False — the world $(C=F, D=T, S=F)$ satisfies all three rules yet violates $D \\to S$.',
          },
          {
            id: 'C',
            text: '$C \\to S$',
            whyTrueOrFalse: 'False — the world $(C=T, D=F, S=F)$ satisfies all three rules yet violates $C \\to S$.',
          },
          {
            id: 'D',
            text: '$S \\to C$',
            whyTrueOrFalse: 'False — the world $(C=F, D=T, S=T)$ satisfies all three rules yet violates $S \\to C$.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Convert Rules 2 and 3 into CNF clauses $(\\neg S \\lor \\dots)$ and resolve on $C$.',
        intuitiveSolution: [
          'Rule 1: $(C \\land D) \\to S \\equiv \\neg C \\lor \\neg D \\lor S$.',
          'Rule 2 ("$S$ only if $C \\lor D$"): $S \\to (C \\lor D) \\equiv \\neg S \\lor C \\lor D$.',
          'Rule 3 ("never $C \\land \\neg D \\land S$"): $\\neg(C \\land \\neg D \\land S) \\equiv \\neg S \\lor \\neg C \\lor D$.',
          'Resolving Rule 2 ($\\neg S \\lor D \\lor C$) with Rule 3 ($\\neg S \\lor D \\lor \\neg C$) on $C$ yields $\\neg S \\lor D \\equiv S \\to D$!',
        ],
        directShortcutUsed: 'Forbidden-world CNF conversion + single-literal Resolution on $C$.',
      },
      {
        id: 'm11-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Mock · Resolution & Horn Clauses',
        marks: 2,
        type: 'MSQ',
        stem: 'Consider the CNF knowledge base $KB = (P \\lor Q) \\land (\\neg P \\lor R) \\land (\\neg Q \\lor R) \\land (\\neg R \\lor \\neg S)$. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: '$KB$ is a Horn knowledge base.',
            whyTrueOrFalse: 'False — the first clause $(P \\lor Q)$ contains two positive literals, violating the Horn condition ($\\le 1$ positive literal per clause).',
          },
          {
            id: 'B',
            text: '$KB \\models R$.',
            whyTrueOrFalse: 'True — resolving $(P \\lor Q)$ with $(\\neg P \\lor R)$ yields $(Q \\lor R)$, and resolving $(Q \\lor R)$ with $(\\neg Q \\lor R)$ yields $R$.',
          },
          {
            id: 'C',
            text: '$KB \\models \\neg S$.',
            whyTrueOrFalse: 'True — since $KB \\models R$, resolving $R$ with $(\\neg R \\lor \\neg S)$ derives $\\neg S$.',
          },
          {
            id: 'D',
            text: '$KB \\land S$ is satisfiable.',
            whyTrueOrFalse: 'False — because $KB \\models \\neg S$, adding $S$ yields the empty clause $\\square$ (unsatisfiable).',
          },
        ],
        correctOptions: ['B', 'C'],
        triggerHint: 'Count positive literals per clause for A, and resolve $(P \\lor Q)$ downward toward $R$ and $\\neg S$.',
        intuitiveSolution: [
          'Check Horn property: $(P \\lor Q)$ has **2** positive literals, so **A is false**.',
          'Resolution proof of $R$: $(P \\lor Q) + (\\neg P \\lor R) \\implies (Q \\lor R)$; then $(Q \\lor R) + (\\neg Q \\lor R) \\implies R$. Thus **B is true**.',
          'Resolving $R$ with $(\\neg R \\lor \\neg S)$ yields $\\neg S$, proving **C is true** and making $KB \\land S$ unsatisfiable (**D is false**).',
        ],
        directShortcutUsed: 'Clause-by-clause positive literal count + refutation resolution.',
      },
    ],
  },
  {
    id: 'logic-ch2',
    number: 2,
    title: 'First-Order Logic: Quantifiers, Countermodels & Unification',
    shortTitle: 'First-Order Logic',
    estimatedHours: 3.5,
    dayLabel: 'Week 5 · Day 4',
    tagline:
      'Let’s build from a friendly 2-object ball-and-cube world so you lock in the golden $\\forall/\\to$ vs. $\\exists/\\land$ pairing, De Morgan quantifier pushing, 2-element countermodels for FOL validity, and Most General Unifier (MGU) substitution.',
    syllabusMapping: [
      'Section 7 (Artificial Intelligence): Logic — Predicate (First-Order) Logic',
      'Quantifiers, English-to-FOL translation, logical validity, Skolemization & Unification',
    ],
    whatIsImportant: [
      'The Golden Quantifier Pairing: $\\forall x\\,(A(x) \\to B(x))$ vs $\\exists x\\,(A(x) \\land B(x))$ — swapping $\\to$ and $\\land$ is the #1 GATE DA FOL trap (GATE DA 2024 Q.54, 2026 Q.14)',
      'Testing FOL validity and invalidity on tiny 2-element domains $D = \\{a, b\\}$ — kills invalid distribution/swap formulas in seconds (GATE DA 2026 Q.48)',
      'Quantifier order ($\\forall x\\exists y$ vs $\\exists y\\forall x$) and pushing $\\neg$ across nested quantifiers',
      'Most General Unifier (MGU) composition and the Occurs Check ($x \\in \\text{Vars}(t)$)',
    ],
    whatIsNotImportant: [
      'Gödel’s Incompleteness Theorems or Church–Turing undecidability proofs of FOL',
      'Second-order logic (quantifying over predicates $\\forall P$) or higher-order type theory',
      'Deep Herbrand theorem / Herbrand base enumeration proofs',
    ],
    inboundStream:
      'Module 11 Ch.1 (Propositional Logic, Implication & Resolution) — lifting fixed atoms into predicates over a non-empty domain $D$.',
    outboundStream: [
      'Module 12: Tuple Relational Calculus ($\\{t \\mid \\exists s \\dots\\}$) & SQL `NOT EXISTS` Universal Division (GATE DA 2025 Q.62, 2026 Q.59)',
      'Module 15: Grounding Relational Factors in Probabilistic Graphical Models',
    ],
    glossary: [
      {
        term: 'Domain of Discourse',
        symbol: '$D \\neq \\emptyset$',
        plainEnglish:
          'The non-empty universe of objects that your variables ($x, y, z$) range over—such as all toys in a room, all integers, or all students in a database.',
        tinyExample: 'Testing an FOL claim on the tiny 2-object domain $D = \\{a, b\\}$ is often enough to disprove it.',
      },
      {
        term: 'Predicate & Function Symbol',
        symbol: '$P(x),\\; f(x)$',
        plainEnglish:
          'A predicate $P(x)$ tests a property or relation and returns TRUE or FALSE, whereas a function $f(x)$ takes an object and maps it to another object in the domain.',
        tinyExample: '$\\text{Round}(x)$ is a predicate (returns $T/F$), while $\\text{FatherOf}(x)$ is a function (returns a person).',
      },
      {
        term: 'Universal Quantifier (“For All”)',
        symbol: '$\\forall x$',
        plainEnglish:
          'Asserts that a statement holds for every single object in the domain—and always pairs with implication ($\\to$) so objects outside your target group pass vacuously.',
        tinyExample: '“All balls are round” translates to $\\forall x\\,(\\text{Ball}(x) \\to \\text{Round}(x))$, never with $\\land$.',
      },
      {
        term: 'Existential Quantifier (“There Exists”)',
        symbol: '$\\exists x$',
        plainEnglish:
          'Asserts that at least one object in the domain satisfies a property—and always pairs with conjunction ($\\land$) so a non-member cannot sneak through via vacuous implication.',
        tinyExample: '“Some ball is round” translates to $\\exists x\\,(\\text{Ball}(x) \\land \\text{Round}(x))$.',
      },
      {
        term: 'Quantifier Negation (De Morgan Duality)',
        symbol: '$\\neg\\forall \\equiv \\exists\\neg$',
        plainEnglish:
          'Pushing a negation sign across a quantifier flips $\\forall$ into $\\exists$ (and $\\exists$ into $\\forall$) while moving $\\neg$ inside the body.',
        tinyExample: 'Negating “Everyone passed” ($\\neg\\forall x\\,P(x)$) gives “Someone failed” ($\\exists x\\,\\neg P(x)$).',
      },
      {
        term: 'Quantifier Order',
        symbol: '$\\forall x\\exists y$ vs. $\\exists y\\forall x$',
        plainEnglish:
          'The order of mixed quantifiers changes meaning dramatically: $\\exists y\\forall x\\,R(x,y)$ claims one single universal $y$ works for everyone, whereas $\\forall x\\exists y\\,R(x,y)$ lets each $x$ pick its own $y$.',
        tinyExample: '“Everyone has a mother” ($\\forall x\\exists y$) is true, whereas “One person is everyone’s mother” ($\\exists y\\forall x$) is false.',
      },
      {
        term: 'Valid FOL Formula & Countermodel',
        plainEnglish:
          'An FOL formula is valid if it is TRUE in every non-empty domain under every interpretation; a single small domain + predicate assignment that makes it FALSE is a countermodel proving it is NOT valid.',
        tinyExample: 'Setting $P(a)=T, P(b)=F$ on $D=\\{a,b\\}$ is a countermodel disproving $(\\exists x\\,P(x)) \\to (\\forall x\\,P(x))$.',
      },
      {
        term: 'Substitution',
        symbol: '$\\theta = \\{x / t\\}$',
        plainEnglish:
          'A simultaneous replacement map binding variables to terms (constants, variables, or function expressions), composed cleanly so bound variables don’t linger un-substituted.',
        tinyExample: 'Applying $\\theta = \\{x/g(a),\\; y/b\\}$ to $P(x, f(y))$ produces $P(g(a), f(b))$.',
      },
      {
        term: 'Unification & Most General Unifier (MGU)',
        symbol: '$E_1\\theta = E_2\\theta$',
        plainEnglish:
          'Finding the least-restrictive substitution $\\theta$ that makes two predicate atoms syntactically identical so FOL Resolution can cancel them—without making unnecessary extra assumptions.',
        tinyExample: 'Unifying $P(x, a)$ and $P(b, y)$ gives MGU $\\theta = \\{x/b,\\; y/a\\}$.',
      },
      {
        term: 'Occurs Check',
        symbol: '$v \\in \\text{Vars}(t)$',
        plainEnglish:
          'A safety guard during unification that refuses to bind a variable $v$ to any term $t$ that already contains $v$, preventing infinite self-nesting loops.',
        tinyExample: 'Trying to unify $P(x, x)$ with $P(y, f(y))$ demands $y = f(y)$, which fails the Occurs Check immediately.',
      },
      {
        term: 'Skolemization (Skolem Constant & Function)',
        symbol: '$c,\\; f(x)$',
        plainEnglish:
          'The step in FOL-to-CNF conversion that removes $\\exists y$ by naming the witness: a fresh constant $c$ if no $\\forall$ encloses it, or a fresh function $f(x_1, \\dots, x_k)$ of all enclosing $\\forall$ variables.',
        tinyExample: '$\\forall x\\exists y\\,R(x,y)$ becomes $\\forall x\\,R(x, f(x))$, whereas $\\exists y\\forall x\\,R(x,y)$ becomes $\\forall x\\,R(x, c)$.',
      },
    ],
    generatorId: 'truth-entailment-gen',
    concepts: [
      {
        id: 'm11-c2-1',
        title: 'The Golden $\\forall/\\to$ vs. $\\exists/\\land$ Pairing & "Except" Translations',
        subtitle: 'Why putting $\\land$ inside $\\forall$ forces the entire universe to be a ball',
        priority: 'core-pillar',
        buildsOn: 'Implication $A \\to B$ vacuous truth when $A = F$',
        toyExample: {
          title: 'A 2-Object Toy World: 1 Round Ball and 1 Cube',
          scenario:
            'Let our universe be $D = \\{\\text{ball}_1, \\text{cube}_1\\}$, where $\\text{Ball}(\\text{ball}_1)=T, \\text{Round}(\\text{ball}_1)=T$ and $\\text{Ball}(\\text{cube}_1)=F, \\text{Round}(\\text{cube}_1)=F$. Clearly, *"All balls are round"* is **TRUE** in this world! Let us test two candidate translations.',
          walkthroughSteps: [
            '1. **Test $\\forall x\\,(\\text{Ball}(x) \\land \\text{Round}(x))$:** At $x = \\text{cube}_1$, $\\text{Ball}(\\text{cube}_1) \\land \\text{Round}(\\text{cube}_1) = F \\land F = F$! This formula falsely claims our world fails just because a non-ball cube exists!',
            '2. **Test $\\forall x\\,(\\text{Ball}(x) \\to \\text{Round}(x))$:** At $\\text{ball}_1$: $T \\to T = T$. At $\\text{cube}_1$: $F \\to F = T$ (vacuously true!). Non-balls are safely ignored.',
            '3. **Now flip the test for *"Some ball is round"* on a cube-only world $D = \\{\\text{cube}_1\\}$:** If you write $\\exists x\\,(\\text{Ball}(x) \\to \\text{Round}(x))$, at $\\text{cube}_1$ you get $F \\to F = T$ — it lies and claims a round ball exists when there are NO balls!',
            '4. **Test $\\exists x\\,(\\text{Ball}(x) \\land \\text{Round}(x))$:** On $D = \\{\\text{cube}_1\\}$, $F \\land F = F$ — exact match!',
          ],
          ahaMoment:
            'Look at why those two pairings are non-negotiable: a universal statement ($\\forall$) needs $\\to$ as a **gatekeeper** so non-members pass harmlessly as vacuously true, while an existential statement ($\\exists$) needs $\\land$ so a non-member cannot cheat its way to TRUE via $F \\to F = T$.',
        },
        theoremAndFormula: {
          statement:
            'Every categorical English sentence locks into one rigid quantifier–connective pair:',
          formulaLatex:
            '\\text{All } A \\text{ are } B: \\; \\forall x\\,(A(x) \\to B(x)) \\qquad\\qquad \\text{Some } A \\text{ is } B: \\; \\exists x\\,(A(x) \\land B(x))',
          plainEnglishDecoding:
            'Make this reflex automatic: pair $\\forall$ with $\\to$, and pair $\\exists$ with $\\land$. When you see “No $A$ is $B$”, write $\\forall x\\,(A(x) \\to \\neg B(x)) \\equiv \\neg\\exists x\\,(A(x) \\land B(x))$. And when you see “All $A$ are $B$ except $C$”, remember to state **both** halves—non-$C$ members have $B$ ($(A \\land \\neg C) \\to B$) AND $C$-members do not ($(A \\land C) \\to \\neg B$).',
          workedMiniExamples: [
            {
              prompt: 'Spot the error in translating *"Each king is a person"* as $\\forall x\\,(\\text{King}(x) \\land \\text{Person}(x))$ (GATE DA 2026 Q.14 pattern).',
              solution:
                'Putting $\\land$ under $\\forall x$ asserts that **every object in the universe** is simultaneously a king and a person! The correct translation is $\\forall x\\,(\\text{King}(x) \\to \\text{Person}(x))$.',
            },
            {
              prompt:
                'Translate *"All balls are round except balls used in rugby"* using $B(x), R(x), U(x)$ (GATE DA 2024 Q.54 pattern).',
              solution:
                'Non-rugby balls are round AND rugby balls are not round: $\\forall x\\,((B(x) \\land \\neg U(x)) \\to R(x)) \\land \\forall x\\,((B(x) \\land U(x)) \\to \\neg R(x))$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'In *"All $A$ are $B$ except $C$"*, writing only $\\forall x\\,((A(x) \\land \\neg C(x)) \\to B(x))$ captures the full meaning.',
            reality:
              'Saying *"except $C$"* also specifies that $C$-members do **not** have $B$ ($\\forall x\\,((A(x) \\land C(x)) \\to \\neg B(x))$); leaving that half out allows $C$-members to be $B$ too.',
            counterExample:
              'If a rugby ball happens to be round, $(B \\land \\neg U) \\to R$ stays true even though it violates "except balls used in rugby".',
          },
          {
            myth: '$\\neg\\forall x\\,(A(x) \\to B(x))$ means *"No $A$ is $B$"*.',
            reality:
              'Pushing $\\neg$ inside gives $\\exists x\\,(A(x) \\land \\neg B(x))$, which only means *"Some $A$ is not $B$"*!',
            counterExample:
              'In $\\{a, b\\}$ with $A(a)=A(b)=T$, $B(a)=T, B(b)=F$, $\\neg\\forall x\\,(A\\to B)$ is TRUE while "No $A$ is $B$" is FALSE.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5: DBMS',
            targetWeek: 6,
            topic: 'Tuple Relational Calculus (TRC)',
            whyItMatters:
              'TRC predicates bind tuples identically: universal table constraints use $\\forall t\\,(R(t) \\to \\dots)$ while existential joins use $\\exists t\\,(R(t) \\land \\dots)$ (`GATE DA 2026 Q.59`).',
          },
        ],
      },
      {
        id: 'm11-c2-2',
        title: 'Quantifier Nesting, Negation Pushing & 2-Element Countermodels',
        subtitle: 'Killing invalid FOL formulas on $D = \\{a, b\\}$ and pushing $\\neg$ across $\\forall/\\exists$',
        priority: 'core-pillar',
        buildsOn: 'Golden $\\forall/\\to$ vs $\\exists/\\land$ pairing',
        toyExample: {
          title: 'The 2-Element Domain $D = \\{a, b\\}$ Validity Killer',
          scenario:
            'A FOL formula is **valid** only if it is TRUE in **every** non-empty domain $D$ and predicate assignment. Let us test $(\\forall x\\,(P(x) \\lor Q(x))) \\to ((\\forall x\\, P(x)) \\lor (\\forall x\\, Q(x)))$ on $D = \\{a, b\\}$.',
          walkthroughSteps: [
            '1. Set $P(a) = T,\\; P(b) = F$ and $Q(a) = F,\\; Q(b) = T$ (think of $a=2$ even, $b=3$ odd).',
            '2. Check the left side $\\forall x\\,(P(x) \\lor Q(x))$: at $a$ we get $T \\lor F = T$; at $b$ we get $F \\lor T = T$. So the antecedent is **TRUE**!',
            '3. Check the right side $(\\forall x\\, P(x)) \\lor (\\forall x\\, Q(x))$: $\\forall x\\, P(x)$ fails at $b$, and $\\forall x\\, Q(x)$ fails at $a$, so the consequent is $F \\lor F = \\mathbf{FALSE}$!',
            '4. $T \\to F = F$ on $D = \\{a, b\\}$ — **NOT valid** in 10 seconds!',
          ],
          ahaMoment:
            'Here is the whole distribution secret in one breath: $\\forall$ behaves like a giant $\\land$ (so it distributes over $\\land$), and $\\exists$ behaves like a giant $\\lor$ (so it distributes over $\\lor$)—never the other way around! Whenever an exam option mixes them up or swaps $\\forall x\\exists y$ into $\\exists y\\forall x$, testing $D = \\{a, b\\}$ catches the bug in seconds.',
        },
        theoremAndFormula: {
          statement:
            'Quantifier negation obeys generalized De Morgan duality, and quantifier ordering is strictly one-way (having one universal hero implies everyone has a helper, never vice versa):',
          formulaLatex:
            '\\neg\\forall x\\,\\Phi(x) \\equiv \\exists x\\,\\neg\\Phi(x), \\qquad \\neg\\exists x\\,\\Phi(x) \\equiv \\forall x\\,\\neg\\Phi(x), \\qquad \\exists y\\,\\forall x\\, R(x,y) \\implies \\forall x\\,\\exists y\\, R(x,y)',
          plainEnglishDecoding:
            'Whenever you push a $\\neg$ sign inward across a quantifier prefix, simply walk left-to-right flipping every $\\forall$ to $\\exists$ and every $\\exists$ to $\\forall$. And remember the one-way arrow of quantifier order: if one single hero $y$ helps every $x$ ($\\exists y\\forall x$), then of course every $x$ has a helper ($\\forall x\\exists y$)—but never the reverse!',
          workedMiniExamples: [
            {
              prompt:
                'Test validity of the "Drinker’s Paradox" formula $\\exists x\\,(P(x) \\to \\forall y\\, P(y))$ on every non-empty domain $D$ (GATE DA 2026 Q.48 archetype).',
              solution:
                'Case 1: If $\\forall y\\, P(y)$ is TRUE, pick any $x \\in D$ and $P(x) \\to T$ is TRUE. Case 2: If $\\forall y\\, P(y)$ is FALSE, there exists some $x_0 \\in D$ with $P(x_0)=F$; then $P(x_0) \\to \\forall y\\, P(y)$ is $F \\to F = T$! Hence it IS **valid** on every non-empty domain.',
            },
            {
              prompt: 'Negate $\\forall s\\,(S(s) \\to \\exists c\\,(C(c) \\land T(s,c)))$ completely.',
              solution:
                'Push $\\neg$ inward step by step: $\\exists s\\,\\neg(S(s) \\to \\exists c\\,(C(c)\\land T(s,c))) \\equiv \\exists s\\,(S(s) \\land \\forall c\\,(C(c) \\to \\neg T(s,c)))$.',
            },
          ],
        },
        sandboxId: 'logic-truth-lab',
        msqTraps: [
          {
            myth: '$(\\exists x\\, P(x)) \\land (\\exists x\\, Q(x))$ implies $\\exists x\\,(P(x) \\land Q(x))$.',
            reality:
              'The two $\\exists x$ witnesses can be **different** objects! $\\exists$ does NOT distribute over $\\land$.',
            counterExample:
              'On $D = \\{1, 2\\}$ with $P(2)=T, P(1)=F$ and $Q(1)=T, Q(2)=F$, both $\\exists x\\,P(x)$ and $\\exists x\\,Q(x)$ are true, yet no single element satisfies $P \\land Q$.',
          },
          {
            myth: '$\\forall x\\,\\exists y\\, R(x,y)$ implies $\\exists y\\,\\forall x\\, R(x,y)$.',
            reality:
              'Having a different $y$ for each $x$ does not mean one single $y$ works for every $x$.',
            counterExample:
              'On $D = \\{a, b\\}$ with $R(a,b)=T, R(b,a)=T, R(a,a)=F, R(b,b)=F$ ("everyone has a distinct partner"): $\\forall x\\,\\exists y\\, R(x,y)$ is true, while $\\exists y\\,\\forall x\\, R(x,y)$ is false.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5: DBMS',
            targetWeek: 6,
            topic: 'SQL Division via Double Negation (`NOT EXISTS`)',
            whyItMatters:
              'SQL lacks a `FOR ALL` quantifier, so "student $s$ took every course $c$" ($\\forall c\\,(C(c) \\to T(s,c))$) is written as $\\neg\\exists c\\,(C(c) \\land \\neg T(s,c))$ — literally `WHERE NOT EXISTS` (`GATE DA 2025 Q.62`).',
            pyqProof: 'GATE DA 2025 · Q.62 & GATE DA 2026 · Q.59',
          },
        ],
      },
      {
        id: 'm11-c2-3',
        title: 'Unification, Most General Unifier (MGU) & Skolemization',
        subtitle: 'Matching predicate terms mechanically while avoiding infinite self-loops',
        priority: 'high-yield',
        buildsOn: 'CNF Resolution (Ch.1) and nested quantifiers',
        toyExample: {
          title: 'Slot-by-Slot Matching of Two Predicate Templates',
          scenario:
            'Suppose we want to resolve a rule containing $P(x, f(y), a)$ with a negated fact containing $\\neg P(g(z), f(b), z)$, where $x, y, z$ are variables and $a, b$ are constants.',
          walkthroughSteps: [
            '1. **Scan Slot 3:** Constant $a$ vs variable $z$ $\\implies$ bind $z \\mapsto a$.',
            '2. **Scan Slot 2:** $f(y)$ vs $f(b)$ (same outer function $f$) $\\implies$ peel $f$ and bind $y \\mapsto b$.',
            '3. **Scan Slot 1:** Variable $x$ vs $g(z)$ $\\implies$ bind $x \\mapsto g(z)$, and immediately apply $z \\mapsto a$ to get $x \\mapsto g(a)$!',
            '4. **Verify Simultaneous Substitution:** With $\\theta = \\{x/g(a),\\; y/b,\\; z/a\\}$, both atoms become $P(g(a), f(b), a)$!',
          ],
          ahaMoment:
            'Think of unification like lining up two fill-in-the-blank templates slot by slot: you may only fill in **variables** (never rewrite constants), you immediately propagate new bindings forward so no bound variable is left dangling on the right, and you reject any self-referential loop like $x = f(x)$.',
        },
        theoremAndFormula: {
          statement:
            'A substitution $\\theta$ is a **Most General Unifier (MGU)** of expressions $E_1, E_2$ if $E_1\\theta = E_2\\theta$ and every other unifier $\\sigma$ factors through $\\theta$ ($\\sigma = \\theta \\circ \\delta$). When converting FOL formulas to CNF, existential quantifiers inside $\\forall x_1 \\dots \\forall x_k$ are eliminated via **Skolemization** before dropping $\\forall$ and unifying.',
          formulaLatex:
            '\\forall x\\,\\exists y\\, R(x,y) \\;\\leadsto\\; \\forall x\\, R(x, f(x)) \\qquad\\text{vs}\\qquad \\exists y\\,\\forall x\\, R(x,y) \\;\\leadsto\\; \\forall x\\, R(x, c)',
          plainEnglishDecoding:
            'Skolemization has one crystal-clear rule: look at which $\\forall$ quantifiers sit *outside* your $\\exists y$. If $\\forall x_1, \\dots, \\forall x_k$ enclose $\\exists y$, replace $y$ with a fresh **Skolem function** $f(x_1, \\dots, x_k)$ (so $y$ can depend on them); if no $\\forall$ sits outside, replace $y$ with a fixed **Skolem constant** $c$. Then during unification, the **Occurs Check** simply refuses any binding $v \\mapsto t$ where $v$ appears inside $t$.',
          workedMiniExamples: [
            {
              prompt: 'Do $P(x, x)$ and $P(y, f(y))$ unify?',
              solution:
                'Slot 1 binds $x \\mapsto y$; slot 2 then requires unifying $y$ with $f(y)$. Because $y$ occurs inside $f(y)$ (**Occurs Check failure**), **no finite unifier exists**.',
            },
            {
              prompt: 'Unify $Q(x, f(y, b), g(x))$ and $Q(h(z), f(z, w), g(h(a)))$.',
              solution:
                'Slot 1 gives $x/h(z)$; slot 2 gives $y/z, w/b$; slot 3 matches $g(h(z))$ against $g(h(a))$, forcing $z/a$. Composing gives MGU $\\{x/h(a),\\; y/a,\\; z/a,\\; w/b\\}$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Two different constants $a$ and $b$, or two different functions $f(x)$ and $g(y)$, can be unified if a variable appears inside.',
            reality:
              'Only **variables** can be substituted. Constant–constant ($a \\neq b$) or function-symbol clashes ($f \\neq g$) always fail immediately.',
            counterExample:
              '$P(f(x))$ and $P(g(y))$ have no unifier because outer function symbols $f$ and $g$ differ.',
          },
          {
            myth: 'Standardizing variables apart before resolving two FOL clauses is purely cosmetic.',
            reality:
              'If two clauses share variable name $x$, forgetting to rename $x$ in one clause triggers a bogus Occurs Check failure!',
            counterExample:
              '$P(x) \\lor Q(x)$ and $\\neg P(f(x))$ seem to fail on $x = f(x)$, yet renaming to $P(x_1)$ and $\\neg P(f(x_2))$ unifies cleanly via $\\{x_1 / f(x_2)\\}$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7: AI',
            targetWeek: 7,
            topic: 'Grounding Relational Factors in Markov Logic / Bayes Nets',
            whyItMatters:
              'Unifying and grounding quantified FOL templates over finite entity sets is how relational probabilistic models build factor graphs.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm11-ch2-p1',
        title: 'The 2-Element Domain Countermodel Attack for FOL Validity MSQs',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2026 Q.48'],
        problemStatement:
          'You are given 4 quantified single-predicate or two-predicate formulas (such as $(\\exists x\\,P(x)) \\to (\\forall x\\,P(x))$, $\\exists x\\,(P(x) \\to \\forall y\\,P(y))$, $(\\forall x\\,(P(x)\\lor Q(x))) \\to ((\\forall x\\,P(x))\\lor(\\forall x\\,Q(x)))$, $(\\forall x\\,P(x)) \\to (\\exists x\\,P(x))$) and asked which are NOT valid in FOL.',
        triggerCue:
          'Any FOL MCQ/MSQ asking which quantified formulas are "valid", "satisfiable", or "NOT valid".',
        bruteForceTrap:
          'Trying to read quantifier formulas as casual English proverbs or attempting formal Skolem/resolution proofs for all 4 options.',
        mentalShift:
          'Construct a **2-element domain $D = \\{a, b\\}$** where $P(a)=T, P(b)=F$ (and $Q(a)=F, Q(b)=T$ if $Q$ appears). Invalid formulas almost always break right away on those 2 elements; only check non-empty-domain case analysis if $D = \\{a, b\\}$ fails to break an option!',
        steps: [
          {
            label: 'Step 1 — Test on $D = \\{a, b\\}$ with $P(a)=T, P(b)=F$',
            detail:
              '$(\\exists x\\,P(x)) \\to (\\forall x\\,P(x))$ becomes $T \\to F = F$ immediately! With $Q(a)=F, Q(b)=T$, $(\\forall x\\,(P(x)\\lor Q(x))) \\to ((\\forall x\\,P(x)) \\lor (\\forall x\\,Q(x)))$ also becomes $T \\to (F \\lor F) = F$.',
          },
          {
            label: 'Step 2 — Check non-empty domain guarantee',
            detail:
              'Standard FOL requires domains $D \\neq \\emptyset$, so $(\\forall x\\,P(x)) \\to (\\exists x\\,P(x))$ is ALWAYS valid: pick any $d \\in D$; if $P$ holds for all $x$, then $P(d)$ holds.',
          },
          {
            label: 'Step 3 — Watch the Drinker’s Paradox trap',
            detail:
              'For $\\exists x\\,(P(x) \\to \\forall y\\,P(y))$, split into two exhaustive cases: if everyone satisfies $P$, any $x$ gives $T\\to T = T$; if someone $x_0$ fails $P$, choose $x = x_0$ to get $F\\to F = T$! So it IS valid.',
          },
        ],
        lockInTakeaway:
          'Always attack FOL validity MSQs with $D = \\{a, b\\}$ and $P(a)=T, P(b)=F$ first — 90% of invalid formulas collapse in 15 seconds.',
      },
      {
        id: 'm11-ch2-p2',
        title: 'The Non-Member Sanity Filter for English-to-FOL Translations',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 Q.54', 'GATE DA 2026 Q.14'],
        problemStatement:
          'You must identify valid FOL translations of *"Each king is a person"* or *"All balls are round except balls used in rugby"* among tricky MSQ options mixing $\\forall, \\land, \\to$, and partial negations.',
        triggerCue:
          'Universal English phrases ("Each...", "All... except...", "No...") paired with multiple FOL candidate options.',
        bruteForceTrap:
          'Translating word-by-word from left to right ("Each king is a person" $\\leadsto \\forall x\\,(\\text{King}(x) \\land \\text{Person}(x))$) or forgetting the negative constraint on the exception group.',
        mentalShift:
          'Keep a **3-object pocket universe** in your head: one non-member ($c$ = cube), one normal member ($b$ = round non-rugby ball), and one exception member ($r$ = non-round rugby ball). Test every candidate option on $\\{c, b, r\\}$!',
        steps: [
          {
            label: 'Step 1 — Filter out $\\land$-under-$\\forall$ using non-member $c$',
            detail:
              'Plug $x = c$ ($\\text{Ball}(c)=F$) into $\\forall x\\,(B(x) \\land \\dots)$. It evaluates to FALSE just because $c$ isn’t a ball! Eliminate immediately.',
          },
          {
            label: 'Step 2 — Check normal member $b$ and exception member $r$',
            detail:
              'If an option writes only $(B(x) \\land R(x)) \\to \\neg U(x)$, test a non-round normal ball ($B=T, U=F, R=F$): the formula stays TRUE even though it violates the English rule! Both $(B\\land\\neg U)\\to R$ AND $(B\\land U)\\to\\neg R$ must hold.',
          },
          {
            label: 'Step 3 — Verify algebraic equivalence via exportation',
            detail:
              'Recall $A \\to (B \\land C) \\equiv (A \\to B) \\land (A \\to C)$ and $(A \\to (B \\to C)) \\equiv (A \\land B) \\to C$ so you catch equivalent MSQ variants.',
          },
        ],
        lockInTakeaway:
          'Testing one non-member ($c$) and one exception ($r$) exposes every $\\forall/\\land$ and half-translated "except" trap.',
      },
    ],
    arsenalCards: [
      {
        id: 'm11-c2-a1',
        badge: 'QUANTIFIERS',
        whenYouSpot: 'Translating "All A are B", "Each A is B", "Some A is B", or "All A except C are B"',
        directWeaponLatex:
          '\\forall x\\,(A(x) \\to B(x)) \\qquad\\text{vs}\\qquad \\exists x\\,(A(x) \\land B(x))',
        instantRule:
          'Pair $\\forall$ with $\\to$ and $\\exists$ with $\\land$. For "All $A$ are $B$ except $C$", conjoin $(A \\land \\neg C) \\to B$ and $(A \\land C) \\to \\neg B$.',
        tenSecondExample:
          '"Each king is a person" is $\\forall x\\,(\\text{King}(x) \\to \\text{Person}(x))$, NEVER $\\forall x\\,(\\text{King}(x) \\land \\text{Person}(x))$.',
        oneFatalTrap:
          'Putting $\\land$ inside $\\forall$ forces every object in the universe (cubes, numbers, tables) to satisfy $A(x)$!',
      },
      {
        id: 'm11-c2-a2',
        badge: 'NEGATION',
        whenYouSpot: 'Negating nested quantifiers, testing validity, or rewriting FOL into SQL `NOT EXISTS`',
        directWeaponLatex:
          '\\neg\\forall x\\,\\Phi(x) \\equiv \\exists x\\,\\neg\\Phi(x), \\qquad \\neg\\exists x\\,\\Phi(x) \\equiv \\forall x\\,\\neg\\Phi(x)',
        instantRule:
          'Push $\\neg$ left-to-right flipping $\\forall \\leftrightarrow \\exists$. Remember $\\forall$ distributes over $\\land$ ONLY, and $\\exists$ distributes over $\\lor$ ONLY.',
        tenSecondExample:
          'Test $(\\forall x\\,(P\\lor Q)) \\to ((\\forall x\\,P)\\lor(\\forall x\\,Q))$ on $D=\\{a,b\\}$ ($P(a)=T, Q(b)=T$): $T \\to F = F$!',
        oneFatalTrap:
          'Assuming $\\forall x\\exists y\\,R(x,y) \\implies \\exists y\\forall x\\,R(x,y)$ — it is only valid in the reverse direction ($\\exists\\forall \\implies \\forall\\exists$).',
      },
      {
        id: 'm11-c2-a3',
        badge: 'UNIFICATION',
        whenYouSpot: 'Unifying two predicate atoms, finding an MGU $\\theta$, or Skolemizing $\\forall\\exists$',
        directWeaponLatex:
          'E_1\\theta = E_2\\theta \\quad (\\text{fail if } v \\in \\text{Vars}(t) \\text{ for } v \\mapsto t)',
        instantRule:
          'Match arguments left-to-right, substitute variables only, back-substitute later bindings into earlier ones, and enforce the Occurs Check.',
        tenSecondExample:
          'Unifying $P(x, x)$ and $P(y, f(y))$ forces $y = f(y)$, which fails the Occurs Check immediately.',
        oneFatalTrap:
          'Leaving un-composed variables on the right-hand side of $\\theta$ (e.g., reporting $\\{x/h(z), z/a\\}$ instead of $\\{x/h(a), z/a\\}$).',
      },
    ],
    questions: [
      {
        id: 'm11-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Quantifier Negation Pushing',
        marks: 1,
        type: 'MCQ',
        stem: 'Let $S(x)$ mean "$x$ is a student", $C(y)$ mean "$y$ is a course", and $T(x, y)$ mean "$x$ took $y$". Which formula is logically equivalent to the **negation** of $\\forall x\\,(S(x) \\to \\exists y\\,(C(y) \\land T(x, y)))$ (*"Every student took at least one course"*)?',
        options: [
          {
            id: 'A',
            text: '$\\exists x\\,(S(x) \\land \\forall y\\,(C(y) \\to \\neg T(x, y)))$',
            whyTrueOrFalse: 'True — "There is some student who took NO course" (exact De Morgan negation).',
          },
          {
            id: 'B',
            text: '$\\exists x\\,(S(x) \\to \\forall y\\,(C(y) \\land \\neg T(x, y)))$',
            whyTrueOrFalse: 'False — $\\neg(A \\to B) \\equiv A \\land \\neg B$, NOT $A \\to \\neg B$, and $\\forall y$ must use $\\to$, not $\\land$.',
          },
          {
            id: 'C',
            text: '$\\forall x\\,(S(x) \\to \\forall y\\,(C(y) \\to \\neg T(x, y)))$',
            whyTrueOrFalse: 'False — this claims NO student took any course, which is much stronger than the negation.',
          },
          {
            id: 'D',
            text: '$\\exists x\\,(S(x) \\land \\exists y\\,(C(y) \\land \\neg T(x, y)))$',
            whyTrueOrFalse: 'False — this only says some student skipped at least one course.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Apply $\\neg\\forall x\\,\\Phi \\equiv \\exists x\\,\\neg\\Phi$ and $\\neg(A \\to B) \\equiv A \\land \\neg B$.',
        intuitiveSolution: [
          'Start with $\\neg\\forall x\\,(S(x) \\to \\exists y\\,(C(y) \\land T(x, y)))$.',
          'Push $\\neg$ past $\\forall x$ and across $\\to$: $\\exists x\\,(S(x) \\land \\neg\\exists y\\,(C(y) \\land T(x, y)))$.',
          'Push $\\neg$ past $\\exists y$: $\\forall y\\,\\neg(C(y) \\land T(x, y)) \\equiv \\forall y\\,(C(y) \\to \\neg T(x, y))$, yielding Option A.',
        ],
        directShortcutUsed: 'Negate "Every $S$ has a $C$" $\\equiv$ "Some $S$ has NO $C$".',
      },
      {
        id: 'm11-c2-q2',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #2 · Finite-Domain Evaluation',
        marks: 1,
        type: 'NAT',
        stem: 'Let the domain be $D = \\{1, 2, 3, 4\\}$ and define the predicate $R(x, y) \\iff (x \\cdot y \\le 8)$. How many elements $x \\in D$ satisfy the formula $\\forall y \\in D,\\; R(x, y)$?',
        natAnswer: { min: 2, max: 2, exactDisplay: '2' },
        triggerHint: 'Check $y = 4$ (the worst-case largest $y$ in $D$) for each $x \\in \\{1,2,3,4\\}$.',
        intuitiveSolution: [
          'For $\\forall y \\in \\{1,2,3,4\\},\\; x \\cdot y \\le 8$ to hold, it suffices to check the largest $y = 4$: $4x \\le 8 \\implies x \\le 2$.',
          'For $x=1$: $1\\cdot\\{1,2,3,4\\} = \\{1,2,3,4\\} \\le 8$ (True). For $x=2$: $2\\cdot\\{1,2,3,4\\} = \\{2,4,6,8\\} \\le 8$ (True).',
          'For $x=3$ and $x=4$, $y=3$ already gives $9 > 8$ and $12 > 8$. Hence **2** elements ($1$ and $2$) satisfy it.',
        ],
        directShortcutUsed: 'Check the tightest universal witness ($y = \\max D = 4$).',
      },
      {
        id: 'm11-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.54 Style (FOL "Except" Translation)',
        year: 2024,
        marks: 2,
        type: 'MSQ',
        stem: 'Let $B(x)$ denote "$x$ is a ball", $R(x)$ denote "$x$ is round", and $U(x)$ denote "$x$ is used in rugby". Which of the following First-Order Logic formulas accurately express the statement: *"All balls are round except balls used in rugby"*?',
        options: [
          {
            id: 'A',
            text: '$\\forall x\\,\\big((B(x) \\land \\neg U(x)) \\to R(x)\\big) \\land \\forall x\\,\\big((B(x) \\land U(x)) \\to \\neg R(x)\\big)$',
            whyTrueOrFalse: 'True — states both that non-rugby balls are round and that rugby balls are not round.',
          },
          {
            id: 'B',
            text: '$\\forall x\\,\\big(B(x) \\to ((\\neg U(x) \\to R(x)) \\land (U(x) \\to \\neg R(x)))\\big)$',
            whyTrueOrFalse: 'True — by exportation and $\\forall$-distribution over $\\land$, this is logically equivalent to A.',
          },
          {
            id: 'C',
            text: '$\\forall x\\,\\big(B(x) \\land \\neg U(x) \\land R(x)\\big)$',
            whyTrueOrFalse: 'False — asserts every object in the universe is a non-rugby round ball.',
          },
          {
            id: 'D',
            text: '$\\forall x\\,\\big((B(x) \\land R(x)) \\to \\neg U(x)\\big)$',
            whyTrueOrFalse: 'False — only forbids rugby balls from being round; it fails to force non-rugby balls to be round.',
          },
        ],
        correctOptions: ['A', 'B'],
        triggerHint: 'Test a non-ball cube ($B=F$) and a non-round non-rugby ball ($B=T, U=F, R=F$) against each option.',
        intuitiveSolution: [
          'The sentence splits balls into two groups: non-rugby balls ($B \\land \\neg U$) must be round ($R$), and rugby balls ($B \\land U$) are exceptions ($\\neg R$).',
          'Option A writes this directly as a conjunction of two $\\forall x$ clauses.',
          'Option B factors out $B(x) \\to (\\dots)$ and uses $P \\to (Q \\land S) \\equiv (P \\to Q) \\land (P \\to S)$ plus $(P \\land Q) \\to S \\equiv P \\to (Q \\to S)$, matching Option A identically.',
          'Option C fails on any non-ball object; Option D stays TRUE on a square non-rugby ball ($B=T, U=F, R=F$), so D is incomplete.',
        ],
        directShortcutUsed: 'Conjoin rule + exception + exportation law $(A \\land B) \\to C \\equiv A \\to (B \\to C)$.',
      },
      {
        id: 'm11-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.48 Style (FOL Validity & Countermodels)',
        year: 2026,
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following First-Order Logic formulas are **NOT valid** (i.e., evaluate to FALSE under at least one non-empty domain and interpretation)?',
        options: [
          {
            id: 'A',
            text: '$(\\exists x\\, P(x)) \\to (\\forall x\\, P(x))$',
            whyTrueOrFalse: 'Select A (NOT valid) — on $D = \\{a, b\\}$ with $P(a)=T, P(b)=F$, $\\exists x\\,P(x)=T$ while $\\forall x\\,P(x)=F$.',
          },
          {
            id: 'B',
            text: '$\\exists x\\,(P(x) \\to \\forall y\\, P(y))$',
            whyTrueOrFalse: 'Do NOT select B (VALID) — Drinker’s Paradox: if $\\forall y\\,P(y)=T$ any $x$ works; if $\\forall y\\,P(y)=F$ pick $x_0$ with $P(x_0)=F$ so $F \\to F = T$.',
          },
          {
            id: 'C',
            text: '$\\big(\\forall x\\,(P(x) \\lor Q(x))\\big) \\to \\big((\\forall x\\, P(x)) \\lor (\\forall x\\, Q(x))\\big)$',
            whyTrueOrFalse: 'Select C (NOT valid) — on $D = \\{a, b\\}$ with $P(a)=T, P(b)=F$ and $Q(a)=F, Q(b)=T$, left is $T$ and right is $F$.',
          },
          {
            id: 'D',
            text: '$(\\forall x\\, P(x)) \\to (\\exists x\\, P(x))$',
            whyTrueOrFalse: 'Do NOT select D (VALID) — FOL domains are non-empty, so if $P$ holds for all elements it holds for at least one element.',
          },
        ],
        correctOptions: ['A', 'C'],
        triggerHint: 'Test each option on $D = \\{a, b\\}$ with $P(a)=T, P(b)=F$ and $Q(a)=F, Q(b)=T$.',
        intuitiveSolution: [
          'Take $D = \\{a, b\\}$ with $P(a)=T, P(b)=F, Q(a)=F, Q(b)=T$.',
          'Formula A evaluates to $T \\to F = F$, so **A is NOT valid**.',
          'Formula C evaluates to $T \\to (F \\lor F) = F$, so **C is NOT valid**.',
          'Formula D holds on every non-empty domain, and Formula B (Drinker’s Paradox) holds by two-case exhaustion on every non-empty domain.',
        ],
        directShortcutUsed: '2-element countermodel $D = \\{a, b\\}$ + Drinker’s Paradox case split.',
      },
      {
        id: 'm11-c2-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Mock · Most General Unifier (MGU)',
        marks: 2,
        type: 'MCQ',
        stem: 'Consider unifying the two First-Order Logic atoms $A_1 = P(x,\\; f(y, b),\\; g(x))$ and $A_2 = P(h(z),\\; f(z, w),\\; g(h(a)))$, where $x, y, z, w$ are variables and $a, b$ are constants. What is the **Most General Unifier (MGU)** $\\theta$?',
        options: [
          {
            id: 'A',
            text: '$\\{x / h(a),\\; y / a,\\; z / a,\\; w / b\\}$',
            whyTrueOrFalse: 'True — substituting $\\theta$ simultaneously turns both $A_1$ and $A_2$ into $P(h(a), f(a, b), g(h(a)))$.',
          },
          {
            id: 'B',
            text: '$\\{x / h(z),\\; y / z,\\; z / a,\\; w / b\\}$',
            whyTrueOrFalse: 'False — un-composed substitution: under simultaneous application, $A_1\\theta$ contains $h(z)$ while $A_2\\theta$ contains $h(a)$.',
          },
          {
            id: 'C',
            text: '$\\{x / h(a),\\; y / b,\\; z / a,\\; w / b\\}$',
            whyTrueOrFalse: 'False — gives $f(b, b)$ in $A_1$ versus $f(a, b)$ in $A_2$.',
          },
          {
            id: 'D',
            text: 'Not unifiable (fails Occurs Check)',
            whyTrueOrFalse: 'False — no variable appears inside a term bound to itself.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Unify argument by argument and back-substitute $z / a$ into every earlier binding.',
        intuitiveSolution: [
          'Argument 1: $x$ vs $h(z) \\implies \\{x / h(z)\\}$.',
          'Argument 2: $f(y, b)$ vs $f(z, w) \\implies \\{y / z,\\; w / b\\}$.',
          'Argument 3: applying $\\{x / h(z)\\}$ to $g(x)$ gives $g(h(z))$ vs $g(h(a)) \\implies \\{z / a\\}$.',
          'Compose $z / a$ back into $x / h(z)$ and $y / z$ to obtain $\\theta = \\{x / h(a),\\; y / a,\\; z / a,\\; w / b\\}$.',
        ],
        directShortcutUsed: 'Left-to-right Robinson unification + idempotent composition.',
      },
      {
        id: 'm11-c2-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Mock · FOL Quantifier Order & SQL NOT EXISTS Bridge',
        marks: 2,
        type: 'MSQ',
        stem: 'Let $T(s, c)$ mean "Student $s$ took Course $c$" over non-empty domains of students $S$ and courses $C$. Which of the following formulas correctly express(es) *"There is at least one student who took EVERY course"*?',
        options: [
          {
            id: 'A',
            text: '$\\exists s \\in S\\; \\forall c \\in C,\\; T(s, c)$',
            whyTrueOrFalse: 'True — one witness student $s$ satisfies $T(s, c)$ for all courses $c$.',
          },
          {
            id: 'B',
            text: '$\\forall c \\in C\\; \\exists s \\in S,\\; T(s, c)$',
            whyTrueOrFalse: 'False — allows each course to be taken by a different student (e.g., $s_1$ took $c_1$ only, $s_2$ took $c_2$ only).',
          },
          {
            id: 'C',
            text: '$\\exists s \\in S\\; \\neg\\exists c \\in C,\\; \\neg T(s, c)$',
            whyTrueOrFalse: 'True — replaces $\\forall c\\, T(s, c)$ with $\\neg\\exists c\\,\\neg T(s, c)$ ("no course was skipped by $s$"), matching SQL `NOT EXISTS`.',
          },
          {
            id: 'D',
            text: '$\\neg\\forall s \\in S\\; \\exists c \\in C,\\; \\neg T(s, c)$',
            whyTrueOrFalse: 'True — pushing $\\neg$ inward turns $\\neg\\forall s\\,\\exists c\\,\\neg T$ into $\\exists s\\,\\forall c\\,T(s, c)$.',
          },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Push $\\neg$ across quantifiers in C and D, and check quantifier order $\\exists s\\forall c$ vs $\\forall c\\exists s$.',
        intuitiveSolution: [
          'The target statement fixes one student $s$ first and checks all courses $c$: $\\exists s\\,\\forall c\\,T(s,c)$ (**A**).',
          'Swapping quantifiers to $\\forall c\\,\\exists s\\,T(s,c)$ (**B**) only means every course has at least one enrollee.',
          'Replacing $\\forall c\\,T(s,c)$ with $\\neg\\exists c\\,\\neg T(s,c)$ yields **C** (the exact FOL basis of SQL Division via `NOT EXISTS`).',
          'Negating "Every student missed at least one course" ($\\neg\\forall s\\,\\exists c\\,\\neg T(s,c)$) pushes $\\neg$ inward to $\\exists s\\,\\forall c\\,T(s,c)$, confirming **D**.',
        ],
        directShortcutUsed: 'De Morgan duality $\\forall \\equiv \\neg\\exists\\neg$ and quantifier order check.',
      },
    ],
  },
]

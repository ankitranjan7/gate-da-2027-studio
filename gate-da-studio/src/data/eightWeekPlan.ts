import type { WeekPlan } from '../types/curriculum'

export interface SectionAnalyticsRow {
  code: string
  name: string
  m2024: number
  m2025: number
  m2026: number
  avgMarks: number
  trend: 'rising' | 'steady' | 'shifting'
  summary: string
}

export const SECTION_ANALYTICS: SectionAnalyticsRow[] = [
  {
    code: 'Sec 1',
    name: 'Probability & Statistics',
    m2024: 15,
    m2025: 19,
    m2026: 21,
    avgMarks: 18.3,
    trend: 'rising',
    summary: '#1 heavyweight every year. Heavy NAT share; rewards moment/symmetry shortcuts, CDF inversions, CLT, and Bayes.',
  },
  {
    code: 'Sec 4',
    name: 'Programming, DS & Algorithms',
    m2024: 20,
    m2025: 14,
    m2026: 14,
    avgMarks: 16.0,
    trend: 'steady',
    summary: '#2 heavyweight. Tricky Python execution traces (closures, mutable defaults, recursion stacks) + exact sort/tree/graph traces.',
  },
  {
    code: 'Sec 6',
    name: 'Machine Learning',
    m2024: 15,
    m2025: 14,
    m2026: 14,
    avgMarks: 14.3,
    trend: 'steady',
    summary: 'Rock-solid 14–15M. Micro-dataset (N=3..10) hand calculations (OLS, Ridge, 2D SVM, k-NN, ID3, ReLU backprop, PCA, clustering).',
  },
  {
    code: 'Sec 5',
    name: 'DBMS & Data Warehousing',
    m2024: 7,
    m2025: 11,
    m2026: 18,
    avgMarks: 12.0,
    trend: 'rising',
    summary: 'Biggest 3-year surge (2.5x). Concrete 5–8 row traces across SQL, Relational Algebra (incl. ÷), and TRC + B+ trees, FDs/BCNF & OLAP cubes.',
  },
  {
    code: 'Sec 2',
    name: 'Linear Algebra',
    m2024: 10,
    m2025: 12,
    m2026: 8,
    avgMarks: 10.0,
    trend: 'steady',
    summary: 'Almost zero brute-force 3x3 arithmetic. Tests structural properties: projections/centering matrix, rank-1 outer products, orthogonality, eigenvalues/SVD.',
  },
  {
    code: 'Sec 7',
    name: 'Artificial Intelligence',
    m2024: 10,
    m2025: 6,
    m2026: 8,
    avgMarks: 8.0,
    trend: 'steady',
    summary: 'Propositional & First-Order Logic translations/validity + clean traces (A*, BFS/DFS, Minimax, alpha-beta) + Bayes Nets & colliders.',
  },
  {
    code: 'Sec 3',
    name: 'Calculus & Optimization',
    m2024: 8,
    m2025: 9,
    m2026: 2,
    avgMarks: 6.3,
    trend: 'shifting',
    summary: 'Root prerequisite increasingly fused into ML/Stats/LA (SGD updates, Poisson CLT limits, ReLU kinks, Rayleigh max) + closed-interval extrema traps.',
  },
  {
    code: 'GA',
    name: 'General Aptitude',
    m2024: 15,
    m2025: 15,
    m2026: 15,
    avgMarks: 15.0,
    trend: 'steady',
    summary: 'Fixed 15M (5x1M + 5x2M, all MCQs). High-ROI quant, spatial folding/assembly, logical deduction, and verbal analogies.',
  },
]

export const PAPER_FORMAT_STATS = [
  { year: 2024, institute: 'IISc Bengaluru', mcq: '37 Qs (52M)', msq: '12 Qs (22M)', nat: '16 Qs (26M)', zeroNegMarks: 48 },
  { year: 2025, institute: 'IIT Roorkee', mcq: '35 Qs (52M)', msq: '18 Qs (29M)', nat: '12 Qs (19M)', zeroNegMarks: 48 },
  { year: 2026, institute: 'IIT Guwahati', mcq: '33 Qs (49M)', msq: '14 Qs (22M)', nat: '18 Qs (29M)', zeroNegMarks: 51 },
]

export const EIGHT_WEEK_PLAN: WeekPlan[] = [
  {
    week: 1,
    dateRange: 'Nov 4 – Nov 10, 2026',
    theme: 'Root Engine: Single-Variable Calculus, Optimization & Counting/Bayes Foundations',
    rationale:
      'Calculus comes FIRST despite being Section 3 in the PDF because Continuous Probability (Week 2) and ML Optimization/Neural Nets (Week 7) rely directly on derivatives, Taylor series, and convexity. Days 5–7 launch Discrete Counting & Bayes with zero prerequisites.',
    totalHours: 42,
    modules: [
      {
        id: 'w1-m1',
        week: 1,
        dayRange: 'Days 1–4 (24 hrs)',
        hours: 24,
        sectionCode: 'Sec 3',
        title: 'Module 1: Single-Variable Calculus & Optimization (Complete Pilot Active)',
        priority: 'core-pillar',
        pyqCount2024_2026: 17,
        avgMarks: '6–9M direct + ~8M cross-cutting',
        isPilotImplemented: true,
        prerequisites: ['High-school algebra & coordinate graphs (built from ground zero)'],
        unlocksNext: [
          'Continuous PDFs/CDFs & Poisson e^lambda series (Week 2)',
          'OLS/Ridge loss derivatives, Convexity & SGD updates (Week 7)',
          'Sigmoid & ReLU Backpropagation chain rule (Week 7)',
          'Binary Search / Quicksort asymptotic sums (Week 4)',
        ],
        syllabusTopics: [
          'Functions of a single variable',
          'Limit, continuity and differentiability',
          'Taylor series',
          'Maxima and minima',
          'Optimization involving a single variable',
        ],
        importantFocus:
          'Maclaurin 5-series limit crushing, sqrt(t^2+at)-t rationalization, piecewise C^1 gluing, ReLU kink & Sigmoid f(1-f), Lipschitz squeeze zero-derivative, closed-interval [a,b] boundary extrema, f\'\'>0 strict convexity quantifiers, and 1-step SGD.',
        skipBoundary:
          'Skip formal epsilon-delta proofs, heavy trigonometric integration techniques, differential equations, and multivariable vector calculus (curl/divergence/Stokes) — 0 marks in GATE DA.',
        keyNumericalArchetypes: [
          'Double geometric series decoupling (2026 Q35)',
          'Algebraic conjugate limits at infinity (2025 Q32)',
          'Maclaurin log-product 0/0 limits & parity n-th derivatives (2024 Q60, 2025 Q14)',
          'Piecewise C^1 parameter solving & Lipschitz constant trick (2024 Q37, 2025 Q59)',
          'Closed-interval global max vs local max trap & 1-step SGD (2025 Q49, 2026 Q29)',
        ],
      },
      {
        id: 'w1-m2',
        week: 1,
        dayRange: 'Days 5–7 (18 hrs)',
        hours: 18,
        sectionCode: 'Sec 1',
        title: 'Module 2: Combinatorics, Probability Axioms, Conditional Probability & Bayes',
        priority: 'core-pillar',
        pyqCount2024_2026: 11,
        avgMarks: '6–8M every year',
        prerequisites: ['Basic functions & finite sums from Module 1'],
        unlocksNext: [
          'Discrete & Continuous Random Variables (Week 2)',
          'Naive Bayes Classifier (Week 7)',
          'AI Bayesian Networks, Colliders & Sampling (Week 7)',
        ],
        syllabusTopics: [
          'Counting (permutation and combinations)',
          'Probability axioms, Sample space, events',
          'Independent events, mutually exclusive events',
          'Marginal, conditional and joint probability',
          'Bayes Theorem',
        ],
        importantFocus:
          'Complement counting ("at least one"), Stars & Bars integer compositions, involution/cycle counting, independent vs mutually exclusive MSQ traps, Total Probability partitioning, and Bayes posterior ratios.',
        skipBoundary:
          'Skip obscure generating-function olympiad combinatorics and measure-theoretic sigma-algebra proofs.',
        keyNumericalArchetypes: [
          'Stars & Bars positive vs non-negative integer solutions (2026 Q20)',
          'Subset product parity via complement counting (2026 Q19) & involution bijections f(f(n))=n (2026 Q33)',
          'Multi-prior Bayes posterior & medical sensitivity/specificity NATs (2024 Q58, 2025 Q31, 2026 Q57)',
          'Overlapping row/column Bernoulli matrix conditioning (2026 Q64)',
        ],
      },
    ],
  },
  {
    week: 2,
    dateRange: 'Nov 11 – Nov 17, 2026',
    theme: 'Probability Heavyweight: Random Variables, Moments, Distributions, CLT & Inference',
    rationale:
      'With Week 1 Calculus and Bayes locked in, Week 2 conquers the #1 highest-weightage block of GATE DA (18–21 marks). Every continuous integral, CDF derivative, and CLT limit now builds seamlessly on Week 1.',
    totalHours: 42,
    modules: [
      {
        id: 'w2-m1',
        week: 2,
        dayRange: 'Days 8–10 (18 hrs)',
        hours: 18,
        sectionCode: 'Sec 1',
        title: 'Module 3: Discrete & Continuous Random Variables, PMF/PDF/CDF & Standard Distributions',
        priority: 'core-pillar',
        pyqCount2024_2026: 14,
        avgMarks: '7–9M',
        prerequisites: ['Module 1 (Derivatives, Integrals, Maclaurin e^x)', 'Module 2 (Probability Axioms)'],
        unlocksNext: ['Entropy & Information Gain in Decision Trees (Week 7)', 'Hash Probe & Quicksort Expectations (Week 4)'],
        syllabusTopics: [
          'Random variables, discrete RVs and PMFs: uniform, Bernoulli, binomial, Poisson',
          'Continuous RVs and PDFs: uniform, exponential, normal, standard normal, t-distribution, chi-squared',
          'Cumulative distribution function (CDF), Conditional PDF',
        ],
        importantFocus:
          'CDF jump properties vs continuous quantile inversion F(m)=0.5, Exponential memorylessness & floor-to-Geometric bridge, Poisson mean=variance, Normal standardization Z=(X-mu)/sigma, Z^2 ~ chi^2_1 (Var=2), and t_1 (Cauchy) heavy tails.',
        skipBoundary:
          'Do NOT memorize messy Gamma/Beta integrals or t/chi-square normalizing constants — focus on structural relationships (sum of Z_i^2, sample variance degrees of freedom n-1).',
        keyNumericalArchetypes: [
          'CDF parameter & transformation inversion P(X^2 <= c) (2025 Q19, Q39)',
          'Exponential memorylessness & parameter inversion (2024 Q57, 2025 Q21, Q41, 2026 Q34)',
          '2D Continuous Uniform area geometry P(X >= Y) (2024 Q56)',
          'Normal vs t_1 tail comparison & chi-squared sampling MSQs (2025 Q36, 2026 Q28, Q53)',
        ],
      },
      {
        id: 'w2-m2',
        week: 2,
        dayRange: 'Days 11–12 (14 hrs)',
        hours: 14,
        sectionCode: 'Sec 1',
        title: 'Module 4: Expectation, Variance, Conditional Moments, Covariance & Correlation',
        priority: 'core-pillar',
        pyqCount2024_2026: 10,
        avgMarks: '5–7M',
        prerequisites: ['Module 3 (PMFs, PDFs, Joint/Conditional Distributions)'],
        unlocksNext: [
          'DBMS z-score Normalization (Week 6)',
          'PCA Empirical Covariance Matrix & OLS Slope Cov(X,Y)/Var(X) (Week 7)',
          'Bias-Variance Trade-off & Estimator MSE (Week 7)',
        ],
        syllabusTopics: [
          'Mean, median, mode and standard deviation',
          'Conditional expectation and variance',
          'Correlation and covariance',
        ],
        importantFocus:
          'Linearity of expectation (indicator RVs!), Law of Iterated Expectation E[E[X|Y]]=E[X], Law of Total Variance, Markov/first-step recurrence for consecutive streaks, zero correlation on symmetric nonlinear RVs, and pairwise difference variance identity.',
        skipBoundary:
          'Skip heavy bivariate change-of-variables Jacobians; GATE DA tests symmetry and moment identities.',
        keyNumericalArchetypes: [
          'First-step expectation recurrence for consecutive die/coin streaks (2024 Q36)',
          'Zero-grind variance/correlation symmetry: Var((2X-1)Y) & Corr(X, X^2) = 0 (2026 Q44, Q63)',
          'Sample mean updates & pairwise squared difference sum identity (2024 Q34, 2026 Q62)',
          'Indicator RV covariance & Normal cross-moment solving (2024 Q65, 2025 Q20)',
        ],
      },
      {
        id: 'w2-m3',
        week: 2,
        dayRange: 'Days 13–14 (10 hrs)',
        hours: 10,
        sectionCode: 'Sec 1',
        title: 'Module 5: Central Limit Theorem, Confidence Intervals & Hypothesis Testing (IITM Sleeping Giant)',
        priority: 'sleeping-giant',
        pyqCount2024_2026: 3,
        avgMarks: '2–4M (+ high 2027 debut potential)',
        prerequisites: ['Module 3 (Normal, t, chi-squared)', 'Module 4 (Sample Mean & Sample Variance)'],
        unlocksNext: ['Model evaluation & Cross-Validation variance intuition (Week 7)'],
        syllabusTopics: [
          'Central limit theorem (CLT)',
          'Confidence interval',
          'z-test, t-test, chi-squared test',
        ],
        importantFocus:
          'CLT sum/mean standardization to Phi(z) (tested in 2025 Q40 & 2026 Q45!), unbiased sample estimator variance p(1-p)/n (2025 Q54), exact decision table for z-test (known sigma) vs t-test (unknown sigma, df=n-1) vs chi-squared goodness-of-fit/independence ((O-E)^2/E), and CI width scaling with 1/sqrt(n).',
        skipBoundary:
          '0 questions on z/t/chi^2 hypothesis tests in 2024–2026, so do NOT memorize critical-value lookup tables (GATE always provides z_alpha/t_alpha constants if needed). Master test statistics, degrees of freedom, and p-value vs alpha logic in 1 crisp day.',
        keyNumericalArchetypes: [
          'Binomial/Poisson sum approximation via CLT (2025 Q40, 2026 Q45)',
          'Sample size n required to halve Confidence Interval width',
          'Computing t-statistic, z-statistic, and 2x2 contingency chi-squared statistic + df=(r-1)(c-1)',
        ],
      },
    ],
  },
  {
    week: 3,
    dateRange: 'Nov 18 – Nov 24, 2026',
    theme: 'Geometric & Spectral Linear Algebra (The Matrix Engine of ML)',
    rationale:
      'GATE DA Linear Algebra almost never asks tedious 3x3 determinant crunching — it tests geometric subspaces, orthogonal projections, rank-1 updates, eigenvalues, Rayleigh quotients, and SVD, which directly power OLS, Ridge, SVM, PCA, and LDA in Week 7.',
    totalHours: 42,
    modules: [
      {
        id: 'w3-m1',
        week: 3,
        dayRange: 'Days 15–17 (18 hrs)',
        hours: 18,
        sectionCode: 'Sec 2',
        title: 'Module 6: Vector Spaces, Subspaces, Independence, Rank-Nullity, Systems, Gaussian Elim & LU',
        priority: 'core-pillar',
        pyqCount2024_2026: 9,
        avgMarks: '4–6M',
        prerequisites: ['Basic coordinate geometry & functions (Week 1)'],
        unlocksNext: ['Linear Separability, Hyperplanes & SVM Margins (Week 7)', 'OLS Column-Space Geometry (Week 7)'],
        syllabusTopics: [
          'Vector space, subspaces, linear dependence and independence of vectors',
          'Matrices, partition matrix and their properties',
          'Systems of linear equations and solutions; Gaussian elimination',
          'Rank, nullity, LU decomposition',
        ],
        importantFocus:
          '3-check subspace test (zero vector, closure!), Rank-Nullity theorem (rank + nullity = n), simultaneous solution counts (0, 1, inf) of Ax=p and Ax=q, Gram matrix X^T X rank = rank(X), Gaussian elimination O(n^3) vs back-substitution O(n^2), and compact 1-hour LU = A without pivoting.',
        skipBoundary:
          'LU decomposition has 0 PYQs across 2024–2026 (treat as a clean 1-hour Sleeping Giant formula); skip abstract infinite-dimensional function spaces and Jordan canonical form.',
        keyNumericalArchetypes: [
          'Subspace validity & hyperplane intersection geometry in R^3 (2024 Q47, 2026 Q22)',
          'Solution multiplicity MSQs for rectangular Mx=p, Mx=q (2024 Q48, 2025 Q13)',
          'Rank invariants (A^3=A => rank(A)=rank(A^2), Gram X^T X invertibility) (2025 Q37, Q38)',
        ],
      },
      {
        id: 'w3-m2',
        week: 3,
        dayRange: 'Days 18–21 (24 hrs)',
        hours: 24,
        sectionCode: 'Sec 2',
        title: 'Module 7: Projections, Orthogonality, Eigenvalues, Quadratic Forms & SVD',
        priority: 'core-pillar',
        pyqCount2024_2026: 12,
        avgMarks: '5–7M (+ direct PCA/Ridge/LDA payoff)',
        prerequisites: ['Module 6 (Subspaces, Rank, Inner Products)', 'Module 1 (Maxima/Minima)'],
        unlocksNext: [
          'PCA (Centering Matrix + Covariance Eigenvalues/SVD) (Week 7)',
          'OLS Projection Matrix X(X^T X)^-1 X^T & Ridge (X^T X + lambda I) (Week 7)',
          'Fisher LDA Generalized Eigenvalues (Week 7)',
        ],
        syllabusTopics: [
          'Projection matrix, orthogonal matrix, idempotent matrix, projections',
          'Determinant, eigenvalues and eigenvectors',
          'Quadratic forms, singular value decomposition (SVD)',
        ],
        importantFocus:
          'Projection/Idempotent matrices (P^2=P, eigenvalues in {0,1}, trace(P)=rank(P)), Centering Matrix I_n - (1/n)11^T (appeared TWICE in 2026!), Orthogonal/Rotation matrices (||Qx||=||x||, Q^k periodicity, complex unit-circle eigenvalues!), Rank-1 matrices uu^T & I + xx^T, Trace=sum(lambda) & Det=prod(lambda), Rayleigh Quotient max_{||x||=1} x^T A x = lambda_max, and SVD sigma_i = sqrt(lambda_i(A^T A)).',
        skipBoundary:
          'Skip cofactor expansion grind on 4x4+ numerical matrices and manual 3x3 SVD eigenvector orthogonalization by hand.',
        keyNumericalArchetypes: [
          'Centering & Projection matrix MSQs + Rayleigh max (2024 Q49, 2025 Q50, 2026 Q52, Q65)',
          '2D/3D Block-Rotation powers M^2026 & trace-eigenvalue equations (2025 Q52, 2026 Q21, Q46)',
          'Rank-1 SVD singular-value sum ||u||_2^2 & singular polynomial det(M^2+12M)=0 (2024 Q35, Q61, 2025 Q28)',
        ],
      },
    ],
  },
  {
    week: 4,
    dateRange: 'Nov 25 – Dec 1, 2026',
    theme: 'Python Execution Mastery, Core Data Structures, Searching & Sorting',
    rationale:
      'Section 4 averages 16 marks (#2 overall). Recent papers heavily test Python execution subtleties (closures, mutable defaults, recursion frames) alongside crisp dry-runs of Stacks, Queues, Hashing, Trees, and Sorting.',
    totalHours: 42,
    modules: [
      {
        id: 'w4-m1',
        week: 4,
        dayRange: 'Days 22–24 (18 hrs)',
        hours: 18,
        sectionCode: 'Sec 4',
        title: 'Module 8: Python Execution Model, Recursion Stacks, Linear DS & Hash Tables',
        priority: 'core-pillar',
        pyqCount2024_2026: 14,
        avgMarks: '7–9M',
        prerequisites: ['Week 1 Geometric/Log Sums', 'Week 2 Discrete Expectation (for Hashing)'],
        unlocksNext: ['DBMS Hash Indexing (Week 6)', 'DFS/Recursion & AI Game Trees (Week 5)'],
        syllabusTopics: [
          'Programming in Python',
          'Basic data structures: stacks, queues, linked lists, hash tables',
        ],
        importantFocus:
          'Python object references vs mutation (list.extend vs append, set operations in loops), mutable default arguments def f(x, lst=[]), lexical closures/nonlocal, total recursion call-stack activations, Stack/Deque trace patterns, Linked List O(n) access vs O(1) pointer splice, and Hash Table Linear Probing traces + 1/(1-alpha) expected probes.',
        skipBoundary:
          'Skip Python web frameworks, decorators/metaclasses/async, and C-style manual memory management.',
        keyNumericalArchetypes: [
          'Python mutable defaults, closures, set loops & recursive tree/swap traces (2024 Q38, Q41, 2025 Q23, Q47, Q63, 2026 Q16, Q39, Q50, Q58)',
          'Linear probing index trace h(x) = (ax+b) mod m (2025 Q18) & Deque/Stack parity traces (2024 Q32, 2025 Q64)',
        ],
      },
      {
        id: 'w4-m2',
        week: 4,
        dayRange: 'Days 25–28 (24 hrs)',
        hours: 24,
        sectionCode: 'Sec 4',
        title: 'Module 9: Trees, Searching, Elementary Sorts & Divide-and-Conquer (Mergesort/Quicksort)',
        priority: 'core-pillar',
        pyqCount2024_2026: 12,
        avgMarks: '6–8M',
        prerequisites: ['Module 8 (Recursion & Arrays)', 'Week 1 Logs & Recurrences', 'Week 2 Expectation'],
        unlocksNext: ['DBMS B+ Tree Indexing (Week 6)', 'Decision Trees (Week 7)', 'Minimax Game Trees (Week 5)'],
        syllabusTopics: [
          'Trees',
          'Search algorithms: linear search and binary search',
          'Basic sorting algorithms: selection sort, bubble sort and insertion sort',
          'Divide and conquer: mergesort, quicksort',
        ],
        importantFocus:
          'Binary Tree reconstruction from Pre/In/Post (and Full Binary Tree Pre+Post!), node/leaf/height inequalities (L <= I+1), Binary Search exact worst-case comparison recurrences, exact pass-by-pass swap & comparison counts of Bubble vs Insertion vs Selection sort on nearly-sorted/reverse arrays, Quicksort pivot swaps + expected recurrence, and Mergesort inversion counting (Sleeping Giant!).',
        skipBoundary:
          'Skip Red-Black / Splay tree rotation casework and Fibonacci heaps — never asked in DA.',
        keyNumericalArchetypes: [
          'Exact swap/comparison/pass counts in Insertion, Bubble, Selection & Quicksort (2024 Q30, Q45, 2025 Q29, 2026 Q15, Q49)',
          'Binary search max 3-way comparisons & recurrence (2024 Q40, 2025 Q27, 2026 Q31)',
          'Binary tree traversal reconstruction & structural bounds (2024 Q28, Q52, 2026 Q25)',
        ],
      },
    ],
  },
  {
    week: 5,
    dateRange: 'Dec 2 – Dec 8, 2026',
    theme: 'Graphs -> AI Search/Adversarial Games + Formal Logic (Bridge to DBMS)',
    rationale:
      'Instead of studying DSA Graphs and AI Search weeks apart, we fuse them back-to-back because BFS, DFS, Dijkstra/UCS, A*, and Minimax share one single engine. Days 33–35 master Propositional & First-Order Logic right before Week 6 DBMS so Tuple Relational Calculus & SQL EXISTS feel trivial.',
    totalHours: 42,
    modules: [
      {
        id: 'w5-m1',
        week: 5,
        dayRange: 'Days 29–32 (24 hrs)',
        hours: 24,
        sectionCode: 'Sec 4 + Sec 7',
        title: 'Module 10: Graph Algorithms (BFS/DFS/Topo/Shortest Paths) -> AI Uninformed, A* & Adversarial Search',
        priority: 'core-pillar',
        pyqCount2024_2026: 12,
        avgMarks: '7–10M combined',
        prerequisites: ['Module 8 (Stacks, Queues, Recursion)', 'Module 9 (Trees)'],
        unlocksNext: ['DAGs & d-Separation in Bayesian Networks (Week 7)'],
        syllabusTopics: [
          'Introduction to graph theory; basic graph algorithms: traversals and shortest path',
          'AI Search: informed, uninformed, adversarial',
        ],
        importantFocus:
          'BFS shortest-path levels, DFS discovery/finish & edge classification on G vs G^R, DAG Topological Sort, Dijkstra/Bellman-Ford (Sleeping Giant!), State-Space BFS/DFS/UCS/IDS comparison, A* priority-queue expansion trace f(n)=g(n)+h(n), Admissible vs Consistent heuristic algebra (|h1-h2|, max(h1,h2)), Minimax optimal action, and Alpha-Beta [alpha, beta] pruning intervals.',
        skipBoundary:
          'Skip Max-Flow/Min-Cut, All-Pairs Johnson, and Expectimax/MCTS (stick strictly to uninformed, A*, Minimax & alpha-beta).',
        keyNumericalArchetypes: [
          'Scaled DFS discovery order & DAG topological sort validation (2024 Q14, Q51, 2025 Q58, Q65, 2026 Q40)',
          'A* exact node expansion order & admissible heuristic combinations (2024 Q23, Q44, 2025 Q44, 2026 Q13)',
          'Minimax action & symbolic Alpha-Beta pruning leaf intervals (2024 Q25, 2025 Q43, 2026 Q30)',
        ],
      },
      {
        id: 'w5-m2',
        week: 5,
        dayRange: 'Days 33–35 (18 hrs)',
        hours: 18,
        sectionCode: 'Sec 7',
        title: 'Module 11: Propositional & First-Order Predicate Logic',
        priority: 'core-pillar',
        pyqCount2024_2026: 7,
        avgMarks: '3–6M (+ direct DBMS TRC/RA payoff)',
        prerequisites: ['Sets & Functions (Week 1)'],
        unlocksNext: [
          'Tuple Relational Calculus (forall/exists) & Relational Division (Week 6)',
          'SQL Correlated Subqueries & NOT EXISTS (Week 6)',
        ],
        syllabusTopics: ['Logic: propositional, predicate'],
        importantFocus:
          'Implication equivalences (p -> q === ~p v q, contrapositive), Entailment (X |= Y iff X ^ ~Y is unsatisfiable), Tautology/Validity checking, English-to-FOL translation traps ("Every A is B" uses => with forall, NEVER ^; "Some A is B" uses ^ with exists!), quantifier negation & order swaps.',
        skipBoundary:
          'Skip heavy Skolemization/unification automated theorem-proving proofs unless needed to falsify a 2-element domain model in 30 seconds.',
        keyNumericalArchetypes: [
          'Propositional tautology, equivalence & entailment MSQs (2024 Q29, 2025 Q15, 2026 Q24, Q38)',
          'FOL English translation ("except", universal implication trap) & quantifier validity on small domains (2024 Q54, 2026 Q14, Q48)',
        ],
      },
    ],
  },
  {
    week: 6,
    dateRange: 'Dec 9 – Dec 15, 2026',
    theme: 'Database Management, Query Languages, B+ Trees & Data Warehousing',
    rationale:
      'DBMS surged from 7M (2024) to 11M (2025) to 18M (2026)! Entering Week 6 right after First-Order Logic (Week 5) and Trees/Hashing/Stats (Weeks 2 & 4) makes TRC, Relational Division, SQL, B+ Trees, and Data Normalization click immediately.',
    totalHours: 42,
    modules: [
      {
        id: 'w6-m1',
        week: 6,
        dayRange: 'Days 36–39 (24 hrs)',
        hours: 24,
        sectionCode: 'Sec 5',
        title: 'Module 12: ER-Model, Relational Algebra, Tuple Calculus (TRC), SQL & Normal Forms',
        priority: 'core-pillar',
        pyqCount2024_2026: 15,
        avgMarks: '8–12M',
        prerequisites: ['Module 11 (Predicate Logic forall/exists)'],
        unlocksNext: ['Feature engineering & relational joins in practical Data Science'],
        syllabusTopics: [
          'ER-model',
          'Relational model: relational algebra, tuple calculus, SQL',
          'Integrity constraints, normal form',
        ],
        importantFocus:
          'ER-to-Relational minimum 3NF table counting (M:N relationships, multivalued attributes, weak entities), Foreign Key insert/delete violation table, Attribute Closure X+ -> Candidate Keys -> 2NF/3NF/BCNF & Dependency Preservation, and concrete 5–8 row hand execution of Relational Algebra (Joins, Set Diff, Division ÷), TRC (exists), and SQL (GROUP BY, NULLs, Correlated Subqueries).',
        skipBoundary:
          'Skip Transactions, Concurrency Control (2PL/Timestamp/Serializability), and Crash Recovery (ARIES) — notice they are NOT in the official GATE DA syllabus PDF!',
        keyNumericalArchetypes: [
          'Concrete 6-row table traces in SQL, RA (including Division ÷) & TRC (2024 Q26, Q31, 2025 Q17, Q33, Q62, 2026 Q42, Q51, Q59, Q60)',
          'Candidate Key counting, FD closures, BCNF violations & ER-to-3NF min tables (2024 Q46, 2025 Q16, Q56, Q57, 2026 Q17, Q26, Q61)',
        ],
      },
      {
        id: 'w6-m2',
        week: 6,
        dayRange: 'Days 40–42 (18 hrs)',
        hours: 18,
        sectionCode: 'Sec 5',
        title: 'Module 13: File Organization, B+ Tree Indexing, Data Transformation & Warehousing',
        priority: 'high-yield',
        pyqCount2024_2026: 8,
        avgMarks: '4–6M',
        prerequisites: ['Module 9 (Search Trees & Hashing)', 'Module 4 (Mean & SD for Normalization)'],
        unlocksNext: ['Feature scaling (z-score / min-max) for SVM, k-NN, Ridge & PCA (Week 7)'],
        syllabusTopics: [
          'File organization, indexing, data types',
          'Data transformation such as normalization, discretization, sampling, compression',
          'Data warehouse modelling: schema for multidimensional data models, concept hierarchies, measures: categorization and computations',
        ],
        importantFocus:
          'B+ Tree leaf vs internal node block-size capacity formulas, B+ Tree insertion/splitting trace, B+ Tree (range) vs Hash Index (equality), z-score / min-max / decimal-scaling normalization, binning/discretization, Star vs Snowflake vs Fact Constellation schemas, OLAP operations (Roll-up, Drill-down, Slice, Dice, Pivot), Cuboid count prod(L_i + 1) & GROUP BY CUBE cardinality prod(|D_i| + 1), and Distributive vs Algebraic vs Holistic measures (Sleeping Giant!).',
        skipBoundary:
          'Skip low-level RAID disk arm scheduling and obscure lossless audio/video codecs.',
        keyNumericalArchetypes: [
          'B+ Tree max fanout inequality & root key after insertion split (2024 Q55, 2026 Q32, Q41)',
          'OLAP Cuboid count prod(L_i+1), GROUP BY CUBE tuple count & Drill-down (2025 Q46, 2026 Q18, Q43)',
          'z-score normalization numerical with distractor min/max stats (2024 Q27)',
        ],
      },
    ],
  },
  {
    week: 7,
    dateRange: 'Dec 16 – Dec 22, 2026',
    theme: 'The Grand Synthesis: Supervised & Unsupervised ML + AI Probabilistic Reasoning',
    rationale:
      'Every single mathematical and algorithmic prerequisite from Weeks 1–6 now converges! Instead of memorizing black-box ML formulas, you derive and solve micro-dataset ML & Bayes Net numericals effortlessly using Calculus, Probability, and Linear Algebra you already own.',
    totalHours: 42,
    modules: [
      {
        id: 'w7-m1',
        week: 7,
        dayRange: 'Days 43–46 (24 hrs)',
        hours: 24,
        sectionCode: 'Sec 6',
        title: 'Module 14: Supervised Learning, Model Evaluation & Neural Networks',
        priority: 'core-pillar',
        pyqCount2024_2026: 21,
        avgMarks: '10–12M',
        prerequisites: [
          'Module 1 (Derivatives, Sigmoid/ReLU, Convexity, SGD)',
          'Module 2–4 (Bayes, Entropy, Estimator Bias/Variance)',
          'Module 6–7 (Projections, Gram Matrices, Norms, Eigenvalues)',
        ],
        unlocksNext: ['Cross-topic synthesis & speed drills (Week 8)'],
        syllabusTopics: [
          'Regression and classification problems: simple linear, multiple linear, ridge, logistic regression',
          'k-nearest neighbour, naive Bayes classifier, linear discriminant analysis (LDA)',
          'Support vector machine (SVM), decision trees',
          'Bias-variance trade-off, LOO & k-folds cross-validation, confusion matrix metrics',
          'Multi-layer perceptron (MLP), feed-forward neural network',
        ],
        importantFocus:
          'Micro-dataset (N=3..10) hand execution: OLS slope/projection, Ridge bias-variance & custom regularized losses, Logistic Regression sigmoid MLE (Sleeping Giant!), 2D Hard-Margin SVM support vectors & margin 2/||w||, Nearest-Centroid & Fisher LDA Sw^-1 Sb, Naive Bayes parameter count & Bayes error, ID3 Entropy/Information Gain, k-NN tie-free odd k, LOOCV vs k-fold split counts, Confusion Matrix Precision/Recall/Accuracy, MLP parameter counting & ReLU forward/backward pass.',
        skipBoundary:
          'Skip Transformers, CNNs, RNNs/LSTMs, XGBoost/AdaBoost, and Kernel trick dual QP derivations beyond basic 2D geometric hard-margin SVM & linear separability — none of those are in the DA syllabus!',
        keyNumericalArchetypes: [
          'Micro-dataset OLS, Ridge+MAE loss & SGD step (2025 Q34, 2026 Q29, Q37, Q55)',
          '2D Hard-Margin SVM margin/SVs, Perceptron, Nearest-Centroid & k-NN (2024 Q17, Q53, Q63, 2025 Q22, Q53, Q55)',
          'Naive Bayes params/error, ID3 Info Gain, Confusion Matrix & LOOCV (2024 Q20, Q62, 2025 Q35, 2026 Q12, Q47)',
          'MLP weight counting & ReLU forward/dead-neuron backprop (2024 Q43, 2025 Q42, Q48, 2026 Q56)',
        ],
      },
      {
        id: 'w7-m2',
        week: 7,
        dayRange: 'Days 47–49 (18 hrs)',
        hours: 18,
        sectionCode: 'Sec 6 + Sec 7',
        title: 'Module 15: Unsupervised Learning (Clustering, PCA) & AI Reasoning Under Uncertainty (Bayes Nets)',
        priority: 'core-pillar',
        pyqCount2024_2026: 12,
        avgMarks: '6–8M',
        prerequisites: [
          'Module 7 (Centering Matrix, Eigenvalues, Rayleigh Quotient, SVD)',
          'Module 2 & 10 (Bayes Rule + DAGs)',
        ],
        unlocksNext: ['Week 8 Full-Syllabus Integration'],
        syllabusTopics: [
          'Clustering: k-means/k-medoid, hierarchical clustering (top-down, bottom-up: single-linkage, multiple-linkage)',
          'Dimensionality reduction, principal component analysis (PCA)',
          'AI Reasoning under uncertainty: conditional independence representation, exact inference through variable elimination, approximate inference through sampling',
        ],
        importantFocus:
          'k-Means Voronoi cell convexity & 1-iteration update vs k-Medoids L1 robustness, Agglomerative Clustering distance matrix hand trace (Single=min, Complete=max, Average) under L1/L2, PCA orthogonality of PCs + max projected variance = lambda_1 + proportion of variance explained, Bayes Net CPT joint factorization, Active Trail / d-Separation (Collider v-structure explaining-away!), compact Variable Elimination factor sum-out trace, and Rejection vs Likelihood Weighting vs Gibbs (MCMC) sampling.',
        skipBoundary:
          'Skip DBSCAN, Spectral Clustering, EM for GMMs, t-SNE/UMAP, and HMM Baum-Welch.',
        keyNumericalArchetypes: [
          '4–5 point Agglomerative Dendrogram / first-merge traces & k-Means Voronoi geometry (2024 Q19, Q42, 2025 Q30, 2026 Q36)',
          'PCA top eigenvalue variance & PC orthogonality (2025 Q60, 2026 Q11)',
          'Bayes Net CPT product, Collider independence & Variable Elimination vs Sampling (2024 Q24, Q64, 2025 Q26, 2026 Q23)',
        ],
      },
    ],
  },
  {
    week: 8,
    dateRange: 'Dec 23 – Dec 29, 2026',
    theme: 'General Aptitude (15M), Cross-Topic Rank-Deciders & Direct Exam Arsenal Lock-In',
    rationale:
      'Week 8 locks in the guaranteed 15 marks of General Aptitude, drills multi-section hybrid NATs/MSQs, clears your Mistake Vault, and transitions you into the 5-week Jan–Feb Full Mock Runway.',
    totalHours: 42,
    modules: [
      {
        id: 'w8-m1',
        week: 8,
        dayRange: 'Days 50–52 (18 hrs)',
        hours: 18,
        sectionCode: 'GA',
        title: 'Module 16: High-ROI General Aptitude (Quant, Spatial Assembly/Folding, DI & Verbal)',
        priority: 'core-pillar',
        pyqCount2024_2026: 30,
        avgMarks: '15M guaranteed every year',
        prerequisites: ['Week 1–2 Counting, Logs, Series, Mean/Median/Mode'],
        unlocksNext: ['Easy 13–15/15 marks in <22 minutes on exam day'],
        syllabusTopics: [
          'Verbal Aptitude (analogies, prepositions, logical inference)',
          'Quantitative & Analytical Aptitude (number properties, logs, series, DI charts, deduction)',
          'Spatial Aptitude (dice nets, 2D puzzle assembly, 3D conic/solid cross-sections, planar coloring)',
        ],
        importantFocus:
          'Notice how ~6M of DA General Aptitude overlaps Week 1–2 Math (geometric series 2024 Q4, binomial 2024 Q7, logs 2026 Q4, mean/median/mode 2026 Q7, unimodal functions 2025 Q7)! Add Spatial folding/rotation drills and reading inference elimination.',
        skipBoundary:
          'Do not memorize 5,000-word GRE vocabulary lists — verbal analogies/grammar carry only 3–4M and yield to root-word/elimination tactics.',
        keyNumericalArchetypes: [
          '3D Dice net folding, 2D shape assembly & conic cross-sections (2024 Q9, Q10, 2025 Q8, 2026 Q3, Q10)',
          'Cryptarithmetic digit constraints, DI tables & knockout tournament deduction (2024 Q8, 2025 Q10, 2026 Q8, Q9)',
        ],
      },
      {
        id: 'w8-m2',
        week: 8,
        dayRange: 'Days 53–56 (24 hrs)',
        hours: 24,
        sectionCode: 'ALL',
        title: 'Module 17: All-Section Direct Arsenal Consolidation, Timed CBT Simulation & Mistake Vault Zeroing',
        priority: 'core-pillar',
        pyqCount2024_2026: 195,
        avgMarks: '100M Full-Paper Synthesis',
        prerequisites: ['Modules 1–16'],
        unlocksNext: ['Jan 1 – Feb 6, 2027: 12+ Full-Length 3-Hour Mock Tests & IITM Speed Peak'],
        syllabusTopics: [
          'Full-paper 65-question time allocation (GA 20m + 1M block 45m + 2M block 95m + 20m buffer)',
          'MSQ zero-partial-credit risk calibration & NAT precision verification',
          'Complete Direct Exam Arsenal flash-drill across all 7 sections',
        ],
        importantFocus:
          'Re-solving every bookmarked/missed question from Weeks 1–7 cold using ONLY Direct Exam Arsenal shortcuts + the GATE Virtual Scientific Calculator.',
        skipBoundary: 'Zero new textbook reading — 100% active recall, timed mixed sets, and error elimination.',
        keyNumericalArchetypes: [
          'Full 65-question timed simulations of GATE DA 2024, 2025, and 2026 + custom IITM-flavored 2027 mock sets',
        ],
      },
    ],
  },
]

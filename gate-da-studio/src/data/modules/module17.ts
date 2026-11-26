import type { ChapterData } from '../../types/curriculum'

export const MODULE_17_CHAPTERS: ChapterData[] = [
  {
    id: 'synth-ch1',
    number: 1,
    title: 'Cross-Topic Hybrid Rank-Deciders: Calculus, LA, Prob, Graphs & ML',
    shortTitle: 'Cross-Topic Rank-Deciders',
    estimatedHours: 4,
    dayLabel: 'Week 8 · Days 54–55 (Full Synthesis)',
    tagline:
      'Let us connect every thread of the GATE DA curriculum into one unified toolkit: see how Calculus gradients and Hessians, Linear Algebra projections and Rayleigh quotients, Probability CLT and Bayes, ML Ridge/SVM/PCA, and Graph DAGs/Heaps/$A^*$ are really the same handful of master ideas wearing different clothes.',
    syllabusMapping: [
      'Math-to-ML Spine: Sec 3 (Gradients/Hessians/Limits) + Sec 2 (Projections/Eigenvalues/Rayleigh) + Sec 1 (Bayes/Variance/CLT) -> Sec 6 (Ridge, SVM, PCA, Logistic)',
      'Graph-AI-Algorithm Spine: Sec 4 (DAG Topological Sort, Min-Heaps, DP) + Sec 7 (Bayes Nets d-separation, $A^*$ Search)',
    ],
    whatIsImportant: [
      'Spotting one theorem in three disguises: Rayleigh quotient $\\max_{\\|x\\|_2=1} x^T A x = \\lambda_{\\max}(A)$ (2026 Q.65) is the exact engine behind PCA maximum variance (2025 Q.60) and Fisher LDA (2024 Q.22)',
      'Recognizing CLT-in-disguise Calculus limits such as $\\lim_{n\\to\\infty}\\sum_{k=0}^n \\frac{e^{-n}n^k}{k!} = 0.5$ (2026 Q.45) and odd-function integrals killing covariance (2026 Q.63)',
      'Connecting Calculus Hessian PSD ($\\nabla^2 J \\succ 0$) to Ridge regularization $X^T X + \\lambda I \\succ 0$ and Logistic Regression global convexity',
      'Seeing DAG topological order as the shared foundation for $O(V+E)$ Dynamic Programming, Bayes Net factorization, and collider d-separation',
    ],
    whatIsNotImportant: [
      'Re-deriving Calculus, Linear Algebra, and ML formulas in three separate silos during the exam',
      'Out-of-scope topics like Max-Flow/Min-Cut, Transformers, GANs, or Transaction Concurrency Control (0 marks across 2024–2026)',
    ],
    inboundStream:
      'Modules 1–16 (Calculus -> Probability & Statistics -> Linear Algebra -> Python/DSA/Graphs -> AI/Logic -> DBMS/DW -> Machine Learning & Bayes Nets -> General Aptitude).',
    outboundStream: [
      'Ch.2: 180-Minute CBT Tactics, Expected-Value Guessing Rules & Final Revision Checklist',
      'Jan–Feb 2027 Full-Length CBT Mocks & Rank-Decider Drills',
    ],
    glossary: [
      {
        term: 'Positive-Definite Hessian & Strict Convexity',
        symbol: '$\\nabla^2 J(w) \\succ 0$',
        plainEnglish:
          'Think of a positive-definite Hessian as a smooth bowl curving strictly upward in every direction: the moment you find a flat spot where $\\nabla J(w^*) = 0$, you are guaranteed it is the one and only global minimum.',
        tinyExample: 'In Ridge regression, $\\nabla^2 J(w) = 2(X^T X + \\lambda I) \\succeq 2\\lambda I \\succ 0$, ensuring a unique global minimum even when $X$ is rank-deficient.',
      },
      {
        term: 'Eigenvalue Shift in Regularization',
        symbol: '$\\mu_i \\mapsto 2(\\mu_i + \\lambda)$',
        plainEnglish:
          'Adding $+\\lambda \\|w\\|_2^2$ to a quadratic loss lifts every eigenvalue of $X^T X$ upward by $+\\lambda > 0$, turning zero eigenvalues (flat collinear directions) strictly positive so the matrix becomes cleanly invertible.',
        tinyExample: 'If $X^T X$ has eigenvalues $\\{10, 0\\}$, adding $\\lambda = 1$ shifts $X^T X + I$ to eigenvalues $\\{11, 1\\}$ with determinant $11 > 0$.',
      },
      {
        term: 'Rayleigh Quotient & Spectral Optimization',
        symbol: '$\\max_{\\|x\\|_2 = 1} x^T A x = \\lambda_{\\max}(A)$',
        plainEnglish:
          'One master theorem powers three GATE sections: maximizing any real symmetric quadratic form $x^T A x$ over unit vectors NEVER needs Lagrange multipliers from scratch — the answer is always the largest eigenvalue $\\lambda_{\\max}(A)$.',
        tinyExample: 'In PCA on centered data with covariance eigenvalues $\\lambda_i = 100^{2-i}$, the max projected variance is immediately $\\lambda_1 = 100$.',
      },
      {
        term: 'Orthogonal Projection vs. Orthogonal Matrix',
        symbol: '$M^2 = M$ vs. $Q^T Q = I$',
        plainEnglish:
          'Do not mix up these two look-alike names! An orthogonal projection (like centering matrix $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$) is symmetric, idempotent ($M^2 = M$), singular, and has eigenvalues in $\\{0, 1\\}$; an orthogonal matrix $Q$ preserves lengths ($Q^T Q = I$) and is always invertible.',
        tinyExample: 'For $n = 5$, centering matrix $M$ satisfies $M^3 = M$, $\\text{tr}(M) = 4$, and $M\\mathbf{1} = 0$.',
      },
      {
        term: 'Disguised CLT Limit',
        symbol: '$\\lim_{n\\to\\infty} P(S_n \\le n\\mu) = \\Phi(0) = 0.5$',
        plainEnglish:
          'When a Calculus limit sums a Poisson or Binomial PMF up to its own mean as $n \\to \\infty$, stop doing algebra and let the Central Limit Theorem finish it: the standardized sum approaches a symmetric bell curve centered at $0$, putting exactly $50\\%$ of the mass on each side.',
        tinyExample: '$\\lim_{n\\to\\infty} \\sum_{k=0}^n \\frac{e^{-n}n^k}{k!} = \\lim_{n\\to\\infty} P(\\text{Poisson}(n) \\le n) = \\Phi(0) = 0.5$.',
      },
      {
        term: 'Law of Iterated Expectation (Tower Rule)',
        symbol: '$E[XY] = E\\big[X \\cdot E[Y \\mid X]\\big]$',
        plainEnglish:
          'To find an unconditional expectation involving two linked variables, first average out $Y$ while treating $X$ as fixed, then average the resulting expression over $X$.',
        tinyExample: 'If $X \\sim U(-1,1)$ and $E[Y \\mid X=x] = x^2$, then $E[XY] = E[X \\cdot x^2] = E[X^3] = 0$.',
      },
      {
        term: 'Odd-Symmetry Zero Covariance',
        symbol: '$\\rho(X, Y) = 0 \\not\\Rightarrow X \\perp Y$',
        plainEnglish:
          'Integrating an odd function over a symmetric interval $[-a, a]$ always cancels to $0$, killing linear correlation $\\rho(X, Y)$ — even when $Y$ depends nonlinearly on $X^2$! Zero correlation only means zero *linear* trend, never full independence.',
        tinyExample: 'For $X \\sim U(-1,1)$ and $Y = X^2$, $\\text{Cov}(X, Y) = 0$ even though knowing $X = 0$ determines $Y = 0$ with $100\\%$ certainty.',
      },
      {
        term: 'Reverse-Topological DAG Dynamic Programming',
        symbol: '$V(u) = \\sum_{u \\to v} p(u,v)\\,[r(u,v) + V(v)]$',
        plainEnglish:
          'Because a DAG has no cycles, walking backward from terminal nodes in reverse topological order lets you compute shortest paths or expected future rewards in a single linear $O(V + E)$ sweep without ever revisiting a vertex.',
        tinyExample: 'In a $4$-node DAG $S \\to A \\to B \\to T$, computing $V(T)=0$, then $V(B)$, $V(A)$, and $V(S)$ solves expected reward in 3 lines.',
      },
      {
        term: 'Admissible Heuristic Closure in $A^*$',
        symbol: '$0 \\le h(n) \\le h^*(n)$',
        plainEnglish:
          'An admissible heuristic never overestimates the true remaining cost $h^*(n)$ to the goal. If both $h_1$ and $h_2$ are admissible, then $\\max(h_1, h_2)$, $\\min(h_1, h_2)$, and $|h_1 - h_2|$ stay safely admissible — whereas $h_1 + h_2$ can overshoot $h^*$!',
        tinyExample: 'If $h^*(n) = 5$ and $h_1 = h_2 = 4$, then $\\max(4,4)=4 \\le 5$ and $|4-4|=0 \\le 5$, while $h_1 + h_2 = 8 > 5$ breaks admissibility.',
      },
      {
        term: 'Collider Descendant Unblocking',
        symbol: '$U \\to W \\leftarrow V,\\; W \\to Z \\implies U \\not\\perp V \\mid Z$',
        plainEnglish:
          'Remember this cross-topic favorite uniting Graphs, Probability, and AI: observing either a collider $W$ OR any downstream descendant $Z$ of $W$ opens the trail between $W$’s parents $U$ and $V$ via "explaining away."',
        tinyExample: 'If Burglary ($U$) and Earthquake ($V$) both trigger Alarm ($W$), which makes Neighbor call ($Z$), hearing the call ($Z$) makes $U$ and $V$ dependent.',
      },
    ],
    generatorId: 'cross-topic-hybrid-gen',
    concepts: [
      {
        id: 'm17-c1-1',
        title: 'The Math-to-ML Spine: Gradients, Projections & Hessians in Ridge, PCA & SVM',
        subtitle: 'How Calculus optimization and Linear Algebra geometry unite into one ML toolkit',
        priority: 'core-pillar',
        buildsOn: 'Modules 1, 6–7, and 14–15 (Derivatives, Hessians, Projections, Eigenvalues, Ridge, PCA, SVM)',
        whyStudy:
          'Top-100 GATE DA rank-decider questions rarely stay neatly inside one chapter—they fuse Linear Algebra projections, Calculus Hessians, and Machine Learning objectives into a single 2-mark prompt. Seeing that Ridge, SVM, PCA, and Fisher LDA are all powered by the same three spectral and convexity laws lets you recognize the answer in 15 seconds instead of deriving from scratch.',
        groundRules: [
          'A twice-differentiable objective $J(w)$ whose Hessian matrix is strictly positive definite everywhere ($\\nabla^2 J(w) \\succ 0$) is strictly convex—meaning any stationary point $\\nabla J(w^*) = 0$ is guaranteed to be the ONE AND ONLY global minimum.',
          'Adding an $L_2$ Ridge penalty $+\\lambda \\|w\\|_2^2$ ($\\lambda > 0$) to any convex quadratic loss shifts every Hessian eigenvalue upward by $+2\\lambda$ ($2\\mu_i \\mapsto 2(\\mu_i + \\lambda) \\ge 2\\lambda > 0$), curing singular or collinear $X^T X$ matrices immediately.',
          'For ANY real symmetric matrix $A$, the Rayleigh Quotient Theorem locks in $\\max_{\\|x\\|_2 = 1} x^T A x = \\lambda_{\\max}(A)$ and $\\min_{\\|x\\|_2 = 1} x^T A x = \\lambda_{\\min}(A)$—powering PCA max variance ($A = \\Sigma$), centering-matrix optimization ($A = I - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$), and Fisher LDA ($S_W^{-1}S_B u^* = \\lambda u^*$).',
          'Never mix up orthogonal PROJECTION matrices ($M^T = M, M^2 = M$, singular with eigenvalues strictly in $\\{0, 1\\}$) with orthogonal ROTATION/REFLECTION matrices ($Q^T Q = I$, invertible with $|\\lambda_i| = 1$).',
        ],
        sandboxId: 'ga-synthesis-lab',
        toyExample: {
          title: 'Two Collinear Samples Rescued by One $\\lambda I$ Diagonal Shift',
          scenario:
            'Suppose a dataset has two perfectly collinear samples $x^{(1)} = [1, 1]^T, x^{(2)} = [2, 2]^T$ with targets $y = [1, 2]^T$. Watch how Calculus, Linear Algebra, and ML interact on this tiny $2 \\times 2$ system.',
          walkthroughSteps: [
            '1. **OLS Fails (LA Singularity):** $X = \\begin{bmatrix} 1 & 1 \\\\ 2 & 2 \\end{bmatrix}$, so $X^T X = \\begin{bmatrix} 5 & 5 \\\\ 5 & 5 \\end{bmatrix}$ has $\\det(X^T X) = 0$ and eigenvalues $\\{10, 0\\}$. Infinitely many weights satisfy $w_1 + w_2 = 1$!',
            '2. **Ridge Shifts the Hessian (Calculus + LA):** Add penalty $\\lambda = 1$ to form $J(w) = \\|Xw - y\\|_2^2 + \\|w\\|_2^2$. Its gradient $\\nabla J(w) = 2(X^T X + I_2)w - 2X^T y = 0$ gives Hessian $H = 2\\begin{bmatrix} 6 & 5 \\\\ 5 & 6 \\end{bmatrix}$ with eigenvalues $\\{22, 2\\} > 0$.',
            '3. **Unique Global Minimum (Convex Opt):** Because $H \\succ 0$, $J(w)$ is strictly convex with unique solution $w^* = (X^T X + I_2)^{-1} X^T y = \\frac{1}{11}\\begin{bmatrix} 6 & -5 \\\\ -5 & 6 \\end{bmatrix}\\begin{bmatrix} 5 \\\\ 5 \\end{bmatrix} = \\begin{bmatrix} 5/11 \\\\ 5/11 \\end{bmatrix}$!',
            '4. **Centering Projection Link (PCA):** Centering any $n$-row matrix $X$ applies $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ ($M^2 = M$, eigenvalues $\\{1, 0\\}$). Maximizing $\\frac{1}{n}\\|X_c u\\|_2^2 = u^T \\Sigma u$ over $\\|u\\|_2 = 1$ is a Rayleigh quotient whose maximum is $\\lambda_{\\max}(\\Sigma)$!',
          ],
          ahaMoment:
            'Step back and see the big picture: Ridge regression ($X^T X + \\lambda I$), Hard-Margin SVM ($\\min \\frac{1}{2}\\|w\\|_2^2$), PCA ($\\max_{\\|u\\|=1} u^T \\Sigma u$), and Rayleigh optimization are not four disconnected courses — they are all quadratic bowls and ellipsoids governed by eigenvalues and positive-definite Hessians!',
        },
        theoremAndFormula: {
          statement:
            '1) **Strict Convexity via Hessian:** Twice-differentiable $J: \\mathbb{R}^d \\to \\mathbb{R}$ is strictly convex if $\\nabla^2 J(w) \\succ 0$ everywhere; any stationary point $\\nabla J(w^*) = 0$ is then the **unique global minimum**.\n2) **Rayleigh Quotient Bound:** For any real symmetric matrix $A \\in \\mathbb{R}^{n \\times n}$, $\\lambda_{\\min}(A) \\le \\frac{x^T A x}{x^T x} \\le \\lambda_{\\max}(A)$ for all $x \\neq 0$, achieved at the corresponding eigenvectors.\n3) **Orthogonal Projection Invariant:** $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ is symmetric and idempotent ($M^2 = M$) with $\\text{rank}(M) = n - 1$, eigenvalue $1$ (multiplicity $n-1$), and eigenvalue $0$ (multiplicity $1$, eigenvector $\\mathbf{1}$).',
          formulaLatex:
            '\\nabla^2 J_{\\text{Ridge}} = 2(X^T X + \\lambda I_d) \\succeq 2\\lambda I_d \\succ 0 \\qquad \\text{and} \\qquad \\max_{\\|x\\|_2 = 1} x^T A x = \\lambda_{\\max}(A)',
          plainEnglishDecoding:
            'Keep this two-part intuition handy: whenever you add $+\\lambda \\|w\\|_2^2$ ($\\lambda > 0$) to a smooth convex loss (MSE, Cross-Entropy), you boost curvature along every direction by at least $2\\lambda$, curing every flat singular valley. And whenever a question maximizes a symmetric quadratic form $x^T A x$ on the unit sphere, simply read off $\\lambda_{\\max}(A)$!',
          workedMiniExamples: [
            {
              prompt: 'For $n = 4$, find the trace and maximum Rayleigh quotient $\\max_{\\|x\\|_2=1} x^T M x$ of $M = I_4 - \\frac{1}{4}\\mathbf{1}\\mathbf{1}^T$.',
              solution:
                '$M$ projects onto the 3D subspace $\\mathbf{1}^\\perp$, so its eigenvalues are $1, 1, 1, 0$. Hence $\\text{tr}(M) = 3$ and $\\max_{\\|x\\|_2=1} x^T M x = \\lambda_{\\max}(M) = 1$.',
            },
            {
              prompt: 'In Fisher LDA, maximizing $J(u) = \\frac{u^T S_B u}{u^T S_W u}$ sets $\\nabla J(u) = 0$. What eigenvalue equation emerges?',
              solution:
                'Quotient rule gives $2(S_B u)(u^T S_W u) - 2(u^T S_B u)(S_W u) = 0 \\implies S_B u = J(u) S_W u \\implies S_W^{-1} S_B u^* = \\lambda u^*$ (GATE DA 2024 Q.22).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'The centering matrix $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ satisfies $M^2 = I_n$ (is orthogonal/involutory).',
            reality: 'False! $M$ is a **projection** matrix ($M^2 = M$), NOT orthogonal ($M\\mathbf{1} = 0$, so $M$ is singular for $n \\ge 2$).',
            counterExample: 'For $n=2$, $M = \\begin{bmatrix} 0.5 & -0.5 \\\\ -0.5 & 0.5 \\end{bmatrix}$ has $M^2 = M \\neq I_2$ and $\\det(M) = 0$.',
          },
          {
            myth: 'Adding Ridge regularization $\\lambda \\|w\\|_2^2$ reduces both bias and variance simultaneously.',
            reality: 'Ridge shrinks weights toward zero, which **reduces variance** on collinear features at the cost of **increasing bias** (2026 Q.37).',
            counterExample: 'For $y = w^* x$ with $w^* = 10$, Ridge pulls $\\hat{w} < 10$ systematically ($E[\\hat{w}] \\neq 10$).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 2 + Sec 3 + Sec 6',
            targetWeek: 8,
            topic: 'Fast Spectral & Convexity Triage',
            whyItMatters: 'Turns 2-mark quadratic optimization and PCA problems into 15-second eigenvalue lookups.',
            pyqProof: 'GATE DA 2025 Q.60, 2026 Q.52 & Q.65',
          },
        ],
      },
      {
        id: 'm17-c1-2',
        title: 'Probability Meets Calculus & ML: CLT Limits, Odd-Symmetry & Bayes Priors',
        subtitle: 'Translating infinite sums, conditional expectations, and posteriors across three sections',
        priority: 'high-yield',
        buildsOn: 'Modules 1–5 and 14–15 (Limits, Odd integrals, CLT, Correlation, Bayes Theorem, Naive Bayes)',
        whyStudy:
          'Some of the nastiest-looking Calculus limits and two-variable integral problems in GATE DA (like $\\lim_{n\\to\\infty}\\sum_{k=0}^n \\frac{e^{-n}n^k}{k!}$ in 2026 Q.45 or conditional correlation in 2026 Q.63) are nearly impossible by brute-force algebra—yet collapse in 20 seconds the moment you recognize the Probability law hiding underneath.',
        groundRules: [
          'Whenever an $n \\to \\infty$ Calculus limit sums a Binomial or Poisson PMF right up to its mean $n\\mu$, invoke the Central Limit Theorem: standardizing $Z_n = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$ turns $P(S_n \\le n\\mu)$ straight into $\\Phi(0) = 0.5$ (and $P(S_n \\le n\\mu + c\\sqrt{n})$ into $\\Phi(c/\\sigma)$).',
          'By the Law of Iterated Expectation (Tower Rule), $E[XY] = E\\big[X \\cdot E[Y \\mid X]\\big]$ lets you collapse a conditional distribution for $Y$ into a single function of $X$ before doing any outer integration.',
          'Integrating an odd function over a symmetric interval $[-a, a]$ always cancels to $0$: if $X$ is symmetric around $0$ and $E[Y \\mid X = x]$ is an even function (like $x^2$), then $E[XY] = 0$ and $\\text{corr}(X, Y) = 0$—proving that zero correlation NEVER implies independence!',
          'In Bayes/Naive Bayes classification, optimal decisions always maximize the joint posterior weight $P(C_k)P(x \\mid C_k)$ (combining prior AND likelihood), and a binary sign flip $S = 2X - 1 \\in \\{-1, +1\\}$ always satisfies $S^2 = 1$ identically.',
        ],
        sandboxId: 'ga-synthesis-lab',
        toyExample: {
          title: 'A Calculus Limit That Is Secretly a Poisson Bell Curve',
          scenario:
            'Look at $L = \\lim_{n \\to \\infty} \\sum_{k=0}^n \\frac{e^{-n} n^k}{k!}$ (GATE DA 2026 Q.45). Trying L\'Hôpital or ratio tests on a variable upper limit $n$ hits a brick wall — until you recognize the Probability distribution inside!',
          walkthroughSteps: [
            '1. **Spot the PMF:** $\\frac{e^{-n} n^k}{k!}$ is literally $P(S_n = k)$ where $S_n \\sim \\text{Poisson}(n)$!',
            '2. **Split into i.i.d. Sum:** A $\\text{Poisson}(n)$ variable equals the sum $S_n = X_1 + X_2 + \\dots + X_n$ of $n$ independent $\\text{Poisson}(1)$ variables, each with mean $\\mu = 1$ and variance $\\sigma^2 = 1$.',
            '3. **Apply Central Limit Theorem:** As $n \\to \\infty$, $\\frac{S_n - n}{\\sqrt{n}} \\xrightarrow{d} Z \\sim \\mathcal{N}(0, 1)$.',
            '4. **Read Off the Symmetry:** $\\sum_{k=0}^n \\frac{e^{-n} n^k}{k!} = P(S_n \\le n) = P\\left(\\frac{S_n - n}{\\sqrt{n}} \\le 0\\right) \\to \\Phi(0) = 0.5$!',
          ],
          ahaMoment:
            'Whenever an infinite sum or integral looks impossible with pure Calculus tools, pause and ask: "Is a Poisson, Binomial, or Normal distribution hiding inside?" Probability’s big three — CLT, linearity of expectation, and odd symmetry — dissolve those limits in 20 seconds!',
        },
        theoremAndFormula: {
          statement:
            '1) **CLT Bridge for Limits:** If $S_n = \\sum_{i=1}^n X_i$ with i.i.d. mean $\\mu$ and finite variance $\\sigma^2$, then $\\lim_{n\\to\\infty} P(S_n \\le n\\mu + z\\sigma\\sqrt{n}) = \\Phi(z)$.\n2) **Odd-Symmetry Zero Covariance:** If $X$ has a symmetric distribution around $0$ ($f_X(-x) = f_X(x)$) and $E[Y \\mid X=x] = g(x)$ is an **even** function (e.g., $x^2$), then $E[XY] = E[X g(X)] = 0$ (odd integrand!) and since $E[X]=0$, $\\text{Cov}(X,Y) = \\rho(X,Y) = 0$.\n3) **Bayes Posterior in ML & AI:** $P(C_k \\mid x) = \\frac{P(C_k) P(x \\mid C_k)}{\\sum_j P(C_j) P(x \\mid C_j)}$ links Prob priors directly to Naive Bayes classification risk.',
          formulaLatex:
            '\\lim_{n\\to\\infty} P\\!\\left(\\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} \\le 0\\right) = \\Phi(0) = \\frac{1}{2} \\qquad \\text{and} \\qquad E[X g_{\\text{even}}(X)] = 0 \\text{ when } X \\stackrel{d}{=} -X',
          plainEnglishDecoding:
            'Picture both symmetries visually: standardizing a sum of $n$ identical draws centers the bell curve right at $Z = 0$, slicing $50\\%$ left and $50\\%$ right. Likewise, multiplying a balanced zero-mean variable $X$ by a symmetric U-shaped curve like $X^2$ creates an odd function whose positive and negative halves cancel to an exact zero!',
          workedMiniExamples: [
            {
              prompt: 'Let $X \\sim \\text{Bernoulli}(0.3)$ and $Y \\sim \\mathcal{N}(0, 100)$ be independent. Find $\\text{Var}((2X - 1)Y)$ (GATE 2026 Q.44).',
              solution:
                'Since $X \\in \\{0, 1\\}$, the sign factor $S = 2X - 1 \\in \\{-1, +1\\}$ always satisfies $S^2 = 1$! By independence, $E[SY] = E[S]E[Y] = 0$, and $E[(SY)^2] = E[S^2]E[Y^2] = 1 \\cdot 100 = 100$.',
            },
            {
              prompt: 'For $X \\sim U(-1,1)$ and $Y \\mid X=x \\sim U(x^2-0.1, x^2+0.1)$, find $\\text{corr}(X, Y)$ (GATE 2026 Q.63).',
              solution:
                '$E[X] = 0$ and $E[Y \\mid X=x] = x^2$. By Iterated Expectation, $E[XY] = E[X \\cdot E[Y \\mid X]] = E[X^3] = \\frac{1}{2}\\int_{-1}^1 x^3\\,dx = 0$. Thus $\\text{Cov}(X,Y) = 0 \\implies \\rho = 0$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $\\text{corr}(X, Y) = 0$, then $X$ and $Y$ are independent.',
            reality: 'Zero correlation only rules out **linear** dependence; $Y$ can depend deterministically on $X^2$ (as in 2026 Q.63) and still have $\\rho = 0$!',
            counterExample: '$X \\sim U(-1,1)$ and $Y = X^2$: $\\text{Cov}(X, Y) = 0$, yet $P(Y \\le 0.25 \\mid X = 0) = 1 \\neq P(Y \\le 0.25)$.',
          },
          {
            myth: 'In a Naive Bayes classifier, the class with higher likelihood $P(x \\mid C_k)$ is always predicted.',
            reality: 'Prediction maximizes **posterior** $P(C_k) P(x \\mid C_k)$, which weights likelihood by class prior $P(C_k)$ (tested in 2025 Q.35).',
            counterExample: 'If $P(C_1)=1/3, P(x|C_1)=3/4$ and $P(C_2)=2/3, P(x|C_2)=1/4$, posteriors are $\\propto 1/4$ vs $1/6$, so $C_1$ wins, and misclassification prob is $\\frac{1/6}{1/4+1/6} = 0.40$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1 + Sec 3 + Sec 6',
            targetWeek: 8,
            topic: 'Rapid Identity & Symmetry Filtering',
            whyItMatters: 'Lets you solve 2-mark variance, limit, and correlation NATs without integrating or expanding huge sums.',
            pyqProof: 'GATE DA 2026 Q.44, Q.45 & Q.63',
          },
        ],
      },
      {
        id: 'm17-c1-3',
        title: 'The Graph-AI-ML Backbone: DAGs, Topological Order, DP, Heaps ($A^*$) & Bayes Nets',
        subtitle: 'One directed acyclic structure powering Dynamic Programming, Informed Search, and Probabilistic Reasoning',
        priority: 'sleeping-giant',
        buildsOn: 'Modules 8–11 and 14–15 (Graphs, DFS, Topological Sort, Heaps, A*, Bayesian Networks)',
        whyStudy:
          'PDSA graph algorithms, AI informed search, and Bayesian Networks often feel like three separate textbooks—yet they all ride on the exact same Directed Acyclic Graph (DAG) and priority-queue machinery. Unifying how topological ordering, Min-Heaps, and d-separation interact equips you to crush cross-section hybrid NATs and MSQs without mental context-switching.',
        groundRules: [
          'Every Directed Acyclic Graph (DAG) admits a topological ordering where every directed edge $u \\to v$ points strictly forward. Walking backward in reverse topological order solves shortest paths, longest paths, and expected random-walk rewards via Dynamic Programming in a single $O(V + E)$ sweep.',
          'In $A^*$ search, popping the frontier node with smallest $f(n) = g(n) + h(n)$ from a binary Min-Heap runs in $O((V + E)\\log V)$ frontier operations, and admissibility ($0 \\le h(n) \\le h^*(n)$) is preserved by $\\max(h_1, h_2)$, $\\min(h_1, h_2)$, and $|h_1 - h_2|$—whereas $h_1 + h_2$ can overestimate $h^*(n)$!',
          'In a Bayesian Network, topological order directly dictates the joint factorization $P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Pa}(X_i))$ with zero cyclic dependencies.',
          'Along any undirected trail in a Bayes Net, observing the middle node BLOCKS chains ($A \\to B \\to C$) and forks ($A \\leftarrow B \\to C$), whereas observing a collider $B$ ($A \\to B \\leftarrow C$)—OR any downstream descendant of $B$—UNBLOCKS the trail between $A$ and $C$.',
        ],
        toyExample: {
          title: 'Three Lenses on One 4-Node DAG ($U \\to W \\leftarrow V,\\; W \\to Z$)',
          scenario:
            'Take a tiny 4-node DAG with edges $U \\to W$, $V \\to W$, and $W \\to Z$. Look at how three different GATE DA sections ask completely different questions on the exact same graph:',
          walkthroughSteps: [
            '1. **PDSA Lens (Topological Sort & DP):** Valid topological orders include $[U, V, W, Z]$ and $[V, U, W, Z]$. Processing nodes in topological order lets Dynamic Programming compute longest/shortest paths or expected path rewards in $O(V + E)$ with zero re-visits.',
            '2. **AI Search Lens ($A^*$ + Min-Heap):** If edge weights represent travel cost to goal $Z$, $A^*$ pops the node with smallest $f(n) = g(n) + h(n)$ from a **Min-Heap**. Admissibility ($h(n) \\le h^*(n)$) guarantees optimal goal cost when popping the goal.',
            '3. **Bayes Net Lens (Factorization & Colliders):** The joint distribution factors along topological order as $P(U)P(V)P(W \\mid U,V)P(Z \\mid W)$. Unconditionally, $U$ and $V$ are independent ($U \\perp V$).',
            '4. **The Collider Twist:** The instant you observe $W$ — OR even its descendant $Z$! — the v-structure $U \\to W \\leftarrow V$ **opens** ("explaining away"), making $U \\not\\perp V \\mid W$ and $U \\not\\perp V \\mid Z$!',
          ],
          ahaMoment:
            'Notice how topological order unlocks three subjects at once: it lines up DAG vertices for $O(V + E)$ Dynamic Programming in PDSA, places parents ahead of children in Bayes Net CPT products, and lets you trace d-separation paths cleanly!',
        },
        theoremAndFormula: {
          statement:
            '1) **DAG DP Recurrence:** In reverse topological order $v_n, \\dots, v_1$, $V(u) = \\sum_{u \\to v} p(u,v)\\,[r(u,v) + V(v)]$ (expected reward) or $\\min_{u \\to v}[w(u,v) + V(v)]$ (shortest path) runs in $O(V+E)$.\n2) **Bayes Net Factorization & Collider Rule:** $P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Pa}(X_i))$. A collider $A \\to C \\leftarrow B$ is **blocked** when neither $C$ nor any descendant of $C$ is observed, and **unblocked** otherwise.\n3) **$A^*$ Admissibility & Heap Complexity:** Using a binary Min-Heap for $V$ vertices and $E$ edges gives $O((V+E)\\log V)$ frontier operations; $h_1, h_2$ admissible $\\implies \\max(h_1, h_2)$ and $|h_1 - h_2|$ are admissible (while $h_1 + h_2$ may overestimate!).',
          formulaLatex:
            'P(X_1,\\dots,X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Pa}(X_i)) \\qquad \\text{and} \\qquad V(u) = \\sum_{u \\to v} p(u,v)\\,[r(u,v) + V(v)]',
          plainEnglishDecoding:
            'Keep the information-flow rule effortless: chains ($A \\to B \\to C$) and forks ($A \\leftarrow B \\to C$) start open and snap **blocked** when you observe the middle node $B$. Colliders ($A \\to B \\leftarrow C$) flip the rule completely — they start **blocked** and swing **open** the instant you observe $B$ or anything downstream of $B$!',
          workedMiniExamples: [
            {
              prompt: 'In $P(U)P(V)P(W|U,V)P(X|W)P(Y|W)$ (GATE 2024 Q.24), is $U \\perp V \\mid W$ true or false?',
              solution:
                'FALSE! $W$ is a collider on path $U \\to W \\leftarrow V$. Conditioning on $W$ opens the path, creating dependence between $U$ and $V$ ("explaining away"). Meanwhile, $X \\perp Y \\mid W$ IS true (fork at $W$ blocked by observing $W$).',
            },
            {
              prompt: 'If $h_1$ and $h_2$ are admissible heuristics for $A^*$, is $h(n) = |h_1(n) - h_2(n)|$ always admissible?',
              solution:
                'YES (GATE 2024 Q.23)! Since $0 \\le h_1(n) \\le h^*(n)$ and $0 \\le h_2(n) \\le h^*(n)$, their difference satisfies $0 \\le |h_1(n) - h_2(n)| \\le h^*(n)$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Conditioning on a descendant $Z$ of a collider $W$ ($U \\to W \\leftarrow V, W \\to Z$) leaves $U$ and $V$ independent.',
            reality: 'Observing **any descendant** of a collider also provides evidence about $W$ and unblocks $U \\leftrightarrow V$!',
            counterExample: 'If $U, V$ are independent causes of Sprinkler/Rain $W$, and $Z$ is "Wet Grass", seeing Wet Grass makes $U$ and $V$ dependent.',
          },
          {
            myth: 'If $h_1$ and $h_2$ are admissible heuristics, then $h_1 + h_2$ is admissible.',
            reality: 'Summing two admissible heuristics can exceed $h^*(n)$ (e.g., if both equal $h^*(n) > 0$, $h_1+h_2 = 2h^*(n)$). Only $\\max(h_1, h_2)$, $\\min(h_1, h_2)$, and $|h_1 - h_2|$ preserve $0 \\le h \\le h^*$.',
            counterExample: 'Take $h^*(n)=5$, $h_1(n)=4$, $h_2(n)=4$: $h_1+h_2 = 8 > 5$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4 + Sec 7',
            targetWeek: 8,
            topic: 'Zero-Cycle Traversal & Uncertainty Synthesis',
            whyItMatters: 'Connects PDSA graph ordering directly to AI search and probabilistic graphical models.',
            pyqProof: 'GATE DA 2024 Q.23, Q.24, Q.51 & 2025 Q.44',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm17-c1-ht1',
        title: 'Disguised CLT & Rayleigh Spectral Limits (2026 Q.45 & Q.65 Archetype)',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2026 · Q.45 (2M MCQ)', 'GATE DA 2026 · Q.65 (2M NAT)', 'GATE DA 2025 · Q.60 (2M NAT)'],
        problemStatement:
          'Evaluate (a) $L = \\lim_{n\\to\\infty} \\sum_{k=0}^n \\frac{e^{-n}n^k}{k!}$ and (b) $\\max_{x \\in \\mathbb{R}^n, x^T x = 1} x^T \\left(I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T\\right) x$ for $n \\ge 2$.',
        triggerCue:
          'Trigger 1: A limit as $n\\to\\infty$ of $\\sum_{k=0}^n \\frac{e^{-n}n^k}{k!}$ has the exact Poisson($n$) PMF inside, with upper summation limit equal to the mean $n$. Trigger 2: $\\max_{x^T x = 1} x^T A x$ for symmetric $A$ is the Rayleigh quotient.',
        bruteForceTrap:
          'Trying Sterling\'s approximation or differentiation under the sum for (a) wastes 8 minutes and stalls; setting up $n$-variable Lagrange multipliers $\\nabla(x^T A x - \\lambda(x^T x - 1)) = 0$ from scratch for (b) invites sign/index mistakes.',
        mentalShift:
          'Read (a) as a Probability question: $P(\\text{Poisson}(n) \\le n) \\to \\Phi(0) = 0.5$ by CLT. Read (b) as an eigenvalue lookup: $\\max_{\\|x\\|=1} x^T A x = \\lambda_{\\max}(A)$, and since $A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ is a non-zero orthogonal projection, its eigenvalues are $\\{0, 1\\}$, so $\\lambda_{\\max}(A) = 1$!',
        steps: [
          {
            label: 'Step 1 — Identify the Hidden Distribution in (a)',
            detail:
              'Let $S_n = \\sum_{i=1}^n X_i$ with $X_i \\stackrel{\\text{iid}}{\\sim} \\text{Poisson}(1)$, so $S_n \\sim \\text{Poisson}(n)$ with $E[S_n] = n$ and $\\text{SD}(S_n) = \\sqrt{n}$.',
          },
          {
            label: 'Step 2 — Standardize via CLT',
            detail:
              'The sum equals $P(S_n \\le n) = P\\!\\left(\\frac{S_n - n}{\\sqrt{n}} \\le 0\\right) \\xrightarrow{n\\to\\infty} \\Phi(0) = 0.5$.',
          },
          {
            label: 'Step 3 — Check Symmetry & Idempotence in (b)',
            detail:
              'Verify $A^T = A$ and $A^2 = \\left(I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T\\right)^2 = I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T + \\frac{n}{n^2}\\mathbf{1}\\mathbf{1}^T = A$.',
          },
          {
            label: 'Step 4 — Read Off $\\lambda_{\\max}(A)$',
            detail:
              'Any idempotent matrix has eigenvalues only in $\\{0, 1\\}$. For $n \\ge 2$, $\\text{tr}(A) = n - 1 \\ge 1$, so $1$ is an eigenvalue and $\\max_{x^T x = 1} x^T A x = 1$.',
          },
        ],
        lockInTakeaway:
          'When Calculus looks unintegrable or un-summable as $n\\to\\infty$, ask "Which Probability distribution is hiding here?" When Optimization maximizes $x^T A x$ on a unit sphere, ask "What is $\\lambda_{\\max}(A)$?"',
      },
      {
        id: 'm17-c1-ht2',
        title: 'Ridge Hessian Conditioning + Bayes Net Collider Unblocking',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.24 (1M MCQ)', 'GATE DA 2026 · Q.37 (2M MCQ)', 'GATE DA 2025 · Q.51 (2M MSQ)'],
        problemStatement:
          'Given $J(w) = \\|Xw - y\\|_2^2 + \\lambda \\|w\\|_2^2$ ($\\lambda > 0$, $\\text{rank}(X) < d$) and a Bayes Net $U \\to W \\leftarrow V$, $W \\to Z$, determine (a) why $J(w)$ has a unique minimum despite collinear columns in $X$, and (b) whether $U \\perp V \\mid Z$ holds.',
        triggerCue:
          'Trigger 1: $\\text{rank}(X) < d$ makes $X^T X$ singular, while $+\\lambda\\|w\\|_2^2$ shifts $\\nabla^2 J$ by $+2\\lambda I$. Trigger 2: $U \\to W \\leftarrow V$ is a collider with observed descendant $Z$.',
        bruteForceTrap:
          'Attempting to compute $(X^T X + \\lambda I)^{-1}$ symbolically or marginalizing a 16-row joint probability table for $P(U, V \\mid Z)$ takes 10 minutes and still risks arithmetic errors.',
        mentalShift:
          'Use eigenvalue shifting for (a): every eigenvalue $\\mu_i \\ge 0$ of $X^T X$ shifts to $2(\\mu_i + \\lambda) \\ge 2\\lambda > 0$, proving strict convexity instantly. Use d-separation for (b): observing $Z$ (descendant of collider $W$) unblocks $U \\leftrightarrow V$, so $U \\not\\perp V \\mid Z$.',
        steps: [
          {
            label: 'Step 1 — Compute the Hessian $\\nabla^2 J(w)$',
            detail:
              '$\\nabla J(w) = 2X^T(Xw - y) + 2\\lambda w \\implies \\nabla^2 J(w) = 2(X^T X + \\lambda I_d)$.',
          },
          {
            label: 'Step 2 — Lower-Bound Eigenvalues',
            detail:
              'For any unit vector $v$, $v^T \\nabla^2 J(w) v = 2\\|Xv\\|_2^2 + 2\\lambda \\|v\\|_2^2 \\ge 2\\lambda > 0$, so $J$ is strictly convex with a unique global minimizer.',
          },
          {
            label: 'Step 3 — Trace the Bayes Net Path $U \\to W \\leftarrow V$',
            detail:
              '$W$ has two incoming arrows ($\\to W \\leftarrow$), making $W$ a collider on the sole path between $U$ and $V$.',
          },
          {
            label: 'Step 4 — Check Descendant Conditioning at $Z$',
            detail:
              'Although $W$ itself is unobserved, its child $Z$ is observed; in d-separation, observing a collider OR its descendant opens the path, so $U \\perp V \\mid Z$ is FALSE.',
          },
        ],
        lockInTakeaway:
          'Positive $L_2$ regularization shifts all Hessian eigenvalues by $+2\\lambda$, guaranteeing strict convexity even under collinearity; observing any descendant of a collider opens the path between its parents.',
      },
    ],
    arsenalCards: [
      {
        id: 'm17-c1-ar1',
        badge: 'LA + Calc + ML',
        whenYouSpot: '$\\max_{\\|x\\|_2 = 1} x^T A x$ or PCA max projected variance',
        directWeaponLatex: '\\max_{\\|x\\|_2 = 1} x^T A x = \\lambda_{\\max}(A)',
        instantRule:
          'For symmetric $A$ (centering matrix $I - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$, covariance $\\Sigma$, or rank-1 $uu^T$), the maximum over the unit sphere is simply the largest eigenvalue $\\lambda_{\\max}(A)$.',
        tenSecondExample:
          '2026 Q.65: $A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ is a projection ($A^2=A$), so eigenvalues $\\in \\{0, 1\\} \\implies \\max = 1$.',
        oneFatalTrap:
          'Do NOT confuse projection matrices ($A^2 = A$, eigenvalues $\\in \\{0,1\\}$) with orthogonal involutions ($Q^2 = I$, eigenvalues $\\in \\{-1, +1\\}$).',
      },
      {
        id: 'm17-c1-ar2',
        badge: 'Prob + Calc',
        whenYouSpot: '$\\lim_{n\\to\\infty}$ of a $\\text{Poisson}(n)$ or $\\text{Binomial}(n,p)$ sum up to the mean',
        directWeaponLatex: '\\lim_{n\\to\\infty} P(S_n \\le n\\mu) = \\Phi(0) = 0.5',
        instantRule:
          'Rewrite the sum as $P(S_n \\le n\\mu)$, standardize $Z_n = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0,1)$, and evaluate $\\Phi(0) = 0.5$.',
        tenSecondExample:
          '2026 Q.45: $\\lim_{n\\to\\infty} \\sum_{k=0}^n \\frac{e^{-n}n^k}{k!} = \\lim_{n\\to\\infty} P(\\text{Poisson}(n) \\le n) = 0.5$.',
        oneFatalTrap:
          'Watch the upper summation bound: if the bound is $n + c\\sqrt{n}$ instead of $n$, the answer is $\\Phi(c/\\sigma)$, not $0.5$!',
      },
      {
        id: 'm17-c1-ar3',
        badge: 'Graphs + AI + DP',
        whenYouSpot: 'DAG topological order in DP or a v-structure $A \\to C \\leftarrow B$ in a Bayes Net',
        directWeaponLatex: 'A \\perp B \\;\\text{ (uncond.)}, \\quad A \\not\\perp B \\mid C \\;\\text{ (or descendant of } C\\text{)}',
        instantRule:
          'In DAG DP, relax vertices in reverse topological order in $O(V+E)$. In Bayes Nets, chains/forks block on observation, whereas colliders UNBLOCK on observation (including descendants).',
        tenSecondExample:
          '2024 Q.24: In $P(U)P(V)P(W|U,V)P(X|W)P(Y|W)$, $U \\perp V$ holds, while $U \\perp V \\mid W$ is FALSE.',
        oneFatalTrap:
          'Never treat a collider $A \\to C \\leftarrow B$ like a fork $A \\leftarrow C \\to B$ — conditioning on $C$ opens the former and closes the latter!',
      },
    ],
    questions: [
      {
        id: 'm17-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Synthesis Warmup #1 · Calculus + ML Ridge',
        marks: 1,
        type: 'NAT',
        stem: 'Consider the 1-parameter Ridge-regularized squared-error objective $J(w) = \\frac{1}{2}(2w - 6)^2 + 2w^2$. Find the unique global minimizer $w^* \\in \\mathbb{R}$.',
        natAnswer: { min: 1.5, max: 1.5, exactDisplay: '1.5' },
        triggerHint: 'Set the first derivative $J\'(w) = 0$ and verify convexity via $J\'\'(w) > 0$.',
        intuitiveSolution: [
          '1. Differentiate using the chain rule: $J\'(w) = (2w - 6) \\cdot 2 + 4w = 4w - 12 + 4w = 8w - 12$.',
          '2. Set $J\'(w) = 0 \\implies 8w^* = 12 \\implies w^* = 1.5$.',
          '3. Check the second derivative: $J\'\'(w) = 8 > 0$ everywhere, confirming $w^* = 1.5$ is the unique global minimum.',
        ],
        directShortcutUsed: 'Scalar Ridge Calculus: $J\'(w) = 0$ with $J\'\'(w) > 0$.',
      },
      {
        id: 'm17-c1-q2',
        tier: 'warmup',
        sourceLabel: 'Synthesis Warmup #2 · Linear Algebra + ML Centering',
        marks: 1,
        type: 'MCQ',
        stem: 'For $n = 5$, let $M = I_5 - \\frac{1}{5}\\mathbf{1}\\mathbf{1}^T$ be the data-centering matrix and let $x = [2, 2, 2, 2, 2]^T \\in \\mathbb{R}^5$. What are the values of $\\text{tr}(M^3)$ and $\\|Mx\\|_2^2$, respectively?',
        options: [
          {
            id: 'A',
            text: '$4$ and $0$',
            whyTrueOrFalse: 'TRUE: $M$ is an orthogonal projection of rank $5-1=4$, so $M^3 = M$ and $\\text{tr}(M^3) = \\text{tr}(M) = 4$. Also $x = 2\\mathbf{1} \\in \\ker(M)$, so $Mx = 0$.',
          },
          {
            id: 'B',
            text: '$5$ and $20$',
            whyTrueOrFalse: 'FALSE: $\\text{tr}(M) = 5 - \\frac{1}{5}(5) = 4 \\neq 5$, and $x$ is constant so centering it produces the zero vector.',
          },
          {
            id: 'C',
            text: '$4$ and $20$',
            whyTrueOrFalse: 'FALSE: $\\|x\\|_2^2 = 20$, but $x$ lies along $\\mathbf{1}$, which is completely annihilated by centering ($Mx = 0$).',
          },
          {
            id: 'D',
            text: '$1$ and $0$',
            whyTrueOrFalse: 'FALSE: $1$ is the trace of $\\frac{1}{5}\\mathbf{1}\\mathbf{1}^T$, whereas $M = I_5 - \\frac{1}{5}\\mathbf{1}\\mathbf{1}^T$ has trace $5 - 1 = 4$.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Recall that $M$ is idempotent ($M^2 = M$) and projects orthogonal to $\\mathbf{1}$.',
        intuitiveSolution: [
          '1. Since $M$ is a projection matrix, $M^3 = M^2 = M$, so $\\text{tr}(M^3) = \\text{tr}(M) = 5 - 5\\cdot\\frac{1}{5} = 4$.',
          '2. Because every entry of $x$ is $2$, the sample mean of $x$ is $2$, so centering gives $Mx = x - \\bar{x}\\mathbf{1} = 0 \\implies \\|Mx\\|_2^2 = 0$.',
        ],
        directShortcutUsed: 'Projection idempotence ($M^k = M$) + mean-centering annihilates constant vectors.',
      },
      {
        id: 'm17-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.45 (Prob/CLT + Calculus Limit)',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem: 'The value of the limit $L = \\lim_{n \\to \\infty} \\sum_{k=0}^n \\frac{e^{-n} n^k}{k!}$ is:',
        options: [
          {
            id: 'A',
            text: '$0$',
            whyTrueOrFalse: 'FALSE: $S_n \\sim \\text{Poisson}(n)$ concentrates symmetrically around its mean $n$ by the CLT, so $P(S_n \\le n)$ does not vanish.',
          },
          {
            id: 'B',
            text: '$0.5$',
            whyTrueOrFalse: 'TRUE: Let $S_n = \\sum_{i=1}^n X_i$ with $X_i \\stackrel{\\text{iid}}{\\sim} \\text{Poisson}(1)$. Then $S_n \\sim \\text{Poisson}(n)$ and $P(S_n \\le n) = P\\!\\left(\\frac{S_n-n}{\\sqrt{n}} \\le 0\\right) \\to \\Phi(0) = 0.5$.',
          },
          {
            id: 'C',
            text: '$1$',
            whyTrueOrFalse: 'FALSE: Summing to $\\infty$ equals $1$, whereas stopping at the mean $k = n$ captures half the asymptotic Normal mass.',
          },
          {
            id: 'D',
            text: '$e^{-1}$',
            whyTrueOrFalse: 'FALSE: $e^{-1}$ is $P(X_1 = 0)$ for $\\text{Poisson}(1)$, not the asymptotic half-CDF.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Interpret $\\frac{e^{-n}n^k}{k!}$ as the PMF of a sum of $n$ i.i.d. $\\text{Poisson}(1)$ random variables.',
        intuitiveSolution: [
          '1. Recognize $\\sum_{k=0}^n \\frac{e^{-n} n^k}{k!} = P(S_n \\le n)$ where $S_n \\sim \\text{Poisson}(n)$.',
          '2. Write $S_n = \\sum_{i=1}^n X_i$ for i.i.d. $X_i \\sim \\text{Poisson}(1)$ ($\\mu = 1, \\sigma^2 = 1$).',
          '3. By the Central Limit Theorem, $\\frac{S_n - n}{\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$, so $P(S_n \\le n) \\to \\Phi(0) = 0.5$.',
        ],
        directShortcutUsed: 'Poisson($n$) CDF at the mean $\\xrightarrow{\\text{CLT}} \\Phi(0) = 0.5$.',
      },
      {
        id: 'm17-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.65 (Linear Algebra + Optimization)',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Let $n \\ge 2$ and let $A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T \\in \\mathbb{R}^{n \\times n}$, where $\\mathbf{1}$ is the all-ones column vector. Compute the maximum value of $x^T A x$ over all unit vectors $x \\in \\mathbb{R}^n$ satisfying $x^T x = 1$.',
        natAnswer: { min: 1, max: 1, exactDisplay: '1' },
        triggerHint: 'By the Rayleigh quotient theorem, $\\max_{x^T x = 1} x^T A x = \\lambda_{\\max}(A)$ for any symmetric $A$.',
        intuitiveSolution: [
          '1. $A$ is symmetric ($A^T = A$) and idempotent ($A^2 = A$), so every eigenvalue of $A$ is either $0$ or $1$.',
          '2. For $n \\ge 2$, $\\text{tr}(A) = n - 1 \\ge 1$, meaning $1$ occurs as an eigenvalue with multiplicity $n - 1$.',
          '3. Therefore $\\max_{x^T x = 1} x^T A x = \\lambda_{\\max}(A) = 1$ (attained by any unit vector orthogonal to $\\mathbf{1}$).',
        ],
        directShortcutUsed: 'Rayleigh quotient $\\lambda_{\\max}(A)$ of an orthogonal projection matrix.',
      },
      {
        id: 'm17-c1-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.60 (ML PCA + LA Eigenvalues + Covariance)',
        year: 2025,
        marks: 2,
        type: 'NAT',
        stem: 'Given centered data points $x^{(1)}, \\dots, x^{(n)} \\in \\mathbb{R}^{100}$ whose sample covariance matrix $\\Sigma = \\frac{1}{n}\\sum_{j=1}^n x^{(j)}(x^{(j)})^T$ has eigenvalues $\\lambda_i = 100^{2-i}$ for $i = 1, 2, \\dots, 100$, find the maximum projected variance $\\max_{\\|u\\|_2 = 1} \\frac{1}{n}\\sum_{j=1}^n (u^T x^{(j)})^2$.',
        natAnswer: { min: 100, max: 100, exactDisplay: '100' },
        triggerHint: 'Rewrite $\\frac{1}{n}\\sum (u^T x^{(j)})^2$ as $u^T \\Sigma u$ and apply the Rayleigh quotient.',
        intuitiveSolution: [
          '1. Expand the projected empirical variance: $\\frac{1}{n}\\sum_{j=1}^n (u^T x^{(j)})^2 = u^T \\left(\\frac{1}{n}\\sum_{j=1}^n x^{(j)}(x^{(j)})^T\\right) u = u^T \\Sigma u$.',
          '2. By the PCA / Rayleigh quotient theorem, $\\max_{\\|u\\|_2 = 1} u^T \\Sigma u = \\lambda_{\\max}(\\Sigma)$.',
          '3. Evaluate $\\lambda_i = 100^{2-i}$ at $i = 1$: $\\lambda_1 = 100^{2-1} = 100$ (while $\\lambda_2 = 1, \\lambda_3 = 0.01, \\dots$). Thus the maximum is $100$.',
        ],
        directShortcutUsed: 'PCA first principal component captures $\\lambda_1(\\Sigma)$ regardless of dimension $100$.',
      },
      {
        id: 'm17-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Rank-Decider · Calculus Hessian + LA + ML Ridge',
        marks: 2,
        type: 'MSQ',
        stem: 'Consider Ridge Regression $J(w) = \\|Xw - y\\|_2^2 + \\lambda \\|w\\|_2^2$, where $X \\in \\mathbb{R}^{5 \\times 3}$ has $\\text{rank}(X) = 2$, $y \\in \\mathbb{R}^5$, and $\\lambda > 0$. Let $w^* = \\arg\\min_{w \\in \\mathbb{R}^3} J(w)$ and let $w_{\\text{OLS}}^+ = X^+ y$ be the minimum-norm least-squares solution. Which of the following statements is/are ALWAYS true?',
        options: [
          {
            id: 'A',
            text: 'Every eigenvalue of the Hessian $\\nabla^2 J(w) = 2(X^T X + \\lambda I_3)$ is at least $2\\lambda$.',
            whyTrueOrFalse: 'TRUE: Since $X^T X \\succeq 0$ has minimum eigenvalue $0$ (as $\\text{rank}(X) = 2 < 3$), shifting by $\\lambda I_3$ gives $\\lambda_{\\min}(2X^T X + 2\\lambda I_3) = 2\\lambda > 0$.',
          },
          {
            id: 'B',
            text: '$J(w)$ is strictly convex on $\\mathbb{R}^3$ and has unique minimizer $w^* = (X^T X + \\lambda I_3)^{-1} X^T y$.',
            whyTrueOrFalse: 'TRUE: Because $\\nabla^2 J(w) \\succeq 2\\lambda I_3 \\succ 0$, $X^T X + \\lambda I_3$ is invertible and $\\nabla J(w^*) = 0$ yields the unique global minimum.',
          },
          {
            id: 'C',
            text: 'Whenever $w_{\\text{OLS}}^+ \\neq 0$, we have $\\|w^*\\|_2 < \\|w_{\\text{OLS}}^+\\|_2$.',
            whyTrueOrFalse: 'TRUE: In the SVD $X = U\\Sigma V^T$ with $\\sigma_1, \\sigma_2 > 0$, $w_{\\text{OLS}}^+ = \\sum_{i=1}^2 \\frac{u_i^T y}{\\sigma_i} v_i$ while $w^* = \\sum_{i=1}^2 \\frac{\\sigma_i (u_i^T y)}{\\sigma_i^2 + \\lambda} v_i$. Since $\\frac{\\sigma_i}{\\sigma_i^2 + \\lambda} < \\frac{1}{\\sigma_i}$ for $\\lambda > 0$, every nonzero coefficient strictly shrinks.',
          },
          {
            id: 'D',
            text: 'If $y \\in \\text{col}(X)$ and $y \\neq 0$, then $Xw^* = y$ holds for all $\\lambda > 0$.',
            whyTrueOrFalse: 'FALSE: $Xw^* = \\sum_{i=1}^2 \\frac{\\sigma_i^2}{\\sigma_i^2 + \\lambda}(u_i^T y)u_i$, which has strictly smaller norm than $y = \\sum_{i=1}^2 (u_i^T y)u_i$ when $\\lambda > 0$.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Analyze $\\nabla^2 J(w)$ and expand both $w^*$ and $X^+ y$ in the thin SVD of $X$.',
        intuitiveSolution: [
          '1. Compute $\\nabla^2 J(w) = 2(X^T X + \\lambda I_3)$. Because $\\text{rank}(X) = 2 < 3$, $X^T X$ has eigenvalues $\\sigma_1^2, \\sigma_2^2, 0$, so $\\nabla^2 J$ has eigenvalues $2(\\sigma_1^2 + \\lambda), 2(\\sigma_2^2 + \\lambda), 2\\lambda > 0$. This proves A and B.',
          '2. Via SVD $X = \\sum_{i=1}^2 \\sigma_i u_i v_i^T$, $w^* = \\sum_{i=1}^2 \\frac{\\sigma_i}{\\sigma_i^2+\\lambda}(u_i^T y)v_i$ shrinks every nonzero component of $w_{\\text{OLS}}^+$, proving C and disproving D.',
        ],
        directShortcutUsed: 'SVD spectral shrinkage + Hessian eigenvalue shift $\\mu_i \\mapsto 2(\\mu_i + \\lambda)$.',
      },
      {
        id: 'm17-c1-q7',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Rank-Decider · Graph DAG + DP + Probability',
        marks: 2,
        type: 'NAT',
        stem: 'A random walker starts at vertex $S$ and moves to terminal vertex $T$ in a 4-vertex DAG with transition probabilities $P(S \\to A) = 0.6$, $P(S \\to B) = 0.4$, $P(A \\to B) = 0.5$, $P(A \\to T) = 0.5$, $P(B \\to T) = 1.0$, and edge rewards $r(S,A) = 2$, $r(S,B) = 5$, $r(A,B) = 4$, $r(A,T) = 6$, $r(B,T) = 3$. Compute the expected total reward $E[R]$ collected from $S$ to $T$.',
        natAnswer: { min: 8.3, max: 8.3, exactDisplay: '8.3' },
        triggerHint: 'Process vertices in reverse topological order ($T \\to B \\to A \\to S$) using $V(u) = \\sum_{u \\to v} p(u,v)[r(u,v) + V(v)]$.',
        intuitiveSolution: [
          '1. Topological order is $S, A, B, T$. Compute expected remaining reward $V(\\cdot)$ backward from $T$:',
          '2. $V(T) = 0$, and $V(B) = 1.0 \\times (3 + V(T)) = 3$.',
          '3. $V(A) = 0.5 \\times (4 + V(B)) + 0.5 \\times (6 + V(T)) = 0.5(7) + 0.5(6) = 6.5$.',
          '4. $V(S) = 0.6 \\times (2 + V(A)) + 0.4 \\times (5 + V(B)) = 0.6(8.5) + 0.4(8) = 5.1 + 3.2 = 8.3$.',
        ],
        directShortcutUsed: 'Reverse-topological-order DAG Dynamic Programming for expected reward.',
      },
    ],
  },
  {
    id: 'synth-ch2',
    number: 2,
    title: '180-Minute CBT Tactics, Expected-Value Guessing & Final Revision Checklist',
    shortTitle: '180-Min CBT & Revision',
    estimatedHours: 3,
    dayLabel: 'Week 8 · Day 56 (Exam Mastery & Checklist)',
    tagline:
      'Let us turn all your hard work into your highest possible exam-day GATE DA score: apply exact Expected-Value rules to MCQ negative marking ($-1/3, -2/3$) versus zero-penalty MSQ/NAT blocks (48–51 marks!), run a disciplined 3-pass 180-minute clock, and keep our Sleeping-Giant checklist sharp.',
    syllabusMapping: [
      'GATE DA Exam Blueprint (2024–2026 Audit): 10 GA (15M) + 55 Core DA (85M) across MCQ, MSQ & NAT',
      'Cross-Topic Triage, Probability EV Decision Rules & Literal-Constraint Verification',
    ],
    whatIsImportant: [
      'Zero-negative-marking execution: MSQ + NAT accounted for 48M (2024), 48M (2025), and 51M (2026) — NEVER leave any MSQ or NAT blank',
      'MCQ Expected-Value rule: eliminating $k \\ge 1$ wrong options gives strictly positive EV ($\\frac{km}{3(4-k)}$); zero-elimination blind guessing has $EV = 0$',
      '3-Pass 180-minute clock discipline (~45 min GA + 1M wins -> ~85 min 2M core & NATs -> ~50 min tricky MSQs, checks & zero-penalty fills)',
      'Literal constraint vigilance: check MAE vs MSE (2026 Q.55), closed-interval endpoints (2025 Q.49), non-leaf B+ tree pointers (2026 Q.32), and 1-option MSQs (2025 Q.27, 2026 Q.23 & Q.51)',
    ],
    whatIsNotImportant: [
      'Sequential brute-force grinding Q1 -> Q65 where one 8-minute trace destroys time for four easy 2-mark NATs at the end',
      'Skipping an MSQ because you only feel 70% sure about 1 of the 4 checkboxes — MSQs carry zero negative marking!',
    ],
    inboundStream: 'Ch.1 Cross-Topic Hybrid Rank-Deciders and verified 2024/2025/2026 GATE DA section & type distributions.',
    outboundStream: [
      'Jan–Feb 2027: 5-Week Full-Length CBT Mock Series & Error-Log Refinement',
      'Feb 2027: IIT Madras GATE DA Exam Day',
    ],
    glossary: [
      {
        term: 'Negative Marking Expected Value (MCQ EV)',
        symbol: '$EV_{\\text{MCQ}}(m, k) = \\frac{k \\cdot m}{3(4 - k)}$',
        plainEnglish:
          'On an $m$-mark MCQ ($+m$ right, $-m/3$ wrong), a pure 1-in-4 blind guess ($k = 0$) has zero expected value. The moment you genuinely rule out $k \\ge 1$ impossible options, guessing among the survivors carries a strictly positive mathematical expectation!',
        tinyExample: 'Narrowing a 2-mark MCQ to a true 50–50 ($k = 2$) yields $EV = \\frac{1}{2}(2) - \\frac{1}{2}(\\frac{2}{3}) = +\\frac{2}{3} \\approx +0.67$ marks.',
      },
      {
        term: 'MSQ All-or-Nothing Rule (Zero Negative Marking)',
        symbol: '$\\text{Penalty}_{\\text{MSQ}} = 0$',
        plainEnglish:
          'Multiple Select Questions award full marks only if your selected subset matches the exact answer key (no partial credit), yet they carry **zero negative marking**! Never leave an MSQ blank — your best reasoned subset always has $EV \\ge 0$ with zero downside.',
        tinyExample: 'Even if you are only 50% sure about option B on a 2-mark MSQ, submitting your best subset beats leaving it blank ($0$ guaranteed).',
      },
      {
        term: 'NAT Zero-Penalty & Rounding Tolerance',
        symbol: '$\\text{Penalty}_{\\text{NAT}} = 0$',
        plainEnglish:
          'Numerical Answer Type questions also have zero negative marking and accept answers within an official tolerance band. Keep 5+ decimal digits during intermediate steps on the Virtual Calculator, and round only at the very final entry.',
        tinyExample: 'For $24 / 31 = 0.77419\\dots$, keep full precision until the final step so you safely enter `0.77` inside `[0.76, 0.78]`.',
      },
      {
        term: '3-Pass 180-Minute CBT Architecture',
        symbol: '$45\\text{m} + 85\\text{m} + 50\\text{m} = 180\\text{m}$',
        plainEnglish:
          'Instead of trudging linearly from Q.1 to Q.65 and running out of time, sweep the exam in three calm waves: Pass 1 banks GA and instant 1-mark wins (~45 min), Pass 2 harvests high-yield 2-mark core and NATs (~85 min), and Pass 3 resolves tricky MSQs, checks decimals, and fills every zero-penalty box (~50 min).',
        tinyExample: 'Reaching Q.55–Q.65 before minute 120 ensures you bank 20-second 2-mark identity NATs like PCA $\\lambda_1 = 100$ or Rayleigh $\\max = 1$.',
      },
      {
        term: 'Expected Marks per Minute (Knapsack Triage)',
        symbol: '$\\text{Priority} = \\frac{E[\\text{Marks}_i]}{t_i}$',
        plainEnglish:
          'Think of the 180-minute timer as a Fractional Knapsack problem: a 2-mark question solved in 1 minute earns $2.0$ marks/min, while fighting a stubborn 8-minute trace earns $0.25$ marks/min. Flagging a tough item after 3.5 minutes is smart banking, not quitting!',
        tinyExample: 'With 12 minutes left, bank a 10-second 50–50 MCQ ($+0.67$ EV) and a 15-second MSQ before starting a 7-minute SQL trace.',
      },
      {
        term: 'CBT Palette Status ("Answered & Marked for Review")',
        plainEnglish:
          'In the GATE computer-based interface, purple with a green dot ("Answered & Marked for Review") IS graded automatically when time expires, whereas plain purple ("Marked for Review" without an answer) is NOT graded.',
        tinyExample: 'At minute 178, glance at the palette summary and make sure zero MSQs or NATs sit in un-answered red or plain purple.',
      },
      {
        term: 'Single-Option MSQ Trap',
        symbol: '$|\\text{correctOptions}| \\in \\{1, 2, 3, 4\\}$',
        plainEnglish:
          'Never assume an MSQ MUST have two or more true boxes! GATE DA repeatedly places 1-correct-option questions inside the MSQ block to test whether you check each statement independently on its own merits.',
        tinyExample: 'GATE DA 2025 Q.27 (sorted array for $O(\\log n)$ binary search) sat inside the MSQ section with ONLY option `C` true.',
      },
      {
        term: 'Literalism Diff Audit',
        plainEnglish:
          'Before touching the calculator on a "familiar-looking" question, take 3 seconds to compare the exact prompt text against your textbook template for four classic twists: $|\\cdot|$ vs $(\\cdot)^2$, non-leaf vs leaf node, closed `[a, b]` endpoints, and "without biases."',
        tinyExample: 'GATE DA 2026 Q.55 wrote MAE $|y - w^T x| + 0.20\\|w\\|_2^2 = 7$, catching anyone who auto-piloted squared error ($= 9$).',
      },
      {
        term: 'Sleeping Giants (0-Mark Rotation Radar)',
        symbol: '$z,\\; t,\\; \\chi^2,\\; A = LU$',
        plainEnglish:
          'Sleeping Giants are official syllabus subtopics that scored zero marks in recent papers and are prime candidates to rotate back in under IIT Madras 2027 — especially Hypothesis Testing & CIs ($z, t, \\chi^2$), LU Decomposition, and Star/Snowflake Warehouse schemas.',
        tinyExample: 'Dedicating 20% of final revision to crisp drills on $\\chi^2 = \\sum\\frac{(O_i-E_i)^2}{E_i}$ and $A = LU$ prevents any exam-day ambush.',
      },
      {
        term: 'Cross-Topic Invariant Anchors',
        symbol: '$pP_n + (p-1)K \\le B,\\; \\prod(|D_i|+1)$',
        plainEnglish:
          'These are the high-yield 1-line boundary formulas you review every 3 days during mock season so exam adrenaline never blurs look-alikes (such as B+ Tree non-leaf vs leaf pointers, or `CUBE` tuples vs concept-hierarchy cuboids).',
        tinyExample: 'Ignore record pointer $P_r$ inside a B+ Tree non-leaf node: $10p + 11(p-1) \\le 4096 \\implies p = 195$ (2026 Q.32).',
      },
    ],
    generatorId: 'cross-topic-hybrid-gen',
    concepts: [
      {
        id: 'm17-c2-1',
        title: 'Expected-Value Guessing Rules: MCQ Negative Marking vs. Zero-Penalty MSQ/NAT',
        subtitle: 'Using Probability & Decision Theory to maximize your 180-minute score without reckless variance',
        priority: 'core-pillar',
        buildsOn: 'Modules 2–5 (Expected Value, Variance, Binomial Risk) & 2024–2026 Paper Audits',
        whyStudy:
          'Even two candidates with identical technical knowledge routinely finish 6 to 10 marks apart on exam day simply because one guesses blindly on MCQs or leaves zero-penalty MSQs blank out of fear. GATE’s exact scoring rules define a clean probability problem—solving it beforehand removes all emotional hesitation at minute 170.',
        groundRules: [
          'Every $m$-mark MCQ ($m \\in \\{1, 2\\}$) awards $+m$ for a correct choice and deducts $-m/3$ for a wrong choice. A blind 1-in-4 guess ($k = 0$ eliminated) has $EV = \\frac{1}{4}(m) + \\frac{3}{4}(-m/3) = 0$ (pure variance with zero expected gain).',
          'The moment you genuinely disprove $k \\ge 1$ wrong MCQ options, uniform guessing among the remaining $4 - k$ options yields strictly positive expected value: $EV_{\\text{MCQ}}(m, k) = \\frac{km}{3(4-k)}$ ($+m/9$ for $k = 1$, and $+m/3$ for a true 50–50 with $k = 2$).',
          'Both MSQ and NAT blocks carry ZERO negative marking ($\\text{Penalty} = 0$) and accounted for 48–51 marks out of 100 across GATE DA 2024–2026. Leaving any MSQ or NAT blank locks in $0$ when any reasoned entry has $EV \\ge 0$ with zero downside!',
          'MSQs are graded strictly all-or-nothing (no partial credit), AND an official MSQ can legally have ONLY ONE correct option (as in GATE DA 2025 Q.27 and 2026 Q.23 & Q.51)—so evaluate every single checkbox independently without forcing a second tick.',
        ],
        sandboxId: 'ga-synthesis-lab',
        toyExample: {
          title: 'Two Uncertain Questions at Minute 172: One 2M MCQ vs. One 2M MSQ',
          scenario:
            'With 8 minutes left, you have two untouched 2-mark questions: (1) an MCQ where you eliminated 1 clearly impossible option (leaving 3 candidates), and (2) an MSQ where you know A is true, D is false, and you are 50-50 on B and C.',
          walkthroughSteps: [
            '1. **MCQ Expected Value ($k = 1$ eliminated):** Reward is $+2$ with prob $1/3$ and $-2/3$ with prob $2/3$. So $EV = \\frac{1}{3}(2) + \\frac{2}{3}\\left(-\\frac{2}{3}\\right) = \\frac{2}{3} - \\frac{4}{9} = +\\frac{2}{9} \\approx +0.222$ marks!',
            '2. **MCQ with $k = 2$ eliminated (50-50):** $EV = \\frac{1}{2}(2) + \\frac{1}{2}\\left(-\\frac{2}{3}\\right) = +\\frac{2}{3} \\approx +0.667$ marks — passing on a true 50-50 MCQ leaves two-thirds of a mark on the table.',
            '3. **MCQ with $k = 0$ eliminated (pure guess):** $EV = \\frac{1}{4}(2) + \\frac{3}{4}\\left(-\\frac{2}{3}\\right) = 0$ — pure noise with zero expected gain.',
            '4. **MSQ & NAT Rule (48–51 Marks/Paper):** Zero negative marking! Leaving the MSQ blank guarantees $0$ marks; selecting your best subset `A` or `A, B` has strictly positive expected value ($+0.5$ to $+1.0$ marks) with zero downside risk!',
          ],
          ahaMoment:
            'Let that number sink in before exam day: nearly half of the entire GATE DA paper (48M in 2024, 48M in 2025, 51M in 2026) carries ZERO negative marking, and any MCQ where you genuinely disprove even 1 option has strictly positive expected value!',
        },
        theoremAndFormula: {
          statement:
            'For an $m$-mark MCQ ($m \\in \\{1, 2\\}$, penalty $-m/3$) where $k \\in \\{0, 1, 2, 3\\}$ wrong options are eliminated with certainty and you guess uniformly among the remaining $4 - k$ options:\n1) $EV_{\\text{MCQ}}(m, k) = \\frac{km}{3(4-k)}$ ($0$ for $k=0$; $+m/9$ for $k=1$; $+m/3$ for $k=2$).\n2) For MSQ (all-or-nothing) and NAT (exact/range), negative penalty is $0$, so $EV \\ge 0$ for every submitted guess.',
          formulaLatex:
            'EV_{\\text{MCQ}}(m, k) = \\frac{1}{4-k}(m) + \\frac{3-k}{4-k}\\left(-\\frac{m}{3}\\right) = \\frac{km}{3(4-k)}',
          plainEnglishDecoding:
            'Keep your exam-day guessing rule calm and objective: skip an MCQ only when you have eliminated zero options ($k = 0$, a pure 1-in-4 blind guess) or when you suspect a sneaky edge case broke your elimination. For MSQs and NATs, NEVER leave a blank box — always submit your best reasoned answer before the clock hits zero.',
          workedMiniExamples: [
            {
              prompt: 'Across four independent 2-mark MCQs each narrowed to 2 options ($k=2$), compute your total expected gain.',
              solution:
                'Each 50-50 2-mark MCQ adds $EV = \\frac{2(2)}{3(2)} = +\\frac{2}{3}$ marks, so four of them yield $4 \\times \\frac{2}{3} = +\\frac{8}{3} \\approx +2.67$ expected marks.',
            },
            {
              prompt: 'Suppose in an MSQ block (`Q24–Q30` or `Q48–Q58`), one question looks like only option `C` is correct. Should you force yourself to pick a 2nd option?',
              solution:
                'NO! Both GATE DA 2025 (`Q.27`, ans `C`) and GATE DA 2026 (`Q.23`, `Q.51`) featured official MSQs with **only ONE** correct option!',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Every question inside the MSQ block has at least 2 correct options.',
            reality: 'GATE DA repeatedly places 1-correct-option questions inside the MSQ block (`2025 Q.27`, `2026 Q.23`, `2026 Q.51`) to punish automatic multi-clicking.',
            counterExample: '2025 Q.27 ("Binary search in $O(\\log n)$ worst-case time") was inside `Q24–Q30` MSQs with only `C` (sorted array) true.',
          },
          {
            myth: 'Partial credit is awarded on MSQs if you get 2 out of 3 correct options.',
            reality: 'MSQ grading in GATE is **strictly all-or-nothing**: missing one true option or picking one false option scores $0$ (though never negative).',
            counterExample: 'If true set is `{A, B, C}` and you select `{A, B}`, your score is `0`, not `2/3` of the marks.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Full 180-Min CBT',
            targetWeek: 8,
            topic: 'Mock Test Guessing Calibration',
            whyItMatters: 'Track your genuine vs hallucinated eliminations across Jan 2027 mocks to tune your $k=1$ threshold.',
          },
        ],
      },
      {
        id: 'm17-c2-2',
        title: '180-Minute 3-Pass CBT Architecture & Structural Block Triage',
        subtitle: 'Exploiting GATE DA\'s contiguous MCQ -> MSQ -> NAT layout to prevent time bottlenecks',
        priority: 'high-yield',
        buildsOn: 'Modules 8–9 (Greedy Knapsack / Time Complexity) & 2024–2026 Paper Structure Audits',
        whyStudy:
          'Walking sequentially from Q.1 to Q.65 is the single most common exam-day disaster: getting stubbornly stuck for 9 minutes on one messy code trace in Q.42 steals time from four 20-second 2-mark NATs waiting at Q.60–Q.65. Treating the 180-minute CBT as a structured 3-pass Knapsack sweep ensures you harvest every easy mark first.',
        groundRules: [
          'GATE DA’s 65 questions are laid out predictably: `Q1–Q10` General Aptitude (15M), `Q11–Q35` 1-mark Core DA (25M), and `Q36–Q65` 2-mark Core DA (60M)—with each core block ordered `MCQ -> MSQ -> NAT`, so high-speed 2-mark NATs sit near the end.',
          'Your true optimization metric is Expected Marks per Minute ($\\frac{E[\\text{Marks}_i]}{t_i}$): run Pass 1 (~45 min, cap 1.5m/Q for GA + 1M wins), Pass 2 (~85 min, cap 3.5m/Q for 2M core & NATs so you reach Q.65 before minute 120), and Pass 3 (~50 min for tricky MSQs, checks, and zero-penalty fills).',
          'In the GATE CBT interface, "Answered & Marked for Review" (purple with a green dot) IS automatically evaluated for grading, whereas plain "Marked for Review" (purple without a saved answer) is NOT graded—always inspect the palette summary at minute 178.',
          'On the GATE Virtual Scientific Calculator, retain at least 5 decimal digits across all intermediate calculations and round ONLY at the final NAT entry box so rounding drift never pushes you outside the official tolerance window.',
        ],
        toyExample: {
          title: 'Two Pacing Curves on the Same 65-Question Paper',
          scenario:
            'In GATE DA 2024–2026, both the 1-mark block (`Q11–Q35`) and 2-mark block (`Q36–Q65`) are strictly ordered `MCQ -> MSQ -> NAT`, and heavy code/SQL traces often sit right next to 15-second structural NATs (like `2026 Q.34` memoryless exponential or `2026 Q.65` projection Rayleigh max).',
          walkthroughSteps: [
            '1. **Pass 1 (~0–45 min) — The Easy-Bank Sweep:** Clear General Aptitude (`Q1–Q10`, target ~12–15M in 18–20 min) + sweep `Q11–Q35` for instant conceptual MCQs and 1-line NATs (`0.24`, `0.35`, `1`). Mark anything taking $> 2$ minutes for Pass 2.',
            '2. **Pass 2 (~45–130 min) — High-Yield 2-Mark Core & NATs:** Jump into `Q36–Q65` (worth **60 marks**!). Solve clean Math/ML/Bayes numericals, medium code traces, and SQL/RA queries. Strict **3.5-minute cap**: if stuck, flag and move!',
            '3. **Pass 3 (~130–180 min) — Rank-Decider MSQs, Verification & Zero-Penalty Fill:** Return to marked tricky MSQs (checking counter-examples carefully), verify NAT decimal rounding using the Virtual Scientific Calculator, and ensure **0 blanks** remain in MSQ + NAT.',
          ],
          ahaMoment:
            'Think of the 3-hour CBT like a **Fractional Knapsack on Marks per Minute**: banking fast marks first guarantees you will never miss a 30-second 2-mark NAT sitting at Q.62–Q.65 because you refused to let go of a 7-minute trace back at Q.42!',
        },
        theoremAndFormula: {
          statement:
            'Maximize $\\sum_{i \\in S} E[\\text{Score}_i]$ subject to $\\sum_{i \\in S} t_i \\le 180$ minutes by sorting attempts in descending order of **Expected Marks per Minute** ($\\frac{m_i}{t_i}$).\n- **Pass 1:** $t_i \\le 1.5$ min/Q (GA + 1M wins).\n- **Pass 2:** $t_i \\le 3.5$ min/Q (2M core & NATs).\n- **Pass 3:** Remaining budget on high-leverage MSQs + NAT precision audit.',
          formulaLatex:
            '\\text{Priority Ratio} = \\frac{E[\\text{Marks}_i]}{t_i \\text{ (minutes)}} \\qquad \\text{(Cap Pass 1 at } 1.5\\text{m, Pass 2 at } 3.5\\text{m)}',
          plainEnglishDecoding:
            'Look at the simple math of pacing: solving a clean 2-mark question in 1 minute pays $2.0$ marks/min, while wrestling with one stubborn 2-mark problem for 8 minutes pays just $0.25$ marks/min and silently steals time from four easier wins. Clicking "Mark for Review" is never quitting — it is protecting your score.',
          workedMiniExamples: [
            {
              prompt: 'Why should you inspect `Q55–Q65` (2-mark NATs) during Pass 2 even if `Q41–Q54` traces look long?',
              solution:
                'In 2024–2026, `Q55–Q65` consistently contained 20-second identity NATs (e.g., 2024 Q.61 rank-1 SVD `55`, 2025 Q.60 PCA `100`, 2026 Q.63 correlation `0`, 2026 Q.65 Rayleigh `1`). Always reach Q.65 before minute 120!',
            },
            {
              prompt: 'How do you avoid Virtual Scientific Calculator rounding traps on NATs like `0.24` or `0.77`?',
              solution:
                'Keep at least 5 decimal digits in intermediate steps (e.g., $0.24 / 0.31 = 0.77419...$), and round ONLY at the final entry to the exact decimal precision asked in the prompt.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If an answer in the Question Palette turns purple ("Marked for Review & Answered"), it will not be graded.',
            reality: 'In GATE CBT, **Answered & Marked for Review (purple with green dot)** IS evaluated for grading — only un-answered marked questions (purple without green dot) are skipped!',
            counterExample: 'Always check the summary count of "Answered" + "Answered & Marked for Review" at minute 178.',
          },
          {
            myth: 'Every 2-mark block starts with a huge banner above Q.36.',
            reality: 'In GATE 2024, IISc omitted a separate banner above Q.36, so stay alert to the question number (`Q11–Q35` = 1M, `Q36–Q65` = 2M) and the on-screen mark display.',
            counterExample: 'Always verify the `+2 / -0.66` badge in the top-right header of each question.',
          },
        ],
      },
      {
        id: 'm17-c2-3',
        title: 'The Final 7-Pillar Revision Checklist & Sleeping-Giant Radar (2024–2026)',
        subtitle: 'Locking in the evergreen 75-mark core plus subtopics due for IIT Madras 2027 rotation',
        priority: 'core-pillar',
        buildsOn: 'All 7 Core DA Sections + GA (Modules 1–16)',
        whyStudy:
          'In the final 5 weeks of mock tests before IIT Madras 2027, candidates usually make one of two mistakes: either chasing obscure out-of-syllabus topics or assuming that whatever scored 0 marks in 2024–2026 will never appear. A disciplined 80/20 checklist locks down the evergreen 75-mark core while neutralizing Sleeping Giants and prompt-literalism traps.',
        groundRules: [
          'Allocate 80% of final revision to the evergreen ~75-mark core across all 7 sections (Bayes/CLT/Distributions, Projections/Eigenvalues, Extrema/Convexity, Python/Recursion/Sorting/Graphs, Keys/RA/SQL/B+ Trees, Ridge/SVM/PCA/MLPs/Clustering, Logic/Search/Bayes Nets) and 20% to high-alert Sleeping Giants.',
          'Sleeping Giants are official syllabus topics with 0 marks across 2024–2026 that are prime candidates to rotate in under IIT Madras 2027: Hypothesis Testing & Confidence Intervals ($z, t, \\chi^2$), LU Decomposition ($A = LU$), Star/Snowflake Warehouse schemas, and Dijkstra/Bellman-Ford.',
          'Before touching the calculator on any "textbook-looking" question, execute a 3-second Literalism Diff Audit checking four favorite GATE modifiers: absolute vs. squared loss ($|\\cdot|$ vs. $(\\cdot)^2$), non-leaf vs. leaf B+ Tree pointers, closed `[a, b]` endpoints, and "without biases."',
          'Keep look-alike formulas explicitly separated on one 2-page Master Invariants Sheet (e.g., B+ Tree non-leaf $pP_n + (p-1)K \\le B$ without $P_r$; `GROUP BY CUBE` tuples $\\prod(|D_i|+1)$ vs. concept-hierarchy cuboids $\\prod(L_i+1)$) and review it every 3 days during mock season.',
        ],
        toyExample: {
          title: 'How IITs Rotate Sleeping Giants Across 2024 -> 2025 -> 2026',
          scenario:
            'Look at the rotation pattern uncovered by our 3-year paper audit: Linear/Ridge Regression scored 0 marks in 2024, returned with OLS in 2025 (Q.34), and surged to 4 marks in 2026 (Q.37 + Q.55). DBMS surged from 7M (2024) to 18M (2026). Meanwhile, **Hypothesis Testing & Confidence Intervals** (`z-test, t-test, \\chi^2-test`) and **LU Decomposition** had **0 questions across all three years**!',
          walkthroughSteps: [
            '1. **Evergreen Core (~75M):** Bayes, Conditional Dist, CLT, Normal/Exp/Poisson, Projections & Eigenvalues, Convexity/Extrema, Python/Recursion/Sorting/Graphs, Keys/RA/SQL/B+ Trees, Ridge/SVM/PCA/MLPs/Clustering, FOL/Prop Logic & Search.',
            '2. **High-Alert Sleeping Giants (0M across 2024–2026!):** (a) **Hypothesis Testing & CI** (`z-test, t-test, \\chi^2` goodness-of-fit/independence, Type I/II error, p-value); (b) **LU Decomposition** ($A=LU$ pivots & $O(n^2)$ forward/back substitution); (c) **Warehouse Star/Snowflake Schemas & Measure types** (additive vs non-additive); (d) **Dijkstra / Bellman-Ford & Mergesort inversions**.',
            '3. **Literalism Last-Check:** Never confuse `CUBE` tuple count $\\prod(|D_i|+1)$ (2025 Q.46) with concept-hierarchy cuboids $\\prod(L_i+1)$ (2026 Q.43), or non-leaf B+ Tree fanout (no record pointers!) with leaf fanout.',
          ],
          ahaMoment:
            'Here is the balanced final-month rhythm that wins top ranks: spend 80% of your revision locking down the evergreen 75-mark core and 20% running crisp surgical drills on Sleeping Giants so IIT Madras 2027 has zero surprises left to throw at you!',
        },
        theoremAndFormula: {
          statement:
            '**7-Section Final Formula Anchor:**\n- **Prob/Stats:** $\\text{Var}(X+Y)$, CLT, Bayes, $z = \\frac{\\bar{X}-\\mu_0}{\\sigma/\\sqrt{n}}$, $t_{n-1}$, $\\chi^2 = \\sum \\frac{(O_i-E_i)^2}{E_i}$.\n- **LA:** Rank-Nullity, $P^2=P$, $\\sum \\sigma_i$ for $uu^T$, $A=LU$.\n- **Calc:** $C^1$ glue, $f\'\'>0$ convex, closed-interval endpoints.\n- **PDSA:** Closures/mutable defaults, recursion stack, binary search ($O(\\log n)$ array only), sort passes, DFS/Topo.\n- **DBMS:** B+ non-leaf $pP_n + (p-1)K \\le B$, BCNF/3NF, RA `÷`, SQL correlated subqueries, OLAP.\n- **ML/AI:** $\\nabla J_{\\text{Ridge}}$, $\\sigma\'=\\sigma(1-\\sigma)$, PCA $\\lambda_1$, Info Gain, Bayes Net colliders, $A^*/\\alpha$-$\\beta$.',
          formulaLatex:
            '\\text{B+ Non-Leaf: } p P_n + (p-1)K \\le B \\qquad | \\qquad \\text{CUBE: } \\prod_{i=1}^d (|D_i|+1) \\qquad | \\qquad \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}',
          plainEnglishDecoding:
            'Distill these anchors onto one tidy 2-page "Master Invariants Sheet" and read it calmly every 3 days throughout January mock season — when exam adrenaline hits, every formula and boundary distinction will already feel like second nature.',
          workedMiniExamples: [
            {
              prompt: 'In a 4096-byte B+ Tree non-leaf node with node pointer $10\\text{ B}$, search key $11\\text{ B}$, and record pointer $12\\text{ B}$, find max node pointers $p$ (GATE 2026 Q.32).',
              solution:
                'Ignore the $12\\text{ B}$ record pointer distractor! $10p + 11(p-1) \\le 4096 \\implies 21p \\le 4107 \\implies p = \\lfloor 195.57 \\rfloor = 195$.',
            },
            {
              prompt: 'Distinguish 2025 Q.46 (`GROUP BY CUBE(D1, D2)` tuples with $|D_1|=3, |D_2|=2$) from 2026 Q.43 (3 dimensions each with 3-level hierarchy cuboids).',
              solution:
                '`CUBE` max result tuples = $(3+1)(2+1) = 12$. Concept-hierarchy total cuboids = $\\prod_{i=1}^3 (L_i + 1) = 4^3 = 64$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Every B+ Tree node size inequality includes record pointers $P_r$.',
            reality: 'Record pointers appear **only in leaf nodes** (or B-trees), NEVER in B+ Tree non-leaf internal nodes (`2026 Q.32`).',
            counterExample: 'Using $10p + 11(p-1) + 12(p-1) \\le 4096$ gives $124$ instead of the correct $195$.',
          },
          {
            myth: 'Every Ridge Regression problem uses squared error $(y - w^T x)^2$ as the data-fidelity term.',
            reality: 'Read the exact prompt formula! `2026 Q.55` defined loss with **MAE** $|y - w^T x|$ plus $0.20\\|w\\|_2^2$.',
            counterExample: 'Squaring $|3 - 5| = 2$ to $4$ gave `9.00` instead of the true `7.00`.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm17-c2-ht1',
        title: 'Minute-168 Triage: Expected Marks per Minute Across MCQ, MSQ & NAT',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024/2025/2026 Paper Audits (48–51 Zero-Penalty Marks)'],
        problemStatement:
          'With 12 minutes remaining in the 180-minute CBT, you face three leftover 2-mark items: (1) an MCQ where you cleanly eliminated 2 options (50-50), (2) a long 8-row SQL join NAT estimated to take 7 minutes, and (3) an MSQ where A is proven true, D is proven false, and B/C are uncertain.',
        triggerCue:
          'Compare $\\text{EV}/\\text{minute}$ and negative-marking exposure across all three item types under a tight time cap.',
        bruteForceTrap:
          'Starting the 7-minute SQL NAT first because "NATs feel certain" burns your final minutes, leaving both the 50-50 MCQ and the zero-penalty MSQ unsubmitted.',
        mentalShift:
          'Knock out the zero-time high-EV actions FIRST (20 seconds total for the 50-50 MCQ [$EV = +0.67$] and MSQ subset), then spend the remaining 11+ minutes calmly executing the SQL NAT!',
        steps: [
          {
            label: 'Step 1 — Lock In the Zero-Penalty MSQ First (15 sec)',
            detail:
              'Never risk leaving an MSQ blank when time is short. Verify A is true, exclude D, and make your best reasoned call on B/C ($EV > 0$, penalty $= 0$).',
          },
          {
            label: 'Step 2 — Resolve the 50-50 2M MCQ (10 sec)',
            detail:
              'With $k = 2$ eliminated, $EV = \\frac{1}{2}(2) - \\frac{1}{2}(2/3) = +\\frac{2}{3}$ marks. Submit it unless you suspect your elimination was a hallucination.',
          },
          {
            label: 'Step 3 — Invest Remaining 11.5 Minutes in the SQL NAT',
            detail:
              'Now you have uninterrupted time to execute the 8-row SQL trace cleanly and bank the full $+2$ marks.',
          },
          {
            label: 'Step 4 — Minute-179 Zero-Blank Sweep',
            detail:
              'Click through the palette filter for any unattempted NAT/MSQ and verify no `0`-penalty box was accidentally left empty.',
          },
        ],
        lockInTakeaway:
          'Under end-of-exam time pressure, bank all positive-EV zero-second decisions (MSQs and $k \\ge 1$ MCQs) BEFORE committing to a multi-minute trace.',
      },
      {
        id: 'm17-c2-ht2',
        title: 'Literalism Audit: Catching Non-Standard Prompts Under Adrenaline',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 · Q.55 (2M NAT)', 'GATE DA 2026 · Q.32 (1M NAT)', 'GATE DA 2025 · Q.49 (2M MSQ)'],
        problemStatement:
          'Why do well-prepared candidates lose 6–8 marks on solvable questions like custom MAE+Ridge loss (`2026 Q.55`), B+ Tree non-leaf fanout (`2026 Q.32`), and closed-interval optimization (`2025 Q.49`)?',
        triggerCue:
          'Whenever a question feels "standard textbook," pause 3 seconds to scan for 4 classic modifiers: norm/absolute-value symbols, node type (leaf vs non-leaf), interval brackets `[a, b]` vs `(a, b)`, and "without biases."',
        bruteForceTrap:
          'Auto-piloting $(y - w^T x)^2$, adding record pointers $P_r$, or stopping after $f\'(x) = 0$ without evaluating boundary points.',
        mentalShift:
          'Run a 3-second "Literalism Diff" between the prompt formula on screen and the textbook template in your head before touching the calculator.',
        steps: [
          {
            label: 'Step 1 — Check Loss & Norm Exponents',
            detail:
              'Look at `2026 Q.55`: $|y_{\\text{true}} - w^T x| + 0.20\\|w\\|_2^2$ uses $L_1$ error (not squared) plus $L_2^2$ penalty (not $L_2$).',
          },
          {
            label: 'Step 2 — Check Node Role & Pointer Types',
            detail:
              'Look at `2026 Q.32`: "non-leaf node" in a B+ Tree contains ONLY node pointers $P_n$ and search keys $K$ — ignore the given record pointer size $P_r$.',
          },
          {
            label: 'Step 3 — Check Domain Endpoints & Parameter Counts',
            detail:
              'On closed $[a, b]$, global extrema can sit at $x=a$ or $x=b$ (2025 Q.49). In MLPs (`2026 Q.56`), verify "without biases" vs "with biases."',
          },
          {
            label: 'Step 4 — Check Units & Rounding Direction',
            detail:
              'Verify `bits` vs `bytes`, `natural log` vs `log_2`, and round only after finishing all intermediate arithmetic.',
          },
        ],
        lockInTakeaway:
          'Three seconds checking prompt modifiers (`|·|`, `non-leaf`, `[a, b]`, `without biases`) prevents more lost marks than any extra hour of cramming.',
      },
    ],
    arsenalCards: [
      {
        id: 'm17-c2-ar1',
        badge: 'Prob + Strategy',
        whenYouSpot: '$k \\ge 1$ options cleanly eliminated in an $m$-mark MCQ',
        directWeaponLatex: 'EV_{\\text{MCQ}}(m, k) = \\frac{k \\cdot m}{3(4-k)} > 0',
        instantRule:
          'If you eliminate 1 option ($k=1$), guessing gives $+m/9$; eliminate 2 options ($k=2$), guessing gives $+m/3$. Only $k=0$ blind guessing has $EV = 0$.',
        tenSecondExample:
          '50-50 on a 2-mark MCQ ($m=2, k=2$): $EV = \\frac{2 \\cdot 2}{3(2)} = +0.67$ marks.',
        oneFatalTrap:
          'False elimination ("gut hunch") invalidates the $1/(4-k)$ probability — only apply when at least 1 option is mathematically disproven.',
      },
      {
        id: 'm17-c2-ar2',
        badge: 'CBT Triage',
        whenYouSpot: 'Any MSQ or NAT block (~48–51 marks out of 100 in GATE DA)',
        directWeaponLatex: '\\text{Penalty}_{\\text{MSQ/NAT}} = 0 \\implies EV \\ge 0',
        instantRule:
          'Never leave an MSQ or NAT blank. Expect 1–2 official MSQs to have ONLY ONE correct option (`2025 Q.27`, `2026 Q.23 & Q.51`).',
        tenSecondExample:
          'At minute 178, fill every empty NAT with your best estimate and every MSQ with your highest-confidence subset.',
        oneFatalTrap:
          'Leaving a purple "Marked for Review" question UNANSWERED — only "Answered" or "Answered & Marked for Review" is graded.',
      },
      {
        id: 'm17-c2-ar3',
        badge: 'Sleeping Giants',
        whenYouSpot: '2024–2026 0-Mark Gaps + Prompt Literalism Traps',
        directWeaponLatex: '\\chi^2 = \\sum \\frac{(O_i-E_i)^2}{E_i}, \\quad p P_n + (p-1)K \\le B',
        instantRule:
          'Keep Hypothesis Testing (`z, t, \\chi^2`, CIs), LU Decomposition, and Star/Snowflake schemas sharp for 2027 rotation, and verify literal loss/node definitions before computing.',
        tenSecondExample:
          '2026 Q.55 used MAE $|y - w^T x| + 0.20\\|w\\|_2^2 = 2 + 5 = 7$ (not $4 + 5 = 9$).',
        oneFatalTrap:
          'Rounding intermediate calculator values to 2 decimals mid-problem, causing NAT answers like `0.77` vs `0.76` to drift outside tolerance.',
      },
    ],
    questions: [
      {
        id: 'm17-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Synthesis Warmup #1 · Probability EV + CBT Guessing Rule',
        marks: 1,
        type: 'NAT',
        stem: 'In GATE DA, a 2-mark MCQ awards $+2$ marks for a correct response and $-2/3$ marks for an incorrect response. If you eliminate exactly $1$ wrong option with certainty and guess uniformly among the remaining $3$ options, what is your expected score (rounded to 2 decimal places)?',
        natAnswer: { min: 0.21, max: 0.23, exactDisplay: '0.22' },
        triggerHint: 'Apply $EV = \\frac{1}{3}(+2) + \\frac{2}{3}\\left(-\\frac{2}{3}\\right)$.',
        intuitiveSolution: [
          '1. With 3 remaining equally likely options, $P(\\text{correct}) = \\frac{1}{3}$ and $P(\\text{wrong}) = \\frac{2}{3}$.',
          '2. Compute $EV = \\frac{1}{3}(2) + \\frac{2}{3}\\left(-\\frac{2}{3}\\right) = \\frac{6}{9} - \\frac{4}{9} = \\frac{2}{9} \\approx 0.2222$.',
          '3. Rounding to 2 decimal places gives $0.22$.',
        ],
        directShortcutUsed: 'MCQ EV formula $\\frac{km}{3(4-k)}$ with $m=2, k=1 \\implies \\frac{2}{9}$.',
      },
      {
        id: 'm17-c2-q2',
        tier: 'warmup',
        sourceLabel: 'Synthesis Warmup #2 · Probability Variance + Guessing Risk',
        marks: 1,
        type: 'MCQ',
        stem: 'Suppose across $6$ independent 2-mark MCQs you have cleanly narrowed each down to $2$ options (50–50). If you guess on all $6$ questions (where each scores $+2$ with probability $0.5$ and $-2/3$ with probability $0.5$), what are the total expected gain and standard deviation of your score from these $6$ questions?',
        options: [
          {
            id: 'A',
            text: 'Expected gain $= +4$ marks, $\\text{SD} = \\frac{4\\sqrt{6}}{3} \\approx 3.27$ marks',
            whyTrueOrFalse: 'TRUE: Per question $E[X_i] = \\frac{1}{2}(2 - 2/3) = 2/3$ and $\\text{Var}(X_i) = \\left(\\frac{2 - (-2/3)}{2}\\right)^2 = \\frac{16}{9}$. Summing 6 independent items gives $E = 6(2/3) = +4$ and $\\text{SD} = \\sqrt{6 \\cdot 16/9} = \\frac{4\\sqrt{6}}{3} \\approx 3.27$.',
          },
          {
            id: 'B',
            text: 'Expected gain $= +4$ marks, $\\text{SD} = 8$ marks',
            whyTrueOrFalse: 'FALSE: Standard deviations of independent RVs add in quadrature ($\\sqrt{6} \\cdot \\text{SD}(X_i)$), not linearly ($6 \\cdot 4/3 = 8$).',
          },
          {
            id: 'C',
            text: 'Expected gain $= +2$ marks, $\\text{SD} = \\frac{4\\sqrt{6}}{3} \\approx 3.27$ marks',
            whyTrueOrFalse: 'FALSE: $+2/3$ is the expected gain per question, so 6 questions yield $6 \\times (2/3) = +4$ marks.',
          },
          {
            id: 'D',
            text: 'Expected gain $= 0$ marks, $\\text{SD} = 4$ marks',
            whyTrueOrFalse: 'FALSE: $EV = 0$ only occurs when $0$ options are eliminated; eliminating 2 options makes $EV$ strongly positive.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'For a symmetric two-point RV taking $a$ or $b$ with prob $1/2$, $\\text{SD} = \\frac{|a - b|}{2}$.',
        intuitiveSolution: [
          '1. For one 50–50 2-mark MCQ: $E[X_i] = \\frac{1}{2}(2) + \\frac{1}{2}\\left(-\\frac{2}{3}\\right) = \\frac{2}{3}$.',
          '2. Since outcomes are $2$ and $-2/3$ with prob $0.5$ each, $\\text{SD}(X_i) = \\frac{2 - (-2/3)}{2} = \\frac{4}{3}$, so $\\text{Var}(X_i) = \\frac{16}{9}$.',
          '3. Over $6$ independent items: $E[S] = 6 \\cdot \\frac{2}{3} = +4$ and $\\text{SD}(S) = \\sqrt{6 \\cdot \\frac{16}{9}} = \\frac{4\\sqrt{6}}{3} \\approx 3.27$.',
        ],
        directShortcutUsed: 'Two-point Bernoulli variance $\\text{Var} = (\\frac{a-b}{2})^2$ + linearity of expectation.',
      },
      {
        id: 'm17-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.57 (Prob Bayes + ML Confusion Matrix / AI)',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'A diagnostic test for Disease $D$ has a sensitivity (true positive rate) of $80\\%$ and a false positive rate of $10\\%$. If the prevalence of Disease $D$ in the population is $30\\%$, what is the probability that a randomly selected person who tests positive actually has Disease $D$? (Round to 2 decimal places.)',
        natAnswer: { min: 0.76, max: 0.78, exactDisplay: '0.77' },
        triggerHint: 'Convert sensitivity and FPR into likelihoods $P(+ \\mid D) = 0.80$ and $P(+ \\mid \\neg D) = 0.10$, then apply Bayes\' Theorem.',
        intuitiveSolution: [
          '1. True positive joint mass: $P(D \\cap +) = P(D)P(+ \\mid D) = 0.30 \\times 0.80 = 0.24$.',
          '2. False positive joint mass: $P(\\neg D \\cap +) = P(\\neg D)P(+ \\mid \\neg D) = 0.70 \\times 0.10 = 0.07$.',
          '3. Total positive mass: $P(+) = 0.24 + 0.07 = 0.31$.',
          '4. Posterior precision: $P(D \\mid +) = \\frac{0.24}{0.31} = \\frac{24}{31} \\approx 0.7742 \\to 0.77$.',
        ],
        directShortcutUsed: 'Bayes joint-mass table connecting ML TPR/FPR to posterior precision.',
      },
      {
        id: 'm17-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.55 (ML Regularized MAE + LA Dot Product/Norm)',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'In a regression task, a model predicts $\\hat{y} = w^T x$ with weight vector $w = [-3, 4]^T$ for input $x = [1, 2]^T$, where the true label is $y_{\\text{true}} = x_1 + x_2$. Compute the overall regularized loss defined as $L = |y_{\\text{true}} - w^T x| + 0.20\\|w\\|_2^2$.',
        natAnswer: { min: 7, max: 7, exactDisplay: '7' },
        triggerHint: 'Read the error term literally: it is absolute error $|y_{\\text{true}} - w^T x|$, NOT squared error!',
        intuitiveSolution: [
          '1. Compute the true label: $y_{\\text{true}} = x_1 + x_2 = 1 + 2 = 3$.',
          '2. Compute the linear prediction: $w^T x = (-3)(1) + (4)(2) = 5$.',
          '3. Compute the MAE data-loss term: $|3 - 5| = 2$.',
          '4. Compute the Ridge $L_2^2$ penalty: $0.20 \\|w\\|_2^2 = 0.20((-3)^2 + 4^2) = 0.20(25) = 5$.',
          '5. Total loss: $L = 2 + 5 = 7$.',
        ],
        directShortcutUsed: 'Literalism check (MAE $|y-\\hat{y}|$ vs MSE) + Euclidean norm-squared.',
      },
      {
        id: 'm17-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.63 (Prob Conditional Dist + Calculus Symmetry)',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Let $X \\sim \\text{Uniform}(-1, 1)$, and conditional on $X = x$, let $Y \\mid (X = x) \\sim \\text{Uniform}(x^2 - 0.1,\\; x^2 + 0.1)$. Find the Pearson correlation coefficient $\\rho(X, Y)$.',
        natAnswer: { min: 0, max: 0, exactDisplay: '0' },
        triggerHint: 'Compute $E[XY] = E[X \\cdot E[Y \\mid X]]$ via Iterated Expectation and odd-function integration.',
        intuitiveSolution: [
          '1. Since $X \\sim U(-1, 1)$ is symmetric around $0$, $E[X] = 0$.',
          '2. The conditional mean of $Y$ given $X=x$ is the midpoint of $(x^2 - 0.1, x^2 + 0.1)$, which is $E[Y \\mid X=x] = x^2$.',
          '3. By Iterated Expectation, $E[XY] = E[X \\cdot E[Y \\mid X]] = E[X^3] = \\frac{1}{2}\\int_{-1}^1 x^3\\,dx = 0$ (odd function on a symmetric interval!).',
          '4. Thus $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y] = 0 \\implies \\rho(X, Y) = 0$.',
        ],
        directShortcutUsed: 'Law of Iterated Expectation + odd-symmetry integral $\\int_{-1}^1 x^3 dx = 0$.',
      },
      {
        id: 'm17-c2-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Final Checklist · DBMS (B+ Tree/OLAP) + PDSA + LA',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following cross-topic invariants from the Final Revision Checklist is/are ALWAYS true?',
        options: [
          {
            id: 'A',
            text: 'In a $B^+$ Tree non-leaf node of size $B$ bytes with node pointer size $P_n$, search key size $K$, and record pointer size $P_r$, the maximum number of node pointers $p$ is governed by $p P_n + (p-1)K \\le B$ (independent of $P_r$).',
            whyTrueOrFalse: 'TRUE: Record pointers exist only in leaf nodes of a $B^+$ Tree, not in internal non-leaf nodes (`2026 Q.32`).',
          },
          {
            id: 'B',
            text: 'For $d$ dimensions with $|D_i|$ distinct values per dimension, `GROUP BY CUBE(D_1, ..., D_d)` produces at most $\\prod_{i=1}^d (|D_i| + 1)$ tuples, whereas $d$ dimensions with $L_i$-level concept hierarchies yield $\\prod_{i=1}^d (L_i + 1)$ cuboids.',
            whyTrueOrFalse: 'TRUE: `CUBE` adds 1 aggregated `ALL` value per dimension (`2025 Q.46`), and each $L_i$-level hierarchy adds 1 apex `ALL` cuboid level (`2026 Q.43`).',
          },
          {
            id: 'C',
            text: 'Binary search achieves $O(\\log n)$ worst-case time complexity on both sorted arrays and sorted singly linked lists.',
            whyTrueOrFalse: 'FALSE: Singly linked lists do not support $O(1)$ middle-element indexing, degrading binary search to $O(n)$ (`2025 Q.27`).',
          },
          {
            id: 'D',
            text: 'For every $n \\ge 2$, the $n \\times n$ centering matrix $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ is invertible.',
            whyTrueOrFalse: 'FALSE: $M\\mathbf{1} = 0$ with $\\mathbf{1} \\neq 0$, so $0$ is an eigenvalue and $\\text{rank}(M) = n - 1 < n$.',
          },
        ],
        correctOptions: ['A', 'B'],
        triggerHint: 'Recall 2025 Q.27, 2025 Q.46, 2026 Q.32, 2026 Q.43, and 2026 Q.52.',
        intuitiveSolution: [
          '1. Statement A is TRUE: $B^+$ tree internal nodes route searches via $(P_n, K)$ only; $P_r$ sits in leaves.',
          '2. Statement B is TRUE: both OLAP formulas add $+1$ per dimension for the `ALL` level.',
          '3. Statement C is FALSE: $O(\\log n)$ binary search requires $O(1)$ random access (array, not linked list).',
          '4. Statement D is FALSE: $M\\mathbf{1} = 0$, so $M$ is singular for all $n \\ge 1$.',
        ],
        directShortcutUsed: '4-way cross-topic invariant check (DBMS + OLAP + PDSA + LA).',
      },
      {
        id: 'm17-c2-q7',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Rank-Decider · Calculus Sigmoid/Hessian + ML Logistic Regression',
        marks: 2,
        type: 'MCQ',
        stem: 'Consider Ridge-regularized binary Logistic Regression on $(x_i, y_i)_{i=1}^N$ ($y_i \\in \\{0, 1\\}$) with $\\hat{p}_i = \\sigma(w^T x_i)$, $\\sigma(z) = \\frac{1}{1+e^{-z}}$, and objective $J(w) = -\\sum_{i=1}^N [y_i \\ln \\hat{p}_i + (1-y_i)\\ln(1-\\hat{p}_i)] + \\frac{\\lambda}{2}\\|w\\|_2^2$ ($\\lambda > 0$). Which statement accurately combines the Calculus derivative and Hessian convexity of $J(w)$?',
        options: [
          {
            id: 'A',
            text: '$\\nabla J(w) = \\sum_{i=1}^N (\\hat{p}_i - y_i) x_i + \\lambda w$ and $\\nabla^2 J(w) = \\sum_{i=1}^N \\hat{p}_i(1-\\hat{p}_i) x_i x_i^T + \\lambda I \\succ 0$, guaranteeing a unique global minimum.',
            whyTrueOrFalse: 'TRUE: Using $\\sigma\'(z) = \\sigma(z)(1-\\sigma(z)) > 0$, both the gradient cancellation and PSD outer-product sum $+\\lambda I \\succ 0$ hold.',
          },
          {
            id: 'B',
            text: '$\\nabla J(w) = \\sum_{i=1}^N (y_i - \\hat{p}_i) x_i + \\lambda w$, so $J(w)$ is strictly concave and has a unique maximum.',
            whyTrueOrFalse: 'FALSE: The sign of the data gradient is $(\\hat{p}_i - y_i)$ and $J(w)$ is strictly convex, not concave.',
          },
          {
            id: 'C',
            text: 'Because $\\sigma(z)$ is non-convex as a function of $z$, $J(w)$ can have non-global local minima even when $\\lambda > 0$.',
            whyTrueOrFalse: 'FALSE: The negative log-likelihood composed with linear logits $w^T x_i$ is convex in $w$ because $\\sigma\'(z) > 0$, and $+\\frac{\\lambda}{2}\\|w\\|_2^2$ makes it strictly convex.',
          },
          {
            id: 'D',
            text: 'At $\\hat{p}_i = 0.4$, the scalar weight $\\hat{p}_i(1 - \\hat{p}_i)$ appearing in the Hessian equals $0.16$.',
            whyTrueOrFalse: 'FALSE: $\\sigma\'(z) = 0.4(1 - 0.4) = 0.24$ (GATE DA 2024 Q.33), not $0.4^2 = 0.16$.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Differentiate $-y \\ln \\sigma(z) - (1-y)\\ln(1-\\sigma(z))$ using $\\sigma\'(z) = \\sigma(z)(1-\\sigma(z))$.',
        intuitiveSolution: [
          '1. For a single term $\\ell(z) = -y\\ln\\sigma(z) - (1-y)\\ln(1-\\sigma(z))$, $\\frac{d\\ell}{dz} = -y(1-\\sigma(z)) + (1-y)\\sigma(z) = \\sigma(z) - y = \\hat{p}_i - y_i$.',
          '2. Differentiating again gives $\\frac{d^2\\ell}{dz^2} = \\sigma\'(z) = \\hat{p}_i(1 - \\hat{p}_i) > 0$.',
          '3. By the chain rule, $\\nabla J(w) = \\sum_{i=1}^N (\\hat{p}_i - y_i) x_i + \\lambda w$ and $\\nabla^2 J(w) = \\sum_{i=1}^N \\hat{p}_i(1-\\hat{p}_i) x_i x_i^T + \\lambda I \\succeq \\lambda I \\succ 0$.',
        ],
        directShortcutUsed: 'Sigmoid derivative $\\sigma\' = \\sigma(1-\\sigma)$ + PSD outer-product Hessian $+\\lambda I$.',
      },
    ],
  },
]

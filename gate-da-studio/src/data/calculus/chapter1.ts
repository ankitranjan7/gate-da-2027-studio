import type { ChapterData } from '../../types/curriculum'

export const chapter1: ChapterData = {
  id: 'calc-ch1',
  number: 1,
  title: 'Functions, Symmetry, Growth & Infinite Series',
  shortTitle: 'Functions & Series',
  estimatedHours: 3.5,
  dayLabel: 'Week 1 · Day 1 (Part A)',
  tagline:
    'Welcome to ground zero of GATE DA Calculus! Together we will build intuition for how inputs map to outputs, how symmetry and single-peak curves solve tricky equations without heavy algebra, how $\\ln$, $e^x$, Sigmoid, and ReLU power Machine Learning, and how infinite geometric sums collapse into a single friendly fraction.',
  syllabusMapping: [
    'Functions of a single variable',
    'Infinite series & geometric progressions (used across Calculus, Probability & DSA)',
  ],
  whatIsImportant: [
    'Even ($f(-x)=f(x)$) vs. Odd ($f(-x)=-f(x)$) symmetry — kills integrals & derivatives at $0$ instantly',
    'Monotonic vs. Unimodal curves (comparing $x_1, x_2$ when $f(x_1)=f(x_2)$, tested in GATE 2025)',
    'Logarithm/Exponent swap identities ($n^{\\log m} = m^{\\log n}$) & turning products into sums for MLE',
    'Infinite geometric sums $\\frac{\\text{first term}}{1-r}$ & decoupling double sums $\\sum_i \\sum_j a_i b_j$ (GATE 2026 Q.35)',
  ],
  whatIsNotImportant: [
    'Obscure inverse-hyperbolic domain puzzles ($\\text{sech}^{-1}$, etc.)',
    'Heavy convergence tests like Raabe’s, Bertrand’s, or Cauchy condensation test — 0 marks in GATE DA',
  ],
  inboundStream: 'Ground Zero — only basic arithmetic, fractions, and number lines.',
  outboundStream: [
    'Ch.2–5 Limits, Derivatives & Maclaurin Series',
    'Week 2 Discrete PMF normalization ($\\sum p_k = 1$) & Involutions (2026 Q.33)',
    'Week 4 Binary Search & Quicksort geometric recurrences',
    'Week 7 Logistic Regression ($\\sigma$) & Neural Nets ($\\text{ReLU}$)',
  ],
  glossary: [
    {
      term: 'Domain',
      symbol: '$A \\text{ in } f: A \\to B$',
      plainEnglish:
        'Think of the domain as the complete set of valid inputs you are legally allowed to feed into a function without breaking any math rule (like dividing by zero or taking the square root of a negative number).',
      tinyExample: 'For $f(x) = \\frac{1}{\\sqrt{x}}$, the domain is $(0, \\infty)$ because $x$ must be strictly positive.',
    },
    {
      term: 'Codomain & Range',
      symbol: '$\\text{Range}(f) \\subseteq B$',
      plainEnglish:
        'In plain words, the codomain $B$ is the target basket of outputs declared by the function, while the range is the smaller subset of outputs that actually get hit.',
      tinyExample: 'For $f: \\mathbb{R} \\to \\mathbb{R}$ given by $f(x) = x^2$, the codomain is $\\mathbb{R}$, but the range is only $[0, \\infty)$.',
    },
    {
      term: 'Injective (One-to-One)',
      symbol: '$f(x_1) = f(x_2) \\implies x_1 = x_2$',
      plainEnglish:
        'A function is injective when no two different inputs ever share the same output — visually, every horizontal line cuts the graph at most once.',
      tinyExample: '$f(x) = e^x$ is injective on $\\mathbb{R}$, whereas $f(x) = x^2$ is not since $f(-2) = f(2) = 4$.',
    },
    {
      term: 'Surjective (Onto)',
      symbol: '$\\text{Range}(f) = B$',
      plainEnglish:
        'Think of surjectivity as "no output left behind" — every single value in the codomain $B$ is actually produced by at least one input from $A$.',
      tinyExample: '$f(x) = x^3$ from $\\mathbb{R} \\to \\mathbb{R}$ is surjective because every real number has a real cube root.',
    },
    {
      term: 'Bijection (Invertible Function)',
      symbol: '$f^{-1}: B \\to A$',
      plainEnglish:
        'A bijection is both injective and surjective, which means it pairs inputs and outputs in a perfect one-to-one match so you can run the rule backwards via $f^{-1}$.',
      tinyExample: '$f(x) = 2x + 1$ on $\\mathbb{R} \\to \\mathbb{R}$ is a bijection with inverse $f^{-1}(y) = \\frac{y - 1}{2}$.',
    },
    {
      term: 'Involution (Self-Inverse)',
      symbol: '$f(f(x)) = x$',
      plainEnglish:
        'Think of an involution as a light switch: applying the function twice always brings every input right back to where it started, so $f$ is its own inverse.',
      tinyExample: '$f(x) = -x$ and swapping two lockers $1 \\leftrightarrow 2$ while fixing $3$ are both involutions.',
    },
    {
      term: 'Even & Odd Function',
      symbol: '$f(-x) = \\pm f(x)$',
      plainEnglish:
        'An even function ($f(-x) = f(x)$) is a mirror image across the $y$-axis, while an odd function ($f(-x) = -f(x)$) flips upside down across the origin so left and right areas cancel out.',
      tinyExample: '$x^2$ and $\\cos x$ are even, whereas $x^3$ and $\\sin x$ are odd (and $\\int_{-1}^{1} x^3\\,dx = 0$).',
    },
    {
      term: 'Monotonic vs. Unimodal',
      symbol: '$\\nearrow$, $\\searrow$, or $\\nearrow\\!\\searrow$',
      plainEnglish:
        'A monotonic function moves steadily in one direction (always rising or always falling), whereas a unimodal function has a single hill or valley — rising up to one peak and then falling.',
      tinyExample: '$e^x$ is strictly monotonic (increasing), while a weight-vs-age curve peaking at $50$ is unimodal.',
    },
    {
      term: 'Logarithm & Exponential',
      symbol: '$e^x,\\; \\ln x$',
      plainEnglish:
        'Exponentials grow by repeated multiplication, and logarithms undo them by asking "what power did I raise the base to?" — turning messy products into clean sums.',
      tinyExample: '$\\ln(a \\cdot b) = \\ln a + \\ln b$, and $2^{\\log_{10} 5} = 5^{\\log_{10} 2}$ always.',
    },
    {
      term: 'Sigmoid Function',
      symbol: '$\\sigma(x) = \\frac{1}{1 + e^{-x}}$',
      plainEnglish:
        'Think of Sigmoid as a smooth S-shaped squashing curve that turns any real score from $-\\infty$ to $+\\infty$ into a probability strictly between $0$ and $1$.',
      tinyExample: '$\\sigma(0) = 0.5$, and for every $x$, $\\sigma(x) + \\sigma(-x) = 1$.',
    },
    {
      term: 'ReLU (Rectified Linear Unit)',
      symbol: '$\\text{ReLU}(x) = \\max(x, 0)$',
      plainEnglish:
        'In plain words, ReLU is a one-way gate used in neural networks: negative inputs get clipped flat to $0$, while positive inputs pass straight through unchanged.',
      tinyExample: '$\\text{ReLU}(-3) = 0$ and $\\text{ReLU}(4) = 4$.',
    },
    {
      term: 'Infinite Geometric Series',
      symbol: '$\\sum_{k=m}^{\\infty} r^k = \\frac{r^m}{1-r}$',
      plainEnglish:
        'This is an endless sum where every next term is multiplied by the same constant ratio $r$; whenever $|r| < 1$, the shrinking terms add up to exact $\\frac{\\text{first term}}{1 - r}$.',
      tinyExample: '$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = \\frac{1/2}{1 - 1/2} = 1$.',
    },
    {
      term: 'Convergent vs. Divergent & Harmonic Series',
      symbol: '$\\sum_{n=1}^{\\infty} \\frac{1}{n} = +\\infty$',
      plainEnglish:
        'A series converges if its running totals settle onto one finite number, and diverges if they grow without bound — remember the famous harmonic series diverges even though its terms $1/n$ shrink to $0$.',
      tinyExample: '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ converges (since $p=2>1$), while $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ diverges.',
    },
    {
      term: 'Separable vs. Coupled Double Sum',
      symbol: '$\\sum_i \\sum_j a_i b_j$',
      plainEnglish:
        'When the $i$ and $j$ ranges are fixed constants and the summand factors as $a_i b_j$, you can split the double sum into two separate 1D sums; if the inner bound depends on $i$ (coupled), sum the inner loop first.',
      tinyExample: '$\\sum_{i=0}^{\\infty}\\sum_{j=1}^{\\infty} 2^{-i}3^{-j} = \\left(\\sum_{i=0}^{\\infty}2^{-i}\\right)\\left(\\sum_{j=1}^{\\infty}3^{-j}\\right) = 2 \\times 0.5 = 1$.',
    },
  ],
  generatorId: 'double-series-gen',
  concepts: [
    {
      id: 'c1-1',
      title: 'Functions as Deterministic Rules: Domain, Range, Bijections & Self-Inverses',
      subtitle: 'Understanding one-to-one, onto, and involution mappings from a 4-item toy box',
      priority: 'core-pillar',
      buildsOn: 'Basic sets & input-output tables',
      toyExample: {
        title: '4 Students Assigned to 4 Lockers',
        scenario:
          'Picture 4 students $A = \\{1, 2, 3, 4\\}$ being assigned to 4 lockers $B = \\{1, 2, 3, 4\\}$ by a rule $f$. Suppose we assign $f(1)=2,\\; f(2)=1,\\; f(3)=3,\\; f(4)=4$. Let’s walk through what makes this assignment special:',
        walkthroughSteps: [
          '1. **Valid Function Check:** Every student gets **exactly one** locker. (If student 1 got two lockers, $f$ wouldn’t even be a function!)',
          '2. **One-to-One (Injective):** No two students share a locker — distinct inputs go to distinct outputs.',
          '3. **Onto (Surjective):** Every locker in $B$ is used — Range equals Codomain.',
          '4. **Apply $f$ Twice:** Notice what happens if you feed each output back into $f$: $f(f(1)) = f(2) = 1$, $f(f(2)) = f(1) = 2$, $f(f(3))=3$, $f(f(4))=4$. Every element returns home in 2 steps!',
        ],
        ahaMoment:
          'Here is the key idea: a bijection where $f(f(n)) = n$ for all $n$ is called an **involution**. In plain words, every student either stays at their own locker ($f(3)=3$) or swaps with one buddy ($1 \\leftrightarrow 2$) — you can NEVER have a 3-way cycle like $1 \\to 2 \\to 3 \\to 1$!',
      },
      theoremAndFormula: {
        statement:
          'A function $f: A \\to B$ is **invertible (bijective)** if and only if it is both **injective** ($f(x_1)=f(x_2) \\implies x_1=x_2$) and **surjective** ($\\text{Range}(f) = B$). On a finite set of equal size $|A| = |B| = n$, injective $\\iff$ surjective $\\iff$ bijective.',
        formulaLatex:
          'f^{-1}(y) = x \\iff f(x) = y \\qquad \\text{and} \\qquad f(f(x)) = x \\iff f = f^{-1}',
        plainEnglishDecoding:
          'Think of checking injectivity on a real curve $y = f(x)$ using the **Horizontal Line Test**: if any horizontal line hits the graph twice (like $y=x^2$ at $x=-2$ and $x=+2$), the function forgets whether $x$ was positive or negative, so you cannot reverse it on $\\mathbb{R}$ unless you restrict the domain to $[0, \\infty)$.',
        workedMiniExamples: [
          {
            prompt: 'Find the maximal real domain of $f(x) = \\frac{1}{\\sqrt{4 - x^2}}$.',
            solution:
              'Inside a square root we need $\\ge 0$, and in a denominator we need $\\neq 0$. Combining both forces $4 - x^2 > 0 \\implies x^2 < 4 \\implies x \\in (-2, 2)$ (open interval!).',
          },
          {
            prompt: 'Count bijections on $\\{1,2,3\\}$ satisfying $f(f(n)) = n$.',
            solution:
              'Either **0 swaps** (all 3 fixed: $1$ way) or **1 swap pair** ($\\binom{3}{2} = 3$ ways to pick which two swap, leaving the 3rd fixed). Total $= 1 + 3 = 4$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: '$f(x) = x^2$ from $[0, \\infty) \\to \\mathbb{R}$ is invertible because it passes the horizontal line test.',
          reality: 'It is injective on $[0, \\infty)$, NOT surjective onto $\\mathbb{R}$ (negative outputs are never reached!). Codomain must be $[0, \\infty)$ for invertibility.',
          counterExample: '$y = -1 \\in \\mathbb{R}$ has no real pre-image $x \\ge 0$.',
        },
        {
          myth: 'If $f(g(x))$ is injective, both $f$ and $g$ must be injective.',
          reality: 'Only the **inner** function $g$ is guaranteed injective! $f$ only needs to be injective on the range of $g$.',
          counterExample: '$g(x) = e^x$ ($\\mathbb{R} \\to \\mathbb{R}$) and $f(y) = y^2$ ($\\mathbb{R} \\to \\mathbb{R}$): $f(g(x)) = e^{2x}$ is injective even though $f(y)=y^2$ is not!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 1,
          topic: 'Combinatorics & Counting Involutions',
          whyItMatters: 'GATE DA 2026 literally asked to count bijections on $\\{1,2,3,4\\}$ with $f(f(n))=n$ (= 10)!',
          pyqProof: 'GATE DA 2026 · Q.33 (1M NAT)',
        },
      ],
    },
    {
      id: 'c1-2',
      title: 'Symmetry (Even/Odd) & Monotonic vs. Unimodal Shapes',
      subtitle: 'Solving equations & inequalities purely from curve shape without knowing the formula',
      priority: 'high-yield',
      buildsOn: 'Step 1.1 Horizontal Line Test & coordinate graphs',
      toyExample: {
        title: 'Two Brothers Weighing the Exact Same on a Rise-Then-Fall Curve',
        scenario:
          'Suppose a person’s body weight $W(a)$ strictly increases with age $a$ from birth up to age $50$, peaks at $50$, and strictly decreases after $50$. Now suppose two brothers have different ages $a_1 < a_2$, yet today they weigh the exact same: $W(a_1) = W(a_2)$. Pause and ask yourself: could both brothers be in their 30s?',
        walkthroughSteps: [
          '1. If both were under $50$ ($a_1 < a_2 \\le 50$), strict increase forces $W(a_1) < W(a_2)$ — impossible!',
          '2. If both were $50$ or older ($50 \\le a_1 < a_2$), strict decrease forces $W(a_1) > W(a_2)$ — also impossible!',
          '3. The ONLY way a horizontal line cuts a single-peak (unimodal) mountain twice is with one point on the left climb and one point on the right descent: $a_1 < 50 < a_2$!',
        ],
        ahaMoment:
          'Notice how you didn’t need a single algebraic formula for $W(a)$! That exact puzzle was a **2-mark GATE DA 2025 question**, and thinking visually about unimodality lets you solve it calmly in 10 seconds.',
      },
      theoremAndFormula: {
        statement:
          '1) **Even Function:** $f(-x) = f(x)$ (mirror-symmetric across the $y$-axis, e.g. $x^2, |x|, \\cos x, e^{-x^2/2}$).\n2) **Odd Function:** $f(-x) = -f(x)$ (180° rotational symmetry through $(0,0)$, e.g. $x, x^3, \\sin x, \\sinh x = \\frac{e^x-e^{-x}}{2}$).\n3) **Product Parity Multiplication:** Treat Even as $(+)$ and Odd as $(-)$: Even $\\times$ Odd $=$ Odd, Odd $\\times$ Odd $=$ Even!',
        formulaLatex:
          '\\text{If } f \\text{ is odd on } [-L, L]: \\quad f(0) = 0 \\quad \\text{and} \\quad \\int_{-L}^{L} f(x)\\,dx = 0',
        plainEnglishDecoding:
          'Think of an odd function on a symmetric interval $[-L, L]$ like a balanced seesaw: every positive patch of area on the right has an identical negative twin on the left, so they cancel out to **exact zero** with zero integration work!',
        workedMiniExamples: [
          {
            prompt: 'Without integrating, evaluate $\\int_{-1}^{1} x^3 \\cos(x)\\,dx$.',
            solution:
              '$x^3$ is Odd $(-)$ and $\\cos x$ is Even $(+)$, so their product $x^3\\cos x$ is **Odd** $(-)$. Since $[-1, 1]$ is symmetric around $0$, the integral is immediately **$0$**!',
          },
          {
            prompt: 'Classify $h(x) = \\ln\\!\\left(\\sqrt{x^2+1} + x\\right)$ as even, odd, or neither.',
            solution:
              'Test $h(-x) + h(x) = \\ln\\big((\\sqrt{x^2+1}-x)(\\sqrt{x^2+1}+x)\\big) = \\ln((x^2+1)-x^2) = \\ln(1) = 0 \\implies h(-x) = -h(x)$. It is **Odd**!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Every function is either even or odd.',
          reality: 'Most functions (like $e^x$ or $x + 1$) are neither! However, EVERY function on $\\mathbb{R}$ uniquely splits into Even + Odd: $f(x) = \\frac{f(x)+f(-x)}{2} + \\frac{f(x)-f(-x)}{2}$.',
          counterExample: '$e^x = \\cosh x \\text{ (even)} + \\sinh x \\text{ (odd)}$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Zero Correlation on Symmetric Nonlinear RVs',
          whyItMatters:
            'In GATE 2026 Q.63, $X \\sim U(-1,1)$ and $E[Y|X=x] = x^2$, so $E[XY] = E[X^3] = 0$ by odd symmetry — instant answer `0`!',
          pyqProof: 'GATE DA 2026 · Q.63 (2M NAT) & GATE DA 2025 · Q.7 (2M MCQ)',
        },
      ],
    },
    {
      id: 'c1-3',
      title: 'The 4 Function Families That Run Data Science ($e^x, \\ln x, \\sigma(x), \\text{ReLU}$)',
      subtitle: 'Log-exponent algebra and activation shapes you will meet in every section',
      priority: 'core-pillar',
      buildsOn: 'Step 1.1 Inverses & Step 1.2 Monotonicity',
      toyExample: {
        title: 'Why Multiplying 1,000 Probabilities Breaks Computers (and How $\\ln$ Saves ML)',
        scenario:
          'Imagine flipping a biased coin with Heads probability $0.1$ a thousand times in a row. The joint probability is $P = (0.1)^{1000} = 10^{-1000}$, which instantly underflows to `0.0` on any standard 64-bit computer (whose limit is around $10^{-308}$). Watch how taking $\\log_{10}$ rescues us:',
        walkthroughSteps: [
          '1. $\\log_{10}(0.1 \\times 0.1 \\times \\dots \\times 0.1) = \\log_{10}(0.1) + \\dots + \\log_{10}(0.1) = 1000 \\times (-1) = -1000$.',
          '2. Because $\\ln(x)$ is **strictly increasing**, maximizing a messy product $\\prod p_i$ occurs at the **exact same parameter** as maximizing the clean sum $\\sum \\ln p_i$!',
          '3. Also notice a magic symmetry: what is $2^{\\log_{10} 5}$ vs $5^{\\log_{10} 2}$? Take $\\log_{10}$ of both: both give $(\\log_{10} 2)(\\log_{10} 5)$ — they are **always equal**!',
        ],
        ahaMoment:
          'That single trick explains why Machine Learning loves logarithms: logs turn **products into sums** and **powers into multipliers** while keeping the exact location of every maximum and minimum untouched — which is the whole reason Log-Likelihood and Cross-Entropy Loss exist!',
      },
      theoremAndFormula: {
        statement:
          'Key identities & activation definitions across GATE DA ($a, b > 0$):',
        formulaLatex:
          'a^{\\log_c b} = b^{\\log_c a}, \\qquad \\sigma(x) = \\frac{1}{1 + e^{-x}} \\in (0,1), \\qquad \\text{ReLU}(x) = \\max(x, 0) = \\frac{x + |x|}{2}',
        plainEnglishDecoding:
          'In plain words, keep two shapes pictured in your mind:\n• **Sigmoid $\\sigma(x)$** smoothly squashes $(-\\infty, +\\infty)$ into $(0,1)$, passing through $\\sigma(0) = 0.5$ with mirror symmetry $\\sigma(-x) = 1 - \\sigma(x)$.\n• **ReLU** stays completely flat at $0$ for $x \\le 0$ and acts as the straight line $y = x$ for $x > 0$ — simple, fast, and never saturating on the positive side.',
        workedMiniExamples: [
          {
            prompt: 'Simplify $\\sigma(x) + \\sigma(-x)$ for any real $x$.',
            solution:
              '$\\frac{1}{1+e^{-x}} + \\frac{1}{1+e^{x}} = \\frac{1}{1+e^{-x}} + \\frac{e^{-x}}{e^{-x}+1} = \\frac{1+e^{-x}}{1+e^{-x}} = 1$. Hence $\\sigma(x) - 0.5$ is an **odd** function!',
          },
          {
            prompt: 'For $m > n > 0$, compare $x = n^{\\log_{10} m}$ and $y = m^{\\log_{10} n}$.',
            solution:
              '$\\log_{10} x = (\\log_{10} m)(\\log_{10} n) = \\log_{10} y$. Since $\\log_{10}$ is injective, $x = y$ always! (GATE 2026 Q.4)',
          },
        ],
      },
      msqTraps: [
        {
          myth: '$\\ln(x^2) = 2\\ln(x)$ for all nonzero $x \\in \\mathbb{R}$.',
          reality: '$\\ln(x^2) = 2\\ln|x|$! Without absolute value bars, $\\ln(x)$ is undefined for $x < 0$.',
          counterExample: 'At $x = -e$, $\\ln((-e)^2) = \\ln(e^2) = 2$, whereas $2\\ln(-e)$ does not exist in $\\mathbb{R}$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'Logistic Regression & Feed-Forward ReLU Networks',
          whyItMatters: 'Sigmoid models class posteriors $P(y=1|x)$, and collapsing linear/active ReLU layers was tested in 2024 Q.43.',
          pyqProof: 'GATE DA 2024 · Q.43 & GATE DA 2026 · Q.4',
        },
      ],
    },
    {
      id: 'c1-4',
      title: 'Infinite Geometric Series & Separable Double Sums',
      subtitle: 'Turning infinite single & double summations into 10-second fraction arithmetic',
      priority: 'core-pillar',
      buildsOn: 'Step 1.3 Exponents $r^k$',
      sandboxId: 'series-growth-lab',
      toyExample: {
        title: 'Eating Half of What Remains of a Square Cake Forever',
        scenario:
          'Picture a square $1 \\times 1$ cake (total area $= 1$). On your first bite you eat $\\frac{1}{2}$ of it; on the next bite you eat half of what is left ($\\frac{1}{4}$); then $\\frac{1}{8}$, $\\frac{1}{16}$, and so on forever. Watch how an infinite sum equals a finite number:',
        walkthroughSteps: [
          '1. After $N$ bites, remaining cake $= (\\frac{1}{2})^N$, so eaten cake $= 1 - (\\frac{1}{2})^N$.',
          '2. As $N \\to \\infty$, $(\\frac{1}{2})^N \\to 0$, so $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = 1$!',
          '3. If we ALSO include $1$ at the front ($k=0$ term: $1 + \\frac{1}{2} + \\frac{1}{4} + \\dots$), the sum is $1 + 1 = 2$. Notice how changing the starting index from $k=1$ to $k=0$ **doubles** the answer!',
        ],
        ahaMoment:
          'Here is a habit that will save you from GATE’s favorite trap: never memorize "$1/(1-r)$" blindly — always say **"$\\frac{\\text{FIRST TERM}}{1 - \\text{RATIO}}$"**! That way, whether a sum starts at $k=0$, $k=1$, or $k=2$, you always plug the starting index first and nail the exact numerator.',
      },
      theoremAndFormula: {
        statement:
          'For $|r| < 1$, an infinite geometric series converges to First Term divided by $(1 - r)$. Moreover, if a double sum’s summand factors cleanly into $a_i \\cdot b_j$ and the **summation limits of $i$ and $j$ do not depend on each other**, the double sum factors into the product of two single sums!',
        formulaLatex:
          '\\sum_{k=m}^{\\infty} r^k = \\frac{r^m}{1 - r} \\;(|r|<1), \\qquad \\sum_{i=m_1}^{\\infty} \\sum_{j=m_2}^{\\infty} a_i b_j = \\left(\\sum_{i=m_1}^{\\infty} a_i\\right)\\!\\left(\\sum_{j=m_2}^{\\infty} b_j\\right)',
        plainEnglishDecoding:
          'Think of $\\sum_i \\sum_j a_i b_j$ as just the ordinary distributive law on steroids: expanding $(a_0 + a_1 + \\dots)(b_0 + b_1 + \\dots)$ creates every single pair $a_i b_j$ once! Just pause and check the bounds first — if the inner sum starts at $j = i$, the indices are coupled, so you must sum the inner $j$-loop first before summing $i$.',
        workedMiniExamples: [
          {
            prompt: 'Evaluate $\\sum_{i=0}^{\\infty} \\sum_{j=1}^{\\infty} 2^{-i} 3^{-j}$ (GATE DA 2026 Q.35).',
            solution:
              'Limits are independent! Factor into $(\\sum_{i=0}^\\infty (1/2)^i)(\\sum_{j=1}^\\infty (1/3)^j) = \\left(\\frac{1}{1 - 1/2}\\right)\\left(\\frac{1/3}{1 - 1/3}\\right) = 2 \\times \\frac{1/3}{2/3} = 2 \\times 0.5 = 1$.',
          },
          {
            prompt: 'Evaluate the coupled sum $\\sum_{i=0}^{\\infty} \\sum_{j=i}^{\\infty} 2^{-i} 3^{-j}$.',
            solution:
              'Here $j$ starts at $i$! Inner sum over $j \\ge i$ gives $2^{-i} \\cdot \\frac{3^{-i}}{1 - 1/3} = \\frac{3}{2} \\cdot 6^{-i}$. Now outer sum over $i \\ge 0$ gives $\\frac{3}{2} \\cdot \\frac{1}{1 - 1/6} = \\frac{3}{2} \\cdot \\frac{6}{5} = 1.8$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If individual terms $a_n \\to 0$ as $n \\to \\infty$, then $\\sum_{n=1}^{\\infty} a_n$ always converges.',
          reality: '$a_n \\to 0$ is necessary, NEVER sufficient! For $p$-series $\\sum \\frac{1}{n^p}$, convergence holds iff $p > 1$.',
          counterExample: 'Harmonic series $\\sum_{n=1}^{\\infty} \\frac{1}{n} = +\\infty$ even though $1/n \\to 0$ (this $\\ln n$ growth shows up in Randomized Quicksort & Coupon Collector!).',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1 & Sec 4',
          targetWeek: 2,
          topic: 'Geometric RV Moments & Divide-and-Conquer Recurrences',
          whyItMatters: 'Geometric PMF $\\sum (1-p)^{k-1}p = 1$ and Master Theorem geometric tree-level sums use this exact formula.',
          pyqProof: 'GATE DA 2026 · Q.35 (1M NAT) & GATE DA 2024 · Q.4 (1M MCQ)',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'pb-1-1',
      title: 'Decoupling Double Infinite Sums Without Touching Partial Sums',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2026 · Q.35 (1M NAT)'],
      problemStatement:
        'Find the exact value of $\\sum_{i=0}^{\\infty} \\sum_{j=1}^{\\infty} 2^{-i} 3^{-j}$.',
      triggerCue:
        'Summand is a product $f(i) \\cdot g(j)$ AND the index bounds ($i \\ge 0$, $j \\ge 1$) are constants independent of each other.',
      bruteForceTrap:
        'Writing out $i=0, 1, 2$ rows by hand and trying to spot a pattern in $1/3 + 1/9 + 1/6 + 1/18 + \\dots$ wastes 4 minutes and invites fraction arithmetic mistakes.',
      mentalShift:
        'Look at the inner $j$-sum first: as $j$ runs, $2^{-i}$ acts like a plain constant, so you can pull it right outside! Once you do that, the entire $j$-sum is also a constant with respect to $i$, turning one intimidating 2D grid into two friendly 5-second geometric sums.',
      steps: [
        {
          label: 'Check bound independence & split into two brackets',
          detail:
            'Since $i \\in \\{0,1,2,\\dots\\}$ and $j \\in \\{1,2,3,\\dots\\}$ don’t mention each other: $$S = \\left(\\sum_{i=0}^{\\infty} \\left(\\frac{1}{2}\\right)^i\\right) \\times \\left(\\sum_{j=1}^{\\infty} \\left(\\frac{1}{3}\\right)^j\\right)$$',
        },
        {
          label: 'Apply First Term / (1 - Ratio) to each bracket carefully',
          detail:
            'First bracket ($i=0 \\implies$ first term $= (1/2)^0 = 1$): $\\frac{1}{1 - 1/2} = 2$.\nSecond bracket ($j=1 \\implies$ first term $= (1/3)^1 = 1/3$): $\\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3} = \\frac{1}{2}$.',
        },
        {
          label: 'Multiply',
          detail: '$S = 2 \\times \\frac{1}{2} = 1$. Done in 15 seconds!',
        },
      ],
      lockInTakeaway:
        'Independent bounds + product summand $\\implies$ split immediately; ALWAYS plug the lower index to get the exact First Term!',
    },
    {
      id: 'pb-1-2',
      title: 'Unmasking Interleaved Twin Series',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2024 · GA Q.4 (1M MCQ)'],
      problemStatement:
        'Find the sum of the infinite series: $2 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{27} + \\dots$',
      triggerCue:
        'Consecutive ratios jump erratically ($1/4,\\; 2/3,\\; 3/4,\\; 1/2,\\; 8/9\\dots$), yet denominators are clean powers of two prime bases ($2^k$ and $3^k$).',
      bruteForceTrap:
        'Looking for a single formula $a_n$ for the $n$-th term — there isn’t a clean single formula because two independent progressions were Riffle-Shuffled together!',
      mentalShift:
        'Instead of hunting for one combined rule, gently un-shuffle the terms: place all powers of $2$ into Bucket A, all powers of $3$ into Bucket B, and keep the standalone $2$ in front. Because every term is positive and the series converges, rearranging never changes the total!',
      steps: [
        {
          label: 'Separate the leading constant and prime-power buckets',
          detail:
            'Leading constant: $2$.\nPowers of $1/2$: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\dots$\nPowers of $1/3$: $\\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\dots$',
        },
        {
          label: 'Sum each geometric bucket via First Term / (1 - r)',
          detail:
            'Bucket A $= \\frac{1/2}{1 - 1/2} = 1$.\nBucket B $= \\frac{1/3}{1 - 1/3} = \\frac{1}{2}$.',
        },
        {
          label: 'Add them back',
          detail: '$\\text{Total} = 2 + 1 + \\frac{1}{2} = \\frac{7}{2} = 3.5$.',
        },
      ],
      lockInTakeaway:
        'Whenever positive denominators mix powers of two primes ($2^k, 3^k$ or $2^k, 5^k$), un-shuffle into separate geometric sums!',
    },
    {
      id: 'pb-1-3',
      title: 'Exploiting Curve Shape (Unimodality) Without Any Formula',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2025 · GA Q.7 (2M MCQ)'],
      problemStatement:
        'Suppose weight $W(a)$ strictly increases with age $a$ up to $a = 50$ and strictly decreases after $a = 50$. Two brothers of unequal ages $a_1 < a_2$ have the exact same weight today. Which relation MUST hold among $a_1, a_2, 50$?',
      triggerCue:
        'No algebraic formula is given — only monotonicity intervals ($\\nearrow$ till $50$, $\\searrow$ after $50$) and an equality $W(a_1) = W(a_2)$ with $a_1 < a_2$.',
      bruteForceTrap:
        'Inventing linear formulas like $W(a) = 50 - |a - 50|$ and assuming $a_1 + a_2 = 100$! Notice a symmetric tent gives $a_1 + a_2 = 100$, which is a **trap** if the left slope and right slope aren’t symmetric!',
      mentalShift:
        'Sketch a deliberately lopsided hill peaking at $x = 50$ — say, a steep climb on the left and a gentle slope on the right — so your eyes never assume hidden symmetry! Then ask only what must remain true for **every** single-peak curve.',
      steps: [
        {
          label: 'Rule out same-side placement using strict monotonicity',
          detail:
            'On $[0, 50]$, $W$ is strictly increasing (injective!), so two distinct ages $\\le 50$ CANNOT share the same weight. Similarly on $[50, \\infty)$, $W$ is strictly decreasing (also injective!).',
        },
        {
          label: 'Place one age on each side of the peak',
          detail:
            'Since $a_1 < a_2$ and they cannot lie on the same side of $50$, we MUST have $a_1 < 50 < a_2$ — nothing stronger (like $a_1 + a_2 = 100$) is guaranteed!',
        },
      ],
      lockInTakeaway:
        'When testing abstract function properties in MCQs/MSQs, ALWAYS sketch an asymmetric example so fake symmetry doesn’t trick you!',
    },
  ],
  arsenalCards: [
    {
      id: 'ac-1-1',
      badge: 'Geometric Sum Universal Formula',
      whenYouSpot: 'Any infinite geometric sum $\\sum_{k=m}^{\\infty} c \\cdot r^k$ with $|r| < 1$',
      directWeaponLatex: 'S = \\frac{\\text{First Term } (k=m)}{1 - r} = \\frac{c \\cdot r^m}{1 - r}',
      instantRule: 'Plug the bottom index $k=m$ to get the numerator; put $1 - r$ in the denominator.',
      tenSecondExample: '$\\sum_{j=2}^{\\infty} 3^{-j} = \\frac{1/9}{1 - 1/3} = \\frac{1/9}{2/3} = \\frac{1}{6}$.',
      oneFatalTrap: 'Using $1/(1-r)$ when the index starts at $k=1$ or $k=2$ instead of $k=0$!',
    },
    {
      id: 'ac-1-2',
      badge: 'Arithmetico-Geometric Sum (Expectation Engine)',
      whenYouSpot: '$\\sum_{k=1}^{\\infty} k \\cdot r^k$ or $\\sum_{k=1}^{\\infty} k (1-p)^{k-1} p$ (expected value of discrete RVs!)',
      directWeaponLatex: '\\sum_{k=1}^{\\infty} k r^{k-1} = \\frac{1}{(1-r)^2}, \\qquad \\sum_{k=1}^{\\infty} k r^k = \\frac{r}{(1-r)^2}',
      instantRule: 'Differentiating $\\sum r^k = \\frac{1}{1-r}$ once gives $(1-r)^{-2}$ in the denominator!',
      tenSecondExample: '$\\sum_{k=1}^{\\infty} \\frac{k}{2^k} = \\frac{1/2}{(1 - 1/2)^2} = \\frac{0.5}{0.25} = 2$.',
      oneFatalTrap: 'Forgetting the extra $r$ in the numerator when comparing $\\sum k r^k$ vs $\\sum k r^{k-1}$.',
    },
    {
      id: 'ac-1-3',
      badge: 'Separable Double Sum Splitter',
      whenYouSpot: '$\\sum_{i=a}^{b} \\sum_{j=c}^{d} f(i) g(j)$ with constant limits $a,b,c,d$',
      directWeaponLatex: '\\sum_{i=a}^{b} \\sum_{j=c}^{d} f(i)g(j) = \\left(\\sum_{i=a}^{b} f(i)\\right)\\!\\left(\\sum_{j=c}^{d} g(j)\\right)',
      instantRule: 'Split into product of two 1D sums instantly.',
      tenSecondExample: '$\\sum_{i=0}^\\infty \\sum_{j=1}^\\infty 2^{-i}3^{-j} = 2 \\times 0.5 = 1$.',
      oneFatalTrap: 'NEVER split directly if the inner bound depends on $i$ (like $\\sum_{j=i}^{\\infty}$)! Evaluate inner sum first.',
    },
    {
      id: 'ac-1-4',
      badge: 'Log Base-Exponent Swap',
      whenYouSpot: 'Expressions of the form $a^{\\log_c b}$ compared against $b^{\\log_c a}$',
      directWeaponLatex: 'a^{\\log_c b} = b^{\\log_c a} \\quad (\\forall\\, a, b > 0)',
      instantRule: 'Swap the base $a$ and the log-argument $b$ freely without changing the value!',
      tenSecondExample: '$4^{\\log_{10} 100} = 100^{\\log_{10} 4}$ ($4^2 = 16$).',
      oneFatalTrap: 'Only swap the outer base with the argument inside the exponent’s log, NOT the log base $c$!',
    },
    {
      id: 'ac-1-5',
      badge: 'Odd-Function Zero Killer',
      whenYouSpot: 'Symmetric integral $\\int_{-L}^{L} g(x)\\,dx$ or expectation $E[g(X)]$ for $X$ symmetric around $0$',
      directWeaponLatex: 'g(-x) = -g(x) \\implies \\int_{-L}^{L} g(x)\\,dx = 0 \\;\\text{ and }\\; g(0)=0',
      instantRule: 'Multiply parities: Even($+$) $\\times$ Odd($-$) $=$ Odd($-$) $\\implies$ integral on $[-L,L]$ is $0$!',
      tenSecondExample: '$\\int_{-5}^{5} x \\cdot e^{-x^2}\\,dx = 0$ immediately.',
      oneFatalTrap: 'First verify the integral converges (e.g. $\\int_{-1}^1 \\frac{1}{x}\\,dx$ diverges because of the blow-up at $0$!).',
    },
  ],
  questions: [
    {
      id: 'q-1-1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'Evaluate the infinite geometric series $S = \\sum_{k=2}^{\\infty} \\left(\\frac{2}{3}\\right)^k$ (up to 2 decimal places).',
      natAnswer: { min: 1.32, max: 1.34, exactDisplay: '4/3 ≈ 1.33' },
      triggerHint: 'Pause and check where the sum begins — $k = 2$, not $0$! Plug $k = 2$ to get your exact First Term $(2/3)^2$, then divide by $(1 - 2/3)$.',
      intuitiveSolution: [
        '1. Identify ratio $r = \\frac{2}{3}$ (since $|r| < 1$, the series converges).',
        '2. Plug the starting index $k = 2$ to get the **First Term**: $a = (2/3)^2 = \\frac{4}{9}$.',
        '3. Apply $S = \\frac{\\text{First Term}}{1 - r} = \\frac{4/9}{1 - 2/3} = \\frac{4/9}{1/3} = \\frac{4}{3} \\approx 1.333$.',
      ],
      directShortcutUsed: '$S = \\frac{r^m}{1-r}$ with $m=2, r=2/3$.',
    },
    {
      id: 'q-1-2',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2',
      marks: 1,
      type: 'MCQ',
      stem: 'Let $f(x) = x^3 \\sin(x) + \\cos(x)$ for $x \\in \\mathbb{R}$. Which statement is true?',
      options: [
        {
          id: 'A',
          text: '$f(x)$ is an odd function.',
          whyTrueOrFalse: 'At $x=0$, $f(0) = \\cos(0) = 1 \\neq 0$, so $f$ cannot be odd.',
        },
        {
          id: 'B',
          text: '$f(x)$ is an even function.',
          whyTrueOrFalse: '$x^3$ is Odd $(-)$ and $\\sin x$ is Odd $(-)$, so their product $x^3\\sin x$ is Even $(+)$! Adding Even $\\cos x$ keeps $f(-x) = f(x)$ everywhere.',
        },
        {
          id: 'C',
          text: '$f(x)$ is strictly increasing on $\\mathbb{R}$.',
          whyTrueOrFalse: 'Since $f$ is non-constant and even ($f(-2) = f(2)$), it fails horizontal line test and cannot be strictly monotonic on $\\mathbb{R}$.',
        },
        {
          id: 'D',
          text: '$f(x)$ is neither even nor odd.',
          whyTrueOrFalse: 'Check directly: $(-x)^3 \\sin(-x) + \\cos(-x) = (-x^3)(-\\sin x) + \\cos x = x^3\\sin x + \\cos x = f(x)$.',
        },
      ],
      correctOptions: ['B'],
      triggerHint: 'Try our sign-multiplication trick: treat Even as $(+)$ and Odd as $(-)$, so Odd $\\times$ Odd gives Even $(+)$ — then see what happens when you add $\\cos(x)$!',
      intuitiveSolution: [
        '1. $x^3$ is Odd and $\\sin(x)$ is Odd, so their product $x^3 \\sin(x)$ is **Even**: $(-x)^3\\sin(-x) = (-x^3)(-\\sin x) = x^3\\sin x$.',
        '2. $\\cos(x)$ is also **Even**, and the sum of two even functions is always **Even**!',
      ],
      directShortcutUsed: 'Parity rule: $(- ) \\times (- ) = (+ )$, and $(+) + (+) = (+)$.',
    },
    {
      id: 'q-1-3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.35',
      year: 2026,
      marks: 1,
      type: 'NAT',
      stem: 'Find the value of the double infinite series: $$\\sum_{i=0}^{\\infty} \\sum_{j=1}^{\\infty} 2^{-i} 3^{-j}$$',
      natAnswer: { min: 0.99, max: 1.01, exactDisplay: '1' },
      triggerHint: 'Notice two friendly things: the bounds for $i$ and $j$ are completely independent (so you can split into $(\\sum 2^{-i})(\\sum 3^{-j})$), and $i$ starts at $0$ while $j$ starts at $1$!',
      intuitiveSolution: [
        '1. Decouple the independent indices: $\\left(\\sum_{i=0}^{\\infty} (1/2)^i\\right) \\cdot \\left(\\sum_{j=1}^{\\infty} (1/3)^j\\right)$.',
        '2. Evaluate the $i$-sum ($i$ starts at $0$, first term $= 1$): $\\frac{1}{1 - 1/2} = 2$.',
        '3. Evaluate the $j$-sum ($j$ starts at $1$, first term $= 1/3$): $\\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3} = \\frac{1}{2}$.',
        '4. Multiply: $2 \\times \\frac{1}{2} = 1$.',
      ],
      directShortcutUsed: 'Separable double sum factorization + First Term / $(1-r)$.',
    },
    {
      id: 'q-1-4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · GA Q.4',
      year: 2024,
      marks: 1,
      type: 'MCQ',
      stem: 'The sum of the infinite series $$2 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{27} + \\dots$$ is:',
      options: [
        { id: 'A', text: '$\\frac{11}{3}$', whyTrueOrFalse: 'Arithmetic slip in geometric sum.' },
        { id: 'B', text: '$\\frac{7}{2}$', whyTrueOrFalse: '$2 + (1/2 + 1/4 + \\dots) + (1/3 + 1/9 + \\dots) = 2 + 1 + 1/2 = 7/2$.' },
        { id: 'C', text: '$\\frac{13}{4}$', whyTrueOrFalse: 'Misses terms in the $1/3^k$ progression.' },
        { id: 'D', text: '$\\frac{9}{2}$', whyTrueOrFalse: 'Counts $1$ twice by starting $1/2^k$ or $1/3^k$ at $k=0$ even though only a single $2$ sits at front.' },
      ],
      correctOptions: ['B'],
      triggerHint: 'Look at the denominators — they are powers of $2$ and powers of $3$ shuffled together! Gently separate them into two clean geometric buckets while keeping the leading $2$ out front.',
      intuitiveSolution: [
        '1. Group positive terms into $2 + \\sum_{k=1}^{\\infty} \\frac{1}{2^k} + \\sum_{k=1}^{\\infty} \\frac{1}{3^k}$.',
        '2. $\\sum_{k=1}^{\\infty} (1/2)^k = \\frac{1/2}{1 - 1/2} = 1$, and $\\sum_{k=1}^{\\infty} (1/3)^k = \\frac{1/3}{1 - 1/3} = \\frac{1}{2}$.',
        '3. Total $= 2 + 1 + \\frac{1}{2} = \\frac{7}{2}$.',
      ],
      directShortcutUsed: 'Positive interleaved series split into prime-base geometric sums.',
    },
    {
      id: 'q-1-5',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · GA Q.4',
      year: 2026,
      marks: 1,
      type: 'MCQ',
      stem: 'For real numbers $m > n > 0$, let $x = n^{\\log_{10}(m)}$ and $y = m^{\\log_{10}(n)}$. Which of the following is ALWAYS true?',
      options: [
        { id: 'A', text: '$x > y$', whyTrueOrFalse: 'Test $m=100, n=10$: $x = 10^2 = 100$ and $y = 100^1 = 100$, so $x > y$ fails immediately!' },
        { id: 'B', text: '$x < y$', whyTrueOrFalse: 'Fails on $m=100, n=10$ where $x=y=100$.' },
        { id: 'C', text: '$x = y$', whyTrueOrFalse: '$\\log_{10}(x) = \\log_{10}(m)\\log_{10}(n) = \\log_{10}(y) \\implies x = y$ for all $m, n > 0$.' },
        { id: 'D', text: 'Relationship depends on whether $n > 1$ or $n < 1$.', whyTrueOrFalse: 'Even for $n=0.1, m=10$, $x = (0.1)^1 = 0.1$ and $y = 10^{-1} = 0.1$ — always equal!' },
      ],
      correctOptions: ['C'],
      triggerHint: 'Try taking $\\log_{10}$ of both $x$ and $y$ to bring the exponents down — or even faster, test concrete numbers like $m = 100$ and $n = 10$ to see what happens!',
      intuitiveSolution: [
        '1. Apply $\\log_{10}$ to both quantities: $\\log_{10}(x) = \\log_{10}(m) \\cdot \\log_{10}(n)$ and $\\log_{10}(y) = \\log_{10}(n) \\cdot \\log_{10}(m)$.',
        '2. Since $\\log_{10}$ is strictly one-to-one on $(0, \\infty)$, $\\log_{10}(x) = \\log_{10}(y) \\implies x = y$.',
      ],
      directShortcutUsed: 'Base-argument swap identity $n^{\\log m} = m^{\\log n}$.',
    },
    {
      id: 'q-1-6',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · GA Q.7',
      year: 2025,
      marks: 2,
      type: 'MCQ',
      stem: 'Suppose the weight of a person strictly increases with age up to age $50$, and strictly decreases with age after age $50$. Two brothers have different ages $a_1 < a_2$, yet they have the exact same weight. Which of the following MUST be true?',
      options: [
        { id: 'A', text: '$a_1 + a_2 = 100$', whyTrueOrFalse: 'Only true if the curve is symmetric around $50$, which is NOT given!' },
        { id: 'B', text: '$a_1 < 50 < a_2$', whyTrueOrFalse: 'Strict increase on $[0,50]$ and strict decrease on $[50,\\infty)$ forbid two equal outputs on the same side of $50$.' },
        { id: 'C', text: '$a_1 < a_2 < 50$', whyTrueOrFalse: 'Impossible: strict increase below $50$ would force $W(a_1) < W(a_2)$.' },
        { id: 'D', text: '$50 < a_1 < a_2$', whyTrueOrFalse: 'Impossible: strict decrease above $50$ would force $W(a_1) > W(a_2)$.' },
      ],
      correctOptions: ['B'],
      triggerHint: 'Ask yourself: can a strictly rising climb ever hit the exact same height twice? Sketch a lopsided hill peaking at $50$ and see where $a_1$ and $a_2$ must sit!',
      intuitiveSolution: [
        '1. On $[0, 50]$, strict increase implies $a_1 < a_2 \\le 50 \\implies W(a_1) < W(a_2)$ (contradiction).',
        '2. On $[50, \\infty)$, strict decrease implies $50 \\le a_1 < a_2 \\implies W(a_1) > W(a_2)$ (contradiction).',
        '3. Hence $a_1 < 50 < a_2$ is the unique necessary relation (and $a_1 + a_2 = 100$ fails whenever ascent and descent slopes differ).',
      ],
      directShortcutUsed: 'Unimodal level-set separation across the peak.',
    },
    {
      id: 'q-1-7',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Tricky MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Let $\\sigma(x) = \\frac{1}{1+e^{-x}}$ and $\\text{ReLU}(x) = \\max(x, 0)$ for $x \\in \\mathbb{R}$. Which of the following statements is/are TRUE?',
      options: [
        {
          id: 'A',
          text: '$g(x) = \\sigma(x) - \\frac{1}{2}$ is an odd function on $\\mathbb{R}$.',
          whyTrueOrFalse: '$g(-x) = \\sigma(-x) - \\frac{1}{2} = (1 - \\sigma(x)) - \\frac{1}{2} = \\frac{1}{2} - \\sigma(x) = -g(x)$. True!',
        },
        {
          id: 'B',
          text: '$\\text{ReLU}(x) - \\text{ReLU}(-x) = x$ for every $x \\in \\mathbb{R}$.',
          whyTrueOrFalse: 'Check $x > 0$: $x - 0 = x$. Check $x < 0$: $0 - (-x) = x$. Check $x=0$: $0$. Identically $x$ everywhere!',
        },
        {
          id: 'C',
          text: '$\\text{ReLU}(x) + \\text{ReLU}(-x) = |x|$ for every $x \\in \\mathbb{R}$.',
          whyTrueOrFalse: 'Check $x \\ge 0$: $x + 0 = |x|$. Check $x < 0$: $0 + (-x) = |x|$. Always $|x|$!',
        },
        {
          id: 'D',
          text: '$\\text{ReLU}: \\mathbb{R} \\to [0, \\infty)$ is a bijection.',
          whyTrueOrFalse: 'False! All negative inputs $x < 0$ map to $0$ ($\\text{ReLU}(-1) = \\text{ReLU}(-5) = 0$), so it fails injectivity badly.',
        },
      ],
      correctOptions: ['A', 'B', 'C'],
      triggerHint: 'Whenever an MSQ tests activation identities, plug in two quick test values like $x = +2$ and $x = -2$ to check each statement with zero guesswork!',
      intuitiveSolution: [
        '1. **Option A:** Since $\\sigma(x) + \\sigma(-x) = 1$, subtracting $1/2$ centers Sigmoid at the origin into an odd curve: $g(-x) = -g(x)$.',
        '2. **Options B & C:** Every real number decomposes into positive part $\\text{ReLU}(x)$ and negative magnitude $\\text{ReLU}(-x)$: their difference reconstructs $x$ (which is how a 2-ReLU hidden layer represents linear identity!) and their sum reconstructs $|x|$.',
        '3. **Option D:** $\\text{ReLU}(-1) = \\text{ReLU}(-2) = 0$, so it is many-to-one (not injective).',
      ],
      directShortcutUsed: 'Sign-case check ($x = +2, -2$) + $\\sigma(x) + \\sigma(-x) = 1$.',
    },
    {
      id: 'q-1-8',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Coupled Series NAT',
      marks: 2,
      type: 'NAT',
      stem: 'Compute the exact value of the coupled double infinite series: $$S = \\sum_{i=1}^{\\infty} \\sum_{j=i}^{\\infty} \\frac{1}{2^i \\cdot 3^j}$$ (round to 2 decimal places).',
      natAnswer: { min: 0.29, max: 0.31, exactDisplay: '0.30 (3/10)' },
      triggerHint: 'Pause before factoring — notice $j$ starts at $i$, not $1$, so the sums are coupled! Collapse the inner $j$-series first (its first term is $3^{-i}$), and then sum over $i \\ge 1$.',
      intuitiveSolution: [
        '1. Fix $i$ and evaluate the inner sum over $j = i, i+1, \\dots$: $$\\sum_{j=i}^{\\infty} \\left(\\frac{1}{3}\\right)^j = \\frac{(1/3)^i}{1 - 1/3} = \\frac{3}{2} \\cdot \\left(\\frac{1}{3}\\right)^i$$',
        '2. Multiply by $\\frac{1}{2^i}$ and sum over $i = 1 \\dots \\infty$: $$S = \\frac{3}{2} \\sum_{i=1}^{\\infty} \\left(\\frac{1}{6}\\right)^i = \\frac{3}{2} \\cdot \\frac{1/6}{1 - 1/6} = \\frac{3}{2} \\cdot \\frac{1}{5} = \\frac{3}{10} = 0.30$$',
      ],
      directShortcutUsed: 'Coupled bound $j \\ge i \\implies$ collapse inner geometric tail $\\frac{r_2^i}{1-r_2}$ first, then sum $(r_1 r_2)^i$.',
    },
  ],
}

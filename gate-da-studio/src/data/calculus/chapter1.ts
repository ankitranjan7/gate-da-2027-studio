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
        'Think of the domain as the complete set of valid inputs you are legally allowed to feed into a function without breaking any math rule (like dividing by zero or taking the square root of a negative number). The notation $f: A \\to B$ simply reads "a function named $f$ taking inputs from set $A$ into target set $B$."',
      tinyExample:
        'For $f(x) = \\frac{1}{\\sqrt{x}}$, the domain is $(0, \\infty)$ — meaning every number strictly greater than $0$ (the round parenthesis `(` excludes $0$ itself so we never divide by zero).',
    },
    {
      term: 'Codomain & Range',
      symbol: '$\\text{Range}(f) \\subseteq B$',
      plainEnglish:
        'In plain words, the codomain $B$ is the declared target basket of possible outputs, while the range is the smaller subset ($\\subseteq$ means "contained inside") of outputs that actually get produced.',
      tinyExample:
        'For $f: \\mathbb{R} \\to \\mathbb{R}$ ($\\mathbb{R}$ means all real numbers on the number line) given by $f(x) = x^2$, the codomain is $\\mathbb{R}$, but the range is only $[0, \\infty)$ — meaning $0$ and all positive numbers (the square bracket `[` includes $0$).',
    },
    {
      term: 'Injective (One-to-One)',
      symbol: '$f(x_1) = f(x_2) \\implies x_1 = x_2$',
      plainEnglish:
        'A function is injective when no two different inputs ever share the same output — the symbol $\\implies$ means "forces / therefore," so matching outputs force matching inputs. Visually, every horizontal line cuts the graph at most once.',
      tinyExample:
        '$f(x) = e^x$ is injective on $\\mathbb{R}$ (all real numbers), whereas $f(x) = x^2$ is not because two different inputs give the same output: $f(-2) = f(2) = 4$.',
    },
    {
      term: 'Surjective (Onto)',
      symbol: '$\\text{Range}(f) = B$',
      plainEnglish:
        'Think of surjectivity as "no output left behind" — every single value in the declared target basket (codomain $B$) is actually produced by at least one input from $A$.',
      tinyExample:
        '$f(x) = x^3$ from $\\mathbb{R} \\to \\mathbb{R}$ is surjective because every real number (positive, zero, or negative) has a real cube root.',
    },
    {
      term: 'Bijection (Invertible Function)',
      symbol: '$f^{-1}: B \\to A$',
      plainEnglish:
        'A bijection is both injective (no collisions) and surjective (no missed targets), which means it pairs inputs and outputs in a perfect one-to-one match so you can safely run the rule backwards via its inverse $f^{-1}$.',
      tinyExample:
        '$f(x) = 2x + 1$ on $\\mathbb{R} \\to \\mathbb{R}$ is a bijection with inverse $f^{-1}(y) = \\frac{y - 1}{2}$ (subtract $1$, then divide by $2$).',
    },
    {
      term: 'Involution (Self-Inverse)',
      symbol: '$f(f(x)) = x$',
      plainEnglish:
        'Think of an involution as a light switch: applying the function twice in a row always brings every input right back to where it started, so $f$ acts as its own undo button ($f = f^{-1}$).',
      tinyExample:
        '$f(x) = -x$ (negating twice returns $x$) and swapping two lockers $1 \\leftrightarrow 2$ while leaving $3$ alone are both involutions.',
    },
    {
      term: 'Even & Odd Function',
      symbol: '$f(-x) = \\pm f(x)$',
      plainEnglish:
        'An even function ($f(-x) = f(x)$) is a mirror image across the vertical $y$-axis, while an odd function ($f(-x) = -f(x)$) flips upside down across the origin $(0,0)$ so equal left and right areas cancel out to zero.',
      tinyExample:
        '$x^2$ and $\\cos x$ are even, whereas $x^3$ and $\\sin x$ are odd (so the symmetric integral $\\int_{-1}^{1} x^3\\,dx = 0$ immediately).',
    },
    {
      term: 'Monotonic vs. Unimodal',
      symbol: '$\\nearrow$, $\\searrow$, or $\\nearrow\\!\\searrow$',
      plainEnglish:
        'A monotonic function moves steadily in one direction (always climbing $\\nearrow$ or always falling $\\searrow$), whereas a unimodal function forms a single hill or valley — rising up to one peak and then falling.',
      tinyExample:
        '$e^x$ is strictly monotonic (always increasing), while a weight-vs-age curve rising until age $50$ and falling after $50$ is unimodal.',
    },
    {
      term: 'Logarithm & Exponential',
      symbol: '$e^x,\\; \\ln x$',
      plainEnglish:
        'Exponentials grow by repeated multiplication (using Euler’s special base $e \\approx 2.718$), and the natural logarithm $\\ln x$ (short for $\\log_e x$) undoes $e^x$ by asking "what power of $e$ equals $x$?" — turning messy multiplications into clean additions.',
      tinyExample:
        '$\\ln(a \\cdot b) = \\ln a + \\ln b$, and swapping base with log-argument gives $2^{\\log_{10} 5} = 5^{\\log_{10} 2}$ always.',
    },
    {
      term: 'Sigmoid Function',
      symbol: '$\\sigma(x) = \\frac{1}{1 + e^{-x}}$',
      plainEnglish:
        'Think of Sigmoid as a smooth S-shaped squashing curve that turns any real score from $-\\infty$ to $+\\infty$ into a valid probability strictly between $0$ and $1$.',
      tinyExample: '$\\sigma(0) = 0.5$, and for every real number $x$, $\\sigma(x) + \\sigma(-x) = 1$.',
    },
    {
      term: 'ReLU (Rectified Linear Unit)',
      symbol: '$\\text{ReLU}(x) = \\max(x, 0)$',
      plainEnglish:
        'In plain words, ReLU is a one-way gate used inside neural networks: negative inputs get clipped flat to $0$, while positive inputs pass straight through unchanged.',
      tinyExample: '$\\text{ReLU}(-3) = 0$ (negative gets clipped) and $\\text{ReLU}(4) = 4$ (positive passes through).',
    },
    {
      term: 'Infinite Geometric Series',
      symbol: '$\\sum_{k=m}^{\\infty} r^k = \\frac{r^m}{1-r}$',
      plainEnglish:
        'The big sigma $\\sum_{k=m}^{\\infty}$ means "add up the terms starting at $k = m$ and going forever." In a geometric series, each term is multiplied by the same constant ratio $r$; whenever $|r| < 1$ (meaning $-1 < r < 1$), the shrinking terms settle to exact $\\frac{\\text{first term}}{1 - r}$.',
      tinyExample: '$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = \\frac{1/2}{1 - 1/2} = 1$.',
    },
    {
      term: 'Convergent vs. Divergent & Harmonic Series',
      symbol: '$\\sum_{n=1}^{\\infty} \\frac{1}{n} = +\\infty$',
      plainEnglish:
        'A series converges if its running totals settle onto one finite number, and diverges if they grow without bound — remember the famous harmonic series ($1 + \\frac{1}{2} + \\frac{1}{3} + \\dots$) diverges to $+\\infty$ even though its individual terms $1/n$ shrink toward $0$.',
      tinyExample:
        '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ converges (exponent $p = 2 > 1$), while $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ diverges ($p = 1$).',
    },
    {
      term: 'Separable vs. Coupled Double Sum',
      symbol: '$\\sum_i \\sum_j a_i b_j$',
      plainEnglish:
        'When the $i$ and $j$ ranges are fixed constants (independent of each other) and the formula splits as $a_i \\cdot b_j$, you can split the 2D sum into two separate 1D sums; if the inner bound depends on $i$ (coupled, like $j \\ge i$), you must sum the inner loop first.',
      tinyExample:
        '$\\sum_{i=0}^{\\infty}\\sum_{j=1}^{\\infty} 2^{-i}3^{-j} = \\left(\\sum_{i=0}^{\\infty}2^{-i}\\right)\\left(\\sum_{j=1}^{\\infty}3^{-j}\\right) = 2 \\times 0.5 = 1$.',
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
      whyStudy:
        'In Data Science and Machine Learning, almost every step of a pipeline is a **transformation**: normalizing raw salaries into $z$-scores, encoding categories into numbers, mapping raw model scores into probabilities, or shuffling indices. Before you trust any transformation, you must answer two practical questions: **(1) What inputs are safe to feed in without crashing?** (the **Domain**), and **(2) Can we cleanly "undo" the transformation to recover the original input?** (an **Inverse / Bijection**). If you standardize house prices before training a model, you MUST be able to invert the scaling to report predictions back in rupees. And in GATE DA, mastering reversible rules and self-inverse swaps directly unlocks discrete counting problems like **GATE DA 2026 Q.33** (counting self-inverse permutations on $4$ elements).',
      groundRules: [
        '**The One-Output Rule (What makes a rule a valid function):** Every allowed input in the Domain MUST produce **exactly one** output — never zero outputs and never two conflicting outputs for the same input. (Two *different* inputs are allowed to share an output, just not one input producing two answers.)',
        '**Why Two Inputs Hitting One Output Breaks Undo (Injective / One-to-One):** If two different inputs ($x = -2$ and $x = +2$) both produce the same output ($4$ under $y = x^2$), then looking at the answer $4$ gives you no way to tell whether you started at $-2$ or $+2$ — so you cannot uniquely reverse the function!',
        '**Why Unused Target Values Also Break Undo (Surjective / Onto):** Every value in the declared target basket (the Codomain) must actually be reachable by some input; otherwise, asking for $f^{-1}(y)$ on an unreachable target value (like $y = -1$ for $y = x^2$) has no answer!',
        '**Equal-Size Finite Shortcut:** If your input set $A$ and target set $B$ have the exact same finite count of items (like $4$ students and $4$ lockers), then "no two students share a locker" automatically forces "every locker gets used" — so on equal-size finite sets, **injective $\\iff$ surjective $\\iff$ bijective** (where $\\iff$ means "means the exact same thing as")!',
      ],
      toyExample: {
        title: '4 Students Assigned to 4 Lockers',
        scenario:
          'Picture $4$ students labeled by the set $A = \\{1, 2, 3, 4\\}$ (curly braces simply list the items inside a set) being assigned to $4$ lockers $B = \\{1, 2, 3, 4\\}$ by a rule $f$. Suppose our rule assigns $f(1) = 2$, $f(2) = 1$, $f(3) = 3$, and $f(4) = 4$. Let’s check every single property slowly:',
        walkthroughSteps: [
          '1. **Valid Function Check:** Each of the $4$ students gets **exactly one** locker. (If student $1$ were assigned both locker $2$ and locker $3$, $f$ would violate the One-Output Rule and wouldn’t even be a function!)',
          '2. **One-to-One (Injective):** No two students share the same locker — distinct inputs ($1, 2, 3, 4$) land on distinct outputs ($2, 1, 3, 4$).',
          '3. **Onto (Surjective):** Every single locker in $B = \\{1, 2, 3, 4\\}$ gets used by someone — so the actual outputs (Range) equal the entire target set (Codomain). Since $f$ is both injective and surjective, it is a **bijection** (100% reversible!).',
          '4. **Apply $f$ Twice (Feed the Output Back In):** To evaluate $f(f(1))$, compute the inside first: $f(1) = 2$, then feed $2$ back into $f$ to get $f(2) = 1$. Let’s check all four: $f(f(1)) = f(2) = 1$, $f(f(2)) = f(1) = 2$, $f(f(3)) = f(3) = 3$, and $f(f(4)) = f(4) = 4$. Every single student lands right back at their starting number in $2$ steps!',
        ],
        ahaMoment:
          'Here is the key insight: a bijection where $f(f(n)) = n$ for every item $n$ is called an **involution** (a self-inverse rule). In plain words, every student either **stays at their own locker** ($f(3) = 3$) or **swaps with one buddy** ($1 \\leftrightarrow 2$) — you can NEVER have a 3-way loop like $1 \\to 2 \\to 3 \\to 1$, because applying that loop twice sends $1 \\to 2 \\to 3 \\neq 1$!',
      },
      theoremAndFormula: {
        statement:
          'A function $f: A \\to B$ (a rule taking inputs from $A$ into target set $B$) is **invertible (bijective)** if and only if it is both **injective** ($f(x_1) = f(x_2) \\implies x_1 = x_2$, where $\\implies$ means "forces / therefore") and **surjective** ($\\text{Range}(f) = B$). On a finite set where both sets have the same size $|A| = |B| = n$, injective $\\iff$ surjective $\\iff$ bijective (where $\\iff$ means "means the exact same thing as").',
        formulaLatex:
          'f^{-1}(y) = x \\iff f(x) = y \\qquad \\text{and} \\qquad f(f(x)) = x \\iff f = f^{-1}',
        plainEnglishDecoding:
          'Read the left formula out loud: "Undoing $y$ gives $x$ ($f^{-1}(y) = x$) means the exact same thing as $f$ sending $x$ to $y$ ($f(x) = y$)." On a real-number graph $y = f(x)$, you can test injectivity visually with the **Horizontal Line Test**: draw any flat horizontal line across the graph. If it crosses the curve twice (like $y = x^2$ at $x = -2$ and $x = +2$, both at height $4$), the function forgets whether $x$ was negative or positive. That is why $y = x^2$ cannot be inverted on $\\mathbb{R}$ (all real numbers on the number line) unless you restrict the allowed inputs to $[0, \\infty)$ — meaning $0$ and all positive numbers, where the square bracket `[` includes $0$.',
        workedMiniExamples: [
          {
            prompt: 'Find the maximal real domain of $f(x) = \\frac{1}{\\sqrt{4 - x^2}}$.',
            solution:
              '**Step 1 (Spot what can break):** Two real-number rules apply here. First, the expression inside a square root ($\\sqrt{\\text{stuff}}$) cannot be negative, so $4 - x^2 \\ge 0$. Second, you can never divide by zero, so the denominator cannot equal $0$, meaning $4 - x^2 \\neq 0$.\n**Step 2 (Combine both rules):** Requiring $4 - x^2 \\ge 0$ AND $4 - x^2 \\neq 0$ forces $4 - x^2$ to be **strictly positive**: $4 - x^2 > 0$.\n**Step 3 (Solve for $x$):** Add $x^2$ to both sides to get $4 > x^2$, i.e. $x^2 < 4$. Which real numbers have a square strictly smaller than $4$? Every number strictly between $-2$ and $+2$: $-2 < x < 2$.\n**Step 4 (Write in interval notation):** We write $x \\in (-2, 2)$ — the symbol $\\in$ means "belongs to", and the **open parentheses** `(` and `)` mean $-2$ and $+2$ themselves are NOT included (plugging $x = 2$ would give $1/\\sqrt{0} = 1/0$, which is illegal!).',
          },
          {
            prompt: 'Count all bijections on $\\{1, 2, 3\\}$ satisfying $f(f(n)) = n$.',
            solution:
              '**Step 1 (Translate the rule):** From our 4-locker toy example, $f(f(n)) = n$ means every number either **stays put** ($f(a) = a$) or **swaps in a pair** ($a \\leftrightarrow b$). No 3-way cycle is allowed!\n**Step 2 (Count possible swap pairs):** With only $3$ items $\\{1, 2, 3\\}$, we can form either **0 swap pairs** or **1 swap pair** ($2$ pairs would require $4$ items).\n**Step 3 (Case 1 — 0 swap pairs):** Every item stays fixed: $f(1) = 1, f(2) = 2, f(3) = 3$. That gives **$1$** function.\n**Step 4 (Case 2 — 1 swap pair):** Choose which $2$ items out of $3$ will swap with each other (the remaining 3rd item automatically stays fixed). The symbol $\\binom{3}{2}$ means "the number of ways to choose $2$ items out of $3$", which equals $\\frac{3 \\times 2}{2} = 3$ possible pairs: $\\{1, 2\\}$, $\\{1, 3\\}$, or $\\{2, 3\\}$. That gives **$3$** functions.\n**Step 5 (Add both cases):** Total $= 1 + 3 = 4$ valid self-inverse bijections.',
          },
        ],
      },
      msqTraps: [
        {
          myth: '$f(x) = x^2$ from $[0, \\infty) \\to \\mathbb{R}$ is invertible because it passes the horizontal line test.',
          reality:
            'Passing the horizontal line test only proves $f$ is **injective** on $[0, \\infty)$ ($0$ and all positive numbers). Because the declared target basket (Codomain) is all of $\\mathbb{R}$ (which includes negative numbers!), $f$ is **NOT surjective** — negative numbers are never produced! You must shrink the codomain to $[0, \\infty)$ before $f$ becomes invertible.',
          counterExample:
            'The target value $y = -1 \\in \\mathbb{R}$ has no real input $x \\ge 0$ satisfying $x^2 = -1$, so $f^{-1}(-1)$ does not exist.',
        },
        {
          myth: 'If the composite function $f(g(x))$ is injective, then both $f$ and $g$ must be injective.',
          reality:
            'Only the **inner** function $g$ is guaranteed to be injective! Why? If two inputs collided inside $g$ ($g(x_1) = g(x_2)$), then feeding them into $f$ would still give identical outputs ($f(g(x_1)) = f(g(x_2))$). By contrast, the outer function $f$ only needs to be injective on the values that $g$ *actually outputs* (the range of $g$), not everywhere!',
          counterExample:
            'Let $g(x) = e^x$ ($\\mathbb{R} \\to \\mathbb{R}$, whose outputs are always positive) and $f(y) = y^2$ ($\\mathbb{R} \\to \\mathbb{R}$). Then $f(g(x)) = (e^x)^2 = e^{2x}$ IS injective everywhere, even though $f(y) = y^2$ fails injectivity on negative inputs!',
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
      whyStudy:
        'When a GATE exam hands you an ugly integral like $\\int_{-1}^{1} x^3 \\cos(x)\\,dx$, or asks a word problem about a curve whose algebraic formula is **not even given**, trying to brute-force algebra wastes 5 minutes — or is literally impossible! Recognizing a curve’s **shape** (Is it mirror-symmetric? Does it flip upside down? Does it climb steadily, or rise to one peak and fall?) lets you kill tough GATE integrals, Probability expectations (like $E[X^3] = 0$), and inequalities in **10 seconds flat** without doing a single page of algebra.',
      groundRules: [
        '**Signed Area Rule:** A definite integral $\\int_a^b f(x)\\,dx$ adds area *above* the $x$-axis as positive ($+$) and area *below* the $x$-axis as negative ($-$). If a function is odd ($f(-x) = -f(x)$) on a symmetric window $[-L, L]$ (extending the exact same distance $L$ left and right of $0$), every positive slice on the right has an exact twin negative slice on the left — so they MUST cancel out to **$0$**!',
        '**Parity Multiplication Acts Just Like Plus & Minus Signs:** Treat **Even** as $(+)$ (replacing $x$ with $-x$ keeps the sign unchanged) and **Odd** as $(-)$ (replacing $x$ with $-x$ flips the sign). Since $(-) \\times (-) = (+)$ and $(+) \\times (-) = (-)$, multiplying two odd functions always gives an **even** function, and multiplying even $\\times$ odd always gives an **odd** function.',
        '**Strict Monotonicity Means No Repeat Heights:** On any stretch where a curve strictly climbs uphill (always going higher, never flat or dipping) or strictly goes downhill, it can NEVER hit the same height twice. Therefore, on a single-peak (**unimodal**) mountain, two different points at the exact same height MUST sit on opposite sides of the peak!',
      ],
      toyExample: {
        title: 'Two Brothers Weighing the Exact Same on a Rise-Then-Fall Curve',
        scenario:
          'Suppose a person’s body weight $W(a)$ strictly increases with age $a$ from birth up to age $50$, reaches its single peak at $a = 50$, and strictly decreases after age $50$. Now suppose two brothers have different ages $a_1 < a_2$, yet today they weigh the exact same: $W(a_1) = W(a_2)$. Pause and ask yourself: could both brothers be in their 30s?',
        walkthroughSteps: [
          '1. **Check the left uphill stretch ($0$ to $50$):** If both brothers were age $50$ or younger ($a_1 < a_2 \\le 50$), then because weight strictly increases uphill, the older brother MUST weigh strictly more: $W(a_1) < W(a_2)$. That contradicts $W(a_1) = W(a_2)$ — impossible!',
          '2. **Check the right downhill stretch ($50$ onward):** If both brothers were age $50$ or older ($50 \\le a_1 < a_2$), then because weight strictly decreases downhill, the older brother MUST weigh strictly less: $W(a_1) > W(a_2)$. Also contradicts $W(a_1) = W(a_2)$ — impossible!',
          '3. **Only one possibility survives:** The ONLY way a horizontal line (constant weight) can cut a single-peak (unimodal) mountain twice is with the younger brother on the left climb and the older brother on the right descent: **$a_1 < 50 < a_2$**!',
          '4. **Watch out for fake symmetry:** Notice we were NEVER told the climb before $50$ and the drop after $50$ have the same slope — so you CANNOT claim $a_1 + a_2 = 100$!',
        ],
        ahaMoment:
          'Notice how you didn’t need a single algebraic formula for $W(a)$! That exact puzzle was a **2-mark GATE DA 2025 question**, and applying Ground Rule 3 (strict monotonicity means no repeat heights on one side) solves it calmly in 10 seconds.',
      },
      theoremAndFormula: {
        statement:
          '1) **Even Function:** $f(-x) = f(x)$ for every $x$ — mirror-symmetric across the vertical $y$-axis (classic examples: $x^2$, $|x|$, $\\cos x$, and the bell curve $e^{-x^2/2}$).\n2) **Odd Function:** $f(-x) = -f(x)$ for every $x$ — $180^\\circ$ rotational symmetry through the origin $(0, 0)$ (classic examples: $x$, $x^3$, $\\sin x$, and $\\sinh x = \\frac{e^x - e^{-x}}{2}$).\n3) **Product Parity Rule:** Treat Even as $(+)$ and Odd as $(-)$: Even $\\times$ Odd $=$ Odd, Odd $\\times$ Odd $=$ Even, and Even $\\times$ Even $=$ Even.',
        formulaLatex:
          '\\text{If } f \\text{ is odd on } [-L, L]: \\quad f(0) = 0 \\quad \\text{and} \\quad \\int_{-L}^{L} f(x)\\,dx = 0',
        plainEnglishDecoding:
          'First, why MUST any odd function defined at $0$ satisfy $f(0) = 0$? Plug $x = 0$ into $f(-x) = -f(x)$: since $-0 = 0$, you get $f(0) = -f(0)$, which forces $2f(0) = 0$ and therefore $f(0) = 0$! Second, think of the closed symmetric interval $[-L, L]$ (every number from $-L$ to $+L$, square brackets including endpoints) like a balanced seesaw: every positive patch of area on the right side $[0, L]$ has an identical negative mirror patch on the left side $[-L, 0]$, so the total signed area cancels to **exact zero** with zero integration work!',
        workedMiniExamples: [
          {
            prompt: 'Without integrating, evaluate $\\int_{-1}^{1} x^3 \\cos(x)\\,dx$.',
            solution:
              '**Step 1 (Check the parity of each factor):** Test $-x$ in $x^3$: $(-x)^3 = -x^3$, so $x^3$ is **Odd $(-)$**. Test $-x$ in $\\cos(x)$: $\\cos(-x) = \\cos(x)$, so $\\cos(x)$ is **Even $(+)$**.\n**Step 2 (Multiply their signs):** Odd $(-)$ $\\times$ Even $(+)$ $=$ **Odd $(-)$**. So the combined integrand $f(x) = x^3 \\cos(x)$ is an odd function.\n**Step 3 (Check the interval):** The limits go from $-1$ to $+1$, which is a symmetric window $[-L, L]$ around $0$ (with $L = 1$).\n**Step 4 (Apply the Signed Area Rule):** Positive area on $[0, 1]$ and negative area on $[-1, 0]$ cancel completely, so the integral is immediately **$0$**!',
          },
          {
            prompt: 'Classify $h(x) = \\ln\\!\\left(\\sqrt{x^2 + 1} + x\\right)$ as even, odd, or neither.',
            solution:
              '**Step 1 (Plug in $-x$):** Replace every $x$ with $-x$: $h(-x) = \\ln\\!\\left(\\sqrt{(-x)^2 + 1} + (-x)\\right) = \\ln\\!\\left(\\sqrt{x^2 + 1} - x\\right)$ (because $(-x)^2 = x^2$).\n**Step 2 (Add $h(-x) + h(x)$ using the log-product rule):** Recall $\\ln A + \\ln B = \\ln(A \\cdot B)$. Adding gives:\n$h(-x) + h(x) = \\ln\\!\\Big(\\big(\\sqrt{x^2 + 1} - x\\big)\\big(\\sqrt{x^2 + 1} + x\\big)\\Big)$.\n**Step 3 (Expand $(p - q)(p + q) = p^2 - q^2$):** With $p = \\sqrt{x^2 + 1}$ and $q = x$, the inside simplifies cleanly:\n$(\\sqrt{x^2 + 1})^2 - x^2 = (x^2 + 1) - x^2 = 1$.\n**Step 4 (Finish):** Thus $h(-x) + h(x) = \\ln(1) = 0$ (since $e^0 = 1$). Subtract $h(x)$ from both sides to get $h(-x) = -h(x)$ — proving $h(x)$ is **Odd**!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Every function is either even or odd.',
          reality:
            'Most everyday functions (like $e^x$ or $x + 1$) are **neither** even nor odd! However, EVERY function $f(x)$ defined on $\\mathbb{R}$ can be uniquely split into an Even part plus an Odd part: $f(x) = \\underbrace{\\frac{f(x)+f(-x)}{2}}_{\\text{Even}} + \\underbrace{\\frac{f(x)-f(-x)}{2}}_{\\text{Odd}}$.',
          counterExample:
            '$e^x$ is neither even nor odd ($e^{-1} \\neq e^1$ and $e^{-1} \\neq -e^1$), yet $e^x = \\cosh x \\text{ (even)} + \\sinh x \\text{ (odd)}$.',
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
      whyStudy:
        'Real computers literally **cannot** multiply $1{,}000$ small probabilities together without crashing to `0.0` (numerical underflow) — which would completely break Machine Learning training! Taking the natural logarithm ($\\ln$) rescues **Maximum Likelihood Estimation (MLE)** and **Cross-Entropy Loss** by turning fragile products into clean sums without changing which model wins. Meanwhile, **Sigmoid ($\\sigma$)** squashes any raw score into a valid probability between $0$ and $1$ (Logistic Regression), and **ReLU** serves as the fast, non-saturating building block of modern neural networks. Master these $4$ shapes today and every ML formula in Week 7 will feel like second nature.',
      groundRules: [
        '**Exponents and Logs Are Exact Undo Buttons:** $e^x$ (where $e \\approx 2.718$ is Euler’s natural growth base) and $\\ln(x)$ (short for $\\log_e(x)$, asking "what power of $e$ equals $x$?") completely undo each other: $e^{\\ln u} = u$ and $\\ln(e^x) = x$. Because $e^x > 0$ for every real number $x$, its undo button $\\ln(u)$ ONLY accepts **strictly positive** inputs ($u > 0$) — $\\ln(0)$ and $\\ln(-5)$ do not exist in real numbers!',
        '**Strictly Increasing Functions Never Change Who Wins:** Because $\\ln(x)$ strictly goes uphill everywhere on $(0, \\infty)$, whenever $A > B > 0$, we are guaranteed $\\ln(A) > \\ln(B)$ too! That is why maximizing a messy product $\\prod p_i$ (the big $\\prod$ symbol means "multiply all $p_i$ together") gives the exact same winner as maximizing the clean sum $\\sum \\ln(p_i)$.',
        '**Log Turns Multiplication Into Addition & Powers Into Multipliers:** For any positive $a, b > 0$, $\\ln(a \\cdot b) = \\ln a + \\ln b$ and $\\ln(a^k) = k \\cdot \\ln a$. This single rule immediately explains the base-swap identity $a^{\\log_c b} = b^{\\log_c a}$: take $\\log_c$ of both sides and both collapse to the exact same product $(\\log_c a)(\\log_c b)$!',
      ],
      toyExample: {
        title: 'Why Multiplying 1,000 Probabilities Breaks Computers (and How $\\ln$ Saves ML)',
        scenario:
          'Imagine flipping a biased coin whose Heads probability is $0.1$, and seeing Heads $1{,}000$ times in a row. The joint probability is $P = (0.1)^{1000} = 10^{-1000}$ (a decimal point followed by $999$ zeros and a $1$!). Any standard 64-bit computer can only store positive numbers down to about $10^{-308}$, so $10^{-1000}$ instantly rounds down to `0.0` — wiping out all gradient information! Watch how taking $\\log_{10}$ rescues us:',
        walkthroughSteps: [
          '1. **Turn the product into a sum:** Using $\\log_{10}(a \\cdot b) = \\log_{10}(a) + \\log_{10}(b)$ across all $1{,}000$ terms gives $\\log_{10}(0.1 \\times 0.1 \\times \\dots \\times 0.1) = \\log_{10}(0.1) + \\dots + \\log_{10}(0.1)$. Since $0.1 = 10^{-1}$, each term is just $-1$, so the total is $1000 \\times (-1) = -1000$ — a completely harmless, ordinary number for a computer!',
          '2. **Keep the exact same winner:** Because $\\ln(x)$ is **strictly increasing**, whenever one model beats another ($P_1 > P_2 > 0$), its log-probability also beats the other ($\\ln P_1 > \\ln P_2$). So maximizing the messy product $\\prod p_i$ finds the **exact same optimal parameter** as maximizing the clean sum $\\sum \\ln p_i$!',
          '3. **Spot the magic base-swap symmetry:** Compare $x = 2^{\\log_{10} 5}$ against $y = 5^{\\log_{10} 2}$. Take $\\log_{10}$ of both using the power-to-multiplier rule: $\\log_{10}(x) = (\\log_{10} 5)(\\log_{10} 2)$ and $\\log_{10}(y) = (\\log_{10} 2)(\\log_{10} 5)$. Because multiplication order doesn’t matter and $\\log_{10}$ is one-to-one, $x$ and $y$ are **always equal**!',
        ],
        ahaMoment:
          'That single trick explains why Machine Learning runs on logarithms: logs turn **products into sums** and **powers into multipliers** while leaving the exact location of every maximum and minimum untouched — which is the entire reason Log-Likelihood and Cross-Entropy Loss exist!',
      },
      theoremAndFormula: {
        statement:
          'Key identities & ML activation definitions across GATE DA (valid for all strictly positive $a, b > 0$ and any real number $x \\in \\mathbb{R}$):',
        formulaLatex:
          'a^{\\log_c b} = b^{\\log_c a}, \\qquad \\sigma(x) = \\frac{1}{1 + e^{-x}} \\in (0,1), \\qquad \\text{ReLU}(x) = \\max(x, 0) = \\frac{x + |x|}{2}',
        plainEnglishDecoding:
          'Picture the two ML activation shapes clearly in your head:\n• **Sigmoid $\\sigma(x) = \\frac{1}{1 + e^{-x}}$:** Because $e^{-x}$ is always strictly positive, the denominator $1 + e^{-x}$ is always strictly greater than $1$, which forces $\\sigma(x)$ strictly inside $(0, 1)$ (between $0$ and $1$, never actually hitting $0$ or $1$). At $x = 0$, $e^0 = 1$, so $\\sigma(0) = \\frac{1}{1 + 1} = 0.5$, and it obeys the mirror symmetry $\\sigma(-x) = 1 - \\sigma(x)$.\n• **ReLU $\\max(x, 0) = \\frac{x + |x|}{2}$:** Stays completely flat at $0$ for every negative input $x \\le 0$ (test $x = -3$: $\\frac{-3 + 3}{2} = 0$), and acts as the diagonal line $y = x$ for every positive input $x > 0$ (test $x = 4$: $\\frac{4 + 4}{2} = 4$) — simple, fast, and never saturating on the positive side.',
        workedMiniExamples: [
          {
            prompt: 'Simplify $\\sigma(x) + \\sigma(-x)$ for any real number $x$.',
            solution:
              '**Step 1 (Write both pieces):** Substitute $x$ and $-x$ into the definition: $\\sigma(x) = \\frac{1}{1 + e^{-x}}$ and $\\sigma(-x) = \\frac{1}{1 + e^{-(-x)}} = \\frac{1}{1 + e^{x}}$.\n**Step 2 (Match the denominators):** Multiply the top and bottom of the second fraction by $e^{-x}$ (multiplying by $\\frac{e^{-x}}{e^{-x}} = 1$ never changes the value): $\\frac{1}{1 + e^{x}} \\cdot \\frac{e^{-x}}{e^{-x}} = \\frac{e^{-x}}{e^{-x} + e^{x} \\cdot e^{-x}} = \\frac{e^{-x}}{e^{-x} + 1}$ (because $e^{x} \\cdot e^{-x} = e^{0} = 1$).\n**Step 3 (Add the two fractions):** Now both share denominator $(1 + e^{-x})$:\n$\\sigma(x) + \\sigma(-x) = \\frac{1}{1 + e^{-x}} + \\frac{e^{-x}}{1 + e^{-x}} = \\frac{1 + e^{-x}}{1 + e^{-x}} = 1$.\n**Step 4 (Bonus symmetry insight):** Rewriting $\\sigma(-x) = 1 - \\sigma(x)$ and subtracting $0.5$ from both sides gives $\\sigma(-x) - 0.5 = -(\\sigma(x) - 0.5)$ — proving $\\sigma(x) - 0.5$ is an **odd** function!',
          },
          {
            prompt: 'For real numbers $m > n > 0$, compare $x = n^{\\log_{10} m}$ and $y = m^{\\log_{10} n}$.',
            solution:
              '**Step 1 (Verify logs are legal):** Since $m > n > 0$, both $x$ and $y$ are strictly positive, so taking $\\log_{10}$ of both sides is 100% valid.\n**Step 2 (Bring the exponent down in $x$):** Using the power-to-multiplier rule $\\log_{10}(A^k) = k \\cdot \\log_{10}(A)$:\n$\\log_{10}(x) = \\log_{10}\\!\\left(n^{\\log_{10} m}\\right) = (\\log_{10} m) \\cdot (\\log_{10} n)$.\n**Step 3 (Do the exact same for $y$):**\n$\\log_{10}(y) = \\log_{10}\\!\\left(m^{\\log_{10} n}\\right) = (\\log_{10} n) \\cdot (\\log_{10} m)$.\n**Step 4 (Conclude):** Both expressions are the exact same product, so $\\log_{10}(x) = \\log_{10}(y)$. Because $\\log_{10}$ is injective (one-to-one on positive numbers), equal logs force **$x = y$ always!** (Tested directly in GATE DA 2026 Q.4.)',
          },
        ],
      },
      msqTraps: [
        {
          myth: '$\\ln(x^2) = 2\\ln(x)$ for all nonzero real numbers $x \\in \\mathbb{R}$.',
          reality:
            'The true identity is $\\ln(x^2) = 2\\ln|x|$ (with absolute value bars)! Squaring a negative number like $x = -e$ makes $x^2 = e^2 > 0$, so the left-hand side $\\ln(x^2)$ works fine — but without absolute value bars, the right-hand side $2\\ln(x)$ tries to feed a negative number into $\\ln$, which is illegal!',
          counterExample:
            'Test $x = -e$: left side gives $\\ln((-e)^2) = \\ln(e^2) = 2$, whereas right side $2\\ln(-e)$ does not exist in $\\mathbb{R}$.',
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
      whyStudy:
        'At first glance, adding up **infinitely many** positive numbers sounds like it should explode to infinity — yet surprisingly often, an endless list of shrinking numbers adds up to one clean, exact fraction (like $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = 1$). This exact skill shows up across all of GATE DA: proving that discrete Probability distributions (like the Geometric random variable) sum to $1$, totaling the work across levels of Divide-and-Conquer algorithms (Merge Sort / Binary Search), and cracking direct GATE 2024 & GATE 2026 infinite series questions in under 30 seconds!',
      groundRules: [
        '**How an Infinite Sum Can Be Finite:** Adding infinitely many numbers settles to one finite number ONLY when the remaining tail shrinks all the way to $0$. For geometric terms $r^k$ (where each step multiplies by the same constant ratio $r$), the tail vanishes if and only if $|r| < 1$ — meaning $r$ sits strictly between $-1$ and $+1$ ($-1 < r < 1$).',
        '**Why the Formula Is Always $\\text{First Term} / (1 - r)$:** Every geometric series starting at $k = m$ is simply its **First Term** ($r^m$) factored in front of $(1 + r + r^2 + r^3 + \\dots)$, and that base tail always equals $\\frac{1}{1 - r}$. Changing the starting index from $k = 0$ to $k = 1$ or $k = 2$ never changes $(1 - r)$ — it simply changes the **First Term** on top!',
        '**Separable vs. Coupled Double Sums:** Think of a double sum $\\sum_i \\sum_j$ as adding every cell of a 2D spreadsheet grid. If $i$ and $j$’s ranges are fixed constants (they never mention each other) **AND** the formula splits as $a_i \\cdot b_j$, the grid is a clean **rectangle** whose total is just $(\\text{sum of row factors}) \\times (\\text{sum of column factors})$. If the inner loop’s start depends on $i$ (like $j \\ge i$), the grid is a **triangle** — you MUST collapse the inner $j$-sum first!',
      ],
      toyExample: {
        title: 'Eating Half of What Remains of a Square Cake Forever',
        scenario:
          'Picture a square $1 \\times 1$ cake (total area $= 1$). On bite $1$ you eat $\\frac{1}{2}$ of the cake; on bite $2$ you eat half of what is left ($\\frac{1}{4}$); on bite $3$ you eat $\\frac{1}{8}$, then $\\frac{1}{16}$, and so on forever. Watch step by step how an infinite list of pieces adds up to one exact finite number:',
        walkthroughSteps: [
          '1. **Track the leftover crumb after $N$ bites:** After $1$ bite, $\\frac{1}{2}$ remains. After $2$ bites, $\\frac{1}{4} = (\\frac{1}{2})^2$ remains. After $N$ bites, the leftover crumb has area $(\\frac{1}{2})^N$, so the total eaten so far is $1 - (\\frac{1}{2})^N$.',
          '2. **Let $N$ grow forever ($N \\to \\infty$):** Multiplying by $\\frac{1}{2}$ over and over shrinks $(\\frac{1}{2})^N$ all the way to $0$ (already after $20$ bites it is less than one-millionth!). Therefore, the eaten total settles to $1 - 0 = 1$, meaning $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = 1$!',
          '3. **Watch what happens if we start one step earlier at $k = 0$:** Adding the $k = 0$ term $(1/2)^0 = 1$ in front gives $1 + \\frac{1}{2} + \\frac{1}{4} + \\dots = 1 + 1 = 2$. Notice how shifting the starting index from $k = 1$ to $k = 0$ **doubles** the answer!',
        ],
        ahaMoment:
          'Here is the habit that protects you from GATE’s #1 trap: NEVER memorize "$1/(1-r)$" blindly — always say **"$\\frac{\\text{FIRST TERM}}{1 - \\text{RATIO}}$"**! That way, whether a sum starts at $k = 0$, $k = 1$, or $k = 2$, you always plug the starting index in first and nail the exact numerator.',
      },
      theoremAndFormula: {
        statement:
          'The big sigma notation $\\sum_{k=m}^{\\infty} r^k$ means "add up $r^k$ starting at $k = m$, then $k = m+1$, $k = m+2$, and going forever." Whenever $|r| < 1$ ($-1 < r < 1$), this infinite geometric series converges to First Term divided by $(1 - r)$. Moreover, if a double sum’s formula factors cleanly into $a_i \\cdot b_j$ AND the **summation limits of $i$ and $j$ are independent constants** (neither mentions the other), the double sum splits into the product of two single sums!',
        formulaLatex:
          '\\sum_{k=m}^{\\infty} r^k = \\frac{r^m}{1 - r} \\;(|r|<1), \\qquad \\sum_{i=m_1}^{\\infty} \\sum_{j=m_2}^{\\infty} a_i b_j = \\left(\\sum_{i=m_1}^{\\infty} a_i\\right)\\!\\left(\\sum_{j=m_2}^{\\infty} b_j\\right)',
        plainEnglishDecoding:
          'Think of $\\sum_i \\sum_j a_i b_j$ as just the ordinary distributive law you learned in school, stretched to infinity: expanding $(a_0 + a_1 + a_2 + \\dots)(b_0 + b_1 + b_2 + \\dots)$ multiplies every $a_i$ with every $b_j$ once! Just pause for two seconds and check the bottom indices first — if the inner sum starts at $j = i$, the grid is a triangle (coupled), so you MUST evaluate the inner $j$-loop first while treating $i$ as a fixed constant.',
        workedMiniExamples: [
          {
            prompt: 'Evaluate $\\sum_{i=0}^{\\infty} \\sum_{j=1}^{\\infty} 2^{-i} 3^{-j}$ (GATE DA 2026 Q.35).',
            solution:
              '**Step 1 (Rewrite negative powers as fractions):** Remember $2^{-i} = (1/2)^i$ and $3^{-j} = (1/3)^j$.\n**Step 2 (Check if the grid is a rectangle):** The outer loop runs $i = 0, 1, 2, \\dots$ and the inner loop runs $j = 1, 2, 3, \\dots$ — neither limit mentions the other variable, AND the formula is a product $(1/2)^i \\cdot (1/3)^j$. So split it immediately into two 1D sums:\n$\\left(\\sum_{i=0}^{\\infty} (1/2)^i\\right) \\times \\left(\\sum_{j=1}^{\\infty} (1/3)^j\\right)$.\n**Step 3 (Evaluate the $i$-sum):** Plug starting index $i = 0$ to get First Term $= (1/2)^0 = 1$, ratio $r = 1/2$. Sum $= \\frac{1}{1 - 1/2} = \\frac{1}{1/2} = 2$.\n**Step 4 (Evaluate the $j$-sum):** Plug starting index $j = 1$ to get First Term $= (1/3)^1 = 1/3$, ratio $r = 1/3$. Sum $= \\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3} = \\frac{1}{2}$.\n**Step 5 (Multiply):** $2 \\times \\frac{1}{2} = 1$.',
          },
          {
            prompt: 'Evaluate the coupled sum $\\sum_{i=0}^{\\infty} \\sum_{j=i}^{\\infty} 2^{-i} 3^{-j}$.',
            solution:
              '**Step 1 (Spot the coupling):** Look at the inner bottom index: $j$ starts at $i$, NOT a constant! This is a triangle grid — do NOT split the two sums yet.\n**Step 2 (Freeze $i$ and pull out $2^{-i}$):** While $j$ runs from $i$ to $\\infty$, $2^{-i}$ does not change with $j$, so factor it outside the inner sum: $2^{-i} \\sum_{j=i}^{\\infty} (1/3)^j$.\n**Step 3 (Collapse the inner $j$-sum):** Plug starting index $j = i$ to get First Term $= (1/3)^i = 3^{-i}$, with ratio $r = 1/3$:\n$\\sum_{j=i}^{\\infty} (1/3)^j = \\frac{3^{-i}}{1 - 1/3} = \\frac{3^{-i}}{2/3} = \\frac{3}{2} \\cdot 3^{-i}$.\n**Step 4 (Combine with $2^{-i}$):** $2^{-i} \\cdot \\frac{3}{2} \\cdot 3^{-i} = \\frac{3}{2} \\cdot (2 \\cdot 3)^{-i} = \\frac{3}{2} \\cdot (1/6)^i$.\n**Step 5 (Evaluate the outer $i$-sum from $i = 0$ to $\\infty$):** First Term at $i = 0$ is $(1/6)^0 = 1$, ratio $r = 1/6$:\n$\\frac{3}{2} \\cdot \\frac{1}{1 - 1/6} = \\frac{3}{2} \\cdot \\frac{1}{5/6} = \\frac{3}{2} \\cdot \\frac{6}{5} = \\frac{9}{5} = 1.8$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If the individual terms shrink to zero ($a_n \\to 0$ as $n \\to \\infty$), then the infinite sum $\\sum_{n=1}^{\\infty} a_n$ always converges to a finite number.',
          reality:
            'Terms shrinking to $0$ is a required entry ticket (necessary), NEVER a guarantee (not sufficient)! For a $p$-series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$, the sum settles to a finite number if and only if $p > 1$.',
          counterExample:
            'The famous Harmonic series $1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\dots = \\sum_{n=1}^{\\infty} \\frac{1}{n}$ grows all the way to $+\\infty$ (slowly, like $\\ln n$) even though its terms $1/n$ shrink to $0$! (This $\\ln n$ growth reappears in Randomized Quicksort & the Coupon Collector problem.)',
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
            'Rewrite $2^{-i} = (1/2)^i$ and $3^{-j} = (1/3)^j$. Since the allowed values $i \\in \\{0, 1, 2, \\dots\\}$ and $j \\in \\{1, 2, 3, \\dots\\}$ never mention each other (clean rectangular grid), split the double sum into two separate brackets: $$S = \\left(\\sum_{i=0}^{\\infty} \\left(\\frac{1}{2}\\right)^i\\right) \\times \\left(\\sum_{j=1}^{\\infty} \\left(\\frac{1}{3}\\right)^j\\right)$$',
        },
        {
          label: 'Apply First Term / (1 - Ratio) to each bracket carefully',
          detail:
            'First bracket (plug starting index $i = 0$ to get First Term $= (1/2)^0 = 1$, ratio $r = 1/2$): $\\frac{1}{1 - 1/2} = \\frac{1}{1/2} = 2$.\nSecond bracket (plug starting index $j = 1$ to get First Term $= (1/3)^1 = 1/3$, ratio $r = 1/3$): $\\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3} = \\frac{1}{2}$.',
        },
        {
          label: 'Multiply the two results',
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
      directWeaponLatex: 'a^{\\log_c b} = b^{\\log_c a} \\quad (\\text{for all } a, b > 0)',
      instantRule: 'Swap the outer base $a$ and the log-argument $b$ freely without changing the value (valid for every positive $a, b > 0$)!',
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
        '1. **Freeze $i$ and pull $\\frac{1}{2^i}$ outside the inner sum:** Since $\\frac{1}{2^i}$ does not change while $j$ runs from $i$ to $\\infty$, we first evaluate the inner geometric tail over $j = i, i+1, \\dots$ (plugging $j = i$ gives First Term $= (1/3)^i$, ratio $r = 1/3$): $$\\sum_{j=i}^{\\infty} \\left(\\frac{1}{3}\\right)^j = \\frac{(1/3)^i}{1 - 1/3} = \\frac{(1/3)^i}{2/3} = \\frac{3}{2} \\cdot \\left(\\frac{1}{3}\\right)^i$$',
        '2. **Combine the powers of $i$:** Multiply back by $\\frac{1}{2^i}$: $\\frac{1}{2^i} \\cdot \\frac{3}{2} \\cdot \\frac{1}{3^i} = \\frac{3}{2} \\cdot \\left(\\frac{1}{6}\\right)^i$ (since $2^i \\cdot 3^i = 6^i$).',
        '3. **Evaluate the outer sum over $i = 1, 2, \\dots$:** Plug starting index $i = 1$ to get First Term $= 1/6$, ratio $r = 1/6$: $$S = \\frac{3}{2} \\sum_{i=1}^{\\infty} \\left(\\frac{1}{6}\\right)^i = \\frac{3}{2} \\cdot \\frac{1/6}{1 - 1/6} = \\frac{3}{2} \\cdot \\frac{1/6}{5/6} = \\frac{3}{2} \\cdot \\frac{1}{5} = \\frac{3}{10} = 0.30$$',
      ],
      directShortcutUsed: 'Coupled bound $j \\ge i \\implies$ collapse inner geometric tail $\\frac{r_2^i}{1-r_2}$ first, then sum $(r_1 r_2)^i$.',
    },
  ],
}

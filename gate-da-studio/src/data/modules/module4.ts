import type { ChapterData } from '../../types/curriculum'

export const MODULE_4_CHAPTERS: ChapterData[] = [
  {
    id: 'prob3-ch1',
    number: 1,
    title: 'Expectation, Indicator RVs & Linearity of Expectation',
    shortTitle: 'Expectation & Indicators',
    estimatedHours: 3.5,
    dayLabel: 'Week 2 · Day 4',
    tagline:
      'Let’s picture Expectation as a physical seesaw balance, compute $E[g(X)]$ straight from $X$ via LOTUS without building a new PDF, and unleash $0/1$ Indicator RVs plus Linearity of Expectation to crack dependent counting and streak recurrences in under 30 seconds.',
    syllabusMapping: [
      'Expectation of discrete and continuous random variables',
      'Expectation of functions of random variables (LOTUS) & Linearity of Expectation',
      'Indicator random variables and first-step conditional expectation recurrences',
    ],
    whatIsImportant: [
      'Linearity $E[aX + bY + c] = aE[X] + bE[Y] + c$ holds ALWAYS — even when $X$ and $Y$ are heavily dependent',
      'Indicator RV decomposition $S = \\sum I_k$ with $E[I_k] = P(A_k)$ for matches, inversions, and draws with/without replacement (GATE DA 2025 Q.61)',
      'LOTUS $E[g(X)] = \\sum g(x)p(x)$ or $\\int g(x)f(x)\\,dx$ directly, plus $E[g(X)] \\neq g(E[X])$ in general',
      'First-step state equations for consecutive-pattern waiting times (GATE DA 2024 Q.36)',
    ],
    whatIsNotImportant: [
      'Measure-theoretic Lebesgue integral definitions of $\\mathbb{E}[X]$',
      'Moment Generating Functions (MGFs) for esoteric transforms — standard distribution moments + linearity handle GATE DA',
      'Riemann–Stieltjes integral notation',
    ],
    inboundStream: 'Module 2–3 Discrete PMFs, Continuous PDFs/CDFs & Symmetry Integrals',
    outboundStream: [
      'Module 4 Ch.2 Variance, Chebyshev/Markov Bounds & Law of Total Expectation (EVE)',
      'Module 4 Ch.3 Covariance $E[XY] - E[X]E[Y]$ & Correlation',
      'Week 4 Quicksort Expected Time ($O(n \\log n)$ via Indicator RVs, GATE DA 2026 Q.15)',
      'Week 7 Bias-Variance Tradeoff & SGD Unbiased Gradient Estimates',
    ],
    glossary: [
      {
        term: 'Expectation (Expected Value)',
        symbol: '$E[X]$',
        plainEnglish:
          'The probability-weighted balance point of a random variable—imagine placing weights $p_X(x)$ along a number-line seesaw and finding the exact spot where it balances level.',
        tinyExample: 'With mass $\\frac{1}{2}$ at $1$, $\\frac{1}{3}$ at $2$, and $\\frac{1}{6}$ at $6$, $E[X] = \\frac{13}{6} \\approx 2.17$.',
      },
      {
        term: 'LOTUS (Law of the Unconscious Statistician)',
        symbol: '$E[g(X)] = \\sum g(x)p_X(x)$',
        plainEnglish:
          'A wonderful shortcut that lets you compute the average of any transformed quantity $g(X)$ directly against $X$’s own PMF or PDF—no need to derive a brand-new distribution for $Y = g(X)$!',
        tinyExample: 'For $X \\sim U(0, 2)$, $E[X^2] = \\int_0^2 x^2 \\cdot \\frac{1}{2}\\,dx = \\frac{4}{3}$ directly.',
      },
      {
        term: 'Tail-Sum Formula',
        symbol: '$E[X] = \\int_0^{\\infty} P(X > x)\\,dx$',
        plainEnglish:
          'For any non-negative random variable ($X \\ge 0$), integrating (or summing) its survival probability $P(X > x)$ gives the exact mean $E[X]$ without ever multiplying by $x$.',
        tinyExample: 'For $\\text{Exp}(\\lambda)$, $E[X] = \\int_0^{\\infty} e^{-\\lambda x}\\,dx = \\frac{1}{\\lambda}$.',
      },
      {
        term: 'Jensen’s Inequality',
        symbol: '$E[g(X)] \\ge g(E[X])$',
        plainEnglish:
          'For any bowl-shaped (convex) curve like $x^2$, $e^x$, or $1/x$ on $(0,\\infty)$, averaging the outputs always lands at or above plugging the average in—which is why $E[X^2] \\ge (E[X])^2$ always holds!',
        tinyExample: 'For $X \\in \\{-1, +1\\}$ equally likely, $E[X^2] = 1 > (E[X])^2 = 0$.',
      },
      {
        term: 'Linearity of Expectation',
        symbol: '$E[\\sum a_i X_i + b] = \\sum a_i E[X_i] + b$',
        plainEnglish:
          'The single most forgiving rule in all of probability: expectations always split across sums and pull out constants—even when the variables are deeply tangled and dependent!',
        tinyExample: 'In a random permutation of $50$ hats, $E[\\text{matches}] = \\sum_{k=1}^{50} \\frac{1}{50} = 1$, despite dependence.',
      },
      {
        term: 'Indicator Random Variable',
        symbol: '$\\mathbf{1}_A \\in \\{0, 1\\}$',
        plainEnglish:
          'A tiny binary light switch that turns ON ($1$) when event $A$ happens and stays OFF ($0$) otherwise. Stacking indicators turns complicated counting problems into effortless sums.',
        tinyExample: 'Let $I_k = 1$ if guest $k$ gets their own hat; then total matches $= I_1 + I_2 + \\dots + I_n$.',
      },
      {
        term: 'Fundamental Bridge',
        symbol: '$E[\\mathbf{1}_A] = P(A)$',
        plainEnglish:
          'The bridge connecting probability to expectation: the average value of a $0/1$ indicator switch is literally just the probability that the switch turns ON.',
        tinyExample: 'If a single draw is black with prob $2/3$, then its indicator satisfies $E[I_k] = 2/3$.',
      },
      {
        term: 'Symmetric Zero-Mean Cancellation',
        symbol: '$E[X^{2k+1}] = 0$',
        plainEnglish:
          'When a density is mirror-symmetric around $0$ (and its mean exists), every odd power cancels its positive and negative halves to exact zero—saving you an entire integral.',
        tinyExample: 'For $X \\sim U(-1, 1)$, $E[X^3 + 3X + 5] = 0 + 0 + 5 = 5$ in two seconds.',
      },
      {
        term: 'First-Step State Conditioning',
        symbol: '$\\mu_s = 1 + \\sum P(s \\to s\')\\mu_{s\'}$',
        plainEnglish:
          'Instead of summing an infinite series to find an expected waiting time, track how much of the pattern you have matched so far, step forward by just one roll, and solve a tiny linear system.',
        tinyExample: 'For two consecutive even rolls ($p=1/2$), $\\mu_0 = 2 + \\mu_1$ and $\\mu_1 = 1 + \\frac{1}{2}\\mu_0$ gives $\\mu_0 = 6$.',
      },
      {
        term: 'Overlapping vs. Non-Overlapping Pattern',
        plainEnglish:
          'When hunting a pattern like `HH` vs. `HT`, pay close attention to where a wrong symbol sends you: a miss on `HH` wipes you back to $0$, whereas flipping another `H` while hunting `HT` keeps your first `H` intact!',
        tinyExample: 'On a fair coin, expected tosses until `HH` is $6$, whereas expected tosses until `HT` is only $4$.',
      },
    ],
    generatorId: 'streak-expectation-gen',
    concepts: [
      {
        id: 'm4-c1-1',
        title: 'Expectation as Center of Mass & LOTUS ($E[g(X)]$)',
        subtitle: 'Computing average values and moments without deriving the distribution of $g(X)$',
        priority: 'core-pillar',
        buildsOn: 'Discrete PMF, Continuous PDF & Definite Integrals',
        toyExample: {
          title: 'Balancing a 3-Weight Seesaw at $\\{1, 2, 6\\}$',
          scenario:
            'Suppose a discrete random variable $X$ places mass $\\frac{1}{2}$ at $x=1$, $\\frac{1}{3}$ at $x=2$, and $\\frac{1}{6}$ at $x=6$ (notice $\\frac{1}{2}+\\frac{1}{3}+\\frac{1}{6}=1$). Where is the seesaw balance point $E[X]$, and what is the average of $X^2$?',
          walkthroughSteps: [
            '1. **Center of Mass ($E[X]$):** Multiply each position by its probability weight: $E[X] = 1\\left(\\frac{1}{2}\\right) + 2\\left(\\frac{1}{3}\\right) + 6\\left(\\frac{1}{6}\\right) = \\frac{1}{2} + \\frac{2}{3} + 1 = \\frac{13}{6} \\approx 2.17$.',
            '2. **What if we square $X$ ($Y = X^2$)?** Notice $(E[X])^2 = \\left(\\frac{13}{6}\\right)^2 = \\frac{169}{36} \\approx 4.69$. Is that the average of $X^2$?',
            '3. **Compute $E[X^2]$ directly:** Square each value *first*, then weight by its original probability: $E[X^2] = 1^2\\left(\\frac{1}{2}\\right) + 2^2\\left(\\frac{1}{3}\\right) + 6^2\\left(\\frac{1}{6}\\right) = \\frac{1}{2} + \\frac{4}{3} + 6 = \\frac{47}{6} \\approx 7.83$.',
            '4. Notice $7.83 > 4.69$! Squaring blows up the outlier at $6$ much more than the points near $1$ and $2$.',
          ],
          ahaMoment:
            'Look how clean that was: you never had to build a brand-new PMF table for $Y = X^2$! Weighting $g(x)$ directly by $p_X(x)$ is the **Law of the Unconscious Statistician (LOTUS)**—and notice that $E[X^2]$ always sits strictly above $(E[X])^2$ unless $X$ is a constant.',
        },
        theoremAndFormula: {
          statement:
            'For a random variable $X$ and any function $g: \\mathbb{R} \\to \\mathbb{R}$, the expectation of $g(X)$ is computed directly using the PMF or PDF of $X$ (assuming absolute convergence $\\mathbb{E}[|g(X)|] < \\infty$). For non-negative $X \\ge 0$, the **Tail-Sum Formula** integrates or sums survival probabilities.',
          formulaLatex:
            'E[g(X)] = \\begin{cases} \\sum_x g(x)\\,p_X(x) & \\text{(discrete)} \\\\ \\int_{-\\infty}^{\\infty} g(x)\\,f_X(x)\\,dx & \\text{(continuous)} \\end{cases} \\qquad \\text{and for } X \\ge 0:\\quad E[X] = \\int_0^{\\infty} P(X > x)\\,dx',
          plainEnglishDecoding:
            'Think of $E[g(X)]$ simply as a weighted average of $g(x)$ using $X$’s own weights. And whenever a density is symmetric around $0$ (like $U(-a,a)$ or $\\mathcal{N}(0, \\sigma^2)$), smile and set any odd power $E[X^{2k+1}]$ straight to $0$—positive and negative sides cancel out cleanly!',
          workedMiniExamples: [
            {
              prompt: 'Let $X \\sim U(0, 2)$. Compute $E[X^2]$ using LOTUS.',
              solution:
                'The PDF is $f_X(x) = \\frac{1}{2}$ on $[0, 2]$. Directly: $E[X^2] = \\int_0^2 x^2 \\cdot \\frac{1}{2}\\,dx = \\frac{1}{2}\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{4}{3}$. (Compare with $(E[X])^2 = 1^2 = 1$.)',
            },
            {
              prompt: 'Let $X \\sim U(-1, 1)$. Find $E[X^3 + 3X + 5]$ in 5 seconds.',
              solution:
                'Since $f_X(x) = \\frac{1}{2}$ is even on $[-1, 1]$ and $x^3 + 3x$ is odd, $E[X^3] = 0$ and $E[X] = 0$. Only the constant survives: $E[X^3 + 3X + 5] = 5$.',
            },
          ],
        },
        sandboxId: 'distribution-clt-lab',
        msqTraps: [
          {
            myth: '$E[g(X)] = g(E[X])$ for every continuous function $g$.',
            reality:
              'False unless $g(x) = ax + b$ is affine! For convex $g$ (like $x^2, e^x, |x|$), **Jensen’s Inequality** gives $E[g(X)] \\ge g(E[X])$.',
            counterExample:
              'Let $X \\in \\{-1, +1\\}$ with probability $1/2$ each. Then $E[X] = 0 \\implies (E[X])^2 = 0$, whereas $E[X^2] = 1 \\neq 0$.',
          },
          {
            myth: 'Every symmetric random variable centered at $0$ has $E[X] = 0$.',
            reality:
              'Only if $E[|X|] < \\infty$! If the tails decay too slowly, the integral $\\int_0^{\\infty} x f(x)\\,dx$ diverges to $+\\infty$, so $E[X]$ is undefined (not $0$).',
            counterExample:
              'The Student-$t_1$ (Cauchy) distribution with PDF $f(x) = \\frac{1}{\\pi(1+x^2)}$ (tested in GATE DA 2026 Q.28) is symmetric around $0$, yet $\\int_0^{\\infty} \\frac{x}{\\pi(1+x^2)}\\,dx = \\infty$, so its mean does not exist.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Mean Squared Error & Bias-Variance Decomposition',
            whyItMatters:
              'Because $E[(\\hat{y}-y)^2] \\neq (E[\\hat{y}-y])^2$, decomposing expected squared prediction error produces $\\text{Bias}^2 + \\text{Variance} + \\sigma^2$ (tested in GATE DA 2026 Q.37).',
            pyqProof: 'GATE DA 2026 · Q.37 (2M MCQ)',
          },
        ],
      },
      {
        id: 'm4-c1-2',
        title: 'Linearity of Expectation & Indicator Random Variables ($\\mathbf{1}_A$)',
        subtitle: 'Breaking complex dependent counts into effortless $0/1$ indicators',
        priority: 'core-pillar',
        buildsOn: 'm4-c1-1 Expectation Definition',
        toyExample: {
          title: '3 Guests & 3 Hats (Why Dependence Cannot Break Linearity)',
          scenario:
            'Three guests $\\{1, 2, 3\\}$ check 3 hats, and the hats are returned in a uniformly random permutation ($3! = 6$ equally likely outcomes). Let $X$ be the number of guests who receive their own hat. Find $E[X]$.',
          walkthroughSteps: [
            '1. **Brute-Force Check ($n=3$):** List all $6$ permutations: $(1,2,3)\\to 3$ matches; $(1,3,2), (3,2,1), (2,1,3) \\to 1$ match each; $(2,3,1), (3,1,2) \\to 0$ matches. Average: $E[X] = \\frac{3+1+1+1+0+0}{6} = 1$.',
            '2. **Now Split with Indicators:** Define $I_k = 1$ if guest $k$ gets their own hat, and $0$ otherwise, so $X = I_1 + I_2 + I_3$.',
            '3. **Notice Dependence:** Are $I_1, I_2, I_3$ independent? NO! If $I_1 = 1$ and $I_2 = 1$, then $I_3$ MUST equal $1$ ($P(I_3=1 \\mid I_1=1, I_2=1) = 1 \\neq 1/3$).',
            '4. **Apply Linearity Anyway:** Each guest is equally likely to get any of the $3$ hats, so $E[I_k] = P(I_k=1) = \\frac{1}{3}$. Thus $E[X] = E[I_1] + E[I_2] + E[I_3] = \\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3} = 1$!',
          ],
          ahaMoment:
            'Pause and appreciate that magic: even with $n = 1000$ guests—where listing $1000!$ permutations would outlast the universe—you still get $E[X] = \\sum_{k=1}^{1000} \\frac{1}{1000} = 1$ in one second! Linearity never cares whether the pieces are independent.',
        },
        theoremAndFormula: {
          statement:
            '**Linearity of Expectation** holds for ANY random variables $X_1, \\dots, X_n$ (independent or arbitrarily dependent) and constants $a_i, b \\in \\mathbb{R}$. Combined with the **Fundamental Bridge** $E[\\mathbf{1}_A] = P(A)$, any counting RV $S = \\sum_k \\mathbf{1}_{A_k}$ has $E[S] = \\sum_k P(A_k)$.',
          formulaLatex:
            'E\\!\\left[\\sum_{i=1}^{n} a_i X_i + b\\right] = \\sum_{i=1}^{n} a_i E[X_i] + b \\qquad \\text{and} \\qquad E[\\mathbf{1}_A] = 1\\cdot P(A) + 0\\cdot P(A^c) = P(A)',
          plainEnglishDecoding:
            'Here is the reflex to build: whenever a problem asks for the *"expected number of [matches / pairs / inversions / successes]"*, resist the urge to compute the whole PMF $P(S=k)$. Break $S$ into $0/1$ indicators $\\sum I_k$, find the chance of a single piece $P(I_k=1)$, and sum them right up.',
          workedMiniExamples: [
            {
              prompt:
                '100 balls are drawn with replacement from an urn containing 5 white and 10 black balls. Find the expected number of black balls drawn (GATE DA 2025 Q.61).',
              solution:
                'Let $I_k = 1$ if draw $k$ is black ($k=1,\\dots,100$). On each draw, $E[I_k] = P(\\text{black}) = \\frac{10}{15} = \\frac{2}{3}$. By linearity, $E[S_{100}] = \\sum_{k=1}^{100} \\frac{2}{3} = \\frac{200}{3} \\approx 66.7$.',
            },
            {
              prompt:
                'A dataset of 50 numbers has mean 40. One new value 142 is appended. Find the updated sample mean (GATE DA 2024 Q.34).',
              solution:
                'Total sum of the first 50 points is $50 \\times 40 = 2000$. Adding $142$ gives sum $2142$ across $51$ points, so $\\bar{x}_{\\text{new}} = \\frac{2142}{51} = 42$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Linearity $E[X+Y] = E[X] + E[Y]$ requires $X$ and $Y$ to be independent.',
            reality:
              'Never! Linearity is unconditional. Independence is only required for $E[XY] = E[X]E[Y]$ and $\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)$.',
            counterExample:
              'Even when $Y = -X$ (maximally dependent!), $E[X + Y] = E[0] = 0 = E[X] + E[-X]$.',
          },
          {
            myth: 'Drawing *without* replacement changes the expected number of black balls compared to drawing *with* replacement.',
            reality:
              'The **mean is identical**! By symmetry across positions, in $n \\le N$ draws without replacement, every draw $k$ still has marginal probability $P(I_k=1) = \\frac{B}{B+W}$. Only the *variance* shrinks without replacement.',
            counterExample:
              'Draw $2$ cards without replacement from $1$ Ace and $1$ King: $P(\\text{draw 1 is Ace}) = 1/2$ and $P(\\text{draw 2 is Ace}) = 1/2$, so $E[\\text{Aces}] = 1/2 + 1/2 = 1$, matching with-replacement $2 \\times (1/2) = 1$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4 (PDSA)',
            targetWeek: 4,
            topic: 'Randomized Quicksort Expected Comparisons',
            whyItMatters:
              'Writing $C = \\sum_{i<j} I_{ij}$ where $I_{ij}$ indicates whether rank-$i$ and rank-$j$ elements are ever compared yields $E[C] = \\sum_{i<j}\\frac{2}{j-i+1} = O(n\\log n)$ (GATE DA 2026 Q.15).',
            pyqProof: 'GATE DA 2026 · Q.15 (1M MCQ)',
          },
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Stochastic Gradient Descent (SGD) Unbiasedness',
            whyItMatters:
              'Mini-batch SGD gradients remain unbiased estimators of the full-dataset gradient by Linearity of Expectation even when sampling a mini-batch *without* replacement (GATE DA 2026 Q.29).',
            pyqProof: 'GATE DA 2026 · Q.29 (1M NAT)',
          },
        ],
      },
      {
        id: 'm4-c1-3',
        title: 'First-Step Conditioning for Waiting Times & Consecutive Streaks',
        subtitle: 'Solving infinite geometric/Markov waiting sums with a 2-line linear system',
        priority: 'high-yield',
        buildsOn: 'm4-c1-2 Linearity & Conditional Probability',
        toyExample: {
          title: 'Expected Fair Coin Tosses Until First Head ($H$)',
          scenario:
            'You toss a fair coin ($p = 1/2$) repeatedly until the first Head ($H$) appears. How many tosses does this take on average?',
          walkthroughSteps: [
            '1. Let $\\mu$ be the expected total tosses starting fresh.',
            '2. **Condition on Toss 1:** You always spend $1$ toss right now.',
            '3. With probability $1/2$, Toss 1 is $H$ and you **stop** ($0$ additional tosses needed).',
            '4. With probability $1/2$, Toss 1 is $T$ and you are **right back at the start** (expected $\\mu$ additional tosses needed).',
            '5. Combine: $\\mu = 1 + \\frac{1}{2}(0) + \\frac{1}{2}\\mu \\implies \\frac{1}{2}\\mu = 1 \\implies \\mu = 2$.',
          ],
          ahaMoment:
            'See how painless that is? Instead of wrestling with an infinite sum $\\sum_{k=1}^{\\infty} k (1/2)^k$, conditioning on just the very first step turns the problem into a one-line equation—and works just as smoothly for multi-roll streaks like $EE$ or $HT$!',
        },
        theoremAndFormula: {
          statement:
            'For any memoryless discrete-time process seeking a pattern, define state variables $\\mu_s = E[\\text{remaining steps to goal} \\mid \\text{current suffix state } s]$ with $\\mu_{\\text{goal}} = 0$. One step forward gives a linear system:',
          formulaLatex:
            '\\mu_s = 1 + \\sum_{s\'} P(s \\to s\')\\,\\mu_{s\'} \\qquad \\text{with} \\qquad \\mu_{\\text{goal}} = 0',
          plainEnglishDecoding:
            'Always ask yourself one careful question after a mismatch: *"How much of my target pattern is still alive at the tail of my sequence?"* A mismatch does not always wipe you back to state $0$—while hunting `HT`, flipping a second `H` keeps you sitting right in state `H`!',
          workedMiniExamples: [
            {
              prompt:
                'A fair 6-sided die is thrown repeatedly until two consecutive even numbers appear. Find the expected number of throws (GATE DA 2024 Q.36).',
              solution:
                'Each throw is Even ($E$) w.p. $1/2$ and Odd ($O$) w.p. $1/2$. Let $\\mu_0$ be expected throws from start and $\\mu_1$ after seeing one $E$. Then:\n$\\mu_0 = 1 + \\frac{1}{2}\\mu_1 + \\frac{1}{2}\\mu_0 \\implies \\mu_0 = 2 + \\mu_1$.\n$\\mu_1 = 1 + \\frac{1}{2}(0) + \\frac{1}{2}\\mu_0$.\nSubstitute $\\mu_1$: $\\mu_0 = 2 + 1 + \\frac{1}{2}\\mu_0 \\implies \\frac{1}{2}\\mu_0 = 3 \\implies \\mu_0 = 6$.',
            },
            {
              prompt:
                'Coupon Collector ($n=3$): Find the expected number of boxes bought to collect all 3 distinct toys.',
              solution:
                'Wait times for each *new* toy are independent Geometric RVs with success probabilities $p_1 = 3/3$, $p_2 = 2/3$, $p_3 = 1/3$. Total expected boxes $= \\frac{1}{1} + \\frac{3}{2} + \\frac{3}{1} = 5.5$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Because $P(HH) = P(HT) = 1/4$ on two fair coin tosses, the expected tosses until $HH$ equals the expected tosses until $HT$.',
            reality:
              'False! On failure, $HH$ resets completely to state $0$ ($\\mu_{HH} = 6$), whereas if you have `H` and flip another `H` while hunting `HT`, you stay at state `H`! Thus $\\mu_{HT} = 4 \\neq 6$.',
            counterExample:
              'For `HT`: $\\mu_0 = 2 + \\mu_H$, and $\\mu_H = 1 + \\frac{1}{2}(0) + \\frac{1}{2}\\mu_H \\implies \\mu_H = 2 \\implies \\mu_0 = 4$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7 (AI) / RL',
            targetWeek: 7,
            topic: 'Markov Decision Process (MDP) Bellman Equations',
            whyItMatters:
              'First-step state recursion $\\mu_s = 1 + \\sum P(s \\to s\')\\mu_{s\'}$ is the exact prototype of Bellman value equations $V(s) = R(s) + \\gamma \\sum P(s\'\\mid s)V(s\')$.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm4-c1-ht1',
        title: 'Indicator Decomposition on Dependent Counts',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2025 · Q.61', 'GATE DA 2026 · Q.15'],
        problemStatement:
          'A question asks for the expected number of matches, inversions, collisions, or colored balls drawn across $n$ trials (with or without replacement), where individual trials may be strongly correlated.',
        triggerCue:
          'Phrases like *"expected number of..."*, *"average count of pairs..."*, or large $n$ ($n=100, 1000$) where computing $P(X=k)$ for every $k$ looks combinatorially hopeless.',
        bruteForceTrap:
          'Trying to derive the full Binomial/Hypergeometric PMF and summing $\\sum_{k=0}^n k\\,P(X=k)$ wastes 10 minutes and collapses completely when events overlap (like consecutive pairs or permutations).',
        mentalShift:
          'Write $X = \\sum_{i} I_i$ where each $I_i \\in \\{0, 1\\}$ checks ONE local item or pair. Ignore dependence completely—just compute the single-item marginal probability $P(I_i = 1)$ and sum!',
        steps: [
          {
            label: 'Define the binary indicator $I_i$',
            detail:
              'Choose $I_i = 1$ if the $i$-th item/pair satisfies the target condition, and $0$ otherwise, so $X = \\sum_i I_i$.',
          },
          {
            label: 'Compute one marginal probability $E[I_i] = P(I_i = 1)$',
            detail:
              'Forget all other $j \\neq i$. Use basic symmetry (e.g., $\\frac{B}{B+W}$ for a single draw, $\\frac{1}{n}$ for a fixed point, $\\frac{1}{2}$ for an inversion).',
          },
          {
            label: 'Sum unconditionally by Linearity',
            detail:
              'Multiply by the number of indicators (or sum $E[I_i]$ if asymmetric). Done in 15 seconds!',
          },
        ],
        lockInTakeaway:
          'Linearity of Expectation is blind to dependence: $E[\\sum I_i] = \\sum P(I_i=1)$ ALWAYS works.',
      },
      {
        id: 'm4-c1-ht2',
        title: 'Streak & Pattern Waiting Time via 1-Step Conditioning',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.36'],
        problemStatement:
          'A coin or die is tossed independently until a consecutive pattern (such as two consecutive evens $EE$, or $HT$, or $HHH$) appears for the first time. Find the expected number of tosses.',
        triggerCue:
          '*"Repeatedly thrown until [consecutive pattern] appears"* — infinite trial horizon with overlapping prefixes.',
        bruteForceTrap:
          'Trying to list all failure sequences of length $k$ (Fibonacci-like counting) and summing $\\sum k\\,P(T=k)$ leads to tedious generating functions and easy arithmetic slips.',
        mentalShift:
          'Model only the **longest useful suffix** currently matched as states ($0, 1, \\dots$). Write one equation $\\mu_s = 1 + \\sum p_{s\\to s\'}\\mu_{s\'}$ per state and solve in 3 lines.',
        steps: [
          {
            label: 'Identify the progress states',
            detail:
              'For length-2 pattern $EE$: State $0$ (no active $E$) and State $1$ (just saw one $E$). Goal State $2$ has $\\mu_2 = 0$.',
          },
          {
            label: 'Carefully check where a WRONG symbol lands you',
            detail:
              'For $EE$, seeing $O$ from State $1$ wipes progress back to State $0$. For $HT$, seeing $H$ from State $H$ keeps you in State $H$!',
          },
          {
            label: 'Solve the tiny $2\\times 2$ linear system',
            detail:
              'Substitute $\\mu_1$ into $\\mu_0$ to solve for $\\mu_0$ directly.',
          },
        ],
        lockInTakeaway:
          'Never sum infinite streak series by hand—condition on the next single roll and check whether a miss resets to $0$ or stays in an intermediate state.',
      },
    ],
    arsenalCards: [
      {
        id: 'm4-c1-a1',
        badge: 'Weapon #1 · Dependent Counting',
        whenYouSpot: 'Expected number of matches, pairs, inversions, or balls drawn',
        directWeaponLatex: 'E\\!\\left[\\sum_{k=1}^m I_k\\right] = \\sum_{k=1}^m P(A_k)',
        instantRule:
          'Split the total count into $0/1$ indicators and sum their individual marginal probabilities—dependence does NOT matter.',
        tenSecondExample:
          '100 draws (with OR without replacement) from 5W, 10B: $E[\\text{Black}] = 100 \\times \\frac{10}{15} = 66.7$.',
        oneFatalTrap:
          'Do NOT multiply variances the same way—indicators in without-replacement draws have negative covariance, shrinking $\\text{Var}(S)$.',
      },
      {
        id: 'm4-c1-a2',
        badge: 'Weapon #2 · Function Expectation',
        whenYouSpot: 'Asked for $E[g(X)]$ given the PMF/PDF of $X$ (e.g., $E[X^2]$, $E[e^X]$)',
        directWeaponLatex: 'E[g(X)] = \\int_{-\\infty}^{\\infty} g(x)\\,f_X(x)\\,dx \\neq g(E[X])',
        instantRule:
          'Plug $g(x)$ straight into the integral/sum against $f_X(x)$ (LOTUS). Kill odd integrands on symmetric intervals $[-a, a]$ immediately.',
        tenSecondExample:
          '$X \\sim U(-1, 1) \\implies E[X^3 + 2] = 0 + 2 = 2$.',
        oneFatalTrap:
          'Never replace $E[X^2]$ with $(E[X])^2$ or $E[1/X]$ with $1/E[X]$; for non-constant $X$, $E[X^2] > (E[X])^2$.',
      },
      {
        id: 'm4-c1-a3',
        badge: 'Weapon #3 · Consecutive Streaks',
        whenYouSpot: 'Expected Bernoulli($p$) trials until two consecutive successes ($SS$) or alternating ($SF$)',
        directWeaponLatex: '\\mu_{SS} = \\frac{1+p}{p^2} \\qquad \\text{vs.} \\qquad \\mu_{SF} = \\frac{1}{p(1-p)}',
        instantRule:
          'For two consecutive successes of prob $p$: $\\mu_{SS} = \\frac{1}{p} + \\frac{1}{p^2}$. For $S$ followed immediately by $F$: $\\mu_{SF} = \\frac{1}{p} + \\frac{1}{1-p}$.',
        tenSecondExample:
          'Fair coin/die parity ($p = 1/2$): two consecutive evens take $\\frac{1.5}{0.25} = 6$ rolls; `HT` takes $\\frac{1}{0.25} = 4$ tosses.',
        oneFatalTrap:
          'Do NOT confuse $E[\\text{wait for } HH]=6$ with $E[\\text{wait for } HT]=4$; overlapping patterns behave differently on failure!',
      },
    ],
    questions: [
      {
        id: 'm4-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Indicator Decomposition',
        marks: 1,
        type: 'NAT',
        stem: 'A permutation $\\pi$ of $\\{1, 2, \\dots, 50\\}$ is chosen uniformly at random. An element $k$ is called a *fixed point* if $\\pi(k) = k$. What is the expected number of fixed points in $\\pi$?',
        natAnswer: { min: 1, max: 1, exactDisplay: '1' },
        triggerHint: 'Define $I_k = 1$ if $\\pi(k) = k$ and use Linearity of Expectation.',
        intuitiveSolution: [
          'Let $X = \\sum_{k=1}^{50} I_k$, where $I_k = 1$ if $\\pi(k) = k$ and $0$ otherwise.',
          'In a uniformly random permutation of $50$ elements, $\\pi(k)$ is equally likely to be any of the $50$ numbers, so $P(I_k = 1) = \\frac{1}{50}$.',
          'By Linearity of Expectation (regardless of dependence among $I_k$), $E[X] = \\sum_{k=1}^{50} \\frac{1}{50} = 1$.',
        ],
        directShortcutUsed: '$E[\\text{fixed points}] = n \\cdot (1/n) = 1$ for every $n \\ge 1$.',
      },
      {
        id: 'm4-c1-q2',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #2 · LOTUS vs. $g(E[X])$',
        marks: 1,
        type: 'MCQ',
        stem: 'Let $X \\sim \\text{Uniform}(0, 3)$. What is the value of $E[X^2] - (E[X])^2$?',
        options: [
          { id: 'A', text: '$0$', whyTrueOrFalse: 'False — $E[X^2] = (E[X])^2$ holds only if $X$ is constant.' },
          { id: 'B', text: '$0.75$', whyTrueOrFalse: 'True: $E[X^2] = \\int_0^3 \\frac{x^2}{3}\\,dx = 3$ and $(E[X])^2 = (1.5)^2 = 2.25$, so $3 - 2.25 = 0.75$.' },
          { id: 'C', text: '$2.25$', whyTrueOrFalse: 'False — $2.25$ is $(E[X])^2$, not the difference.' },
          { id: 'D', text: '$3.00$', whyTrueOrFalse: 'False — $3.00$ is $E[X^2]$ alone.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Compute $E[X^2]$ via LOTUS (or use $\\text{Var}(U(a,b)) = (b-a)^2/12$).',
        intuitiveSolution: [
          'By LOTUS with $f_X(x) = \\frac{1}{3}$ on $[0, 3]$: $E[X^2] = \\int_0^3 x^2 \\cdot \\frac{1}{3}\\,dx = \\left[\\frac{x^3}{9}\\right]_0^3 = 3$.',
          'Meanwhile $E[X] = 1.5$, so $(E[X])^2 = 2.25$.',
          'Hence $E[X^2] - (E[X])^2 = 3 - 2.25 = 0.75$ (which also equals $\\text{Var}(X) = (3-0)^2/12 = 9/12 = 0.75$).',
        ],
        directShortcutUsed: '$E[X^2] - (E[X])^2 = \\text{Var}(X) = \\frac{(3-0)^2}{12} = 0.75$.',
      },
      {
        id: 'm4-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.61',
        year: 2025,
        marks: 2,
        type: 'NAT',
        stem: 'An urn contains $5$ white balls and $10$ black balls. A ball is drawn at random, its color is noted, and it is placed back in the urn. This process is repeated $100$ times. What is the expected number of black balls drawn? (Round off to one decimal place.)',
        natAnswer: { min: 66.5, max: 66.8, exactDisplay: '66.7 (exact: 200/3)' },
        triggerHint: 'Write $S_{100} = \\sum_{k=1}^{100} I_k$ where $I_k = 1$ if draw $k$ is black.',
        intuitiveSolution: [
          'Let $I_k = 1$ if the $k$-th ball drawn is black, and $0$ otherwise.',
          'Because draws are with replacement, each draw has $E[I_k] = P(\\text{black}) = \\frac{10}{5 + 10} = \\frac{2}{3}$.',
          'By Linearity of Expectation, $E[S_{100}] = \\sum_{k=1}^{100} E[I_k] = 100 \\times \\frac{2}{3} = \\frac{200}{3} \\approx 66.67 \\to 66.7$.',
        ],
        directShortcutUsed: '$E[\\text{Binomial}(n, p)] = np = 100 \\times \\frac{2}{3} \\approx 66.7$.',
      },
      {
        id: 'm4-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.36',
        year: 2024,
        marks: 2,
        type: 'MCQ',
        stem: 'A fair six-sided die is thrown repeatedly and independently until two consecutive throws show even numbers. What is the expected number of throws required?',
        options: [
          { id: 'A', text: '$4$', whyTrueOrFalse: 'False — $4$ is the expected wait for alternating patterns like Even-then-Odd, not Even-then-Even.' },
          { id: 'B', text: '$5$', whyTrueOrFalse: 'False — miscounts the reset penalty when an odd number appears after one even.' },
          { id: 'C', text: '$6$', whyTrueOrFalse: 'True: $\\mu_0 = 1 + \\frac{1}{2}\\mu_1 + \\frac{1}{2}\\mu_0$ and $\\mu_1 = 1 + \\frac{1}{2}(0) + \\frac{1}{2}\\mu_0$ gives $\\mu_0 = 6$.' },
          { id: 'D', text: '$8$', whyTrueOrFalse: 'False.' },
        ],
        correctOptions: ['C'],
        triggerHint: 'Define $\\mu_0$ (start) and $\\mu_1$ (one even just appeared) and condition on the next throw.',
        intuitiveSolution: [
          'Let $p = P(\\text{even}) = \\frac{1}{2}$. Let $\\mu_0$ be expected throws from scratch and $\\mu_1$ be expected remaining throws given the last throw was even.',
          'From scratch: $\\mu_0 = 1 + \\frac{1}{2}\\mu_1 + \\frac{1}{2}\\mu_0 \\implies \\mu_0 = 2 + \\mu_1$.',
          'After one even: $\\mu_1 = 1 + \\frac{1}{2}(0) + \\frac{1}{2}\\mu_0$ (if odd appears, you reset completely to $\\mu_0$).',
          'Substituting gives $\\mu_0 = 2 + 1 + \\frac{1}{2}\\mu_0 \\implies \\frac{1}{2}\\mu_0 = 3 \\implies \\mu_0 = 6$.',
        ],
        directShortcutUsed: 'Consecutive successes formula $\\mu_{EE} = \\frac{1+p}{p^2} = \\frac{1.5}{0.25} = 6$.',
      },
      {
        id: 'm4-c1-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber Drill · Overlapping Pattern Contrast',
        marks: 2,
        type: 'NAT',
        stem: 'A fair coin is tossed repeatedly and independently until the sequence **HT** (Head immediately followed by Tail) appears. What is the expected number of tosses required?',
        natAnswer: { min: 4, max: 4, exactDisplay: '4' },
        triggerHint: 'If you are waiting for $T$ after seeing $H$, and another $H$ appears, you do NOT reset to state $0$!',
        intuitiveSolution: [
          'Let $\\mu_0$ be expected tosses from the start, and $\\mu_H$ be expected remaining tosses given the most recent toss was $H$.',
          'From start: $\\mu_0 = 1 + \\frac{1}{2}\\mu_H + \\frac{1}{2}\\mu_0 \\implies \\mu_0 = 2 + \\mu_H$.',
          'From state $H$: w.p. $1/2$ you toss $T$ and finish ($0$ left); w.p. $1/2$ you toss $H$ and **remain in state $H$**! So $\\mu_H = 1 + \\frac{1}{2}(0) + \\frac{1}{2}\\mu_H \\implies \\mu_H = 2$.',
          'Therefore $\\mu_0 = 2 + 2 = 4$.',
        ],
        directShortcutUsed: 'Wait for $H$ ($1/p = 2$) plus wait for $T$ ($1/(1-p) = 2$) $= 4$.',
      },
      {
        id: 'm4-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber MSQ · Expectation & Linearity Edge Cases',
        marks: 2,
        type: 'MSQ',
        stem: 'Let $X$ and $Y$ be real-valued random variables with finite second moments ($E[X^2] < \\infty, E[Y^2] < \\infty$). Which of the following statements is/are ALWAYS true?',
        options: [
          {
            id: 'A',
            text: '$E[3X - 2Y + 5] = 3E[X] - 2E[Y] + 5$ even if $X$ and $Y$ are dependent.',
            whyTrueOrFalse: 'True — Linearity of Expectation holds unconditionally without independence.',
          },
          {
            id: 'B',
            text: '$E[X^2] \\ge (E[X])^2$.',
            whyTrueOrFalse: 'True — $E[X^2] - (E[X])^2 = \\text{Var}(X) = E[(X - E[X])^2] \\ge 0$.',
          },
          {
            id: 'C',
            text: 'If $X$ and $Y$ are identically distributed and symmetric around $0$, then $E[XY] = 0$.',
            whyTrueOrFalse: 'False — take $Y = X$ with $X \\in \\{-1, +1\\}$ w.p. $1/2$ each; both are symmetric around $0$, yet $E[XY] = E[X^2] = 1 \\neq 0$.',
          },
          {
            id: 'D',
            text: 'If $P(X > 0) = 1$, then $E[1/X] \\ge 1/E[X]$.',
            whyTrueOrFalse: 'True — $g(x) = 1/x$ is convex on $(0, \\infty)$, so Jensen’s inequality gives $E[1/X] \\ge 1/E[X]$ (assuming $E[1/X] < \\infty$).',
          },
        ],
        correctOptions: ['A', 'B', 'D'],
        triggerHint: 'Test statement C with $Y = X$, and test statement D with convexity of $1/x$ on $(0, \\infty)$.',
        intuitiveSolution: [
          '(A) is true unconditionally by Linearity of Expectation.',
          '(B) is true because $\\text{Var}(X) = E[X^2] - (E[X])^2 \\ge 0$.',
          '(C) is FALSE: take $X = Y \\sim \\mathcal{N}(0,1)$ (or $\\pm 1$); then $E[XY] = E[X^2] = 1 \\neq 0$.',
          '(D) is true by Jensen’s inequality since $g(x) = 1/x$ has $g\'\'(x) = 2/x^3 > 0$ (strictly convex) on $(0, \\infty)$.',
        ],
        directShortcutUsed: 'Linearity needs no independence; convexity gives $E[g(X)] \\ge g(E[X])$.',
      },
    ],
  },
  {
    id: 'prob3-ch2',
    number: 2,
    title: 'Variance, Chebyshev/Markov Bounds & Total Expectation/Variance (EVE & EVVE)',
    shortTitle: 'Variance, Bounds & EVE/EVVE',
    estimatedHours: 4.0,
    dayLabel: 'Week 2 · Day 5',
    tagline:
      'Let’s see why Variance ignores shifts and squares scale factors, link sample variance straight to pairwise squared differences (GATE DA 2026 Q.62), bound rare tails without knowing the PDF via Markov and Chebyshev, and dissect two-stage randomness with EVE and EVVE.',
    syllabusMapping: [
      'Variance, standard deviation, and affine transformation properties',
      'Markov and Chebyshev concentration inequalities',
      'Conditional expectation, Law of Total Expectation (EVE), and Law of Total Variance (EVVE)',
    ],
    whatIsImportant: [
      '$\\text{Var}(aX + b) = a^2\\text{Var}(X)$ and $\\text{Var}(X) = E[X^2] - (E[X])^2$',
      'Pairwise squared difference identity $\\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2 = 2n\\sum_{i=1}^n (x_i - \\bar{x})^2$ (GATE DA 2026 Q.62)',
      'Sign-variable variance trick: $S = 2X - 1 \\in \\{-1, +1\\} \\implies S^2 \\equiv 1$, making $\\text{Var}(SY) = E[Y^2]$ when $E[Y]=0$ (GATE DA 2026 Q.44)',
      'Law of Iterated Expectations (EVE): $E[E[X \\mid Y]] = E[X]$ (GATE DA 2025 Q.11) and Law of Total Variance (EVVE): $\\text{Var}(X) = E[\\text{Var}(X \\mid Y)] + \\text{Var}(E[X \\mid Y])$',
      'Markov ($P(X \\ge a) \\le E[X]/a$ for $X \\ge 0$) and Chebyshev ($P(|X - \\mu| \\ge k\\sigma) \\le 1/k^2$)',
    ],
    whatIsNotImportant: [
      'Chernoff / Hoeffding moment-generating exponential tail derivations',
      'Sample skewness and kurtosis formulas (only $E[Z^4] = 3$ for $Z \\sim \\mathcal{N}(0,1)$ is needed for $\\text{Var}(\\chi^2_1) = 2$)',
    ],
    inboundStream: 'Module 4 Ch.1 Expectation, LOTUS & Linearity',
    outboundStream: [
      'Module 4 Ch.3 $\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y) \\pm 2\\text{Cov}(X,Y)$',
      'Module 5 CLT, Sample Variance $s^2$ & $\\chi^2_1$ (GATE DA 2025 Q.36)',
      'Week 7 Bias-Variance Tradeoff in Ridge Regression (GATE DA 2026 Q.37)',
    ],
    glossary: [
      {
        term: 'Variance',
        symbol: '$\\text{Var}(X) = E[(X - \\mu)^2]$',
        plainEnglish:
          'Measures the average squared distance of outcomes from the mean—telling you how tightly or widely your distribution is scattered. In practice, the shortcut $E[X^2] - (E[X])^2$ is almost always faster.',
        tinyExample: 'For scores $\\{2, 4, 6\\}$ with mean $4$, average squared deviation is $\\frac{4 + 0 + 4}{3} = \\frac{8}{3}$.',
      },
      {
        term: 'Standard Deviation',
        symbol: '$\\sigma_X = \\sqrt{\\text{Var}(X)}$',
        plainEnglish:
          'Simply the square root of variance, putting spread back into the original units (meters, marks, rupees) so you can compare it directly against the mean.',
        tinyExample: 'A variance of $100\\text{ marks}^2$ corresponds to a standard deviation of $\\sigma = 10$ marks.',
      },
      {
        term: 'Affine Variance Rule',
        symbol: '$\\text{Var}(aX + b) = a^2\\text{Var}(X)$',
        plainEnglish:
          'Adding a constant $+b$ slides every point together without widening the spread (so $b$ disappears), while scaling by $a$ stretches squared distances by $a^2$—making even negative multipliers square to positive!',
        tinyExample: 'If $\\text{Var}(X) = 5$, then $\\text{Var}(-3X + 12) = (-3)^2(5) = 45$.',
      },
      {
        term: 'Pairwise Squared-Difference Identity',
        symbol: '$\\sum_{i,j}(x_i - x_j)^2 = 2n\\sum_i (x_i - \\bar{x})^2$',
        plainEnglish:
          'A clean algebraic bridge showing that summing every pair’s squared gap $(x_i - x_j)^2$ is just $2n$ times the sum of squared deviations around the sample mean $\\bar{x}$.',
        tinyExample: 'On $\\{2, 4, 6\\}$ ($n=3$), pairwise sum $= 48 = 2(3)(8) = 2n\\sum(x_i - \\bar{x})^2$.',
      },
      {
        term: 'Sign-Flip Variable',
        symbol: '$S = 2X - 1 \\in \\{-1, +1\\}$',
        plainEnglish:
          'Turning a $0/1$ Bernoulli variable $X$ into a $\\pm 1$ sign flip $S = 2X - 1$ has a delightful trick: $S^2$ is ALWAYS identically $1$, which completely erases $p$ when $Y$ has mean $0$!',
        tinyExample: 'For independent $X \\sim \\text{Bern}(0.3)$ and $Y \\sim \\mathcal{N}(0, 100)$, $\\text{Var}((2X-1)Y) = E[Y^2] = 100$.',
      },
      {
        term: 'Markov’s Inequality',
        symbol: '$P(X \\ge a) \\le \\frac{E[X]}{a}$',
        plainEnglish:
          'A distribution-free upper bound requiring ONLY non-negativity ($X \\ge 0$) and the mean: if the overall average is $50$, at most $25\\%$ of the population can sit at or above $200$.',
        tinyExample: 'With $X \\ge 0$ and $E[X] = 50$, Markov guarantees $P(X \\ge 200) \\le \\frac{50}{200} = 0.25$.',
      },
      {
        term: 'Chebyshev’s Inequality',
        symbol: '$P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$',
        plainEnglish:
          'Markov’s inequality applied to $(X - \\mu)^2 \\ge 0$: for ANY distribution with finite variance (even negative-valued ones!), at most $1/k^2$ of the probability can stray $k$ or more standard deviations from the mean.',
        tinyExample: 'At $k = 3$ standard deviations, Chebyshev guarantees $P(|X - \\mu| \\ge 3\\sigma) \\le \\frac{1}{9} \\approx 11.1\\%$.',
      },
      {
        term: 'Conditional Expectation as a Random Variable',
        symbol: '$E[X \\mid Y]$',
        plainEnglish:
          'Do not mistake $E[X \\mid Y]$ for a single fixed number: because its value depends on whichever $Y$ turns up, $E[X \\mid Y]$ is itself a random variable (a function of $Y$).',
        tinyExample: 'Picking Box $A$ ($\\mu=2$) or Box $B$ ($\\mu=8$) by a fair coin makes $E[X \\mid Y]$ equal $2$ or $8$ with prob $1/2$ each.',
      },
      {
        term: 'Law of Total Expectation (EVE)',
        symbol: '$E[X] = E[E[X \\mid Y]]$',
        plainEnglish:
          'Also called the Law of Iterated Expectations: find the average of $X$ inside each scenario $Y$, then average those group averages together to recover the grand mean $E[X]$.',
        tinyExample: 'Averaging Box $A$’s mean ($2$) and Box $B$’s mean ($8$) equally gives $E[X] = 5$.',
      },
      {
        term: 'Law of Total Variance (EVVE)',
        symbol: '$\\text{Var}(X) = E[\\text{Var}(X \\mid Y)] + \\text{Var}(E[X \\mid Y])$',
        plainEnglish:
          'Splits total uncertainty into two intuitive pieces: the average noise *within* each group ($E[V]$) PLUS how wildly the group averages swing *between* groups ($V[E]$).',
        tinyExample: 'In the two-box coin game, within-box variance is $1.6$ and between-box mean variance is $9$, totaling $10.6$.',
      },
      {
        term: 'Sample Variance',
        symbol: '$s^2 = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})^2$',
        plainEnglish:
          'The unbiased estimate of population variance computed from $n$ data points—dividing by $n-1$ (Bessel’s correction) accounts for using the sample mean $\\bar{x}$ instead of the true $\\mu$.',
        tinyExample: 'If $\\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 990$, then $s^2 = \\frac{990}{99} = 10$.',
      },
    ],
    generatorId: 'pairwise-var-gen',
    concepts: [
      {
        id: 'm4-c2-1',
        title: 'Variance, Affine Scaling & the Pairwise-Difference Identity',
        subtitle: 'Measuring spread without shifts and turning double sums into variance in one step',
        priority: 'core-pillar',
        buildsOn: 'm4-c1-1 Expectation & LOTUS',
        toyExample: {
          title: 'Shifting vs. Doubling 3 Scores $\\{2, 4, 6\\}$ — Plus Pairwise Differences',
          scenario:
            'Suppose 3 students score $\\{2, 4, 6\\}$, so their mean is $\\bar{x} = 4$ and average squared deviation from $4$ is $\\frac{(2-4)^2 + (4-4)^2 + (6-4)^2}{3} = \\frac{8}{3}$. What happens if we add $10$ bonus marks to everyone, or double every score, or sum all $9$ pairwise squared differences $(x_i - x_j)^2$?',
          walkthroughSteps: [
            '1. **Add $+10$ to all scores ($\\{12, 14, 16\\}$):** Mean shifts to $14$, but deviations from the mean are STILL $\\{-2, 0, +2\\}$! Spread is unchanged: $\\text{Var}(X + 10) = \\text{Var}(X) = \\frac{8}{3}$.',
            '2. **Double all scores ($\\{4, 8, 12\\}$):** Deviations double to $\\{-4, 0, +4\\}$, so *squared* deviations quadruple: $\\frac{16 + 0 + 16}{3} = 2^2 \\cdot \\frac{8}{3} = \\frac{32}{3}$.',
            '3. **Sum all $3\\times 3 = 9$ pairwise squared differences $\\sum_{i=1}^3\\sum_{j=1}^3 (x_i - x_j)^2$ on $\\{2,4,6\\}$:** Pairs $(2,4),(4,2),(4,6),(6,4)$ contribute $4\\times 4 = 16$, and $(2,6),(6,2)$ contribute $2\\times 16 = 32$. Total $= 48$.',
            '4. **Check the identity:** $2n\\sum_{i=1}^3 (x_i - \\bar{x})^2 = 2(3)(8) = 48$! The pairwise double sum equals $2n$ times the sum of squared deviations from the mean.',
          ],
          ahaMoment:
            'Look at both lessons together: variance completely ignores shifts ($+b$) and squares any scale factor ($a^2$). Even better, rewriting $(x_i - x_j)^2 = ((x_i - \\bar{x}) - (x_j - \\bar{x}))^2$ cancels the cross-term completely, giving you a one-step bridge between pairwise distances and variance!',
        },
        theoremAndFormula: {
          statement:
            'Variance measures expected squared deviation around the mean. For independent $X, Y$, variances **add even when subtracting** ($\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$). For any sample $x_1, \\dots, x_n$, the double sum of pairwise squared differences collapses directly to the sum of squares around $\\bar{x}$.',
          formulaLatex:
            '\\text{Var}(X) = E[X^2] - (E[X])^2, \\quad \\text{Var}(aX+b) = a^2\\text{Var}(X), \\quad \\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2 = 2n\\sum_{i=1}^n (x_i - \\bar{x})^2',
          plainEnglishDecoding:
            'Keep an eye on that exact factor of $2n$ in the pairwise identity (the sample version of $E[(X_1 - X_2)^2] = 2\\text{Var}(X)$ for two iid draws): dividing $\\sum_{i,j}(x_i - x_j)^2$ by $2n^2$ hands you the population variance $\\frac{1}{n}\\sum(x_i - \\bar{x})^2$ right away.',
          workedMiniExamples: [
            {
              prompt:
                'Given $\\frac{1}{2000}\\sum_{i=1}^{100}\\sum_{j=1}^{100}(x_i - x_j)^2 = 99$, find the sample variance $s^2 = \\frac{1}{99}\\sum_{i=1}^{100}(x_i - \\bar{x})^2$ (GATE DA 2026 Q.62).',
              solution:
                'Here $n = 100$, so $\\sum\\sum(x_i - x_j)^2 = 200\\sum_{i=1}^{100}(x_i - \\bar{x})^2$. Dividing by $2000$ gives $\\frac{1}{10}\\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 99 \\implies \\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 990$. Thus $s^2 = \\frac{990}{99} = 10$.',
            },
            {
              prompt:
                'Let $X \\sim \\text{Bernoulli}(0.3)$ and $Y \\sim \\mathcal{N}(0, 100)$ be independent. Find $\\text{Var}((2X - 1)Y)$ (GATE DA 2026 Q.44).',
              solution:
                'Let $S = 2X - 1$. Since $X \\in \\{0, 1\\}$, $S \\in \\{-1, +1\\}$, so $S^2 \\equiv 1$ deterministically! By independence, $E[SY] = E[S]E[Y] = E[S]\\cdot 0 = 0$, and $E[(SY)^2] = E[S^2]E[Y^2] = 1 \\cdot 100 = 100$. Hence $\\text{Var}((2X-1)Y) = 100 - 0^2 = 100$ (independent of $0.3$!).',
            },
          ],
        },
        sandboxId: 'distribution-clt-lab',
        msqTraps: [
          {
            myth: 'If $X$ and $Y$ are independent, then $\\text{Var}(X - Y) = \\text{Var}(X) - \\text{Var}(Y)$.',
            reality:
              'False! Coefficients square: $\\text{Var}(X - Y) = (+1)^2\\text{Var}(X) + (-1)^2\\text{Var}(Y) = \\text{Var}(X) + \\text{Var}(Y)$. Subtracting two independent noisy measurements makes the result *noisier*, never quieter!',
            counterExample:
              'If $X, Y \\stackrel{\\text{iid}}{\\sim} \\mathcal{N}(0, 1)$, then $X - Y \\sim \\mathcal{N}(0, 2)$ has variance $2 \\neq 0$.',
          },
          {
            myth: 'Two random variables with the same mean and variance must have the same distribution.',
            reality:
              'Mean and variance capture only the first two moments; completely different shapes can share $(\\mu, \\sigma^2)$.',
            counterExample:
              '$Z \\sim \\mathcal{N}(0, 1)$ and $U \\sim \\text{Uniform}(-\\sqrt{3}, \\sqrt{3})$ both have mean $0$ and variance $1$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Bias-Variance Tradeoff & Ridge Shrinkage',
            whyItMatters:
              'Scaling an estimator $\\hat{w}$ by $a < 1$ (like Ridge $\\lambda > 0$) shrinks its variance quadratically by $a^2$, trading a small bias for a huge drop in MSE (GATE DA 2026 Q.37).',
            pyqProof: 'GATE DA 2026 · Q.37 (2M MCQ)',
          },
          {
            targetSection: 'Sec 1 (Module 5)',
            targetWeek: 3,
            topic: 'Variance of $\\chi^2_1$ ($Z^2$)',
            whyItMatters:
              'For $Z \\sim \\mathcal{N}(0,1)$, $\\text{Var}(Z^2) = E[Z^4] - (E[Z^2])^2 = 3 - 1^2 = 2$ (tested directly in GATE DA 2025 Q.36).',
            pyqProof: 'GATE DA 2025 · Q.36 (2M MCQ)',
          },
        ],
      },
      {
        id: 'm4-c2-2',
        title: 'Markov & Chebyshev Inequalities (Distribution-Free Tail Bounds)',
        subtitle: 'Guaranteeing upper bounds on extreme events using only the mean and variance',
        priority: 'high-yield',
        buildsOn: 'm4-c2-1 Variance & Indicator Bridge',
        toyExample: {
          title: 'Bounding High Earners Without Knowing the Salary Histogram',
          scenario:
            'A company announces its average salary is $\\mu = 50$ thousand ($X \\ge 0$). Without seeing the salary distribution, what is the maximum possible fraction of employees earning $\\ge 200$ thousand? And if you also know $\\sigma = 30$ thousand, how tight is the $3\\sigma$ tail bound?',
          walkthroughSteps: [
            '1. **Markov (mean only, $X \\ge 0$):** Suppose a fraction $p$ earns $\\ge 200$. Even if everyone else earns $0$, those top earners alone contribute at least $200p$ to the average.',
            '2. Since the overall average is $50$, we must have $200p \\le 50 \\implies p \\le \\frac{50}{200} = 0.25$ (at most $25\\%$).',
            '3. **Chebyshev (mean + variance):** To bound $P(|X - 50| \\ge 90)$ (i.e., $k = 90/30 = 3$ standard deviations away), apply Markov to the non-negative RV $Y = (X - 50)^2$ with threshold $90^2$:',
            '4. $P(|X - 50| \\ge 90) = P((X - 50)^2 \\ge 90^2) \\le \\frac{E[(X-50)^2]}{90^2} = \\frac{30^2}{90^2} = \\frac{1}{9} \\approx 11.1\\%$.',
          ],
          ahaMoment:
            'Notice why you only need to understand Markov once: Chebyshev is literally Markov’s inequality applied to the squared deviation $(X-\\mu)^2 \\ge 0$! And because a square is never negative, Chebyshev works even when $X$ itself dips below zero.',
        },
        theoremAndFormula: {
          statement:
            '**Markov’s Inequality** bounds the upper tail of any *non-negative* random variable. **Chebyshev’s Inequality** bounds two-sided deviations from the mean for *any* random variable with finite variance.',
          formulaLatex:
            '\\text{Markov } (X \\ge 0,\\; a > 0):\\; P(X \\ge a) \\le \\frac{E[X]}{a} \\qquad \\text{Chebyshev } (k > 0):\\; P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}',
          plainEnglishDecoding:
            'You can also write Chebyshev directly with a raw distance $c$ as $P(|X - \\mu| \\ge c) \\le \\frac{\\text{Var}(X)}{c^2}$. Just notice that for $k \\le 1$, the bound $1/k^2 \\ge 1$ is trivially true and gives no real squeeze.',
          workedMiniExamples: [
            {
              prompt:
                'Let $X_1, \\dots, X_n$ be iid with mean $\\mu$ and variance $\\sigma^2 = 4$. Find the minimum $n$ guaranteed by Chebyshev so that $P(|\\bar{X}_n - \\mu| \\ge 0.5) \\le 0.04$.',
              solution:
                'Here $E[\\bar{X}_n] = \\mu$ and $\\text{Var}(\\bar{X}_n) = \\frac{\\sigma^2}{n} = \\frac{4}{n}$. By Chebyshev, $P(|\\bar{X}_n - \\mu| \\ge 0.5) \\le \\frac{4/n}{0.5^2} = \\frac{16}{n}$. Requiring $\\frac{16}{n} \\le 0.04$ gives $n \\ge \\frac{16}{0.04} = 400$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Markov’s inequality $P(X \\ge a) \\le E[X]/a$ holds for any random variable $X$ with $a > 0$.',
            reality:
              'False! Non-negativity $X \\ge 0$ (almost surely) is strictly required.',
            counterExample:
              'Let $X \\in \\{-100, +100\\}$ with probability $1/2$ each. Then $E[X] = 0$, so $E[X]/100 = 0$, yet $P(X \\ge 100) = 0.5 > 0$!',
          },
          {
            myth: 'For a Normal RV, Chebyshev’s bound $1/k^2$ is tight.',
            reality:
              'Chebyshev is distribution-free and therefore very loose for bell-shaped curves: at $k=2$, Chebyshev says $\\le 25\\%$ while Normal has $4.55\\%$.',
            counterExample:
              'Chebyshev is tight only for two-point / three-point discrete RVs placing mass $\\frac{1}{2k^2}$ at $\\mu \\pm k\\sigma$ and $1 - \\frac{1}{k^2}$ at $\\mu$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1 (Module 5) & Sec 6 (ML)',
            targetWeek: 3,
            topic: 'Weak Law of Large Numbers & Estimator Consistency',
            whyItMatters:
              'Showing $\\text{Var}(\\hat{p}_n) = \\frac{p(1-p)}{n} \\to 0$ (GATE DA 2025 Q.54) proves via Chebyshev that empirical frequencies converge to true probabilities as sample size grows.',
            pyqProof: 'GATE DA 2025 · Q.54 (2M MSQ)',
          },
        ],
      },
      {
        id: 'm4-c2-3',
        title: 'Law of Total Expectation (EVE) & Law of Total Variance (EVVE)',
        subtitle: 'Dissecting two-stage hierarchical randomness into within-group and between-group parts',
        priority: 'core-pillar',
        buildsOn: 'm4-c2-1 Variance & Conditional Distributions',
        toyExample: {
          title: 'Two-Box Coin Experiment (Why Variance Has TWO Terms)',
          scenario:
            'Flip a fair coin ($Y \\in \\{A, B\\}$ w.p. $1/2$ each) to pick a biased coin: Box $A$ has $p=0.2$, Box $B$ has $p=0.8$. Then toss the chosen coin $10$ times and count Heads $X$. Find $E[X]$ and $\\text{Var}(X)$.',
          walkthroughSteps: [
            '1. **Conditional Means:** Given $Y=A$, $E[X\\mid A] = 10(0.2) = 2$. Given $Y=B$, $E[X\\mid B] = 10(0.8) = 8$.',
            '2. **EVE (Average of Conditional Means):** $E[X] = E[E[X\\mid Y]] = \\frac{1}{2}(2) + \\frac{1}{2}(8) = 5$.',
            '3. **Conditional Variances:** In BOTH boxes, $\\text{Var}(X \\mid Y) = 10(0.2)(0.8) = 1.6$. So the average conditional variance is $E[\\text{Var}(X\\mid Y)] = 1.6$.',
            '4. **Wait—is total $\\text{Var}(X) = 1.6$?** NO! Even before tossing, picking between a $2$-head box and an $8$-head box creates huge spread around $5$: $\\text{Var}(E[X\\mid Y]) = \\frac{(2-5)^2 + (8-5)^2}{2} = 9$.',
            '5. **EVVE Combines Both:** $\\text{Var}(X) = 1.6 + 9 = 10.6$!',
          ],
          ahaMoment:
            'Here is the clear picture to carry with you: when an experiment has two stages, total variance splits cleanly into **within-group noise** $E[\\text{Var}(X\\mid Y)]$ PLUS **between-group mean swing** $\\text{Var}(E[X\\mid Y])$.',
        },
        theoremAndFormula: {
          statement:
            'Note that $E[X \\mid Y]$ and $\\text{Var}(X \\mid Y)$ are **random variables** (functions of $Y$). Averaging $E[X \\mid Y]$ recovers $E[X]$ (**EVE**), while total variance adds the average of conditional variance and the variance of conditional expectation (**EVVE**).',
          formulaLatex:
            'E[X] = E\\!\\big[E[X \\mid Y]\\big] \\qquad \\text{and} \\qquad \\text{Var}(X) = E\\!\\big[\\text{Var}(X \\mid Y)\\big] + \\text{Var}\\!\\big(E[X \\mid Y]\\big)',
          plainEnglishDecoding:
            'An easy way to remember both forever: **EVE** reads "$E$ of $E$", and **EVVE** reads "$E[V] + V[E]$". Since $\\text{Var}(E[X\\mid Y]) \\ge 0$ can never be negative, learning $Y$ shrinks variance on average: $E[\\text{Var}(X\\mid Y)] \\le \\text{Var}(X)$.',
          workedMiniExamples: [
            {
              prompt:
                'Direct Law of Iterated Expectations check (GATE DA 2025 Q.11): What is $E[E[X \\mid Y]]$ for integrable RVs $X, Y$?',
              solution:
                'By EVE, $E[E[X \\mid Y]] = E[X]$ identically, regardless of whether $X$ and $Y$ are independent or correlated.',
            },
            {
              prompt:
                'Roll a fair 6-sided die to get $N \\in \\{1,\\dots,6\\}$ ($E[N] = 3.5$, $\\text{Var}(N) = \\frac{35}{12}$), then toss $N$ fair coins and count Heads $X$. Find $E[X]$ and $\\text{Var}(X)$.',
              solution:
                'Given $N$, $X \\mid N \\sim \\text{Binomial}(N, 1/2)$, so $E[X \\mid N] = N/2$ and $\\text{Var}(X \\mid N) = N/4$. By EVE: $E[X] = E[N/2] = 1.75$. By EVVE: $\\text{Var}(X) = E[N/4] + \\text{Var}(N/2) = \\frac{3.5}{4} + \\frac{1}{4}\\cdot\\frac{35}{12} = \\frac{7}{8} + \\frac{35}{48} = \\frac{77}{48}$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: '$\\text{Var}(X) = E[\\text{Var}(X \\mid Y)]$, just like $E[X] = E[E[X \\mid Y]]$.',
            reality:
              'False! Missing the between-group term $\\text{Var}(E[X\\mid Y]) \\ge 0$. Equality $\\text{Var}(X) = E[\\text{Var}(X\\mid Y)]$ holds ONLY when $E[X \\mid Y]$ is constant almost surely.',
            counterExample:
              'If $X = Y \\sim \\text{Bernoulli}(0.5)$, then $\\text{Var}(X \\mid Y) = 0$ identically, so $E[\\text{Var}(X\\mid Y)] = 0$, whereas $\\text{Var}(X) = \\text{Var}(E[X\\mid Y]) = 0.25$!',
          },
          {
            myth: '$E[X \\mid Y]$ is a fixed deterministic constant.',
            reality:
              '$E[X \\mid Y = y]$ is a constant for a specific observed $y$, whereas $E[X \\mid Y]$ is a **random variable** whose value depends on $Y$.',
            counterExample:
              'In the Two-Box coin game, $E[X \\mid Y]$ takes values $2$ and $8$ with probability $1/2$ each.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Explained Variance ($R^2$) & Decision Tree Variance Reduction',
            whyItMatters:
              'In regression, $\\text{Var}(Y) = E[\\text{Var}(Y\\mid X)] + \\text{Var}(E[Y\\mid X])$ separates irreducible/residual noise from the signal variance explained by feature vector $X$.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm4-c2-ht1',
        title: 'Algebraic Symmetry & Sign-Flip Variance Shortcuts',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 · Q.62', 'GATE DA 2026 · Q.44'],
        problemStatement:
          'You face a $100\\times 100$ double sum of squared differences $\\sum\\sum (x_i - x_j)^2$ or the variance of a product like $(2X - 1)Y$ where $X \\in \\{0, 1\\}$.',
        triggerCue:
          'Huge index counts ($n=100$) inside pairwise differences $(x_i - x_j)^2$, or a Bernoulli variable transformed into $\\{-1, +1\\}$ via $2X - 1$.',
        bruteForceTrap:
          'Inventing sample values or expanding $\\text{Var}(XY) = E[X^2]E[Y^2] - (E[X]E[Y])^2$ slowly without noticing $(2X-1)^2 \\equiv 1$ or $\\sum\\sum(x_i-x_j)^2 = 2n\\sum(x_i-\\bar{x})^2$.',
        mentalShift:
          'Look for invariant quadratic squares: $(2X-1)^2 = 1$ cancels $p$ completely when $E[Y]=0$, and centering $(x_i - \\bar{x}) - (x_j - \\bar{x})$ turns pairwise double sums into $2n$ times sum of squares.',
        steps: [
          {
            label: 'Check if a discrete factor squares to a constant',
            detail:
              'For $X \\in \\{0,1\\}$, $S = 2X - 1 \\in \\{-1, +1\\} \\implies S^2 = 1$ always.',
          },
          {
            label: 'Check if a mean is zero',
            detail:
              'If $E[Y] = 0$ and $S \\perp Y$, then $E[SY] = E[S]E[Y] = 0$, so $\\text{Var}(SY) = E[S^2]E[Y^2] = E[Y^2] = \\text{Var}(Y)$.',
          },
          {
            label: 'For double sums $\\sum\\sum (x_i - x_j)^2$, apply $2n\\sum(x_i - \\bar{x})^2$',
            detail:
              'Match the given denominator against $2n$ and divide cleanly to extract $s^2 = \\frac{1}{n-1}\\sum(x_i - \\bar{x})^2$.',
          },
        ],
        lockInTakeaway:
          'Always check if a Bernoulli factor is secretly a $\\pm 1$ sign flip, and memorize $\\sum_{i,j}(x_i-x_j)^2 = 2n\\sum_i(x_i-\\bar{x})^2$.',
      },
      {
        id: 'm4-c2-ht2',
        title: 'Two-Stage Experiments via EVE & EVVE',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2025 · Q.11', 'GATE DA 2025 · Q.36'],
        problemStatement:
          'A random experiment occurs in two stages: first a hyperparameter/count $Y$ is drawn randomly, then $X$ is generated from a conditional distribution given $Y$. Find $E[X]$ or $\\text{Var}(X)$.',
        triggerCue:
          'Nested randomness (*"First choose $N$ / $\\Theta$ at random, then draw $X$ given $N$ / $\\Theta$"*) or conditional distribution notation $X \\mid Y$.',
        bruteForceTrap:
          'Attempting to compute the unconditional marginal PMF/PDF $p_X(x) = \\sum_y p_{X\\mid Y}(x\\mid y)p_Y(y)$ first and integrating $x^2 p_X(x)$ directly.',
        mentalShift:
          'Never compute the unconditional PDF of $X$! Write down the clean conditional formulas $E[X\\mid Y]$ and $\\text{Var}(X\\mid Y)$ as functions of $Y$, then plug straight into EVE and EVVE.',
        steps: [
          {
            label: 'Write $E[X \\mid Y]$ and $\\text{Var}(X \\mid Y)$ as formulas of $Y$',
            detail:
              'For example, if $X \\mid Y \\sim \\text{Poisson}(Y)$, both equal $Y$. If $X \\mid Y \\sim U(Y-a, Y+a)$, $E[X\\mid Y]=Y$ and $\\text{Var}(X\\mid Y) = a^2/3$.',
          },
          {
            label: 'Compute $E[X] = E[E[X \\mid Y]]$',
            detail: 'Take expectation over $Y$ using linearity.',
          },
          {
            label: 'Compute $\\text{Var}(X) = E[\\text{Var}(X \\mid Y)] + \\text{Var}(E[X \\mid Y])$',
            detail: 'Add the expectation of the conditional variance and the variance of the conditional mean.',
          },
        ],
        lockInTakeaway:
          'Skip the marginal PDF completely—EVE + EVVE solve hierarchical models in 3 lines.',
      },
    ],
    arsenalCards: [
      {
        id: 'm4-c2-a1',
        badge: 'Weapon #1 · Pairwise Variance',
        whenYouSpot: 'Double sum $\\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2$ or $E[(X_1 - X_2)^2]$',
        directWeaponLatex:
          '\\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2 = 2n\\sum_{i=1}^n (x_i - \\bar{x})^2 \\qquad E[(X_1-X_2)^2] = 2\\text{Var}(X)',
        instantRule:
          'Double-sum of pairwise squared differences equals $2n$ times the sum of squared deviations around $\\bar{x}$.',
        tenSecondExample:
          'GATE 2026 Q.62: $\\frac{1}{2000}\\sum_{i,j=1}^{100}(x_i-x_j)^2 = 99 \\implies \\frac{200}{2000}\\sum(x_i-\\bar{x})^2 = 99 \\implies \\frac{1}{99}\\sum(x_i-\\bar{x})^2 = 10$.',
        oneFatalTrap:
          'Do not forget the factor of $2$ (every unordered pair $\\{i,j\\}$ appears twice in $\\sum_{i=1}^n\\sum_{j=1}^n$, and cross-terms double)!',
      },
      {
        id: 'm4-c2-a2',
        badge: 'Weapon #2 · Tail Bounds',
        whenYouSpot: 'Upper bound on $P(X \\ge a)$ or $P(|X-\\mu|\\ge c)$ without knowing the distribution',
        directWeaponLatex: 'P(X \\ge a) \\le \\frac{E[X]}{a} \\; (X\\ge 0) \\qquad\\quad P(|X - \\mu| \\ge c) \\le \\frac{\\text{Var}(X)}{c^2}',
        instantRule:
          'Use Markov when only $E[X]$ is given (and $X \\ge 0$); use Chebyshev when $\\text{Var}(X)$ or $\\sigma$ is given.',
        tenSecondExample:
          'If $\\text{Var}(\\bar{X}_n) = 4/n$, Chebyshev guarantees $P(|\\bar{X}_n-\\mu|\\ge 0.5) \\le \\frac{4/n}{0.25} = \\frac{16}{n}$.',
        oneFatalTrap:
          'Never apply Markov if $X$ can take negative values!',
      },
      {
        id: 'm4-c2-a3',
        badge: 'Weapon #3 · EVE & EVVE',
        whenYouSpot: 'Nested conditional expressions $E[E[X\\mid Y]]$ or two-stage random models',
        directWeaponLatex: 'E[X] = E[E[X\\mid Y]], \\qquad \\text{Var}(X) = E[\\text{Var}(X\\mid Y)] + \\text{Var}(E[X\\mid Y])',
        instantRule:
          'Condition on the outer variable $Y$: average the conditional means for $E[X]$, and sum average-of-variance + variance-of-mean for $\\text{Var}(X)$.',
        tenSecondExample:
          'If $X\\mid Y \\sim U(Y^2-0.1, Y^2+0.1)$ with $Y \\sim U(-1,1)$, $\\text{Var}(X) = \\frac{0.2^2}{12} + \\text{Var}(Y^2)$.',
        oneFatalTrap:
          'Never drop $\\text{Var}(E[X \\mid Y])$—conditioning alone does NOT account for the spread of the conditional mean!',
      },
    ],
    questions: [
      {
        id: 'm4-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Affine Variance Scaling',
        marks: 1,
        type: 'NAT',
        stem: 'Let $X$ be a random variable with $E[X] = 4$ and $\\text{Var}(X) = 5$. What is $\\text{Var}(-3X + 12)$?',
        natAnswer: { min: 45, max: 45, exactDisplay: '45' },
        triggerHint: 'Shifts $+12$ vanish and the multiplier $-3$ squares.',
        intuitiveSolution: [
          'Using $\\text{Var}(aX + b) = a^2\\text{Var}(X)$, the additive constant $+12$ has zero effect on spread.',
          '$\\text{Var}(-3X + 12) = (-3)^2 \\text{Var}(X) = 9 \\times 5 = 45$.',
        ],
        directShortcutUsed: '$\\text{Var}(aX + b) = a^2\\text{Var}(X) = 9 \\times 5 = 45$.',
      },
      {
        id: 'm4-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.57',
        year: 2024,
        marks: 2,
        type: 'NAT',
        stem: 'Let $X$ be an Exponential random variable with rate parameter $\\lambda > 0$ (so $f_X(x) = \\lambda e^{-\\lambda x}$ for $x \\ge 0$). If $5E[X] = \\text{Var}(X)$, what is the value of $\\lambda$?',
        natAnswer: { min: 0.19, max: 0.21, exactDisplay: '0.2' },
        triggerHint: 'Recall $E[X] = 1/\\lambda$ and $\\text{Var}(X) = 1/\\lambda^2$ for $\\text{Exp}(\\lambda)$.',
        intuitiveSolution: [
          'For $X \\sim \\text{Exp}(\\lambda)$, $E[X] = \\frac{1}{\\lambda}$ and $\\text{Var}(X) = \\frac{1}{\\lambda^2}$.',
          'Setting $5E[X] = \\text{Var}(X)$ gives $\\frac{5}{\\lambda} = \\frac{1}{\\lambda^2}$.',
          'Since $\\lambda > 0$, multiplying by $\\lambda^2$ gives $5\\lambda = 1 \\implies \\lambda = 0.2$.',
        ],
        directShortcutUsed: '$\\frac{5}{\\lambda} = \\frac{1}{\\lambda^2} \\implies \\lambda = \\frac{1}{5} = 0.2$.',
      },
      {
        id: 'm4-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.11',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $X$ and $Y$ be two random variables with finite expectations. Which of the following is ALWAYS equal to $E[E[X \\mid Y]]$?',
        options: [
          { id: 'A', text: '$E[Y]$', whyTrueOrFalse: 'False — conditioning is on $Y$, but the inner expectation is of $X$.' },
          { id: 'B', text: '$E[X \\mid Y]$', whyTrueOrFalse: 'False — the outer expectation integrates out $Y$, leaving a constant, not a random variable.' },
          { id: 'C', text: '$E[X]$', whyTrueOrFalse: 'True — by the Law of Iterated Expectations (EVE), $E[E[X \\mid Y]] = E[X]$ always.' },
          { id: 'D', text: '$E[X]E[Y]$', whyTrueOrFalse: 'False.' },
        ],
        correctOptions: ['C'],
        triggerHint: 'Apply the Law of Total Expectation (EVE).',
        intuitiveSolution: [
          'By definition of conditional expectation, $E[E[X \\mid Y]] = \\sum_y E[X \\mid Y=y] P(Y=y) = \\sum_y \\sum_x x P(X=x \\mid Y=y) P(Y=y) = \\sum_x x P(X=x) = E[X]$.',
        ],
        directShortcutUsed: 'EVE: $E[E[X \\mid Y]] = E[X]$.',
      },
      {
        id: 'm4-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.44',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem: 'Let $X \\sim \\text{Bernoulli}(0.3)$ and $Y \\sim \\mathcal{N}(0, 100)$ be independent random variables. What is $\\text{Var}((2X - 1)Y)$?',
        options: [
          { id: 'A', text: '$12$', whyTrueOrFalse: 'False — uses $0.3(0.7)$ incorrectly instead of $(2X-1)^2 = 1$.' },
          { id: 'B', text: '$21$', whyTrueOrFalse: 'False.' },
          { id: 'C', text: '$84$', whyTrueOrFalse: 'False — confuses $(2X-1)^2$ with $4\\text{Var}(X) = 0.84$.' },
          { id: 'D', text: '$100$', whyTrueOrFalse: 'True: $(2X-1) \\in \\{-1, +1\\}$ so $(2X-1)^2 \\equiv 1$ and $E[(2X-1)Y] = 0$, giving $\\text{Var} = E[Y^2] = 100$.' },
        ],
        correctOptions: ['D'],
        triggerHint: 'Evaluate $(2X - 1)^2$ for $X \\in \\{0, 1\\}$!',
        intuitiveSolution: [
          'Let $S = 2X - 1$. Because $X \\in \\{0, 1\\}$, $S$ only takes values $-1$ and $+1$, so $S^2 = 1$ with probability $1$!',
          'Since $X$ and $Y$ are independent and $E[Y] = 0$, $E[SY] = E[S]E[Y] = 0$.',
          'Also $E[(SY)^2] = E[S^2]E[Y^2] = 1 \\cdot \\text{Var}(Y) = 100$.',
          'Therefore $\\text{Var}((2X - 1)Y) = E[(SY)^2] - (E[SY])^2 = 100 - 0 = 100$.',
        ],
        directShortcutUsed: '$(2X-1)^2 \\equiv 1$ and $E[Y]=0 \\implies \\text{Var}((2X-1)Y) = E[Y^2] = 100$.',
      },
      {
        id: 'm4-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.62',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Let $x_1, x_2, \\dots, x_{100}$ be $100$ real numbers with sample mean $\\bar{x} = \\frac{1}{100}\\sum_{i=1}^{100} x_i$. If $\\frac{1}{2000}\\sum_{i=1}^{100}\\sum_{j=1}^{100} (x_i - x_j)^2 = 99$, what is the value of $\\frac{1}{99}\\sum_{i=1}^{100} (x_i - \\bar{x})^2$?',
        natAnswer: { min: 10, max: 10, exactDisplay: '10' },
        triggerHint: 'Use $\\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2 = 2n\\sum_{i=1}^n (x_i - \\bar{x})^2$.',
        intuitiveSolution: [
          'Write $x_i - x_j = (x_i - \\bar{x}) - (x_j - \\bar{x})$ and sum squares over $i,j \\in \\{1,\\dots,100\\}$: the cross term $-2\\sum_i(x_i-\\bar{x})\\sum_j(x_j-\\bar{x}) = 0$.',
          'Hence $\\sum_{i=1}^{100}\\sum_{j=1}^{100}(x_i - x_j)^2 = 2(100)\\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 200\\sum_{i=1}^{100}(x_i - \\bar{x})^2$.',
          'Dividing by $2000$ gives $\\frac{1}{10}\\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 99 \\implies \\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 990$.',
          'Therefore $\\frac{1}{99}\\sum_{i=1}^{100}(x_i - \\bar{x})^2 = \\frac{990}{99} = 10$.',
        ],
        directShortcutUsed: '$\\frac{2n}{2000}\\sum(x_i-\\bar{x})^2 = \\frac{1}{10}\\sum(x_i-\\bar{x})^2 = 99 \\implies s^2 = \\frac{990}{99} = 10$.',
      },
      {
        id: 'm4-c2-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber MSQ · Bounds & Total Variance Traps',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following statements is/are ALWAYS true for random variables $X$ and $Y$ with finite variances?',
        options: [
          {
            id: 'A',
            text: 'If $X$ and $Y$ are independent, then $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$.',
            whyTrueOrFalse: 'True — coefficients square, so $(-1)^2\\text{Var}(Y) = +\\text{Var}(Y)$.',
          },
          {
            id: 'B',
            text: '$\\text{Var}(X) \\ge E[\\text{Var}(X \\mid Y)]$.',
            whyTrueOrFalse: 'True — by EVVE, $\\text{Var}(X) - E[\\text{Var}(X\\mid Y)] = \\text{Var}(E[X\\mid Y]) \\ge 0$.',
          },
          {
            id: 'C',
            text: 'For any random variable $X$ with $E[X] = 2$, Markov’s inequality guarantees $P(X \\ge 10) \\le 0.2$.',
            whyTrueOrFalse: 'False — Markov requires $X \\ge 0$! Take $X = 10$ w.p. $0.5$ and $X = -6$ w.p. $0.5$: $E[X] = 2$, yet $P(X \\ge 10) = 0.5 > 0.2$.',
          },
          {
            id: 'D',
            text: 'If $Z \\sim \\mathcal{N}(0, 1)$, then $P(|Z| \\ge 2) \\le 0.25$ by Chebyshev’s inequality.',
            whyTrueOrFalse: 'True — $\\mu = 0, \\sigma = 1, k = 2 \\implies P(|Z| \\ge 2) \\le 1/2^2 = 0.25$ (in fact the true Normal probability is $\\approx 0.0455 \\le 0.25$).',
          },
        ],
        correctOptions: ['A', 'B', 'D'],
        triggerHint: 'Check the $X \\ge 0$ prerequisite in Markov’s inequality!',
        intuitiveSolution: [
          '(A) is true because independence kills covariance and $(-1)^2 = +1$.',
          '(B) is true directly from EVVE since $\\text{Var}(E[X\\mid Y]) \\ge 0$.',
          '(C) is FALSE because $X$ is not required to be non-negative (counterexample: $X \\in \\{-6, 10\\}$ w.p. $0.5$ each has $E[X]=2$ and $P(X\\ge 10)=0.5 > 0.2$).',
          '(D) is true by Chebyshev with $k=2$: $1/4 = 0.25$.',
        ],
        directShortcutUsed: 'Markov needs $X \\ge 0$; EVVE gives $\\text{Var}(X) \\ge E[\\text{Var}(X\\mid Y)]$.',
      },
    ],
  },
  {
    id: 'prob3-ch3',
    number: 3,
    title: 'Covariance, Correlation $\\rho \\in [-1,1]$, Cauchy-Schwarz & Uncorrelated vs. Independent Traps',
    shortTitle: 'Covariance & Correlation',
    estimatedHours: 3.5,
    dayLabel: 'Week 2 · Day 6',
    tagline:
      'Let’s use bilinear Covariance to track how two variables move together, see why Cauchy-Schwarz traps Pearson correlation inside $[-1, 1]$, and conquer the classic GATE DA trap: $\\text{Cov}(X,Y)=0$ NEVER proves independence unless $(X,Y)$ is Jointly Normal.',
    syllabusMapping: [
      'Covariance, bilinear identities, and variance of correlated linear combinations',
      'Pearson correlation coefficient $\\rho \\in [-1, 1]$ and Cauchy-Schwarz inequality',
      'Uncorrelated vs. Independent random variables & Covariance Matrices',
    ],
    whatIsImportant: [
      'Bilinearity $\\text{Cov}(aX+b, cY+d) = ac\\,\\text{Cov}(X,Y)$ and $\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y) \\pm 2\\text{Cov}(X,Y)$',
      'Standardized linear trick: $X = aZ + b \\implies \\text{Cov}(X, Z) = a$ when $\\text{Var}(Z)=1$ (GATE DA 2025 Q.20)',
      'Scale/shift correlation rule: $\\rho(aX+b, cY+d) = \\text{sgn}(ac)\\,\\rho(X,Y) \\in [-1, 1]$',
      'Zero correlation despite strict nonlinear dependence: $X \\in \\{-1, 0, 1\\}, Y = X^2$ or $X \\sim U(-1,1), Y\\mid X \\sim U(x^2-0.1, x^2+0.1)$ (GATE DA 2026 Q.63)',
      'Jointly Normal vs. Marginally Normal distinction ($Y = SX$ with fair sign $S$)',
    ],
    whatIsNotImportant: [
      'Spearman’s rank correlation or Kendall’s $\\tau$ formulas',
      'Wishart distributions of sample covariance matrices',
    ],
    inboundStream: 'Module 4 Ch.1–2 Expectation, Variance & EVE',
    outboundStream: [
      'Module 6–7 Covariance Matrix $\\Sigma = \\frac{1}{n}X_c^T X_c$ PSD property & Rayleigh Quotient (GATE DA 2026 Q.65)',
      'Week 7 PCA Maximum Projected Variance (GATE DA 2025 Q.60) & Orthogonal Principal Components (GATE DA 2026 Q.11)',
      'Week 7 Simple Linear Regression Slope $\\frac{\\text{Cov}(X,Y)}{\\text{Var}(X)}$ & Ridge Regularization (GATE DA 2026 Q.37)',
    ],
    glossary: [
      {
        term: 'Covariance',
        symbol: '$\\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$',
        plainEnglish:
          'Measures whether $X$ and $Y$ tend to rise and fall together (positive), move in opposite directions (negative), or show no straight-line tendency (zero). It acts just like a dot product on centered random variables!',
        tinyExample: 'For $X = \\mathbf{1}_{HH}$ and $Y = \\mathbf{1}_{\\ge 1\\,H}$ on $2$ coins, $\\text{Cov}(X,Y) = \\frac{1}{4} - \\frac{1}{4}\\cdot\\frac{3}{4} = \\frac{1}{16}$.',
      },
      {
        term: 'Bilinearity of Covariance',
        symbol: '$\\text{Cov}(aX+b, cY+d) = ac\\,\\text{Cov}(X,Y)$',
        plainEnglish:
          'Shifts ($+b, +d$) vanish inside covariance while multipliers ($a, c$) pull right out linearly—and sums expand term by term just like multiplying two algebraic brackets.',
        tinyExample: '$\\text{Cov}(X + Y, X - Y) = \\text{Var}(X) - \\text{Var}(Y)$.',
      },
      {
        term: 'Variance of a Correlated Sum/Difference',
        symbol: '$\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y) \\pm 2\\text{Cov}(X,Y)$',
        plainEnglish:
          'The statistical Law of Cosines: when variables are correlated, you must include the $\\pm 2\\text{Cov}(X,Y)$ cross-term. Notice that negative covariance actually *increases* $\\text{Var}(X - Y)$!',
        tinyExample: 'If $\\text{Var}(X)=9$, $\\text{Var}(Y)=16$, and $\\text{Cov}(X,Y)=-6$, then $\\text{Var}(X-Y) = 9 + 16 - 2(-6) = 37$.',
      },
      {
        term: 'Indicator Covariance',
        symbol: '$\\text{Cov}(\\mathbf{1}_A, \\mathbf{1}_B) = P(A \\cap B) - P(A)P(B)$',
        plainEnglish:
          'For two $0/1$ event switches, covariance reduces directly to how much more (or less) often $A$ and $B$ overlap compared to independent chance.',
        tinyExample: 'If $A$ and $B$ are disjoint with positive probabilities, $\\text{Cov}(\\mathbf{1}_A, \\mathbf{1}_B) = -P(A)P(B) < 0$.',
      },
      {
        term: 'Pearson Correlation Coefficient',
        symbol: '$\\rho(X, Y) = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}$',
        plainEnglish:
          'A unit-free score trapped in $[-1, 1]$ that measures the strength and direction of a **straight-line** relationship between $X$ and $Y$. Think of it as the covariance of their $z$-scores!',
        tinyExample: 'Fahrenheit ($F = 1.8C + 32$) and Celsius ($C$) lie on an exact upward line, so $\\rho(C, F) = +1$.',
      },
      {
        term: 'Cauchy-Schwarz Inequality',
        symbol: '$|\\text{Cov}(X, Y)| \\le \\sigma_X \\sigma_Y$',
        plainEnglish:
          'The fundamental bound guaranteeing that $|\\rho(X, Y)| \\le 1$ for every pair of random variables, with equality $|\\rho| = 1$ happening if and only if $Y = aX + b$ lies on an exact straight line.',
        tinyExample: 'If $\\text{Var}(X) = 9$ and $\\text{Var}(Y) = 16$, then $\\text{Cov}(X,Y)$ must stay inside $[-12, 12]$.',
      },
      {
        term: 'Affine Invariance of Correlation',
        symbol: '$\\rho(aX+b, cY+d) = \\text{sgn}(ac)\\,\\rho(X, Y)$',
        plainEnglish:
          'Because correlation divides out standard deviations, changing units or adding offsets never changes $|\\rho|$—only flipping the sign of one variable flips the sign of $\\rho$.',
        tinyExample: 'If $\\rho(X, Y) = 0.6$, then $\\rho(-2X + 7, 5Y - 3) = -0.6$.',
      },
      {
        term: 'Uncorrelated vs. Independent',
        symbol: '$\\text{Cov}(X,Y) = 0 \\not\\implies X \\perp Y$',
        plainEnglish:
          'Independent variables are always uncorrelated, yet zero correlation ONLY says there is no *straight-line* tilt—two variables can still follow a tight curved rule like $Y = X^2$!',
        tinyExample: 'For $X \\in \\{-1, 0, +1\\}$ equally likely and $Y = X^2$, $\\rho(X,Y) = 0$ even though $X$ completely determines $Y$.',
      },
      {
        term: 'Joint (Bivariate) Normality Exception',
        plainEnglish:
          'The one famous setting where zero correlation DOES guarantee independence: $(X, Y)$ must be **jointly** Normal. Merely having $X$ Normal and $Y$ Normal separately is NOT enough!',
        tinyExample: 'With $X \\sim \\mathcal{N}(0,1)$ and independent sign $S \\in \\{-1,+1\\}$, $Y = SX$ is marginally Normal with $\\text{Cov}(X,Y)=0$, yet $|Y| = |X|$!',
      },
      {
        term: 'Covariance Matrix',
        symbol: '$\\Sigma_{ij} = \\text{Cov}(X_i, X_j)$',
        plainEnglish:
          'A symmetric table holding variances along the main diagonal and pairwise covariances off the diagonal. Because $\\mathbf{u}^T \\Sigma \\mathbf{u} = \\text{Var}(\\mathbf{u}^T \\mathbf{x}) \\ge 0$, every covariance matrix is Positive Semidefinite (PSD).',
        tinyExample: 'In PCA, the top eigenvector of $\\Sigma$ points along the direction of maximum data variance.',
      },
      {
        term: 'Regression Slope vs. Correlation',
        symbol: '$\\beta_1 = \\rho(X, Y)\\frac{\\sigma_Y}{\\sigma_X}$',
        plainEnglish:
          'Do not confuse dimensionless correlation $\\rho$ with the linear regression slope $\\beta_1 = \\frac{\\text{Cov}(X,Y)}{\\text{Var}(X)}$, which carries units of $Y$ per unit of $X$.',
        tinyExample: 'With $\\rho = 0.8$, $\\sigma_X = 2$, and $\\sigma_Y = 10$, the regression slope is $0.8 \\times (10/2) = 4.0$.',
      },
    ],
    generatorId: 'pairwise-var-gen',
    concepts: [
      {
        id: 'm4-c3-1',
        title: 'Bilinear Covariance & Variance of Correlated Linear Combinations',
        subtitle: 'Measuring linear co-movement and summing correlated random variables',
        priority: 'core-pillar',
        buildsOn: 'm4-c1-2 Linearity & m4-c2-1 Variance',
        toyExample: {
          title: 'Two Coin Indicator Covariance ($X = \\mathbf{1}_{HH}$, $Y = \\mathbf{1}_{\\ge 1\\,H}$)',
          scenario:
            'Toss $2$ fair coins independently. Let $X = 1$ if *both* tosses are Heads ($0$ otherwise), and $Y = 1$ if *at least one* toss is Head ($0$ otherwise). Are $X$ and $Y$ positively correlated, and what is $\\text{Cov}(X, Y)$?',
          walkthroughSteps: [
            '1. **Find individual averages:** $E[X] = P(HH) = \\frac{1}{4}$ and $E[Y] = P(\\{HH, HT, TH\\}) = \\frac{3}{4}$.',
            '2. **Find the product $XY$:** Notice $X=1$ only on $HH$, and on $HH$ we ALSO have $Y=1$. Everywhere else $X=0$, so $XY = X$!',
            '3. Therefore $E[XY] = E[X] = \\frac{1}{4}$.',
            '4. **Subtract $E[X]E[Y]$:** $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y] = \\frac{1}{4} - \\left(\\frac{1}{4}\\right)\\left(\\frac{3}{4}\\right) = \\frac{1}{4} - \\frac{3}{16} = \\frac{1}{16} = 0.0625$.',
          ],
          ahaMoment:
            'See how simple indicator covariance really is? It boils down to pure event overlap: $\\text{Cov}(\\mathbf{1}_A, \\mathbf{1}_B) = P(A \\cap B) - P(A)P(B)$. And whenever $A \\subseteq B$, $P(A\\cap B) = P(A)$, handing you $P(A)(1 - P(B)) \\ge 0$ at a glance!',
        },
        theoremAndFormula: {
          statement:
            '**Covariance** behaves like an inner product (dot product) on centered random variables: it is symmetric, ignores additive shifts, pulls out scalar factors linearly, and satisfies $\\text{Cov}(X, X) = \\text{Var}(X)$.',
          formulaLatex:
            '\\text{Cov}(X, Y) = E[XY] - E[X]E[Y], \\qquad \\text{Var}(aX + bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) + 2ab\\,\\text{Cov}(X, Y)',
          plainEnglishDecoding:
            'Picture $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y)$ as the statistical Law of Cosines: just like $\\|u+v\\|^2 = \\|u\\|^2 + \\|v\\|^2 + 2\\langle u,v\\rangle$, when two variables are uncorrelated (orthogonal), the cross-term drops out and Pythagoras takes over!',
          workedMiniExamples: [
            {
              prompt:
                'Let $Z \\sim \\mathcal{N}(0, 1)$ and $X = aZ + b$. Given $E[X] = 1$, $E[(X - E[X])Z] = -2$, and $\\text{Var}(X) = 4$, find $(a, b)$ (GATE DA 2025 Q.20).',
              solution:
                'Since $E[Z] = 0$, $E[X] = aE[Z] + b = b \\implies b = 1$. Next, $X - E[X] = aZ$, so $E[(X - E[X])Z] = \\text{Cov}(X, Z) = aE[Z^2] = a(1) = a = -2$. Check $\\text{Var}(X) = (-2)^2(1) = 4$. Thus $(a, b) = (-2, 1)$.',
            },
            {
              prompt:
                'Suppose $\\text{Var}(X_i) = 4$ for $i=1,2,3$ and $\\text{Cov}(X_i, X_j) = 1$ for every $i \\neq j$. Compute $\\text{Var}(X_1 + X_2 + X_3)$.',
              solution:
                '$\\text{Var}\\left(\\sum_{i=1}^3 X_i\\right) = \\sum_{i=1}^3 \\text{Var}(X_i) + 2\\sum_{1\\le i<j\\le 3}\\text{Cov}(X_i, X_j) = 3(4) + 2\\binom{3}{2}(1) = 12 + 6 = 18$.',
            },
          ],
        },
        sandboxId: 'distribution-clt-lab',
        msqTraps: [
          {
            myth: '$\\text{Cov}(X + Y, X - Y)$ is always $0$.',
            reality:
              'By bilinearity, $\\text{Cov}(X+Y, X-Y) = \\text{Cov}(X,X) - \\text{Cov}(X,Y) + \\text{Cov}(Y,X) - \\text{Cov}(Y,Y) = \\text{Var}(X) - \\text{Var}(Y)$. It equals $0$ ONLY when $\\text{Var}(X) = \\text{Var}(Y)$!',
            counterExample:
              'Take independent $X \\sim \\mathcal{N}(0, 9)$ and $Y \\sim \\mathcal{N}(0, 1)$: $\\text{Cov}(X+Y, X-Y) = 9 - 1 = 8 \\neq 0$.',
          },
          {
            myth: 'Adding a constant $c$ to $X$ changes $\\text{Cov}(X, Y)$.',
            reality:
              'Constants have zero spread and zero covariance with anything: $\\text{Cov}(X + c, Y + d) = \\text{Cov}(X, Y)$.',
            counterExample:
              '$(X+c) - E[X+c] = X - E[X]$, so the centered variable is literally identical.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 2 (LA) & Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Covariance Matrix $\\Sigma = \\frac{1}{n}X_c^T X_c$ & Principal Component Analysis (PCA)',
            whyItMatters:
              'The $(i,j)$ entry of $\\Sigma$ is $\\text{Cov}(X_i, X_j)$. Because $\\mathbf{u}^T \\Sigma \\mathbf{u} = \\text{Var}(\\mathbf{u}^T\\mathbf{x}) \\ge 0$, $\\Sigma$ is symmetric Positive Semidefinite (PSD), and its top eigenvalue gives maximum projected variance (GATE DA 2025 Q.60, 2026 Q.11).',
            pyqProof: 'GATE DA 2025 · Q.60 (2M NAT) & GATE DA 2026 · Q.11 (1M MCQ)',
          },
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Ridge Regression under Correlated Features (Multicollinearity)',
            whyItMatters:
              'When two predictors are strongly correlated ($|\\rho| \\approx 1$), $X^T X$ becomes nearly singular and OLS weights suffer huge variance; Ridge regression adds $\\lambda I$ to stabilize the covariance matrix and cut variance (GATE DA 2026 Q.37).',
            pyqProof: 'GATE DA 2026 · Q.37 (2M MCQ)',
          },
        ],
      },
      {
        id: 'm4-c3-2',
        title: 'Pearson Correlation $\\rho \\in [-1, 1]$ & Cauchy-Schwarz Inequality',
        subtitle: 'Normalizing units into $z$-scores so linear strength always sits between $-1$ and $+1$',
        priority: 'core-pillar',
        buildsOn: 'm4-c3-1 Covariance & Variance',
        toyExample: {
          title: 'Why $\\rho$ Can Never Exceed $+1$ (Standardizing Height vs. Double-Height)',
          scenario:
            'Suppose $X$ is height in meters ($\\sigma_X = 0.1\\text{ m}$) and $Y = 2X + 1$ ($\\sigma_Y = 0.2\\text{ m}$). Notice $\\text{Cov}(X, Y) = 2\\text{Var}(X) = 0.02\\text{ m}^2$—which jumps by $10{,}000\\times$ if you switch units to centimeters! How do we make linear strength unit-free?',
          walkthroughSteps: [
            '1. Convert both variables to unitless $z$-scores: $\\tilde{X} = \\frac{X - \\mu_X}{\\sigma_X}$ and $\\tilde{Y} = \\frac{Y - \\mu_Y}{\\sigma_Y}$, so $\\text{Var}(\\tilde{X}) = \\text{Var}(\\tilde{Y}) = 1$.',
            '2. Their covariance is now the **Pearson Correlation**: $\\rho(X,Y) = \\text{Cov}(\\tilde{X}, \\tilde{Y}) = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y}$.',
            '3. Compute $\\text{Var}(\\tilde{X} - \\tilde{Y}) = 1 + 1 - 2\\rho \\ge 0 \\implies \\rho \\le 1$.',
            '4. Compute $\\text{Var}(\\tilde{X} + \\tilde{Y}) = 1 + 1 + 2\\rho \\ge 0 \\implies \\rho \\ge -1$.',
          ],
          ahaMoment:
            'Here is the cleanest way to remember Pearson correlation: it is simply the covariance of the $z$-scores! And $\\rho = +1$ occurs if and only if $\\text{Var}(\\tilde{X} - \\tilde{Y}) = 0$, which means every point sits on an exact upward straight line $Y = aX + b$ ($a > 0$).',
        },
        theoremAndFormula: {
          statement:
            'By the **Cauchy-Schwarz Inequality** $(E[UV])^2 \\le E[U^2]E[V^2]$ applied to centered $U = X - \\mu_X$ and $V = Y - \\mu_Y$, the **Pearson Correlation** $\\rho(X, Y)$ is always trapped in $[-1, 1]$ and is invariant to positive affine rescaling.',
          formulaLatex:
            '\\rho(X,Y) = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1], \\qquad \\rho(aX+b, cY+d) = \\text{sgn}(ac)\\,\\rho(X,Y) \\; (a,c \\neq 0)',
          plainEnglishDecoding:
            'Rescaling $X$ and $Y$ by positive numbers or sliding them up and down never moves $\\rho$ at all. Flipping the sign of *just one* variable reverses the sign of $\\rho$, while flipping *both* cancels out and leaves $\\rho$ unchanged.',
          workedMiniExamples: [
            {
              prompt: 'If $\\rho(X, Y) = 0.7$, find $\\rho(3X - 5, -2Y + 100)$.',
              solution:
                'Here $a = 3 > 0$ and $c = -2 < 0$, so $\\text{sgn}(ac) = -1$. Shifts $-5$ and $+100$ vanish. Hence $\\rho(3X - 5, -2Y + 100) = -0.7$.',
            },
            {
              prompt: 'Given $\\text{Var}(X) = 9$ and $\\text{Var}(Y) = 16$, what is the valid range of $\\text{Cov}(X, Y)$?',
              solution:
                'By Cauchy-Schwarz, $|\\text{Cov}(X, Y)| \\le \\sigma_X \\sigma_Y = 3 \\times 4 = 12$, so $\\text{Cov}(X, Y) \\in [-12, 12]$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $\\rho(X, Y) = 0.8$, then the linear regression line predicting $Y$ from $X$ has slope $0.8$.',
            reality:
              '$\\rho$ is dimensionless, whereas the OLS slope has units of $Y/X$: $\\beta_1 = \\frac{\\text{Cov}(X,Y)}{\\text{Var}(X)} = \\rho(X,Y)\\frac{\\sigma_Y}{\\sigma_X}$.',
            counterExample:
              'If $\\rho = 0.8$, $\\sigma_X = 2$, $\\sigma_Y = 10$, then the regression slope is $0.8 \\times (10/2) = 4.0$, not $0.8$.',
          },
          {
            myth: 'If $\\rho(X, Y) = 1$, then $Y = X$.',
            reality:
              '$\\rho(X, Y) = 1$ means $Y = aX + b$ for some $a > 0$ and $b \\in \\mathbb{R}$, not necessarily $a=1, b=0$.',
            counterExample:
              'Temperature in Fahrenheit ($F = 1.8C + 32$) and Celsius ($C$) have $\\rho(C, F) = +1$, even though $F \\neq C$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Simple Linear Regression & Coefficient of Determination $R^2$',
            whyItMatters:
              'The OLS slope is $\\hat{w}_1 = \\frac{\\text{Cov}(X,Y)}{\\text{Var}(X)}$ (GATE DA 2025 Q.34), and the fraction of variance explained in 1D regression equals $R^2 = \\rho(X, Y)^2$!',
            pyqProof: 'GATE DA 2025 · Q.34 (1M NAT)',
          },
        ],
      },
      {
        id: 'm4-c3-3',
        title: 'Pairwise Uncorrelated vs. Independent Traps (The Classic GATE MSQ/NAT)',
        subtitle: 'Why $\\text{Cov}(X, Y) = 0$ NEVER proves independence outside Bivariate Normality',
        priority: 'high-yield',
        buildsOn: 'm4-c3-2 Pearson Correlation',
        toyExample: {
          title: 'The 3-Point Parabola: $X \\in \\{-1, 0, +1\\}$ and $Y = X^2$',
          scenario:
            'Pick $X$ uniformly from $\\{-1, 0, +1\\}$ (each with probability $1/3$), and set $Y = X^2$. Clearly $Y$ is a *deterministic function* of $X$—knowing $X$ determines $Y$ with $100\\%$ certainty! What is $\\text{Cov}(X, Y)$?',
          walkthroughSteps: [
            '1. **Mean of $X$:** $E[X] = \\frac{-1 + 0 + 1}{3} = 0$.',
            '2. **Product $XY$:** On $\\{-1, 0, +1\\}$, $XY = X \\cdot X^2 = X^3 = X$! So $E[XY] = E[X] = 0$.',
            '3. **Covariance:** $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y] = 0 - 0 \\cdot \\frac{2}{3} = 0$, hence $\\rho(X, Y) = 0$!',
            '4. **Independence Check:** $P(X = 0, Y = 0) = P(X = 0) = \\frac{1}{3}$, whereas $P(X = 0)P(Y = 0) = \\frac{1}{3}\\cdot\\frac{1}{3} = \\frac{1}{9} \\neq \\frac{1}{3}$! Dependent yet zero correlation!',
          ],
          ahaMoment:
            'Keep this visual in mind whenever you see $\\rho = 0$: Pearson correlation ONLY detects *straight-line* tilt. On a symmetric U-curve like $Y = X^2$, the upward right arm and downward left arm cancel out so the best-fit line lies completely flat ($\\rho = 0$), even though $X$ determines $Y$ $100\\%$!',
        },
        theoremAndFormula: {
          statement:
            'Independence implies zero covariance, **never** the converse. The famous exception is **Joint (Bivariate) Normality**, where linear correlation captures all dependence. Also, **pairwise independence** among $3+$ variables does not imply **mutual independence**.',
          formulaLatex:
            'X \\perp Y \\implies \\text{Cov}(X,Y)=0 \\; (\\not\\Leftarrow) \\qquad\\quad \\text{If } (X,Y) \\text{ is Jointly Normal: } \\text{Cov}(X,Y)=0 \\iff X \\perp Y',
          plainEnglishDecoding:
            'Here is your instant MSQ alarm bell: whenever an option claims *"If $\\text{Cov}(X, Y) = 0$, then $X$ and $Y$ are independent"*, scan the stem for the exact words **jointly Normal**. If they are missing, pull out $Y = X^2$ on symmetric $X$ and reject the claim!',
          workedMiniExamples: [
            {
              prompt:
                'Let $X \\sim \\text{Uniform}(-1, 1)$ and $Y \\mid (X = x) \\sim \\text{Uniform}(x^2 - 0.1, x^2 + 0.1)$. Find $\\text{correlation}(X, Y)$ (GATE DA 2026 Q.63).',
              solution:
                'Clearly $Y$ depends on $X$ (its conditional mean is $E[Y \\mid X=x] = x^2$). Yet $E[X] = 0$, and by EVE: $E[XY] = E[E[XY \\mid X]] = E[X \\cdot E[Y \\mid X]] = E[X \\cdot X^2] = E[X^3] = 0$ because $U(-1,1)$ is symmetric around $0$. Thus $\\text{Cov}(X,Y) = 0 \\implies \\rho(X,Y) = 0$!',
            },
            {
              prompt:
                'Let $(X, Y)$ be uniformly distributed on the unit circle $X^2 + Y^2 = 1$. Are $X$ and $Y$ uncorrelated? Are they independent?',
              solution:
                'By rotational symmetry, $E[X] = E[Y] = E[XY] = 0$, so $\\text{Cov}(X,Y) = 0$ (uncorrelated). However, $X^2 + Y^2 = 1$ means $X = 1$ forces $Y = 0$, so they are strongly dependent.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $X \\sim \\mathcal{N}(0, 1)$, $Y \\sim \\mathcal{N}(0, 1)$, and $\\text{Cov}(X, Y) = 0$, then $X$ and $Y$ MUST be independent.',
            reality:
              'FALSE! Marginal normality of $X$ and $Y$ individually is NOT enough—the pair $(X, Y)$ must be **jointly (bivariate) Normal**!',
            counterExample:
              'Let $X \\sim \\mathcal{N}(0,1)$, let $S \\in \\{-1, +1\\}$ be an independent fair sign ($p=1/2$), and set $Y = SX$. Then $Y \\sim \\mathcal{N}(0,1)$ marginally, and $E[XY] = E[S]E[X^2] = 0 \\implies \\text{Cov}(X,Y) = 0$, yet $|Y| = |X|$ so $X$ and $Y$ are dependent!',
          },
          {
            myth: 'If $X, Y, Z$ are pairwise independent ($\\text{Cov} = 0$ for every pair), then $E[XYZ] = E[X]E[Y]E[Z]$.',
            reality:
              'Pairwise independence does not imply mutual independence!',
            counterExample:
              'Let $X, Y \\in \\{-1, +1\\}$ be independent fair signs and $Z = XY$. Every pair is independent ($\\text{Cov}=0$), yet $E[XYZ] = E[(XY)^2] = 1 \\neq 0 = E[X]E[Y]E[Z]$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'PCA vs. Nonlinear Structure',
            whyItMatters:
              'Because PCA only diagonalizes the linear covariance matrix $\\Sigma$, features lying on a parabola $Y = X^2$ have $\\text{Cov}(X, Y) = 0$—PCA treats them as orthogonal/uncorrelated even though $Y$ is completely determined by $X$!',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm4-c3-ht1',
        title: 'Symmetry & Conditional Parity for Zero-Correlation Checks',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 · Q.63'],
        problemStatement:
          'You are given a joint or conditional distribution such as $X \\sim U(-a, a)$ and $Y \\mid X = x$ centered around an even function $g(x)$ (like $x^2$, $|x|$, $\\cos x$), and asked for $\\text{Cov}(X, Y)$ or $\\rho(X, Y)$.',
        triggerCue:
          '$X$ has a symmetric distribution around $0$ AND $E[Y \\mid X = x]$ is an even function of $x$ (like $x^2$).',
        bruteForceTrap:
          'Computing the marginal density $f_Y(y)$, calculating $\\text{Var}(Y)$ via EVVE, and evaluating a 2D integral $\\iint xy\\,f_{X,Y}(x,y)\\,dx\\,dy$ just to see the numerator.',
        mentalShift:
          'Check the numerator $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$ FIRST using EVE! If $E[X] = 0$ and $E[X \\cdot E[Y \\mid X]] = 0$ by odd-times-even symmetry, then $\\rho(X, Y) = 0$ instantly—you never even need $\\sigma_Y$ (as long as $\\sigma_Y > 0$)!',
        steps: [
          {
            label: 'Check $E[X] = 0$',
            detail: 'Symmetric interval $(-a, a)$ gives $E[X] = 0$ immediately.',
          },
          {
            label: 'Evaluate $E[XY] = E[E[XY \\mid X]] = E[X \\cdot E[Y \\mid X]]$',
            detail:
              'If $E[Y \\mid X=x]$ is an even function of $x$ (e.g., $x^2$), then $x \\cdot E[Y \\mid X=x]$ is **odd**, so its integral on $(-a, a)$ is $0$!',
          },
          {
            label: 'Verify $\\sigma_X > 0$ and $\\sigma_Y > 0$',
            detail: 'Confirm neither variable is constant so $\\rho = 0/(\\sigma_X\\sigma_Y) = 0$ is well-defined.',
          },
        ],
        lockInTakeaway:
          'Always compute $\\text{Cov}(X, Y)$ before $\\sigma_Y$—when $E[XY] - E[X]E[Y] = 0$, $\\rho = 0$ without touching $\\text{Var}(Y)$!',
      },
      {
        id: 'm4-c3-ht2',
        title: 'Bilinear Covariance Extraction via Standardized Forms',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2025 · Q.20', 'GATE DA 2024 · Q.65'],
        problemStatement:
          'You are given cross-moment expressions like $E[(X - E[X])Z]$, or covariances of linear combinations $aX + bY$, or covariances between indicator events.',
        triggerCue:
          'Expressions of the form $E[(X - \\mu_X)(Y - \\mu_Y)]$ or $\\text{Var}(aX \\pm bY)$ or $X = aZ + b$ with $Z \\sim \\mathcal{N}(0,1)$.',
        bruteForceTrap:
          'Writing out normal PDF integrals with $e^{-z^2/2}$ instead of using $E[Z]=0$ and $\\text{Var}(Z) = E[Z^2] = 1$.',
        mentalShift:
          'Recognize $E[(X - E[X])Z]$ immediately as $\\text{Cov}(X, Z)$ (since $E[Z]=0$), and expand $\\text{Cov}(aZ + b, Z) = a\\,\\text{Var}(Z) = a$ in one line!',
        steps: [
          {
            label: 'Rewrite cross-moments as Covariances',
            detail: 'If $E[Z] = 0$, then $E[(X - E[X])Z] = E[(X - E[X])(Z - E[Z])] = \\text{Cov}(X, Z)$.',
          },
          {
            label: 'Apply bilinearity & drop additive constants',
            detail: '$\\text{Cov}(aZ + b, Z) = a\\,\\text{Cov}(Z, Z) + 0 = a\\,\\text{Var}(Z) = a$.',
          },
          {
            label: 'Cross-check with $\\text{Var}(X) = a^2$',
            detail: 'Verify the sign of $a$ from $\\text{Cov}(X, Z)$ since $\\text{Var}(X)$ only pins $|a|$.',
          },
        ],
        lockInTakeaway:
          'Whenever $Z \\sim \\mathcal{N}(0, 1)$, $E[(X - E[X])Z] = \\text{Cov}(X, Z)$ immediately recovers the signed slope $a$!',
      },
    ],
    arsenalCards: [
      {
        id: 'm4-c3-a1',
        badge: 'Weapon #1 · Bilinear Covariance',
        whenYouSpot: '$\\text{Var}(aX \\pm bY)$ or $\\text{Cov}(aX+b, cY+d)$ or indicator covariance',
        directWeaponLatex:
          '\\text{Var}(aX \\pm bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) \\pm 2ab\\,\\text{Cov}(X,Y)',
        instantRule:
          'Constants vanish inside $\\text{Cov}$; scalars pull out linearly. For indicators, $\\text{Cov}(\\mathbf{1}_A, \\mathbf{1}_B) = P(A\\cap B) - P(A)P(B)$.',
        tenSecondExample:
          'If $\\text{Var}(X)=9, \\text{Var}(Y)=16, \\text{Cov}(X,Y)=-6$, then $\\text{Var}(X-Y) = 9 + 16 - 2(-6) = 37$.',
        oneFatalTrap:
          'Watch the minus sign on $\\text{Var}(X - Y)$: it is $+\\text{Var}(Y) - 2\\text{Cov}(X,Y)$, so negative covariance *increases* $\\text{Var}(X - Y)$!',
      },
      {
        id: 'm4-c3-a2',
        badge: 'Weapon #2 · Pearson Correlation',
        whenYouSpot: 'Pearson $\\rho(aX+b, cY+d)$ or bounds on $\\text{Cov}(X,Y)$ via Cauchy-Schwarz',
        directWeaponLatex:
          '\\rho(aX+b, cY+d) = \\text{sgn}(ac)\\,\\rho(X,Y) \\in [-1, 1], \\qquad |\\text{Cov}(X,Y)| \\le \\sigma_X \\sigma_Y',
        instantRule:
          'Affine transforms only flip the sign of $\\rho$ when $ac < 0$. Equality $|\\rho|=1$ holds iff $Y = mX + k$ almost surely.',
        tenSecondExample:
          '$\\rho(X,Y) = 0.6 \\implies \\rho(-2X+7, 5Y-3) = -0.6$.',
        oneFatalTrap:
          'Correlation $\\rho$ is NOT the regression slope; slope is $\\rho \\cdot (\\sigma_Y / \\sigma_X)$.',
      },
      {
        id: 'm4-c3-a3',
        badge: 'Weapon #3 · Uncorrelated != Indep',
        whenYouSpot: 'MSQ asking if $\\text{Cov}(X,Y)=0$ implies independence, or $Y$ centered on $X^2$',
        directWeaponLatex:
          'X \\perp Y \\implies \\text{Cov}(X,Y) = 0 \\; (\\text{Converse FALSE unless Joint Normal!})',
        instantRule:
          'Test $X \\in \\{-1,0,1\\}, Y=X^2$ or $X \\sim U(-1,1), Y=X^2$ or $Y = SX$ ($S=\\pm 1$). All give $\\text{Cov}=0$ yet are dependent!',
        tenSecondExample:
          'GATE 2026 Q.63: $X \\sim U(-1,1), Y\\mid X \\sim U(x^2-0.1, x^2+0.1) \\implies E[XY] = E[X^3] = 0 \\implies \\rho = 0$.',
        oneFatalTrap:
          'Marginal normality ($X\\sim \\mathcal{N}$, $Y\\sim \\mathcal{N}$) with $\\text{Cov}=0$ does NOT guarantee independence—only **joint** normality does!',
      },
    ],
    questions: [
      {
        id: 'm4-c3-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Correlated Difference Variance',
        marks: 1,
        type: 'NAT',
        stem: 'Let $X$ and $Y$ be random variables with $\\text{Var}(X) = 9$, $\\text{Var}(Y) = 16$, and $\\text{Cov}(X, Y) = -6$. What is $\\text{Var}(X - Y)$?',
        natAnswer: { min: 37, max: 37, exactDisplay: '37' },
        triggerHint: 'Expand $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y) - 2\\text{Cov}(X, Y)$.',
        intuitiveSolution: [
          'Using the bilinear formula $\\text{Var}(X - Y) = \\text{Var}(X) + (-1)^2\\text{Var}(Y) + 2(1)(-1)\\text{Cov}(X, Y)$:',
          '$\\text{Var}(X - Y) = 9 + 16 - 2(-6) = 25 + 12 = 37$.',
        ],
        directShortcutUsed: '$\\text{Var}(X - Y) = 9 + 16 - 2(-6) = 37$.',
      },
      {
        id: 'm4-c3-q2',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #2 · Affine Correlation Invariance',
        marks: 1,
        type: 'MCQ',
        stem: 'Suppose the Pearson correlation between $X$ and $Y$ is $\\rho(X, Y) = 0.6$. What is $\\rho(-2X + 7,\\; 5Y - 3)$?',
        options: [
          { id: 'A', text: '$0.6$', whyTrueOrFalse: 'False — ignores the sign flip from $-2 \\times 5 < 0$.' },
          { id: 'B', text: '$-0.6$', whyTrueOrFalse: 'True — $\\rho(aX+b, cY+d) = \\text{sgn}(ac)\\rho(X,Y) = (-1)(0.6) = -0.6$.' },
          { id: 'C', text: '$-6.0$', whyTrueOrFalse: 'False — correlation is always bounded in $[-1, 1]$!' },
          { id: 'D', text: '$-0.06$', whyTrueOrFalse: 'False.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Shifts $+7, -3$ vanish and magnitudes $|{-2}|, |5|$ cancel in $\\sigma_X \\sigma_Y$.',
        intuitiveSolution: [
          '$\\text{Cov}(-2X+7, 5Y-3) = (-2)(5)\\text{Cov}(X,Y) = -10\\,\\text{Cov}(X,Y)$.',
          'Standard deviations scale by $|-2|=2$ and $|5|=5$, so $\\sigma_{-2X+7}\\sigma_{5Y-3} = 10\\sigma_X\\sigma_Y$.',
          'Dividing gives $\\rho = \\frac{-10\\,\\text{Cov}(X,Y)}{10\\sigma_X\\sigma_Y} = -\\rho(X,Y) = -0.6$.',
        ],
        directShortcutUsed: '$\\rho(aX+b, cY+d) = \\text{sgn}(ac)\\,\\rho(X,Y) = -0.6$.',
      },
      {
        id: 'm4-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.20',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $Z \\sim \\mathcal{N}(0, 1)$ and define $X = aZ + b$ for real constants $a, b$. If $E[X] = 1$, $E[(X - E[X])Z] = -2$, and $\\text{Var}(X) = 4$, what are $(a, b)$?',
        options: [
          { id: 'A', text: '$a = -2,\\; b = 1$', whyTrueOrFalse: 'True: $E[X] = b = 1$ and $\\text{Cov}(X,Z) = a\\,\\text{Var}(Z) = a = -2$.' },
          { id: 'B', text: '$a = 2,\\; b = 1$', whyTrueOrFalse: 'False — gives $E[(X-E[X])Z] = +2$, not $-2$.' },
          { id: 'C', text: '$a = -2,\\; b = -1$', whyTrueOrFalse: 'False — gives $E[X] = -1$.' },
          { id: 'D', text: '$a = 2,\\; b = -1$', whyTrueOrFalse: 'False.' },
        ],
        correctOptions: ['A'],
        triggerHint: 'Notice $E[(X - E[X])Z] = \\text{Cov}(X, Z)$ because $E[Z] = 0$.',
        intuitiveSolution: [
          'Since $Z \\sim \\mathcal{N}(0,1)$, $E[Z] = 0$ and $\\text{Var}(Z) = E[Z^2] = 1$.',
          '$E[X] = aE[Z] + b = b \\implies b = 1$.',
          '$X - E[X] = aZ$, so $E[(X - E[X])Z] = E[aZ^2] = a(1) = a \\implies a = -2$.',
          'Checking variance: $\\text{Var}(X) = (-2)^2(1) = 4$, consistent.',
        ],
        directShortcutUsed: '$b = E[X] = 1$, $a = \\text{Cov}(X, Z) = -2$.',
      },
      {
        id: 'm4-c3-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.63',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Let $X \\sim \\text{Uniform}(-1, 1)$, and conditioned on $X = x$, let $Y \\mid (X = x) \\sim \\text{Uniform}(x^2 - 0.1,\\; x^2 + 0.1)$. What is the Pearson correlation coefficient $\\rho(X, Y)$?',
        natAnswer: { min: 0, max: 0, exactDisplay: '0' },
        triggerHint: 'Compute $E[X]$ and $E[XY] = E[X \\cdot E[Y \\mid X]]$ by symmetry on $(-1, 1)$.',
        intuitiveSolution: [
          'Since $X \\sim U(-1, 1)$ is symmetric around $0$, $E[X] = 0$.',
          'For each $x$, $E[Y \\mid X = x] = \\frac{(x^2 - 0.1) + (x^2 + 0.1)}{2} = x^2$.',
          'By EVE, $E[XY] = E[E[XY \\mid X]] = E[X \\cdot E[Y \\mid X]] = E[X^3] = \\int_{-1}^1 \\frac{x^3}{2}\\,dx = 0$ (odd integrand on symmetric interval).',
          'Thus $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y] = 0 - 0 = 0$. Since $\\text{Var}(X) = 1/3 > 0$ and $\\text{Var}(Y) > 0$, $\\rho(X, Y) = 0$.',
        ],
        directShortcutUsed: 'Symmetry + EVE: $E[XY] = E[X^3] = 0$ and $E[X] = 0 \\implies \\rho(X,Y) = 0$.',
      },
      {
        id: 'm4-c3-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber NAT · Indicator Covariance (cf. GATE DA 2024 Q.65)',
        marks: 2,
        type: 'NAT',
        stem: 'Two fair coins are tossed independently. Let $X = 1$ if both coins show Heads ($0$ otherwise), and $Y = 1$ if at least one coin shows Heads ($0$ otherwise). Compute $\\text{Cov}(X, Y)$.',
        natAnswer: { min: 0.06, max: 0.065, exactDisplay: '0.0625 (1/16)' },
        triggerHint: 'Use $\\text{Cov}(\\mathbf{1}_A, \\mathbf{1}_B) = P(A \\cap B) - P(A)P(B)$.',
        intuitiveSolution: [
          'Out of $4$ equally likely outcomes $\\{HH, HT, TH, TT\\}$:',
          '$E[X] = P(HH) = \\frac{1}{4}$ and $E[Y] = P(\\{HH, HT, TH\\}) = \\frac{3}{4}$.',
          'Since $HH$ already has at least one Head, $XY = 1$ iff $HH$ occurs, so $E[XY] = \\frac{1}{4}$.',
          '$\\text{Cov}(X, Y) = \\frac{1}{4} - \\left(\\frac{1}{4}\\right)\\left(\\frac{3}{4}\\right) = \\frac{1}{4} - \\frac{3}{16} = \\frac{1}{16} = 0.0625$.',
        ],
        directShortcutUsed: '$P(A \\cap B) - P(A)P(B) = \\frac{1}{4} - \\frac{3}{16} = 0.0625$.',
      },
      {
        id: 'm4-c3-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber MSQ · Uncorrelated vs. Independent Traps',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: 'If $X$ and $Y$ are independent with finite variances, then $\\text{Cov}(X, Y) = 0$.',
            whyTrueOrFalse: 'True — independence gives $E[XY] = E[X]E[Y]$, so $\\text{Cov}(X, Y) = 0$.',
          },
          {
            id: 'B',
            text: 'If $X \\sim \\mathcal{N}(0, 1)$, $Y \\sim \\mathcal{N}(0, 1)$, and $\\text{Cov}(X, Y) = 0$, then $X$ and $Y$ must be independent.',
            whyTrueOrFalse: 'False — marginal normality is not sufficient; take $Y = SX$ with independent fair sign $S \\in \\{-1, +1\\}$. Then $Y \\sim \\mathcal{N}(0,1)$ and $\\text{Cov}(X,Y)=0$, yet $|Y|=|X|$.',
          },
          {
            id: 'C',
            text: 'If $X$ takes values $\\{-1, 0, +1\\}$ with equal probability $1/3$ and $Y = X^2$, then $\\rho(X, Y) = 0$ even though $X$ and $Y$ are dependent.',
            whyTrueOrFalse: 'True — $E[X] = 0$ and $E[XY] = E[X^3] = 0$, so $\\rho = 0$, while $P(X=0, Y=0) = 1/3 \\neq (1/3)^2$.',
          },
          {
            id: 'D',
            text: 'If $(X, Y)$ follows a Bivariate Normal distribution with $\\rho(X, Y) = 0$, then $X$ and $Y$ are independent.',
            whyTrueOrFalse: 'True — for *jointly* Normal RVs, the joint PDF factors into $f_X(x)f_Y(y)$ whenever $\\rho = 0$.',
          },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Distinguish carefully between *marginally* Normal (B) and *jointly* Bivariate Normal (D).',
        intuitiveSolution: [
          '(A) is true: independence always implies zero covariance.',
          '(B) is FALSE: $Y = SX$ (fair sign $S \\perp X$) is marginally $\\mathcal{N}(0,1)$ with $\\text{Cov}(X,Y) = 0$, yet $X$ and $Y$ are dependent.',
          '(C) is true: the classic symmetric parabola counterexample.',
          '(D) is true: in a Bivariate Normal distribution, $\\rho = 0$ causes the cross-term in the exponent to vanish, factoring the joint PDF.',
        ],
        directShortcutUsed: 'Jointly Normal + $\\text{Cov}=0 \\implies$ Indep; Marginally Normal + $\\text{Cov}=0 \\not\\implies$ Indep.',
      },
    ],
  },
]

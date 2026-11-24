import type { ChapterData } from '../../types/curriculum'

export const MODULE_3_CHAPTERS: ChapterData[] = [
  {
    id: 'prob2-ch1',
    number: 1,
    title: 'Discrete Random Variables, PMF, Binomial, Poisson & Geometric',
    shortTitle: 'Discrete RVs, Bin/Pois/Geom',
    estimatedHours: 4.5,
    dayLabel: 'Week 2 · Day 3–4 (Part A)',
    tagline:
      'Let’s turn random outcomes into numbers with Probability Mass Functions, learn to read staircase discrete CDFs at a glance, and master the three discrete workhorses you will meet everywhere: Binomial, Poisson, and Geometric.',
    syllabusMapping: [
      'Random variables: Discrete random variables & Probability Mass Function (PMF)',
      'Cumulative Distribution Function (CDF) for discrete RVs',
      'Bernoulli, Binomial, Poisson, and Geometric distributions',
      'Expectation, Variance, and recurrence relations on discrete trials',
    ],
    whatIsImportant: [
      'PMF normalization $\\sum p_X(x) = 1$ and variance identity $\\text{Var}(X) = E[X^2] - (E[X])^2$',
      'Discrete CDF staircase properties: non-decreasing, right-continuous, jump height at $a$ equals $P(X=a) = F_X(a) - F_X(a^-)$ (GATE 2026 Q.54)',
      'Binomial expectation $np$ & variance $np(1-p)$ for with-replacement / independent counts (GATE 2025 Q.45, Q.61)',
      'Poisson mean $=$ variance $= \\lambda$ (GATE 2024 Q.11) and Geometric waiting-time conventions ($k \\ge 1$ vs $\\ell \\ge 0$)',
    ],
    whatIsNotImportant: [
      'Moment Generating Function (MGF) inversion theorems or Hypergeometric variance derivations',
      'Negative Binomial / Multinomial multi-page algebraic expansions beyond simple counting',
    ],
    inboundStream: 'Module 2 — Counting, Axioms of Probability, Conditional Probability & Bayes Theorem.',
    outboundStream: [
      'Week 2 Ch.2–3 Continuous PDFs, Exponential Discretization & CLT Normal Limits',
      'Week 3 Sampling Distributions, Sample Variance & Hypothesis Testing',
      'Week 7 Logistic Regression (Bernoulli MLE), Naive Bayes & Cross-Entropy Loss',
    ],
    glossary: [
      {
        term: 'Random Variable (RV)',
        symbol: '$X: \\Omega \\to \\mathbb{R}$',
        plainEnglish:
          'A rule that translates every messy experimental outcome (like `HTH`) into a clean real number (like `2` heads) so we can compute averages, spreads, and curves.',
        tinyExample: 'In two coin tosses, letting $X$ count Heads maps $TT \\mapsto 0$, $TH, HT \\mapsto 1$, and $HH \\mapsto 2$.',
      },
      {
        term: 'Probability Mass Function (PMF)',
        symbol: '$p_X(x) = P(X = x)$',
        plainEnglish:
          'For a discrete random variable, the PMF tells you how much probability weight sits directly on each allowed value $x$. All weights are non-negative and must add up to $1$.',
        tinyExample: 'For Heads in $2$ fair flips: $p_X(0)=0.25,\\; p_X(1)=0.50,\\; p_X(2)=0.25$ (sum $= 1$).',
      },
      {
        term: 'Cumulative Distribution Function (CDF)',
        symbol: '$F_X(x) = P(X \\le x)$',
        plainEnglish:
          'A running cumulative total of all probability mass at or below $x$. For discrete RVs, its graph looks like a right-continuous staircase that climbs from $0$ to $1$.',
        tinyExample: 'If $p_X(0)=0.25$ and $p_X(1)=0.50$, then $F_X(1) = P(X \\le 1) = 0.75$.',
      },
      {
        term: 'Jump Discontinuity (Discrete Mass)',
        symbol: '$P(X = a) = F_X(a) - F_X(a^-)$',
        plainEnglish:
          'The vertical step height of a discrete CDF right at $x = a$. Whenever you see a jump on a CDF graph, that vertical gap is literally the point probability $P(X = a)$.',
        tinyExample: 'If $F_X$ steps from $0.3$ just before $x=3$ up to $0.8$ at $x=3$, then $P(X=3) = 0.5$.',
      },
      {
        term: 'Expectation (Mean)',
        symbol: '$E[X] = \\sum_x x\\,p_X(x)$',
        plainEnglish:
          'The long-run average or balance point (center of mass) of a random variable—imagine placing weights $p_X(x)$ along a ruler and finding where it balances on your finger.',
        tinyExample: 'For a fair $6$-sided die, $E[X] = \\frac{1+2+3+4+5+6}{6} = 3.5$.',
      },
      {
        term: 'Variance & Standard Deviation',
        symbol: '$\\text{Var}(X) = E[X^2] - (E[X])^2$',
        plainEnglish:
          'Variance measures the average squared distance from the mean, telling you how spread out outcomes are; standard deviation $\\sigma = \\sqrt{\\text{Var}(X)}$ brings that spread back to the original units.',
        tinyExample: 'For $X \\in \\{-1, +1\\}$ equally likely, $E[X]=0$ and $\\text{Var}(X) = 1 - 0 = 1$.',
      },
      {
        term: 'Bernoulli Distribution',
        symbol: '$\\text{Bernoulli}(p)$',
        plainEnglish:
          'The simplest building block in probability: a single yes/no trial that returns $1$ with probability $p$ and $0$ with probability $1-p$.',
        tinyExample: 'Rolling a $6$ on one fair die is $\\text{Bernoulli}(1/6)$ with mean $1/6$ and variance $5/36$.',
      },
      {
        term: 'Binomial Distribution',
        symbol: '$\\text{Bin}(n, p)$',
        plainEnglish:
          'Counts total successes across $n$ independent $\\text{Bernoulli}(p)$ trials (or draws with replacement). Think of it as adding $n$ identical independent coin flips together!',
        tinyExample: '$100$ independent draws with $p = 2/3$ gives $E[X] = np = 66.67$ and $\\text{Var}(X) = np(1-p) \\approx 22.22$.',
      },
      {
        term: 'Poisson Distribution',
        symbol: '$\\text{Poisson}(\\lambda)$',
        plainEnglish:
          'Models how many rare, independent events occur inside a fixed window of time or space at average rate $\\lambda$. Its famous fingerprint is that its mean and variance are identical: both equal $\\lambda$.',
        tinyExample: 'At rate $\\lambda = 2$ crashes/hour, $P(K=0) = e^{-2} \\approx 0.135$ and $E[K] = \\text{Var}(K) = 2$.',
      },
      {
        term: 'Geometric Distribution',
        symbol: '$\\text{Geom}(p)$',
        plainEnglish:
          'Counts how many independent $\\text{Bernoulli}(p)$ trials you wait until the very first success (or, in the $0$-based convention, how many failures happen before it). Always check whether support starts at $1$ or $0$!',
        tinyExample: 'With success chance $p = 0.25$ per try, the average wait until the first hit is $E[X] = 1/0.25 = 4$ tries.',
      },
      {
        term: 'First-Step (Markov) Recurrence',
        plainEnglish:
          'A clever shortcut for streak waiting times: instead of summing an infinite series, ask what happens on just the very next step and write a tiny linear system for the remaining expected steps from each streak state.',
        tinyExample: 'Waiting for $2$ consecutive even die rolls ($p=1/2$) solves in $2$ lines to $E_0 = \\frac{1}{p} + \\frac{1}{p^2} = 6$.',
      },
    ],
    generatorId: 'exp-memoryless-gen',
    concepts: [
      {
        id: 'm3-c1-1',
        title: 'Random Variables, PMF, Discrete CDF & Variance',
        subtitle: 'Mapping outcomes to numbers, summing mass to 1, and reading staircase CDF jumps',
        priority: 'core-pillar',
        buildsOn: 'Sample spaces, probability axioms & sigma notation',
        toyExample: {
          title: 'Counting Heads in 2 Fair Coin Tosses',
          scenario:
            'Toss a fair coin twice: $\\Omega = \\{TT, TH, HT, HH\\}$ with each outcome having probability $1/4$. Let $X$ be the **number of Heads** observed.',
          walkthroughSteps: [
            '1. **Outcome to Number:** $X(TT)=0$, $X(TH)=X(HT)=1$, $X(HH)=2$. So $X$ takes values in $\\{0, 1, 2\\}$.',
            '2. **PMF Table:** $p_X(0) = \\frac{1}{4}$, $p_X(1) = \\frac{2}{4} = \\frac{1}{2}$, $p_X(2) = \\frac{1}{4}$. Check total mass: $\\frac{1}{4} + \\frac{1}{2} + \\frac{1}{4} = 1$.',
            '3. **Staircase CDF $F_X(x) = P(X \\le x)$:** $F_X(x) = 0$ for $x < 0$; jumps to $0.25$ at $x=0$ (stays $0.25$ on $[0, 1)$); jumps to $0.75$ at $x=1$ (stays $0.75$ on $[1, 2)$); jumps to $1$ at $x=2$.',
            '4. **Mean & Variance:** $E[X] = 0(\\frac{1}{4}) + 1(\\frac{1}{2}) + 2(\\frac{1}{4}) = 1$. Next $E[X^2] = 0^2(\\frac{1}{4}) + 1^2(\\frac{1}{2}) + 2^2(\\frac{1}{4}) = 1.5$, so $\\text{Var}(X) = E[X^2] - (E[X])^2 = 1.5 - 1^2 = 0.5$.',
          ],
          ahaMoment:
            'Picture a discrete CDF as a **flat staircase with sudden vertical steps**: wherever the curve jumps up at $x=a$, the exact height of that step equals the point probability $P(X=a)$ sitting right there.',
        },
        theoremAndFormula: {
          statement:
            'A discrete random variable $X$ assigns a real number to each outcome with PMF $p_X(x) = P(X=x) \\ge 0$ summing to $1$. Its CDF $F_X(x) = P(X \\le x)$ is non-decreasing, right-continuous, approaches $0$ as $x\\to -\\infty$ and $1$ as $x\\to +\\infty$, and has jump discontinuities at every point of positive mass.',
          formulaLatex:
            '\\sum_{x} p_X(x) = 1, \\qquad P(X=a) = F_X(a) - F_X(a^-), \\qquad \\text{Var}(X) = E[X^2] - (E[X])^2',
          plainEnglishDecoding:
            'Here is the easiest physical intuition: think of $E[X]$ as the **balance point** (center of mass) of your probability weights $p_X(x)$ along a ruler, and $\\text{Var}(X) = E[(X - \\mu)^2]$ as how wide those weights are spread around that balance point.',
          workedMiniExamples: [
            {
              prompt: 'Given PMF $p_X(k) = c k$ for $k \\in \\{1, 2, 3, 4\\}$, find $c$ and $P(X \\ge 3)$.',
              solution:
                'Normalize: $c(1+2+3+4) = 10c = 1 \\implies c = 0.1$. Then $P(X \\ge 3) = p_X(3) + p_X(4) = 0.3 + 0.4 = 0.7$.',
            },
            {
              prompt: 'Suppose a discrete CDF has $F_X(x) = 0$ ($x<1$), $0.3$ ($1 \\le x < 3$), $0.8$ ($3 \\le x < 5$), and $1$ ($x \\ge 5$). Compute $P(X=3)$ and $P(1 \\le X \\le 3)$.',
              solution:
                '$P(X=3) = F_X(3) - F_X(3^-) = 0.8 - 0.3 = 0.5$. For a closed interval, include the left endpoint mass: $P(1 \\le X \\le 3) = F_X(3) - F_X(1^-) = 0.8 - 0 = 0.8$ (whereas $P(1 < X \\le 3) = F_X(3) - F_X(1) = 0.5$).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'The CDF $F_X(x)$ of a discrete random variable is continuous at every point, or left-continuous at jumps.',
            reality: 'A discrete CDF is **right-continuous** ($F_X(a) = \\lim_{t\\to a^+} F_X(t)$) because $F_X(a) = P(X \\le a)$ includes the point $a$. It has **jump discontinuities** wherever $P(X=a) > 0$.',
            counterExample: 'For $X \\sim \\text{Bernoulli}(0.5)$, $F_X(0^-) = 0$ while $F_X(0) = 0.5 \\neq 0$.',
          },
          {
            myth: '$E[X^2] = (E[X])^2$ for symmetric random variables.',
            reality: '$E[X^2] - (E[X])^2 = \\text{Var}(X) \\ge 0$, so $E[X^2] = (E[X])^2$ holds ONLY when $\\text{Var}(X)=0$ ($X$ is a constant).',
            counterExample: 'For symmetric $X \\in \\{-1, +1\\}$ with equal probability $0.5$, $E[X]=0$ so $(E[X])^2=0$, yet $E[X^2] = 1$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Cross-Entropy & KL Divergence',
            whyItMatters: 'Binary and categorical cross-entropy loss $H(p, q) = -\\sum_k p(k)\\log q(k)$ is literally the expectation $E_{Y \\sim p}[-\\log q(Y)]$ over a discrete PMF.',
          },
        ],
      },
      {
        id: 'm3-c1-2',
        title: 'Bernoulli & Binomial Distributions (Independent Counts & Scaling)',
        subtitle: 'Adding $n$ independent coin flips and using linearity of expectation to dodge algebra',
        priority: 'core-pillar',
        buildsOn: 'Independent events & binomial coefficients $\\binom{n}{k}$',
        toyExample: {
          title: 'Rolling a Fair Die 3 Times and Counting Sixes',
          scenario:
            'Roll a fair 6-sided die $n = 3$ independent times. Each roll is a **Bernoulli($p = 1/6$)** trial: $I_j = 1$ if roll $j$ is a $6$, else $0$. Let $X = I_1 + I_2 + I_3$.',
          walkthroughSteps: [
            '1. **Single Trial Moments:** $E[I_j] = \\frac{1}{6}$ and $\\text{Var}(I_j) = \\frac{1}{6}\\cdot\\frac{5}{6} = \\frac{5}{36}$.',
            '2. **Exact Binomial PMF:** $P(X=k) = \\binom{3}{k} (\\frac{1}{6})^k (\\frac{5}{6})^{3-k}$, giving $P(X=0)=\\frac{125}{216}$, $P(X=1)=\\frac{75}{216}$, $P(X=2)=\\frac{15}{216}$, $P(X=3)=\\frac{1}{216}$.',
            '3. **Mean & Variance via Linearity:** Instead of summing $k \\binom{3}{k} p^k q^{3-k}$, just add the 3 independent indicators: $E[X] = 3 \\cdot \\frac{1}{6} = 0.5$ and $\\text{Var}(X) = 3 \\cdot \\frac{5}{36} = \\frac{5}{12}$.',
          ],
          ahaMoment:
            'Look how much algebra this saves you: a $\\text{Binomial}(n, p)$ random variable is really just a **sum of $n$ independent $\\text{Bernoulli}(p)$ coin flips**! That immediately explains why $E[X]=np$, $\\text{Var}(X)=np(1-p)$, and why large-$n$ Binomials shape into a bell curve.',
        },
        theoremAndFormula: {
          statement:
            'If $X \\sim \\text{Bin}(n, p)$ counts successes in $n$ independent Bernoulli($p$) trials (or draws **with replacement**), its PMF, mean, variance, and affine scaling rules are:',
          formulaLatex:
            'P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}, \\quad E[X] = np, \\quad \\text{Var}(X) = np(1-p), \\quad \\text{Var}(aX + b) = a^2\\text{Var}(X)',
          plainEnglishDecoding:
            'Notice what happens under a shift-and-scale $Y = aX + b$: sliding every value by $+b$ moves the center by $+b$ without changing the spread at all, while multiplying by $a$ stretches the standard deviation by $|a|$ and therefore multiplies the variance by $a^2$.',
          workedMiniExamples: [
            {
              prompt: 'An urn has 5 white and 10 black balls. Draw 100 balls **with replacement**. What is the expected number of black balls?',
              solution:
                'With replacement makes every draw independent with $p = \\frac{10}{15} = \\frac{2}{3}$. Thus $S_{100} \\sim \\text{Bin}(100, \\frac{2}{3})$ and $E[S_{100}] = 100 \\times \\frac{2}{3} = \\frac{200}{3} \\approx 66.67$ (GATE 2025 Q.61).',
            },
            {
              prompt: 'Roll 100 fair dice independently. What is the probability that **at least one** die shows $1$?',
              solution:
                'Use the complement of $X=0$ (no die shows $1$): $P(X \\ge 1) = 1 - P(X=0) = 1 - (\\frac{5}{6})^{100}$ (GATE 2025 Q.45).',
            },
          ],
        },
        sandboxId: 'distribution-clt-lab',
        msqTraps: [
          {
            myth: 'Drawing $n$ balls **without** replacement also follows $\\text{Binomial}(n, p)$.',
            reality: 'Without replacement creates dependence (Hypergeometric distribution). Mean $E[X] = np$ **still holds** by linearity of expectation, but $\\text{Var}(X)$ is smaller by the finite-population factor $\\frac{N-n}{N-1}$.',
            counterExample: 'Draw $n=2$ balls without replacement from 1 red, 1 blue: $X$ is ALWAYS $1$, so $\\text{Var}(X)=0 \\neq 2(0.5)(0.5)=0.5$.',
          },
          {
            myth: '$\\text{Var}(aX + b) = a^2\\text{Var}(X) + b$ or $a\\text{Var}(X)$.',
            reality: 'Constants have zero variance and shift every outcome equally, so $+b$ disappears completely and $a$ gets squared: $\\text{Var}(aX+b) = a^2\\text{Var}(X)$.',
            counterExample: 'For $Y = -X$, $\\text{Var}(-X) = (-1)^2\\text{Var}(X) = +\\text{Var}(X) \\ge 0$ (variance can NEVER be negative!).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Logistic Regression & Bernoulli MLE',
            whyItMatters: 'Binary classification targets $y_i \\in \\{0,1\\}$ are modeled as $\\text{Bernoulli}(\\sigma(w^T x_i))$, and maximizing the Bernoulli likelihood produces Binary Cross-Entropy.',
            pyqProof: 'GATE DA 2025 · Q.54 (Bernoulli unbiasedness & variance)',
          },
        ],
      },
      {
        id: 'm3-c1-3',
        title: 'Poisson & Geometric Distributions (Rare Events & Waiting Times)',
        subtitle: 'When $n$ is huge and $p$ is tiny (Poisson), or when you wait until the first success (Geometric)',
        priority: 'high-yield',
        buildsOn: 'Binomial trials & infinite exponential/geometric series',
        toyExample: {
          title: 'Two Ways to Think About Rare Bugs vs. First-Hit Retries',
          scenario:
            '**(A) Server Crashes:** A cluster processes $1000$ jobs/hour, each crashing independently with tiny probability $p = 0.002$, so average crashes/hour is $\\lambda = np = 2$. **(B) Retrying a Flaky API:** Each call succeeds with probability $p = 0.25$ until the first success.',
          walkthroughSteps: [
            '1. **Poisson Limit (A):** Instead of computing $\\binom{1000}{k}(0.002)^k(0.998)^{1000-k}$, use $\\text{Poisson}(\\lambda=2)$: $P(K=0) = e^{-2} \\approx 0.1353$, $P(K=1) = 2e^{-2} \\approx 0.2707$.',
            '2. **Poisson Signature:** Notice $E[K] = \\lambda = 2$ AND $\\text{Var}(K) = \\lambda = 2$ — mean equals variance!',
            '3. **Geometric Waiting (B):** Let $X \\in \\{1, 2, 3, \\dots\\}$ be the trial of the first success: $P(X=1)=0.25$, $P(X=2)=0.75(0.25)=0.1875$, ..., and average wait is $E[X] = \\frac{1}{0.25} = 4$ calls.',
          ],
          ahaMoment:
            'Keep these two stories side by side in your mind: Poisson counts **how many rare hits land inside a fixed window** (with $\\text{Mean} = \\text{Variance} = \\lambda$), whereas Geometric counts **how many tries you wait for the very first hit** (with $\\text{Mean} = 1/p$).',
        },
        theoremAndFormula: {
          statement:
            'The **Poisson($\\lambda$)** distribution models count $K \\in \\{0, 1, 2, \\dots\\}$ with rate $\\lambda > 0$. The **Geometric($p$)** distribution models either total trials $X \\in \\{1, 2, \\dots\\}$ to first success or failures $Y = X - 1 \\in \\{0, 1, 2, \\dots\\}$ before first success.',
          formulaLatex:
            '\\text{Pois}(\\lambda): P(K=k)=\\frac{e^{-\\lambda}\\lambda^k}{k!},\\; E[K]=\\text{Var}(K)=\\lambda \\qquad \\text{Geom}(p): P(X=k)=(1-p)^{k-1}p,\\; E[X]=\\frac{1}{p},\\; \\text{Var}(X)=\\frac{1-p}{p^2}',
          plainEnglishDecoding:
            'Here is why Geometric($p$) on $\\{1, 2, \\dots\\}$ is called **memoryless**: $P(X > s + t \\mid X > s) = P(X > t) = (1-p)^t$. Having already failed $s$ times in a row gives you zero "overdue credit"—the coin has no memory of your bad streak.',
          workedMiniExamples: [
            {
              prompt: 'If $X \\sim \\text{Poisson}(\\lambda)$ satisfies $E[X^2] = 6$, compute $P(X = 0)$.',
              solution:
                'Use $E[X^2] = \\text{Var}(X) + (E[X])^2 = \\lambda + \\lambda^2 = 6 \\implies (\\lambda+3)(\\lambda-2)=0$. Since $\\lambda > 0$, $\\lambda = 2$, so $P(X=0) = e^{-2}$.',
            },
            {
              prompt: 'Suppose $Y \\in \\{0, 1, 2, \\dots\\}$ has PMF $P(Y = \\ell) = q^\\ell (1 - q)$ with $q = 0.1$. Find $E[Y]$ and $P(Y \\ge 2)$.',
              solution:
                'Here $Y$ counts **failures before first success** ($p = 1 - q = 0.9$), so $E[Y] = \\frac{q}{1-q} = \\frac{0.1}{0.9} = \\frac{1}{9}$ and $P(Y \\ge 2) = q^2 = 0.01$ (this exact parameterization appeared in GATE 2025 Q.41!).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'The mean of a Geometric($p$) random variable is always $1/p$.',
            reality: 'Check the **support**! If $X \\in \\{1, 2, \\dots\\}$ (trials *including* the success), $E[X] = 1/p$. If $Y \\in \\{0, 1, 2, \\dots\\}$ (failures *before* the success), $E[Y] = (1-p)/p = 1/p - 1$. Both have the same variance $\\frac{1-p}{p^2}$.',
            counterExample: 'For $p=1$ (guaranteed immediate success), $X=1$ with $E[X]=1$, whereas failures $Y=0$ with $E[Y]=0$.',
          },
          {
            myth: 'If $E[X] = \\text{Var}(X)$ for a discrete RV, $X$ must be Poisson.',
            reality: 'Every Poisson($\\lambda$) satisfies $E[X] = \\text{Var}(X) = \\lambda$ (tested in GATE 2024 Q.11), **however** the converse is false—other custom discrete distributions can match mean and variance.',
            counterExample: 'Let $P(X=0)=0.5$ and $P(X=2)=0.5$: $E[X]=1$ and $\\text{Var}(X)=1$, yet $X$ is not Poisson.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1 (Prob & Stats)',
            targetWeek: 2,
            topic: 'Exponential Inter-Arrival Times & Poisson-CLT Limit',
            whyItMatters: 'When arrivals occur at Poisson rate $\\lambda$, the continuous waiting time between consecutive arrivals is $\\text{Exp}(\\lambda)$ (Ch.2), and $\\lfloor \\text{Exp}(\\lambda) \\rfloor$ discretizes right back to Geometric (GATE 2025 Q.41)!',
            pyqProof: 'GATE DA 2026 · Q.45 & GATE DA 2025 · Q.41',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm3-c1-htt-1',
        title: 'First-Step State Recurrences for Consecutive Streaks',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.36'],
        problemStatement:
          'A fair 6-sided die is rolled repeatedly until **two consecutive even numbers** appear. What is the expected number of rolls?',
        triggerCue:
          'Phrases like *"expected trials until $k$ consecutive successes"* or *"until pattern HT appears"*.',
        bruteForceTrap:
          'Trying to list all valid ending sequences ($OEE, EOEE, OEOEE, \\dots$) and sum an infinite series $\\sum_{n=2}^{\\infty} n\\, P(T=n)$ by hand.',
        mentalShift:
          'You only care about **how much of the streak you currently hold**! Define two states: $E_0 =$ expected remaining rolls with streak $0$, and $E_1 =$ expected remaining rolls with streak $1$ (last roll was even). Use the Law of Total Expectation after **one** roll!',
        steps: [
          {
            label: 'Step 1 — Write equation from State 0 ($E_0$)',
            detail:
              'From scratch, you spend $1$ roll. With prob $1/2$ it is even (move to State 1, needing $E_1$ more rolls); with prob $1/2$ it is odd (stay at State 0, needing $E_0$ more rolls): $E_0 = 1 + \\frac{1}{2}E_1 + \\frac{1}{2}E_0 \\implies E_0 = 2 + E_1$.',
          },
          {
            label: 'Step 2 — Write equation from State 1 ($E_1$)',
            detail:
              'Having 1 even already, you spend $1$ roll. With prob $1/2$ it is even (DONE! $0$ more rolls); with prob $1/2$ it is odd (streak resets to $0$, needing $E_0$ more rolls): $E_1 = 1 + \\frac{1}{2}(0) + \\frac{1}{2}E_0$.',
          },
          {
            label: 'Step 3 — Solve the $2\\times 2$ system',
            detail:
              'Substitute $E_1 = 1 + \\frac{1}{2}E_0$ into $E_0 = 2 + E_1$: $E_0 = 2 + 1 + \\frac{1}{2}E_0 \\implies \\frac{1}{2}E_0 = 3 \\implies E_0 = 6$ rolls!',
          },
        ],
        lockInTakeaway:
          'For $k=2$ consecutive successes each with probability $p$, the expected wait is always $\\frac{1}{p} + \\frac{1}{p^2}$ (here $2 + 4 = 6$). Never sum infinite series when a 2-state Markov recurrence solves it in 20 seconds.',
      },
      {
        id: 'm3-c1-htt-2',
        title: 'Conditioning on the Overlapping Cell in Grid / Matrix Binomials',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2026 · Q.64'],
        problemStatement:
          'Each entry of a $5 \\times 5$ matrix $A$ is independently $\\text{Bernoulli}(0.5)$. What is the probability that **row 2 sums to $3$** AND **column 3 sums to $3$**?',
        triggerCue:
          'Two Binomial sums sharing a **single overlapping variable** (like row $r$ and column $c$ intersecting at $A_{r,c}$).',
        bruteForceTrap:
          'Multiplying $P(\\text{row 2}=3) \\times P(\\text{col 3}=3)$ directly—this is **WRONG** because row 2 and column 3 both contain $A_{2,3}$ so they are NOT independent!',
        mentalShift:
          'Condition on the **only shared bridge variable** $A_{2,3} \\in \\{0, 1\\}$! Once $A_{2,3}$ is fixed, the remaining 4 cells of row 2 and the remaining 4 cells of column 3 are completely disjoint and independent $\\text{Bin}(4, 0.5)$ counts.',
        steps: [
          {
            label: 'Step 1 — Case $A_{2,3} = 1$ (prob $0.5$)',
            detail:
              'We need $2$ more ones in the other $4$ entries of row 2 AND $2$ more ones in the other $4$ entries of col 3: $\\frac{\\binom{4}{2}}{16} \\cdot \\frac{\\binom{4}{2}}{16} = \\frac{6}{16}\\cdot\\frac{6}{16} = \\frac{36}{256} = \\frac{9}{64}$.',
          },
          {
            label: 'Step 2 — Case $A_{2,3} = 0$ (prob $0.5$)',
            detail:
              'We need $3$ ones in the other $4$ entries of row 2 AND $3$ ones in the other $4$ entries of col 3: $\\frac{\\binom{4}{3}}{16} \\cdot \\frac{\\binom{4}{3}}{16} = \\frac{4}{16}\\cdot\\frac{4}{16} = \\frac{16}{256} = \\frac{4}{64}$.',
          },
          {
            label: 'Step 3 — Law of Total Probability',
            detail:
              '$0.5 \\left(\\frac{9}{64} + \\frac{4}{64}\\right) = \\frac{13}{128} \\approx 0.1016$ (compare to the naive wrong independent product $(10/32)^2 = 0.0977$!).',
          },
        ],
        lockInTakeaway:
          'Whenever two counts share 1–2 overlapping trials, condition on the overlap first—conditional independence immediately returns!',
      },
    ],
    arsenalCards: [
      {
        id: 'm3-c1-ars-1',
        badge: 'Discrete CDF Jump',
        whenYouSpot: 'A step-function CDF $F_X(x)$ and a question asking $P(X=a)$ or $P(a \\le X < b)$',
        directWeaponLatex: 'P(X=a) = F_X(a) - F_X(a^-), \\qquad P(a < X \\le b) = F_X(b) - F_X(a)',
        instantRule: 'Right-closed intervals subtract $F(a)$; left-closed intervals must subtract $F(a^-)$ to keep the jump at $a$.',
        tenSecondExample: 'If $F(2^-)=0.2, F(2)=0.5, F(4)=0.9$, then $P(X=2)=0.3$ and $P(2 \\le X \\le 4) = 0.9 - 0.2 = 0.7$.',
        oneFatalTrap: 'Treating discrete $P(a < X \\le b)$ like continuous $P(a \\le X \\le b)$ and dropping the jump mass at $a$.',
      },
      {
        id: 'm3-c1-ars-2',
        badge: 'Binomial vs Poisson',
        whenYouSpot: 'Independent count $S_n$ with replacement, or rare-event rate $\\lambda = np$',
        directWeaponLatex: 'E[\\text{Bin}]=np,\\; \\text{Var}[\\text{Bin}]=np(1-p) \\quad|\\quad E[\\text{Pois}]=\\text{Var}[\\text{Pois}]=\\lambda',
        instantRule: 'In Poisson($\\lambda$), $E[X^2] = \\lambda + \\lambda^2$; in Binomial($n,p$), variance is strictly smaller than mean ($np(1-p) < np$).',
        tenSecondExample: '100 draws with replacement ($p=2/3$): $E[S_{100}] = 200/3 \\approx 66.67$ in 3 seconds.',
        oneFatalTrap: 'Forgetting to square the coefficient in $\\text{Var}(aX+b) = a^2\\text{Var}(X)$.',
      },
      {
        id: 'm3-c1-ars-3',
        badge: 'Consecutive Streak',
        whenYouSpot: 'Expected trials until $2$ consecutive successes (each with prob $p$)',
        directWeaponLatex: 'E[\\text{2 consecutive } p] = \\frac{1}{p} + \\frac{1}{p^2}',
        instantRule: 'General $k$ consecutive successes with prob $p$ takes $\\sum_{j=1}^k p^{-j}$ expected trials.',
        tenSecondExample: 'Two consecutive even die rolls ($p=1/2$): $2 + 4 = 6$ rolls (GATE 2024 Q.36).',
        oneFatalTrap: 'Thinking "average 2 rolls for 1st even, plus 2 for 2nd = 4"—forgetting that failing the 2nd roll resets the entire streak!',
      },
    ],
    questions: [
      {
        id: 'm3-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'A discrete random variable $X$ takes values in $\\{1, 2, 3, 4\\}$ with PMF $p_X(x) = c x$ for some constant $c > 0$. Compute the variance $\\text{Var}(X)$.',
        natAnswer: { min: 0.99, max: 1.01, exactDisplay: '1' },
        triggerHint: 'First normalize $\\sum_{x=1}^4 c x = 1$ to find $c$, then compute $E[X^2] - (E[X])^2$.',
        intuitiveSolution: [
          'Sum of PMF: $c(1 + 2 + 3 + 4) = 10c = 1 \\implies c = 0.1$.',
          '$E[X] = 0.1(1^2 + 2^2 + 3^2 + 4^2) = 0.1(1 + 4 + 9 + 16) = 3.0$.',
          '$E[X^2] = 0.1(1^3 + 2^3 + 3^3 + 4^3) = 0.1(1 + 8 + 27 + 64) = 10.0$.',
          '$\\text{Var}(X) = E[X^2] - (E[X])^2 = 10.0 - 3.0^2 = 1$.',
        ],
        directShortcutUsed: 'PMF normalization + $\\text{Var}(X) = E[X^2] - (E[X])^2$',
      },
      {
        id: 'm3-c1-q2',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #2',
        marks: 1,
        type: 'MCQ',
        stem: 'Let $X \\sim \\text{Poisson}(\\lambda)$ with $\\lambda > 0$. If $E[X^2] = 6$, what is $P(X = 0)$?',
        options: [
          { id: 'A', text: '$e^{-2}$', whyTrueOrFalse: 'Correct: $\\lambda + \\lambda^2 = 6 \\implies \\lambda = 2$, so $P(X=0)=e^{-2}$.' },
          { id: 'B', text: '$e^{-3}$', whyTrueOrFalse: 'Incorrect: $-3$ is the negative root of $\\lambda^2 + \\lambda - 6 = 0$, invalid since $\\lambda > 0$.' },
          { id: 'C', text: '$2e^{-2}$', whyTrueOrFalse: 'Incorrect: $2e^{-2}$ is $P(X=1)$, not $P(X=0)$.' },
          { id: 'D', text: '$e^{-6}$', whyTrueOrFalse: 'Incorrect: Confuses $E[X^2]=6$ with $\\lambda=6$.' },
        ],
        correctOptions: ['A'],
        triggerHint: 'Recall that for Poisson($\\lambda$), both $E[X]$ and $\\text{Var}(X)$ equal $\\lambda$.',
        intuitiveSolution: [
          'Write $E[X^2] = \\text{Var}(X) + (E[X])^2 = \\lambda + \\lambda^2$.',
          'Solve $\\lambda^2 + \\lambda - 6 = 0 \\implies (\\lambda + 3)(\\lambda - 2) = 0$. Since $\\lambda > 0$, $\\lambda = 2$.',
          'Thus $P(X=0) = \\frac{e^{-2} 2^0}{0!} = e^{-2}$.',
        ],
        directShortcutUsed: 'Poisson moment identity $E[X^2] = \\lambda + \\lambda^2$',
      },
      {
        id: 'm3-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.11',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem: 'Consider two statements about probability distributions:\n- **S1:** For a Poisson random variable $X$ with parameter $\\lambda > 0$, the mean equals the variance.\n- **S2:** For a Standard Normal random variable $Z \\sim \\mathcal{N}(0, 1)$, the mean is $0$ and the variance is $1$.\n\nWhich of the following is TRUE?',
        options: [
          { id: 'A', text: 'Both S1 and S2 are true', whyTrueOrFalse: 'Correct: $\\text{Poisson}(\\lambda)$ has $E[X]=\\text{Var}(X)=\\lambda$, and $\\mathcal{N}(0,1)$ has mean $0$, variance $1$.' },
          { id: 'B', text: 'S1 is true, S2 is false', whyTrueOrFalse: 'Incorrect: Standard Normal by definition has mean $0$ and variance $1$.' },
          { id: 'C', text: 'S1 is false, S2 is true', whyTrueOrFalse: 'Incorrect: Poisson mean and variance both equal $\\lambda$.' },
          { id: 'D', text: 'Both S1 and S2 are false', whyTrueOrFalse: 'Incorrect: Both fundamental distribution properties hold.' },
        ],
        correctOptions: ['A'],
        triggerHint: 'Check the defining mean and variance of $\\text{Poisson}(\\lambda)$ and $\\mathcal{N}(0,1)$.',
        intuitiveSolution: [
          'For $X \\sim \\text{Poisson}(\\lambda)$, $E[X] = \\lambda$ and $\\text{Var}(X) = \\lambda$, so S1 is true.',
          'For $Z \\sim \\mathcal{N}(0, 1)$, mean $= 0$ and variance $= 1$, so S2 is true.',
        ],
        directShortcutUsed: 'Direct canonical moments of Poisson and Standard Normal',
      },
      {
        id: 'm3-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.61',
        year: 2025,
        marks: 2,
        type: 'NAT',
        stem: 'An urn contains $5$ white balls and $10$ black balls. A ball is drawn uniformly at random and then **replaced** back into the urn. This experiment is repeated $100$ times independently. What is the expected number of black balls drawn? (Round to two decimal places)',
        natAnswer: { min: 66.5, max: 66.8, exactDisplay: '66.67' },
        triggerHint: 'With replacement means every draw is an identical $\\text{Bernoulli}(p)$ trial with $p = 10/15$.',
        intuitiveSolution: [
          'In any single draw, $P(\\text{Black}) = \\frac{10}{5 + 10} = \\frac{10}{15} = \\frac{2}{3}$.',
          'Because draws are with replacement, $S_{100} \\sim \\text{Binomial}(100, \\frac{2}{3})$.',
          'Therefore $E[S_{100}] = n p = 100 \\times \\frac{2}{3} = \\frac{200}{3} \\approx 66.67$.',
        ],
        directShortcutUsed: 'Binomial expectation $E[S_n] = np$',
      },
      {
        id: 'm3-c1-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.54',
        year: 2026,
        marks: 2,
        type: 'MSQ',
        stem: 'Let $X$ be a discrete random variable taking finitely many values $x_1 < x_2 < \\dots < x_m$ with $P(X = x_i) > 0$ for each $i$, and let $F(x) = P(X \\le x)$ be its cumulative distribution function (CDF). Which of the following statements MUST be true?',
        options: [
          { id: 'A', text: '$F(x)$ is a non-decreasing function on $\\mathbb{R}$', whyTrueOrFalse: 'True: If $a < b$, the event $\\{X \\le a\\} \\subseteq \\{X \\le b\\}$, so $F(a) \\le F(b)$.' },
          { id: 'B', text: '$F(x)$ has a jump discontinuity at every $x_i$', whyTrueOrFalse: 'True: At each $x_i$, $F(x_i) - F(x_i^-) = P(X = x_i) > 0$.' },
          { id: 'C', text: '$F(x)$ is continuous on $\\mathbb{R}$', whyTrueOrFalse: 'False: Discrete CDFs are staircase functions with jumps at positive-mass points.' },
          { id: 'D', text: '$\\lim_{x \\to -\\infty} F(x) = 0$ and $\\lim_{x \\to +\\infty} F(x) = 1$', whyTrueOrFalse: 'True: Universal boundary property of every valid CDF.' },
        ],
        correctOptions: ['A', 'B', 'D'],
        triggerHint: 'Visualize the staircase graph of a finite discrete CDF.',
        intuitiveSolution: [
          'Every CDF is non-decreasing (A) and satisfies $\\lim_{x\\to -\\infty}F(x)=0$, $\\lim_{x\\to +\\infty}F(x)=1$ (D).',
          'Because $X$ is discrete with $P(X=x_i) > 0$, $F$ jumps upward by $P(X=x_i)$ at each $x_i$, making (B) true and (C) false.',
        ],
        directShortcutUsed: 'CDF axioms + discrete jump-discontinuity structure',
      },
      {
        id: 'm3-c1-q6',
        tier: 'tricky',
        sourceLabel: 'GATE DA 2024 · Q.36',
        year: 2024,
        marks: 2,
        type: 'MCQ',
        stem: 'A fair $6$-sided die is rolled repeatedly and independently until **two consecutive even numbers** appear. What is the expected number of throws needed?',
        options: [
          { id: 'A', text: '$4$', whyTrueOrFalse: 'Incorrect: $4$ would be the wait for $2$ non-consecutive even numbers ($2+2$), ignoring streak resets on odd rolls.' },
          { id: 'B', text: '$6$', whyTrueOrFalse: 'Correct: Two-state recurrence gives $E_0 = 1/p + 1/p^2 = 2 + 4 = 6$.' },
          { id: 'C', text: '$8$', whyTrueOrFalse: 'Incorrect: Overestimates the reset penalty.' },
          { id: 'D', text: '$12$', whyTrueOrFalse: 'Incorrect: Corresponds to $p = 1/3$, not $p = 1/2$.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Define $E_0$ (no streak) and $E_1$ (one even just rolled) and write a $2\\times 2$ first-step system.',
        intuitiveSolution: [
          'Each roll is even with probability $p = 3/6 = 1/2$.',
          'From scratch: $E_0 = 1 + \\frac{1}{2}E_1 + \\frac{1}{2}E_0 \\implies E_0 = 2 + E_1$.',
          'After one even roll: $E_1 = 1 + \\frac{1}{2}(0) + \\frac{1}{2}E_0$.',
          'Solving gives $E_0 = 2 + 1 + \\frac{1}{2}E_0 \\implies E_0 = 6$.',
        ],
        directShortcutUsed: 'Two-state streak formula $\\frac{1}{p} + \\frac{1}{p^2} = 2 + 4 = 6$',
      },
    ],
  },
  {
    id: 'prob2-ch2',
    number: 2,
    title: 'Continuous Random Variables, PDF, CDF, Uniform, Exponential & Memorylessness',
    shortTitle: 'Continuous PDF/CDF & Exp',
    estimatedHours: 4.5,
    dayLabel: 'Week 2 · Day 4–5 (Part B)',
    tagline:
      'Let’s step smoothly from discrete staircases to continuous densities: you will see why $f_X(x) > 1$ is completely legal while $P(X=c)=0$, how to invert continuous CDF quantiles cleanly, and how Exponential memorylessness dissolves tough integrals in seconds.',
    syllabusMapping: [
      'Continuous random variables: Probability Density Function (PDF) and CDF',
      'Continuous Uniform distribution $U(a, b)$',
      'Exponential distribution $\\text{Exp}(\\lambda)$ and memoryless property',
      'Discretization of Exponential RVs & simple CDF event transformations',
    ],
    whatIsImportant: [
      'PDF normalization $\\int f_X(x)\\,dx = 1$, $f_X(x) = F_X\'(x)$, and why $f_X(x)$ CAN exceed $1$',
      'Median & quantile inversion from piecewise CDFs ($F_X(\\text{median}) = 0.5$, GATE 2025 Q.19)',
      'Direct CDF interval evaluation $P(X^2 \\le c) = F_X(\\sqrt{c}) - F_X(-\\sqrt{c})$ without computing $f_Y$ (GATE 2025 Q.39)',
      'Exponential survival $P(X > t) = e^{-\\lambda t}$, moments $E[X]=1/\\lambda, \\text{Var}(X)=1/\\lambda^2$ (GATE 2024 Q.57), memorylessness (GATE 2026 Q.34), and $\\lfloor X \\rfloor \\sim \\text{Geom}$ (GATE 2025 Q.41)',
    ],
    whatIsNotImportant: [
      'Gamma, Beta, Weibull, or Pareto distribution formulas (unless explicitly defined inside the question)',
      'Measure-theoretic Lebesgue integration or singular Cantor distributions',
    ],
    inboundStream: 'Module 1 Integration & Module 3 Ch.1 Discrete CDFs and Geometric waiting times.',
    outboundStream: [
      'Week 2 Ch.3 Normal Bell Curve & Joint/Conditional Continuous Densities',
      'Week 3 Sampling Distributions ($\\chi^2$, $t$) & Confidence Intervals',
      'Week 7 Continuous Likelihoods in Gaussian Naive Bayes & MLE',
    ],
    glossary: [
      {
        term: 'Probability Density Function (PDF)',
        symbol: '$f_X(x)$',
        plainEnglish:
          'Probability per unit length—just like mass density (kg per meter) along a rod. A PDF is never negative and its total area equals $1$, yet its height $f_X(x)$ can easily exceed $1$ on a narrow interval!',
        tinyExample: 'For $X \\sim U(0, 0.5)$, width is $0.5$ so the constant density height must be $f_X(x) = 2 > 1$.',
      },
      {
        term: 'Continuous CDF',
        symbol: '$F_X(x) = \\int_{-\\infty}^x f_X(t)\\,dt$',
        plainEnglish:
          'The smooth, jump-free area accumulated under the PDF curve from $-\\infty$ up to $x$. Differentiating $F_X(x)$ recovers the density $f_X(x)$ right back.',
        tinyExample: 'For $U(0, 0.5)$, $F_X(x) = 2x$ on $[0, 0.5]$, and $F_X\'(x) = 2 = f_X(x)$.',
      },
      {
        term: 'Zero Point-Mass Property',
        symbol: '$P(X = c) = 0$',
        plainEnglish:
          'For any continuous RV, a single exact real number has zero width and therefore zero area. That means $<$ and $\\le$ give the exact same probability every time.',
        tinyExample: 'For continuous $X$, $P(1 < X < 3) = P(1 \\le X \\le 3) = F_X(3) - F_X(1)$.',
      },
      {
        term: 'Support',
        plainEnglish:
          'The region of real numbers where the density $f_X(x)$ is strictly positive (where the random variable can actually land). Always check the support limits before you integrate!',
        tinyExample: 'The support of $\\text{Exp}(\\lambda)$ is $[0, \\infty)$, while the support of $U(a, b)$ is $[a, b]$.',
      },
      {
        term: 'Median & Quantile',
        symbol: '$F_X(q_p) = p$',
        plainEnglish:
          'The $p$-quantile $q_p$ is the cutoff where exactly fraction $p$ of the probability lies to the left. The median is simply the $50\\%$ balance mark where $F_X(m) = 0.5$.',
        tinyExample: 'If $F_X(x) = \\frac{x-t}{4-t}$ on $[t, 4]$ has median $3$, setting $\\frac{3-t}{4-t} = 0.5$ gives $t = 2$.',
      },
      {
        term: 'Continuous Uniform Distribution',
        symbol: '$U(a, b)$',
        plainEnglish:
          'A completely flat density over $[a, b]$ where every sub-interval of equal length is equally likely. Its mean is the midpoint $\\frac{a+b}{2}$ and its variance is $\\frac{(b-a)^2}{12}$.',
        tinyExample: 'For $T \\sim U(0, 10)$, $P(2 \\le T \\le 5) = \\frac{5 - 2}{10} = 0.3$ with zero integration.',
      },
      {
        term: 'Exponential Distribution',
        symbol: '$\\text{Exp}(\\lambda)$',
        plainEnglish:
          'Models the continuous waiting time until the next Poisson arrival at rate $\\lambda > 0$. Notice that its mean ($1/\\lambda$) and standard deviation ($1/\\lambda$) are identical, so its variance is $1/\\lambda^2$.',
        tinyExample: 'At rate $\\lambda = 0.5$/year, average lifetime is $E[X] = 2$ years and $\\text{Var}(X) = 4$.',
      },
      {
        term: 'Survival (Tail) Function',
        symbol: '$S(t) = P(X > t) = 1 - F_X(t)$',
        plainEnglish:
          'The chance that a lifetime or waiting time lasts strictly longer than $t$. For $\\text{Exp}(\\lambda)$, survival is just $e^{-\\lambda t}$, which turns interval probabilities into $e^{-\\lambda a} - e^{-\\lambda b}$.',
        tinyExample: 'For $\\text{Exp}(\\lambda)$, $P(X \\ge 2) = e^{-2\\lambda} = 0.25$ immediately gives $\\lambda = \\ln 2$.',
      },
      {
        term: 'Memoryless Property',
        symbol: '$P(X > s+t \\mid X > s) = P(X > t)$',
        plainEnglish:
          'The "ageless light bulb" superpower unique to $\\text{Exp}(\\lambda)$ among continuous distributions: surviving $s$ hours already does not age the bulb—your remaining wait behaves brand new!',
        tinyExample: 'If $P(X > 5) = 0.35$, then $P(X > 10 \\mid X > 5) = P(X > 5) = 0.35$ in one second.',
      },
      {
        term: 'CDF Event Inversion',
        symbol: '$P(g(X) \\le c)$',
        plainEnglish:
          'A time-saving trick: instead of finding the new PDF of $Y = g(X)$, solve the inequality $g(X) \\le c$ directly for $X$ and plug the endpoints straight into $F_X$.',
        tinyExample: '$P(X^2 \\le 0.25) = P(-0.5 \\le X \\le 0.5) = F_X(0.5) - F_X(-0.5)$.',
      },
    ],
    generatorId: 'exp-memoryless-gen',
    concepts: [
      {
        id: 'm3-c2-1',
        title: 'Continuous RVs: PDF vs. CDF, Point-Zero Mass & Event Inversion',
        subtitle: 'Why density is probability-per-unit-length (so $f_X(x)$ can beat $1$!) and how $F_X$ handles transforms cleanly',
        priority: 'core-pillar',
        buildsOn: 'Definite integrals, Fundamental Theorem of Calculus & discrete CDFs',
        toyExample: {
          title: 'Throwing a Dart at a Narrow $[0, 0.5]$ Meter Strip',
          scenario:
            'Suppose a dart lands uniformly at random somewhere inside the narrow interval $[0, 0.5]$ meters. What height $f_X(x)$ must the density curve have?',
          walkthroughSteps: [
            '1. **Area Must Equal 1:** The base of the rectangle has width $0.5$. For $\\text{width} \\times \\text{height} = 1$, the height MUST be $f_X(x) = \\frac{1}{0.5} = 2$!',
            '2. **$f_X(x) > 1$ Is Legal!** Even though $f_X(0.25) = 2 > 1$, nothing broke because $f_X(x)$ is **density** (probability per meter), NOT probability.',
            '3. **Single Points Have Zero Mass:** The probability of hitting $x = 0.250000\\dots$ has width $0$, so $P(X = 0.25) = 0$. Consequently, $P(X < 0.25) = P(X \\le 0.25) = 2 \\times 0.25 = 0.5$.',
            '4. **Smooth Ramp CDF:** $F_X(x) = \\int_0^x 2\\,dt = 2x$ on $[0, 0.5]$ — zero jumps, strictly $F_X\'(x) = f_X(x)$.',
          ],
          ahaMoment:
            'Here is the analogy that keeps PDF and CDF straight forever: think of $f_X(x)$ as **mass density (kg per meter)** along a rod and $F_X(x)$ as **total accumulated weight** up to point $x$. Density can easily exceed $1$ on a short rod, whereas accumulated probability $F_X(x)$ always stays inside $[0, 1]$.',
        },
        theoremAndFormula: {
          statement:
            'A continuous random variable $X$ has a non-negative PDF $f_X(x) \\ge 0$ integrating to $1$. Its CDF $F_X(x) = P(X \\le x)$ is continuous everywhere on $\\mathbb{R}$, non-decreasing, and recovers the PDF via differentiation wherever $F_X$ is differentiable.',
          formulaLatex:
            '\\int_{-\\infty}^{\\infty} f_X(x)\\,dx = 1, \\qquad P(a \\le X \\le b) = \\int_{a}^{b} f_X(x)\\,dx = F_X(b) - F_X(a), \\qquad f_X(x) = \\frac{d}{dx}F_X(x)',
          plainEnglishDecoding:
            'Notice how forgiving continuous endpoints are: because $P(X=c)=0$ at every single point, open, half-open, and closed intervals $(a,b)$, $[a,b)$, $(a,b]$, and $[a,b]$ all carry the exact same probability $F_X(b) - F_X(a)$.',
          workedMiniExamples: [
            {
              prompt: 'A continuous RV has CDF $F_X(x) = \\frac{x-t}{4-t}$ on $[t, 4]$ ($0$ below $t$, $1$ above $4$). If the median is $3$, find $t$.',
              solution:
                'By definition of median, $F_X(3) = 0.5 \\implies \\frac{3-t}{4-t} = \\frac{1}{2} \\implies 6 - 2t = 4 - t \\implies t = 2$ (GATE 2025 Q.19).',
            },
            {
              prompt: 'Given $F_X(x) = \\frac{1}{4}(x+1)^2$ on $[-1, 1]$, compute $P(X^2 \\le 0.25)$.',
              solution:
                'Rewrite the event directly on $X$: $X^2 \\le 0.25 \\iff -0.5 \\le X \\le 0.5$. Evaluate $F_X(0.5) - F_X(-0.5) = \\frac{1}{4}(1.5^2 - 0.5^2) = \\frac{1}{4}(2.25 - 0.25) = 0.5$ (GATE 2025 Q.39).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Every valid PDF satisfies $0 \\le f_X(x) \\le 1$ everywhere.',
            reality: '**FALSE!** Only $f_X(x) \\ge 0$ and $\\int_{-\\infty}^{\\infty} f_X(x)\\,dx = 1$ are required. Whenever support width is $< 1$, the PDF MUST exceed $1$ somewhere!',
            counterExample: '$X \\sim U(0, 0.2)$ has constant PDF $f_X(x) = 5 > 1$ on $[0, 0.2]$.',
          },
          {
            myth: 'If $P(X = a) = 0$, then the outcome $X = a$ is impossible.',
            reality: 'In continuous probability, **every single point** has probability $0$ even though the dart must land *somewhere*! Probability $0$ does not mean empty/impossible set.',
            counterExample: 'Every real number $x \\in [0, 1]$ for $U(0,1)$ has $P(X=x)=0$, yet $P(X \\in [0,1]) = 1$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Continuous Likelihood & Positive Log-Likelihoods',
            whyItMatters: 'Because a PDF $f_X(x)$ can exceed $1$, a continuous log-likelihood $\\sum \\ln f_X(x_i)$ can legitimately be **positive**—unlike discrete log-probabilities which are always $\\le 0$!',
          },
        ],
      },
      {
        id: 'm3-c2-2',
        title: 'Continuous Uniform Distribution $U(a, b)$',
        subtitle: 'Flat density over $[a, b]$, why variance divides by $12$, and inverse-transform sampling',
        priority: 'high-yield',
        buildsOn: 'Definite integration of polynomials & affine variance scaling',
        toyExample: {
          title: 'Bus Arriving Uniformly Between 8:00 and 8:10',
          scenario:
            'Your morning bus arrives at a uniformly random minute $T \\sim U(0, 10)$ after 8:00 AM.',
          walkthroughSteps: [
            '1. **Flat Height:** Total width is $10$, so $f_T(t) = \\frac{1}{10}$ for $0 \\le t \\le 10$.',
            '2. **Interval Probability = Length Fraction:** Probability you wait between $2$ and $5$ minutes is simply $\\frac{5-2}{10} = 0.3$.',
            '3. **Mean & Why $/12$ in Variance:** Center of symmetry is $E[T] = \\frac{0+10}{2} = 5$. For unit $U(0,1)$, $E[U] = \\frac{1}{2}$ and $E[U^2] = \\int_0^1 u^2\\,du = \\frac{1}{3}$, so $\\text{Var}(U) = \\frac{1}{3} - \\frac{1}{4} = \\frac{1}{12}$. Scaling width to $10$ multiplies variance by $10^2$: $\\text{Var}(T) = \\frac{100}{12} \\approx 8.33$.',
          ],
          ahaMoment:
            'Notice that every $U(a, b)$ is simply a shifted and stretched copy $a + (b-a)U$ of the unit $U(0,1)$—which explains right away why the center is $\\frac{a+b}{2}$ and the variance scales to $\\frac{(b-a)^2}{12}$.',
        },
        theoremAndFormula: {
          statement:
            'For $X \\sim U(a, b)$ with $a < b$, the PDF is constant on $[a, b]$ and the CDF grows linearly from $0$ to $1$.',
          formulaLatex:
            'f_X(x) = \\frac{1}{b-a}\\; (a \\le x \\le b), \\qquad E[X] = \\frac{a+b}{2}, \\qquad \\text{Var}(X) = \\frac{(b-a)^2}{12}',
          plainEnglishDecoding:
            'You never need calculus for a Uniform sub-interval $[c, d] \\subseteq [a, b]$: just divide the sub-interval’s length by the total length to get $P(c \\le X \\le d) = \\frac{d - c}{b - a}$.',
          workedMiniExamples: [
            {
              prompt: 'For $X \\sim U[-2, 6]$, compute $E[X]$, $\\text{Var}(X)$, and $P(|X - 2| \\le 1)$.',
              solution:
                'Width $b-a = 8$. $E[X] = \\frac{-2+6}{2} = 2$, $\\text{Var}(X) = \\frac{8^2}{12} = \\frac{16}{3}$. Event $|X-2|\\le 1 \\iff X \\in [1, 3]$ has length $2$, so probability is $\\frac{2}{8} = 0.25$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'The variance of $U(a, b)$ is $\\frac{(b-a)^2}{4}$ or $\\frac{b^2-a^2}{12}$.',
            reality: 'The denominator is **$12$**, and the numerator uses **width squared** $(b-a)^2$, NOT $b^2-a^2$! Shifting $[a, b] \\to [a+c, b+c]$ never changes variance.',
            counterExample: 'For $U(10, 12)$, width is $2$, so $\\text{Var} = \\frac{2^2}{12} = \\frac{1}{3}$, identical to $U(0, 2)$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1 & Sec 7 (Sampling)',
            targetWeek: 3,
            topic: 'Inverse Transform Sampling ($F^{-1}(U)$)',
            whyItMatters: 'Simulating $X \\sim \\text{Exp}(\\lambda)$ or any continuous distribution in Python starts from $U \\sim U(0,1)$ and sets $X = F_X^{-1}(U) = -\\frac{1}{\\lambda}\\ln(1 - U)$.',
          },
        ],
      },
      {
        id: 'm3-c2-3',
        title: 'Exponential Distribution, Memorylessness & Discretization',
        subtitle: 'Why $P(X > t) = e^{-\\lambda t}$ makes integrals vanish and turns $\\lfloor X \\rfloor$ into Geometric',
        priority: 'core-pillar',
        buildsOn: 'Poisson rate $\\lambda$ & improper integrals $\\int_0^\\infty e^{-\\lambda x}\\,dx$',
        toyExample: {
          title: 'The Ageless Light Bulb ($\\lambda = 0.5$ failures/year)',
          scenario:
            'Suppose a router chip has lifetime $X \\sim \\text{Exp}(\\lambda = 0.5)$ years, so its average lifetime is $E[X] = 1/0.5 = 2$ years and survival probability is $P(X > t) = e^{-0.5 t}$.',
          walkthroughSteps: [
            '1. **Survival at 5 Years:** $P(X > 5) = e^{-0.5(5)} = e^{-2.5} \\approx 0.0821$.',
            '2. **Now Condition on Surviving 5 Years:** Suppose the chip has already run cleanly for $5$ years ($X > 5$). What is $P(X > 10 \\mid X > 5)$?',
            '3. **Cancel the Exponentials:** $P(X > 10 \\mid X > 5) = \\frac{P(X > 10)}{P(X > 5)} = \\frac{e^{-5}}{e^{-2.5}} = e^{-2.5} = P(X > 5)$!',
            '4. **Ageless Meaning:** Surviving $5$ years didn’t wear out the chip at all—the probability of lasting *5 more years* is still $P(X > 5)$!',
          ],
          ahaMoment:
            'Here is the quick operational rule for memorylessness: whenever you see $P(X > s + t \\mid X > s)$ for an Exponential RV, just **subtract the already-survived time $s$ from both sides** and read off $P(X > t)$!',
        },
        theoremAndFormula: {
          statement:
            'An Exponential random variable $X \\sim \\text{Exp}(\\lambda)$ with rate $\\lambda > 0$ has survival function $P(X > x) = e^{-\\lambda x}$ for $x \\ge 0$, equal mean and standard deviation $1/\\lambda$, and is the **unique** continuous positive distribution satisfying memorylessness.',
          formulaLatex:
            'f_X(x) = \\lambda e^{-\\lambda x}\\; (x \\ge 0), \\quad P(X > x) = e^{-\\lambda x}, \\quad E[X] = \\frac{1}{\\lambda}, \\quad \\text{Var}(X) = \\frac{1}{\\lambda^2}, \\quad P(X > s+t \\mid X > s) = P(X > t)',
          plainEnglishDecoding:
            'Skip integrating $\\lambda e^{-\\lambda x}$ altogether in the exam: any interval probability $P(a \\le X < b)$ is simply the survival difference $P(X \\ge a) - P(X \\ge b) = e^{-\\lambda a} - e^{-\\lambda b}$.',
          workedMiniExamples: [
            {
              prompt: 'Let $X \\sim \\text{Exp}(\\ln 10)$ and define the integer floor $Y = \\lfloor X \\rfloor$. Find $q$ such that $P(Y = \\ell) = q^\\ell (1 - q)$ for $\\ell = 0, 1, 2, \\dots$.',
              solution:
                '$P(Y = \\ell) = P(\\ell \\le X < \\ell + 1) = e^{-\\ell\\ln 10} - e^{-(\\ell+1)\\ln 10} = (e^{-\\ln 10})^\\ell (1 - e^{-\\ln 10})$. Hence $q = e^{-\\ln 10} = 0.1$ (GATE 2025 Q.41)!',
            },
            {
              prompt: 'If $X \\sim \\text{Exp}(\\lambda)$ satisfies $5 E[X] = \\text{Var}(X)$, find $\\lambda$.',
              solution:
                'Plug in $E[X] = \\frac{1}{\\lambda}$ and $\\text{Var}(X) = \\frac{1}{\\lambda^2}$: $\\frac{5}{\\lambda} = \\frac{1}{\\lambda^2} \\implies \\lambda = \\frac{1}{5} = 0.2$ (GATE 2024 Q.57).',
            },
          ],
        },
        sandboxId: 'distribution-clt-lab',
        msqTraps: [
          {
            myth: 'In $\\text{Exp}(\\theta)$, $\\theta$ is always the mean $E[X]$.',
            reality: 'GATE DA uses **rate** parameterization $\\lambda$, where $f_X(x)=\\lambda e^{-\\lambda x}$ and $E[X]=1/\\lambda$. Always inspect the given formula or $P(X>t)$ to be 100% sure whether rate $\\lambda$ or scale $\\beta=1/\\lambda$ is used.',
            counterExample: 'If $P(X \\ge 2) = 0.25$, then $e^{-2\\lambda} = 0.25 \\implies \\lambda = \\ln 2$ (GATE 2025 Q.21), whereas the mean is $1/\\ln 2$.',
          },
          {
            myth: '$\\text{Var}(X) = \\frac{1}{\\lambda}$ for Exponential($\\lambda$).',
            reality: 'The **standard deviation** is $\\frac{1}{\\lambda}$ (equal to the mean!), so the **variance** is $(\\frac{1}{\\lambda})^2 = \\frac{1}{\\lambda^2}$.',
            counterExample: 'For $\\text{Exp}(\\lambda = 0.2)$, $E[X] = 5$ and $\\text{Var}(X) = 25 = 5 E[X]$, NOT $5$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1 & Sec 7',
            targetWeek: 3,
            topic: 'Competing Exponential Clocks & Markov Chains',
            whyItMatters: 'For independent $X_1 \\sim \\text{Exp}(\\lambda_1)$ and $X_2 \\sim \\text{Exp}(\\lambda_2)$, $\\min(X_1, X_2) \\sim \\text{Exp}(\\lambda_1 + \\lambda_2)$ and $P(X_1 < X_2) = \\frac{\\lambda_1}{\\lambda_1 + \\lambda_2}$.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm3-c2-htt-1',
        title: 'Bypass Integrals with the Exponential Survival Identity',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2025 · Q.21', 'GATE DA 2025 · Q.41', 'GATE DA 2026 · Q.34'],
        problemStatement:
          'Suppose $X \\sim \\text{Exp}(\\lambda)$ satisfies $P(X > 5) = 0.35$. Compute $P(X > 10 \\mid X > 5)$ and determine $P(1 \\le \\lfloor X \\rfloor \\le 2)$ in terms of $q = e^{-\\lambda}$.',
        triggerCue:
          'Seeing an **Exponential** RV with conditional inequalities $P(X > s+t \\mid X > s)$ or integer floor $\\lfloor X \\rfloor$.',
        bruteForceTrap:
          'First solving $\\lambda = -\\frac{1}{5}\\ln(0.35)$, then setting up $\\int_{10}^{\\infty} \\lambda e^{-\\lambda x}\\,dx$ divided by $\\int_5^\\infty \\lambda e^{-\\lambda x}\\,dx$.',
        mentalShift:
          'Never compute $\\lambda$ unless asked! Exponential problems live cleanly in **survival space** $S(x) = e^{-\\lambda x} = q^x$ where $q = e^{-\\lambda}$. Conditioning simply shifts the clock back to $0$.',
        steps: [
          {
            label: 'Step 1 — Memoryless shift',
            detail:
              '$P(X > 10 \\mid X > 5) = P(X > 5 + 5 \\mid X > 5) = P(X > 5) = 0.35$ directly—zero $\\ln$ or $\\exp$ calculations!',
          },
          {
            label: 'Step 2 — Integer floor interval via $q = e^{-\\lambda}$',
            detail:
              '$\\{1 \\le \\lfloor X \\rfloor \\le 2\\} \\iff \\{1 \\le X < 3\\}$, so $P(1 \\le \\lfloor X \\rfloor \\le 2) = S(1) - S(3) = q - q^3$.',
          },
        ],
        lockInTakeaway:
          'Translate every Exponential inequality immediately into $S(t) = P(X > t) = e^{-\\lambda t}$ and use $P(X > s+t \\mid X > s) = P(X > t)$.',
      },
      {
        id: 'm3-c2-htt-2',
        title: 'Stay in CDF Space for Event Transformations ($X^2 \\le c$)',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2025 · Q.39'],
        problemStatement:
          'Given the continuous CDF $F_X(x) = \\frac{1}{4}(x+1)^2$ on $[-1, 1]$ ($0$ below $-1$, $1$ above $1$), compute $P(X^2 \\le 0.25)$.',
        triggerCue:
          'Given $F_X(x)$ and asked for $P(g(X) \\le c)$ such as $P(X^2 \\le c)$ or $P(|X - a| \\le b)$.',
        bruteForceTrap:
          'Differentiating $F_X(x)$ to find $f_X(x)$, deriving the Jacobian PDF of $Y = X^2$ on $[0, 1]$, and integrating $f_Y(y)$ from $0$ to $0.25$.',
        mentalShift:
          'Skip the PDF of $Y$ entirely! Invert the inequality **inside the probability** to express $\\{g(X) \\le c\\}$ as an interval $[a, b]$ on $X$, then evaluate $F_X(b) - F_X(a)$ directly.',
        steps: [
          {
            label: 'Step 1 — Unpack the square inequality on $X$',
            detail:
              '$X^2 \\le 0.25 \\iff -0.5 \\le X \\le 0.5$. (Make sure to include BOTH negative and positive branches!)',
          },
          {
            label: 'Step 2 — Subtract the CDF at the endpoints',
            detail:
              'Since $X$ is continuous, $P(-0.5 \\le X \\le 0.5) = F_X(0.5) - F_X(-0.5) = \\frac{1}{4}(1.5^2 - 0.5^2) = \\frac{1}{4}(2.25 - 0.25) = 0.5$.',
          },
        ],
        lockInTakeaway:
          'Never differentiate a given CDF just to integrate it back again—solve the inequality for $X$ and subtract $F_X(\\text{upper}) - F_X(\\text{lower})$.',
      },
    ],
    arsenalCards: [
      {
        id: 'm3-c2-ars-1',
        badge: 'PDF vs CDF Core',
        whenYouSpot: 'Continuous PDF/CDF parameter solving, median, or $P(X^2 \\le c)$',
        directWeaponLatex: 'F_X(\\text{median}) = 0.5, \\qquad P(a \\le X \\le b) = F_X(b) - F_X(a)',
        instantRule: 'PDF $f_X(x) = F_X\'(x)$ can exceed $1$; point mass $P(X=c) = 0$; stay in CDF space whenever possible.',
        tenSecondExample: 'If $F_X(x) = \\frac{x-t}{4-t}$ has median $3$, solve $\\frac{3-t}{4-t} = 0.5 \\implies t = 2$.',
        oneFatalTrap: 'Rejecting a valid PDF just because $f_X(x) > 1$ on a narrow interval.',
      },
      {
        id: 'm3-c2-ars-2',
        badge: 'Exp Memoryless',
        whenYouSpot: '$X \\sim \\text{Exp}(\\lambda)$, $P(X > s+t \\mid X > s)$, or $\\lfloor X \\rfloor$',
        directWeaponLatex: 'P(X > t) = e^{-\\lambda t}, \\quad E[X]=\\frac{1}{\\lambda}, \\quad \\text{Var}(X)=\\frac{1}{\\lambda^2}',
        instantRule: 'Drop conditioning age $s$: $P(X > s+t \\mid X > s) = P(X > t)$; and $\\lfloor \\text{Exp}(\\lambda) \\rfloor \\sim \\text{Geom}$ with $q = e^{-\\lambda}$.',
        tenSecondExample: 'Given $P(X>5)=0.35$, $P(X>10\\mid X>5) = P(X>5) = 0.35$ immediately.',
        oneFatalTrap: 'Confusing $\\text{SD}[X] = 1/\\lambda$ with $\\text{Var}(X) = 1/\\lambda^2$.',
      },
      {
        id: 'm3-c2-ars-3',
        badge: 'Uniform $U(a,b)$',
        whenYouSpot: 'Continuous Uniform distribution on $[a, b]$',
        directWeaponLatex: 'E[X] = \\frac{a+b}{2}, \\qquad \\text{Var}(X) = \\frac{(b-a)^2}{12}',
        instantRule: 'Any sub-interval probability is pure length ratio $\\frac{d-c}{b-a}$; shifting $[a,b]$ leaves variance fixed.',
        tenSecondExample: 'For $X \\sim U[-1, 5]$, $E[X]=2$ and $\\text{Var}(X) = 36/12 = 3$.',
        oneFatalTrap: 'Using $(b^2-a^2)/12$ or dividing by $4$ instead of $12$.',
      },
    ],
    questions: [
      {
        id: 'm3-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'A continuous random variable $X$ has PDF $f_X(x) = c x$ for $0 \\le x \\le 0.5$, and $0$ otherwise. Find the value of the normalizing constant $c$.',
        natAnswer: { min: 7.99, max: 8.01, exactDisplay: '8' },
        triggerHint: 'Set $\\int_0^{0.5} c x\\,dx = 1$ (and note why $f_X(0.5)=4 > 1$ is completely valid!).',
        intuitiveSolution: [
          'Integrate over the support $[0, 0.5]$: $\\int_0^{0.5} c x\\,dx = c \\left[\\frac{x^2}{2}\\right]_0^{0.5} = c \\cdot \\frac{0.25}{2} = \\frac{c}{8}$.',
          'Set $\\frac{c}{8} = 1 \\implies c = 8$. (Notice $f_X(0.5) = 8(0.5) = 4 > 1$, proving PDFs can exceed $1$!)',
        ],
        directShortcutUsed: 'PDF area normalization $\\int f_X(x)\\,dx = 1$',
      },
      {
        id: 'm3-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.19',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $X$ be a continuous random variable with CDF $F_X(x) = 0$ for $x < t$, $F_X(x) = \\frac{x - t}{4 - t}$ for $t \\le x \\le 4$, and $F_X(x) = 1$ for $x > 4$ (where $t < 4$). If the **median** of $X$ is $3$, what is the value of $t$?',
        options: [
          { id: 'A', text: '$2$', whyTrueOrFalse: 'Correct: $F_X(3) = \\frac{3-t}{4-t} = 0.5 \\implies 6 - 2t = 4 - t \\implies t = 2$.' },
          { id: 'B', text: '$1$', whyTrueOrFalse: 'Incorrect: Gives $F_X(3) = 2/3 \\neq 0.5$.' },
          { id: 'C', text: '$0$', whyTrueOrFalse: 'Incorrect: Gives $F_X(3) = 3/4 \\neq 0.5$.' },
          { id: 'D', text: '$-1$', whyTrueOrFalse: 'Incorrect: Gives $F_X(3) = 4/5 \\neq 0.5$.' },
        ],
        correctOptions: ['A'],
        triggerHint: 'The median $m$ of a continuous RV satisfies $F_X(m) = 0.5$.',
        intuitiveSolution: [
          'Since $F_X$ is linear on $[t, 4]$, $X$ is Uniform on $[t, 4]$, so its median equals its midpoint $\\frac{t+4}{2} = 3 \\implies t = 2$.',
          'Algebraic check: $F_X(3) = \\frac{3-t}{4-t} = \\frac{1}{2} \\implies 6 - 2t = 4 - t \\implies t = 2$.',
        ],
        directShortcutUsed: 'Continuous median $F_X(m) = 0.5$ / Uniform midpoint',
      },
      {
        id: 'm3-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.21',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $X \\sim \\text{Exp}(\\lambda)$ be an exponential random variable with rate parameter $\\lambda > 0$. If $P(X \\ge 2) = 0.25$, what is the value of $\\lambda$?',
        options: [
          { id: 'A', text: '$\\ln 2$', whyTrueOrFalse: 'Correct: $e^{-2\\lambda} = 0.25 = 2^{-2} \\implies \\lambda = \\ln 2$.' },
          { id: 'B', text: '$\\ln 4$', whyTrueOrFalse: 'Incorrect: Drops the factor of $2$ in $e^{-2\\lambda}$.' },
          { id: 'C', text: '$0.5$', whyTrueOrFalse: 'Incorrect: Confuses $e^{-2\\lambda}$ with $1 - 2\\lambda$.' },
          { id: 'D', text: '$\\frac{1}{\\ln 2}$', whyTrueOrFalse: 'Incorrect: $\\frac{1}{\\ln 2}$ is the mean $E[X]$, not the rate $\\lambda$.' },
        ],
        correctOptions: ['A'],
        triggerHint: 'Use the survival function $P(X \\ge t) = e^{-\\lambda t}$.',
        intuitiveSolution: [
          'Apply $P(X \\ge 2) = e^{-2\\lambda} = \\frac{1}{4} = 2^{-2}$.',
          'Take natural logs: $-2\\lambda = -2\\ln 2 \\implies \\lambda = \\ln 2$.',
        ],
        directShortcutUsed: 'Exponential survival formula $P(X \\ge t) = e^{-\\lambda t}$',
      },
      {
        id: 'm3-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.57',
        year: 2024,
        marks: 2,
        type: 'NAT',
        stem: 'Let $X$ be an exponential random variable with rate parameter $\\lambda > 0$ (PDF $f_X(x) = \\lambda e^{-\\lambda x}$ for $x \\ge 0$). If $5 E[X] = \\text{Var}(X)$, find the value of $\\lambda$.',
        natAnswer: { min: 0.19, max: 0.21, exactDisplay: '0.2' },
        triggerHint: 'Substitute $E[X] = 1/\\lambda$ and $\\text{Var}(X) = 1/\\lambda^2$.',
        intuitiveSolution: [
          'For $X \\sim \\text{Exp}(\\lambda)$, $E[X] = \\frac{1}{\\lambda}$ and $\\text{Var}(X) = \\frac{1}{\\lambda^2}$.',
          'Given $5 \\left(\\frac{1}{\\lambda}\\right) = \\frac{1}{\\lambda^2}$, and since $\\lambda > 0$, multiply by $\\lambda^2$: $5\\lambda = 1 \\implies \\lambda = 0.2$.',
        ],
        directShortcutUsed: 'Exponential moments $E[X] = 1/\\lambda, \\text{Var}(X) = 1/\\lambda^2$',
      },
      {
        id: 'm3-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.39',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'A continuous random variable $X$ has CDF $F_X(x) = 0$ for $x < -1$, $F_X(x) = \\frac{1}{4}(x+1)^2$ for $-1 \\le x \\le 1$, and $F_X(x) = 1$ for $x > 1$. What is $P(X^2 \\le 0.25)$?',
        options: [
          { id: 'A', text: '$0.25$', whyTrueOrFalse: 'Incorrect: Evaluates only $F_X(0.25)$ instead of the symmetric interval $[-0.5, 0.5]$.' },
          { id: 'B', text: '$0.375$', whyTrueOrFalse: 'Incorrect: Drops the negative branch $X \\in [-0.5, 0)$. ' },
          { id: 'C', text: '$0.50$', whyTrueOrFalse: 'Correct: $F_X(0.5) - F_X(-0.5) = \\frac{1}{4}(2.25 - 0.25) = 0.50$.' },
          { id: 'D', text: '$0.75$', whyTrueOrFalse: 'Incorrect: Arithmetic error on $(x+1)^2$.' },
        ],
        correctOptions: ['C'],
        triggerHint: 'Rewrite $X^2 \\le 0.25$ as $-0.5 \\le X \\le 0.5$ and evaluate directly using $F_X$.',
        intuitiveSolution: [
          'The event $\\{X^2 \\le 0.25\\}$ equals $\\{-0.5 \\le X \\le 0.5\\}$.',
          'Since $X$ is continuous, $P(-0.5 \\le X \\le 0.5) = F_X(0.5) - F_X(-0.5)$.',
          'Plug into $F_X$: $\\frac{1}{4}(0.5 + 1)^2 - \\frac{1}{4}(-0.5 + 1)^2 = \\frac{2.25 - 0.25}{4} = \\frac{2}{4} = 0.50$.',
        ],
        directShortcutUsed: 'CDF domain inversion $P(X^2 \\le c) = F_X(\\sqrt{c}) - F_X(-\\sqrt{c})$',
      },
      {
        id: 'm3-c2-q6',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.34',
        year: 2026,
        marks: 1,
        type: 'NAT',
        stem: 'Let $X$ be an exponential random variable satisfying $P(X > 5) = 0.35$. What is the conditional probability $P(X > 10 \\mid X > 5)$?',
        natAnswer: { min: 0.34, max: 0.36, exactDisplay: '0.35' },
        triggerHint: 'Apply the memoryless property of the exponential distribution: $P(X > s+t \\mid X > s) = P(X > t)$.',
        intuitiveSolution: [
          'By memorylessness of $X \\sim \\text{Exp}(\\lambda)$: $P(X > 10 \\mid X > 5) = P(X > 5 + 5 \\mid X > 5) = P(X > 5)$.',
          'Therefore $P(X > 10 \\mid X > 5) = 0.35$ immediately.',
        ],
        directShortcutUsed: 'Exponential memorylessness $P(X > 5+5 \\mid X > 5) = P(X > 5)$',
      },
    ],
  },
  {
    id: 'prob2-ch3',
    number: 3,
    title: 'Normal Distribution, Z-Table Symmetry & Joint/Marginal/Conditional Densities',
    shortTitle: 'Normal, Z-Symmetry & Joint PDFs',
    estimatedHours: 5.0,
    dayLabel: 'Week 2 · Day 5–6',
    tagline:
      'Let’s tame the Normal bell curve using Z-standardization and mirror symmetry, and then lift your 1D density intuition smoothly into 2D joint PDFs, marginals, conditionals, and fast geometric area shortcuts.',
    syllabusMapping: [
      'Normal and Standard Normal distributions ($Z$-score standardization & symmetry)',
      'Joint probability distributions (2D PDFs and joint uniform geometry)',
      'Marginal and Conditional probability densities ($f_X(x)$, $f_{Y|X}(y \\mid x)$) and conditional expectation',
      'Independence of continuous random variables & zero correlation under symmetry',
    ],
    whatIsImportant: [
      'Standardization $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$, symmetry $\\Phi(-z) = 1 - \\Phi(z)$, and affine Normal moments (GATE 2025 Q.20)',
      'Independent Normal combinations: variances ADD ($\\text{Var}(X - Y) = \\sigma_X^2 + \\sigma_Y^2$)',
      '2D Joint Uniform probability as pure geometric area ratio $P(X \\ge Y)$ (GATE 2024 Q.56)',
      'Marginal $f_X(x) = \\int f_{X,Y}(x,y)\\,dy$, Conditional $f_{Y|X}(y\\mid x) = f_{X,Y}/f_X$, and checking BOTH factorization AND rectangular support for independence',
    ],
    whatIsNotImportant: [
      'Memorizing multi-digit Z-table entries beyond $\\Phi(0)=0.5$ and the 68–95–99.7% rule (exam supplies $\\Phi(z)$ if exact decimals are needed)',
      'General $n$-dimensional Jacobian determinants or bivariate Normal correlation contour equations',
    ],
    inboundStream: 'Module 3 Ch.2 Continuous PDF/CDF & Uniform/Exponential densities.',
    outboundStream: [
      'Week 2 Ch.4 Covariance, Correlation, Iterated Expectation & Central Limit Theorem',
      'Week 3 Sampling Distributions ($\\chi^2$, $t$) & z/t Hypothesis Tests',
      'Week 7 Gaussian Naive Bayes & Linear Regression Gaussian MLE',
    ],
    glossary: [
      {
        term: 'Normal (Gaussian) Distribution',
        symbol: '$\\mathcal{N}(\\mu, \\sigma^2)$',
        plainEnglish:
          'The iconic symmetric bell curve centered at mean $\\mu$ with variance $\\sigma^2$. Watch the second slot closely: in GATE DA, $\\mathcal{N}(\\mu, \\sigma^2)$ writes the **variance**, so $\\mathcal{N}(0, 100)$ has standard deviation $10$!',
        tinyExample: 'Exam scores $X \\sim \\mathcal{N}(70, 100)$ have center $\\mu = 70$ and standard deviation $\\sigma = 10$.',
      },
      {
        term: 'Standard Normal Distribution',
        symbol: '$Z \\sim \\mathcal{N}(0, 1)$',
        plainEnglish:
          'The universal reference bell curve centered at $0$ with variance $1$. Its CDF is written $\\Phi(z) = P(Z \\le z)$ and satisfies $\\Phi(0) = 0.5$ and mirror symmetry $\\Phi(-z) = 1 - \\Phi(z)$.',
        tinyExample: 'If $\\Phi(2) \\approx 0.977$, then $P(Z < -2) = \\Phi(-2) = 1 - 0.977 = 0.023$.',
      },
      {
        term: 'Z-Score (Standardization)',
        symbol: '$Z = \\frac{X - \\mu}{\\sigma}$',
        plainEnglish:
          'Measures how many standard deviations a value $X$ sits above or below the mean $\\mu$. Subtracting $\\mu$ recenters the bell at $0$ and dividing by $\\sigma$ rescales its spread to $1$.',
        tinyExample: 'On $\\mathcal{N}(70, 10^2)$, a score of $90$ converts to $Z = \\frac{90 - 70}{10} = +2$.',
      },
      {
        term: '68–95–99.7 Empirical Rule',
        plainEnglish:
          'A handy mental ruler for any Normal bell curve: roughly $68\\%$ of values fall within $\\pm 1\\sigma$, $95\\%$ within $\\pm 2\\sigma$, and $99.7\\%$ within $\\pm 3\\sigma$ of the mean.',
        tinyExample: 'For $\\mathcal{N}(70, 10^2)$, roughly $95\\%$ of scores lie between $50$ and $90$.',
      },
      {
        term: 'Affine Combination of Normals',
        symbol: '$aX + bY \\sim \\mathcal{N}(a\\mu_X + b\\mu_Y, a^2\\sigma_X^2 + b^2\\sigma_Y^2)$',
        plainEnglish:
          'Adding or subtracting independent Normal variables always produces another Normal variable—means combine with their signs, while variances always ADD with squared weights!',
        tinyExample: 'For independent $X \\sim \\mathcal{N}(10, 9)$ and $Y \\sim \\mathcal{N}(4, 16)$, $X - Y \\sim \\mathcal{N}(6, 25)$.',
      },
      {
        term: 'Joint PDF',
        symbol: '$f_{X,Y}(x, y)$',
        plainEnglish:
          'A 2D probability surface hovering above the $(x, y)$-plane. Its total volume equals $1$, and the probability that $(X, Y)$ lands in a 2D region $R$ is the volume directly above $R$.',
        tinyExample: 'Uniform on the triangle $0 < y < x < 2$ (area $2$) has constant joint PDF $f_{X,Y}(x,y) = \\frac{1}{2}$.',
      },
      {
        term: 'Marginal PDF',
        symbol: '$f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x,y)\\,dy$',
        plainEnglish:
          'What you get when you collapse a 2D joint surface onto one axis by integrating out the other variable—think of crushing a 3D hill sideways onto the $x$-wall to see $X$’s solo distribution.',
        tinyExample: 'For $f_{X,Y}(x,y) = \\frac{1}{2}$ on $0 < y < x < 2$, integrating $y$ from $0$ to $x$ gives $f_X(x) = \\frac{x}{2}$.',
      },
      {
        term: 'Conditional PDF',
        symbol: '$f_{Y|X}(y \\mid x) = \\frac{f_{X,Y}(x,y)}{f_X(x)}$',
        plainEnglish:
          'A vertical 1D slice through the 2D joint surface at a fixed $X = x$, rescaled by dividing by $f_X(x)$ so that the slice’s own area equals $1$.',
        tinyExample: 'On the uniform triangle $0 < y < x < 2$, slicing at $X = 1.5$ makes $Y \\mid X=1.5 \\sim U(0, 1.5)$.',
      },
      {
        term: 'Conditional Expectation',
        symbol: '$E[Y \\mid X = x]$',
        plainEnglish:
          'The average value of $Y$ once you are told $X = x$—computed by finding the balance point of the 1D slice $f_{Y|X}(y \\mid x)$.',
        tinyExample: 'If $Y \\mid X=x \\sim U(x^2 - 0.1, x^2 + 0.1)$, its conditional expectation is the midpoint $x^2$.',
      },
      {
        term: 'Rectangular Support Test (Independence)',
        symbol: '$f_{X,Y}(x,y) = f_X(x)f_Y(y)$',
        plainEnglish:
          'Two continuous RVs are independent ONLY if their joint PDF factors into a function of $x$ times a function of $y$ AND their support is a rectangle (Cartesian product) where $x$’s bounds never depend on $y$.',
        tinyExample: '$f_{X,Y}(x,y) = \\frac{1}{2}xy$ on $0 < y < x < 2$ is NOT independent because the support is a triangle!',
      },
      {
        term: 'Geometric Area Ratio (2D Uniform)',
        symbol: '$P((X,Y) \\in R) = \\frac{\\text{Area}(R)}{\\text{Area}(\\Omega)}$',
        plainEnglish:
          'When $(X, Y)$ is uniform over a 2D box, you can throw away double integrals completely—just sketch the box, shade the event, and divide the shaded area by the box area.',
        tinyExample: 'For $U[1,3] \\times U[2,4]$ (area $4$), the corner triangle $X \\ge Y$ has area $0.5$, giving $0.5/4 = 0.125$.',
      },
    ],
    generatorId: 'cdf-quantile-gen',
    concepts: [
      {
        id: 'm3-c3-1',
        title: 'Normal Distribution, Z-Standardization & Bell Symmetry',
        subtitle: 'Converting any bell curve to $\\mathcal{N}(0,1)$ and exploiting $\\Phi(-z) = 1 - \\Phi(z)$',
        priority: 'core-pillar',
        buildsOn: 'Continuous PDFs, affine scaling $aX+b$ & even function symmetry',
        toyExample: {
          title: 'Standardizing Test Scores on $\\mathcal{N}(70, 10^2)$',
          scenario:
            'Suppose exam scores follow $X \\sim \\mathcal{N}(\\mu = 70, \\sigma^2 = 100)$, so the standard deviation is $\\sigma = \\sqrt{100} = 10$.',
          walkthroughSteps: [
            '1. **Convert to Z-Score (SDs from Mean):** A score of $x = 90$ is $Z = \\frac{90 - 70}{10} = +2$ standard deviations above the mean; a score of $x = 50$ is $Z = \\frac{50 - 70}{10} = -2$.',
            '2. **Mirror Symmetry:** Because $\\phi(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$ is an **even** function ($\\phi(-z)=\\phi(z)$), the area above $+2$ equals the area below $-2$: $P(Z > 2) = P(Z < -2) = 1 - \\Phi(2)$.',
            '3. **68–95–99.7 Anchor:** Roughly $68.3\\%$ of scores fall in $[60, 80]$ ($|Z|\\le 1$), $95.4\\%$ in $[50, 90]$ ($|Z|\\le 2$), and $99.7\\%$ in $[40, 100]$ ($|Z|\\le 3$). At the center, $\\Phi(0) = 0.5$ exactly.',
          ],
          ahaMoment:
            'Take a deep breath: you will never have to integrate $e^{-z^2/2}$! Every Normal question boils down to **shifting and scaling** into $Z = (X - \\mu)/\\sigma$ and using the bell’s mirror symmetry $\\Phi(-z) = 1 - \\Phi(z)$.',
        },
        theoremAndFormula: {
          statement:
            'If $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, then $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$. Any linear combination $aX + bY$ of independent Normals is again Normal, with means adding linearly and **variances adding with squared weights**.',
          formulaLatex:
            'Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1), \\quad \\Phi(-z) = 1 - \\Phi(z), \\quad X \\perp Y \\implies aX + bY \\sim \\mathcal{N}(a\\mu_X + b\\mu_Y,\\; a^2\\sigma_X^2 + b^2\\sigma_Y^2)',
          plainEnglishDecoding:
            'Watch out for a classic intuition trap on $X - Y$: here $a=1$ and $b=-1$, so $(-1)^2 = +1$ and $\\text{Var}(X - Y) = \\sigma_X^2 + \\sigma_Y^2$. Subtracting two independent noisy measurements always makes the combined uncertainty **wider**, never narrower!',
          workedMiniExamples: [
            {
              prompt: 'Let $Z \\sim \\mathcal{N}(0, 1)$ and $X = aZ + b$ satisfy $E[X] = 1$, $\\text{Var}(X) = 4$, and $E[(X - E[X])Z] = -2$. Find $(a, b)$.',
              solution:
                'Since $E[Z]=0$, $E[X] = b = 1$. Next $X - E[X] = aZ$, so $E[(X - E[X])Z] = a E[Z^2] = a(1) = -2 \\implies a = -2$. Check $\\text{Var}(X) = (-2)^2(1) = 4$ (GATE 2025 Q.20).',
            },
            {
              prompt: 'Evaluate $L = \\lim_{n \\to \\infty} \\sum_{k=0}^{n} \\frac{e^{-n} n^k}{k!}$.',
              solution:
                'Recognize the sum as $P(K_n \\le n)$ where $K_n \\sim \\text{Poisson}(n)$ has mean $n$ and SD $\\sqrt{n}$. By the Central Limit Theorem, $\\frac{K_n - n}{\\sqrt{n}} \\to \\mathcal{N}(0,1)$, so $P(K_n \\le n) \\to \\Phi(0) = 0.5$ (GATE 2026 Q.45)!',
            },
          ],
        },
        sandboxId: 'distribution-clt-lab',
        msqTraps: [
          {
            myth: 'In $\\mathcal{N}(0, 100)$, the standard deviation is $100$.',
            reality: 'Standard convention puts **variance** $\\sigma^2$ in the second slot! So $\\mathcal{N}(0, 100)$ has $\\sigma^2 = 100$ and $\\sigma = 10$ (used in GATE 2026 Q.44!).',
            counterExample: 'For $Y \\sim \\mathcal{N}(0, 100)$, $E[Y^2] = \\text{Var}(Y) = 100$, not $100^2$.',
          },
          {
            myth: 'Since $Z \\sim \\mathcal{N}(0,1)$ and Student\'s $t_1$ (Cauchy) are both symmetric bell curves around $0$, they have the same tail decay and variance.',
            reality: 'Both satisfy $f(-x)=f(x)$ and $F(0)=0.5$, **but** $t_1$ has much **heavier tails** (infinite variance!) and a lower central peak than $\\mathcal{N}(0,1)$ (tested in GATE 2026 Q.28).',
            counterExample: 'At $x=0$, $\\phi(0) = \\frac{1}{\\sqrt{2\\pi}} \\approx 0.399 > f_{t_1}(0) = \\frac{1}{\\pi} \\approx 0.318$, whereas as $x \\to \\infty$, $f_{t_1}(x) \\sim \\frac{1}{\\pi x^2} \\gg \\phi(x)$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 (ML)',
            targetWeek: 7,
            topic: 'Gaussian Naive Bayes & Squared Error MLE',
            whyItMatters: 'Gaussian Naive Bayes models continuous features $x_j \\mid y=c$ as $\\mathcal{N}(\\mu_{jc}, \\sigma_{jc}^2)$, and Linear Regression with Gaussian noise $\\epsilon \\sim \\mathcal{N}(0, \\sigma^2)$ turns MLE directly into Ordinary Least Squares (OLS)!',
          },
        ],
      },
      {
        id: 'm3-c3-2',
        title: 'Joint, Marginal & Conditional Densities ($f_{X,Y}$, $f_X$, $f_{Y|X}$)',
        subtitle: 'Slicing 2D surfaces into marginals and conditionals, and why triangular support kills independence',
        priority: 'core-pillar',
        buildsOn: 'Single-variable PDFs & double integration regions',
        toyExample: {
          title: 'Uniform Dart on the Triangle $0 < y < x < 2$',
          scenario:
            'Pick a point $(X, Y)$ uniformly inside the triangle $0 < y < x < 2$ (vertices $(0,0)$, $(2,0)$, $(2,2)$).',
          walkthroughSteps: [
            '1. **Joint PDF from Area:** Triangle area is $\\frac{1}{2} \\times 2 \\times 2 = 2$, so $f_{X,Y}(x, y) = \\frac{1}{2}$ on $0 < y < x < 2$ (and $0$ outside).',
            '2. **Marginal $f_X(x)$ (Integrate out $y$):** Fix $x \\in (0, 2)$. Here $y$ runs from $0$ up to $x$: $f_X(x) = \\int_0^x \\frac{1}{2}\\,dy = \\frac{x}{2}$. Check: $\\int_0^2 \\frac{x}{2}\\,dx = 1$.',
            '3. **Conditional $f_{Y|X}(y \\mid x)$ (Slice at $x$):** $f_{Y|X}(y \\mid x) = \\frac{f_{X,Y}(x,y)}{f_X(x)} = \\frac{1/2}{x/2} = \\frac{1}{x}$ for $0 < y < x$.',
            '4. **Instant Insight:** Given $X = 1.5$, $Y$ is simply Uniform on $(0, 1.5)$! So $E[Y \\mid X = 1.5] = \\frac{0 + 1.5}{2} = 0.75$.',
          ],
          ahaMoment:
            'Picture what conditioning on $X = x$ physically does: you simply **take a vertical 1D knife-slice** straight through the 2D density at $x$ and divide by its total area $f_X(x)$ so the slice becomes a valid 1D PDF!',
        },
        theoremAndFormula: {
          statement:
            'For jointly continuous $(X, Y)$ with joint PDF $f_{X,Y}(x,y) \\ge 0$ integrating to $1$ over $\\mathbb{R}^2$, marginals integrate out the other variable and conditionals divide the joint by the marginal. $X$ and $Y$ are **independent** iff $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ everywhere (which requires a rectangular support!).',
          formulaLatex:
            'f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x,y)\\,dy, \\qquad f_{Y|X}(y \\mid x) = \\frac{f_{X,Y}(x,y)}{f_X(x)}, \\qquad E[Y \\mid X=x] = \\int_{-\\infty}^{\\infty} y\\,f_{Y|X}(y \\mid x)\\,dy',
          plainEnglishDecoding:
            'Before writing any integral limits for $f_X(x)$, always **sketch the 2D support region first**: drop a vertical line at $x$ and read off exactly where it enters ($y_{\\min}(x)$) and exits ($y_{\\max}(x)$) the region.',
          workedMiniExamples: [
            {
              prompt: 'Let $X \\sim U[1, 3]$ and $Y \\sim U[2, 4]$ be independent. Find $P(X \\ge Y)$.',
              solution:
                'The joint support is the $2 \\times 2$ square $[1, 3] \\times [2, 4]$ of area $4$. The region $X \\ge Y$ inside this square is the triangle $2 \\le y \\le x \\le 3$ (vertices $(2,2),(3,2),(3,3)$) with base $1$, height $1$, and area $\\frac{1}{2}$. Hence $P(X \\ge Y) = \\frac{1/2}{4} = \\frac{1}{8} = 0.125$ (GATE 2024 Q.56).',
            },
            {
              prompt: 'Let $f_{X,Y}(x,y) = \\frac{1}{2}xy$ on $0 < y < x < 2$. Find $f_X(x)$ and $E[Y \\mid X = 1.5]$.',
              solution:
                'First check total integral: $\\int_0^2 \\int_0^x \\frac{1}{2}xy\\,dy\\,dx = \\int_0^2 \\frac{x^3}{4}\\,dx = 1$. Marginal $f_X(x) = \\frac{x^3}{4}$ on $(0,2)$. Conditional $f_{Y|X}(y\\mid x) = \\frac{\\frac{1}{2}xy}{x^3/4} = \\frac{2y}{x^2}$ on $(0,x)$. Then $E[Y \\mid X=x] = \\int_0^x \\frac{2y^2}{x^2}\\,dy = \\frac{2x}{3}$, so at $x=1.5$, $E[Y \\mid X=1.5] = 1$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $f_{X,Y}(x,y) = c\\, g(x)h(y)$ on its support, then $X$ and $Y$ are independent.',
            reality: '**FALSE unless the support is a rectangle** (Cartesian product $A \\times B$)! On a triangle $0 < y < x < 2$, knowing $X = 0.5$ restricts $Y < 0.5$, so $X$ and $Y$ are strongly dependent.',
            counterExample: '$f_{X,Y}(x,y) = \\frac{1}{2}xy$ on $0 < y < x < 2$ factors algebraically, yet $P(Y > 1 \\mid X = 0.5) = 0 \\neq P(Y > 1)$.',
          },
          {
            myth: 'Any textbook formula printed as $f_{X,Y}(x,y)$ in a problem automatically integrates to $1$.',
            reality: 'Always verify $\\iint f_{X,Y}\\,dx\\,dy = 1$ in 10 seconds! In **GATE DA 2024 Q.59**, $f_{X,Y}(x,y)=2xy$ on $0<y<x<2$ actually integrated to $4 \\neq 1$, forcing IISc to award Marks to All (MTA)!',
            counterExample: '$\\int_0^2 \\int_0^x 2xy\\,dy\\,dx = \\int_0^2 x^3\\,dx = 4 \\neq 1$; the true normalizing constant is $1/2$, not $2$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1 & Sec 7 (Bayes Nets)',
            targetWeek: 2,
            topic: 'Covariance, Correlation & Generative Factorization',
            whyItMatters: 'Conditional densities $f_{Y|X}$ feed directly into Law of Iterated Expectation $E[XY] = E[X E[Y|X]]$ (used in GATE 2026 Q.63) and continuous Bayesian Networks.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm3-c3-htt-1',
        title: 'Geometric Area Ratios for Independent Uniform RVs',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 · Q.56'],
        problemStatement:
          'Let $X \\sim U[1, 3]$ and $Y \\sim U[2, 4]$ be independent. Find $P(X \\ge Y)$.',
        triggerCue:
          'Two independent **Uniform** continuous RVs with a linear inequality like $X \\ge Y$, $X + Y \\le c$, or $|X - Y| \\le 1$.',
        bruteForceTrap:
          'Writing piecewise limits inside $\\int_1^3 \\int_2^{\\min(x,4)} \\frac{1}{4}\\,dy\\,dx$ and splitting at $x=2$.',
        mentalShift:
          'When $(X, Y)$ is uniform on a rectangle $R$, probability is literally **Shaded Area $\\div$ Rectangle Area**! Sketch the rectangle and the line $y=x$ in 5 seconds.',
        steps: [
          {
            label: 'Step 1 — Draw the support rectangle',
            detail:
              'Rectangle $[1, 3] \\times [2, 4]$ has width $2$ and height $2$, so total area $= 4$.',
          },
          {
            label: 'Step 2 — Shade $x \\ge y$ inside the rectangle',
            detail:
              'The line $y = x$ enters the bottom edge $y=2$ at $(2,2)$ and exits the right edge $x=3$ at $(3,3)$. That corner triangle has base $3-2=1$ and height $3-2=1$, so shaded area $= \\frac{1}{2}(1)(1) = 0.5$.',
          },
          {
            label: 'Step 3 — Divide areas',
            detail: '$P(X \\ge Y) = \\frac{0.5}{4} = \\frac{1}{8} = 0.125$.',
          },
        ],
        lockInTakeaway:
          'Never run a double integral on a joint Uniform problem—sketch the 2D box, clip with the boundary line, and divide triangle/trapezoid area by box area.',
      },
      {
        id: 'm3-c3-htt-2',
        title: 'Symmetry & Iterated Expectation Kill Correlation Integrals',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2026 · Q.45', 'GATE DA 2026 · Q.63'],
        problemStatement:
          'Let $X \\sim U(-1, 1)$, and conditional on $X=x$, let $Y \\mid X=x \\sim U(x^2 - 0.1, x^2 + 0.1)$. Find the correlation $\\rho(X, Y)$.',
        triggerCue:
          'A **symmetric** distribution around $0$ (like $U(-1,1)$ or $\\mathcal{N}(0, \\sigma^2)$) paired with an **even** conditional mean $E[Y \\mid X=x] = x^2$.',
        bruteForceTrap:
          'Deriving $f_{X,Y}(x,y) = \\frac{1}{2} \\cdot \\frac{1}{0.2} = 2.5$ on a curvy ribbon, integrating to get $f_Y(y)$, computing $\\text{Var}(Y)$, and integrating $xy$ over the curved band.',
        mentalShift:
          'To check if $\\rho(X,Y) = 0$, you ONLY need $\\text{Cov}(X,Y) = E[XY] - E[X]E[Y]$! Use iterated expectation $E[XY] = E[X \\cdot E[Y \\mid X]]$ and odd-function symmetry on $[-1, 1]$.',
        steps: [
          {
            label: 'Step 1 — Read off $E[X]$ and $E[Y \\mid X]$',
            detail:
              'By symmetry of $U(-1,1)$, $E[X] = 0$. Given $Y \\mid X=x \\sim U(x^2-0.1, x^2+0.1)$, its midpoint is $E[Y \\mid X=x] = x^2$.',
          },
          {
            label: 'Step 2 — Apply Iterated Expectation to $E[XY]$',
            detail:
              '$E[XY] = E[E[XY \\mid X]] = E[X \\cdot E[Y \\mid X]] = E[X \\cdot X^2] = E[X^3]$.',
          },
          {
            label: 'Step 3 — Kill $E[X^3]$ by odd symmetry',
            detail:
              '$E[X^3] = \\int_{-1}^1 \\frac{x^3}{2}\\,dx = 0$ because $x^3$ is odd on $[-1,1]$. Thus $\\text{Cov}(X,Y) = 0 - 0\\cdot E[Y] = 0 \\implies \\rho(X,Y) = 0$ (even though $Y$ strongly depends on $X$!).',
          },
        ],
        lockInTakeaway:
          'Whenever the prompt asks for correlation $\\rho(X,Y)$ of a symmetric variable $X$ around $0$ and an even function of $X$, check $\\text{Cov}(X,Y)=0$ via iterated expectation before touching $\\text{Var}(Y)$.',
      },
    ],
    arsenalCards: [
      {
        id: 'm3-c3-ars-1',
        badge: 'Z-Score & Affine',
        whenYouSpot: '$X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, Z-symmetry, or linear combinations of independent Normals',
        directWeaponLatex: 'Z = \\frac{X-\\mu}{\\sigma}, \\quad \\Phi(-z) = 1 - \\Phi(z), \\quad \\text{Var}(X \\pm Y) = \\sigma_X^2 + \\sigma_Y^2',
        instantRule: 'Second slot of $\\mathcal{N}(\\mu, \\sigma^2)$ is VARIANCE; subtracting independent Normals still ADDS variances.',
        tenSecondExample: 'For $X\\sim\\mathcal{N}(10, 9)$ and $Y\\sim\\mathcal{N}(4, 16)$ independent, $X-Y \\sim \\mathcal{N}(6, 25)$.',
        oneFatalTrap: 'Computing $\\text{Var}(X - Y) = \\sigma_X^2 - \\sigma_Y^2$ (variance can never subtract for independent variables!).',
      },
      {
        id: 'm3-c3-ars-2',
        badge: 'Joint Uniform Box',
        whenYouSpot: 'Independent $X \\sim U[a,b]$, $Y \\sim U[c,d]$ with $P(X \\ge Y)$ or $P(X+Y \\le k)$',
        directWeaponLatex: 'P((X,Y) \\in R) = \\frac{\\text{Area}(R \\cap [a,b]\\times[c,d])}{(b-a)(d-c)}',
        instantRule: 'Draw the rectangle and boundary line; compute triangle/trapezoid area geometrically in 10 seconds.',
        tenSecondExample: '$U[1,3] \\times U[2,4]$: triangle $X\\ge Y$ has area $0.5$, box area $4 \\implies 0.5/4 = 0.125$.',
        oneFatalTrap: 'Setting up wrong double-integral limits instead of drawing the 2D box.',
      },
      {
        id: 'm3-c3-ars-3',
        badge: 'Joint PDF Litmus',
        whenYouSpot: '2D PDF $f_{X,Y}(x,y)$ asking for marginals, conditionals, or independence',
        directWeaponLatex: 'f_X(x) = \\int f_{X,Y}(x,y)\\,dy, \\qquad f_{Y|X}(y\\mid x) = \\frac{f_{X,Y}(x,y)}{f_X(x)}',
        instantRule: 'Independence requires BOTH $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ AND rectangular support (non-rectangular = dependent!).',
        tenSecondExample: 'Uniform on $0<y<x<2$: $f_{Y|X}(y\\mid x) = 1/x$ on $(0,x)$, so $E[Y\\mid X=x] = x/2$.',
        oneFatalTrap: 'Declaring independence just because $f_{X,Y}=cxy$ factors algebraically on a triangular domain.',
      },
    ],
    questions: [
      {
        id: 'm3-c3-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'MCQ',
        stem: 'Let $X \\sim \\mathcal{N}(10, 9)$ and $Y \\sim \\mathcal{N}(4, 16)$ be independent Normal random variables. What is the distribution of $W = X - Y$?',
        options: [
          { id: 'A', text: '$\\mathcal{N}(6, 25)$', whyTrueOrFalse: 'Correct: Mean is $10 - 4 = 6$, and for independent RVs variances ADD: $9 + 16 = 25$.' },
          { id: 'B', text: '$\\mathcal{N}(6, 7)$', whyTrueOrFalse: 'Incorrect: Subtracted variances ($16 - 9$) or mixed up signs.' },
          { id: 'C', text: '$\\mathcal{N}(6, 5)$', whyTrueOrFalse: 'Incorrect: Put standard deviation $\\sigma = 5$ instead of variance $\\sigma^2 = 25$ in the second slot.' },
          { id: 'D', text: '$\\mathcal{N}(14, 25)$', whyTrueOrFalse: 'Incorrect: Added means instead of subtracting $E[X] - E[Y]$.' },
        ],
        correctOptions: ['A'],
        triggerHint: 'Means subtract ($E[X - Y] = E[X] - E[Y]$), while independent variances ADD ($\\text{Var}(X-Y) = \\text{Var}(X) + (-1)^2\\text{Var}(Y)$).',
        intuitiveSolution: [
          '$E[W] = E[X] - E[Y] = 10 - 4 = 6$.',
          'By independence, $\\text{Var}(W) = 1^2\\text{Var}(X) + (-1)^2\\text{Var}(Y) = 9 + 16 = 25$.',
          'A linear combination of independent Normals is Normal, so $W \\sim \\mathcal{N}(6, 25)$.',
        ],
        directShortcutUsed: 'Independent Normal affine rule: means subtract, variances add',
      },
      {
        id: 'm3-c3-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.20',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $Z \\sim \\mathcal{N}(0, 1)$ be a standard normal random variable, and define $X = aZ + b$ for real constants $a, b$. If $E[X] = 1$, $E[(X - E[X])Z] = -2$, and $\\text{Var}(X) = 4$, what are the values of $(a, b)$?',
        options: [
          { id: 'A', text: '$(-2,\\; 1)$', whyTrueOrFalse: 'Correct: $b = E[X] = 1$, and $E[aZ^2] = a = -2$, giving $\\text{Var}(X) = (-2)^2 = 4$.' },
          { id: 'B', text: '$(2,\\; 1)$', whyTrueOrFalse: 'Incorrect: Gives $E[(X - E[X])Z] = +2 \\neq -2$.' },
          { id: 'C', text: '$(-2,\\; -1)$', whyTrueOrFalse: 'Incorrect: Gives $E[X] = -1 \\neq 1$.' },
          { id: 'D', text: '$(2,\\; -1)$', whyTrueOrFalse: 'Incorrect: Fails both $E[X]$ and covariance sign.' },
        ],
        correctOptions: ['A'],
        triggerHint: 'Expand $E[X]$ and $X - E[X] = aZ$ using $E[Z]=0$ and $E[Z^2]=1$.',
        intuitiveSolution: [
          '$E[X] = a E[Z] + b = b = 1$.',
          'Substitute $X - E[X] = aZ$ into the cross-moment: $E[(X - E[X])Z] = E[aZ^2] = a E[Z^2] = a(1) = -2$.',
          'Verify variance: $\\text{Var}(X) = a^2\\text{Var}(Z) = (-2)^2(1) = 4$. Thus $(a, b) = (-2, 1)$.',
        ],
        directShortcutUsed: 'Standard Normal moments $E[Z]=0, E[Z^2]=1$',
      },
      {
        id: 'm3-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.56',
        year: 2024,
        marks: 2,
        type: 'NAT',
        stem: 'Let $X$ and $Y$ be independent continuous random variables with $X \\sim \\text{Uniform}[1, 3]$ and $Y \\sim \\text{Uniform}[2, 4]$. Compute $P(X \\ge Y)$.',
        natAnswer: { min: 0.124, max: 0.126, exactDisplay: '0.125' },
        triggerHint: 'Sketch the $2 \\times 2$ support square $[1,3] \\times [2,4]$ and compute the area of the corner triangle $X \\ge Y$.',
        intuitiveSolution: [
          'The joint support is the square $[1, 3] \\times [2, 4]$ of area $2 \\times 2 = 4$ and constant PDF $1/4$.',
          'Inside this square, $X \\ge Y$ holds for $2 \\le y \\le x \\le 3$, forming a right triangle with vertices $(2,2)$, $(3,2)$, $(3,3)$.',
          'Triangle area $= \\frac{1}{2}(1)(1) = 0.5$, so $P(X \\ge Y) = \\frac{0.5}{4} = 0.125$.',
        ],
        directShortcutUsed: 'Joint Uniform geometric area ratio',
      },
      {
        id: 'm3-c3-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.45',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem: 'Evaluate the limit\n$$L = \\lim_{n \\to \\infty} \\sum_{k=0}^{n} \\frac{e^{-n} n^k}{k!}$$',
        options: [
          { id: 'A', text: '$0$', whyTrueOrFalse: 'Incorrect: The sum captures the entire left half up to the mean $n$, not a vanishing tail.' },
          { id: 'B', text: '$0.5$', whyTrueOrFalse: 'Correct: The sum is $P(\\text{Poisson}(n) \\le n)$, which by CLT converges to $\\Phi(0) = 0.5$.' },
          { id: 'C', text: '$1$', whyTrueOrFalse: 'Incorrect: Only summing to $\\infty$ gives $1$; stopping at $k=n$ cuts right at the mean.' },
          { id: 'D', text: '$e^{-1}$', whyTrueOrFalse: 'Incorrect: $e^{-1}$ is $P(K=0)$ for $\\text{Poisson}(1)$, unrelated to the large-$n$ limit.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Recognize $\\frac{e^{-n} n^k}{k!}$ as the PMF of $K_n \\sim \\text{Poisson}(n)$!',
        intuitiveSolution: [
          'The summand $\\frac{e^{-n} n^k}{k!}$ is the PMF of $K_n \\sim \\text{Poisson}(\\lambda = n)$, which equals the sum of $n$ iid $\\text{Poisson}(1)$ random variables.',
          'Since $E[K_n] = n$ and $\\text{SD}(K_n) = \\sqrt{n}$, the sum equals $P(K_n \\le n) = P\\left(\\frac{K_n - n}{\\sqrt{n}} \\le 0\\right)$.',
          'By the Central Limit Theorem, $\\frac{K_n - n}{\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$, so the limit equals $\\Phi(0) = 0.5$.',
        ],
        directShortcutUsed: 'Poisson($n$) CDF at its mean $\\to \\Phi(0) = 0.5$ via CLT',
      },
      {
        id: 'm3-c3-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.63',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Let $X \\sim \\text{Uniform}(-1, 1)$. Given $X = x$, the conditional distribution of $Y$ is $Y \\mid X = x \\sim \\text{Uniform}(x^2 - 0.1,\\; x^2 + 0.1)$. What is the Pearson correlation coefficient between $X$ and $Y$?',
        natAnswer: { min: -0.01, max: 0.01, exactDisplay: '0' },
        triggerHint: 'Compute $\\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$ using iterated expectation $E[XY] = E[X \\cdot E[Y \\mid X]]$.',
        intuitiveSolution: [
          'Since $X \\sim U(-1,1)$, $E[X] = 0$.',
          'The conditional mean is the midpoint $E[Y \\mid X = x] = x^2$.',
          'By iterated expectation, $E[XY] = E[X \\cdot E[Y \\mid X]] = E[X^3] = \\int_{-1}^{1} \\frac{x^3}{2}\\,dx = 0$ by odd symmetry.',
          'Hence $\\text{Cov}(X, Y) = 0 - 0\\cdot E[Y] = 0$, so correlation $\\rho(X, Y) = 0$.',
        ],
        directShortcutUsed: 'Iterated expectation + odd symmetry $E[X^3] = 0$',
      },
      {
        id: 'm3-c3-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber Joint PDF Drill (2024 Q.59 Corrected)',
        marks: 2,
        type: 'MSQ',
        stem: 'Consider two continuous random variables $(X, Y)$ with joint PDF\n$$f_{X,Y}(x, y) = \\begin{cases} \\frac{1}{2}xy, & 0 < y < x < 2 \\\\ 0, & \\text{otherwise} \\end{cases}$$\nWhich of the following statements are TRUE?',
        options: [
          { id: 'A', text: '$f_{X,Y}(x, y)$ is a valid normalized joint PDF', whyTrueOrFalse: 'True: $\\int_0^2 \\int_0^x \\frac{1}{2}xy\\,dy\\,dx = \\int_0^2 \\frac{x^3}{4}\\,dx = \\left[\\frac{x^4}{16}\\right]_0^2 = 1$.' },
          { id: 'B', text: '$X$ and $Y$ are independent because $f_{X,Y}(x,y)$ factors as $\\frac{1}{2}x \\cdot y$', whyTrueOrFalse: 'False: The support $0 < y < x < 2$ is triangular, not a Cartesian rectangle, so $X$ and $Y$ are dependent!' },
          { id: 'C', text: 'For $x \\in (0, 2)$, the marginal PDF is $f_X(x) = \\frac{x^3}{4}$', whyTrueOrFalse: 'True: Integrating $y$ from $0$ to $x$ yields $\\frac{1}{2}x \\cdot \\frac{x^2}{2} = \\frac{x^3}{4}$.' },
          { id: 'D', text: 'The conditional expectation $E[Y \\mid X = 1.5]$ equals $1$', whyTrueOrFalse: 'True: $f_{Y|X}(y\\mid x) = \\frac{2y}{x^2}$ on $(0,x)$, giving $E[Y\\mid X=x] = \\frac{2x}{3}$, which is $1$ at $x=1.5$.' },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Verify normalization first, check whether the support is rectangular, then compute $f_X(x)$ and $f_{Y|X}(y\\mid x)$.',
        intuitiveSolution: [
          'Check total integral: $\\int_0^2 \\left(\\int_0^x \\frac{1}{2}xy\\,dy\\right)dx = \\int_0^2 \\frac{x^3}{4}\\,dx = 1$, confirming (A) and giving marginal $f_X(x) = \\frac{x^3}{4}$ (C).',
          'Because $0 < y < x < 2$ couples $Y$ to $X$, $X$ and $Y$ are NOT independent despite the product form, making (B) false.',
          'Conditional density: $f_{Y|X}(y \\mid x) = \\frac{\\frac{1}{2}xy}{x^3/4} = \\frac{2y}{x^2}$ for $0 < y < x$, so $E[Y \\mid X=x] = \\int_0^x \\frac{2y^2}{x^2}\\,dy = \\frac{2x}{3}$. At $x=1.5$, $E[Y\\mid X=1.5] = 1$, making (D) true.',
        ],
        directShortcutUsed: 'Triangular support breaks independence + $f_{Y|X} = f_{X,Y}/f_X$',
      },
    ],
  },
]

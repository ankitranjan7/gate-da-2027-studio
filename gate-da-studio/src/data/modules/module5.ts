import type { ChapterData } from '../../types/curriculum'

const chapter1: ChapterData = {
  id: 'prob4-ch1',
  number: 1,
  title: 'Sampling Distributions, Unbiasedness (n − 1), χ², Student-t & CLT',
  shortTitle: 'Sampling, χ², t & CLT',
  estimatedHours: 4.0,
  dayLabel: 'Week 3 · Day 1–2 (Prob & Stats IV — Part 1)',
  tagline:
    'Let’s connect finite data samples to true population laws: you will see why sample variance divides by $n-1$, how squared standard normals build $\\chi^2$, why estimating $\\sigma$ fattens Student-$t$ tails, and how the Central Limit Theorem turns any finite-variance sum into a bell curve.',
  syllabusMapping: [
    'Sampling distributions: Sample Mean, Sample Variance & Unbiasedness (n − 1)',
    'Chi-square (χ²) and Student-t distributions',
    'Central Limit Theorem (CLT) & Normal approximations',
  ],
  whatIsImportant: [
    'Sample Mean $\\bar{X}$ ($E[\\bar{X}]=\\mu$, $\\text{Var}(\\bar{X})=\\sigma^2/n$) & Bessel-corrected Sample Variance $S^2 = \\frac{1}{n-1}\\sum (X_i-\\bar{X})^2$ (GATE DA 2025 Q.54, 2026 Q.62)',
    'Pairwise difference shortcut $\\sum_{i=1}^n\\sum_{j=1}^n (x_i-x_j)^2 = 2n\\sum_{i=1}^n (x_i-\\bar{x})^2$ (GATE DA 2026 Q.62)',
    '$\\chi^2_k = \\sum_{i=1}^k Z_i^2$: mean $k$, variance $2k$, additivity, and Cochran split $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$ (GATE DA 2025 Q.36, 2026 Q.53)',
    'Student-$t_\\nu$ symmetry, heavier tails than $\\mathcal{N}(0,1)$, and Cauchy ($t_1$) undefined moments (GATE DA 2026 Q.28)',
    'Central Limit Theorem standardization for sums & averages — including Poisson/Binomial limits (GATE DA 2025 Q.40, 2026 Q.45)',
  ],
  whatIsNotImportant: [
    'Full MGF/orthogonal-matrix proof of Cochran’s theorem or Gamma-function integration of the $t$-density',
    'Non-central $\\chi^2$, non-central $t$, and multi-way $F$-distribution ANOVA tables (0 marks in GATE DA)',
    'Berry–Esseen explicit CLT convergence rate bounds',
  ],
  inboundStream:
    'Modules 2–4: Random Variables, Expectation, Variance, Covariance, Normal, Binomial, and Poisson distributions.',
  outboundStream: [
    'Ch. 2: Confidence Intervals, z-test, t-test, χ² Goodness-of-Fit & p-values',
    'Week 7 ML: Cross-Validation error bars & Bias-Variance decomposition',
    'Week 7 ML: Sample-size planning for A/B experiments',
  ],
  glossary: [
    {
      term: 'Sampling Distribution',
      plainEnglish:
        'Because your sample is random, any number you compute from it (like $\\bar{X}$ or $S^2$) is itself a random variable! Its sampling distribution shows how that statistic fluctuates across repeated samples of size $n$.',
      tinyExample: 'For iid draws from $\\mathcal{N}(\\mu, \\sigma^2)$, the sample mean has sampling distribution $\\bar{X} \\sim \\mathcal{N}(\\mu, \\sigma^2/n)$.',
    },
    {
      term: 'Sample Mean',
      symbol: '$\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$',
      plainEnglish:
        'The ordinary average of your $n$ observations. It stays centered right at the true population mean ($E[\\bar{X}] = \\mu$) while squeezing variance down by a factor of $n$ ($\\text{Var}(\\bar{X}) = \\sigma^2/n$).',
      tinyExample: 'Averaging $n=25$ measurements with $\\sigma = 10$ cuts the standard error to $10/\\sqrt{25} = 2$.',
    },
    {
      term: 'Standard Error (SE)',
      symbol: '$\\text{SE}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}$',
      plainEnglish:
        'The standard deviation of a sample statistic (most often $\\bar{X}$). Notice the $\\sqrt{n}$ in the denominator: to cut your standard error in half, you must collect **$4\\times$ as many samples**, not $2\\times$!',
      tinyExample: 'With $\\sigma = 10$, going from $n=25$ ($\\text{SE}=2$) to $\\text{SE}=1$ requires $n=100$.',
    },
    {
      term: 'Unbiased Estimator & Bessel’s Correction',
      symbol: '$E[S^2] = \\sigma^2$',
      plainEnglish:
        'An estimator is unbiased if its long-run average hits the true parameter dead on. Because $\\bar{X}$ shifts toward your specific sample, dividing squared deviations by $n-1$ (Bessel’s correction) instead of $n$ removes the downward bias.',
      tinyExample: 'For $\\{2, 4, 6, 8, 10\\}$ ($n=5$), $\\sum(x_i - 6)^2 = 40$, so unbiased $s^2 = \\frac{40}{4} = 10$.',
    },
    {
      term: 'Degrees of Freedom (df)',
      symbol: '$\\nu$',
      plainEnglish:
        'The number of independent pieces of information left free to vary after imposing linear constraints. Since sample residuals always obey $\\sum_{i=1}^n (X_i - \\bar{X}) = 0$, the last residual is forced—leaving $n - 1$ free values.',
      tinyExample: 'In a sample of $n=10$ numbers, once you know $\\bar{x}$ and $9$ residuals, the $10$th is locked in, so $\\text{df} = 9$.',
    },
    {
      term: 'Chi-Square Distribution',
      symbol: '$\\chi^2_k = \\sum_{i=1}^k Z_i^2$',
      plainEnglish:
        'Built by squaring and adding $k$ independent Standard Normal draws. It is always non-negative, right-skewed, additive across independent pieces, with mean $k$ and variance $2k$.',
      tinyExample: 'For $Z \\sim \\mathcal{N}(0,1)$, $Z^2 \\sim \\chi^2_1$ has mean $1$ and variance $2(1) = 2$.',
    },
    {
      term: 'Cochran’s Variance Split',
      symbol: '$\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$',
      plainEnglish:
        'In a Normal sample, $\\bar{X}$ and $S^2$ are completely independent, and scaling $(n-1)S^2$ by $\\sigma^2$ gives an exact $\\chi^2_{n-1}$ variable—the foundation of both variance intervals and the $t$-test!',
      tinyExample: 'For $n=5$ draws from $\\mathcal{N}(0, 4)$, $\\sum(X_i - \\bar{X})^2 / 4 \\sim \\chi^2_4$, so $E[\\sum(X_i - \\bar{X})^2] = 16$.',
    },
    {
      term: 'Student-$t$ Distribution',
      symbol: '$T = \\frac{Z}{\\sqrt{V/\\nu}} \\sim t_\\nu$',
      plainEnglish:
        'A symmetric bell curve centered at $0$ that arises when you replace unknown $\\sigma$ with noisy sample $S$. That extra noise in the denominator gives $t_\\nu$ **fatter tails** and a **lower peak** than $\\mathcal{N}(0,1)$, approaching $\\mathcal{N}(0,1)$ as $\\nu \\to \\infty$.',
      tinyExample: 'For $T \\sim t_6$, $E[T] = 0$ and $\\text{Var}(T) = \\frac{6}{6-2} = 1.5 > 1$.',
    },
    {
      term: 'Cauchy Distribution ($t_1$)',
      symbol: '$h(x) = \\frac{1}{\\pi(1+x^2)}$',
      plainEnglish:
        'Student-$t$ with just $\\nu = 1$ degree of freedom. Even though it looks like a symmetric bell around $0$, its tails decay so slowly that **neither its mean nor its variance exists**—so CLT does NOT apply to it!',
      tinyExample: 'Averaging $1000$ iid $t_1$ draws still gives a $t_1$ distribution with zero shrinkage.',
    },
    {
      term: 'Central Limit Theorem (CLT)',
      symbol: '$\\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$',
      plainEnglish:
        'The crowning theorem of statistics: take ANY iid random variables with finite mean $\\mu$ and finite variance $\\sigma^2$; once you add enough of them, the standardized sum $S_n$ (or average $\\bar{X}_n$) converges to a Standard Normal bell curve!',
      tinyExample: 'For $Y \\sim \\text{Bin}(300, 0.25)$ ($\\mu=75, \\sigma=7.5$), $P(60 \\le Y \\le 90) \\approx \\Phi(2) - \\Phi(-2)$.',
    },
    {
      term: 'Pivotal Quantity',
      symbol: '$\\frac{\\bar{X} - \\mu}{S/\\sqrt{n}} \\sim t_{n-1}$',
      plainEnglish:
        'A clever formula combining data and an unknown parameter $\\mu$ whose sampling distribution does NOT depend on any unknown parameters—letting us solve backward for confidence intervals and hypothesis tests.',
      tinyExample: 'In a Normal sample, $\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}$ always follows $t_{n-1}$ regardless of the unknown $\\mu$ and $\\sigma$.',
    },
  ],
  generatorId: 'clt-prob-gen',
  concepts: [
    {
      id: 'm5-c1-1',
      title: 'Sample Mean, Sample Variance & Why We Divide by n − 1',
      subtitle: 'Catching the subtle underestimation bias of sample spread from a 2-draw population',
      priority: 'core-pillar',
      buildsOn: 'Expectation, Variance, and iid Random Variables (Modules 3–4)',
      whyStudy:
        'In real life, you almost NEVER see the whole population (all $1.4$ billion citizens, or every future user of your ML model) — you only see a finite random sample $X_1, \\dots, X_n$! So you have to *estimate* the unknown true mean $\\mu$ using the sample average $\\bar{X}$, and *estimate* the unknown true variance $\\sigma^2$ using the sample spread. Yet when students first divide $\\sum (X_i - \\bar{X})^2$ by $n$, they get a mysterious surprise: on average, it **systematically underestimates** the true variance $\\sigma^2$! Understanding **Bessel’s correction ($n - 1$)** and why averaging cuts standard error by $1/\\sqrt{n}$ is the gateway to all statistical inference and GATE DA staples (**2024 Q.34**, **2025 Q.54**, **2026 Q.62**).',
      groundRules: [
        '**Statistics Are Random Variables Because Samples Vary:** True population parameters ($\\mu, \\sigma^2$) are fixed unknown constants. By contrast, $\\bar{X}$ and $S^2$ change every time you draw a fresh sample — so they have their own distributions, means, and variances!',
        '**Why Dividing by $n$ Underestimates $\\sigma^2$:** The sample mean $\\bar{X}$ is mathematically the single number $c$ that minimizes $\\sum (X_i - c)^2$. Therefore $\\sum(X_i - \\bar{X})^2$ is ALWAYS smaller than $\\sum(X_i - \\mu)^2$ by exactly $n(\\bar{X} - \\mu)^2$ — whose average equals $\\sigma^2$! Leaving $n - 1$ worth of $\\sigma^2$ in the numerator is why dividing by $n - 1$ makes $E[S^2] = \\sigma^2$ exact!',
        '**Standard Error Shrinks by $1/\\sqrt{n}$ (Square-Root Law):** Because $\\text{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}$, its standard deviation (the **Standard Error**, $\\text{SE} = \\frac{\\sigma}{\\sqrt{n}}$) shrinks slowly with $\\sqrt{n}$ — doubling $n$ cuts variance in half, yet you MUST **quadruple ($4\\times$)** $n$ to cut the Standard Error in half!',
        '**Unbiasedness Does NOT Survive Nonlinear Functions:** Even though $E[S^2] = \\sigma^2$ is unbiased, taking the square root is strictly concave, so by Jensen’s inequality $E[S] = E[\\sqrt{S^2}] < \\sigma$ — the sample standard deviation $S$ is slightly biased downward!',
      ],
      toyExample: {
        title: 'Drawing 2 Numbers With Replacement From {2, 6}',
        scenario:
          'Suppose a tiny population has just two equally likely numbers $\\{2, 6\\}$, so true mean $\\mu = 4$ and true variance $\\sigma^2 = \\frac{(2-4)^2+(6-4)^2}{2} = 4$. Now draw an i.i.d. (independent, identically distributed) sample $(X_1, X_2)$ of size $n=2$ and compare naive variance $\\hat{\\sigma}^2 = \\frac{1}{2}\\sum(X_i-\\bar{X})^2$ against Bessel-corrected $S^2 = \\frac{1}{2-1}\\sum(X_i-\\bar{X})^2$.',
        walkthroughSteps: [
          '1. List all $4$ equally likely samples: $(2,2)$, $(2,6)$, $(6,2)$, $(6,6)$.',
          '2. Sample means $\\bar{x}$ are $2, 4, 4, 6$. Their average is $\\frac{2+4+4+6}{4} = 4 = \\mu$ (unbiased!).',
          '3. For $(2,2)$ and $(6,6)$: $\\bar{x}=x_1=x_2$, so $\\sum(x_i-\\bar{x})^2 = 0 \\implies \\hat{\\sigma}^2 = 0,\\; S^2 = 0$.',
          '4. For $(2,6)$ and $(6,2)$: $\\bar{x}=4$, so $\\sum(x_i-\\bar{x})^2 = (2-4)^2+(6-4)^2 = 8 \\implies \\hat{\\sigma}^2 = \\frac{8}{2} = 4,\\; S^2 = \\frac{8}{1} = 8$.',
          '5. Average across the $4$ outcomes: $E[\\hat{\\sigma}^2] = \\frac{0+4+4+0}{4} = 2 = \\frac{1}{2}\\sigma^2$ (biased low!), whereas $E[S^2] = \\frac{0+8+8+0}{4} = 4 = \\sigma^2$ (exact!).',
        ],
        ahaMoment:
          'Here is the clear reason dividing by $n$ underestimates $\\sigma^2$: your sample mean $\\bar{X}$ always leans toward the specific points you drew, shrinking $\\sum(X_i-\\bar{X})^2$ below $\\sum(X_i-\\mu)^2$ by exactly $\\sigma^2$ on average (one degree of freedom used up by $\\sum(X_i-\\bar{X})=0$). Dividing by $n-1$ restores exact unbiasedness!',
      },
      theoremAndFormula: {
        statement:
          'For i.i.d. random variables $X_1, \\dots, X_n$ with finite mean $\\mu$ and variance $\\sigma^2$: the sample mean $\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$ is unbiased for $\\mu$ (meaning $E[\\bar{X}] = \\mu$), and the Bessel-corrected sample variance $S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2$ ($n \\ge 2$) is unbiased for $\\sigma^2$. Moreover, $\\sum_{i=1}^n (X_i - \\bar{X})^2$ equals $\\frac{1}{2n}\\sum_{i=1}^n\\sum_{j=1}^n (X_i - X_j)^2$.',
        formulaLatex:
          'E[\\bar{X}] = \\mu, \\quad \\text{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}, \\quad E[S^2] = \\sigma^2, \\quad \\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2 = 2n\\sum_{i=1}^n (x_i - \\bar{x})^2',
        plainEnglishDecoding:
          'Think of averaging $n$ independent draws as keeping the balance point fixed at $\\mu$ while tightening the wobble (standard deviation) of the average by $1/\\sqrt{n}$. Whenever $\\mu$ is unknown, dividing the squared deviations around $\\bar{X}$ by $n-1$ (the number of independent free deviations, called **degrees of freedom**) keeps your variance estimate honest—and notice how it links straight to pairwise distances via $\\frac{1}{2n(n-1)}\\sum_i\\sum_j(x_i-x_j)^2$.',
        workedMiniExamples: [
          {
            prompt:
              'GATE DA 2024 Q.34: The sample mean of $50$ observations is $40$. If a new observation $142$ is added, find the updated sample mean.',
            solution:
              'Old total $= 50 \\times 40 = 2000$. New total $= 2000 + 142 = 2142$ across $51$ points. Updated mean $= \\frac{2142}{51} = 42$.',
          },
          {
            prompt:
              'GATE DA 2026 Q.62: Given $\\frac{1}{2000}\\sum_{i=1}^{100}\\sum_{j=1}^{100}(x_i - x_j)^2 = 99$, compute the unbiased sample variance $s^2 = \\frac{1}{99}\\sum_{i=1}^{100}(x_i - \\bar{x})^2$.',
            solution:
              'With $n=100$, $\\sum_i\\sum_j(x_i-x_j)^2 = 200\\sum_{i=1}^{100}(x_i-\\bar{x})^2$. Dividing by $2000$ gives $\\frac{1}{10}\\sum_{i=1}^{100}(x_i-\\bar{x})^2 = 99 \\implies \\sum(x_i-\\bar{x})^2 = 990$. Hence $s^2 = \\frac{990}{99} = 10$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Since $E[S^2] = \\sigma^2$, the sample standard deviation $S = \\sqrt{S^2}$ is also unbiased for $\\sigma$.',
          reality:
            'False! Because $g(t) = \\sqrt{t}$ is strictly concave, Jensen’s inequality gives $E[S] = E[\\sqrt{S^2}] < \\sqrt{E[S^2]} = \\sigma$ whenever $\\text{Var}(S^2) > 0$.',
          counterExample: 'In our $\\{2,6\\}$ toy example ($\\sigma=2$), $S$ takes values $0, \\sqrt{8}, \\sqrt{8}, 0$, so $E[S] = \\frac{2\\sqrt{8}}{4} = \\sqrt{2} \\approx 1.414 < 2$.',
        },
        {
          myth: 'Doubling the sample size $n$ cuts the standard error $\\text{SE}(\\bar{X})$ in half.',
          reality:
            'Doubling $n$ halves the **variance** $\\sigma^2/n$ (GATE DA 2025 Q.54), whereas the standard error $\\sigma/\\sqrt{n}$ shrinks only by $1/\\sqrt{2}$. You must **quadruple ($4\\times$)** $n$ to halve $\\text{SE}$.',
          counterExample: 'For $\\sigma = 10$: at $n=25$, $\\text{SE}=2$; at $n=50$, $\\text{SE}=1.414 \\neq 1$; you need $n=100$ for $\\text{SE}=1$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Cross-Validation Error Bars & Empirical Covariance',
          whyItMatters:
            'Reporting $k$-fold CV performance uses $\\bar{X}$ and $S/\\sqrt{k}$ across the $k$ validation folds; PCA covariance matrices also normalize by $n-1$ (or $n$ for MLE).',
          pyqProof: 'GATE DA 2025 Q.54 & 2026 Q.62',
        },
      ],
    },
    {
      id: 'm5-c1-2',
      title: 'The Chi-Square (χ²) Distribution & Cochran’s Variance Split',
      subtitle: 'Summing squared standard normals and tracking lost degrees of freedom',
      priority: 'high-yield',
      buildsOn: 'Standard Normal Distribution & Sample Variance $S^2$',
      whyStudy:
        'Knowing $E[S^2] = \\sigma^2$ tells you the average of the sample variance, yet how wildly does $S^2$ itself fluctuate from sample to sample? And when you build a $t$-statistic, run a Goodness-of-Fit test, or test whether a manufacturing variance jumped, you need the **exact probability distribution of sums of squared errors**! That is the exact problem the **Chi-Square ($\\chi^2_k$, Greek letter "kai-squared") distribution** solves — directly tested in **GATE DA 2025 Q.36** ($\\text{Var}(Z^2) = 2$) and the foundation of Student-$t$ and Pearson’s $\\chi^2$ tests!',
      groundRules: [
        '**Definition of $\\chi^2_k$ Is Purely a Sum of $k$ Independent Squared Normals:** Take $k$ independent $Z_1, \\dots, Z_k \\sim \\mathcal{N}(0, 1)$, square each one, and add them: $Q = Z_1^2 + \\dots + Z_k^2 \\sim \\chi^2_k$ ($k$ is the **degrees of freedom**). Because squares are $\\ge 0$, $\\chi^2_k$ lives strictly on $[0, \\infty)$ and is right-skewed.',
        '**Mean $= k$, Variance $= 2k$ (Instant Additivity):** Since $E[Z^2] = 1$ and $\\text{Var}(Z^2) = E[Z^4] - 1^2 = 3 - 1 = 2$, summing $k$ independent copies immediately gives $E[\\chi^2_k] = k$, $\\text{Var}(\\chi^2_k) = 2k$, and adding two independent $\\chi^2_{k_1} + \\chi^2_{k_2}$ gives $\\chi^2_{k_1 + k_2}$!',
        '**It Is $(n-1)S^2 / \\sigma^2$ (NOT $S^2$ Alone!) That Follows $\\chi^2_{n-1}$:** Standardizing each residual gives $\\sum_{i=1}^n \\left(\\frac{X_i - \\bar{X}}{\\sigma}\\right)^2 = \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$. Never drop the $(n-1)$ multiplier or $\\sigma^2$ denominator!',
        '**Independence of $\\bar{X}$ and $S^2$ Is Uniquely Gaussian:** For a Normal population, Cochran’s Theorem guarantees $\\bar{X}$ and $S^2$ are **completely independent** — which is why dividing $\\bar{X} - \\mu$ by $S/\\sqrt{n}$ cleanly creates the Student-$t_{n-1}$ distribution! For non-Normal populations (like Bernoulli), $\\bar{X}$ and $S^2$ are dependent!',
      ],
      toyExample: {
        title: 'Squaring One Standard Normal Bell Curve',
        scenario:
          'Take a single standard normal draw $Z \\sim \\mathcal{N}(0, 1)$ and compute $Y = Z^2$. What are the mean and variance of $Y$?',
        walkthroughSteps: [
          '1. Since $Z$ can be $+1$ or $-1$ (both square to $1$), $Y \\ge 0$ is always non-negative and strongly right-skewed.',
          '2. Mean: $E[Y] = E[Z^2] = \\text{Var}(Z) + (E[Z])^2 = 1 + 0 = 1$.',
          '3. Variance: $\\text{Var}(Y) = E[Z^4] - (E[Z^2])^2$. Using the Gaussian 4th moment $E[Z^4] = 3$, $\\text{Var}(Z^2) = 3 - 1^2 = 2$.',
          '4. Now add $k$ independent copies $Q = Z_1^2 + \\dots + Z_k^2$: by linearity of expectation and independence, $E[Q] = k$ and $\\text{Var}(Q) = 2k$!',
        ],
        ahaMoment:
          'Keep that simple recipe in mind: a $\\chi^2_k$ random variable is literally just $k$ independent squared Standard Normals added together—which instantly tells you its mean is $k$ and its variance is $2k$!',
      },
      theoremAndFormula: {
        statement:
          'If $Z_1, \\dots, Z_k \\stackrel{\\text{iid}}{\\sim} \\mathcal{N}(0,1)$, then $Q = \\sum_{i=1}^k Z_i^2 \\sim \\chi^2_k$ (chi-square with $k$ degrees of freedom). If $Q_1 \\sim \\chi^2_{k_1}$ and $Q_2 \\sim \\chi^2_{k_2}$ are independent, $Q_1 + Q_2 \\sim \\chi^2_{k_1+k_2}$. For i.i.d. $X_1,\\dots,X_n \\sim \\mathcal{N}(\\mu,\\sigma^2)$, Cochran’s theorem guarantees $\\bar{X}$ and $S^2$ are independent, with:',
        formulaLatex:
          'E[\\chi^2_k] = k, \\quad \\text{Var}(\\chi^2_k) = 2k, \\qquad \\frac{(n-1)S^2}{\\sigma^2} = \\sum_{i=1}^n \\left(\\frac{X_i - \\bar{X}}{\\sigma}\\right)^2 \\sim \\chi^2_{n-1}',
        plainEnglishDecoding:
          'Read $\\chi^2_k$ as "the sum of $k$ independent squared standard-normal fluctuations." Watch where that $1$ missing degree of freedom goes in a Normal sample: centering around true $\\mu$ gives $\\chi^2_n$, while centering around $\\bar{X}$ splits that budget cleanly into two independent pieces—$\\left(\\frac{\\sqrt{n}(\\bar{X}-\\mu)}{\\sigma}\\right)^2 \\sim \\chi^2_1$ for the mean, and $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$ for the residuals!',
        workedMiniExamples: [
          {
            prompt:
              'GATE DA 2025 Q.36: Let $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ with $\\sigma > 0$. Find the variance of $Y = \\left(\\frac{X - \\mu}{\\sigma}\\right)^2$.',
            solution:
              '$Z = \\frac{X-\\mu}{\\sigma} \\sim \\mathcal{N}(0,1)$, so $Y = Z^2 \\sim \\chi^2_1$. Using $\\text{Var}(\\chi^2_k) = 2k$ with $k=1$ gives $\\text{Var}(Y) = 2$.',
          },
          {
            prompt:
              'For iid $X_1,\\dots,X_5 \\sim \\mathcal{N}(0, 4)$, find $E\\left[\\sum_{i=1}^5 (X_i - \\bar{X})^2\\right]$.',
            solution:
              'Here $\\sigma^2 = 4$ and $n = 5$, so $\\frac{\\sum_{i=1}^5 (X_i-\\bar{X})^2}{4} \\sim \\chi^2_4$. Its expectation is $4$, hence $E[\\sum(X_i-\\bar{X})^2] = 4 \\times 4 = 16$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'For iid $X_1,\\dots,X_n \\sim \\mathcal{N}(0,1)$, the sample variance $S^2 = \\frac{1}{n-1}\\sum(X_i-\\bar{X})^2$ follows $\\chi^2_{n-1}$.',
          reality:
            'Missing the $(n-1)$ multiplier! It is $(n-1)S^2 = \\sum_{i=1}^n(X_i-\\bar{X})^2$ (without dividing by $n-1$) that follows $\\chi^2_{n-1}$.',
          counterExample: 'For $X_i \\stackrel{\\text{iid}}{\\sim} \\mathcal{N}(0,1)$, $E[S^2] = 1$, whereas $E[\\chi^2_{n-1}] = n-1 \\neq 1$ for $n \\ge 3$.',
        },
        {
          myth: '$\\bar{X}$ and $S^2$ are independent for any iid sample regardless of the population distribution.',
          reality:
            'False! Independence of $\\bar{X}$ and $S^2$ is a **uniquely Normal** characterization (Geary’s theorem). For skewed or discrete RVs, $\\bar{X}$ and $S^2$ are dependent!',
          counterExample: 'For $n=2$ Bernoulli$(0.5)$ draws: when $\\bar{X}=0$ or $\\bar{X}=1$, $S^2$ is forced to be $0$, whereas when $\\bar{X}=0.5$, $S^2 = 0.5$!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1: Prob & Stats',
          targetWeek: 3,
          topic: 'Ch. 2 Pearson χ² Goodness-of-Fit & Variance CIs',
          whyItMatters:
            'Powers goodness-of-fit testing across categorical bins and builds the pivot for Student-$t$ ($\\chi^2$ sits inside the denominator of $t$!).',
          pyqProof: 'GATE DA 2025 Q.36 & 2026 Q.53',
        },
      ],
    },
    {
      id: 'm5-c1-3',
      title: 'Student-t Distribution: Heavy Tails When σ Is Unknown',
      subtitle: 'Why replacing true σ with noisy S stretches the tails and flattens the peak',
      priority: 'high-yield',
      buildsOn: 'Normal & $\\chi^2$ Sampling Distributions',
      whyStudy:
        'Standardizing a sample mean into $Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}}$ has one glaring practical flaw: if you don’t know the true population mean $\\mu$, how could you possibly know the true population standard deviation $\\sigma$?! In almost every real experiment and $k$-fold ML benchmark, you have to plug in the noisy **sample standard deviation $S$** instead! That extra randomness in the denominator breaks the Standard Normal bell curve and stretches its tails — which is why William Gosset ("Student") invented the **Student-$t$ distribution** (tested directly in **GATE DA 2026 Q.28** comparing $t_1$ vs. $\\mathcal{N}(0, 1)$!).',
      groundRules: [
        '**$t_\\nu$ Is the Exact Ratio of Independent Normal and Scaled $\\chi^2$:** Whenever $Z \\sim \\mathcal{N}(0, 1)$ and $V \\sim \\chi^2_\\nu$ are independent, $T = \\frac{Z}{\\sqrt{V/\\nu}} \\sim t_\\nu$ (where Greek $\\nu$, "nu", is the degrees of freedom). Because $\\bar{X}$ and $S^2$ are independent for a Normal sample, $\\frac{\\bar{X} - \\mu}{S/\\sqrt{n}}$ follows exact $t_{n-1}$!',
        '**Extra Denominator Noise = Lower Center Peak + Heavier Tails:** Because noisy $S$ occasionally lands much smaller than true $\\sigma$, $|T|$ occasionally spikes huge! To keep total area $= 1$, $t_\\nu$ takes probability away from the center peak ($f_{t_\\nu}(0) < \\phi(0)$) and pushes it out into **fatter tails**.',
        '**Heavier Right Tail Means SMALLER CDF $H(c) < G(c)$ for $c > 0$:** Watch this reverse inequality! Having MORE probability beyond $c > 0$ means $P(Y > c) > P(Z > c) \\implies 1 - H(c) > 1 - G(c) \\implies H(c) < G(c)$ (the exact trap in GATE DA 2026 Q.28)!',
        '**Tiny Degrees of Freedom Break Moments ($\\nu = 1$ Is Cauchy!):** Every $t_\\nu$ is mirror-symmetric around $0$ ($F(0) = 0.5$), YET at $\\nu = 1$ ($t_1 =$ Cauchy), tails are so heavy that **neither $E[T]$ nor $\\text{Var}(T)$ exists**! You need $\\nu > 1$ for $E[T] = 0$, and $\\nu > 2$ for finite $\\text{Var}(T) = \\frac{\\nu}{\\nu - 2} > 1$.',
      ],
      toyExample: {
        title: 'Why Dividing by Sample SD S Creates Occasional Huge Ratios',
        scenario:
          'Imagine estimating the average latency $\\mu$ from $n=3$ server pings drawn from $\\mathcal{N}(\\mu, \\sigma^2)$. Suppose by sheer luck all $3$ pings happen to land very close together ($10.1, 10.2, 10.15$) even though true $\\sigma$ is large. What happens to $T = \\frac{\\bar{X}-\\mu}{S/\\sqrt{3}}$?',
        walkthroughSteps: [
          '1. Because the $3$ points clustered tightly, $S$ is tiny—much smaller than the true $\\sigma$!',
          '2. Dividing by a tiny random $S$ blows up $|T|$ into an extreme tail value, even when $\\bar{X}-\\mu$ was only moderate.',
          '3. Conversely, when $S$ happens to be larger than $\\sigma$, $T$ gets pulled slightly closer toward $0$—pushing probability mass away from the shoulders into the tails and lowering the center peak.',
        ],
        ahaMoment:
          'Picture the $t$-distribution as a cautious cousin of $\\mathcal{N}(0,1)$: estimating $\\sigma$ with a noisy sample $S$ pushes mass out into **fatter tails** and lowers the center peak. As $n \\to \\infty$, $S$ locks onto $\\sigma$ and $t_{n-1}$ morphs smoothly back into $\\mathcal{N}(0,1)$!',
      },
      theoremAndFormula: {
        statement:
          'If $Z \\sim \\mathcal{N}(0,1)$ and $V \\sim \\chi^2_\\nu$ are independent, then $T = \\frac{Z}{\\sqrt{V/\\nu}}$ follows Student’s $t$-distribution with $\\nu$ degrees of freedom ($t_\\nu$). Consequently, for i.i.d. $X_1,\\dots,X_n \\sim \\mathcal{N}(\\mu, \\sigma^2)$, the pivotal statistic $\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}$ follows exact $t_{n-1}$.',
        formulaLatex:
          'T = \\frac{Z}{\\sqrt{V/\\nu}} \\sim t_\\nu, \\qquad \\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t_{n-1}, \\qquad \\text{Var}(T) = \\frac{\\nu}{\\nu - 2} \\; (\\nu > 2)',
        plainEnglishDecoding:
          'Read $\\nu$ (nu) as the sample’s "freedom budget" ($n - 1$ for a 1-sample test): small $\\nu$ means $S$ is very noisy and tails are very fat, while as $\\nu \\to \\infty$, $\\frac{\\nu}{\\nu - 2} \\to 1$ and $t_\\nu$ becomes indistinguishable from $\\mathcal{N}(0, 1)$. Every $t_\\nu$ curve is mirror-symmetric around $0$ ($f(-x)=f(x)$ and $F(0)=0.5$). Watch the tiny-df edge cases carefully: at $\\nu=1$, $t_1$ is the **Cauchy distribution** ($h(x) = \\frac{1}{\\pi(1+x^2)}$), whose tails are so heavy that neither its mean nor its variance exists! You need $\\nu > 1$ for $E[T]=0$ and $\\nu > 2$ for finite variance $\\text{Var}(T) = \\frac{\\nu}{\\nu-2} > 1$.',
        workedMiniExamples: [
          {
            prompt:
              'GATE DA 2026 Q.28 Pattern: Let $g, G$ be the PDF and CDF of $Z \\sim \\mathcal{N}(0,1)$ and $h, H$ be the PDF and CDF of $Y \\sim t_1$. If $g(c) = h(c)$ at the positive crossing point $c > 0$, compare $g(0)$ vs $h(0)$ and $G(c)$ vs $H(c)$.',
            solution:
              'At $x=0$, $g(0) = \\frac{1}{\\sqrt{2\\pi}} \\approx 0.3989 > h(0) = \\frac{1}{\\pi} \\approx 0.3183$. Beyond the crossing $c > 0$, the heavier-tailed $t_1$ density stays strictly above the Gaussian ($h(x) > g(x)$ for $x > c$), so $P(Y > c) > P(Z > c) \\implies 1 - H(c) > 1 - G(c) \\implies H(c) < G(c)$. By symmetry, $g(-c)=h(-c)$ and $H(-c) > G(-c)$.',
          },
          {
            prompt: 'Compute $\\text{Var}(T)$ when $T \\sim t_6$.',
            solution: 'Since $\\nu = 6 > 2$, $\\text{Var}(T) = \\frac{6}{6-2} = 1.5$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Every Student-$t_\\nu$ distribution has mean $0$ by symmetry around $0$.',
          reality:
            'Trap! At $\\nu = 1$ (Cauchy), $E[|T|] = \\int_{-\\infty}^{\\infty} \\frac{|x|}{\\pi(1+x^2)}\\,dx = \\infty$, so $E[T]$ is **undefined** (does not exist), and $\\text{Var}(T)$ is also undefined for $\\nu \\le 2$!',
          counterExample: 'The formula $\\frac{\\nu}{\\nu-2}$ plugged at $\\nu=1$ gives $-1$, which is nonsensical for a variance.',
        },
        {
          myth: 'Because $t_1$ has heavier tails than $\\mathcal{N}(0,1)$, its CDF $H(c)$ is larger than $G(c)$ for $c > 0$.',
          reality:
            'Opposite! Larger right-tail probability $P(Y > c) > P(Z > c)$ means $1 - H(c) > 1 - G(c)$, which reverses to $H(c) < G(c)$ for large $c > 0$!',
          counterExample: 'At $c=3$: $G(3) \\approx 0.9987$, whereas $H(3) = \\frac{1}{2} + \\frac{1}{\\pi}\\arctan(3) \\approx 0.8976 < G(3)$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1: Prob & Stats',
          targetWeek: 3,
          topic: 'Ch. 2 Small-Sample t-Confidence Intervals & Paired t-Tests',
          whyItMatters:
            'Whenever population $\\sigma$ is unknown (nearly all real ML benchmarks and small $k$-fold CV studies), $t_{n-1}$ replaces $\\mathcal{N}(0,1)$ critical values.',
          pyqProof: 'GATE DA 2026 Q.28',
        },
      ],
    },
    {
      id: 'm5-c1-4',
      title: 'Central Limit Theorem (CLT) & Normal Approximations',
      subtitle: 'Why averages and sums of any finite-variance iid variables converge to a Gaussian',
      priority: 'core-pillar',
      buildsOn: 'Sample Mean $\\bar{X}$, Standard Normal CDF $\\Phi(z)$, and Binomial/Poisson Sums',
      whyStudy:
        'Real-world data is almost NEVER Normal — coin flips are binary ($0/1$), dice are flat rectangles, and waiting times are skewed Exponentials! Computing exact probabilities for a sum of $300$ coin flips (**GATE DA 2025 Q.40**) or an infinite Poisson limit (**GATE DA 2026 Q.45**) by hand is completely impossible. The **Central Limit Theorem (CLT)** is the crown jewel of Probability: it explains why adding up *almost any* independent random effects (regardless of their original shape!) automatically cancels out extreme quirks and sculpts a universal **Normal bell curve** — letting you answer huge-sample questions in 15 seconds using $\\Phi(z)$!',
      groundRules: [
        '**Why Almost Any Sum Turns Into a Bell Curve:** Extreme high or low sums require *nearly every* term to swing the same way at once (astronomically rare), whereas moderate sums happen in vastly more ways as positive and negative fluctuations cancel — forcing the sum’s histogram into a universal symmetric Gaussian!',
        '**Finite Variance ($0 < \\sigma^2 < \\infty$) Is Non-Negotiable:** The individual $X_i$ can be discrete, uniform, or wildly skewed — they do **NOT** need to be Normal! They ONLY need to be i.i.d. with a **finite** variance $\\sigma^2 < \\infty$ (which is why infinite-variance Cauchy $t_1$ defies the CLT completely!).',
        '**Watch Sum $S_n$ vs. Mean $\\bar{X}_n$ Scaling Carefully:** For the **sum** $S_n = \\sum_{i=1}^n X_i$, mean is $n\\mu$ and SD is $\\sigma\\sqrt{n}$, so $Z = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}}$. For the **average** $\\bar{X}_n = S_n / n$, mean is $\\mu$ and SD is $\\sigma/\\sqrt{n}$, so $Z = \\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}}$. (They are the exact same ratio once you divide top and bottom by $n$!)',
        '**Spot Disguised i.i.d. Sums Instantly:** Whenever you see $\\text{Binomial}(n, p)$ (sum of $n$ i.i.d. $\\text{Bernoulli}(p)$) or $\\text{Poisson}(n\\lambda)$ (sum of $n$ i.i.d. $\\text{Poisson}(\\lambda)$) with large $n$, CLT applies immediately — even inside disguised Calculus limits like $\\lim_{n \\to \\infty} \\sum_{k=0}^n \\frac{e^{-n} n^k}{k!} = \\Phi(0) = 0.5$!',
      ],
      sandboxId: 'distribution-clt-lab',
      toyExample: {
        title: 'Rolling 1 Die vs Averaging 30 Dice',
        scenario:
          'Roll a single fair 6-sided die $X_1$: its PMF is completely flat ($1/6$ each on $1..6$) with $\\mu = 3.5$ and $\\sigma^2 = \\frac{35}{12} \\approx 2.917$. Now roll $n=30$ independent dice and look at their sum $S_{30}$ and average $\\bar{X}_{30}$.',
        walkthroughSteps: [
          '1. For $n=1$: flat rectangle—nothing like a bell curve.',
          '2. For $n=2$: sum $X_1+X_2$ forms a sharp triangle peaking at $7$ ($\\bar{X}_2 = 3.5$).',
          '3. For $n=30$: $E[S_{30}] = 30(3.5) = 105$ and $\\text{SD}(S_{30}) = \\sqrt{30 \\times \\frac{35}{12}} = \\sqrt{87.5} \\approx 9.354$.',
          '4. There are vastly more combinations summing near $105$ than near $30$ or $180$, sculpting a smooth Gaussian curve $\\mathcal{N}(105, 87.5)$ without $X_1$ ever being Normal!',
        ],
        ahaMoment:
          'This is why the Central Limit Theorem feels like magic: your raw observations do NOT need to be Normal at all! As long as $X_i$ are iid with finite mean $\\mu$ and finite variance $\\sigma^2$, adding enough copies automatically sculpts a $\\mathcal{N}(0,1)$ bell curve once you subtract $n\\mu$ and divide by $\\sigma\\sqrt{n}$.',
      },
      theoremAndFormula: {
        statement:
          '**Lindeberg–Lévy Central Limit Theorem:** Let $X_1, X_2, \\dots, X_n$ be i.i.d. random variables with finite mean $\\mu = E[X_1]$ and finite positive variance $0 < \\sigma^2 = \\text{Var}(X_1) < \\infty$. Let $S_n = \\sum_{i=1}^n X_i$ and $\\bar{X}_n = S_n/n$. Then as $n \\to \\infty$, the standardized score converges in distribution (written $\\xrightarrow{d}$) to the Standard Normal $\\mathcal{N}(0,1)$:',
        formulaLatex:
          'Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} = \\frac{S_n - n\\mu}{\\sigma \\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1) \\quad \\implies \\quad P(S_n \\le a) \\approx \\Phi\\!\\left(\\frac{a - n\\mu}{\\sigma\\sqrt{n}}\\right)',
        plainEnglishDecoding:
          'Read $\\Phi(z) = P(Z \\le z)$ as the Standard Normal CDF (area to the left of $z$). For large $n$, any sum $S_n$ acts like $\\mathcal{N}(n\\mu, n\\sigma^2)$ and any average $\\bar{X}_n$ acts like $\\mathcal{N}(\\mu, \\sigma^2/n)$. Train your eye to spot disguised sums: $\\text{Binomial}(n, p)$ is just $n$ i.i.d. $\\text{Bernoulli}(p)$ terms ($n\\mu = np$, $\\sigma\\sqrt{n} = \\sqrt{np(1-p)}$), and $\\text{Poisson}(n\\lambda)$ is just $n$ i.i.d. $\\text{Poisson}(\\lambda)$ terms!',
        workedMiniExamples: [
          {
            prompt:
              'GATE DA 2025 Q.40: Let $X_1,\\dots,X_{300} \\stackrel{\\text{iid}}{\\sim} \\text{Bernoulli}(0.25)$ and $Y = \\sum_{i=1}^{300} X_i$. Approximate $P(60 \\le Y \\le 90)$ using CLT.',
            solution:
              'Here $E[Y] = 300(0.25) = 75$ and $\\text{Var}(Y) = 300(0.25)(0.75) = 56.25 \\implies \\text{SD}(Y) = \\sqrt{56.25} = 7.5$. Standardizing: $\\frac{60-75}{7.5} = -2$ and $\\frac{90-75}{7.5} = +2$. Thus $P(60 \\le Y \\le 90) \\approx \\Phi(2) - \\Phi(-2)$.',
          },
          {
            prompt:
              'GATE DA 2026 Q.45: Evaluate $L = \\lim_{n\\to\\infty} \\sum_{k=0}^n \\frac{e^{-n} n^k}{k!}$.',
            solution:
              'Notice $\\frac{e^{-n}n^k}{k!}$ is the PMF of $S_n \\sim \\text{Poisson}(n) = \\sum_{i=1}^n X_i$ with $X_i \\stackrel{\\text{iid}}{\\sim} \\text{Poisson}(1)$ ($\\mu=1, \\sigma^2=1$). Thus the sum is $P(S_n \\le n) = P\\!\\left(\\frac{S_n - n}{\\sqrt{n}} \\le 0\\right) \\xrightarrow{\\text{CLT}} \\Phi(0) = 0.5$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'By the CLT, the sample mean $\\bar{X}_n$ of ANY iid random variables converges to a Normal distribution as $n \\to \\infty$.',
          reality:
            'False! CLT requires **finite variance** ($\\sigma^2 < \\infty$). For heavy-tailed Cauchy ($t_1$) variables, $\\bar{X}_n$ has the exact same Cauchy distribution for every $n$!',
          counterExample: 'If $X_1,\\dots,X_n \\stackrel{\\text{iid}}{\\sim} t_1$, then $\\bar{X}_n \\sim t_1$ for all $n \\ge 1$ — it never shrinks or becomes Normal.',
        },
        {
          myth: 'For the sum $S_n = \\sum_{i=1}^n X_i$, the CLT denominator is $\\sigma/\\sqrt{n}$.',
          reality:
            'Wrong scaling! Divide by $\\sigma/\\sqrt{n}$ for the **sample mean** $\\bar{X}_n$, and divide by $\\sigma\\sqrt{n}$ for the **sample sum** $S_n$.',
          counterExample: 'In GATE 2025 Q.40 ($n=300, \\sigma=\\sqrt{3}/4$), $\\text{SD}(S_{300}) = \\sigma\\sqrt{300} = 7.5$, NOT $\\sigma/\\sqrt{300} \\approx 0.025$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1 & Sec 6',
          targetWeek: 7,
          topic: 'A/B Test Normal Approximation & Large-Sample CIs',
          whyItMatters:
            'Justifies $z$-intervals and $z$-tests for conversion rates and large-batch SGD gradient averages even when individual samples are Bernoulli or skewed.',
          pyqProof: 'GATE DA 2025 Q.40 & 2026 Q.45',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm5-c1-p1',
      title: 'Spotting CLT Disguised Inside Calculus Limits & Large-n Sums',
      difficulty: 'Rank-Decider',
      relatedPyqs: ['GATE DA 2026 · Q.45', 'GATE DA 2025 · Q.40'],
      problemStatement:
        'Evaluate the exact limit $L = \\lim_{n\\to\\infty} \\sum_{k=0}^n \\frac{e^{-n} n^k}{k!}$.',
      triggerCue:
        'A limit as $n \\to \\infty$ of a finite sum containing $\\frac{e^{-n} n^k}{k!}$ or $\\binom{n}{k}p^k(1-p)^{n-k}$ up to $k = n$ (or $np + c\\sqrt{n}$).',
      bruteForceTrap:
        'Trying Stirling’s approximation on $k!$, Taylor series remainder integrals, or Riemann sums—you will get tangled in $O(n)$ factorial algebra and miss the cutoff.',
      mentalShift:
        'Read the summand probabilistically! $\\frac{e^{-n}n^k}{k!}$ is the PMF of $S_n \\sim \\text{Poisson}(n)$, which splits into $n$ iid $\\text{Poisson}(1)$ terms ($\\mu=1, \\sigma=1$). The sum from $0$ to $n$ is literally $P(S_n \\le n)$, which sits right at the mean—so CLT instantly sends it to $\\Phi(0) = 0.5$!',
      steps: [
        {
          label: 'Step 1: Match the summand to an additive distribution',
          detail:
            'Recognize $p_k = \\frac{e^{-n} n^k}{k!}$ as $P(S_n = k)$ where $S_n \\sim \\text{Poisson}(n) = \\sum_{i=1}^n X_i$ with $X_i \\stackrel{\\text{iid}}{\\sim} \\text{Poisson}(1)$.',
        },
        {
          label: 'Step 2: Read the summation bounds as a CDF',
          detail:
            'The sum $\\sum_{k=0}^n P(S_n = k)$ is exactly $P(S_n \\le n)$.',
        },
        {
          label: 'Step 3: Standardize via CLT ($\\mu=1, \\sigma=1$)',
          detail:
            '$P(S_n \\le n) = P\\!\\left(\\frac{S_n - n(1)}{1\\cdot\\sqrt{n}} \\le \\frac{n - n}{\\sqrt{n}}\\right) = P(Z_n \\le 0) \\xrightarrow{n\\to\\infty} \\Phi(0) = 0.5$.',
        },
      ],
      lockInTakeaway:
        'Whenever $\\lim_{n\\to\\infty}$ wraps a Poisson($n$) or Binomial($n,p$) sum, convert it to $P(S_n \\le a)$ and apply CLT ($\\Phi(0)=0.5$ at the mean!).',
    },
    {
      id: 'm5-c1-p2',
      title: 'Pairwise Variance & Normal χ² Decomposition Without Expanding',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2026 · Q.62', 'GATE DA 2026 · Q.53'],
      problemStatement:
        'Given $100$ real numbers $x_1,\\dots,x_{100}$ satisfying $\\frac{1}{2000}\\sum_{i=1}^{100}\\sum_{j=1}^{100}(x_i - x_j)^2 = 99$, compute the unbiased sample variance $s^2 = \\frac{1}{99}\\sum_{i=1}^{100}(x_i - \\bar{x})^2$.',
      triggerCue:
        'A double sum $\\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2$ or linear combinations of squared Normal RVs like $\\sum(X_i - \\bar{X})^2$ vs $(\\sqrt{n}\\bar{X})^2$.',
      bruteForceTrap:
        'Trying to construct a sample of $100$ numbers or manually expanding $100^2 = 10{,}000$ cross terms.',
      mentalShift:
        'Use the two-line variance trick: for two independent draws $U, V$ from the empirical distribution of $\\{x_1,\\dots,x_n\\}$, $E[(U-V)^2] = \\text{Var}(U-V) = 2\\text{Var}(U)$! Multiplying by $n^2$ immediately gives $\\sum_i\\sum_j (x_i-x_j)^2 = 2n\\sum_i(x_i-\\bar{x})^2$.',
      steps: [
        {
          label: 'Step 1: Apply the pairwise-to-mean-deviation identity',
          detail:
            'Substitute $n = 100$ into $\\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2 = 2n\\sum_{i=1}^n (x_i - \\bar{x})^2 = 200\\sum_{i=1}^{100}(x_i - \\bar{x})^2$.',
        },
        {
          label: 'Step 2: Plug into the given equation',
          detail:
            '$\\frac{200}{2000}\\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 99 \\implies \\frac{1}{10}\\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 99 \\implies \\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 990$.',
        },
        {
          label: 'Step 3: Divide by $n - 1 = 99$',
          detail: '$s^2 = \\frac{990}{99} = 10$.',
        },
      ],
      lockInTakeaway:
        'Memorize $\\sum_i\\sum_j (x_i-x_j)^2 = 2n\\sum_i(x_i-\\bar{x})^2 = 2n(n-1)s^2$—it turns $O(n^2)$ double sums into 1-line arithmetic.',
    },
  ],
  arsenalCards: [
    {
      id: 'm5-c1-a1',
      badge: 'Core Unbiasedness',
      whenYouSpot: 'Sample mean $\\bar{X}$, sample variance $S^2$, or double sum $\\sum_i\\sum_j(x_i-x_j)^2$',
      directWeaponLatex:
        'E[\\bar{X}] = \\mu, \\quad \\text{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}, \\quad E[S^2] = \\sigma^2, \\quad \\sum_i\\sum_j(x_i-x_j)^2 = 2n(n-1)S^2',
      instantRule:
        'Divide sum of squared deviations from $\\bar{X}$ by $n-1$ for unbiased variance; divide by $n$ for MLE (biased low by $\\frac{n-1}{n}$).',
      tenSecondExample:
        'GATE 2026 Q.62: $\\frac{200\\cdot 99\\,s^2}{2000} = 99 \\implies s^2 = 10$.',
      oneFatalTrap:
        '$E[S^2]=\\sigma^2$ does NOT imply $E[S]=\\sigma$ (in fact $E[S] < \\sigma$ by Jensen’s inequality).',
    },
    {
      id: 'm5-c1-a2',
      badge: 'χ² & Student-t',
      whenYouSpot: 'Squared standard normals $\\sum Z_i^2$, $\\sum(X_i-\\bar{X})^2/\\sigma^2$, or $\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}$',
      directWeaponLatex:
        '\\chi^2_k:\\; \\mu=k,\\; \\sigma^2=2k \\quad|\\quad \\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2_{n-1} \\quad|\\quad \\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\sim t_{n-1}',
      instantRule:
        'In a Normal sample, $\\bar{X} \\perp S^2$, $(n-1)S^2/\\sigma^2 \\sim \\chi^2_{n-1}$, and $t_\\nu$ has heavier tails than $\\mathcal{N}(0,1)$ with $\\text{Var}(t_\\nu)=\\frac{\\nu}{\\nu-2}$ ($\\nu > 2$).',
      tenSecondExample:
        'GATE 2025 Q.36: $Y = ((X-\\mu)/\\sigma)^2 \\sim \\chi^2_1 \\implies \\text{Var}(Y) = 2(1) = 2$.',
      oneFatalTrap:
        'Cauchy ($t_1$) has NO finite mean and NO variance; never plug $\\nu=1$ into $\\frac{\\nu}{\\nu-2}$!',
    },
    {
      id: 'm5-c1-a3',
      badge: 'CLT Standardization',
      whenYouSpot: 'Large-$n$ sum $S_n = \\sum X_i$, mean $\\bar{X}_n$, or $\\lim_{n\\to\\infty}$ of Poisson/Binomial CDF',
      directWeaponLatex:
        'Z_n = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} = \\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)',
      instantRule:
        'Sum uses $(n\\mu, \\sigma\\sqrt{n})$; average uses $(\\mu, \\sigma/\\sqrt{n})$. Always check $\\sigma^2 < \\infty$ first.',
      tenSecondExample:
        'GATE 2026 Q.45: $\\lim_{n\\to\\infty} P(\\text{Poisson}(n) \\le n) = \\Phi(0) = 0.5$.',
      oneFatalTrap:
        'Mixing up $\\sigma\\sqrt{n}$ (for $S_n$) and $\\sigma/\\sqrt{n}$ (for $\\bar{X}_n$), or applying CLT to Cauchy RVs.',
    },
  ],
  questions: [
    {
      id: 'm5-c1-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'Compute the unbiased sample variance $s^2 = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})^2$ of the $n=5$ observations $\\{2, 4, 6, 8, 10\\}$.',
      natAnswer: { min: 10, max: 10, exactDisplay: '10' },
      triggerHint: 'Find $\\bar{x}$ first, sum the squared deviations $(x_i - \\bar{x})^2$, and divide by $n - 1 = 4$.',
      intuitiveSolution: [
        'Sample mean $\\bar{x} = \\frac{2+4+6+8+10}{5} = 6$.',
        'Squared deviations: $(2-6)^2 + (4-6)^2 + (6-6)^2 + (8-6)^2 + (10-6)^2 = 16 + 4 + 0 + 4 + 16 = 40$.',
        'Divide by $n - 1 = 4$ (Bessel’s correction): $s^2 = \\frac{40}{4} = 10$.',
      ],
      directShortcutUsed: 'Unbiased sample variance $s^2 = \\frac{1}{n-1}\\sum (x_i - \\bar{x})^2$',
    },
    {
      id: 'm5-c1-q2',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.36',
      year: 2025,
      marks: 2,
      type: 'MCQ',
      stem: 'Let $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ be a Normal random variable with $\\sigma > 0$. Define $Y = \\left(\\frac{X - \\mu}{\\sigma}\\right)^2$. What is $\\text{Var}(Y)$?',
      options: [
        { id: 'A', text: '$1$', whyTrueOrFalse: 'False: $1$ is $E[Y] = E[Z^2]$, not $\\text{Var}(Y)$.' },
        { id: 'B', text: '$2$', whyTrueOrFalse: 'True: $Z = \\frac{X-\\mu}{\\sigma} \\sim \\mathcal{N}(0,1)$, so $Y = Z^2 \\sim \\chi^2_1$ and $\\text{Var}(\\chi^2_1) = 2(1) = 2$.' },
        { id: 'C', text: '$\\sigma^2$', whyTrueOrFalse: 'False: $Y$ is standardized by $\\sigma$, so its distribution is free of $\\mu$ and $\\sigma$.' },
        { id: 'D', text: '$3$', whyTrueOrFalse: 'False: $3$ is the fourth moment $E[Z^4]$; you must subtract $(E[Z^2])^2 = 1$.' },
      ],
      correctOptions: ['B'],
      triggerHint: 'Standardize $X$ into $Z \\sim \\mathcal{N}(0,1)$, recognize $Y = Z^2 \\sim \\chi^2_1$, and recall $\\text{Var}(\\chi^2_k) = 2k$.',
      intuitiveSolution: [
        'Since $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, $Z = \\frac{X-\\mu}{\\sigma} \\sim \\mathcal{N}(0,1)$.',
        'Therefore $Y = Z^2 \\sim \\chi^2_1$.',
        'For any $\\chi^2_k$ variable, $E[\\chi^2_k] = k$ and $\\text{Var}(\\chi^2_k) = 2k$. At $k=1$, $\\text{Var}(Y) = 2$ (verified by $E[Z^4] - (E[Z^2])^2 = 3 - 1 = 2$).',
      ],
      directShortcutUsed: '$Z^2 \\sim \\chi^2_1 \\implies \\text{Var}(Z^2) = 2$',
    },
    {
      id: 'm5-c1-q3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.40',
      year: 2025,
      marks: 2,
      type: 'MCQ',
      stem: 'Let $X_1, X_2, \\dots, X_{300}$ be iid $\\text{Bernoulli}(0.25)$ random variables, and let $Y = \\sum_{i=1}^{300} X_i$. Using the Central Limit Theorem (with $\\Phi$ denoting the standard normal CDF), $P(60 \\le Y \\le 90)$ is approximately:',
      options: [
        { id: 'A', text: '$\\Phi(2) - \\Phi(-2)$', whyTrueOrFalse: 'True: $\\mu_Y = 300(0.25) = 75$ and $\\sigma_Y = \\sqrt{300(0.25)(0.75)} = 7.5$, so $(60-75)/7.5 = -2$ and $(90-75)/7.5 = +2$.' },
        { id: 'B', text: '$\\Phi(1.5) - \\Phi(-1.5)$', whyTrueOrFalse: 'False: arises from an incorrect standard deviation (e.g. $10$ instead of $7.5$).' },
        { id: 'C', text: '$\\Phi(4) - \\Phi(-4)$', whyTrueOrFalse: 'False: forgets the $(1-p) = 0.75$ or uses wrong $\\sqrt{n}$ scaling.' },
        { id: 'D', text: '$2\\Phi(2)$', whyTrueOrFalse: 'False: $\\Phi(2) - \\Phi(-2) = 2\\Phi(2) - 1$, not $2\\Phi(2)$ (which exceeds $1$!).' },
      ],
      correctOptions: ['A'],
      triggerHint: 'Compute $E[Y] = np$ and $\\text{SD}(Y) = \\sqrt{np(1-p)}$, then standardize $60$ and $90$.',
      intuitiveSolution: [
        'Each $X_i \\sim \\text{Bernoulli}(0.25)$ has $\\mu = 0.25$ and $\\sigma^2 = 0.25 \\times 0.75 = \\frac{3}{16}$.',
        'For the sum $Y$: $E[Y] = 300 \\times 0.25 = 75$, and $\\text{Var}(Y) = 300 \\times \\frac{3}{16} = \\frac{900}{16} = 56.25$, so $\\text{SD}(Y) = \\frac{30}{4} = 7.5$.',
        'By CLT, $P(60 \\le Y \\le 90) \\approx P\\!\\left(\\frac{60-75}{7.5} \\le Z \\le \\frac{90-75}{7.5}\\right) = P(-2 \\le Z \\le 2) = \\Phi(2) - \\Phi(-2)$.',
      ],
      directShortcutUsed: 'CLT Binomial standardization $\\frac{Y - np}{\\sqrt{np(1-p)}} \\approx \\mathcal{N}(0,1)$',
    },
    {
      id: 'm5-c1-q4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.53 (Pattern)',
      year: 2026,
      marks: 2,
      type: 'MSQ',
      stem: 'Let $X_1, X_2, \\dots, X_n$ ($n \\ge 3$) be iid $\\mathcal{N}(0, 1)$ random variables with sample mean $\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$. Which of the following statements is/are TRUE?',
      options: [
        { id: 'A', text: '$\\sum_{i=1}^n X_i^2 \\sim \\chi^2_n$', whyTrueOrFalse: 'True: direct definition of a $\\chi^2_n$ distribution as the sum of $n$ iid $\\mathcal{N}(0,1)^2$ variables.' },
        { id: 'B', text: '$\\sum_{i=1}^n (X_i - \\bar{X})^2 \\sim \\chi^2_{n-1}$', whyTrueOrFalse: 'True: by Cochran’s theorem, subtracting the sample mean uses $1$ degree of freedom, leaving $\\chi^2_{n-1}$.' },
        { id: 'C', text: '$X_1^2 + X_n^2 \\sim \\chi^2_2$', whyTrueOrFalse: 'True: $X_1$ and $X_n$ are independent $\\mathcal{N}(0,1)$ since $n \\ge 3$, so $X_1^2 + X_n^2 \\sim \\chi^2_2$.' },
        { id: 'D', text: '$(\\sqrt{n}\\bar{X})^2 \\sim \\chi^2_n$', whyTrueOrFalse: 'False: $\\sqrt{n}\\bar{X} \\sim \\mathcal{N}(0,1)$ is a single standard normal, so its square follows $\\chi^2_1$, NOT $\\chi^2_n$!' },
      ],
      correctOptions: ['A', 'B', 'C'],
      triggerHint: 'Count how many independent $\\mathcal{N}(0,1)$ terms are squared in each expression.',
      intuitiveSolution: [
        'Option A sums $n$ independent standard normals squared $\\implies \\chi^2_n$ (True).',
        'Option B is $(n-1)S^2/\\sigma^2$ with $\\sigma^2=1$, which follows $\\chi^2_{n-1}$ (True).',
        'Option C sums $2$ independent squared standard normals ($X_1$ and $X_n$, distinct since $n \\ge 3$) $\\implies \\chi^2_2$ (True).',
        'Option D: $\\bar{X} \\sim \\mathcal{N}(0, 1/n)$, so $\\sqrt{n}\\bar{X} \\sim \\mathcal{N}(0,1)$ and $(\\sqrt{n}\\bar{X})^2 \\sim \\chi^2_1$ (NOT $\\chi^2_n$).',
      ],
      directShortcutUsed: 'Degree-of-freedom counting & Cochran split $\\sum X_i^2 = \\sum(X_i-\\bar{X})^2 + (\\sqrt{n}\\bar{X})^2$',
    },
    {
      id: 'm5-c1-q5',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.62',
      year: 2026,
      marks: 2,
      type: 'NAT',
      stem: 'Let $x_1, x_2, \\dots, x_{100}$ be real numbers with sample mean $\\bar{x} = \\frac{1}{100}\\sum_{i=1}^{100} x_i$. If $\\frac{1}{2000}\\sum_{i=1}^{100}\\sum_{j=1}^{100} (x_i - x_j)^2 = 99$, then what is the value of $\\frac{1}{99}\\sum_{i=1}^{100} (x_i - \\bar{x})^2$?',
      natAnswer: { min: 10, max: 10, exactDisplay: '10' },
      triggerHint: 'Use $\\sum_{i=1}^n\\sum_{j=1}^n (x_i - x_j)^2 = 2n\\sum_{i=1}^n (x_i - \\bar{x})^2$ with $n=100$.',
      intuitiveSolution: [
        'Apply the pairwise difference identity for $n=100$: $\\sum_{i=1}^{100}\\sum_{j=1}^{100}(x_i - x_j)^2 = 200\\sum_{i=1}^{100}(x_i - \\bar{x})^2$.',
        'Substitute into the given equation: $\\frac{200}{2000}\\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 99 \\implies \\sum_{i=1}^{100}(x_i - \\bar{x})^2 = 990$.',
        'Divide by $n - 1 = 99$: $\\frac{990}{99} = 10$.',
      ],
      directShortcutUsed: '$\\sum_i\\sum_j(x_i-x_j)^2 = 2n(n-1)s^2$',
    },
    {
      id: 'm5-c1-q6',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Mock · Inspired by GATE DA 2026 Q.28',
      marks: 2,
      type: 'MSQ',
      stem: 'Let $g(x), G(x)$ be the PDF and CDF of $Z \\sim \\mathcal{N}(0, 1)$, and let $h(x), H(x)$ be the PDF and CDF of $Y \\sim t_1$ (Student-$t$ with $1$ degree of freedom). Suppose $c > 0$ is the unique positive value where $g(c) = h(c)$ (so $h(x) > g(x)$ for all $x > c$). Which of the following is/are ALWAYS true?',
      options: [
        { id: 'A', text: '$g(0) > h(0)$', whyTrueOrFalse: 'True: $g(0) = \\frac{1}{\\sqrt{2\\pi}} \\approx 0.3989 > h(0) = \\frac{1}{\\pi} \\approx 0.3183$.' },
        { id: 'B', text: '$G(c) > H(c)$', whyTrueOrFalse: 'True: since $h(x) > g(x)$ for all $x > c$, $P(Y > c) > P(Z > c)$, so $1 - H(c) > 1 - G(c) \\implies G(c) > H(c)$.' },
        { id: 'C', text: '$g(-c) = h(-c)$', whyTrueOrFalse: 'True: both $\\mathcal{N}(0,1)$ and $t_1$ PDFs are even functions, so $g(-c) = g(c) = h(c) = h(-c)$.' },
        { id: 'D', text: '$\\text{Var}(Y) = 1$', whyTrueOrFalse: 'False: $Y \\sim t_1$ is standard Cauchy, whose mean and variance do not exist (infinite second moment).' },
      ],
      correctOptions: ['A', 'B', 'C'],
      triggerHint: 'Compare tail area $\\int_c^\\infty$ directly rather than trying to integrate from $-\\infty$ to $c$.',
      intuitiveSolution: [
        'At $0$: $g(0) = 1/\\sqrt{2\\pi} > 1/\\pi = h(0)$ (A is True).',
        'Both PDFs are symmetric about $0$: $g(-c) = g(c) = h(c) = h(-c)$ (C is True).',
        'For $x > c$, $t_1$ has strictly heavier tails ($h(x) > g(x)$), so $1 - H(c) = \\int_c^\\infty h(x)\\,dx > \\int_c^\\infty g(x)\\,dx = 1 - G(c)$, yielding $G(c) > H(c)$ (B is True).',
        '$t_1$ (Cauchy) has undefined mean and undefined variance (D is False).',
      ],
      directShortcutUsed: 'Tail-area comparison $1 - H(c) > 1 - G(c) \\iff H(c) < G(c)$ & symmetry',
    },
  ],
}

const chapter2: ChapterData = {
  id: 'prob4-ch2',
  number: 2,
  title: 'Confidence Intervals, Hypothesis Testing, z/t/χ²-Tests, p-value & Errors',
  shortTitle: 'CIs, Hypothesis Tests & p-value',
  estimatedHours: 4.5,
  dayLabel: 'Week 3 · Day 3–4 (Prob & Stats IV — Part 2)',
  tagline:
    'Meet the #1 Sleeping Giant of GATE DA 2027: zero questions appeared in 2024–2026 on Confidence Intervals, z-tests, t-tests, χ² Goodness-of-Fit, p-values, or Type I/II Errors—so let’s build rock-solid intuition here so IIT Madras 2027 cannot catch you off guard.',
  syllabusMapping: [
    'Confidence Intervals (z-interval, t-interval, proportion interval & sample-size margin of error)',
    'Hypothesis Testing: Null vs Alternative, p-value, Type I (α), Type II (β) errors & Power',
    'z-test, t-test (1-sample, paired, 2-sample) & Chi-square (χ²) Goodness-of-Fit / Independence tests',
  ],
  whatIsImportant: [
    'Sleeping Giant Alert: 0 questions in 2024, 2025, 2026 — high likelihood of 2–4 marks in GATE DA 2027 (IIT Madras)',
    'Confidence Interval construction ($\\bar{X} \\pm z_{\\alpha/2}\\sigma/\\sqrt{n}$ or $t_{\\alpha/2,n-1}S/\\sqrt{n}$), width scaling ($\\propto 1/\\sqrt{n}$), and frequentist interpretation',
    'Exact p-value definition: $P(\\text{test stat as or more extreme} \\mid H_0)$ — NEVER $P(H_0 \\mid \\text{data})$!',
    'Type I ($\\alpha$), Type II ($\\beta$), Power ($1-\\beta$) calculations on concrete distributions, and CI–Hypothesis Test duality',
    '$z$-test vs $t$-test vs paired $t$-test, and Pearson $\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}$ with $\\text{df} = k - 1 - m$',
  ],
  whatIsNotImportant: [
    'Neyman–Pearson likelihood-ratio lemma derivations and uniformly most powerful (UMP) proofs',
    'Multi-factor ANOVA ($F$-tables), Wilcoxon/Mann–Whitney rank tests, and Bonferroni multiple-testing corrections (outside GATE DA syllabus)',
    'Exact Welch–Satterthwaite unequal-variance $t$-test degrees-of-freedom formula',
  ],
  inboundStream:
    'Ch. 1: Sampling distributions ($\\bar{X}, S^2$), $\\chi^2_{n-1}$, Student-$t_{n-1}$, and Central Limit Theorem.',
  outboundStream: [
    'Week 7 ML: Comparing two classifiers via paired t-test / McNemar test on CV folds',
    'Week 7 ML: Feature selection with χ² test & production data-drift monitoring',
    'Industry Data Science: Online A/B test sizing, statistical significance & power analysis',
  ],
  glossary: [
    {
      term: 'Confidence Interval (CI)',
      symbol: '$\\bar{X} \\pm \\text{ME}$',
      plainEnglish:
        'A random net cast around your sample estimate designed to trap the fixed unknown parameter $\\mu$. Saying "$95\\%$ confidence" means your *procedure* catches $\\mu$ in $95\\%$ of repeated samples—NOT that $\\mu$ is jumping around!',
      tinyExample: 'With $\\bar{x}=50$, $\\sigma=2$, and $n=16$, the $95\\%$ CI is $50 \\pm 1.96(0.5) = [49.02, 50.98]$.',
    },
    {
      term: 'Margin of Error (ME)',
      symbol: '$z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}$',
      plainEnglish:
        'Half the width of a symmetric confidence interval. Because $\\text{ME} \\propto 1/\\sqrt{n}$, shrinking your margin of error by a factor of $k$ always demands **$k^2$ times as many samples**!',
      tinyExample: 'Cutting a CI width from $8$ down to $2$ ($4\\times$ tighter) requires $4^2 = 16\\times$ more samples.',
    },
    {
      term: 'Null & Alternative Hypotheses',
      symbol: '$H_0 \\text{ vs. } H_1$',
      plainEnglish:
        'Think of a courtroom trial: $H_0$ is the baseline "status quo / innocent" claim you assume while calculating probabilities, and $H_1$ is the new effect or departure you want strong evidence to prove.',
      tinyExample: 'Testing whether a coin favors Heads sets $H_0: p = 0.5$ against $H_1: p > 0.5$.',
    },
    {
      term: 'Test Statistic',
      symbol: '$Z = \\frac{\\bar{X}-\\mu_0}{\\sigma/\\sqrt{n}}$',
      plainEnglish:
        'A single standardized score measuring how many standard errors your observed data sits away from the null claim $H_0$. The farther from $0$ it lands, the harder $H_0$ is to defend.',
      tinyExample: 'With $\\bar{x}=54$, $\\mu_0=50$, $\\sigma=10$, and $n=25$, the $z$-statistic is $\\frac{54-50}{10/5} = 2$.',
    },
    {
      term: 'p-value',
      symbol: '$P(\\text{extreme stat} \\mid H_0)$',
      plainEnglish:
        'The chance of seeing data at least as extreme as yours *assuming $H_0$ is true*. Never read it backward as $P(H_0 \\mid \\text{data})$! Whenever $p\\text{-value} \\le \\alpha$, you reject $H_0$.',
      tinyExample: 'Seeing $\\ge 9$ Heads in $10$ fair flips has $p\\text{-value} = \\frac{11}{1024} \\approx 0.0107 \\le 0.05 \\implies$ reject $H_0$.',
    },
    {
      term: 'Significance Level & Type I Error',
      symbol: '$\\alpha = P(\\text{Reject } H_0 \\mid H_0)$',
      plainEnglish:
        'A **false alarm**—rejecting $H_0$ when $H_0$ was actually true (like a smoke detector blaring when there is no fire). Setting $\\alpha = 0.05$ caps your false-alarm rate at $5\\%$.',
      tinyExample: 'Rejecting $H_0: U(0,1)$ when $X > 0.9$ gives Type I error $\\alpha = P_{H_0}(X > 0.9) = 0.10$.',
    },
    {
      term: 'Type II Error',
      symbol: '$\\beta = P(\\text{Fail to reject } H_0 \\mid H_1)$',
      plainEnglish:
        'A **missed detection**—failing to reject $H_0$ even though $H_1$ is truly happening (like a silent smoke alarm during a real fire). Note that $\\alpha$ and $\\beta$ live in different worlds, so $\\alpha + \\beta \\neq 1$!',
      tinyExample: 'Under $H_1: U(0,2)$ with cutoff $0.9$, $\\beta = P_{H_1}(X \\le 0.9) = 0.9/2 = 0.45$.',
    },
    {
      term: 'Statistical Power',
      symbol: '$1 - \\beta = P(\\text{Reject } H_0 \\mid H_1)$',
      plainEnglish:
        'Your test’s sensitivity to catch a real effect when $H_1$ is true. Increasing sample size $n$ shrinks standard error and boosts power without raising your false-alarm rate $\\alpha$.',
      tinyExample: 'If Type II error is $\\beta = 0.45$, then statistical Power is $1 - 0.45 = 0.55$.',
    },
    {
      term: '$z$-Test vs. $t$-Test',
      symbol: '$Z \\sim \\mathcal{N}(0,1) \\;\\text{vs.}\\; T \\sim t_{n-1}$',
      plainEnglish:
        'Both compute $(\\text{Estimate} - \\text{Null}) / \\text{SE}$. Use the $z$-test when true $\\sigma$ is known (or $n$ is large via CLT), and switch to the heavier-tailed $t_{n-1}$ test when $\\sigma$ is unknown in a small Normal sample.',
      tinyExample: 'With $n=9$ splits and unknown $\\sigma$ ($s=6\\%$), testing $\\bar{x}=83\\%$ vs $80\\%$ uses $t = 1.5$ with $\\text{df} = 8$.',
    },
    {
      term: 'Paired $t$-Test',
      symbol: '$T_{\\text{paired}} = \\frac{\\bar{D}}{S_D/\\sqrt{n}} \\sim t_{n-1}$',
      plainEnglish:
        'When two models or treatments are measured on the **exact same subjects or CV folds**, subtract each pair first ($D_i = X_i - Y_i$) to cancel shared fold noise, then run a 1-sample $t$-test on the differences!',
      tinyExample: 'Comparing Model A vs. Model B across the same $10$ CV folds uses a paired $t$-test with $\\text{df} = 9$.',
    },
    {
      term: 'CI–Hypothesis Test Duality',
      symbol: '$\\text{Reject } H_0 \\iff \\mu_0 \\notin [L, U]$',
      plainEnglish:
        'A two-sided level-$\\alpha$ test and a $(1-\\alpha)$ confidence interval always tell the exact same story: $H_0: \\mu = \\mu_0$ is rejected if and only if $\\mu_0$ lies strictly outside the CI.',
      tinyExample: 'If a $95\\%$ CI for $\\mu$ is $[10.4, 15.6]$, then $\\mu_0 = 10$ lies outside, so reject $H_0: \\mu = 10$ at $\\alpha = 0.05$.',
    },
    {
      term: 'Pearson’s $\\chi^2$ Goodness-of-Fit & Independence',
      symbol: '$\\chi^2_{\\text{stat}} = \\sum \\frac{(O_i - E_i)^2}{E_i}$',
      plainEnglish:
        'Measures how far observed category counts $O_i$ stray from expected counts $E_i$ under $H_0$—always dividing by $E_i$ (never $O_i$!). Goodness-of-fit has $\\text{df} = k - 1 - m$ ($m$ estimated parameters) and an $r \\times c$ table has $\\text{df} = (r-1)(c-1)$.',
      tinyExample: 'Observed $[30,25,25,20]$ vs expected $25$ each gives $\\chi^2 = \\frac{25+0+0+25}{25} = 2.0$ with $\\text{df} = 3$.',
    },
  ],
  generatorId: 'chi2-t-stat-gen',
  concepts: [
    {
      id: 'm5-c2-1',
      title: 'Confidence Intervals: Interval Estimation, Width Scaling & Frequentist Meaning',
      subtitle: 'Building an interval that traps the fixed unknown parameter and knowing what 95% really means',
      priority: 'sleeping-giant',
      buildsOn: 'Ch. 1 Pivotal Quantities $\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}$ and $\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}$',
      whyStudy:
        'Reporting a single point estimate like *"Our model achieved $84\\%$ accuracy"* hides a critical question: was that measured on $10$ test samples (wildly noisy!) or $10{,}000$ test samples (rock solid!)? A **Confidence Interval (CI)** attaches an exact uncertainty bracket around your sample estimate ($\\bar{x} \\pm \\text{Margin of Error}$), tells you how many samples $n$ an A/B test needs to achieve a desired precision, and sits in exact one-to-one duality with two-sided hypothesis tests!',
      groundRules: [
        '**The Interval Is Random, NOT the True Parameter $\\mu$:** In frequentist statistics, $\\mu$ is a fixed unknown constant (never hopping around!). Before sampling, the random net $[\\bar{X} - \\text{ME}, \\bar{X} + \\text{ME}]$ has probability $1 - \\alpha$ of landing over $\\mu$. Once numbers are plugged in (e.g., $[49.02, 50.98]$), $\\mu$ is either inside ($1$) or outside ($0$) — the $95\\%$ is the **long-run success rate of the procedure**!',
        '**Higher Confidence Means a WIDER Net (Precision vs. Certainty Tradeoff):** Increasing confidence from $95\\%$ ($z_{0.025} = 1.96$) to $99\\%$ ($z_{0.005} = 2.576$) shrinks $\\alpha$ (significance tail area) and *increases* the critical multiplier, making the interval **wider**, never narrower!',
        '**Width Shrinks With $1/\\sqrt{n}$ (The $4\\times$ Rule):** Because $\\text{Width} = 2 \\cdot z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$, cutting the interval width by a factor of $k$ ALWAYS requires **$k^2$ times as many samples** (halving width requires $4\\times n$; quartering width requires $16\\times n$)!',
        '**Know When to Pick $z$ vs. $t$:** Use $z_{\\alpha/2}$ when true $\\sigma$ is known (or $n$ is large via CLT); switch to the wider $t_{\\alpha/2, n-1}$ whenever $\\sigma$ is unknown and replaced by $S$ on a small Normal sample.',
      ],
      toyExample: {
        title: 'Measuring Bolt Lengths With 16 Samples',
        scenario:
          'A factory machine cuts bolts with unknown true mean $\\mu$ and known standard deviation $\\sigma = 2\\text{ mm}$. You measure $n = 16$ bolts and get $\\bar{x} = 50\\text{ mm}$. How do you build a $95\\%$ confidence interval around $50\\text{ mm}$?',
        walkthroughSteps: [
          '1. Compute the standard error of $\\bar{X}$: $\\text{SE} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{2}{\\sqrt{16}} = 0.5\\text{ mm}$.',
          '2. From $\\mathcal{N}(0,1)$, $95\\%$ of draws lie within $\\pm 1.96$ standard deviations ($z_{0.025} = 1.96$).',
          '3. Margin of Error $\\text{ME} = 1.96 \\times 0.5 = 0.98\\text{ mm}$.',
          '4. The $95\\%$ CI is $50 \\pm 0.98 = [49.02, 50.98]$.',
        ],
        ahaMoment:
          'Hold onto this subtle frequentist distinction: before you draw your sample, the random interval $\\bar{X} \\pm 0.98$ has a $95\\%$ chance of landing over the fixed number $\\mu$. Once you plug in $\\bar{x}=50$, $[49.02, 50.98]$ is fixed too—$\\mu$ is not hopping around, it is our *procedure* that succeeds $95\\%$ of the time across repeated experiments!',
      },
      theoremAndFormula: {
        statement:
          'A $(1-\\alpha)$ Confidence Interval (where $\\alpha$, Greek "alpha", is the total two-tail error rate, e.g., $\\alpha = 0.05$ for $95\\%$ confidence) uses Standard Normal $z_{\\alpha/2}$ (the cutoff leaving area $\\alpha/2$ in the upper tail) when $\\sigma$ is known (Normal population or large $n$ via CLT), and Student’s $t_{\\alpha/2, n-1}$ when $\\sigma$ is unknown in a Normal sample. For a Bernoulli proportion $p$ with large $n$, replace $\\sigma$ by $\\sqrt{\\hat{p}(1-\\hat{p})}$ (or worst-case $0.5$ when planning minimum sample size $n$).',
        formulaLatex:
          '\\bar{X} \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}} \\quad (\\sigma\\text{ known}), \\qquad \\bar{X} \\pm t_{\\alpha/2,\\,n-1}\\frac{S}{\\sqrt{n}} \\quad (\\sigma\\text{ unknown}), \\qquad n \\ge \\left(\\frac{z_{\\alpha/2}}{2E}\\right)^2',
        plainEnglishDecoding:
          'Unpack $z_{\\alpha/2}$ cleanly: a $95\\%$ CI leaves $\\alpha = 5\\%$ total outside, split symmetrically into $\\alpha/2 = 2.5\\% = 0.025$ in EACH tail — so $z_{0.025} = 1.96$. Keep three two-sided Normal critical numbers right at your fingertips: $90\\% \\to 1.645$, $95\\% \\to 1.96$, and $99\\% \\to 2.576$. Demanding higher confidence forces you to cast a **wider** net (larger $z$). And because margin of error shrinks as $1/\\sqrt{n}$, halving your CI width always costs **$4\\times$ as many samples**!',
        workedMiniExamples: [
          {
            prompt:
              'A $95\\%$ CI for $\\mu$ from $n=25$ samples has width $8$. Keeping $\\sigma$ and confidence level fixed, what sample size $n$ reduces the width to $2$?',
            solution:
              'Width $\\propto 1/\\sqrt{n}$. Reducing width by a factor of $4$ ($8 \\to 2$) requires increasing $n$ by $4^2 = 16\\times$: $n = 25 \\times 16 = 400$.',
          },
          {
            prompt:
              'What minimum sample size $n$ guarantees a $95\\%$ CI ($z_{0.025} = 1.96$) for an unknown proportion $p$ has margin of error at most $E = 0.049$?',
            solution:
              'Worst-case $p(1-p) \\le 1/4$ (at $p=0.5$). Using $n \\ge \\left(\\frac{1.96}{2 \\times 0.049}\\right)^2 = (20)^2 = 400$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'After observing the $95\\%$ CI $[49.02, 50.98]$, there is a $95\\%$ probability that $\\mu \\in [49.02, 50.98]$.',
          reality:
            'False in frequentist statistics! $\\mu$ is a fixed deterministic constant, not a random variable. The $95\\%$ refers to the long-run coverage frequency of the random interval across repeated samples.',
          counterExample: 'If true $\\mu = 51.2$, the probability that $51.2 \\in [49.02, 50.98]$ is $0$, not $0.95$.',
        },
        {
          myth: 'Increasing confidence from $95\\%$ to $99\\%$ makes the interval narrower and more precise.',
          reality:
            'Opposite! To be $99\\%$ sure of catching $\\mu$, you must cast a **wider** net ($z_{0.005} = 2.576 > z_{0.025} = 1.96$).',
          counterExample: 'For $\\text{SE} = 1$: $95\\%$ width is $3.92$, while $99\\%$ width is $5.152 > 3.92$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Model Accuracy Error Bars & A/B Sample Sizing',
          whyItMatters:
            'Determines how many test users ($n$) an online A/B test needs before shipping a new recommender, and puts error bars around validation accuracy.',
        },
      ],
    },
    {
      id: 'm5-c2-2',
      title: 'Hypothesis Testing, p-value, Type I (α), Type II (β) & Power',
      subtitle: 'Separating P(data | H₀) from P(H₀ | data) and balancing false alarms vs misses',
      priority: 'sleeping-giant',
      buildsOn: 'Conditional Probability, Bayes’ Theorem & Sampling Distributions',
      whyStudy:
        'Suppose your new ML recommendation model beats the baseline by $+1.5\\%$ in a live A/B test, or a coin lands Heads $9$ times out of $10$. Did you discover a **real effect**, or did you just get lucky with random noise? **Hypothesis Testing** turns that judgment call into a disciplined courtroom trial: assume the default claim $H_0$ ("no real effect / coin is fair") is innocent until proven guilty, measure how surprising the observed data would be under $H_0$ (the **p-value**), and explicitly control your false-alarm rate ($\\alpha$) vs. missed-discovery rate ($\\beta$). Crucially, understanding why **p-value is NEVER $P(H_0 \\text{ is true})$** immunizes you against the single most famous Statistics trap in GATE DA!',
      groundRules: [
        '**p-value Conditions on $H_0$, NEVER on the Data ($\\text{p-value} \\neq P(H_0 \\mid \\text{data})$):** A p-value is computed *assuming $H_0$ is $100\\%$ true*: it equals $P(\\text{data at least this extreme} \\mid H_0)$. Flipping that arrow to get $P(H_0 \\mid \\text{data})$ would require Bayes’ Theorem and a prior $P(H_0)$, which frequentist tests never use!',
        '**$\\alpha$ and $\\beta$ Live in Two Different Worlds (So $\\alpha + \\beta \\neq 1$!):** Type I error $\\alpha = P(\\text{Reject } H_0 \\mid H_0 \\text{ true})$ is a false alarm calculated in the $H_0$ world. Type II error $\\beta = P(\\text{Fail to reject } H_0 \\mid H_1 \\text{ true})$ is a missed detection calculated in the $H_1$ world. Because they condition on different hypotheses, $\\alpha + \\beta$ does NOT have to equal $1$!',
        '**Reject Rule Is Always "$p\\text{-value} \\le \\alpha$" (Smaller $p$ = Stronger Evidence Against $H_0$):** The significance level $\\alpha$ is your pre-chosen false-alarm budget (e.g., $0.05$). If your observed data is rarer than $\\alpha$ under $H_0$ ($p \\le \\alpha$), you **reject $H_0$**; otherwise you **fail to reject $H_0$** (which NEVER proves $H_0$ is true — only that evidence was insufficient!).',
        '**Tightening $\\alpha$ Raises $\\beta$ Unless You Increase Sample Size $n$:** Making it harder to sound a false alarm (shrinking $\\alpha$ from $0.05$ to $0.01$) simultaneously makes it easier to miss a real signal (raising $\\beta$ and lowering Power $= 1 - \\beta$). The ONLY way to shrink *both* $\\alpha$ and $\\beta$ at once is collecting more data ($n \\uparrow$)!',
      ],
      sandboxId: 'hypothesis-test-lab',
      toyExample: {
        title: 'Testing a Suspicious Coin in 10 Tosses',
        scenario:
          'You suspect a coin is biased toward Heads. Set $H_0: p = 0.5$ (fair) against $H_1: p > 0.5$ (biased). You toss it $n = 10$ times and observe $9$ Heads. Is that enough evidence at $\\alpha = 0.05$?',
        walkthroughSteps: [
          '1. Assume $H_0$ is true ($p = 0.5$, innocent until proven guilty).',
          '2. Compute the **p-value**: probability of seeing $9$ or more Heads (as or more extreme toward $H_1$) under $H_0$: $P(X \\ge 9 \\mid p=0.5) = \\frac{\\binom{10}{9} + \\binom{10}{10}}{2^{10}} = \\frac{11}{1024} \\approx 0.0107$.',
          '3. Compare $p$-value to significance level $\\alpha = 0.05$: since $0.0107 \\le 0.05$, we **reject $H_0$**!',
          '4. Note: $0.0107$ is $P(\\ge 9\\text{ Heads} \\mid H_0)$, NOT the probability that the coin is fair!',
        ],
        ahaMoment:
          'Read a small p-value like a careful scientist: “If $H_0$ were true, seeing data this extreme would be awfully surprising—so $H_0$ looks hard to defend.” It NEVER tells you the probability that $H_0$ itself is true without a Bayesian prior!',
      },
      theoremAndFormula: {
        statement:
          'In hypothesis testing between null $H_0$ (default status quo) and alternative $H_1$ (the claim you want to detect): **Type I error** ($\\alpha$, Greek "alpha") rejects a true $H_0$; **Type II error** ($\\beta$, Greek "beta") fails to reject a false $H_0$; **Power** $= 1 - \\beta$ correctly rejects a false $H_0$. The **p-value** is the smallest significance level $\\alpha$ at which the observed data would lead to rejecting $H_0$.',
        formulaLatex:
          '\\alpha = P(\\text{Reject } H_0 \\mid H_0), \\quad \\beta = P(\\text{Fail to reject } H_0 \\mid H_1), \\quad \\text{Power} = 1 - \\beta, \\quad \\text{Reject } H_0 \\iff p\\text{-value} \\le \\alpha',
        plainEnglishDecoding:
          'Picture a home smoke alarm: $H_0 =$ no fire, $H_1 =$ fire. Type I error ($\\alpha$) is a **false alarm** (blaring when there is no fire), Type II error ($\\beta$) is a **missed fire** (staying silent during a real fire), and Power ($1-\\beta$) is how reliably the alarm catches real fires. Tightening $\\alpha$ makes the alarm less trigger-happy—which raises $\\beta$ unless you also collect more data $n$!',
        workedMiniExamples: [
          {
            prompt:
              'Using one sample $X$, test $H_0: X \\sim \\text{Uniform}(0,1)$ vs $H_1: X \\sim \\text{Uniform}(0,2)$ by rejecting $H_0$ if $X > 0.9$. Find $\\alpha$, $\\beta$, and Power.',
            solution:
              '$\\alpha = P_{H_0}(X > 0.9) = 1 - 0.9 = 0.10$. $\\beta = P_{H_1}(X \\le 0.9) = \\frac{0.9 - 0}{2 - 0} = 0.45$. Power $= 1 - \\beta = 0.55$. Notice $\\alpha + \\beta = 0.55 \\neq 1$!',
          },
          {
            prompt:
              'A two-sided $z$-test yields $z_{\\text{obs}} = 1.96$ (where $P(Z \\ge 1.96) = 0.025$). What is the p-value, and do you reject $H_0$ at $\\alpha=0.05$ and $\\alpha=0.01$?',
            solution:
              'Two-sided p-value $= 2 \\times P(Z \\ge |1.96|) = 2(0.025) = 0.05$. At $\\alpha=0.05$, $p \\le 0.05$ so reject $H_0$; at $\\alpha=0.01$, $0.05 > 0.01$ so fail to reject $H_0$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $p\\text{-value} = 0.03$, then the probability that $H_0$ is true given the data is $3\\%$.',
          reality:
            '**THE #1 GATE MSQ TRAP!** The p-value is $P(\\text{stat} \\ge \\text{obs} \\mid H_0)$, NOT $P(H_0 \\mid \\text{data})$ (that would require Bayes’ rule and a prior $P(H_0)$).',
          counterExample: 'If $H_0$ is certainly true ($P(H_0)=1$), a test at $\\alpha=0.05$ still produces $p \\le 0.03$ on $3\\%$ of experiments even though $P(H_0 \\mid \\text{data}) = 1$!',
        },
        {
          myth: 'For any test, $\\alpha + \\beta = 1$, and failing to reject $H_0$ proves $H_0$ is true.',
          reality:
            'Both false! $\\alpha$ is conditioned on $H_0$ and $\\beta$ on $H_1$—they are conditional probabilities on two different worlds and need not sum to $1$. Failing to reject $H_0$ only means insufficient evidence against $H_0$ (e.g., $n$ too small).',
          counterExample: 'In the Uniform$(0,1)$ vs $(0,2)$ example above, $\\alpha = 0.10$ and $\\beta = 0.45$, so $\\alpha + \\beta = 0.55 \\neq 1$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'ROC Curves (FPR vs TPR) & Production A/B Testing',
          whyItMatters:
            'In binary classification, False Positive Rate is $\\alpha$, False Negative Rate is $\\beta$, and Recall (TPR) is statistical Power $1 - \\beta$.',
        },
      ],
    },
    {
      id: 'm5-c2-3',
      title: 'z-Test & t-Test (1-Sample, Paired & 2-Sample) and CI Duality',
      subtitle: 'Picking the exact test statistic when σ is known vs unknown and paired vs independent',
      priority: 'sleeping-giant',
      buildsOn: 'Ch. 1 $\\mathcal{N}(0,1)$ and Student-$t_{n-1}$ distributions',
      whyStudy:
        'Suppose you want to test whether your new neural network truly beats an $80\\%$ baseline across $9$ cross-validation folds, or whether Drug A outperforms Drug B on the *same* patients before and after treatment. Choosing the wrong test statistic — using $z$ instead of $t$ when $\\sigma$ is unknown, or running an independent 2-sample test on **paired** CV folds — completely distorts your p-value and leads to false conclusions! Mastering the unified **Signal-over-Noise** template for $z$-tests, $t$-tests, paired $t$-tests, and **CI Duality** lets you pick the exact right test in 5 seconds every time.',
      groundRules: [
        '**Every $z$-Test and $t$-Test Is Simply $\\frac{\\text{Observed} - \\text{Null Value}}{\\text{Standard Error}}$:** The numerator measures how far your sample landed from $H_0$ (the signal), and the denominator scales that gap by the standard error of your estimator (the noise) — telling you how many standard errors away from $H_0$ you landed!',
        '**Known $\\sigma$ (or Large $n$) $\\to z$-Test; Unknown $\\sigma$ (Small Normal Sample) $\\to t_{n-1}$-Test:** Whenever you replace true $\\sigma$ by sample $S$ on a small Normal sample, the extra randomness in $S$ forces you to use Student-$t_{n-1}$ critical values instead of $\\mathcal{N}(0, 1)$.',
        '**Same Subjects / Same CV Folds $\\implies$ ALWAYS Pair First ($D_i = X_i - Y_i$):** Two models evaluated on the exact same folds are positively correlated! Taking fold-wise differences $D_i = X_i - Y_i$ cancels out shared fold difficulty and turns the problem into a cleaner 1-sample $t$-test on $\\bar{D}$ with $\\text{df} = n - 1$ (NEVER $2n - 2$)!',
        '**Two-Sided Test $\\iff$ Confidence Interval Duality:** At significance level $\\alpha$, a two-sided test rejects $H_0: \\mu = \\mu_0$ if and only if $\\mu_0$ falls **outside** the $(1 - \\alpha)$ Confidence Interval! Knowing the CI hands you the hypothesis test verdict immediately with zero extra algebra.',
      ],
      toyExample: {
        title: 'Testing Whether a New Model Beats an 80% Baseline',
        scenario:
          'You evaluate a new classifier on $n=9$ independent validation splits, getting mean accuracy $\\bar{x} = 83\\%$ and sample SD $s = 6\\%$ (true $\\sigma$ unknown). Does it significantly beat $H_0: \\mu = 80\\%$ ($H_1: \\mu > 80\\%$) at $\\alpha = 0.05$ ($t_{0.05, 8} = 1.86$)?',
        walkthroughSteps: [
          '1. Since $\\sigma$ is unknown and $n=9$ is small, use a **1-sample $t$-test** with $\\text{df} = 9 - 1 = 8$.',
          '2. Compute standard error: $\\text{SE} = \\frac{s}{\\sqrt{n}} = \\frac{6}{\\sqrt{9}} = 2\\%$.',
          '3. Compute test statistic: $t = \\frac{83 - 80}{2} = 1.5$.',
          '4. Compare to critical value $1.86$: since $1.5 < 1.86$, we fail to reject $H_0$—a $3\\%$ gain over 9 splits isn’t decisive here!',
        ],
        ahaMoment:
          'Notice how unified these tests really are: every $z$-test and $t$-test follows the exact same template $\\frac{\\text{Estimate} - \\text{Null Value}}{\\text{Standard Error}}$—you only swap the denominator ($\\sigma$ vs. $S$) and reference curve ($\\mathcal{N}(0,1)$ vs. $t_{n-1}$)!',
      },
      theoremAndFormula: {
        statement:
          'Use the **$z$-test** when $\\sigma$ is known (or $n$ is large via CLT) and the **$t$-test** when $\\sigma$ is unknown in a Normal sample (with null value $\\mu_0$ and degrees of freedom $\\text{df} = n - 1$). For before/after or same-fold comparisons $(X_i, Y_i)$, always take differences $D_i = X_i - Y_i$ (with sample mean $\\bar{D}$ and SD $S_D$) and run a **paired $t$-test**. Furthermore, a two-sided level-$\\alpha$ test rejects $H_0: \\mu = \\mu_0$ if and only if $\\mu_0$ falls outside the $(1-\\alpha)$ CI.',
        formulaLatex:
          'Z = \\frac{\\bar{X}-\\mu_0}{\\sigma/\\sqrt{n}} \\sim \\mathcal{N}(0,1), \\qquad T = \\frac{\\bar{X}-\\mu_0}{S/\\sqrt{n}} \\sim t_{n-1}, \\qquad T_{\\text{paired}} = \\frac{\\bar{D}-0}{S_D/\\sqrt{n}} \\sim t_{n-1}',
        plainEnglishDecoding:
          'When comparing two **independent** large samples, remember that variances still **add** even when you subtract the means: $Z = \\frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\sigma_1^2/n_1 + \\sigma_2^2/n_2}}$. On the other hand, if both scores come from the same subjects or the same CV folds, pair them up as $D_i = X_i - Y_i$ first so shared fold noise cancels right out!',
        workedMiniExamples: [
          {
            prompt:
              'Test $H_0: \\mu = 100$ vs $H_1: \\mu \\neq 100$ with known $\\sigma = 15$, $n = 25$, and $\\bar{x} = 107.5$ at $\\alpha = 0.05$.',
            solution:
              '$Z = \\frac{107.5 - 100}{15 / \\sqrt{25}} = \\frac{7.5}{3} = 2.5$. Since $|2.5| > z_{0.025} = 1.96$, reject $H_0$. Equivalently, the $95\\%$ CI is $107.5 \\pm 1.96(3) = [101.62, 113.38]$, which excludes $100$!',
          },
          {
            prompt:
              'On $4$ identical CV folds, Model A beats Model B by differences $D = \\{2, 4, 2, 4\\}$. Compute the paired $t$-statistic for $H_0: \\mu_D = 0$.',
            solution:
              '$\\bar{d} = 3$, $s_D^2 = \\frac{(2-3)^2+(4-3)^2+(2-3)^2+(4-3)^2}{4-1} = \\frac{4}{3}$, so $s_D = \\frac{2}{\\sqrt{3}}$. Thus $t = \\frac{3}{(2/\\sqrt{3})/\\sqrt{4}} = 3\\sqrt{3} \\approx 5.196$ with $\\text{df} = 3$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'When comparing two ML models evaluated on the same $k$ cross-validation folds, you should run an independent 2-sample $t$-test with $\\text{df} = 2k - 2$.',
          reality:
            'False! Both models were tested on the **same folds**, so their fold accuracies are positively correlated. You must take fold-wise differences $D_i = A_i - B_i$ and run a **paired $t$-test** with $\\text{df} = k - 1$.',
          counterExample: 'If Model A always beats Model B by $+1\\%$ on every fold while fold difficulties vary wildly ($60\\%$ to $95\\%$), an independent 2-sample test sees huge noise and fails to detect the consistent $+1\\%$ win!',
        },
        {
          myth: 'For a 2-sample test of $\\bar{X}_1 - \\bar{X}_2$, the standard error is $\\frac{\\sigma_1}{\\sqrt{n_1}} - \\frac{\\sigma_2}{\\sqrt{n_2}}$.',
          reality:
            'Variances of independent random variables **ADD**, even when subtracting $\\bar{X}_1 - \\bar{X}_2$! The SE is $\\sqrt{\\sigma_1^2/n_1 + \\sigma_2^2/n_2}$.',
          counterExample: 'If $\\sigma_1=\\sigma_2$ and $n_1=n_2$, subtracting SEs would give $0$—nonsense!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Statistically Valid Model Selection in k-Fold CV',
          whyItMatters:
            'Paired $t$-tests on fold-wise accuracy differences prevent selecting a noisy hyperparameter winner over a baseline by pure luck.',
        },
      ],
    },
    {
      id: 'm5-c2-4',
      title: 'Pearson’s χ² Goodness-of-Fit & Independence Tests',
      subtitle: 'Checking whether observed category counts match a null distribution or are independent',
      priority: 'sleeping-giant',
      buildsOn: 'Ch. 1 $\\chi^2$ Distribution & Degrees of Freedom',
      whyStudy:
        '$z$-tests and $t$-tests only test *numerical averages* ($\\mu$). What if your data is **categorical counts** — checking whether a $6$-sided die is fair across $60$ rolls, whether live website user counts drifted away from training proportions, or whether a categorical feature like `City` is independent of `Churn` in an $r \\times c$ table (the exact score inside scikit-learn’s `SelectKBest(chi2)`)? **Pearson’s $\\chi^2$ Test** collapses all $k$ category mismatches $(O_i - E_i)$ into a single $\\chi^2$ discrepancy score so you can test an entire categorical distribution at once!',
      groundRules: [
        '**Always Divide by Expected Count $E_i$ (Never Observed $O_i$!):** Each cell contributes $\\frac{(O_i - E_i)^2}{E_i}$ — why? Under $H_0$, counts behave like Poisson/Binomial variables whose variance scales with $E_i$, so dividing by $E_i$ turns $\\frac{O_i - E_i}{\\sqrt{E_i}}$ into a unitless Standard Normal whose square contributes cleanly to $\\chi^2$!',
        '**Pearson’s $\\chi^2$ Test Is Strictly Right-Tailed:** Because every term $(O_i - E_i)^2 / E_i \\ge 0$ is squared, $\\chi^2_{\\text{stat}} = 0$ means a *perfect match* to $H_0$, while **large** positive values mean huge mismatch — so you ONLY reject $H_0$ in the upper (right) tail ($\\chi^2_{\\text{stat}} > \\chi^2_{\\alpha, \\text{df}}$)!',
        '**Track Every Constraint in Degrees of Freedom ($\\text{df} = k - 1 - m$):** Out of $k$ bins, the total count $\\sum O_i = N$ uses up $1$ degree of freedom ($k - 1$). Every extra parameter ($m$) estimated from the sample (like $\\hat{\\lambda}$ for Poisson or $\\hat{\\mu}, \\hat{\\sigma}$ for Normal) costs $1$ more degree of freedom!',
        '**$r \\times c$ Independence Table Formula:** Under row-column independence, expected cell count is $E_{ij} = \\frac{(\\text{Row } i \\text{ total})(\\text{Col } j \\text{ total})}{N}$, and fixing all row and column margins leaves exactly $\\text{df} = (r - 1)(c - 1)$ free cells!',
      ],
      toyExample: {
        title: 'Testing If a 6-Sided Die Is Fair in 60 Rolls',
        scenario:
          'You roll a die $N = 60$ times and record counts $O = [15, 8, 9, 11, 7, 10]$. Under $H_0$ (fair die, $p_i = 1/6$), every face has expected count $E_i = 60 \\times \\frac{1}{6} = 10$. How do we measure total discrepancy?',
        walkthroughSteps: [
          '1. Compute squared deviation divided by expected count for each face: $\\frac{(15-10)^2}{10} + \\frac{(8-10)^2}{10} + \\frac{(9-10)^2}{10} + \\frac{(11-10)^2}{10} + \\frac{(7-10)^2}{10} + \\frac{(10-10)^2}{10}$.',
          '2. Sum them: $\\frac{25 + 4 + 1 + 1 + 9 + 0}{10} = \\frac{40}{10} = 4.0$.',
          '3. Degrees of freedom: there are $k=6$ faces, and their counts must sum to $60$ ($1$ constraint), so $\\text{df} = 6 - 1 = 5$.',
          '4. Since $\\chi^2_{\\text{stat}} = 4.0 < \\chi^2_{0.05, 5} = 11.07$, we do NOT reject fairness!',
        ],
        ahaMoment:
          'See why the chi-square distribution shows up naturally here? Under $H_0$, each scaled discrepancy $\\frac{O_i - E_i}{\\sqrt{E_i}}$ behaves like a Standard Normal, and the total-count constraint $\\sum(O_i - E_i)=0$ trims the degrees of freedom from $k$ down to $k - 1$ (minus $m$ for any extra parameters you estimated from the sample)!',
      },
      theoremAndFormula: {
        statement:
          'For $N$ multinomial trials across $k$ categories with observed counts $O_i$ and expected counts $E_i = N p_i$ (large-sample rule of thumb: every $E_i \\ge 5$), Pearson’s goodness-of-fit statistic converges in distribution ($\\xrightarrow{d}$) to $\\chi^2_{k - 1 - m}$ under $H_0$, where $m$ is the number of free parameters estimated from the sample. For an $r \\times c$ contingency table testing row/column independence, $E_{ij} = \\frac{R_i C_j}{N}$ (row total $\\times$ col total $\\div N$) and $\\text{df} = (r-1)(c-1)$.',
        formulaLatex:
          '\\chi^2_{\\text{stat}} = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i} \\xrightarrow{d} \\chi^2_{k - 1 - m}, \\qquad \\text{Independence table: } \\text{df} = (r-1)(c-1)',
        plainEnglishDecoding:
          'Three quick checks will keep you error-free every time: (1) always put **$E_i$ (expected)** in the denominator, never $O_i$; (2) because deviations are squared, Pearson’s $\\chi^2$ test is strictly **right-tailed** (only large $\\chi^2_{\\text{stat}}$ rejects $H_0$); and (3) subtract $m$ from $k-1$ whenever you estimated parameters like $\\hat{\\lambda}$ or $(\\hat{\\mu}, \\hat{\\sigma})$ from the data!',
        workedMiniExamples: [
          {
            prompt:
              'A 4-sided die is rolled $100$ times, yielding counts $[30, 25, 25, 20]$. Compute Pearson’s $\\chi^2_{\\text{stat}}$ for fairness ($p_i = 0.25$) and state the degrees of freedom.',
            solution:
              'Expected count $E_i = 100 \\times 0.25 = 25$ for each face. $\\chi^2_{\\text{stat}} = \\frac{(30-25)^2 + (25-25)^2 + (25-25)^2 + (20-25)^2}{25} = \\frac{25+0+0+25}{25} = 2.0$, with $\\text{df} = 4 - 1 - 0 = 3$.',
          },
          {
            prompt:
              'You group counts into $6$ bins and test goodness-of-fit to a $\\text{Poisson}(\\lambda)$ model where $\\hat{\\lambda} = \\bar{x}$ was estimated from the data. What is $\\text{df}$?',
            solution: '$k = 6$ bins, $1$ sum constraint, and $m = 1$ estimated parameter ($\\hat{\\lambda}$), giving $\\text{df} = 6 - 1 - 1 = 4$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'A $\\chi^2$ goodness-of-fit test on $k$ bins always has $\\text{df} = k - 1$.',
          reality:
            'Only if the null probabilities $p_i$ are **completely specified** before seeing the data! Every parameter estimated from the sample (e.g., $\\hat{\\lambda}$ for Poisson, or $\\hat{\\mu}, \\hat{\\sigma}$ for Normal) costs an extra degree of freedom: $\\text{df} = k - 1 - m$.',
          counterExample: 'Testing fit to $\\mathcal{N}(\\mu, \\sigma^2)$ with unknown $\\mu, \\sigma$ across $k=8$ bins gives $\\text{df} = 8 - 1 - 2 = 5$, not $7$.',
        },
        {
          myth: 'For a goodness-of-fit test at $\\alpha = 0.05$, you reject $H_0$ both when $\\chi^2_{\\text{stat}}$ is very large and when it is very close to $0$.',
          reality:
            'Standard $\\chi^2$ goodness-of-fit is **one-sided (right-tailed)**: we only reject $H_0$ when $\\chi^2_{\\text{stat}} > \\chi^2_{\\alpha, \\text{df}}$ (large discrepancy between $O_i$ and $E_i$).',
          counterExample: 'When $O_i = E_i$ for all $i$, $\\chi^2_{\\text{stat}} = 0$ indicates a perfect match to $H_0$, never a reason to reject $H_0$!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Categorical Feature Selection (chi2) & Data Drift Detection',
          whyItMatters:
            'Scikit-learn’s `SelectKBest(chi2)` scores categorical features against target labels via $\\chi^2$ independence, and ML pipelines trigger retraining when live feature counts fail $\\chi^2$ goodness-of-fit against training distributions.',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm5-c2-p1',
      title: 'Computing Exact α, β, and Power on Non-Normal Supports',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2027 Sleeping Giant'],
      problemStatement:
        'Based on a single observation $X$, we test $H_0: X \\sim \\text{Exp}(1)$ vs $H_1: X \\sim \\text{Exp}(0.5)$. We reject $H_0$ if $X > c$. Find $c$ for significance level $\\alpha = 0.05$, and then compute the Type II error $\\beta$ and Power at that $c$.',
      triggerCue:
        'Two concrete competing distributions ($H_0$ vs $H_1$) plus an explicit rejection threshold (“reject $H_0$ if $X > c$”).',
      bruteForceTrap:
        'Reflexively reaching for $z = \\frac{\\bar{x} - \\mu}{\\sigma/\\sqrt{n}}$! Here $n=1$ and the variable is Exponential, NOT Normal—CLT does not apply.',
      mentalShift:
        'Go straight back to the definitions of $\\alpha$ and $\\beta$ as probabilities under two separate PDFs: solve $P_{H_0}(\\text{Reject}) = \\alpha$ first to pin down $c$, then switch to the $H_1$ curve and compute $P_{H_1}(\\text{Fail to reject})$.',
      steps: [
        {
          label: 'Step 1: Solve for threshold $c$ using $H_0$',
          detail:
            'Under $H_0: X \\sim \\text{Exp}(1)$, $P_{H_0}(X > c) = e^{-c}$. Setting $e^{-c} = 0.05 = \\frac{1}{20}$ gives $c = \\ln 20$.',
        },
        {
          label: 'Step 2: Compute $\\beta$ using $H_1$ on the complement region $X \\le c$',
          detail:
            'Under $H_1: X \\sim \\text{Exp}(0.5)$, $\\beta = P_{H_1}(X \\le \\ln 20) = 1 - e^{-0.5 \\ln 20} = 1 - \\frac{1}{\\sqrt{20}} \\approx 0.7764$.',
        },
        {
          label: 'Step 3: Read off Power $= 1 - \\beta$',
          detail:
            'Power $= P_{H_1}(X > \\ln 20) = \\frac{1}{\\sqrt{20}} \\approx 0.2236$. Notice $\\alpha + \\beta \\approx 0.8264 \\neq 1$.',
        },
      ],
      lockInTakeaway:
        'Whenever $H_0$ and $H_1$ specify explicit distributions and a cutoff, ignore $z$-tables: integrate $H_0$ on the rejection region for $\\alpha$, and integrate $H_1$ on the non-rejection region for $\\beta$.',
    },
    {
      id: 'm5-c2-p2',
      title: 'Using CI–Test Duality Without Raw Data',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2027 Sleeping Giant'],
      problemStatement:
        'From a large sample, a two-sided $95\\%$ confidence interval for $\\mu$ is $[10.4, 15.6]$. Can we reject $H_0: \\mu = 10$ against $H_1: \\mu \\neq 10$ at $\\alpha = 0.05$? What about at $\\alpha = 0.01$ (given $z_{0.025}=1.96, z_{0.005}=2.576$)?',
      triggerCue:
        'A question hands you a confidence interval $[L, U]$ and asks whether $H_0: \\mu = \\mu_0$ is rejected at $\\alpha$ or another $\\alpha\'$, without giving $\\bar{x}, s, n$.',
      bruteForceTrap:
        'Giving up because $\\bar{x}$ and $\\text{SE}$ aren’t listed separately.',
      mentalShift:
        'Every symmetric CI encodes BOTH $\\bar{x}$ (its midpoint!) and $\\text{SE}$ (its half-width divided by $z_{\\alpha/2}$!). Also, at the same $\\alpha$, two-sided rejection is simply $\\mu_0 \\notin [L, U]$.',
      steps: [
        {
          label: 'Step 1: Decide $\\alpha = 0.05$ instantaneously by duality',
          detail:
            'Since $\\mu_0 = 10 \\notin [10.4, 15.6]$, we **reject** $H_0: \\mu = 10$ at $\\alpha = 0.05$ ($p < 0.05$).',
        },
        {
          label: 'Step 2: Recover midpoint $\\bar{x}$ and $\\text{SE}$ for $\\alpha = 0.01$',
          detail:
            'Midpoint $\\bar{x} = \\frac{10.4 + 15.6}{2} = 13.0$; $95\\%$ margin $= 15.6 - 13.0 = 2.6 = 1.96\\,\\text{SE} \\implies \\text{SE} \\approx 1.3265$.',
        },
        {
          label: 'Step 3: Check $|z_{\\text{obs}}|$ against $z_{0.005} = 2.576$',
          detail:
            '$|z_{\\text{obs}}| = \\frac{|13.0 - 10|}{1.3265} \\approx 2.262 < 2.576$ (and the $99\\%$ CI is $13 \\pm 2.576(1.3265) = [9.58, 16.42]$, which includes $10$). Thus we **fail to reject** at $\\alpha = 0.01$!',
        },
      ],
      lockInTakeaway:
        'From any symmetric CI $[L, U]$, $\\bar{x} = (L+U)/2$ and $\\text{ME} = (U-L)/2$—so you can reconstruct the exact $z$-statistic or rescale to any other $\\alpha$ in 15 seconds.',
    },
  ],
  arsenalCards: [
    {
      id: 'm5-c2-a1',
      badge: 'Confidence Intervals',
      whenYouSpot: 'Constructing a $(1-\\alpha)$ CI, width scaling, or minimum sample size $n$ for margin of error $E$',
      directWeaponLatex:
        '\\bar{X} \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}} \\quad|\\quad \\bar{X} \\pm t_{\\alpha/2,n-1}\\frac{S}{\\sqrt{n}} \\quad|\\quad n \\ge \\left(\\frac{z_{\\alpha/2}}{2E}\\right)^2',
      instantRule:
        '$90\\%\\to 1.645$, $95\\%\\to 1.96$, $99\\%\\to 2.576$. Cutting CI width by $k\\times$ requires $k^2\\times$ sample size $n$.',
      tenSecondExample:
        '$95\\%$ proportion CI with $E \\le 0.049$: $n \\ge (1.96 / (2\\times 0.049))^2 = 20^2 = 400$.',
      oneFatalTrap:
        'Saying “$95\\%$ probability $\\mu$ lies in $[L, U]$” or thinking higher confidence makes the CI narrower.',
    },
    {
      id: 'm5-c2-a2',
      badge: 'p-value & α/β Errors',
      whenYouSpot: 'p-value interpretation, False Positive ($\\alpha$), False Negative ($\\beta$), Power, or CI–test duality',
      directWeaponLatex:
        'p\\text{-val} = P(\\text{extreme data} \\mid H_0), \\quad \\text{Reject } H_0 \\iff p \\le \\alpha, \\quad \\text{Power} = 1 - \\beta',
      instantRule:
        'Compute $\\alpha$ under $H_0$ (rejection region); compute $\\beta$ under $H_1$ (non-rejection region). Two-sided $p = 2\\cdot(\\text{one-sided } p)$.',
      tenSecondExample:
        '$H_0: U(0,1)$ vs $H_1: U(0,2)$, reject $X > 0.85 \\implies \\alpha = 0.15,\\; \\beta = 0.425$.',
      oneFatalTrap:
        'Believing $p\\text{-value} = P(H_0 \\mid \\text{data})$ or assuming $\\alpha + \\beta = 1$.',
    },
    {
      id: 'm5-c2-a3',
      badge: 'z / t / χ² Tests',
      whenYouSpot: '1-sample, paired, or 2-sample test for means, or observed vs expected category counts $O_i, E_i$',
      directWeaponLatex:
        'T_{\\text{paired}} = \\frac{\\bar{D}}{S_D/\\sqrt{n}} \\sim t_{n-1} \\qquad|\\qquad \\chi^2_{\\text{stat}} = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i} \\sim \\chi^2_{k - 1 - m}',
      instantRule:
        'Same-subject/same-CV-fold pairs $\\implies$ paired $t$-test ($\\text{df}=n-1$). Pearson $\\chi^2$ divides by $E_i$, subtracts $m$ estimated params, and is right-tailed.',
      tenSecondExample:
        'Testing Poisson($\\hat{\\lambda}$) fit across $6$ bins: $\\text{df} = 6 - 1 - 1 = 4$.',
      oneFatalTrap:
        'Using $\\text{df} = k - 1$ when parameters were estimated from the data, or putting $O_i$ in the denominator of $\\chi^2$.',
    },
  ],
  questions: [
    {
      id: 'm5-c2-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'To test $H_0: \\mu = 50$ against $H_1: \\mu > 50$ for a population with known standard deviation $\\sigma = 10$, a random sample of size $n = 25$ yields sample mean $\\bar{x} = 54$. Compute the $z$-test statistic.',
      natAnswer: { min: 2, max: 2, exactDisplay: '2' },
      triggerHint: 'Use $Z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$.',
      intuitiveSolution: [
        'Standard error $\\text{SE} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{10}{\\sqrt{25}} = 2$.',
        'Test statistic $Z = \\frac{54 - 50}{2} = 2$.',
      ],
      directShortcutUsed: '$Z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$',
    },
    {
      id: 'm5-c2-q2',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2',
      marks: 1,
      type: 'NAT',
      stem: 'A 4-sided die is rolled $100$ times, producing observed counts $[30, 25, 25, 20]$ for faces $1, 2, 3, 4$. Compute Pearson’s $\\chi^2$ goodness-of-fit statistic for testing $H_0: p_1 = p_2 = p_3 = p_4 = 0.25$.',
      natAnswer: { min: 2, max: 2, exactDisplay: '2' },
      triggerHint: 'Expected count for each face is $E_i = 100 \\times 0.25 = 25$; sum $\\frac{(O_i - E_i)^2}{E_i}$.',
      intuitiveSolution: [
        'Under $H_0$, $E_i = 25$ for $i=1,2,3,4$.',
        '$\\chi^2_{\\text{stat}} = \\frac{(30-25)^2}{25} + \\frac{(25-25)^2}{25} + \\frac{(25-25)^2}{25} + \\frac{(20-25)^2}{25} = \\frac{25 + 0 + 0 + 25}{25} = 2$.',
      ],
      directShortcutUsed: '$\\chi^2_{\\text{stat}} = \\sum \\frac{(O_i - E_i)^2}{E_i}$',
    },
    {
      id: 'm5-c2-q3',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Sleeping Giant MSQ #1',
      marks: 2,
      type: 'MSQ',
      stem: 'Consider a standard frequentist hypothesis test of $H_0$ vs $H_1$ at significance level $\\alpha$. Which of the following statements is/are ALWAYS true?',
      options: [
        {
          id: 'A',
          text: 'If the observed $p$-value is $0.03$, then the probability that $H_0$ is true given the observed data is $0.03$.',
          whyTrueOrFalse: 'False: $p$-value is $P(\\text{data as or more extreme} \\mid H_0)$, NOT $P(H_0 \\mid \\text{data})$.',
        },
        {
          id: 'B',
          text: 'If $H_0$ is rejected at $\\alpha = 0.01$, then for the same data and alternative it must also be rejected at $\\alpha = 0.05$.',
          whyTrueOrFalse: 'True: rejecting at $\\alpha=0.01$ means $p\\text{-value} \\le 0.01 \\implies p\\text{-value} \\le 0.05$.',
        },
        {
          id: 'C',
          text: 'For a fixed non-null effect size and fixed significance level $\\alpha$, increasing the sample size $n$ increases statistical power ($1 - \\beta$).',
          whyTrueOrFalse: 'True: larger $n$ shrinks $\\text{SE} \\propto 1/\\sqrt{n}$, separating the $H_0$ and $H_1$ sampling distributions and reducing $\\beta$.',
        },
        {
          id: 'D',
          text: 'The Type I error probability $\\alpha$ and Type II error probability $\\beta$ always satisfy $\\alpha + \\beta = 1$.',
          whyTrueOrFalse: 'False: $\\alpha$ is evaluated under $H_0$ and $\\beta$ under $H_1$; they do not sum to $1$.',
        },
      ],
      correctOptions: ['B', 'C'],
      triggerHint: 'Test each option against the conditional definitions $P(\\cdot \\mid H_0)$ vs $P(\\cdot \\mid H_1)$ and the rule $p \\le \\alpha$.',
      intuitiveSolution: [
        'A commits the prosecutor’s fallacy: $p$-value is $P(\\text{extreme stat} \\mid H_0)$, not $P(H_0 \\mid \\text{data})$ (False).',
        'B holds universally: $p \\le 0.01 < 0.05$, so any result significant at $1\\%$ is automatically significant at $5\\%$ (True).',
        'C holds universally: larger $n$ lowers standard error, making real effects easier to detect at fixed $\\alpha$ (True).',
        'D is false: $\\alpha + \\beta$ can be less than $1$ (e.g., $0.05 + 0.20 = 0.25$) or greater than $1$ (False).',
      ],
      directShortcutUsed: 'Reject $\\iff p \\le \\alpha$ & distinction between $P(E\\mid H_0)$ and $P(H_0\\mid E)$',
    },
    {
      id: 'm5-c2-q4',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Sleeping Giant NAT #1',
      marks: 2,
      type: 'NAT',
      stem: 'Based on a single observation $X$, we test $H_0: X \\sim \\text{Uniform}(0, 1)$ against $H_1: X \\sim \\text{Uniform}(0, 2)$. Our decision rule rejects $H_0$ if and only if $X > 0.85$. What is the exact value of $\\alpha + \\beta$ (sum of Type I and Type II error probabilities)?',
      natAnswer: { min: 0.57, max: 0.58, exactDisplay: '0.575' },
      triggerHint: 'Compute $\\alpha = P_{H_0}(X > 0.85)$ and $\\beta = P_{H_1}(X \\le 0.85)$ separately.',
      intuitiveSolution: [
        'Type I error: under $H_0 \\; (U(0,1))$, $\\alpha = P_{H_0}(X > 0.85) = 1 - 0.85 = 0.15$.',
        'Type II error: under $H_1 \\; (U(0,2))$, $\\beta = P_{H_1}(X \\le 0.85) = \\frac{0.85 - 0}{2 - 0} = 0.425$.',
        'Therefore $\\alpha + \\beta = 0.15 + 0.425 = 0.575$.',
      ],
      directShortcutUsed: '$\\alpha = P_{H_0}(\\text{Reject})$ and $\\beta = P_{H_1}(\\text{Fail to reject})$',
    },
    {
      id: 'm5-c2-q5',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Sleeping Giant MCQ #1',
      marks: 2,
      type: 'MCQ',
      stem: 'A data scientist groups $200$ integer observations into $6$ frequency bins (each having expected count $\\ge 5$) to test whether the data follows a $\\text{Poisson}(\\lambda)$ distribution, where $\\hat{\\lambda} = \\bar{x}$ is estimated from the sample. How many degrees of freedom does the Pearson $\\chi^2$ goodness-of-fit test have?',
      options: [
        { id: 'A', text: '$6$', whyTrueOrFalse: 'False: forgets both the total-count constraint ($-1$) and the estimated parameter ($-1$).' },
        { id: 'B', text: '$5$', whyTrueOrFalse: 'False: $k - 1 = 5$ applies only if $\\lambda$ was given beforehand without estimating from the sample.' },
        { id: 'C', text: '$4$', whyTrueOrFalse: 'True: $\\text{df} = k - 1 - m = 6 - 1 - 1 = 4$.' },
        { id: 'D', text: '$3$', whyTrueOrFalse: 'False: only $1$ parameter ($\\lambda$) is estimated for a Poisson distribution, not $2$.' },
      ],
      correctOptions: ['C'],
      triggerHint: 'Count $k$ bins, subtract $1$ for $\\sum O_i = N$, and subtract $m$ for parameters estimated from the sample.',
      intuitiveSolution: [
        'Pearson’s $\\chi^2$ goodness-of-fit degrees of freedom are $\\text{df} = k - 1 - m$.',
        'Here $k = 6$ bins and $m = 1$ parameter estimated from the sample ($\\hat{\\lambda} = \\bar{x}$).',
        'Hence $\\text{df} = 6 - 1 - 1 = 4$.',
      ],
      directShortcutUsed: '$\\text{df} = k - 1 - m$ for $\\chi^2$ Goodness-of-Fit',
    },
    {
      id: 'm5-c2-q6',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Sleeping Giant NAT #2',
      marks: 2,
      type: 'NAT',
      stem: 'An ML team wants to estimate the unknown click-through probability $p$ using a $95\\%$ confidence interval (take $z_{0.025} = 1.96$) such that the margin of error is at most $0.049$ regardless of the true value of $p$. What is the minimum sample size $n$ required?',
      natAnswer: { min: 400, max: 400, exactDisplay: '400' },
      triggerHint: 'Maximize $p(1-p)$ at $p = 0.5$ ($0.25$) inside $z_{0.025}\\sqrt{\\frac{p(1-p)}{n}} \\le E$.',
      intuitiveSolution: [
        'The half-width (margin of error) of a $95\\%$ proportion CI is $z_{0.025}\\sqrt{\\frac{p(1-p)}{n}}$.',
        'Since $p(1-p) \\le \\frac{1}{4}$ for all $p \\in [0,1]$, the worst-case requirement is $1.96 \\cdot \\frac{0.5}{\\sqrt{n}} \\le 0.049$.',
        'Solve for $\\sqrt{n}$: $\\sqrt{n} \\ge \\frac{1.96}{2 \\times 0.049} = \\frac{0.98}{0.049} = 20 \\implies n \\ge 20^2 = 400$.',
      ],
      directShortcutUsed: 'Conservative proportion sizing $n \\ge \\left(\\frac{z_{\\alpha/2}}{2E}\\right)^2$',
    },
  ],
}

export const MODULE_5_CHAPTERS: ChapterData[] = [chapter1, chapter2]

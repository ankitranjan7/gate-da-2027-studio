import type { ChapterData } from '../../types/curriculum'

export const chapter2: ChapterData = {
  id: 'calc-ch2',
  number: 2,
  title: 'Limits — From Intuition to Indeterminate Forms',
  shortTitle: 'Limits & Indeterminate Forms',
  estimatedHours: 3.5,
  dayLabel: 'Week 1 · Day 1 (Part B)',
  tagline:
    'Let’s demystify what a limit actually asks — approaching a point is not the same as landing on it! Together we will tame $\\infty - \\infty$ radical tug-of-wars in 5 seconds, see when L’Hôpital helps versus when it tricks you, and spot Probability CLT sums hiding inside Calculus limits.',
  syllabusMapping: ['Limit of functions of a single variable'],
  whatIsImportant: [
    'Left-Hand Limit (LHL) $=$ Right-Hand Limit (RHL) existence condition (especially around $|x|$, $\\lfloor x \\rfloor$, $e^{1/x}$)',
    'Algebraic conjugate shortcut $\\lim_{t\\to\\infty}(\\sqrt{t^2+at+b}-t) = a/2$ (GATE DA 2025 Q.32)',
    'Standard limits ($\\frac{\\sin x}{x}, \\frac{e^x-1}{x}, \\frac{\\ln(1+x)}{x}, (1+a/n)^n \\to e^a$) & $1^\\infty$ exponential trick',
    'Recognizing Poisson/Binomial sums disguised as $n \\to \\infty$ limits via CLT (GATE DA 2026 Q.45)',
  ],
  whatIsNotImportant: [
    'Writing formal $\\epsilon$–$\\delta$ proofs by hand',
    'Exotic Stolz–Cesàro olympiad sequence recurrences',
  ],
  inboundStream: 'Ch.1 Functions, Exponents, Logs & Infinite Series',
  outboundStream: [
    'Ch.3 Continuity ($\\lim_{x\\to c} f(x) = f(c)$)',
    'Ch.4 Derivatives (limit of secant slopes)',
    'Week 2 Poisson limit of Binomial & Central Limit Theorem',
  ],
  glossary: [
    {
      term: 'Limit of a Function',
      symbol: '$\\lim_{x \\to c} f(x) = L$',
      plainEnglish:
        'Think of a limit as asking where the curve is heading as $x$ gets arbitrarily close to $c$ — without ever caring what happens right at $x = c$ itself.',
      tinyExample: 'Even though $\\frac{x^2-4}{x-2}$ is undefined at $x = 2$, its limit as $x \\to 2$ is cleanly $4$.',
    },
    {
      term: 'Left-Hand & Right-Hand Limits (LHL & RHL)',
      symbol: '$x \\to c^-,\\; x \\to c^+$',
      plainEnglish:
        'In plain words, LHL checks the height you approach while walking toward $c$ from smaller numbers ($x < c$), and RHL checks from larger numbers ($x > c$); a two-sided limit exists only if both agree.',
      tinyExample: 'For $\\frac{|x|}{x}$ at $0$, $\\text{LHL} = -1$ and $\\text{RHL} = +1$, so the two-sided limit does not exist.',
    },
    {
      term: 'Indeterminate Form',
      symbol: '$\\frac{0}{0},\\; \\frac{\\infty}{\\infty},\\; \\infty - \\infty,\\; 1^{\\infty}$',
      plainEnglish:
        'An indeterminate form is a tug-of-war where plugging in the limit gives a clash whose winner you cannot tell by sight — you have to rewrite or zoom in to see who wins.',
      tinyExample: '$\\lim_{t\\to\\infty}(\\sqrt{t^2+t} - t)$ looks like $\\infty - \\infty$, yet actually settles at $0.5$, not $0$.',
    },
    {
      term: 'Algebraic Conjugate (Rationalization)',
      symbol: '$\\sqrt{A} + \\sqrt{B}$',
      plainEnglish:
        'Think of multiplying and dividing by the conjugate as flipping the minus sign to a plus sign so $(A - B)(A + B) = A^2 - B^2$ erases the square root cleanly.',
      tinyExample: 'Multiplying $\\sqrt{t^2+t} - t$ by $\\frac{\\sqrt{t^2+t}+t}{\\sqrt{t^2+t}+t}$ turns the numerator into plain $t$.',
    },
    {
      term: 'Squeeze (Sandwich) Theorem',
      symbol: '$g(x) \\le f(x) \\le h(x)$',
      plainEnglish:
        'If a wild function $f(x)$ stays trapped between a floor $g(x)$ and a ceiling $h(x)$ that both pinch together at the same number $L$, then $f(x)$ has no choice but to land at $L$ too.',
      tinyExample: 'Since $-|x| \\le x\\sin(1/x) \\le |x|$ and both walls hit $0$, $\\lim_{x\\to 0} x\\sin(1/x) = 0$.',
    },
    {
      term: 'Floor (Greatest Integer) Function',
      symbol: '$\\lfloor x \\rfloor$',
      plainEnglish:
        'In plain words, $\\lfloor x \\rfloor$ rounds $x$ down to the largest integer less than or equal to $x$, which creates a staircase jump at every integer.',
      tinyExample: '$\\lfloor 2.9 \\rfloor = 2$, $\\lfloor -0.1 \\rfloor = -1$, and $\\lim_{x\\to 1^-} \\lfloor x \\rfloor = 0 \\neq 1 = \\lim_{x\\to 1^+} \\lfloor x \\rfloor$.',
    },
    {
      term: 'L’Hôpital’s Rule',
      symbol: '$\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$',
      plainEnglish:
        'When a ratio is genuinely $0/0$ or $\\infty/\\infty$, comparing how fast top and bottom change (their derivatives) gives the same limit — as long as the derivative ratio itself has a limit.',
      tinyExample: 'For $\\lim_{x\\to 0} \\frac{e^{3x}-1}{x}$ ($0/0$), differentiating top and bottom gives $\\lim_{x\\to 0} \\frac{3e^{3x}}{1} = 3$.',
    },
    {
      term: 'Asymptotic Growth Order',
      symbol: '$\\ln x \\ll x^p \\ll e^x \\ll n!$',
      plainEnglish:
        'Think of this as a race to $+\\infty$: logarithms crawl, polynomials jog, exponentials sprint, and factorials fly — so any slower family divided by a faster one always shrinks to $0$.',
      tinyExample: '$\\lim_{x\\to\\infty} \\frac{x^{50}}{e^x} = 0$ immediately because $e^x$ beats every polynomial.',
    },
    {
      term: 'Euler’s Constant',
      symbol: '$e = \\lim_{n\\to\\infty}\\left(1 + \\frac{1}{n}\\right)^n$',
      plainEnglish:
        'This famous constant ($e \\approx 2.71828$) is what you get from $100\\%$ continuous compounding and anchors every $1^{\\infty}$ exponential limit in Calculus and Probability.',
      tinyExample: '$\\lim_{n\\to\\infty}\\left(1 - \\frac{\\lambda}{n}\\right)^n = e^{-\\lambda}$.',
    },
    {
      term: 'Poisson PMF',
      symbol: '$P(X=k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}$',
      plainEnglish:
        'The Poisson probability mass function gives the exact chance of seeing $k$ random arrivals when the average arrival count is $\\lambda$; it shows up disguised inside factorial limits.',
      tinyExample: 'For $\\lambda = n$, $\\sum_{k=0}^{n} \\frac{e^{-n}n^k}{k!}$ is literally $P(\\text{Poisson}(n) \\le n)$.',
    },
    {
      term: 'Central Limit Theorem (CLT)',
      symbol: '$\\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} \\to \\mathcal{N}(0, 1)$',
      plainEnglish:
        'In plain words, adding many independent random pieces together always smooths out into a symmetric Normal bell curve centered at the total mean $n\\mu$.',
      tinyExample: 'Since $\\text{Poisson}(n)$ is the sum of $n$ iid $\\text{Poisson}(1)$ variables, it looks bell-shaped around $n$ for large $n$.',
    },
    {
      term: 'Standard Normal CDF',
      symbol: '$\\Phi(z) = P(Z \\le z)$',
      plainEnglish:
        'Think of $\\Phi(z)$ as the total area under the standard bell curve to the left of $z$; because the bell curve is symmetric around $0$, exactly half the area sits left of $0$.',
      tinyExample: '$\\Phi(0) = 0.5$ and $\\Phi(1) \\approx 0.8413$.',
    },
  ],
  generatorId: 'rationalize-limit-gen',
  concepts: [
    {
      id: 'c2-1',
      title: 'What a Limit Really Asks (Approaching $\\neq$ Arriving) & One-Sided Limits',
      subtitle: 'Zooming in from both sides of a point — even if a hole sits right at the point',
      priority: 'core-pillar',
      buildsOn: 'Ch.1 Function input-output tables',
      toyExample: {
        title: 'A Broken Speedometer Formula With a Hole at $x = 2$',
        scenario:
          'Take a look at $f(x) = \\frac{x^2 - 4}{x - 2}$. If you plug $x = 2$ straight in, you hit $\\frac{0}{0}$ (undefined!). Instead of giving up at $x = 2$, let’s walk gently toward $2$ from both the left and the right and see where the values are heading:',
        walkthroughSteps: [
          '1. **From the Left ($x \\to 2^-$):** $f(1.9) = 3.9,\\; f(1.99) = 3.99,\\; f(1.999) = 3.999 \\to \\mathbf{4}$.',
          '2. **From the Right ($x \\to 2^+$):** $f(2.1) = 4.1,\\; f(2.01) = 4.01,\\; f(2.001) = 4.001 \\to \\mathbf{4}$.',
          '3. Now contrast $g(x) = \\frac{|x|}{x}$ near $x = 0$: for any $x < 0$ (even $-0.0001$), $g(x) = -1$; for any $x > 0$ ($+0.0001$), $g(x) = +1$. Left says $-1$, Right says $+1$ — they disagree, so $\\lim_{x\\to 0} \\frac{|x|}{x}$ **does NOT exist**!',
        ],
        ahaMoment:
          'Think of it this way: a limit $\\lim_{x\\to c} f(x)$ **completely ignores** what happens *at* $x = c$. It ONLY asks whether a traveler approaching from the left ($x \\to c^-$) and a traveler approaching from the right ($x \\to c^+$) agree on the exact same finite destination $L$!',
      },
      theoremAndFormula: {
        statement:
          'The two-sided limit $\\lim_{x \\to c} f(x) = L$ exists (as a finite real number) if and only if both one-sided limits exist, are finite, and equal each other:',
        formulaLatex:
          '\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L \\in \\mathbb{R}',
        plainEnglishDecoding:
          'As a rule of thumb, pause and check LHL and RHL separately whenever you spot one of the **4 Sign-Sensitive Triggers**: $|x - c|$, the floor function $\\lfloor x \\rfloor$, an exponential reciprocal $e^{1/(x-c)}$ (which drops to $0$ from the left and explodes to $+\\infty$ from the right!), or a piecewise boundary.',
        workedMiniExamples: [
          {
            prompt: 'Does $\\lim_{x \\to 0} \\frac{1}{1 + e^{1/x}}$ exist?',
            solution:
              '• **RHL ($x \\to 0^+$):** $1/x \\to +\\infty \\implies e^{1/x} \\to +\\infty \\implies \\frac{1}{1+\\infty} = 0$.\n• **LHL ($x \\to 0^-$):** $1/x \\to -\\infty \\implies e^{1/x} \\to 0 \\implies \\frac{1}{1+0} = 1$.\nSince $0 \\neq 1$, the two-sided limit **does NOT exist**!',
          },
          {
            prompt: 'Does $\\lim_{x \\to 0} x \\sin(1/x)$ exist?',
            solution:
              'Even though $\\sin(1/x)$ oscillates wildly between $-1$ and $+1$, multiplying by $x$ traps it inside $-|x| \\le x\\sin(1/x) \\le +|x|$. Both walls hit $0$, so by **Squeeze Theorem** the limit is **$0$**!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $\\lim_{x\\to c} f(x)$ and $\\lim_{x\\to c} g(x)$ both fail to exist, then $\\lim_{x\\to c} [f(x) + g(x)]$ and $\\lim_{x\\to c} [f(x)g(x)]$ cannot exist.',
          reality: 'Jumps can cancel or multiply to a constant!',
          counterExample: 'Let $f(x) = \\frac{|x|}{x}$ ($\\pm 1$ jump at $0$) and $g(x) = -\\frac{|x|}{x}$. Neither has a limit at $0$, yet $f(x)+g(x) = 0$ and $f(x)\\cdot f(x) = 1$ (for $x\\neq 0$) BOTH have clean limits at $0$!',
        },
      ],
    },
    {
      id: 'c2-2',
      title: 'Indeterminate Tug-of-Wars & Algebraic Conjugate Rationalization',
      subtitle: 'Turning $\\infty - \\infty$ radical differences into 5-second mental math',
      priority: 'core-pillar',
      buildsOn: 'Step 2.1 Limits & $(A-B)(A+B) = A^2 - B^2$',
      sandboxId: 'limit-xray-lab',
      toyExample: {
        title: 'Plugging $t = 100$ Into GATE DA 2025 Q.32 ($\\sqrt{t^2 + t} - t$)',
        scenario:
          'At first glance, as $t \\to +\\infty$, both $\\sqrt{t^2 + t}$ and $t$ grow huge, so it is tempting to guess "$\\infty - \\infty = 0$". Before trusting that guess, let’s test a real number like $t = 100$ together:',
        walkthroughSteps: [
          '1. $t^2 + t = 10{,}000 + 100 = 10{,}100$.',
          '2. What is $(100.5)^2$? Remember $(100 + 0.5)^2 = 10{,}000 + 2(100)(0.5) + 0.25 = 10{,}100.25$!',
          '3. So $\\sqrt{10{,}100}$ is **almost identically $100.5$** ($100.49875\\dots$)! Subtracting $t = 100$ leaves **$0.5$**, NOT $0$!',
        ],
        ahaMoment:
          'Notice why that happened! Completing the square inside the root reveals the whole secret: $t^2 + at = (t + \\frac{a}{2})^2 - \\frac{a^2}{4}$, so for huge $t$, $\\sqrt{t^2 + at}$ behaves just like $t + \\frac{a}{2}$. Subtracting $t$ leaves **$\\frac{a}{2}$** every time!',
      },
      theoremAndFormula: {
        statement:
          'The **7 Indeterminate Forms** are $\\frac{0}{0},\\; \\frac{\\infty}{\\infty},\\; 0 \\cdot \\infty,\\; \\infty - \\infty,\\; 1^{\\infty},\\; 0^0,\\; \\infty^0$ (notice $0^\\infty = 0$ is **NOT** indeterminate — a tiny fraction raised to a huge power goes straight to $0$!). For radical $\\infty - \\infty$ forms, multiply & divide by the conjugate:',
        formulaLatex:
          '\\lim_{t \\to +\\infty} \\left(\\sqrt{k^2 t^2 + at + b} - kt\\right) = \\lim_{t \\to +\\infty} \\frac{at + b}{\\sqrt{k^2 t^2 + at + b} + kt} = \\frac{a}{2k} \\quad (k > 0)',
        plainEnglishDecoding:
          'In plain words, once you rationalize and divide top and bottom by $t$, the numerator settles onto $a$, the denominator settles onto $\\sqrt{k^2} + k = 2k$, and the trailing constant $b$ shrinks to zero and disappears!',
        workedMiniExamples: [
          {
            prompt: 'Evaluate $\\lim_{t \\to +\\infty} (\\sqrt{t^2 + t} - t)$ (GATE DA 2025 Q.32).',
            solution:
              'Here $k = 1, a = 1, b = 0 \\implies \\frac{a}{2k} = \\frac{1}{2(1)} = 0.5$.',
          },
          {
            prompt: 'Watch the minus-infinity trap! Evaluate $\\lim_{t \\to -\\infty} (\\sqrt{t^2 + t} + t)$.',
            solution:
              'Substitute $u = -t \\to +\\infty$: $\\sqrt{u^2 - u} - u$. Now $k=1, a=-1 \\implies \\frac{-1}{2} = -0.5$! (Never pull $\\sqrt{t^2} = t$ when $t < 0$ — $\\sqrt{t^2} = |t| = -t$!)',
          },
        ],
      },
      msqTraps: [
        {
          myth: '$\\sqrt{t^2} = t$ when dividing by $t$ in limits.',
          reality: '$\\sqrt{t^2} = |t|$! For $t \\to -\\infty$, $|t| = -t$, which flips the sign of the denominator.',
          counterExample: '$\\lim_{t \\to -\\infty} \\frac{\\sqrt{t^2 + 1}}{t} = \\lim_{t \\to -\\infty} \\frac{|t|\\sqrt{1+1/t^2}}{t} = -1$ (NOT $+1$!).',
        },
      ],
    },
    {
      id: 'c2-3',
      title: 'Standard Limits, $1^{\\infty}$ Exponential Trick & L’Hôpital’s Rule',
      subtitle: 'Fast $0/0$ and $1^\\infty$ resolution — plus the exact traps where L’Hôpital fails',
      priority: 'core-pillar',
      buildsOn: 'Step 2.2 Indeterminate forms & Ch.1 $\\ln / e^x$',
      toyExample: {
        title: 'Compound Interest Compounded Every Millisecond ($1^\\infty$)',
        scenario:
          'Imagine a bank paying $100\\%$ annual interest on ₹1. Paid once a year, ₹1 grows to $(1 + 1)^1 = ₹2$. Paid monthly ($n=12$), it reaches $(1 + \\frac{1}{12})^{12} \\approx ₹2.613$. If you compound $n = 1{,}000{,}000$ times a year, $(1 + \\frac{1}{n})^n$ looks like a $1^{\\infty}$ tug-of-war — does your rupee blow up to $\\infty$ or stay stuck at ₹1?',
        walkthroughSteps: [
          '1. Neither! Take $\\ln$: $n \\ln(1 + \\frac{1}{n})$. For tiny $u = \\frac{1}{n}$, $\\ln(1 + u) \\approx u = \\frac{1}{n}$.',
          '2. Multiply: $n \\times \\frac{1}{n} = 1$. Exponentiate back: $e^1 = e \\approx ₹2.71828$!',
          '3. If the interest rate is $a$ instead of $1$, $(1 + \\frac{a}{n})^n \\to e^a$ (and for $a = -\\lambda$, $(1 - \\frac{\\lambda}{n})^n \\to e^{-\\lambda}$, which births the Poisson distribution!).',
        ],
        ahaMoment:
          'Here is the universal shortcut you can carry into every exam: whenever you meet a $1^\\infty$ limit $\\lim u(x)^{v(x)}$ (with $u \\to 1$ and $v \\to \\infty$), you don’t need messy logs — it collapses in one step to **$e^{\\lim v(x) \\cdot (u(x) - 1)}$**!',
      },
      theoremAndFormula: {
        statement:
          'Core standard limits as $u \\to 0$, the universal $1^\\infty$ formula, and **L’Hôpital’s Rule** (valid ONLY when $\\frac{f(x)}{g(x)}$ is $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ AND $\\lim \\frac{f\'(x)}{g\'(x)}$ exists):',
        formulaLatex:
          '\\lim_{u \\to 0} \\frac{\\sin u}{u} = \\lim_{u \\to 0} \\frac{e^u - 1}{u} = \\lim_{u \\to 0} \\frac{\\ln(1+u)}{u} = 1, \\qquad \\lim_{u \\to 1,\\, v \\to \\infty} u^v = \\exp\\!\\Big(\\lim v(u - 1)\\Big)',
        plainEnglishDecoding:
          'Before reaching for L’Hôpital’s rule, pause for two quick safety checks: **(1) verify it is genuinely $0/0$ or $\\infty/\\infty$** (if the denominator isn’t $0$, just plug in directly!), and **(2) pull out any nonzero multiplying factors first** so you save yourself from messy product-rule derivatives.',
        workedMiniExamples: [
          {
            prompt: 'Evaluate $\\lim_{x \\to 0} (\\cos x)^{1/x^2}$.',
            solution:
              'As $x \\to 0$, $\\cos x \\to 1$ and $1/x^2 \\to \\infty$ ($1^\\infty$ form!). Fire the $e^{\\lim v(u-1)}$ shortcut: exponent $= \\lim_{x\\to 0} \\frac{\\cos x - 1}{x^2} = -\\frac{1}{2}$. Answer $= e^{-1/2}$!',
          },
          {
            prompt: 'Evaluate $\\lim_{x \\to \\infty} \\frac{x^{50}}{e^x}$.',
            solution:
              'Growth hierarchy as $x \\to +\\infty$: $\\ln x \\ll x^p \\ll e^{ax} \\ll x^x$. Any positive exponential crushes any polynomial, so $\\lim = 0$ immediately (no 50 L’Hôpital steps needed!).',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $\\lim_{x\\to\\infty} \\frac{f\'(x)}{g\'(x)}$ fails to exist, then $\\lim_{x\\to\\infty} \\frac{f(x)}{g(x)}$ also fails to exist.',
          reality: 'L’Hôpital is a **one-way implication** ($\\lim f\'/g\' = L \\implies \\lim f/g = L$), NOT an if-and-only-if!',
          counterExample: 'Let $f(x) = x + \\sin x$ and $g(x) = x$. Directly, $\\frac{x + \\sin x}{x} = 1 + \\frac{\\sin x}{x} \\to 1$ as $x \\to \\infty$, even though $\\frac{f\'(x)}{g\'(x)} = 1 + \\cos x$ oscillates forever and has NO limit!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Poisson Limit of Binomial Trials',
          whyItMatters: 'For $X \\sim \\text{Binomial}(n, \\lambda/n)$, $P(X=0) = (1 - \\lambda/n)^n \\to e^{-\\lambda}$ via the $1^\\infty$ rule!',
        },
      ],
    },
    {
      id: 'c2-4',
      title: 'Probability Sums Disguised as Calculus Limits',
      subtitle: 'How GATE DA 2026 hid a 10-second Central Limit Theorem answer inside a terrifying factorial limit',
      priority: 'high-yield',
      buildsOn: 'Step 2.3 $e^{-n}$ & Symmetry',
      toyExample: {
        title: 'Counting the First Half of a Fair Coin-Toss Bell Curve',
        scenario:
          'Before we touch a single factorial, let’s answer a wonderfully simple question: if you draw a symmetric bell curve centered right at mean $\\mu = 100$, what fraction of its total area lies to the left of $100$?',
        walkthroughSteps: [
          '1. Total area under any probability density is $1$.',
          '2. Because a bell curve is mirror-symmetric around its mean $\\mu$, exactly **half ($0.5$)** of the probability sits $\\le \\mu$ and **half ($0.5$)** sits $> \\mu$!',
          '3. Now look at $\\sum_{k=0}^{n} \\frac{e^{-n} n^k}{k!}$: each term $\\frac{e^{-n} n^k}{k!}$ is literally the Poisson($n$) probability of getting $k$ arrivals when the average rate is $\\mu = n$!',
        ],
        ahaMoment:
          'See how beautifully Calculus and Probability shake hands here? For large $n$, $\\text{Poisson}(n)$ behaves like the sum of $n$ independent $\\text{Poisson}(1)$ variables, so by the Central Limit Theorem it morphs into a symmetric Normal bell curve centered at $n$ — which means $P(X \\le n)$ glides straight to **$\\mathbf{0.5}$**!',
      },
      theoremAndFormula: {
        statement:
          'Whenever a limit as $n \\to \\infty$ sums terms involving $\\frac{e^{-n} n^k}{k!}$ (Poisson) or $\\binom{n}{k} p^k (1-p)^{n-k}$ (Binomial) up to $n$ or $np$, rewrite the sum as $P(S_n \\le \\text{threshold})$ where $S_n = \\sum_{i=1}^n Y_i$ has mean $n\\mu$ and variance $n\\sigma^2$:',
        formulaLatex:
          '\\lim_{n \\to \\infty} \\sum_{k=0}^{n} \\frac{e^{-n} n^k}{k!} = \\lim_{n \\to \\infty} P\\!\\left(\\frac{S_n - n}{\\sqrt{n}} \\le 0\\right) = \\Phi(0) = \\frac{1}{2}',
        plainEnglishDecoding:
          'In plain words, $S_n \\sim \\text{Poisson}(n)$ has mean $n$ and standard deviation $\\sqrt{n}$. Summing up to $k = n$ simply asks for $P(S_n \\le \\text{its own mean})$, which standardizes to $Z \\le 0$ on the Standard Normal bell curve — giving $\\Phi(0) = 0.5$!',
        workedMiniExamples: [
          {
            prompt: 'What would $\\lim_{n \\to \\infty} \\sum_{k=0}^{n + \\sqrt{n}} \\frac{e^{-n} n^k}{k!}$ converge to?',
            solution:
              'Here the upper cutoff is $n + 1\\cdot\\sqrt{n} = \\mu + 1\\sigma$, which standardizes to $P(Z \\le 1) = \\Phi(1) \\approx 0.8413$!',
          },
          {
            prompt: 'Evaluate $\\lim_{n \\to \\infty} \\frac{1}{2^n} \\sum_{k=0}^{\\lfloor n/2 \\rfloor} \\binom{n}{k}$.',
            solution:
              'Recognize $P(\\text{Binomial}(n, 0.5) \\le n/2)$ — probability of getting $\\le 50\\%$ heads in $n$ fair coin tosses $\\to \\Phi(0) = 0.5$ (also exact by symmetry for odd $n$)!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Since $\\sum_{k=0}^{\\infty} \\frac{n^k}{k!} = e^n$, taking $k$ up to $n$ as $n\\to\\infty$ captures almost all of $e^n$, so the ratio is $1$.',
          reality: 'FATAL TRAP! The terms $\\frac{n^k}{k!}$ peak right around $k = n$! Half the total mass of $e^n$ sits at $k \\le n$ and the other half sits at $k > n$!',
          counterExample: 'Check $n=1$: $e^{-1}(1 + 1) = 2/e \\approx 0.736$; $n=10$: $\\approx 0.583$; $n=1000$: $\\approx 0.504 \\to 0.5$, NEVER $1$!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Central Limit Theorem (CLT) & Poisson Distribution',
          whyItMatters: 'You will meet this exact standardization $Z = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}}$ again in Week 2 Module 5!',
          pyqProof: 'GATE DA 2026 · Q.45 (2M MCQ) & GATE DA 2025 · Q.40 (2M MCQ)',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'pb-2-1',
      title: 'Instant Radical Difference $\\infty - \\infty$ Resolution',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2025 · Q.32 (1M NAT)'],
      problemStatement:
        'Compute $\\lim_{t \\to +\\infty} \\left(\\sqrt{t^2 + t} - t\\right)$.',
      triggerCue:
        'Difference of a square root $\\sqrt{k^2 t^2 + at + b}$ and linear term $kt$ as $t \\to +\\infty$ where leading coefficients match ($\\sqrt{k^2 t^2} = kt$).',
      bruteForceTrap:
        'Trying L’Hôpital directly on $\\sqrt{t^2+t}-t$ (there isn’t even a denominator!) or guessing $\\infty - \\infty = 0$.',
      mentalShift:
        'Give the expression a friendly denominator by multiplying top and bottom by the conjugate $\\sqrt{t^2+t} + t$ — or even faster, complete the square mentally so you see $\\sqrt{(t + 1/2)^2 - 1/4} \\approx t + 1/2$ right away!',
      steps: [
        {
          label: 'Multiply & divide by the conjugate',
          detail:
            '$$\\sqrt{t^2 + t} - t = \\frac{(t^2 + t) - t^2}{\\sqrt{t^2 + t} + t} = \\frac{t}{\\sqrt{t^2 + t} + t}$$',
        },
        {
          label: 'Divide top and bottom by $t$ (since $t > 0$, $t = \\sqrt{t^2}$)',
          detail:
            '$$\\frac{1}{\\sqrt{1 + 1/t} + 1} \\xrightarrow{t \\to +\\infty} \\frac{1}{\\sqrt{1 + 0} + 1} = \\frac{1}{2} = 0.5$$',
        },
      ],
      lockInTakeaway:
        'Memorize for exam speed: $\\lim_{t\\to+\\infty}(\\sqrt{k^2 t^2 + at + b} - kt) = \\frac{a}{2k}$!',
    },
    {
      id: 'pb-2-2',
      title: 'Spotting CLT Inside Scary Factorial Summations',
      difficulty: 'Rank-Decider',
      relatedPyqs: ['GATE DA 2026 · Q.45 (2M MCQ)'],
      problemStatement:
        'Evaluate $L = \\lim_{n \\to \\infty} \\sum_{k=0}^{n} \\frac{e^{-n} n^k}{k!}$.',
      triggerCue:
        'Summand $\\frac{e^{-n} n^k}{k!}$ has the exact shape of a **Poisson PMF** with parameter $\\lambda = n$, summed from $k = 0$ up to $n = \\lambda$.',
      bruteForceTrap:
        'Saying "as $n \\to \\infty$ the upper limit becomes $\\infty$, and $\\sum_{k=0}^\\infty \\frac{n^k}{k!} = e^n$, so $e^{-n} e^n = 1$" — the classic false-interchange-of-limits trap that cost thousands of candidates $-0.67$ marks in 2026!',
      mentalShift:
        'Remember you can never send the upper summation bound $n \\to \\infty$ while freezing the $n$ inside $n^k$! Instead, put on your Probability glasses: view $X_n \\sim \\text{Poisson}(n)$ as the sum of $n$ independent $\\text{Poisson}(1)$ variables, so by CLT it becomes symmetric around its mean $n$, making $P(X_n \\le n) \\to 0.5$.',
      steps: [
        {
          label: 'Rewrite the finite sum as a CDF at the mean',
          detail:
            'Let $Y_1, \\dots, Y_n \\stackrel{\\text{iid}}{\\sim} \\text{Poisson}(1)$ ($\\mu = 1, \\sigma^2 = 1$). Then $S_n = \\sum_{i=1}^n Y_i \\sim \\text{Poisson}(n)$, and $$\\sum_{k=0}^{n} \\frac{e^{-n} n^k}{k!} = P(S_n \\le n)$$',
        },
        {
          label: 'Standardize via Central Limit Theorem',
          detail:
            '$$P(S_n \\le n) = P\\!\\left(\\frac{S_n - n}{\\sqrt{n}} \\le \\frac{n - n}{\\sqrt{n}}\\right) = P(Z_n \\le 0) \\xrightarrow{n\\to\\infty} \\Phi(0) = 0.5$$',
        },
      ],
      lockInTakeaway:
        'Never swap $\\lim_{n\\to\\infty}$ across a sum whose summand also depends on $n$! Check if it’s a Poisson or Binomial probability up to the mean ($= 0.5$).',
    },
    {
      id: 'pb-2-3',
      title: 'Crushing Any $1^\\infty$ Limit in One Line',
      difficulty: 'Moderate',
      relatedPyqs: ['Core GATE Limit Archetype'],
      problemStatement:
        'Evaluate $\\lim_{x \\to 0} \\left(\\frac{e^x + e^{2x}}{2}\\right)^{1/x}$.',
      triggerCue:
        'Base approaches $1$ ($\\frac{1+1}{2} = 1$) while exponent approaches $\\pm\\infty$ ($1/x \\to \\infty$).',
      bruteForceTrap:
        'Writing $y = (\\dots)^{1/x}$, taking $\\ln y$, differentiating messy quotients inside $\\ln$ with L’Hôpital.',
      mentalShift:
        'Whenever a base $u$ approaches $1$, remember the tiny-step approximation $\\ln(u) \\approx u - 1$! That lets you skip logarithms altogether and jump straight to $e^{\\lim \\text{exponent} \\times (\\text{base} - 1)}$.',
      steps: [
        {
          label: 'Compute (Base - 1) × Exponent',
          detail:
            '$$\\frac{1}{x}\\left(\\frac{e^x + e^{2x}}{2} - 1\\right) = \\frac{(e^x - 1) + (e^{2x} - 1)}{2x}$$',
        },
        {
          label: 'Apply standard limit (e^{kx} - 1)/x -> k',
          detail:
            '$$\\lim_{x\\to 0} \\left(\\frac{e^x - 1}{2x} + \\frac{e^{2x} - 1}{2x}\\right) = \\frac{1}{2} + \\frac{2}{2} = \\frac{3}{2}$$',
        },
        {
          label: 'Exponentiate',
          detail: 'Answer $= e^{3/2}$. Notice this generalizes: $\\lim_{x\\to 0}\\big(\\frac{a^x + b^x}{2}\\big)^{1/x} = \\sqrt{ab}$!',
        },
      ],
      lockInTakeaway:
        'For $1^\\infty$: $\\lim u^v = e^{\\lim v(u-1)}$ — memorize it cold!',
    },
  ],
  arsenalCards: [
    {
      id: 'ac-2-1',
      badge: 'Square-Root Difference Shortcut',
      whenYouSpot: '$\\lim_{t \\to +\\infty} \\left(\\sqrt{k^2 t^2 + at + b} - kt\\right)$ with $k > 0$',
      directWeaponLatex: '\\lim_{t \\to +\\infty} \\left(\\sqrt{k^2 t^2 + at + b} - kt\\right) = \\frac{a}{2k}',
      instantRule: 'Linear coeff $a$ divided by $2k$; ignore constant $b$ completely!',
      tenSecondExample: '$\\lim_{t\\to\\infty}(\\sqrt{4t^2 + 6t - 9} - 2t) = \\frac{6}{2(2)} = 1.5$.',
      oneFatalTrap: 'If $t \\to -\\infty$, substitute $u = -t > 0$ first so $\\sqrt{t^2} = |t|$ doesn’t flip your sign!',
    },
    {
      id: 'ac-2-2',
      badge: 'Cube-Root / n-th Root Generalization',
      whenYouSpot: '$\\lim_{t \\to +\\infty} \\left(\\sqrt[n]{t^n + a t^{n-1} + \\dots} - t\\right)$',
      directWeaponLatex: '\\lim_{t \\to +\\infty} \\left((t^n + a t^{n-1})^{1/n} - t\\right) = \\frac{a}{n}',
      instantRule: 'Factor out $t$ and use $(1 + \\frac{a}{t})^{1/n} \\approx 1 + \\frac{a}{nt}$: coefficient of $t^{n-1}$ divided by $n$!',
      tenSecondExample: '$\\lim_{t\\to\\infty}(\\sqrt[3]{t^3 + 9t^2} - t) = 9/3 = 3$.',
      oneFatalTrap: 'Notice $a$ must be the coefficient of $t^{n-1}$ (one degree below $t^n$); if $t^{n-1}$ is missing, $a = 0$!',
    },
    {
      id: 'ac-2-3',
      badge: 'Universal 1^∞ Killer',
      whenYouSpot: '$\\lim u(x)^{v(x)}$ where $u(x) \\to 1$ and $v(x) \\to \\pm\\infty$',
      directWeaponLatex: '\\lim u(x)^{v(x)} = \\exp\\!\\Big(\\lim v(x)\\big(u(x) - 1\\big)\\Big)',
      instantRule: 'Subtract $1$ from the base, multiply by the exponent, take the limit, and put on top of $e$.',
      tenSecondExample: '$\\lim_{n\\to\\infty}(1 - \\frac{3}{n})^{2n} = e^{\\lim 2n(-3/n)} = e^{-6}$.',
      oneFatalTrap: 'ONLY use when the base genuinely approaches $1$! Notice $(0.5)^n \\to 0$ directly (NOT $1^\\infty$).',
    },
    {
      id: 'ac-2-4',
      badge: 'Asymptotic Growth Pecking Order',
      whenYouSpot: 'Ratios as $x \\to +\\infty$ mixing logs, polynomials, exponentials, or factorials',
      directWeaponLatex: '(\\ln x)^a \\ll x^b \\ll c^x \\ll n! \\ll n^n \\quad (a,b > 0,\\; c > 1)',
      instantRule: 'Smaller / Larger $\\to 0$; Larger / Smaller $\\to +\\infty$.',
      tenSecondExample: '$\\lim_{x\\to\\infty} \\frac{(\\ln x)^{100}}{\\sqrt{x}} = 0$.',
      oneFatalTrap: 'Requires $x \\to +\\infty$ and $b > 0, c > 1$; as $x \\to -\\infty$, $e^x \\to 0$ instead!',
    },
    {
      id: 'ac-2-5',
      badge: 'Disguised Poisson / Binomial Mean Cutoff',
      whenYouSpot: '$\\lim_{n\\to\\infty} \\sum_{k=0}^{n} \\frac{e^{-n}n^k}{k!}$ or $\\lim_{n\\to\\infty} \\sum_{k=0}^{n/2} \\binom{n}{k} 2^{-n}$',
      directWeaponLatex: 'P(S_n \\le E[S_n]) \\xrightarrow{n \\to \\infty} \\Phi(0) = 0.5',
      instantRule: 'Summing a CLT-normal distribution up to its exact mean always converges to $1/2$.',
      tenSecondExample: 'GATE DA 2026 Q.45 $= 0.5$.',
      oneFatalTrap: 'Never pass $n \\to \\infty$ into the upper summation index while freezing $n$ inside the summand!',
    },
  ],
  questions: [
    {
      id: 'q-2-1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'Evaluate $\\lim_{x \\to 0} \\frac{e^{3x} - 1}{\\sin(2x)}$ (round to 2 decimal places).',
      natAnswer: { min: 1.49, max: 1.51, exactDisplay: '1.5' },
      triggerHint: 'Think of our small-angle approximations near $x = 0$: $e^{3x} - 1$ behaves like $3x$ and $\\sin(2x)$ behaves like $2x$ — take their ratio!',
      intuitiveSolution: [
        '1. Divide numerator and denominator by $x$: $\\frac{(e^{3x}-1)/x}{\\sin(2x)/x} = \\frac{3 \\cdot \\frac{e^{3x}-1}{3x}}{2 \\cdot \\frac{\\sin(2x)}{2x}}$.',
        '2. Both standard limits equal $1$, leaving $\\frac{3}{2} = 1.5$.',
      ],
      directShortcutUsed: 'Small-$u$ replacements $e^u - 1 \\sim u$ and $\\sin u \\sim u$.',
    },
    {
      id: 'q-2-2',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2',
      marks: 1,
      type: 'MCQ',
      stem: 'What is the value of $\\lim_{x \\to 0^-} \\frac{1}{1 + 2^{1/x}}$?',
      options: [
        { id: 'A', text: '$0$', whyTrueOrFalse: 'That is the Right-Hand Limit ($x \\to 0^+ \\implies 2^{1/x} \\to \\infty \\implies 0$), NOT $x \\to 0^-$!' },
        { id: 'B', text: '$\\frac{1}{2}$', whyTrueOrFalse: 'Occurs at $1/x = 0$, not $x \\to 0^-$.' },
        { id: 'C', text: '$1$', whyTrueOrFalse: 'As $x \\to 0^-$, $1/x \\to -\\infty$, so $2^{1/x} \\to 0$ and $\\frac{1}{1+0} = 1$!' },
        { id: 'D', text: 'Limit does not exist', whyTrueOrFalse: 'The two-sided limit does not exist, but the question specifically asks for the Left-Hand Limit $x \\to 0^-$!' },
      ],
      correctOptions: ['C'],
      triggerHint: 'Don’t rush past the superscript $0^-$! Try plugging a tiny negative test value like $x = -0.01$: then $1/x = -100$, so $2^{-100}$ is practically $0$.',
      intuitiveSolution: [
        '1. Read the superscript carefully: $x \\to 0^-$ means $x < 0$ approaching $0$.',
        '2. Thus $1/x \\to -\\infty \\implies 2^{1/x} \\to 0 \\implies \\frac{1}{1 + 0} = 1$.',
      ],
      directShortcutUsed: 'Concrete test value $x = -0.01$ on one-sided exponential jumps.',
    },
    {
      id: 'q-2-3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.32',
      year: 2025,
      marks: 1,
      type: 'NAT',
      stem: 'Evaluate the following limit (round off to one decimal place): $$\\lim_{t \\to +\\infty} \\left(\\sqrt{t^2 + t} - t\\right)$$',
      natAnswer: { min: 0.49, max: 0.51, exactDisplay: '0.5' },
      triggerHint: 'Spot the $\\sqrt{k^2 t^2 + at + b} - kt$ pattern with $k = 1$ and $a = 1$ — either rationalize with the conjugate or use our quick $\\frac{a}{2k}$ rule!',
      intuitiveSolution: [
        '1. Rationalize via conjugate: $(\\sqrt{t^2+t}-t)\\frac{\\sqrt{t^2+t}+t}{\\sqrt{t^2+t}+t} = \\frac{t}{\\sqrt{t^2+t}+t}$.',
        '2. Divide top and bottom by $t > 0$: $\\frac{1}{\\sqrt{1 + 1/t} + 1} \\to \\frac{1}{1 + 1} = 0.5$.',
      ],
      directShortcutUsed: '$\\lim_{t\\to+\\infty}(\\sqrt{k^2 t^2 + at + b} - kt) = \\frac{a}{2k} = \\frac{1}{2} = 0.5$.',
    },
    {
      id: 'q-2-4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.45',
      year: 2026,
      marks: 2,
      type: 'MCQ',
      stem: 'Consider the limit $$L = \\lim_{n \\to \\infty} \\sum_{k=0}^{n} \\frac{e^{-n} n^k}{k!}$$ What is the value of $L$?',
      options: [
        { id: 'A', text: '$0$', whyTrueOrFalse: 'Each term shrinks like $O(1/\\sqrt{n})$, yet you are summing $n+1$ non-negative terms capturing half the Poisson distribution!' },
        { id: 'B', text: '$0.5$', whyTrueOrFalse: 'Exact! For $X_n \\sim \\text{Poisson}(n)$, $P(X_n \\le n) = P(\\frac{X_n - n}{\\sqrt{n}} \\le 0) \\to \\Phi(0) = 0.5$ by CLT.' },
        { id: 'C', text: '$1$', whyTrueOrFalse: 'Classic trap from illegally replacing the upper bound $n$ with $\\infty$ while holding $n$ fixed inside $n^k$!' },
        { id: 'D', text: '$e^{-1}$', whyTrueOrFalse: '$e^{-1}$ is only the $k=0$ term when $n=1$.' },
      ],
      correctOptions: ['B'],
      triggerHint: 'Look closely at each term $\\frac{e^{-n}n^k}{k!}$ — you are looking at the Poisson($n$) PMF summed from $0$ right up to its own mean $\\mu = n$! What does the Central Limit Theorem say about half of a bell curve?',
      intuitiveSolution: [
        '1. Let $X_n \\sim \\text{Poisson}(n)$, which is the sum of $n$ iid $\\text{Poisson}(1)$ random variables (mean $1$, variance $1$).',
        '2. The sum equals $P(X_n \\le n) = P\\!\\left(\\frac{X_n - n}{\\sqrt{n}} \\le 0\\right)$.',
        '3. By the Central Limit Theorem, $\\frac{X_n - n}{\\sqrt{n}} \\stackrel{d}{\\to} \\mathcal{N}(0,1)$, so $L = \\Phi(0) = 0.5$.',
      ],
      directShortcutUsed: 'Poisson($n$) CDF at its mean $\\to \\Phi(0) = 0.5$ via CLT.',
    },
    {
      id: 'q-2-5',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Tricky MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Which of the following limits exist as finite real numbers?',
      options: [
        {
          id: 'A',
          text: '$\\lim_{x \\to 0} x^2 \\cos\\!\\left(\\frac{1}{x^2}\\right)$',
          whyTrueOrFalse: 'Since $-1 \\le \\cos(1/x^2) \\le 1$, $-x^2 \\le x^2\\cos(1/x^2) \\le x^2 \\to 0$ by Squeeze Theorem. Exists ($= 0$)!',
        },
        {
          id: 'B',
          text: '$\\lim_{x \\to \\infty} \\frac{x + \\cos x}{x - \\sin x}$',
          whyTrueOrFalse: 'Divide top and bottom by $x$: $\\frac{1 + (\\cos x)/x}{1 - (\\sin x)/x} \\to \\frac{1+0}{1-0} = 1$! (Notice L’Hôpital would fail/oscillate here, which is the MSQ trap!)',
        },
        {
          id: 'C',
          text: '$\\lim_{x \\to 0} \\frac{|x|}{x}$',
          whyTrueOrFalse: 'LHL $= -1 \\neq$ RHL $= +1$. Does NOT exist!',
        },
        {
          id: 'D',
          text: '$\\lim_{x \\to 1} \\lfloor x \\rfloor$, where $\\lfloor x \\rfloor$ denotes the greatest integer $\\le x$',
          whyTrueOrFalse: 'For $x = 0.999$, $\\lfloor x \\rfloor = 0$ (LHL $= 0$), whereas for $x = 1.001$, $\\lfloor x \\rfloor = 1$ (RHL $= 1$). Jump at every integer — does NOT exist!',
        },
      ],
      correctOptions: ['A', 'B'],
      triggerHint: 'Take your time with Option B — resist L’Hôpital and simply divide top and bottom by $x$ instead! For Option D, compare $x = 0.999$ against $x = 1.001$ inside $\\lfloor x \\rfloor$.',
      intuitiveSolution: [
        '1. **Option A:** Bounded oscillation $\\times$ vanishing $x^2 \\to 0$ by Squeeze Theorem.',
        '2. **Option B:** Dividing numerator & denominator by $x$ gives $\\frac{1 + \\cos(x)/x}{1 - \\sin(x)/x} \\to 1$ cleanly (whereas L’Hôpital gives $\\frac{1 - \\sin x}{1 - \\cos x}$, which blows up infinitely often!).',
        '3. **Options C & D:** Both suffer jump discontinuities where LHL $\\neq$ RHL.',
      ],
      directShortcutUsed: 'Squeeze theorem + dominant-term division (avoiding L’Hôpital oscillation trap).',
    },
    {
      id: 'q-2-6',
      tier: 'tricky',
      sourceLabel: 'IITM-Style 1^∞ NAT',
      marks: 2,
      type: 'NAT',
      stem: 'Compute $\\ln(L)$, where $$L = \\lim_{x \\to 0} \\left(1 + 3x + 5x^2\\right)^{2/x}$$',
      natAnswer: { min: 5.99, max: 6.01, exactDisplay: '6' },
      triggerHint: 'Read the question carefully — it asks for $\\ln(L)$, not $L$! By our $1^\\infty$ shortcut, $\\ln(L)$ is simply $\\lim_{x\\to 0} v(x)(u(x) - 1)$.',
      intuitiveSolution: [
        '1. Base $u(x) = 1 + 3x + 5x^2 \\to 1$ and exponent $v(x) = 2/x \\to \\infty$ ($1^\\infty$ form).',
        '2. $\\ln(L) = \\lim_{x \\to 0} \\frac{2}{x} \\cdot (3x + 5x^2) = \\lim_{x \\to 0} (6 + 10x) = 6$. (Higher-order $5x^2$ vanishes completely!)',
      ],
      directShortcutUsed: '$\\ln(\\lim u^v) = \\lim v(u - 1) = 6$.',
    },
    {
      id: 'q-2-7',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Cube-Root NAT',
      marks: 2,
      type: 'NAT',
      stem: 'Evaluate the limit: $$\\lim_{t \\to +\\infty} \\left(\\sqrt[3]{t^3 + 6t^2 + 10t} - t\\right)$$',
      natAnswer: { min: 1.99, max: 2.01, exactDisplay: '2' },
      triggerHint: 'Try factoring $t$ out of the cube root to see $t(1 + \\frac{6}{t} + \\frac{10}{t^2})^{1/3} - t$, or jump straight to our $n$-th root rule $\\frac{a}{n}$ with $a = 6$ and $n = 3$!',
      intuitiveSolution: [
        '1. Factor out $t$: $t\\left[\\left(1 + \\frac{6}{t} + \\frac{10}{t^2}\\right)^{1/3} - 1\\right]$.',
        '2. For small $u = \\frac{6}{t} + \\frac{10}{t^2}$, $(1 + u)^{1/3} \\approx 1 + \\frac{1}{3}u = 1 + \\frac{2}{t} + O(t^{-2})$.',
        '3. Multiply by $t$: $t \\cdot \\frac{2}{t} + O(t^{-1}) \\to 2$.',
      ],
      directShortcutUsed: '$\\lim_{t\\to+\\infty}(\\sqrt[n]{t^n + a t^{n-1} + \\dots} - t) = \\frac{a}{n} = \\frac{6}{3} = 2$.',
    },
  ],
}

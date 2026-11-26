import type { ChapterData } from '../../types/curriculum'

export const chapter5: ChapterData = {
  id: 'calc-ch5',
  number: 5,
  title: 'Taylor & Maclaurin Series — Polynomial X-Ray Vision',
  shortTitle: 'Taylor & Maclaurin Series',
  estimatedHours: 4.5,
  dayLabel: 'Week 1 · Day 3',
  tagline:
    'In this chapter you will gain polynomial X-ray vision: by matching height, slope, and curvature, we can turn any smooth curve into a simple polynomial near $x = a$ — letting you crush messy $0/0$ limits in 15 seconds, read off 10th derivatives by eye, and see where the Poisson distribution comes from.',
  syllabusMapping: ['Taylor series of functions of a single variable'],
  whatIsImportant: [
    'General Taylor & Maclaurin formula $c_k = \\frac{f^{(k)}(a)}{k!}$ (and reading $f^{(n)}(0) = n! \\cdot c_n$ backwards!)',
    'The "Big 5" Maclaurin expansions ($e^x, \\ln(1+u), \\cos x, \\sin x, (1+u)^p$) — crushes 95% of GATE $0/0$ limits without L’Hôpital (GATE DA 2024 Q.60)',
    'Even/Odd parity of Maclaurin coefficients: odd functions have $f^{(2m)}(0) = 0$ instantly (GATE DA 2025 Q.14)',
    'Direct bridge $e^\\lambda = \\sum_{k=0}^\\infty \\frac{\\lambda^k}{k!}$ proving Poisson PMF sums to $1$',
  ],
  whatIsNotImportant: [
    'Cauchy vs Schlömilch remainder integral error-bound proofs',
    'Multiplying 8-term tangent/secant Bernoulli-number expansions by hand',
  ],
  inboundStream: 'Ch.1 Infinite Series + Ch.4 Higher-Order Derivatives',
  outboundStream: [
    'Ch.6 Second-Derivative & Higher-Order Extremum Tests + Newton Optimization',
    'Week 2 Poisson Distribution ($\\sum e^{-\\lambda}\\lambda^k/k! = 1$) & Moment Generating Functions',
  ],
  glossary: [
    {
      term: 'Taylor Series (Centered at $a$)',
      symbol: '$\\sum_{k=0}^{\\infty} \\frac{f^{(k)}(a)}{k!}(x - a)^k$',
      plainEnglish:
        'Think of a Taylor series as rebuilding a smooth curve near $x = a$ using powers of $(x - a)$ whose coefficients match the curve’s exact height, slope, curvature, and every higher derivative at $a$.',
      tinyExample: 'Around $a = 1$, $e^x = e\\left(1 + (x - 1) + \\frac{(x - 1)^2}{2!} + \\dots\\right)$.',
    },
    {
      term: 'Maclaurin Series (Centered at $0$)',
      symbol: '$\\sum_{k=0}^{\\infty} \\frac{f^{(k)}(0)}{k!} x^k$',
      plainEnglish:
        'In plain words, a Maclaurin series is just a Taylor series centered right at the origin $a = 0$ — it is the workhorse behind almost every $x \\to 0$ limit shortcut.',
      tinyExample: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots$',
    },
    {
      term: 'Higher-Order Derivative',
      symbol: '$f^{(k)}(a)$',
      plainEnglish:
        'This means differentiating $f$ repeatedly $k$ times and then plugging in $x = a$: $k = 1$ gives slope, $k = 2$ gives curvature, $k = 3$ gives jerk, and so on.',
      tinyExample: 'For $f(x) = e^{2x}$, $f^{(3)}(0) = 2^3 e^0 = 8$.',
    },
    {
      term: 'Factorial',
      symbol: '$k! = k(k - 1)\\cdots 1$',
      plainEnglish:
        'Differentiating $x^k$ exactly $k$ times brings down $k \\cdot (k-1) \\cdots 1 = k!$, so dividing by $k!$ in Taylor’s formula cancels that factor cleanly (with $0! = 1$ by convention).',
      tinyExample: '$3! = 6$, $4! = 24$, and $\\frac{d^4}{dx^4}\\left(\\frac{x^4}{4!}\\right) = 1$.',
    },
    {
      term: 'Linear (Tangent-Line) Approximation',
      symbol: '$f(a) + f\'(a)(x - a)$',
      plainEnglish:
        'Keeping only the degree-0 and degree-1 terms of a Taylor series replaces a curve near $a$ with its straight tangent line — the exact local picture used by Gradient Descent.',
      tinyExample: 'Near $x = 0$, $\\ln(1 + x) \\approx x$, so $\\ln(1.02) \\approx 0.02$.',
    },
    {
      term: 'Quadratic Approximation (Osculating Parabola)',
      symbol: '$f(a) + f\'(a)(x-a) + \\frac{1}{2}f\'\'(a)(x-a)^2$',
      plainEnglish:
        'Adding the degree-2 term curves your tangent line into the best-fitting parabola at $a$, capturing whether the function bends up like a cup or down like a cap.',
      tinyExample: 'For $e^{0.1}$, $1 + 0.1 + \\frac{(0.1)^2}{2} = 1.105$ (true value $1.10517\\dots$).',
    },
    {
      term: 'Big-O & Little-o Remainder Notation',
      symbol: '$O(x^n),\\; o(x^n)$',
      plainEnglish:
        'Think of $O(x^4)$ near $x = 0$ as "leftover terms of degree $4$ or higher" that shrink at least as fast as $x^4$, while $o(x^d)$ shrinks strictly faster than $x^d$ so $o(x^d)/x^d \\to 0$.',
      tinyExample: 'In $\\frac{x^2 - \\frac{1}{2}x^2 + O(x^4)}{x^2} = \\frac{1}{2} + O(x^2)$, the $O(x^2)$ dust vanishes as $x \\to 0$.',
    },
    {
      term: 'Coefficient Extraction Operator',
      symbol: '$[x^n]f(x)$',
      plainEnglish:
        'In plain words, $[x^n]f(x)$ simply means "read off the number sitting in front of $x^n$ in the Maclaurin expansion of $f(x)$" — multiply that number by $n!$ to get $f^{(n)}(0)$ without differentiating!',
      tinyExample: 'Since $e^x = \\sum \\frac{x^n}{n!}$, $[x^5]e^x = \\frac{1}{5!}$ and $f^{(5)}(0) = 5! \\cdot \\frac{1}{5!} = 1$.',
    },
    {
      term: 'Binomial Series (Fractional Exponent)',
      symbol: '$(1 + u)^p = 1 + pu + \\frac{p(p-1)}{2!}u^2 + \\dots$',
      plainEnglish:
        'This generalizes the familiar $(1+u)^2$ expansion to any real exponent $p$ (like $1/2$ for square roots or $-1$ for reciprocals) whenever $|u| < 1$.',
      tinyExample: '$\\sqrt{1 + u} = (1 + u)^{1/2} = 1 + \\frac{1}{2}u - \\frac{1}{8}u^2 + \\dots$',
    },
    {
      term: 'Hyperbolic Sine & Cosine',
      symbol: '$\\sinh x,\\; \\cosh x$',
      plainEnglish:
        'Think of $\\cosh x = \\frac{e^x + e^{-x}}{2}$ as the even part of $e^x$ (only even powers $1 + \\frac{x^2}{2!} + \\dots$) and $\\sinh x = \\frac{e^x - e^{-x}}{2}$ as the odd part (only odd powers $x + \\frac{x^3}{3!} + \\dots$).',
      tinyExample: 'Because $\\sinh x$ is odd, every even derivative at $0$ — like $f^{(10)}(0)$ — is instantly $0$.',
    },
    {
      term: 'Newton’s Optimization Step',
      symbol: '$w_{t+1} = w_t - \\frac{L\'(w_t)}{L\'\'(w_t)}$',
      plainEnglish:
        'Instead of just following the tangent slope, Newton’s method fits a degree-2 Taylor parabola at $w_t$ and jumps straight to the bottom of that parabola in one move.',
      tinyExample: 'On any pure quadratic bowl $L(w) = \\frac{a}{2}(w - w^*)^2$, Newton’s step lands on $w^*$ in $1$ iteration.',
    },
  ],
  generatorId: 'maclaurin-limit-gen',
  concepts: [
    {
      id: 'c5-1',
      title: 'Building Taylor Series From Scratch: Value + Slope + Curvature (Why $k!$ Appears!)',
      subtitle: 'Constructing a degree-2 clone of $e^x$ at $x = 0$ with concrete numbers before writing $\\sum$',
      priority: 'core-pillar',
      buildsOn: 'Ch.4 Derivatives $f\'(0), f\'\'(0)$',
      sandboxId: 'taylor-maclaurin-lab',
      whyStudy:
        'A CPU chip can ONLY add, subtract, multiply, and divide — it has zero native "cosine" or "exponential" circuit! Yet your calculator evaluates $e^{0.1}$ or $\\cos(0.3)$ to 16 digits instantly, AND Machine Learning optimizers approximate messy neural loss landscapes using straight tangent lines (Gradient Descent) and best-fitting bowls (Newton’s Method & Ch.6’s Second Derivative Test). **Taylor Series** is the universal bridge that translates ANY smooth curve near a point $x = a$ into an easy, grade-school polynomial!',
      groundRules: [
        '**Polynomials Are Easy Because Each Power $(x - a)^k$ Isolates One Derivative at $x = a$:** When you differentiate $(x - a)^k$ repeatedly, plugging in $x = a$ kills every higher power (since $(a - a) = 0$) and differentiating kills every lower power (constant differentiates to $0$). Only the exact $k$-th term survives!',
        '**Why $k!$ (k-Factorial) Appears Automatically:** Differentiating $(x - a)^k$ exactly $k$ times brings down $k$, then $k - 1$, then $k - 2$, all the way down to $1$ — multiplying out $k! = k(k - 1)\\cdots 1$ (with $0! = 1$ by convention). Dividing by $k!$ cancels that factor cleanly so the $k$-th derivative of $\\frac{f^{(k)}(a)}{k!}(x - a)^k$ lands right on $f^{(k)}(a)$!',
        '**Center $a$ Controls Where the Clone Fits Tightest:** Expanding in powers of $(x - a)$ makes $(x - a)$ tiny whenever $x$ is near $a$, so higher powers $(x - a)^2, (x - a)^3, \\dots$ shrink rapidly! A **Maclaurin Series** is simply the special case centered at the origin $a = 0$ (powers of $x$).',
        '**Each Extra Degree Adds One Layer of Geometric Shape:** Degree $0$ matches **height** ($f(a)$); Degree $1$ adds **slope** (the straight tangent line); Degree $2$ adds **curvature** (the best-fitting cup/cap parabola $\\frac{1}{2}f\'\'(a)(x - a)^2$ that powers Ch.6’s Second Derivative Test!).',
      ],
      toyExample: {
        title: 'Forging a Fake Polynomial $P(x) = c_0 + c_1 x + c_2 x^2 + c_3 x^3$ That Impersonates $e^x$ at $x = 0$',
        scenario:
          'We know every single derivative of $f(x) = e^x$ is still $e^x$, so evaluated at $x = 0$, every derivative equals $e^0 = \\mathbf{1}$. Let’s build a polynomial clone $P(x)$ from scratch by forcing it to match $e^x$ at $x = 0$ in height, slope, curvature, and 3rd derivative one piece at a time:',
        walkthroughSteps: [
          '1. **Match Height at $x = 0$ ($k = 0$):** Plug $x = 0$ into $P(x)$: $P(0) = c_0$. Setting $P(0) = 1$ gives **$c_0 = 1$**.',
          '2. **Match Slope at $x = 0$ ($k = 1$):** Differentiate once: $P\'(x) = c_1 + 2c_2 x + 3c_3 x^2$. Plug $x = 0$: $P\'(0) = c_1$. Setting $P\'(0) = 1$ gives **$c_1 = 1$**.',
          '3. **Match Curvature / 2nd Derivative at $x = 0$ ($k = 2$):** Differentiate again: $P\'\'(x) = 2c_2 + 6c_3 x$. Plug $x = 0$: $P\'\'(0) = 2c_2$. Setting $2c_2 = 1$ forces **$c_2 = \\frac{1}{2} = \\frac{1}{2!}$**! (Watch where that $2$ came from: differentiating $x^2$ twice dropped $2 \\times 1 = 2!$ in front!)',
          '4. **Match 3rd Derivative at $x = 0$ ($k = 3$):** Differentiate a third time: $P\'\'\'(x) = 6c_3$. Setting $6c_3 = 1$ forces **$c_3 = \\frac{1}{6} = \\frac{1}{3!}$**!',
        ],
        ahaMoment:
          'Now you never have to wonder where $k!$ comes from! Differentiating $x^k$ exactly $k$ times multiplies out **$k!$** ($k(k-1)\\dots 1$), while all lower powers die and all higher powers vanish at $x = 0$. Dividing by $k!$ cancels that factor cleanly — and THAT is the entire secret behind $\\frac{f^{(k)}(a)}{k!}$!',
      },
      theoremAndFormula: {
        statement:
          'For a smooth function $f$ around $x = a$ (**Taylor Series**; when $a = 0$, called **Maclaurin Series**), where $\\sum_{k=0}^{\\infty}$ means "add the terms for $k = 0, 1, 2, \\dots$ forever" and $f^{(k)}(a)$ means "the $k$-th derivative of $f$ evaluated at $a$" (with $f^{(0)}(a) = f(a)$):',
        formulaLatex:
          'f(x) = \\sum_{k=0}^{\\infty} \\frac{f^{(k)}(a)}{k!}(x - a)^k = f(a) + f\'(a)(x-a) + \\frac{f\'\'(a)}{2!}(x-a)^2 + \\frac{f\'\'\'(a)}{3!}(x-a)^3 + \\dots',
        plainEnglishDecoding:
          'Think of cutting off a Taylor series as choosing your lens zoom around $x = a$:\n• **Degree-1 truncation** $f(a) + f\'(a)(x - a)$ gives the straight **Tangent Line** (the engine behind Gradient Descent).\n• **Degree-2 truncation** $f(a) + f\'(a)(x - a) + \\frac{1}{2}f\'\'(a)(x - a)^2$ gives the **Best-Fitting Parabola** (the engine behind the Second Derivative Test and Newton’s Method!).',
        workedMiniExamples: [
          {
            prompt: 'Write the exact Taylor polynomial of $f(x) = x^2 + 3x + 1$ centered at $a = 1$.',
            solution:
              '**Step 1 (Compute derivatives at $a = 1$):**\n• $f(1) = 1^2 + 3(1) + 1 = 5$\n• $f\'(x) = 2x + 3 \\implies f\'(1) = 5$\n• $f\'\'(x) = 2 \\implies f\'\'(1) = 2$ (all 3rd and higher derivatives equal $0$!).\n**Step 2 (Plug into Taylor’s formula around $a = 1$):** $f(x) = 5 + 5(x - 1) + \\frac{2}{2!}(x - 1)^2 = \\mathbf{5 + 5(x - 1) + (x - 1)^2}$ (exact!).',
          },
          {
            prompt: 'Approximate $e^{0.1}$ to 3 decimal places mentally using Degree-2 Maclaurin.',
            solution:
              '**Step 1 (Write Degree-2 Maclaurin of $e^x$):** $e^x \\approx 1 + x + \\frac{x^2}{2!}$.\n**Step 2 (Plug in $x = 0.1$):** $1 + 0.1 + \\frac{(0.1)^2}{2} = 1 + 0.1 + \\frac{0.01}{2} = 1 + 0.1 + 0.005 = \\mathbf{1.105}$ (calculator truth: $1.10517\\dots$!).',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Forgetting the $1/2!$ or $1/3!$ factorial denominator when writing quadratic/cubic approximations.',
          reality: 'Always check $(x^k / k!)$ by differentiating mentally: derivative of $\\frac{x^2}{2}$ is $x$, derivative of $x$ is $1$.',
          counterExample: 'Writing $\\cos x \\approx 1 - x^2$ instead of $1 - \\frac{x^2}{2}$ makes your limit off by a factor of $2$!',
        },
      ],
    },
    {
      id: 'c5-2',
      title: 'The "Big 5" Maclaurin Series & 15-Second Limit Crushing',
      subtitle: 'Replacing ugly logs, cosines, and exponentials near $x = 0$ with clean grade-school polynomials',
      priority: 'core-pillar',
      buildsOn: 'Step 5.1 Maclaurin formula at $a = 0$',
      whyStudy:
        'Using L’Hôpital’s Rule twice or three times on a composite $0/0$ limit like **GATE DA 2024 Q.60** ($\\lim_{x\\to 0} \\frac{\\ln((x^2+1)\\cos x)}{x^2}$) explodes into ugly nested product and quotient rules where one tiny minus-sign slip costs you 2 full marks. Memorizing just **5 Maclaurin expansions** lets you swap out $\\ln$, $\\cos$, $\\sin$, $e^x$, and $\\sqrt{1+x}$ for plain polynomials in seconds — AND simultaneously proves that the Poisson PMF sums to $1$ in Week 2!',
      groundRules: [
        '**Match Your Expansion Degree to the Denominator (Why $o(x^d)$ Dust Vanishes):** As $x \\to 0$, higher powers shrink dramatically faster than lower powers ($x^4 / x^2 = x^2 \\to 0$). The notation $O(x^4)$ means "leftover terms of degree $4$ or higher" and $o(x^d)$ means "terms shrinking strictly faster than $x^d$ so $o(x^d)/x^d \\to 0$." Therefore, if your denominator is $x^2$, you NEVER need terms beyond $x^2$!',
        '**The Leading-Cancellation Rule (Go One Power Deeper!):** If expanding to degree $1$ makes the numerator cancel cleanly to $0$ (like $x - \\sin x \\approx x - x = 0$ over $x^3$), you stopped too early! Keep expanding until the **first surviving nonzero power** appears ($\\sin x = x - \\frac{x^3}{6} + \\dots$).',
        '**Substitution Works Automatically Whenever the Inner Input $u \\to 0$:** You don’t need a separate series for $e^{x^2}$, $\\cos(2x)$, or $\\ln(1 + x^2)$! Because $u = x^2 \\to 0$ as $x \\to 0$, just substitute $u = x^2$ straight into the Big 5 formula (and check $|u| < 1$ for $\\ln(1+u)$ and $(1+u)^p$!).',
        '**Factorial vs. Plain-Integer Memory Rule:** $e^u, \\sin u,$ and $\\cos u$ all divide by **$k!$** ($2!, 3!, 4!\\dots$), whereas $\\ln(1 + u)$ divides by **plain integers $1, 2, 3, 4\\dots$ (NO factorials!)** because it comes from integrating the geometric series $\\frac{1}{1+u} = 1 - u + u^2 - u^3 + \\dots$ term by term!',
      ],
      toyExample: {
        title: 'Solving GATE DA 2024 Q.60 Without Touching L’Hôpital’s Rule',
        scenario:
          'Take a look at GATE DA 2024 Q.60 (2-mark NAT): $\\lim_{x \\to 0} \\frac{\\ln((x^2 + 1)\\cos x)}{x^2}$. Applying L’Hôpital twice here creates a tangle of product and quotient rules. Instead, watch how calmly Polynomial X-Ray Vision slices right through it:',
        walkthroughSteps: [
          '1. **Split the log of a product first (Ch.1 rule!):** $\\ln\\big((1 + x^2)\\cos x\\big) = \\ln(1 + x^2) + \\ln(\\cos x)$.',
          '2. **Check the denominator degree ($x^2$) and expand piece #1 up to $x^2$:** Substitute $u = x^2$ into $\\ln(1 + u) = u - \\frac{u^2}{2} + \\dots$ to get $\\ln(1 + x^2) = x^2 + O(x^4)$.',
          '3. **Expand piece #2 up to $x^2$:** Replace $\\cos x = 1 - \\frac{x^2}{2} + O(x^4)$, then treat $u = -\\frac{x^2}{2} + O(x^4)$ inside $\\ln(1 + u) \\approx u$, giving $\\ln(\\cos x) = -\\frac{x^2}{2} + O(x^4)$!',
          '4. **Add and divide by $x^2$:** $\\frac{x^2 - \\frac{1}{2}x^2 + O(x^4)}{x^2} = \\frac{\\frac{1}{2}x^2 + O(x^4)}{x^2} = \\frac{1}{2} + O(x^2) \\xrightarrow{x \\to 0} \\mathbf{0.5}$ — **done in 15 seconds flat!**',
        ],
        ahaMoment:
          'Notice how little work you actually have to do: when $x \\to 0$ and the denominator has degree $d$ (like $x^2$ or $x^4$), **every power higher than $x^d$ shrinks to invisible dust ($o(x^d)/x^d \\to 0$)** — so you only ever expand up to degree $d$!',
      },
      theoremAndFormula: {
        statement:
          'Memorize these **Big 5 Maclaurin Expansions** cold (where $\\forall u$ means "for every real number $u$", and $|u| < 1$ means "strictly inside the open interval $(-1, 1)$"):',
        formulaLatex:
          '\\begin{aligned} e^u &= 1 + u + \\frac{u^2}{2!} + \\frac{u^3}{3!} + \\dots \\;(\\forall u) \\\\[4pt] \\ln(1+u) &= u - \\frac{u^2}{2} + \\frac{u^3}{3} - \\frac{u^4}{4} + \\dots \\;(|u|<1) \\\\[4pt] \\cos u &= 1 - \\frac{u^2}{2!} + \\frac{u^4}{4!} - \\dots \\qquad \\sin u = u - \\frac{u^3}{3!} + \\frac{u^5}{5!} - \\dots \\\\[4pt] (1+u)^p &= 1 + pu + \\frac{p(p-1)}{2!}u^2 + \\dots \\;(|u|<1) \\end{aligned}',
        plainEnglishDecoding:
          'Notice how every single pattern has a clean sanity check: $\\cos u$ is **even** so it keeps only even powers ($u^0, u^2, u^4\\dots$) with alternating signs; $\\sin u$ is **odd** so it keeps only odd powers ($u^1, u^3, u^5\\dots$) with alternating signs; $e^u$ keeps all powers with all $+$ signs; and $\\ln(1+u)$ has **no factorials** ($1, 2, 3, 4$) with alternating signs starting at $+u$!',
        workedMiniExamples: [
          {
            prompt: 'Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1 - x - x^2/2}{x^3}$.',
            solution:
              '**Step 1 (Match the denominator $x^3$):** Expand $e^x$ up to $x^3$: $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + O(x^4) = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + O(x^4)$.\n**Step 2 (Subtract $1 + x + x^2/2$):** The first three terms cancel cleanly, leaving $\\frac{x^3/6 + O(x^4)}{x^3} = \\frac{1}{6} + O(x)$.\n**Step 3 (Take $x \\to 0$):** The $O(x)$ dust vanishes, leaving **$\\frac{1}{6}$**!',
          },
          {
            prompt: 'Prove that the Poisson($\\lambda$) PMF $P(X = k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}$ ($k = 0, 1, 2, \\dots$) sums to $1$.',
            solution:
              '**Step 1 (Factor out the constant $e^{-\\lambda}$):** Since $e^{-\\lambda}$ does not depend on the summation index $k$, pull it in front: $\\sum_{k=0}^{\\infty} \\frac{e^{-\\lambda}\\lambda^k}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!}$.\n**Step 2 (Recognize row #1 of the Big 5):** $\\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{\\lambda}$.\n**Step 3 (Multiply):** $e^{-\\lambda} \\cdot e^{\\lambda} = e^0 = \\mathbf{1}$!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Stopping at the first term $\\sin x \\approx x$ inside $\\frac{x - \\sin x}{x^3}$ gives $\\frac{x - x}{x^3} = 0$.',
          reality: 'CANCELLATION RULE: Whenever leading terms cancel to $0$, you MUST keep the next surviving power ($\\sin x = x - \\frac{x^3}{6} + \\dots$), giving $\\frac{x^3/6}{x^3} = \\frac{1}{6}$!',
          counterExample: '$\\lim_{x\\to 0}\\frac{x - \\sin x}{x^3} = \\frac{1}{6} \\neq 0$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Poisson PMF, Mean & Variance Derivations',
          whyItMatters: 'Every Poisson sum in Probability is literally $e^\\lambda = \\sum \\lambda^k / k!$ in disguise!',
          pyqProof: 'GATE DA 2024 · Q.60 (2M NAT) & GATE DA 2026 · Q.45 (2M MCQ)',
        },
      ],
    },
    {
      id: 'c5-3',
      title: 'Extracting $n$-th Derivatives at $0$ Instantly (Coefficient Reading & Parity)',
      subtitle: 'How to find $f^{(10)}(0)$ in 3 seconds without differentiating even once',
      priority: 'high-yield',
      buildsOn: 'Step 5.1 Uniqueness of Power Series + Ch.1 Even/Odd Symmetry',
      whyStudy:
        'When GATE asks for a high-order derivative at the origin — like the 10th derivative of $\\frac{e^x - e^{-x}}{2}$ at $x = 0$ (**GATE DA 2025 Q.14**) or the 6th derivative of $x^2 \\cos(2x)$ at $x = 0$ — differentiating by hand with the Product Rule is a slow, error-prone nightmare. Running Taylor’s formula **backwards** lets you read off ANY $n$-th derivative at $0$ in 5–10 seconds without taking a single derivative!',
      groundRules: [
        '**Uniqueness of Power Series (The Two-Way Street):** A smooth function has ONLY ONE power series $\\sum_{n=0}^{\\infty} a_n x^n$ around $x = 0$. Therefore, no matter HOW you got the series (by algebra, multiplying by $x^2$, or substituting $2x$ into $\\cos u$), its $x^n$ coefficient $a_n$ is guaranteed to equal $\\frac{f^{(n)}(0)}{n!}$!',
        '**Reverse Extraction Formula ($f^{(n)}(0) = n! \\cdot a_n$):** Solving $a_n = \\frac{f^{(n)}(0)}{n!}$ for the derivative gives $f^{(n)}(0) = n! \\cdot [x^n]f(x)$ (where $[x^n]f(x)$ is shorthand for *"the coefficient standing in front of $x^n$"*). Never forget to multiply by **$n!$** at the end!',
        '**Parity Kills Half of All Derivatives at $0$ Instantly:** An **Odd** function ($f(-x) = -f(x)$) can ONLY contain odd powers $x^1, x^3, x^5, \\dots$, so EVERY even derivative at $0$ ($f^{(2m)}(0)$, where $2m = 0, 2, 4, 6, \\dots$) equals **$0$**! Conversely, an **Even** function ($f(-x) = f(x)$) contains ONLY even powers, so EVERY odd derivative at $0$ ($f^{(2m+1)}(0)$, where $2m + 1 = 1, 3, 5, \\dots$) equals **$0$**!',
      ],
      toyExample: {
        title: 'Finding the 10th Derivative of $\\sinh x = \\frac{e^x - e^{-x}}{2}$ at $x = 0$ (GATE DA 2025 Q.14)',
        scenario:
          'Imagine being asked for the 10th derivative of $\\frac{e^x - e^{-x}}{2}$ at $x = 0$ during a timed exam. You could differentiate ten times — OR you can pause for one second and spot its symmetry:',
        walkthroughSteps: [
          '1. **Test Even/Odd parity first:** Replace $x$ with $-x$: $f(-x) = \\frac{e^{-x} - e^x}{2} = -\\frac{e^x - e^{-x}}{2} = -f(x)$. So **$f$ is ODD!**',
          '2. **Check the Maclaurin powers of an odd function:** An odd function’s Maclaurin series contains **ONLY odd powers** ($x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\dots$) — every even power $x^0, x^2, x^4, \\dots, x^{10}$ has coefficient **$0$**!',
          '3. **Read off $f^{(10)}(0)$:** Since $\\frac{f^{(10)}(0)}{10!} = [x^{10}]f(x) = 0$, multiplying by $10!$ still gives $f^{(10)}(0) = \\mathbf{0}$ in **3 seconds**!',
        ],
        ahaMoment:
          'Think of Taylor’s formula as a two-way street: because a function’s power series is unique, you NEVER need to differentiate a product like $x^4 \\cos(2x)$ ten times by hand — just write down its Maclaurin series, pluck the coefficient sitting on $x^n$, and multiply by **$n!$**!',
      },
      theoremAndFormula: {
        statement:
          'If $f(x) = \\sum_{n=0}^{\\infty} a_n x^n$ near $x = 0$, then for every integer $n \\ge 0$ (with $m = 0, 1, 2, \\dots$, so $2m$ means any even order and $2m + 1$ means any odd order):',
        formulaLatex:
          'f^{(n)}(0) = n! \\cdot \\big[x^n\\big]f(x), \\qquad \\begin{cases} f \\text{ Odd} \\implies f^{(2m)}(0) = 0 \\\\ f \\text{ Even} \\implies f^{(2m+1)}(0) = 0 \\end{cases}',
        plainEnglishDecoding:
          'In plain words, the bracket operator $[x^n]f(x)$ simply asks: *"What number sits in front of $x^n$ when I expand $f(x)$ around $0$?"* Always check Even/Odd parity first (half the time the answer is instant `0`!); if nonzero, pluck $[x^n]f(x)$ and multiply by $n!$ to recover $f^{(n)}(0)$!',
        workedMiniExamples: [
          {
            prompt: 'Compute $f^{(6)}(0)$ for $f(x) = x^2 e^{3x}$ without differentiating!',
            solution:
              '**Step 1 (Shift the target power because of $x^2$):** To form $x^6$ inside $x^2 \\cdot e^{3x}$, we need the $x^4$ term from $e^{3x}$: $[x^6](x^2 e^{3x}) = [x^4](e^{3x})$.\n**Step 2 (Read $[x^4](e^{3x})$ from row #1 of the Big 5):** Substituting $u = 3x$ into $\\frac{u^4}{4!}$ gives $\\frac{(3x)^4}{4!} = \\frac{81}{4!}x^4$, so the coefficient is $\\frac{81}{4!}$.\n**Step 3 (Multiply by $6!$):** $f^{(6)}(0) = 6! \\times \\frac{81}{4!} = \\frac{6 \\times 5 \\times 4!}{4!} \\times 81 = 30 \\times 81 = \\mathbf{2430}$ — ten seconds flat!',
          },
          {
            prompt: 'Compute $g^{(7)}(0)$ for $g(x) = \\cos(x^2)$.',
            solution:
              '**Step 1 (Check parity):** $g(-x) = \\cos((-x)^2) = \\cos(x^2) = g(x)$, so $g$ is **Even** (in fact, its Maclaurin series only has powers $x^0, x^4, x^8, \\dots$).\n**Step 2 (Apply parity rule):** Because $n = 7$ is odd, every odd derivative at $0$ vanishes immediately: $g^{(7)}(0) = \\mathbf{0}$!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Reading the coefficient $a_n$ of $x^n$ and forgetting to multiply by $n!$ at the end.',
          reality: 'Remember $a_n = \\frac{f^{(n)}(0)}{n!} \\iff f^{(n)}(0) = n! \\cdot a_n$!',
          counterExample: 'In $e^x = \\sum \\frac{1}{n!} x^n$, the coefficient of $x^5$ is $\\frac{1}{120}$, whereas the 5th derivative at $0$ is $120 \\times \\frac{1}{120} = 1$!',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'pb-5-1',
      title: 'Log-Product Split + Degree-Matched Maclaurin Truncation',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2024 · Q.60 (2M NAT)'],
      problemStatement:
        'Evaluate $\\lim_{x \\to 0} \\frac{\\ln((x^2 + 1)\\cos x)}{x^2}$.',
      triggerCue:
        'A $0/0$ limit at $x \\to 0$ with denominator $x^k$ and composite logs/trigs/exponentials on top.',
      bruteForceTrap:
        'Differentiating $\\ln((x^2+1)\\cos x)$ twice via L’Hôpital: $\\frac{2x\\cos x - (x^2+1)\\sin x}{(x^2+1)\\cos x}$ divided by $2x$ — slow and error-prone.',
      mentalShift:
        'Use Chapter 1’s log rule first to split $\\ln(AB) = \\ln A + \\ln B$, glance at the denominator power $x^2$, and then expand each piece ONLY up to $x^2$ — ignoring all higher powers!',
      steps: [
        {
          label: 'Split the logarithm of the product',
          detail: '$\\ln\\big((1 + x^2)\\cos x\\big) = \\ln(1 + x^2) + \\ln(\\cos x)$.',
        },
        {
          label: 'Expand each piece up to O(x^2)',
          detail:
            '• $\\ln(1 + x^2) = x^2 + O(x^4)$.\n• Since $\\cos x = 1 - \\frac{x^2}{2} + O(x^4)$, $\\ln(\\cos x) = \\ln\\!\\left(1 - \\frac{x^2}{2} + O(x^4)\\right) = -\\frac{x^2}{2} + O(x^4)$.',
        },
        {
          label: 'Combine and divide by x^2',
          detail:
            '$$\\frac{x^2 - \\frac{1}{2}x^2 + O(x^4)}{x^2} = \\frac{1}{2} + O(x^2) \\xrightarrow{x \\to 0} 0.5$$',
        },
      ],
      lockInTakeaway:
        'Bonus shortcut to lock into memory: near $x = 0$, $\\ln(\\cos x) = -\\frac{x^2}{2} - \\frac{x^4}{12} - \\dots$!',
    },
    {
      id: 'pb-5-2',
      title: 'High-Order Derivatives $f^{(n)}(0)$ Without Differentiating',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2025 · Q.14 (1M MCQ)'],
      problemStatement:
        'Let $f(x) = \\frac{e^x - e^{-x}}{2}$ for $x \\in \\mathbb{R}$. Find the 10th derivative $f^{(10)}(0)$ at $x = 0$.',
      triggerCue:
        'Any question asking for a high-order derivative ($f^{(5)}(0), f^{(8)}(0), f^{(10)}(0)$) at $x = 0$.',
      bruteForceTrap:
        'Computing $f\', f\'\', f\'\'\', \\dots$ one by one (though here $e^x$ and $e^{-x}$ cycle cleanly, on $x^2 \\sin(x)$ manual differentiation is a nightmare!).',
      mentalShift:
        'Always check Even/Odd parity first — half the time the derivative at $0$ vanishes immediately to `0`! And if it is nonzero, simply read the $x^n$ coefficient from the Big 5 table and multiply by $n!$.',
      steps: [
        {
          label: 'Test Parity f(-x) vs f(x)',
          detail: '$f(-x) = \\frac{e^{-x} - e^x}{2} = -f(x)$ ($f$ is **Odd**).',
        },
        {
          label: 'Conclude for even order n = 10',
          detail:
            'Odd functions have only odd powers in their Maclaurin expansion, so $[x^{10}]f(x) = 0 \\implies f^{(10)}(0) = 0$! (Even faster check: differentiating $10$ times flips $-e^{-x}$ ten times back to $-e^{-x}$, so $f^{(10)}(0) = \\frac{e^0 - e^0}{2} = 0$!)',
        },
      ],
      lockInTakeaway:
        'High derivative at $0$ $\\implies$ **Step 1: Parity check. Step 2: $n! \\times (\\text{coeff of } x^n)$!**',
    },
    {
      id: 'pb-5-3',
      title: 'How Degree-2 Taylor Births Newton’s Step & Quadratic Loss Bowls in ML',
      difficulty: 'Moderate',
      relatedPyqs: ['Bridge to Ch.6 Optimization & Week 7 ML'],
      problemStatement:
        'Near current weight $w_t$, approximate loss $L(w) \\approx L(w_t) + L\'(w_t)(w - w_t) + \\frac{1}{2}L\'\'(w_t)(w - w_t)^2$ ($L\'\'(w_t) > 0$) and find the minimum $w_{t+1}$ of this quadratic bowl.',
      triggerCue:
        'Connecting Taylor series directly to Optimization (why curvature $L\'\'$ governs ideal learning rate!).',
      bruteForceTrap:
        'Memorizing Newton’s update $w_{t+1} = w_t - \\frac{L\'(w_t)}{L\'\'(w_t)}$ as a disconnected formula.',
      mentalShift:
        'Treat the Degree-2 Taylor approximation as an ordinary upward parabola in $w$ — simply differentiate it with respect to $w$ and set the slope to $0$ to find its exact vertex $w_{t+1}$!',
      steps: [
        {
          label: 'Set derivative of quadratic Taylor model to 0',
          detail:
            '$$\\frac{d}{dw}\\Big[L(w_t) + L\'(w_t)(w - w_t) + \\frac{1}{2}L\'\'(w_t)(w - w_t)^2\\Big] = L\'(w_t) + L\'\'(w_t)(w - w_t) = 0$$',
        },
        {
          label: 'Solve for w = w_{t+1}',
          detail:
            '$$w_{t+1} = w_t - \\frac{1}{L\'\'(w_t)} L\'(w_t)$$\nLook at that: Newton’s method is literally **Gradient Descent with optimal local learning rate $\\eta = 1 / L\'\'(w_t)$**!',
        },
      ],
      lockInTakeaway:
        'On any pure quadratic $L(w)$, setting $\\eta = 1/L\'\'$ jumps to the exact minimum in **1 single step**!',
    },
  ],
  arsenalCards: [
    {
      id: 'ac-5-1',
      badge: 'Big 5 Maclaurin Cheat Card',
      whenYouSpot: 'Any $0/0$ limit at $x \\to 0$ or power-series sum',
      directWeaponLatex: 'e^u = 1+u+\\frac{u^2}{2}+\\frac{u^3}{6}, \\quad \\ln(1+u) = u-\\frac{u^2}{2}+\\frac{u^3}{3}, \\quad \\cos u = 1-\\frac{u^2}{2}+\\frac{u^4}{24}, \\quad \\sin u = u-\\frac{u^3}{6}',
      instantRule: 'Expand only up to the lowest surviving power matching the denominator!',
      tenSecondExample: '$\\frac{\\cos x - 1 + x^2/2}{x^4} \\to \\frac{1}{24}$.',
      oneFatalTrap: '$\\ln(1+u)$ has denominators $1, 2, 3, 4$ (NO factorials!), whereas $\\sin, \\cos, e^u$ have $k!$!',
    },
    {
      id: 'ac-5-2',
      badge: 'ln(cos x) Pocket Expansion',
      whenYouSpot: '$\\ln(\\cos(kx))$ inside a $0/0$ limit near $x = 0$',
      directWeaponLatex: '\\ln(\\cos x) = -\\frac{x^2}{2} - \\frac{x^4}{12} - O(x^6)',
      instantRule: 'Saves two nested substitutions on GATE log-trig limits!',
      tenSecondExample: 'GATE 2024 Q.60: $\\frac{\\ln(1+x^2) + \\ln(\\cos x)}{x^2} = \\frac{x^2 - x^2/2}{x^2} = 0.5$.',
      oneFatalTrap: 'Sign is **negative** ($-x^2/2$) because $\\cos x < 1$ near $0 \\implies \\ln(\\cos x) < 0$!',
    },
    {
      id: 'ac-5-3',
      badge: 'n-th Derivative Extractor',
      whenYouSpot: '"Find $f^{(n)}(0)$" for a product/composite function',
      directWeaponLatex: 'f^{(n)}(0) = n! \\times \\big(\\text{coefficient of } x^n \\text{ in Maclaurin of } f\\big)',
      instantRule: '1) Check Even/Odd parity first ($=0$ half the time!). 2) Otherwise pluck coeff of $x^n$ and multiply by $n!$.',
      tenSecondExample: '$f(x) = \\sinh x \\implies$ odd $\\implies f^{(10)}(0) = 0$ (GATE 2025 Q.14).',
      oneFatalTrap: 'Never forget the factor of $n!$ at the end!',
    },
    {
      id: 'ac-5-4',
      badge: 'Poisson Taylor Sum Identity',
      whenYouSpot: '$\\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!}$ or $\\sum_{k=1}^{\\infty} k \\frac{\\lambda^k}{k!}$',
      directWeaponLatex: '\\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{\\lambda}, \\qquad \\sum_{k=1}^{\\infty} k \\frac{\\lambda^k}{k!} = \\lambda e^{\\lambda}',
      instantRule: 'Cancel $k / k! = 1 / (k-1)!$ and pull one $\\lambda$ out front — that’s how $E[\\text{Poisson}(\\lambda)] = \\lambda$ is proved in 1 line!',
      tenSecondExample: '$\\sum_{k=0}^\\infty \\frac{2^k}{k!} = e^2$; $\\sum_{k=1}^\\infty \\frac{2^k}{k!} = e^2 - 1$ (watch $k=1$ start!).',
      oneFatalTrap: 'If sum starts at $k=1$, subtract the missing $k=0$ term ($= 1$): $\\sum_{k=1}^\\infty \\lambda^k/k! = e^\\lambda - 1$!',
    },
    {
      id: 'ac-5-5',
      badge: 'Binomial Fractional Series (1+u)^p',
      whenYouSpot: '$\\sqrt{1 + u} = (1+u)^{1/2}$ or $\\frac{1}{\\sqrt{1+u}} = (1+u)^{-1/2}$ near $u = 0$',
      directWeaponLatex: '\\sqrt{1+u} = 1 + \\frac{1}{2}u - \\frac{1}{8}u^2 + \\dots, \\qquad (1+u)^{-1} = 1 - u + u^2 - u^3 + \\dots',
      instantRule: 'First correction to $\\sqrt{1+u}$ is $+\\frac{1}{2}u$; second correction is $-\\frac{1}{8}u^2$!',
      tenSecondExample: '$\\lim_{x\\to 0}\\frac{\\sqrt{1+x^2} - 1}{x^2} = \\frac{1}{2} = 0.5$.',
      oneFatalTrap: 'Sign of the quadratic term in $\\sqrt{1+u}$ is **minus** ($-\\frac{1}{8}u^2$) because $\\frac{(1/2)(-1/2)}{2!} = -\\frac{1}{8}$!',
    },
  ],
  questions: [
    {
      id: 'q-5-1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'Evaluate $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$ (round to 3 decimal places).',
      natAnswer: { min: 0.165, max: 0.168, exactDisplay: '1/6 ≈ 0.167' },
      triggerHint: 'Because the leading $x$ terms cancel out and the denominator is $x^3$, expand $\\sin x$ one step deeper to $x - \\frac{x^3}{3!} + O(x^5)$!',
      intuitiveSolution: [
        '1. Substitute $\\sin x = x - \\frac{x^3}{6} + O(x^5)$ into the numerator: $x - (x - \\frac{x^3}{6} + O(x^5)) = \\frac{x^3}{6} + O(x^5)$.',
        '2. Divide by $x^3$ and let $x \\to 0$: $\\frac{1}{6} \\approx 0.167$.',
      ],
      directShortcutUsed: 'Maclaurin cubic term of $\\sin x$.',
    },
    {
      id: 'q-5-2',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2',
      marks: 1,
      type: 'NAT',
      stem: 'Find the coefficient of $(x - 1)^2$ in the Taylor series expansion of $f(x) = x^3$ centered at $a = 1$.',
      natAnswer: { min: 2.99, max: 3.01, exactDisplay: '3' },
      triggerHint: 'Remember Taylor’s coefficient formula: the number in front of $(x - a)^2$ is $\\frac{f\'\'(a)}{2!}$ — don’t forget to divide $f\'\'(1)$ by $2!$!',
      intuitiveSolution: [
        '1. $f\'(x) = 3x^2 \\implies f\'\'(x) = 6x \\implies f\'\'(1) = 6$.',
        '2. Coefficient of $(x - 1)^2$ is $\\frac{f\'\'(1)}{2!} = \\frac{6}{2} = 3$. (Check: $((x-1)+1)^3 = 1 + 3(x-1) + 3(x-1)^2 + (x-1)^3$!)',
      ],
      directShortcutUsed: '$c_2 = \\frac{f\'\'(a)}{2!} = \\frac{6}{2} = 3$.',
    },
    {
      id: 'q-5-3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.60',
      year: 2024,
      marks: 2,
      type: 'NAT',
      stem: 'Evaluate the following limit (round off to one decimal place): $$\\lim_{x \\to 0} \\frac{\\ln\\big((x^2 + 1)\\cos x\\big)}{x^2}$$',
      natAnswer: { min: 0.49, max: 0.51, exactDisplay: '0.5' },
      triggerHint: 'First break the log of the product into $\\ln(1+x^2) + \\ln(\\cos x)$, and since the denominator is $x^2$, expand each piece only up to the $x^2$ term!',
      intuitiveSolution: [
        '1. Rewrite numerator as $\\ln(1 + x^2) + \\ln(\\cos x)$.',
        '2. Near $x = 0$, $\\ln(1 + x^2) = x^2 - O(x^4)$ and $\\ln(\\cos x) = \\ln(1 - x^2/2 + O(x^4)) = -\\frac{x^2}{2} - O(x^4)$.',
        '3. Adding gives $\\frac{1}{2}x^2 + O(x^4)$; dividing by $x^2$ yields $0.5$.',
      ],
      directShortcutUsed: '$\\ln(1+x^2) \\approx x^2$ and $\\ln(\\cos x) \\approx -x^2/2 \\implies 1 - 0.5 = 0.5$.',
    },
    {
      id: 'q-5-4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.14',
      year: 2025,
      marks: 1,
      type: 'MCQ',
      stem: 'Consider the function $f(x) = \\frac{e^x - e^{-x}}{2}$ for $x \\in \\mathbb{R}$. What is the value of its 10th derivative $f^{(10)}(0)$ evaluated at $x = 0$?',
      options: [
        { id: 'A', text: '$0$', whyTrueOrFalse: '$f(x) = \\sinh x$ is an odd function ($f(-x)=-f(x)$), so every even-order derivative at $x=0$ vanishes! True!' },
        { id: 'B', text: '$1$', whyTrueOrFalse: 'Odd-order derivatives $f^{(1)}(0), f^{(3)}(0), \\dots$ equal $1$, whereas even-order derivatives at $0$ equal $0$!' },
        { id: 'C', text: '$-1$', whyTrueOrFalse: 'All Maclaurin coefficients of $\\sinh x$ are $\\ge 0$.' },
        { id: 'D', text: '$\\frac{1}{10!}$', whyTrueOrFalse: 'Confuses derivative value with series coefficient (and for $n=10$ both are $0$ anyway!).' },
      ],
      correctOptions: ['A'],
      triggerHint: 'Before differentiating ten times, pause and test $f(-x)$ — is $f(x) = \\frac{e^x - e^{-x}}{2}$ even or odd, and what does that tell you about its 10th derivative at $0$?',
      intuitiveSolution: [
        '1. $f(-x) = \\frac{e^{-x} - e^x}{2} = -f(x)$, so $f$ is **Odd**.',
        '2. Its Maclaurin expansion $x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\dots$ has zero coefficient on all even powers, hence $f^{(10)}(0) = 0$.',
      ],
      directShortcutUsed: 'Odd function $\\implies f^{(2m)}(0) = 0$.',
    },
    {
      id: 'q-5-5',
      tier: 'tricky',
      sourceLabel: 'IITM-Style 8th Derivative NAT',
      marks: 2,
      type: 'NAT',
      stem: 'Let $f(x) = x^2 \\cos(2x)$ for $x \\in \\mathbb{R}$. Compute the exact value of the 6th derivative $f^{(6)}(0)$ at $x = 0$.',
      natAnswer: { min: 479.9, max: 480.1, exactDisplay: '480' },
      triggerHint: 'Save yourself six rounds of the product rule! Expand $\\cos(2x)$ as $1 - \\frac{(2x)^2}{2!} + \\frac{(2x)^4}{4!} - \\dots$, multiply by $x^2$, pluck the coefficient of $x^6$, and multiply by $6!$.',
      intuitiveSolution: [
        '1. Expand $\\cos(2x) = 1 - \\frac{(2x)^2}{2!} + \\frac{(2x)^4}{4!} - \\dots = 1 - 2x^2 + \\frac{16}{24}x^4 - \\dots$',
        '2. Multiply by $x^2$: the $x^6$ term comes from $x^2 \\times \\frac{2^4}{4!}x^4 = \\frac{16}{24} x^6 = \\frac{2}{3}x^6$.',
        '3. Multiply coefficient by $6! = 720$: $f^{(6)}(0) = 720 \\times \\frac{2}{3} = 480$!',
      ],
      directShortcutUsed: '$f^{(6)}(0) = 6! \\cdot [x^6](x^2\\cos(2x)) = 720 \\cdot \\frac{2^4}{4!} = 480$.',
    },
    {
      id: 'q-5-6',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Degree-4 Cancellation NAT',
      marks: 2,
      type: 'NAT',
      stem: 'Evaluate the limit (round to 2 decimal places): $$\\lim_{x \\to 0} \\frac{e^{x^2} - \\cos(x) - \\frac{3}{2}x^2}{x^4}$$',
      natAnswer: { min: 0.45, max: 0.47, exactDisplay: '11/24 ≈ 0.46' },
      triggerHint: 'Look at the denominator $x^4$ — that is your cue to expand BOTH $e^{x^2}$ and $\\cos(x)$ up to the $x^4$ term and watch the constant and $x^2$ terms cancel cleanly!',
      intuitiveSolution: [
        '1. Expand $e^{x^2}$ up to $x^4$ (put $u = x^2$ into $1 + u + u^2/2$): $e^{x^2} = 1 + x^2 + \\frac{1}{2}x^4 + O(x^6)$.',
        '2. Expand $\\cos x$ up to $x^4$: $\\cos x = 1 - \\frac{1}{2}x^2 + \\frac{1}{24}x^4 + O(x^6)$.',
        '3. Subtract: $(1 + x^2 + \\frac{1}{2}x^4) - (1 - \\frac{1}{2}x^2 + \\frac{1}{24}x^4) - \\frac{3}{2}x^2 = \\left(\\frac{1}{2} - \\frac{1}{24}\\right)x^4 = \\frac{11}{24}x^4$.',
        '4. Divide by $x^4$: $\\frac{11}{24} \\approx 0.4583 \\approx 0.46$.',
      ],
      directShortcutUsed: 'Degree-4 Maclaurin matching ($1/2 - 1/24 = 11/24$).',
    },
    {
      id: 'q-5-7',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Series & Taylor MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Which of the following identities and statements is/are TRUE?',
      options: [
        {
          id: 'A',
          text: '$\\sum_{k=1}^{\\infty} \\frac{2^k}{k!} = e^2 - 1$',
          whyTrueOrFalse: 'Since $\\sum_{k=0}^{\\infty} \\frac{2^k}{k!} = e^2$ and the $k=0$ term is $1$, starting at $k=1$ gives $e^2 - 1$. True!',
        },
        {
          id: 'B',
          text: '$\\sum_{k=1}^{\\infty} \\frac{(-1)^{k-1}}{k} = \\ln(2)$',
          whyTrueOrFalse: 'Plug $u = 1$ (Abel’s theorem at boundary) into $\\ln(1+u) = u - u^2/2 + u^3/3 - \\dots$: $1 - 1/2 + 1/3 - 1/4 + \\dots = \\ln(2)$. True!',
        },
        {
          id: 'C',
          text: 'For $f(x) = \\ln(1 + x^2)$, $f^{(3)}(0) = 2$.',
          whyTrueOrFalse: 'TRAP! $f(x) = \\ln(1 + x^2)$ is an **Even** function ($x^2 - x^4/2 + \\dots$), so $f^{(3)}(0) = 0$, NOT $2$!',
        },
        {
          id: 'D',
          text: 'The quadratic Taylor approximation of $f(x) = e^x$ around $a = 1$ is $e\\!\\left(1 + (x-1) + \\frac{1}{2}(x-1)^2\\right)$.',
          whyTrueOrFalse: '$f(1) = f\'(1) = f\'\'(1) = e$, so $e + e(x-1) + \\frac{e}{2!}(x-1)^2$. True!',
        },
      ],
      correctOptions: ['A', 'B', 'D'],
      triggerHint: 'Check each option patiently: notice $k = 1$ (missing the $k = 0$ term!) in A, plug $u = 1$ into $\\ln(1+u)$ for B, and check the Even parity of $\\ln(1 + x^2)$ for C!',
      intuitiveSolution: [
        '1. **Option A:** $\\sum_{k=0}^\\infty 2^k/k! = e^2 \\implies$ drop $k=0$ term ($=1$) to get $e^2 - 1$.',
        '2. **Option B:** Alternating harmonic series equals $\\ln(1+1) = \\ln 2$.',
        '3. **Option C:** $\\ln(1+x^2)$ is even $\\implies$ all odd derivatives at $0$ vanish ($f^{(3)}(0) = 0$).',
        '4. **Option D:** Standard Taylor expansion around $a = 1$ with $f^{(k)}(1) = e$.',
      ],
      directShortcutUsed: 'Big 5 evaluations + Even parity check.',
    },
  ],
}

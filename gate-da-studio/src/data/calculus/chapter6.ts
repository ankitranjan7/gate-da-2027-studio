import type { ChapterData } from '../../types/curriculum'

export const chapter6: ChapterData = {
  id: 'calc-ch6',
  number: 6,
  title: 'Maxima, Minima, Convexity & Optimization (→ Gradient Descent)',
  shortTitle: 'Optimization, Convexity & SGD',
  estimatedHours: 5.5,
  dayLabel: 'Week 1 · Day 4',
  tagline:
    'Here is where everything in Calculus connects directly to Machine Learning! Together we will tell true maxima and minima apart from $x^3$ saddle traps, beat GATE’s #1 closed-interval $[a, b]$ boundary trap, master strict convexity ($f\'\' > 0$) MSQs with the $e^x$ test, and execute 1-step Gradient Descent with confidence.',
  syllabusMapping: [
    'Maxima and minima',
    'Optimization involving a single variable',
  ],
  whatIsImportant: [
    'Stationary points ($f\'(x^*)=0$), 2nd-derivative test ($f\'\'(x^*)>0 \\implies$ local min — GATE 2024 Q.15), & higher-order test when $f\'\'(x^*)=0$',
    'Polynomial local extrema sign-chart speed method (GATE 2024 Q.50)',
    '#1 GATE Trap: Global extrema on closed $[a,b]$ MUST test boundary endpoints $f(a), f(b)$ too (GATE 2025 Q.49)!',
    'Strict convexity $f\'\'(x) > 0$ quantifier logic ("at most one" vs "at least one" stationary point — GATE 2025 Q.51)',
    'Iterative Optimization: Gradient Descent & 1-step SGD updates $w_{\\text{new}} = w_{\\text{old}} - \\eta \\nabla_w L$ (GATE 2026 Q.29)',
  ],
  whatIsNotImportant: [
    '3-constraint multivariable KKT inequality casework by hand (beyond 2D geometric SVM in Week 7)',
    'Calculus of variations (Euler–Lagrange functional equations) — 0 marks in GATE DA',
  ],
  inboundStream: 'Ch.3 Closed-Interval Continuity + Ch.4 Derivatives + Ch.5 Quadratic Taylor Model',
  outboundStream: [
    'Week 2 Maximum Likelihood Estimation (MLE)',
    'Week 3 Rayleigh Quotient $\\max_{\\|x\\|=1} x^T A x = \\lambda_{\\max}$ (2026 Q.65)',
    'Week 7 OLS, Ridge, Logistic Regression, SVM & Neural Net SGD Training',
  ],
  glossary: [
    {
      term: 'Stationary Point vs. Critical Point',
      symbol: '$f\'(x^*) = 0 \\text{ or DNE}$',
      plainEnglish:
        'A stationary point is an interior point where the curve goes completely flat ($f\'(x^*) = 0$), while a critical point also includes sharp corners where $f\'(x^*)$ does not exist — both are prime suspects for extrema.',
      tinyExample: '$x = 0$ is a stationary point of $x^2$, and a non-stationary critical point of $|x|$.',
    },
    {
      term: 'Local vs. Global Extremum',
      symbol: '$\\max / \\min$',
      plainEnglish:
        'Think of a local minimum as the lowest point in your immediate neighborhood, whereas a global minimum is the absolute lowest point across the entire allowed domain.',
      tinyExample: 'On $[-8, 0]$, a cubic can have a local peak at $x = -5$ while its global maximum sits at the boundary $x = 0$.',
    },
    {
      term: 'Saddle / Inflection Point',
      symbol: '$f\'\'(x^*) \\text{ flips sign}$',
      plainEnglish:
        'In plain words, a stationary saddle point is a resting shelf where the curve pauses flat for an instant and then keeps climbing (or keeps falling), so it is neither a peak nor a valley.',
      tinyExample: '$f(x) = x^3$ has $f\'(0) = 0$ yet crosses from negative to positive, making $x = 0$ a saddle point.',
    },
    {
      term: 'First-Derivative Sign Chart',
      symbol: '$- \\to + \\text{ (Min)},\\; + \\to - \\text{ (Max)}$',
      plainEnglish:
        'Marking where $f\'(x)$ is positive (rising) or negative (falling) along the number line tells you the shape instantly: falling then rising ($- \\to +$) creates a valley (local min), and rising then falling ($+ \\to -$) creates a peak (local max).',
      tinyExample: 'For $f\'(x) = x(x - 3)(x + 1)$, signs flip `(-), (+), (-), (+)` across $-1, 0, 3$, giving Min, Max, Min.',
    },
    {
      term: 'Second & Higher-Order Derivative Tests',
      symbol: '$f\'\'(x^*) > 0,\\; f^{(k)}(x^*) \\neq 0$',
      plainEnglish:
        'At a flat spot $f\'(x^*) = 0$, positive curvature $f\'\'(x^*) > 0$ bends like a cup (local min) and $f\'\'(x^*) < 0$ bends like a cap (local max); if $f\'\'(x^*) = 0$, keep differentiating until the first nonzero $f^{(k)}(x^*)$ — even $k$ gives an extremum, odd $k$ gives a saddle.',
      tinyExample: 'For $x^4$, $f^{(4)}(0) = 24 > 0$ ($k = 4$ even) proves a strict minimum even though $f\'\'(0) = 0$.',
    },
    {
      term: 'Extreme Value Theorem (EVT)',
      symbol: '$f \\in C([a, b])$',
      plainEnglish:
        'Every continuous curve on a closed, bounded interval $[a, b]$ is guaranteed to reach both a highest point and a lowest point — and they can ONLY occur at interior critical points or at the endpoints $a$ and $b$.',
      tinyExample: 'For $h(x) = x^2$ on $[1, 3]$, the global min $1$ and global max $9$ both occur right at the endpoints.',
    },
    {
      term: 'Convex vs. Strictly Convex Function',
      symbol: '$f\'\'(x) \\ge 0 \\text{ vs. } f\'\'(x) > 0$',
      plainEnglish:
        'Think of a convex curve as a bowl where every straight line segment joining two points on the graph stays on or above the curve; strict convexity means the chord stays strictly above, guaranteeing at most one bottom.',
      tinyExample: '$|x|$ is convex (has flat straight arms), whereas $x^2$, $x^4$, and $e^x$ are strictly convex.',
    },
    {
      term: 'Coercive Function',
      symbol: '$f(x) \\to +\\infty \\text{ as } |x| \\to \\infty$',
      plainEnglish:
        'A function is coercive if both outer walls rise to $+\\infty$, preventing the curve from sliding downhill forever (unlike $e^x$) and guaranteeing a global minimum exists.',
      tinyExample: 'Adding Ridge penalty $+\\frac{\\lambda}{2}w^2$ ($\\lambda > 0$) makes linear-regression loss coercive and strictly convex.',
    },
    {
      term: 'Loss (Objective) Function',
      symbol: '$L(w)$',
      plainEnglish:
        'In Machine Learning, a loss function measures how wrong a model’s prediction is for weight $w$ — training a model simply means finding the weight $w^*$ that minimizes $L(w)$.',
      tinyExample: 'For $f_w(x) = wx$ and target $y$, squared error loss is $L(w) = (wx - y)^2$.',
    },
    {
      term: 'Gradient Descent & SGD',
      symbol: '$w_{t+1} = w_t - \\eta \\nabla L(w_t)$',
      plainEnglish:
        'Think of walking downhill on a foggy hillside: compute the slope at your current spot $w_t$ and take a step in the **opposite** direction (minus sign!) to lower the loss; SGD does this using one training sample at a time.',
      tinyExample: 'If $w_0 = 10$, $\\eta = 0.1$, and $L\'(10) = 10$, one SGD step moves to $w_1 = 10 - 0.1(10) = 9$.',
    },
    {
      term: 'Learning Rate (Step Size)',
      symbol: '$\\eta > 0$',
      plainEnglish:
        'The learning rate controls how big a stride Gradient Descent takes at each step: too tiny means slow crawling, while too big ($\\eta \\ge 2 / L\'\'$) makes you overshoot the valley and diverge!',
      tinyExample: 'On $L(w) = 4w^2 - 24w + 50$ ($L\'\' = 8$), Gradient Descent converges iff $0 < \\eta < \\frac{2}{8} = 0.25$.',
    },
    {
      term: 'MSE vs. MAE ($L_1$) Loss',
      symbol: '$(wx - y)^2 \\text{ vs. } |wx - y|$',
      plainEnglish:
        'Squared error (MSE) squares the residual and has slope proportional to the error size, whereas Absolute error (MAE / $L_1$) takes $|wx - y|$ and has constant slope $\\pm x$ whenever $wx \\neq y$.',
      tinyExample: 'At $(x, y) = (10, 0)$ with $w = 10 > 0$, $|10w - 0| = 10w$ has exact derivative $+10$.',
    },
    {
      term: 'AM-GM Inequality',
      symbol: '$\\frac{u + v}{2} \\ge \\sqrt{uv}$',
      plainEnglish:
        'For any two positive numbers $u, v > 0$, their arithmetic mean is always at least their geometric mean, with equality right when $u = v$ — giving a 3-second derivative-free minimum for $ax + b/x$.',
      tinyExample: 'For $x > 0$, $4x + \\frac{9}{x} \\ge 2\\sqrt{36} = 12$, attained when $4x = \\frac{9}{x} \\implies x = 1.5$.',
    },
  ],
  generatorId: 'closed-interval-extrema-gen',
  concepts: [
    {
      id: 'c6-1',
      title: 'Stationary Points, Saddle Traps & First/Second Derivative Tests',
      subtitle: 'Why $f\'(x^*)=0$ is only a suspect — and how curvature $f\'\'(x^*)$ convicts or acquits it',
      priority: 'core-pillar',
      buildsOn: 'Ch.4 Slope $f\'$ + Ch.5 Degree-2 Taylor Approximation',
      whyStudy:
        'Almost every algorithm in Statistics and Machine Learning — from **Maximum Likelihood Estimation (MLE)** in Week 2 to **Linear/Logistic Regression** in Week 7 — boils down to one goal: *find the parameter $x^*$ that makes an error function as small as possible (or a likelihood as large as possible)!* Setting $f\'(x^*) = 0$ narrows infinitely many real numbers down to a handful of suspects, and the **First, Second, and Higher-Order Derivative Tests** (**GATE DA 2024 Q.15 & Q.50**) tell you instantly whether each suspect is a true valley, a peak, or a misleading $x^3$ saddle shelf.',
      groundRules: [
        '**Why Interior Smooth Extrema Must Have Zero Slope (Fermat’s Rule):** If you stand at a smooth interior peak or valley $x^*$, stepping slightly right cannot go higher (at a peak) and stepping slightly left cannot go higher either — forcing the tangent line right at $x^*$ to lie completely flat ($f\'(x^*) = 0$). However, **$f\'(x^*) = 0$ is ONLY a suspect**, NOT proof of a max or min (just look at $x^3$ pausing flat at $0$)!',
        '**Curvature $f\'\'(x^*)$ Works Because of Degree-2 Taylor:** Right at a flat spot where $f\'(x^*) = 0$, Chapter 5’s Taylor expansion collapses to $f(x) \\approx f(x^*) + \\frac{1}{2}f\'\'(x^*)(x - x^*)^2$. Because $(x - x^*)^2 > 0$ on BOTH sides of $x^*$, positive curvature $f\'\'(x^*) > 0$ bends both sides UP (strict local min), while negative curvature $f\'\'(x^*) < 0$ bends both sides DOWN (strict local max)!',
        '**First-Derivative Sign Chart Never Fails (Even When $f\'\'(x^*) = 0$):** Tracking the sign of $f\'(x)$ across the number line tells you the literal direction of travel: falling then rising ($- \\to +$, or $\\searrow\\,\\nearrow$) ALWAYS proves a **Local Min**; rising then falling ($+ \\to -$, or $\\nearrow\\,\\searrow$) ALWAYS proves a **Local Max**; same sign on both sides ($+ \\to +$ or $- \\to -$) ALWAYS proves a **Saddle / Inflection**!',
        '**Even vs. Odd Rule When $f\'\'(x^*) = 0$:** If $f\'\'(x^*) = 0$, the 2nd-derivative test is **inconclusive** (NOT automatically a saddle!). Keep differentiating until the first nonzero derivative $f^{(k)}(x^*) \\neq 0$: by Taylor’s term $\\frac{f^{(k)}(x^*)}{k!}(x - x^*)^k$, an **even** power $k$ stays positive on both sides (giving a local min if $> 0$ or max if $< 0$, like $x^4$), whereas an **odd** power $k$ flips sign across $x^*$ (giving a saddle, like $x^3$ or $x^5$)!',
      ],
      toyExample: {
        title: 'Three Curves That All Have Zero Slope at $x = 0$: $+x^2$, $-x^2$, and $x^3$',
        scenario:
          'At $x = 0$, all three curves $f_1(x)=x^2,\\; f_2(x)=-x^2,$ and $f_3(x)=x^3$ pause completely flat with $f\'(0) = 0$. Yet if you step slightly left ($x = -0.1$) and slightly right ($x = +0.1$), they behave completely differently:',
        walkthroughSteps: [
          '1. **$f_1(x) = x^2$ (Upward Cup $\\cup$):** $f_1(-0.1) = +0.01 > 0$ and $f_1(+0.1) = +0.01 > 0$. Stepping either way climbs UP from $0$ $\\implies$ **Strict Local Minimum** ($f_1\'\'(0) = +2 > 0$)!',
          '2. **$f_2(x) = -x^2$ (Downward Cap $\\cap$):** Both sides drop to $-0.01 < 0$ $\\implies$ **Strict Local Maximum** ($f_2\'\'(0) = -2 < 0$)!',
          '3. **$f_3(x) = x^3$ (Resting Shelf / Saddle):** Left side drops to $(-0.1)^3 = -0.001 < 0$ while right side climbs to $(+0.1)^3 = +0.001 > 0$! The curve paused flat for an instant and kept climbing $\\implies$ **NEITHER max nor min** (inflection/saddle point, where $f_3\'\'(0) = 0$ and $f_3\'\'\'(0) = 6 \\neq 0$, odd order $k = 3$)!',
        ],
        ahaMoment:
          'Look back at Chapter 5’s Degree-2 Taylor formula right at a flat spot $f\'(x^*) = 0$: **$f(x) \\approx f(x^*) + \\frac{1}{2}f\'\'(x^*)(x - x^*)^2$**! Because $(x - x^*)^2$ is strictly positive on BOTH sides of $x^*$, the sign of $f\'\'(x^*)$ tells you immediately whether both sides climb UP ($f\'\' > 0$, local min) or drop DOWN ($f\'\' < 0$, local max)!',
      },
      theoremAndFormula: {
        statement:
          'Let $f$ be twice differentiable near $x^*$ with $f\'(x^*) = 0$ (where $\\wedge$ means "AND"):\n• $f\'\'(x^*) > 0 \\implies$ **Strict Local Minimum** at $x^*$ (GATE DA 2024 Q.15).\n• $f\'\'(x^*) < 0 \\implies$ **Strict Local Maximum** at $x^*$.\n• $f\'\'(x^*) = 0 \\implies$ **Inconclusive!** Look at the **first nonzero higher derivative** $f^{(k)}(x^*) \\neq 0$: if $k$ is **even**, local extremum ($>0$ min, $<0$ max, like $x^4$); if $k$ is **odd**, saddle/inflection point (neither, like $x^3$)!',
        formulaLatex:
          'f\'(x^*) = 0 \\;\\wedge\\; f\'\'(x^*) > 0 \\implies x^* \\text{ is a strict local minimum}',
        plainEnglishDecoding:
          'Watch the scope of that promise: checking $f\'\'(x^*) > 0$ at ONE single point $x^*$ ONLY guarantees a **local** minimum (the lowest point in a tiny neighborhood around $x^*$), NOT necessarily a global minimum across all of $\\mathbb{R}$! And whenever $f\'(x)$ factors cleanly like $(x+1)(x)(x-3)$ (GATE DA 2024 Q.50!), sketch a quick **1D Sign Chart** along the number line — wherever the slope flips from $-$ to $+$ ($\\searrow\\,\\nearrow$) sits a **Local Min**, and wherever it flips from $+$ to $-$ ($\\nearrow\\,\\searrow$) sits a **Local Max**, without ever computing $f\'\'$!',
        workedMiniExamples: [
          {
            prompt: 'Classify all stationary points of $f(x) = \\frac{x^4}{4} - \\frac{2x^3}{3} - \\frac{3x^2}{2} + 1$ (GATE DA 2024 Q.50).',
            solution:
              '**Step 1 (Differentiate and watch every fraction disappear!):** $f\'(x) = x^3 - 2x^2 - 3x = x(x^2 - 2x - 3) = x(x - 3)(x + 1)$.\n**Step 2 (Find roots in ascending order):** $f\'(x) = 0 \\implies x = -1,\\; 0,\\; 3$.\n**Step 3 (Sketch the 1D sign chart):** For huge positive $x > 3$, all three factors are positive (`+`). Since every root has multiplicity $1$, signs alternate leftward across $(-\\infty, -1), (-1, 0), (0, 3), (3, \\infty)$ as `(-), (+), (-), (+)`:\n• $x = -1$: $- \\to +$ (**Local Min**)\n• $x = 0$: $+ \\to -$ (**Local Max**)\n• $x = 3$: $- \\to +$ (**Local Min**)!',
          },
          {
            prompt: 'Classify $x = 0$ for $f(x) = x^4$ vs $g(x) = x^5$.',
            solution:
              '**Step 1 (Check $f(x) = x^4$ at $0$):** $f\'(0) = 0$, $f\'\'(0) = 0$, $f\'\'\'(0) = 0$, and the first nonzero derivative is $f^{(4)}(0) = 24 > 0$. Since order $k = 4$ is **even** and positive $\\implies$ **Strict Local (and Global) Min**!\n**Step 2 (Check $g(x) = x^5$ at $0$):** First nonzero derivative is $g^{(5)}(0) = 120$. Since order $k = 5$ is **odd** $\\implies$ **Saddle / Inflection Point** (neither max nor min)!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $x^*$ is a strict local minimum of smooth $f$, then $f\'\'(x^*)$ MUST be strictly positive ($> 0$).',
          reality: 'CAREFUL CONVERSE TRAP! $f\'\'(x^*) > 0 \\implies$ local min is TRUE, while the reverse is only $f\'\'(x^*) \\ge 0$ (equality CAN happen)!',
          counterExample: '$f(x) = x^4$ has a strict global minimum at $x^* = 0$, yet $f\'\'(0) = 12(0)^2 = 0$!',
        },
        {
          myth: 'Every local extremum of a continuous function satisfies $f\'(x^*) = 0$.',
          reality: 'Only if $f$ is differentiable at $x^*$ AND $x^*$ is an interior point! Kinks ($f\'$ undefined) and boundary endpoints also produce extrema!',
          counterExample: '$f(x) = |x|$ has its global minimum at $x^* = 0$, where $f\'(0)$ does NOT exist!',
        },
      ],
    },
    {
      id: 'c6-2',
      title: 'Global Extrema on Closed Intervals $[a, b]$ — Defeating GATE’s #1 Boundary Trap',
      subtitle: 'Why setting $f\'(x)=0$ misses the true global maximum half the time',
      priority: 'core-pillar',
      buildsOn: 'Step 6.1 Interior Critical Points + Extreme Value Theorem',
      sandboxId: 'extrema-convexity-sgd-lab',
      whyStudy:
        'Real-world parameters are almost always constrained to a finite box — probabilities $p \\in [0, 1]$, regularization budgets, or a closed domain $x \\in [-8, 0]$. On a closed interval $[a, b]$, setting $f\'(x) = 0$ ONLY spots flat interior hills and valleys and is **completely blind to the walls at $x = a$ and $x = b$**! That exact boundary oversight is **GATE’s #1 Calculus trap** (tested directly in **GATE DA 2025 Q.49**, where BOTH the global max and global min sat on the endpoints!).',
      groundRules: [
        '**Extreme Value Theorem (Closed + Continuous Guarantees Existence):** Every continuous function on a closed, bounded interval $[a, b]$ (square brackets include BOTH $a$ and $b$) is 100% guaranteed to attain a true Global Maximum and Global Minimum somewhere in $[a, b]$! (Remove either endpoint — open $(a, b)$ — or let the domain run to $\\infty$, and the guarantee disappears!)',
        '**The Complete Candidate List (Only 3 Places Extrema Can Hide):** On $[a, b]$, a global max or global min can ONLY occur at: **(1) the left boundary $x = a$**, **(2) the right boundary $x = b$**, or **(3) an interior critical point $c \\in (a, b)$** where $f\'(c) = 0$ or $f\'(c)$ does not exist (a corner/kink). Throw out any root of $f\'(x) = 0$ that lands OUTSIDE $(a, b)$!',
        '**Why Boundary Slopes Need NOT Be Zero:** At the right wall $x = b$, the curve only has to be higher than points to its *left* — it can slam straight uphill into the wall with $f\'(b) > 0$ and STILL win the global maximum! That is why $f\'(x) = 0$ misses boundary winners.',
        '**Read Target Function Carefully ($f$ vs. $f\'$):** GATE MSQs (like 2025 Q.49) love mixing options asking for the minimum of **$f(x)$** alongside options asking for the minimum of **$f\'(x)$** in the exact same question! Minimizing $f\'(x)$ means treating $g(x) = f\'(x)$ as a brand-new function and solving $g\'(x) = f\'\'(x) = 0$ plus checking $g(a), g(b)$!',
      ],
      toyExample: {
        title: 'Hiking Trail Elevation From Mile $1$ to Mile $3$ on $h(x) = x^2$',
        scenario:
          'Imagine hiking along the trail $h(x) = x^2$ strictly between Mile $1$ and Mile $3$ (the closed interval $[1, 3]$). Watch what happens if you blindly set $h\'(x) = 2x = 0$ and get $x = 0$:',
        walkthroughSteps: [
          '1. **Domain filter catches Mistake #1:** $x = 0$ is NOT even on the trail $[1, 3]$ ($0 \\notin [1, 3]$) — discard it immediately!',
          '2. **Check both trailheads (the endpoints $1$ and $3$):** Left trailhead gives $h(1) = 1^2 = 1$ (**Global Min**), and right trailhead gives $h(3) = 3^2 = 9$ (**Global Max**), even though the slope is nonzero at both ends ($h\'(1) = 2 \\neq 0$ and $h\'(3) = 6 \\neq 0$)!',
          '3. **Even sneakier (GATE DA 2025 Q.49!):** A cubic on $[-8, 0]$ has a genuine interior local peak at $x = -5$ ($f(-5) \\approx 62.33$), tempting you to stop there — while the right boundary climbs even higher all the way to **$f(0) = 66.5$**!',
        ],
        ahaMoment:
          'Make this a permanent exam habit: on a closed interval $[a, b]$, setting $f\'(x) = 0$ ONLY catches flat hills and valleys in the interior, whereas the curve can easily climb higher or drop lower right into the boundary walls at $x = a$ and $x = b$. **Never lock in a $[a, b]$ global extremum without plugging in $f(a)$ and $f(b)$!**',
      },
      theoremAndFormula: {
        statement:
          '**Extreme Value Theorem & Closed-Interval Candidate Recipe:** Every continuous function on a closed bounded interval $[a, b]$ attains both a global maximum and a global minimum on $[a, b]$, guaranteed to lie inside the finite **Candidate Set** (where $\\cup$ means "union / combined together with" and `DNE` means "does not exist"):',
        formulaLatex:
          '\\max_{x \\in [a,b]} f(x) = \\max\\Big(\\{f(a),\\, f(b)\\} \\cup \\{f(c) : c \\in (a,b) \\text{ and } (f\'(c)=0 \\text{ or } f\'(c) \\text{ DNE})\\}\\Big)',
        plainEnglishDecoding:
          'Read that formula like a simple checklist: jot down a tiny 2-column table $(x \\mid f(x))$ listing **(1) the left endpoint $a$**, **(2) the right endpoint $b$**, and **(3) only those critical points strictly inside $(a, b)$**. Plug each candidate into $f(x)$ — the biggest number wins Global Max, and the smallest number wins Global Min, with zero guesswork!',
        workedMiniExamples: [
          {
            prompt: 'Find global max and global min of $f(x) = x^3 - 3x + 1$ on $[0, 2]$.',
            solution:
              '**Step 1 (Find interior critical points):** $f\'(x) = 3x^2 - 3 = 3(x^2 - 1) = 0 \\implies x = -1$ and $x = +1$. Discard $x = -1$ because $-1 \\notin (0, 2)$!\n**Step 2 (Build the Candidate Table on $[0, 2]$):**\n• Left endpoint: $f(0) = 1$\n• Interior critical point: $f(1) = 1 - 3 + 1 = \\mathbf{-1}$ (**Global Min**)\n• Right endpoint: $f(2) = 8 - 6 + 1 = \\mathbf{3}$ (**Global Max — sits on the boundary!**).',
          },
          {
            prompt: 'On GATE DA 2025 Q.49, $f(x) = \\frac{x^3}{3} + \\frac{7}{2}x^2 + 10x + \\frac{133}{2}$ on $[-8, 0]$. Also find where **$f\'(x)$** attains its minimum!',
            solution:
              '**Step 1 (Read the target carefully — we are minimizing $g(x) = f\'(x)$!):** Compute $g(x) = f\'(x) = x^2 + 7x + 10$, which is an upward-opening parabola.\n**Step 2 (Differentiate $g(x)$ to find its vertex):** $g\'(x) = f\'\'(x) = 2x + 7 = 0 \\implies x = -\\frac{7}{2} = -3.5$, which lies inside $[-8, 0]$! Since $g\'\'(x) = 2 > 0$, **$x = -3.5$** is the unique global minimum of $f\'(x)$ on $[-8, 0]$ (whereas $f$ itself peaks globally at the right boundary $x = 0$ with $f(0) = 66.5$!).',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Confusing "where $f(x)$ attains its minimum" with "where the derivative $f\'(x)$ attains its minimum" in MSQ options!',
          reality: 'GATE DA 2025 Q.49 literally mixed options about extrema of $f$ AND extrema of $f\'$ in the same MSQ! Minimizing $f\'$ means setting $f\'\'(x) = 0$ (plus checking endpoints of $f\'$).',
          counterExample: 'In 2025 Q.49, local min of $f$ is at $x = -2$, whereas global min of $f\'$ is at $x = -7/2$!',
        },
      ],
    },
    {
      id: 'c6-3',
      title: 'Convexity ($f\'\'(x) \\ge 0$) — Why Local Min = Global Min in Machine Learning',
      subtitle: 'Geometric bowl intuition and surviving GATE’s $e^x$ quantifier trap',
      priority: 'core-pillar',
      buildsOn: 'Step 6.1 Second Derivative $f\'\'(x)$',
      whyStudy:
        'Why do Linear Regression, Ridge Regression, Logistic Regression, and Support Vector Machines ALWAYS converge to the exact same best solution regardless of where you initialize Gradient Descent — while deep neural networks can get trapped in mediocre valleys? The single magic property separating them is **Convexity**! And in GATE DA, **GATE DA 2025 Q.51** tested whether you truly understand strict convexity ($f\'\'(x) > 0$) on unbounded $\\mathbb{R}$ without falling for the "it must have a minimum" $e^x$ trap.',
      groundRules: [
        '**The Chord-Above-Curve Rule (Works Even With Sharp Corners!):** For any two inputs $x, y$ and any blending weight $\\theta \\in [0, 1]$ (so $\\theta x + (1 - \\theta)y$ sweeps every point on the segment between $x$ and $y$), a function is **convex** iff the straight line segment connecting $(x, f(x))$ and $(y, f(y))$ stays **on or above** the graph: $f(\\theta x + (1 - \\theta)y) \\le \\theta f(x) + (1 - \\theta)f(y)$. Notice this definition works even for non-differentiable curves like $|x|$!',
        '**Second-Derivative Test for Smooth Convexity:** For twice-differentiable functions, **convex $\\iff f\'\'(x) \\ge 0$ everywhere** (slope never decreases). If **$f\'\'(x) > 0$ for all $x$** ($\\forall x$ means "for every $x$"), then $f\'(x)$ is **strictly increasing**, which makes $f$ **strictly convex**! (Careful: the converse has exceptions like $x^4$, which is strictly convex even though $f\'\'(0) = 0$ at one isolated point!)',
        '**Why $f\'\'(x) > 0$ Guarantees "AT MOST ONE" Stationary Point (NOT "At Least One"!):** Because $f\'(x)$ is strictly increasing, it can cross $y = 0$ **at most once** (written $\\#\\{x : f\'(x) = 0\\} \\le 1$, where $\\#\\{\\dots\\}$ means "the count of items in the set"). On unbounded $\\mathbb{R}$, it might cross $0$ once (like $x^2$, giving a **unique global minimum**), OR it might stay positive forever without EVER crossing $0$ (like **$e^x$**, giving **0 stationary points and 0 global minimum**)!',
        '**Adding Coercivity ($f(x) \\to +\\infty$ as $|x| \\to \\infty$) Locks In Existence + Uniqueness:** When a strictly convex bowl ALSO climbs to $+\\infty$ on both left and right walls (for instance adding Ridge penalty $+\\frac{\\lambda}{2}w^2$ with $\\lambda > 0$), the curve can no longer slide downhill forever like $e^x$ — guaranteeing **EXACTLY ONE global minimum**!',
      ],
      toyExample: {
        title: 'Rolling a Marble Into a Smooth Soup Bowl vs. Sliding Down $f(x) = e^x$',
        scenario:
          'Look closely at two curves that both bend strictly upward everywhere on $\\mathbb{R}$: $f_1(x) = x^2$ (with $f_1\'\'(x) = 2 > 0$) and $f_2(x) = e^x$ (with $f_2\'\'(x) = e^x > 0$). Let’s compare what happens when you roll a marble down each one:',
        walkthroughSteps: [
          '1. **$f_1(x) = x^2$ (Closed Bowl):** Its slope $2x$ climbs smoothly from negative through $0$ (at $x = 0$) to positive — giving **1 stationary point**, which is automatically the **unique global minimum**.',
          '2. **$f_2(x) = e^x$ (Endless Ramp):** Its slope $e^x > 0$ is ALWAYS strictly positive! As $x \\to -\\infty$, $e^x$ slides closer and closer to $0$ without EVER reaching $0$ — giving **ZERO stationary points and ZERO global minimum** on $\\mathbb{R}$!',
          '3. **Could ANY curve with $f\'\'(x) > 0$ everywhere have TWO stationary points?** NO! Because $f\'\' > 0$ forces $f\'(x)$ to be **strictly increasing**, and a strictly increasing curve can cross $y = 0$ **at most once**!',
        ],
        ahaMoment:
          'Pause and savor this insight — it literally unlocks GATE DA 2025 Q.51 (2-mark MSQ)! When $f\'\'(x) > 0$ everywhere on $\\mathbb{R}$, $f$ has **AT MOST ONE** stationary point (it could have $0$ like $e^x$, or $1$ like $x^2$, but NEVER $2$!), and **IF** a stationary point exists, it is automatically the **unique global minimum**!',
      },
      theoremAndFormula: {
        statement:
          'A function $f$ on an interval $I$ is **convex** iff for all $x, y \\in I$ and $\\theta \\in [0, 1]$, the chord lies on or above the curve ($f(\\theta x + (1-\\theta)y) \\le \\theta f(x) + (1-\\theta)f(y)$). For twice-differentiable $f$ (where $\\forall x$ means "for every $x$" and $\\#\\{x : f\'(x) = 0\\}$ means "the number of stationary points"):',
        formulaLatex:
          'f \\text{ convex } \\iff f\'\'(x) \\ge 0; \\qquad f\'\'(x) > 0 \\;(\\forall x) \\implies f \\text{ strictly convex } \\implies \\#\\{x: f\'(x)=0\\} \\le 1',
        plainEnglishDecoding:
          'In plain words, this is why ML engineers love convex objectives: Linear Regression MSE, Ridge Regression, Logistic Cross-Entropy, and SVM Hinge+L2 are **all convex**, meaning ANY flat valley ($f\'(w^*) = 0$) Gradient Descent discovers is automatically the **true global optimum** — never a fake local trap!',
        workedMiniExamples: [
          {
            prompt: 'Is $f(x) = |x|$ convex on $\\mathbb{R}$? Is it strictly convex?',
            solution:
              '**Step 1 (Test convexity via the triangle inequality):** For any $x, y \\in \\mathbb{R}$ and $\\theta \\in [0, 1]$, $|\\theta x + (1 - \\theta)y| \\le |\\theta x| + |(1 - \\theta)y| = \\theta|x| + (1 - \\theta)|y|$. So **Convex: YES** (even though $|x|$ isn’t differentiable at $0$!).\n**Step 2 (Test strict convexity):** Pick $x = 1, y = 3, \\theta = 0.5$ on the right straight arm: midpoint height $|2| = 2$ equals chord height $\\frac{1 + 3}{2} = 2$ (NOT strictly less!). So **Strictly convex: NO**!',
          },
          {
            prompt: 'Why is Ridge loss $L(w) = \\frac{1}{2}(y - wx)^2 + \\frac{\\lambda}{2}w^2$ ($\\lambda > 0$) guaranteed to have a UNIQUE global minimum even when $x = 0$?',
            solution:
              '**Step 1 (Compute curvature $L\'\'(w)$):** $L\'(w) = -(y - wx)x + \\lambda w = (x^2 + \\lambda)w - xy$, so $L\'\'(w) = x^2 + \\lambda$. Since $x^2 \\ge 0$ and $\\lambda > 0$, $L\'\'(w) \\ge \\lambda > 0$ everywhere (**strictly convex!**).\n**Step 2 (Check outer walls / coercivity):** As $|w| \\to \\infty$, the $+\\frac{\\lambda}{2}w^2$ term forces $L(w) \\to +\\infty$ on both sides, preventing $e^x$-style downhill escape and guaranteeing **existence + uniqueness**!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $f: \\mathbb{R} \\to \\mathbb{R}$ satisfies $f\'\'(x) > 0$ for all $x \\in \\mathbb{R}$, then $f$ has a unique global minimum on $\\mathbb{R}$.',
          reality: 'TRAP! Always test **$f(x) = e^x$**! It satisfies $f\'\'(x) = e^x > 0$ everywhere, yet has **NO minimum** on $\\mathbb{R}$! Correct statement: "at most one global minimum" (or "if $f\'(x^*)=0$, then $x^*$ is the unique global minimum").',
          counterExample: '$f(x) = e^x$ or $f(x) = e^{-x}$ on $(-\\infty, \\infty)$.',
        },
        {
          myth: 'Strict convexity on $\\mathbb{R}$ requires $f\'\'(x) > 0$ at every single point.',
          reality: '$f\'\'(x) > 0$ everywhere is *sufficient*, NOT necessary — $f\'\'$ can touch $0$ at isolated points and still keep $f\'$ strictly increasing!',
          counterExample: '$f(x) = x^4$ has $f\'\'(0) = 0$, yet $f\'(x) = 4x^3$ is strictly increasing everywhere, so $x^4$ IS strictly convex!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'OLS, Ridge, Logistic & Hard-Margin SVM Optimization',
          whyItMatters: 'Adding $+\\lambda \\|w\\|_2^2$ ($\\lambda > 0$) adds $+2\\lambda I$ to the Hessian, turning flat directions into strictly convex bowls!',
          pyqProof: 'GATE DA 2025 · Q.51 (2M MSQ) & GATE DA 2026 · Q.37, Q.55',
        },
      ],
    },
    {
      id: 'c6-4',
      title: 'Iterative Optimization: Gradient Descent & 1-Step SGD',
      subtitle: 'Stepping opposite the derivative to train models — and reading loss definitions carefully',
      priority: 'core-pillar',
      buildsOn: 'Step 6.3 Convexity + Ch.4 Chain Rule',
      whyStudy:
        'For simple 1-variable parabolas you can solve $L\'(w) = 0$ on paper in 5 seconds — but for Logistic Regression, Neural Networks, or datasets with millions of rows, solving $\\nabla L(w) = 0$ in closed form is mathematically impossible! **Gradient Descent** (and **Stochastic Gradient Descent / SGD**, updating from one sample at a time) is the universal engine that trains virtually every modern AI model by taking small downhill steps — and **GATE DA 2026 Q.29 & Q.55** test exact 1-step SGD arithmetic directly.',
      groundRules: [
        '**Why There Is a MINUS Sign in $w_{t+1} = w_t - \\eta \\nabla L(w_t)$:** The gradient $\\nabla L(w_t)$ (for 1 variable, just the ordinary derivative $\\frac{dL}{dw}$!) always points **UPHILL** (the direction that *increases* $L$). To **minimize** loss you MUST walk in the exact opposite direction — hence **subtract** $\\eta \\cdot \\text{slope}$! (Only use $+$ for Gradient *Ascent* when maximizing a reward or log-likelihood!)',
        '**Plug Numerical $(x, y)$ Into $L(w)$ BEFORE Differentiating:** In any 1-step SGD exam problem, $(x, y)$ are frozen numbers from the training sample, while $w$ is the ONLY variable changing! Plugging numerical $(x, y)$ into $L(w)$ first collapses scary multivariable notation into a tiny 1-variable expression you can differentiate cleanly without missing Chain-Rule factors or a missing $\\frac{1}{2}$!',
        '**Why Learning Rate $\\eta$ Has a Sharp Speed Limit ($0 < \\eta < 2 / L\'\'$):** On a quadratic bowl $L(w) = \\frac{a}{2}(w - w^*)^2$ (curvature $L\'\' = a > 0$), each step multiplies your distance to the bottom by $(1 - \\eta a)$. If $\\eta = \\frac{1}{a}$, you land on $w^*$ in **1 single step** (Newton’s step!). If $\\eta \\ge \\frac{2}{a}$, then $|1 - \\eta a| \\ge 1$ — you overshoot across the valley wider and wider and **diverge**!',
        '**Differentiate the EXACT Loss Written in the Stem (MSE vs. Half-MSE vs. MAE):** Never run on autopilot! Squared error $(wx - y)^2$ carries a factor of $2$ that $\\frac{1}{2}(wx - y)^2$ cancels, and absolute error $|wx - y|$ (MAE / $L_1$, tested in GATE DA 2026 Q.29 & Q.55!) has a constant slope of $+x$ (when $wx > y$) or $-x$ (when $wx < y$) completely independent of how big the error is!',
      ],
      toyExample: {
        title: 'Blindfolded on a Foggy Hillside at $w_0 = 10$: Which Way Is Downhill?',
        scenario:
          'Picture yourself standing blindfolded on a hillside at weight $w_0 = 10.00$ with step size $\\eta = 0.10$. You feel the ground tilting uphill to the right with slope $\\frac{dL}{dw} = +10.00$ (this is GATE DA 2026 Q.29!). Which way should you step to walk downhill and shrink the loss $L$?',
        walkthroughSteps: [
          '1. **Read the sign of the slope:** A positive slope $+10.00$ means moving right ($+w$) climbs **UPHILL**, so to walk **DOWNHILL** you must step **LEFT (subtract!)**.',
          '2. **Scale by the learning rate $\\eta$:** Step size $= \\eta \\times \\frac{dL}{dw} = 0.10 \\times 10.00 = 1.00$.',
          '3. **Compute the new weight $w_1$:** $w_1 = w_0 - \\eta \\frac{dL}{dw} = 10.00 - 1.00 = \\mathbf{9.00}$!',
        ],
        ahaMoment:
          'Every single SGD numerical in GATE comes down to two calm checks: **(1) use a MINUS sign ($w - \\eta \\cdot \\text{grad}$) when minimizing** (only use $+$ for gradient *ascent* / maximizing log-likelihood), and **(2) differentiate the EXACT loss formula written in the stem** — never assume there is a $\\frac{1}{2}$ in front of $(y - wx)^2$ or confuse squared error with $|y - wx|$ MAE!',
      },
      theoremAndFormula: {
        statement:
          'To minimize a differentiable objective $L(w)$ iteratively with learning rate (step size) $\\eta > 0$, **Gradient Descent** (or **Stochastic Gradient Descent, SGD**, on a single sample $(x, y)$) updates (where $\\left.\\frac{\\partial L}{\\partial w}\\right|_{w = w_t}$ reads "the partial derivative of $L$ with respect to $w$, evaluated at the current weight $w_t$"):',
        formulaLatex:
          'w_{t+1} = w_t - \\eta \\left.\\frac{\\partial L(w; x, y)}{\\partial w}\\right|_{w = w_t}',
        plainEnglishDecoding:
          'Compare the 3 classic single-sample losses side by side for model $f_w(x) = wx$ so you never mix up a factor of $2$:\n• **Half-Squared Loss** $\\frac{1}{2}(wx - y)^2 \\implies \\frac{\\partial L}{\\partial w} = (wx - y)x$\n• **Full Squared Loss** $(wx - y)^2 \\implies \\frac{\\partial L}{\\partial w} = \\mathbf{2}(wx - y)x$ *(keep that $2$!)*\n• **Absolute (MAE / $L_1$) Loss** $|wx - y| \\implies \\frac{\\partial L}{\\partial w} = \\text{sign}(wx - y) \\cdot x$ *(whenever $wx > y$, the derivative is simply $+x$!)*',
        workedMiniExamples: [
          {
            prompt: 'Minimize $L(w) = (wx - y)^2$ with $w_0 = 2,\\; x = 3,\\; y = 4,\\; \\eta = 0.05$ for 1 SGD step.',
            solution:
              '**Step 1 (Plug $(x, y) = (3, 4)$ into $L(w)$ FIRST!):** $L(w) = (3w - 4)^2$.\n**Step 2 (Differentiate wrt $w$ — notice there is NO $1/2$!):** By Chain Rule, $L\'(w) = 2(3w - 4) \\cdot 3 = 6(3w - 4)$.\n**Step 3 (Evaluate at $w_0 = 2$ and step downhill):** $L\'(2) = 6(6 - 4) = 12$, so $w_1 = 2 - 0.05(12) = 2 - 0.6 = \\mathbf{1.4}$.',
          },
          {
            prompt: 'For quadratic $L(w) = \\frac{a}{2}(w - w^*)^2$ ($a > 0$), for which learning rates $\\eta > 0$ does Gradient Descent converge to $w^*$ from any $w_0 \\neq w^*$?',
            solution:
              '**Step 1 (Compute the error after one update):** Since $L\'(w) = a(w - w^*)$, subtracting $w^*$ from both sides of $w_{t+1} = w_t - \\eta a(w_t - w^*)$ gives:\n$w_{t+1} - w^* = (1 - \\eta a)(w_t - w^*)$.\n**Step 2 (Check when the geometric ratio shrinks to $0$):** After $t$ steps, $w_t - w^* = (1 - \\eta a)^t (w_0 - w^*)$, which shrinks to $0$ iff $|1 - \\eta a| < 1 \\iff -1 < 1 - \\eta a < 1 \\iff \\mathbf{0 < \\eta < \\frac{2}{a}} = \\frac{2}{L\'\'}$! (And at $\\eta = \\frac{1}{a}$, $1 - \\eta a = 0$, landing on $w^*$ in **1 exact step**!)',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Assuming squared error always has a $\\frac{1}{2}$ factor so the $2$ cancels!',
          reality: 'GATE authors intentionally omit $\\frac{1}{2}$ (or swap MSE for MAE $|y - f_w(x)|$, like GATE DA 2026 Q.55!) to catch autopilot memorizers. Read the exact formula of $L(w)$ first!',
          counterExample: 'On $(wx - y)^2$ vs $\\frac{1}{2}(wx - y)^2$, your step size doubles if there is no $\\frac{1}{2}$!',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'pb-6-1',
      title: 'Beating the Closed-Interval $[a,b]$ + Derivative-Extrema Double Trap',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2025 · Q.49 (2M MSQ)'],
      problemStatement:
        'Consider $f(x) = \\frac{x^3}{3} + \\frac{7}{2}x^2 + 10x + \\frac{133}{2}$ on the closed interval $x \\in [-8, 0]$. Evaluate both where $f(x)$ attains its global maximum and where $f\'(x)$ attains its minimum on $[-8, 0]$.',
      triggerCue:
        'Closed brackets $[-8, 0]$ + MSQ options mixing statements about **$f(x)$** and statements about **$f\'(x)$**!',
      bruteForceTrap:
        'Solving $f\'(x) = (x+5)(x+2) = 0$, seeing $f\'\'(-5) = -3 < 0$, and immediately clicking "Global maximum of $f$ is at $x = -5$" — losing all 2 MSQ marks because $f(0) = 66.5 > f(-5) \\approx 62.33$!',
      mentalShift:
        'Separate the problem into two clean jobs: first build the 4-row Candidate Table for $f$ (endpoints $-8, 0$ plus interior $-5, -2$), and second treat $g(x) = f\'(x) = x^2 + 7x + 10$ as its own separate upward parabola whose vertex sits at $-b/(2a) = -7/2$!',
      steps: [
        {
          label: 'Find interior critical points of f inside (-8, 0)',
          detail: '$f\'(x) = x^2 + 7x + 10 = (x + 5)(x + 2) = 0 \\implies x = -5$ and $x = -2$.',
        },
        {
          label: 'Evaluate all 4 candidates for f on [-8, 0]',
          detail:
            '• $f(0) = \\frac{133}{2} = \\mathbf{66.5}$ (**TRUE Global Max!**)\n• $f(-5) = -\\frac{125}{3} + \\frac{175}{2} - 50 + 66.5 \\approx 62.33$ (interior local max only!)\n• $f(-2) = -\\frac{8}{3} + 14 - 20 + 66.5 \\approx 57.83$ (interior local min only!)\n• $f(-8) = -\\frac{512}{3} + 224 - 80 + 66.5 \\approx \\mathbf{39.83}$ (**TRUE Global Min!**)\nNotice BOTH the global max ($x = 0$) and global min ($x = -8$) live on the boundaries!',
        },
        {
          label: 'Minimize g(x) = f\'(x) = x^2 + 7x + 10 on [-8, 0]',
          detail:
            '$g\'(x) = f\'\'(x) = 2x + 7 = 0 \\implies x = -\\frac{7}{2} = -3.5 \\in [-8, 0]$. Since $g\'\'(x) = 2 > 0$, $x = -7/2$ is the **unique global minimum of $f\'(x)$**!',
        },
      ],
      lockInTakeaway:
        '1) Closed $[a,b] \\implies$ ALWAYS evaluate $f(a)$ and $f(b)$! 2) Double-check arithmetic on fractions using your GATE calculator! 3) Read carefully whether an option asks about $f$ or $f\'$!',
    },
    {
      id: 'pb-6-2',
      title: 'The "$e^x$ Sanity Test" for Strict Convexity MSQs',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2025 · Q.51 (2M MSQ)'],
      problemStatement:
        'Let $f: \\mathbb{R} \\to \\mathbb{R}$ be twice differentiable with $f\'\'(x) > 0$ for all $x \\in \\mathbb{R}$. Which claims about stationary points, local minima, and global minima are ALWAYS true?',
      triggerCue:
        'Abstract theorem statements about $f: \\mathbb{R} \\to \\mathbb{R}$ with $f\'\'(x) > 0$ everywhere and quantifier words like *"exactly one"*, *"at least one"*, *"at most one"*.',
      bruteForceTrap:
        'Only picturing $f(x) = x^2$ in your head — on $x^2$, "exactly one stationary point" and "has a global minimum" look true, tricking you into selecting false options!',
      mentalShift:
        'Always hold **two test curves side by side** in your mind: **$f_1(x) = x^2$** (has $1$ minimum) AND **$f_2(x) = e^x$** (has $0$ minima)! Any statement that claims to hold for every strictly convex function MUST pass both.',
      steps: [
        {
          label: 'Test "f has a global minimum on R" against e^x',
          detail: 'Fails on $e^x$ ($e^x > 0$ approaches $0$ as $x \\to -\\infty$ without ever attaining a minimum) $\\implies$ **FALSE**!',
        },
        {
          label: 'Test "f has AT MOST ONE stationary point / local min / global min"',
          detail:
            'Passes $x^2$ (count $= 1 \\le 1$) AND passes $e^x$ (count $= 0 \\le 1$)! Why universally true? $f\'\' > 0 \\implies f\'$ is strictly increasing $\\implies f\'(x) = 0$ has at most 1 root, and if $f\'(x^*)=0$ it is the unique global min!',
        },
      ],
      lockInTakeaway:
        'Whenever $f\'\'(x) > 0$ on unbounded $\\mathbb{R}$, ALWAYS run every MSQ option through **$e^x$** before clicking!',
    },
    {
      id: 'pb-6-3',
      title: 'Sign-Chart Factoring on Quartic Extrema',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2024 · Q.50 (2M MSQ)'],
      problemStatement:
        'Find all local maxima and local minima of $f(x) = \\frac{x^4}{4} - \\frac{2x^3}{3} - \\frac{3x^2}{2} + 1$.',
      triggerCue:
        'Degree-4 polynomial whose denominators $(4, 3, 2)$ were specifically chosen by the GATE setter to cancel cleanly when differentiated!',
      bruteForceTrap:
        'Evaluating fourth-power fractions inside $f(x)$ when the question only asks *which $x$-values* are local maxima vs local minima!',
      mentalShift:
        'Differentiate first and watch the fractions vanish completely: $\\frac{d}{dx}\\!\\left(\\frac{x^4}{4} - \\frac{2x^3}{3} - \\frac{3x^2}{2} + 1\\right) = x^3 - 2x^2 - 3x$. Factor out $x$, mark the three roots on a number line, and read off the sign flips!',
      steps: [
        {
          label: 'Differentiate and factor completely',
          detail: '$f\'(x) = x(x^2 - 2x - 3) = x(x - 3)(x + 1) = 0 \\implies$ roots in ascending order: $-1,\\; 0,\\; 3$.',
        },
        {
          label: 'Alternate signs from right (+infty) leftward (all roots have multiplicity 1!)',
          detail:
            'For $x > 3$, $f\'(x) > 0$ $(+)$. Crossing simple roots flips sign each time:\n`(-)` $-1$ `(+)` $0$ `(-)` $3$ `(+)`\n• $-1$: $\\searrow\\nearrow$ Local Min\n• $0$: $\\nearrow\\searrow$ Local Max\n• $3$: $\\searrow\\nearrow$ Local Min.',
        },
      ],
      lockInTakeaway:
        'Simple roots of $f\'(x)$ alternate Min / Max / Min automatically; only even-multiplicity roots like $(x-1)^2$ fail to flip sign (saddle)!',
    },
    {
      id: 'pb-6-4',
      title: 'Zero-Slip 1-Step SGD Execution',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2026 · Q.29 (1M NAT)'],
      problemStatement:
        'In a supervised learning task with model $f_w(x) = wx$ and loss $L(w) = |f_w(x) - y|$ (with $y = 0$), given initial parameter $w_0 = 10.00$, input $x = 10.00$, and learning rate $\\eta = 0.10$, compute $w_1$ after one SGD update.',
      triggerCue:
        'Explicit model $f_w(x)$, loss formula, initial weight $w_0$, data point, and learning rate $\\eta$.',
      bruteForceTrap:
        'Blindly plugging into an MSE formula $w - \\eta(wx - y)x$ when the loss gradient with respect to $w$ is simply $+x$!',
      mentalShift:
        'Make your life easy: substitute the sample’s numerical $(x, y)$ into $L(w)$ **first** so it becomes a tiny 1-variable expression in $w$, differentiate that simple formula at $w_0$, and subtract $\\eta \\cdot L\'(w_0)$!',
      steps: [
        {
          label: 'Substitute sample numbers into L(w) BEFORE differentiating!',
          detail:
            'At $x = 10.00, y = 0$ near $w_0 = 10.00 > 0$: $f_w(10) = 10w > 0$, so $L(w) = 10w$.',
        },
        {
          label: 'Differentiate wrt w and update',
          detail:
            '$\\left.\\frac{dL}{dw}\\right|_{w=10} = 10.00$. Therefore: $$w_1 = w_0 - \\eta \\cdot 10.00 = 10.00 - 0.10 \\times 10.00 = 9.00$$',
        },
      ],
      lockInTakeaway:
        '**Golden SGD Trick:** Plug sample numbers $(x, y)$ into $L(w)$ *before* differentiating wrt $w$ — turning multivariable symbols into a 5-second high-school derivative!',
    },
  ],
  arsenalCards: [
    {
      id: 'ac-6-1',
      badge: 'Complete Stationary Point Classifier',
      whenYouSpot: '$f\'(x^*) = 0$ on a smooth function $f$',
      directWeaponLatex: 'f^{(k)}(x^*) \\neq 0 \\text{ (first nonzero deriv at } x^*\\text{)}: \\quad \\begin{cases} k \\text{ even, } >0 \\implies \\text{Local Min} \\\\ k \\text{ even, } <0 \\implies \\text{Local Max} \\\\ k \\text{ odd} \\implies \\text{Saddle / Inflection} \\end{cases}',
      instantRule: 'When $k=2$ ($f\'\' \\neq 0$), this is the classic 2nd Derivative Test; when $f\'\'=0$, keep differentiating until the first nonzero number!',
      tenSecondExample: '$f(x) = -x^4$ at $0$: $f^{(4)}(0) = -24 < 0$ ($k=4$ even) $\\implies$ Strict Local Max.',
      oneFatalTrap: 'Thinking $f\'\'(x^*) = 0$ automatically means inflection point ($x^4$ is a min, NOT an inflection point!).',
    },
    {
      id: 'ac-6-2',
      badge: 'Closed-Interval [a, b] Mandatory Table',
      whenYouSpot: '"Global max / min of $f(x)$ on $[a, b]$"',
      directWeaponLatex: '\\text{Candidates} = \\{a,\\; b\\} \\cup \\{c \\in (a,b) : f\'(c)=0 \\text{ or DNE}\\}',
      instantRule: 'NEVER skip $f(a)$ and $f(b)$, and discard any root of $f\'=0$ that falls outside $(a,b)$!',
      tenSecondExample: 'GATE 2025 Q.49 on $[-8,0]$: boundary $f(0)=66.5$ beats interior local max $f(-5)=62.33$!',
      oneFatalTrap: 'Stopping at $f\'\'(c) < 0$ (local max) without checking if the other branch shoots higher at the boundary!',
    },
    {
      id: 'ac-6-3',
      badge: 'Strict Convexity MSQ Filter ("The e^x Filter")',
      whenYouSpot: '$f: \\mathbb{R} \\to \\mathbb{R}$ with $f\'\'(x) > 0$ for all $x \\in \\mathbb{R}$',
      directWeaponLatex: '\\#(\\text{stationary pts}) \\in \\{0, 1\\}; \\qquad f\'(x^*)=0 \\implies x^* \\text{ is UNIQUE global min}',
      instantRule: 'Test every MSQ option on BOTH $x^2$ (1 min) AND $e^x$ (0 mins): "at most one" = TRUE; "at least one / always exists" = FALSE!',
      tenSecondExample: 'GATE 2025 Q.51: B, C, D true; "always has a global minimum" false because of $e^x$.',
      oneFatalTrap: 'Forgetting unbounded domains allow $e^x$ to decrease forever without hitting bottom!',
    },
    {
      id: 'ac-6-4',
      badge: '1-Step SGD Plug-First Formula',
      whenYouSpot: '1-step Gradient Descent / SGD NAT with given $(w_0, x, y, \\eta)$',
      directWeaponLatex: 'w_1 = w_0 - \\eta \\cdot \\frac{d}{dw}\\Big[L(w; x_{\\text{num}}, y_{\\text{num}})\\Big]_{w=w_0}',
      instantRule: 'Plug numerical $(x, y)$ into $L(w)$ FIRST, differentiate wrt $w$, plug $w_0$, subtract $\\eta \\cdot \\text{grad}$!',
      tenSecondExample: '$L(w) = (3w - 4)^2$ at $w_0=2, \\eta=0.05$: $L\'(w) = 2(3w-4)(3) = 12 \\implies w_1 = 2 - 0.6 = 1.4$.',
      oneFatalTrap: 'Adding $+\\eta \\nabla L$ instead of subtracting, or assuming a $1/2$ factor that wasn’t in $L$!',
    },
    {
      id: 'ac-6-5',
      badge: 'Quadratic Step-Size Convergence Window',
      whenYouSpot: 'Gradient descent stability on $L(w) = \\frac{a}{2}w^2 + bw + c$ ($a = L\'\' > 0$)',
      directWeaponLatex: '\\text{Converges} \\iff 0 < \\eta < \\frac{2}{L\'\'}; \\qquad \\text{1-Step Exact Min at } \\eta^* = \\frac{1}{L\'\'}',
      instantRule: 'Max safe learning rate is $2 / (\\text{curvature } L\'\')$; half of that ($1 / L\'\'$) lands on the minimum in 1 step!',
      tenSecondExample: 'On $L(w) = 5(w - 3)^2$, $L\'\' = 10 \\implies$ converges for $0 < \\eta < 0.2$, exact 1-step jump at $\\eta = 0.1$!',
      oneFatalTrap: 'Confusing the coefficient $k$ in $L(w) = k w^2$ with curvature $L\'\' = 2k$ ($2 / L\'\' = 1/k$)!',
    },
    {
      id: 'ac-6-6',
      badge: 'AM-GM Positive Sum Minimizer',
      whenYouSpot: 'Minimize $a x + \\frac{b}{x}$ for $x > 0$ ($a, b > 0$) without taking derivatives',
      directWeaponLatex: '\\min_{x > 0}\\left(ax + \\frac{b}{x}\\right) = 2\\sqrt{ab} \\quad \\text{attained at } ax = \\frac{b}{x} \\iff x^* = \\sqrt{\\frac{b}{a}}',
      instantRule: 'Sum of two positive reciprocal terms hits its minimum when the two terms are EQUAL ($ax = b/x$)!',
      tenSecondExample: '$\\min_{x>0}(4x + 9/x) = 2\\sqrt{36} = 12$ at $x = 3/2 = 1.5$ in 3 seconds!',
      oneFatalTrap: 'ONLY applies for $x > 0$! For $x < 0$, $ax + b/x$ is negative and has local MAX $-2\\sqrt{ab}$.',
    },
  ],
  questions: [
    {
      id: 'q-6-1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'Find the minimum value of $f(x) = 4x + \\frac{9}{x}$ on $(0, \\infty)$.',
      natAnswer: { min: 11.99, max: 12.01, exactDisplay: '12' },
      triggerHint: 'You have two clean ways here: set $f\'(x) = 4 - \\frac{9}{x^2} = 0$, OR skip derivatives altogether with our 3-second AM-GM rule $2\\sqrt{ab}$!',
      intuitiveSolution: [
        '1. **Calculus:** $f\'(x) = 4 - 9/x^2 = 0 \\implies x^2 = 9/4 \\implies x = 1.5$ (since $x > 0$), with $f\'\'(1.5) = 18/(1.5)^3 > 0$. Value: $4(1.5) + 9/1.5 = 6 + 6 = 12$.',
        '2. **AM-GM Shortcut:** $4x + \\frac{9}{x} \\ge 2\\sqrt{4x \\cdot \\frac{9}{x}} = 2\\sqrt{36} = 12$.',
      ],
      directShortcutUsed: '$\\min_{x>0}(ax + b/x) = 2\\sqrt{ab} = 12$.',
    },
    {
      id: 'q-6-2',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2',
      marks: 1,
      type: 'NAT',
      stem: 'We minimize $L(w) = (2w - 10)^2$ using Gradient Descent starting from $w_0 = 8$ with learning rate $\\eta = 0.05$. Find $w_1$ after one step (up to 2 decimal places).',
      natAnswer: { min: 6.79, max: 6.81, exactDisplay: '6.80' },
      triggerHint: 'Watch the Chain Rule factor carefully when differentiating $(2w - 10)^2$: the inner derivative brings out an extra $2$, giving $L\'(w) = 4(2w - 10)$!',
      intuitiveSolution: [
        '1. $L\'(w) = 2(2w - 10)(2) = 4(2w - 10)$.',
        '2. Evaluate at $w_0 = 8$: $L\'(8) = 4(16 - 10) = 24$.',
        '3. Update: $w_1 = w_0 - \\eta L\'(8) = 8 - 0.05 \\times 24 = 8 - 1.2 = 6.80$.',
      ],
      directShortcutUsed: 'Chain rule factor of $2 \\times 2 = 4$, then $w_0 - \\eta L\'(w_0)$.',
    },
    {
      id: 'q-6-3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.15',
      year: 2024,
      marks: 1,
      type: 'MCQ',
      stem: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$ be a twice-differentiable function. If $f\'(x^*) = 0$ and $f\'\'(x^*) > 0$ at some point $x^* \\in \\mathbb{R}$, then $x^*$ is NECESSARILY a:',
      options: [
        { id: 'A', text: 'Global minimum of $f$', whyTrueOrFalse: '$f\'\'(x^*) > 0$ is only checked AT the single point $x^*$ (not all $x \\in \\mathbb{R}$!), so $f$ can easily dip much lower elsewhere (like a cubic!).' },
        { id: 'B', text: 'Local minimum of $f$', whyTrueOrFalse: 'Second Derivative Test: $f\'(x^*)=0$ and $f\'\'(x^*)>0$ guarantees $f(x) > f(x^*)$ on a small neighborhood around $x^*$! True!' },
        { id: 'C', text: 'Local maximum of $f$', whyTrueOrFalse: 'Local maximum corresponds to $f\'\'(x^*) < 0$.' },
        { id: 'D', text: 'Saddle / inflection point of $f$', whyTrueOrFalse: 'Inflection requires curvature sign change ($f\'\'(x^*) = 0$), impossible when $f\'\'(x^*) > 0$.' },
      ],
      correctOptions: ['B'],
      triggerHint: 'Notice the scope carefully: $f\'\'(x^*) > 0$ is promised ONLY right at the single point $x^*$ (not for all $x \\in \\mathbb{R}$), so think local vs. global!',
      intuitiveSolution: [
        '1. By Taylor’s theorem near $x^*$, $f(x) = f(x^*) + 0 + \\frac{1}{2}f\'\'(x^*)(x - x^*)^2 + o((x-x^*)^2) > f(x^*)$ for small $x \\neq x^*$, proving $x^*$ is a **local minimum**.',
        '2. Counterexample to Global Minimum (Option A): $f(x) = x^3 - 3x$ has $f\'(1) = 0, f\'\'(1) = 6 > 0$ (local min $-2$), yet as $x \\to -\\infty$, $f(x) \\to -\\infty$!',
      ],
      directShortcutUsed: 'Pointwise $f\'\'(x^*) > 0 \\implies$ local minimum (NOT necessarily global!).',
    },
    {
      id: 'q-6-4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.50',
      year: 2024,
      marks: 2,
      type: 'MSQ',
      stem: 'Consider the function $$f(x) = \\frac{x^4}{4} - \\frac{2x^3}{3} - \\frac{3x^2}{2} + 1, \\quad x \\in \\mathbb{R}$$ Which of the following statements is/are TRUE?',
      options: [
        { id: 'A', text: '$x = 0$ is a point of local maximum.', whyTrueOrFalse: '$f\'(x) = x(x-3)(x+1)$ changes from $(+)$ to $(-)$ at $x = 0$ (and $f\'\'(0) = -3 < 0$). True!' },
        { id: 'B', text: '$x = 3$ is a point of local minimum.', whyTrueOrFalse: '$f\'(x)$ changes from $(-)$ to $(+)$ at $x = 3$ (and $f\'\'(3) = 27 - 12 - 3 = 12 > 0$). True!' },
        { id: 'C', text: '$x = -1$ is a point of local maximum.', whyTrueOrFalse: 'At $x = -1$, $f\'\'(-1) = 3(-1)^2 - 4(-1) - 3 = +4 > 0$, so $x = -1$ is a **local minimum**, NOT a local maximum!' },
        { id: 'D', text: '$x = 0$ is a point of local minimum.', whyTrueOrFalse: 'False — $f\'\'(0) = -3 < 0$ makes $x = 0$ a local maximum.' },
      ],
      correctOptions: ['A', 'B'],
      triggerHint: 'Take the first derivative and enjoy watching all the fractions disappear: $f\'(x) = x^3 - 2x^2 - 3x = x(x - 3)(x + 1)$ — then sketch its sign chart!',
      intuitiveSolution: [
        '1. $f\'(x) = x^3 - 2x^2 - 3x = x(x - 3)(x + 1) = 0 \\implies$ stationary points at $x = -1, 0, 3$.',
        '2. Compute $f\'\'(x) = 3x^2 - 4x - 3$: $f\'\'(-1) = 4 > 0$ (local min), $f\'\'(0) = -3 < 0$ (**local max**, A), $f\'\'(3) = 12 > 0$ (**local min**, B).',
      ],
      directShortcutUsed: 'Simple-root sign chart `(-) -1 (+) 0 (-) 3 (+)` $\\implies$ Min at $-1, 3$; Max at $0$.',
    },
    {
      id: 'q-6-5',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.49',
      year: 2025,
      marks: 2,
      type: 'MSQ',
      stem: 'Consider the function $$f(x) = \\frac{x^3}{3} + \\frac{7}{2}x^2 + 10x + \\frac{133}{2}$$ defined on the closed interval $x \\in [-8, 0]$. Which of the following statements is/are TRUE?',
      options: [
        {
          id: 'A',
          text: 'The maximum value of $f(x)$ on $[-8, 0]$ is attained at $x = -5$.',
          whyTrueOrFalse: 'THE CLASSIC TRAP! $x = -5$ is only an interior local max ($f(-5) = 62.33$), whereas at right endpoint $x = 0$, $f(0) = 133/2 = 66.5 > 62.33$!',
        },
        {
          id: 'B',
          text: 'The minimum value of $f(x)$ on $[-8, 0]$ is attained at $x = -2$.',
          whyTrueOrFalse: 'TRAP #2! Interior local min is $f(-2) = 57.83$, whereas at left endpoint $x = -8$, $f(-8) = 39.83 < 57.83$!',
        },
        {
          id: 'C',
          text: 'The maximum value of $f(x)$ on $[-8, 0]$ is $\\frac{133}{2}$.',
          whyTrueOrFalse: 'Comparing all 4 candidates ($f(-8)=39.83,\\; f(-5)=62.33,\\; f(-2)=57.83,\\; f(0)=66.5$), the global max is indeed $f(0) = 133/2$! True!',
        },
        {
          id: 'D',
          text: 'The derivative $f\'(x)$ attains its minimum on $[-8, 0]$ at $x = -\\frac{7}{2}$.',
          whyTrueOrFalse: '$f\'(x) = x^2 + 7x + 10$ is an upward parabola with vertex at $f\'\'(x) = 2x + 7 = 0 \\implies x = -7/2 = -3.5 \\in [-8, 0]$! True!',
        },
      ],
      correctOptions: ['C', 'D'],
      triggerHint: 'Remember our closed-interval habit: compare BOTH endpoints $x = -8$ and $x = 0$ against the interior critical points $x = -5, -2$ — and check Option D using $f\'\'(x) = 0$!',
      intuitiveSolution: [
        '1. $f\'(x) = x^2 + 7x + 10 = (x+5)(x+2) = 0 \\implies$ interior stationary points $x = -5, -2$.',
        '2. Build the 4-point table on $[-8, 0]$: $f(-8) \\approx 39.83$ (**Global Min!**), $f(-5) \\approx 62.33$ (local max only), $f(-2) \\approx 57.83$ (local min only), $f(0) = 133/2 = 66.5$ (**Global Max!**) — eliminating A & B and confirming **C**!',
        '3. For $f\'(x) = x^2 + 7x + 10$, $(f\')\'(x) = 2x + 7 = 0 \\implies x = -7/2$ minimizes $f\'(x)$ (**D**).',
      ],
      directShortcutUsed: 'Mandatory 4-point closed-interval table + parabola vertex $-b/(2a) = -7/2$ for $f\'$.',
    },
    {
      id: 'q-6-6',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.51',
      year: 2025,
      marks: 2,
      type: 'MSQ',
      stem: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$ be a twice-differentiable function such that $f\'\'(x) > 0$ for all $x \\in \\mathbb{R}$. Which of the following statements MUST be TRUE?',
      options: [
        {
          id: 'A',
          text: '$f$ has exactly one global minimum on $\\mathbb{R}$.',
          whyTrueOrFalse: 'Fails the **$e^x$ test**! $f(x) = e^x$ has $f\'\'(x) = e^x > 0$ everywhere on $\\mathbb{R}$, yet has ZERO minima!',
        },
        {
          id: 'B',
          text: '$f$ has at most one stationary point (where $f\'(x) = 0$) on $\\mathbb{R}$.',
          whyTrueOrFalse: 'Since $f\'\'(x) > 0$, $f\'(x)$ is strictly increasing, so $f\'(x) = 0$ can occur at most once ($0$ times for $e^x$, $1$ time for $x^2$). True!',
        },
        {
          id: 'C',
          text: '$f$ has at most one local minimum on $\\mathbb{R}$.',
          whyTrueOrFalse: 'Every local minimum of differentiable $f$ on $\\mathbb{R}$ satisfies $f\'(x)=0$, of which there is at most one. True!',
        },
        {
          id: 'D',
          text: 'If $f\'(x^*) = 0$ at some $x^* \\in \\mathbb{R}$, then $x^*$ is the unique global minimum of $f$.',
          whyTrueOrFalse: 'Strict convexity gives $f(x) > f(x^*) + f\'(x^*)(x - x^*) = f(x^*)$ for every $x \\neq x^*$! True!',
        },
      ],
      correctOptions: ['B', 'C', 'D'],
      triggerHint: 'Put every option through our two-curve filter: does it hold for BOTH $f(x) = x^2$ (one bottom) AND $f(x) = e^x$ (no bottom)?',
      intuitiveSolution: [
        '1. **Option A** fails immediately on $f(x) = e^x$ ($f\'\'(x) = e^x > 0$ everywhere, no minimum).',
        '2. Because $f\'\' > 0$ everywhere, $f\'$ is strictly increasing (injective!), so $f\'(x) = 0$ has $\\le 1$ solution (**B** and **C**).',
        '3. Whenever $f\'(x^*) = 0$ does exist, $f\'(x) < 0$ for all $x < x^*$ and $f\'(x) > 0$ for all $x > x^*$, making $x^*$ the strict unique global minimum (**D**).',
      ],
      directShortcutUsed: 'Dual test-bench ($x^2$ + $e^x$) on strict convexity quantifiers.',
    },
    {
      id: 'q-6-7',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.29',
      year: 2026,
      marks: 1,
      type: 'NAT',
      stem: 'In a supervised learning task, consider a model $f_w(x) = wx$ trained with Stochastic Gradient Descent (SGD) using learning rate $\\eta = 0.10$ to minimize the absolute error loss $L(w) = |f_w(x) - y|$ on a training example $(x, y) = (10.00,\\; 0.00)$. Starting from initial weight $w_i = 10.00$, what is the updated weight $w$ after one SGD step? (Round to two decimal places.)',
      natAnswer: { min: 8.99, max: 9.01, exactDisplay: '9.00' },
      triggerHint: 'Plug $(x, y) = (10, 0)$ into $L(w) = |wx - y|$ first! Near $w_i = 10 > 0$, $|10w|$ simplifies cleanly to $10w$, so its slope is simply $+10$.',
      intuitiveSolution: [
        '1. Substitute $(x, y) = (10.00, 0.00)$ near $w_i = 10.00 > 0$: $L(w) = |10w - 0| = 10w$.',
        '2. Differentiate wrt $w$: $\\left.\\frac{dL}{dw}\\right|_{w=10} = 10.00$.',
        '3. Apply 1-step SGD: $w_{\\text{new}} = w_i - \\eta \\cdot \\frac{dL}{dw} = 10.00 - 0.10 \\times 10.00 = 9.00$.',
      ],
      directShortcutUsed: 'Plug sample numbers into $L(w)$ first $\\to w_{\\text{new}} = 10 - 0.1(10) = 9.00$.',
    },
    {
      id: 'q-6-8',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Higher-Order & Convexity MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Which of the following statements about single-variable functions on $\\mathbb{R}$ is/are TRUE?',
      options: [
        {
          id: 'A',
          text: '$f(x) = x^4$ is strictly convex on $\\mathbb{R}$, even though $f\'\'(0) = 0$.',
          whyTrueOrFalse: 'Since $f\'(x) = 4x^3$ is strictly increasing on $(-\\infty, \\infty)$, every chord lies strictly above $x^4$! True!',
        },
        {
          id: 'B',
          text: 'For $g(x) = x^5 - 5x^4$, $x = 0$ is neither a local maximum nor a local minimum.',
          whyTrueOrFalse: 'LOOK CLOSELY near $x = 0$! Near $0$, $-5x^4$ dominates $x^5$! Check derivatives at $0$: $g\'(0)=g\'\'(0)=g\'\'\'(0)=0$, while $g^{(4)}(0) = -120 < 0$ ($k=4$ EVEN!), so $x = 0$ IS a **strict local maximum**! Trap!',
        },
        {
          id: 'C',
          text: 'The sum of two convex functions on $\\mathbb{R}$ is always convex on $\\mathbb{R}$.',
          whyTrueOrFalse: 'Adding two chord inequalities preserves $\\le$ (and $f\'\' + g\'\' \\ge 0$). True! (Used when adding Ridge $\\lambda w^2$ or LASSO $\\lambda|w|$ to convex losses!)',
        },
        {
          id: 'D',
          text: 'For $h(x) = e^{-x} + x$, $x = 0$ is the unique global minimum on $\\mathbb{R}$.',
          whyTrueOrFalse: '$h\'(x) = -e^{-x} + 1 = 0 \\iff x = 0$, and $h\'\'(x) = e^{-x} > 0$ everywhere $\\implies x = 0$ is the unique global min ($h(0)=1$). True!',
        },
      ],
      correctOptions: ['A', 'C', 'D'],
      triggerHint: 'Pause and look closely at Option B near $x = 0$: when $x = \\pm 0.01$ is tiny, which term dominates in $x^5 - 5x^4$ — the $x^5$ or the lower power $-5x^4$?',
      intuitiveSolution: [
        '1. **Option A:** $f\'(x) = 4x^3$ strictly increasing $\\implies$ strictly convex.',
        '2. **Option B (Killer Trap!):** Near $x = 0$, the **lowest** nonzero power in $x^5 - 5x^4 = x^4(x - 5)$ governs behavior! For $|x| < 5$, $x - 5 < 0$ while $x^4 > 0$, so $g(x) < 0 = g(0)$ on BOTH sides of $0$ — $x = 0$ is a **strict local maximum**!',
        '3. **Options C & D:** Non-negative sums preserve convexity, and $h\'(0)=0$ with $h\'\'(x)=e^{-x}>0$ gives unique global min at $0$.',
      ],
      directShortcutUsed: 'Lowest-power Maclaurin dominance near $0$ ($x^5 - 5x^4 \\approx -5x^4 \\implies$ local max!).',
    },
    {
      id: 'q-6-9',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Optimal Learning Rate NAT',
      marks: 2,
      type: 'NAT',
      stem: 'Consider minimizing the strictly convex quadratic objective $L(w) = 4w^2 - 24w + 50$ via Gradient Descent $w_{t+1} = w_t - \\eta L\'(w_t)$ with constant learning rate $\\eta > 0$. What is the supremum (least upper bound) $\\eta_{\\max}$ of learning rates $\\eta$ for which $w_t$ converges to the global minimum from every initial $w_0 \\neq 3$? (Round to 2 decimal places.)',
      natAnswer: { min: 0.245, max: 0.255, exactDisplay: '0.25' },
      triggerHint: 'Compute the second derivative $L\'\'(w)$ carefully (remember differentiating $4w^2$ twice gives $L\'\' = 8$, not $4$!), and then plug into our stability bound $\\eta_{\\max} = \\frac{2}{L\'\'}$!',
      intuitiveSolution: [
        '1. $L\'(w) = 8w - 24 = 8(w - 3)$, and curvature $L\'\'(w) = 8$.',
        '2. Error recurrence: $w_{t+1} - 3 = (w_t - 3) - 8\\eta(w_t - 3) = (1 - 8\\eta)(w_t - 3)$.',
        '3. Convergence from $w_0 \\neq 3$ holds iff $|1 - 8\\eta| < 1 \\iff 0 < 8\\eta < 2 \\iff 0 < \\eta < \\frac{2}{8} = 0.25$. Thus $\\eta_{\\max} = 0.25$.',
      ],
      directShortcutUsed: '$\\eta_{\\max} = \\frac{2}{L\'\'} = \\frac{2}{8} = 0.25$.',
    },
  ],
}

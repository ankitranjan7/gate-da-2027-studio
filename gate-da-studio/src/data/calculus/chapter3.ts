import type { ChapterData } from '../../types/curriculum'

export const chapter3: ChapterData = {
  id: 'calc-ch3',
  number: 3,
  title: 'Continuity, Piecewise Gluing & Root Trapping (IVT)',
  shortTitle: 'Continuity & IVT Roots',
  estimatedHours: 2.5,
  dayLabel: 'Week 1 · Day 2 (Part A)',
  tagline:
    'Now let’s turn Chapter 2’s limits into unbroken curves! Together we will spot removable holes versus step jumps at a glance, weld piecewise formulas together cleanly, and trap exact roots inside intervals using sign changes and the Intermediate Value Theorem.',
  syllabusMapping: ['Continuity of functions of a single variable'],
  whatIsImportant: [
    '3-Check Continuity Rule: $\\lim_{x\\to c^-} f(x) = \\lim_{x\\to c^+} f(x) = f(c)$',
    'Piecewise parameter matching (prerequisite step to $C^1$ smooth gluing in Chapter 4)',
    'Intermediate Value Theorem (IVT) sign-change root counting $f(a)\\cdot f(b) < 0$ paired with $f\'(x)$ monotonicity (GATE DA 2026 Q.27)',
    'Contrast between continuous RV CDFs (continuous everywhere) vs discrete RV CDFs (right-continuous with step jumps — GATE DA 2026 Q.54)',
  ],
  whatIsNotImportant: [
    'Uniform continuity vs pointwise continuity $\\epsilon$–$\\delta$ proofs on abstract metric spaces',
    'Weierstrass nowhere-differentiable fractal constructions',
  ],
  inboundStream: 'Ch.2 One-Sided Limits (LHL & RHL)',
  outboundStream: [
    'Ch.4 Differentiability (every differentiable function MUST be continuous first!)',
    'Week 2 Discrete vs Continuous Cumulative Distribution Functions $F_X(x)$',
  ],
  glossary: [
    {
      term: 'Continuity at a Point',
      symbol: '$\\lim_{x \\to c} f(x) = f(c)$',
      plainEnglish:
        'Think of continuity at $x = c$ as drawing the graph right through $c$ without lifting your pen: the left limit, the right limit, and the actual dot $f(c)$ all meet at the exact same finite height.',
      tinyExample: '$f(x) = x^2 + 1$ is continuous at $x = 2$ because both one-sided limits equal $f(2) = 5$.',
    },
    {
      term: 'Removable Discontinuity (Hole)',
      symbol: '$\\text{LHL} = \\text{RHL} \\neq f(c)$',
      plainEnglish:
        'In plain words, a removable discontinuity is just a tiny pothole: both sides of the road aim at the same height, and only the single dot at $x = c$ is missing or misplaced — so you can patch it by redefining $f(c)$.',
      tinyExample: '$f(x) = \\frac{\\sin(3x)}{x}$ has a hole at $0$ that patches cleanly when we set $f(0) = 3$.',
    },
    {
      term: 'Jump Discontinuity (Step)',
      symbol: '$\\text{LHL} \\neq \\text{RHL}$',
      plainEnglish:
        'Think of a broken drawbridge where the left road and right road end at two different finite heights; no matter where you place the single dot $f(c)$, you can never close that vertical gap.',
      tinyExample: 'The floor function $\\lfloor x \\rfloor$ jumps from $0$ to $1$ right at $x = 1$.',
    },
    {
      term: 'Infinite / Essential Discontinuity',
      symbol: '$f(x) \\to \\pm\\infty$',
      plainEnglish:
        'This happens when the curve shoots off to $+\\infty$ or $-\\infty$ (or oscillates without settling) near $x = c$, so at least one side never approaches any finite height.',
      tinyExample: '$f(x) = \\frac{1}{x - 2}$ blows up to $-\\infty$ on the left and $+\\infty$ on the right of $x = 2$.',
    },
    {
      term: 'Right-Continuous Function',
      symbol: '$\\lim_{x \\to c^+} f(x) = f(c)$',
      plainEnglish:
        'A function is right-continuous at $c$ when the dot $f(c)$ sits cleanly on the right-hand branch, even if there is a step jump coming from the left — a key property of every probability CDF.',
      tinyExample: 'At $x = 1$, $\\lim_{x\\to 1^+} \\lfloor x \\rfloor = 1 = \\lfloor 1 \\rfloor$, so $\\lfloor x \\rfloor$ is right-continuous everywhere.',
    },
    {
      term: 'Piecewise Function',
      symbol: '$f(x) = \\{g(x),\\, h(x)\\}$',
      plainEnglish:
        'Think of a piecewise function as a curve stitched together from different formulas on different regions of the number line; continuity means checking that adjacent formulas meet at every switching point.',
      tinyExample: 'Welding $3x + k$ ($x \\le 1$) to $x^2 + 5$ ($x > 1$) at $x = 1$ forces $3 + k = 6$, so $k = 3$.',
    },
    {
      term: 'Closed, Open & Half-Open Intervals',
      symbol: '$[a,b],\\; (a,b),\\; (a,b]$',
      plainEnglish:
        'A square bracket `[` or `]` means the endpoint is included in the domain, while a round parenthesis `(` or `)` means you can creep arbitrarily close to that endpoint without ever standing on it.',
      tinyExample: 'On $(-1, 3]$, $x = 3$ is included (so $f(3)$ can attain a maximum), whereas $x = -1$ is excluded.',
    },
    {
      term: 'Intermediate Value Theorem (IVT)',
      symbol: '$f(a)f(b) < 0 \\implies f(c) = 0$',
      plainEnglish:
        'In plain words, if a continuous curve starts below sea level at $a$ and finishes above sea level at $b$ (or vice versa), it cannot teleport — it must cross zero height at least once inside $(a, b)$.',
      tinyExample: 'For $f(x) = e^x + x - 2$, $f(0) = -1 < 0$ and $f(1) = e - 1 > 0$, guaranteeing a root in $(0, 1)$.',
    },
    {
      term: 'Root (Zero) of a Function',
      symbol: '$f(c) = 0$',
      plainEnglish:
        'A root is simply an input $c$ where the function’s output hits $0$ — visually, a point where the graph touches or crosses the $x$-axis.',
      tinyExample: 'For $f(x) = x^3 - 3x^2 + 2$, plugging $x = 1$ gives $1 - 3 + 2 = 0$, so $x = 1$ is a root.',
    },
    {
      term: 'Fixed Point',
      symbol: '$f(c) = c$',
      plainEnglish:
        'Think of a fixed point as an input that the function leaves completely untouched — visually, where the curve $y = f(x)$ crosses the diagonal line $y = x$.',
      tinyExample: 'Every continuous map $f: [0,1] \\to [0,1]$ has a fixed point $f(c) = c$, proved by applying IVT to $f(x) - x$.',
    },
    {
      term: 'Cumulative Distribution Function (CDF)',
      symbol: '$F_X(x) = P(X \\le x)$',
      plainEnglish:
        'In Probability, the CDF tracks the running total probability accumulated up to $x$: it is continuous everywhere for continuous random variables, and jumps upward in right-continuous steps for discrete ones.',
      tinyExample: 'For a fair coin ($X \\in \\{0, 1\\}$), $F_X(x)$ jumps by $0.5$ at $x = 0$ and by $0.5$ at $x = 1$.',
    },
  ],
  generatorId: 'piecewise-c1-gen',
  concepts: [
    {
      id: 'c3-1',
      title: 'Continuity = "No Holes, No Jumps, No Blow-Ups"',
      subtitle: 'Connecting Chapter 2 limits to the actual dot $f(c)$ plotted at $x = c$',
      priority: 'core-pillar',
      buildsOn: 'Ch.2 Two-sided limit $\\lim_{x\\to c} f(x)$',
      whyStudy:
        'In Probability, Machine Learning, and Physics, almost every powerful theorem — taking derivatives, training with Gradient Descent, locating roots without solving equations (IVT), and distinguishing continuous random variables from discrete ones (**GATE DA 2026 Q.54**) — demands that your curve does NOT suddenly teleport or shatter at a point. **Continuity** is the exact mathematical guarantee that tiny nudges to your input only cause tiny nudges to your output, with zero surprise jumps.',
      groundRules: [
        '**The 3-Way Handshake Rule:** Being continuous at $x = c$ requires THREE independent things to hold simultaneously: (1) the dot $f(c)$ actually exists as a finite real number, (2) the two-sided limit $\\lim_{x \\to c} f(x)$ exists ($\\text{LHL} = \\text{RHL}$), AND (3) the limit equals the dot itself ($\\text{LHL} = \\text{RHL} = f(c)$). Breaking even ONE breaks continuity!',
        '**Why Holes Are Fixable While Jumps Are Permanent:** If $\\text{LHL} = \\text{RHL} = L$ yet $f(c)$ is missing or misplaced, that is a **removable discontinuity** — patching the single dot $f(c) := L$ fixes the curve completely. If $\\text{LHL} \\neq \\text{RHL}$ (a **jump discontinuity**, like $\\lfloor x \\rfloor$ or a discrete CDF), NO single choice of $f(c)$ can ever touch both heights at once!',
        '**Everyday Building Blocks Stay Continuous Automatically:** Polynomials, $e^x$, $\\sin x$, $\\cos x$, $|x|$, and $\\text{ReLU}(x)$ are continuous everywhere on $\\mathbb{R}$, and sums, differences, products, compositions $f(g(x))$, and quotients (where denominator $\\neq 0$) of continuous functions remain continuous automatically — so you only need to inspect **trouble spots** (zero denominators, piecewise seams, $\\lfloor x \\rfloor$, or $1/x$)!',
        '**Right-Continuity Still Counts Half a Handshake:** A function is **right-continuous** at $c$ when $\\lim_{x \\to c^+} f(x) = f(c)$ (the dot sits cleanly on the right-hand branch, even if there is a drop from the left). Every Probability CDF $F_X(x) = P(X \\le x)$ obeys this exact rule!',
      ],
      toyExample: {
        title: 'Three Ways a Bridge Across $x = 2$ Can Break',
        scenario:
          'Picture yourself driving smoothly along the curve $y = f(x)$ and approaching a bridge at $x = 2$. What are the three ways your car could be prevented from crossing cleanly without teleporting?',
        walkthroughSteps: [
          '1. **Pothole (Removable Discontinuity):** Left road aims at height $4$ ($\\text{LHL} = 4$), Right road aims at height $4$ ($\\text{RHL} = 4$), so $\\lim_{x \\to 2} f(x) = 4$ exists — yet the center plank at $x = 2$ is missing or sitting up at $f(2) = 9$! Easy fix: redefine $f(2) := 4$.',
          '2. **Broken Drawbridge (Jump Discontinuity):** Left road ends at height $1$ while Right road starts at height $3$ ($\\text{LHL} = 1 \\neq 3 = \\text{RHL}$, just like a staircase or a Discrete RV CDF!). Moving the single dot $f(2)$ can NEVER close a vertical gap of $2$!',
          '3. **Cliff Into Space (Infinite / Oscillating Discontinuity):** Something like $f(x) = \\frac{1}{x - 2}$ shoots off to $-\\infty$ on the left and $+\\infty$ on the right — no finite height exists at all near $x = 2$.',
        ],
        ahaMoment:
          'In plain words, continuity at $x = c$ simply promises that **nothing goes wrong at the bridge**: the left road, the right road, and the center plank $f(c)$ all meet cleanly at the **exact same finite height**!',
      },
      theoremAndFormula: {
        statement:
          'A function $f$ is **continuous at $x = c$** if $c$ is in its domain and $\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)$. Sums, products, compositions $f(g(x))$, polynomials, $e^x$, $\\sin x$, $\\cos x$, $|x|$, and $\\text{ReLU}(x)$ are continuous everywhere on their domains!',
        formulaLatex:
          'f \\text{ continuous at } c \\iff \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c) \\in \\mathbb{R}',
        plainEnglishDecoding:
          'Read that equation in plain English: "$f$ is unbroken at $c$ **means the exact same thing as** ($\\iff$) the left-approaching height, the right-approaching height, and the actual plotted dot $f(c)$ all matching the same finite real number (belongs to $\\mathbb{R}$)." Whenever you want to patch a $0/0$ hole like $f(x) = \\frac{\\sin(3x)}{x}$ at $x = 0$, simply compute the limit ($3$) and drop the dot $f(0) = 3$ right into the hole!',
        workedMiniExamples: [
          {
            prompt: 'For $f(x) = x \\sin(1/x)$ ($x \\neq 0$), what value of $f(0)$ makes $f$ continuous at $x = 0$?',
            solution:
              '**Step 1 (Compute the limit as $x \\to 0$):** From Chapter 2’s Squeeze Theorem, $-|x| \\le x\\sin(1/x) \\le +|x|$ pinches both walls to $0$, so $\\lim_{x \\to 0} x\\sin(1/x) = 0$.\n**Step 2 (Match the dot to the limit):** Setting $f(0) = \\mathbf{0}$ satisfies $\\lim_{x \\to 0} f(x) = f(0)$, patching the hole cleanly!',
          },
          {
            prompt: 'Where is $g(x) = \\lfloor x \\rfloor$ (floor function) discontinuous?',
            solution:
              '**Step 1 (Test any non-integer, e.g. $x = 1.5$):** Slightly left ($1.499$) and slightly right ($1.501$) both round down to $1 = \\lfloor 1.5 \\rfloor$ — completely continuous!\n**Step 2 (Test any integer $n \\in \\mathbb{Z}$, where $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$):** Just below $n$ (like $n - 0.001$), $\\lfloor x \\rfloor = n - 1$ ($\\text{LHL} = n - 1$). At and just above $n$ (like $n + 0.001$), $\\lfloor x \\rfloor = n$ ($\\text{RHL} = \\lfloor n \\rfloor = n$).\n**Step 3 (Conclude):** Discontinuous at **every integer $n \\in \\mathbb{Z}$** (with a jump of size $1$), yet **right-continuous** everywhere because $\\text{RHL} = \\lfloor n \\rfloor$!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $f$ and $g$ are both discontinuous at $x = c$, then $f(g(x))$ and $f(x)+g(x)$ must be discontinuous at $x = c$.',
          reality: 'FALSE! Composition or addition of two discontinuous functions can be completely constant (hence continuous everywhere)!',
          counterExample: 'Let $f(x) = 1$ for $x \\ge 0$ and $0$ for $x < 0$, and $g(x) = 1 - f(x)$. Both jump at $0$, yet $f(x) + g(x) \\equiv 1$ everywhere!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Discrete vs. Continuous CDFs $F_X(x) = P(X \\le x)$',
          whyItMatters:
            'Every CDF is non-decreasing and right-continuous; a Discrete RV’s CDF has jump discontinuities at support points (GATE 2026 Q.54), whereas a Continuous RV’s CDF is continuous everywhere!',
          pyqProof: 'GATE DA 2026 · Q.54 (2M MSQ) & GATE DA 2025 · Q.19 (1M MCQ)',
        },
      ],
    },
    {
      id: 'c3-2',
      title: 'Piecewise Continuity Matching',
      subtitle: 'Setting boundary equations cleanly when formulas switch at $x = c$',
      priority: 'high-yield',
      buildsOn: 'Step 3.1 LHL = RHL = f(c)',
      sandboxId: 'piecewise-gluer-lab',
      whyStudy:
        'Real-world models rarely follow one single formula forever — tax brackets, neural network activations like $\\text{ReLU}(x)$ and Leaky ReLU, Huber loss (switching from quadratic to linear to resist outliers), and piecewise probability densities all stitch different formulas together at cutoff points. Checking and tuning unknown parameters $(a, b, c)$ so pieces meet without vertical tears is the mandatory Step 1 of every piecewise differentiability problem in GATE DA (like **GATE DA 2024 Q.37**).',
      groundRules: [
        '**Only Switching Points Need Checking (When Pieces Are Elementary):** Inside each open region (strictly left of $c$ or strictly right of $c$), ordinary polynomials, exponentials, and trig formulas are already continuous automatically. The ONLY place a break can happen is right at the seam $x = c$ where one formula hands off to the next!',
        '**Each Boundary Seam Hands You One Height Equation:** At a switching point $x = c$ between continuous left formula $g(x)$ and right formula $h(x)$, enforcing $\\text{LHL} = \\text{RHL} = f(c)$ simplifies directly to plugging $c$ into both neighbors and setting **$g(c) = h(c)$** (and if a third separate dot $f(c) = b$ is given right at $c$, set all three equal!).',
        '**Continuity ($C^0$) Only Matches Heights, NOT Slopes:** The symbol $C^0$ means "continuous" (0th derivatives — the heights — agree, so pieces touch with no gap). Two touching pieces can still form a sharp corner (like $|x|$ at $0$); smoothing out that corner ($C^1$) requires matching slopes in Chapter 4.',
        '**Vanishing Terms Leave Coefficients Free:** If an unknown parameter multiplies $(x - c)$ (for instance $a \\cdot x$ at the boundary $x = 0$), plugging in $x = c$ turns $a \\cdot 0$ into $0$ — meaning continuity alone places **zero restriction** on $a$!',
      ],
      toyExample: {
        title: 'Welding Two Railway Tracks Together at $x = 1$',
        scenario:
          'Suppose a left railway track ($x \\le 1$) follows the line $y = 3x + k$, and a right track ($x > 1$) follows the parabola $y = x^2 + 5$. How do you choose $k$ so the two ends weld together with zero vertical drop at $x = 1$?',
        walkthroughSteps: [
          '1. **Compute the left track height at the seam $x = 1$:** Plug $x = 1$ into $3x + k$ to get $\\text{LHL} = f(1) = 3(1) + k = 3 + k$.',
          '2. **Compute the right track height approaching $x = 1^+$:** Even though the right branch uses strict inequality $x > 1$, the continuous parabola $x^2 + 5$ approaches $(1)^2 + 5 = 6$ as $x \\to 1^+$ ($\\text{RHL} = 6$).',
          '3. **Equate both heights:** Set $3 + k = 6 \\implies k = \\mathbf{3}$. (Notice at $k = 3$ the tracks touch cleanly, though their slopes $3$ vs. $2$ still form a slight bend — we will smooth that bend out in Chapter 4!)',
        ],
        ahaMoment:
          'Keep this clean mental picture: **touching ($C^0$ continuity)** gives you 1 equation at each boundary ($f_-(c) = f_+(c)$). In Chapter 4, **blending smoothly ($C^1$ differentiability)** will add a 2nd equation matching their slopes ($f\'_-(c) = f\'_+(c)$)!',
      },
      theoremAndFormula: {
        statement:
          'If $f(x) = g(x)$ for $x \\le c$ and $f(x) = h(x)$ for $x > c$, where $g, h$ are continuous formulas, then $f$ is continuous at $x = c$ if and only if (abbreviated **iff**):',
        formulaLatex: 'g(c) = \\lim_{x \\to c^+} h(x) = h(c)',
        plainEnglishDecoding:
          'In plain words, just plug the boundary number $c$ into the left formula and into the right formula, and set the two expressions equal! If a piecewise function switches formulas at two boundaries (say $x = -2$ and $x = +2$, like GATE 2024 Q.37), each switching point hands you one clean linear equation.',
        workedMiniExamples: [
          {
            prompt: 'Find $k$ so $f(x) = \\frac{x^2 - 9}{x - 3}$ ($x \\neq 3$) and $f(3) = 2k$ is continuous at $x = 3$.',
            solution:
              '**Step 1 (Compute the limit as $x \\to 3$):** For $x \\neq 3$, factor the numerator: $\\frac{(x - 3)(x + 3)}{x - 3} = x + 3$. As $x \\to 3$, this approaches $3 + 3 = 6$.\n**Step 2 (Set $f(3)$ equal to the limit):** $2k = 6 \\implies k = \\mathbf{3}$.',
          },
          {
            prompt: 'For $f(x) = ax + 1$ ($x < 0$), $b$ ($x = 0$), and $e^x + c$ ($x > 0$), what makes $f$ continuous at $0$?',
            solution:
              '**Step 1 (Evaluate all three pieces at $x = 0$):**\n• $\\text{LHL} = a(0) + 1 = 1$ (notice $a$ disappears completely!)\n• Center dot: $f(0) = b$\n• $\\text{RHL} = e^0 + c = 1 + c$.\n**Step 2 (Equate all three):** $b = 1$ and $1 + c = 1 \\implies c = 0$, while **$a$ can be ANY real number** ($a \\in \\mathbb{R}$)!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'In $f(x) = ax + 1$ ($x < 0$) glued to $1$ at $x \\ge 0$, continuity at $x=0$ fixes the value of $a$.',
          reality: 'At $x = 0$, $ax$ vanishes ($a \\cdot 0 = 0$) regardless of $a$! Continuity leaves $a$ completely free; only differentiability fixes $a = 0$.',
          counterExample: '$a = 99$ gives $99(0) + 1 = 1$, still continuous at $0$!',
        },
      ],
    },
    {
      id: 'c3-3',
      title: 'Intermediate Value Theorem (IVT) — The Sign-Change Root Radar',
      subtitle: 'Proving roots exist inside intervals without solving cubic/transcendental equations',
      priority: 'core-pillar',
      buildsOn: 'Step 3.1 Continuity on $[a,b]$',
      whyStudy:
        'Almost no real-world equation — like $e^x + x - 2 = 0$, $x^5 + 5x + 1 = 0$, or quantile equations $F_X(q) = 0.95$ in Statistics — can be solved with a clean closed-form formula! Mathematicians invented the **Intermediate Value Theorem (IVT)** so you can prove a root exists, trap it inside a tiny interval (which powers **Binary Search / Bisection** in numerical algorithms!), and count exact roots in GATE DA MSQs like **GATE DA 2026 Q.27** without ever wrestling with ugly formulas.',
      groundRules: [
        '**No-Teleportation Rule (Continuity on Closed $[a, b]$):** On a closed interval $[a, b]$ (square brackets include BOTH endpoints $a$ and $b$), an unbroken curve $f$ cannot jump over any intermediate height between $f(a)$ and $f(b)$. In particular, if $f(a)$ and $f(b)$ have **opposite signs** — written compactly as $f(a) \\cdot f(b) < 0$ (negative $\\times$ positive $=$ negative) — the curve MUST cross $y = 0$ at least once inside the open interval $(a, b)$!',
        '**IVT Guarantees $\\ge 1$ Root, Monotonicity Guarantees $\\le 1$ Root:** Opposite signs at the ends ONLY tell you the curve crossed $0$ an **odd** number of times ($1, 3, 5, \\dots$, so at least $1$). To prove there is **EXACTLY ONE** root, add strict monotonicity ($f\'(x) > 0$ everywhere or $f\'(x) < 0$ everywhere): a one-way escalator can NEVER turn around to cross $0$ a second time!',
        '**Same Sign Does NOT Mean Zero Roots:** If $f(a) \\cdot f(b) > 0$ (both endpoints positive, or both negative), the curve could still dip below $0$ and climb right back up (an **even** number of crossings: $0, 2, 4, \\dots$). Never conclude "no roots" just because $f(a)$ and $f(b)$ share the same sign!',
        '**Read Interval Brackets Like a Hawk (`[` vs `(`):** A square bracket `[` or `]` means the endpoint is **inside** the domain (so a root or extremum sitting there COUNTS!). A round parenthesis `(` or `)` means the endpoint is **excluded** — you can creep arbitrarily close to it without ever standing on it (the exact trap tested in GATE DA 2026 Q.27 on $(-1, 3]$)!',
      ],
      toyExample: {
        title: 'Room Temperature Going From $-2^\\circ\\text{C}$ to $+5^\\circ\\text{C}$',
        scenario:
          'Suppose at 6:00 AM your thermometer reads $-2^\\circ\\text{C}$, and by 12:00 PM it reads $+5^\\circ\\text{C}$. Because temperature changes **continuously** rather than jumping instantaneously, must there have been at least one exact moment when the thermometer read $0.000^\\circ\\text{C}$?',
        walkthroughSteps: [
          '1. **Existence ($\\ge 1$ crossing):** **Yes!** You cannot move continuously from negative height ($-2$) to positive height ($+5$) without crossing height $0$ at least once between 6:00 AM and 12:00 PM!',
          '2. **Could it cross $0^\\circ\\text{C}$ multiple times?** Yes — if the room warmed to $+1^\\circ\\text{C}$, cooled back to $-0.5^\\circ\\text{C}$, and warmed to $+5^\\circ\\text{C}$, it would cross $0^\\circ\\text{C}$ **three** times. So IVT alone guarantees **at least one** root inside $(a, b)$.',
          '3. **How do you upgrade "at least one" to "EXACTLY one"?** Check that temperature is **strictly increasing** ($f\'(t) > 0$) across the whole interval — a thermometer that only moves upward can cross $0^\\circ\\text{C}$ only once!',
        ],
        ahaMoment:
          'Think of this as a two-part lock: a **sign flip $f(a)\\cdot f(b) < 0$ (IVT)** guarantees **$\\ge 1$ root**, while **strict monotonicity ($f\' > 0$ or $f\' < 0$)** guarantees **$\\le 1$ root**. Together they lock in **EXACTLY 1 root** — the exact duo tested in GATE DA 2026 Q.27!',
      },
      theoremAndFormula: {
        statement:
          '**Intermediate Value Theorem (IVT):** If $f$ is continuous on a closed interval $[a, b]$ (written $f \\in C([a, b])$, where $C([a, b])$ is the family of all continuous functions on $[a, b]$) and $f(a) \\cdot f(b) < 0$ (opposite signs), then there exists **at least one** number $c$ strictly between $a$ and $b$ such that $f(c) = 0$:',
        formulaLatex:
          'f \\in C([a,b]) \\;\\wedge\\; f(a)f(b) < 0 \\implies \\exists\\, c \\in (a,b) \\text{ with } f(c) = 0',
        plainEnglishDecoding:
          'Let’s unpack every single logic symbol in that line so you can read math notation effortlessly: $\\wedge$ means **"AND"**, $\\implies$ means **"forces / guarantees"**, and $\\exists\\, c \\in (a, b)$ reads **"there exists at least one number $c$ strictly inside the open interval $(a, b)$."** While using IVT in GATE MSQs, always double-check **interval brackets** too: if a root lands right on $x = 1$, it belongs to $[1, 3]$ and $(-1, 1]$, whereas it does NOT belong to the open interval $(1, 3)$!',
        workedMiniExamples: [
          {
            prompt: 'Show $e^x + x - 2 = 0$ has a unique real root, and locate which unit interval contains it.',
            solution:
              '**Step 1 (Check continuity & test easy integers):** Let $f(x) = e^x + x - 2$, which is continuous on all of $\\mathbb{R}$. Plug $x = 0$: $f(0) = e^0 + 0 - 2 = 1 - 2 = -1 < 0$. Plug $x = 1$: $f(1) = e^1 + 1 - 2 = e - 1 \\approx 1.718 > 0$.\n**Step 2 (Apply IVT for $\\ge 1$ root):** Since $f(0) < 0$ and $f(1) > 0$, IVT guarantees at least one root inside $(0, 1)$.\n**Step 3 (Check derivative for $\\le 1$ root):** $f\'(x) = e^x + 1$. Because $e^x > 0$ always, $f\'(x) > 1 > 0$ everywhere on $\\mathbb{R}$ — so $f$ is strictly increasing and has a **unique** real root, trapped cleanly in $(0, 1)$!',
          },
          {
            prompt: 'Factor or trap all roots of $f(x) = x^3 - 3x^2 + 2$ (GATE DA 2026 Q.27).',
            solution:
              '**Step 1 (Test $x = 1$ first — add the coefficients!):** $1 - 3 + 2 = 0$, so $x = 1$ is an immediate root and $(x - 1)$ divides $f(x)$ cleanly!\n**Step 2 (Factor out $(x - 1)$):** $x^3 - 3x^2 + 2 = (x - 1)(x^2 - 2x - 2)$.\n**Step 3 (Solve the quadratic $x^2 - 2x - 2 = 0$):** Using the quadratic formula $x = \\frac{2 \\pm \\sqrt{4 - 4(1)(-2)}}{2} = \\frac{2 \\pm \\sqrt{12}}{2} = 1 \\pm \\sqrt{3}$. Since $\\sqrt{3} \\approx 1.732$, the three exact roots are **$1 - \\sqrt{3} \\approx -0.732$**, **$1$**, and **$1 + \\sqrt{3} \\approx 2.732$**!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $f(a) \\cdot f(b) > 0$ (same sign at both ends), then $f$ has NO roots in $(a,b)$.',
          reality: 'FALSE! $f$ could dip across $0$ and come back up (an even number of crossings, or touch $0$ tangentially)!',
          counterExample: '$f(x) = x^2 - 1$ on $[-2, 2]$ has $f(-2)=3 > 0$ and $f(2)=3 > 0$, yet has **two** roots ($-1$ and $+1$) inside $(-2, 2)$!',
        },
        {
          myth: 'IVT still works even if $f$ has a single jump discontinuity inside $[a,b]$.',
          reality: 'A single jump can leap right over $y = 0$ without ever touching $0$!',
          counterExample: '$f(x) = x - 1$ for $x \\le 0$ and $x + 1$ for $x > 0$ on $[-1, 1]$: $f(-1)=-2 < 0$, $f(1)=+2 > 0$, yet $f(x)$ is NEVER $0$!',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'pb-3-1',
      title: 'Polynomial Root & Extrema Location on Half-Open Intervals',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2026 · Q.27 (1M MSQ)'],
      problemStatement:
        'Analyze all real roots and extrema of $f(x) = x^3 - 3x^2 + 2$ on the half-open interval $(-1, 3]$.',
      triggerCue:
        'A cubic polynomial paired with specific sub-intervals like $(-1, 0)$, $(0, 2)$, $(2, 3]$ and questions about roots & local/global extrema.',
      bruteForceTrap:
        'Trying the depressed-cubic Cardano formula instead of checking whether $x = 1$ or $x = -1$ is an obvious integer root!',
      mentalShift:
        'Follow a calm 3-step routine: first check $f(1)$ (just add the coefficients!); second factor out $(x - 1)$ so you can locate all 3 roots cleanly using $\\sqrt{3} \\approx 1.732$; third differentiate $f\'(x) = 3x(x - 2)$ to picture the exact rise-fall-rise rollercoaster on $(-1, 3]$.',
      steps: [
        {
          label: 'Sum of coefficients = 0 -> x = 1 is an immediate root!',
          detail:
            '$f(1) = 1 - 3 + 2 = 0$. Divide $x^3 - 3x^2 + 2$ by $(x - 1)$: $$x^3 - 3x^2 + 2 = (x - 1)(x^2 - 2x - 2)$$',
        },
        {
          label: 'Solve the remaining quadratic and place all 3 roots on the number line',
          detail:
            '$x = \\frac{2 \\pm \\sqrt{4 - 4(1)(-2)}}{2} = 1 \\pm \\sqrt{3}$. Since $\\sqrt{3} \\approx 1.732$, the 3 real roots are:\n• $r_1 = 1 - 1.732 = -0.732 \\in (-1, 0)$\n• $r_2 = 1 \\in (0, 2)$\n• $r_3 = 1 + 1.732 = 2.732 \\in (2, 3]$ — **all three roots lie inside $(-1, 3]$!**',
        },
        {
          label: 'Check turning points & boundary values on (-1, 3]',
          detail:
            '$f\'(x) = 3x(x - 2) = 0 \\implies$ local max at $x = 0$ with $f(0) = 2$, and local min at $x = 2$ with $f(2) = -2$. Now check right endpoint $x = 3$: $f(3) = 27 - 27 + 2 = 2$! Notice **both $x = 0$ and $x = 3$ tie at height $2$**, so the maximum value on $(-1, 3]$ is attained at **two** points (NOT unique!), whereas the minimum $-2$ at $x=2$ is unique (since as $x \\to -1^+$, $f(-1) = -2$ is excluded by the open parenthesis `(` at $-1$!).',
        },
      ],
      lockInTakeaway:
        'On polynomials: (1) Always test $x = \\pm 1$ first! (2) Watch open `(` vs closed `]` brackets at endpoints — an excluded endpoint cannot attain a min/max, while an included endpoint can tie an interior peak!',
    },
    {
      id: 'pb-3-2',
      title: 'When Even IVT Isn’t Needed: Sign-Chart Monotonicity',
      difficulty: 'Moderate',
      relatedPyqs: ['Core MSQ Root-Counting Pattern'],
      problemStatement:
        'How many real solutions does $x^5 + 5x + 1 = 0$ have on $(-\\infty, \\infty)$?',
      triggerCue:
        'Odd-degree polynomial where derivative $f\'(x) = 5x^4 + 5$ is strictly positive everywhere!',
      bruteForceTrap:
        'Trying to factor a quintic polynomial (impossible in radicals!).',
      mentalShift:
        'Don’t try to solve for the root — just count it! Checking $f(-1) = -5 < 0$ and $f(0) = +1 > 0$ tells you IVT guarantees at least 1 root in $(-1, 0)$, and because $f\'(x) = 5x^4 + 5 \\ge 5 > 0$ everywhere, the curve climbs strictly upward and can cross zero at most once — leaving **1** unique root in 10 seconds!',
      steps: [
        {
          label: 'Test two easy integers for opposite signs',
          detail: '$f(-1) = -1 - 5 + 1 = -5 < 0$, and $f(0) = 1 > 0$. By IVT, a root exists in $(-1, 0)$.',
        },
        {
          label: 'Check sign of derivative',
          detail: '$f\'(x) = 5x^4 + 5 > 0$ everywhere $\\implies$ strictly increasing $\\implies$ **exactly 1 real root**.',
        },
      ],
      lockInTakeaway:
        'Odd degree $\\implies \\ge 1$ real root always; add $f\'(x) > 0$ everywhere $\\implies$ **unique** real root!',
    },
  ],
  arsenalCards: [
    {
      id: 'ac-3-1',
      badge: '3-Check Continuity Test',
      whenYouSpot: 'Piecewise function switching formulas at $x = c$ or $0/0$ hole filled by $f(c) = k$',
      directWeaponLatex: '\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)',
      instantRule: 'Equate left formula at $c$, right formula limit at $c$, and explicit point value $f(c)$.',
      tenSecondExample: '$f(x)=\\frac{x^2-1}{x-1}$ ($x\\neq 1$) needs $f(1) = 2$ for continuity.',
      oneFatalTrap: 'Checking $\\lim_{x\\to c} f(x)$ exists without verifying it equals the defined value $f(c)$!',
    },
    {
      id: 'ac-3-2',
      badge: 'Exact Root Counter (IVT + Monotonicity)',
      whenYouSpot: '"How many roots does $f(x) = 0$ have in $(a, b)$?"',
      directWeaponLatex: 'f(a)f(b) < 0 \\;(\\ge 1\\text{ root}) \\quad + \\quad f\'(x) \\neq 0 \\text{ on } (a,b) \\;(\\le 1\\text{ root}) \\implies \\text{Exactly } 1\\text{ root}',
      instantRule: 'Opposite signs at ends + one-way slope inside $=$ guaranteed unique root.',
      tenSecondExample: '$2^x + 3x - 2 = 0$ on $(0,1)$: $f(0)=-1 < 0,\\; f(1)=3 > 0,\\; f\' > 0 \\implies 1$ root.',
      oneFatalTrap: 'Same sign $f(a)f(b) > 0$ means an **even** number of crossings ($0, 2, 4\\dots$), NOT necessarily $0$ roots!',
    },
    {
      id: 'ac-3-3',
      badge: 'Polynomial Coefficient-Sum Shortcut',
      whenYouSpot: 'Cubic or quartic $a_n x^n + \\dots + a_1 x + a_0 = 0$ in GATE',
      directWeaponLatex: '\\sum a_k = 0 \\implies x = 1 \\text{ is a root}; \\qquad \\sum (-1)^k a_k = 0 \\implies x = -1 \\text{ is a root}',
      instantRule: 'Add coefficients before doing anything else — GATE cubics almost always hide $x=1$ or $x=-1$!',
      tenSecondExample: '$x^3 - 3x^2 + 2$: $1 - 3 + 2 = 0 \\implies (x-1)$ factors out immediately (2026 Q.27)!',
      oneFatalTrap: 'Include $0$ coefficients for missing powers when doing synthetic division!',
    },
    {
      id: 'ac-3-4',
      badge: 'Half-Open Interval Bracket Check',
      whenYouSpot: 'Questions on $(a, b]$ or $[a, b)$ asking if min/max is attained or unique',
      directWeaponLatex: 'x \\to a^+ \\implies f(a) \\text{ is a bound, NOT an attained value if } a \\notin (a, b]',
      instantRule: 'Circle open `(` endpoints on your number line so you never count an excluded point as an attained extremum!',
      tenSecondExample: 'On $(-1, 3]$, $x^3 - 3x^2 + 2$ hits $-2$ at $x=2$, while $x \\to -1^+$ approaches $-2$ without ever reaching $x=-1$!',
      oneFatalTrap: 'Forgetting to test the closed endpoint $x = 3$, which ties the interior peak $f(0) = f(3) = 2$!',
    },
  ],
  questions: [
    {
      id: 'q-3-1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'Let $f(x) = \\begin{cases} \\frac{\\sin(5x)}{2x}, & x \\neq 0 \\\\ k, & x = 0 \\end{cases}$ be continuous at $x = 0$. Find the value of $k$ (up to 2 decimal places).',
      natAnswer: { min: 2.49, max: 2.51, exactDisplay: '2.5' },
      triggerHint: 'To patch the hole at $x = 0$ cleanly, compute $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}$ using the standard $\\frac{\\sin u}{u} \\to 1$ rule and set $k$ equal to it!',
      intuitiveSolution: [
        '1. Continuity at $0$ requires $f(0) = \\lim_{x \\to 0} f(x)$.',
        '2. $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x} = \\frac{5}{2} \\lim_{x\\to 0} \\frac{\\sin(5x)}{5x} = \\frac{5}{2} = 2.5$.',
      ],
      directShortcutUsed: '$f(0) = \\lim_{x\\to 0} f(x) = 5/2 = 2.5$.',
    },
    {
      id: 'q-3-2',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2',
      marks: 1,
      type: 'NAT',
      stem: 'How many real roots does the equation $e^x + 2x - 3 = 0$ have across the entire real line $\\mathbb{R}$?',
      natAnswer: { min: 0.99, max: 1.01, exactDisplay: '1' },
      triggerHint: 'Test $f(0)$ and $f(1)$ to spot a sign change (proving at least 1 root by IVT), then check the sign of $f\'(x) = e^x + 2$ to see whether the curve can ever turn back!',
      intuitiveSolution: [
        '1. Let $f(x) = e^x + 2x - 3$ (continuous everywhere). Notice $f(0) = -2 < 0$ and $f(1) = e - 1 > 0 \\implies$ at least 1 root in $(0, 1)$ by IVT.',
        '2. Since $f\'(x) = e^x + 2 > 0$ for all $x \\in \\mathbb{R}$, $f$ is strictly increasing everywhere $\\implies$ **exactly 1** real root.',
      ],
      directShortcutUsed: 'IVT sign flip + $f\' > 0$ strict monotonicity $\\implies$ unique root.',
    },
    {
      id: 'q-3-3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.27',
      year: 2026,
      marks: 1,
      type: 'MSQ',
      stem: 'Consider the function $f(x) = x^3 - 3x^2 + 2$ defined on the half-open interval $(-1, 3]$. Which of the following statements is/are TRUE?',
      options: [
        {
          id: 'A',
          text: '$f(x) = 0$ has a root in $(-1, 0)$.',
          whyTrueOrFalse: '$f(-1) = -2 < 0$ and $f(0) = +2 > 0$ (specifically $1 - \\sqrt{3} \\approx -0.732 \\in (-1, 0)$). True!',
        },
        {
          id: 'B',
          text: '$f(x)$ attains its global minimum on $(-1, 3]$ at a unique point.',
          whyTrueOrFalse: 'Local min is $f(2) = -2$. As $x \\to -1^+$, $f(x) \\to -2$, EXCEPT $-1 \\notin (-1, 3]$! So $x = 2$ is the **unique** point in $(-1, 3]$ attaining $-2$. True!',
        },
        {
          id: 'C',
          text: '$f(x)$ attains its global maximum on $(-1, 3]$ at a unique point.',
          whyTrueOrFalse: 'TRAP! Interior peak is $f(0) = 2$, AND right closed endpoint gives $f(3) = 27 - 27 + 2 = 2$! Both $0$ and $3$ are in $(-1, 3]$, so the global maximum is attained at TWO points, NOT unique!',
        },
        {
          id: 'D',
          text: '$f(x) = 0$ has exactly three roots in $(-1, 3]$.',
          whyTrueOrFalse: 'Factoring $(x-1)(x^2-2x-2)=0$ gives roots $1 - \\sqrt{3} \\approx -0.732$, $1$, and $1 + \\sqrt{3} \\approx 2.732$ — all three lie inside $(-1, 3]$. True!',
        },
      ],
      correctOptions: ['A', 'B', 'D'],
      triggerHint: 'Start by noticing the coefficients sum to $0$, so factor out $(x - 1)$; then use $f\'(x) = 3x(x - 2)$ and pay close attention to open `-1` versus closed `3`!',
      intuitiveSolution: [
        '1. **Roots:** $x^3 - 3x^2 + 2 = (x - 1)(x^2 - 2x - 2) = 0 \\implies x \\in \\{1 - \\sqrt{3},\\; 1,\\; 1 + \\sqrt{3}\\} \\approx \\{-0.732,\\; 1,\\; 2.732\\}$, all inside $(-1, 3]$ (confirming **A** and **D**).',
        '2. **Extrema on $(-1, 3]$:** $f\'(x) = 3x(x - 2) = 0$ gives $f(0) = 2$ and $f(2) = -2$. Checking boundary values: $f(3) = 2$ (included!) and $\\lim_{x\\to -1^+} f(x) = -2$ (excluded!).',
        '3. Hence the minimum $-2$ is attained **uniquely** at $x = 2$ (**B** is True), while the maximum $+2$ is attained at **both** $x = 0$ and $x = 3$ (**C** is False!).',
      ],
      directShortcutUsed: 'Coefficient-sum factoring + open/closed endpoint check.',
    },
    {
      id: 'q-3-4',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Continuity Trap MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Let $f, g : \\mathbb{R} \\to \\mathbb{R}$ be two arbitrary functions. Which of the following statements MUST be TRUE?',
      options: [
        {
          id: 'A',
          text: 'If $f$ and $g$ are continuous on $\\mathbb{R}$, then $h(x) = \\max(f(x), g(x))$ is continuous on $\\mathbb{R}$.',
          whyTrueOrFalse: 'Rewrite $\\max(f, g) = \\frac{f + g + |f - g|}{2}$! Since sums and $|\\cdot|$ preserve continuity, $\\max(f,g)$ is ALWAYS continuous (though it may have kinks!).',
        },
        {
          id: 'B',
          text: 'If $|f(x)|$ is continuous on $\\mathbb{R}$, then $f(x)$ must be continuous on $\\mathbb{R}$.',
          whyTrueOrFalse: 'Classic FALSE converse! Let $f(x) = +1$ for $x \\ge 0$ and $-1$ for $x < 0$. Then $|f(x)| \\equiv 1$ (continuous everywhere!), while $f(x)$ jumps at $0$!',
        },
        {
          id: 'C',
          text: 'If $f$ is continuous on $[0, 1]$ and $f(x) \\in [0, 1]$ for all $x \\in [0, 1]$, then there exists $c \\in [0, 1]$ such that $f(c) = c$.',
          whyTrueOrFalse: 'Fixed-Point IVT classic! Apply IVT to $d(x) = f(x) - x$: $d(0) = f(0) - 0 \\ge 0$ and $d(1) = f(1) - 1 \\le 0$, so $d(c) = 0$ for some $c \\in [0, 1]$!',
        },
        {
          id: 'D',
          text: 'If $f(x) + g(x)$ is continuous at $x = 0$ and $f(x)$ is continuous at $x = 0$, then $g(x)$ must be continuous at $x = 0$.',
          whyTrueOrFalse: 'Write $g(x) = (f(x) + g(x)) - f(x)$ — the difference of two functions continuous at $0$ is ALWAYS continuous at $0$! True!',
        },
      ],
      correctOptions: ['A', 'C', 'D'],
      triggerHint: 'Look out for Option B — a function jumping between $+1$ and $-1$ still has $|f(x)| \\equiv 1$! And for Option C, try applying IVT to the helper function $d(x) = f(x) - x$.',
      intuitiveSolution: [
        '1. **Option A:** $\\max(a, b) = \\frac{a + b + |a - b|}{2}$ is a composition of continuous operations $\\implies$ always continuous.',
        '2. **Option B:** Counterexample $f(x) = 1$ ($x \\ge 0$), $-1$ ($x < 0$) has $|f(x)| = 1$ everywhere yet jumps at $0$.',
        '3. **Option C:** $d(x) = f(x) - x$ satisfies $d(0) \\ge 0$ and $d(1) \\le 0$; if neither is $0$, $d(0) > 0 > d(1)$ gives $d(c)=0$ by IVT.',
        '4. **Option D:** Subtracting continuous $f$ from continuous $(f+g)$ recovers $g$ as continuous.',
      ],
      directShortcutUsed: '$\\max(f,g) = \\frac{f+g+|f-g|}{2}$ identity + $f(x)=\\pm 1$ counterexample + Brouwer 1D fixed-point IVT.',
    },
    {
      id: 'q-3-5',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Piecewise Continuity NAT',
      marks: 1,
      type: 'NAT',
      stem: 'Suppose $$f(x) = \\begin{cases} ax + 2, & x < -1 \\\\ x^2 + b, & -1 \\le x \\le 2 \\\\ 3x + a, & x > 2 \\end{cases}$$ is continuous for all $x \\in \\mathbb{R}$. Find the value of $a + b$.',
      natAnswer: { min: 0.99, max: 1.01, exactDisplay: '1' },
      triggerHint: 'Before solving for $a$ and $b$ separately, write down the continuity equation at $x = -1$ and see if the exact combination $a + b$ pops right out!',
      intuitiveSolution: [
        '1. Match at $x = -1$: $a(-1) + 2 = (-1)^2 + b \\implies -a + 2 = 1 + b \\implies a + b = 1$ immediately!',
        '2. (Sanity check at $x = 2$: $2^2 + b = 3(2) + a \\implies 4 + b = 6 + a \\implies b - a = 2$, so $b = 1.5, a = -0.5$, confirming $a + b = 1$ uniquely!)',
      ],
      directShortcutUsed: 'Target-expression spotting ($a+b$ falls straight out of the $x=-1$ boundary!).',
    },
  ],
}

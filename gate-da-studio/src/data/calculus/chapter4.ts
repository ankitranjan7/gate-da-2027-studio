import type { ChapterData } from '../../types/curriculum'

export const chapter4: ChapterData = {
  id: 'calc-ch4',
  number: 4,
  title: 'Differentiability — Smoothness, Kinks, ReLU/Sigmoid & Squeeze Tricks',
  shortTitle: 'Differentiability & Neural Slopes',
  estimatedHours: 4.5,
  dayLabel: 'Week 1 · Day 2 (Part B)',
  tagline:
    'Welcome to the highest-yield single-variable chapter in GATE DA! Step by step, you will see why sharp corners like ReLU at $0$ break derivatives, how to weld piecewise curves smoothly ($C^1$), how Sigmoid and dead-ReLU backpropagation slopes take just 5 seconds, and how the Lipschitz zero-derivative trick forces a function to stay completely flat.',
  syllabusMapping: ['Differentiability of functions of a single variable'],
  whatIsImportant: [
    'Differentiable $\\implies$ Continuous, NOT vice versa ($|x|$ and $\\text{ReLU}(x)$ at $0$ — GATE 2025 Q.48)',
    'Algebra of differentiable functions & nonzero denominator check (GATE 2025 Q.24)',
    'Smooth piecewise $C^1$ gluing: match BOTH values AND derivatives (GATE 2024 Q.37)',
    'Sigmoid self-derivative $f\'(x) = f(x)(1-f(x))$ (GATE 2024 Q.33) & dead-ReLU Chain Rule gradient $= 0$ (GATE 2025 Q.42)',
    'Lipschitz / Squeeze zero-derivative constant trick $|f(x)-f(y)| \\le K|x-y|^p$ ($p > 1$) $\\implies f$ constant (GATE 2025 Q.59)',
  ],
  whatIsNotImportant: [
    'Implicit differentiation of messy 5-term trigonometric curves',
    'Parametric cycloid curvature / radius-of-curvature formulas — never in DA',
  ],
  inboundStream: 'Ch.2 Limits + Ch.3 Continuity',
  outboundStream: [
    'Ch.5 Taylor Series (higher derivatives $f^{(k)}(a)$)',
    'Ch.6 Maxima/Minima, Convexity & Gradient Descent',
    'Week 2 PDF $f_X(x) = F\'_X(x)$',
    'Week 7 Neural Network Backpropagation & Logistic Regression',
  ],
  glossary: [
    {
      term: 'Derivative (Instantaneous Slope)',
      symbol: '$f\'(c) = \\lim_{h\\to 0}\\frac{f(c+h)-f(c)}{h}$',
      plainEnglish:
        'Think of the derivative $f\'(c)$ as the exact steepness of a curve right at $x = c$ — if you zoom in endlessly at $c$, a differentiable curve flattens into a straight line of slope $f\'(c)$.',
      tinyExample: 'For $f(x) = x^2$, the slope at $x = 3$ is $f\'(3) = 2(3) = 6$.',
    },
    {
      term: 'Secant Line vs. Tangent Line',
      symbol: '$\\frac{\\Delta y}{\\Delta x} \\to f\'(c)$',
      plainEnglish:
        'In plain words, a secant line connects two separate points on a curve (giving average slope), and as the second point slides into the first ($h \\to 0$), the secant rotates into the tangent line.',
      tinyExample: 'On $x^2$, the secant from $x = 0$ to $x = 0.01$ has slope $0.01$, which settles to tangent slope $0$ as $h \\to 0$.',
    },
    {
      term: 'Left-Hand & Right-Hand Derivatives (LHD & RHD)',
      symbol: '$f\'_-(c),\\; f\'_+(c)$',
      plainEnglish:
        'LHD measures the incoming slope arriving at $c$ from the left ($h \\to 0^-$), while RHD measures the outgoing slope leaving to the right ($h \\to 0^+$); both must be finite and equal for $f\'(c)$ to exist.',
      tinyExample: 'For $\\text{ReLU}(x)$ at $0$, $f\'_-(0) = 0$ while $f\'_+(0) = 1$, so the derivative at $0$ fails to exist.',
    },
    {
      term: 'Corner (Kink) vs. Vertical Tangent',
      symbol: '$f\'_-(c) \\neq f\'_+(c)$',
      plainEnglish:
        'A corner happens when the left and right slopes clash at a sharp bend, while a vertical tangent happens when the slope blows up to $\\pm\\infty$ — both stay continuous yet break differentiability.',
      tinyExample: '$|x|$ has a corner at $x = 0$, whereas $x^{1/3}$ has a vertical tangent at $x = 0$.',
    },
    {
      term: 'Smoothness Classes $C^0, C^1, C^2$',
      symbol: '$C^0 \\supset C^1 \\supset C^2$',
      plainEnglish:
        'Think of these as smoothness badges: $C^0$ means continuous (pieces touch), $C^1$ means the first derivative exists and is continuous (no corners), and $C^2$ means the curvature $f\'\'$ is continuous too.',
      tinyExample: '$x|x|$ is $C^1$ everywhere (derivative $2|x|$ is continuous), yet NOT $C^2$ at $0$.',
    },
    {
      term: 'Product & Quotient Rules',
      symbol: '$(fg)\',\\; (f/g)\'$',
      plainEnglish:
        'When differentiating a product or ratio of two functions, you cannot just multiply or divide their derivatives — you must combine both slopes using the product or quotient rule, ensuring $g(c) \\neq 0$ for ratios.',
      tinyExample: '$(x e^x)\' = 1 \\cdot e^x + x \\cdot e^x = (1 + x)e^x$.',
    },
    {
      term: 'Chain Rule',
      symbol: '$(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$',
      plainEnglish:
        'Think of the Chain Rule as linked gears: when $x$ nudges $g(x)$ and $g(x)$ nudges $f(g(x))$, the overall rate of change is the outer derivative evaluated at $g(x)$ multiplied by the inner derivative at $x$.',
      tinyExample: 'For $y = e^{3x}$, $\\frac{dy}{dx} = e^{3x} \\cdot 3 = 3e^{3x}$.',
    },
    {
      term: 'Partial Derivative',
      symbol: '$\\frac{\\partial y}{\\partial w}$',
      plainEnglish:
        'In plain words, when an output $y$ depends on several weights at once, the partial derivative wrt $w$ simply treats every other variable as a frozen constant and differentiates wrt $w$ alone.',
      tinyExample: 'For $y = 4au + 4bv$, treating $u, b, v$ as constants gives $\\frac{\\partial y}{\\partial a} = 4u$.',
    },
    {
      term: 'Pre-Activation & Dead ReLU',
      symbol: '$z < 0 \\implies \\text{ReLU}\'(z) = 0$',
      plainEnglish:
        'Inside a neural network, the weighted sum $z = w^T x + b$ before applying ReLU is called the pre-activation; whenever $z < 0$, the ReLU outputs flat $0$ with slope $0$ (a "dead" neuron), blocking gradients along that path.',
      tinyExample: 'If $z_2 = -5 < 0$, then $h_2 = \\text{ReLU}(-5) = 0$ and every weight feeding only into $z_2$ gets gradient $0$.',
    },
    {
      term: 'Vanishing Gradient',
      symbol: '$\\sigma\'(z) \\le 0.25$',
      plainEnglish:
        'Because Sigmoid’s slope never exceeds $0.25$, multiplying many Sigmoid slopes together across deep neural network layers shrinks the Chain Rule gradient toward zero.',
      tinyExample: 'Passing through $5$ Sigmoid layers multiplies the gradient by at most $(0.25)^5 \\approx 0.00098$.',
    },
    {
      term: 'Hyperbolic Tangent',
      symbol: '$\\tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$',
      plainEnglish:
        'Think of $\\tanh(x)$ as a zero-centered cousin of Sigmoid squashing real numbers into $(-1, 1)$; just like Sigmoid, its slope depends purely on its own output: $\\tanh\'(x) = 1 - \\tanh^2(x)$.',
      tinyExample: 'Whenever $\\tanh(x_0) = 0.6$, its derivative is instantly $1 - 0.6^2 = 0.64$.',
    },
    {
      term: 'Lipschitz & Hölder Condition',
      symbol: '$|f(x) - f(y)| \\le K|x - y|^p$',
      plainEnglish:
        'This inequality caps how fast $f$ can change between any two points $x$ and $y$: $p = 1$ (Lipschitz) merely limits the slope to $K$, whereas any $p > 1$ (super-linear Hölder) squeezes the derivative to $0$ everywhere.',
      tinyExample: '$|f(x) - f(y)| \\le (x - y)^2$ for all $x, y$ forces $f\'(y) = 0$ everywhere, so $f$ must be constant.',
    },
    {
      term: 'Mean Value Theorem (MVT)',
      symbol: '$f\'(c) = \\frac{f(b) - f(a)}{b - a}$',
      plainEnglish:
        'In plain words, if a smooth car averages $60\\text{ km/h}$ on a trip, its speedometer must have hit $60\\text{ km/h}$ at some instant; in particular, if $f\'(x) = 0$ everywhere, then $f(b) - f(a) = 0$ so $f$ is constant.',
      tinyExample: 'Once $f\'(x) \\equiv 0$ on $\\mathbb{R}$, MVT immediately guarantees $f(1) - f(0) = 0$.',
    },
  ],
  generatorId: 'sigmoid-sgd-gen',
  concepts: [
    {
      id: 'c4-1',
      title: 'Secant-to-Tangent Slope, LHD = RHD, and Why Kinks Break Derivatives (ReLU)',
      subtitle: 'Building the derivative from concrete numbers and testing $|x|$, $\\text{ReLU}(x)$, and $x|x|$',
      priority: 'core-pillar',
      buildsOn: 'Ch.2 Difference quotient limit & Ch.3 Continuity',
      sandboxId: 'relu-sigmoid-diff-lab',
      toyExample: {
        title: 'Zooming In on Smooth $x^2$ vs. Sharp $\\text{ReLU}(x) = \\max(x, 0)$ at $x = 0$',
        scenario:
          'Remember that the average slope between $x = 0$ and a nearby point $x = h$ is $\\frac{f(0+h) - f(0)}{h}$. Let’s test a tiny step to the left ($h = -0.01$) and a tiny step to the right ($h = +0.01$) on smooth $f(x) = x^2$ versus sharp $\\text{ReLU}(x)$:',
        walkthroughSteps: [
          '1. **On $f(x) = x^2$:** Left slope $= \\frac{(-0.01)^2 - 0}{-0.01} = -0.01 \\to 0$. Right slope $= \\frac{(0.01)^2 - 0}{0.01} = +0.01 \\to 0$. Both approach **$0$** — zooming in makes the parabola look like a flat straight line!',
          '2. **On $\\text{ReLU}(x) = \\max(x, 0)$:** For ANY $h < 0$, $\\frac{0 - 0}{h} = \\mathbf{0}$ (LHD $= 0$). For ANY $h > 0$, $\\frac{h - 0}{h} = \\mathbf{1}$ (RHD $= 1$).',
          '3. Zooming in 1,000,000$\\times$ at $x = 0$ on ReLU NEVER flattens the $45^\\circ$ corner! Since $\\text{LHD }(0) \\neq \\text{RHD }(1)$, $\\text{ReLU}$ is **continuous everywhere, yet NOT differentiable at $x = 0$**!',
        ],
        ahaMoment:
          'Hold onto this crisp contrast: **continuity** only asks whether the two pieces *meet*, while **differentiability** asks whether they meet **smoothly without a sharp corner (LHD $=$ RHD)** and without shooting straight up into a vertical tangent!',
      },
      theoremAndFormula: {
        statement:
          '$f$ is differentiable at $c$ iff the Left-Hand Derivative (LHD) and Right-Hand Derivative (RHD) both exist as finite numbers and are equal:',
        formulaLatex:
          'f\'(c) = \\lim_{h \\to 0} \\frac{f(c+h) - f(c)}{h} \\;\\text{ exists } \\iff f\'_-(c) = f\'_+(c) \\in \\mathbb{R} \\implies f \\text{ is continuous at } c',
        plainEnglishDecoding:
          'Here is a priceless shortcut: **if $f$ is NOT continuous at $c$, stop right there — it can NEVER be differentiable at $c$!** Also watch how multiplying $|x|$ by $x$ heals the kink: $x|x|$ flattens out smoothly at $0$ with derivative $2|0| = 0$.',
        workedMiniExamples: [
          {
            prompt: 'Is $g(x) = x|x|$ differentiable at $x = 0$? Does $g\'\'(0)$ exist?',
            solution:
              'For $x \\ge 0$, $g(x) = x^2 \\implies g\'(x) = 2x$. For $x < 0$, $g(x) = -x^2 \\implies g\'(x) = -2x$. Notice both formulas merge into $g\'(x) = 2|x|$! At $0$, $g\'_-(0) = g\'_+(0) = 0$, so $g$ **IS differentiable everywhere**! However, $g\'(x) = 2|x|$ has a kink at $0$, so **$g\'\'(0)$ does NOT exist**!',
          },
          {
            prompt: 'Check differentiability of $f(x) = x^{1/3}$ at $x = 0$.',
            solution:
              '$\\frac{(0+h)^{1/3} - 0}{h} = h^{-2/3} \\to +\\infty$ as $h \\to 0$. Continuous at $0$, NOT differentiable at $0$ (**vertical tangent**)!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Because $|x|$ is not differentiable at $0$, any product $h(x)\\cdot |x|$ with smooth $h$ is also not differentiable at $0$.',
          reality: 'If smooth $h(0) = 0$, the product $h(x)|x|$ IS differentiable at $0$ (with derivative $0$)! Why? $\\frac{h(x)|x| - 0}{x} = h(x)\\frac{|x|}{x} \\to 0 \\cdot (\\pm 1) = 0$!',
          counterExample: '$\\sin(x)\\cdot |x|$ and $(x-2)|x-2|$ are smoothly differentiable everywhere!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'ReLU Activation Properties in Neural Nets',
          whyItMatters: 'GATE DA 2025 Q.48 was a 2-mark MSQ directly asking whether $\\text{ReLU}(x)$ is continuous everywhere and non-differentiable at $0$!',
          pyqProof: 'GATE DA 2025 · Q.48 (2M MSQ)',
        },
      ],
    },
    {
      id: 'c4-2',
      title: 'Algebra of Derivatives & Smooth Piecewise Gluing ($C^1$)',
      subtitle: 'Differentiability closure rules and solving $(a,b,c)$ smoothly via symmetry',
      priority: 'core-pillar',
      buildsOn: 'Step 4.1 LHD = RHD & Ch.3 Piecewise Continuity',
      toyExample: {
        title: 'Designing a Rollercoaster Transition From Straight Ramp to Parabola',
        scenario:
          'Picture yourself designing a rollercoaster track (this is GATE DA 2024 Q.37!): you want a smooth middle parabola $ax^2 + bx + c$ on $[-2, 2]$ connecting a left straight ramp $y = -x$ ($x < -2$) to a right ramp $y = x$ ($x > 2$). If you only match heights at $\\pm 2$, riders get jolted by a sharp bend — watch how effortlessly you can solve $(a, b, c)$:',
        walkthroughSteps: [
          '1. **Symmetry Shortcut First:** Left ramp $y = -x$ and right ramp $y = +x$ together form $|x|$, which is **Even**! So the middle parabola MUST also be even $\\implies b = 0$ in 2 seconds!',
          '2. **Slope Match FIRST (kills $c$!):** At $x = 2$, parabola slope $2ax = 4a$ must match right ramp slope $+1 \\implies 4a = 1 \\implies a = 1/4$!',
          '3. **Height Match SECOND:** At $x = 2$, parabola height $a(2)^2 + c = 1 + c$ must match right ramp height $2 \\implies c = 1$! Total solve time: **20 seconds**!',
        ],
        ahaMoment:
          'Keep this 3-part sequence ready for every smooth piecewise gluing problem: **(1) check Even/Odd symmetry first**, **(2) match derivatives next** (because constant terms like $c$ vanish cleanly!), and **(3) match heights last** so the pieces never hover apart!',
      },
      theoremAndFormula: {
        statement:
          'If $f$ and $g$ are differentiable at $c$, then $f \\pm g$, $f \\cdot g$, and $(f \\circ g)$ (when $f$ is differentiable at $g(c)$) are ALWAYS differentiable at $c$, and $f / g$ is differentiable at $c$ **provided $g(c) \\neq 0$**:',
        formulaLatex:
          '(f \\cdot g)\'(c) = f\'(c)g(c) + f(c)g\'(c), \\qquad \\left(\\frac{f}{g}\\right)\'(c) = \\frac{f\'(c)g(c) - f(c)g\'(c)}{[g(c)]^2} \\;\\big(g(c) \\neq 0\\big)',
        plainEnglishDecoding:
          'Always glance at the codomain in GATE MSQs! In GATE DA 2025 Q.24, the problem specified $g: \\mathbb{R} \\to (1, \\infty)$ on purpose — because $g(c) > 1$ guarantees the denominator is never zero, which makes $f(x)/g(x)$ safely differentiable at $c$ too!',
        workedMiniExamples: [
          {
            prompt: 'If $f(x) = \\begin{cases} x^2 + 3, & x \\le 1 \\\\ mx + n, & x > 1 \\end{cases}$ is differentiable at $x = 1$, find $(m, n)$.',
            solution:
              '1) Slope match at $x=1$: $2(1) = m \\implies m = 2$.\n2) Height match at $x=1$: $1^2 + 3 = 2(1) + n \\implies 4 = 2 + n \\implies n = 2$.',
          },
          {
            prompt: 'Why is $h(x) = \\begin{cases} x^2, & x \\le 1 \\\\ 2x + 5, & x > 1 \\end{cases}$ NOT differentiable at $x = 1$ even though both side derivatives equal $2$?',
            solution:
              'At $x=1$, left height $= 1$ while right limit $= 7$ (jump discontinuity!). You MUST be continuous before slope formulas apply — the true RHD $\\lim_{h\\to 0^+}\\frac{(2+2h+5) - 1}{h} = +\\infty$!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Checking $\\lim_{x\\to c^-} f\'(x) = \\lim_{x\\to c^+} f\'(x)$ alone proves $f$ is differentiable at $c$.',
          reality: 'FATAL TRAP! Derivative formulas erase additive constants, so two disconnected parallel pieces have equal slopes yet jump at $c$! Always check continuity too.',
          counterExample: '$f(x) = x$ ($x \\le 0$) and $x + 10$ ($x > 0$) has slope $1$ on both sides, yet jumps by $10$ at $x=0$!',
        },
      ],
    },
    {
      id: 'c4-3',
      title: 'Sigmoid Self-Derivative & Dead-ReLU Chain Rule in Neural Nets',
      subtitle: 'Why backprop never recomputes exponentials — and how inactive ReLUs zero out paths',
      priority: 'core-pillar',
      buildsOn: 'Step 4.2 Quotient & Chain Rules',
      toyExample: {
        title: 'Computing Sigmoid’s Slope at $f(x) = 0.4$ Without Touching $\\ln$ or $e^{-x}$',
        scenario:
          'GATE DA 2024 Q.33 asks a lovely question: for $f(x) = \\frac{1}{1+e^{-x}}$, find $f\'(x)$ at the point where $f(x) = 0.4$. Don’t reach for your calculator to solve for $x$ — watch how cleanly $f\'(x)$ rewrites itself in terms of $f(x)$:',
        walkthroughSteps: [
          '1. Differentiate $(1 + e^{-x})^{-1}$ by chain rule: $f\'(x) = -(1 + e^{-x})^{-2} \\cdot (-e^{-x}) = \\frac{e^{-x}}{(1+e^{-x})^2}$.',
          '2. Split the fraction cleanly into two pieces: $\\frac{1}{1+e^{-x}} \\times \\frac{(1 + e^{-x}) - 1}{1 + e^{-x}} = f(x) \\cdot \\big(1 - f(x)\\big)$!',
          '3. Plug $f(x) = 0.4$: $f\'(x) = 0.4 \\times (1 - 0.4) = 0.4 \\times 0.6 = \\mathbf{0.24}$ — solved in **4 seconds**!',
        ],
        ahaMoment:
          'Think about how clever that is: deep-learning frameworks cache the forward output $a = \\sigma(z)$ precisely so the backward pass can compute the slope in one multiplication $a(1 - a)$ without ever calling `exp()` again! And $\\tanh(z)$ has the exact same magic: $\\tanh\'(z) = 1 - \\tanh^2(z)$.',
      },
      theoremAndFormula: {
        statement:
          '**Chain Rule** $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$ multiplies local derivatives along every path from output to parameter. For the two flagship ML activations:',
        formulaLatex:
          '\\sigma\'(z) = \\sigma(z)\\big(1 - \\sigma(z)\\big), \\qquad \\tanh\'(z) = 1 - \\tanh^2(z), \\qquad \\text{ReLU}\'(z) = \\begin{cases} 1, & z > 0 \\\\ 0, & z < 0 \\end{cases}',
        plainEnglishDecoding:
          'Here is the golden habit for any ReLU network question (like GATE DA 2025 Q.42): **always compute the forward-pass numbers first!** Whenever a hidden neuron’s pre-activation $z < 0$, it outputs $0$ and has slope $\\text{ReLU}\'(z) = 0$, so every weight feeding solely into that dead neuron immediately gets gradient **$0$** with zero algebra!',
        workedMiniExamples: [
          {
            prompt: 'What is the maximum possible slope of the Sigmoid function $\\sigma(x)$ on $\\mathbb{R}$?',
            solution:
              '$\\sigma\'(x) = p(1 - p)$ where $p = \\sigma(x) \\in (0, 1)$. A product $p(1-p)$ peaks at $p = 0.5$ ($x = 0$), giving max slope $0.5 \\times 0.5 = \\mathbf{0.25}$! (That $\\le 0.25$ factor per layer causes **vanishing gradients** in deep sigmoid nets!)',
          },
          {
            prompt: 'Let $y = \\text{ReLU}(2u - 3v) + 4\\,\\text{ReLU}(au - fv)$ at $u=2, v=3$ with $a=1, f=2$. Find $\\frac{\\partial y}{\\partial f}$.',
            solution:
              'Check pre-activation of unit 2: $z_2 = (1)(2) - (2)(3) = -4 < 0$ (DEAD ReLU!). Since $\\text{ReLU}\'(-4) = 0$, $\\frac{\\partial y}{\\partial f} = 0$ instantly!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Sigmoid’s derivative peaks at $1$ like $\\tanh\'(0) = 1$ and $\\text{ReLU}\'(x>0) = 1$.',
          reality: '$\\sigma\'(0) = 0.25$ (one-fourth!), whereas $\\tanh\'(0) = 1 - 0^2 = 1$ because $\\tanh(x) = 2\\sigma(2x) - 1$!',
          counterExample: 'At $x = 0$, $\\sigma(0) = 0.5 \\implies \\sigma\'(0) = 0.5(0.5) = 0.25$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'Backpropagation in Feed-Forward MLPs',
          whyItMatters: 'GATE DA 2025 Q.42 tested a 3-ReLU computation graph where one inactive ReLU gave $\\partial y/\\partial f = 0$ and the active path multiplied weights to give $\\partial y/\\partial a = 8$!',
          pyqProof: 'GATE DA 2024 · Q.33 (1M NAT) & GATE DA 2025 · Q.42 (2M MCQ)',
        },
      ],
    },
    {
      id: 'c4-4',
      title: 'The Lipschitz / Hölder Squeeze Zero-Derivative Trick',
      subtitle: 'Why $|f(x) - f(y)| \\le K|x - y|^p$ with $p > 1$ forces $f(x)$ to be completely CONSTANT',
      priority: 'high-yield',
      buildsOn: 'Step 4.1 Difference Quotient + Ch.2 Squeeze Theorem',
      toyExample: {
        title: 'A Car Allowed to Move At Most $t^2$ Meters Over Any Tiny Time Interval $t$',
        scenario:
          'Imagine a car whose position $f$ obeys a strange speed rule (this is GATE DA 2025 Q.59!): over ANY time gap $h = x - y$ seconds, it can move at most $h^2$ meters, meaning $|f(x) - f(y)| \\le h^2$. Let’s figure out how fast this car can possibly be moving at any instant $y$:',
        walkthroughSteps: [
          '1. Average speed over tiny window $h \\neq 0$ is $\\left|\\frac{f(y+h) - f(y)}{h}\\right| \\le \\frac{h^2}{|h|} = |h|$.',
          '2. Over $h = 0.001\\text{ s}$, average speed $\\le 0.001\\text{ m/s}$. Over $h = 10^{-9}\\text{ s}$, average speed $\\le 10^{-9}\\text{ m/s}$!',
          '3. Send $h \\to 0$: instantaneous velocity $f\'(y) = 0$ at **every single moment $y \\in \\mathbb{R}$**! A car with zero speed forever never moves: $f(1) - f(0) = \\mathbf{0}$!',
        ],
        ahaMoment:
          'Notice the night-and-day difference between $p = 1$ and $p > 1$: an exponent $p = 1$ ($|f(x)-f(y)| \\le K|x-y|$) only caps the slope at $K$, whereas **ANY exponent strictly bigger than $1$** ($p = 1.01, 1.5, 2\\dots$) leaves a leftover $|h|^{p-1} \\to 0$ after dividing by $|h|$, forcing $f\'(y) \\equiv 0$ everywhere so $f$ can never move!',
      },
      theoremAndFormula: {
        statement:
          '**Hölder Constant Theorem:** If $f: \\mathbb{R} \\to \\mathbb{R}$ satisfies $|f(x) - f(y)| \\le K|x - y|^p$ for all $x, y \\in \\mathbb{R}$ with constants $K \\ge 0$ and **$p > 1$**, then $f$ is differentiable everywhere with $f\'(x) \\equiv 0$, so **$f$ is a constant function**!',
        formulaLatex:
          '|f(x) - f(y)| \\le K|x - y|^p \\;(p > 1) \\implies \\left|\\frac{f(x)-f(y)}{x-y}\\right| \\le K|x-y|^{p-1} \\xrightarrow{x\\to y} 0 \\implies f(x) \\equiv C',
        plainEnglishDecoding:
          'Even if the question never mentions continuity or differentiability up front, the bound $|f(x) - f(y)| \\le K|x - y|^p$ ($p > 1$) proves $f\'(x) = 0$ everywhere on its own — which immediately forces $f(b) - f(a) = 0$ for any two points $a$ and $b$!',
        workedMiniExamples: [
          {
            prompt: 'Given $|f(x) - f(y)| \\le (x - y)^2$ for all $x, y \\in \\mathbb{R}$ and $f(0) = 7$, find $f(5)$.',
            solution:
              'Here $K = 1, p = 2 > 1 \\implies f$ is constant everywhere $\\implies f(5) = f(0) = 7$!',
          },
          {
            prompt: 'Does $|f(x) - f(y)| \\le 3|x - y|$ force $f$ to be constant?',
            solution:
              'NO! Here $p = 1$, so dividing by $|x-y|$ only gives $|\\text{slope}| \\le 3$. For example $f(x) = 3\\sin x$ or $f(x) = 2x$ satisfies it easily!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $|f(x) - f(0)| \\le x^2$ holds ONLY at the fixed point $y = 0$ (not all pairs $x, y$), then $f$ is still constant everywhere.',
          reality: 'WATCH THIS! Fixing $y = 0$ only proves $f(0) = 0$ and $f\'(0) = 0$ at the origin — away from $0$, $f(x) = x^2$ satisfies $|x^2 - 0| \\le x^2$ without being constant! You need the bound for **all $x, y$** to get $f\'(y) = 0$ everywhere!',
          counterExample: '$f(x) = x^2$ satisfies $|f(x) - f(0)| \\le x^2$, yet $f(1) = 1 \\neq f(0)$!',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'pb-4-1',
      title: 'Smooth Piecewise Gluing ($C^1$) in 20 Seconds via Symmetry + Slope-First',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2024 · Q.37 (2M MCQ)'],
      problemStatement:
        'Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined as $$f(x) = \\begin{cases} -x, & x < -2 \\\\ ax^2 + bx + c, & x \\in [-2, 2] \\\\ x, & x > 2 \\end{cases}$$ Find $(a, b, c)$ such that $f$ is continuous and differentiable everywhere.',
      triggerCue:
        'A quadratic $ax^2 + bx + c$ smoothly bridging symmetric outer rays ($-x$ on left, $+x$ on right) across $[-2, 2]$.',
      bruteForceTrap:
        'Writing 4 simultaneous equations in $a, b, c$ ($4a - 2b + c = 2$, $4a + 2b + c = 2$, $-4a + b = -1$, $4a + b = 1$) and doing full row reduction from scratch.',
      mentalShift:
        'Work smart in 3 effortless steps: first notice the outer pieces form $|x|$ (even symmetry!), which forces $b = 0$ right away; second match slopes at $x = 2$ so $c$ vanishes ($4a = 1 \\implies a = 1/4$); third match heights at $x = 2$ to lock in $c = 1$.',
      steps: [
        {
          label: 'Exploit Even Symmetry at x = ±2',
          detail:
            'Matching heights at $-2$ and $+2$: $4a - 2b + c = 2$ and $4a + 2b + c = 2$. Subtracting gives $4b = 0 \\implies b = 0$.',
        },
        {
          label: 'Match Derivative at x = 2 (kills c!)',
          detail:
            'Parabola slope $2ax + b = 2a(2) + 0 = 4a$ must equal right-ray slope $+1 \\implies a = \\frac{1}{4}$. (Notice at $x = -2$, slope is $2(1/4)(-2) = -1$, automatically matching $-x$!)',
        },
        {
          label: 'Match Value at x = 2 to lock in c',
          detail:
            '$\\frac{1}{4}(2)^2 + 0 + c = 2 \\implies 1 + c = 2 \\implies c = 1$. Solution: $(a, b, c) = (1/4,\\; 0,\\; 1)$.',
        },
      ],
      lockInTakeaway:
        'Always solve piecewise $C^1$ problems in the order: **Symmetry $\\to$ Derivative Match $\\to$ Value Match**!',
    },
    {
      id: 'pb-4-2',
      title: 'Instant Zero-Derivative From Two-Point Inequality',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2025 · Q.59 (2M NAT)'],
      problemStatement:
        'Suppose $f: \\mathbb{R} \\to \\mathbb{R}$ satisfies $|f(x) - f(y)| \\le (x - y)^2$ for all $x, y \\in \\mathbb{R}$. What is the value of $f(1) - f(0)$?',
      triggerCue:
        'An inequality bounding $|f(x) - f(y)|$ by $|x - y|^p$ with exponent $p > 1$ holding **for all $x, y \\in \\mathbb{R}$**.',
      bruteForceTrap:
        'Plugging $x = 1, y = 0$ directly only gives $|f(1) - f(0)| \\le (1 - 0)^2 = 1$, which traps you into thinking $f(1)-f(0)$ could be anything in $[-1, 1]$!',
      mentalShift:
        'Instead of plugging one giant jump from $0$ to $1$, divide both sides by $|x - y|$ and let $x \\to y$ to prove $f\'(y) = 0$ everywhere! (You can also picture slicing $[0, 1]$ into $N$ tiny hops of size $1/N$: total movement is at most $N \\cdot (1/N)^2 = 1/N \\to 0$!)',
      steps: [
        {
          label: 'Form the difference quotient for x ≠ y',
          detail:
            '$$0 \\le \\left|\\frac{f(x) - f(y)}{x - y}\\right| \\le |x - y|$$',
        },
        {
          label: 'Take x → y via Squeeze Theorem',
          detail:
            'Right side $\\to 0$, so $f\'(y) = 0$ for every $y \\in \\mathbb{R}$. By Mean Value Theorem, $f$ is constant everywhere, so $f(1) - f(0) = 0$!',
        },
      ],
      lockInTakeaway:
        'Two-point bound $|f(x)-f(y)| \\le K|x-y|^p$ with $p > 1$ $\\implies f$ is CONSTANT ($f(a) - f(b) = 0$)!',
    },
    {
      id: 'pb-4-3',
      title: 'Evaluating Derivatives When Only the Output $f(x_0)$ Is Given',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2024 · Q.33 (1M NAT)'],
      problemStatement:
        'For $f(x) = \\frac{1}{1 + e^{-x}}$, find $f\'(x)$ at the point where $f(x) = 0.4$.',
      triggerCue:
        'Question gives the **function output** $f(x_0) = y_0$ rather than $x_0$ for a logistic/sigmoid/tanh/exponential curve.',
      bruteForceTrap:
        'Solving $\\frac{1}{1+e^{-x}} = 0.4 \\implies e^{-x} = 1.5 \\implies x = -\\ln(1.5)$ on the GATE calculator and plugging back into $\\frac{e^{-x}}{(1+e^{-x})^2}$.',
      mentalShift:
        'Skip solving for $x_0$ altogether — rewrite $f\'(x)$ purely in terms of the output $f(x)$ itself ($f\' = f(1 - f)$) so you can plug $0.4$ straight in!',
      steps: [
        {
          label: 'Apply Sigmoid Self-Derivative Identity',
          detail: '$f\'(x) = f(x)\\big(1 - f(x)\\big) = 0.4 \\times (1 - 0.4) = 0.4 \\times 0.6 = 0.24$.',
        },
      ],
      lockInTakeaway:
        'Lock in both: $\\sigma\' = \\sigma(1 - \\sigma)$ and $\\tanh\' = 1 - \\tanh^2$!',
    },
    {
      id: 'pb-4-4',
      title: 'Dead-Neuron Shortcut on ReLU Backprop Graphs',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2025 · Q.42 (2M MCQ)'],
      problemStatement:
        'In a 2-layer ReLU network with output $y$, hidden neurons compute $h_1 = \\text{ReLU}(z_1)$ and $h_2 = \\text{ReLU}(z_2)$. At input $(u, v) = (2, 3)$, suppose $z_1 = +5$ while $z_2 = -2$. How do you find $\\frac{\\partial y}{\\partial w}$ for weights feeding into $h_1$ vs $h_2$?',
      triggerCue:
        'Partial derivatives of a ReLU neural network evaluated at a concrete numerical input $(u, v)$.',
      bruteForceTrap:
        'Writing symbolic chain-rule formulas for every neuron before checking which ReLUs are positive vs negative!',
      mentalShift:
        'Always run the **forward pass numbers first**! Cross out every hidden neuron with $z < 0$ (dead ReLU means zero output and zero slope), and replace every active neuron ($z > 0$) with a plain straight wire `ReLU(z) = z` — suddenly the whole neural network turns into simple linear algebra!',
      steps: [
        {
          label: 'Evaluate pre-activations z_i numerically',
          detail: 'Since $z_2 = -2 < 0$, $h_2$ is DEAD: any parameter $f$ feeding ONLY into $z_2$ immediately has $\\frac{\\partial y}{\\partial f} = 0$!',
        },
        {
          label: 'Replace active ReLUs (z_i > 0) with linear expressions',
          detail: 'Since $z_1 = +5 > 0$, near $(2,3)$ we simply have $h_1 = z_1$, so $\\frac{\\partial y}{\\partial a}$ is just the product of weights along active paths $\\times$ the input multiplying $a$!',
        },
      ],
      lockInTakeaway:
        'On ReLU nets at a point: **1) Forward numbers $\\to$ 2) Delete $z < 0$ nodes $\\to$ 3) Multiply active path weights!**',
    },
  ],
  arsenalCards: [
    {
      id: 'ac-4-1',
      badge: 'Sigmoid & Tanh Self-Slopes',
      whenYouSpot: 'Derivative of $\\sigma(kx) = \\frac{1}{1+e^{-kx}}$ or $\\tanh(kx)$ given output value $y = f(x)$',
      directWeaponLatex: '\\sigma(kx)\' = k\\,\\sigma(kx)\\big(1 - \\sigma(kx)\\big), \\qquad \\tanh(kx)\' = k\\big(1 - \\tanh^2(kx)\\big)',
      instantRule: 'Never invert for $x$; plug output $y$ directly into $k y(1-y)$ or $k(1-y^2)$!',
      tenSecondExample: '$\\sigma(x)=0.4 \\implies \\sigma\'(x) = 0.4(0.6) = 0.24$ (GATE 2024 Q.33).',
      oneFatalTrap: 'Max slope of $\\sigma(x)$ is $0.25$ (at $\\sigma=0.5$), NOT $1$!',
    },
    {
      id: 'ac-4-2',
      badge: 'Kink vs Smooth Power Rule at 0',
      whenYouSpot: 'Differentiability MSQs with $|x - c|^p$ or $x|x|$ or $\\text{ReLU}(x)^p$',
      directWeaponLatex: '|x - c|^p \\text{ is differentiable at } c \\iff p > 1 \\;\\text{ (or } p = 0\\text{)}',
      instantRule: '$|x|$ and $\\text{ReLU}(x)$ ($p=1$) have a sharp kink at $0$; $x|x|$, $|x|^{1.5}$, and $\\text{ReLU}(x)^2$ ($p>1$) are smooth at $0$ with derivative $0$!',
      tenSecondExample: '$\\text{ReLU}(x)^2$ (Squared ReLU) is $C^1$ differentiable everywhere with derivative $2\\,\\text{ReLU}(x)$!',
      oneFatalTrap: '$x|x|$ is $C^1$ (first derivative $2|x|$ exists), NOT $C^2$ (second derivative fails at $0$)!',
    },
    {
      id: 'ac-4-3',
      badge: 'Hölder p > 1 Constant Killer',
      whenYouSpot: '$|f(x) - f(y)| \\le K|x - y|^p$ for all $x, y \\in \\mathbb{R}$ with $p > 1$',
      directWeaponLatex: 'p > 1 \\implies f\'(x) \\equiv 0 \\implies f(x) = \\text{constant everywhere}',
      instantRule: 'Any difference $f(b) - f(a)$ is immediately $0$!',
      tenSecondExample: '$|f(x)-f(y)| \\le (x-y)^2 \\implies f(1)-f(0) = 0$ (GATE 2025 Q.59).',
      oneFatalTrap: 'Must hold for ALL pairs $(x,y)$, and requires $p > 1$ strictly ($p=1$ allows $f(x)=Kx$).',
    },
    {
      id: 'ac-4-4',
      badge: 'Oscillating x^p sin(1/x) Rule at 0',
      whenYouSpot: '$f(x) = x^p \\sin(1/x)$ for $x \\neq 0$, $f(0) = 0$ at $x = 0$',
      directWeaponLatex: 'p > 0 \\iff \\text{Continuous at } 0; \\qquad p > 1 \\iff \\text{Differentiable at } 0 \\;(f\'(0)=0)',
      instantRule: 'Differentiability costs 1 extra power of $x$ because $\\frac{f(h)-0}{h} = h^{p-1}\\sin(1/h)$ needs $p - 1 > 0$!',
      tenSecondExample: '$x^2 \\sin(1/x)$ IS differentiable at $0$ ($f\'(0)=0$), even though $f\'(x) = 2x\\sin(1/x) - \\cos(1/x)$ is discontinuous at $0$!',
      oneFatalTrap: 'Assuming $f\'(x)$ must be continuous if $f$ is differentiable — $x^2\\sin(1/x)$ is the famous counterexample!',
    },
    {
      id: 'ac-4-5',
      badge: 'Piecewise C^1 Gluing Order',
      whenYouSpot: 'Find parameters $(a, b, c)$ so piecewise $f(x)$ is continuous & differentiable at $x_0$',
      directWeaponLatex: '\\text{1) } f\'_-(x_0) = f\'_+(x_0) \\quad \\longrightarrow \\quad \\text{2) } f_-(x_0) = f_+(x_0)',
      instantRule: 'Match slopes first (eliminates constants), then match heights!',
      tenSecondExample: 'GATE 2024 Q.37: $b=0$ by symmetry, $4a=1 \\implies a=1/4$, $1+c=2 \\implies c=1$.',
      oneFatalTrap: 'Never stop after matching derivatives — always verify height continuity too!',
    },
    {
      id: 'ac-4-6',
      badge: 'Dead-ReLU Backprop Eraser',
      whenYouSpot: 'Gradient $\\frac{\\partial L}{\\partial w}$ in a ReLU MLP at a given input $x$',
      directWeaponLatex: 'z_j = w_j^T h + b_j < 0 \\implies \\text{ReLU}(z_j) = 0 \\;\\wedge\\; \\frac{\\partial L}{\\partial z_j} = 0',
      instantRule: 'Run forward pass numbers first; erase every node with $z_j < 0$; multiply weights along surviving $z_j > 0$ paths!',
      tenSecondExample: 'GATE 2025 Q.42: inactive hidden ReLU immediately forces $\\partial y / \\partial f = 0$.',
      oneFatalTrap: 'At exact $z_j = 0$, the subgradient is undefined in pure calculus (GATE always designs inputs so $z_j \\neq 0$!).',
    },
  ],
  questions: [
    {
      id: 'q-4-1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'Let $g(x) = \\tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$. At a point $x_0$ where $g(x_0) = 0.6$, compute $g\'(x_0)$ (up to 2 decimal places).',
      natAnswer: { min: 0.63, max: 0.65, exactDisplay: '0.64' },
      triggerHint: 'No need to invert $\\tanh(x)$ to find $x_0$! Use the self-derivative identity $g\'(x) = 1 - [g(x)]^2$ and plug $0.6$ right in.',
      intuitiveSolution: [
        '1. Recall $\\frac{d}{dx}\\tanh(x) = \\text{sech}^2(x) = 1 - \\tanh^2(x)$.',
        '2. Plug $g(x_0) = 0.6$: $g\'(x_0) = 1 - (0.6)^2 = 1 - 0.36 = 0.64$.',
      ],
      directShortcutUsed: '$\\tanh\'(x) = 1 - \\tanh^2(x) = 1 - 0.36 = 0.64$.',
    },
    {
      id: 'q-4-2',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2',
      marks: 1,
      type: 'NAT',
      stem: 'Suppose $f(x) = \\begin{cases} 3x^2 + ax + 1, & x \\le 1 \\\\ 7x + b, & x > 1 \\end{cases}$ is differentiable at $x = 1$. Find $a - b$.',
      natAnswer: { min: 2.99, max: 3.01, exactDisplay: '3' },
      triggerHint: 'Follow our slope-first habit: match the derivatives at $x = 1$ first so $b$ disappears and you find $a$, then match the heights at $x = 1$ to lock in $b$!',
      intuitiveSolution: [
        '1. Derivative match at $x = 1$: $6(1) + a = 7 \\implies a = 1$.',
        '2. Value match at $x = 1$: $3(1)^2 + 1(1) + 1 = 7(1) + b \\implies 5 = 7 + b \\implies b = -2$.',
        '3. Therefore $a - b = 1 - (-2) = 3$.',
      ],
      directShortcutUsed: 'Slope-first $C^1$ matching.',
    },
    {
      id: 'q-4-3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.33',
      year: 2024,
      marks: 1,
      type: 'NAT',
      stem: 'Consider the function $f(x) = \\frac{1}{1 + e^{-x}}$, where $x \\in \\mathbb{R}$. What is the value of $f\'(x)$ at the point where $f(x) = 0.4$? (Round off to two decimal places.)',
      natAnswer: { min: 0.235, max: 0.245, exactDisplay: '0.24' },
      triggerHint: 'Skip solving for $x$! Remember Sigmoid’s self-derivative rule $f\'(x) = f(x)(1 - f(x))$ and plug $f(x) = 0.4$ straight in.',
      intuitiveSolution: [
        '1. Differentiating $f(x) = (1 + e^{-x})^{-1}$ gives $f\'(x) = \\frac{e^{-x}}{(1+e^{-x})^2} = f(x)\\big(1 - f(x)\\big)$.',
        '2. Substitute $f(x) = 0.4$: $f\'(x) = 0.4 \\times 0.6 = 0.24$.',
      ],
      directShortcutUsed: '$\\sigma\' = \\sigma(1 - \\sigma) = 0.4 \\times 0.6 = 0.24$.',
    },
    {
      id: 'q-4-4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.37',
      year: 2024,
      marks: 2,
      type: 'MCQ',
      stem: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined as $$f(x) = \\begin{cases} -x, & x < -2 \\\\ ax^2 + bx + c, & x \\in [-2, 2] \\\\ x, & x > 2 \\end{cases}$$ Which values of $(a, b, c)$ make $f(x)$ continuous and differentiable everywhere on $\\mathbb{R}$?',
      options: [
        { id: 'A', text: '$a = \\frac{1}{4},\\; b = 0,\\; c = 1$', whyTrueOrFalse: 'At $x=\\pm 2$: values $4(1/4) + 1 = 2$ match $|-2|=|2|=2$, and slopes $2(1/4)(\\pm 2) = \\pm 1$ match $-1$ and $+1$!' },
        { id: 'B', text: '$a = \\frac{1}{2},\\; b = 0,\\; c = 0$', whyTrueOrFalse: 'Values match ($2 = 2$), NOT slopes ($2(1/2)(2) = 2 \\neq 1$ — kink at $\\pm 2$!).' },
        { id: 'C', text: '$a = 0,\\; b = 0,\\; c = 2$', whyTrueOrFalse: 'Flat horizontal segment $y = 2$ matches values at $\\pm 2$, NOT slopes ($0 \\neq \\pm 1$).' },
        { id: 'D', text: '$a = \\frac{1}{4},\\; b = 1,\\; c = 0$', whyTrueOrFalse: 'Breaks symmetry at $x = -2$: $1 - 2 + 0 = -1 \\neq 2$.' },
      ],
      correctOptions: ['A'],
      triggerHint: 'Use our 3-step shortcut: notice the outer ramps are even (killing $b = 0$), match the slope $2ax = 1$ at $x = 2$ to get $a = 1/4$, and then match the height to find $c = 1$!',
      intuitiveSolution: [
        '1. Outer pieces equal $|x|$ (even), so middle quadratic must be even $\\implies b = 0$.',
        '2. Differentiability at $x = 2$: $2a(2) = 1 \\implies a = 1/4$ (which also gives $-1$ at $x = -2$).',
        '3. Continuity at $x = 2$: $(1/4)(4) + c = 2 \\implies c = 1$.',
      ],
      directShortcutUsed: 'Even symmetry ($b=0$) + slope-first $C^1$ match.',
    },
    {
      id: 'q-4-5',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.24',
      year: 2025,
      marks: 1,
      type: 'MSQ',
      stem: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$ and $g: \\mathbb{R} \\to (1, \\infty)$ be two functions that are both differentiable at a point $c \\in \\mathbb{R}$. Which of the following functions is/are ALWAYS differentiable at $c$?',
      options: [
        { id: 'A', text: '$f(x) + g(x)$', whyTrueOrFalse: 'Sum of two functions differentiable at $c$ is always differentiable at $c$. True!' },
        { id: 'B', text: '$f(x) \\cdot g(x)$', whyTrueOrFalse: 'Product rule holds whenever $f\'(c)$ and $g\'(c)$ exist. True!' },
        { id: 'C', text: '$\\frac{f(x)}{g(x)}$', whyTrueOrFalse: 'Look at $g$’s codomain $(1, \\infty)$! Since $g(c) > 1 \\implies g(c) \\neq 0$, the quotient rule is guaranteed valid at $c$! True!' },
        { id: 'D', text: '$f(g(x))$', whyTrueOrFalse: 'SUBTLE TRAP! Chain rule for $f(g(x))$ at $x = c$ requires $f$ to be differentiable at **$g(c)$** — NOT at $c$! We were only told $f$ is differentiable at $c$, and $g(c)$ need not equal $c$!' },
      ],
      correctOptions: ['A', 'B', 'C'],
      triggerHint: 'Pause and appreciate two careful clues in the stem: $g$ maps into $(1, \\infty)$ (guaranteeing $g(c) \\neq 0$!), AND differentiability is only promised **at the single point $c$** — check which point $f$ gets evaluated at inside $f(g(x))$!',
      intuitiveSolution: [
        '1. **Options A & B:** Sum and product of functions differentiable at $c$ are always differentiable at $c$.',
        '2. **Option C:** Since $g: \\mathbb{R} \\to (1, \\infty)$, $g(c) > 1 > 0$, so denominator is never zero and $f/g$ is differentiable at $c$.',
        '3. **Option D (The Classic IIT MSQ Trap!):** $(f \\circ g)\'(c) = f\'(g(c))\\,g\'(c)$ requires $f$ to be differentiable at **$g(c)$**. Counterexample: let $c = 0$, $g(x) = 2$ (smooth constant $> 1$), and $f(x) = |x - 2|$ (differentiable at $c = 0$, kink at $2$!). Wait: for constant $g(x)=2$, $f(g(x))=0$ is constant; instead take $g(x) = x + 2$ ($e^x + 1$ so range $\\subset (1,\\infty)$: $g(0) = 2$, $g\'(0)=1$) and $f(y) = |y - 2|$! At $c = 0$, $f$ is smooth near $0$, $g$ is smooth everywhere, yet $f(g(x)) = |e^x - 1|$ has a sharp kink right at $x = 0$!',
      ],
      directShortcutUsed: 'Pointwise chain-rule evaluation check ($f\'$ needed at $g(c)$, not $c$!) + $|e^x - 1|$ counterexample.',
    },
    {
      id: 'q-4-6',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.48',
      year: 2025,
      marks: 2,
      type: 'MSQ',
      stem: 'Consider the Rectified Linear Unit function $\\text{ReLU}(x) = \\max(x, 0)$ for $x \\in \\mathbb{R}$. Which of the following statements is/are TRUE?',
      options: [
        { id: 'A', text: '$\\text{ReLU}(x)$ is continuous everywhere on $\\mathbb{R}$.', whyTrueOrFalse: 'At $x = 0$, $\\lim_{x\\to 0^-} 0 = \\lim_{x\\to 0^+} x = \\text{ReLU}(0) = 0$, and linear away from $0$. True!' },
        { id: 'B', text: '$\\text{ReLU}(x)$ is differentiable everywhere on $\\mathbb{R}$.', whyTrueOrFalse: 'False — sharp corner at $x = 0$ where LHD $= 0 \\neq$ RHD $= 1$.' },
        { id: 'C', text: '$\\text{ReLU}(x)$ is NOT differentiable at $x = 0$.', whyTrueOrFalse: 'LHD at $0$ is $0$, while RHD at $0$ is $1$. Since $0 \\neq 1$, derivative fails at $x = 0$. True!' },
        { id: 'D', text: '$\\text{ReLU}(x)$ is discontinuous at $x = 0$.', whyTrueOrFalse: 'False — there is no jump at $x = 0$, only a slope change.' },
      ],
      correctOptions: ['A', 'C'],
      triggerHint: 'Look right at $x = 0$: do the heights meet from left and right ($0 = 0 \\implies$ continuous), and do the slopes match ($0$ vs $1 \\implies$ non-differentiable)?',
      intuitiveSolution: [
        '1. For $x < 0$, $\\text{ReLU}(x) = 0$; for $x > 0$, $\\text{ReLU}(x) = x$. Both limits at $0$ equal $0 = \\text{ReLU}(0)$, proving continuity everywhere (**A**).',
        '2. Left derivative at $0$ is $0$ and right derivative at $0$ is $1$, proving non-differentiability at $x = 0$ (**C**).',
      ],
      directShortcutUsed: 'Corner check: continuous everywhere, LHD $(0) \\neq$ RHD $(1)$ at $0$.',
    },
    {
      id: 'q-4-7',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.59',
      year: 2025,
      marks: 2,
      type: 'NAT',
      stem: 'Suppose $f: \\mathbb{R} \\to \\mathbb{R}$ satisfies $$|f(x) - f(y)| \\le (x - y)^2$$ for all $x, y \\in \\mathbb{R}$. Find the value of $f(1) - f(0)$.',
      natAnswer: { min: -0.001, max: 0.001, exactDisplay: '0' },
      triggerHint: 'Notice the exponent $p = 2 > 1$ holds for ALL pairs $x, y$: divide both sides by $|x - y|$ and let $x \\to y$ to see what happens to $f\'(y)$!',
      intuitiveSolution: [
        '1. For any $y \\in \\mathbb{R}$ and $x \\neq y$, $0 \\le \\left|\\frac{f(x) - f(y)}{x - y}\\right| \\le |x - y|$.',
        '2. Taking $x \\to y$ forces $f\'(y) = 0$ for every $y \\in \\mathbb{R}$.',
        '3. Therefore $f$ is constant on $\\mathbb{R}$, so $f(1) - f(0) = 0$.',
      ],
      directShortcutUsed: 'Hölder $p > 1$ Constant Theorem $\\implies f(1) - f(0) = 0$.',
    },
    {
      id: 'q-4-8',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.42 (ML Backprop Bridge)',
      year: 2025,
      marks: 2,
      type: 'MCQ',
      stem: 'Consider a neural network computation with inputs $u = 2, v = 3$: hidden units $h_1 = \\text{ReLU}(a u + b v)$, $h_2 = \\text{ReLU}(e u + f v)$ where $a=1, b=1, e=-1, f=-1$, and output $y = \\text{ReLU}(c h_1 + d h_2)$ with $c = 4, d = 5$. What are $\\left(\\frac{\\partial y}{\\partial a},\\; \\frac{\\partial y}{\\partial f}\\right)$ at $(u, v) = (2, 3)$?',
      options: [
        { id: 'A', text: '$\\frac{\\partial y}{\\partial a} = 8,\\quad \\frac{\\partial y}{\\partial f} = 0$', whyTrueOrFalse: '$z_2 = -2 - 3 = -5 < 0$ (dead $\\implies \\partial y/\\partial f = 0$!); $z_1 = 2 + 3 = 5 > 0$ and output pre-activation $= 4(5) = 20 > 0$, so $y = 4(au + bv) \\implies \\partial y/\\partial a = 4u = 8$!' },
        { id: 'B', text: '$\\frac{\\partial y}{\\partial a} = 8,\\quad \\frac{\\partial y}{\\partial f} = 15$', whyTrueOrFalse: 'Forgets that $z_2 = -5 < 0$ kills the $\\text{ReLU}$ derivative to $0$!' },
        { id: 'C', text: '$\\frac{\\partial y}{\\partial a} = 4,\\quad \\frac{\\partial y}{\\partial f} = 0$', whyTrueOrFalse: 'Forgets the chain-rule input factor $\\partial z_1 / \\partial a = u = 2$.' },
        { id: 'D', text: '$\\frac{\\partial y}{\\partial a} = 0,\\quad \\frac{\\partial y}{\\partial f} = 0$', whyTrueOrFalse: 'Unit $h_1$ and output $y$ are both strictly positive ($5 > 0, 20 > 0$), so path 1 is active!' },
      ],
      correctOptions: ['A'],
      triggerHint: 'Always compute the forward-pass numbers first! Check the signs of $au + bv$ and $eu + fv$ at $u = 2, v = 3$ to see which ReLU is alive and which one is dead.',
      intuitiveSolution: [
        '1. **Forward Pass:** $z_1 = (1)(2) + (1)(3) = +5 > 0 \\implies h_1 = 5$ (ACTIVE!). Meanwhile $z_2 = (-1)(2) + (-1)(3) = -5 < 0 \\implies h_2 = 0$ (**DEAD ReLU**!).',
        '2. Output pre-activation: $z_{\\text{out}} = 4(5) + 5(0) = 20 > 0$ (ACTIVE!).',
        '3. Because $z_2 < 0$, $\\frac{\\partial y}{\\partial f} = 0$ immediately! Along the active path, $y = c(au + bv) = 4au + 4bv \\implies \\frac{\\partial y}{\\partial a} = 4u = 4(2) = 8$.',
      ],
      directShortcutUsed: 'Dead-ReLU forward sign check ($z_2 < 0 \\implies 0$) + active linear path product ($c \\cdot u = 4 \\times 2 = 8$).',
    },
    {
      id: 'q-4-9',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Smoothness Hierarchy MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Consider the three functions defined on $\\mathbb{R}$ (with $f_3(0) = 0$): $$f_1(x) = x|x|, \\qquad f_2(x) = [\\text{ReLU}(x)]^2, \\qquad f_3(x) = x^2 \\sin(1/x) \\;(x \\neq 0)$$ Which of the following statements is/are TRUE?',
      options: [
        { id: 'A', text: '$f_1(x)$ is differentiable at $x = 0$ with $f_1\'(0) = 0$.', whyTrueOrFalse: '$f_1\'(x) = 2|x|$, which equals $0$ at $x=0$ from both sides. True!' },
        { id: 'B', text: '$f_2(x)$ is twice differentiable at $x = 0$.', whyTrueOrFalse: 'TRAP! $f_2\'(x) = 2\\,\\text{ReLU}(x)$ exists everywhere (so $f_2$ is $C^1$), EXCEPT at $x=0$ its second derivative has LHD $= 0$ and RHD $= 2$! Not twice differentiable at $0$!' },
        { id: 'C', text: '$f_3(x)$ is differentiable at $x = 0$, yet $f_3\'(x)$ is NOT continuous at $x = 0$.', whyTrueOrFalse: '$\\frac{f_3(h)-0}{h} = h\\sin(1/h) \\to 0 \\implies f_3\'(0)=0$. For $x\\neq 0$, $f_3\'(x) = 2x\\sin(1/x) - \\cos(1/x)$, which oscillates as $x\\to 0$! Classic true analysis theorem!' },
        { id: 'D', text: 'All three functions $f_1, f_2, f_3$ are differentiable everywhere on $\\mathbb{R}$.', whyTrueOrFalse: 'Away from $0$ all three are smooth formulas, and at $0$ all three have first derivative $0$. True!' },
      ],
      correctOptions: ['A', 'C', 'D'],
      triggerHint: 'Write down the first derivatives $f_1\'(x) = 2|x|$ and $f_2\'(x) = 2\\,\\text{ReLU}(x)$ — noticing the kinks in those derivatives will immediately tell you about their second derivatives at $0$!',
      intuitiveSolution: [
        '1. $f_1\'(x) = 2|x|$ and $f_2\'(x) = 2\\,\\text{ReLU}(x)$: both exist everywhere (confirming **A** and **D**), while both have a corner at $x=0$ so neither $f_1\'\'(0)$ nor $f_2\'\'(0)$ exists (**B** is False!).',
        '2. $f_3\'(0) = \\lim_{h\\to 0} h\\sin(1/h) = 0$, whereas for $x \\neq 0$, $f_3\'(x) = 2x\\sin(1/x) - \\cos(1/x)$ has no limit as $x \\to 0$ (**C** is True!).',
      ],
      directShortcutUsed: '$|x|^p$ smoothness count ($p=2$ gives $C^1$ NOT $C^2$) + $x^2\\sin(1/x)$ non-$C^1$ differentiable classic.',
    },
  ],
}

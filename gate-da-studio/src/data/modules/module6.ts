import type { ChapterData } from '../../types/curriculum'

export const MODULE_6_CHAPTERS: ChapterData[] = [
  // =========================================================================
  // CHAPTER 1: Vector Spaces, Norms & Subspaces
  // =========================================================================
  {
    id: 'la1-ch1',
    number: 1,
    title: 'Vector Spaces, Norms & Subspaces',
    shortTitle: 'Spaces, Norms & Subspaces',
    estimatedHours: 3.0,
    dayLabel: 'Week 3 · Day 15',
    tagline:
      'Welcome to Linear Algebra from the ground up! Together we will picture vector spaces as arrows and flat sheets passing through the origin, sharpen your 3-second Subspace Radar, compare $L_1 / L_2 / L_\\infty$ norms with Cauchy-Schwarz, and see why slicing a centered sphere with a subspace is effortless.',
    syllabusMapping: [
      'Vector spaces and subspaces',
      'Vector norms ($L_1, L_2, L_\\infty$) and inner products',
      'Linear combinations, span, and subspace geometry in $\\mathbb{R}^n$',
    ],
    whatIsImportant: [
      '3-second Subspace Check: passes through origin ($0 \\in S$), closed under addition, closed under scaling with ALL real numbers (including negatives!)',
      'Every $k$-dimensional subspace of $\\mathbb{R}^n$ passes through $0$ — slicing a centered ball $\\{x : x^T x \\le R^2\\}$ always yields a full $k$-ball of radius $R$ (GATE DA 2026 Q.22)',
      'Norm hierarchy $\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1 \\le \\sqrt{n}\\|x\\|_2$ & Cauchy-Schwarz $|u^T v| \\le \\|u\\|_2 \\|v\\|_2$',
      'Span as all reachable combinations $\\sum c_i v_i$ and subspace intersections ($U \\cap W$ is always a subspace; $U \\cup W$ usually is NOT)',
    ],
    whatIsNotImportant: [
      'Verifying all 8 abstract vector space axioms over finite fields $\\mathbb{Z}_p$ or exotic function spaces',
      'Infinite-dimensional Hilbert/Banach space completeness proofs — 0 marks in GATE DA',
    ],
    inboundStream: 'Requires only 2D/3D coordinate geometry, dot products, and basic inequalities.',
    outboundStream: [
      'Ch.2 Linear Independence, Basis, Dimension & Four Fundamental Subspaces',
      'Ch.3 Column Space Solvability ($b \\in C(A)$) & Gaussian Elimination',
      'Module 14 ML: Ridge ($\\|w\\|_2^2$) vs LASSO ($\\|w\\|_1$), $L_1$/$L_2$ Clustering, PCA Subspace & SVM Normal',
    ],
    glossary: [
      {
        term: 'Vector Space',
        symbol: '$V \\text{ over } \\mathbb{R}$',
        plainEnglish:
          'Think of a vector space as a playground of arrows (or lists of numbers) where you can freely add any two vectors or stretch/flip any vector by a real scalar and never leave the playground.',
        tinyExample: '$\\mathbb{R}^3$ (all 3-entry column vectors $[x, y, z]^T$) is the classic 3D vector space.',
      },
      {
        term: 'Subspace',
        symbol: '$W \\le V$',
        plainEnglish:
          'In plain words, a subspace is a smaller flat sheet (a line, plane, hyperplane, or just $\\{0\\}$) living inside a vector space that passes right through the origin and stays closed under adding and scaling.',
        tinyExample: 'The plane $x + y - z = 0$ passes through $(0,0,0)$ and is a subspace of $\\mathbb{R}^3$.',
      },
      {
        term: 'Affine Space (Shifted Plane)',
        symbol: '$x_0 + W$',
        plainEnglish:
          'An affine space is what you get when you take a subspace and slide it away from the origin by a non-zero offset $x_0$; because it misses $0$, it is NOT a subspace.',
        tinyExample: 'The shifted plane $x + y - z = 2$ misses $(0,0,0)$, so it is affine, not a subspace.',
      },
      {
        term: 'Linear Combination',
        symbol: '$\\sum_{i=1}^k c_i v_i$',
        plainEnglish:
          'A linear combination is simply a recipe that mixes vectors $v_1, \\dots, v_k$ by scaling each one by any real weight $c_i$ (positive, negative, or zero) and adding them up.',
        tinyExample: '$2[1, 0]^T - 3[0, 1]^T = [2, -3]^T$ is a linear combination of the coordinate axes.',
      },
      {
        term: 'Span',
        symbol: '$\\text{span}(v_1, \\dots, v_k)$',
        plainEnglish:
          'Think of the span as the complete map of every destination you can possibly reach by taking all linear combinations of the starting vectors $v_1, \\dots, v_k$.',
        tinyExample: '$\\text{span}([1,0,0]^T, [0,1,0]^T)$ is the entire $xy$-plane in $\\mathbb{R}^3$.',
      },
      {
        term: 'Subspace Intersection & Union',
        symbol: '$U \\cap W,\\; U \\cup W$',
        plainEnglish:
          'The overlap $U \\cap W$ of two subspaces is always a valid subspace, whereas gluing them together into a union $U \\cup W$ breaks addition unless one sits completely inside the other.',
        tinyExample: 'The $x$-axis and $y$-axis intersect at $\\{(0,0)\\}$ (a subspace), but their union misses $(1,0)+(0,1)=(1,1)$.',
      },
      {
        term: 'Inner Product (Dot Product)',
        symbol: '$u^T v = \\sum_{i=1}^n u_i v_i$',
        plainEnglish:
          'Multiply matching coordinates of two vectors and add them up — this single number measures how much two arrows point in the same direction, and equals $0$ when they meet at $90^\\circ$.',
        tinyExample: 'For $u = [1, 2]^T$ and $v = [-2, 1]^T$, $u^T v = (1)(-2) + (2)(1) = 0$ (perpendicular).',
      },
      {
        term: 'Vector Norm ($L_1, L_2, L_\\infty$)',
        symbol: '$\\|x\\|_p = \\left(\\sum |x_i|^p\\right)^{1/p}$',
        plainEnglish:
          'A norm is a rule for measuring how long a vector is: $L_1$ walks city blocks, $L_2$ flies straight like a drone, and $L_\\infty$ reads only the single biggest coordinate.',
        tinyExample: 'For $v = [3, -4]^T$, $\\|v\\|_1 = 7$, $\\|v\\|_2 = 5$, and $\\|v\\|_\\infty = 4$.',
      },
      {
        term: 'Cauchy-Schwarz Inequality',
        symbol: '$|u^T v| \\le \\|u\\|_2 \\|v\\|_2$',
        plainEnglish:
          'This golden bound tells you that a dot product can never exceed the product of the two vectors’ lengths, hitting its peak only when both arrows point along the exact same line.',
        tinyExample: 'Maximizing $[3, 4]^T x$ on $\\|x\\|_2 \\le 2$ gives $2 \\times 5 = 10$ right along $[3, 4]^T$.',
      },
      {
        term: 'Triangle Inequality',
        symbol: '$\\|x + y\\| \\le \\|x\\| + \\|y\\|$',
        plainEnglish:
          'Just like walking directly across a triangle is never longer than walking along two sides, every true norm guarantees that the length of a sum never exceeds the sum of the lengths.',
        tinyExample: '$\\|[3,0]^T + [0,4]^T\\|_2 = 5 \\le 3 + 4 = 7$ (whereas squared length $\\|\\cdot\\|_2^2$ fails this!).',
      },
      {
        term: 'Centered Euclidean Ball',
        symbol: '$B_n(0, R) = \\{x : x^T x \\le R^2\\}$',
        plainEnglish:
          'Think of this as a solid sphere of radius $R$ centered at the origin; because every subspace passes straight through $0$, slicing this ball with any $k$-D subspace always cuts a full radius-$R$ cross-section.',
        tinyExample: 'Slicing $\\{x \\in \\mathbb{R}^3 : x^T x \\le 16\\}$ ($R=4$) with any 2D subspace gives a disk of area $16\\pi$.',
      },
    ],
    generatorId: 'rank-nullity-gen',
    concepts: [
      {
        id: 'm6-c1-1',
        title: 'Vector Spaces & Subspaces: The Origin-Anchored Flat Sheet',
        subtitle: 'Why a plane through $(0,0,0)$ is a subspace while a shifted plane or first quadrant fails',
        priority: 'core-pillar',
        buildsOn: '2D/3D coordinates and scaling arrows',
        whyStudy:
          'In Data Science and Machine Learning, every dataset of $d$ numerical features (say age, income, and credit score) represents each person as a point or arrow inside $\\mathbb{R}^d$ (read "R-d", the space of all lists of $d$ real numbers). When we run dimensionality reduction like **PCA**, compress images, or solve a linear system $Ax = 0$, we need a smaller flat world living inside $\\mathbb{R}^d$ where adding two data directions or rescaling a feature vector never kicks us out of the model. That self-contained flat world is a **subspace**. Mastering the 3-second subspace test also prevents you from falling for classic GATE DA MSQ traps (like **GATE DA 2024 Q.47**) where shifted planes or positive quadrants masquerade as subspaces.',
        groundRules: [
          '**The Origin-Anchor Rule ($\\mathbf{0} \\in W$):** Every subspace $W$ MUST contain the zero vector $\\mathbf{0}$ (where $\\in$ means "belongs to"). Why? Because scaling ANY vector $u$ in $W$ by the real number $0$ produces $0 \\cdot u = \\mathbf{0}$ — so if a flat plane is shifted away from the origin (like $x + y - z = 2$), it immediately fails to be a subspace.',
          '**Closed Under Vector Addition ($u + v \\in W$):** Whenever you pick two arrows $u$ and $v$ lying inside $W$ and place them tip-to-tail, their sum $u + v$ must still land inside $W$. This is why gluing two separate lines together (their union $U \\cup W$) breaks closure: adding a vector from the $x$-axis and one from the $y$-axis shoots diagonally off both axes!',
          '**Closed Under ALL Real Scaling ($c u \\in W$ for every $c \\in \\mathbb{R}$):** You must be able to stretch, shrink, AND flip any vector $u \\in W$ backward by negative numbers like $c = -1$ without leaving $W$. Any restriction like $x \\ge 0$ or squared weights $\\alpha^2 u$ traps you on one side and breaks immediately when multiplied by $-1$.',
          '**Homogeneous Equations & Spans Are Always Safe Subspaces:** Any set defined by homogeneous linear equations $Ax = \\mathbf{0}$ (zeros on the right-hand side, no constant shift) or by taking all real linear combinations $\\alpha u + \\beta v$ automatically obeys all three rules — zero extra checking needed!',
        ],
        toyExample: {
          title: 'Two Tilted Planes in $\\mathbb{R}^3$: One Anchored at Origin, One Floating',
          scenario:
            'Compare two flat planes in $\\mathbb{R}^3$ (ordinary 3D space of triples $(x, y, z)$): $P_1 = \\{(x,y,z) : x + y - z = 0\\}$ and $P_2 = \\{(x,y,z) : x + y - z = 2\\}$. Suppose a drone must stay inside the allowed set whenever two moves are added together or any move is scaled by a real number $c \\in \\mathbb{R}$.',
          walkthroughSteps: [
            '1. **Check the Origin $(0,0,0)$:** Plug $(0,0,0)$ into $P_1$: $0+0-0=0$ (inside!). Plug $(0,0,0)$ into $P_2$: $0+0-0=0 \\neq 2$ (the origin is missing — $P_2$ fails on step 1!).',
            '2. **Add Two Vectors in $P_1$ vs $P_2$:** In $P_1$, take $u=(1,1,2)$ and $v=(2,0,2)$. Their sum $u+v=(3,1,4)$ satisfies $3+1-4=0$, staying right inside $P_1$. In $P_2$, take $u=(1,1,0)$ and $v=(2,0,0)$; their sum $(3,1,0)$ gives $3+1-0=4 \\neq 2$, kicking the drone off $P_2$!',
            '3. **Scale by $-1$ (Flip Direction):** In $P_1$, $-u = (-1,-1,-2)$ still satisfies $(-1)+(-1)-(-2)=0$. What if we restricted $P_1$ to only $x \\ge 0$? Then $u=(1,1,2)$ is allowed, but $(-1)u=(-1,-1,-2)$ has $x = -1 < 0$ and escapes!',
          ],
          ahaMoment:
            'Picture a **subspace** simply as a flat sheet (a line, plane, hyperplane, or just the single point $\\{\\mathbf{0}\\}$) that is **pinned directly to the origin** and stretches infinitely in both the $+$ and $-$ directions.',
        },
        theoremAndFormula: {
          statement:
            'A non-empty subset $W \\subseteq V$ (where $\\subseteq$ means "contained inside") of a vector space $V$ over the real numbers $\\mathbb{R}$ is a **subspace** if and only if ($\\iff$) it is closed under linear combinations: for all $u, v \\in W$ and all real scalars $\\alpha, \\beta \\in \\mathbb{R}$, $\\alpha u + \\beta v \\in W$ (equivalently: $\\mathbf{0} \\in W$, $u+v \\in W$, and $cu \\in W$ for all $c \\in \\mathbb{R}$).',
          formulaLatex:
            'W \\le V \\iff W \\neq \\emptyset \\;\\text{ and }\\; \\alpha u + \\beta v \\in W \\quad \\forall\\, u,v \\in W,\\; \\forall\\, \\alpha,\\beta \\in \\mathbb{R}',
          plainEnglishDecoding:
            'Read the symbols left to right: $W \\le V$ means "$W$ is a subspace of $V$", $\\neq \\emptyset$ means "not empty", and $\\forall$ means "for every". Do not waste exam time checking all 8 abstract axioms! Just walk through our friendly **3-bullet checklist**: (1) Does $\\mathbf{0}$ live inside $W$? (2) If you add two members $u, v \\in W$, do you stay inside $W$? (3) If you stretch or flip a member by any real $c$ (always test $c = -1$ and $c = \\frac{1}{2}$!), do you still stay inside $W$?',
          workedMiniExamples: [
            {
              prompt:
                'Is $S = \\{(x_1, x_2, x_3)^T \\in \\mathbb{R}^3 : 2x_1 - x_2 + 5x_3 = 0\\}$ a subspace of $\\mathbb{R}^3$? (Here the superscript $T$ means transpose, turning a row list into a vertical column vector.)',
              solution:
                'Yes! Rewrite the rule as a homogeneous matrix equation $Ax = 0$ with $A = [2,\\;-1,\\;5]$. Check our 3 rules: $(0,0,0)^T$ gives $0 = 0$, and for any two solutions $u, v$ and scalars $\\alpha, \\beta$, $A(\\alpha u + \\beta v) = \\alpha(Au) + \\beta(Av) = 0 + 0 = 0$.',
            },
            {
              prompt:
                'Let $u = (1,0,0)^T, v = (0,1,0)^T$. Is $S = \\{\\alpha^2 u + \\beta^2 v : \\alpha, \\beta \\in \\mathbb{R}\\}$ a subspace of $\\mathbb{R}^3$?',
              solution:
                'No! Because squares of real numbers are always non-negative ($\\alpha^2 \\ge 0, \\beta^2 \\ge 0$), $S$ only covers the first quadrant $\\{(x,y,0) : x \\ge 0, y \\ge 0\\}$. Taking $u = (1,0,0)^T \\in S$ and multiplying by $c = -1$ gives $(-1,0,0)^T \\notin S$ (where $\\notin$ means "does not belong to").',
            },
          ],
        },
        sandboxId: 'projection-eigen-lab',
        msqTraps: [
          {
            myth: 'If a set contains $0$ and is closed under addition, it must be a subspace.',
            reality:
              'It can still fail negative or fractional scalar multiplication! Positive cones ($x \\ge 0$) and integer lattices ($\\mathbb{Z}^n$) contain $0$ and are closed under $+$, yet are NOT subspaces over $\\mathbb{R}$.',
            counterExample: '$S = \\{(x,y) \\in \\mathbb{R}^2 : x \\ge 0, y \\ge 0\\}$ fails $c = -1$.',
          },
          {
            myth: 'The union $U \\cup W$ of two subspaces is always a subspace.',
            reality:
              'The intersection $U \\cap W$ is ALWAYS a subspace, but $U \\cup W$ is a subspace ONLY when one subspace is completely contained in the other ($U \\subseteq W$ or $W \\subseteq U$).',
            counterExample:
              '$U = x\\text{-axis}, W = y\\text{-axis}$ in $\\mathbb{R}^2$: $(1,0),(0,1) \\in U \\cup W$, yet $(1,0)+(0,1)=(1,1) \\notin U \\cup W$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'PCA Low-Dimensional Subspace',
            whyItMatters:
              'After centering data at the mean, PCA projects $d$-dimensional data points onto an optimal $k$-dimensional linear subspace passing through the origin.',
            pyqProof: 'GATE DA 2025 · Q.60 & 2026 · Q.11',
          },
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'SVM Hyperplane Normal',
            whyItMatters:
              'An SVM decision boundary $w^T x + b = 0$ is an affine shift of the $(d-1)$-dimensional subspace $w^T x = 0$ orthogonal to normal vector $w$.',
            pyqProof: 'GATE DA 2024 · Q.17 & 2025 · Q.53',
          },
        ],
      },
      {
        id: 'm6-c1-2',
        title: 'Vector Norms ($L_1, L_2, L_\\infty$), Inner Products & Cauchy-Schwarz',
        subtitle: 'Measuring vector lengths, angles, and ML regularization penalties',
        priority: 'high-yield',
        buildsOn: 'Pythagorean length and absolute values',
        whyStudy:
          'How does a Machine Learning algorithm know whether two customers are "similar", whether a model’s prediction error is "small", or how heavily to penalize overly large weights? It needs a consistent ruler for **vector length (norm)** and **directional alignment (inner product)**. Choosing between the $L_1$ norm (city-block distance) and $L_2$ norm (straight-line distance) literally decides whether your regression model becomes **LASSO** (driving useless weights to exact zero) or **Ridge** (shrinking all weights smoothly) — directly tested in **GATE DA 2025 Q.53** (SVM margin $\\frac{2}{\\|w\\|_2}$) and **GATE DA 2026 Q.36 & Q.55**.',
        groundRules: [
          '**The Three Axioms of a Valid Ruler (Norm):** A function $\\|x\\|$ is a true mathematical norm ONLY if it satisfies: (1) **Positivity** ($\\|x\\| \\ge 0$, and $= 0$ only for $x = \\mathbf{0}$), (2) **Linear Scaling / Homogeneity** ($\\|c x\\| = |c| \\|x\\|$ — doubling a vector MUST double its length, which is why squared length $\\|x\\|_2^2$ is NOT a norm!), and (3) **Triangle Inequality** ($\\|x + y\\| \\le \\|x\\| + \\|y\\|$ — walking direct is never longer than taking a detour).',
          '**Dot Product Encodes Both Length and Angle ($u^T v$):** Writing $u^T v = \\sum_{i=1}^n u_i v_i$ (transpose of column $u$ times column $v$) gives two superpowers at once: taking a vector’s dot product with itself gives squared straight-line length ($x^T x = \\|x\\|_2^2$), and comparing two different vectors gives $u^T v = \\|u\\|_2 \\|v\\|_2 \\cos\\theta$, which vanishes ($= 0$) exactly when they meet at $90^\\circ$.',
          '**Cauchy-Schwarz Is the Universal Speed Limit on Alignment:** Because $|\\cos\\theta| \\le 1$ always, the magnitude of a dot product $|u^T v|$ can NEVER beat $\\|u\\|_2 \\|v\\|_2$. Equality happens ONLY when the two vectors point along the exact same line ($u = cv$).',
          '**The Fixed Norm Ladder ($\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1 \\le \\sqrt{n}\\|x\\|_2$):** For every vector $x \\in \\mathbb{R}^n$, the max coordinate ($L_\\infty$) is always the smallest ruler, straight-line Euclidean length ($L_2$) sits in the middle, and the city-block sum ($L_1$) is the largest.',
        ],
        toyExample: {
          title: 'Three Ways to Measure Distance to $[3, -4]^T$',
          scenario:
            'Suppose a delivery robot moves from the origin $(0,0)$ to $(3,-4)$, written as column vector $v = [3, -4]^T$ (the $T$ stands for transpose, flipping a horizontal row into a vertical column). How far did it travel? A street-grid taxi, a flying drone, and a dual-axis gantry crane each give a different number.',
          walkthroughSteps: [
            '1. **Taxi ($L_1$ Manhattan norm, $\\|v\\|_1$):** Must walk east $3$ blocks and south $4$ blocks: $\\|v\\|_1 = |3| + |-4| = 7$.',
            '2. **Drone ($L_2$ Euclidean norm, $\\|v\\|_2$):** Flies straight across the hypotenuse: $\\|v\\|_2 = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.',
            '3. **Gantry Crane ($L_\\infty$ Max norm, $\\|v\\|_\\infty$):** Moves $x$ and $y$ motors simultaneously, so time depends only on the slower axis: $\\|v\\|_\\infty = \\max(|3|, |-4|) = 4$.',
          ],
          ahaMoment:
            'Notice how neatly the three rulers always line up for any vector $x \\in \\mathbb{R}^n$: $\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1$ ($4 \\le 5 \\le 7$ here!). Geometrically, the $L_1$ unit "circle" is a diamond with sharp corners sitting right on the axes (which is why LASSO produces sparse zeros!), while $L_2$ is a smooth round circle.',
        },
        theoremAndFormula: {
          statement:
            'For $x, y \\in \\mathbb{R}^n$, the $p$-norm ($p \\ge 1$) is $\\|x\\|_p = (\\sum_{i=1}^n |x_i|^p)^{1/p}$. A valid norm satisfies positivity ($\\|x\\| \\ge 0$, $=0 \\iff x=\\mathbf{0}$), absolute homogeneity ($\\|cx\\| = |c|\\|x\\|$), and the triangle inequality ($\\|x+y\\| \\le \\|x\\| + \\|y\\|$). The Euclidean inner product $u^T v = \\sum_{i=1}^n u_i v_i = \\|u\\|_2 \\|v\\|_2 \\cos\\theta$ obeys the **Cauchy-Schwarz inequality**.',
          formulaLatex:
            '|u^T v| \\le \\|u\\|_2 \\|v\\|_2 \\qquad \\text{and} \\qquad \\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1 \\le \\sqrt{n}\\|x\\|_2',
          plainEnglishDecoding:
            'Think of Cauchy-Schwarz as a simple speed limit on dot products: $|u^T v|$ can never exceed the product of the two lengths $\\|u\\|_2$ and $\\|v\\|_2$, and it hits that ceiling **only when $u$ and $v$ lie on the exact same line** ($u = cv$). Also keep in your pocket that squared Euclidean length is just the dot product with itself: $\\|x\\|_2^2 = x^T x$.',
          workedMiniExamples: [
            {
              prompt: 'For $w = [-3, 4]^T$ and $x = [1, 2]^T$, compute $w^T x$ and $0.20\\|w\\|_2^2$.',
              solution:
                'Multiply matching entries for the dot product: $w^T x = (-3)(1) + (4)(2) = -3 + 8 = 5$. For squared Euclidean norm, drop the square root: $\\|w\\|_2^2 = (-3)^2 + 4^2 = 9 + 16 = 25$, so $0.20\\|w\\|_2^2 = 5.00$ (this exact norm computation drives Ridge regularized loss in GATE DA 2026 Q.55!).',
            },
            {
              prompt: 'Find the maximum value of $f(x) = 2x_1 - x_2 + 2x_3$ subject to $\\|x\\|_2 \\le 5$.',
              solution:
                'Rewrite the linear score as a dot product $f(x) = v^T x$ with $v = [2,-1,2]^T$. Compute $\\|v\\|_2 = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$. By Cauchy-Schwarz, $v^T x \\le \\|v\\|_2 \\|x\\|_2 = 3 \\times 5 = 15$, attained when $x$ points along $v$ with length $5$: $x = \\frac{5}{3}[2,-1,2]^T$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Squared Euclidean norm $\\|x\\|_2^2$ is also a mathematical norm.',
            reality:
              'It fails both homogeneity ($\\|2x\\|_2^2 = 4\\|x\\|_2^2 \\neq 2\\|x\\|_2^2$) and the triangle inequality! Similarly, $\\|x\\|_0$ (count of non-zeros) fails homogeneity and is NOT a norm.',
            counterExample: '$\\|1 + 1\\|_2^2 = 4 > \\|1\\|_2^2 + \\|1\\|_2^2 = 2$.',
          },
          {
            myth: 'For $p = 1/2$, $\\|x\\|_{1/2} = (\\sum |x_i|^{1/2})^2$ is a valid norm.',
            reality: 'Any $0 < p < 1$ violates the triangle inequality; norms require $p \\ge 1$.',
            counterExample: '$u=(1,0), v=(0,1)$: $\\|u+v\\|_{1/2} = (1+1)^2 = 4 > \\|u\\|_{1/2} + \\|v\\|_{1/2} = 1+1 = 2$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Ridge ($L_2^2$) vs LASSO ($L_1$) & Manhattan Clustering',
            whyItMatters:
              'Ridge adds $\\lambda \\|w\\|_2^2$ to stabilize ill-conditioned normal equations, while Manhattan $L_1$ distances drive hierarchical clustering merges.',
            pyqProof: 'GATE DA 2026 · Q.36 ($L_1$) & Q.55 (Ridge)',
          },
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Hard-Margin SVM Geometric Width',
            whyItMatters:
              'The distance between the $+1$ and $-1$ margin hyperplanes $w^T x + b = \\pm 1$ is $\\frac{2}{\\|w\\|_2}$, turning margin maximization into minimizing $\\|w\\|_2^2$.',
            pyqProof: 'GATE DA 2025 · Q.53',
          },
        ],
      },
      {
        id: 'm6-c1-3',
        title: 'Linear Combinations, Span & Subspace-Ball Intersections',
        subtitle: 'Building spaces from generators and slicing spheres with subspaces',
        priority: 'high-yield',
        buildsOn: 'm6-c1-1 Subspaces and m6-c1-2 Norms',
        whyStudy:
          'When you train a linear regression model $\\hat{y} = w_1 x_1 + w_2 x_2 + \\dots + w_k x_k$, you are mixing your feature columns $x_1, \\dots, x_k$ using weights $w_i$. The **span** tells you the exact universe of all target vectors $\\hat{y}$ your model is capable of reaching — if the true target $y$ lies outside that span, no choice of weights can ever fit it with zero error! Geometrically, understanding how a subspace is built and anchored at $\\mathbf{0}$ also lets you solve sphere-slicing questions like **GATE DA 2026 Q.22** in 10 seconds without a single integral.',
        groundRules: [
          '**Span Means "All Reachable Recipes":** Given starting vectors $v_1, \\dots, v_k$, their **span** ($\\text{span}(v_1, \\dots, v_k)$) is the set of every weighted sum $c_1 v_1 + \\dots + c_k v_k$ where the weights $c_i$ can be ANY real numbers (positive, negative, or zero).',
          '**Matrix-Vector Multiplication $Ax$ IS a Linear Combination of Columns:** If you stack $v_1, \\dots, v_k$ side-by-side as the columns of a matrix $A$, then $Ax$ literally equals $x_1 v_1 + x_2 v_2 + \\dots + x_k v_k$. Therefore, asking "$b \\in \\text{span}(v_1, \\dots, v_k)$?" is 100% identical to asking "Does $Ax = b$ have a solution?"',
          '**Redundant Vectors Never Expand the Span:** If a newly added vector $v_3$ can already be built from $v_1$ and $v_2$, throwing $v_3$ into the list adds zero new reachable destinations — so $3$ vectors in $\\mathbb{R}^3$ do NOT automatically span all of $\\mathbb{R}^3$.',
          '**Centered Ball + Any Subspace = Full-Radius Cross-Section:** A centered Euclidean ball $B_n(0, R) = \\{x \\in \\mathbb{R}^n : x^T x \\le R^2\\}$ is perfectly symmetric around $\\mathbf{0}$, and EVERY subspace passes straight through $\\mathbf{0}$. Slicing through the exact center of a radius-$R$ sphere with any $k$-dimensional subspace ALWAYS cuts a full radius-$R$ $k$-dimensional ball — its tilt angle never changes the size!',
        ],
        toyExample: {
          title: 'Slicing an Orange Centered at the Origin',
          scenario:
            'Imagine a solid spherical orange $S_1 = \\{x \\in \\mathbb{R}^3 : x^T x \\le 16\\}$ (since $x^T x = x_1^2 + x_2^2 + x_3^2 = \\|x\\|_2^2$, this is a ball of radius $R = \\sqrt{16} = 4$ centered at $(0,0,0)$). Now slice it with ANY flat plane $S_2$ that is a 2-dimensional subspace of $\\mathbb{R}^3$. What is the area of the circular slice?',
          walkthroughSteps: [
            '1. Because $S_2$ is a **2D subspace** of $\\mathbb{R}^3$, Ground Rule 1 guarantees it MUST contain $(0,0,0)$ — the exact center of the sphere!',
            '2. Any flat plane cutting straight through the center of a radius-$4$ sphere produces a **great circle** of the full radius $R = 4$ (zero offset distance $d$ from the center!).',
            '3. Therefore $S_1 \\cap S_2$ (where $\\cap$ means intersection / overlap) is a flat 2D disk of radius $4$, with area $\\pi (4)^2 = 16\\pi$ — completely independent of how $S_2$ is tilted!',
          ],
          ahaMoment:
            'Look at how little information you actually needed: you never even saw the equation of $S_2$! Simply hearing that $S_2$ is a 2D **subspace** automatically guarantees $\\mathbf{0} \\in S_2$, which forces the slice right through the center of the ball (GATE DA 2026 Q.22).',
        },
        theoremAndFormula: {
          statement:
            'The **span** of vectors $\\{v_1, \\dots, v_k\\} \\subseteq V$ is the set of all linear combinations $\\text{span}(v_1, \\dots, v_k) = \\{\\sum_{i=1}^k c_i v_i : c_i \\in \\mathbb{R}\\}$. It is always a subspace of $V$ (the smallest subspace containing every $v_i$). Intersecting a centered $n$-ball $\\{x \\in \\mathbb{R}^n : x^T x \\le R^2\\}$ with any $k$-dimensional subspace yields a $k$-dimensional ball of full radius $R$.',
          formulaLatex:
            '\\text{span}(v_1, \\dots, v_k) = \\left\\{ \\sum_{i=1}^k c_i v_i \\;:\\; c_i \\in \\mathbb{R} \\right\\}, \\qquad \\text{Area}(B_3(0,R) \\cap S_2) = \\pi R^2',
          plainEnglishDecoding:
            'Think of $\\text{span}(v_1, \\dots, v_k)$ as every single point on the map you can drive to using weighted combinations of the directions $v_1, \\dots, v_k$. Notice something wonderful: asking whether target $b$ belongs to $\\text{span}(v_1,\\dots,v_k)$ is the exact same question as asking whether $Ax = b$ has a solution when we stack those vectors side-by-side as the columns of $A = [v_1 \\dots v_k]$.',
          workedMiniExamples: [
            {
              prompt: 'Does $b = [2, 3, 6]^T$ lie in $\\text{span}([1,0,1]^T, [0,1,1]^T)$?',
              solution:
                'Build a general combination: $c_1[1,0,1]^T + c_2[0,1,1]^T = [c_1,\\; c_2,\\; c_1+c_2]^T$. Notice every reachable vector obeys $z = x + y$. For $b = [2,3,6]^T$, $x + y = 2 + 3 = 5 \\neq 6$, so $b \\notin \\text{span}$.',
            },
            {
              prompt:
                'If $S_1 = \\{x \\in \\mathbb{R}^3 : x^T x \\le 25\\}$ and $S_2$ is a 1D subspace of $\\mathbb{R}^3$, what is the length of segment $S_1 \\cap S_2$?',
              solution:
                'Here $R = \\sqrt{25} = 5$. A 1D subspace is a straight line passing through $(0,0,0)$, cutting the radius-$5$ ball from $-5u$ to $+5u$ (where $u$ is a unit direction vector along the line), giving a diameter segment of total length $2R = 10$.',
            },
          ],
        },
        sandboxId: 'projection-eigen-lab',
        msqTraps: [
          {
            myth: 'Three non-zero vectors in $\\mathbb{R}^3$ always span all of $\\mathbb{R}^3$.',
            reality:
              'If the third vector lies in the span of the first two (for example $v_3 = v_1 + v_2$), their span is still only a 2D plane (or 1D line if all three are parallel).',
            counterExample: '$\\text{span}([1,0,0]^T, [0,1,0]^T, [1,1,0]^T)$ is only the $xy$-plane.',
          },
          {
            myth: 'Any plane in $\\mathbb{R}^3$ intersecting $x^T x \\le 16$ cuts a disk of area $16\\pi$.',
            reality:
              'Only a **2D subspace** (passing through $(0,0,0)$) gives radius $4$. An affine plane at distance $d \\in (0,4)$ from the origin cuts a smaller disk of radius $\\sqrt{16-d^2}$.',
            counterExample: 'The affine plane $z = 3$ cuts $x^2+y^2 \\le 16-9=7$, area $7\\pi < 16\\pi$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'OLS Prediction Lives in $\\text{span}(\\text{columns of } X)$',
            whyItMatters:
              'Linear regression predictions $\\hat{y} = X\\hat{\\beta}$ can NEVER leave the column span $C(X)$; OLS finds the closest point in that subspace to $y$.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm6-c1-p1',
        title: 'The "Fake Subspace" Stress-Test (Positivity, Squares, Unions & Affine Shifts)',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.47'],
        problemStatement:
          'Given four subsets of $\\mathbb{R}^3$ — such as $\\{\\alpha u + \\beta v\\}$, $\\{\\alpha^2 u + \\beta^2 v\\}$, homogeneous planes $a^T x = 0$, and shifted planes $a^T x = 1$ — identify which ones are subspaces of $\\mathbb{R}^3$.',
        triggerCue:
          'Prompt asks "Which of the following subset(s) is/are a subspace of $\\mathbb{R}^n$?" in an MSQ.',
        bruteForceTrap:
          'Trying to verify all 8 vector space axioms (commutativity, associativity, distributivity, etc.) from scratch—slow and error-prone.',
        mentalShift:
          'Subsets of $\\mathbb{R}^n$ inherit the 8 field axioms automatically! You only need a 3-point stress test: (1) plug in $0$, (2) negate a member ($c = -1$), (3) add two simple members.',
        steps: [
          {
            label: 'Step 1 — Origin Check ($0 \\in S$?)',
            detail:
              'Plug $(0,0,0)$ into the defining equation. Shifted planes like $x_1 + 2x_2 - x_3 = 1$ or non-zero-intercept curves die immediately because $0 \\neq 1$.',
          },
          {
            label: 'Step 2 — Negative Scalar Check ($c = -1$)',
            detail:
              'Look for squared coefficients ($\\alpha^2 u + \\beta^2 v$), inequalities ($x_1 \\ge 0$), or absolute values ($|x_1| = |x_2|$). Try $c = -1$: if $u$ is in $S$ via $\\alpha=1, \\beta=0$, can you ever reach $-u$ using $\\alpha^2 \\ge 0$? No!',
          },
          {
            label: 'Step 3 — Addition Check for Unions or Nonlinear Constraints',
            detail:
              'For constraints like $x_1 x_2 = 0$ (union of two planes $x_1=0$ and $x_2=0$), pick $(1,0,0)$ and $(0,1,0)$: both satisfy $x_1 x_2 = 0$, but their sum $(1,1,0)$ gives $1\\cdot 1 = 1 \\neq 0$.',
          },
          {
            label: 'Step 4 — Confirm Valid Homogeneous / Span Forms',
            detail:
              'Any explicit linear span $\\{\\alpha u + \\beta v : \\alpha,\\beta \\in \\mathbb{R}\\}$ or homogeneous system $\\{x : Ax = 0\\}$ is ALWAYS a subspace.',
          },
        ],
        lockInTakeaway:
          'First check $0 \\in S$, then hit it with $c = -1$ (kills $\\alpha^2, x\\ge 0$), then add two boundary vectors (kills $x_1 x_2 = 0$ and unions).',
      },
      {
        id: 'm6-c1-p2',
        title: 'Subspace Meets Centered Ball — Zero-Coordinate Shortcut',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2026 · Q.22'],
        problemStatement:
          'Let $S_1 = \\{x \\in \\mathbb{R}^3 \\mid x^T x \\le 16\\}$ and let $S_2$ be an unspecified 2-dimensional subspace of $\\mathbb{R}^3$. Find the area of $S_1 \\cap S_2$.',
        triggerCue:
          'An unspecified "$k$-dimensional subspace $S_2$" is intersected with a symmetric norm ball $x^T x \\le R^2$.',
        bruteForceTrap:
          'Writing a generic plane $ax + by + cz = 0$, picking an orthonormal basis, and setting up a 2D double integral in polar coordinates.',
        mentalShift:
          'Every subspace is **rotation-invariant in principle**: because $S_2$ contains the origin $0$, rotating $\\mathbb{R}^3$ leaves the sphere $x^T x \\le R^2$ completely unchanged while turning $S_2$ into the standard $xy$-plane!',
        steps: [
          {
            label: 'Step 1 — Verify Center Alignment',
            detail:
              '$S_1$ is the solid ball $\\|x\\|_2 \\le 4$ centered at $0$. Because $S_2$ is a subspace, $0 \\in S_2$.',
          },
          {
            label: 'Step 2 — Rotate to Canonical Axes',
            detail:
              'By rotational symmetry of $x^T x \\le 16$, we can assume without loss of generality that $S_2 = \\{(x_1, x_2, 0)^T : x_1, x_2 \\in \\mathbb{R}\\}$.',
          },
          {
            label: 'Step 3 — Read Off the Intersection',
            detail:
              '$S_1 \\cap S_2 = \\{(x_1, x_2, 0)^T : x_1^2 + x_2^2 \\le 16\\}$, a flat disk of radius $R = 4$ with area $\\pi R^2 = 16\\pi$.',
          },
        ],
        lockInTakeaway:
          'Whenever a $k$-dimensional subspace slices a centered sphere $\\|x\\|_2 \\le R$, rotate coordinates in your head so the subspace is $x_1\\text{–}x_k$: you always get a full $k$-ball of radius $R$.',
      },
    ],
    arsenalCards: [
      {
        id: 'm6-c1-a1',
        badge: 'SUBSPACE',
        whenYouSpot: 'Subset $W \\subseteq \\mathbb{R}^n$ tested for subspace validity',
        directWeaponLatex: '0 \\in W,\\; u+v \\in W,\\; cu \\in W \\;(\\forall c \\in \\mathbb{R})',
        instantRule:
          'Homogeneous linear equations ($Ax=0$) and full spans ($\\alpha u + \\beta v$) are always subspaces; affine shifts ($=1$), unions ($x_1 x_2 = 0$), and non-negative scalars ($\\alpha^2$) fail.',
        tenSecondExample:
          '$\\{x \\in \\mathbb{R}^3 : x_1 - 3x_3 = 0\\}$ passes $(0,0,0)$ and is linear $\\implies$ Subspace.',
        oneFatalTrap:
          'Forgetting $c < 0$ when checking $\\{\\alpha^2 u + \\beta^2 v : \\alpha,\\beta \\in \\mathbb{R}\\}$ — it contains $0$ and is closed under $+$, yet fails $-1$!',
      },
      {
        id: 'm6-c1-a2',
        badge: 'NORMS',
        whenYouSpot: '$L_1, L_2, L_\\infty$ norms or maximizing $v^T x$ on $\\|x\\|_2 \\le R$',
        directWeaponLatex: '\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1 \\le \\sqrt{n}\\|x\\|_2, \\qquad \\max_{\\|x\\|_2 \\le R} v^T x = R\\|v\\|_2',
        instantRule:
          'Dot products peak when $x$ points in the exact direction of $v$: $x^* = R\\frac{v}{\\|v\\|_2}$.',
        tenSecondExample:
          'Max of $3x_1 - 4x_2$ on $x_1^2 + x_2^2 \\le 4$ ($R=2$) is $2 \\times \\sqrt{3^2+(-4)^2} = 10$.',
        oneFatalTrap:
          'Treating $\\|x\\|_2^2$ or $\\|x\\|_0$ as norms — neither obeys homogeneity $\\|cx\\| = |c|\\|x\\|$.',
      },
      {
        id: 'm6-c1-a3',
        badge: 'GEOMETRY',
        whenYouSpot: 'Intersection $S_1 \\cap S_2$ of sphere $x^T x \\le R^2$ and 2D subspace $S_2$',
        directWeaponLatex: '\\text{Area}(B_n(0,R) \\cap S_2) = \\pi R^2',
        instantRule:
          'A subspace ALWAYS contains the origin, so it cuts right through the sphere’s center as a great disk of full radius $R$.',
        tenSecondExample:
          '$x^T x \\le 16$ ($R=4$) sliced by any 2D subspace of $\\mathbb{R}^3$ has area $16\\pi$ (GATE DA 2026 Q.22).',
        oneFatalTrap:
          'Do not confuse a 2D subspace with an affine plane $n^T x = d$ ($d \\neq 0$), whose slice radius shrinks to $\\sqrt{R^2 - d^2}$.',
      },
    ],
    questions: [
      {
        id: 'm6-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'Let $v = [2, -5, 3]^T \\in \\mathbb{R}^3$. Compute the exact value of $\\|v\\|_1 + \\|v\\|_\\infty$.',
        natAnswer: { min: 15, max: 15, exactDisplay: '15' },
        triggerHint: 'Sum absolute entries for $L_1$, take the single largest absolute entry for $L_\\infty$.',
        intuitiveSolution: [
          '$\\|v\\|_1 = |2| + |-5| + |3| = 2 + 5 + 3 = 10$.',
          '$\\|v\\|_\\infty = \\max(|2|, |-5|, |3|) = 5$.',
          'Sum $= 10 + 5 = 15$.',
        ],
        directShortcutUsed: '$\\|v\\|_1 = \\sum |v_i|$ and $\\|v\\|_\\infty = \\max_i |v_i|$.',
      },
      {
        id: 'm6-c1-q2',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #2',
        marks: 1,
        type: 'NAT',
        stem: 'In Ridge regression with weight vector $w = [-3, 4]^T$, the regularization penalty is $\\lambda \\|w\\|_2^2$ with $\\lambda = 0.20$. Compute the value of the penalty term $\\lambda \\|w\\|_2^2$.',
        natAnswer: { min: 5, max: 5, exactDisplay: '5' },
        triggerHint: 'Remember $\\|w\\|_2^2 = w^T w = \\sum w_i^2$ (no square root needed!).',
        intuitiveSolution: [
          '$\\|w\\|_2^2 = (-3)^2 + 4^2 = 9 + 16 = 25$.',
          'Multiply by $\\lambda = 0.20$: $0.20 \\times 25 = 5$.',
        ],
        directShortcutUsed: '$\\|w\\|_2^2 = w_1^2 + w_2^2$.',
      },
      {
        id: 'm6-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.22',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $S_1 = \\{x \\in \\mathbb{R}^3 \\mid x^T x \\le 16\\}$ and let $S_2$ be a $2$-dimensional subspace of $\\mathbb{R}^3$. What is the area of $S_1 \\cap S_2$?',
        options: [
          {
            id: 'A',
            text: '$4\\pi$',
            whyTrueOrFalse: 'False — uses $R=2$ or confuses $R^2$ with $R$. Here $x^T x \\le 16$ means $R = 4$.',
          },
          {
            id: 'B',
            text: '$8\\pi$',
            whyTrueOrFalse: 'False — $2\\pi R = 8\\pi$ is the circumference of the boundary circle, not the area!',
          },
          {
            id: 'C',
            text: '$16\\pi$',
            whyTrueOrFalse:
              'True! Every 2D subspace $S_2$ contains the origin $0$, so it cuts a great disk of full radius $R=4$ through the ball $x^T x \\le 16$, giving area $\\pi R^2 = 16\\pi$.',
          },
          {
            id: 'D',
            text: 'Cannot be determined without knowing the normal vector of $S_2$',
            whyTrueOrFalse:
              'False — by rotational symmetry of $x^T x \\le 16$ around $0$, every 2D subspace gives the exact same great disk.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Every subspace passes through $(0,0,0)$, the exact center of the ball $x^T x \\le 16$.',
        intuitiveSolution: [
          '1. $S_1$ is the solid 3D sphere centered at the origin with radius $R = \\sqrt{16} = 4$.',
          '2. Because $S_2$ is a 2-dimensional subspace of $\\mathbb{R}^3$, $0 \\in S_2$, so $S_2$ is a flat plane passing straight through the sphere’s center.',
          '3. The cross-section of a radius-$4$ sphere through its center is a disk of radius $4$, whose area is $\\pi (4)^2 = 16\\pi$.',
        ],
        directShortcutUsed: 'Subspace contains origin $\\implies$ great-disk slice of area $\\pi R^2$.',
      },
      {
        id: 'm6-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.47 (Concept Match)',
        year: 2024,
        marks: 2,
        type: 'MSQ',
        stem: 'Let $u, v \\in \\mathbb{R}^3$ be two non-zero vectors. Which of the following subsets of $\\mathbb{R}^3$ is/are subspaces of $\\mathbb{R}^3$?',
        options: [
          {
            id: 'A',
            text: '$\\{\\alpha u + \\beta v \\mid \\alpha, \\beta \\in \\mathbb{R}\\}$',
            whyTrueOrFalse:
              'True! This is $\\text{span}(u, v)$, which contains $0$ and is closed under arbitrary additions and real scalar multiplications.',
          },
          {
            id: 'B',
            text: '$\\{\\alpha^2 u + \\beta^2 v \\mid \\alpha, \\beta \\in \\mathbb{R}\\}$',
            whyTrueOrFalse:
              'False! Since $\\alpha^2, \\beta^2 \\ge 0$, for linearly independent $u, v$ this set contains $u$ (at $\\alpha=1,\\beta=0$) but NOT $-u$ (requires $\\alpha^2 = -1$, impossible in $\\mathbb{R}$).',
          },
          {
            id: 'C',
            text: '$\\{(x_1, x_2, x_3)^T \\in \\mathbb{R}^3 \\mid x_1 + 2x_2 - x_3 = 0\\}$',
            whyTrueOrFalse:
              'True! The solution set of any homogeneous linear equation $a^T x = 0$ is a subspace (null space of $[1, 2, -1]$).',
          },
          {
            id: 'D',
            text: '$\\{(x_1, x_2, x_3)^T \\in \\mathbb{R}^3 \\mid x_1 + 2x_2 - x_3 = 1\\}$',
            whyTrueOrFalse: 'False! Does not contain the origin $(0,0,0)^T$, since $0 + 0 - 0 \\neq 1$.',
          },
        ],
        correctOptions: ['A', 'C'],
        triggerHint: 'Test $0 \\in S$ and negative scalar multiplication ($c = -1$) on each candidate.',
        intuitiveSolution: [
          '(A) $\\text{span}(u,v)$ is closed under all linear combinations $\\implies$ valid subspace.',
          '(B) $\\alpha^2, \\beta^2 \\ge 0$ traps vectors in the non-negative cone; if $u,v$ are independent (or even if $u=v\\neq 0$), $-u$ cannot be written as $\\alpha^2 u + \\beta^2 v$ unless $v = -k u$ ($k>0$). In general it fails closure under $-1$.',
          '(C) Homogeneous plane through $(0,0,0)$ $\\implies$ valid subspace.',
          '(D) Affine plane missing $(0,0,0)$ $\\implies$ NOT a subspace.',
        ],
        directShortcutUsed: '3-Second Subspace Radar ($0 \\in S$ + closure under negative scalars).',
      },
      {
        id: 'm6-c1-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber Edge-Case Drill',
        marks: 2,
        type: 'MSQ',
        stem: 'Let $U$ and $W$ be non-trivial subspaces of $\\mathbb{R}^3$, and let $x, y \\in \\mathbb{R}^3$. Which of the following statements is/are ALWAYS true?',
        options: [
          {
            id: 'A',
            text: '$U \\cap W$ is a subspace of $\\mathbb{R}^3$.',
            whyTrueOrFalse:
              'True! If $a, b \\in U \\cap W$, then $a,b \\in U \\implies \\alpha a + \\beta b \\in U$ and $a,b \\in W \\implies \\alpha a + \\beta b \\in W$.',
          },
          {
            id: 'B',
            text: '$U \\cup W$ is a subspace of $\\mathbb{R}^3$.',
            whyTrueOrFalse:
              'False! Take $U = \\text{span}(e_1)$ and $W = \\text{span}(e_2)$: $e_1 + e_2 \\notin U \\cup W$.',
          },
          {
            id: 'C',
            text: '$\\|x + y\\|_2^2 \\le \\|x\\|_2^2 + \\|y\\|_2^2$.',
            whyTrueOrFalse:
              'False! Counterexample: $x = y = (1,0,0)^T$ gives $\\|x+y\\|_2^2 = 4 > 1 + 1 = 2$. (Squared norms violate the triangle inequality!)',
          },
          {
            id: 'D',
            text: '$|x^T y| \\le \\|x\\|_1 \\|y\\|_\\infty$.',
            whyTrueOrFalse:
              'True! By Hölder’s inequality (or directly $|\\sum x_i y_i| \\le \\sum |x_i| |y_i| \\le (\\max_j |y_j|) \\sum |x_i| = \\|y\\|_\\infty \\|x\\|_1$).',
          },
        ],
        correctOptions: ['A', 'D'],
        triggerHint: 'Test B with $e_1, e_2$, test C with $x = y$, and bound $|\\sum x_i y_i|$ directly for D.',
        intuitiveSolution: [
          '(A) Intersections of arbitrary subspaces are always subspaces.',
          '(B) Unions fail closure under addition unless one subspace contains the other.',
          '(C) $\\|x+y\\|_2^2 = \\|x\\|_2^2 + \\|y\\|_2^2 + 2x^T y$, which exceeds $\\|x\\|_2^2 + \\|y\\|_2^2$ whenever $x^T y > 0$.',
          '(D) $|x^T y| \\le \\sum_{i=1}^3 |x_i||y_i| \\le (\\max_i |y_i|) \\sum_{i=1}^3 |x_i| = \\|x\\|_1 \\|y\\|_\\infty$.',
        ],
        directShortcutUsed: 'Intersection closure + $x=y$ counterexample for $\\|\\cdot\\|_2^2$ + triangle bound.',
      },
      {
        id: 'm6-c1-q6',
        tier: 'tricky',
        sourceLabel: 'Cauchy-Schwarz Optimization Drill',
        marks: 2,
        type: 'NAT',
        stem: 'Find the maximum possible value of $3x_1 - 4x_2 + 12x_3$ subject to the constraint $x_1^2 + x_2^2 + x_3^2 \\le 4$.',
        natAnswer: { min: 26, max: 26, exactDisplay: '26' },
        triggerHint: 'Rewrite the linear objective as a dot product $v^T x$ and apply Cauchy-Schwarz.',
        intuitiveSolution: [
          '1. Write $3x_1 - 4x_2 + 12x_3 = v^T x$ where $v = [3, -4, 12]^T$.',
          '2. Compute $\\|v\\|_2 = \\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.',
          '3. The constraint $x_1^2 + x_2^2 + x_3^2 \\le 4$ means $\\|x\\|_2 \\le 2$.',
          '4. By Cauchy-Schwarz, $v^T x \\le \\|v\\|_2 \\|x\\|_2 \\le 13 \\times 2 = 26$, achieved at $x = \\frac{2}{13}[3, -4, 12]^T$.',
        ],
        directShortcutUsed: '$\\max_{\\|x\\|_2 \\le R} v^T x = R\\|v\\|_2 = 2 \\times 13 = 26$.',
      },
    ],
  },

  // =========================================================================
  // CHAPTER 2: Linear Independence, Four Fundamental Subspaces & Rank-Nullity
  // =========================================================================
  {
    id: 'la1-ch2',
    number: 2,
    title: 'Linear Independence, Four Fundamental Subspaces & Rank-Nullity',
    shortTitle: 'Rank-Nullity & 4 Subspaces',
    estimatedHours: 3.5,
    dayLabel: 'Week 3 · Day 16',
    tagline:
      'Now let us see what happens inside every matrix! Together we will build clear intuition for basis, dimension, and Gilbert Strang’s Four Fundamental Subspaces — so Rank-Nullity, orthogonal complements, projection idempotency, and Gram matrix invertibility make 2-mark GATE MSQs feel almost effortless.',
    syllabusMapping: [
      'Linear independence, basis, and dimension',
      'Row space, column space, null space, and left null space',
      'Rank-nullity theorem and orthogonal projection matrices',
    ],
    whatIsImportant: [
      'Linear independence $\\iff Ax = 0$ has only $x = 0 \\iff$ Gram matrix $X^T X$ is invertible (GATE DA 2025 Q.38)',
      'Rank-Nullity Theorem: $\\text{rank}(A) + \\text{nullity}(A) = n$ (number of COLUMNS!), with $\\text{row rank} = \\text{column rank}$',
      'Four Fundamental Subspaces & Orthogonal Complements: $C(A^T) \\perp N(A)$ in $\\mathbb{R}^n$ and $C(A) \\perp N(A^T)$ in $\\mathbb{R}^m$',
      'Projection matrices $P$: $P^2 = P$, $P^T = P$, $\\text{rank}(P) = \\text{tr}(P) = \\dim(U)$, $\\text{nullity}(P) = n - \\dim(U)$ (GATE DA 2024 Q.49, 2026 Q.52)',
    ],
    whatIsNotImportant: [
      'Abstract quotient spaces $V/W$ or dual-space isomorphism proofs',
      'Computing bases of infinite-dimensional polynomial/function spaces',
    ],
    inboundStream: 'Builds on Ch.1 Vector Spaces, Norms, Span, and Subspaces.',
    outboundStream: [
      'Ch.3 Linear Systems $Ax = b$, Gaussian Elimination, LU & Rank Inequalities',
      'Module 7 Eigenvalues, Spectral Theorem & SVD (orthonormal bases of all 4 subspaces!)',
      'Module 14 OLS Normal Equations ($X^T X \\hat{\\beta} = X^T y$) & Ridge Invertibility ($X^T X + \\lambda I$)',
    ],
    glossary: [
      {
        term: 'Linear Independence',
        symbol: '$Xc = 0 \\implies c = 0$',
        plainEnglish:
          'A set of vectors is linearly independent when there are zero free-riders — no vector in the group can be recreated by combining the others, so the only way to mix them to zero is setting every weight to $0$.',
        tinyExample: '$[1, 0]^T$ and $[0, 1]^T$ are independent, whereas $[1, 2]^T$ and $[2, 4]^T$ are dependent.',
      },
      {
        term: 'Basis',
        symbol: '$\\mathcal{B} = \\{v_1, \\dots, v_k\\}$',
        plainEnglish:
          'Think of a basis as the leanest possible toolkit of directions for a subspace: it spans the whole space with zero missing directions and zero redundant vectors.',
        tinyExample: '$\\{[1, 0, 0]^T, [0, 1, 0]^T\\}$ is a basis for the $xy$-plane inside $\\mathbb{R}^3$.',
      },
      {
        term: 'Dimension',
        symbol: '$\\dim(V)$',
        plainEnglish:
          'In plain words, dimension simply counts how many vectors live in any basis of the space — or how many independent coordinates you need to pinpoint a location inside it.',
        tinyExample: 'A line through the origin has $\\dim = 1$, a plane has $\\dim = 2$, and $\\{0\\}$ has $\\dim = 0$.',
      },
      {
        term: 'Gram Matrix',
        symbol: '$G = X^T X,\\; G_{ij} = x_i^T x_j$',
        plainEnglish:
          'This square table collects every pairwise dot product among a list of vectors; amazingly, it is invertible if and only if those vectors are linearly independent.',
        tinyExample: 'If $X = [x_1\\; x_2]$ has independent columns, then $v^T(X^T X)v = \\|Xv\\|_2^2 > 0$ for all $v \\neq 0$.',
      },
      {
        term: 'Rank',
        symbol: '$\\text{rank}(A) = r$',
        plainEnglish:
          'Rank tells you the true number of independent directions a matrix carries — it equals the number of pivots after elimination, the dimension of the column space, AND the dimension of the row space.',
        tinyExample: 'For $\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\end{bmatrix}$, Row 2 is $2 \\times$ Row 1, so $\\text{rank} = 1$.',
      },
      {
        term: 'Nullity',
        symbol: '$\\text{nullity}(A) = \\dim N(A)$',
        plainEnglish:
          'Nullity counts how many independent directions a matrix crushes flat to zero — equivalently, the number of free variables when solving $Ax = 0$.',
        tinyExample: 'A $2 \\times 3$ matrix of rank $1$ has $3 - 1 = 2$ free variables, so $\\text{nullity}(A) = 2$.',
      },
      {
        term: 'Rank-Nullity Theorem',
        symbol: '$\\text{rank}(A) + \\text{nullity}(A) = n$',
        plainEnglish:
          'Every column of an $m \\times n$ matrix is either a pivot column (counted by rank) or a free column (counted by nullity), so the two always add up to the total number of columns $n$.',
        tinyExample: 'A $5 \\times 8$ matrix with rank $3$ automatically has $\\text{nullity}(A) = 8 - 3 = 5$.',
      },
      {
        term: 'Column Space & Row Space',
        symbol: '$C(A) \\subseteq \\mathbb{R}^m,\\; C(A^T) \\subseteq \\mathbb{R}^n$',
        plainEnglish:
          'The column space $C(A)$ is all outputs $Ax$ the matrix can possibly produce, while the row space $C(A^T)$ is the active part of the input space that does not get crushed to zero.',
        tinyExample: 'Both $C(A)$ and $C(A^T)$ always have the exact same dimension $r = \\text{rank}(A)$.',
      },
      {
        term: 'Null Space & Left Null Space',
        symbol: '$N(A) = \\{x : Ax=0\\},\\; N(A^T) = \\{y : A^T y = 0\\}$',
        plainEnglish:
          'The null space $N(A)$ holds every input vector that $A$ sends to zero, while the left null space $N(A^T)$ holds every output direction perpendicular to all columns of $A$.',
        tinyExample: 'For $A = [1, 2]$, $N(A) = \\text{span}([-2, 1]^T)$ in $\\mathbb{R}^2$ and $N(A^T) = \\{0\\}$ in $\\mathbb{R}^1$.',
      },
      {
        term: 'Orthogonal Complement',
        symbol: '$U^\\perp = \\{v : u^T v = 0\\;\\forall u \\in U\\}$',
        plainEnglish:
          'Think of $U^\\perp$ as the collection of every arrow sitting at a clean $90^\\circ$ right angle to every vector in subspace $U$; together, $\\dim(U) + \\dim(U^\\perp) = n$.',
        tinyExample: 'In $\\mathbb{R}^3$, the orthogonal complement of the $xy$-plane is the $z$-axis.',
      },
      {
        term: 'Idempotent & Orthogonal Projection Matrix',
        symbol: '$P^2 = P,\\; P^T = P$',
        plainEnglish:
          'An idempotent matrix ($P^2 = P$) drops points onto a flat sheet so doing it twice changes nothing; adding symmetry ($P^T = P$) guarantees the drop happens straight down at $90^\\circ$.',
        tinyExample: '$P = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ drops $[3, 4]^T$ to $[3, 0]^T$ with $\\text{rank}(P) = \\text{tr}(P) = 1$.',
      },
      {
        term: 'Centering Matrix',
        symbol: '$H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$',
        plainEnglish:
          'Multiplying a data vector by $H$ subtracts its average from every entry; because re-centering already-centered data does nothing, $H$ is an orthogonal projection onto $\\mathbf{1}^\\perp$ with $H^2 = H$ and $\\text{tr}(H) = n - 1$.',
        tinyExample: 'For $n=3$, $H[2, 5, 8]^T = [-3, 0, 3]^T$ (mean $0$) and $\\text{tr}(H) = 3 - 1 = 2$.',
      },
    ],
    generatorId: 'rank-nullity-gen',
    concepts: [
      {
        id: 'm6-c2-1',
        title: 'Linear Independence, Basis, Dimension & The Gram Matrix Test',
        subtitle: 'Spotting redundant vectors and proving $X^T X$ is invertible',
        priority: 'core-pillar',
        buildsOn: 'Ch.1 Span and inner products',
        whyStudy:
          'Imagine building a house-price predictor using three columns: `area_in_sqft`, `area_in_sqm`, and `rooms`. Because square meters is just a constant multiple of square feet, one column is a total free-rider (**multicollinearity**)! When feature columns are linearly dependent, the Ordinary Least Squares matrix $X^T X$ collapses to zero determinant and cannot be inverted, blowing up your regression weights. Knowing **linear independence**, **basis**, **dimension**, and the **Gram matrix** $G = X^T X$ tells you the true non-redundant information dimension of a dataset — and directly cracks **GATE DA 2025 Q.38** in one line.',
        groundRules: [
          '**Zero Free-Riders Rule (Linear Independence):** A list of vectors $\\{x_1, \\dots, x_k\\}$ is linearly independent if and only if no vector can be built from the others — algebraically, stacking them as columns of $X$ means the homogeneous equation $Xc = \\mathbf{0}$ has ONLY the trivial all-zero recipe $c = \\mathbf{0}$ (so the null space / kernel $\\ker(X) = N(X) = \\{\\mathbf{0}\\}$).',
          '**Pigeonhole Cap on Independence:** Inside $\\mathbb{R}^n$ (which only has $n$ coordinate slots), you can NEVER pack more than $n$ linearly independent vectors — any list of $k > n$ vectors in $\\mathbb{R}^n$ is automatically linearly dependent!',
          '**Dimension Is an Unbreakable Invariant:** A **basis** is a set that both spans a subspace $W$ AND is linearly independent (zero missing directions, zero free-riders). Although a subspace has infinitely many different bases (you can rotate or shear them), EVERY valid basis of $W$ has the exact same vector count — called $\\dim(W)$.',
          '**Gram Matrix Null-Space Identity ($N(X^T X) = N(X)$):** Forming the square dot-product table $G = X^T X$ (entry $G_{ij} = x_i^T x_j$) NEVER loses or creates null-space vectors! Why? Because $X^T X c = \\mathbf{0} \\implies c^T X^T X c = \\|Xc\\|_2^2 = 0 \\iff Xc = \\mathbf{0}$. Therefore $X^T X$ is invertible $\\iff$ the columns of $X$ are linearly independent!',
        ],
        toyExample: {
          title: 'Three Vectors Where One Is a Free-Rider',
          scenario:
            'Consider three column vectors in $\\mathbb{R}^3$: $v_1 = [1, 2, 0]^T$, $v_2 = [0, 1, 1]^T$, and $v_3 = [2, 5, 1]^T$. Do we actually need all three to span the same space?',
          walkthroughSteps: [
            '1. **Test for a Hidden Recipe:** Check if $v_3$ can be built from $v_1$ and $v_2$: $2v_1 + v_2 = [2,4,0]^T + [0,1,1]^T = [2,5,1]^T = v_3$!',
            '2. **Move Everything to One Side:** $2v_1 + 1v_2 - 1v_3 = \\mathbf{0}$. Because we found non-zero weights $c = [2, 1, -1]^T \\neq \\mathbf{0}$ that cancel to zero, $\\{v_1, v_2, v_3\\}$ is **linearly dependent**.',
            '3. **Evict the Free-Rider $v_3$:** Check the remaining pair $\\{v_1, v_2\\}$: neither is a scalar multiple of the other, so $\\{v_1, v_2\\}$ is **linearly independent** and forms a **basis** of size (dimension) $2$!',
          ],
          ahaMoment:
            'Think of a **basis** as a minimal spanning set — zero redundant free-riders and zero missing directions. No matter which basis you pick for a subspace, it will always contain the exact same number of vectors, and we call that count its **dimension**.',
        },
        theoremAndFormula: {
          statement:
            'Vectors $\\{x_1, \\dots, x_k\\} \\subset \\mathbb{R}^n$ are **linearly independent** iff $Xc = \\mathbf{0} \\implies c = \\mathbf{0}$ (where $X = [x_1 \\; \\dots \\; x_k]$). Crucially, $N(X^T X) = N(X)$ always! Thus, $k$ columns are linearly independent iff the $k \\times k$ **Gram matrix** $G = X^T X$ ($G_{ij} = x_i^T x_j$) is invertible. Any $k > n$ vectors in $\\mathbb{R}^n$ are automatically dependent. Mutually orthogonal non-zero vectors ($x_i^T x_j = 0$ for $i \\neq j$) are automatically linearly independent.',
          formulaLatex:
            '\\{x_1,\\dots,x_k\\} \\text{ linearly independent} \\iff N(X) = \\{0\\} \\iff G = X^T X \\text{ is invertible}',
          plainEnglishDecoding:
            'Here is a one-line gem you will love: why does $X^T X c = \\mathbf{0}$ force $Xc = \\mathbf{0}$? Simply multiply both sides on the left by $c^T$ to get $c^T X^T X c = (Xc)^T(Xc) = \\|Xc\\|_2^2 = 0$. Because the only vector whose straight-line length is $0$ is the zero vector itself, $Xc = \\mathbf{0}$ follows immediately — and that single line proves **GATE DA 2025 Q.38**!',
          workedMiniExamples: [
            {
              prompt:
                'If $\\{x_1, \\dots, x_n\\} \\subset \\mathbb{R}^n$ are linearly independent and $A_{ij} = x_i^T x_j$, must $A$ be invertible?',
              solution:
                'Yes! Stack $x_1, \\dots, x_n$ as columns of $X \\in \\mathbb{R}^{n\\times n}$. Then entry $(i,j)$ of $X^T X$ is $x_i^T x_j = A_{ij}$, so $A = X^T X$. Because the $n$ columns of $X$ are independent in $\\mathbb{R}^n$, $X$ is invertible ($\\det X \\neq 0$), and $\\det(A) = \\det(X^T)\\det(X) = (\\det X)^2 > 0$ (GATE DA 2025 Q.38).',
            },
            {
              prompt: 'Are $[1, 0, 1]^T$, $[0, 1, 1]^T$, $[1, 1, 0]^T$ a basis of $\\mathbb{R}^3$?',
              solution:
                'Stack them into $X = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 0 \\end{bmatrix}$. Expanding along row 1: $\\det(X) = 1(0 - 1) - 0 + 1(0 - 1) = -2 \\neq 0$. Since $3$ independent vectors live in $3$-dimensional $\\mathbb{R}^3$, they automatically span all of $\\mathbb{R}^3$ and form a basis.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'An orthonormal basis of $\\mathbb{R}^n$ ($n \\ge 2$) is unique (up to signs or ordering).',
            reality:
              'False! Any rotation of an orthonormal basis in $\\mathbb{R}^2$ or $\\mathbb{R}^n$ produces another valid orthonormal basis, though every orthonormal set is automatically linearly independent (GATE DA 2025 Q.25).',
            counterExample:
              'Both $\\{[1,0]^T, [0,1]^T\\}$ and $\\{[1/\\sqrt{2}, 1/\\sqrt{2}]^T, [-1/\\sqrt{2}, 1/\\sqrt{2}]^T\\}$ are orthonormal bases of $\\mathbb{R}^2$.',
          },
          {
            myth: 'If no vector in a set is a scalar multiple of another, the set is linearly independent.',
            reality:
              'Pairwise non-parallel only checks two vectors at a time! Three vectors can lie in the same plane with no two parallel.',
            counterExample: '$[1,0,0]^T, [0,1,0]^T, [1,1,0]^T$ has no parallel pair, yet $v_3 = v_1 + v_2$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'OLS Normal Equations & Ridge Invertibility',
            whyItMatters:
              'OLS solves $(X^T X)\\hat{\\beta} = X^T y$. $X^T X$ is invertible ONLY if feature columns are linearly independent; when features are collinear, Ridge adds $\\lambda I$ ($\\lambda > 0$) to make $X^T X + \\lambda I$ strictly positive definite and invertible!',
            pyqProof: 'GATE DA 2025 · Q.38 & 2026 · Q.37',
          },
        ],
      },
      {
        id: 'm6-c2-2',
        title: 'The Four Fundamental Subspaces & Rank-Nullity Theorem',
        subtitle: 'Mapping $\\mathbb{R}^n \\to \\mathbb{R}^m$ via two orthogonal pairs',
        priority: 'core-pillar',
        buildsOn: 'm6-c2-1 Basis and dimension',
        whyStudy:
          'Every matrix $A \\in \\mathbb{R}^{m \\times n}$ (a table with $m$ rows and $n$ columns) acts as a machine that takes an $n$-dimensional input $x \\in \\mathbb{R}^n$ and outputs an $m$-dimensional vector $Ax \\in \\mathbb{R}^m$. To truly understand any linear layer in a neural network, a regression design matrix $X$, or a system of equations, you need to know two things: **how many dimensions of information survive** (the **rank**) and **how many dimensions get crushed to zero** (the **nullity**). Gilbert Strang’s Four Fundamental Subspaces show the entire anatomy of $A$ in one glance — explaining why OLS residuals are perpendicular to every feature column and making 2-mark GATE dimension puzzles effortless.',
        groundRules: [
          '**Conservation of Input Dimensions (Rank-Nullity: $\\text{rank}(A) + \\text{nullity}(A) = n$):** Every input column of an $m \\times n$ matrix either carries an independent pivot (counted in $\\text{rank}(A)$) or becomes a free variable that can cancel out to zero (counted in $\\text{nullity}(A) = \\dim \\ker(A) = \\dim N(A)$). They ALWAYS add up to the number of **columns** $n$ — never rows $m$!',
          '**Row Rank ALWAYS Equals Column Rank ($r$):** Even for a wildly rectangular $100 \\times 3$ matrix, the number of linearly independent rows ALWAYS equals the number of linearly independent columns — both equal the pivot count $r = \\text{rank}(A)$, which can never exceed $\\min(m, n)$.',
          '**Two Clean $90^\\circ$ Orthogonal Splits:** In the input world $\\mathbb{R}^n$, the row space $C(A^T)$ (dimension $r$) and the null space $N(A)$ (dimension $n-r$) meet at $90^\\circ$ ($C(A^T) \\perp N(A)$). In the output world $\\mathbb{R}^m$, the column space $C(A)$ (dimension $r$) and the left null space $N(A^T)$ (dimension $m-r$) meet at $90^\\circ$ ($C(A) \\perp N(A^T)$).',
          '**What Row Operations Preserve (and What They Destroy):** Applying Gaussian elimination row operations to $A$ mixes rows with rows, so it NEVER changes the **row space** $C(A^T)$ or the **null space** $N(A)$ (same solutions to $Ax = \\mathbf{0}$!). However, row operations DO change the **column space** $C(A)$ — so always grab pivot columns from the *original* matrix $A$, never from its reduced form $R$!',
        ],
        toyExample: {
          title: 'Seeing All Four Subspaces Inside a $2 \\times 3$ Matrix',
          scenario:
            'Take $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\end{bmatrix}$ ($m=2$ rows, $n=3$ columns). Notice Row 2 is just $2 \\times$ Row 1, so only $1$ row is independent: $A$ has **rank $r = 1$**.',
          walkthroughSteps: [
            '1. **Row space $C(A^T) \\subseteq \\mathbb{R}^3$** (span of rows of $A$, written as columns of the transpose $A^T$): Spanned by $[1,2,3]^T$ — a 1D line in $\\mathbb{R}^3$, so $\\dim C(A^T) = 1$.',
            '2. **Null space / Kernel $N(A) = \\ker(A) \\subseteq \\mathbb{R}^3$:** All inputs $x$ with $Ax = \\mathbf{0}$, i.e., $x_1 + 2x_2 + 3x_3 = 0$ — a **2D plane** perpendicular ($\\perp$) to $[1,2,3]^T$! Notice $\\dim C(A^T) + \\dim N(A) = 1 + 2 = 3 = n$.',
            '3. **Column space $C(A) \\subseteq \\mathbb{R}^2$:** Every column ($[1,2]^T, [2,4]^T, [3,6]^T$) is a multiple of $[1,2]^T$ — a 1D line in $\\mathbb{R}^2$, so $\\dim C(A) = 1$.',
            '4. **Left null space $N(A^T) \\subseteq \\mathbb{R}^2$:** All outputs $y$ with $A^T y = \\mathbf{0}$ (equivalently $y^T A = \\mathbf{0}^T$), i.e. $y_1 + 2y_2 = 0$, spanned by $[-2, 1]^T$ ($\\dim = m - r = 2 - 1 = 1$), meeting $[1,2]^T$ at $90^\\circ$!',
          ],
          ahaMoment:
            'Take a step back and admire that symmetry: every $m \\times n$ matrix cleanly splits the input world $\\mathbb{R}^n$ into two perpendicular pieces ($C(A^T) \\perp N(A)$) and the output world $\\mathbb{R}^m$ into two perpendicular pieces ($C(A) \\perp N(A^T)$), carrying $C(A^T)$ one-to-one onto $C(A)$!',
        },
        theoremAndFormula: {
          statement:
            'For any $A \\in \\mathbb{R}^{m \\times n}$ with $\\text{rank}(A) = r$: row rank equals column rank ($\\dim C(A) = \\dim C(A^T) = r$), **Rank-Nullity** gives $r + \\dim N(A) = n$ and $r + \\dim N(A^T) = m$, and the subspaces are orthogonal complements: $N(A) = C(A^T)^\\perp$ in $\\mathbb{R}^n$ and $N(A^T) = C(A)^\\perp$ in $\\mathbb{R}^m$.',
          formulaLatex:
            '\\text{rank}(A) + \\text{nullity}(A) = n, \\qquad C(A^T) \\perp N(A) \\text{ in } \\mathbb{R}^n, \\qquad C(A) \\perp N(A^T) \\text{ in } \\mathbb{R}^m',
          plainEnglishDecoding:
            'Here is the easiest way to remember Rank-Nullity forever: **rank** counts your **independent pivots** (the shared dimension of both row space and column space), while **nullity** ($\\dim N(A) = \\dim \\ker(A)$) counts your **free variables** (independent directions crushed to $\\mathbf{0}$ by $Ax = \\mathbf{0}$). Since every column is either pivot or free, they always add up to the number of **columns** $n$.',
          workedMiniExamples: [
            {
              prompt:
                'If $M$ is a $3 \\times 3$ matrix with Row 3 = Row 1 + Row 2, find $\\det(M^2 + 12M)$.',
              solution:
                'Because Row 3 is built from Rows 1 and 2, the rows are linearly dependent, so $\\text{rank}(M) \\le 2 < 3$ and $\\det(M) = 0$. Factor $M^2 + 12M = M(M + 12I)$ and use $\\det(AB) = \\det(A)\\det(B)$: $\\det(M^2 + 12M) = \\det(M)\\det(M + 12I) = 0$ (GATE DA 2024 Q.35).',
            },
            {
              prompt:
                'Every row of $A \\in \\mathbb{R}^{n \\times n}$ sums to $1$ ($A\\mathbf{1} = \\mathbf{1}$, where $\\mathbf{1} = [1,\\dots,1]^T$), and $B = A^3 - 2A^2 + A$. How many solutions does $Bx = \\mathbf{0}$ have?',
              solution:
                'Apply $B$ to $\\mathbf{1}$: since $A\\mathbf{1} = \\mathbf{1}$, we get $A^2\\mathbf{1} = \\mathbf{1}$ and $A^3\\mathbf{1} = \\mathbf{1}$, so $B\\mathbf{1} = \\mathbf{1} - 2\\mathbf{1} + \\mathbf{1} = \\mathbf{0}$. Because the non-zero vector $\\mathbf{1}$ sits inside $N(B)$, $\\text{nullity}(B) \\ge 1$, so every multiple $c\\mathbf{1}$ solves $Bx = \\mathbf{0}$ — **infinitely many** solutions (GATE DA 2025 Q.13).',
            },
          ],
        },
        sandboxId: 'projection-eigen-lab',
        msqTraps: [
          {
            myth: '$\\text{rank}(A) + \\text{nullity}(A)$ equals the number of rows $m$.',
            reality:
              'False! $\\text{rank}(A) + \\text{nullity}(A) = n$ (number of **columns**), because $N(A) \\subseteq \\mathbb{R}^n$! It is $\\text{rank}(A) + \\text{nullity}(A^T)$ that equals $m$.',
            counterExample: 'For $1 \\times 3$ matrix $[1, 2, 3]$, $\\text{rank} = 1, \\text{nullity} = 2$, sum $= 3 \\neq 1$.',
          },
          {
            myth: 'Elementary row operations preserve the column space $C(A)$.',
            reality:
              'Row operations preserve the **row space** $C(A^T)$ and **null space** $N(A)$, NOT the column space $C(A)$ or left null space $N(A^T)$!',
            counterExample:
              'Swapping rows of $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ changes $C(A)$ from $\\text{span}([1,0]^T)$ to $\\text{span}([0,1]^T)$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'OLS Residual Vector Lives in $N(X^T)$',
            whyItMatters:
              'Making the residual $e = y - X\\hat{\\beta}$ perpendicular to every column of $X$ ($C(X)$) puts $e \\in C(X)^\\perp = N(X^T)$, immediately yielding $X^T(y - X\\hat{\\beta}) = 0 \\implies X^T X\\hat{\\beta} = X^T y$!',
          },
        ],
      },
      {
        id: 'm6-c2-3',
        title: 'Orthogonal Projections, Idempotent Matrices & Centering Matrix',
        subtitle: 'Projecting onto subspaces and mastering $H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$',
        priority: 'high-yield',
        buildsOn: 'm6-c2-2 Four Fundamental Subspaces & orthogonal complements',
        whyStudy:
          'Two of the most frequent operations in all of Data Science are **subtracting the mean from a dataset before PCA** and **finding the best linear regression prediction $\\hat{y} = X\\hat{\\beta}$**. Remarkably, BOTH of these operations are **orthogonal projections** — dropping a vector straight down at $90^\\circ$ onto a flat subspace! Once you recognize a matrix as an orthogonal projection (including the centering matrix $H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$), you instantly know its rank, trace, nullity, and powers $P^2 = P^3 = P$ — answering **GATE DA 2024 Q.49** and **GATE DA 2026 Q.52** without multiplying out a single matrix.',
        groundRules: [
          '**The Two Signatures of an Orthogonal Projection ($P^2 = P$ and $P^T = P$):** Dropping a shadow onto a subspace $U$ and then dropping that shadow a second time moves nothing ($P^2 = P$, called **idempotent**). Requiring the shadow to fall straight down at $90^\\circ$ (rather than at a slanted oblique angle) adds symmetry ($P^T = P$).',
          '**Exact Split of Space ($C(P) = U$ and $N(P) = U^\\perp$):** An orthogonal projection $P \\in \\mathbb{R}^{n \\times n}$ leaves every vector inside $U$ untouched ($Pu = u$, eigenvalue $1$) and flattens every vector perpendicular to $U$ to zero ($Pw = \\mathbf{0}$, eigenvalue $0$). By Rank-Nullity, $\\text{rank}(P) = \\dim U$ and $\\dim N(P) = n - \\dim U$.',
          '**Trace Equals Rank Shortcut ($\\text{tr}(P) = \\text{rank}(P)$):** Because every eigenvalue of an orthogonal projection is strictly $1$ (counted $\\dim U$ times) or $0$ (counted $n - \\dim U$ times), summing the diagonal entries ($\\text{tr}(P)$) instantly tells you the dimension of the subspace $U$!',
          '**Projection vs. Reflection Coefficient Trap:** For the centering matrix $H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ (where $\\mathbf{1} = [1, \\dots, 1]^T$), subtracting $1\\times$ the mean-component gives a **projection** ($H^2 = H$, singular, rank $n-1$). Only subtracting $2\\times$ ($I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T$) flips across the hyperplane into a **reflection** ($R^2 = I_n$)!',
        ],
        toyExample: {
          title: 'Projecting Twice Does Nothing New ($P^2 = P$)',
          scenario:
            'Let $P = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ project vectors in $\\mathbb{R}^2$ straight down onto the $x$-axis. Take $x = [3, 4]^T$.',
          walkthroughSteps: [
            '1. **First projection:** $Px = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = [3, 0]^T$ (drops the vertical height $4$ to $0$).',
            '2. **Second projection:** $P(Px) = P[3, 0]^T = [3, 0]^T$ — once a point is already sitting on the $x$-axis, projecting it again leaves it completely fixed: **$P^2 = P$**!',
            '3. **Check subspaces & trace:** $N(P)$ is the $y$-axis ($\\dim = 1$), $C(P)$ is the $x$-axis ($\\dim = 1$), and $\\text{tr}(P) = 1 + 0 = 1 = \\text{rank}(P)$.',
          ],
          ahaMoment:
            'Whenever you drop vectors straight down onto a subspace $U \\subseteq \\mathbb{R}^n$, the resulting **orthogonal projection** matrix is always both **symmetric** ($P^T = P$) and **idempotent** ($P^2 = P$), giving you $\\text{rank}(P) = \\text{tr}(P) = \\dim U$ and $\\text{nullity}(P) = n - \\dim U$ for free!',
        },
        theoremAndFormula: {
          statement:
            'If $Q \\in \\mathbb{R}^{n \\times k}$ has orthonormal columns ($Q^T Q = I_k$) spanning subspace $U$, the orthogonal projection onto $U$ is $P = QQ^T$ (or $X(X^T X)^{-1}X^T$ for any independent basis $X$). It satisfies $P^2 = P$ and $P^T = P$, with eigenvalues $\\in \\{0, 1\\}$ and $\\dim N(P) = n - \\dim U$. The **centering matrix** $H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ is the orthogonal projection onto $\\mathbf{1}^\\perp$ (all vectors whose entries sum to $0$) of rank $n - 1$.',
          formulaLatex:
            'P^2 = P, \\quad P^T = P, \\quad \\dim N(P) = n - \\dim U, \\qquad H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T \\implies H^2 = H,\\; \\text{tr}(H) = n-1',
          plainEnglishDecoding:
            'Unpack what $H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ actually does to a data vector $x \\in \\mathbb{R}^n$: since $\\frac{1}{n}\\mathbf{1}^T x = \\bar{x}$ (the sample average), $Hx = x - \\bar{x}\\mathbf{1}$ simply subtracts the mean from every coordinate! Because subtracting the mean a second time from already-centered data changes nothing, $H^2 = H$. And its rank is $n-1$ because the single all-ones line $\\text{span}(\\mathbf{1})$ gets flattened to zero ($H\\mathbf{1} = \\mathbf{0}$).',
          workedMiniExamples: [
            {
              prompt:
                'Let $M \\in \\mathbb{R}^{3 \\times 3}$ be the orthogonal projection onto a subspace $U \\subseteq \\mathbb{R}^3$. Find $\\dim N(M)$ and simplify $M^3$.',
              solution:
                'Since $C(M) = U$, $\\text{rank}(M) = \\dim U$. By Rank-Nullity, $\\dim N(M) = 3 - \\text{rank}(M) = 3 - \\dim U$. Since $M^2 = M$, multiplying by $M$ once more gives $M^3 = M^2 M = M \\cdot M = M^2 = M$ (GATE DA 2024 Q.49).',
            },
            {
              prompt:
                'Verify $H^2 = H$ and find $\\text{tr}(H)$ for $H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$.',
              solution:
                'Use $\\mathbf{1}^T\\mathbf{1} = 1^2 + \\dots + 1^2 = n$: $H^2 = I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T + \\frac{1}{n^2}\\mathbf{1}(\\mathbf{1}^T\\mathbf{1})\\mathbf{1}^T = I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T + \\frac{n}{n^2}\\mathbf{1}\\mathbf{1}^T = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T = H$. Every diagonal entry of $\\mathbf{1}\\mathbf{1}^T$ is $1$, so $\\text{tr}(H) = \\text{tr}(I_n) - \\frac{1}{n}\\text{tr}(\\mathbf{1}\\mathbf{1}^T) = n - \\frac{n}{n} = n - 1$ (GATE DA 2026 Q.52).',
            },
          ],
        },
        sandboxId: 'projection-eigen-lab',
        msqTraps: [
          {
            myth: 'The centering matrix $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ satisfies $M^2 = I_n$.',
            reality:
              'False! $M$ is a **projection** ($M^2 = M$), NOT a reflection ($R^2 = I_n$)! Specifically, $I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T$ has coefficient $\\frac{2}{n}$ and squares to $I_n$, whereas $M$ has $\\frac{1}{n}$ and squares to $M$ (tested directly in GATE DA 2026 Q.52!).',
            counterExample: 'For $n=2$, $M = \\frac{1}{2}\\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}$, and $M^2 = M \\neq I_2$.',
          },
          {
            myth: 'Every idempotent matrix ($P^2 = P$) is an orthogonal projection ($P^T = P$).',
            reality: 'Oblique projections satisfy $P^2 = P$ without being symmetric.',
            counterExample: '$P = \\begin{bmatrix} 1 & 3 \\\\ 0 & 0 \\end{bmatrix}$ has $P^2 = P$, yet $P^T \\neq P$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Data Centering in PCA & OLS Hat Matrix',
            whyItMatters:
              'The sample covariance matrix is $\\frac{1}{n} X^T H X$, and the OLS hat matrix $X(X^T X)^{-1}X^T$ projects $y$ onto $C(X)$ with trace equal to model degrees of freedom $p$.',
            pyqProof: 'GATE DA 2026 · Q.52 & Q.65',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm6-c2-p1',
        title: 'Spotting Hidden Null-Space Vectors from Matrix Equations',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2025 · Q.13', 'GATE DA 2024 · Q.35'],
        problemStatement:
          'Let $A \\in \\mathbb{R}^{n \\times n}$ be a matrix whose every row sums to $1$, and let $B = A^3 - 2A^2 + A$. Determine the number of solutions to $Bx = 0$.',
        triggerCue:
          '"Every row sums to a constant $c$" (or "every column sums to $c$"), combined with a polynomial $p(A)x = 0$.',
        bruteForceTrap:
          'Trying to pick an arbitrary $3 \\times 3$ matrix $A$ with row sums $1$, cubing it, squaring it, and computing $\\det(B)$ by hand.',
        mentalShift:
          '"Row sums equal $1$" is code for **$A\\mathbf{1} = 1 \\cdot \\mathbf{1}$**! Once you know $\\mathbf{1}$ is an eigenvector of $A$ with eigenvalue $1$, you can evaluate ANY polynomial $p(A)\\mathbf{1} = p(1)\\mathbf{1}$ in one second!',
        steps: [
          {
            label: 'Step 1 — Translate Row Sums into Vector Multiplication',
            detail:
              'For $\\mathbf{1} = [1, 1, \\dots, 1]^T$, the $i$-th entry of $A\\mathbf{1}$ is the sum of row $i$. Hence $A\\mathbf{1} = \\mathbf{1}$.',
          },
          {
            label: 'Step 2 — Apply Powers of $A$ to $\\mathbf{1}$',
            detail:
              '$A^2\\mathbf{1} = A(A\\mathbf{1}) = A\\mathbf{1} = \\mathbf{1}$, and similarly $A^3\\mathbf{1} = \\mathbf{1}$.',
          },
          {
            label: 'Step 3 — Evaluate $B\\mathbf{1}$',
            detail:
              '$B\\mathbf{1} = (A^3 - 2A^2 + A)\\mathbf{1} = \\mathbf{1} - 2\\mathbf{1} + \\mathbf{1} = \\mathbf{0}$.',
          },
          {
            label: 'Step 4 — Conclude via Nullity',
            detail:
              'Since $\\mathbf{1} \\neq \\mathbf{0}$ satisfies $B\\mathbf{1} = \\mathbf{0}$, $\\mathbf{1} \\in N(B)$ so $\\text{nullity}(B) \\ge 1$, guaranteeing infinitely many solutions $c\\mathbf{1}$!',
          },
        ],
        lockInTakeaway:
          'Whenever row sums are constant $c$, test $\\mathbf{1}$ immediately ($A\\mathbf{1} = c\\mathbf{1} \\implies p(A)\\mathbf{1} = p(c)\\mathbf{1}$). Whenever a row is a combination of other rows, $\\det = 0$ immediately.',
      },
      {
        id: 'm6-c2-p2',
        title: 'Outer-Product Algebra for Projection & Centering Matrices',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 · Q.49', 'GATE DA 2025 · Q.28', 'GATE DA 2026 · Q.52'],
        problemStatement:
          'Characterize $M^2$, $\\text{tr}(M)$, $\\text{rank}(M)$, and $\\dim N(M)$ for matrices like $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ or $M = \\sum_{i=1}^k u_i u_i^T$ (orthonormal $u_i$).',
        triggerCue:
          'An $n \\times n$ matrix written with outer products $uu^T$ or $\\mathbf{1}\\mathbf{1}^T$ for general dimension $n$.',
        bruteForceTrap:
          'Writing out $4 \\times 4$ matrices with fractions like $3/4$ and $-1/4$ and multiplying 16 entries.',
        mentalShift:
          'Never expand outer products into entries! Keep $\\mathbf{1}\\mathbf{1}^T$ symbolic and use the associative grouping $(\\mathbf{1}\\mathbf{1}^T)(\\mathbf{1}\\mathbf{1}^T) = \\mathbf{1}(\\mathbf{1}^T\\mathbf{1})\\mathbf{1}^T = n(\\mathbf{1}\\mathbf{1}^T)$.',
        steps: [
          {
            label: 'Step 1 — Check Symmetry',
            detail: 'Since $(\\mathbf{1}\\mathbf{1}^T)^T = \\mathbf{1}\\mathbf{1}^T$ and $I_n^T = I_n$, $M^T = M$ instantly.',
          },
          {
            label: 'Step 2 — Square Symbolically Using $\\mathbf{1}^T\\mathbf{1} = n$',
            detail:
              '$M^2 = I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T + \\frac{1}{n^2}(n\\mathbf{1}\\mathbf{1}^T) = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T = M$.',
          },
          {
            label: 'Step 3 — Read Trace & Rank Without Eigenvalues',
            detail:
              'For any projection ($M^2 = M$, symmetric), $\\text{rank}(M) = \\text{tr}(M) = n - \\frac{1}{n}(n) = n - 1$, and $\\dim N(M) = n - (n-1) = 1$.',
          },
        ],
        lockInTakeaway:
          'Outer-product squares collapse by grouping the inner dot product: $(uu^T)(uu^T) = (u^T u)(uu^T)$. For projections, $\\text{rank}(M) = \\text{tr}(M)$ directly!',
      },
    ],
    arsenalCards: [
      {
        id: 'm6-c2-a1',
        badge: 'RANK-NULLITY',
        whenYouSpot: 'Matrix $A \\in \\mathbb{R}^{m \\times n}$ asking for $\\dim N(A)$, $\\dim N(A^T)$, or $X^T X$ invertibility',
        directWeaponLatex: '\\text{rank}(A) + \\text{nullity}(A) = n, \\qquad \\text{rank}(X^T X) = \\text{rank}(X)',
        instantRule:
          'Rank + Nullity adds up to the number of COLUMNS ($n$). Columns of $X$ are independent iff Gram matrix $X^T X$ is invertible.',
        tenSecondExample:
          'For $4 \\times 7$ matrix of rank $3$: $\\dim N(A) = 7-3=4$ and $\\dim N(A^T) = 4-3=1$.',
        oneFatalTrap:
          'Adding $\\text{rank}(A) + \\text{nullity}(A) = m$ (rows) instead of $n$ (columns) on non-square matrices!',
      },
      {
        id: 'm6-c2-a2',
        badge: 'ROW-OPS',
        whenYouSpot: 'Questions asking which subspaces stay invariant after Gaussian elimination / RREF',
        directWeaponLatex: 'C(R^T) = C(A^T), \\quad N(R) = N(A), \\quad C(R) \\neq C(A)',
        instantRule:
          'Row operations keep the Row Space and Null Space identical, while changing the Column Space and Left Null Space.',
        tenSecondExample:
          'Pivot columns of $A$ (not $R$!) form a basis of $C(A)$; pivot rows of $R$ form a basis of $C(A^T)$.',
        oneFatalTrap:
          'Taking the non-zero rows of $R$ as a basis for $C(A)$ instead of $C(A^T)$!',
      },
      {
        id: 'm6-c2-a3',
        badge: 'PROJECTION',
        whenYouSpot: 'Orthogonal projection $P$ onto $U \\subseteq \\mathbb{R}^n$ or centering matrix $H = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$',
        directWeaponLatex: 'P^2 = P,\\; P^T = P,\\; \\text{rank}(P) = \\text{tr}(P) = \\dim U,\\; \\dim N(P) = n - \\dim U',
        instantRule:
          'Projections have eigenvalues only in $\\{0, 1\\}$, so their rank equals their trace, and $H^2 = H$ (never $I_n$).',
        tenSecondExample:
          'For $n=5$, $H = I_5 - \\frac{1}{5}\\mathbf{1}\\mathbf{1}^T$ has $\\text{tr}(H) = \\text{rank}(H) = 4$ and $\\dim N(H) = 1$.',
        oneFatalTrap:
          'Confusing projection $I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ ($M^2 = M$) with reflection $I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T$ ($M^2 = I_n$).',
      },
    ],
    questions: [
      {
        id: 'm6-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'Let $A \\in \\mathbb{R}^{5 \\times 8}$ have a $3$-dimensional column space. Compute $\\dim N(A) + \\dim N(A^T)$.',
        natAnswer: { min: 7, max: 7, exactDisplay: '7' },
        triggerHint: 'Use Rank-Nullity on both $A$ ($n=8$) and $A^T$ ($m=5$).',
        intuitiveSolution: [
          '$\\text{rank}(A) = \\dim C(A) = 3$.',
          '$\\dim N(A) = n - r = 8 - 3 = 5$.',
          '$\\dim N(A^T) = m - r = 5 - 3 = 2$.',
          'Sum $= 5 + 2 = 7$.',
        ],
        directShortcutUsed: '$(n - r) + (m - r) = 8 + 5 - 2(3) = 7$.',
      },
      {
        id: 'm6-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.35',
        year: 2024,
        marks: 1,
        type: 'NAT',
        stem: 'Let $M$ be a $3 \\times 3$ matrix whose third row is equal to the sum of its first and second rows. Find the value of $\\det(M^2 + 12M)$.',
        natAnswer: { min: 0, max: 0, exactDisplay: '0' },
        triggerHint: 'Factor $M^2 + 12M = M(M + 12I)$ and check $\\det(M)$ first!',
        intuitiveSolution: [
          'Because Row 3 = Row 1 + Row 2, the rows of $M$ are linearly dependent, so $\\text{rank}(M) < 3$ and $\\det(M) = 0$.',
          'Using $\\det(AB) = \\det(A)\\det(B)$: $\\det(M^2 + 12M) = \\det(M)\\det(M + 12I) = 0 \\cdot \\det(M + 12I) = 0$.',
        ],
        directShortcutUsed: 'Linearly dependent rows $\\implies \\det(M) = 0 \\implies \\det(M(M+12I)) = 0$.',
      },
      {
        id: 'm6-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.13',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $A \\in \\mathbb{R}^{n \\times n}$ ($n \\ge 2$) be a matrix such that the sum of entries in each row of $A$ is $1$. Define $B = A^3 - 2A^2 + A$. How many solutions does the system $Bx = 0$ have?',
        options: [
          {
            id: 'A',
            text: 'Zero solutions',
            whyTrueOrFalse: 'False — every homogeneous system $Bx = 0$ has at least the trivial solution $x = 0$.',
          },
          {
            id: 'B',
            text: 'Exactly one unique solution ($x = 0$)',
            whyTrueOrFalse:
              'False — $B\\mathbf{1} = \\mathbf{0}$ for the non-zero vector $\\mathbf{1}$, so $x = 0$ is not the only solution.',
          },
          {
            id: 'C',
            text: 'Infinitely many solutions',
            whyTrueOrFalse:
              'True! Since $A\\mathbf{1} = \\mathbf{1}$, we get $B\\mathbf{1} = \\mathbf{1} - 2\\mathbf{1} + \\mathbf{1} = \\mathbf{0}$, so every scalar multiple $c\\mathbf{1}$ is a solution.',
          },
          {
            id: 'D',
            text: 'Cannot be determined without knowing $n$ and the entries of $A$',
            whyTrueOrFalse: 'False — the vector $\\mathbf{1}$ lies in $N(B)$ for EVERY such matrix $A$ regardless of $n$.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Multiply $A$ by the all-ones column vector $\\mathbf{1} = [1, 1, \\dots, 1]^T$.',
        intuitiveSolution: [
          '1. Row sums equal to $1$ means $A\\mathbf{1} = \\mathbf{1}$.',
          '2. Therefore $A^2\\mathbf{1} = \\mathbf{1}$ and $A^3\\mathbf{1} = \\mathbf{1}$.',
          '3. Hence $B\\mathbf{1} = (A^3 - 2A^2 + A)\\mathbf{1} = \\mathbf{1} - 2\\mathbf{1} + \\mathbf{1} = \\mathbf{0}$.',
          '4. Since $\\mathbf{1} \\neq \\mathbf{0}$ is in $N(B)$, $\\text{nullity}(B) \\ge 1$, giving infinitely many solutions.',
        ],
        directShortcutUsed: '$A\\mathbf{1} = \\mathbf{1} \\implies p(A)\\mathbf{1} = p(1)\\mathbf{1} = 0\\cdot\\mathbf{1} = \\mathbf{0}$.',
      },
      {
        id: 'm6-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.38',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'Let $\\{x_1, x_2, \\dots, x_n\\} \\subset \\mathbb{R}^n$ be a set of $n$ linearly independent vectors. Define an $n \\times n$ matrix $A$ with entries $A_{ij} = x_i^T x_j$ for $1 \\le i, j \\le n$. Which of the following statements is ALWAYS true?',
        options: [
          {
            id: 'A',
            text: '$A$ is invertible',
            whyTrueOrFalse:
              'True! Setting $X = [x_1 \\; \\dots \\; x_n]$, $A = X^T X$. Since $X$ has $n$ independent columns in $\\mathbb{R}^n$, $X$ is invertible, so $A = X^T X$ is invertible.',
          },
          {
            id: 'B',
            text: '$A$ is an orthogonal matrix ($A^T A = I_n$)',
            whyTrueOrFalse:
              'False — $A = I_n$ only if the vectors are orthonormal; in general $x_i^T x_j \\neq 0$ and $\\|x_i\\|_2 \\neq 1$.',
          },
          {
            id: 'C',
            text: '$A$ is singular whenever $x_1 + x_2$ is not orthogonal to $x_1$',
            whyTrueOrFalse: 'False — non-orthogonality does not break linear independence.',
          },
          {
            id: 'D',
            text: '$\\det(A) < 0$ if $n$ is odd',
            whyTrueOrFalse:
              'False — $\\det(A) = \\det(X^T X) = (\\det X)^2 > 0$ is ALWAYS strictly positive!',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Recognize $A_{ij} = x_i^T x_j$ as the matrix product $A = X^T X$.',
        intuitiveSolution: [
          '1. Stack $x_1, \\dots, x_n$ as columns of $X \\in \\mathbb{R}^{n \\times n}$. Then $(X^T X)_{ij} = x_i^T x_j = A_{ij}$, so $A = X^T X$.',
          '2. If $Ac = 0$, then $c^T X^T X c = \\|Xc\\|_2^2 = 0 \\implies Xc = 0$.',
          '3. Because $x_1, \\dots, x_n$ are linearly independent, $Xc = 0 \\implies c = 0$, so $N(A) = \\{0\\}$ and $A$ is invertible.',
        ],
        directShortcutUsed: 'Gram matrix $A = X^T X$ is invertible $\\iff$ columns of $X$ are linearly independent.',
      },
      {
        id: 'm6-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.49 (Concept Match)',
        year: 2024,
        marks: 2,
        type: 'MSQ',
        stem: 'Let $U$ be a subspace of $\\mathbb{R}^3$ and let $M \\in \\mathbb{R}^{3 \\times 3}$ be the orthogonal projection matrix onto $U$. Which of the following statements is/are ALWAYS true?',
        options: [
          {
            id: 'A',
            text: 'The dimension of the null space of $M$ is $3 - \\dim(U)$.',
            whyTrueOrFalse:
              'True! The column space of $M$ is $U$, so $\\text{rank}(M) = \\dim(U)$. By Rank-Nullity, $\\dim N(M) = 3 - \\dim(U)$.',
          },
          {
            id: 'B',
            text: '$M^2 = M$.',
            whyTrueOrFalse: 'True! Every projection matrix is idempotent: projecting onto $U$ twice leaves $Mx$ unchanged.',
          },
          {
            id: 'C',
            text: '$M^3 = M$.',
            whyTrueOrFalse: 'True! Since $M^2 = M$, multiplying by $M$ again gives $M^3 = M^2 M = M^2 = M$.',
          },
          {
            id: 'D',
            text: '$M$ is invertible whenever $\\dim(U) \\ge 1$.',
            whyTrueOrFalse:
              'False! If $\\dim(U) = 1$ or $2$, then $\\dim N(M) = 2$ or $1 > 0$, so $M$ is singular.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Recall the defining invariants of an orthogonal projection: $C(M) = U$, $M^2 = M$, and Rank-Nullity.',
        intuitiveSolution: [
          '(A) $C(M) = U \\implies \\text{rank}(M) = \\dim U \\implies \\dim N(M) = 3 - \\dim U$.',
          '(B) Orthogonal projections are idempotent ($M^2 = M$).',
          '(C) Inductively $M^k = M$ for every integer $k \\ge 1$, so $M^3 = M$.',
          '(D) $M$ is invertible only when $U = \\mathbb{R}^3$ ($M = I_3$).',
        ],
        directShortcutUsed: 'Projection Checklist: $M^k = M$, $\\text{rank}(M) = \\dim U$, $\\dim N(M) = n - \\dim U$.',
      },
      {
        id: 'm6-c2-q6',
        tier: 'tricky',
        sourceLabel: 'GATE DA 2026 · Q.52 (Concept Match)',
        year: 2026,
        marks: 2,
        type: 'MSQ',
        stem: 'For $n \\ge 2$, define the centering matrix $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$, where $\\mathbf{1} = [1, 1, \\dots, 1]^T \\in \\mathbb{R}^n$. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: '$M$ is symmetric ($M^T = M$).',
            whyTrueOrFalse: 'True! Both $I_n$ and $\\mathbf{1}\\mathbf{1}^T$ are symmetric.',
          },
          {
            id: 'B',
            text: '$M^2 = I_n$.',
            whyTrueOrFalse:
              'False! $M$ is a projection ($M^2 = M$), NOT a reflection ($I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T$). Check $n=2$: $M^2 = M \\neq I_2$.',
          },
          {
            id: 'C',
            text: '$\\text{tr}(M) = n - 1$.',
            whyTrueOrFalse:
              'True! Every diagonal entry of $M$ is $1 - \\frac{1}{n}$, so $\\text{tr}(M) = n(1 - \\frac{1}{n}) = n - 1$.',
          },
          {
            id: 'D',
            text: 'For every $x \\in \\mathbb{R}^n$, $Mx$ is orthogonal to $\\mathbf{1}$.',
            whyTrueOrFalse:
              'True! $\\mathbf{1}^T (Mx) = (\\mathbf{1}^T - \\frac{1}{n}(\\mathbf{1}^T\\mathbf{1})\\mathbf{1}^T)x = (\\mathbf{1}^T - \\mathbf{1}^T)x = 0$.',
          },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Watch out for the $M^2 = M$ vs $M^2 = I_n$ projection-vs-reflection trap!',
        intuitiveSolution: [
          '(A) $M^T = I_n^T - \\frac{1}{n}(\\mathbf{1}\\mathbf{1}^T)^T = M$.',
          '(B) $M^2 = I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T + \\frac{1}{n^2}(n\\mathbf{1}\\mathbf{1}^T) = M \\neq I_n$ (since $n \\ge 2$).',
          '(C) $\\text{tr}(M) = \\text{tr}(I_n) - \\frac{1}{n}\\text{tr}(\\mathbf{1}\\mathbf{1}^T) = n - 1$.',
          '(D) $M\\mathbf{1} = \\mathbf{1} - \\frac{n}{n}\\mathbf{1} = \\mathbf{0}$, and since $M$ is symmetric, $\\mathbf{1}^T M x = (M\\mathbf{1})^T x = 0$.',
        ],
        directShortcutUsed: 'Centering matrix $H$ is the orthogonal projection onto $\\mathbf{1}^\\perp$ of rank $n-1$.',
      },
    ],
  },

  // =========================================================================
  // CHAPTER 3: Linear Systems Ax=b, Gaussian Elimination, LU & Rank Inequalities
  // =========================================================================
  {
    id: 'la1-ch3',
    number: 3,
    title: 'Linear Systems Ax=b, Gaussian Elimination, LU & Rank Inequalities',
    shortTitle: 'Systems, LU & Rank Rules',
    estimatedHours: 3.5,
    dayLabel: 'Week 3 · Day 17',
    tagline:
      'Let us turn solving linear equations $Ax = b$ into an exact visual science! You will see why every $0 / 1 / \\infty$ solution puzzle yields immediately to Rouché–Capelli and matrix-shape logic, trace Gaussian elimination and $LU$ factorization with $O(n^2)$ triangular solves, and squeeze matrix-power ranks cleanly.',
    syllabusMapping: [
      'Systems of linear equations $Ax = b$ (existence and uniqueness)',
      'Gaussian elimination and LU decomposition',
      'Matrix rank inequalities and matrix power chains',
    ],
    whatIsImportant: [
      'Rouché–Capelli: $Ax=b$ consistent $\\iff \\text{rank}(A) = \\text{rank}([A\\mid b])$; unique $\\iff \\text{rank}(A) = n$; infinite $\\iff \\text{rank}(A) < n$',
      'Shape & Consistency Compatibility for $Mx=p$ vs $Mx=q$ simultaneously (GATE DA 2024 Q.48: $1$ and $\\infty$ can NEVER co-occur!)',
      'Gaussian elimination $O(n^3)$ vs triangular back-substitution $O(n^2)$ (GATE DA 2025 Q.12) & $A=LU$ without row swaps requires non-zero leading principal minors',
      'Rank inequalities: $\\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))$, Sylvester $\\text{rank}(A)+\\text{rank}(B)-n \\le \\text{rank}(AB)$, and power squeeze $A^3 = A \\implies \\text{rank}(A)=\\text{rank}(A^2)$ (GATE DA 2025 Q.37)',
    ],
    whatIsNotImportant: [
      'Floating-point rounding error norms or partial/complete pivoting stability bounds',
      'Solving $4 \\times 4$ systems via Cramer’s rule determinants',
    ],
    inboundStream: 'Requires Ch.2 Column Space $C(A)$, Null Space $N(A)$, and Rank-Nullity.',
    outboundStream: [
      'Module 7 Eigenvalues, Spectral Theorem & Singular Value Decomposition',
      'Module 14 Overdetermined OLS ($X\\beta \\approx y$), Normal Equations & Regularized Ridge Solvers',
    ],
    glossary: [
      {
        term: 'Consistent vs. Inconsistent System',
        symbol: '$Ax = b$',
        plainEnglish:
          'A linear system is consistent when at least one vector $x$ satisfies every equation simultaneously (meaning $b$ sits inside the column space $C(A)$), and inconsistent when the equations contradict each other ($0$ solutions).',
        tinyExample: '$x + 2y = 3$ and $2x + 4y = 5$ are inconsistent because $2(3) = 6 \\neq 5$.',
      },
      {
        term: 'Augmented Matrix',
        symbol: '$[A \\mid b]$',
        plainEnglish:
          'Simply glue the right-hand target column $b$ onto the right side of $A$ so you can apply row operations to both sides of the equations together without dropping anything.',
        tinyExample: 'For $x+2y=3, 2x+4y=6$, the augmented matrix is $\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\end{bmatrix}$.',
      },
      {
        term: 'Rouché–Capelli Theorem',
        symbol: '$\\text{rank}(A) = \\text{rank}([A \\mid b])$',
        plainEnglish:
          'In plain words, $Ax = b$ has a solution if and only if appending $b$ adds zero new independent directions to $A$; once consistent, you get $1$ unique solution if $\\text{rank}(A) = n$, or $\\infty$ solutions if $\\text{rank}(A) < n$.',
        tinyExample: 'If $\\text{rank}(A) = 2$ and $\\text{rank}([A\\mid b]) = 3$, there are $0$ solutions immediately.',
      },
      {
        term: 'Particular + Homogeneous Solution',
        symbol: '$x = x_p + x_h$',
        plainEnglish:
          'Every solution to $Ax = b$ equals one single anchor solution $x_p$ plus any vector $x_h$ from the null space $N(A)$ — which is why having even one non-zero vector in $N(A)$ turns a single solution into infinitely many.',
        tinyExample: 'For $x_1 + 2x_2 = 3$, all solutions have the form $[3, 0]^T + t[-2, 1]^T$.',
      },
      {
        term: 'Pivot & Row Echelon Form (REF)',
        symbol: '$U$',
        plainEnglish:
          'A pivot is the first non-zero entry in a row after elimination, and Row Echelon Form is the clean staircase shape where every entry below each pivot has been zeroed out.',
        tinyExample: 'In $\\begin{bmatrix} 2 & 4 \\\\ 0 & 3 \\end{bmatrix}$, the pivots are $2$ and $3$, telling you $\\text{rank} = 2$.',
      },
      {
        term: 'Gaussian Elimination',
        symbol: '$O(n^3)$',
        plainEnglish:
          'This is the systematic row-reduction recipe that clears entries column by column below each pivot to turn a dense $n \\times n$ system into an easy upper-triangular staircase in $\\Theta(n^3)$ steps.',
        tinyExample: 'Subtracting $3 \\times \\text{Row } 1$ from $\\text{Row } 2$ clears entry $(2,1)$ in one step.',
      },
      {
        term: 'Back-Substitution',
        symbol: '$Ux = y,\\; O(n^2)$',
        plainEnglish:
          'Once a matrix $U$ is already upper triangular, you solve from the bottom variable $x_n$ upward to $x_1$ by plugging already-found values into each row, costing only $\\frac{n(n-1)}{2}$ multiplications and subtractions ($O(n^2)$).',
        tinyExample: 'From $3x_2 = 6$ and $2x_1 + 4x_2 = 10$, we get $x_2 = 2$ and then $x_1 = 1$.',
      },
      {
        term: 'LU Decomposition',
        symbol: '$A = LU,\\; PA = LU$',
        plainEnglish:
          'Think of $LU$ as saving your Gaussian elimination work inside two triangular matrices: $L$ stores the row multipliers (with $1$s on the diagonal) and $U$ is the upper-triangular result; with row swaps $P$, $PA = LU$ always exists.',
        tinyExample: '$\\begin{bmatrix} 2 & 4 \\\\ 6 & 15 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 3 & 1 \\end{bmatrix}\\begin{bmatrix} 2 & 4 \\\\ 0 & 3 \\end{bmatrix}$.',
      },
      {
        term: 'Leading Principal Minor',
        symbol: '$\\Delta_k = \\det(A_{1:k,\\,1:k})$',
        plainEnglish:
          'This is the determinant of the top-left $k \\times k$ corner of a square matrix; an invertible matrix admits $A = LU$ without row swaps if and only if every $\\Delta_1, \\dots, \\Delta_{n-1}$ is non-zero.',
        tinyExample: 'For $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$, $\\Delta_1 = 0$, so a row swap $P$ is mandatory.',
      },
      {
        term: 'Sylvester’s Rank Inequality',
        symbol: '$\\text{rank}(A) + \\text{rank}(B) - n \\le \\text{rank}(AB)$',
        plainEnglish:
          'While multiplying matrices can never raise rank ($\\text{rank}(AB) \\le \\min(\\text{rank } A, \\text{rank } B)$), Sylvester gives you a floor on how low the rank of a product can possibly drop.',
        tinyExample: 'If $A \\in \\mathbb{R}^{7\\times 7}$ has $A^2 = 0$, then $2\\,\\text{rank}(A) - 7 \\le 0 \\implies \\text{rank}(A) \\le 3$.',
      },
      {
        term: 'Nilpotent Matrix',
        symbol: '$A^k = 0$',
        plainEnglish:
          'A non-zero square matrix is nilpotent when multiplying it by itself enough times eventually wipes everything out to the zero matrix — a classic counterexample showing $A^2 = 0$ does not force $A = 0$.',
        tinyExample: '$A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix} \\neq 0$ satisfies $A^2 = 0$.',
      },
    ],
    generatorId: 'rank-nullity-gen',
    concepts: [
      {
        id: 'm6-c3-1',
        title: 'Solvability of $Ax = b$, Solution Multiplicity & Shape Traps',
        subtitle: 'Why the same matrix $M$ can give $(0, \\infty)$ but NEVER $(1, \\infty)$',
        priority: 'core-pillar',
        buildsOn: 'Ch.2 Column space $C(A)$ and Null space $N(A)$',
        whyStudy:
          'Every time you fit linear regression weights $Xw = y$, balance an engineering circuit, or solve an equilibrium system $Mx = p$, one urgent question comes first: **does an exact solution even exist — and if it does, is it unique or are there infinitely many?** In real ML datasets with $N = 10{,}000$ samples and $d = 20$ features ($N \\gg d$, tall matrix), exact solutions almost never exist ($0$ solutions), which is why Least Squares was invented. Conversely, when features outnumber samples ($d > N$, wide matrix), infinitely many weight vectors fit the training data perfectly! Mastering the exact rules of $0 / 1 / \\infty$ solutions also lets you solve tricky multi-RHS GATE MSQs like **GATE DA 2024 Q.48** in 20 seconds.',
        groundRules: [
          '**Existence = Column-Space Membership (Rouché–Capelli):** Because $Mx$ is a linear combination of the columns of $M$, an exact solution to $Mx = p$ exists if and only if $p$ sits inside the column space $C(M)$ — equivalently, gluing $p$ onto $M$ adds zero new independent directions: $\\text{rank}(M) = \\text{rank}([M \\mid p])$.',
          '**All Solutions Equal One Anchor Plus the Null Space ($x = x_p + N(M)$):** If $x_p$ solves $Mx_p = p$ and $x_h$ is ANY vector in the null space ($Mx_h = \\mathbf{0}$), then $M(x_p + x_h) = p + \\mathbf{0} = p$ is ALSO a solution! Therefore, once consistent, there is **$1$ unique solution** iff $\\text{nullity}(M) = 0$ ($\\text{rank}(M) = n$), and **$\\infty$ solutions** iff $\\text{nullity}(M) \\ge 1$ ($\\text{rank}(M) < n$).',
          '**The Fixed-Matrix Mutual-Exclusion Law ($(1, \\infty)$ Is Impossible):** Because $\\text{nullity}(M)$ depends ONLY on $M$ (never on the right-hand side $p$ or $q$), a single matrix $M$ lives in EITHER the $\\{0, 1\\}$ universe (when $\\text{rank}(M) = n$) OR the $\\{0, \\infty\\}$ universe (when $\\text{rank}(M) < n$) — it can NEVER give $1$ solution for $Mx = p$ and $\\infty$ solutions for $Mx = q$!',
          '**Matrix Shape Locks:** A **wide** matrix ($m < n$) ALWAYS has $\\text{rank}(M) \\le m < n$, so $\\text{nullity}(M) \\ge 1$ and it can NEVER have a unique ($1$) solution. A **square** matrix ($m = n$) with $1$ solution for ANY $q$ must have $\\text{rank}(M) = n = m$, making $C(M) = \\mathbb{R}^m$ so EVERY $p$ gets $1$ solution (making $(0, 1)$ impossible for square matrices!).',
        ],
        toyExample: {
          title: 'Same $2 \\times 2$ Matrix, Two Right-Hand Sides',
          scenario:
            'Fix $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$ ($m = 2, n = 2$, $\\text{rank}(A) = 1 < 2$, so $\\text{nullity}(A) = 2 - 1 = 1$). Solve $Ax = b$ for two targets: $b_1 = [3, 6]^T$ and $b_2 = [3, 5]^T$.',
          walkthroughSteps: [
            '1. **For $b_1 = [3, 6]^T$:** Equation 2 ($2x_1 + 4x_2 = 6$) is just $2 \\times$ Equation 1 ($x_1 + 2x_2 = 3$)! So $b_1$ sits right inside $C(A)$ and every point on the line $x = [3,0]^T + t[-2,1]^T$ ($t \\in \\mathbb{R}$) works — **infinitely many** solutions!',
            '2. **For $b_2 = [3, 5]^T$:** Equation 1 demands $x_1 + 2x_2 = 3$, which forces $2x_1 + 4x_2 = 6 \\neq 5$. Appending $b_2$ raises the rank from $1$ to $2$, so $b_2 \\notin C(A)$ — **$0$ solutions**!',
            '3. **Can ANY $b$ give a unique ($1$) solution for this $A$?** Never! Because the non-zero vector $[-2, 1]^T$ lives in $N(A)$, adding $t[-2,1]^T$ to any single solution immediately generates infinitely many!',
          ],
          ahaMoment:
            'Here is the golden realization: whether a consistent system has **$1$** or **$\\infty$** solutions depends ONLY on $\\text{nullity}(M)$, which is baked into $M$ alone — NEVER into $p$ or $q$! That is why having $1$ solution for $Mx=p$ and $\\infty$ solutions for $Mx=q$ is **impossible for every matrix $M$**.',
        },
        theoremAndFormula: {
          statement:
            '**Rouché–Capelli Theorem:** For $M \\in \\mathbb{R}^{m \\times n}$, $Mx = p$ is consistent ($\\ge 1$ solution) iff $\\text{rank}(M) = \\text{rank}([M \\mid p])$, where $[M \\mid p]$ is the augmented matrix formed by attaching column $p$ to the right of $M$. Whenever consistent, the solution set is $x_p + N(M)$, so the count is **$1$** iff $\\text{rank}(M) = n$ (full column rank) and **$\\infty$** iff $\\text{rank}(M) < n$.',
          formulaLatex:
            'Mx = p \\text{ consistent} \\iff \\text{rank}(M) = \\text{rank}([M\\mid p]), \\qquad \\text{solutions} \\in \\begin{cases} \\{0, 1\\} & \\text{if } \\text{rank}(M) = n \\\\ \\{0, \\infty\\} & \\text{if } \\text{rank}(M) < n \\end{cases}',
          plainEnglishDecoding:
            'Think of $M$’s column rank as locking you into one of **two separate universes**:\n• **Full column rank ($\\text{rank}(M) = n$, only possible if $m \\ge n$):** You can only ever see $0$ or $1$ solutions (and if $m=n$, $M$ is invertible so EVERY $p$ gets $1$ solution!).\n• **Rank-deficient columns ($\\text{rank}(M) < n$, automatic whenever $m < n$):** You can only ever see $0$ or $\\infty$ solutions!',
          workedMiniExamples: [
            {
              prompt:
                'For $M \\in \\mathbb{R}^{3 \\times 3}$, can $Mx = p$ have $0$ solutions while $Mx = q$ has $1$ solution?',
              solution:
                'No! If $Mx = q$ has $1$ solution, then $\\text{rank}(M) = n = 3 = m$, meaning $C(M)$ fills all of $\\mathbb{R}^3$ ($M$ is invertible). Hence EVERY $p \\in \\mathbb{R}^3$ lies in $C(M)$ and also has $1$ unique solution $x = M^{-1}p$!',
            },
            {
              prompt:
                'For $M \\in \\mathbb{R}^{2 \\times 3}$, what solution counts are possible for $Mx = p$?',
              solution:
                'Since $\\text{rank}(M) \\le \\min(2, 3) = 2 < 3 = n$, Rank-Nullity forces $\\text{nullity}(M) = 3 - \\text{rank}(M) \\ge 1$ ALWAYS. Thus $Mx = p$ can have $0$ or $\\infty$ solutions (e.g., $0$ for one $p$ and $\\infty$ for another), NEVER a unique solution.',
            },
          ],
        },
        sandboxId: 'projection-eigen-lab',
        msqTraps: [
          {
            myth: 'If $M$ is $3 \\times 2$ (tall), $Mx = p$ can only have $0$ or $1$ solutions.',
            reality:
              'False! A tall $3 \\times 2$ matrix with rank $1 < 2$ (two proportional columns) has $\\text{nullity} = 1$, so it gives $0$ or $\\infty$ solutions!',
            counterExample:
              '$M = \\begin{bmatrix} 1 & 2 \\\\ 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$ gives $\\infty$ solutions for $p=[3,0,0]^T$ and $0$ for $p=[3,1,0]^T$.',
          },
          {
            myth: 'For a $3 \\times 3$ matrix $M$, $Mx = p$ can have $0$ solutions for one $p$ and $1$ for another $q$.',
            reality:
              'False! For a square matrix ($m = n$), $1$ solution for ANY $q$ forces $\\text{rank}(M) = n$, making $M$ invertible so EVERY $p$ gets $1$ solution! (Tested in GATE DA 2024 Q.48).',
            counterExample: '$M$ invertible $\\implies x = M^{-1}p$ exists uniquely for all $p$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Overdetermined OLS Systems ($N \\gg d$)',
            whyItMatters:
              'With $N$ data points and $d$ features, $X\\beta = y$ is a tall $N \\times d$ system that almost always has $0$ exact solutions; OLS replaces $y$ with $\\text{proj}_{C(X)}(y)$ to turn $0$ solutions into $1$ solution (when $\\text{rank}(X) = d$).',
          },
        ],
      },
      {
        id: 'm6-c3-2',
        title: 'Gaussian Elimination, Operation Complexity & LU Decomposition',
        subtitle: 'Why factoring $A = LU$ costs $O(n^3)$ once while triangular solves cost $O(n^2)$',
        priority: 'high-yield',
        buildsOn: 'm6-c3-1 Solving $Ax = b$ via row reduction',
        whyStudy:
          'When numerical libraries like `NumPy` or `SciPy` solve a $1000 \\times 1000$ linear system $Ax = b$, they almost NEVER compute $A^{-1}$ explicitly (it is slow and numerically fragile) — instead, they factor $A$ into two triangular matrices **$A = LU$** (or $PA = LU$). Why? Because once you pay the $O(n^3)$ cost to build $L$ and $U$ once, solving $Ax = b$ for 500 different target vectors $b$ (for example, in multi-output regression or iterative physics simulations) costs only **$O(n^2)$** per target via fast triangular substitution! Understanding that exact $O(n^3)$ vs. $O(n^2)$ distinction directly earns you easy marks like **GATE DA 2025 Q.12**.',
        groundRules: [
          '**Elimination Turns a Tangled System Into a Triangular Staircase ($O(n^3)$):** Clearing entries below the diagonal column-by-column requires roughly $\\frac{2}{3}n^3$ floating-point operations ($\\Theta(n^3)$) because for each of the $n$ pivots, you update an $(n-k) \\times (n-k)$ submatrix.',
          '**Triangular Solves Cost Only $O(n^2)$ (Half a Grid):** Once a system $Ux = y$ is already upper triangular (all entries below the diagonal are $0$), you read off $x_n$ immediately and walk upward; row $i$ only touches $(n-i)$ already-known variables, summing to $\\sum_{k=0}^{n-1} k = \\frac{n(n-1)}{2}$ multiplications and subtractions — strictly **$O(n^2)$**!',
          '**$LU$ Is Simply Gaussian Elimination Saved in a Bottle:** Recording every row-elimination multiplier $\\ell_{ij}$ inside unit lower-triangular $L$ (with $1$s on the main diagonal) while keeping the final upper-triangular staircase as $U$ gives $A = LU$, with $\\det(A) = \\det(L)\\det(U) = 1 \\cdot \\prod_{i=1}^n U_{ii}$ for free!',
          '**Zero Pivot Rule ($A = LU$ vs. $PA = LU$):** Without swapping rows, elimination crashes if a $0$ lands in a pivot slot! For an invertible matrix $A$, pure $A = LU$ exists iff every top-left $k \\times k$ **leading principal minor** $\\Delta_k = \\det(A_{1:k, 1:k})$ is non-zero; allowing row swaps via permutation matrix $P$ makes $PA = LU$ work for **every** square matrix.',
        ],
        toyExample: {
          title: 'Factoring $A = LU$ in One Elimination Step',
          scenario:
            'Factor $A = \\begin{bmatrix} 2 & 4 \\\\ 6 & 15 \\end{bmatrix}$ into a unit lower-triangular $L$ ($1$s down the diagonal, $0$s above) and an upper-triangular $U$ ($0$s below the diagonal).',
          walkthroughSteps: [
            '1. **Find the Multiplier:** Pivot $(1,1)$ is $2$, and the entry directly beneath it is $6$. Compute multiplier $\\ell_{21} = \\frac{6}{2} = 3$.',
            '2. **Eliminate to Build $U$:** Subtract $3 \\times \\text{Row } 1$ from $\\text{Row } 2$: $U = \\begin{bmatrix} 2 & 4 \\\\ 6 - 3(2) & 15 - 3(4) \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\ 0 & 3 \\end{bmatrix}$.',
            '3. **Save the Multiplier in $L$:** Place $\\ell_{21} = 3$ right into position $(2,1)$ of $L = \\begin{bmatrix} 1 & 0 \\\\ 3 & 1 \\end{bmatrix}$. Verify: $LU = \\begin{bmatrix} 1 & 0 \\\\ 3 & 1 \\end{bmatrix}\\begin{bmatrix} 2 & 4 \\\\ 0 & 3 \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\ 6 & 15 \\end{bmatrix} = A$!',
          ],
          ahaMoment:
            'Once you pay the $O(n^3)$ cost to build $A = LU$ once, solving $Ax = b$ for any new target $b$ splits into two quick triangular sweeps — $Ly = b$ forward and $Ux = y$ backward — each needing only $\\approx \\frac{n^2}{2}$ multiplications and subtractions (**$O(n^2)$**)!',
        },
        theoremAndFormula: {
          statement:
            'An invertible matrix $A \\in \\mathbb{R}^{n \\times n}$ admits an **$LU$ factorization without row swaps** ($L$ unit lower triangular, $U$ upper triangular) if and only if all its leading principal minors $\\Delta_1, \\Delta_2, \\dots, \\Delta_{n-1}$ are non-zero. With a permutation matrix $P$, **every** square matrix admits $PA = LU$. Dense Gaussian elimination costs $\\Theta(n^3)$ flops, whereas solving an already-triangular system $Ux = y$ costs $\\Theta(n^2)$ additions and multiplications.',
          formulaLatex:
            'A = LU \\;\\text{(no swaps)} \\iff \\Delta_1, \\dots, \\Delta_{n-1} \\neq 0, \\qquad \\text{Elimination: } O(n^3), \\quad \\text{Back-substitution } Ux=y: \\; O(n^2)',
          plainEnglishDecoding:
            'Let us count the exact work in back-substitution on an $n \\times n$ upper-triangular matrix $U$: the bottom row $n$ needs $0$ multiplications (just $1$ division: $x_n = y_n / U_{nn}$), row $n-1$ needs $1$ multiply-subtract, all the way up to row $1$ needing $n-1$ multiply-subtracts. Summing $0 + 1 + \\dots + (n-1) = \\frac{n(n-1)}{2}$ gives clean $O(n^2)$ — tested directly in **GATE DA 2025 Q.12**!',
          workedMiniExamples: [
            {
              prompt:
                'Does $A = \\begin{bmatrix} 0 & 3 \\\\ 2 & 5 \\end{bmatrix}$ have an $LU$ decomposition without row permutations?',
              solution:
                'No! Even though $\\det(A) = 0(5) - 3(2) = -6 \\neq 0$ (so $A$ is invertible), the first leading principal minor is $\\Delta_1 = A_{11} = 0$, so pivot $(1,1)$ vanishes and a row swap $P$ is mandatory ($PA = LU$).',
            },
            {
              prompt:
                'Given $A = LU$ with $U = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & -3 \\end{bmatrix}$, compute $\\det(A)$.',
              solution:
                'The determinant of any triangular matrix is the product of its main diagonal entries. Since $L$ has all $1$s on its diagonal, $\\det(L) = 1$, so $\\det(A) = \\det(L)\\det(U) = 1 \\cdot (2 \\times 4 \\times (-3)) = -24$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Every invertible $n \\times n$ matrix has an $A = LU$ factorization without row swaps.',
            reality:
              'False! Only $PA = LU$ always exists; $A = LU$ fails whenever a zero pivot occurs during elimination (i.e. some leading principal submatrix is singular).',
            counterExample: '$A = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ is invertible yet has no $LU$ without a swap.',
          },
          {
            myth: 'Solving $Ux = y$ for an $n \\times n$ upper-triangular matrix $U$ requires $O(n^3)$ operations.',
            reality:
              'False! Elimination to create $U$ takes $O(n^3)$, while back-substitution on an already-triangular $U$ takes only $O(n^2)$ additions and multiplications (GATE DA 2025 Q.12).',
            counterExample: 'For $n=100$, back-substitution needs $\\approx 100^2 = 10{,}000$ flops, not $10^6$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Fast Multi-Target Ridge & Cholesky Solves',
            whyItMatters:
              'In multi-output regression or cross-validation, factoring $(X^T X + \\lambda I) = L L^T$ (symmetric $LU$ = Cholesky) once in $O(d^3)$ lets you solve for each target in $O(d^2)$.',
          },
        ],
      },
      {
        id: 'm6-c3-3',
        title: 'Matrix Rank Inequalities: Product, Sum, Sylvester & Power Chains',
        subtitle: 'Bounding ranks of $AB$, $A+B$, and squeezing $A^3 = A$ without entries',
        priority: 'high-yield',
        buildsOn: 'Ch.2 Four Fundamental Subspaces & Rank-Nullity',
        whyStudy:
          'In Deep Learning and Recommender Systems, you constantly stack linear layers $W_2 W_1 x$ or compress huge user-item tables into low-rank products $U V^T$. If a hidden bottleneck layer has only $k = 16$ neurons, can the next layer magically recover $100$ independent dimensions of information? Never — matrix rank inequalities act as the **information bottleneck law** of Linear Algebra! In GATE DA, these inequalities also give you zero-entry superpowers to prove exact rank identities for abstract equations like $A^3 = A$ (**GATE DA 2025 Q.37**) or nilpotent caps $A^2 = 0$ without ever seeing a single number inside $A$.',
        groundRules: [
          '**The Information Bottleneck Law ($\\text{rank}(AB) \\le \\min(\\text{rank } A, \\text{rank } B)$):** Every column of $AB$ is a combination of columns of $A$ (so $C(AB) \\subseteq C(A)$), and every row of $AB$ is a combination of rows of $B$ (so $C((AB)^T) \\subseteq C(B^T)$). Therefore multiplying two matrices can ONLY shrink or maintain rank — it can NEVER create new independent dimensions!',
          '**Sylvester’s Floor ($\\text{rank}(A) + \\text{rank}(B) - n \\le \\text{rank}(AB)$):** While multiplying can drop rank, it cannot drop arbitrarily far if both matrices are large-rank! When $A \\in \\mathbb{R}^{m\\times n}$ and $B \\in \\mathbb{R}^{n\\times p}$ share inner dimension $n$, the output of $B$ has $\\text{rank}(B)$ dimensions and $A$ can kill at most $\\text{nullity}(A) = n - \\text{rank}(A)$ of them, leaving at least $\\text{rank}(B) - (n - \\text{rank}(A))$ dimensions alive!',
          '**Monotonic Power Chain ($\\text{rank}(A) \\ge \\text{rank}(A^2) \\ge \\text{rank}(A^3) \\ge \\dots$):** Applying the bottleneck law repeatedly to $A \\cdot A$ and $A^2 \\cdot A$ guarantees that raising a matrix to higher powers forms a one-way downhill staircase. Whenever an identity like $A^3 = A$ ties the bottom step back up to the top step, every step in between gets squeezed to equality!',
          '**Never Cancel a Potentially Singular Matrix:** Seeing $A^3 = A$ does NOT let you divide by $A$ to claim $A^2 = I_n$ (for example, $A = 0$ or a projection $A^2 = A$ satisfies $A^3 = A$ yet is singular!). Also remember $\\text{rank}(AB)$ does NOT always equal $\\text{rank}(BA)$, even though $\\text{rank}(A^T A) = \\text{rank}(A)$ always holds.',
        ],
        toyExample: {
          title: 'Multiplying Two Rank-1 Matrices Can Collapse to Zero',
          scenario:
            'Take $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ (rank $1$) and $B = \\begin{bmatrix} 0 & 0 \\\\ 0 & 1 \\end{bmatrix}$ (rank $1$). What happens to $\\text{rank}(AB)$?',
          walkthroughSteps: [
            '1. **Multiply Directly:** $AB = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}\\begin{bmatrix} 0 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$, which has **rank $0$**!',
            '2. **Why Did Rank Drop?** $B$ sends every vector onto the $y$-axis ($C(B) = \\text{span}([0,1]^T)$), and $A$ crushes the entire $y$-axis straight to $\\mathbf{0}$ ($C(B) \\subseteq N(A)$)!',
            '3. **Verify Both Bounds:** Upper bound gives $\\text{rank}(AB) \\le \\min(1, 1) = 1$, and Sylvester’s lower bound gives $\\text{rank}(A) + \\text{rank}(B) - n = 1 + 1 - 2 = 0 \\le \\text{rank}(AB)$. Both bounds hold tightly at $0$!',
          ],
          ahaMoment:
            'Think of matrix multiplication as a one-way ratchet on rank: multiplying by another matrix can only **shrink or keep** the rank, never raise it! That guarantees the chain $\\text{rank}(A) \\ge \\text{rank}(A^2) \\ge \\text{rank}(A^3) \\ge \\dots$ always slopes gently downward.',
        },
        theoremAndFormula: {
          statement:
            'For conformable matrices $A, B, C$ (with $A \\in \\mathbb{R}^{m\\times n}, B \\in \\mathbb{R}^{n\\times p}$, meaning inner dimensions match so $AB$ is valid):\n1. **Product Bound:** $\\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))$.\n2. **Sylvester’s Inequality:** $\\text{rank}(A) + \\text{rank}(B) - n \\le \\text{rank}(AB)$.\n3. **Frobenius Inequality:** $\\text{rank}(AB) + \\text{rank}(BC) \\le \\text{rank}(B) + \\text{rank}(ABC)$.\n4. **Sum Inequality:** $|\\text{rank}(A) - \\text{rank}(B)| \\le \\text{rank}(A+B) \\le \\text{rank}(A) + \\text{rank}(B)$.\n5. **Gram Invariance:** $\\text{rank}(A^T A) = \\text{rank}(A A^T) = \\text{rank}(A)$.',
          formulaLatex:
            '\\text{rank}(A) + \\text{rank}(B) - n \\le \\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))',
          plainEnglishDecoding:
            'Whenever an exam question hands you a matrix power identity like $A^3 = A$ (**GATE DA 2025 Q.37**), resist the temptation to cancel $A$! Simply write the gentle downhill chain $\\text{rank}(A^3) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$. Since $A^3 = A$ ties both endpoints together, the middle term gets pinched cleanly to $\\text{rank}(A^2) = \\text{rank}(A)$!',
          workedMiniExamples: [
            {
              prompt: 'If $A \\in \\mathbb{R}^{n \\times n}$ satisfies $A^3 = A$, prove $\\text{rank}(A) = \\text{rank}(A^2)$.',
              solution:
                'By the product bound, $\\text{rank}(A^3) = \\text{rank}(A^2 \\cdot A) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$. Substituting $A^3 = A$ on the far left gives $\\text{rank}(A) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$, pinching the middle to exact equality $\\text{rank}(A) = \\text{rank}(A^2)$ (GATE DA 2025 Q.37).',
            },
            {
              prompt: 'If $A \\in \\mathbb{R}^{7 \\times 7}$ satisfies $A^2 = 0$, what is the maximum possible $\\text{rank}(A)$?',
              solution:
                'Apply Sylvester with $B = A$ and $n = 7$: $\\text{rank}(A) + \\text{rank}(A) - 7 \\le \\text{rank}(A^2) = 0 \\implies 2\\,\\text{rank}(A) \\le 7 \\implies \\text{rank}(A) \\le 3.5$. Since rank must be a whole number, $\\text{rank}(A) \\le 3$ (achievable with three $2 \\times 2$ blocks $\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$ and one $[0]$ block on the diagonal!).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $A \\in \\mathbb{R}^{n \\times n}$ satisfies $A^3 = A$, then $A$ must be invertible or $A^2 = I_n$.',
            reality:
              'False! $A = 0$ or $A = \\text{diag}(1, 0, \\dots, 0)$ satisfies $A^3 = A$, yet is singular and $A^2 \\neq I_n$. Only $\\text{rank}(A) = \\text{rank}(A^2)$ holds for ALL solutions.',
            counterExample: '$A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ satisfies $A^3 = A$ with $\\text{rank}(A) = 1 < 2$.',
          },
          {
            myth: '$\\text{rank}(AB) = \\text{rank}(BA)$ always holds for $n \\times n$ matrices.',
            reality: 'False! While $\\text{tr}(AB) = \\text{tr}(BA)$ and $\\det(AB) = \\det(BA)$, rank is NOT invariant under order reversal!',
            counterExample:
              '$A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}, B = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix} \\implies AB = 0$ (rank 0) while $BA = A$ (rank 1).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 2: LA (Module 7)',
            targetWeek: 4,
            topic: 'Low-Rank SVD Approximation $A_k = U_k \\Sigma_k V_k^T$',
            whyItMatters:
              'Truncated SVD guarantees $\\text{rank}(U_k \\Sigma_k V_k^T) \\le k$ by the product rank bound, giving the optimal rank-$k$ compression of data matrices and recommender systems.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm6-c3-p1',
        title: 'The $(0, 1, \\infty)$ Matrix-Shape Compatibility Radar for $Mx=p$ & $Mx=q$',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2024 · Q.48'],
        problemStatement:
          'For a fixed matrix $M$ of shape $3\\times 3$, $2\\times 3$, or $3\\times 2$ and two right-hand vectors $p, q$, determine which pairs of solution counts from $\\{0, 1, \\infty\\}$ can simultaneously occur for $Mx=p$ and $Mx=q$.',
        triggerCue:
          'Two systems $Mx = p$ and $Mx = q$ sharing the SAME matrix $M$ with different RHS vectors $p, q$ across $3\\times 3, 2\\times 3, 3\\times 2$ dimensions.',
        bruteForceTrap:
          'Trying to construct separate numerical example matrices for all $9$ pairs $(0,1,\\infty) \\times (0,1,\\infty)$ across all 3 shapes.',
        mentalShift:
          'Stop testing examples and apply two rigid **Nullity Gates**: (1) Uniqueness ($1$) requires $\\text{nullity}(M) = 0$, whereas $\\infty$ requires $\\text{nullity}(M) \\ge 1$, so **$1$ and $\\infty$ NEVER co-exist**! (2) If $M$ has $\\text{rank}(M) = m$, then $C(M) = \\mathbb{R}^m$, so **$0$ is impossible**!',
        steps: [
          {
            label: 'Step 1 — Universal Rule: $(1, \\infty)$ Is Always Impossible',
            detail:
              'If $Mx = q$ has $1$ solution, $\\text{rank}(M) = n$, so $N(M) = \\{0\\}$; hence no other $p$ can have $\\infty$ solutions.',
          },
          {
            label: 'Step 2 — Wide Matrix ($2 \\times 3$, $m < n$)',
            detail:
              'Here $\\text{rank}(M) \\le 2 < 3$, so $\\text{nullity}(M) \\ge 1$ ALWAYS. Unique ($1$) solutions are impossible; $(0,0), (0,\\infty), (\\infty,\\infty)$ are all possible.',
          },
          {
            label: 'Step 3 — Square Matrix ($3 \\times 3$, $m = n$)',
            detail:
              'If $1$ solution occurs, $\\text{rank}(M) = 3 = m$, making $M$ invertible so $0$ is ALSO impossible! Thus $(0,1)$ is impossible for $3\\times 3$, whereas $(0,\\infty)$ is fine when $\\text{rank}(M) < 3$.',
          },
          {
            label: 'Step 4 — Tall Matrix ($3 \\times 2$, $m > n$)',
            detail:
              'If $\\text{rank}(M) = 2 = n < m$, $M$ has full column rank yet misses part of $\\mathbb{R}^3$, so $(0,1)$ IS possible! If $\\text{rank}(M) = 1 < 2$, $(0,\\infty)$ is possible.',
          },
        ],
        lockInTakeaway:
          'Check two locks: $\\text{rank}(M) = n$ unlocks $1$ (kills $\\infty$); $\\text{rank}(M) < m$ unlocks $0$. Square matrices tie both locks together ($1 \\iff$ never $0$)!',
      },
      {
        id: 'm6-c3-p2',
        title: 'The Rank Squeeze Chain for Matrix Polynomials ($A^3 = A$)',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2025 · Q.37'],
        problemStatement:
          'Suppose $A \\in \\mathbb{R}^{n \\times n}$ satisfies $A^3 = A$ (with $A$ possibly singular and not diagonalizable). Determine which rank or invertibility identities must ALWAYS hold.',
        triggerCue:
          '"For ANY $n \\times n$ matrix $A$ satisfying $A^3 = A$ (or $A^k = A^m$)..."',
        bruteForceTrap:
          'Only checking $A = 0$ and $A = I_n$, or assuming $A$ is invertible so you can cancel $A$ to get $A^2 = I$.',
        mentalShift:
          'Never cancel a matrix unless you are told it is invertible! Instead, squeeze the monotonic rank chain $\\text{rank}(A^3) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$ from both ends.',
        steps: [
          {
            label: 'Step 1 — Write the Universal Non-Increasing Chain',
            detail:
              'By $\\text{rank}(XY) \\le \\text{rank}(X)$, $\\text{rank}(A^3) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$ holds for EVERY square matrix $A$.',
          },
          {
            label: 'Step 2 — Substitute the Given Identity $A^3 = A$',
            detail:
              'Replace $\\text{rank}(A^3)$ with $\\text{rank}(A)$: $\\text{rank}(A) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$.',
          },
          {
            label: 'Step 3 — Squeeze the Middle Term',
            detail:
              'Pinched between $\\text{rank}(A)$ and $\\text{rank}(A)$, we get $\\text{rank}(A) = \\text{rank}(A^2)$ with zero assumptions on invertibility!',
          },
        ],
        lockInTakeaway:
          'Whenever $A^k = A$ ($k \\ge 2$), the monotonic chain $\\text{rank}(A^k) \\le \\dots \\le \\text{rank}(A^2) \\le \\text{rank}(A)$ collapses to $\\text{rank}(A) = \\text{rank}(A^2) = \\dots = \\text{rank}(A^k)$.',
      },
    ],
    arsenalCards: [
      {
        id: 'm6-c3-a1',
        badge: 'SYSTEMS',
        whenYouSpot: 'Consistency and multiplicity of $Mx=p$ and $Mx=q$',
        directWeaponLatex: '\\text{Consistent} \\iff \\text{rank}(M) = \\text{rank}([M\\mid p]), \\qquad 1 \\iff \\text{rank}(M)=n',
        instantRule:
          'For a fixed matrix $M$, $(1, \\infty)$ never co-occur. Square $n \\times n$ systems cannot have $(0,1)$. Wide $m < n$ systems never have $1$.',
        tenSecondExample:
          '$3 \\times 2$ matrix with independent columns has $0$ or $1$ solutions depending on $p \\in C(M)$ or $p \\notin C(M)$.',
        oneFatalTrap:
          'Assuming a tall $3 \\times 2$ matrix cannot give $\\infty$ solutions — it does whenever $\\text{rank}(M) \\le 1$!',
      },
      {
        id: 'm6-c3-a2',
        badge: 'GAUSS / LU',
        whenYouSpot: 'Triangular solve complexity or $A = LU$ existence',
        directWeaponLatex: '\\text{Elimination: } O(n^3), \\quad Ux = y: \\; O(n^2), \\quad A=LU \\iff \\Delta_1,\\dots,\\Delta_{n-1} \\neq 0',
        instantRule:
          'Back-substitution on an already-triangular $n\\times n$ matrix needs $\\frac{n(n-1)}{2}$ mults + $\\frac{n(n-1)}{2}$ adds = $O(n^2)$. $PA=LU$ always exists; $A=LU$ needs non-zero leading minors.',
        tenSecondExample:
          '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ needs $P$ swap ($\Delta_1 = 0$), so $A=LU$ fails without $P$.',
        oneFatalTrap:
          'Answering $O(n^3)$ when the matrix is ALREADY upper triangular (GATE DA 2025 Q.12)!',
      },
      {
        id: 'm6-c3-a3',
        badge: 'RANK-BOUNDS',
        whenYouSpot: 'Matrix products $AB$, nilpotent $A^2=0$, or power identities $A^3=A$',
        directWeaponLatex: '\\text{rank}(A)+\\text{rank}(B)-n \\le \\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))',
        instantRule:
          'If $A^2 = 0$ for $n\\times n$, $\\text{rank}(A) \\le \\lfloor n/2 \\rfloor$. If $A^3 = A$, $\\text{rank}(A^2) = \\text{rank}(A)$ by squeeze.',
        tenSecondExample:
          'For $7\\times 7$ $A$ with $A^2 = 0$, max rank is $\\lfloor 7/2 \\rfloor = 3$.',
        oneFatalTrap:
          'Cancelling $A$ in $A^3 = A$ to write $A^2 = I$ when $A$ may be singular!',
      },
    ],
    questions: [
      {
        id: 'm6-c3-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'Find the unique value of $k$ for which the linear system $x + 2y = 3,\\; 2x + ky = 5$ has NO solution.',
        natAnswer: { min: 4, max: 4, exactDisplay: '4' },
        triggerHint: 'Make the left-hand coefficients proportional ($\\text{rank}(A) = 1$) while the right-hand side is inconsistent.',
        intuitiveSolution: [
          '1. For the two lines to be parallel (or coincident), the ratio of $x, y$ coefficients must match: $\\frac{2}{1} = \\frac{k}{2} \\implies k = 4$.',
          '2. At $k = 4$, Row 2 left side is $2(x + 2y) = 2(3) = 6 \\neq 5$, so $\\text{rank}(A) = 1 \\neq 2 = \\text{rank}([A \\mid b])$ — zero solutions.',
        ],
        directShortcutUsed: 'Parallel slopes $k/2 = 2/1 \\implies k = 4$ with inconsistent RHS $6 \\neq 5$.',
      },
      {
        id: 'm6-c3-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.12',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Consider solving a system of linear equations $Ux = y$, where $U$ is an $n \\times n$ invertible **upper triangular** matrix. What is the asymptotic number of additions and multiplications required to solve for $x$ via back-substitution?',
        options: [
          {
            id: 'A',
            text: '$O(n)$',
            whyTrueOrFalse: 'False — only a diagonal matrix takes $O(n)$ divisions; an upper triangular matrix has $\\frac{n(n-1)}{2}$ off-diagonal entries.',
          },
          {
            id: 'B',
            text: '$O(n^2)$',
            whyTrueOrFalse:
              'True! Row $i$ ($i=n, n-1, \\dots, 1$) performs $(n-i)$ multiplications and $(n-i)$ subtractions, summing to $2 \\sum_{k=0}^{n-1} k = n(n-1) = O(n^2)$.',
          },
          {
            id: 'C',
            text: '$O(n^2 \\log n)$',
            whyTrueOrFalse: 'False — no sorting or divide-and-conquer log factor occurs in back-substitution.',
          },
          {
            id: 'D',
            text: '$O(n^3)$',
            whyTrueOrFalse:
              'False — $O(n^3)$ is the cost of full Gaussian elimination on a dense matrix BEFORE it becomes upper triangular.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: '$U$ is ALREADY upper triangular — skip elimination and count only back-substitution flops!',
        intuitiveSolution: [
          '1. Solve from bottom ($x_n$) to top ($x_1$): $x_i = \\frac{1}{U_{ii}}\\left(y_i - \\sum_{j=i+1}^n U_{ij} x_j\\right)$.',
          '2. Multiplications + additions at row $i$ scale as $2(n - i)$.',
          '3. Total operations $= \\sum_{i=1}^n 2(n-i) = n(n-1) = \\Theta(n^2)$.',
        ],
        directShortcutUsed: 'Triangular back-substitution = $\\frac{n(n-1)}{2}$ mults + adds $= O(n^2)$.',
      },
      {
        id: 'm6-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.37',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'Let $A \\in \\mathbb{R}^{n \\times n}$ be any matrix satisfying $A^3 = A$. Which of the following statements is ALWAYS true?',
        options: [
          {
            id: 'A',
            text: '$A^2 = I_n$',
            whyTrueOrFalse: 'False — $A = 0$ satisfies $A^3 = A$, yet $0^2 \\neq I_n$.',
          },
          {
            id: 'B',
            text: '$A$ is invertible',
            whyTrueOrFalse: 'False — $A = \\text{diag}(1, 0, \\dots, 0)$ satisfies $A^3 = A$ and is singular.',
          },
          {
            id: 'C',
            text: '$A = A^T$',
            whyTrueOrFalse:
              'False — e.g. $A = \\begin{bmatrix} 1 & 5 \\\\ 0 & 0 \\end{bmatrix}$ satisfies $A^2 = A \\implies A^3 = A$, yet $A \\neq A^T$.',
          },
          {
            id: 'D',
            text: '$\\text{rank}(A) = \\text{rank}(A^2)$',
            whyTrueOrFalse:
              'True! Always $\\text{rank}(A^3) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$; since $A^3 = A$, the ends are equal, squeezing $\\text{rank}(A) = \\text{rank}(A^2)$.',
          },
        ],
        correctOptions: ['D'],
        triggerHint: 'Never cancel $A$! Use the monotonic rank chain $\\text{rank}(A^3) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$.',
        intuitiveSolution: [
          '1. For any matrices $X, Y$, $\\text{rank}(XY) \\le \\text{rank}(X)$ and $\\text{rank}(XY) \\le \\text{rank}(Y)$.',
          '2. Therefore $\\text{rank}(A^3) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$.',
          '3. Because $A^3 = A$, $\\text{rank}(A^3) = \\text{rank}(A)$, pinching the middle inequality to equality: $\\text{rank}(A) = \\text{rank}(A^2)$.',
        ],
        directShortcutUsed: 'Power squeeze: $\\text{rank}(A) = \\text{rank}(A^3) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$.',
      },
      {
        id: 'm6-c3-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.48 (Concept Match)',
        year: 2024,
        marks: 2,
        type: 'MSQ',
        stem: 'Consider two systems of linear equations $Mx = p$ and $Mx = q$ with the same coefficient matrix $M$. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: 'If $M$ is $3 \\times 3$, it is IMPOSSIBLE for $Mx = p$ to have $0$ solutions and $Mx = q$ to have $1$ solution.',
            whyTrueOrFalse:
              'True! If $Mx = q$ has $1$ solution, then $\\text{rank}(M) = 3$, making $M$ invertible so $Mx = p$ must also have $1$ solution.',
          },
          {
            id: 'B',
            text: 'If $M$ is $2 \\times 3$, it is possible for $Mx = p$ to have $0$ solutions and $Mx = q$ to have infinitely many solutions.',
            whyTrueOrFalse:
              'True! Take $M = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$, $p = [0, 1]^T$ ($0$ solutions), and $q = [1, 0]^T$ ($\\infty$ solutions).',
          },
          {
            id: 'C',
            text: 'If $M$ is $3 \\times 2$, it is possible for $Mx = p$ to have $0$ solutions and $Mx = q$ to have $1$ solution.',
            whyTrueOrFalse:
              'True! Take $M = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$, $p = [0,0,1]^T$ ($0$ solutions), and $q = [1,1,0]^T$ ($1$ solution).',
          },
          {
            id: 'D',
            text: 'If $M$ is $3 \\times 2$, it is possible for $Mx = p$ to have $1$ solution and $Mx = q$ to have infinitely many solutions.',
            whyTrueOrFalse:
              'False! For ANY matrix $M$, $1$ solution forces $\\text{nullity}(M) = 0$, whereas $\\infty$ solutions forces $\\text{nullity}(M) \\ge 1$ — contradiction!',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Apply the Nullity Gate: $1$ vs $\\infty$ depends solely on $M$, never on $p$ or $q$.',
        intuitiveSolution: [
          '(A) Square $3 \\times 3$ with a unique solution has $\\text{rank}(M)=3 \\implies C(M)=\\mathbb{R}^3$, so $0$ solutions cannot occur.',
          '(B) Wide $2 \\times 3$ always has $\\text{nullity} \\ge 1$; if $\\text{rank}(M) = 1 < 2$, $(0, \\infty)$ occurs.',
          '(C) Tall $3 \\times 2$ with $\\text{rank}(M) = 2$ gives $1$ solution for $q \\in C(M)$ and $0$ for $p \\notin C(M)$.',
          '(D) $(1, \\infty)$ is impossible for EVERY matrix of ANY dimension.',
        ],
        directShortcutUsed: 'Nullity Gate ($1$ and $\\infty$ mutually exclusive) + Shape Rank Rules.',
      },
      {
        id: 'm6-c3-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber LU & Rank MSQ',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following statements about $n \\times n$ real matrices $A, B$ ($n \\ge 2$) is/are ALWAYS true?',
        options: [
          {
            id: 'A',
            text: '$\\text{rank}(A^T A) = \\text{rank}(A)$.',
            whyTrueOrFalse: 'True! $N(A^T A) = N(A)$, so by Rank-Nullity $\\text{rank}(A^T A) = n - \\dim N(A^T A) = n - \\dim N(A) = \\text{rank}(A)$.',
          },
          {
            id: 'B',
            text: '$\\text{rank}(AB) = \\text{rank}(BA)$.',
            whyTrueOrFalse:
              'False! For $A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}, B = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$, $AB = 0$ (rank $0$) while $BA = A$ (rank $1$).',
          },
          {
            id: 'C',
            text: 'If $A$ is invertible, then $A = LU$ always exists without row permutations.',
            whyTrueOrFalse:
              'False! $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ is invertible, yet its $(1,1)$ pivot is $0$, requiring a row swap $PA = LU$.',
          },
          {
            id: 'D',
            text: '$\\text{rank}(A + B) \\le \\text{rank}(A) + \\text{rank}(B)$.',
            whyTrueOrFalse:
              'True! Every column of $A + B$ lies in $C(A) + C(B)$, whose dimension is at most $\\dim C(A) + \\dim C(B)$.',
          },
        ],
        correctOptions: ['A', 'D'],
        triggerHint: 'Test B with $2 \\times 2$ shift/projection pairs and test C with the swap matrix $\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$.',
        intuitiveSolution: [
          '(A) $A^T A x = 0 \\iff \\|Ax\\|_2^2 = 0 \\iff Ax = 0$, so nullities and hence ranks match.',
          '(B) Matrix multiplication does not commute and neither does $\\text{rank}(AB)$ in general.',
          '(C) Leading principal minors must be non-zero for $A = LU$ without row swaps.',
          '(D) Subadditivity of rank holds for all matrices of the same dimensions.',
        ],
        directShortcutUsed: 'Gram rank invariance + Rank subadditivity + $2 \\times 2$ counterexamples.',
      },
      {
        id: 'm6-c3-q6',
        tier: 'tricky',
        sourceLabel: 'Sylvester Inequality Drill',
        marks: 2,
        type: 'NAT',
        stem: 'Let $A \\in \\mathbb{R}^{7 \\times 7}$ satisfy $A^2 = 0$. What is the maximum possible value of $\\text{rank}(A)$?',
        natAnswer: { min: 3, max: 3, exactDisplay: '3' },
        triggerHint: 'Apply Sylvester’s rank inequality $\\text{rank}(A) + \\text{rank}(B) - n \\le \\text{rank}(AB)$ with $B = A$.',
        intuitiveSolution: [
          '1. Set $B = A$ and $n = 7$ in Sylvester’s inequality: $\\text{rank}(A) + \\text{rank}(A) - 7 \\le \\text{rank}(A^2) = 0$.',
          '2. Therefore $2\\,\\text{rank}(A) \\le 7 \\implies \\text{rank}(A) \\le 3.5$.',
          '3. Since rank is an integer, $\\text{rank}(A) \\le 3$ (achieved by placing three $\\begin{bmatrix}0 & 1\\\\ 0 & 0\\end{bmatrix}$ blocks and one $[0]$ block on the diagonal).',
        ],
        directShortcutUsed: 'Sylvester with $A^2 = 0$: $\\text{rank}(A) \\le \\lfloor n/2 \\rfloor = \\lfloor 7/2 \\rfloor = 3$.',
      },
    ],
  },
]

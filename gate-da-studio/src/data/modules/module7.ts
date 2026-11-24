import type { ChapterData } from '../../types/curriculum'

export const MODULE_7_CHAPTERS: ChapterData[] = [
  {
    id: 'la2-ch1',
    number: 1,
    title: 'Orthogonal Projections, Gram-Schmidt QR & Rotation Matrices',
    shortTitle: 'Projections, QR & Rotations',
    estimatedHours: 3.5,
    dayLabel: 'Week 3 · Day 4',
    tagline:
      'Discover why perpendicular axes make Linear Algebra feel like magic! Together we will spin vectors with rotation matrices without changing their length, drop clean orthogonal shadows onto lines and subspaces, straighten any basis via Gram-Schmidt $A = QR$, and unlock the geometry powering Least Squares and centering matrices.',
    syllabusMapping: [
      'Vector spaces, orthogonality, orthonormal bases & orthogonal matrices',
      'Orthogonal projections, projection matrices & Gram-Schmidt QR factorization',
      'Rotation matrices and norm-preserving linear transformations',
    ],
    whatIsImportant: [
      'Orthogonal matrices ($Q^T Q = I_n$): norm preservation $\\|Qx\\|_2 = \\|x\\|_2$ and $2\\times 2$ rotation powers $R(\\theta)^k = R(k\\theta)$ (GATE DA 2025 Q.52, 2026 Q.21)',
      'Orthogonal projection matrices ($P^2 = P = P^T$): nullity $n - \\dim U$, eigenvalues $\\in \\{0, 1\\}$, and $\\text{rank}(P) = \\text{tr}(P)$ (GATE DA 2024 Q.49, 2025 Q.50)',
      'Centering projection matrix $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$: symmetric, idempotent ($M^2 = M$, NOT $I_n$), trace $n - 1$ (GATE DA 2026 Q.52)',
      'Gram-Schmidt orthogonalization & $A = QR$ factorization for clean least-squares solving $R\\hat{x} = Q^T b$',
    ],
    whatIsNotImportant: [
      'Householder reflections or Givens rotations implementation details — 0 GATE DA marks',
      'Infinite-dimensional Hilbert space projections or Fourier orthogonal series',
    ],
    inboundStream:
      'Module 6 (Linear Algebra I): Vector spaces, subspaces, linear independence, rank-nullity, and $Ax = b$ solution sets.',
    outboundStream: [
      'Module 7 Ch.2–3: Spectral Theorem ($Q\\Lambda Q^T$) and SVD ($U\\Sigma V^T$) orthogonal bases',
      'Module 14 (ML): Ordinary Least Squares closed form $(X^T X)^{-1} X^T y$ as orthogonal projection',
      'Module 15 (ML): Mean-centering & orthogonal principal components in PCA (GATE DA 2026 Q.11)',
    ],
    glossary: [
      {
        term: 'Orthogonal Vectors',
        symbol: '$u^T v = 0$',
        plainEnglish:
          'Two vectors are orthogonal when they meet at an exact $90^\\circ$ right angle, meaning their dot product vanishes and they share zero component along each other.',
        tinyExample: '$[3, 4]^T$ and $[-4, 3]^T$ are orthogonal because $3(-4) + 4(3) = 0$.',
      },
      {
        term: 'Orthonormal Set / Basis',
        symbol: '$q_i^T q_j = \\delta_{ij}$',
        plainEnglish:
          'Think of an orthonormal set as perpendicular unit rulers: every vector has exact length $1$, and every distinct pair meets at $90^\\circ$ — guaranteeing automatic linear independence.',
        tinyExample: '$\\{\\frac{1}{\\sqrt{2}}[1, 1]^T,\\; \\frac{1}{\\sqrt{2}}[-1, 1]^T\\}$ is an orthonormal basis of $\\mathbb{R}^2$.',
      },
      {
        term: 'Orthogonal Matrix',
        symbol: '$Q^T Q = Q Q^T = I_n$',
        plainEnglish:
          'A square matrix whose columns are orthonormal is called orthogonal — its best superpower is that its inverse is simply its transpose ($Q^{-1} = Q^T$), saving you from elimination forever.',
        tinyExample: 'Any 2D rotation $R(\\theta)$ or reflection $\\text{diag}(1, -1)$ is an orthogonal matrix with $\\det(Q) = \\pm 1$.',
      },
      {
        term: 'Rotation Matrix',
        symbol: '$R(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$',
        plainEnglish:
          'Multiplying by $R(\\theta)$ spins every 2D arrow counter-clockwise by angle $\\theta$ without stretching or flipping it; repeating the spin $k$ times simply adds the angles: $R(\\theta)^k = R(k\\theta)$.',
        tinyExample: 'For $\\theta = 2\\pi/5$, $R(\\theta)^5 = R(2\\pi) = I_2$, so $R(\\theta)^{2026} = R(\\theta)$.',
      },
      {
        term: 'Norm-Preserving Map (Isometry)',
        symbol: '$\\|Ax\\|_2 = \\|x\\|_2\\;\\forall x$',
        plainEnglish:
          'A rigid motion that keeps every vector’s length and every angle completely frozen — for real square matrices, preserving all Euclidean norms is 100% equivalent to $A^T A = I_n$.',
        tinyExample: 'Rotations and reflections are isometries; note that $R(\\pi/2)$ preserves norms yet has complex eigenvalues $\\pm i$.',
      },
      {
        term: 'Orthogonal Projection',
        symbol: '$p = Pb$',
        plainEnglish:
          'Think of dropping a vertical flashlight shadow from point $b$ straight down at $90^\\circ$ onto a line or subspace $U$ — the shadow $p$ is the single closest point in $U$ to $b$.',
        tinyExample: 'Projecting $[3, 1]^T$ onto $\\text{span}([1, 1]^T)$ lands at $[2, 2]^T$ with perpendicular error $[1, -1]^T$.',
      },
      {
        term: 'Projection Matrix',
        symbol: '$P^2 = P,\\; P^T = P$',
        plainEnglish:
          'The linear operator that performs orthogonal projection onto subspace $U$; it keeps everything in $U$ untouched (eigenvalue $1$) and flattens $U^\\perp$ to zero (eigenvalue $0$), with $\\text{tr}(P) = \\text{rank}(P) = \\dim U$.',
        tinyExample: 'If $Q \\in \\mathbb{R}^{10\\times 5}$ has orthonormal columns, $P = Q Q^T$ has rank $5$ and nullity $5$.',
      },
      {
        term: 'Normal Equations',
        symbol: '$A^T A \\hat{x} = A^T b$',
        plainEnglish:
          'When $Ax = b$ has no exact solution, forcing the error vector $b - A\\hat{x}$ to stand perpendicular to every column of $A$ immediately writes down the normal equations for the best least-squares fit.',
        tinyExample: 'For 1D line $a = [2, 1]^T$ and $b = [5, 1]^T$, $5\\alpha = 11$ gives $\\alpha = 2.2$.',
      },
      {
        term: 'Centering Matrix',
        symbol: '$M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$',
        plainEnglish:
          'Subtracting a vector’s mean from every entry is literally an orthogonal projection onto the zero-sum hyperplane $\\mathbf{1}^\\perp$, so $M^T = M = M^2$ (NOT $I_n$!) and $\\text{tr}(M) = n - 1$.',
        tinyExample: 'On $x = [2, 5, 8]^T$ (mean $5$), $Mx = [-3, 0, 3]^T$ and $\\text{tr}(M) = 2$.',
      },
      {
        term: 'Gram-Schmidt Orthogonalization',
        symbol: '$u_k = a_k - \\sum_{j=1}^{k-1}(q_j^T a_k)q_j$',
        plainEnglish:
          'A step-by-step straightening recipe: take each tilted basis vector $a_k$, peel off its shadows along all previously built perpendicular unit vectors $q_j$, and divide by its length to get $q_k$.',
        tinyExample: 'From $a_1=[3,0]^T, a_2=[2,4]^T$, peeling $2q_1$ from $a_2$ leaves $[0,4]^T$, normalizing to $q_2=[0,1]^T$.',
      },
      {
        term: 'QR Factorization',
        symbol: '$A = QR$',
        plainEnglish:
          'This packages Gram-Schmidt into one sleek equation: $Q$ holds the orthonormal directions and upper-triangular $R$ records the coordinates needed to rebuild $A$, turning least squares into quick back-substitution $R\\hat{x} = Q^T b$.',
        tinyExample: 'For $A = \\begin{bmatrix} 3 & 2 \\\\ 0 & 4 \\end{bmatrix}$, $Q = I_2$ and $R = \\begin{bmatrix} 3 & 2 \\\\ 0 & 4 \\end{bmatrix}$.',
      },
    ],
    generatorId: 'rotation-power-gen',
    concepts: [
      {
        id: 'm7-c1-1',
        title: 'Orthogonality, Orthonormal Bases & Rotation Matrices',
        subtitle: 'Transformations that rotate or reflect space while freezing every length and angle',
        priority: 'core-pillar',
        buildsOn: 'Dot products, Euclidean norm \\|x\\|_2, and matrix transposes',
        toyExample: {
          title: 'Spinning a 3-4-5 Right Triangle by 90° Without Stretching It',
          scenario:
            'Take vector $x = [3, 4]^T$ of length $\\|x\\|_2 = \\sqrt{3^2 + 4^2} = 5$. Multiply it by the $90^\\circ$ counter-clockwise rotation matrix $Q = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$.',
          walkthroughSteps: [
            '1. **Compute $Qx$:** $Qx = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix} \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} -4 \\\\ 3 \\end{bmatrix}$.',
            '2. **Check Length:** $\\|Qx\\|_2 = \\sqrt{(-4)^2 + 3^2} = 5 = \\|x\\|_2$. Nothing stretched or shrank!',
            '3. **Check Angle with $x$:** $x^T (Qx) = 3(-4) + 4(3) = 0$ — it rotated cleanly by $90^\\circ$.',
            '4. **Inspect Columns of $Q$:** $q_1 = [0, 1]^T$ and $q_2 = [-1, 0]^T$ each have unit length ($\\|q_i\\|_2 = 1$) and are perpendicular ($q_1^T q_2 = 0$), so $Q^T Q = I_2$ and $Q^{-1} = Q^T$!',
          ],
          ahaMoment:
            'Look at the reward of having orthonormal columns in a square matrix $Q$: flipping it on its side ($Q^T$) completely undoes $Q$ for free! Even better, spinning twice by $\\theta$ is literally the same as spinning once by $2\\theta$, so $R(\\theta)^k = R(k\\theta)$.',
        },
        theoremAndFormula: {
          statement:
            'A real square matrix $Q \\in \\mathbb{R}^{n\\times n}$ is **orthogonal** if its columns form an orthonormal set, equivalently $Q^T Q = Q Q^T = I_n \\iff Q^{-1} = Q^T$. Orthogonal maps preserve all inner products $(Qx)^T(Qy) = x^T y$ and Euclidean norms $\\|Qx\\|_2 = \\|x\\|_2$, and satisfy $\\det(Q) = \\pm 1$. In $\\mathbb{R}^2$, counter-clockwise rotation by $\\theta$ is $R(\\theta)$, which forms a commutative group under angle addition.',
          formulaLatex:
            'Q^T Q = I_n \\iff \\|Qx\\|_2 = \\|x\\|_2\\;\\forall x \\in \\mathbb{R}^n, \\qquad R(\\theta)^k = \\begin{bmatrix} \\cos(k\\theta) & -\\sin(k\\theta) \\\\ \\sin(k\\theta) & \\cos(k\\theta) \\end{bmatrix}',
          plainEnglishDecoding:
            'Here is your exam shortcut: whenever you need the inverse of an orthogonal matrix, skip Gaussian elimination completely and just take its transpose! And whenever a $2\\times 2$ rotation matrix $R(\\theta)$ is raised to a scary power like $2026$, just multiply the angle $\\theta$ by $2026$ and wrap around $2\\pi$.',
          workedMiniExamples: [
            {
              prompt: 'Check if $Q = \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}$ is orthogonal and find $Q^{-1}$.',
              solution:
                'Column dot products: $q_1^T q_1 = \\frac{1}{2}(1+1) = 1$, $q_2^T q_2 = \\frac{1}{2}(1+1) = 1$, $q_1^T q_2 = \\frac{1}{2}(1-1) = 0$. Hence $Q^T Q = I_2$, so $Q$ is orthogonal and $Q^{-1} = Q^T = Q$ (a reflection across $22.5^\\circ$, with $\\det Q = -1$).',
            },
            {
              prompt: 'Simplify $M^{2026}$ when $M = R(2\\pi/5)$ (GATE DA 2026 · Q.21).',
              solution:
                'Since $M^5 = R(5 \\cdot 2\\pi/5) = R(2\\pi) = I_2$ and $2026 = 5 \\times 405 + 1$, we get $M^{2026} = (M^5)^{405} M = I_2^{405} M = M$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $A \\in \\mathbb{R}^{n\\times n}$ satisfies $\\|Ax\\|_2 = \\|x\\|_2$ for all $x$, then all eigenvalues of $A$ are real and in $\\{-1, +1\\}$.',
            reality:
              'False! A rotation matrix in $\\mathbb{R}^2$ (for $\\theta \\notin \\{0, \\pi\\}$) preserves every length yet rotates every vector off its line — it has NO real eigenvectors, only complex eigenvalues $e^{\\pm i\\theta}$ of modulus $1$.',
            counterExample: '$R(\\pi/2) = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ has eigenvalues $+i$ and $-i$, neither real nor $\\pm 1$ (GATE DA 2025 · Q.52).',
          },
          {
            myth: 'Every vector space $\\mathbb{R}^n$ ($n \\ge 2$) has a unique orthonormal basis.',
            reality:
              'False! Rotating the standard basis $\\{e_1, \\dots, e_n\\}$ by any orthogonal matrix $Q$ creates another valid orthonormal basis, though any orthonormal set is always linearly independent.',
            counterExample: 'Both $\\{[1,0]^T, [0,1]^T\\}$ and $\\{[\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}]^T, [-\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}]^T\\}$ are orthonormal bases of $\\mathbb{R}^2$ (GATE DA 2025 · Q.25).',
          },
          {
            myth: 'If tall matrix $Q \\in \\mathbb{R}^{m\\times n}$ ($m > n$) has orthonormal columns, then both $Q^T Q = I_n$ and $Q Q^T = I_m$.',
            reality:
              'Only $Q^T Q = I_n$ holds! $Q Q^T$ is an $m\\times m$ matrix of rank $n < m$, so it cannot equal $I_m$ — it is the orthogonal projection matrix onto $\\text{Col}(Q)$.',
            counterExample: 'For $q = [1, 0]^T$, $q^T q = 1$ while $q q^T = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix} \\neq I_2$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'PCA Principal Axes Orthogonality',
            whyItMatters:
              'Principal components are mutually orthogonal unit eigenvectors of the covariance matrix, so the angle between the 1st and 10th principal components is always $90^\\circ$.',
            pyqProof: 'GATE DA 2026 · Q.11 (1M MCQ)',
          },
        ],
      },
      {
        id: 'm7-c1-2',
        title: 'Orthogonal Projections onto Lines & Subspaces',
        subtitle: 'Finding the closest point in a subspace by forcing the error vector to be perpendicular',
        priority: 'core-pillar',
        buildsOn: 'Dot product, column space \\text{Col}(A), and null space \\text{Null}(A^T)',
        sandboxId: 'projection-eigen-lab',
        toyExample: {
          title: 'Dropping a Perpendicular Shadow from $[3, 1]^T$ onto the Line $y = x$',
          scenario:
            'Suppose our target vector is $b = [3, 1]^T$, and we are restricted to walk only along the line spanned by $a = [1, 1]^T$. What point $p = \\alpha a$ on that line is closest to $b$?',
          walkthroughSteps: [
            '1. **Geometric Rule:** The shortest distance from a point $b$ to a line hits at a $90^\\circ$ angle! So the residual error $e = b - \\alpha a$ must be perpendicular to $a$: $a^T (b - \\alpha a) = 0$.',
            '2. **Solve for $\\alpha$:** $a^T b - \\alpha (a^T a) = 0 \\implies \\alpha = \\frac{a^T b}{a^T a} = \\frac{1(3) + 1(1)}{1^2 + 1^2} = \\frac{4}{2} = 2$.',
            '3. **Projection & Error:** $p = 2[1, 1]^T = [2, 2]^T$, and $e = b - p = [3, 1]^T - [2, 2]^T = [1, -1]^T$.',
            '4. **Verify Orthogonality:** $a^T e = 1(1) + 1(-1) = 0$, and Pythagoras checks out: $\\|p\\|_2^2 + \\|e\\|_2^2 = 8 + 2 = 10 = \\|b\\|_2^2$!',
          ],
          ahaMoment:
            'Rewriting $p = a \\frac{a^T b}{a^T a} = \\left(\\frac{a a^T}{a^T a}\\right) b = P b$ reveals the projection matrix $P$ right in front of you! And because a shadow already lying on the line does not move when you project it a second time ($P^2 b = P b$), we immediately get $P^2 = P$.',
        },
        theoremAndFormula: {
          statement:
            'Given a matrix $A \\in \\mathbb{R}^{m\\times n}$ with linearly independent columns spanning subspace $U = \\text{Col}(A)$, the closest point $p = A\\hat{x} \\in U$ to $b \\in \\mathbb{R}^m$ satisfies the **normal equations** $A^T(b - A\\hat{x}) = 0 \\iff A^T A \\hat{x} = A^T b$. The **orthogonal projection matrix** onto $U$ is $P = A(A^T A)^{-1}A^T$ (simplifying to $P = Q Q^T$ when $Q$ has orthonormal columns spanning $U$). Every orthogonal projection matrix satisfies $P^T = P$ and $P^2 = P$, has eigenvalues strictly in $\\{0, 1\\}$, and satisfies $\\text{rank}(P) = \\text{tr}(P) = \\dim(U)$ and $\\text{nullity}(P) = m - \\dim(U)$.',
          formulaLatex:
            'P = A(A^T A)^{-1} A^T = Q Q^T, \\qquad P^T = P = P^2, \\qquad \\text{tr}(P) = \\text{rank}(P) = \\dim(U)',
          plainEnglishDecoding:
            'Picture what $P$ does to every direction in space: vectors already inside $U$ stay right where they are ($Pu = u$, eigenvalue $1$), while vectors perpendicular to $U$ get flattened to zero ($Pw = 0$, eigenvalue $0$). Subtracting the 1D projection onto $\\text{span}(\\mathbf{1})$ from $I_n$ hands you the **centering matrix** $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$, which projects cleanly onto the $(n-1)$-dimensional zero-sum hyperplane $\\mathbf{1}^\\perp$!',
          workedMiniExamples: [
            {
              prompt: 'Apply the centering matrix $M = I_3 - \\frac{1}{3}\\mathbf{1}\\mathbf{1}^T$ to $x = [2, 5, 8]^T$ and find $\\text{tr}(M)$.',
              solution:
                'Mean $\\bar{x} = \\frac{2+5+8}{3} = 5$, so $Mx = x - \\bar{x}\\mathbf{1} = [-3, 0, 3]^T$ (mean is now $0$!). Trace $\\text{tr}(M) = \\text{tr}(I_3) - \\frac{1}{3}\\text{tr}(\\mathbf{1}\\mathbf{1}^T) = 3 - \\frac{1}{3}(3) = 2 = 3 - 1$.',
            },
            {
              prompt: 'If $x_1, \\dots, x_5 \\in \\mathbb{R}^{10}$ are orthonormal and $A = \\sum_{i=1}^5 x_i x_i^T$, find $\\text{rank}(A)$ and $\\dim(\\text{Null}(A))$ (GATE DA 2025 · Q.50).',
              solution:
                'Writing $Q = [x_1\\;\\cdots\\;x_5] \\in \\mathbb{R}^{10\\times 5}$, $A = Q Q^T$ is the orthogonal projection onto the $5$-D subspace $\\text{span}(x_1,\\dots,x_5)$. Thus $\\text{rank}(A) = 5$ and $\\dim(\\text{Null}(A)) = 10 - 5 = 5$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'The centering matrix $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ ($n \\ge 2$) satisfies $M^2 = I_n$.',
            reality:
              'False! $M$ is an orthogonal projection, NOT a reflection — so $M^2 = M$, which cannot equal $I_n$ because $\\text{rank}(M) = n - 1 < n$ ($M\\mathbf{1} = 0$).',
            counterExample: 'For $n = 2$, $M = \\frac{1}{2}\\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}$ satisfies $M^2 = M \\neq I_2$ (GATE DA 2026 · Q.52).',
          },
          {
            myth: 'A non-trivial orthogonal projection matrix $P$ onto a proper subspace $U \\subsetneq \\mathbb{R}^n$ can be invertible.',
            reality:
              'False! Since $\\dim(U) < n$, $\\dim(U^\\perp) = n - \\dim(U) \\ge 1$, so $\\text{Null}(P) = U^\\perp$ contains non-zero vectors and $\\det(P) = 0$.',
            counterExample: 'Any $M \\in \\mathbb{R}^{3\\times 3}$ projecting onto a 2D plane has a 1D normal line in $\\text{Null}(M)$ (GATE DA 2024 · Q.49).',
          },
          {
            myth: 'Any square matrix satisfying $P^2 = P$ is an orthogonal projection.',
            reality:
              'False! $P^2 = P$ only defines a general (possibly oblique) projection. For an *orthogonal* projection, you ALSO need symmetry: $P^T = P$.',
            counterExample: '$P = \\begin{bmatrix} 1 & 1 \\\\ 0 & 0 \\end{bmatrix}$ satisfies $P^2 = P$, yet $P^T \\neq P$ and its eigenvalues/singular values do not match ($\sigma_1 = \\sqrt{2} > 1$).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Ordinary Least Squares (OLS) Closed-Form Solution',
            whyItMatters:
              'Minimizing $\\|y - Xw\\|_2^2$ finds the orthogonal projection $\\hat{y} = X\\hat{w}$ of target vector $y$ onto the feature column space $\\text{Col}(X)$, giving the normal equations $X^T X \\hat{w} = X^T y \\implies \\hat{w} = (X^T X)^{-1} X^T y$.',
            pyqProof: 'GATE DA 2025 · Q.34 (1M NAT)',
          },
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'PCA Data Centering & Rayleigh Maximization',
            whyItMatters:
              'Centering a dataset multiplies the data matrix by $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$, whose exact eigenvalues $\\{1, 0\\}$ were tested twice in GATE DA 2026.',
            pyqProof: 'GATE DA 2026 · Q.52 & Q.65',
          },
        ],
      },
      {
        id: 'm7-c1-3',
        title: 'Gram-Schmidt Process & QR Factorization ($A = QR$)',
        subtitle: 'Peeling off projections step-by-step to turn any independent basis into an orthonormal one',
        priority: 'high-yield',
        buildsOn: 'Orthogonal projections onto 1D lines and upper triangular back-substitution',
        toyExample: {
          title: 'Straightening Two Tilted Vectors into Perpendicular Unit Axes',
          scenario:
            'Start with two linearly independent columns $a_1 = [3, 0]^T$ and $a_2 = [2, 4]^T$ forming $A = \\begin{bmatrix} 3 & 2 \\\\ 0 & 4 \\end{bmatrix}$. Convert them into orthonormal $q_1, q_2$ and recover $A = QR$.',
          walkthroughSteps: [
            '1. **Normalize $a_1$:** $r_{11} = \\|a_1\\|_2 = 3$, so $q_1 = \\frac{a_1}{3} = [1, 0]^T$.',
            '2. **Subtract $a_2$’s shadow along $q_1$:** $r_{12} = q_1^T a_2 = 1(2) + 0(4) = 2$. Peel it off: $u_2 = a_2 - r_{12} q_1 = [2, 4]^T - 2[1, 0]^T = [0, 4]^T$.',
            '3. **Normalize $u_2$:** $r_{22} = \\|u_2\\|_2 = 4$, so $q_2 = \\frac{u_2}{4} = [0, 1]^T$. Notice $q_1^T q_2 = 0$!',
            '4. **Pack into $A = QR$:** $Q = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ and $R = \\begin{bmatrix} r_{11} & r_{12} \\\\ 0 & r_{22} \\end{bmatrix} = \\begin{bmatrix} 3 & 2 \\\\ 0 & 4 \\end{bmatrix}$.',
          ],
          ahaMoment:
            'Notice how gentle Gram-Schmidt is: it never alters the span! Because each fresh unit vector $q_k$ is built purely from $a_1, \\dots, a_k$, writing $a_k$ back in terms of $q_1, \\dots, q_k$ automatically gives an upper-triangular matrix $R$ with strictly positive numbers down its diagonal.',
        },
        theoremAndFormula: {
          statement:
            'If $A \\in \\mathbb{R}^{m\\times n}$ ($m \\ge n$) has linearly independent columns, the **Gram-Schmidt process** produces a unique thin factorization $A = QR$ where $Q \\in \\mathbb{R}^{m\\times n}$ has orthonormal columns ($Q^T Q = I_n$) and $R \\in \\mathbb{R}^{n\\times n}$ is upper triangular with strictly positive diagonal entries $R_{kk} > 0$. Substituting $A = QR$ into the normal equations $A^T A \\hat{x} = A^T b$ collapses $A^T A$ into $R^T R$, simplifying least squares to back-substitution on $R\\hat{x} = Q^T b$.',
          formulaLatex:
            'u_k = a_k - \\sum_{j=1}^{k-1}(q_j^T a_k) q_j, \\quad q_k = \\frac{u_k}{\\|u_k\\|_2}, \\qquad A = QR \\implies R\\hat{x} = Q^T b',
          plainEnglishDecoding:
            'Think of $A = QR$ as a tidy partnership: $Q$ gives you the clean perpendicular unit axes, while $R$ acts as the recipe book telling you how much of each $q_j$ goes into building column $a_k$ ($R_{jk} = q_j^T a_k$). Since $R$ is upper triangular, solving $R\\hat{x} = Q^T b$ is just quick back-substitution and avoids squaring numerical errors inside $A^T A$!',
          workedMiniExamples: [
            {
              prompt: 'Find the thin $QR$ factorization of $A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$.',
              solution:
                '$R_{11} = \\|a_1\\|_2 = 1 \\implies q_1 = [1,0,0]^T$. Then $R_{12} = q_1^T a_2 = 1$, $u_2 = a_2 - 1\\cdot q_1 = [0,1,0]^T$, $R_{22} = 1$, $q_2 = [0,1,0]^T$. Thus $Q = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$ and $R = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$.',
            },
            {
              prompt: 'Using $A = QR$ above, find the least-squares solution $\\hat{x}$ to $Ax \\approx b = [2, 3, 5]^T$.',
              solution:
                'Compute $Q^T b = [2, 3]^T$. Solve $R\\hat{x} = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}\\begin{bmatrix} \\hat{x}_1 \\\\ \\hat{x}_2 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} \\implies \\hat{x}_2 = 3,\\; \\hat{x}_1 = -1$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: '$QR$ factorization only exists for square invertible matrices.',
            reality:
              'False! Any tall $m\\times n$ matrix ($m \\ge n$) with linearly independent columns has a unique thin $QR$ factorization with $R_{kk} > 0$.',
            counterExample: '$A = [1, 1]^T \\in \\mathbb{R}^{2\\times 1}$ factors as $Q = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}, R = [\\sqrt{2}]$.',
          },
          {
            myth: 'If $A = QR$ has linearly independent columns, then $Q Q^T = I_m$.',
            reality:
              'Only when $m = n$ (square $A$)! When $m > n$, $Q$ is rectangular ($m\\times n$), so $Q^T Q = I_n$ while $Q Q^T$ is the rank-$n$ projection onto $\\text{Col}(A)$.',
            counterExample: 'For $A = [1, 0]^T$, $Q = [1, 0]^T$ gives $Q^T Q = [1]$ but $Q Q^T = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix} \\neq I_2$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Numerically Stable Linear Regression via QR',
            whyItMatters:
              'Forming $X^T X$ squares the condition number $\\kappa(X)$ and loses floating-point precision; scikit-learn and numerical solvers use $QR$ or SVD directly instead.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm7-c1-ht1',
        title: 'High-Power 2D Rotation Matrices ($M^{2026}$) in 10 Seconds',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2026 · Q.21'],
        problemStatement:
          'Given $M = \\begin{bmatrix} \\cos(2\\pi/5) & -\\sin(2\\pi/5) \\\\ \\sin(2\\pi/5) & \\cos(2\\pi/5) \\end{bmatrix}$, compute $M^{2026}$ (or $M^{2026} x$).',
        triggerCue:
          'You spot $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$ raised to a massive integer exponent $k$.',
        bruteForceTrap:
          'Trying to multiply $2\\times 2$ trigonometric matrices repeatedly or diagonalizing over $\\mathbb{C}$ with $e^{\\pm i\\theta}$ wastes minutes and invites sign errors.',
        mentalShift:
          'A rotation by $\\theta$ applied $k$ times is simply a single rotation by $k\\theta$: $R(\\theta)^k = R(k\\theta)$! Look for the period $m$ where $m\\theta = 2\\pi$, so $M^m = I_2$, and reduce the exponent modulo $m$.',
        steps: [
          {
            label: 'Step 1 — Read the rotation angle $\\theta$',
            detail: 'Match entries to $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$ (careful of sign on top-right: $-\\sin\\theta$ is counter-clockwise!). Here $\\theta = 2\\pi/5$.',
          },
          {
            label: 'Step 2 — Find the cycle length $m$',
            detail: 'Since $5 \\cdot (2\\pi/5) = 2\\pi$, $M^5 = R(2\\pi) = I_2$.',
          },
          {
            label: 'Step 3 — Reduce the exponent mod $m$',
            detail: 'Divide $2026$ by $5$: $2026 = 5 \\times 405 + 1 \\equiv 1 \\pmod{5}$, so $M^{2026} = (M^5)^{405} M^1 = I_2 M = M$.',
          },
        ],
        lockInTakeaway:
          'Never multiply rotation matrices — add their angles! $R(\\theta)^k = R(k\\theta \\bmod 2\\pi)$.',
      },
      {
        id: 'm7-c1-ht2',
        title: 'Norm-Preserving Maps ($\\|Ax\\|=\\|x\\|$) & Projection Matrix MSQs',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.49', 'GATE DA 2025 · Q.50', 'GATE DA 2025 · Q.52', 'GATE DA 2026 · Q.52'],
        problemStatement:
          'An MSQ hands you an abstract condition like "$\\|Ax\\|_2^2 = \\|x\\|_2^2$ for all $x \\in \\mathbb{R}^n$" or "$M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$" and asks about eigenvalues, invertibility, $M^2$, trace, and nullity.',
        triggerCue:
          'Norm equality $\\|Ax\\| = \\|x\\|$ for all $x$, OR symmetric idempotent projection form ($Q Q^T$, $I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$, $\\sum x_i x_i^T$).',
        bruteForceTrap:
          'Testing only diagonal matrices like $\\pm I_n$ tricks you into thinking orthogonal matrices always have real eigenvalues $\\pm 1$, or confusing $M^2 = M$ (projection) with $M^2 = I$ (reflection).',
        mentalShift:
          'Convert $\\|Ax\\|^2 = \\|x\\|^2$ immediately into $x^T(A^T A - I_n)x = 0 \\implies A^T A = I_n$ (orthogonal, full rank, $|\det A|=1$), then test a $90^\\circ$ rotation and a reflection as your two pocket counter-examples! For projections, check $P^2 = P$ and $P^T = P$ to lock in eigenvalues $\\in \\{0, 1\\}$ and $\\text{rank}(P) = \\text{tr}(P)$.',
        steps: [
          {
            label: 'Step 1 — Decode the matrix family',
            detail: '$\\|Ax\\|_2^2 = x^T A^T A x = x^T x\\;\\forall x$ forces $A^T A = I_n$ ($A$ is orthogonal and invertible). Conversely, $P = Q Q^T$ or $I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ satisfies $P^2 = P = P^T$ (orthogonal projection).',
          },
          {
            label: 'Step 2 — Run the 2-counterexample stress test on orthogonal $A$',
            detail: 'Test $A_1 = R(\\pi/2)$ (complex eigenvalues $\\pm i$, $\\det = +1$) and $A_2 = \\text{diag}(1, -1)$ (real eigenvalues, $\\det = -1$). Any claim violated by either $A_1$ or $A_2$ is FALSE in an MSQ!',
          },
          {
            label: 'Step 3 — Read off projection invariants without coordinates',
            detail: 'For an orthogonal projection onto $d$-dimensional $U \\subset \\mathbb{R}^n$: $\\text{rank}(P) = \\text{tr}(P) = d$, $\\dim(\\text{Null}(P)) = n - d$, eigenvalues are $1$ ($d$ times) and $0$ ($n-d$ times), and singular values equal eigenvalues.',
          },
        ],
        lockInTakeaway:
          'Keep $R(\\pi/2)$ and $\\text{diag}(1, -1)$ in your back pocket for every orthogonal-matrix MSQ; keep $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ ($M^2 = M \\neq I_n$) for projection MSQs.',
      },
    ],
    arsenalCards: [
      {
        id: 'm7-c1-ar1',
        badge: 'Rotations & Orthogonal Maps',
        whenYouSpot: '$Q^T Q = I_n$, $\\|Ax\\|_2 = \\|x\\|_2$ for all $x$, or $R(\\theta)^k$',
        directWeaponLatex: 'Q^{-1} = Q^T, \\quad R(\\theta)^k = R(k\\theta), \\quad |\\det(Q)| = 1',
        instantRule:
          'Orthogonal matrices are invertible, preserve norms and angles, and have eigenvalues of modulus $1$ (possibly complex conjugates $e^{\\pm i\\theta}$!).',
        tenSecondExample: '$R(2\\pi/5)^{2026} = R(2\\pi \\cdot 405 + 2\\pi/5) = R(2\\pi/5)$.',
        oneFatalTrap:
          'Assuming real orthogonal matrices must have real eigenvalues $\\pm 1$ — $90^\\circ$ rotation has eigenvalues $\\pm i$.',
      },
      {
        id: 'm7-c1-ar2',
        badge: 'Orthogonal Projections',
        whenYouSpot: '$P = A(A^T A)^{-1}A^T$, $Q Q^T$, or centering matrix $I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$',
        directWeaponLatex: 'P^2 = P = P^T, \\quad \\lambda(P) \\in \\{0, 1\\}, \\quad \\text{rank}(P) = \\text{tr}(P) = d',
        instantRule:
          'Nullity is $n - d$; singular values equal eigenvalues ($\\in \\{0, 1\\}$); singular whenever $d < n$.',
        tenSecondExample: 'For $M = I_5 - \\frac{1}{5}\\mathbf{1}\\mathbf{1}^T$: $\\text{tr}(M) = 5 - 1 = 4$, nullity $= 1$, $M^2 = M \\neq I_5$.',
        oneFatalTrap:
          'Confusing $M^2 = M$ (projection) with $M^2 = I_n$ (reflection) on $I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ (GATE DA 2026 · Q.52).',
      },
      {
        id: 'm7-c1-ar3',
        badge: 'Gram-Schmidt & QR',
        whenYouSpot: 'Orthonormalizing columns $a_1, \\dots, a_n$ or solving $Ax \\approx b$ via $QR$',
        directWeaponLatex: 'u_k = a_k - \\sum_{j=1}^{k-1}(q_j^T a_k)q_j, \\quad R\\hat{x} = Q^T b',
        instantRule:
          'Peel off each prior unit direction $q_j$ from $a_k$, then normalize $u_k$ to get $R_{kk} = \\|u_k\\|_2 > 0$.',
        tenSecondExample: 'If $a_1 = [3,0]^T, a_2 = [2,4]^T$, then $R_{11}=3, R_{12}=2, R_{22}=4$.',
        oneFatalTrap:
          'Projecting onto the unnormalized $u_j$ using $u_j^T a_k$ instead of dividing by $u_j^T u_j$ (or using unit $q_j$).',
      },
    ],
    questions: [
      {
        id: 'm7-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'Let $b = [5, 1]^T$ and $a = [2, 1]^T$ in $\\mathbb{R}^2$. If $p = \\alpha a$ is the orthogonal projection of $b$ onto the line spanned by $a$, what is the scalar value $\\alpha$?',
        natAnswer: { min: 2.19, max: 2.21, exactDisplay: '2.2' },
        triggerHint: 'Orthogonal projection coefficient onto a single vector $a$ is $\\alpha = (a^T b)/(a^T a)$.',
        intuitiveSolution: [
          'For $b - \\alpha a$ to be perpendicular to $a$, we require $a^T(b - \\alpha a) = 0$.',
          'Compute $a^T b = 2(5) + 1(1) = 11$ and $a^T a = 2^2 + 1^2 = 5$.',
          'Thus $\\alpha = \\frac{11}{5} = 2.2$.',
        ],
        directShortcutUsed: '1D projection scalar $\\alpha = \\frac{a^T b}{a^T a}$.',
      },
      {
        id: 'm7-c1-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.21',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $M = \\begin{bmatrix} \\cos(2\\pi/5) & -\\sin(2\\pi/5) \\\\ \\sin(2\\pi/5) & \\cos(2\\pi/5) \\end{bmatrix}$. Which of the following equals $M^{2026}$?',
        options: [
          {
            id: 'A',
            text: '$M$',
            whyTrueOrFalse: 'Correct! $M$ is a $2\\pi/5$ rotation, so $M^5 = R(2\\pi) = I_2$, and $2026 = 5(405) + 1 \\implies M^{2026} = M$.',
          },
          {
            id: 'B',
            text: '$I_2$',
            whyTrueOrFalse: '$M^{2025} = I_2$, not $M^{2026}$.',
          },
          {
            id: 'C',
            text: '$M^2$',
            whyTrueOrFalse: '$2026 \\equiv 1 \\pmod 5$, not $2$.',
          },
          {
            id: 'D',
            text: '$-M$',
            whyTrueOrFalse: '$-M = R(2\\pi/5 + \\pi) = R(7\\pi/5)$, which does not match $R(2\\pi/5)$.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Rotation matrix power $R(\\theta)^k = R(k\\theta)$ with period $5\\theta = 2\\pi$.',
        intuitiveSolution: [
          '$M = R(2\\pi/5)$ rotates vectors counter-clockwise by $72^\\circ$.',
          'Five rotations complete a full $360^\\circ$ circle: $M^5 = R(2\\pi) = I_2$.',
          'Since $2026 = 5 \\times 405 + 1$, $M^{2026} = (M^5)^{405} M = I_2^{405} M = M$.',
        ],
        directShortcutUsed: 'Rotation angle addition $R(\\theta)^k = R(k\\theta \\bmod 2\\pi)$.',
      },
      {
        id: 'm7-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.49',
        year: 2024,
        marks: 2,
        type: 'MSQ',
        stem: 'Let $U$ be a proper non-zero subspace of $\\mathbb{R}^3$ with $\\dim(U) = d$ ($1 \\le d \\le 2$), and let $M \\in \\mathbb{R}^{3\\times 3}$ be the orthogonal projection matrix onto $U$. Which of the following statements is/are ALWAYS TRUE?',
        options: [
          {
            id: 'A',
            text: '$\\dim(\\text{Null}(M)) = 3 - d$',
            whyTrueOrFalse: 'True! $\\text{Col}(M) = U$ has dimension $d$, so by Rank-Nullity (and $\\text{Null}(M) = U^\\perp$), $\\dim(\\text{Null}(M)) = 3 - d$.',
          },
          {
            id: 'B',
            text: '$M^2 = M$ and $M^3 = M$',
            whyTrueOrFalse: 'True! Projecting twice or three times onto $U$ leaves points already in $U$ unchanged, so $M^k = M$ for all $k \\ge 1$.',
          },
          {
            id: 'C',
            text: '$M$ is invertible',
            whyTrueOrFalse: 'False! Since $d \\le 2$, $\\dim(\\text{Null}(M)) = 3 - d \\ge 1$, so $M$ is singular.',
          },
          {
            id: 'D',
            text: 'Every eigenvalue of $M$ belongs to $\\{0, 1\\}$',
            whyTrueOrFalse: 'True! From $M^2 = M$, any eigenvalue $\\lambda$ satisfies $\\lambda^2 = \\lambda \\implies \\lambda \\in \\{0, 1\\}$.',
          },
        ],
        correctOptions: ['A', 'B', 'D'],
        triggerHint: 'Orthogonal projection onto $d$-dimensional subspace $U \\subsetneq \\mathbb{R}^3$.',
        intuitiveSolution: [
          'For any $v \\in U$, $Mv = v$ (eigenvalue $1$, multiplicity $d$); for any $w \\in U^\\perp$, $Mw = 0$ (eigenvalue $0$, multiplicity $3 - d$).',
          'Therefore $\\text{Null}(M) = U^\\perp$ has dimension $3 - d \\ge 1$ (so A is true and C is false).',
          'Since $M^2 = M$, multiplying by $M$ again gives $M^3 = M^2 = M$, and $\\lambda^2 = \\lambda \\implies \\lambda \\in \\{0, 1\\}$ (B and D are true).',
        ],
        directShortcutUsed: 'Projection invariants: $P^k = P$, $\\lambda \\in \\{0,1\\}$, $\\text{nullity}(P) = n - d$.',
      },
      {
        id: 'm7-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.52',
        year: 2025,
        marks: 2,
        type: 'MSQ',
        stem: 'Let $A \\in \\mathbb{R}^{n\\times n}$ ($n \\ge 2$) satisfy $\\|Ax\\|_2^2 = \\|x\\|_2^2$ for every $x \\in \\mathbb{R}^n$. Which of the following statements MUST be true?',
        options: [
          {
            id: 'A',
            text: '$A$ is an orthogonal matrix ($A^T A = I_n$)',
            whyTrueOrFalse: 'True! $x^T(A^T A - I_n)x = 0$ for all $x$ with symmetric $A^T A - I_n$ forces $A^T A = I_n$.',
          },
          {
            id: 'B',
            text: 'All eigenvalues of $A$ are real and equal to $\\pm 1$',
            whyTrueOrFalse: 'False! A $90^\\circ$ rotation matrix in $\\mathbb{R}^2$ preserves norms yet has complex eigenvalues $\\pm i$.',
          },
          {
            id: 'C',
            text: '$\\det(A) = 1$',
            whyTrueOrFalse: 'False! Reflection matrices satisfy $A^T A = I_n$ with $\\det(A) = -1$.',
          },
          {
            id: 'D',
            text: '$\\text{rank}(A) = n$ (i.e., $A$ is invertible)',
            whyTrueOrFalse: 'True! $A^T A = I_n \\implies A^{-1} = A^T$, so $A$ has full rank $n$.',
          },
        ],
        correctOptions: ['A', 'D'],
        triggerHint: 'Test the $90^\\circ$ rotation and reflection counterexamples against $A^T A = I_n$.',
        intuitiveSolution: [
          'If $Ax = 0$, then $\\|x\\|_2^2 = \\|Ax\\|_2^2 = 0 \\implies x = 0$, so $\\text{Null}(A) = \\{0\\}$ and $\\text{rank}(A) = n$ (D is true).',
          'Expanding $\\|Ax\\|_2^2 - \\|x\\|_2^2 = x^T (A^T A - I_n) x = 0$ for all $x$ on symmetric $A^T A - I_n$ proves $A^T A = I_n$ (A is true).',
          'Counter-examples: $A = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ has eigenvalues $\\pm i$ (disproving B); $A = \\text{diag}(1, -1, 1, \\dots, 1)$ has $\\det(A) = -1$ (disproving C).',
        ],
        directShortcutUsed: 'Norm preservation $\\iff A^T A = I_n$; test $R(\\pi/2)$ and $\\text{diag}(1,-1)$.',
      },
      {
        id: 'm7-c1-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.52',
        year: 2026,
        marks: 2,
        type: 'MSQ',
        stem: 'Let $n \\ge 2$ and let $M = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T \\in \\mathbb{R}^{n\\times n}$, where $\\mathbf{1} = [1, 1, \\dots, 1]^T \\in \\mathbb{R}^n$. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: '$M$ is symmetric ($M^T = M$)',
            whyTrueOrFalse: 'True! Both $I_n$ and $\\mathbf{1}\\mathbf{1}^T$ are symmetric.',
          },
          {
            id: 'B',
            text: '$M^2 = I_n$',
            whyTrueOrFalse: 'False! $M^2 = M$, and $M\\mathbf{1} = 0 \\neq \\mathbf{1}$, so $M^2 \\neq I_n$.',
          },
          {
            id: 'C',
            text: '$\\text{tr}(M) = n - 1$',
            whyTrueOrFalse: 'True! $\\text{tr}(M) = \\text{tr}(I_n) - \\frac{1}{n}\\text{tr}(\\mathbf{1}\\mathbf{1}^T) = n - \\frac{n}{n} = n - 1$.',
          },
          {
            id: 'D',
            text: '$M$ is the orthogonal projection matrix onto $\\mathbf{1}^\\perp$',
            whyTrueOrFalse: 'True! $M^T = M$, $M^2 = M$, $M\\mathbf{1} = 0$, and $Mv = v$ for all $v \\perp \\mathbf{1}$.',
          },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Centering matrix $I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ is an orthogonal projection, not a reflection.',
        intuitiveSolution: [
          'Check symmetry: $M^T = I_n^T - \\frac{1}{n}(\\mathbf{1}\\mathbf{1}^T)^T = M$ (A is true).',
          'Check $M^2$: $(I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T)^2 = I_n - \\frac{2}{n}\\mathbf{1}\\mathbf{1}^T + \\frac{1}{n^2}\\mathbf{1}(\\mathbf{1}^T\\mathbf{1})\\mathbf{1}^T = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T = M$. Since $M\\mathbf{1} = 0$, $M^2 = M \\neq I_n$ (B is false, D is true).',
          'Check trace: diagonal entries of $M$ are all $1 - \\frac{1}{n}$, so $\\text{tr}(M) = n(1 - \\frac{1}{n}) = n - 1$ (C is true).',
        ],
        directShortcutUsed: 'Centering projection properties: $M^T = M = M^2$, $\\text{tr}(M) = n-1$.',
      },
      {
        id: 'm7-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style QR Drill',
        marks: 2,
        type: 'NAT',
        stem: 'Let $A = \\begin{bmatrix} 1 & 3 \\\\ 1 & 3 \\\\ 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$ have thin $QR$ factorization $A = QR$ where $Q \\in \\mathbb{R}^{4\\times 2}$ has orthonormal columns and $R = \\begin{bmatrix} R_{11} & R_{12} \\\\ 0 & R_{22} \\end{bmatrix}$ has $R_{11} > 0, R_{22} > 0$. Compute $R_{11} + R_{12} + R_{22}$.',
        natAnswer: { min: 7.99, max: 8.01, exactDisplay: '8' },
        triggerHint: 'Apply Gram-Schmidt to the two columns of $A$: $R_{11} = \\|a_1\\|_2$, $R_{12} = q_1^T a_2$, $R_{22} = \\|a_2 - R_{12} q_1\\|_2$.',
        intuitiveSolution: [
          'First column $a_1 = [1, 1, 1, 1]^T$: $R_{11} = \\|a_1\\|_2 = \\sqrt{1+1+1+1} = 2$, so $q_1 = \\frac{1}{2}[1, 1, 1, 1]^T$.',
          'Second column $a_2 = [3, 3, 1, 1]^T$: $R_{12} = q_1^T a_2 = \\frac{1}{2}(3 + 3 + 1 + 1) = 4$.',
          'Subtract projection: $u_2 = a_2 - R_{12} q_1 = [3, 3, 1, 1]^T - [2, 2, 2, 2]^T = [1, 1, -1, -1]^T$.',
          'Thus $R_{22} = \\|u_2\\|_2 = \\sqrt{1+1+1+1} = 2$, giving $R_{11} + R_{12} + R_{22} = 2 + 4 + 2 = 8$.',
        ],
        directShortcutUsed: 'Gram-Schmidt $QR$ entries $R_{11}=\\|a_1\\|_2$, $R_{12}=q_1^T a_2$, $R_{22}=\\|a_2 - R_{12}q_1\\|_2$.',
      },
    ],
  },
  {
    id: 'la2-ch2',
    number: 2,
    title: 'Determinants, Trace, Eigenvalues, Cayley-Hamilton & Matrix Powers',
    shortTitle: 'Eigenvalues & Cayley-Hamilton',
    estimatedHours: 4.0,
    dayLabel: 'Week 3 · Day 5',
    tagline:
      'Learn to read the hidden heartbeat of any square matrix without grinding through giant determinants! Together we will extract eigenvalues straight from trace, determinant, row sums, and rank-1 updates, factor polynomial determinants like $\\det(M^2 + 12M)$ in seconds, and tame high matrix powers with Cayley-Hamilton.',
    syllabusMapping: [
      'Determinants, trace invariants, and singular matrix characterization',
      'Eigenvalues, eigenvectors, algebraic/geometric multiplicity & diagonalization',
      'Cayley-Hamilton theorem, matrix polynomials, and matrix powers',
    ],
    whatIsImportant: [
      'Structural zero determinants & polynomial factoring: $\\det(M^2 + 12M) = \\det(M)\\det(M + 12I)$ (GATE DA 2024 Q.35)',
      '2×2 characteristic quadratic $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$ and discriminant $\\Delta < 0$ complex conjugate detection (GATE DA 2024 Q.13)',
      'Eigenvalue shift $p(A)v = p(\\lambda)v$, row-sum eigenvectors $A\\mathbf{1} = c\\mathbf{1}$ (GATE DA 2025 Q.13), and trace $= \\sum \\lambda_i$ (GATE DA 2026 Q.46)',
      'Rank-1 update spectrum $\\text{eig}(cI_n + uv^T) = \\{c + v^T u,\\; c, \\dots, c\\}$ (GATE DA 2025 Q.28)',
      'Matrix power identities ($A^3 = A \\implies \\text{rank}(A) = \\text{rank}(A^2)$, GATE DA 2025 Q.37) & Cayley-Hamilton degree reduction',
    ],
    whatIsNotImportant: [
      '4×4 or 5×5 cofactor expansion by brute force — GATE DA always embeds a rank/row/block shortcut',
      'Jordan canonical form chains and generalized eigenvectors — out of scope for GATE DA',
    ],
    inboundStream:
      'Module 7 Ch.1 & Module 6: Rank-nullity, $Ax = 0$ solution multiplicity, and rotation matrices.',
    outboundStream: [
      'Module 7 Ch.3: Spectral Theorem for symmetric matrices, Rayleigh quotient, and SVD ($\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$)',
      'Module 14 (ML): Fisher LDA generalized eigenvalue problem $S_W^{-1}S_B u = \\lambda u$ (GATE DA 2024 Q.22)',
      'Module 15 (ML): PCA covariance eigenvalues $\\lambda_i$ = projected variance (GATE DA 2025 Q.60)',
    ],
    glossary: [
      {
        term: 'Determinant',
        symbol: '$\\det(A) = \\prod_{i=1}^n \\lambda_i$',
        plainEnglish:
          'Geometrically, $\\det(A)$ is the signed volume scaling factor of the transformation $A$ — it equals $0$ if and only if $A$ flattens space (singular / dependent rows), and always equals the product of all eigenvalues.',
        tinyExample: 'If Row 3 $=$ Row 1 $+$ Row 2, space collapses flat so $\\det(M) = 0$ and $\\det(M^2 + 12M) = 0$.',
      },
      {
        term: 'Trace',
        symbol: '$\\text{tr}(A) = \\sum_{i=1}^n A_{ii} = \\sum_{i=1}^n \\lambda_i$',
        plainEnglish:
          'Simply add the entries down the main diagonal of a square matrix — remarkably, that instant sum ALWAYS equals the sum of all its eigenvalues, and obeys cyclic invariance $\\text{tr}(AB) = \\text{tr}(BA)$.',
        tinyExample: 'For $M(t) = \\text{diag}(1, R(t))$, $\\text{tr}(M(t)) = 1 + 2\\cos t = \\sum \\lambda_i$ instantly.',
      },
      {
        term: 'Eigenvalue & Eigenvector',
        symbol: '$Av = \\lambda v \\;(v \\neq 0)$',
        plainEnglish:
          'An eigenvector $v$ is a special non-zero arrow that $A$ never knocks off its own line — $A$ only stretches, shrinks, or flips it by the scalar factor $\\lambda$ (its eigenvalue).',
        tinyExample: 'If every row of $A$ sums to $1$, then $A\\mathbf{1} = 1\\cdot\\mathbf{1}$, so $\\mathbf{1}$ is an eigenvector with $\\lambda = 1$.',
      },
      {
        term: 'Characteristic Polynomial',
        symbol: '$p(\\lambda) = \\det(\\lambda I_n - A)$',
        plainEnglish:
          'The degree-$n$ polynomial whose roots are the exact eigenvalues of $A$; for any $2\\times 2$ matrix, you can write it directly as $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$.',
        tinyExample: 'For $\\begin{bmatrix} 2 & -1 \\\\ 3 & 1 \\end{bmatrix}$, $\\lambda^2 - 3\\lambda + 5 = 0$ has $\\Delta = -11 < 0$ (complex pair).',
      },
      {
        term: 'Eigenspace',
        symbol: '$E_\\lambda = \\text{Null}(A - \\lambda I_n)$',
        plainEnglish:
          'This is the subspace containing all eigenvectors belonging to the same eigenvalue $\\lambda$ (together with $0$), found by solving the homogeneous system $(A - \\lambda I_n)v = 0$.',
        tinyExample: 'For $A = I_n + xx^T$, the eigenspace for $\\lambda = 1$ is the $(n-1)$-D hyperplane $x^\\perp$.',
      },
      {
        term: 'Algebraic vs. Geometric Multiplicity',
        symbol: '$1 \\le \\text{GM}(\\lambda) \\le \\text{AM}(\\lambda)$',
        plainEnglish:
          'Algebraic multiplicity counts how many times root $\\lambda$ repeats in the characteristic polynomial, while geometric multiplicity counts how many independent eigenvectors $\\lambda$ actually owns ($\\dim E_\\lambda$).',
        tinyExample: 'For $\\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix}$, $\\lambda = 2$ has $\\text{AM} = 2$ but only $\\text{GM} = 1$.',
      },
      {
        term: 'Diagonalization',
        symbol: '$A = P \\Lambda P^{-1}$',
        plainEnglish:
          'A square matrix is diagonalizable when it owns $n$ linearly independent eigenvectors (meaning $\\text{GM}(\\lambda) = \\text{AM}(\\lambda)$ for every $\\lambda$), turning messy matrix powers into simple powers of diagonal entries $A^k = P\\Lambda^k P^{-1}$.',
        tinyExample: 'Every matrix with $n$ distinct eigenvalues — and every real symmetric matrix — is diagonalizable.',
      },
      {
        term: 'Spectral Mapping (Matrix Polynomials)',
        symbol: '$Av = \\lambda v \\implies p(A)v = p(\\lambda)v$',
        plainEnglish:
          'Plugging a matrix $A$ into any polynomial $p(t)$ keeps the exact same eigenvectors and simply passes every eigenvalue through the polynomial $\\lambda \\mapsto p(\\lambda)$.',
        tinyExample: 'If $A$ has eigenvalues $5$ and $2$, then $A^2 + 2A$ has eigenvalues $35$ and $8$, so $\\det = 280$.',
      },
      {
        term: 'Rank-1 Update (Perturbation)',
        symbol: '$A = cI_n + uv^T$',
        plainEnglish:
          'Adding an outer product $uv^T$ to $cI_n$ leaves all $n - 1$ directions perpendicular to $v$ untouched at eigenvalue $c$, and shifts only the single remaining eigenvalue to $c + v^T u$.',
        tinyExample: 'For unit $x$, $I_n + xx^T$ has eigenvalues $\\{2, 1, \\dots, 1\\}$, so $\\det = 2$ and $\\text{rank} = n$.',
      },
      {
        term: 'Cayley-Hamilton Theorem',
        symbol: '$p(A) = 0$',
        plainEnglish:
          'Every square matrix obeys its own characteristic equation when you replace $\\lambda$ by $A$ — letting you collapse huge powers $A^k$ (and even $A^{-1}$) down to combinations of $I, A, \\dots, A^{n-1}$.',
        tinyExample: 'For any $2\\times 2$ matrix, $A^2 = \\text{tr}(A)A - \\det(A)I_2$ reduces every higher power instantly.',
      },
      {
        term: 'Nilpotent Matrix',
        symbol: '$A^k = 0 \\;(A \\neq 0)$',
        plainEnglish:
          'A non-zero matrix whose powers eventually vanish to the zero matrix; every single eigenvalue of a nilpotent matrix is $0$, and a non-zero nilpotent matrix can never be diagonalized.',
        tinyExample: '$A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix} \\neq 0$ has $A^2 = 0$ and eigenvalues $0, 0$.',
      },
    ],
    generatorId: 'rotation-power-gen',
    concepts: [
      {
        id: 'm7-c2-1',
        title: 'Determinants & Trace as Geometric Volume and Spectral Invariants',
        subtitle: 'Why trace and determinant give you the sum and product of eigenvalues without solving a single root',
        priority: 'core-pillar',
        buildsOn: 'Row reduction, matrix multiplication, and linear dependence',
        toyExample: {
          title: 'Squashing a 3D Matrix to Zero Before Ever Squaring It',
          scenario:
            'Suppose a $3\\times 3$ matrix $M$ satisfies Row 3 $=$ Row 1 $+$ Row 2 (for instance, $M = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 5 & 7 & 9 \\end{bmatrix}$). Someone asks you for $\\det(M^2 + 12M)$!',
          walkthroughSteps: [
            '1. **Don’t Square $M$!** Computing $M^2 + 12M$ and expanding a $3\\times 3$ determinant takes 5 minutes and begs for arithmetic slips.',
            '2. **Factor Inside $\\det$:** Notice $M^2 + 12M = M(M + 12I_3)$, and $\\det(AB) = \\det(A)\\det(B)$.',
            '3. **Spot the Zero Factor:** Because Row 3 $=$ Row 1 $+$ Row 2, the rows of $M$ are linearly dependent — the 3D parallelepiped collapses flat, so $\\det(M) = 0$!',
            '4. **Instant Finish:** $\\det(M^2 + 12M) = \\det(M)\\det(M + 12I_3) = 0 \\times \\det(M + 12I_3) = 0$ in 5 seconds!',
          ],
          ahaMoment:
            'Think about how much pain you just avoided: that exact factoring trick solved **GATE DA 2024 · Q.35** in under 15 seconds. Train your eyes to factor $\\det(p(M))$ or spot dependent rows/columns BEFORE ever multiplying a single number!',
        },
        theoremAndFormula: {
          statement:
            'For any square matrix $A \\in \\mathbb{R}^{n\\times n}$ with eigenvalues $\\lambda_1, \\dots, \\lambda_n$ (counted with algebraic multiplicity over $\\mathbb{C}$), the **trace** equals the sum of eigenvalues and the **determinant** equals their product. Determinants are multiplicative ($\\det(AB) = \\det(A)\\det(B)$), invariant under transpose ($\\det(A^T) = \\det(A)$), and scale as $\\det(cA) = c^n \\det(A)$. Trace is linear and **cyclically invariant** ($\\text{tr}(AB) = \\text{tr}(BA)$ whenever both products are square).',
          formulaLatex:
            '\\text{tr}(A) = \\sum_{i=1}^n A_{ii} = \\sum_{i=1}^n \\lambda_i, \\qquad \\det(A) = \\prod_{i=1}^n \\lambda_i, \\qquad \\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0\\;(2\\times 2)',
          plainEnglishDecoding:
            'Here is a habit that saves minutes on every paper: for any $2\\times 2$ matrix, skip expanding $\\det(\\lambda I - A)$ altogether — simply read $\\text{tr}(A)$ and $\\det(A)$ off the four entries and drop them straight into $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$! And whenever you spot an outer product $u v^T$, cyclic trace immediately flips it to the dot product $\\text{tr}(u v^T) = v^T u$.',
          workedMiniExamples: [
            {
              prompt: 'Classify the eigenvalues of $M = \\begin{bmatrix} 2 & -1 \\\\ 3 & 1 \\end{bmatrix}$ (GATE DA 2024 · Q.13).',
              solution:
                '$\\text{tr}(M) = 2 + 1 = 3$ and $\\det(M) = 2(1) - (-1)(3) = 5$. Characteristic quadratic: $\\lambda^2 - 3\\lambda + 5 = 0$. Discriminant $\\Delta = (-3)^2 - 4(1)(5) = -11 < 0 \\implies$ complex conjugate pair $\\frac{3 \\pm i\\sqrt{11}}{2}$.',
            },
            {
              prompt: 'Compute $\\text{tr}(A)$ if $A = u v^T$ where $u = [1, 2, 3]^T$ and $v = [4, -1, 2]^T$.',
              solution:
                'By cyclic invariance, $\\text{tr}(u v^T) = \\text{tr}(v^T u) = v^T u = 4(1) + (-1)(2) + 2(3) = 8$ without ever building the $3\\times 3$ matrix!',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Determinant and trace both distribute over addition/multiplication: $\\det(A+B) = \\det(A) + \\det(B)$ and $\\text{tr}(AB) = \\text{tr}(A)\\text{tr}(B)$.',
            reality:
              'BOTH are false! Trace is linear ($\\text{tr}(A+B) = \\text{tr}(A)+\\text{tr}(B)$) but NOT multiplicative; Determinant is multiplicative ($\\det(AB) = \\det(A)\\det(B)$) but NOT linear.',
            counterExample: 'For $A = B = I_2$: $\\det(I_2 + I_2) = \\det(2I_2) = 4 \\neq 1 + 1 = 2$, and $\\text{tr}(I_2 I_2) = 2 \\neq 2 \\times 2 = 4$.',
          },
          {
            myth: 'If all entries of $A$ are strictly positive, then all eigenvalues of $A$ are positive.',
            reality:
              'False! Perron-Frobenius guarantees the largest-magnitude eigenvalue is positive, NOT the other eigenvalues.',
            counterExample: '$A = \\begin{bmatrix} 1 & 4 \\\\ 1 & 1 \\end{bmatrix}$ has all positive entries, yet $\\det(A) = -3 < 0$, forcing eigenvalues $3$ and $-1$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1: Prob & Stats',
            targetWeek: 2,
            topic: 'Jacobian Determinant in Multivariate Transformations',
            whyItMatters:
              'Transforming a joint PDF from $(X, Y)$ to $(U, V)$ multiplies the density by $|\\det(J)|$, measuring local area scaling.',
          },
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Total Variance in PCA = $\\text{tr}(\\Sigma)$',
            whyItMatters:
              'The sum of variances of all features equals $\\text{tr}(\\Sigma) = \\sum \\lambda_i$, so the fraction of variance kept by top $k$ PCs is $\\frac{\\lambda_1 + \\dots + \\lambda_k}{\\text{tr}(\\Sigma)}$.',
          },
        ],
      },
      {
        id: 'm7-c2-2',
        title: 'Eigenvalues, Polynomial Shifts & Rank-1 Perturbations',
        subtitle: 'Read eigenvalues of $A = cI + uv^T$, row-sum matrices, and block rotations by inspection',
        priority: 'core-pillar',
        buildsOn: 'Null spaces, homogeneous systems $Ax = 0$, and trace = sum of eigenvalues',
        sandboxId: 'rotation-svd-lab',
        toyExample: {
          title: 'Finding All 100 Eigenvalues of $A = I_{100} + x x^T$ ($\\|x\\|_2 = 1$) in One Glance',
          scenario:
            'Suppose $x \\in \\mathbb{R}^{100}$ is a unit vector ($x^T x = 1$) and $A = I_{100} + x x^T$. How can you know every single eigenvalue, the rank, and the determinant without touching a $100\\times 100$ determinant?',
          walkthroughSteps: [
            '1. **Feed $x$ into $A$:** $Ax = (I + x x^T)x = x + x(x^T x) = x + 1\\cdot x = 2x$. So $x$ is an eigenvector with $\\lambda_1 = 2$!',
            '2. **Feed ANY $v \\perp x$ into $A$:** Since $x^T v = 0$, $Av = v + x(x^T v) = v + 0 = 1\\cdot v$.',
            '3. **Count the Perpendicular Directions:** The orthogonal complement $x^\\perp$ has dimension $100 - 1 = 99$, giving $99$ independent eigenvectors all with $\\lambda = 1$!',
            '4. **Instant Readout:** All $100$ eigenvalues are $\\{2, 1, 1, \\dots, 1\\}$ (all non-zero!), so $\\text{rank}(A) = 100$, $A$ is invertible, and $\\det(A) = 2 \\cdot 1^{99} = 2$!',
          ],
          ahaMoment:
            'Look how clean that geometric picture is: whenever you meet $cI_n + u v^T$, the rank-$1$ outer product $uv^T$ cannot touch the $(n-1)$-dimensional hyperplane $v^\\perp$ (so all $n-1$ of those directions stay at eigenvalue $c$), and it nudges only the single remaining direction $u$ to $c + v^T u$!',
        },
        theoremAndFormula: {
          statement:
            'If $Av = \\lambda v$ ($v \\neq 0$), then for any polynomial $p(t) = \\sum_{k=0}^d c_k t^k$, we have $p(A)v = p(\\lambda)v$ (and $A^{-1}v = \\lambda^{-1}v$ if $A$ is invertible). In particular, if $A$ has constant row sum $r$, then $A\\mathbf{1} = r\\mathbf{1}$ so $r$ is an eigenvalue; consequently $p(A)\\mathbf{1} = p(r)\\mathbf{1}$. A matrix $A \\in \\mathbb{R}^{n\\times n}$ is **diagonalizable** ($A = P\\Lambda P^{-1}$) over $\\mathbb{C}$ iff for every eigenvalue $\\lambda$, its geometric multiplicity $\\dim(\\text{Null}(A - \\lambda I))$ equals its algebraic multiplicity.',
          formulaLatex:
            'Av = \\lambda v \\implies p(A)v = p(\\lambda)v, \\qquad \\text{eig}(cI_n + uv^T) = \\{c + v^T u,\\; \\underbrace{c, \\dots, c}_{n-1\\text{ times}}\\}',
          plainEnglishDecoding:
            'Think of polynomials as keeping the exact same eigenvectors while calmly transforming every eigenvalue via $\\lambda \\mapsto p(\\lambda)$. So the moment you hear $A\\mathbf{1} = \\mathbf{1}$ ($\\lambda = 1$) and $B = A^3 - 2A^2 + A$, you plug $1$ into the polynomial to get $B\\mathbf{1} = (1^3 - 2(1)^2 + 1)\\mathbf{1} = \\mathbf{0}$, immediately proving $B$ is singular ($Bx = 0$ has infinitely many solutions, GATE DA 2025 · Q.13)!',
          workedMiniExamples: [
            {
              prompt: 'For block-rotation $M(t) = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & \\cos t & -\\sin t \\\\ 0 & \\sin t & \\cos t \\end{bmatrix}$, find $t \\in [-\\pi, \\pi]$ where eigenvalues sum to $1 + \\sqrt{2}$ (GATE DA 2026 · Q.46).',
              solution:
                'Sum of eigenvalues equals the trace: $\\text{tr}(M(t)) = 1 + 2\\cos t$. Setting $1 + 2\\cos t = 1 + \\sqrt{2}$ gives $\\cos t = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$, so $t \\in \\{\\frac{\\pi}{4}, -\\frac{\\pi}{4}\\}$.',
            },
            {
              prompt: 'Show why $B = \\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix}$ is NOT diagonalizable.',
              solution:
                'Algebraic multiplicity of $\\lambda = 2$ is $2$, yet $B - 2I = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$ has rank $1$, so geometric multiplicity is $2 - 1 = 1 < 2$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If an $n\\times n$ matrix has repeated eigenvalues, it cannot be diagonalizable.',
            reality:
              'False! Repeated eigenvalues only *risk* non-diagonalizability. Diagonalizability fails ONLY when geometric multiplicity falls strictly below algebraic multiplicity.',
            counterExample: '$I_n$ and any orthogonal projection matrix $P$ have repeated eigenvalues ($0$ and $1$) yet are diagonalizable.',
          },
          {
            myth: 'Eigenvectors corresponding to distinct eigenvalues are always orthogonal.',
            reality:
              'False for general matrices! Distinct eigenvalues guarantee eigenvectors are *linearly independent*, NOT orthogonal. Orthogonality requires $A$ to be symmetric (or normal, $A^T A = A A^T$).',
            counterExample: '$A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 2 \\end{bmatrix}$ has $\\lambda_1 = 1, v_1 = [1,0]^T$ and $\\lambda_2 = 2, v_2 = [1,1]^T$, with $v_1^T v_2 = 1 \\neq 0$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'PCA Covariance Eigenvalues & Fisher LDA',
            whyItMatters:
              'Principal Component Analysis chooses unit eigenvectors of the sample covariance matrix $\\Sigma$ ordered by $\\lambda_1 \\ge \\lambda_2 \\ge \\dots$, while Fisher LDA maximizes $J(u) = \\frac{u^T S_B u}{u^T S_W u}$ via the generalized eigenvalue equation $S_W^{-1}S_B u^* = \\lambda u^*$.',
            pyqProof: 'GATE DA 2024 · Q.22 & 2025 · Q.60',
          },
        ],
      },
      {
        id: 'm7-c2-3',
        title: 'Cayley-Hamilton Theorem & Matrix Powers ($A^k$)',
        subtitle: 'Every square matrix obeys its own characteristic polynomial, collapsing $A^n$ and $A^{-1}$ into low powers',
        priority: 'high-yield',
        buildsOn: 'Characteristic polynomial $p(\\lambda) = \\det(\\lambda I - A)$ and rank inequalities',
        toyExample: {
          title: 'Collapsing $A^3$ of a $2\\times 2$ Matrix Using Its Own Quadratic Equation',
          scenario:
            'Let $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$. Compute $A^3$ without multiplying $A \\cdot A \\cdot A$ directly.',
          walkthroughSteps: [
            '1. **Characteristic Polynomial:** $\\text{tr}(A) = 4$ and $\\det(A) = 4 - 1 = 3$, so $p(\\lambda) = \\lambda^2 - 4\\lambda + 3$.',
            '2. **Plug $A$ into $p(\\lambda) = 0$:** Cayley-Hamilton guarantees $A^2 - 4A + 3I_2 = 0 \\implies A^2 = 4A - 3I_2$.',
            '3. **Step Up to $A^3$:** Multiply by $A$: $A^3 = 4A^2 - 3A = 4(4A - 3I_2) - 3A = 13A - 12I_2$.',
            '4. **Evaluate Once:** $A^3 = 13\\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix} - \\begin{bmatrix} 12 & 0 \\\\ 0 & 12 \\end{bmatrix} = \\begin{bmatrix} 14 & 13 \\\\ 13 & 14 \\end{bmatrix}$!',
          ],
          ahaMoment:
            'Keep this pocket identity close for EVERY $2\\times 2$ matrix: $A^2 = \\text{tr}(A)A - \\det(A)I_2$! With that one line, you can collapse any high power $A^k$ (or even $A^{-1}$) down into a simple mix $c_1 A + c_0 I_2$ without heavy multiplication.',
        },
        theoremAndFormula: {
          statement:
            '**Cayley-Hamilton Theorem:** Every matrix $A \\in \\mathbb{R}^{n\\times n}$ satisfies its own characteristic equation $p(A) = 0$, where $p(\\lambda) = \\det(\\lambda I_n - A)$. Consequently: (1) every power $A^k$ ($k \\ge n$) reduces to a linear combination of $\\{I_n, A, \\dots, A^{n-1}\\}$, and (2) if $\\det(A) \\neq 0$, $A^{-1}$ is also a polynomial in $A$. Furthermore, if $A^3 = A$, then $\\text{rank}(A) = \\text{rank}(A^2)$ always holds by rank-sandwiching ($\\text{rank}(A^3) \\le \\text{rank}(A^2) \\le \\text{rank}(A)$).',
          formulaLatex:
            'p(A) = A^n + c_{n-1}A^{n-1} + \\dots + c_1 A + (-1)^n \\det(A) I_n = 0, \\qquad A^3 = A \\implies \\text{rank}(A) = \\text{rank}(A^2)',
          plainEnglishDecoding:
            'Think of Cayley-Hamilton as a strict degree cap: an $n\\times n$ matrix can never produce new independent powers past $A^{n-1}$. And even when you are handed only a bare polynomial rule like $A^3 = A$, remember that multiplying matrices can only shrink or maintain rank — so $A^3 = A$ sandwiches $\\text{rank}(A^2)$ cleanly between $\\text{rank}(A)$ and $\\text{rank}(A)$!',
          workedMiniExamples: [
            {
              prompt: 'Use Cayley-Hamilton to find $A^{-1}$ for $A = \\begin{bmatrix} 3 & 1 \\\\ 2 & 2 \\end{bmatrix}$.',
              solution:
                '$\\text{tr}(A) = 5, \\det(A) = 4 \\implies A^2 - 5A + 4I_2 = 0 \\implies A(5I_2 - A) = 4I_2 \\implies A^{-1} = \\frac{1}{4}(5I_2 - A) = \\frac{1}{4}\\begin{bmatrix} 2 & -1 \\\\ -2 & 3 \\end{bmatrix}$.',
            },
            {
              prompt: 'Prove $\\text{rank}(A) = \\text{rank}(A^2)$ whenever $A^3 = A$ (GATE DA 2025 · Q.37).',
              solution:
                'Always $\\text{rank}(A^2) \\le \\text{rank}(A)$. Conversely, since $A = A^3 = A^2 \\cdot A$, we have $\\text{rank}(A) = \\text{rank}(A^2 A) \\le \\text{rank}(A^2)$. Both inequalities together force $\\text{rank}(A) = \\text{rank}(A^2)$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $A^2 = 0$, then all entries of $A$ must be zero ($A = 0$).',
            reality:
              'False! Non-zero nilpotent matrices satisfy $A^k = 0$ and have all eigenvalues equal to $0$, yet are not the zero matrix (and are NOT diagonalizable).',
            counterExample: '$A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix} \\neq 0$ satisfies $A^2 = 0$.',
          },
          {
            myth: 'If $\\text{rank}(A) = \\text{rank}(A^2)$, then $A$ must be invertible.',
            reality:
              'False! Invertible matrices satisfy $\\text{rank}(A) = \\text{rank}(A^2) = n$, but any idempotent projection matrix ($A^2 = A$) also satisfies $\\text{rank}(A) = \\text{rank}(A^2)$ even when singular.',
            counterExample: '$A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ has $\\text{rank}(A) = \\text{rank}(A^2) = 1 < 2$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1 & Sec 7: Markov / AI',
            targetWeek: 3,
            topic: 'Long-Run Powers of Transition Matrices $P^k$',
            whyItMatters:
              'Decomposing $P^k$ along eigenvectors shows why the $\\lambda_1 = 1$ stationary mode survives as $k \\to \\infty$ while all $|\lambda_i| < 1$ modes decay exponentially.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm7-c2-ht1',
        title: 'Zero-Computation Determinant & Matrix-Polynomial Tricks ($p(M)$)',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.35', 'GATE DA 2025 · Q.13', 'GATE DA 2025 · Q.37'],
        problemStatement:
          'You are given a linear relation among rows of $M$ (or row sums equal to $1$, or $A^3 = A$) and asked for $\\det(M^2 + 12M)$, solutions to $Bx = 0$ where $B = A^3 - 2A^2 + A$, or $\\text{rank}(A^2)$.',
        triggerCue:
          'Any matrix polynomial ($M^2 + 12M$, $A^3 - 2A^2 + A$, $A^3 = A$) paired with a structural clue (dependent rows, constant row sums, or rank comparison).',
        bruteForceTrap:
          'Picking a concrete $3\\times 3$ example and actually multiplying $M^2$, or expanding determinants with entries, wastes 5+ minutes and only checks one case.',
        mentalShift:
          'Never evaluate the polynomial entry-by-entry! Either (1) factor $\\det(p(M)) = \\det(M)\\det(M + 12I)$ to let $\\det(M) = 0$ kill the whole product, (2) evaluate $p(A)$ on a known eigenvector like $\\mathbf{1}$ via $p(A)\\mathbf{1} = p(\\lambda)\\mathbf{1}$, or (3) use rank monotonicity $\\text{rank}(AB) \\le \\min(\\text{rank } A, \\text{rank } B)$.',
        steps: [
          {
            label: 'Step 1 — Translate the structural clue into an algebraic fact',
            detail: 'Row 3 = Row 1 + Row 2 $\\implies \\det(M) = 0$. Row sums equal $c \\implies A\\mathbf{1} = c\\mathbf{1}$. Matrix identity $A^3 = A \\implies A = A^2 \\cdot A$.',
          },
          {
            label: 'Step 2 — Apply the spectral/determinant shortcut',
            detail: 'Factor $\\det(M^2 + 12M) = \\det(M)\\det(M + 12I) = 0$. Plug $\\mathbf{1}$ into $B = A^3 - 2A^2 + A$ to get $B\\mathbf{1} = (1 - 2 + 1)\\mathbf{1} = 0$, proving $\\text{Null}(B) \\neq \\{0\\}$.',
          },
          {
            label: 'Step 3 — Lock in the rank sandwich when powers appear',
            detail: 'Since $\\text{rank}(A^2) \\le \\text{rank}(A)$ always holds, use $A = A^3 = A^2 A$ to get $\\text{rank}(A) \\le \\text{rank}(A^2)$, forcing equality.',
          },
        ],
        lockInTakeaway:
          'Factor determinants first, test $v = \\mathbf{1}$ on row-sum matrices, and sandwich ranks with $\\text{rank}(XY) \\le \\min(\\text{rank } X, \\text{rank } Y)$.',
      },
      {
        id: 'm7-c2-ht2',
        title: 'Instant Eigenvalues of Rank-1 Updates ($cI_n + uv^T$) Without Determinants',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2025 · Q.28'],
        problemStatement:
          'Given $A = cI_n + u v^T$ in $\\mathbb{R}^n$ (e.g., $I_n + xx^T$ for unit $x$), determine all eigenvalues, rank, invertibility, and $\\det(A)$.',
        triggerCue:
          'Identity multiple plus an outer product: $cI_n + uv^T$ or $cI_n + xx^T$.',
        bruteForceTrap:
          'Writing out an $n\\times n$ determinant $\\det(\\lambda I_n - cI_n - uv^T)$ by induction or testing $n=2$ and guessing.',
        mentalShift:
          'An outer product $uv^T$ has rank $\\le 1$, so $(n-1)$ independent vectors satisfy $v^T w = 0$! On all $n-1$ of those directions, $Aw = cw$ ($\lambda = c$). Only $u$ sees the perturbation: $Au = cu + (v^T u)u = (c + v^T u)u$.',
        steps: [
          {
            label: 'Step 1 — Grab the $(n-1)$ orthogonal eigenvalues',
            detail: 'Since $\\dim(v^\\perp) = n - 1$, $c$ is an eigenvalue of $A = cI_n + uv^T$ with multiplicity at least $n - 1$.',
          },
          {
            label: 'Step 2 — Grab the $n$-th eigenvalue via trace',
            detail: '$\\text{tr}(A) = nc + v^T u$. Subtracting $(n-1)c$ leaves the remaining eigenvalue $\\lambda_n = c + v^T u$ (confirmed directly when $u \\neq 0$ by $Au = (c + v^T u)u$).',
          },
          {
            label: 'Step 3 — Read off determinant & invertibility',
            detail: '$\\det(A) = c^{n-1}(c + v^T u)$. For $I_n + xx^T$ with $\\|x\\|_2 = 1$, eigenvalues are $2$ and $1^{n-1}$, so $\\det = 2 \\neq 0$ and $\\text{rank} = n$.',
          },
        ],
        lockInTakeaway:
          'Spectrum of $cI_n + uv^T$ is ALWAYS $\\{c + v^T u,\\; c, \\dots, c\\}$ — zero determinants required!',
      },
    ],
    arsenalCards: [
      {
        id: 'm7-c2-ar1',
        badge: '2×2 & Cyclic Trace',
        whenYouSpot: '$2\\times 2$ eigenvalues, $\\det(p(M))$, or trace of matrix products',
        directWeaponLatex: '\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0, \\quad \\text{tr}(AB) = \\text{tr}(BA)',
        instantRule:
          'Read $\\sum \\lambda_i = \\text{tr}(A)$ and $\\prod \\lambda_i = \\det(A)$ directly; factor $\\det(M^2 + kM) = \\det(M)\\det(M + kI)$ before computing anything.',
        tenSecondExample: 'For $M = \\begin{bmatrix} 2 & -1 \\\\ 3 & 1 \\end{bmatrix}$: $\\lambda^2 - 3\\lambda + 5 = 0$, $\\Delta = -11 < 0 \\implies$ complex pair.',
        oneFatalTrap:
          'Assuming $\\det(A+B) = \\det(A) + \\det(B)$ or $\\text{tr}(AB) = \\text{tr}(A)\\text{tr}(B)$ — both are false.',
      },
      {
        id: 'm7-c2-ar2',
        badge: 'Rank-1 Update Spectrum',
        whenYouSpot: 'Matrix of the form $cI_n + uv^T$ or $I_n + xx^T$',
        directWeaponLatex: '\\text{eig}(cI_n + uv^T) = \\{c + v^T u,\\; \\underbrace{c, \\dots, c}_{n-1}\\}',
        instantRule:
          '$(n-1)$ eigenvalues equal $c$; the final eigenvalue equals $c + v^T u$, so $\\det = c^{n-1}(c + v^T u)$.',
        tenSecondExample: 'For $I_n + xx^T$ ($\\|x\\|_2=1$): eigenvalues are $2$ and $1$ ($\\times (n-1)$), $\\det = 2$, rank $= n$.',
        oneFatalTrap:
          'Thinking $\\det(I_n + xx^T) = 1$ because $x$ is a unit vector — the $2$ eigenvalue makes $\\det = 2$!',
      },
      {
        id: 'm7-c2-ar3',
        badge: 'Cayley-Hamilton & Shifts',
        whenYouSpot: 'High powers $A^k$, $A^{-1}$ as a polynomial, or $p(A)$ acting on $A\\mathbf{1} = c\\mathbf{1}$',
        directWeaponLatex: 'p(A) = 0 \\text{ for } p(\\lambda) = \\det(\\lambda I - A), \\qquad Av = \\lambda v \\implies p(A)v = p(\\lambda)v',
        instantRule:
          'For $2\\times 2$, $A^2 = \\text{tr}(A)A - \\det(A)I_2$; constant row sum $c$ guarantees $p(c)$ is an eigenvalue of $p(A)$ with eigenvector $\\mathbf{1}$.',
        tenSecondExample: 'If $A\\mathbf{1} = \\mathbf{1}$ and $B = A^3 - 2A^2 + A$, then $B\\mathbf{1} = (1-2+1)\\mathbf{1} = 0$.',
        oneFatalTrap:
          'Assuming $A^2 = 0 \\implies A = 0$, or $\\text{rank}(A) = \\text{rank}(A^2) \\implies A$ is invertible.',
      },
    ],
    questions: [
      {
        id: 'm7-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'Let $A = \\begin{bmatrix} 4 & 2 \\\\ 1 & 3 \\end{bmatrix}$. Compute $\\det(A^2 + 2A)$.',
        natAnswer: { min: 279.9, max: 280.1, exactDisplay: '280' },
        triggerHint: 'Find the eigenvalues $\\lambda_1, \\lambda_2$ of $A$ first, then use $\\det(p(A)) = p(\\lambda_1) p(\\lambda_2)$.',
        intuitiveSolution: [
          'For $A$, $\\text{tr}(A) = 4 + 3 = 7$ and $\\det(A) = 4(3) - 2(1) = 10$.',
          'Solving $\\lambda^2 - 7\\lambda + 10 = 0$ gives eigenvalues $\\lambda_1 = 5$ and $\\lambda_2 = 2$.',
          'Eigenvalues of $p(A) = A^2 + 2A$ are $p(5) = 25 + 10 = 35$ and $p(2) = 4 + 4 = 8$.',
          'Therefore $\\det(A^2 + 2A) = 35 \\times 8 = 280$.',
        ],
        directShortcutUsed: 'Spectral polynomial mapping $\\det(p(A)) = \\prod p(\\lambda_i)$.',
      },
      {
        id: 'm7-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.13',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem: 'Consider the matrix $M = \\begin{bmatrix} 2 & -1 \\\\ 3 & 1 \\end{bmatrix}$. Which of the following statements about the eigenvalues of $M$ is TRUE?',
        options: [
          {
            id: 'A',
            text: 'Both eigenvalues are real and distinct',
            whyTrueOrFalse: 'False — the characteristic polynomial has negative discriminant $\\Delta = -11$.',
          },
          {
            id: 'B',
            text: 'Both eigenvalues are real and equal',
            whyTrueOrFalse: 'False — equal real eigenvalues require $\\Delta = 0$.',
          },
          {
            id: 'C',
            text: 'The eigenvalues form a complex conjugate pair with non-zero imaginary part',
            whyTrueOrFalse: 'Correct! $\\lambda^2 - 3\\lambda + 5 = 0$ gives $\\lambda = \\frac{3 \\pm i\\sqrt{11}}{2}$.',
          },
          {
            id: 'D',
            text: 'Zero is an eigenvalue of $M$',
            whyTrueOrFalse: 'False — $\\det(M) = 5 \\neq 0$, so $0$ is not an eigenvalue.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Use $\\lambda^2 - \\text{tr}(M)\\lambda + \\det(M) = 0$ and check $\\Delta = \\text{tr}(M)^2 - 4\\det(M)$.',
        intuitiveSolution: [
          '$\\text{tr}(M) = 2 + 1 = 3$ and $\\det(M) = 2(1) - (-1)(3) = 5$.',
          'Characteristic equation is $\\lambda^2 - 3\\lambda + 5 = 0$.',
          'Discriminant $\\Delta = 3^2 - 4(5) = -11 < 0$, so the eigenvalues are a complex conjugate pair.',
        ],
        directShortcutUsed: '$2\\times 2$ discriminant test $\\text{tr}(M)^2 - 4\\det(M) < 0$.',
      },
      {
        id: 'm7-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.35',
        year: 2024,
        marks: 1,
        type: 'NAT',
        stem: 'Let $M$ be a $3\\times 3$ real matrix in which the third row equals the sum of the first two rows ($R_3 = R_1 + R_2$). Compute $\\det(M^2 + 12M)$.',
        natAnswer: { min: -0.01, max: 0.01, exactDisplay: '0' },
        triggerHint: 'Factor $M^2 + 12M = M(M + 12I_3)$ and apply $\\det(AB) = \\det(A)\\det(B)$.',
        intuitiveSolution: [
          'Because $R_3 = R_1 + R_2$, the rows of $M$ are linearly dependent, so $\\det(M) = 0$.',
          'Factor the matrix polynomial: $M^2 + 12M = M(M + 12I_3)$.',
          'Thus $\\det(M^2 + 12M) = \\det(M)\\det(M + 12I_3) = 0 \\cdot \\det(M + 12I_3) = 0$.',
        ],
        directShortcutUsed: 'Determinant factoring $\\det(M(M + 12I)) = \\det(M)\\det(M + 12I) = 0$.',
      },
      {
        id: 'm7-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.13',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Let $A \\in \\mathbb{R}^{n\\times n}$ be a matrix whose row sums are all equal to $1$, and let $B = A^3 - 2A^2 + A$. How many solutions does the homogeneous system $Bx = 0$ have?',
        options: [
          {
            id: 'A',
            text: 'Only the trivial solution $x = 0$',
            whyTrueOrFalse: 'False — $B\\mathbf{1} = 0$ exhibits a non-zero vector in $\\text{Null}(B)$.',
          },
          {
            id: 'B',
            text: 'No solution',
            whyTrueOrFalse: 'False — every homogeneous system $Bx = 0$ always has at least $x = 0$.',
          },
          {
            id: 'C',
            text: 'Infinitely many solutions',
            whyTrueOrFalse: 'Correct! Since $\\mathbf{1} \\neq 0$ satisfies $B\\mathbf{1} = 0$, every scalar multiple $c\\mathbf{1}$ is a solution.',
          },
          {
            id: 'D',
            text: 'Exactly $n$ solutions',
            whyTrueOrFalse: 'False — linear subspaces over $\\mathbb{R}$ cannot have a finite size $n \\ge 2$.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Row sums equal $1$ means $A\\mathbf{1} = \\mathbf{1}$; plug $\\mathbf{1}$ into $B$.',
        intuitiveSolution: [
          'Every row of $A$ summing to $1$ is equivalent to $A\\mathbf{1} = \\mathbf{1}$, so $\\lambda = 1$ is an eigenvalue of $A$ with eigenvector $\\mathbf{1}$.',
          'Applying $B = A^3 - 2A^2 + A$ to $\\mathbf{1}$ gives $B\\mathbf{1} = (1^3 - 2(1)^2 + 1)\\mathbf{1} = 0$.',
          'Since $\\mathbf{1} \\neq 0$ lies in $\\text{Null}(B)$, $Bx = 0$ has infinitely many solutions.',
        ],
        directShortcutUsed: 'Row-sum eigenvector $A\\mathbf{1} = \\mathbf{1} \\implies p(A)\\mathbf{1} = p(1)\\mathbf{1}$.',
      },
      {
        id: 'm7-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.28',
        year: 2025,
        marks: 1,
        type: 'MSQ',
        stem: 'Let $x \\in \\mathbb{R}^n$ ($n \\ge 2$) be a unit vector ($x^T x = 1$), and define $A = I_n + x x^T$. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: '$\\text{rank}(A) = n$',
            whyTrueOrFalse: 'True! The eigenvalues of $A$ are $2$ (once) and $1$ ($n-1$ times), all non-zero, so $A$ has full rank $n$.',
          },
          {
            id: 'B',
            text: '$A$ is invertible',
            whyTrueOrFalse: 'True! $\\det(A) = 2 \\cdot 1^{n-1} = 2 \\neq 0$, so $A^{-1} = I_n - \\frac{1}{2}xx^T$ exists.',
          },
          {
            id: 'C',
            text: '$0$ is an eigenvalue of $A$',
            whyTrueOrFalse: 'False — all eigenvalues are strictly positive ($2$ and $1$).',
          },
          {
            id: 'D',
            text: '$\\det(A) = 1$',
            whyTrueOrFalse: 'False — $\\det(A) = 2 \\cdot 1^{n-1} = 2$.',
          },
        ],
        correctOptions: ['A', 'B'],
        triggerHint: 'Evaluate $Ax$ and $Av$ for $v \\perp x$ directly without expanding a determinant.',
        intuitiveSolution: [
          'Compute $Ax = (I_n + xx^T)x = x + x(x^T x) = 2x$, giving eigenvalue $\\lambda_1 = 2$.',
          'For any $v \\in x^\\perp$ ($\\dim = n - 1$), $Av = v + x(x^T v) = v$, giving eigenvalue $1$ with multiplicity $n - 1$.',
          'Hence $\\det(A) = 2 \\neq 0$, so $A$ is invertible and $\\text{rank}(A) = n$.',
        ],
        directShortcutUsed: 'Rank-1 update spectrum $\\text{eig}(I_n + xx^T) = \\{2, 1, \\dots, 1\\}$.',
      },
      {
        id: 'm7-c2-q6',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.46',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem: 'Consider the $3\\times 3$ block-rotation matrix $M(t) = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & \\cos t & -\\sin t \\\\ 0 & \\sin t & \\cos t \\end{bmatrix}$ for $t \\in [-\\pi, \\pi]$. What is the set of all values of $t$ for which the sum of the eigenvalues of $M(t)$ equals $1 + \\sqrt{2}$?',
        options: [
          {
            id: 'A',
            text: '$\\{\\pi/4\\}$',
            whyTrueOrFalse: 'Incomplete — misses $-\\pi/4$ since $\\cos(-\\pi/4) = \\cos(\\pi/4)$.',
          },
          {
            id: 'B',
            text: '$\\{\\pi/4,\\; -\\pi/4\\}$',
            whyTrueOrFalse: 'Correct! $\\sum \\lambda_i = \\text{tr}(M(t)) = 1 + 2\\cos t = 1 + \\sqrt{2} \\implies \\cos t = 1/\\sqrt{2} \\implies t = \\pm \\pi/4$.',
          },
          {
            id: 'C',
            text: '$\\{\\pi/3,\\; -\\pi/3\\}$',
            whyTrueOrFalse: 'Gives $1 + 2(1/2) = 2 \\neq 1 + \\sqrt{2}$.',
          },
          {
            id: 'D',
            text: '$\\{3\\pi/4,\\; -3\\pi/4\\}$',
            whyTrueOrFalse: 'Gives $1 - \\sqrt{2} \\neq 1 + \\sqrt{2}$.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Sum of eigenvalues equals the trace $\\text{tr}(M(t))$ — no characteristic polynomial needed!',
        intuitiveSolution: [
          'The sum of all eigenvalues of any square matrix equals its trace: $\\text{tr}(M(t)) = 1 + \\cos t + \\cos t = 1 + 2\\cos t$.',
          'Set $1 + 2\\cos t = 1 + \\sqrt{2} \\implies \\cos t = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$.',
          'Within $t \\in [-\\pi, \\pi]$, $\\cos t = \\frac{1}{\\sqrt{2}}$ holds at $t = \\pi/4$ and $t = -\\pi/4$.',
        ],
        directShortcutUsed: 'Sum of eigenvalues = $\\text{tr}(M(t)) = 1 + 2\\cos t$.',
      },
    ],
  },
  {
    id: 'la2-ch3',
    number: 3,
    title: 'Symmetric Positive-Definite Matrices, Quadratic Forms, Rayleigh Quotient & SVD / Pseudoinverse',
    shortTitle: 'SPD, Quadratic Forms & SVD',
    estimatedHours: 4.5,
    dayLabel: 'Week 3 · Day 6',
    tagline:
      'Here is where geometry, optimization, and Data Science come together in one grand finale! Together we will orthogonally diagonalize symmetric matrices ($Q\\Lambda Q^T$), tell upward bowls from saddles using quadratic forms and Sylvester minors, find unit-sphere maxima instantly via the Rayleigh quotient, and decode the Singular Value Decomposition ($U\\Sigma V^T$) and pseudoinverse.',
    syllabusMapping: [
      'Symmetric matrices, Spectral Theorem, quadratic forms & positive/semidefinite tests',
      'Rayleigh quotient & constrained spectral optimization on the unit sphere',
      'Singular Value Decomposition (SVD), rank-1 outer products, norms & Moore-Penrose pseudoinverse',
    ],
    whatIsImportant: [
      'Symmetric Positive-Definite (PD) vs. PSD: $x^T A x > 0$, eigenvalues $\\lambda_i > 0$, Sylvester leading minors $\\Delta_k > 0$, and Gram matrix $X^T X$ invertibility (GATE DA 2025 Q.38)',
      'Rayleigh quotient $\\max_{\\|x\\|_2=1} x^T A x = \\lambda_{\\max}(A)$ for symmetric $A$ — directly powers PCA and centering projection maxima (GATE DA 2025 Q.60, 2026 Q.65)',
      'SVD of rank-1 outer products $M = uv^T$ ($\\sigma_1 = \\|u\\|_2\\|v\\|_2$) and $M = uu^T$ ($\\sigma_1 = \\|u\\|_2^2$) (GATE DA 2024 Q.61)',
      'SVD vs. eigenvalues: $\\sigma_i(A) = \\lambda_i(A)$ for symmetric PSD matrices (such as projections), vs. $\\sigma_i(A) = |\\lambda_i(A)|$ when eigenvalues are negative (GATE DA 2025 Q.50)',
      'Condition number $\\kappa = \\lambda_{\\max}/\\lambda_{\\min}$ and Hessian PD strict convexity in Machine Learning',
    ],
    whatIsNotImportant: [
      'Hand-computing full $3\\times 3$ SVD $U, \\Sigma, V^T$ from scratch on arbitrary dense rectangular matrices',
      'Generalized Jordan/Schur decompositions or numerical SVD Golub-Kahan QR iteration steps',
    ],
    inboundStream:
      'Module 7 Ch.1–2: Orthonormal bases ($Q^T Q = I$), orthogonal projections, and eigenvalues/trace.',
    outboundStream: [
      'Module 14 (ML): Ridge regression Hessian $2(X^T X + \\lambda I) \\succ 0$ convexity & Gradient Descent step-size condition number $\\kappa$',
      'Module 15 (ML): PCA via covariance eigendecomposition / truncated SVD & optimal rank-$k$ approximation',
    ],
    glossary: [
      {
        term: 'Symmetric Matrix',
        symbol: '$A = A^T$',
        plainEnglish:
          'A square matrix that matches its own mirror image across the main diagonal ($A_{ij} = A_{ji}$) — real symmetric matrices are the friendliest matrices in math because their eigenvalues are always real and their eigenvectors are perpendicular.',
        tinyExample: 'Every covariance matrix $\\Sigma$, Gram matrix $X^T X$, and Hessian $\\nabla^2 f$ is symmetric.',
      },
      {
        term: 'Spectral Theorem',
        symbol: '$A = Q \\Lambda Q^T$',
        plainEnglish:
          'This cornerstone theorem guarantees that every real symmetric matrix can be rotated by an orthogonal matrix $Q$ into a pure diagonal stretch $\\Lambda$ — erasing all messy cross-terms cleanly.',
        tinyExample: 'For $\\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$, $Q$ rotates by $45^\\circ$ to reveal $\\Lambda = \\text{diag}(3, 1)$.',
      },
      {
        term: 'Quadratic Form',
        symbol: '$q(x) = x^T A x = \\sum_{i,j} A_{ij} x_i x_j$',
        plainEnglish:
          'Think of a quadratic form as a multi-dimensional parabola shaped by symmetric matrix $A$: it can curve purely upward like a bowl, purely downward like a dome, or twist into a saddle.',
        tinyExample: 'For $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$, $x^T A x = 2x_1^2 + 2x_1 x_2 + 2x_2^2$.',
      },
      {
        term: 'Positive Definite (SPD)',
        symbol: '$A \\succ 0 \\iff x^T A x > 0\\;(\\forall x \\neq 0)$',
        plainEnglish:
          'A symmetric matrix is positive definite when its bowl $x^T A x$ curves strictly upward in every direction — equivalently, every single eigenvalue $\\lambda_i$ is strictly positive, guaranteeing invertibility and a unique global minimum.',
        tinyExample: 'For $X$ with independent columns, Gram matrix $X^T X \\succ 0$ and Ridge Hessian $X^T X + \\lambda I \\succ 0$.',
      },
      {
        term: 'Positive Semidefinite (PSD)',
        symbol: '$A \\succeq 0 \\iff x^T A x \\ge 0\\;(\\forall x)$',
        plainEnglish:
          'Like a flat-bottomed trough, a PSD symmetric matrix never dips below zero (all $\\lambda_i \\ge 0$), though it may have flat directions with eigenvalue $0$; every Gram matrix $X^T X$ is automatically PSD.',
        tinyExample: 'An orthogonal projection $P = Q Q^T$ has eigenvalues $\\{1, 0\\}$, so it is symmetric PSD.',
      },
      {
        term: 'Sylvester’s Criterion',
        symbol: '$\\Delta_1 > 0, \\Delta_2 > 0, \\dots, \\Delta_n > 0$',
        plainEnglish:
          'A fast shortcut for checking if a **symmetric** matrix is strictly positive definite without finding eigenvalues: simply check that every top-left $k\\times k$ corner determinant $\\Delta_k$ is strictly positive.',
        tinyExample: 'For $\\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}$, $\\Delta_1 = 2 > 0$ and $\\Delta_2 = 3 > 0 \\implies$ SPD.',
      },
      {
        term: 'Indefinite Matrix (Saddle)',
        symbol: '$\\lambda_{\\min} < 0 < \\lambda_{\\max}$',
        plainEnglish:
          'When a symmetric matrix has at least one positive and one negative eigenvalue, its surface curves upward along one axis and downward along another — forming a Pringles-chip saddle.',
        tinyExample: '$\\begin{bmatrix} 1 & 2 \\\\ 2 & 1 \\end{bmatrix}$ has eigenvalues $3$ and $-1$, so it is indefinite.',
      },
      {
        term: 'Rayleigh Quotient',
        symbol: '$R_A(x) = \\frac{x^T A x}{x^T x}$',
        plainEnglish:
          'Dividing $x^T A x$ by $\\|x\\|_2^2$ gives a weighted average of the eigenvalues of symmetric $A$; therefore its maximum on the unit sphere is ALWAYS $\\lambda_{\\max}(A)$ and its minimum is $\\lambda_{\\min}(A)$.',
        tinyExample: 'For centering matrix $A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$, $\\max_{\\|x\\|_2=1} x^T A x = \\lambda_{\\max}(A) = 1$.',
      },
      {
        term: 'Singular Value Decomposition (SVD)',
        symbol: '$A = U \\Sigma V^T = \\sum_{i=1}^r \\sigma_i u_i v_i^T$',
        plainEnglish:
          'SVD works for EVERY matrix (even tall, wide, or singular ones!), breaking $A$ into three crystal-clear moves: rotate input space ($V^T$), stretch perpendicular axes by non-negative singular values ($\\Sigma$), and rotate output space ($U$).',
        tinyExample: 'Any rank-1 matrix $uv^T$ is already in SVD form: $\\sigma_1 = \\|u\\|_2\\|v\\|_2$ with $\\hat{u} = u/\\|u\\|_2, \\hat{v} = v/\\|v\\|_2$.',
      },
      {
        term: 'Singular Values',
        symbol: '$\\sigma_i(A) = \\sqrt{\\lambda_i(A^T A)} \\ge 0$',
        plainEnglish:
          'These non-negative stretch factors measure how much $A$ amplifies each principal axis; for symmetric matrices $\\sigma_i = |\\lambda_i|$, and for symmetric PSD matrices $\\sigma_i = \\lambda_i$ exactly.',
        tinyExample: 'For $M = u u^T$ with $u = [1,2,3,4,5]^T$, $\\sigma_1 = \\|u\\|_2^2 = 55$ and $\\sigma_2=\\dots=\\sigma_5=0$.',
      },
      {
        term: 'Spectral & Frobenius Norm',
        symbol: '$\\|A\\|_2 = \\sigma_1,\\quad \\|A\\|_F = \\sqrt{\\sum \\sigma_i^2}$',
        plainEnglish:
          'The spectral norm $\\sigma_1$ is the biggest stretch $A$ can apply to any unit vector, while the Frobenius norm measures the total energy across all entries ($\\sqrt{\\sum A_{ij}^2} = \\sqrt{\\sum \\sigma_i^2}$).',
        tinyExample: 'For rank-1 $M = uv^T$ with $\\|u\\|_2=5, \\|v\\|_2=3$, both $\\|M\\|_2$ and $\\|M\\|_F$ equal $15$.',
      },
      {
        term: 'Moore-Penrose Pseudoinverse & Condition Number',
        symbol: '$A^+ = V \\Sigma^+ U^T,\\quad \\kappa = \\frac{\\sigma_{\\max}}{\\sigma_{\\min}}$',
        plainEnglish:
          'The pseudoinverse $A^+$ reverses every non-zero stretch ($1/\\sigma_i$) to find the minimum-norm least-squares fit even when $A$ is non-invertible, while $\\kappa$ measures how stretched (ill-conditioned) the optimization valley is.',
        tinyExample: 'For SPD $B$ with eigenvalues $3$ and $1$, $\\kappa(B) = 3/1 = 3$ (a gently shaped ellipse).',
      },
    ],
    generatorId: 'rank1-svd-gen',
    concepts: [
      {
        id: 'm7-c3-1',
        title: 'Spectral Theorem, Quadratic Forms & Positive-Definite Matrices',
        subtitle: 'Turning cross-product bowls $x^T A x$ into pure sums of squares along orthogonal axes',
        priority: 'core-pillar',
        buildsOn: 'Symmetric matrices $A^T = A$, orthogonal matrices $Q$, and determinants',
        toyExample: {
          title: 'Proving $2x_1^2 + 2x_1 x_2 + 2x_2^2$ Is a Strict Upward Bowl',
          scenario:
            'Consider the quadratic function $q(x) = 2x_1^2 + 2x_1 x_2 + 2x_2^2 = x^T A x$ where $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$. Is $q(x) > 0$ for every non-zero $x \\in \\mathbb{R}^2$?',
          walkthroughSteps: [
            '1. **Complete the Square (Algebraic View):** $2x_1^2 + 2x_1 x_2 + 2x_2^2 = (x_1 + x_2)^2 + x_1^2 + x_2^2$. Since squares are $\\ge 0$ and can only all vanish at $x_1 = x_2 = 0$, $q(x) > 0$ for all $x \\neq 0$!',
            '2. **Check Eigenvalues:** $\\text{tr}(A) = 4$ and $\\det(A) = 3 \\implies \\lambda_1 = 3 > 0,\\; \\lambda_2 = 1 > 0$.',
            '3. **Check Leading Principal Minors (Sylvester’s Criterion):** Top-left $1\\times 1$ minor $\\Delta_1 = 2 > 0$, and full $2\\times 2$ minor $\\Delta_2 = \\det(A) = 3 > 0$.',
            '4. **Orthogonal Diagonalization:** Along eigenvectors $q_1 = \\frac{1}{\\sqrt{2}}[1, 1]^T$ and $q_2 = \\frac{1}{\\sqrt{2}}[1, -1]^T$, $q(x) = 3y_1^2 + 1y_2^2$ — a tilted elliptical bowl with zero cross-terms!',
          ],
          ahaMoment:
            'Picture a **Positive Definite (PD, $A \\succ 0$)** symmetric matrix as a clean upward-curving soup bowl $x^T A x$ that rises in every direction — and you can confirm it in 5 seconds by checking that all eigenvalues satisfy $\\lambda_i > 0$ OR all leading principal minors satisfy $\\Delta_k > 0$!',
        },
        theoremAndFormula: {
          statement:
            '**Spectral Theorem:** Every real symmetric matrix $A = A^T \\in \\mathbb{R}^{n\\times n}$ has **all real eigenvalues** and an orthonormal eigenbasis $Q$, factoring as $A = Q \\Lambda Q^T$. A symmetric matrix $A$ is **Positive Definite ($A \\succ 0$)** iff $x^T A x > 0\\;\\forall x \\neq 0 \\iff$ all $\\lambda_i(A) > 0 \\iff$ all leading principal minors $\\Delta_1, \\dots, \\Delta_n > 0$ (Sylvester’s criterion). It is **Positive Semidefinite ($A \\succeq 0$)** iff $x^T A x \\ge 0\\;\\forall x \\iff$ all $\\lambda_i(A) \\ge 0 \\iff$ $A = B^T B$ for some matrix $B$. In particular, any Gram matrix $G = X^T X$ is always PSD, and is PD (hence invertible) iff $X$ has linearly independent columns!',
          formulaLatex:
            'A = A^T = Q \\Lambda Q^T, \\qquad A \\succ 0 \\iff \\lambda_i(A) > 0\\;\\forall i \\iff \\Delta_k > 0\\;\\forall k, \\qquad v^T(X^T X)v = \\|Xv\\|_2^2 \\ge 0',
          plainEnglishDecoding:
            'Whenever an exam hands you a Gram matrix $A_{ij} = x_i^T x_j$ ($A = X^T X$) and asks if it is invertible, leave determinants aside! Simply ask whether the columns of $X$ are linearly independent: because $v^T (X^T X) v = \\|Xv\\|_2^2 = 0 \\iff Xv = 0$, linearly independent vectors automatically make $X^T X$ strictly positive definite and invertible (GATE DA 2025 · Q.38)!',
          workedMiniExamples: [
            {
              prompt: 'Given linearly independent vectors $x_1, \\dots, x_n \\in \\mathbb{R}^n$, prove the Gram matrix $A_{ij} = x_i^T x_j$ is invertible (GATE DA 2025 · Q.38).',
              solution:
                'Notice $A = X^T X$ where $X = [x_1\\;\\cdots\\;x_n]$. For any $v \\neq 0$, $Xv \\neq 0$ by linear independence, so $v^T A v = \\|Xv\\|_2^2 > 0$. Thus $A \\succ 0$ (all eigenvalues $> 0$), so $\\det(A) > 0$ and $A$ is invertible.',
            },
            {
              prompt: 'Classify the definiteness of $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 1 \\end{bmatrix}$.',
              solution:
                'Leading minors: $\\Delta_1 = 1 > 0$, $\\Delta_2 = 1 - 4 = -3 < 0$. Eigenvalues are $3$ and $-1$ (opposite signs), so $A$ is **indefinite** (a saddle).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If a non-symmetric matrix $C$ has all leading principal minors $\\Delta_k > 0$, then $x^T C x > 0$ for all $x \\neq 0$.',
            reality:
              'False! Sylvester’s criterion applies ONLY to symmetric matrices. The quadratic form $x^T C x$ equals $x^T S x$ for the symmetric part $S = \\frac{1}{2}(C + C^T)$, whose off-diagonal terms can turn $S$ indefinite!',
            counterExample: '$C = \\begin{bmatrix} 1 & 6 \\\\ 0 & 1 \\end{bmatrix}$ has $\\Delta_1 = 1, \\Delta_2 = 1 > 0$, yet $x = [1, -1]^T$ gives $x^T C x = 1 - 6 + 1 = -4 < 0$.',
          },
          {
            myth: 'A symmetric matrix with all leading principal minors $\\Delta_k \\ge 0$ must be Positive Semidefinite (PSD).',
            reality:
              'False! For PSD ($\\succeq 0$), you must check **all** principal minors (every diagonal submatrix), not just the top-left leading ones!',
            counterExample: '$A = \\begin{bmatrix} 0 & 0 \\\\ 0 & -1 \\end{bmatrix}$ has leading minors $\\Delta_1 = 0 \\ge 0$ and $\\Delta_2 = 0 \\ge 0$, yet $A$ is negative semidefinite ($\\lambda_2 = -1 < 0$).',
          },
          {
            myth: 'Every matrix with strictly positive entries and positive diagonal is Positive Definite.',
            reality:
              'False! Large off-diagonal entries pull the smallest eigenvalue negative even when every entry of $A$ is positive.',
            counterExample: '$A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 1 \\end{bmatrix}$ has all positive entries, yet $\\lambda = 3, -1$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 3 & Sec 6: Opt / ML',
            targetWeek: 7,
            topic: 'Hessian PD Convexity & Unique Global Minima in Ridge Regression',
            whyItMatters:
              'A twice-differentiable loss $L(w)$ is strictly convex iff its Hessian $\\nabla^2 L(w) \\succ 0$. Adding $\\lambda\\|w\\|_2^2$ shifts the OLS Hessian from $2X^T X \\succeq 0$ to $2(X^T X + \\lambda I) \\succ 0$, guaranteeing invertibility and a unique global minimum.',
          },
          {
            targetSection: 'Sec 3 & Sec 6: Opt / ML',
            targetWeek: 7,
            topic: 'Gradient Descent Condition Number $\\kappa = \\lambda_{\\max}/\\lambda_{\\min}$',
            whyItMatters:
              'For quadratic loss $\\frac{1}{2}w^T H w$, the level sets are ellipses whose eccentricity is $\\sqrt{\\kappa}$. Large $\\kappa = \\lambda_{\\max}/\\lambda_{\\min}$ forces tiny learning rates $\\eta < 2/\\lambda_{\\max}$ and slow zig-zagging across narrow valleys.',
          },
        ],
      },
      {
        id: 'm7-c3-2',
        title: 'Rayleigh Quotient & Unit-Sphere Optimization',
        subtitle: 'Bounding $x^T A x / x^T x$ cleanly between $\\lambda_{\\min}$ and $\\lambda_{\\max}$ without Lagrange multipliers',
        priority: 'high-yield',
        buildsOn: 'Spectral Theorem $A = Q \\Lambda Q^T$ and orthonormal eigenbases',
        toyExample: {
          title: 'A Weighted Average of Eigenvalues on the Unit Circle',
          scenario:
            'Let $A = \\begin{bmatrix} 5 & 0 \\\\ 0 & 2 \\end{bmatrix}$ and restrict $x = [x_1, x_2]^T$ to the unit circle $x_1^2 + x_2^2 = 1$. What are the maximum and minimum possible values of $x^T A x$?',
          walkthroughSteps: [
            '1. **Expand $x^T A x$:** $x^T A x = 5x_1^2 + 2x_2^2$.',
            '2. **Recognize the Weighted Average:** Since $x_1^2 \\ge 0$, $x_2^2 \\ge 0$, and $x_1^2 + x_2^2 = 1$, $5x_1^2 + 2x_2^2$ is literally a convex combination of $5$ and $2$!',
            '3. **Pin Down the Bounds:** It can never exceed $5(1) + 2(0) = 5$ (attained at $x = [\\pm 1, 0]^T$) and never drop below $5(0) + 2(1) = 2$ (attained at $x = [0, \\pm 1]^T$).',
            '4. **Generalize via $A = Q\\Lambda Q^T$:** For ANY symmetric $A$, changing coordinates $y = Q^T x$ preserves $\\|y\\|_2 = \\|x\\|_2 = 1$ and turns $x^T A x$ into $\\sum \\lambda_i y_i^2$, trapped between $\\lambda_{\\min}$ and $\\lambda_{\\max}$!',
          ],
          ahaMoment:
            'Take a deep breath and appreciate that shortcut: maximizing $x^T A x$ over the unit sphere $\\|x\\|_2 = 1$ requires ZERO calculus or Lagrange multipliers — for symmetric $A$, the answer is ALWAYS simply $\\lambda_{\\max}(A)$!',
        },
        theoremAndFormula: {
          statement:
            'For any real symmetric matrix $A = A^T \\in \\mathbb{R}^{n\\times n}$ with eigenvalues $\\lambda_{\\min} = \\lambda_n \\le \\dots \\le \\lambda_1 = \\lambda_{\\max}$, the **Rayleigh quotient** $R_A(x) = \\frac{x^T A x}{x^T x}$ ($x \\neq 0$) is tightly bounded by the extreme eigenvalues, attaining its global maximum at the top eigenvector $q_1$ and global minimum at $q_n$.',
          formulaLatex:
            '\\lambda_{\\min}(A) \\le \\frac{x^T A x}{x^T x} \\le \\lambda_{\\max}(A), \\qquad \\max_{x^T x = 1} x^T A x = \\lambda_{\\max}(A)',
          plainEnglishDecoding:
            'Whenever you spot $\\max_{x^T x = 1} x^T A x$ (as in GATE DA 2026 · Q.65) or maximum projected variance $\\max_{\\|u\\|_2=1} u^T \\Sigma u$ (as in GATE DA 2025 · Q.60), smile and go straight for the single largest eigenvalue of that symmetric matrix!',
          workedMiniExamples: [
            {
              prompt: 'Compute $\\max_{x^T x = 1} x^T A x$ for the centering projection matrix $A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ ($n \\ge 2$) (GATE DA 2026 · Q.65).',
              solution:
                'Since $A$ is symmetric and idempotent ($A^2 = A$) with rank $n - 1 \\ge 1$, its eigenvalues are $1$ (multiplicity $n-1$) and $0$ (multiplicity $1$). By Rayleigh’s theorem, $\\max_{x^T x = 1} x^T A x = \\lambda_{\\max}(A) = 1$.',
            },
            {
              prompt: 'In $\\mathbb{R}^{100}$, centered data has sample covariance eigenvalues $\\lambda_i = 100^{2-i}$ for $i = 1, \\dots, 100$. Find the maximum projected variance along a unit vector $u$ (GATE DA 2025 · Q.60).',
              solution:
                'Projected variance is $u^T \\Sigma u$. Maximized over $\\|u\\|_2 = 1$, this equals $\\lambda_1 = 100^{2-1} = 100$. (The $100$-dimensionality is pure camouflage!)',
            },
          ],
        },
        msqTraps: [
          {
            myth: '$\\max_{\\|x\\|_2 = 1} x^T A x = \\lambda_{\\max}(A)$ holds even when $A$ is non-symmetric.',
            reality:
              'False! Only the symmetric part $S = \\frac{1}{2}(A + A^T)$ matters because $x^T A x = x^T S x$, so the true maximum is $\\lambda_{\\max}(\\frac{A + A^T}{2})$, which can exceed $\\lambda_{\\max}(A)$.',
            counterExample: '$A = \\begin{bmatrix} 0 & 2 \\\\ 0 & 0 \\end{bmatrix}$ has eigenvalues $0, 0$, yet $x = [\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}]^T$ gives $x^T A x = 1 > 0$.',
          },
          {
            myth: 'The unit vector maximizing $x^T A x$ is always unique up to sign $\\pm q_1$.',
            reality:
              'Only when $\\lambda_{\\max}$ has multiplicity $1$! If $\\lambda_{\\max}$ is repeated (like $1$ in a rank-2 projection), EVERY unit vector in that eigenspace achieves the maximum.',
            counterExample: 'For $A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ ($n \\ge 3$), infinitely many unit vectors $x \\perp \\mathbf{1}$ achieve $x^T A x = 1$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'PCA Variance Maximization & Fisher LDA Generalized Rayleigh Quotient',
            whyItMatters:
              'PCA literally maximizes the Rayleigh quotient $u^T \\Sigma u / (u^T u)$, and Fisher LDA maximizes the ratio of two quadratic forms $J(u) = (u^T S_B u) / (u^T S_W u)$ via $S_W^{-1}S_B u = \\lambda u$.',
            pyqProof: 'GATE DA 2024 · Q.22 & 2025 · Q.60',
          },
        ],
      },
      {
        id: 'm7-c3-3',
        title: 'Singular Value Decomposition ($A = U\\Sigma V^T$) & Pseudoinverse ($A^+$)',
        subtitle: 'Decomposing ANY rectangular or singular matrix into orthogonal rotations and non-negative stretches',
        priority: 'core-pillar',
        buildsOn: 'Orthogonal matrices $U, V$ and Spectral Theorem applied to $A^T A$',
        sandboxId: 'rotation-svd-lab',
        toyExample: {
          title: 'Finding All 5 Singular Values of a $5\\times 5$ Outer Product $M = u u^T$ in 5 Seconds',
          scenario:
            'Let $u = [1, 2, 3, 4, 5]^T \\in \\mathbb{R}^5$ and define the $5\\times 5$ matrix $M = u u^T$. What is the sum of its five singular values $\\sum_{i=1}^5 \\sigma_i$?',
          walkthroughSteps: [
            '1. **Normalize $u$:** Let $\\|u\\|_2 = \\sqrt{1^2 + 2^2 + 3^2 + 4^2 + 5^2} = \\sqrt{55}$, and set unit vector $\\hat{u} = \\frac{u}{\\sqrt{55}}$.',
            '2. **Spot the Rank-1 SVD Immediately:** $M = u u^T = (\\|u\\|_2 \\hat{u})(\\|u\\|_2 \\hat{u})^T = 55 \\, \\hat{u} \\hat{u}^T$!',
            '3. **Read Off $\\Sigma$:** Extending $\\hat{u}$ to an orthonormal basis $U = V$ of $\\mathbb{R}^5$ gives $M = U \\text{diag}(55, 0, 0, 0, 0) V^T$.',
            '4. **Sum the Singular Values:** $\\sigma_1 = 55$ and $\\sigma_2 = \\sigma_3 = \\sigma_4 = \\sigma_5 = 0$, so $\\sum_{i=1}^5 \\sigma_i = 55$!',
          ],
          ahaMoment:
            'Look how effortlessly that 5-second normalization trick solved **GATE DA 2024 · Q.61** (a 2-mark NAT)! Whenever you meet a rank-1 outer product $u v^T$, its one and only non-zero singular value is ALWAYS $\\sigma_1 = \\|u\\|_2 \\|v\\|_2$.',
        },
        theoremAndFormula: {
          statement:
            'Every real matrix $A \\in \\mathbb{R}^{m\\times n}$ of rank $r$ factors as $A = U \\Sigma V^T$, where $U \\in \\mathbb{R}^{m\\times m}$ and $V \\in \\mathbb{R}^{n\\times n}$ are orthogonal, and $\\Sigma \\in \\mathbb{R}^{m\\times n}$ is diagonal with **non-negative singular values** $\\sigma_1 \\ge \\dots \\ge \\sigma_r > 0$ (and $\\sigma_{r+1} = \\dots = 0$). Here $\\sigma_i(A) = \\sqrt{\\lambda_i(A^T A)} = \\sqrt{\\lambda_i(A A^T)}$, $\\|A\\|_2 = \\sigma_1$, and $\\|A\\|_F^2 = \\text{tr}(A^T A) = \\sum_{i=1}^r \\sigma_i^2$. For symmetric PSD matrices, $\\sigma_i(A) = \\lambda_i(A)$; for general symmetric matrices, $\\sigma_i(A) = |\\lambda_i(A)|$. The **Moore-Penrose pseudoinverse** $A^+ = V \\Sigma^+ U^T$ (inverting only the non-zero $\\sigma_i \\mapsto 1/\\sigma_i$) gives the unique minimum-norm least-squares solution $\\hat{x} = A^+ b$.',
          formulaLatex:
            'A = U \\Sigma V^T = \\sum_{i=1}^r \\sigma_i u_i v_i^T, \\qquad \\sigma_i(u v^T) = \\begin{cases} \\|u\\|_2 \\|v\\|_2 & i = 1 \\\\ 0 & i \\ge 2 \\end{cases}, \\qquad A^+ = V \\Sigma^+ U^T',
          plainEnglishDecoding:
            'Picture SVD as a three-step geometric dance that works for EVERY matrix $A$: first rotate the input space by $V^T$, then stretch (or zero out) along perpendicular axes by $\\sigma_i \\ge 0$, and finally rotate into the output space by $U$. Want to undo $A$ as best as possible even when $A$ is rectangular or singular? Simply run those three steps in reverse and flip each non-zero stretch to $1/\\sigma_i$ ($A^+ = V \\Sigma^+ U^T$)!',
          workedMiniExamples: [
            {
              prompt: 'Find the singular values of $A = u v^T$ where $u = [3, 4]^T$ and $v = [1, 2, 2]^T$.',
              solution:
                '$\\|u\\|_2 = \\sqrt{9+16} = 5$ and $\\|v\\|_2 = \\sqrt{1+4+4} = 3$. Since $A \\in \\mathbb{R}^{2\\times 3}$ has rank $1$, its singular values are $\\sigma_1 = 5 \\times 3 = 15$ and $\\sigma_2 = 0$.',
            },
            {
              prompt: 'Compare eigenvalues and singular values of the rank-5 orthogonal projection $P = \\sum_{i=1}^5 x_i x_i^T \\in \\mathbb{R}^{10\\times 10}$ (GATE DA 2025 · Q.50).',
              solution:
                '$P$ is symmetric PSD ($\\lambda_i \\ge 0$) with eigenvalues $1$ ($\times 5$) and $0$ ($\times 5$). Because all $\\lambda_i \\ge 0$, $\\sigma_i(P) = |\\lambda_i(P)| = \\lambda_i(P)$ — eigenvalues and singular values are identical!',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'For every real symmetric matrix $A$, its singular values equal its eigenvalues.',
            reality:
              'False when $A$ has negative eigenvalues! Singular values are ALWAYS $\\ge 0$: for symmetric $A$, $\\sigma_i(A) = |\\lambda_i(A)|$. Equality $\\sigma_i = \\lambda_i$ holds iff $A$ is symmetric PSD.',
            counterExample: '$A = \\begin{bmatrix} 2 & 0 \\\\ 0 & -5 \\end{bmatrix}$ has eigenvalues $2, -5$, but singular values $5, 2$.',
          },
          {
            myth: 'An orthogonal matrix $Q$ has singular values equal to $\\pm 1$.',
            reality:
              'False! $Q^T Q = I_n$, so every $\\sigma_i(Q) = \\sqrt{\\lambda_i(I_n)} = +1$ (never negative!).',
            counterExample: '$Q = -I_2$ has eigenvalues $-1, -1$, yet singular values $+1, +1$.',
          },
          {
            myth: 'The Moore-Penrose pseudoinverse always satisfies $A^+ A = I_n$.',
            reality:
              'Only when $A$ has full column rank $n$ (in which case $A^+ = (A^T A)^{-1} A^T$). In general, $A^+ A = V_r V_r^T$ is the orthogonal projection onto $\\text{Row}(A)$.',
            counterExample: 'For $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$, $A^+ = A$ and $A^+ A = A \\neq I_2$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Low-Rank Approximation (Eckart-Young) & SVD-Based PCA',
            whyItMatters:
              'Keeping only the top $k$ singular triplets $\\sum_{i=1}^k \\sigma_i u_i v_i^T$ yields the optimal rank-$k$ compression of a matrix and computes PCA directly on centered data $X_c$ without squaring condition numbers in $X_c^T X_c$.',
          },
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Minimum-Norm Least Squares ($\\hat{w} = X^+ y$) when $p > n$',
            whyItMatters:
              'When features outnumber samples ($X^T X$ is singular), infinitely many interpolators achieve zero training loss; $\\hat{w} = X^+ y$ uniquely picks the minimum-L2-norm solution.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm7-c3-ht1',
        title: 'Instant Singular Values of Rank-1 Matrices ($u v^T$) & Symmetric Projections',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.61', 'GATE DA 2025 · Q.50'],
        problemStatement:
          'You are given a $5\\times 5$ rank-1 matrix $M = u u^T$ (or $u v^T$), OR a $10\\times 10$ rank-5 projection $A = \\sum_{i=1}^5 x_i x_i^T$, and asked for its singular values or $\\sum \\sigma_i$.',
        triggerCue:
          'Outer product $u v^T$ / $u u^T$, OR symmetric PSD / projection sum $\\sum_{i=1}^r x_i x_i^T$ asking for singular values.',
        bruteForceTrap:
          'Writing out the $5\\times 5$ matrix entries of $uu^T$, forming $M^T M$, and trying to solve a degree-$5$ characteristic polynomial.',
        mentalShift:
          'Write $u v^T = (\\|u\\|_2 \\|v\\|_2) \\hat{u} \\hat{v}^T$: that single term IS already the rank-1 SVD! So $\\sigma_1 = \\|u\\|_2 \\|v\\|_2$ (reducing to $\\|u\\|_2^2$ when $v=u$) and all other $\\sigma_{i \\ge 2} = 0$. For any symmetric PSD matrix, $\\sigma_i = \\lambda_i$ directly!',
        steps: [
          {
            label: 'Step 1 — Check for Rank-1 Outer Product $u v^T$',
            detail: 'Compute the two vector lengths $\\|u\\|_2$ and $\\|v\\|_2$. Immediately set $\\sigma_1 = \\|u\\|_2 \\|v\\|_2$ and $\\sigma_2 = \\dots = 0$.',
          },
          {
            label: 'Step 2 — Check for Symmetric PSD ($A = A^T$ with $\\lambda_i \\ge 0$)',
            detail: 'When $A = \\sum_{i=1}^r x_i x_i^T$ (orthonormal $x_i$), eigenvalues are $1$ ($r$ times) and $0$ ($n-r$ times). Because all $\\lambda_i \\ge 0$, singular values equal eigenvalues exactly.',
          },
          {
            label: 'Step 3 — Watch the negative-eigenvalue trap on general symmetric $A$',
            detail: 'If $A = A^T$ has negative eigenvalues (e.g. reflection), take absolute values: $\\sigma_i(A) = |\\lambda_i(A)|$.',
          },
        ],
        lockInTakeaway:
          'Rank-1 $uv^T$ has $\\sigma_1 = \\|u\\|_2\\|v\\|_2$; symmetric PSD has $\\sigma_i = \\lambda_i$; general symmetric has $\\sigma_i = |\\lambda_i|$.',
      },
      {
        id: 'm7-c3-ht2',
        title: 'Rayleigh Quotient Constrained Optimization Without Calculus',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2025 · Q.60', 'GATE DA 2026 · Q.65'],
        problemStatement:
          'Find $\\max_{x^T x = 1} x^T A x$ (for an $n\\times n$ symmetric matrix like $I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$) or maximum projected variance $\\max_{\\|u\\|_2=1} u^T \\Sigma u$ in $\\mathbb{R}^{100}$.',
        triggerCue:
          'Optimization of a quadratic form $x^T A x$ subject to unit-norm constraint $x^T x = 1$ (or $\\|u\\|_2 = 1$).',
        bruteForceTrap:
          'Setting up a $100$-variable Lagrangian $\\mathcal{L}(x, \\lambda) = x^T A x - \\lambda(x^T x - 1)$ and expanding coordinates.',
        mentalShift:
          'Whenever $A$ is symmetric, the Rayleigh quotient $\\frac{x^T A x}{x^T x}$ is ALWAYS bounded by $[\\lambda_{\\min}(A),\\; \\lambda_{\\max}(A)]$. Skip the calculus and just identify the largest eigenvalue of $A$!',
        steps: [
          {
            label: 'Step 1 — Verify symmetry of $A$',
            detail: 'Confirm $A = A^T$ (if not symmetric, replace $A$ by $\\frac{1}{2}(A + A^T)$ first!).',
          },
          {
            label: 'Step 2 — Read off $\\lambda_{\\max}(A)$ structurally',
            detail: 'For projection $I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$, eigenvalues are $1$ and $0 \\implies \\lambda_{\\max} = 1$. For covariance with $\\lambda_i = 100^{2-i}$, $\\lambda_{\\max} = \\lambda_1 = 100$.',
          },
          {
            label: 'Step 3 — Return $\\lambda_{\\max}$ directly',
            detail: 'Attained at any unit eigenvector corresponding to $\\lambda_{\\max}(A)$.',
          },
        ],
        lockInTakeaway:
          'Constrained quadratic max/min on $\\|x\\|_2 = 1$ for symmetric $A$ = simply $\\lambda_{\\max}(A)$ and $\\lambda_{\\min}(A)$.',
      },
    ],
    arsenalCards: [
      {
        id: 'm7-c3-ar1',
        badge: 'Rank-1 & PSD SVD',
        whenYouSpot: 'Singular values of $u v^T$, $u u^T$, or symmetric PSD matrices',
        directWeaponLatex: '\\sigma_1(uv^T) = \\|u\\|_2\\|v\\|_2, \\qquad A \\succeq 0 \\implies \\sigma_i(A) = \\lambda_i(A)',
        instantRule:
          'Rank-1 outer products have exactly one non-zero singular value; symmetric matrices have $\\sigma_i = |\\lambda_i|$.',
        tenSecondExample: 'For $u = [1,2,3,4,5]^T$, $\\sum \\sigma_i(uu^T) = \\|u\\|_2^2 = 55$.',
        oneFatalTrap:
          'Forgetting the absolute value on negative eigenvalues of a symmetric indefinite matrix ($\\sigma_i = |\\lambda_i|$, never negative!).',
      },
      {
        id: 'm7-c3-ar2',
        badge: 'Rayleigh Quotient',
        whenYouSpot: '$\\max_{\\|x\\|=1} x^T A x$, $\\min_{\\|x\\|=1} x^T A x$, or PCA maximum projected variance',
        directWeaponLatex: '\\lambda_{\\min}(A) \\le \\frac{x^T A x}{x^T x} \\le \\lambda_{\\max}(A) \\quad (A = A^T)',
        instantRule:
          'Unit-sphere quadratic extrema equal the largest and smallest eigenvalues of the symmetric matrix $A$.',
        tenSecondExample: 'For centering projection $A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$, $\\max_{\\|x\\|=1} x^T A x = \\lambda_{\\max}(A) = 1$.',
        oneFatalTrap:
          'Applying $\\lambda_{\\max}(A)$ directly when $A$ is non-symmetric — you must symmetrize to $\\frac{1}{2}(A + A^T)$ first!',
      },
      {
        id: 'm7-c3-ar3',
        badge: 'Sylvester & Gram PD',
        whenYouSpot: 'Checking if $x^T A x > 0$, condition number $\\kappa$, or Gram matrix $X^T X$ invertibility',
        directWeaponLatex: 'A = A^T \\succ 0 \\iff \\Delta_1, \\dots, \\Delta_n > 0 \\iff \\lambda_i > 0, \\quad \\kappa = \\frac{\\lambda_{\\max}}{\\lambda_{\\min}}',
        instantRule:
          '$X^T X$ is always PSD, and is PD (invertible) iff columns of $X$ are linearly independent.',
        tenSecondExample: '$\\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}$ has $\\Delta_1=2>0, \\Delta_2=3>0$, $\\lambda=3,1 \\implies$ PD with $\\kappa = 3$.',
        oneFatalTrap:
          'Using leading minors $\\Delta_k > 0$ on a non-symmetric matrix or $\\Delta_k \\ge 0$ alone to claim PSD.',
      },
    ],
    questions: [
      {
        id: 'm7-c3-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'Let $u = [3, 4]^T \\in \\mathbb{R}^2$ and $v = [2, -1, 2]^T \\in \\mathbb{R}^3$, and define $M = u v^T \\in \\mathbb{R}^{2\\times 3}$. Find the largest singular value $\\sigma_1(M)$.',
        natAnswer: { min: 14.99, max: 15.01, exactDisplay: '15' },
        triggerHint: 'Rank-1 outer product $u v^T$ has single non-zero singular value $\\sigma_1 = \\|u\\|_2 \\|v\\|_2$.',
        intuitiveSolution: [
          'Compute $\\|u\\|_2 = \\sqrt{3^2 + 4^2} = 5$ and $\\|v\\|_2 = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$.',
          'Writing $M = (5 \\cdot 3)\\left(\\frac{u}{5}\\right)\\left(\\frac{v}{3}\\right)^T$ displays the SVD directly.',
          'Thus $\\sigma_1(M) = 5 \\times 3 = 15$ (and $\\sigma_2 = 0$).',
        ],
        directShortcutUsed: 'Rank-1 outer-product singular value $\\sigma_1(u v^T) = \\|u\\|_2 \\|v\\|_2$.',
      },
      {
        id: 'm7-c3-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.61',
        year: 2024,
        marks: 2,
        type: 'NAT',
        stem: 'Let $u = [1, 2, 3, 4, 5]^T \\in \\mathbb{R}^5$, and define the $5\\times 5$ matrix $M = u u^T$. What is the sum of all five singular values $\\sum_{i=1}^5 \\sigma_i$ of $M$?',
        natAnswer: { min: 54.99, max: 55.01, exactDisplay: '55' },
        triggerHint: '$M = u u^T$ is rank-$1$ symmetric PSD with $\\sigma_1 = \\|u\\|_2^2$ and $\\sigma_2 = \\dots = \\sigma_5 = 0$.',
        intuitiveSolution: [
          '$M = u u^T$ has rank $1$, so at most one singular value is non-zero.',
          'Since $M = \\|u\\|_2^2 \\left(\\frac{u}{\\|u\\|_2}\\right)\\left(\\frac{u}{\\|u\\|_2}\\right)^T$, the sole non-zero singular value is $\\sigma_1 = \\|u\\|_2^2$.',
          'Compute $\\|u\\|_2^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$.',
          'Thus $\\sum_{i=1}^5 \\sigma_i = 55 + 0 + 0 + 0 + 0 = 55$.',
        ],
        directShortcutUsed: 'Rank-1 PSD outer-product sum of singular values $= \\|u\\|_2^2$.',
      },
      {
        id: 'm7-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.38',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'Let $\\{x_1, x_2, \\dots, x_n\\}$ be a set of $n$ linearly independent column vectors in $\\mathbb{R}^n$, and define the $n\\times n$ matrix $A$ with entries $A_{ij} = x_i^T x_j$. Which of the following statements is ALWAYS TRUE?',
        options: [
          {
            id: 'A',
            text: '$A$ is invertible',
            whyTrueOrFalse: 'Correct! $A = X^T X$ where $X = [x_1\\;\\cdots\\;x_n]$ is invertible, so $A$ is symmetric positive definite and invertible.',
          },
          {
            id: 'B',
            text: '$0$ is an eigenvalue of $A$',
            whyTrueOrFalse: 'False — $v^T A v = \\|Xv\\|_2^2 > 0$ for all $v \\neq 0$, so all eigenvalues are strictly positive.',
          },
          {
            id: 'C',
            text: '$A$ is an orthogonal matrix',
            whyTrueOrFalse: 'False — $A$ is orthogonal only if $\\{x_i\\}$ are orthonormal (making $A = I_n$); linearly independent vectors need not have unit length or zero dot products.',
          },
          {
            id: 'D',
            text: '$\\det(A) < 0$',
            whyTrueOrFalse: 'False — since all eigenvalues of $X^T X$ are $> 0$, $\\det(A) = \\det(X)^2 > 0$.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Write $A = X^T X$ and check $v^T A v = \\|Xv\\|_2^2$.',
        intuitiveSolution: [
          'Stack the vectors as columns of $X = [x_1\\; x_2\\; \\cdots\\; x_n] \\in \\mathbb{R}^{n\\times n}$. Then $(X^T X)_{ij} = x_i^T x_j = A_{ij}$, so $A = X^T X$.',
          'Because the columns of $X$ are linearly independent in $\\mathbb{R}^n$, $X$ is invertible ($\\det(X) \\neq 0$).',
          'Therefore $\\det(A) = \\det(X^T)\\det(X) = (\\det X)^2 > 0$, proving $A$ is symmetric positive definite and always invertible.',
        ],
        directShortcutUsed: 'Gram matrix $A = X^T X \\succ 0$ whenever columns of $X$ are linearly independent.',
      },
      {
        id: 'm7-c3-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.50',
        year: 2025,
        marks: 2,
        type: 'MSQ',
        stem: 'Let $\\{x_1, x_2, x_3, x_4, x_5\\}$ be an orthonormal set of vectors in $\\mathbb{R}^{10}$, and define $A = \\sum_{i=1}^5 x_i x_i^T \\in \\mathbb{R}^{10\\times 10}$. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: 'The eigenvalues of $A$ are $1$ (with multiplicity $5$) and $0$ (with multiplicity $5$)',
            whyTrueOrFalse: 'True! $A x_i = x_i$ for $i=1,\\dots,5$ and $A v = 0$ for any $v \\perp \\text{span}(x_1,\\dots,x_5)$ (dimension $5$).',
          },
          {
            id: 'B',
            text: 'The singular values of $A$ are identical to the eigenvalues of $A$',
            whyTrueOrFalse: 'True! Since $A$ is symmetric and PSD (all $\\lambda_i \\ge 0$), $\\sigma_i(A) = |\\lambda_i(A)| = \\lambda_i(A)$.',
          },
          {
            id: 'C',
            text: '$\\text{rank}(A) = 10$',
            whyTrueOrFalse: 'False — $A$ is a sum of $5$ rank-1 matrices, so $\\text{rank}(A) = 5$.',
          },
          {
            id: 'D',
            text: '$A$ has at least one negative eigenvalue',
            whyTrueOrFalse: 'False — $A$ is an orthogonal projection matrix ($A^2 = A = A^T$), so all eigenvalues are $0$ or $1$.',
          },
        ],
        correctOptions: ['A', 'B'],
        triggerHint: 'Recognize $A = Q Q^T$ as the rank-$5$ orthogonal projection in $\\mathbb{R}^{10}$.',
        intuitiveSolution: [
          'For each $k \\in \\{1,\\dots,5\\}$, $A x_k = \\sum_{i=1}^5 x_i (x_i^T x_k) = x_k$, giving five orthogonal eigenvectors with eigenvalue $1$.',
          'For any $v$ in the $5$-dimensional orthogonal complement, $x_i^T v = 0$ for all $i$, so $A v = 0$, giving eigenvalue $0$ with multiplicity $5$.',
          'Because $A$ is symmetric with all eigenvalues $\\ge 0$ (PSD), its singular values equal its eigenvalues: five $1$s and five $0$s.',
        ],
        directShortcutUsed: 'Symmetric PSD $\\implies \\sigma_i = \\lambda_i$; rank-$r$ orthogonal projection has spectrum $\\{1^r, 0^{n-r}\\}$.',
      },
      {
        id: 'm7-c3-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.65',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Let $n \\ge 2$ and let $A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T \\in \\mathbb{R}^{n\\times n}$, where $\\mathbf{1}$ is the $n\\times 1$ all-ones column vector. Compute $\\max_{x^T x = 1} x^T A x$.',
        natAnswer: { min: 0.99, max: 1.01, exactDisplay: '1' },
        triggerHint: 'Apply Rayleigh quotient theorem: $\\max_{x^T x = 1} x^T A x = \\lambda_{\\max}(A)$ for symmetric $A$.',
        intuitiveSolution: [
          '$A = I_n - \\frac{1}{n}\\mathbf{1}\\mathbf{1}^T$ is symmetric ($A^T = A$) and idempotent ($A^2 = A$).',
          'Its eigenvalues are $1$ (multiplicity $n-1 \\ge 1$, on $\\mathbf{1}^\\perp$) and $0$ (multiplicity $1$, along $\\mathbf{1}$).',
          'By the Rayleigh quotient theorem, $\\max_{x^T x = 1} x^T A x = \\lambda_{\\max}(A) = 1$.',
        ],
        directShortcutUsed: 'Rayleigh quotient maximum $\\max_{\\|x\\|_2=1} x^T A x = \\lambda_{\\max}(A) = 1$.',
      },
      {
        id: 'm7-c3-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style SPD & Non-Symmetric Trap',
        marks: 2,
        type: 'MSQ',
        stem: 'Let $B = \\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}$ and $C = \\begin{bmatrix} 1 & 6 \\\\ 0 & 1 \\end{bmatrix}$. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: '$B$ is symmetric positive definite with condition number $\\kappa(B) = \\lambda_{\\max}/\\lambda_{\\min} = 3$',
            whyTrueOrFalse: 'True! $\\text{tr}(B) = 4, \\det(B) = 3 \\implies \\lambda_1 = 3, \\lambda_2 = 1$, both $> 0$, and $\\kappa(B) = 3/1 = 3$.',
          },
          {
            id: 'B',
            text: 'The singular values of $B$ equal the eigenvalues of $B$',
            whyTrueOrFalse: 'True! Because $B$ is symmetric and positive definite ($\\lambda_i > 0$), $\\sigma_i(B) = |\\lambda_i(B)| = \\lambda_i(B)$.',
          },
          {
            id: 'C',
            text: 'Because both leading principal minors of $C$ are strictly positive, $x^T C x > 0$ for all non-zero $x \\in \\mathbb{R}^2$',
            whyTrueOrFalse: 'False! $C$ is NOT symmetric; for $x = [1, -1]^T$, $x^T C x = 1 - 6 + 1 = -4 < 0$.',
          },
          {
            id: 'D',
            text: 'The symmetric part $S = \\frac{1}{2}(C + C^T)$ is indefinite',
            whyTrueOrFalse: 'True! $S = \\begin{bmatrix} 1 & 3 \\\\ 3 & 1 \\end{bmatrix}$ has $\\det(S) = 1 - 9 = -8 < 0$, so its eigenvalues are $4$ and $-2$.',
          },
        ],
        correctOptions: ['A', 'B', 'D'],
        triggerHint: 'Never trust Sylvester’s leading-minors test on a non-symmetric matrix — symmetrize $C$ to $\\frac{1}{2}(C+C^T)$ first!',
        intuitiveSolution: [
          'For symmetric $B$: $\\lambda^2 - 4\\lambda + 3 = 0 \\implies \\lambda_1 = 3, \\lambda_2 = 1$. Both are $> 0$, so $B \\succ 0$, $\\kappa(B) = 3/1 = 3$ (A is true), and singular values equal eigenvalues (B is true).',
          'For non-symmetric $C$: $x^T C x = x^T S x$ where $S = \\frac{1}{2}(C + C^T) = \\begin{bmatrix} 1 & 3 \\\\ 3 & 1 \\end{bmatrix}$.',
          'Since $\\text{tr}(S) = 2$ and $\\det(S) = 1 - 9 = -8$, $S$ has eigenvalues $4 > 0$ and $-2 < 0$ (indefinite, so D is true and C fails at $x = [1, -1]^T$).',
        ],
        directShortcutUsed: 'Symmetrize $x^T C x = x^T \\left(\\frac{C+C^T}{2}\\right)x$ before testing definiteness.',
      },
    ],
  },
]

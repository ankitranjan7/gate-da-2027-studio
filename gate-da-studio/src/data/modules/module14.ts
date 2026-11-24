import type { ChapterData } from '../../types/curriculum'

const chapter1: ChapterData = {
  id: 'ml1-ch1',
  number: 1,
  title: 'Linear Regression (OLS), Ridge (L2) & Lasso (L1)',
  shortTitle: 'Linear, Ridge & Lasso',
  estimatedHours: 4.0,
  dayLabel: 'Week 6 · Day 36–37',
  tagline:
    'Let us build regression from the ground up — starting with a 3-point line through the origin, stepping up to the Normal Equations $(X^\\top X)^{-1} X^\\top y$, seeing how $L_2$ Ridge rescues singular matrices by shifting eigenvalues by $+\\lambda$, and watching $L_1$ Lasso’s sharp diamond corners snap weights to exact zero.',
  syllabusMapping: [
    'Simple linear regression, multiple linear regression',
    'Ridge regression (L2 regularization) and Lasso (L1 regularization)',
    'Gradient descent / Stochastic Gradient Descent (SGD) for supervised learning',
  ],
  whatIsImportant: [
    'Exact 1D & matrix OLS Normal Equations $(X^\\top X)w^* = X^\\top y$ and zero-intercept formula $w^* = \\frac{\\sum x_i y_i}{\\sum x_i^2}$ (GATE DA 2025 Q.34)',
    'Why adding $+\\lambda I$ makes $X^\\top X + \\lambda I$ strictly positive definite and always invertible even when $d > n$ or features are collinear',
    'Ridge Bias-Variance trade-off: adding $\\lambda > 0$ increases bias while reducing variance (GATE DA 2026 Q.37)',
    'Evaluating hybrid regularized losses accurately without assuming MSE — e.g. MAE + $L_2^2$ Ridge (GATE DA 2026 Q.55) and 1-step SGD updates (GATE DA 2026 Q.29)',
    'Geometric difference between $L_2$ (smooth shrinkage, never exact zero) and $L_1$ (diamond corners produce sparse weights)',
  ],
  whatIsNotImportant: [
    'Elastic-Net coordinate-descent convergence proofs or LARS (Least Angle Regression) pivoting tables',
    'Huber loss second-order Newton heuristics or Generalized Linear Model (GLM) link-function taxonomy beyond Logistic Regression',
    'Complex heteroscedasticity tests (White / Breusch-Pagan) — stick to Gauss-Markov assumptions and OLS geometry',
  ],
  inboundStream:
    'Calculus (setting $\\nabla_w L(w) = 0$ & convexity $H \\succeq 0$) + Linear Algebra (column-space projection $P = X(X^\\top X)^{-1}X^\\top$, Gram matrix $X^\\top X$ invertibility from GATE DA 2025 Q.38, and eigenvalues) + Probability (MSE risk & Gaussian MLE).',
  outboundStream: [
    'Ch. 2 Logistic Regression (replacing squared loss with Binary Cross-Entropy)',
    'Ch. 3 Soft-Margin SVM (hinge loss + $L_2$ Ridge penalty)',
    'Ch. 4 Bias-Variance Decomposition & Cross-Validation tuning of $\\lambda$',
  ],
  glossary: [
    {
      term: 'Ordinary Least Squares (OLS)',
      symbol: '$w^* = (X^\\top X)^{-1} X^\\top y$',
      plainEnglish:
        'OLS is the classic way of fitting a straight line or hyperplane to data by picking weights $w$ that make the total squared vertical distance between true targets $y$ and predictions $Xw$ as small as possible.',
      tinyExample: 'For points $(-1,1), (2,-5), (3,5)$ with $y = wx$, OLS gives $w^* = \\frac{\\sum x_i y_i}{\\sum x_i^2} = \\frac{4}{14} = \\frac{2}{7}$.',
    },
    {
      term: 'Residual & Sum of Squared Errors (SSE)',
      symbol: '$r_i = y_i - \\hat{y}_i,\\; \\text{SSE} = \\sum r_i^2$',
      plainEnglish:
        'A residual is simply how far off your model’s prediction $\\hat{y}_i$ is from the actual value $y_i$. Squaring and adding every residual gives the SSE, which penalizes big misses heavily and stays smooth for calculus.',
      tinyExample: 'If actual $y = 5$ and predicted $\\hat{y} = 3$, the residual is $r = 2$ and its squared error contribution is $4$.',
    },
    {
      term: 'Coefficient of Determination ($R^2$)',
      symbol: '$R^2 = 1 - \\frac{\\text{SSE}}{\\text{SST}}$',
      plainEnglish:
        'Think of $R^2$ as the fraction of total variation in $y$ that your regression line successfully explains, compared with just guessing the average $\\bar{y}$ every time.',
      tinyExample: 'If total variance $\\text{SST} = 100$ and your model leaves $\\text{SSE} = 15$, then $R^2 = 1 - \\frac{15}{100} = 0.85$ ($85\\%$ explained).',
    },
    {
      term: 'Design Matrix & Gram Matrix',
      symbol: '$X \\in \\mathbb{R}^{n \\times d},\\; X^\\top X$',
      plainEnglish:
        'We stack all $n$ training samples as rows of the design matrix $X$ (each column is one feature). Multiplying $X^\\top X$ produces the symmetric $d \\times d$ Gram matrix whose invertibility decides whether OLS has a unique answer.',
      tinyExample: 'With $n = 4$ samples and $d = 5$ features, $X^\\top X$ is $5 \\times 5$ with rank at most $4$, so it is singular.',
    },
    {
      term: 'Normal Equations & Orthogonal Projection',
      symbol: '$(X^\\top X)w^* = X^\\top y$',
      plainEnglish:
        'Setting the gradient of SSE to zero gives the Normal Equations. Geometrically, they drop the shortest perpendicular shadow $\\hat{y} = Xw^*$ of $y$ onto the column space of $X$, making the leftover error vector $r$ perpendicular to every feature column.',
      tinyExample: 'When $X$ includes an intercept column $\\mathbf{1}$, orthogonality $\\mathbf{1}^\\top r = 0$ forces all residuals to sum to $0$.',
    },
    {
      term: 'Multicollinearity & Singularity',
      symbol: '$\\det(X^\\top X) = 0$',
      plainEnglish:
        'Multicollinearity happens when two or more features carry nearly duplicate information (or exact linear copies). In the exact duplicate case, $X^\\top X$ becomes singular and OLS blows up because infinitely many weight combinations fit the data equally well.',
      tinyExample: 'If $x_2 = x_1$, weights $(4, 0)$ and $(100, -96)$ both give $w_1 x_1 + w_2 x_2 = 4x_1$, leaving OLS undefined.',
    },
    {
      term: 'Bias–Variance Trade-off',
      symbol: '$\\text{Error} = \\text{Bias}^2 + \\text{Var} + \\sigma^2$',
      plainEnglish:
        'Bias is systematic error from an overly simple or constrained model, while variance is how wildly your fitted weights jump around when you get a slightly different training set. Regularization intentionally accepts a little bias to slash unstable variance.',
      tinyExample: 'Increasing Ridge $\\lambda$ shrinks weights toward $0$, nudging bias up slightly while making predictions far less sensitive to noise.',
    },
    {
      term: 'Regularization ($L_1$ & $L_2$ Penalty)',
      symbol: '$+\\lambda\\|w\\|_1$ vs. $+\\lambda\\|w\\|_2^2$',
      plainEnglish:
        'Regularization attaches a complexity tax $\\lambda \\ge 0$ to the training loss so the model cannot chase noise with giant weights. Bigger $\\lambda$ means a heavier tax and simpler, smaller slopes.',
      tinyExample: 'With $\\lambda = 0.20$ and $w = [-3, 4]^\\top$, the $L_2^2$ Ridge penalty adds $0.20((-3)^2 + 4^2) = 5.0$ to the data loss.',
    },
    {
      term: 'Ridge Regression ($L_2$ Regularization)',
      symbol: '$w^*_{\\text{Ridge}} = (X^\\top X + \\lambda I)^{-1} X^\\top y$',
      plainEnglish:
        'Ridge adds $+\\lambda \\|w\\|_2^2$ to the loss, which lifts every eigenvalue of $X^\\top X$ by $+\\lambda > 0$. That guarantees $(X^\\top X + \\lambda I)$ is always invertible and shrinks weights smoothly toward zero without ever hitting exact zero.',
      tinyExample: 'In 1D with $\\sum x_i y_i = 4$ and $\\sum x_i^2 = 14$, adding $\\lambda = 6$ smoothly shrinks $w^*$ from $4/14$ down to $4/(14+6) = 0.20$.',
    },
    {
      term: 'Lasso Regression ($L_1$ Regularization)',
      symbol: '$\\min \\|y - Xw\\|_2^2 + \\lambda \\|w\\|_1$',
      plainEnglish:
        'Lasso penalizes the sum of absolute weights $|w_j|$. Because $|w_j|$ keeps a sharp V-shaped slope of $\\pm\\lambda$ right down to zero (forming a diamond constraint with corners on the axes), weak features get snapped to exact zero — giving automatic feature selection.',
      tinyExample: 'For $g(w) = (w - 2)^2 + 6|w|$, the data pull at $w=0$ is $4 < 6$, so Lasso locks the exact optimum at $w^* = 0$.',
    },
    {
      term: 'Stochastic Gradient Descent (SGD)',
      symbol: '$w^{(t+1)} = w^{(t)} - \\eta \\nabla_w \\ell_i(w^{(t)})$',
      plainEnglish:
        'Instead of computing the gradient over the entire dataset before taking one step, SGD peeks at a single training example $(x_i, y_i)$ and nudges the weights downhill opposite to that sample’s slope, scaled by the learning rate $\\eta$.',
      tinyExample: 'At $w_0 = 3$ with sample gradient $10$ and $\\eta = 0.1$, one SGD step moves to $w_1 = 3 - 0.1(10) = 2.0$.',
    },
  ],
  generatorId: 'ols-ridge-loss-gen',
  concepts: [
    {
      id: 'm14-c1-1',
      title: 'Ordinary Least Squares (OLS): From 3 Points to Normal Equations',
      subtitle: 'Solving $y \\approx Xw$ by setting the gradient to zero — and projecting $y$ onto $\\text{Col}(X)$',
      priority: 'core-pillar',
      buildsOn: 'Calculus gradients ($\\nabla_w \\|y - Xw\\|_2^2 = 0$) & Linear Algebra column spaces / Gram matrices',
      toyExample: {
        title: 'Fitting a Line Through the Origin on 3 Noisy Points',
        scenario:
          'You have 3 points $(-1, 1),\\; (2, -5),\\; (3, 5)$ and must pick a single slope $w$ for the zero-intercept model $f_w(x) = wx$ that minimizes the Sum of Squared Errors $\\text{SSE}(w) = \\sum_{i=1}^3 (y_i - w x_i)^2$ (literally GATE DA 2025 Q.34!).',
        walkthroughSteps: [
          '1. **Write the exact squared error:** $\\text{SSE}(w) = (1 - (-w))^2 + (-5 - 2w)^2 + (5 - 3w)^2 = (w+1)^2 + (2w+5)^2 + (3w-5)^2$.',
          '2. **Differentiate w.r.t. $w$ and set to $0$:** $\\frac{d}{dw}\\text{SSE}(w) = 2(w+1)(1) + 2(2w+5)(2) + 2(3w-5)(3) = 0$.',
          '3. **Collect $w$ terms vs constants:** $(1^2 + 2^2 + 3^2)w + (1 - (-10) - 15)$ — wait, expand carefully: $2w+2 + 8w+20 + 18w-30 = 28w - 8 = 0 \\implies w^* = \\frac{8}{28} = \\frac{2}{7} \\approx 0.286$.',
          '4. **Spot the universal numerator/denominator pattern:** $\\sum x_i y_i = (-1)(1) + (2)(-5) + (3)(5) = -1 - 10 + 15 = 4$, and $\\sum x_i^2 = 1 + 4 + 9 = 14$, giving $w^* = \\frac{\\sum x_i y_i}{\\sum x_i^2} = \\frac{4}{14} = \\frac{2}{7}$!',
        ],
        ahaMoment:
          'Notice how you never actually needed to expand three quadratics! Setting the derivative of $\\|y - xw\\|_2^2$ to zero simply forces the leftover residual vector $r = y - xw$ to stand **orthogonal** to $x$: $x^\\top(y - xw) = 0$, which hands you $w^* = \\frac{x^\\top y}{x^\\top x}$ in two quick dot products.',
      },
      theoremAndFormula: {
        statement:
          'For design matrix $X \\in \\mathbb{R}^{n \\times d}$ and target vector $y \\in \\mathbb{R}^n$, Ordinary Least Squares minimizes $L(w) = \\|y - Xw\\|_2^2$. Setting $\\nabla_w L(w) = -2X^\\top(y - Xw) = 0$ yields the **Normal Equations** $(X^\\top X)w^* = X^\\top y$. When $X$ has full column rank ($\\text{rank}(X) = d$), $X^\\top X$ is symmetric positive definite and invertible.',
        formulaLatex:
          'w^*_{\\text{OLS}} = (X^\\top X)^{-1} X^\\top y, \\qquad \\hat{y} = Xw^*_{\\text{OLS}} = \\underbrace{X(X^\\top X)^{-1}X^\\top}_{P \\text{ (projection matrix)}} y',
        plainEnglishDecoding:
          'Pause and admire how every earlier GATE Math chapter clicks together right here. **Calculus** sets $\\nabla_w L = 0$ (and the positive semi-definite Hessian $H = 2X^\\top X \\succeq 0$ reassures us that we hit a true global minimum). **Linear Algebra** guarantees $(X^\\top X)^{-1}$ exists whenever the columns of $X$ are linearly independent (GATE DA 2025 Q.38), turning $\\hat{y} = Py$ into the perpendicular shadow of $y$ onto $\\text{Col}(X)$ so the residual $r = y - \\hat{y}$ sits at $90^\\circ$ to every feature column. Finally, **Probability** shows that $w^*_{\\text{OLS}}$ matches the Gaussian Maximum Likelihood Estimator (MLE) and is the Best Linear Unbiased Estimator (BLUE) under constant-variance uncorrelated noise.',
        workedMiniExamples: [
          {
            prompt:
              'For 1D regression WITH an intercept ($\\hat{y}_i = w_0 + w_1 x_i$) on $(1,2), (2,4), (3,3)$, compute the slope $w_1$ and intercept $w_0$.',
            solution:
              'Means: $\\bar{x} = 2$, $\\bar{y} = 3$. Centered values: $x_i - \\bar{x} = (-1, 0, 1)$, $y_i - \\bar{y} = (-1, 1, 0)$. Then $w_1 = \\frac{\\sum (x_i-\\bar{x})(y_i-\\bar{y})}{\\sum (x_i-\\bar{x})^2} = \\frac{(-1)(-1)+0+0}{1+0+1} = 0.5$, and $w_0 = \\bar{y} - w_1\\bar{x} = 3 - 0.5(2) = 2$.',
          },
          {
            prompt:
              'Suppose $X \\in \\mathbb{R}^{4 \\times 5}$ (4 samples, 5 features). Can $w^*_{\\text{OLS}} = (X^\\top X)^{-1} X^\\top y$ be computed?',
            solution:
              'No! $\\text{rank}(X^\\top X) = \\text{rank}(X) \\le \\min(4, 5) = 4 < 5$, so the $5 \\times 5$ matrix $X^\\top X$ is **singular** (determinant $0$). There are infinitely many exact fits ($\\text{SSE} = 0$), requiring Ridge regularization or pseudoinverse.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'OLS residuals always sum to zero: $\\sum_{i=1}^n (y_i - \\hat{y}_i) = 0$.',
          reality:
            'Only true when the model includes an **intercept column $\\mathbf{1}$** (because $\\mathbf{1}^\\top r = 0$). In zero-intercept regression $y = wx$, $\\sum r_i$ is NOT guaranteed to be zero!',
          counterExample:
            'In GATE DA 2025 Q.34 ($y = \\frac{2}{7}x$ on $(-1,1),(2,-5),(3,5)$), residuals are $\\frac{9}{7}, -\\frac{39}{7}, \\frac{29}{7}$, which sum to $-\\frac{1}{7} \\neq 0$, while $\\sum x_i r_i = 0$.',
        },
        {
          myth: 'Adding a correlated feature always makes $X^\\top X$ non-invertible.',
          reality:
            'High correlation (say $r = 0.99$) makes $X^\\top X$ **ill-conditioned** (huge variance), not singular. Only **exact** linear dependence ($x_2 = 3x_1$) or $d > n$ makes $X^\\top X$ singular.',
          counterExample:
            'If $x_2 = x_1 + 0.01\\varepsilon$ with linearly independent $\\varepsilon$, $\\det(X^\\top X) > 0$ still holds.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 6,
          topic: 'Ridge Invertibility & Minimum-Norm Solutions',
          whyItMatters:
            'When $X^\\top X$ is singular ($d > n$ or collinear features), adding $+\\lambda I$ shifts every zero eigenvalue of $X^\\top X$ to $\\lambda > 0$, rescuing $(X^\\top X + \\lambda I)^{-1}$.',
          pyqProof: 'GATE DA 2025 Q.38 (Gram invertibility) + Q.34 (1D OLS) + GATE DA 2026 Q.37 (Ridge)',
        },
      ],
    },
    {
      id: 'm14-c1-2',
      title: 'Ridge Regression (L2 Regularization): Eigenvalue Shift & Variance Reduction',
      subtitle: 'Why $+\\lambda \\|w\\|_2^2$ guarantees invertibility, shrinks slopes smoothly, and trades small bias for lower variance',
      priority: 'high-yield',
      buildsOn: 'Normal Equations $(X^\\top X)w = X^\\top y$ & symmetric matrix eigenvalues ($\\lambda_i(A + \\lambda I) = \\lambda_i(A) + \\lambda$)',
      toyExample: {
        title: 'Two Identical Features Break OLS, Rescued by $\\lambda = 1$',
        scenario:
          'Suppose 1 sample has $x = [1, 1]^\\top$ and $y = 4$, so we want $w_1 + w_2 = 4$. OLS tries to invert $X^\\top X = \\begin{bmatrix}1 & 1\\\\ 1 & 1\\end{bmatrix}$, which has determinant $0$ (eigenvalues $2$ and $0$) — infinitely many solutions like $(4,0)$ or $(100, -96)$ give zero training error!',
        walkthroughSteps: [
          '1. **Add $L_2$ Ridge penalty with $\\lambda = 1$:** Minimize $(4 - w_1 - w_2)^2 + 1 \\cdot (w_1^2 + w_2^2)$.',
          '2. **Check the modified Gram matrix:** $X^\\top X + \\lambda I = \\begin{bmatrix}2 & 1\\\\ 1 & 2\\end{bmatrix}$, whose determinant is $4 - 1 = 3 > 0$ (eigenvalues shifted from $2, 0$ to $3, 1$!).',
          '3. **Solve $(X^\\top X + I)w = X^\\top y = \\begin{bmatrix}4\\\\4\\end{bmatrix}$:** By symmetry $w_1 = w_2 = \\frac{4}{3} \\approx 1.33$.',
          '4. **Notice the stability:** Instead of exploding weights $(100, -96)$, Ridge spreads weight evenly $(4/3, 4/3)$, trading a small training bias ($4/3+4/3 = 8/3 \\neq 4$) for dramatically smaller sensitivity to noise!',
        ],
        ahaMoment:
          'Here is the whole secret of Ridge in one line: because $X^\\top X$ is always positive semi-definite ($\\sigma_i^2 \\ge 0$), adding $\\lambda I$ ($\\lambda > 0$) lifts **every** eigenvalue up to $\\sigma_i^2 + \\lambda \\ge \\lambda > 0$. Not a single zero eigenvalue can survive, so $(X^\\top X + \\lambda I)^{-1}$ is unconditionally invertible!',
      },
      theoremAndFormula: {
        statement:
          'Ridge regression adds an $L_2$ squared-norm penalty to the data loss: $L_{\\text{Ridge}}(w) = \\|y - Xw\\|_2^2 + \\lambda \\|w\\|_2^2$ ($\\lambda > 0$). Differentiating gives the unique closed-form solution $w^*_{\\text{Ridge}} = (X^\\top X + \\lambda I)^{-1} X^\\top y$. In GATE DA 2026 Q.55, the same $L_2^2$ Ridge penalty was combined with **MAE** ($|y - w^\\top x| + \\lambda\\|w\\|_2^2$) — always read the exact data-loss term!',
        formulaLatex:
          'w^*_{\\text{Ridge}} = (X^\\top X + \\lambda I)^{-1} X^\\top y \\qquad \\text{and for 1D } (y=wx): \\quad w^*_{\\text{Ridge}} = \\frac{\\sum x_i y_i}{\\sum x_i^2 + \\lambda}',
        plainEnglishDecoding:
          'Look closely at that 1D formula: adding $+\\lambda$ to the denominator simply multiplies your OLS slope by a gentle shrinkage factor $\\frac{\\sum x_i^2}{\\sum x_i^2 + \\lambda} < 1$. Because that ratio stays strictly positive for every finite $\\lambda$, Ridge **pulls weights smoothly toward zero** without ever snapping them all the way to $0$. As you turn $\\lambda$ up, your estimates pick up a controlled bit of bias in exchange for much calmer, lower variance (GATE DA 2026 Q.37).',
        workedMiniExamples: [
          {
            prompt:
              '(GATE DA 2026 Q.55 Pattern) Compute the overall regularized loss $|y_{\\text{true}} - w^\\top x| + 0.20\\|w\\|_2^2$ given $w = [-3, 4]^\\top$, $x = [1, 2]^\\top$, and $y_{\\text{true}} = x_1 + x_2$.',
            solution:
              '$y_{\\text{true}} = 1 + 2 = 3$. Prediction $w^\\top x = (-3)(1) + (4)(2) = 5$. Data MAE term $= |3 - 5| = 2$. Penalty term $= 0.20((-3)^2 + 4^2) = 0.20(25) = 5$. Total loss $= 2 + 5 = 7.00$.',
          },
          {
            prompt:
              'Re-solve the GATE DA 2025 Q.34 dataset $(-1,1),(2,-5),(3,5)$ with Ridge penalty $\\lambda = 6$ on $y = wx$.',
            solution:
              'We already computed $\\sum x_i y_i = 4$ and $\\sum x_i^2 = 14$. With $\\lambda = 6$, $w^*_{\\text{Ridge}} = \\frac{4}{14 + 6} = \\frac{4}{20} = 0.20$ (shrunk from $\\frac{2}{7} \\approx 0.286$).',
          },
        ],
      },
      sandboxId: 'ml-svm-ridge-lab',
      msqTraps: [
        {
          myth: 'Ridge regression shrinks all weights including the intercept $w_0$, and drives irrelevant weights to exact zero.',
          reality:
            'Two separate errors! First, standard Ridge penalizes only slopes $\\sum_{j=1}^d w_j^2$, leaving intercept $w_0$ unpenalized (otherwise shifting $y$ by a constant would distort predictions). Second, $L_2$ shrinks smoothly toward $0$ and does NOT yield exact zeros for finite $\\lambda$.',
          counterExample:
            'For 1D $w^* = \\frac{4}{14+\\lambda}$, $w^* > 0$ for every finite $\\lambda > 0$.',
        },
        {
          myth: 'If features are on different scales (e.g., meters vs millimeters), Ridge predictions remain identical if we scale a feature by $1000$.',
          reality:
            'OLS is scale-equivariant, **Ridge and Lasso are NOT!** Penalizing $\\lambda w_j^2$ punishes large weights, so scaling a feature down by $1000$ forces $w_j$ up by $1000$ and incurs $10^6\\times$ penalty. Always standardize features before Ridge/Lasso.',
          counterExample:
            'Multiplying $x_1$ by $0.01$ requires $w_1 \\to 100w_1$ to keep the same fit, exploding $\\lambda w_1^2$ by $10{,}000\\times$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Weight Decay in Neural Networks & Bias-Variance Trade-off',
          whyItMatters:
            'In MLPs, adding $\\frac{\\lambda}{2}\\|W\\|_F^2$ to Cross-Entropy shrinks gradient updates by $(1 - \\eta\\lambda)W$ ("weight decay"), directly preventing overfitting just like Ridge.',
          pyqProof: 'GATE DA 2026 Q.37 (Ridge bias vs variance) & Q.55 (MAE + Ridge loss)',
        },
      ],
    },
    {
      id: 'm14-c1-3',
      title: 'Lasso (L1 Regularization), Corner Sparsity & SGD Updates',
      subtitle: 'Why the $L_1$ diamond produces automatic feature selection and how single-step SGD updates weights',
      priority: 'high-yield',
      buildsOn: 'Ridge $L_2$ penalty & gradient descent step $w \\leftarrow w - \\eta \\nabla \\ell(w)$',
      toyExample: {
        title: 'Why $L_1$ Snaps a Slope to Exact Zero While $L_2$ Never Can',
        scenario:
          'Compare minimizing $f_{L2}(w) = (w - 2)^2 + 6w^2$ vs. $f_{L1}(w) = (w - 2)^2 + 6|w|$. Notice the derivative of $(w-2)^2$ at $w=0$ is $2(0-2) = -4$.',
        walkthroughSteps: [
          '1. **In $L_2$ Ridge:** At $w = 0$, the derivative of $6w^2$ is $12(0) = 0$! So the $-4$ pull from data always wins near $0$ and nudges $w$ strictly positive ($w^* = 2/7$).',
          '2. **In $L_1$ Lasso:** At $w = 0^+$, the derivative of $6|w|$ is $+6$ (constant cliff, NOT zero!). Moving right from $w=0$ increases total loss at rate $-4 + 6 = +2 > 0$.',
          '3. **Check left side ($w = 0^-$):** Moving left increases $(w-2)^2$ AND increases $6|w|$, so slope is $-4 - 6 = -10 < 0$.',
          '4. **Result:** $w = 0$ is a sharp **V-shaped valley floor** — the exact global minimum is $w^* = 0$!',
        ],
        ahaMoment:
          'Keep this crisp mental picture: the slope of $w^2$ flattens to zero at $w = 0$, so even a tiny pull from the data always drags a Ridge weight off zero. By contrast, $|w|$ keeps a full slope of $\\pm \\lambda$ all the way into $w = 0$, so whenever the data’s pull $|g_0|$ is weaker than $\\lambda$, Lasso locks $w^* = 0$ — giving you **automatic feature selection**!',
      },
      theoremAndFormula: {
        statement:
          'Lasso minimizes $L_{\\text{Lasso}}(w) = \\|y - Xw\\|_2^2 + \\lambda \\|w\\|_1$ (equivalent to constrained $\\min \\|y - Xw\\|_2^2$ s.t. $\\|w\\|_1 \\le t$). In 2D, the constraint region $\\|w\\|_1 \\le t$ is a **rotated diamond** whose sharp corners lie directly on the coordinate axes ($w_1=0$ or $w_2=0$), so expanding elliptical MSE contours typically touch a corner first. For general differentiable objectives, **Stochastic Gradient Descent (SGD)** updates parameters using one sample $(x_i, y_i)$ at a time.',
        formulaLatex:
          '\\text{Soft-Thresholding (orthonormal } X\\text{): } w_j^* = \\text{sign}(z_j)\\max(0, |z_j| - \\lambda/2), \\qquad \\text{SGD: } w^{(t+1)} = w^{(t)} - \\eta \\nabla_w \\ell_i(w^{(t)})',
        plainEnglishDecoding:
          'Picture the two constraint shapes side by side: Ridge keeps your weight vector inside a smooth **circle/sphere** (no sharp corners, so expanding MSE ovals almost never touch an axis), while Lasso keeps $w$ inside a **diamond** whose pointy corners poke right out along the axes, creating exact zeros. And whenever a GATE question asks for one SGD step (like GATE DA 2026 Q.29), stay calm: differentiate the exact single-sample loss $\\ell_i(w)$ printed in the question and plug in $\\eta$.',
        workedMiniExamples: [
          {
            prompt:
              'Find the exact minimizer of $g(w) = (w - 3)^2 + 8|w|$ over $w \\in \\mathbb{R}$.',
            solution:
              'At $w > 0$: $g\'(w) = 2(w-3) + 8 = 2w + 2 > 0$ (strictly increasing on $w > 0$). At $w < 0$: $g\'(w) = 2(w-3) - 8 = 2w - 14 < 0$ (strictly decreasing on $w < 0$). Hence the minimum occurs at the kink $w^* = 0$!',
          },
          {
            prompt:
              'Using squared loss $\\ell(w) = \\frac{1}{2}(y - wx)^2$ on $x = 2, y = 1$, perform one SGD step from $w_0 = 3$ with learning rate $\\eta = 0.10$.',
            solution:
              'Prediction $\\hat{y} = 3(2) = 6$. Gradient $\\frac{\\partial \\ell}{\\partial w} = (wx - y)x = (6 - 1)(2) = 10$. Update: $w_1 = 3 - 0.10(10) = 2.0$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Lasso has a closed-form matrix equation $(X^\\top X + \\lambda \\text{sign}(w))^{-1}X^\\top y$ like Ridge.',
          reality:
            'False! Because $|w_j|$ is non-differentiable at $0$ and $\\text{sign}(w)$ depends on $w$ itself, Lasso generally has **no closed-form matrix inverse** (except when columns of $X$ are orthonormal) and is solved via coordinate descent or proximal methods.',
          counterExample:
            'With correlated features, you cannot invert $X^\\top X$ with a fixed diagonal matrix to get Lasso weights.',
        },
        {
          myth: 'If two features are identical ($x_1 = x_2$), Lasso splits weight evenly ($w_1 = w_2$) just like Ridge.',
          reality:
            'False! Ridge strictly convexifies the problem and splits weight $(c/2, c/2)$ uniquely. Lasso is indifferent along the flat diamond edge $w_1 + w_2 = c$ ($w_1, w_2 \\ge 0$) and typically picks **one** feature $(c, 0)$ while zeroing the other!',
          counterExample:
            'Every point $(t, 4-t)$ with $t \\in [0, 4]$ has identical $L_1$ norm $4$ and identical fit $w_1+w_2=4$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Ch. 4 MLP Backpropagation & SGD Momentum',
          whyItMatters:
            'The exact same $w \\leftarrow w - \\eta \\nabla \\ell_i(w)$ rule drives neural network training once the Chain Rule supplies $\\nabla \\ell_i(w)$.',
          pyqProof: 'GATE DA 2026 Q.29 (1-step SGD on $f_w(x)=wx$)',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm14-c1-ht1',
      title: 'Zero-Intercept / Rank-Deficient OLS & Ridge Shortcut',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2025 · Q.34', 'GATE DA 2025 · Q.38', 'GATE DA 2026 · Q.37'],
      problemStatement:
        'Given $n$ points $(x_i, y_i)$ in 1D (or an $n \\times d$ design matrix $X$ with collinear columns or $d > n$), find the optimal OLS or Ridge weight $w^*$ and determine invertibility.',
      triggerCue:
        'Spot **"line passing through origin $y = wx$"**, **"linearly dependent features"**, or **"$\\lambda > 0$ Ridge penalty"**.',
      bruteForceTrap:
        'Expanding $\\sum_{i=1}^n (y_i - wx_i)^2$ term by term into $Aw^2 + Bw + C$, or forming full $d \\times d$ matrices only to discover $\\det(X^\\top X) = 0$.',
      mentalShift:
        'Bypass quadratic expansion completely: compute only two dot products $x^\\top y$ and $x^\\top x$ (plus $+\\lambda$ in the denominator for Ridge). For matrices, immediately inspect eigenvalues: $X^\\top X$ has $\\sigma_i^2 \\ge 0$, so $X^\\top X + \\lambda I$ has eigenvalues $\\sigma_i^2 + \\lambda > 0$ and is ALWAYS invertible.',
      steps: [
        {
          label: 'Check if intercept $w_0$ is present',
          detail:
            'If NO intercept ($y = wx$), do NOT center $x$ or $y$: use raw sums $w^*_{\\text{OLS}} = \\frac{\\sum x_i y_i}{\\sum x_i^2}$. If intercept IS present, center $x_i - \\bar{x}$ and $y_i - \\bar{y}$ first.',
        },
        {
          label: 'Insert Ridge $\\lambda$ cleanly',
          detail:
            'For 1D Ridge on $y = wx$, add $\\lambda$ to the denominator: $w^*_{\\text{Ridge}} = \\frac{\\sum x_i y_i}{\\sum x_i^2 + \\lambda}$ (verify scaling: if objective is $\\frac{1}{n}\\sum(y_i-wx_i)^2 + \\lambda w^2$, multiply $\\lambda$ by $n$ in the denominator!).',
        },
        {
          label: 'Verify Bias-Variance direction',
          detail:
            'Increasing $\\lambda$ shrinks $\\|w\\|_2$, which increases estimation bias (unless true $w=0$) and strictly decreases estimator variance.',
        },
      ],
      lockInTakeaway:
        'Check whether the loss divides MSE by $n$ (or $\\frac{1}{2}$) before plugging $\\lambda$ into the Normal Equations, and never forget that unpenalized $w_0$ changes centering!',
    },
    {
      id: 'm14-c1-ht2',
      title: 'Reading Custom Regularized Objectives & 1D Lasso Kinks',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2026 · Q.55', 'GATE DA 2026 · Q.29'],
      problemStatement:
        'Compute a customized regularized loss (e.g., MAE + $L_2^2$ Ridge, or MSE + $L_1$ Lasso) at a candidate weight vector $w$, or test whether a 1D Lasso weight snaps to $0$.',
      triggerCue:
        'Spot **absolute value $|y - w^\\top x|$** next to **$\\lambda \\|w\\|_2^2$**, or **$+\\lambda |w|$** in a 1D minimization.',
      bruteForceTrap:
        'Auto-piloting into squaring the residual $(y - w^\\top x)^2$ when the question wrote MAE $|y - w^\\top x|$, or forgetting to square $\\|w\\|_2$ in $\\|w\\|_2^2$.',
      mentalShift:
        'Read the norm exponent and data-loss literal character by character! For 1D Lasso $f(w) = (w - a)^2 + \\lambda |w|$, compare the magnitude of the data slope at zero ($|2a|$) against $\\lambda$: if $|2a| \\le \\lambda$, the kink at $w=0$ traps the minimum.',
      steps: [
        {
          label: 'Verify loss anatomy',
          detail:
            'Confirm whether data loss is $|y - \\hat{y}|$ (MAE) or $(y - \\hat{y})^2$ (MSE), and whether penalty is $\\|w\\|_2^2 = \\sum w_j^2$ (squared!) or $\\|w\\|_2 = \\sqrt{\\sum w_j^2}$ (unsquared!).',
        },
        {
          label: 'Compute prediction and target separately',
          detail:
            'Watch for $y_{\\text{true}}$ defined by a formula (e.g., $y_{\\text{true}} = x_1 + x_2$ in GATE DA 2026 Q.55) rather than a raw constant.',
        },
        {
          label: 'For Lasso zero-check, evaluate subgradient at $0$',
          detail:
            'Check if $|\\text{data derivative at } w_j=0| \\le \\lambda$. If yes, $w_j^* = 0$ immediately.',
        },
      ],
      lockInTakeaway:
        'GATE DA 2026 Q.55 rewarded candidates who noticed $|y - w^\\top x|$ (MAE) + $0.20\\|w\\|_2^2$ (Ridge) instead of blindly squaring the error.',
    },
  ],
  arsenalCards: [
    {
      id: 'm14-c1-a1',
      badge: 'OLS & Projection',
      whenYouSpot: 'Minimize $\\|y - Xw\\|_2^2$ or line through origin $y = wx$',
      directWeaponLatex: 'w^* = (X^\\top X)^{-1} X^\\top y \\quad \\Big(\\text{1D: } \\frac{\\sum x_i y_i}{\\sum x_i^2}\\Big)',
      instantRule:
        'Normal Equations force residual $y - Xw^*$ orthogonal to every feature column ($X^\\top r = 0$). Invertible iff $\\text{rank}(X) = d$.',
      tenSecondExample:
        'Points $(-1,1),(2,-5),(3,5)$ with $y=wx$: $\\sum x_i y_i = 4$, $\\sum x_i^2 = 14 \\implies w^* = 4/14 = 2/7$.',
      oneFatalTrap:
        'Using the centered covariance formula $\\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2}$ when the model has NO intercept ($y=wx$).',
    },
    {
      id: 'm14-c1-a2',
      badge: 'Ridge (L2)',
      whenYouSpot: 'Collinear features, $d > n$, or penalty $+\\lambda \\|w\\|_2^2$',
      directWeaponLatex: 'w^*_{\\text{Ridge}} = (X^\\top X + \\lambda I)^{-1} X^\\top y',
      instantRule:
        'Eigenvalues of $X^\\top X + \\lambda I$ are $\\sigma_i^2 + \\lambda > 0$, guaranteeing invertibility, smooth shrinkage, higher bias, and lower variance.',
      tenSecondExample:
        'Loss $|y - w^\\top x| + 0.20\\|w\\|_2^2$ with $w=[-3,4]^\\top, x=[1,2]^\\top, y=3$: $|3-5| + 0.20(25) = 2 + 5 = 7$.',
      oneFatalTrap:
        'Claiming Ridge produces exact sparse zero weights (only $L_1$ Lasso snaps weights to exact zero).',
    },
    {
      id: 'm14-c1-a3',
      badge: 'Lasso (L1) & SGD',
      whenYouSpot: 'Sparsity / feature selection ($+\\lambda \\|w\\|_1$) or 1-step SGD',
      directWeaponLatex: 'w^{(t+1)} = w^{(t)} - \\eta \\nabla_w \\ell_i(w^{(t)}), \\qquad |g_0| \\le \\lambda \\implies w^*_{\\text{Lasso}} = 0',
      instantRule:
        '$L_1$ diamond corners lie on coordinate axes, creating exact zeros; SGD steps opposite to the single-sample gradient scaled by $\\eta$.',
      tenSecondExample:
        'Minimize $(w-3)^2 + 8|w|$: at $w=0$, data slope magnitude $|2(-3)| = 6 \\le 8$, so $w^* = 0$.',
      oneFatalTrap:
        'Assuming Lasso has a matrix-inverse closed form like Ridge, or forgetting to standardize features before regularizing.',
    },
  ],
  questions: [
    {
      id: 'm14-c1-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1',
      marks: 1,
      type: 'NAT',
      stem: 'Fit a zero-intercept linear regression model $y = wx$ by Ordinary Least Squares to the three points $(1, 2),\\; (2, 5),\\; (3, 7)$. Enter the optimal slope $w^*$ (rounded to 2 decimal places).',
      natAnswer: { min: 2.34, max: 2.38, exactDisplay: '33/14 ≈ 2.36' },
      triggerHint: 'Zero-intercept OLS uses raw dot products $\\frac{\\sum x_i y_i}{\\sum x_i^2}$ — do not subtract means!',
      intuitiveSolution: [
        '$\\sum x_i y_i = 1(2) + 2(5) + 3(7) = 2 + 10 + 21 = 33$.',
        '$\\sum x_i^2 = 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$.',
        '$w^* = \\frac{33}{14} \\approx 2.357 \\to 2.36$.',
      ],
      directShortcutUsed: '1D Zero-Intercept Normal Equation $w^* = (x^\\top y)/(x^\\top x)$',
    },
    {
      id: 'm14-c1-q2',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.34',
      year: 2025,
      marks: 1,
      type: 'NAT',
      stem: 'Consider a simple linear regression model $y = wx$ (with no intercept) fitted using ordinary least squares on the dataset $\\{(-1, 1),\\; (2, -5),\\; (3, 5)\\}$. Find the optimal value of $w$ (rounded to 3 decimal places).',
      natAnswer: { min: 0.28, max: 0.29, exactDisplay: '2/7 ≈ 0.286' },
      triggerHint: 'Compute $x^\\top y$ and $x^\\top x$ directly instead of expanding three quadratics.',
      intuitiveSolution: [
        'Dot product $x^\\top y = (-1)(1) + (2)(-5) + (3)(5) = -1 - 10 + 15 = 4$.',
        'Squared norm $x^\\top x = (-1)^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$.',
        '$w^* = \\frac{4}{14} = \\frac{2}{7} \\approx 0.2857 \\to 0.286$.',
      ],
      directShortcutUsed: '$w^* = \\frac{\\sum x_i y_i}{\\sum x_i^2}$',
    },
    {
      id: 'm14-c1-q3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.55',
      year: 2026,
      marks: 2,
      type: 'NAT',
      stem: 'For a linear predictor $\\hat{y} = w^\\top x$ with weight vector $w = [-3,\\; 4]^\\top$ and input $x = [1,\\; 2]^\\top$, the true label is $y_{\\text{true}} = x_1 + x_2$. Compute the overall regularized loss defined as $|y_{\\text{true}} - w^\\top x| + 0.20\\|w\\|_2^2$.',
      natAnswer: { min: 6.99, max: 7.01, exactDisplay: '7.00' },
      triggerHint: 'Read the objective carefully: the data loss is absolute error (MAE), NOT squared error!',
      intuitiveSolution: [
        'True label: $y_{\\text{true}} = x_1 + x_2 = 1 + 2 = 3$.',
        'Predicted output: $w^\\top x = (-3)(1) + (4)(2) = 5$.',
        'MAE term: $|3 - 5| = 2$.',
        'Ridge $L_2^2$ penalty: $0.20\\|w\\|_2^2 = 0.20((-3)^2 + 4^2) = 0.20(25) = 5$.',
        'Total loss $= 2 + 5 = 7.00$.',
      ],
      directShortcutUsed: 'Direct substitution into MAE + $\\lambda \\|w\\|_2^2$',
    },
    {
      id: 'm14-c1-q4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.37 (Concept)',
      year: 2026,
      marks: 2,
      type: 'MCQ',
      stem: 'Which of the following statements is TRUE regarding $L_2$ (Ridge) regularization in linear regression as the regularization parameter $\\lambda > 0$ increases from $0$?',
      options: [
        {
          id: 'A',
          text: 'It guarantees zero estimation bias while reducing variance.',
          whyTrueOrFalse: 'False — OLS ($\\lambda = 0$) is unbiased; Ridge introduces shrinkage bias.',
        },
        {
          id: 'B',
          text: 'It may increase estimation bias while reducing prediction variance.',
          whyTrueOrFalse: 'True — shrinking weights toward zero introduces bias in exchange for lower variance (GATE DA 2026 Q.37).',
        },
        {
          id: 'C',
          text: 'It forces a majority of regression coefficients to become exact zeros.',
          whyTrueOrFalse: 'False — exact zero sparsity is a property of $L_1$ (Lasso), not $L_2$ (Ridge).',
        },
        {
          id: 'D',
          text: 'It makes $X^\\top X + \\lambda I$ singular whenever $d > n$.',
          whyTrueOrFalse: 'False — adding $+\\lambda I$ ($\\lambda > 0$) makes the matrix strictly positive definite and ALWAYS invertible.',
        },
      ],
      correctOptions: ['B'],
      triggerHint: 'Recall the Bias-Variance effect of shrinking $\\|w\\|_2$ away from the unbiased OLS estimate.',
      intuitiveSolution: [
        'When $\\lambda > 0$, Ridge shrinks weights toward $0$, trading a controlled increase in bias for a potentially large drop in estimator variance.',
        'Unlike Lasso ($L_1$), Ridge never forces weights to exact zero for finite $\\lambda$, and it repairs rank deficiency rather than causing singularity.',
      ],
      directShortcutUsed: 'Ridge Bias-Variance Trade-off',
    },
    {
      id: 'm14-c1-q5',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Mock · MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Let $X \\in \\mathbb{R}^{n \\times d}$ be a real design matrix with $n < d$ (more features than samples), and consider OLS, Ridge ($\\lambda > 0$), and Lasso ($\\lambda > 0$). Which of the following statements is/are ALWAYS true?',
      options: [
        {
          id: 'A',
          text: 'The $d \\times d$ matrix $X^\\top X$ is singular.',
          whyTrueOrFalse: 'True — $\\text{rank}(X^\\top X) = \\text{rank}(X) \\le n < d$, so $X^\\top X$ cannot be full rank $d$.',
        },
        {
          id: 'B',
          text: 'The Ridge matrix $X^\\top X + \\lambda I_d$ is strictly positive definite and invertible for every $\\lambda > 0$.',
          whyTrueOrFalse: 'True — for any $v \\neq 0$, $v^\\top(X^\\top X + \\lambda I_d)v = \\|Xv\\|_2^2 + \\lambda\\|v\\|_2^2 \\ge \\lambda\\|v\\|_2^2 > 0$.',
        },
        {
          id: 'C',
          text: 'Every Lasso solution has at most $n$ non-zero coefficients regardless of feature scaling.',
          whyTrueOrFalse: 'False in general if features are collinear/continuous ties occur? Wait: actually under generic conditions at most $n$ non-zeros, NOT guaranteed under arbitrary ties or if we claim invariance to scaling — Lasso solution changes under feature scaling!',
        },
        {
          id: 'D',
          text: 'For OLS with an intercept column $\\mathbf{1}$, the residual vector $r = y - \\hat{y}$ satisfies $\\sum_{i=1}^n r_i = 0$ whenever a minimizer exists.',
          whyTrueOrFalse: 'True — Normal Equations give $X^\\top(y - Xw^*) = 0$; the first row of $X^\\top$ is $\\mathbf{1}^\\top$, forcing $\\sum r_i = 0$.',
        },
      ],
      correctOptions: ['A', 'B', 'D'],
      triggerHint: 'Test rank bounds when $n < d$, quadratic forms $v^\\top(X^\\top X + \\lambda I)v$, and $\\mathbf{1}^\\top r = 0$.',
      intuitiveSolution: [
        '(A) True: $\\text{rank}(X^\\top X) \\le \\min(n, d) = n < d$, so $\\det(X^\\top X) = 0$.',
        '(B) True: $v^\\top(X^\\top X + \\lambda I)v = \\|Xv\\|_2^2 + \\lambda\\|v\\|_2^2 > 0$ for all $v \\neq 0$.',
        '(C) False: When features are identical/collinear, Lasso solutions are non-unique (e.g., all $(t, c-t)$ with $t \\in [0, c]$) and can have more than $n$ non-zeros (e.g., $n=1, d=2$ with $t=c/2$ has $2 > 1$ non-zero weights!).',
        '(D) True: Normal equation $X^\\top r = 0$ includes $\\mathbf{1}^\\top r = \\sum r_i = 0$.',
      ],
      directShortcutUsed: 'Rank bound + Quadratic form positivity + $\\mathbf{1}^\\top r = 0$',
    },
    {
      id: 'm14-c1-q6',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Mock · NAT',
      marks: 2,
      type: 'NAT',
      stem: 'A zero-intercept 1D Ridge model minimizes $\\sum_{i=1}^3 (y_i - wx_i)^2 + \\lambda w^2$ on the points $(1, 3),\\; (2, 4),\\; (2, 5)$. If the optimal Ridge slope is $w^*_{\\text{Ridge}} = 1.9$, find the value of $\\lambda$.',
      natAnswer: { min: 0.99, max: 1.01, exactDisplay: '1' },
      triggerHint: 'Invert $w^*_{\\text{Ridge}} = \\frac{\\sum x_i y_i}{\\sum x_i^2 + \\lambda}$ to solve for $\\lambda$.',
      intuitiveSolution: [
        'Compute $\\sum x_i y_i = 1(3) + 2(4) + 2(5) = 3 + 8 + 10 = 21$.',
        'Compute $\\sum x_i^2 = 1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9$.',
        'Plug into Ridge formula: $1.9 = \\frac{21}{9 + \\lambda}$? Wait — check arithmetic: $21 / 10 = 2.1$, $21 / 11 = 1.909...$ Let us check: if $w^* = 2.1$, $\\lambda = 1$! Wait: why did stem say $1.9$? Let us verify!',
        'Hold on — let us re-read the arithmetic! $\\frac{21}{9+\\lambda} = 1.9 \\implies 9 + \\lambda = \\frac{21}{1.9} = 11.0526$, which is messy! Wait — I must fix the stem number so $\\lambda$ is an exact integer $1$ before saving! Let us use $w^*_{\\text{Ridge}} = 2.1$ so $\\frac{21}{9+\\lambda} = 2.1 \\implies 9 + \\lambda = 10 \\implies \\lambda = 1$!',
      ],
      directShortcutUsed: '1D Ridge Normal Equation',
    },
  ],
}

// Fix m14-c1-q6 cleanly so w* = 2.1 -> lambda = 1 exact!
chapter1.questions[5] = {
  id: 'm14-c1-q6',
  tier: 'tricky',
  sourceLabel: 'IITM-Style Mock · NAT',
  marks: 2,
  type: 'NAT',
  stem: 'A zero-intercept 1D Ridge model minimizes $\\sum_{i=1}^3 (y_i - wx_i)^2 + \\lambda w^2$ on the points $(1, 3),\\; (2, 4),\\; (2, 5)$. If the optimal Ridge slope is $w^*_{\\text{Ridge}} = 2.1$, find the value of $\\lambda$.',
  natAnswer: { min: 0.99, max: 1.01, exactDisplay: '1' },
  triggerHint: 'Invert $w^*_{\\text{Ridge}} = \\frac{\\sum x_i y_i}{\\sum x_i^2 + \\lambda}$ to solve for $\\lambda$.',
  intuitiveSolution: [
    'Compute $\\sum x_i y_i = 1(3) + 2(4) + 2(5) = 3 + 8 + 10 = 21$.',
    'Compute $\\sum x_i^2 = 1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9$.',
    'Plug into the 1D Ridge formula: $2.1 = \\frac{21}{9 + \\lambda} \\implies 9 + \\lambda = \\frac{21}{2.1} = 10 \\implies \\lambda = 1$.',
  ],
  directShortcutUsed: '1D Ridge Normal Equation $w^* = \\frac{\\sum x_i y_i}{\\sum x_i^2 + \\lambda}$',
}

const chapter2: ChapterData = {
  id: 'ml1-ch2',
  number: 2,
  title: 'Logistic Regression, Naive Bayes, LDA & Decision Trees',
  shortTitle: 'Logistic, NB, LDA & Trees',
  estimatedHours: 4.5,
  dayLabel: 'Week 6 · Day 38–39',
  tagline:
    'Let us walk through all four classic classifiers side by side: squashing linear scores into probabilities with Logistic Regression, cutting parameter counts via Naive Bayes conditional independence, projecting along $S_W^{-1}S_B u = \\lambda u$ in Fisher LDA, and measuring split purity with Entropy and Information Gain in Decision Trees.',
  syllabusMapping: [
    'Logistic regression (discriminative classifier, sigmoid, cross-entropy)',
    'Naive Bayes classifier (generative model, parameter counting, Bayes risk)',
    'Linear Discriminant Analysis (Fisher LDA)',
    'Decision trees (ID3, Entropy, Information Gain, Gini impurity)',
  ],
  whatIsImportant: [
    'Discriminative (Logistic Reg: models $P(Y|X)$) vs Generative (Naive Bayes, LDA: models $P(X|Y)P(Y)$) taxonomy (GATE DA 2024 Q.18, 2026 Q.23)',
    'Sigmoid derivative $\\sigma\'(z) = \\sigma(z)(1-\\sigma(z))$ (GATE DA 2024 Q.33) & Binary Cross-Entropy gradient $(\\hat{p}_i - y_i)x_i$',
    'Naive Bayes parameter count $2K + 1$ for $K$ binary features (GATE DA 2024 Q.20) & Bayes misclassification probability (GATE DA 2025 Q.35)',
    'Fisher LDA generalized eigenvalue equation $S_W^{-1}S_B u^* = \\lambda u^*$ (GATE DA 2024 Q.22) and how equal-covariance LDA matches Nearest-Centroid linear boundaries (GATE DA 2025 Q.55)',
    'Exact hand calculation of $\\log_2$ Entropy and Information Gain on small 8–12 row tables (GATE DA 2024 Q.62)',
  ],
  whatIsNotImportant: [
    'Quadratic Discriminant Analysis (QDA) Wishart covariance estimation formulas',
    'CART cost-complexity pruning $\\alpha |T|$ dynamic programming trees or C4.5 missing-value fractional weight splitting',
    'Multinomial / Softmax Hessian Newton-Raphson matrix inversion (IRLS) details',
  ],
  inboundStream:
    'Calculus (Sigmoid derivative $\\sigma(1-\\sigma)$ & concavity) + Probability (Bayes’ Theorem & Conditional Independence $X_i \\perp X_j \\mid Y$) + Linear Algebra (Rayleigh quotient & generalized eigenvectors).',
  outboundStream: [
    'Ch. 3 Linear Separability & Nearest-Centroid vs SVM boundaries',
    'Ch. 4 Confusion Matrix metrics ($P, R, F_1$) & Sigmoid vanishing gradients in MLP Backprop',
    'Module 15 Bayesian Networks (Naive Bayes is a star-shaped 1-parent DAG!)',
  ],
  glossary: [
    {
      term: 'Logistic Sigmoid Function',
      symbol: '$\\sigma(z) = \\frac{1}{1 + e^{-z}}$',
      plainEnglish:
        'Think of the sigmoid as a smooth S-shaped converter that squashes any real number $z$ from $(-\\infty, \\infty)$ neatly into a valid probability between $0$ and $1$, with the famous self-contained derivative $\\sigma\'(z) = \\sigma(z)(1 - \\sigma(z))$.',
      tinyExample: 'If $\\sigma(z) = 0.4$, you immediately know $\\sigma\'(z) = 0.4(1 - 0.4) = 0.24$ without ever solving for $z$.',
    },
    {
      term: 'Log-Odds (Logit)',
      symbol: '$\\ln\\frac{p}{1 - p} = w^\\top x + b$',
      plainEnglish:
        'Odds compare the chance of happening ($p$) to not happening ($1-p$), and taking the natural log gives the log-odds. Logistic Regression assumes these log-odds are a simple linear function $w^\\top x + b$ of the input features.',
      tinyExample: 'At the decision boundary $p = 0.5$, the odds are $0.5/0.5 = 1$, so the log-odds are $\\ln(1) = 0$, meaning $w^\\top x + b = 0$.',
    },
    {
      term: 'Binary Cross-Entropy (BCE) Loss',
      symbol: '$-[y\\ln\\hat{p} + (1-y)\\ln(1-\\hat{p})]$',
      plainEnglish:
        'BCE is the negative log-likelihood loss for binary classifiers. It gently rewards confident correct predictions and punishes confident wrong predictions steeply, while staying convex in $(w, b)$ so gradient descent finds a global minimum.',
      tinyExample: 'If true label $y = 1$ and your model predicts $\\hat{p} = 0.8$, the sample loss is $-\\ln(0.8) \\approx 0.223$ and its gradient is $(0.8 - 1)x = -0.2x$.',
    },
    {
      term: 'Generative vs. Discriminative Model',
      symbol: '$P(X \\mid Y)P(Y)$ vs. $P(Y \\mid X)$',
      plainEnglish:
        'A discriminative model (like Logistic Regression) learns the boundary $P(Y \\mid X)$ directly — just enough to separate classes. A generative model (like Naive Bayes or LDA) learns the full story of how each class generates features $P(X \\mid Y)$ plus class priors $P(Y)$, then applies Bayes’ rule.',
      tinyExample: 'Logistic Regression predicts spam directly from words; Naive Bayes models how spam emails generate words and how ham emails generate words.',
    },
    {
      term: 'Naive Bayes Conditional Independence',
      symbol: '$P(X_1, \\dots, X_K \\mid Y) = \\prod_{j=1}^K P(X_j \\mid Y)$',
      plainEnglish:
        'Naive Bayes makes the simplifying assumption that once you know the class label $Y$, the features act independently of each other. This slashes an exponential $2^{K+1}-1$ table down to just $2K + 1$ parameters for $K$ binary features!',
      tinyExample: 'For $2$ classes and $K = 3$ binary words, Naive Bayes needs only $2(3) + 1 = 7$ parameters instead of $15$.',
    },
    {
      term: 'Bayes (MAP) Classifier & Misclassification Risk',
      symbol: '$\\hat{y} = \\arg\\max_k P(C_k)P(x \\mid C_k)$',
      plainEnglish:
        'Given priors and likelihoods at an input $x$, the Bayes-optimal classifier picks whichever class has the highest posterior probability $P(C_k \\mid x)$. Your chance of getting $x$ wrong is simply the sum of all the losing posteriors.',
      tinyExample: 'If unnormalized scores $P(C_k)P(x\\mid C_k)$ are $1/4$ and $1/6$ ($3:2$), we predict $C_1$ and misclassify with probability $2/5 = 0.40$.',
    },
    {
      term: 'Linear Discriminant Analysis (Fisher LDA)',
      symbol: '$S_W^{-1} S_B u^* = \\lambda u^*$',
      plainEnglish:
        'Fisher LDA is a supervised projection method that hunts for a line $u$ where class averages sit as far apart as possible while each individual class stays squeezed as tightly together as possible.',
      tinyExample: 'For $C = 2$ classes, $S_B$ has rank $1$, so LDA gives at most $C - 1 = 1$ optimal line $u^* \\propto S_W^{-1}(\\mu_1 - \\mu_2)$.',
    },
    {
      term: 'Between-Class & Within-Class Scatter',
      symbol: '$S_B,\\; S_W$',
      plainEnglish:
        'Think of $S_B$ as measuring how widely spread out the class centroids are from one another, while $S_W$ measures the internal messiness (spread) inside each class. Maximizing the ratio $\\frac{u^\\top S_B u}{u^\\top S_W u}$ separates classes cleanly.',
      tinyExample: 'When both classes share isotropic spread $S_W = \\sigma^2 I$, LDA’s direction simplifies to $\\mu_1 - \\mu_2$ (the vector joining the two means).',
    },
    {
      term: 'Nearest-Centroid Linear Boundary',
      symbol: '$\\|\\mu_1 - x\\|_2^2 - \\|\\mu_2 - x\\|_2^2 = 0$',
      plainEnglish:
        'Comparing squared Euclidean distances to two class means looks quadratic at first glance, yet expanding both squares cancels $\\|x\\|_2^2$ completely — leaving the straight perpendicular bisector hyperplane between $\\mu_1$ and $\\mu_2$.',
      tinyExample: 'For $\\mu_1 = (0,0)$ and $\\mu_2 = (2,0)$, $\\|\\mu_1-x\\|^2 - \\|\\mu_2-x\\|^2 = 4x_1 - 4 = 0$, which is simply the line $x_1 = 1$.',
    },
    {
      term: 'Shannon Entropy',
      symbol: '$H(S) = -\\sum_{c=1}^C p_c \\log_2 p_c$',
      plainEnglish:
        'Entropy measures how mixed-up or uncertain a decision-tree node is, in bits. A pure node with only one class has zero surprise ($H = 0$), while a 50–50 binary coin-flip split has maximum uncertainty ($H = 1$ bit).',
      tinyExample: 'A node with $2$ apples and $2$ oranges has $H = -0.5\\log_2(0.5) - 0.5\\log_2(0.5) = 1.0$ bit; a pure $(2, 0)$ leaf has $H = 0$.',
    },
    {
      term: 'Information Gain (ID3)',
      symbol: '$\\text{IG}(S, A) = H(S) - \\sum_v \\frac{|S_v|}{|S|} H(S_v)$',
      plainEnglish:
        'Information Gain tells you how many bits of uncertainty vanish when you split node $S$ using attribute $A$. Because entropy is concave, Information Gain can never be negative — ID3 greedily picks the attribute with the highest gain.',
      tinyExample: 'Splitting a balanced root ($H = 1.0$) into two completely pure leaves ($H = 0$) yields the maximum $\\text{IG} = 1.0 - 0 = 1.0$ bit.',
    },
    {
      term: 'Gini Impurity',
      symbol: '$G(S) = 1 - \\sum_{c=1}^C p_c^2$',
      plainEnglish:
        'Gini impurity is a logarithm-free cousin of entropy used by CART trees: it equals the chance of mislabeling a randomly picked item from the node if you assign labels randomly using the node’s own class proportions.',
      tinyExample: 'For a node with $3$ positives and $1$ negative ($p = 0.75, 0.25$), $G = 1 - (9/16 + 1/16) = 6/16 = 0.375$.',
    },
  ],
  generatorId: 'confusion-metrics-gen',
  concepts: [
    {
      id: 'm14-c2-1',
      title: 'Logistic Regression: Sigmoid, Log-Odds & Discriminative Learning',
      subtitle: 'Turning a linear score $z = w^\\top x + b$ into a valid probability $P(Y=1\\mid x)$',
      priority: 'core-pillar',
      buildsOn: 'Linear score $w^\\top x + b$ & Sigmoid differentiation (Module 1 Calculus)',
      toyExample: {
        title: 'From Unbounded Score to Spam Probability',
        scenario:
          'Suppose a linear spam score is $z = 2x - 1$. At $x = 10$, $z = 19$; at $x = -5$, $z = -11$. We cannot feed $19$ or $-11$ directly as a probability (must lie in $[0,1]$), nor fit $0/1$ labels safely with OLS.',
        walkthroughSteps: [
          '1. **Squash $z$ through Sigmoid:** $\\hat{p} = \\sigma(z) = \\frac{1}{1 + e^{-z}}$. Now $\\hat{p} \\in (0, 1)$ always!',
          '2. **Check the symmetry shortcut:** At $z = 0$, $\\sigma(0) = 0.5$ (decision boundary $w^\\top x + b = 0$). For any $z$, $\\sigma(-z) = 1 - \\sigma(z)$.',
          '3. **Invert back to log-odds (logit):** $\\ln\\frac{\\hat{p}}{1-\\hat{p}} = \\ln(e^z) = z = w^\\top x + b$. So **log-odds are linear** in $x$!',
          '4. **Check the derivative magic:** If you know $\\sigma(z) = 0.4$, you do NOT need $z$: $\\sigma\'(z) = 0.4(1 - 0.4) = 0.24$ immediately (GATE DA 2024 Q.33)!',
        ],
        ahaMoment:
          'Hold onto these three linked facts: Logistic Regression stays **linear** in log-odds space (so $w^\\top x + b = 0$ is still a flat hyperplane!), it is **discriminative** (modeling $P(Y\\mid X)$ directly without estimating $P(X)$), and thanks to $\\sigma\' = \\sigma(1-\\sigma)$ its Binary Cross-Entropy gradient simplifies to the exact same friendly error-times-input form $(\\hat{p}_i - y_i)x_i$ you saw in OLS!',
      },
      theoremAndFormula: {
        statement:
          'Logistic regression models $P(Y=1\\mid x) = \\sigma(w^\\top x + b)$ and minimizes the convex **Binary Cross-Entropy** (negative log-likelihood) $J(w,b) = -\\sum_{i=1}^n [y_i \\ln \\hat{p}_i + (1-y_i)\\ln(1-\\hat{p}_i)]$. Because $\\sigma\'(z) = \\sigma(z)(1-\\sigma(z))$, the denominator terms cancel cleanly in the gradient.',
        formulaLatex:
          '\\sigma(z) = \\frac{1}{1+e^{-z}}, \\qquad \\sigma\'(z) = \\sigma(z)(1 - \\sigma(z)), \\qquad \\nabla_w J(w,b) = \\sum_{i=1}^n (\\hat{p}_i - y_i) x_i',
        plainEnglishDecoding:
          'Keep the model taxonomy crisp for easy 1-mark questions (like GATE DA 2024 Q.18): **PCA** does Dimensionality Reduction, **Naive Bayes** is a Generative Model, and **Logistic Regression** is a Discriminative Model. Also remember that unlike OLS, $J(w,b)$ has **no closed-form matrix inverse** — we optimize it iteratively with Gradient Descent or Newton-Raphson.',
        workedMiniExamples: [
          {
            prompt:
              '(GATE DA 2024 Q.33) Let $f(x) = \\frac{1}{1 + e^{-x}}$. Find $f\'(x)$ at the point where $f(x) = 0.4$.',
            solution:
              'Using $f\'(x) = f(x)(1 - f(x))$, we get $f\'(x) = 0.4 \\times (1 - 0.4) = 0.4 \\times 0.6 = 0.24$ — zero logarithms needed!',
          },
          {
            prompt:
              'For a single training sample $(x = [2, -1]^\\top, y = 1)$, suppose current weights give $\\hat{p} = 0.8$. Compute the BCE gradient $\\nabla_w J$.',
            solution:
              '$\\nabla_w J = (\\hat{p} - y)x = (0.8 - 1)\\begin{bmatrix}2\\\\-1\\end{bmatrix} = \\begin{bmatrix}-0.4\\\\0.2\\end{bmatrix}$. Stepping $-\\eta\\nabla_w J$ nudges $w_1$ up and $w_2$ down.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Logistic Regression has a closed-form solution $w^* = (X^\\top X)^{-1} X^\\top y$ or uses squared error loss.',
          reality:
            'False on both counts! Training Logistic Regression with MSE makes the loss non-convex; it uses convex Binary Cross-Entropy and requires iterative optimization (GD/SGD/L-BFGS).',
          counterExample:
            'If data is strictly linearly separable, the MLE $\\|w\\| \\to \\infty$ in unregularized Logistic Regression (probabilities push toward $0$ and $1$).',
        },
        {
          myth: 'Logistic Regression is a regression algorithm because of its name.',
          reality:
            'It is a **linear discriminative binary classifier** predicting class probabilities $P(Y=1\\mid X)$.',
          counterExample:
            'GATE DA 2024 Q.18 explicitly classifies Logistic Regression under Discriminative Classification.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Ch. 4 Sigmoid Units in MLP Backpropagation',
          whyItMatters:
            'Every sigmoid hidden or output neuron in an MLP multiplies the backward error signal by $\\sigma\'(z) = a(1-a) \\le 0.25$ — the exact mechanism behind vanishing gradients.',
          pyqProof: 'GATE DA 2024 Q.33 ($\\sigma\' = 0.24$) & Q.18 (Discriminative Model)',
        },
      ],
    },
    {
      id: 'm14-c2-2',
      title: 'Naive Bayes (Parameter Counting & Posterior Risk) & Fisher’s LDA',
      subtitle: 'Generative conditional independence vs. maximizing between-class to within-class variance ratio',
      priority: 'core-pillar',
      buildsOn: 'Bayes’ Theorem (Prob & Stats) & Rayleigh Quotient / Generalized Eigenvalues (Linear Algebra)',
      toyExample: {
        title: 'Counting Parameters with $K$ Binary Features & Making a Bayes Decision',
        scenario:
          'You want to classify emails ($Y \\in \\{0, 1\\}$) using $K = 3$ binary words (`free`, `win`, `urgent`). Without Naive Bayes, a full joint table for $P(X_1, X_2, X_3 \\mid Y)$ needs $2^3 - 1 = 7$ probabilities per class ($15$ total!). What does Naive Bayes need?',
        walkthroughSteps: [
          '1. **Class prior:** $P(Y = 1) = \\pi$ is just **1** parameter (since $P(Y=0) = 1 - \\pi$).',
          '2. **Class-conditional feature probs:** Assuming $X_1, X_2, X_3$ are conditionally independent given $Y$, for each word $j \\in \\{1,2,3\\}$ we only store $\\theta_{j|1} = P(X_j=1\\mid Y=1)$ and $\\theta_{j|0} = P(X_j=1\\mid Y=0)$.',
          '3. **Count them:** $1 + 2K = 1 + 2(3) = 7$ parameters (instead of $2^{K+1}-1 = 15$)! For $K=20$ words, that shrinks $2{,}097{,}151$ parameters down to just **$41$**! (GATE DA 2024 Q.20!)',
          '4. **Classify an input $x$:** Compute $P(Y=1)P(x\\mid Y=1)$ vs $P(Y=0)P(x\\mid Y=0)$ and pick the larger joint score; the probability you are **wrong** on $x$ is the smaller posterior $\\min\\{P(0\\mid x), P(1\\mid x)\\}$ (GATE DA 2025 Q.35!).',
        ],
        ahaMoment:
          'Conditional independence shrinks an exponential $O(2^K)$ joint table into a lean $2K + 1$ parameter list! And once you normalize the two class posteriors $p$ and $1-p$ at any test point $x$, the Bayes-optimal classifier simply picks the larger one, meaning its chance of error at $x$ is always the smaller slice $\\min(p, 1-p)$.',
      },
      theoremAndFormula: {
        statement:
          '**1) Naive Bayes:** Assumes $P(X_1,\\dots,X_K \\mid Y) = \\prod_{j=1}^K P(X_j \\mid Y)$, requiring $2K + 1$ independent parameters for $2$ classes and $K$ binary attributes.\n**2) Fisher’s LDA:** Seeks projection vector $u$ maximizing the ratio of between-class scatter $S_B$ to within-class scatter $S_W$: $J(u) = \\frac{u^\\top S_B u}{u^\\top S_W u}$. Setting $\\nabla_u J(u) = 0$ yields the generalized eigenvalue equation $S_W^{-1} S_B u^* = \\lambda u^*$ (GATE DA 2024 Q.22).',
        formulaLatex:
          '\\text{NB params (2-class binary)} = 2K + 1, \\qquad J(u) = \\frac{u^\\top S_B u}{u^\\top S_W u} \\implies S_W^{-1} S_B u^* = \\lambda u^*',
        plainEnglishDecoding:
          'Watch how nicely Fisher’s LDA simplifies for two classes: $S_B = (\\mu_1 - \\mu_2)(\\mu_1 - \\mu_2)^\\top$ is a rank-1 matrix, so $S_B u$ always points directly along $\\mu_1 - \\mu_2$! That forces $u^* \\propto S_W^{-1}(\\mu_1 - \\mu_2)$ right away. Better still, when both classes have spherical equal covariance $S_W = \\sigma^2 I$, $u^*$ aligns straight along $\\mu_1 - \\mu_2$ — reproducing the exact Nearest-Centroid perpendicular bisector tested in GATE DA 2025 Q.55.',
        workedMiniExamples: [
          {
            prompt:
              '(GATE DA 2025 Q.35 Pattern) A 2-class Naive Bayes classifier has priors $P(C_1)=1/3, P(C_2)=2/3$ and feature likelihoods $P(x\\mid C_1)=3/4, P(x\\mid C_2)=1/4$. Find the probability of misclassifying $x$.',
            solution:
              'Unnormalized posteriors: $P(C_1)P(x\\mid C_1) = \\frac{1}{3}\\cdot\\frac{3}{4} = \\frac{1}{4}$, and $P(C_2)P(x\\mid C_2) = \\frac{2}{3}\\cdot\\frac{1}{4} = \\frac{1}{6}$. Total $P(x) = \\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12}$. Since $\\frac{1}{4} > \\frac{1}{6}$, predict $C_1$; probability of error $= P(C_2\\mid x) = \\frac{1/6}{5/12} = \\frac{2}{5} = 0.40$.',
          },
          {
            prompt:
              'How many independent parameters does a 3-class Naive Bayes classifier with $K = 4$ ternary features (each taking values in $\\{0, 1, 2\\}$) need?',
            solution:
              'Class priors: $3 - 1 = 2$ parameters. For each of the 3 classes and each of the 4 ternary features, we need $3 - 1 = 2$ parameters: $3 \\times 4 \\times 2 = 24$. Total $= 2 + 24 = 26$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Naive Bayes assumes all features $X_1, \\dots, X_K$ are marginally independent ($P(X_1, X_2) = P(X_1)P(X_2)$).',
          reality:
            'False! It assumes **conditional independence given $Y$**: $X_i \\perp X_j \\mid Y$. Knowing $X_1$ CAN change your belief about $X_2$ marginally (via the common parent $Y$)!',
          counterExample:
            'Height and weight are correlated marginally across humans, yet can be modeled as conditionally independent given Sex ($Y$).',
        },
        {
          myth: 'In a $C$-class problem with $d$ features, Fisher LDA can extract up to $d$ non-zero discriminant axes.',
          reality:
            'Since $S_B$ is the sum of $C$ rank-1 outer products centered around the global mean, $\\text{rank}(S_B) \\le C - 1$, so LDA gives at most $\\min(d, C-1)$ discriminant directions (just **1** line for 2 classes!).',
          counterExample:
            'For $C=2$ classes in $\\mathbb{R}^{100}$, $S_W^{-1} S_B$ has rank $1$ and at most $1$ non-zero eigenvalue.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 7: AI / Sec 6: ML',
          targetWeek: 7,
          topic: 'Bayesian Networks (Module 15) & PCA vs. LDA',
          whyItMatters:
            'Naive Bayes is literally a 1-parent tree-structured Bayesian Network $Y \\to X_1, \\dots, X_K$ where $X_i \\perp X_j \\mid Y$ by d-separation; meanwhile PCA ignores $Y$ to maximize total variance whereas LDA uses $Y$ via $S_B$ and $S_W$.',
          pyqProof: 'GATE DA 2024 Q.20, Q.22 & GATE DA 2025 Q.35, Q.55',
        },
      ],
    },
    {
      id: 'm14-c2-3',
      title: 'Decision Trees: Entropy, Information Gain (ID3) & Gini Impurity',
      subtitle: 'Measuring node disorder in bits and picking the split that shrinks uncertainty the most',
      priority: 'high-yield',
      buildsOn: 'Logarithms ($\\log_2$) & empirical class probabilities $p_c$',
      toyExample: {
        title: 'Sorting 4 Fruit Boxes by Color vs. Weight',
        scenario:
          'You have 4 fruits: 2 Apples (`+`) and 2 Oranges (`-`). Initially the box is maximally mixed ($50\\% +, 50\\% -$). Should you split by **Color** (`Red: [+,+]`, `Orange: [-,-]`) or by **Size** (`Big: [+,-]`, `Small: [+,-]`)?',
        walkthroughSteps: [
          '1. **Root Entropy:** $H(\\text{Root}) = -\\frac{1}{2}\\log_2\\frac{1}{2} - \\frac{1}{2}\\log_2\\frac{1}{2} = \\frac{1}{2}(1) + \\frac{1}{2}(1) = 1.0$ bit.',
          '2. **Split by Color:** Left (`2+, 0-`) has $H = -1\\log_2 1 = 0$; Right (`0+, 2-`) has $H = 0$. Weighted child entropy $= 0$, so $\\text{IG}(\\text{Color}) = 1 - 0 = 1.0$ bit (perfect!).',
          '3. **Split by Size:** Left (`1+, 1-`) has $H = 1$; Right (`1+, 1-`) has $H = 1$. Weighted child entropy $= 0.5(1) + 0.5(1) = 1$, so $\\text{IG}(\\text{Size}) = 1 - 1 = 0$ bits (useless!).',
        ],
        ahaMoment:
          'Think of Entropy $H(S)$ as a messiness meter: it drops all the way to $0$ on a pure single-class node and peaks at $\\log_2 C$ (which is $1$ bit for two balanced classes). Information Gain simply measures **how many bits of uncertainty you wipe out** by splitting on an attribute!',
      },
      theoremAndFormula: {
        statement:
          'For a dataset $S$ with class proportions $p_1, \\dots, p_C$ (taking $0\\log_2 0 = 0$), **Shannon Entropy** is $H(S) = -\\sum_{c=1}^C p_c \\log_2 p_c$ and **Gini Impurity** is $G(S) = 1 - \\sum_{c=1}^C p_c^2$. Splitting $S$ on attribute $A$ into subsets $\\{S_v\\}$ gives **Information Gain** $\\text{IG}(S, A) = H(S) - \\sum_v \\frac{|S_v|}{|S|} H(S_v) \\ge 0$.',
        formulaLatex:
          'H(S) = -\\sum_{c=1}^C p_c \\log_2 p_c, \\qquad \\text{IG}(S, A) = H(S) - \\sum_v \\frac{|S_v|}{|S|} H(S_v), \\qquad G(S) = 1 - \\sum_{c=1}^C p_c^2',
        plainEnglishDecoding:
          'On the GATE virtual calculator, convert any base-2 log with $\\log_2 p = \\frac{\\ln p}{\\ln 2}$ — and keep four friendly benchmarks handy to sanity-check your decimals: $H(0.5, 0.5) = 1$, $H(0.6, 0.4) \\approx 0.971$, $H(0.75, 0.25) \\approx 0.811$, and $H(0.8, 0.2) \\approx 0.722$. Gini avoids logarithms altogether and sits cleanly between $0$ (pure) and $0.5$ (balanced binary).',
        workedMiniExamples: [
          {
            prompt:
              '(GATE DA 2024 Q.62 Pattern) A 10-row dataset has $6$ `Win` and $4$ `Loss`. Splitting on `Pitch` creates `Dry`: $(4\\text{ Win}, 1\\text{ Loss})$ and `Wet`: $(2\\text{ Win}, 3\\text{ Loss})$. Compute $\\text{IG}(\\text{Winner}, \\text{Pitch})$.',
            solution:
              '$H(6/10, 4/10) = -0.6\\log_2(0.6) - 0.4\\log_2(0.4) \\approx 0.971$. For `Dry` ($5/10$): $H(4/5, 1/5) = -0.8\\log_2(0.8) - 0.2\\log_2(0.2) \\approx 0.722$. For `Wet` ($5/10$): $H(2/5, 3/5) \\approx 0.971$. Weighted child entropy $= 0.5(0.722) + 0.5(0.971) = 0.8465$. Thus $\\text{IG} = 0.971 - 0.8465 \\approx 0.124$.',
          },
          {
            prompt:
              'Compute Gini impurity of a leaf node containing $3$ positive and $1$ negative examples.',
            solution:
              '$p_+ = 3/4, p_- = 1/4$. $G = 1 - (9/16 + 1/16) = 1 - 10/16 = 6/16 = 0.375$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Information Gain can sometimes be negative if an attribute creates noisy splits.',
          reality:
            'Impossible! Because $-x\\log_2 x$ is strictly concave, Jensen’s inequality guarantees $H(S) \\ge \\sum \\frac{|S_v|}{|S|} H(S_v)$, so $\\text{IG}(S, A) \\ge 0$ ALWAYS (equals $0$ iff target $Y$ is empirically independent of $A$).',
          counterExample:
            'Even a coin-flip attribute splitting `(6+, 4-)` into `(3+, 2-)` and `(3+, 2-)` gives $\\text{IG} = 0$, never negative.',
        },
        {
          myth: 'Information Gain always selects the best generalizing attribute, even if an attribute is a unique row ID.',
          reality:
            'False! A unique `MatchID` creates $n$ pure single-row leaves ($H=0$), giving maximum $\\text{IG} = H(S)$ despite zero generalization power — which is why Gain Ratio divides by SplitInfo.',
          counterExample:
            'On $8$ rows with unique IDs $1..8$, $\\text{IG}(\\text{ID}) = H(S) - 0 = H(S)$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Ch. 4 Cross-Entropy Loss & Overfitting in Deep Trees',
          whyItMatters:
            'An unpruned decision tree reaches zero training entropy (zero bias, high variance), motivating depth limits and Ch. 4 cross-validation pruning.',
          pyqProof: 'GATE DA 2024 Q.62 (ID3 Information Gain)',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm14-c2-ht1',
      title: 'Bayes Posterior & Minimum-Error Classifier Shortcut',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2025 · Q.35', 'GATE DA 2024 · Q.20'],
      problemStatement:
        'Given class priors $P(C_k)$ and feature likelihoods $P(x \\mid C_k)$ for a test point $x$, find the MAP prediction and the exact probability of misclassifying $x$.',
      triggerCue:
        'Spot **"class priors + likelihood at $x$"** asking for **"probability of misclassification"** or **"Bayes error"**.',
      bruteForceTrap:
        'Writing out full feature probability tables or forgetting to normalize by $P(x) = \\sum_k P(C_k)P(x\\mid C_k)$ before reporting the error probability.',
      mentalShift:
        'Compute the unnormalized joint scores $J_k = P(C_k)P(x\\mid C_k)$ first! Multiply by a common denominator (like $12$) so you only work with clean integers. The winning class is $\\max J_k$, and the probability of error is the sum of ALL **losing** $J_k$ divided by $\\sum J_k$.',
      steps: [
        {
          label: 'Form unnormalized joints $J_k = P(C_k)P(x\\mid C_k)$',
          detail:
            'For GATE DA 2025 Q.35: $J_1 = \\frac{1}{3}\\cdot\\frac{3}{4} = \\frac{1}{4}$ and $J_2 = \\frac{2}{3}\\cdot\\frac{1}{4} = \\frac{1}{6}$.',
        },
        {
          label: 'Scale by LCD to get integer ratios',
          detail:
            'Multiply by $12$: $J_1 : J_2 = 3 : 2$. So total weight $= 5$, winner is $C_1$ ($3/5 = 0.60$).',
        },
        {
          label: 'Read off misclassification directly',
          detail:
            'Error probability $= \\frac{\\text{loser weight}}{\\text{total weight}} = \\frac{2}{5} = 0.40$.',
        },
      ],
      lockInTakeaway:
        'In a binary Bayes classifier at fixed $x$, error probability is always $\\frac{\\min(J_1, J_2)}{J_1 + J_2}$ — integer scaling prevents fraction slips.',
    },
    {
      id: 'm14-c2-ht2',
      title: 'Spotting Linear Boundaries Hidden Inside Quadratic Distances (LDA & Nearest-Centroid)',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2024 · Q.22', 'GATE DA 2025 · Q.55'],
      problemStatement:
        'Analyze a classifier comparing squared Euclidean (or Mahalanobis) distances to two class means $\\mu_1, \\mu_2$, or maximizing Fisher’s Rayleigh ratio $J(u) = \\frac{u^\\top S_B u}{u^\\top S_W u}$.',
      triggerCue:
        'Spot **$f(x) = \\|\\mu_1 - x\\|_2^2 - \\|\\mu_2 - x\\|_2^2$** or **$\\frac{u^\\top S_B u}{u^\\top S_W u}$**.',
      bruteForceTrap:
        'Assuming $\\|\\mu_1 - x\\|^2 - \\|\\mu_2 - x\\|^2$ defines a quadratic curved boundary (parabola/hyperbola) because $x$ is squared!',
      mentalShift:
        'Expand the two squares: both contain $+\\|x\\|^2$, and subtracting them **cancels $\\|x\\|^2$ completely**, leaving a pure hyperplane $2(\\mu_2 - \\mu_1)^\\top x + (\\|\\mu_1\\|^2 - \\|\\mu_2\\|^2) = 0$! Likewise, in Fisher LDA, differentiate $J(u)$ to recognize $S_B u^* = \\lambda S_W u^* \\implies S_W^{-1}S_B u^* = \\lambda u^*$.',
      steps: [
        {
          label: 'Expand $\\|\\mu_1 - x\\|^2 - \\|\\mu_2 - x\\|^2$',
          detail:
            '$(\\|\\mu_1\\|^2 - 2\\mu_1^\\top x + \\|x\\|^2) - (\\|\\mu_2\\|^2 - 2\\mu_2^\\top x + \\|x\\|^2) = 2(\\mu_2 - \\mu_1)^\\top x + \\|\\mu_1\\|^2 - \\|\\mu_2\\|^2$.',
        },
        {
          label: 'Read off linear hyperplane parameters',
          detail:
            'Normal vector $w = 2(\\mu_2 - \\mu_1)$ and bias $b = \\|\\mu_1\\|^2 - \\|\\mu_2\\|^2$ — strictly linear!',
        },
        {
          label: 'Link to equal-covariance LDA',
          detail:
            'With shared covariance $\\Sigma = \\sigma^2 I$ and equal priors, GDA/LDA collapses to this exact perpendicular bisector between $\\mu_1$ and $\\mu_2$.',
        },
      ],
      lockInTakeaway:
        'Difference of two equal-metric squared distances is ALWAYS linear ($\\|x\\|^2$ cancels); only unequal covariances ($\\Sigma_1 \\neq \\Sigma_2$ in QDA) leave a quadratic $x^\\top(\\Sigma_2^{-1}-\\Sigma_1^{-1})x$ term.',
    },
  ],
  arsenalCards: [
    {
      id: 'm14-c2-a1',
      badge: 'Sigmoid & Logistic',
      whenYouSpot: 'Binary classification with $\\sigma(z) = \\frac{1}{1+e^{-z}}$ or log-odds',
      directWeaponLatex: '\\sigma\'(z) = \\sigma(z)(1-\\sigma(z)), \\qquad \\nabla_w J_{\\text{BCE}} = \\sum (\\hat{p}_i - y_i)x_i',
      instantRule:
        'Discriminative model ($P(Y\\mid X)$ directly); linear decision boundary $w^\\top x + b = 0$; max slope $\\sigma\'(0) = 0.25$.',
      tenSecondExample:
        'If $\\sigma(x) = 0.4$, then $\\sigma\'(x) = 0.4 \\times 0.6 = 0.24$ (GATE DA 2024 Q.33).',
      oneFatalTrap:
        'Claiming Logistic Regression is generative or has a closed-form Normal Equation solution.',
    },
    {
      id: 'm14-c2-a2',
      badge: 'Naive Bayes & LDA',
      whenYouSpot: 'Conditional independence $P(X\\mid Y)$, param counting, or $J(u) = \\frac{u^\\top S_B u}{u^\\top S_W u}$',
      directWeaponLatex: '\\text{NB Params} = 2K + 1 \\text{ (2-class binary)}, \\qquad S_W^{-1} S_B u^* = \\lambda u^*',
      instantRule:
        'Naive Bayes assumes $X_i \\perp X_j \\mid Y$ (not marginal independence); Fisher LDA gives at most $C-1$ discriminant axes.',
      tenSecondExample:
        'Priors $1/3, 2/3$ & likelihoods $3/4, 1/4$: joints $1/4$ vs $1/6$ ($3:2$), so error $= 2/5 = 0.40$ (GATE DA 2025 Q.35).',
      oneFatalTrap:
        'Saying Naive Bayes assumes features are marginally independent, or confusing $S_W^{-1}S_B$ with PCA covariance $S_T$.',
    },
    {
      id: 'm14-c2-a3',
      badge: 'Decision Trees',
      whenYouSpot: 'ID3 Entropy, Information Gain, or Gini split selection',
      directWeaponLatex: 'H(S) = -\\sum p_c \\log_2 p_c, \\qquad \\text{IG}(S,A) = H(S) - \\sum \\frac{|S_v|}{|S|} H(S_v) \\ge 0',
      instantRule:
        'Pure node $\\implies H = G = 0$; balanced binary $\\implies H = 1$ bit, $G = 0.5$. IG is always non-negative.',
      tenSecondExample:
        'Node `(3+, 1-)`: $G = 1 - (9/16 + 1/16) = 3/8 = 0.375$; $H \\approx 0.811$ bits.',
      oneFatalTrap:
        'Using natural log $\\ln$ instead of $\\log_2$ when reporting Entropy or Information Gain in bits.',
    },
  ],
  questions: [
    {
      id: 'm14-c2-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2',
      marks: 1,
      type: 'NAT',
      stem: 'A binary classification dataset at a Decision Tree root has $4$ positive and $4$ negative instances. An attribute $A$ splits it into Left $(3+, 1-)$ and Right $(1+, 3-)$. Compute the **Gini Impurity reduction** $G(\\text{Root}) - \\sum_{v} \\frac{|S_v|}{|S|} G(S_v)$ (enter exact decimal).',
      natAnswer: { min: 0.12, max: 0.13, exactDisplay: '0.125' },
      triggerHint: 'Use $G(p) = 1 - p^2 - (1-p)^2 = 2p(1-p)$ for binary nodes!',
      intuitiveSolution: [
        'Root $(4+, 4-)$ has $p = 0.5 \\implies G(\\text{Root}) = 2(0.5)(0.5) = 0.50$.',
        'Left $(3+, 1-)$ has $p = 0.75 \\implies G(\\text{Left}) = 2(0.75)(0.25) = 0.375$.',
        'Right $(1+, 3-)$ by symmetry also has $G(\\text{Right}) = 0.375$.',
        'Weighted child Gini $= 0.5(0.375) + 0.5(0.375) = 0.375$.',
        'Gini reduction $= 0.500 - 0.375 = 0.125$.',
      ],
      directShortcutUsed: 'Binary Gini formula $G = 2p(1-p)$',
    },
    {
      id: 'm14-c2-q2',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.33',
      year: 2024,
      marks: 1,
      type: 'NAT',
      stem: 'Let $f(x) = \\frac{1}{1 + e^{-x}}$ for $x \\in \\mathbb{R}$. If $f(x) = 0.4$ at some point $x$, find the value of its derivative $f\'(x)$ at that point.',
      natAnswer: { min: 0.239, max: 0.241, exactDisplay: '0.24' },
      triggerHint: 'Never solve for $x = \\ln(2/3)$! Use the sigmoid identity $f\'(x) = f(x)(1-f(x))$.',
      intuitiveSolution: [
        'For the logistic sigmoid $f(x) = \\frac{1}{1+e^{-x}}$, $f\'(x) = f(x)(1 - f(x))$.',
        'Substitute $f(x) = 0.4$: $f\'(x) = 0.4 \\times (1 - 0.4) = 0.4 \\times 0.6 = 0.24$.',
      ],
      directShortcutUsed: 'Sigmoid Derivative Identity $\\sigma\' = \\sigma(1-\\sigma)$',
    },
    {
      id: 'm14-c2-q3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.20',
      year: 2024,
      marks: 1,
      type: 'MCQ',
      stem: 'Consider a $2$-class Naive Bayes classifier with $K$ binary-valued attributes ($X_1, \\dots, X_K \\in \\{0, 1\\}$). What is the minimum number of independent parameters that must be estimated to completely specify this classifier?',
      options: [
        {
          id: 'A',
          text: '$2^K + 1$',
          whyTrueOrFalse: 'False — exponential parameter count happens only WITHOUT the Naive Bayes conditional independence assumption.',
        },
        {
          id: 'B',
          text: '$2K + 1$',
          whyTrueOrFalse: 'True — $1$ class prior $P(Y=1)$ plus $K$ parameters $P(X_j=1\\mid Y=1)$ and $K$ parameters $P(X_j=1\\mid Y=0)$.',
        },
        {
          id: 'C',
          text: '$2K$',
          whyTrueOrFalse: 'False — forgets the independent class prior parameter $P(Y=1)$.',
        },
        {
          id: 'D',
          text: '$K + 1$',
          whyTrueOrFalse: 'False — assumes both classes share identical feature likelihoods.',
        },
      ],
      correctOptions: ['B'],
      triggerHint: 'Count class priors $(C-1)$ plus $(V_j - 1)$ per feature per class.',
      intuitiveSolution: [
        'Class prior: $P(Y=1)$ requires $1$ parameter (since $P(Y=0) = 1 - P(Y=1)$).',
        'For each of the $K$ binary features, class $Y=1$ needs $1$ parameter $P(X_j=1\\mid Y=1)$ and class $Y=0$ needs $1$ parameter $P(X_j=1\\mid Y=0)$.',
        'Total independent parameters $= 1 + 2K = 2K + 1$.',
      ],
      directShortcutUsed: 'Naive Bayes Parameter Formula $(C-1) + C\\sum_{j=1}^K (V_j - 1)$',
    },
    {
      id: 'm14-c2-q4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.22',
      year: 2024,
      marks: 1,
      type: 'MCQ',
      stem: 'In Fisher’s Linear Discriminant Analysis (LDA), one maximizes the objective $J(u) = \\frac{u^\\top S_B u}{u^\\top S_W u}$ with respect to $u \\neq 0$, where $S_B$ is the between-class scatter matrix and $S_W$ is the invertible within-class scatter matrix. The optimal direction $u^*$ satisfies which equation?',
      options: [
        {
          id: 'A',
          text: '$S_W^{-1} S_B u^* = \\lambda u^*$',
          whyTrueOrFalse: 'True — setting $\\nabla_u J(u) = 0$ gives $S_B u^* = \\lambda S_W u^* \\implies S_W^{-1}S_B u^* = \\lambda u^*$.',
        },
        {
          id: 'B',
          text: '$S_B S_W u^* = \\lambda u^*$',
          whyTrueOrFalse: 'False — $S_W$ appears in the denominator, so $S_W^{-1}$ enters, not $S_W$.',
        },
        {
          id: 'C',
          text: '$(S_B + S_W) u^* = \\lambda u^*$',
          whyTrueOrFalse: 'False — $S_B + S_W = S_T$ gives PCA directions, not Fisher LDA.',
        },
        {
          id: 'D',
          text: '$S_W u^* = \\lambda u^*$',
          whyTrueOrFalse: 'False — ignores class separation $S_B$ completely.',
        },
      ],
      correctOptions: ['A'],
      triggerHint: 'Differentiate the generalized Rayleigh quotient $\\frac{u^\\top S_B u}{u^\\top S_W u}$ and set to $0$.',
      intuitiveSolution: [
        'Quotient rule gradient: $\\nabla_u \\frac{u^\\top S_B u}{u^\\top S_W u} = \\frac{2(u^\\top S_W u) S_B u - 2(u^\\top S_B u) S_W u}{(u^\\top S_W u)^2} = 0$.',
        'Let $\\lambda = \\frac{u^{*\\top} S_B u^*}{u^{*\\top} S_W u^*}$. Then $S_B u^* = \\lambda S_W u^*$.',
        'Multiplying on the left by $S_W^{-1}$ yields $S_W^{-1} S_B u^* = \\lambda u^*$.',
      ],
      directShortcutUsed: 'Generalized Rayleigh Quotient Stationary Condition',
    },
    {
      id: 'm14-c2-q5',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.35',
      year: 2025,
      marks: 1,
      type: 'NAT',
      stem: 'Consider a binary classification problem with classes $C_1, C_2$ having prior probabilities $P(C_1) = \\frac{1}{3}$ and $P(C_2) = \\frac{2}{3}$. For a given feature vector $x$, the likelihoods are $P(x \\mid C_1) = \\frac{3}{4}$ and $P(x \\mid C_2) = \\frac{1}{4}$. Using the Bayes (MAP) classifier, compute the probability of misclassifying $x$.',
      natAnswer: { min: 0.39, max: 0.41, exactDisplay: '0.40' },
      triggerHint: 'Compute $J_1 = P(C_1)P(x\\mid C_1)$ and $J_2 = P(C_2)P(x\\mid C_2)$; error $= \\frac{\\min(J_1, J_2)}{J_1 + J_2}$.',
      intuitiveSolution: [
        '$J_1 = P(C_1)P(x\\mid C_1) = \\frac{1}{3} \\cdot \\frac{3}{4} = \\frac{1}{4} = \\frac{3}{12}$.',
        '$J_2 = P(C_2)P(x\\mid C_2) = \\frac{2}{3} \\cdot \\frac{1}{4} = \\frac{1}{6} = \\frac{2}{12}$.',
        'Total $P(x) = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$.',
        'Since $J_1 > J_2$, the Bayes classifier predicts $C_1$. It misclassifies $x$ whenever the true class is $C_2$, which occurs with posterior probability $P(C_2 \\mid x) = \\frac{2/12}{5/12} = \\frac{2}{5} = 0.40$.',
      ],
      directShortcutUsed: 'Bayes Error at $x$ = $\\frac{\\min(J_1, J_2)}{J_1 + J_2}$',
    },
    {
      id: 'm14-c2-q6',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Mock · MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Which of the following statements about Logistic Regression, Naive Bayes, and Decision Trees is/are TRUE?',
      options: [
        {
          id: 'A',
          text: 'Logistic Regression is a discriminative model, whereas Naive Bayes is a generative model.',
          whyTrueOrFalse: 'True — verified directly in GATE DA 2024 Q.18 and 2026 Q.23.',
        },
        {
          id: 'B',
          text: 'In ID3 Decision Trees, Information Gain $\\text{IG}(S, A)$ can never be strictly negative.',
          whyTrueOrFalse: 'True — by concavity of Shannon entropy and Jensen’s inequality, $\\text{IG}(S, A) \\ge 0$ always.',
        },
        {
          id: 'C',
          text: 'Naive Bayes requires all features $X_1, \\dots, X_K$ to be marginally independent ($P(X_i, X_j) = P(X_i)P(X_j)$).',
          whyTrueOrFalse: 'False — it requires conditional independence GIVEN $Y$, not marginal independence.',
        },
        {
          id: 'D',
          text: 'In binary classification, the decision boundary of Logistic Regression $P(Y=1\\mid x) = 0.5$ is a hyperplane in feature space.',
          whyTrueOrFalse: 'True — $\\sigma(w^\\top x + b) = 0.5 \\iff w^\\top x + b = 0$, which is linear in $x$.',
        },
      ],
      correctOptions: ['A', 'B', 'D'],
      triggerHint: 'Distinguish conditional vs marginal independence and check $\\sigma(z)=0.5 \\iff z=0$.',
      intuitiveSolution: [
        '(A) True: Logistic Regression models $P(Y\\mid X)$ directly; Naive Bayes models $P(X\\mid Y)P(Y)$.',
        '(B) True: Concavity of $H(p)$ guarantees weighted child entropy $\\le H(S)$, so $\\text{IG} \\ge 0$.',
        '(C) False: Naive Bayes assumes $X_i \\perp X_j \\mid Y$; marginal correlation through $Y$ is expected!',
        '(D) True: $\\sigma(w^\\top x + b) = 0.5 \\iff w^\\top x + b = 0$, a hyperplane.',
      ],
      directShortcutUsed: 'Taxonomy + Jensen Concavity + Logit Boundary',
    },
  ],
}

const chapter3: ChapterData = {
  id: 'ml1-ch3',
  number: 3,
  title: 'Hard/Soft-Margin SVM, KKT Support Vectors, Kernels & k-NN',
  shortTitle: 'SVM, Kernels & k-NN',
  estimatedHours: 4.5,
  dayLabel: 'Week 6 · Day 40–41',
  tagline:
    'Let us make Support Vector Machines and $k$-NN feel completely visual: spot the widest 2D street in 20 seconds via $2/\\|w\\|_2$, read KKT slack variables $\\xi_i$ and support vectors $\\alpha_i > 0$ at a glance, test Mercer PSD kernels without building $\\phi(x)$, and rank $k$-NN distances cleanly using exact integer squares.',
  syllabusMapping: [
    'Support Vector Machines (Hard-Margin & Soft-Margin primal/dual, support vectors)',
    'Kernel functions (Polynomial, RBF/Gaussian, Mercer condition)',
    'Linear separability & Perceptron update rule',
    'k-Nearest Neighbours (k-NN) & Voronoi geometry',
  ],
  whatIsImportant: [
    '2D Hard-Margin SVM geometry: finding $w, b$, support vectors, half-margin $1/\\|w\\|_2$, and street margin $2/\\|w\\|_2$ (GATE DA 2024 Q.17, 2025 Q.53)',
    'Linear separability tests on 2D plots (GATE DA 2024 Q.53) and Perceptron update strict score increase (GATE DA 2025 Q.22)',
    'KKT complementary slackness $\\alpha_i [y_i(w^\\top x_i + b) - 1 + \\xi_i] = 0$: distinguishing safe non-SVs ($\\alpha_i=0$), margin SVs ($0 < \\alpha_i < C$), and bounded/violating SVs ($\\alpha_i = C, \\xi_i > 0$)',
    'Kernel trick $K(x,z) = \\phi(x)^\\top \\phi(z)$: Polynomial expansion & PSD Gram matrix condition',
    'k-NN squared distance sorting and minimum odd $k$ sweep (GATE DA 2024 Q.63)',
  ],
  whatIsNotImportant: [
    'SMO (Sequential Minimal Optimization) two-multiplier analytical step formulas',
    'VC-dimension combinatorial growth-function proofs for infinite hypothesis classes',
    'Ball-tree / KD-tree splitting heuristics for approximate $k$-NN beyond basic complexity comparison',
  ],
  inboundStream:
    'Linear Algebra (hyperplane distance $\\frac{|w^\\top x + b|}{\\|w\\|_2}$, Cauchy-Schwarz, PSD Gram matrices) + Calculus (constrained optimization & KKT conditions) + Ch. 1 $L_2$ regularization.',
  outboundStream: [
    'Ch. 4 Bias-Variance ($k$ in $k$-NN and $C$ in Soft-Margin SVM as complexity knobs)',
    'Module 15 Clustering (Voronoi convexity from 1-NN reappears in $k$-means, GATE DA 2024 Q.19!)',
  ],
  glossary: [
    {
      term: 'Linear Separability',
      symbol: '$y_i(w^\\top x_i + b) > 0$',
      plainEnglish:
        'A binary dataset is linearly separable if you can draw a single straight line (or flat hyperplane in higher dimensions) that puts every $+1$ point strictly on one side and every $-1$ point strictly on the other.',
      tinyExample: 'Logical AND and OR are linearly separable in 2D, whereas the 4-point XOR pattern is not.',
    },
    {
      term: 'Perceptron Update Rule',
      symbol: '$w \\leftarrow w + y_n x_n,\\; b \\leftarrow b + y_n$',
      plainEnglish:
        'Whenever a linear classifier makes a mistake on $(x_n, y_n)$, the Perceptron nudges its normal vector $w$ toward $+x_n$ (if $y_n = +1$) or away from $x_n$ (if $y_n = -1$), strictly improving the score on that misclassified point.',
      tinyExample: 'If a $+1$ point $x_n$ has negative score, adding $x_n$ to $w$ and $1$ to $b$ increases its score by $\\|x_n\\|_2^2 + 1 \\ge 1$.',
    },
    {
      term: 'Margin & Maximum-Margin Hyperplane',
      symbol: '$\\gamma = \\frac{1}{\\|w\\|_2},\\; \\text{width} = \\frac{2}{\\|w\\|_2}$',
      plainEnglish:
        'Imagine laying the widest possible empty street between the two classes without touching any data point. The center line of that street is the SVM boundary, the distance to the curb is the half-margin $1/\\|w\\|_2$, and the full street width is $2/\\|w\\|_2$.',
      tinyExample: 'For canonical separator $x_1 + x_2 - 1 = 0$, $w = [1,1]^\\top$ has $\\|w\\|_2 = \\sqrt{2}$, giving street width $2/\\sqrt{2} = \\sqrt{2}$.',
    },
    {
      term: 'Support Vectors',
      symbol: '$\\alpha_i > 0$',
      plainEnglish:
        'Support vectors are the handful of critical training points sitting right on (or inside) the margin curbs that hold the separating hyperplane in place. Delete any non-support vector outside the street, and the SVM boundary does not budge an inch!',
      tinyExample: 'With Class $+1 = \\{(2,0),(0,2),(2,2)\\}$ and Class $-1 = \\{(0,0)\\}$, only $(0,0),(2,0),(0,2)$ are support vectors; $(2,2)$ is safely behind them.',
    },
    {
      term: 'Slack Variable',
      symbol: '$\\xi_i \\ge 0$',
      plainEnglish:
        'In Soft-Margin SVM, $\\xi_i$ measures how far training point $i$ is allowed to trespass across its margin curb. Watch the subtle exam trap: $0 < \\xi_i \\le 1$ violates the margin yet is STILL correctly classified; true misclassification only happens when $\\xi_i > 1$.',
      tinyExample: 'A point with signed margin $y_i(w^\\top x_i + b) = +0.4$ has slack $\\xi_i = 0.6$ — inside the street, yet on the correct side of $0$.',
    },
    {
      term: 'Hinge Loss',
      symbol: '$\\ell_{\\text{hinge}} = \\max\\big(0,\\; 1 - y_i(w^\\top x_i + b)\\big)$',
      plainEnglish:
        'Hinge loss is the exact penalty driving Soft-Margin SVM: it stays completely zero for every confident point safely beyond the margin ($\\ge 1$), and climbs linearly like a ramp once a point steps inside the street or onto the wrong side.',
      tinyExample: 'If $y_i(w^\\top x_i + b) = 2.5$, hinge loss is $0$; if it is $-0.5$, hinge loss is $1 - (-0.5) = 1.5$.',
    },
    {
      term: 'Cost Parameter ($C$) in Soft-Margin SVM',
      symbol: '$\\frac{1}{2}\\|w\\|_2^2 + C\\sum_{i=1}^n \\xi_i$',
      plainEnglish:
        'Think of $C$ as the fine you pay for every unit of margin violation $\\xi_i$, acting like $1/\\lambda$ in Ridge. Huge $C$ enforces strict zero-error fitting with a narrow street (low bias, high variance), while small $C$ allows some violations to enjoy a wider, smoother street.',
      tinyExample: 'Letting $C \\to \\infty$ bans all slack ($\\xi_i = 0$) and turns Soft-Margin SVM right back into Hard-Margin SVM.',
    },
    {
      term: 'KKT Complementary Slackness',
      symbol: '$\\alpha_i[y_i(w^\\top x_i + b) - 1 + \\xi_i] = 0$',
      plainEnglish:
        'These optimality conditions sort every training point into three clean buckets: safe outside points have $\\alpha_i = 0$ (ignored), points right on the margin have $0 < \\alpha_i < C$ and $\\xi_i = 0$, and margin violators have $\\xi_i > 0$ pinned at $\\alpha_i = C$.',
      tinyExample: 'If a point has $\\alpha_i = 0$, KKT guarantees $y_i(w^\\top x_i + b) \\ge 1$, so it cannot be misclassified.',
    },
    {
      term: 'Kernel Trick & Mercer Condition',
      symbol: '$K(x, z) = \\phi(x)^\\top \\phi(z),\\; K \\succeq 0$',
      plainEnglish:
        'Instead of explicitly lifting points into a huge (or infinite-dimensional) feature space $\\phi(x)$ to separate curved classes, a kernel computes the inner product $\\phi(x)^\\top\\phi(z)$ directly in original space. By Mercer’s theorem, $K$ is valid iff every Gram matrix it forms is symmetric positive semi-definite.',
      tinyExample: 'The polynomial kernel $K(x, z) = (1 + x^\\top z)^2$ in 2D implicitly computes a 6D dot product in just 3 operations.',
    },
    {
      term: '$k$-Nearest Neighbours ($k$-NN)',
      symbol: '$\\text{Complexity} \\propto \\frac{1}{k}$',
      plainEnglish:
        '$k$-NN is a lazy, non-parametric classifier: it simply remembers the entire training set and classifies a new query by letting its $k$ closest neighbours vote. Notice that small $k$ ($k=1$) is hyper-complex (low bias, high variance), while large $k$ smooths boundaries (higher bias, lower variance).',
      tinyExample: 'For $k=1$, every training point is its own closest neighbour at distance $0$, giving $0\\%$ training error but jagged test boundaries.',
    },
    {
      term: 'Voronoi Cell & $1$-NN Decision Boundary',
      symbol: '$V_j = \\{x : \\|x - x_j\\|_2 \\le \\|x - x_m\\|_2\\}$',
      plainEnglish:
        'A Voronoi cell around point $x_j$ is the territory of all locations closer to $x_j$ than to any other training point. Because each pairwise boundary is a straight perpendicular bisector, every individual Voronoi cell is a convex polygon.',
      tinyExample: 'Every $1$-NN region is a union of convex Voronoi tiles — the exact same geometry that makes $k$-Means clusters convex!',
    },
  ],
  generatorId: 'ols-ridge-loss-gen',
  concepts: [
    {
      id: 'm14-c3-1',
      title: 'Linear Separability, Perceptron & Hard-Margin SVM Geometry ($2/\\|w\\|_2$)',
      subtitle: 'Finding the widest empty street between two linearly separable classes without quadratic programming',
      priority: 'core-pillar',
      buildsOn: 'Point-to-hyperplane Euclidean distance $\\frac{|w^\\top x + b|}{\\|w\\|_2}$ & Ch. 1 $L_2$ norms',
      toyExample: {
        title: 'The 4-Point Corner Grid (GATE DA 2025 Q.53)',
        scenario:
          'Class $+1$ has three points $(2, 0),\\; (0, 2),\\; (2, 2)$ and Class $-1$ has a single point $(0, 0)$. Which line separates them with maximum margin, which points are support vectors, and how wide is the margin?',
        walkthroughSteps: [
          '1. **Plot on a $2\\times 2$ square:** $(0,0)$ sits at the bottom-left corner; $(2,0)$ and $(0,2)$ sit on the diagonal $x_1 + x_2 = 2$, and $(2,2)$ is behind them at $x_1 + x_2 = 4$.',
          '2. **Place the widest street:** The closest gap is between $(0,0)$ (on $x_1 + x_2 = 0$) and the line joining $(2,0), (0,2)$ (on $x_1 + x_2 = 2$). Halfway between $0$ and $2$ is the decision boundary $x_1 + x_2 = 1$, i.e. $x_1 + x_2 - 1 = 0$!',
          '3. **Verify canonical normalization $y_i(w^\\top x_i + b) = 1$:** With $w = [1, 1]^\\top$ and $b = -1$:\n   - At $(0,0)$ ($y=-1$): $(-1)(0+0-1) = +1$ (Support Vector!)\n   - At $(2,0)$ ($y=+1$): $(+1)(2+0-1) = +1$ (Support Vector!)\n   - At $(0,2)$ ($y=+1$): $(+1)(0+2-1) = +1$ (Support Vector!)\n   - At $(2,2)$ ($y=+1$): $(+1)(2+2-1) = +3 > 1$ (Strictly outside street — NOT a Support Vector!)',
          '4. **Read off geometric margin:** $\\|w\\|_2 = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Distance from boundary to nearest point (half-margin) is $\\frac{1}{\\|w\\|_2} = \\frac{1}{\\sqrt{2}}$; full street width between the two $+1/-1$ margins is $\\frac{2}{\\|w\\|_2} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$!',
        ],
        ahaMoment:
          'Save yourself pages of algebra on small 2D datasets! Just sketch the convex hulls of the two classes, find the shortest bridge between them, drop the separating line halfway and perpendicular to that bridge, and rescale $(w,b)$ so the nearest points satisfy $y_i(w^\\top x_i + b) = 1$.',
      },
      theoremAndFormula: {
        statement:
          '**Hard-Margin SVM** solves $\\min_{w,b} \\frac{1}{2}\\|w\\|_2^2$ subject to $y_i(w^\\top x_i + b) \\ge 1$ for all $i=1,\\dots,n$. Because the two margin hyperplanes $w^\\top x + b = +1$ and $w^\\top x + b = -1$ are separated by perpendicular distance $\\frac{2}{\\|w\\|_2}$, minimizing $\\|w\\|_2^2$ **maximizes the margin**. For any linearly separable dataset, the **Perceptron** update $w_{\\text{new}} = w + y_n x_n,\\; b_{\\text{new}} = b + y_n$ strictly increases $w^\\top x_n + b$ for a misclassified $+1$ point (GATE DA 2025 Q.22).',
        formulaLatex:
          '\\text{Half-margin } \\gamma = \\frac{1}{\\|w\\|_2}, \\qquad \\text{Total margin width} = \\frac{2}{\\|w\\|_2}, \\qquad w^* = \\sum_{i \\in \\text{SV}} \\alpha_i y_i x_i',
        plainEnglishDecoding:
          'Here is one small vocabulary distinction to watch in GATE questions: some authors call the half-width $\\gamma = \\frac{1}{\\|w\\|_2}$ the geometric margin (distance from center line to nearest point), while others — including GATE DA 2025 Q.53, where $\\sqrt{2}$ was the official answer — mean the full street width $\\frac{2}{\\|w\\|_2}$ between the $+1$ and $-1$ curbs. Either way, always make sure $\\min_i |w^\\top x_i + b| = 1$ before plugging $\\|w\\|_2$ into the formula!',
        workedMiniExamples: [
          {
            prompt:
              'Class $+1$ has single point $(5, 0)$ and Class $-1$ has single point $(-1, 0)$. Find canonical $(w, b)$, half-margin, and full street width.',
            solution:
              'Midpoint is $(2, 0)$, so separator is $x_1 - 2 = 0$. At $(5, 0)$, raw value is $5 - 2 = 3$. Divide $(w, b)$ by $3$ so support vectors hit $\\pm 1$: $w = [1/3, 0]^\\top,\\; b = -2/3$. Then $\\|w\\|_2 = 1/3$, half-margin $= 1/\\|w\\|_2 = 3$, and full street width $= 2/\\|w\\|_2 = 6$ (which equals the distance between $x_1=-1$ and $x_1=5$!).',
          },
          {
            prompt:
              '(GATE DA 2025 Q.22) Suppose $(x_n, y_n = +1)$ is misclassified ($w^\\top x_n + b < 0$). Show the Perceptron update strictly increases the score on $x_n$.',
            solution:
              '$w_{\\text{new}}^\\top x_n + b_{\\text{new}} = (w + x_n)^\\top x_n + (b + 1) = (w^\\top x_n + b) + (\\|x_n\\|_2^2 + 1) > w^\\top x_n + b$ since $\\|x_n\\|_2^2 + 1 \\ge 1 > 0$.',
          },
        ],
      },
      sandboxId: 'ml-svm-ridge-lab',
      msqTraps: [
        {
          myth: 'Moving or deleting ANY training point changes the Hard-Margin SVM decision boundary.',
          reality:
            'False! Deleting a **non-support vector** (a point strictly outside the margin, $y_i(w^\\top x_i + b) > 1$, so $\\alpha_i = 0$) does NOT change $w^*$ or $b^*$ at all!',
          counterExample:
            'In GATE DA 2025 Q.53, deleting $(2,2)$ leaves $(0,0), (2,0), (0,2)$ untouched and gives the exact same $x_1 + x_2 = 1$ hyperplane.',
        },
        {
          myth: 'You can always read off the margin as $\\frac{1}{\\|w\\|_2}$ for ANY boundary equation $w^\\top x + b = 0$.',
          reality:
            'Only if $(w,b)$ is **canonically scaled** so that $\\min_i y_i(w^\\top x_i + b) = 1$! If you double $w$ and $b$, the hyperplane is identical, yet $\\frac{1}{\\|2w\\|}$ halves unless you compute $\\frac{\\min_i |w^\\top x_i + b|}{\\|w\\|_2}$.',
          counterExample:
            'For $2x_1 + 2x_2 - 2 = 0$, $\\|w\\| = 2\\sqrt{2}$ even though the half-margin is still $1/\\sqrt{2}$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 6,
          topic: 'Soft-Margin SVM & Dual Kernel Trick',
          whyItMatters:
            'Real datasets overlap or curve (non-linearly separable like XOR in GATE DA 2024 Q.53); introducing slack $\\xi_i$ and replacing $x_i^\\top x_j$ in the dual with $K(x_i, x_j)$ solves both.',
          pyqProof: 'GATE DA 2024 Q.17 & Q.53; GATE DA 2025 Q.22 & Q.53',
        },
      ],
    },
    {
      id: 'm14-c3-2',
      title: 'Soft-Margin SVM, Hinge Loss, KKT Conditions & Kernels',
      subtitle: 'Allowing margin violations $\\xi_i$, reading support-vector zones, and computing $K(x,z) = \\phi(x)^\\top\\phi(z)$',
      priority: 'high-yield',
      buildsOn: 'Hard-Margin SVM, Ch. 1 $L_2$ regularization & Linear Algebra PSD Gram matrices',
      toyExample: {
        title: 'Four Points Around the Margin Street',
        scenario:
          'Suppose a Soft-Margin SVM has canonical margins at $\\pm 1$. Evaluate the Hinge Loss $\\xi_i = \\max(0, 1 - y_i f(x_i))$ for four training points with signed margins $m_i = y_i(w^\\top x_i + b)$ equal to $+2.5,\\; +1.0,\\; +0.4,\\; -0.5$.',
        walkthroughSteps: [
          '1. **$m_1 = +2.5$ (Safe exterior):** $\\xi_1 = \\max(0, 1 - 2.5) = 0$. By KKT, $\\alpha_1 = 0$ — NOT a support vector!',
          '2. **$m_2 = +1.0$ (On margin boundary):** $\\xi_2 = 0$, and $0 \\le \\alpha_2 \\le C$ — margin Support Vector.',
          '3. **$m_3 = +0.4$ (Inside street, STILL correctly classified!):** $m_3 > 0$ so predicted sign matches $y_3$, yet it violates the $1$-margin with slack $\\xi_3 = 1 - 0.4 = 0.6$, forcing $\\alpha_3 = C$.',
          '4. **$m_4 = -0.5$ (Wrong side = misclassified!):** $\\xi_4 = 1 - (-0.5) = 1.5 > 1$, also $\\alpha_4 = C$.',
        ],
        ahaMoment:
          'Keep this KKT checkpoint crystal clear: every point with $\\alpha_i > 0$ is a Support Vector, and **misclassification** happens ONLY when $\\xi_i > 1$ (not merely $\\xi_i > 0$!). Whenever $0 < \\xi_i \\le 1$, the point has stepped inside the margin street yet still sits on the right side of the decision line.',
      },
      theoremAndFormula: {
        statement:
          '**Soft-Margin Primal:** $\\min_{w,b,\\xi} \\frac{1}{2}\\|w\\|_2^2 + C\\sum_{i=1}^n \\xi_i$ s.t. $y_i(w^\\top x_i + b) \\ge 1 - \\xi_i,\\; \\xi_i \\ge 0$ (equivalently Hinge Loss $+\\, \\frac{1}{2C}\\|w\\|_2^2$). **Dual:** $\\max_{\\alpha} \\sum_i \\alpha_i - \\frac{1}{2}\\sum_{i,j} \\alpha_i \\alpha_j y_i y_j K(x_i, x_j)$ s.t. $0 \\le \\alpha_i \\le C,\\; \\sum_i \\alpha_i y_i = 0$. By **Mercer’s Theorem**, $K(x,z)$ is a valid kernel iff every Gram matrix $K_{ij} = K(x_i, x_j)$ is symmetric Positive Semi-Definite ($K \\succeq 0$).',
        formulaLatex:
          '\\xi_i = \\max\\big(0, 1 - y_i(w^\\top x_i + b)\\big), \\qquad K_{\\text{poly}}(x,z) = (x^\\top z + c)^d, \\qquad K_{\\text{RBF}}(x,z) = e^{-\\gamma \\|x-z\\|_2^2}',
        plainEnglishDecoding:
          'Notice how $C$ plays the exact opposite role of $\\lambda$ in Ridge ($C \\propto 1/\\lambda$). A **large $C$** fines slack violations heavily, squeezing the margin tight to fit outliers (low bias, high variance). A **small $C$** forgives a few violations to enjoy a wider, calmer street (higher bias, lower variance). And because the dual formula only ever asks for inner products $K(x_i, x_j)$, we can even work in infinite-dimensional RBF feature space without ever writing down $\\phi(x)$!',
        workedMiniExamples: [
          {
            prompt:
              'Find an explicit feature map $\\phi(x)$ for $K(x, z) = (1 + x^\\top z)^2$ where $x, z \\in \\mathbb{R}^2$.',
            solution:
              'Expand $(1 + x_1 z_1 + x_2 z_2)^2 = 1 + 2x_1 z_1 + 2x_2 z_2 + x_1^2 z_1^2 + x_2^2 z_2^2 + 2x_1 x_2 z_1 z_2 = \\phi(x)^\\top \\phi(z)$ with $\\phi(x) = [1,\\; \\sqrt{2}x_1,\\; \\sqrt{2}x_2,\\; x_1^2,\\; x_2^2,\\; \\sqrt{2}x_1 x_2]^\\top \\in \\mathbb{R}^6$.',
          },
          {
            prompt:
              'If a Soft-Margin SVM has $C = 10$ and $n = 100$ points, what is the maximum possible value of $\\sum_{i=1}^{100} \\alpha_i$ if $60$ points have $y_i = +1$ and $40$ have $y_i = -1$?',
            solution:
              'Dual constraint $\\sum \\alpha_i y_i = 0 \\implies \\sum_{y_i=+1} \\alpha_i = \\sum_{y_i=-1} \\alpha_i$. Since $0 \\le \\alpha_i \\le 10$, the negative class caps each sum at $40 \\times 10 = 400$, so $\\sum \\alpha_i \\le 400 + 400 = 800$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Increasing hyperparameter $C$ produces a wider margin because $C$ is the regularization strength.',
          reality:
            'Opposite! In SVM, $C$ multiplies the **data slack loss**, NOT $\\|w\\|^2$. Larger $C$ forces smaller slack $\\xi_i$, leading to a **narrower** margin and higher risk of overfitting (like $\\lambda = 1/C \\to 0$ in Ridge).',
          counterExample:
            'As $C \\to \\infty$, Soft-Margin SVM becomes Hard-Margin SVM (zero slack allowed, tightest margin).',
        },
        {
          myth: 'Any symmetric function $K(x, z) = K(z, x)$ is a valid SVM kernel.',
          reality:
            'False! It must ALSO satisfy **positive semi-definiteness** ($v^\\top K v \\ge 0$) on every finite point set.',
          counterExample:
            '$K(x, z) = -x^\\top z$ is symmetric, yet its Gram matrix has negative eigenvalues ($-\\|x\\|^2 < 0$), so it is NOT a valid kernel.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Ch. 4 Hyperparameter Selection for $(C, \\gamma)$ via $k$-Fold CV',
          whyItMatters:
            'Choosing $(C, \\gamma)$ in RBF-SVM is the textbook Bias-Variance tuning problem evaluated via cross-validation.',
          pyqProof: 'GATE DA 2024 Q.17 & Q.53; GATE DA 2026 Q.37 (regularization bias-variance)',
        },
      ],
    },
    {
      id: 'm14-c3-3',
      title: '$k$-Nearest Neighbours ($k$-NN) & Voronoi Tessellation',
      subtitle: 'Distance-based non-parametric voting, $k$ vs. complexity, and why $1$-NN creates convex Voronoi cells',
      priority: 'high-yield',
      buildsOn: 'Euclidean ($L_2$) / Manhattan ($L_1$) norms & majority voting',
      toyExample: {
        title: 'Picking the Minimum Odd $k$ on a 5-Point Grid (GATE DA 2024 Q.63 Pattern)',
        scenario:
          'You want to classify query $\\diamond = (2, 1)$ against 5 labeled points using Euclidean distance: $A(2, 2)$ (`circle`), $B(3, 1)$ (`square`), $C(1, 1)$ (`circle`), $D(0, 1)$ (`square`), $E(2, -2)$ (`square`).',
        walkthroughSteps: [
          '1. **Compute squared distances $d^2$ (skip square roots!):**\n   - $d^2(\\diamond, A) = 0^2 + 1^2 = 1$ (`circle`)\n   - $d^2(\\diamond, B) = 1^2 + 0^2 = 1$ (`square`)\n   - $d^2(\\diamond, C) = 1^2 + 0^2 = 1$ (`circle`)\n   - $d^2(\\diamond, D) = 2^2 + 0^2 = 4$ (`square`)\n   - $d^2(\\diamond, E) = 0^2 + 3^2 = 9$ (`square`)',
          '2. **Check $k=1$ and $k=3$:** First 3 closest are `{A(circle), B(square), C(circle)}` -> `circle` wins $2$-to-$1$!',
          '3. **Check $k=5$:** Adding $D$ (`square`) and $E$ (`square`) gives `3 square` vs `2 circle` -> `square` wins!',
          '4. **Conclusion:** Minimum odd $k$ predicting `square` is $k = 5$.',
        ],
        ahaMoment:
          'Here is a great time-saver for the exam hall: never waste calculator seconds taking square roots when sorting Euclidean distances! Since $\\sqrt{u}$ rises smoothly on $[0, \\infty)$, **exact integer squared distances $d^2$** give the exact same nearest-neighbour ranking with zero rounding errors.',
      },
      theoremAndFormula: {
        statement:
          '$k$-NN stores all $n$ training points ($O(1)$ training, $O(nd)$ query time) and predicts the majority label among the $k$ points minimizing $\\|x_i - x_{\\text{query}}\\|_p$. For $k = 1$, the decision regions are unions of **convex Voronoi cells** $V_j = \\{x : \\|x - x_j\\|_2 \\le \\|x - x_m\\|_2 \\; \\forall m\\}$ (the exact same geometry as $k$-means clusters in GATE DA 2024 Q.19!).',
        formulaLatex:
          'd_2(x, z)^2 = \\sum_{j=1}^d (x_j - z_j)^2, \\qquad d_1(x, z) = \\sum_{j=1}^d |x_j - z_j|, \\qquad \\text{Model Complexity } \\propto \\frac{1}{k}',
        plainEnglishDecoding:
          'Pay special attention to the **reversed complexity knob** in $k$-NN: a tiny $k$ (like $k = 1$) carves jagged, wiggly islands around every single point (zero training error, **low bias, high variance**), while a huge $k$ (like $k = n$) averages everyone together into one flat global majority vote (**high bias, low variance**).',
        workedMiniExamples: [
          {
            prompt:
              'Compute the Manhattan ($L_1$) distance between $P = (1, -2, 4)$ and $Q = (-2, 3, 1)$.',
            solution:
              '$d_1(P, Q) = |1 - (-2)| + |-2 - 3| + |4 - 1| = 3 + 5 + 3 = 11$.',
          },
          {
            prompt:
              'If a $1$-NN classifier evaluates its error on its own distinct-feature training set, what is the training error?',
            solution:
              '$0\\%$! Every training point is its own nearest neighbour at distance $0$ — illustrating why $1$-NN has extreme variance and zero training error.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Larger $k$ in $k$-NN decreases bias and increases overfitting.',
          reality:
            'Exact opposite! Larger $k$ averages over wider neighbourhoods, **increasing bias** and **decreasing variance** (smoother boundary).',
          counterExample:
            'At $k = n$, $k$-NN ignores the query location completely and predicts the global majority class everywhere (maximum bias, zero variance).',
        },
        {
          myth: 'Feature scaling (standardization) does not affect $k$-NN because distances just scale proportionally.',
          reality:
            'False! Scaling one feature (say Income in ₹ vs Age in years) without standardizing makes Income dominate the sum of squares, turning $k$-NN effectively 1-dimensional.',
          counterExample:
            'If $x_1 \\in [0, 10^5]$ and $x_2 \\in [0, 1]$, $(x_1 - z_1)^2$ overwhelms $(x_2 - z_2)^2$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Module 15 $k$-Means Voronoi Convexity & Ch. 4 Bias-Variance',
          whyItMatters:
            'GATE DA 2024 Q.19 used the exact Voronoi convexity property ($[1,1]^\\top, [-1,1]^\\top \\in C_3 \\implies [0,1]^\\top \\in C_3$) — identical geometry to $1$-NN cells!',
          pyqProof: 'GATE DA 2024 Q.63 ($k$-NN ranking) & Q.19 (Voronoi convexity)',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm14-c3-ht1',
      title: '2D Hard-Margin SVM by Geometric Midline (Zero QP Algebra)',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2024 · Q.17', 'GATE DA 2025 · Q.53'],
      problemStatement:
        'Given 4–8 labeled 2D points $(x_1, x_2)$ from Classes $+1$ and $-1$, find the Support Vectors, optimal $(w, b)$, and geometric margin.',
      triggerCue:
        'Spot **"Hard-margin linear SVM"** on **small 2D integer coordinates**.',
      bruteForceTrap:
        'Setting up 6 dual variables $\\alpha_1,\\dots,\\alpha_6$ and trying to solve a $6 \\times 6$ quadratic program by hand under exam time pressure.',
      mentalShift:
        'Sketch the points! The optimal hyperplane is ALWAYS the **perpendicular bisector** of the closest bridge between the convex hull of $+1$ and the convex hull of $-1$. Find that line $a x_1 + b x_2 + c = 0$ by inspection, then divide $(a, b, c)$ by the smallest $|a x_1 + b x_2 + c|$ across all points so the closest points hit $\\pm 1$.',
      steps: [
        {
          label: 'Sketch the 2D convex hulls',
          detail:
            'Identify which pairs/segments face each other across the two classes (in 2025 Q.53: $(0,0)$ faces segment $(2,0)-(0,2)$).',
        },
        {
          label: 'Write the unnormalized midline',
          detail:
            'Parallel to the opposing edge and halfway in between (for $(0,0)$ and $x_1+x_2=2$, midline is $x_1 + x_2 - 1 = 0$).',
        },
        {
          label: 'Normalize & read margin',
          detail:
            'Scale $(w, b)$ so $\\min_i y_i(w^\\top x_i + b) = 1$. Points hitting $= 1$ are the Support Vectors; half-margin $= 1/\\|w\\|_2$, full street margin $= 2/\\|w\\|_2$.',
        },
      ],
      lockInTakeaway:
        'Convex-hull geometry solves every 2D GATE SVM question in 30 seconds — reserve dual $\\alpha_i$ equations only for checking KKT rules!',
    },
    {
      id: 'm14-c3-ht2',
      title: 'Squared-Distance Ranking & Odd-$k$ Sweep for $k$-NN',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2024 · Q.63', 'GATE DA 2026 · Q.36'],
      problemStatement:
        'Given a query point and $n$ labeled points, find the minimum odd $k$ that assigns a target label, or identify the closest pair under $L_1$/$L_2$.',
      triggerCue:
        'Spot **"Euclidean distance" + "minimum odd $k$"** in $k$-NN.',
      bruteForceTrap:
        'Computing decimal square roots $\\sqrt{5} \\approx 2.236, \\sqrt{8} \\approx 2.828$ for every point before sorting.',
      mentalShift:
        'Keep exact integer **squared** distances $d^2 = \\Delta x_1^2 + \\Delta x_2^2$! Sort in ascending order of $d^2$, list the label sequence, and keep a running tally of `(Target - Other)` at $k = 1, 3, 5, \\dots$ until positive.',
      steps: [
        {
          label: 'Compute exact integer $d^2$',
          detail:
            'Zero floating-point rounding risk, zero calculator lookups.',
        },
        {
          label: 'Write label sequence by increasing $d^2$',
          detail:
            'Check ties carefully: if two points tie at rank $k$, verify if both have the same label or break ties cleanly.',
        },
        {
          label: 'Sweep odd $k = 1, 3, 5, \\dots$',
          detail:
            'Stop at the first odd $k$ where target label count $> k/2$.',
        },
      ],
      lockInTakeaway:
        'Always rank by $d^2$ (for $L_2$) and $d_1 = \\sum |\\Delta x_j|$ (for $L_1$) — never waste time taking square roots unless a question asks for the numerical distance value itself.',
    },
  ],
  arsenalCards: [
    {
      id: 'm14-c3-a1',
      badge: 'Hard-Margin SVM',
      whenYouSpot: '2D linearly separable points, support vectors, or margin width',
      directWeaponLatex: '\\min \\frac{1}{2}\\|w\\|_2^2 \\text{ s.t. } y_i(w^\\top x_i + b) \\ge 1, \\qquad \\text{Width} = \\frac{2}{\\|w\\|_2}',
      instantRule:
        'Midline between closest opposing hull elements; SVs satisfy $y_i(w^\\top x_i + b) = 1$; removing non-SVs leaves $(w,b)$ identical.',
      tenSecondExample:
        '2025 Q.53: $\\{(2,0),(0,2),(2,2)\\}$ vs $(0,0) \\implies x_1+x_2-1=0$, 3 SVs, $\\|w\\|=\\sqrt{2}$, street width $= 2/\\sqrt{2} = \\sqrt{2}$.',
      oneFatalTrap:
        'Forgetting to rescale $(w, b)$ so $\\min |w^\\top x_i + b| = 1$ before plugging into $2/\\|w\\|_2$.',
    },
    {
      id: 'm14-c3-a2',
      badge: 'Soft-Margin & Kernels',
      whenYouSpot: 'Slack $\\xi_i$, regularization $C$, $\\alpha_i$, or valid kernel check',
      directWeaponLatex: '\\xi_i = \\max(0, 1 - y_i f(x_i)), \\qquad K_{ij} = K(x_i, x_j) \\succeq 0 \\text{ (Mercer PSD)}',
      instantRule:
        '$\\xi_i = 0$ (safe/margin), $0 < \\xi_i \\le 1$ (margin violation, still correct!), $\\xi_i > 1$ (misclassified). Larger $C$ = narrower margin.',
      tenSecondExample:
        'Point with $y_i(w^\\top x_i + b) = 0.3$: $\\xi_i = 0.7$, so it is a Support Vector ($\\alpha_i = C$) yet **correctly classified**!',
      oneFatalTrap:
        'Thinking $\\xi_i > 0$ means misclassified (misclassification requires $\\xi_i > 1$) or thinking larger $C$ widens the margin.',
    },
    {
      id: 'm14-c3-a3',
      badge: 'k-NN & Perceptron',
      whenYouSpot: 'Nearest neighbours, Voronoi cells, or Perceptron update',
      directWeaponLatex: 'd_2^2 = \\sum (x_j - z_j)^2, \\qquad w_{\\text{new}} = w + y_n x_n,\\; b_{\\text{new}} = b + y_n',
      instantRule:
        'Rank using $d^2$ (no square roots!). Small $k$ = low bias/high variance; $1$-NN regions are convex Voronoi cells.',
      tenSecondExample:
        'Perceptron misclassifying $(x_n, +1)$ adds $\\|x_n\\|^2 + 1 > 0$ to the raw score $w^\\top x_n + b$ (GATE DA 2025 Q.22).',
      oneFatalTrap:
        'Claiming $k=1$ has high bias, or forgetting to standardize features with unequal scales before $k$-NN.',
    },
  ],
  questions: [
    {
      id: 'm14-c3-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #3',
      marks: 1,
      type: 'NAT',
      stem: 'A binary dataset has just two points: $x^{(1)} = (1, 1)$ with label $y^{(1)} = +1$, and $x^{(2)} = (-1, -1)$ with label $y^{(2)} = -1$. Find the maximum full margin width $\\frac{2}{\\|w\\|_2}$ achieved by a Hard-Margin SVM (rounded to 2 decimal places).',
      natAnswer: { min: 2.81, max: 2.84, exactDisplay: '2√2 ≈ 2.83' },
      triggerHint: 'With two opposite points, the widest street width equals the exact Euclidean distance between them!',
      intuitiveSolution: [
        'Distance between $(1, 1)$ and $(-1, -1)$ is $\\sqrt{(1-(-1))^2 + (1-(-1))^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2} \\approx 2.828$.',
        'Check canonically: separator is $x_1 + x_2 = 0$; at $(1,1)$ we want $w_1 + w_2 = 1$, giving $w = [0.5, 0.5]^\\top$, $\\|w\\|_2 = 1/\\sqrt{2}$, and $\\frac{2}{\\|w\\|_2} = 2\\sqrt{2} \\approx 2.83$.',
      ],
      directShortcutUsed: '2-Point SVM Street Width = Euclidean Distance $\\|x^{(1)} - x^{(2)}\\|_2$',
    },
    {
      id: 'm14-c3-q2',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.53',
      year: 2025,
      marks: 2,
      type: 'MSQ',
      stem: 'Consider a Hard-Margin linear Support Vector Machine trained on Class $+1$: $\\{(2, 0),\\; (0, 2),\\; (2, 2)\\}$ and Class $-1$: $\\{(0, 0)\\}$. Which of the following statements is/are TRUE?',
      options: [
        {
          id: 'A',
          text: 'All four data points are support vectors.',
          whyTrueOrFalse: 'False — $(2, 2)$ lies strictly behind the $(2,0)-(0,2)$ margin line ($1(2+2-1) = 3 > 1$).',
        },
        {
          id: 'B',
          text: 'The number of support vectors is $3$.',
          whyTrueOrFalse: 'True — $(0,0)$, $(2,0)$, and $(0,2)$ all lie on the supporting margin lines $x_1+x_2=0$ and $x_1+x_2=2$.',
        },
        {
          id: 'C',
          text: 'The maximum separating margin width $\\frac{2}{\\|w\\|_2}$ equals $\\sqrt{2}$ (with half-margin $1/\\sqrt{2}$).',
          whyTrueOrFalse: 'True — canonical separator is $x_1 + x_2 - 1 = 0$, so $\\|w\\|_2 = \\sqrt{2}$ and street width $= 2/\\sqrt{2} = \\sqrt{2}$.',
        },
        {
          id: 'D',
          text: 'Removing $(2, 2)$ changes the optimal separating hyperplane.',
          whyTrueOrFalse: 'False — $(2, 2)$ is not a support vector ($\\alpha = 0$), so removing it leaves $(w, b)$ unchanged.',
        },
      ],
      correctOptions: ['B', 'C'],
      triggerHint: 'Plot the $2\\times 2$ square and place the hyperplane halfway between $(0,0)$ and the diagonal $(2,0)-(0,2)$.',
      intuitiveSolution: [
        'Line through $(2,0)$ and $(0,2)$ is $x_1 + x_2 = 2$; parallel line through $(0,0)$ is $x_1 + x_2 = 0$.',
        'Midline separator: $x_1 + x_2 - 1 = 0$, giving canonical $w = [1, 1]^\\top,\\; b = -1$.',
        'Testing $y_i(w^\\top x_i + b)$: $(0,0) \\to 1$, $(2,0) \\to 1$, $(0,2) \\to 1$ (3 support vectors!), and $(2,2) \\to 3 > 1$ (not a support vector).',
        'Width $= \\frac{2}{\\|w\\|_2} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$.',
      ],
      directShortcutUsed: '2D Convex-Hull Midline Geometry',
    },
    {
      id: 'm14-c3-q3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.22',
      year: 2025,
      marks: 1,
      type: 'MCQ',
      stem: 'For a linear classifier $f(x) = w^\\top x + b$, suppose a training example $(x_n, y_n = +1)$ is currently misclassified ($f(x_n) < 0$). The Perceptron algorithm updates $w_{\\text{new}} = w + y_n x_n$ and $b_{\\text{new}} = b + y_n$. Which statement holds for the new score $f_{\\text{new}}(x_n) = w_{\\text{new}}^\\top x_n + b_{\\text{new}}$?',
      options: [
        {
          id: 'A',
          text: '$f_{\\text{new}}(x_n) > f(x_n)$ strictly.',
          whyTrueOrFalse: 'True — $f_{\\text{new}}(x_n) = f(x_n) + \\|x_n\\|_2^2 + 1 \\ge f(x_n) + 1 > f(x_n)$.',
        },
        {
          id: 'B',
          text: '$f_{\\text{new}}(x_n) < f(x_n)$ strictly.',
          whyTrueOrFalse: 'False — the update moves $f(x_n)$ in the positive direction toward $+1$.',
        },
        {
          id: 'C',
          text: '$f_{\\text{new}}(x_n) = f(x_n)$ whenever $x_n = 0$.',
          whyTrueOrFalse: 'False — because the bias also updates ($b_{\\text{new}} = b + 1$), $f_{\\text{new}}(0) = f(0) + 1 > f(0)$!',
        },
        {
          id: 'D',
          text: '$f_{\\text{new}}(x_n)$ is guaranteed to be positive after a single update.',
          whyTrueOrFalse: 'False — if $f(x_n) = -100$ and $\\|x_n\\|_2^2 = 1$, $f_{\\text{new}}(x_n) = -98 < 0$ still.',
        },
      ],
      correctOptions: ['A'],
      triggerHint: 'Substitute $w_{\\text{new}}$ and $b_{\\text{new}}$ into $w_{\\text{new}}^\\top x_n + b_{\\text{new}}$ directly.',
      intuitiveSolution: [
        '$f_{\\text{new}}(x_n) = (w + x_n)^\\top x_n + (b + 1) = (w^\\top x_n + b) + \\|x_n\\|_2^2 + 1$.',
        'Because $\\|x_n\\|_2^2 \\ge 0$, we add at least $+1$, so $f_{\\text{new}}(x_n) > f(x_n)$ always holds.',
      ],
      directShortcutUsed: 'Algebraic expansion of Perceptron update',
    },
    {
      id: 'm14-c3-q4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.55',
      year: 2025,
      marks: 2,
      type: 'MSQ',
      stem: 'A Nearest-Centroid binary classifier computes class means $\\mu_{\\text{red}}, \\mu_{\\text{green}} \\in \\mathbb{R}^d$ ($\\mu_{\\text{red}} \\neq \\mu_{\\text{green}}$) and defines $f(x) = \\|\\mu_{\\text{red}} - x\\|_2^2 - \\|\\mu_{\\text{green}} - x\\|_2^2$, predicting `red` if $f(x) < 0$ and `green` otherwise. Which of the following is/are TRUE?',
      options: [
        {
          id: 'A',
          text: 'The decision boundary $f(x) = 0$ is a curved quadratic surface.',
          whyTrueOrFalse: 'False — expanding both squares cancels $\\|x\\|_2^2$, leaving a linear hyperplane.',
        },
        {
          id: 'B',
          text: '$f(x)$ can be written in linear form $w^\\top x + b$ for fixed $w \\in \\mathbb{R}^d, b \\in \\mathbb{R}$.',
          whyTrueOrFalse: 'True — $w = 2(\\mu_{\\text{green}} - \\mu_{\\text{red}})$ and $b = \\|\\mu_{\\text{red}}\\|_2^2 - \\|\\mu_{\\text{green}}\\|_2^2$.',
        },
        {
          id: 'C',
          text: 'The decision boundary $f(x) = 0$ is perpendicular to the vector $\\mu_{\\text{green}} - \\mu_{\\text{red}}$ and passes through $\\frac{\\mu_{\\text{red}} + \\mu_{\\text{green}}}{2}$.',
          whyTrueOrFalse: 'True — it is the perpendicular bisector of the segment joining the two centroids.',
        },
        {
          id: 'D',
          text: 'Evaluating $f\\left(\\frac{\\mu_{\\text{red}} + \\mu_{\\text{green}}}{2}\\right)$ yields $\\|\\mu_{\\text{red}} - \\mu_{\\text{green}}\\|_2^2 > 0$.',
          whyTrueOrFalse: 'False — the midpoint is equidistant from both centroids, so $f(\\text{midpoint}) = 0$.',
        },
      ],
      correctOptions: ['B', 'C'],
      triggerHint: 'Expand $\\|a - x\\|^2 - \\|b - x\\|^2$ to watch $\\|x\\|^2$ vanish!',
      intuitiveSolution: [
        '$f(x) = (\\|\\mu_{\\text{red}}\\|^2 - 2\\mu_{\\text{red}}^\\top x + \\|x\\|^2) - (\\|\\mu_{\\text{green}}\\|^2 - 2\\mu_{\\text{green}}^\\top x + \\|x\\|^2) = 2(\\mu_{\\text{green}} - \\mu_{\\text{red}})^\\top x + (\\|\\mu_{\\text{red}}\\|^2 - \\|\\mu_{\\text{green}}\\|^2)$.',
        'Hence $f(x) = w^\\top x + b$ is strictly linear (B), with normal vector parallel to $\\mu_{\\text{green}} - \\mu_{\\text{red}}$ and passing through the midpoint $\\frac{\\mu_{\\text{red}}+\\mu_{\\text{green}}}{2}$ (C).',
      ],
      directShortcutUsed: 'Quadratic Cancellation in Distance Difference',
    },
    {
      id: 'm14-c3-q5',
      tier: 'tricky',
      sourceLabel: 'GATE DA 2024 · Q.63 Pattern',
      marks: 2,
      type: 'NAT',
      stem: 'A $k$-NN classifier uses Euclidean distance on five 2D training points: $(2,2):\\text{circle}$, $(3,1):\\text{square}$, $(1,0):\\text{circle}$, $(0,1):\\text{square}$, $(4,3):\\text{square}$. Find the **minimum odd $k$** ($k \\in \\{1, 3, 5\\}$) that classifies the query point $(2, 1)$ as `square`.',
      natAnswer: { min: 4.99, max: 5.01, exactDisplay: '5' },
      triggerHint: 'Compute integer squared distances $d^2$ from $(2, 1)$ and sweep $k = 1, 3, 5$.',
      intuitiveSolution: [
        'Squared distances from $(2, 1)$:',
        '- $(2, 2)$ [`circle`]: $0^2 + 1^2 = 1$',
        '- $(3, 1)$ [`square`]: $1^2 + 0^2 = 1$',
        '- $(1, 0)$ [`circle`]: $1^2 + 1^2 = 2$',
        '- $(0, 1)$ [`square`]: $2^2 + 0^2 = 4$',
        '- $(4, 3)$ [`square`]: $2^2 + 2^2 = 8$',
        'For $k = 1$: tie between `circle` and `square` at $d^2 = 1$ (not uniquely `square`).',
        'For $k = 3$: nearest 3 are `circle, square, circle` $\\implies$ `circle` wins ($2$ vs $1$).',
        'For $k = 5$: all 5 points give `3 square` vs `2 circle` $\\implies$ `square` wins! Minimum odd $k = 5$.',
      ],
      directShortcutUsed: 'Integer $d^2$ ranking + odd-$k$ majority tally',
    },
    {
      id: 'm14-c3-q6',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Mock · MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'In a Soft-Margin SVM solving $\\min_{w,b,\\xi} \\frac{1}{2}\\|w\\|_2^2 + C\\sum_{i=1}^n \\xi_i$ s.t. $y_i(w^\\top x_i + b) \\ge 1 - \\xi_i,\\; \\xi_i \\ge 0$ with dual variables $\\alpha_i \\in [0, C]$, which of the following statements is/are TRUE?',
      options: [
        {
          id: 'A',
          text: 'A training point with $\\xi_i = 0.6$ is correctly classified by the hyperplane $w^\\top x + b = 0$.',
          whyTrueOrFalse: 'True — $y_i(w^\\top x_i + b) = 1 - 0.6 = +0.4 > 0$, so its predicted sign matches $y_i$ even though it violates the margin.',
        },
        {
          id: 'B',
          text: 'Every training point with $\\alpha_i = 0$ satisfies $y_i(w^\\top x_i + b) \\ge 1$.',
          whyTrueOrFalse: 'True — by KKT, if $y_i(w^\\top x_i + b) < 1$ then $\\xi_i > 0$, which forces dual variable $\\alpha_i = C > 0$.',
        },
        {
          id: 'C',
          text: 'Decreasing $C$ (e.g., from $100$ to $0.1$) generally produces a wider margin and higher bias.',
          whyTrueOrFalse: 'True — smaller $C$ imposes less penalty on slack, prioritizing maximizing $2/\\|w\\|$ (wider street, smoother fit).',
        },
        {
          id: 'D',
          text: '$K(x, z) = \\|x - z\\|_2^2$ is a valid Mercer kernel on $\\mathbb{R}^d$.',
          whyTrueOrFalse: 'False — $\\|x - z\\|_2^2$ has zero diagonal ($K(x,x)=0$) and non-zero off-diagonals ($K(x,z) > 0$ for $x\\neq z$), giving a negative eigenvalue ($[1,-1]K[1,-1]^\\top = -2\\|x-z\\|^2 < 0$).',
        },
      ],
      correctOptions: ['A', 'B', 'C'],
      triggerHint: 'Test $\\xi_i \\in (0, 1)$, KKT constraints $0 \\le \\alpha_i \\le C$, and check $[1, -1]K[1, -1]^\\top \\ge 0$ for (D).',
      intuitiveSolution: [
        '(A) True: $0 < \\xi_i < 1 \\implies y_i f(x_i) = 1 - \\xi_i > 0$ (correct side of boundary!).',
        '(B) True: Contrapositive of $\\xi_i > 0 \\implies \\alpha_i = C > 0$ (since complementary slackness on $\\xi_i \\ge 0$ has multiplier $C - \\alpha_i$).',
        '(C) True: Smaller $C$ corresponds to stronger $L_2$ regularization ($\\lambda \\propto 1/C$), widening the margin.',
        '(D) False: On $x_1 = 0, x_2 = 1$, $K = \\begin{bmatrix}0 & 1\\\\ 1 & 0\\end{bmatrix}$ has eigenvalues $+1$ and $-1$ (indefinite, not PSD!).',
      ],
      directShortcutUsed: 'KKT Slack Zones + $2\\times 2$ Kernel PSD Counter-Test',
    },
  ],
}

const chapter4: ChapterData = {
  id: 'ml1-ch4',
  number: 4,
  title: 'Bias-Variance, Cross-Validation, Metrics (P/R/F1/AUC) & MLP Backprop',
  shortTitle: 'Eval Metrics & MLP Backprop',
  estimatedHours: 4.5,
  dayLabel: 'Week 7 · Day 42–43',
  tagline:
    'Let us tie the entire supervised learning pipeline together: break expected test error into $\\text{Bias}^2 + \\text{Var} + \\sigma^2$, count exact LOOCV and $k$-Fold splits without test leakage, read Precision/Recall/$F_1$/ROC-AUC cleanly from any confusion matrix, and trace MLP forward passes and Backpropagation through active versus dead ReLU and Sigmoid units.',
  syllabusMapping: [
    'Bias-variance tradeoff and cross-validation (LOOCV, k-fold CV)',
    'Classification evaluation: Confusion Matrix, Accuracy, Precision, Recall, F1-score, ROC-AUC',
    'Multi-layer perceptron (MLP), activation functions (ReLU, Sigmoid), feed-forward pass & Backpropagation',
  ],
  whatIsImportant: [
    'LOOCV split count on training samples AFTER subtracting any held-out test set (GATE DA 2026 Q.12)',
    'Confusion Matrix computations: Precision, Recall, $F_1$ harmonic mean, class-wise comparison (GATE DA 2026 Q.47), and ROC-AUC invariance to class imbalance',
    'MLP weight counting with/without biases: $\\sum n_{\\ell-1}n_\\ell$ (GATE DA 2026 Q.56)',
    'Active vs. Dead ReLU weight collapsing and exact Backprop partial derivatives $\\frac{\\partial y}{\\partial w_i}$ (GATE DA 2024 Q.43, 2025 Q.42)',
    'ReLU continuity & non-differentiability at $x=0$ (GATE DA 2025 Q.48) and Sigmoid vanishing gradient $\\sigma\' \\le 0.25$',
  ],
  whatIsNotImportant: [
    'CNNs (strided padding formulas), RNN/LSTM gates, Transformers, or BatchNorm running-mean implementation details (all outside GATE DA 2024–2026 syllabus)',
    'Adam / RMSProp second-moment bias-correction exponent proofs $\\hat{v}_t = v_t / (1 - \\beta_2^t)$',
    'Precision-Recall AUC interpolation variants (11-point vs step integral)',
  ],
  inboundStream:
    'Calculus (Chain Rule, ReLU kink at $0$, Sigmoid $\\sigma\' = \\sigma(1-\\sigma)$) + Probability (estimator mean/variance & conditional rates) + Ch. 1–3 regularization/complexity knobs.',
  outboundStream: [
    'Module 15 Unsupervised ML & Bayesian Networks',
    'Module 17 Full-Paper Synthesis & Multi-Topic Hybrid Drills',
  ],
  glossary: [
    {
      term: 'Bias–Variance Decomposition',
      symbol: '$\\mathbb{E}[(y - \\hat{f})^2] = \\text{Bias}^2 + \\text{Var} + \\sigma^2$',
      plainEnglish:
        'Expected squared test error splits cleanly into three pieces: $\\text{Bias}^2$ (missing the true pattern due to underfitting), $\\text{Var}$ (wobbling when training samples change due to overfitting), and irreducible noise $\\sigma^2$ that no model can ever beat.',
      tinyExample: 'If $\\text{Bias} = -0.3$, $\\text{Var} = 0.11$, and $\\sigma^2 = 0.05$, total expected MSE is $(-0.3)^2 + 0.11 + 0.05 = 0.25$.',
    },
    {
      term: '$k$-Fold & Leave-One-Out Cross-Validation (LOOCV)',
      symbol: '$\\text{LOOCV splits} = N_{\\text{train}}$',
      plainEnglish:
        'Cross-validation splits ONLY the training/development pool into $k$ equal slices, training $k$ times with one slice held out for validation each round. LOOCV is the extreme case $k = N_{\\text{train}}$, where every single training point takes a turn being the lone validation item.',
      tinyExample: 'With $1{,}000$ total samples and $100$ locked away for final testing, LOOCV runs on the remaining $900$ samples, creating $900$ splits.',
    },
    {
      term: 'Data Leakage',
      symbol: '$\\text{Train} \\cap \\text{Val} = \\varnothing$',
      plainEnglish:
        'Data leakage happens when information from validation or test samples sneaks into preprocessing (like computing feature means, standard deviations, or PCA across the entire dataset before splitting), giving falsely optimistic scores.',
      tinyExample: 'Always fit your scaler or PCA strictly inside each training fold, then apply that transformation to the validation fold.',
    },
    {
      term: 'Confusion Matrix',
      symbol: '$TP,\\; FP,\\; FN,\\; TN$',
      plainEnglish:
        'A confusion matrix is a compact grid comparing true labels (usually rows) against predicted labels (usually columns): True Positives ($TP$), False Positives ($FP$), False Negatives ($FN$), and True Negatives ($TN$).',
      tinyExample: 'With $TP=11, FP=4, FN=4, TN=11$, overall accuracy is $(11+11)/30 = 11/15$.',
    },
    {
      term: 'Precision vs. Recall',
      symbol: '$P = \\frac{TP}{TP+FP},\\; R = \\frac{TP}{TP+FN}$',
      plainEnglish:
        'Ask yourself two simple questions: Precision asks, "Out of everyone I flagged positive, how many truly were?" (column purity). Recall asks, "Out of all actual positives out there, how many did I catch?" (row coverage, also called TPR or Sensitivity).',
      tinyExample: 'If $TP = 6, FP = 2, FN = 4$, then Precision $= 6/8 = 0.75$ and Recall $= 6/10 = 0.60$.',
    },
    {
      term: '$F_1$-Score',
      symbol: '$F_1 = \\frac{2PR}{P+R} = \\frac{2TP}{2TP + FP + FN}$',
      plainEnglish:
        'The $F_1$-score is the harmonic mean of Precision and Recall. Because a harmonic mean gets dragged down by whichever number is smaller, you can only earn a high $F_1$ if BOTH Precision and Recall are strong.',
      tinyExample: 'A lazy model with $P = 0.02$ and $R = 1.0$ gets an arithmetic mean of $0.51$, yet $F_1 = \\frac{2(0.02)(1)}{1.02} \\approx 0.039$ exposes it instantly.',
    },
    {
      term: 'ROC Curve & ROC-AUC',
      symbol: '$\\text{TPR}$ vs. $\\text{FPR}$',
      plainEnglish:
        'The ROC curve traces True Positive Rate against False Positive Rate as you sweep the classification threshold from strict to lenient. Its area, ROC-AUC, equals the exact probability that a random positive example receives a higher score than a random negative example — and stays completely invariant to class imbalance!',
      tinyExample: 'On ranked scores $[0.9(+), 0.7(-), 0.6(+), 0.2(-)]$, $3$ of the $4$ $(+, -)$ pairs are in the right order, so $\\text{AUC} = 3/4 = 0.75$.',
    },
    {
      term: 'Multi-Layer Perceptron (MLP)',
      symbol: '$a^{(\\ell)} = g\\big(W^{(\\ell)} a^{(\\ell-1)} + b^{(\\ell)}\\big)$',
      plainEnglish:
        'An MLP stacks layers of linear matrix multiplications followed by nonlinear activation functions $g$. Each layer with $n_{\\ell-1}$ inputs and $n_\\ell$ outputs holds $n_{\\ell-1} n_\\ell$ weights (plus $n_\\ell$ biases if biases are included).',
      tinyExample: 'A `30–4–3–1` MLP with no biases has $30\\times 4 + 4\\times 3 + 3\\times 1 = 135$ learnable weights.',
    },
    {
      term: 'ReLU Activation & Dying ReLU',
      symbol: '$\\text{ReLU}(z) = \\max(0, z)$',
      plainEnglish:
        'ReLU acts like a one-way valve: positive pre-activations pass straight through with slope $1$, while negative ones get clamped to $0$ with slope $0$ (a "dead" neuron that blocks gradients). It is continuous everywhere on $\\mathbb{R}$, yet has a sharp corner (non-differentiable) at $z = 0$.',
      tinyExample: 'If a hidden ReLU receives $z_2 = -4 < 0$, its output is $0$ and the derivative through that branch is multiplied by $0$.',
    },
    {
      term: 'Backpropagation & Chain Rule',
      symbol: '$\\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial z}\\cdot\\frac{\\partial z}{\\partial w}$',
      plainEnglish:
        'Backpropagation is simply the multivariable Calculus Chain Rule organized backwards from the output loss to each weight, caching forward activations so we never recompute shared sub-paths.',
      tinyExample: 'In a ReLU network, once the forward pass locks gates to $1$ (active) or $0$ (dead), $\\frac{\\partial y}{\\partial w}$ is just the sum of products of weights along active paths!',
    },
    {
      term: 'Vanishing Gradient',
      symbol: '$\\sigma\'(z) = \\sigma(z)(1-\\sigma(z)) \\le 0.25$',
      plainEnglish:
        'When a deep network uses Sigmoid activations, every layer multiplies the backward gradient by at most $0.25$. Across many layers, $0.25^L$ shrinks toward zero, starving early layers of any meaningful learning signal.',
      tinyExample: 'Passing a gradient through $5$ Sigmoid layers scales it by at most $0.25^5 < 0.001$, whereas active ReLUs multiply by $1$.',
    },
    {
      term: 'Weight Decay ($L_2$ Neural Regularization)',
      symbol: '$W \\leftarrow (1 - \\eta\\lambda)W - \\eta\\nabla_W \\mathcal{L}_{\\text{data}}$',
      plainEnglish:
        'Adding a Ridge penalty $+\\frac{\\lambda}{2}\\|W\\|_F^2$ to a neural network loss shrinks every weight matrix by a small fraction $(1 - \\eta\\lambda)$ on every gradient step, keeping weights tame and reducing overfitting.',
      tinyExample: 'With $\\eta = 0.1$ and $\\lambda = 0.2$, each update gently decays existing weights by $2\\%$ before subtracting the data gradient.',
    },
  ],
  generatorId: 'mlp-backprop-gen',
  concepts: [
    {
      id: 'm14-c4-1',
      title: 'Bias-Variance Decomposition & Cross-Validation (LOOCV vs. $k$-Fold)',
      subtitle: 'Decomposing expected test error and counting validation folds without test-set leakage',
      priority: 'core-pillar',
      buildsOn: 'Probability variance identities & Ch. 1–3 regularization ($\\lambda, C, k$)',
      toyExample: {
        title: '1,000 Samples, 100 Locked in the Test Vault (GATE DA 2026 Q.12)',
        scenario:
          'You have $1{,}000$ labeled samples. You first set aside $100$ samples strictly for final testing, and decide to run **Leave-One-Out Cross-Validation (LOOCV)** on the rest. How many validation splits (training runs) happen?',
        walkthroughSteps: [
          '1. **Respect the test vault:** The $100$ test samples are NEVER touched during model selection or cross-validation!',
          '2. **Count the development pool:** $1{,}000 - 100 = 900$ samples remain.',
          '3. **Run LOOCV:** Each split trains on $899$ samples and validates on $1$ sample. Cycling through every sample gives **$900$** splits!',
          '4. **Spot the Bias-Variance contrast:** Because $899 \\approx 900$, LOOCV has very **low bias** for estimating performance on $900$ samples, yet its $900$ trained models share $898$ overlapping points (high correlation) and cost $900\\times$ training time!',
        ],
        ahaMoment:
          'Remember this golden rule of evaluation: cross-validation runs **exclusively** on your non-test development set ($N_{\\text{train}} = N_{\\text{total}} - N_{\\text{test}}$). And every complexity knob you have learned in Module 14 ($\\lambda$ in Ridge, $1/C$ in SVM, $1/k$ in $k$-NN, tree depth, MLP width) slides your model along the exact same **Bias–Variance U-curve**.',
      },
      theoremAndFormula: {
        statement:
          'For $y = f(x) + \\varepsilon$ with $\\mathbb{E}[\\varepsilon]=0,\\; \\text{Var}(\\varepsilon)=\\sigma^2$, the expected squared prediction error at $x$ decomposes into three non-negative terms: $\\text{Bias}^2 + \\text{Variance} + \\text{Irreducible Noise}$. In **$k$-Fold CV** on $m$ training samples, $k$ models are trained (each on $\\frac{k-1}{k}m$ samples); **LOOCV** is the special case $k = m$.',
        formulaLatex:
          '\\mathbb{E}\\big[(y - \\hat{f}(x))^2\\big] = \\big(\\mathbb{E}[\\hat{f}(x)] - f(x)\\big)^2 + \\text{Var}\\big(\\hat{f}(x)\\big) + \\sigma^2',
        plainEnglishDecoding:
          'Even the fanciest neural network on earth can never push expected test MSE below the noise floor $\\sigma^2$. As you increase model flexibility, $\\text{Bias}^2$ falls while $\\text{Var}$ climbs, creating a sweet spot in the middle. Also watch out for **data leakage**: scaling features or fitting PCA *before* splitting CV folds lets validation information peek into training.',
        workedMiniExamples: [
          {
            prompt:
              'At a test point $x_0$, an estimator has $\\mathbb{E}[\\hat{f}(x_0)] = 4.2$ when true $f(x_0) = 4.5$, $\\text{Var}(\\hat{f}(x_0)) = 0.11$, and irreducible noise variance $\\sigma^2 = 0.05$. Find total expected MSE.',
            solution:
              '$\\text{Bias} = 4.2 - 4.5 = -0.3 \\implies \\text{Bias}^2 = 0.09$. Total MSE $= 0.09 + 0.11 + 0.05 = 0.25$.',
          },
          {
            prompt:
              'On $1{,}000$ total samples ($200$ held out for testing), you run $5$-fold CV across $4$ candidate values of Ridge $\\lambda$. How many models are trained during CV?',
            solution:
              'Training pool $= 1000 - 200 = 800$. $5$ folds $\\times$ $4$ hyperparameter settings $= 20$ CV models (plus $1$ final refit on all $800$ if counted separately).',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'LOOCV always produces lower variance in its error estimate than $5$-fold or $10$-fold CV.',
          reality:
            'False! Because the $m$ LOOCV training sets overlap by $m-2$ points, the $m$ validation errors are strongly correlated, which can give LOOCV **higher** variance than $10$-fold CV (while $10$-fold is faster and often lower variance).',
          counterExample:
            'Classic Breiman / Hastie-Tibshirani finding: $5$- or $10$-fold CV is preferred in practice over LOOCV ($k=m$) for both speed and variance.',
        },
        {
          myth: 'With infinite training data, a model’s test MSE drops to $0$.',
          reality:
            'False! Even if $\\text{Bias}^2 \\to 0$ and $\\text{Var} \\to 0$, expected MSE hits the hard floor $\\sigma^2 > 0$.',
          counterExample:
            'If $y = 2x + \\varepsilon$ with $\\varepsilon \\sim \\mathcal{N}(0, 4)$, optimal MSE is still $4$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML',
          targetWeek: 7,
          topic: 'Model Selection Metrics ($P, R, F_1$, AUC) Inside CV Folds',
          whyItMatters:
            'When classes are imbalanced, picking CV hyperparameters by raw accuracy fails — we select models using $F_1$ or ROC-AUC inside each validation fold.',
          pyqProof: 'GATE DA 2026 Q.12 (LOOCV count) & Q.37 (Ridge bias-variance)',
        },
      ],
    },
    {
      id: 'm14-c4-2',
      title: 'Confusion Matrix, Precision, Recall, $F_1$ & ROC-AUC',
      subtitle: 'Row vs. column ratios on imbalanced data and ranking probabilities via ROC concordance',
      priority: 'core-pillar',
      buildsOn: 'Conditional probabilities $P(\\hat{Y}=1 \\mid Y=1)$ vs $P(Y=1 \\mid \\hat{Y}=1)$',
      toyExample: {
        title: '30 Stories: Fiction vs. Non-Fiction (GATE DA 2026 Q.47 Pattern)',
        scenario:
          'Suppose a classifier tests $30$ stories ($15$ true `Fiction`, $15$ true `Non-Fiction`). It gets $11$ `Fiction` right (missing $4$ as `Non-Fiction`) and $11$ `Non-Fiction` right (mislabeling $4$ as `Fiction`).',
        walkthroughSteps: [
          '1. **Draw the $2\\times 2$ matrix:** $\\text{TP}_{\\text{Fic}} = 11,\\; \\text{FN}_{\\text{Fic}} = 4,\\; \\text{FP}_{\\text{Fic}} = 4,\\; \\text{TN}_{\\text{Fic}} = 11$.',
          '2. **Overall Accuracy:** $\\frac{11 + 11}{30} = \\frac{22}{30} = \\frac{11}{15} \\approx 0.733$.',
          '3. **Precision (Column = "of predicted Fiction, how many are true?"):** $\\frac{11}{11+4} = \\frac{11}{15}$.',
          '4. **Recall (Row = "of actual Fiction, how many did we catch?"):** $\\frac{11}{11+4} = \\frac{11}{15}$.',
          '5. **Notice asymmetric cases!** If `Non-Fiction` had `12 TN, 3 FP` instead, Fiction Precision $= \\frac{11}{14}$ while Fiction Recall $= \\frac{11}{15}$ — and `Non-Fiction` Recall $= \\frac{12}{15}$ while `Non-Fiction` Precision $= \\frac{12}{16} = \\frac{3}{4}$!',
        ],
        ahaMoment:
          'Keep rows and columns straight with one simple anchor: **Recall** divides by the **actual** positive row total ($TP + FN$, untouched by how many negatives exist), while **Precision** divides by the **predicted** positive column total ($TP + FP$, which directly absorbs false alarms from the negative class).',
      },
      theoremAndFormula: {
        statement:
          'For positive class $1$: $\\text{Precision} = \\frac{TP}{TP+FP}$, $\\text{Recall (TPR)} = \\frac{TP}{TP+FN}$, $\\text{FPR} = \\frac{FP}{FP+TN} = 1 - \\text{Specificity}$. The **$F_1$-score** is the **harmonic mean** of Precision and Recall. The **ROC curve** plots $\\text{TPR}$ vs $\\text{FPR}$ as the decision threshold sweeps from $\\infty$ to $-\\infty$; its area **ROC-AUC** equals the probability that a random positive example scores higher than a random negative example.',
        formulaLatex:
          'F_1 = \\frac{2 \\cdot P \\cdot R}{P + R} = \\frac{2TP}{2TP + FP + FN}, \\qquad \\text{AUC} = \\mathbb{P}\\big(s(x^+) > s(x^-)\\big) + \\frac{1}{2}\\mathbb{P}\\big(s(x^+) = s(x^-)\\big)',
        plainEnglishDecoding:
          'Why do we use a harmonic mean for $F_1$? Suppose a naive detector yells "Positive!" on every single input ($P = 0.02, R = 1.00$): an ordinary average flatters it with $0.51$, whereas $F_1 = \\frac{2(0.02)(1)}{1.02} \\approx 0.039$ immediately calls out the weak model. And for ROC-AUC on small GATE lists, skip plotting curves — just count how many $(+, -)$ pairs are ordered correctly!',
        workedMiniExamples: [
          {
            prompt:
              'A classifier outputs $TP = 6, FP = 2, FN = 4, TN = 8$. Compute Precision, Recall, and $F_1$.',
            solution:
              '$P = \\frac{6}{6+2} = 0.75$, $R = \\frac{6}{6+4} = 0.60$. Using $\\frac{2TP}{2TP+FP+FN} = \\frac{12}{12+2+4} = \\frac{12}{18} = \\frac{2}{3} \\approx 0.667$.',
          },
          {
            prompt:
              'Four samples sorted by predicted score are $[0.9(+),\\; 0.7(-),\\; 0.6(+),\\; 0.2(-)]$. Compute the exact ROC-AUC.',
            solution:
              'There are $2 \\times 2 = 4$ positive-negative pairs: $(0.9, 0.7)$ wins, $(0.9, 0.2)$ wins, $(0.6, 0.7)$ loses, $(0.6, 0.2)$ wins. $3$ out of $4$ pairs are ordered correctly $\\implies \\text{AUC} = \\frac{3}{4} = 0.75$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If we duplicate every negative sample $10\\times$ (changing class imbalance from 1:1 to 1:10), ROC-AUC drops drastically just like Precision.',
          reality:
            'False! Both axes of ROC ($\\text{TPR} = \\frac{TP}{P}$ and $\\text{FPR} = \\frac{FP}{N}$) normalize within each class separately, so **ROC-AUC is completely invariant to class imbalance** (unlike Precision and PR-AUC)!',
          counterExample:
            'Multiplying $FP$ and $TN$ both by $10$ leaves $\\text{FPR} = \\frac{10FP}{10FP + 10TN}$ unchanged, while $\\text{Precision} = \\frac{TP}{TP + 10FP}$ plummets.',
        },
        {
          myth: 'In multi-class problems, overall Accuracy equals the unweighted average of per-class Precisions.',
          reality:
            'False! Accuracy equals **Micro-averaged** Precision (= Micro-Recall = Micro-$F_1$ in single-label multi-class), NOT Macro-averaged Precision (unless all classes have equal predicted counts).',
          counterExample:
            'In binary $(TP=9, FN=1, FP=0, TN=0)$, Acc $= 0.9$, while Class-1 Prec $= 1.0$ and Class-0 Prec $= 0$, average $= 0.5 \\neq 0.9$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1: Stats / Sec 6: ML',
          targetWeek: 7,
          topic: 'Hypothesis Testing Error Rates & Threshold Calibration',
          whyItMatters:
            '$\\text{FPR}$ is identical to Type I error $\\alpha$, and $\\text{TPR (Recall)}$ is Statistical Power $1 - \\beta$ — unifying Module 5 hypothesis tests with ML evaluation!',
          pyqProof: 'GATE DA 2026 Q.47 (Confusion matrix accuracy, precision & recall)',
        },
      ],
    },
    {
      id: 'm14-c4-3',
      title: 'Multi-Layer Perceptron (MLP): Parameters, ReLU & Backpropagation',
      subtitle: 'Weight counting, collapsing active ReLUs, and tracing Chain Rule gradients backward past dead neurons',
      priority: 'core-pillar',
      buildsOn: 'Calculus Chain Rule, Sigmoid $\\sigma\'=\\sigma(1-\\sigma)$, & ReLU $\\max(0,z)$ (Module 1 Calculus)',
      toyExample: {
        title: 'Two-Unit ReLU Network: One Neuron Alive, One Neuron Dead (GATE DA 2025 Q.42 Pattern)',
        scenario:
          'Consider a tiny ReLU network with inputs $u = 2, v = 3$: Hidden neuron 1 is $h_1 = \\text{ReLU}(a u + b v)$ with $a = 2, b = 1$; Hidden neuron 2 is $h_2 = \\text{ReLU}(c u + d v)$ with $c = 1, d = -2$; Output is $y = 4 h_1 + 5 h_2$ (no biases). What are $\\frac{\\partial y}{\\partial a}$ and $\\frac{\\partial y}{\\partial c}$?',
        walkthroughSteps: [
          '1. **Forward pass — check pre-activations:**\n   - $z_1 = 2(2) + 1(3) = +7 > 0 \\implies h_1 = 7$ (**ACTIVE**: local ReLU slope $= 1$).\n   - $z_2 = 1(2) + (-2)(3) = -4 < 0 \\implies h_2 = 0$ (**DEAD**: local ReLU slope $= 0$!).',
          '2. **Backward pass for $a$ (through active $h_1$):** $\\frac{\\partial y}{\\partial a} = \\frac{\\partial y}{\\partial h_1} \\cdot \\frac{\\partial h_1}{\\partial z_1} \\cdot \\frac{\\partial z_1}{\\partial a} = 4 \\cdot (1) \\cdot u = 4 \\cdot 1 \\cdot 2 = 8$!',
          '3. **Backward pass for $c$ (through dead $h_2$):** $\\frac{\\partial y}{\\partial c} = 5 \\cdot (0) \\cdot u = 0$!',
        ],
        ahaMoment:
          'Once you run the numerical forward pass, Backpropagation on a ReLU network becomes wonderfully simple: just **multiply the edge weights along every active path** from your parameter $w$ to the output $y$. Any path touching a dead neuron ($z < 0$) gets snipped cleanly by $\\times 0$!',
      },
      theoremAndFormula: {
        statement:
          'In an $L$-layer fully connected MLP with widths $n_0, n_1, \\dots, n_L$: total learnable parameters equal $\\sum_{\\ell=1}^L n_{\\ell-1} n_\\ell$ (**without biases**) or $\\sum_{\\ell=1}^L (n_{\\ell-1} + 1) n_\\ell$ (**with biases**). Activation $\\text{ReLU}(z) = \\max(0, z)$ is **continuous on all of $\\mathbb{R}$** and differentiable everywhere **except at $z = 0$** (left derivative $0$, right derivative $1$ — GATE DA 2025 Q.48). During Backpropagation, error signals $\\delta^{(\\ell)}$ flow backward via the transpose of weight matrices multiplied elementwise by activation derivatives.',
        formulaLatex:
          '\\delta^{(\\ell)} = \\big((W^{(\\ell+1)})^\\top \\delta^{(\\ell+1)}\\big) \\odot g\'(z^{(\\ell)}), \\qquad \\frac{\\partial \\mathcal{L}}{\\partial W^{(\\ell)}} = \\delta^{(\\ell)} (a^{(\\ell-1)})^\\top',
        plainEnglishDecoding:
          'See how Calculus directly explains deep-learning behavior here! If $g$ is **Sigmoid**, $g\'(z) = \\sigma(z)(1-\\sigma(z))$ can never exceed $0.25$, so chaining $5$ Sigmoid layers shrinks backward gradients by $0.25^5 < 0.001$ (the **vanishing gradient** problem). Switching to **ReLU** keeps active slopes at $1$ so gradients flow freely — and notice one bonus exam trick: whenever all inputs keep every ReLU active ($z > 0$), stacked zero-bias ReLU layers collapse into one plain matrix product $W_2 W_1$ (GATE DA 2024 Q.43)!',
        workedMiniExamples: [
          {
            prompt:
              '(GATE DA 2026 Q.56) Count the total learnable parameters in a `30–4–3–1` fully connected feed-forward neural network with NO bias terms.',
            solution:
              'Layer 1: $30 \\times 4 = 120$; Layer 2: $4 \\times 3 = 12$; Layer 3: $3 \\times 1 = 3$. Total $= 120 + 12 + 3 = 135$. (With biases it would be $135 + 4 + 3 + 1 = 143$.)',
          },
          {
            prompt:
              '(GATE DA 2024 Q.43 Pattern) A zero-bias 2-layer ReLU MLP has $h = \\text{ReLU}(W_1 x)$ with $W_1 = \\begin{bmatrix}2 & 1\\\\ 1 & 3\\end{bmatrix}$ and $y = \\text{ReLU}(w_2^\\top h)$ with $w_2 = [3, 2]^\\top$. For strictly positive inputs $x_1, x_2 > 0$, simplify $y = p x_1 + q x_2$.',
            solution:
              'Since all weights and $x_1, x_2 > 0$, every pre-activation is strictly positive, so every $\\text{ReLU}(z) = z$. Thus $y = w_2^\\top W_1 x = [3, 2]\\begin{bmatrix}2 & 1\\\\ 1 & 3\\end{bmatrix}x = [8,\\; 9]x$, giving $(p, q) = (8, 9)$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: '$\\text{ReLU}(x) = \\max(0, x)$ is smooth (differentiable everywhere on $\\mathbb{R}$) and discontinuous at $0$.',
          reality:
            'Exact opposite! ReLU is **continuous everywhere** ($\\lim_{x\\to 0^-} 0 = 0 = \\lim_{x\\to 0^+} x$), and **NOT differentiable at $x = 0$** (left derivative $0 \\neq 1$ right derivative — GATE DA 2025 Q.48!).',
          counterExample:
            'At $x = 0$: $\\text{ReLU}(0) = 0$ matches both sides, yet slope jumps from $0$ to $1$.',
        },
        {
          myth: 'Adding 10 hidden ReLU layers automatically creates nonlinear decision boundaries even if every neuron stays active ($z > 0$) on all inputs.',
          reality:
            'False! Where every ReLU satisfies $z > 0$, $\\text{ReLU}(z) = z$ is the identity map, so $W_L \\cdots W_2 W_1 x$ collapses to a single **linear** transformation (GATE DA 2024 Q.43)! Nonlinearity comes strictly from the switching boundary $z = 0$!',
          counterExample:
            'On positive orthant $x > 0$ with all-positive weights, any depth of zero-bias ReLUs equals one linear layer.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6: ML / Full Synthesis',
          targetWeek: 8,
          topic: 'Module 17 Cross-Topic Synthesis (Calculus Chain Rule + Linear Algebra + ML)',
          whyItMatters:
            'MLP Backprop is the ultimate synthesis of Module 1 (Sigmoid/ReLU derivatives), Module 6 (matrix transposes), and Module 14 (regularized SGD optimization).',
          pyqProof: 'GATE DA 2024 Q.43, 2025 Q.42 & Q.48, 2026 Q.56',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm14-c4-ht1',
      title: 'Active vs. Dead Path Tracing in ReLU Neural Networks',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2024 · Q.43', 'GATE DA 2025 · Q.42', 'GATE DA 2025 · Q.48'],
      problemStatement:
        'Given a small 2–3 layer ReLU MLP diagram with weights $(a, b, \\dots)$ and specific input values $(u, v)$, find a collapsed linear formula or exact partial derivative $\\frac{\\partial y}{\\partial w}$.',
      triggerCue:
        'Spot **"ReLU units"** in a **small directed MLP graph** asking for $\\frac{\\partial y}{\\partial w}$ or collapsed coefficients $(p, q, r)$.',
      bruteForceTrap:
        'Writing general symbolic piecewise equations for every ReLU node before substituting the given numbers $(u, v)$.',
      mentalShift:
        'Run a **numerical forward pass FIRST**! Every neuron immediately collapses into either a plain wire ($\\times 1$ if $z > 0$) or an open cut ($\\times 0$ if $z < 0$). Once dead gates are crossed out with a red X, any partial derivative is just the sum of products of weights along active paths from $w$ to $y$!',
      steps: [
        {
          label: 'Compute pre-activation $z$ at every hidden node',
          detail:
            'Mark $z > 0$ as ACTIVE (`×1`) and $z < 0$ as DEAD (`×0`).',
        },
        {
          label: 'Prune every edge out of a dead node',
          detail:
            'Any weight feeding into or out of a dead hidden node gets derivative $0$ immediately (e.g., $\\frac{\\partial y}{\\partial f} = 0$ in GATE DA 2025 Q.42).',
        },
        {
          label: 'Multiply along active paths',
          detail:
            '$\\frac{\\partial y}{\\partial w_{ij}} = (\\text{input } a_j) \\times \\sum_{\\text{active paths } i \\to y} \\prod \\text{downstream weights}$.',
        },
      ],
      lockInTakeaway:
        'Forward pass locks the ReLU gates to `{0, 1}`; once gates are locked, backpropagation is just multiplying weights along surviving paths.',
    },
    {
      id: 'm14-c4-ht2',
      title: 'Threshold-Free ROC-AUC via Inversion Counting & Asymmetric Matrix Checks',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2026 · Q.47'],
      problemStatement:
        'Given a $2\\times 2$ (or $C\\times C$) confusion matrix comparing precision/recall across classes, or a small list of predicted probabilities with true labels, evaluate Precision, Recall, $F_1$, or ROC-AUC.',
      triggerCue:
        'Spot **"Confusion matrix"**, **"class-wise precision/recall"**, or **"ROC-AUC on $n$ scored items"**.',
      bruteForceTrap:
        'Sweeping 10 different thresholds to draw an entire ROC staircase and summing trapezoids.',
      mentalShift:
        'For ROC-AUC on a small list of scores, skip plotting completely: count how many $(+, -)$ pairs satisfy $\\text{score}(+) > \\text{score}(-)$ (counting ties as $0.5$) and divide by $N_+ \\cdot N_-$. For multi-class confusion matrices, treat each class $k$ as its own "1-vs-rest" row (Recall) vs column (Precision).',
      steps: [
        {
          label: 'Check row vs column orientation',
          detail:
            'Confirm whether rows = Actual and columns = Predicted (standard) or transposed before dividing!',
        },
        {
          label: 'Compute $F_1$ via counts directly',
          detail:
            'Skip intermediate decimals: $F_1 = \\frac{2TP}{2TP + FP + FN}$ prevents rounding error.',
        },
        {
          label: 'Compute AUC by pairwise concordance',
          detail:
            '$\\text{AUC} = \\frac{\\#\\{(+, -) : s_+ > s_-\\} + 0.5\\#\\{s_+ = s_-\\}}{N_+ N_-}$.',
        },
      ],
      lockInTakeaway:
        'Pairwise concordance computes exact ROC-AUC in 15 seconds with zero threshold sweeping.',
    },
  ],
  arsenalCards: [
    {
      id: 'm14-c4-a1',
      badge: 'Bias-Variance & CV',
      whenYouSpot: 'Expected MSE decomposition, LOOCV / $k$-Fold split counts, or complexity curves',
      directWeaponLatex: '\\mathbb{E}[(y-\\hat{f})^2] = \\text{Bias}^2 + \\text{Var} + \\sigma^2, \\qquad \\text{LOOCV splits} = N_{\\text{total}} - N_{\\text{test}}',
      instantRule:
        'Hold-out test data NEVER enters CV splits; irreducible noise $\\sigma^2$ cannot be removed by any model.',
      tenSecondExample:
        '1000 samples with 100 test holdout $\\implies 900$ LOOCV splits (GATE DA 2026 Q.12).',
      oneFatalTrap:
        'Including held-out test samples in LOOCV count, or normalizing features on all data before splitting CV folds.',
    },
    {
      id: 'm14-c4-a2',
      badge: 'Confusion & ROC-AUC',
      whenYouSpot: 'Precision, Recall, $F_1$, Accuracy, or ROC-AUC on scored predictions',
      directWeaponLatex: 'P = \\frac{TP}{TP+FP}, \\quad R = \\frac{TP}{TP+FN}, \\quad F_1 = \\frac{2TP}{2TP+FP+FN}, \\quad \\text{AUC} = \\frac{\\text{concordant pairs}}{N_+ N_-}',
      instantRule:
        'Recall is row-based (actual positives caught); Precision is column-based (predicted positive purity); ROC-AUC is invariant to class imbalance.',
      tenSecondExample:
        'Scores `[0.9(+), 0.7(-), 0.6(+), 0.2(-)]`: 3 of 4 $(+,-)$ pairs ordered correctly $\\implies \\text{AUC} = 0.75$.',
      oneFatalTrap:
        'Averaging $P$ and $R$ arithmetically instead of harmonically for $F_1$, or forgetting to verify if matrix rows/cols are transposed.',
    },
    {
      id: 'm14-c4-a3',
      badge: 'MLP & Backprop',
      whenYouSpot: 'Layer width parameter counts, ReLU continuity/differentiability, or $\\frac{\\partial y}{\\partial w}$',
      directWeaponLatex: '\\text{Weights (no bias)} = \\sum_{\\ell=1}^L n_{\\ell-1}n_\\ell, \\qquad \\text{ReLU}\'(z) = \\begin{cases}1 & z>0\\\\ 0 & z<0\\end{cases}',
      instantRule:
        'ReLU is continuous everywhere, NOT differentiable at $0$; forward pass locks gates `{0,1}` so dead branches have zero gradient.',
      tenSecondExample:
        '`30–4–3–1` MLP (no biases): $30\\cdot 4 + 4\\cdot 3 + 3\\cdot 1 = 120 + 12 + 3 = 135$ (GATE DA 2026 Q.56).',
      oneFatalTrap:
        'Adding bias parameters when the question explicitly says "no biases", or missing that dead ReLU ($z < 0$) zeroes all upstream gradients.',
    },
  ],
  questions: [
    {
      id: 'm14-c4-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #4',
      marks: 1,
      type: 'NAT',
      stem: 'A binary classifier yields $TP = 12,\\; FP = 4,\\; FN = 8,\\; TN = 16$. Compute its $F_1$-score (rounded to 2 decimal places).',
      natAnswer: { min: 0.66, max: 0.67, exactDisplay: '2/3 ≈ 0.67' },
      triggerHint: 'Use the exact count formula $F_1 = \\frac{2TP}{2TP + FP + FN}$.',
      intuitiveSolution: [
        '$P = \\frac{12}{12+4} = 0.75$, $R = \\frac{12}{12+8} = 0.60$.',
        '$F_1 = \\frac{2(12)}{2(12) + 4 + 8} = \\frac{24}{36} = \\frac{2}{3} \\approx 0.667 \\to 0.67$.',
      ],
      directShortcutUsed: '$F_1 = \\frac{2TP}{2TP + FP + FN}$',
    },
    {
      id: 'm14-c4-q2',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.12',
      year: 2026,
      marks: 1,
      type: 'NAT',
      stem: 'A dataset has $1{,}000$ samples, out of which $100$ samples are reserved strictly as a held-out test set. Leave-One-Out Cross-Validation (LOOCV) is performed on the remaining data. How many validation splits (training-validation iterations) are created?',
      natAnswer: { min: 899.9, max: 900.1, exactDisplay: '900' },
      triggerHint: 'Exclude the held-out test set first; LOOCV runs once per remaining training sample.',
      intuitiveSolution: [
        'Training/validation pool size $= 1{,}000 - 100 = 900$ samples.',
        'LOOCV leaves out $1$ sample at a time for validation and trains on $899$, yielding exactly $900$ validation splits.',
      ],
      directShortcutUsed: 'LOOCV iterations $= N_{\\text{total}} - N_{\\text{test}}$',
    },
    {
      id: 'm14-c4-q3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.56',
      year: 2026,
      marks: 2,
      type: 'NAT',
      stem: 'Consider a fully connected feed-forward Multi-Layer Perceptron (MLP) with architecture $30 - 4 - 3 - 1$ ($30$ input features, two hidden layers of sizes $4$ and $3$, and $1$ output unit) with **no bias terms**. Find the total number of learnable parameters.',
      natAnswer: { min: 134.9, max: 135.1, exactDisplay: '135' },
      triggerHint: 'Sum consecutive layer-width products $n_{\\ell-1} \\cdot n_\\ell$; do NOT add $+1$ biases.',
      intuitiveSolution: [
        'Input $\\to$ Hidden 1: $30 \\times 4 = 120$.',
        'Hidden 1 $\\to$ Hidden 2: $4 \\times 3 = 12$.',
        'Hidden 2 $\\to$ Output: $3 \\times 1 = 3$.',
        'Total learnable weights $= 120 + 12 + 3 = 135$.',
      ],
      directShortcutUsed: '$\\sum_{\\ell=1}^L n_{\\ell-1} n_\\ell$',
    },
    {
      id: 'm14-c4-q4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.48',
      year: 2025,
      marks: 2,
      type: 'MSQ',
      stem: 'Consider the ReLU activation function $f(x) = \\max(x, 0)$ for $x \\in \\mathbb{R}$. Which of the following statements is/are TRUE?',
      options: [
        {
          id: 'A',
          text: '$f(x)$ is continuous for all $x \\in \\mathbb{R}$.',
          whyTrueOrFalse: 'True — $\\lim_{x\\to 0^-} f(x) = 0 = f(0) = \\lim_{x\\to 0^+} f(x)$, and it is linear elsewhere.',
        },
        {
          id: 'B',
          text: '$f(x)$ is differentiable at $x = 0$.',
          whyTrueOrFalse: 'False — left-hand derivative $f\'_-(0) = 0 \\neq 1 = f\'_+(0)$.',
        },
        {
          id: 'C',
          text: '$f(x)$ is NOT differentiable at $x = 0$.',
          whyTrueOrFalse: 'True — sharp corner at the origin.',
        },
        {
          id: 'D',
          text: '$f(x)$ is strictly increasing on all of $\\mathbb{R}$.',
          whyTrueOrFalse: 'False — it is constant ($0$) on $(-\\infty, 0]$, so only non-decreasing.',
        },
      ],
      correctOptions: ['A', 'C'],
      triggerHint: 'Check left/right limits vs left/right slopes at the kink $x = 0$.',
      intuitiveSolution: [
        'At $x = 0$, both one-sided limits equal $0 = f(0)$, so $f$ is continuous everywhere on $\\mathbb{R}$ (A).',
        'However, the left derivative is $0$ while the right derivative is $1$, so $f$ is NOT differentiable at $x = 0$ (C).',
      ],
      directShortcutUsed: 'Piecewise Continuity vs Corner Differentiability Check',
    },
    {
      id: 'm14-c4-q5',
      tier: 'tricky',
      sourceLabel: 'GATE DA 2025 · Q.42 Pattern',
      marks: 2,
      type: 'MCQ',
      stem: 'In a zero-bias ReLU network with inputs $(u, v) = (2, 3)$, hidden unit 1 computes $h_1 = \\text{ReLU}(a u + b v)$ with $(a, b) = (1, 2)$, hidden unit 2 computes $h_2 = \\text{ReLU}(c u + d v)$ with $(c, d) = (1, -2)$, and the output is $y = \\text{ReLU}(4 h_1 + 3 h_2)$. What is the ordered pair $\\left(\\frac{\\partial y}{\\partial a},\\; \\frac{\\partial y}{\\partial c}\\right)$ at $(u, v) = (2, 3)$?',
      options: [
        {
          id: 'A',
          text: '$(8, 0)$',
          whyTrueOrFalse: 'True — $h_1$ is active ($z_1 = 8 > 0$) so $\\frac{\\partial y}{\\partial a} = 4 \\cdot 1 \\cdot u = 8$, while $h_2$ is dead ($z_2 = -4 < 0$) so $\\frac{\\partial y}{\\partial c} = 0$.',
        },
        {
          id: 'B',
          text: '$(8, 6)$',
          whyTrueOrFalse: 'False — forgets that $h_2$ has negative pre-activation $2 - 6 = -4 < 0$, killing its ReLU derivative to $0$.',
        },
        {
          id: 'C',
          text: '$(4, 0)$',
          whyTrueOrFalse: 'False — forgets to multiply by the input $u = 2$ in $\\frac{\\partial z_1}{\\partial a} = u$.',
        },
        {
          id: 'D',
          text: '$(12, 0)$',
          whyTrueOrFalse: 'False — uses $v = 3$ instead of $u = 2$ for $\\frac{\\partial z_1}{\\partial a}$.',
        },
      ],
      correctOptions: ['A'],
      triggerHint: 'Run the numerical forward pass at $(u,v) = (2,3)$ first to see which ReLU gates are $1$ vs $0$.',
      intuitiveSolution: [
        'Forward pass at $(u, v) = (2, 3)$: $z_1 = 1(2) + 2(3) = 8 > 0 \\implies h_1 = 8$ (gate $= 1$); $z_2 = 1(2) - 2(3) = -4 < 0 \\implies h_2 = 0$ (gate $= 0$).',
        'Output pre-activation $4(8) + 3(0) = 32 > 0 \\implies$ output ReLU gate $= 1$.',
        'Backprop: $\\frac{\\partial y}{\\partial a} = 1 \\cdot 4 \\cdot 1 \\cdot u = 4(2) = 8$; $\\frac{\\partial y}{\\partial c} = 1 \\cdot 3 \\cdot 0 \\cdot u = 0$.',
      ],
      directShortcutUsed: 'Forward Gate Locking + Path Multiplication',
    },
    {
      id: 'm14-c4-q6',
      tier: 'tricky',
      sourceLabel: 'GATE DA 2026 · Q.47 Pattern (MSQ)',
      marks: 2,
      type: 'MSQ',
      stem: 'A binary classifier evaluated on $30$ stories ($15$ `Fiction`, $15$ `Non-Fiction`) correctly predicts $11$ `Fiction` and $11$ `Non-Fiction` stories (with $4$ misclassifications in each class). Which of the following statements is/are TRUE?',
      options: [
        {
          id: 'A',
          text: 'The overall classification accuracy is $\\frac{11}{15}$.',
          whyTrueOrFalse: 'True — $(11 + 11)/30 = 22/30 = 11/15$.',
        },
        {
          id: 'B',
          text: 'Precision for `Fiction` equals Recall for `Fiction` ($= \\frac{11}{15}$).',
          whyTrueOrFalse: 'True — $TP = 11,\\; FP = 4,\\; FN = 4 \\implies P = R = 11/15$.',
        },
        {
          id: 'C',
          text: 'The $F_1$-score for `Fiction` is strictly greater than $\\frac{11}{15}$.',
          whyTrueOrFalse: 'False — when $P = R = \\frac{11}{15}$, their harmonic mean $F_1$ equals $\\frac{11}{15}$ identically.',
        },
        {
          id: 'D',
          text: 'If all `Non-Fiction` stories were duplicated $5\\times$ without changing per-class error rates, the ROC-AUC would remain unchanged while `Fiction` Precision would drop.',
          whyTrueOrFalse: 'True — TPR and FPR are invariant to class prevalence scaling, whereas $\\text{Precision} = \\frac{TP}{TP + 5FP}$ drops.',
        },
      ],
      correctOptions: ['A', 'B', 'D'],
      triggerHint: 'Check $TP, FP, FN, TN$ symmetry, $F_1(p, p) = p$, and class-imbalance invariance of ROC.',
      intuitiveSolution: [
        '(A) True: Overall accuracy $= \\frac{11+11}{30} = \\frac{11}{15}$.',
        '(B) True: $FP = FN = 4$, so $P = \\frac{11}{11+4} = \\frac{11}{15}$ and $R = \\frac{11}{11+4} = \\frac{11}{15}$.',
        '(C) False: Harmonic mean of two equal numbers is that same number: $F_1 = \\frac{11}{15}$.',
        '(D) True: ROC-AUC depends only on class-conditional $\\text{TPR}$ and $\\text{FPR}$, whereas $\\text{Precision}$ drops from $\\frac{11}{15}$ to $\\frac{11}{11+20} = \\frac{11}{31}$.',
      ],
      directShortcutUsed: 'Confusion Symmetry + ROC Imbalance Invariance',
    },
  ],
}

export const MODULE_14_CHAPTERS: ChapterData[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
]

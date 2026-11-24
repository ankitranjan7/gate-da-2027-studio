import type { ChapterData } from '../../types/curriculum'

const chapter1: ChapterData = {
  id: 'prob1-ch1',
  number: 1,
  title: 'Counting, Stars-and-Bars & Inclusion-Exclusion',
  shortTitle: 'Counting & Stars-and-Bars',
  estimatedHours: 3.5,
  dayLabel: 'Week 2 · Day 1',
  tagline:
    'Before we calculate a single probability, let’s make sure you can count finite outcomes cleanly without ever double-counting: you will learn complement flips, Stars-and-Bars dividers, Inclusion-Exclusion overlaps, and permutation cycle structure.',
  syllabusMapping: [
    'Counting (permutations and combinations)',
    'Finite sample spaces and equally likely outcomes',
  ],
  whatIsImportant: [
    'Complement counting ($|A| = |\\Omega| - |A^c|$) for "at least one", non-empty subsets, and even-product parity (GATE 2026 Q.19)',
    'Stars-and-Bars for non-negative ($n_i \\ge 0$) vs. strictly positive ($n_i \\ge 1$) integer solutions (GATE 2026 Q.20)',
    'Permutation cycle types & involutions $f(f(n)) = n$ using fixed points and 2-cycles (GATE 2026 Q.33)',
    'Inclusion-Exclusion for 2–3 overlapping sets, digit divisibility (GATE 2024 Q.3), and upper-bounded Stars-and-Bars',
  ],
  whatIsNotImportant: [
    'Burnside’s lemma, Polya enumeration, and Stirling numbers of the second kind (0 GATE DA marks)',
    'Heavy generating-function coefficient extraction for 6+ constraints',
  ],
  inboundStream:
    'Module 1 (Functions, Bijections, Involutions & Basic Set Cardinality)',
  outboundStream: [
    'Ch.2 Finite Sample Space Probabilities & Conditioning',
    'Ch.3 Binomial Trials & Independent Events',
    'Week 4–5 DSA Combinatorial Complexity & Hash Collisions',
    'Week 7 Naive Bayes Word Counts & Model Parameter Counting (GATE 2024 Q.20)',
  ],
  glossary: [
    {
      term: 'Sample Space',
      symbol: '$\\Omega$',
      plainEnglish:
        'Think of this as the complete menu of every single outcome an experiment could possibly produce. Before you count a subset of outcomes, you always want to know the exact size $|\\Omega|$ of your whole universe.',
      tinyExample: 'Rolling one fair die gives $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$, so $|\\Omega| = 6$.',
    },
    {
      term: 'Multiplication Rule',
      plainEnglish:
        'When a choice happens in independent stages—pick A, then pick B—you multiply the number of options at each stage instead of adding them.',
      tinyExample: 'Picking $1$ of $3$ shirts and $1$ of $4$ trousers gives $3 \\times 4 = 12$ outfits.',
    },
    {
      term: 'Permutation',
      symbol: '$P(n, r)$',
      plainEnglish:
        'An ordered arrangement of $r$ items chosen from $n$ distinct items. Use permutations whenever swapping two people or labels creates a genuinely different outcome (like President vs. Vice-President).',
      tinyExample: 'Awarding Gold and Silver medals among $5$ runners gives $P(5,2) = 5 \\times 4 = 20$ ways.',
    },
    {
      term: 'Combination',
      symbol: '$\\binom{n}{r}$',
      plainEnglish:
        'An unordered team of $r$ items picked from $n$ distinct items. Because the internal order does not matter, you take the ordered count $P(n,r)$ and divide out the $r!$ ways the same team can be shuffled.',
      tinyExample: 'Picking a $2$-person study pair from $5$ students gives $\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10$ teams.',
    },
    {
      term: 'Power Set & Subset Count',
      symbol: '$|\\mathcal{P}(S)| = 2^{|S|}$',
      plainEnglish:
        'Every element in a set $S$ faces a simple binary toggle: either it is IN your subset or it is OUT. Multiplying $2$ choices per element gives $2^{|S|}$ subsets total—and subtracting $1$ removes the empty set $\\emptyset$.',
      tinyExample: 'For $S = \\{1, 2, 3\\}$, there are $2^3 = 8$ subsets and $2^3 - 1 = 7$ non-empty subsets.',
    },
    {
      term: 'Complement Counting',
      symbol: '$|A| = |\\Omega| - |A^c|$',
      plainEnglish:
        'Instead of painfully counting all the messy ways an event can happen, you count the tiny opposite world where it completely fails, then subtract from the total.',
      tinyExample: 'Among $7$ non-empty subsets of $\\{1,2,3\\}$, $3$ use only odd numbers, so $7 - 3 = 4$ have an even product.',
    },
    {
      term: 'Stars-and-Bars',
      symbol: '$\\binom{n+k-1}{k-1}$',
      plainEnglish:
        'A visual trick for distributing $n$ identical units (stars) into $k$ distinct bins by placing $k-1$ vertical divider bars between them. Notice you always use $k-1$ bars—one fewer than the number of bins!',
      tinyExample: 'Non-negative integer solutions to $x_1 + x_2 + x_3 = 5$: $\\binom{5+3-1}{3-1} = \\binom{7}{2} = 21$.',
    },
    {
      term: 'Inclusion-Exclusion Principle',
      symbol: '$|A \\cup B| = |A| + |B| - |A \\cap B|$',
      plainEnglish:
        'A bookkeeping correction for overlapping sets: if you simply add $|A| + |B|$, everyone sitting in the overlap gets counted twice, so you subtract pairwise overlaps, add back triple overlaps, and alternate.',
      tinyExample: 'In $\\{1,\\dots,60\\}$, multiples of $3$ or $5$ equal $20 + 12 - 4 = 28$.',
    },
    {
      term: 'Bijection',
      symbol: '$f: A \\to B$',
      plainEnglish:
        'A perfect one-to-one pairing between two sets where every input gets its own unique partner and nothing in $B$ is left out. On $\\{1,\\dots,n\\}$, a bijection is simply a rearrangement (permutation) of the $n$ elements.',
      tinyExample: 'Swapping $1 \\leftrightarrow 2$ and keeping $3$ fixed is a bijection on $\\{1, 2, 3\\}$.',
    },
    {
      term: 'Fixed Point & 2-Cycle',
      plainEnglish:
        'In a permutation, a fixed point stays right where it started ($f(a)=a$), while a 2-cycle is a mutual buddy swap ($f(a)=b$ and $f(b)=a$). Breaking a permutation into cycles makes counting self-inverse maps effortless.',
      tinyExample: 'In $f(1)=2, f(2)=1, f(3)=3$, element $3$ is a fixed point and $(1\\,2)$ is a $2$-cycle.',
    },
    {
      term: 'Involution',
      symbol: '$f(f(n)) = n$',
      plainEnglish:
        'A bijection that undoes itself when you apply it twice—just like toggling a light switch twice brings you back to where you started. It can only contain fixed points and disjoint $2$-cycles.',
      tinyExample: 'On $\\{1, 2, 3, 4\\}$, there are $I_4 = 1 + 6 + 3 = 10$ involutions.',
    },
  ],
  generatorId: 'stars-bars-gen',
  concepts: [
    {
      id: 'm2-c1-1',
      title: 'Multiplication Rule, Subsets & Complement Counting',
      subtitle: 'Flipping hard "at least one" counts into trivial "none at all" complements',
      priority: 'core-pillar',
      buildsOn: 'Basic arithmetic & Module 1 bijections',
      toyExample: {
        title: '3-Item Subset Toggle & Product Parity',
        scenario:
          'Take the small set $S = \\{1, 2, 3\\}$. You pick a non-empty subset $T \\subseteq S$ and multiply all numbers inside $T$. How many non-empty subsets have an **even** product?',
        walkthroughSteps: [
          '1. **Count all subsets:** Each of the $3$ numbers says either **IN** or **OUT** ($2 \\times 2 \\times 2 = 8$ subsets). Drop $\\emptyset$ to get $2^3 - 1 = 7$ non-empty subsets.',
          '2. **Direct attempt gets messy:** A product is even if $T$ contains $2$ alone, or $2$ with $1$, or $2$ with $3$, etc. With $2026$ numbers, listing cases directly is hopeless!',
          '3. **Flip to the complement:** When is a product of integers **ODD**? Only when **every single chosen element is odd**!',
          '4. **Count the complement in 1 line:** The odd elements are $\\{1, 3\\}$ ($2$ elements), giving $2^2 - 1 = 3$ non-empty all-odd subsets: $\\{1\\}, \\{3\\}, \\{1,3\\}$.',
          '5. **Subtract:** Even-product subsets $= 7 - 3 = 4$. (Check: $\\{2\\}, \\{1,2\\}, \\{2,3\\}, \\{1,2,3\\}$ — exact match!)',
        ],
        ahaMoment:
          'Notice the pattern here: whenever a counting condition says **"at least one..."** (at least one even number, at least one head, at least one defect), flipping to the complement **"zero of them"** almost always collapses the whole mess into one clean product!',
      },
      theoremAndFormula: {
        statement:
          'For $n$ distinct items, the number of $r$-permutations is $P(n,r)$, the number of $r$-combinations is $\\binom{n}{r}$, total subsets is $2^n$, and for any event $A \\subseteq \\Omega$, $|A| = |\\Omega| - |A^c|$.',
        formulaLatex:
          '\\binom{n}{r} = \\frac{n!}{r!(n-r)!}, \\qquad |\\mathcal{P}(S)| = 2^{|S|}, \\qquad |A| = |\\Omega| - |A^c|',
        plainEnglishDecoding:
          'Ask yourself one quick question first: does order matter? If yes, multiply your choices stage by stage to get $P(n,r)$. If no, divide out the $r!$ internal shuffles to get $\\binom{n}{r}$. And whenever each element gets an independent yes/no switch, you immediately get $2^n$.',
        workedMiniExamples: [
          {
            prompt:
              'How many 4-digit integers without repeated digits can be formed from $\\{1, 3, 4, 6, 7\\}$ that are divisible by $3$? (GATE DA 2024 Q.3)',
            solution:
              'Sum of all 5 digits is $1+3+4+6+7 = 21$, which is divisible by $3$. Choosing 4 digits means excluding 1 digit. The remaining 4-digit sum is divisible by $3$ iff the **excluded** digit is divisible by $3$, namely $3$ or $6$. Each valid 4-digit pool arranges in $4! = 24$ ways. Total $= 2 \\times 24 = 48$.',
          },
          {
            prompt:
              'How many non-empty subsets of $\\{1, 2, \\dots, 10\\}$ have an even product?',
            solution:
              'Total non-empty subsets $= 2^{10} - 1 = 1023$. Odd numbers are $\\{1, 3, 5, 7, 9\\}$ ($5$ numbers), giving $2^5 - 1 = 31$ non-empty all-odd subsets. Even-product subsets $= (2^{10}-1) - (2^5-1) = 2^{10} - 2^5 = 2^5(2^5 - 1) = 992$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'The number of subsets of $\\{1,\\dots,n\\}$ with an odd product is $2^{n/2}$ (when $n$ is even).',
          reality: 'If "non-empty subset" is required, you MUST subtract $1$ for $\\emptyset$, giving $2^{n/2} - 1$!',
          counterExample: 'For $S=\\{1,2\\}$, odd-product non-empty subsets is just $\\{1\\}$ ($2^1 - 1 = 1$, not $2$).',
        },
        {
          myth: 'Choosing a President and Vice-President from $10$ students is $\\binom{10}{2} = 45$.',
          reality: 'The roles are distinct (order matters!), so it is $P(10, 2) = 10 \\times 9 = 90$.',
          counterExample: '(Alice = Pres, Bob = VP) $\\neq$ (Bob = Pres, Alice = VP).',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Finite Equally Likely Probability (GATE 2026 Q.19)',
          whyItMatters:
            'GATE 2026 Q.19 scaled the exact toy example above to $\\{1, \\dots, 2026\\}$, dividing $2^{1013}(2^{1013}-1)$ by $2^{2026}-1$.',
          pyqProof: 'GATE DA 2026 · Q.19 (1M MCQ)',
        },
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'Feature Subsets & Naive Bayes Parameter Counting',
          whyItMatters:
            'Counting binary feature configurations ($2^K$) vs. conditional independence factorization ($2K+1$ parameters) uses the exact subset exponent $2^K$.',
          pyqProof: 'GATE DA 2024 · Q.20 (1M MCQ)',
        },
      ],
    },
    {
      id: 'm2-c1-2',
      title: 'Stars and Bars: Non-Negative vs. Positive Integer Solutions',
      subtitle: 'Turning integer equations into arranging identical stars and divider bars',
      priority: 'high-yield',
      buildsOn: 'Combinations $\\binom{n}{r}$',
      toyExample: {
        title: '5 Identical Laddoos Shared Among 3 Children',
        scenario:
          'You have $5$ identical laddoos (`* * * * *`) to give to $3$ distinct children ($n_1 + n_2 + n_3 = 5$, $n_i \\ge 0$). How many distributions exist?',
        walkthroughSteps: [
          '1. **Encode distributions as pictures:** Write $5$ stars and $2$ vertical divider bars (`|`). Everything left of bar 1 goes to Child 1, between bars goes to Child 2, right of bar 2 goes to Child 3.',
          '2. **Check concrete codes:** `** | ** | *` means $(2, 2, 1)$. `| *** | **` means $(0, 3, 2)$. `***** | |` means $(5, 0, 0)$.',
          '3. **Count the codes:** Every picture has $5 + 2 = 7$ slots total, and you just choose which $2$ slots hold the bars (the remaining $5$ hold stars). That is $\\binom{7}{2} = 21$!',
          '4. **Now require every child to get at least 1 ($n_i \\ge 1$):** Pre-give $1$ laddoo to each of the $3$ children first! Only $5 - 3 = 2$ laddoos remain to distribute freely ($n_i\' \\ge 0$), giving $\\binom{2 + 2}{2} = \\binom{4}{2} = 6$ (equivalently, place $2$ bars in the $4$ gaps strictly between the $5$ stars: $\\binom{5-1}{3-1} = 6$).',
        ],
        ahaMoment:
          'Here is the key habit to lock in: with $k$ variables, you always draw **$k - 1$ divider bars** (never $k$). And if every bin must get at least $1$ ($n_i \\ge 1$), simply pre-pay $1$ star to each bin first—shrinking your remaining pile from $n$ down to $n - k$!',
      },
      theoremAndFormula: {
        statement:
          'The number of integer tuples $(x_1, \\dots, x_k)$ summing to $n$ equals $\\binom{n+k-1}{k-1}$ when $x_i \\ge 0$, and $\\binom{n-1}{k-1}$ when $x_i \\ge 1$ (for $n \\ge k$). Arbitrary lower bounds $x_i \\ge L_i$ reduce to the $x_i\' \\ge 0$ case by substituting $x_i\' = x_i - L_i$ with new sum $n\' = n - \\sum L_i$.',
        formulaLatex:
          '\\#\\{x_1+\\dots+x_k = n,\\; x_i \\ge 0\\} = \\binom{n+k-1}{k-1}, \\qquad \\#\\{x_1+\\dots+x_k = n,\\; x_i \\ge 1\\} = \\binom{n-1}{k-1}',
        plainEnglishDecoding:
          'Picture $n$ as identical objects and $k$ as distinct bins waiting to be filled. Once you pre-fill each bin with its minimum quota $L_i$, whatever is left over ($n\' = n - \\sum L_i$) drops straight into the base formula $\\binom{n\'+k-1}{k-1}$.',
        workedMiniExamples: [
          {
            prompt:
              'Find the number of integer solutions to $x_1 + x_2 + x_3 = 8$ with $x_1 \\ge 2,\\; x_2 \\ge 1,\\; x_3 \\ge 0$.',
            solution:
              'Set $x_1\' = x_1 - 2 \\ge 0$, $x_2\' = x_2 - 1 \\ge 0$, $x_3\' = x_3 \\ge 0$. Then $x_1\' + x_2\' + x_3\' = 8 - 2 - 1 = 5$. With $n\' = 5$ and $k = 3$: $\\binom{5 + 3 - 1}{3 - 1} = \\binom{7}{2} = 21$.',
          },
          {
            prompt:
              'A random non-negative integer solution to $n_1 + n_2 + n_3 + n_4 = 20$ is chosen uniformly. What is the probability that all $n_i > 0$? (GATE DA 2026 Q.20)',
            solution:
              'Total non-negative solutions ($n=20, k=4$): $\\binom{20+4-1}{4-1} = \\binom{23}{3}$. Positive solutions ($n_i \\ge 1$): $\\binom{20-1}{4-1} = \\binom{19}{3}$. Probability $= \\frac{\\binom{19}{3}}{\\binom{23}{3}} = \\frac{969}{1771} \\approx 0.547$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'For $x_1 + x_2 + x_3 + x_4 = 20$ ($x_i \\ge 0$), the answer is $\\binom{23}{4}$.',
          reality: 'There are $k-1 = 3$ bars, not $4$, so the bottom index is $k-1 = 3$, giving $\\binom{23}{3}$ (or equivalently $\\binom{23}{20}$, NOT $\\binom{23}{4}$)!',
          counterExample: 'For $k=2$ bins and $n=1$ star ($x_1+x_2=1$), there are $2$ solutions $(1,0),(0,1)$: $\\binom{1+2-1}{2-1} = \\binom{2}{1} = 2$, whereas $\\binom{2}{2} = 1$ (wrong!).',
        },
        {
          myth: 'Stars-and-Bars counts the ways to place $5$ **distinct** balls into $3$ distinct boxes.',
          reality: 'Distinct balls into distinct boxes gives $3^5 = 243$ ways (each ball independently picks a box). Stars-and-Bars ONLY applies when the balls/units are **identical**!',
          counterExample: '$n=2$ distinct balls $\\{a,b\\}$ in $k=2$ boxes has $2^2 = 4$ ways, while Stars-and-Bars gives $\\binom{3}{1} = 3$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'Multinomial Naive Bayes & Bag-of-Words Histograms',
          whyItMatters:
            'A document of length $N$ over a vocabulary of size $V$ produces a word-count vector $(c_1,\\dots,c_V)$ with $\\sum c_i = N$ — exactly a Stars-and-Bars lattice point!',
        },
      ],
    },
    {
      id: 'm2-c1-3',
      title: 'Inclusion-Exclusion Principle & Upper-Bounded Counting',
      subtitle: 'Correcting double-counts cleanly across overlapping conditions',
      priority: 'high-yield',
      buildsOn: 'Basic sets & Stars-and-Bars',
      toyExample: {
        title: 'Two-Skill Survey in a 10-Student Lab',
        scenario:
          'In a $10$-student lab, $6$ students know Python and $5$ know SQL, while $2$ know both Python and SQL. How many students know at least one of the two?',
        walkthroughSteps: [
          '1. **Naive sum fails:** $6 + 5 = 11 > 10$ — impossible in a $10$-student room!',
          '2. **Spot the overcount:** The $2$ bilingual students sit inside the Python group AND inside the SQL group, so they were counted **twice**.',
          '3. **Subtract the overlap once:** $6 + 5 - 2 = 9$ students know Python or SQL (and $10 - 9 = 1$ knows neither).',
          '4. **Why 3 sets flip sign again:** In $|A|+|B|+|C| - |A\\cap B|-|B\\cap C|-|A\\cap C|$, an element in all three $A\\cap B\\cap C$ was added $3$ times and subtracted $3$ times ($3-3=0$), so we **add back** $+|A\\cap B\\cap C|$!',
        ],
        ahaMoment:
          'Think of Inclusion-Exclusion as a gentle overcount-and-repair rhythm: **Add singles, Subtract pairs, Add triples, Subtract quadruples**—so every valid element ends up counted a net total of exactly $+1$.',
      },
      theoremAndFormula: {
        statement:
          'For finite sets $A_1, \\dots, A_m$, the cardinality of their union alternates by intersection size.',
        formulaLatex:
          '|A \\cup B| = |A| + |B| - |A \\cap B|, \\qquad \\left|\\bigcup_{i=1}^m A_i\\right| = \\sum_{k=1}^m (-1)^{k-1} \\sum_{1\\le i_1<\\dots<i_k\\le m} |A_{i_1} \\cap \\dots \\cap A_{i_k}|',
        plainEnglishDecoding:
          'Start by counting each individual set, subtract every pairwise overlap you double-counted, and add back any triple overlap you just removed too many times. Paired with Stars-and-Bars, defining a "bad violation $B_i$" as $x_i \\ge U_i + 1$ lets you handle upper bounds without tedious case-listing.',
        workedMiniExamples: [
          {
            prompt:
              'How many integers in $\\{1, 2, \\dots, 100\\}$ are divisible by $2$ or $5$?',
            solution:
              '$|A_2| = \\lfloor 100/2 \\rfloor = 50$, $|A_5| = \\lfloor 100/5 \\rfloor = 20$, $|A_2 \\cap A_5| = |A_{10}| = \\lfloor 100/10 \\rfloor = 10$. Union $= 50 + 20 - 10 = 60$.',
          },
          {
            prompt:
              'Count integer solutions to $x_1 + x_2 + x_3 = 10$ with $0 \\le x_i \\le 5$ for all $i$.',
            solution:
              'Unrestricted non-negative solutions: $\\binom{10+3-1}{2} = \\binom{12}{2} = 66$. Let $B_i$ be the bad event $x_i \\ge 6$. For one bad bin (3 choices), pre-assign $6$: $\\binom{(10-6)+3-1}{2} = \\binom{6}{2} = 15$, so $3 \\times 15 = 45$. Two bad bins require $6+6=12 > 10$, impossible ($0$). Valid $= 66 - 45 + 0 = 21$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'For 3 sets, $|A \\cup B \\cup C| = |A| + |B| + |C| - |A\\cap B| - |B\\cap C| - |A\\cap C| - |A\\cap B\\cap C|$.',
          reality: 'The triple intersection sign is **PLUS** ($+ |A\\cap B\\cap C|$), not minus!',
          counterExample: 'If $A=B=C=\\{1\\}$, $1+1+1-1-1-1+1 = 1$, whereas subtracting gives $-1$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Probability Union & Boole’s Inequality',
          whyItMatters:
            'Replacing $|\\cdot|$ with $P(\\cdot)$ gives $P(\\bigcup A_i) \\le \\sum P(A_i)$, used directly in PAC learning generalization proofs.',
        },
      ],
    },
    {
      id: 'm2-c1-4',
      title: 'Permutation Cycles, Fixed Points & Involutions',
      subtitle: 'Counting self-inverse bijections via disjoint fixed points and 2-cycles',
      priority: 'sleeping-giant',
      buildsOn: 'Module 1 Bijections & Involutions',
      toyExample: {
        title: 'Counting Self-Reversing Locker Swaps on 4 Lockers',
        scenario:
          'A permutation $f$ on $\\{1, 2, 3, 4\\}$ satisfies $f(f(n)) = n$ for all $n$. How many such bijections exist?',
        walkthroughSteps: [
          '1. **Cycle constraint:** Applying $f$ twice returns every element to itself. Thus every element either stays **fixed** ($f(a)=a$, a 1-cycle) or belongs to a **mutual swap pair** ($f(a)=b, f(b)=a$, a 2-cycle). Longer cycles ($3$-cycles or $4$-cycles) fail $f(f(n))=n$!',
          '2. **Case 0 swaps (4 fixed):** Just the identity map $\\to 1$ way.',
          '3. **Case 1 swap (2 fixed, 1 pair):** Choose which $2$ elements swap: $\\binom{4}{2} = 6$ ways.',
          '4. **Case 2 swaps (0 fixed, 2 pairs):** Pair up $4$ elements into two unlabeled buddies: pick a partner for `1` ($3$ choices), and the remaining two must pair ($1$ choice) $\\to 3$ ways: $(1\\,2)(3\\,4),\\; (1\\,3)(2\\,4),\\; (1\\,4)(2\\,3)$.',
          '5. **Sum:** $1 + 6 + 3 = 10$ involutions!',
        ],
        ahaMoment:
          'Look closely at just element $n$: either it stays fixed ($f(n)=n$, leaving $I_{n-1}$ ways for everyone else), OR it pairs up with one of the other $(n-1)$ elements (leaving $I_{n-2}$ ways for the rest). That single observation hands you the recurrence $I_n = I_{n-1} + (n-1)I_{n-2}$!',
      },
      theoremAndFormula: {
        statement:
          'The number $I_n$ of involutions ($f: \\{1,\\dots,n\\} \\to \\{1,\\dots,n\\}$ bijective with $f \\circ f = \\text{id}$) equals the sum over $k$ disjoint 2-cycles, and satisfies a 2-term linear recurrence.',
        formulaLatex:
          'I_n = I_{n-1} + (n-1)I_{n-2} \\quad (I_0=1,\\; I_1=1), \\qquad I_n = \\sum_{k=0}^{\\lfloor n/2 \\rfloor} \\binom{n}{2k}(2k-1)!!',
        plainEnglishDecoding:
          'You can step up the recurrence to $n=6$ in five seconds flat: $I_1=1,\\; I_2=2,\\; I_3=4,\\; I_4=10,\\; I_5=26,\\; I_6=76$. Just remember: if you count $k$ swap pairs by choosing them one after another, divide by $k!$ because the order in which you formed the pairs does not matter.',
        workedMiniExamples: [
          {
            prompt: 'Compute $I_5$ (involutions on $\\{1,2,3,4,5\\}$).',
            solution:
              'Using $I_n = I_{n-1} + (n-1)I_{n-2}$: $I_4 = 10$, $I_3 = 4$, so $I_5 = I_4 + 4 I_3 = 10 + 4(4) = 26$.',
          },
          {
            prompt: 'Why does $\\binom{4}{2}\\binom{2}{2} = 6$ overcount 2-pair involutions on 4 elements?',
            solution:
              'Picking $\\{1,2\\}$ first and $\\{3,4\\}$ second produces the exact same bijection as picking $\\{3,4\\}$ first and $\\{1,2\\}$ second. Divide by $2! = 2$ to get $6/2 = 3$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'For $f(f(n)) = n$, $f$ must be the identity $f(n) = n$, or a derangement with no fixed points.',
          reality: 'An involution can mix fixed points and 2-cycles freely — ONLY cycles of length $\\ge 3$ are forbidden!',
          counterExample: '$f(1)=2, f(2)=1, f(3)=3, f(4)=4$ has two fixed points and one 2-cycle, and satisfies $f(f(n))=n$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Direct PYQ Match (GATE 2026 Q.33)',
          whyItMatters:
            'GATE DA 2026 Q.33 asked directly for the count of bijections $f:\\{1,2,3,4\\}\\to\\{1,2,3,4\\}$ with $f(f(n))=n$ (`10`).',
          pyqProof: 'GATE DA 2026 · Q.33 (1M NAT)',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm2-c1-ht1',
      title: 'The 2026-Element Subset Trap: Flipping Parity to the Complement',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2026 · Q.19'],
      problemStatement:
        'A non-empty subset $T$ is chosen uniformly at random from $S = \\{1, 2, \\dots, 2026\\}$. What is the probability that the product of all elements in $T$ is even?',
      triggerCue:
        'Huge set size ($2026$) + **"product is even"** (which secretly means **"at least one element is even"**).',
      bruteForceTrap:
        'Trying to count subsets with exactly 1 even number, 2 even numbers, ..., 1013 even numbers forces a huge binomial sum $\\sum_{k=1}^{1013}\\binom{1013}{k} 2^{1013}$.',
      mentalShift:
        'Ask the opposite: **When is an integer product ODD?** Only when **zero** even numbers are chosen! Every element of $T$ must come from the odd half $\\{1, 3, \\dots, 2025\\}$.',
      steps: [
        {
          label: '1. Count total sample space $|\\Omega|$',
          detail:
            'There are $2^{2026}$ subsets of $S$. Excluding the empty set $\\emptyset$ gives $|\\Omega| = 2^{2026} - 1$.',
        },
        {
          label: '2. Count the bad event (odd product)',
          detail:
            'Half of $1..2026$ are odd ($1013$ elements). Non-empty subsets using only odd elements: $2^{1013} - 1$.',
        },
        {
          label: '3. Subtract and factor',
          detail:
            'Even-product subsets $= (2^{2026} - 1) - (2^{1013} - 1) = 2^{2026} - 2^{1013} = 2^{1013}(2^{1013} - 1)$.',
        },
        {
          label: '4. Divide by $|\\Omega|$',
          detail:
            '$P(\\text{even product}) = \\frac{2^{1013}(2^{1013}-1)}{2^{2026}-1}$. Notice how $2^{2026}-1 = (2^{1013}-1)(2^{1013}+1)$ even simplifies this further to $\\frac{2^{1013}}{2^{1013}+1}$!',
        },
      ],
      lockInTakeaway:
        'Whenever a product constraint says "even" or "divisible by $p$ (prime)", count the complement where NO factor of $2$ or $p$ appears.',
    },
    {
      id: 'm2-c1-ht2',
      title: 'Upper-Bounded Stars-and-Bars Without Case-Listing',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2026 · Q.20'],
      problemStatement:
        'How many integer solutions satisfy $x_1 + x_2 + x_3 = 11$ with $1 \\le x_i \\le 5$ for every $i \\in \\{1, 2, 3\\}$?',
      triggerCue:
        'Linear integer sum with **both** lower bounds ($x_i \\ge 1$) **and** upper bounds ($x_i \\le 5$).',
      bruteForceTrap:
        'Enumerating ordered triples $(x_1, x_2, x_3)$ by hand risks missing permutations like $(5,5,1), (5,1,5), (1,5,5)$.',
      mentalShift:
        'First clear the lower bounds ($y_i = x_i - 1 \\ge 0$), then either apply Inclusion-Exclusion on bad violations ($y_i \\ge 5$) OR reflect $z_i = 5 - x_i \\ge 0$ when all upper bounds are identical!',
      steps: [
        {
          label: '1. Shift away the lower bounds',
          detail:
            'Set $y_i = x_i - 1$. Now $y_1 + y_2 + y_3 = 11 - 3 = 8$ with $0 \\le y_i \\le 4$.',
        },
        {
          label: '2. Count unrestricted non-negative solutions',
          detail:
            'With $n=8$ and $k=3$: $\\binom{8+3-1}{2} = \\binom{10}{2} = 45$.',
        },
        {
          label: '3. Subtract single-bin violations ($y_i \\ge 5$)',
          detail:
            'Pick 1 violating variable ($\\binom{3}{1}=3$ choices) and pre-assign $5$ to it: remaining sum $8-5=3$, giving $3 \\times \\binom{3+3-1}{2} = 3 \\times \\binom{5}{2} = 30$.',
        },
        {
          label: '4. Check 2-bin violations ($y_i, y_j \\ge 5$)',
          detail:
            '$5 + 5 = 10 > 8$, so two variables cannot simultaneously exceed $4$ ($0$ ways). Valid count $= 45 - 30 = 15$.',
        },
      ],
      lockInTakeaway:
        'Lower bounds shrink the target sum directly; upper bounds are killed by Inclusion-Exclusion on "violating bins".',
    },
  ],
  arsenalCards: [
    {
      id: 'm2-c1-a1',
      badge: 'Weapon 1 · Stars & Bars',
      whenYouSpot: 'Integer sum $x_1 + \\dots + x_k = n$ with $x_i \\ge 0$ or $x_i \\ge 1$',
      directWeaponLatex:
        '\\binom{n + k - 1}{k - 1} \\quad (x_i \\ge 0) \\qquad \\longleftrightarrow \\qquad \\binom{n - 1}{k - 1} \\quad (x_i \\ge 1)',
      instantRule:
        'The bottom number is ALWAYS (variables $- 1$). Pre-subtract any lower bounds $L_i$ from $n$ first.',
      tenSecondExample:
        '$n_1+n_2+n_3+n_4 = 20$: ratio of positive to non-negative is $\\binom{19}{3}/\\binom{23}{3}$ (GATE 2026 Q.20).',
      oneFatalTrap:
        'Writing $\\binom{n+k-1}{k}$ instead of $k-1$ at the bottom, or applying it to distinct balls.',
    },
    {
      id: 'm2-c1-a2',
      badge: 'Weapon 2 · Complement Flip',
      whenYouSpot: '"At least one", "even product", or "non-empty subset"',
      directWeaponLatex:
        '|A| = |\\Omega| - |A^c|, \\qquad \\text{non-empty subsets} = 2^{|S|} - 1',
      instantRule:
        'Count the world where NONE of the desired elements appear, then subtract from total outcomes.',
      tenSecondExample:
        'Non-empty even-product subsets of $\\{1..2026\\}$: $(2^{2026}-1) - (2^{1013}-1) = 2^{1013}(2^{1013}-1)$.',
      oneFatalTrap:
        'Forgetting to subtract $1$ for $\\emptyset$ in both the total and the complement when "non-empty" is stated.',
    },
    {
      id: 'm2-c1-a3',
      badge: 'Weapon 3 · Involutions',
      whenYouSpot: 'Bijection $f$ on $\\{1,\\dots,n\\}$ with $f(f(x)) = x$ or $f = f^{-1}$',
      directWeaponLatex:
        'I_n = I_{n-1} + (n-1)I_{n-2}, \\qquad (I_1, I_2, I_3, I_4, I_5) = (1, 2, 4, 10, 26)',
      instantRule:
        'Every element is either a 1-cycle (fixed) or in a 2-cycle (swap pair); no cycles of length $\\ge 3$ allowed.',
      tenSecondExample:
        'For $n=4$: $I_4 = I_3 + 3I_2 = 4 + 3(2) = 10$ (GATE 2026 Q.33).',
      oneFatalTrap:
        'Double-counting two disjoint swap pairs like $(1\\,2)(3\\,4)$ and $(3\\,4)(1\\,2)$ by forgetting to divide by $2!$.',
    },
  ],
  questions: [
    {
      id: 'm2-c1-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1 · Stars-and-Bars',
      marks: 1,
      type: 'NAT',
      stem: 'How many positive integer tuples $(x_1, x_2, x_3, x_4)$ satisfy $x_1 + x_2 + x_3 + x_4 = 10$ with $x_i \\ge 1$ for all $i$?',
      natAnswer: { min: 84, max: 84, exactDisplay: '84' },
      triggerHint: 'Pre-give $1$ to each of the $4$ variables, or use $\\binom{n-1}{k-1}$ directly.',
      intuitiveSolution: [
        'With $n = 10$ and $k = 4$ positive integers ($x_i \\ge 1$), set $x_i\' = x_i - 1 \\ge 0$.',
        'Then $x_1\' + x_2\' + x_3\' + x_4\' = 10 - 4 = 6$.',
        'Number of solutions $= \\binom{6 + 4 - 1}{4 - 1} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{6} = 84$.',
      ],
      directShortcutUsed: 'Positive Stars-and-Bars $\\binom{n-1}{k-1} = \\binom{9}{3} = 84$.',
    },
    {
      id: 'm2-c1-q2',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #2 · Inclusion-Exclusion',
      marks: 1,
      type: 'MCQ',
      stem: 'An integer is picked uniformly at random from $\\{1, 2, \\dots, 60\\}$. How many choices are divisible by $3$ or $5$?',
      options: [
        { id: 'A', text: '24', whyTrueOrFalse: 'False: subtracts multiples of 15 twice ($20+12-8$).' },
        { id: 'B', text: '28', whyTrueOrFalse: 'True: $\\lfloor 60/3 \\rfloor + \\lfloor 60/5 \\rfloor - \\lfloor 60/15 \\rfloor = 20 + 12 - 4 = 28$.' },
        { id: 'C', text: '32', whyTrueOrFalse: 'False: forgets to subtract the 4 multiples of $15$ ($15, 30, 45, 60$).' },
        { id: 'D', text: '36', whyTrueOrFalse: 'False: adds the intersection instead of subtracting it.' },
      ],
      correctOptions: ['B'],
      triggerHint: 'Apply $|A_3 \\cup A_5| = |A_3| + |A_5| - |A_{15}|$.',
      intuitiveSolution: [
        'Multiples of $3$ in $1..60$: $60/3 = 20$.',
        'Multiples of $5$ in $1..60$: $60/5 = 12$.',
        'Multiples of $\\text{lcm}(3,5) = 15$: $60/15 = 4$.',
        'By Inclusion-Exclusion: $20 + 12 - 4 = 28$.',
      ],
      directShortcutUsed: '2-set Inclusion-Exclusion $|A \\cup B| = |A| + |B| - |A \\cap B|$.',
    },
    {
      id: 'm2-c1-q3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.19',
      year: 2026,
      marks: 1,
      type: 'MCQ',
      stem: 'A non-empty subset is chosen uniformly at random from the set $\\{1, 2, \\dots, 2026\\}$. What is the probability that the product of the elements in the chosen subset is even?',
      options: [
        {
          id: 'A',
          text: '$\\frac{2^{1013}(2^{1013}-1)}{2^{2026}-1}$',
          whyTrueOrFalse: 'True: total non-empty subsets $= 2^{2026}-1$; subtracting $2^{1013}-1$ non-empty all-odd subsets yields $2^{1013}(2^{1013}-1)$.',
        },
        {
          id: 'B',
          text: '$\\frac{2^{1013}-1}{2^{2026}-1}$',
          whyTrueOrFalse: 'False: this is the probability of an ODD product (all elements odd).',
        },
        {
          id: 'C',
          text: '$\\frac{2^{2026}-2^{1013}}{2^{2026}}$',
          whyTrueOrFalse: 'False: denominator includes the empty set $\\emptyset$, violating "non-empty subset".',
        },
        {
          id: 'D',
          text: '$\\frac{1}{2}$',
          whyTrueOrFalse: 'False: having at least one even element among 1013 evens is vastly more likely than $1/2$ (actually $> 1 - 2^{-1013}$).',
        },
      ],
      correctOptions: ['A'],
      triggerHint: 'A product of integers is even iff it does NOT consist solely of odd numbers.',
      intuitiveSolution: [
        'Total non-empty subsets of $\\{1,\\dots,2026\\}$ is $2^{2026} - 1$.',
        'There are $1013$ odd integers in $\\{1,\\dots,2026\\}$, forming $2^{1013}-1$ non-empty subsets whose product is odd.',
        'Even-product non-empty subsets $= (2^{2026}-1) - (2^{1013}-1) = 2^{2026} - 2^{1013} = 2^{1013}(2^{1013}-1)$.',
        'Divide by $2^{2026}-1$ to get option A.',
      ],
      directShortcutUsed: 'Complement counting on non-empty subsets: $(2^n - 1) - (2^{n/2} - 1)$.',
    },
    {
      id: 'm2-c1-q4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.20',
      year: 2026,
      marks: 1,
      type: 'MCQ',
      stem: 'A non-negative integer solution $(n_1, n_2, n_3, n_4)$ to $n_1 + n_2 + n_3 + n_4 = 20$ is selected uniformly at random. What is the probability that $n_i > 0$ for every $i \\in \\{1, 2, 3, 4\\}$?',
      options: [
        {
          id: 'A',
          text: '$\\frac{\\binom{20}{3}}{\\binom{24}{3}}$',
          whyTrueOrFalse: 'False: off by $+1$ in both Stars-and-Bars counts.',
        },
        {
          id: 'B',
          text: '$\\frac{\\binom{19}{3}}{\\binom{23}{3}}$',
          whyTrueOrFalse: 'True: positive solutions $= \\binom{20-1}{4-1} = \\binom{19}{3}$, total non-negative solutions $= \\binom{20+4-1}{4-1} = \\binom{23}{3}$.',
        },
        {
          id: 'C',
          text: '$\\frac{\\binom{19}{4}}{\\binom{23}{4}}$',
          whyTrueOrFalse: 'False: uses $k=4$ bars instead of $k-1=3$ bars.',
        },
        {
          id: 'D',
          text: '$\\frac{1}{16}$',
          whyTrueOrFalse: 'False: treats continuous/coin-flip reasoning rather than Stars-and-Bars lattice counts.',
        },
      ],
      correctOptions: ['B'],
      triggerHint: 'Both numerator and denominator are direct Stars-and-Bars formulas with $k-1 = 3$.',
      intuitiveSolution: [
        'Total non-negative solutions ($n_i \\ge 0$) to $n_1+n_2+n_3+n_4 = 20$: $\\binom{20+4-1}{4-1} = \\binom{23}{3}$.',
        'Solutions with $n_i > 0$ (i.e., $n_i \\ge 1$): pre-assign $1$ to each of the $4$ variables, leaving sum $16$, giving $\\binom{16+4-1}{4-1} = \\binom{19}{3}$.',
        'Ratio $= \\frac{\\binom{19}{3}}{\\binom{23}{3}}$.',
      ],
      directShortcutUsed: 'Stars-and-Bars ratio $\\binom{n-1}{k-1} / \\binom{n+k-1}{k-1}$.',
    },
    {
      id: 'm2-c1-q5',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.33',
      year: 2026,
      marks: 1,
      type: 'NAT',
      stem: 'How many bijections $f: \\{1, 2, 3, 4\\} \\to \\{1, 2, 3, 4\\}$ satisfy $f(f(n)) = n$ for every $n \\in \\{1, 2, 3, 4\\}$?',
      natAnswer: { min: 10, max: 10, exactDisplay: '10' },
      triggerHint: 'Count permutations composed strictly of 1-cycles (fixed points) and 2-cycles (swaps).',
      intuitiveSolution: [
        '0 swaps (all 4 fixed): $1$ bijection.',
        '1 swap (2 fixed, 1 pair swapped): $\\binom{4}{2} = 6$ bijections.',
        '2 swaps (0 fixed, 2 disjoint pairs): $\\frac{1}{2}\\binom{4}{2}\\binom{2}{2} = 3$ bijections.',
        'Total $= 1 + 6 + 3 = 10$. (Equivalently, $I_4 = I_3 + 3 I_2 = 4 + 3(2) = 10$.)',
      ],
      directShortcutUsed: 'Involution recurrence $I_4 = I_3 + 3I_2 = 10$.',
    },
    {
      id: 'm2-c1-q6',
      tier: 'tricky',
      sourceLabel: 'IITM-Caliber Trap · Counting MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Which of the following counting statements are TRUE?',
      options: [
        {
          id: 'A',
          text: 'The number of 4-digit integers without repeated digits formed from $\\{1, 3, 4, 6, 7\\}$ that are divisible by $3$ is $48$.',
          whyTrueOrFalse: 'True (GATE 2024 Q.3): total digit sum is $21$, so only $3$ or $6$ may be excluded, yielding $2 \\times 4! = 48$.',
        },
        {
          id: 'B',
          text: 'The number of integer solutions to $x_1 + x_2 + x_3 = 10$ with $0 \\le x_i \\le 5$ is $21$.',
          whyTrueOrFalse: 'True: $\\binom{12}{2} - 3\\binom{6}{2} = 66 - 45 = 21$ (equivalently $y_i = 5-x_i \\implies \\sum y_i = 5 \\implies \\binom{7}{2} = 21$).',
        },
        {
          id: 'C',
          text: 'The number of ways to distribute $5$ distinct balls into $3$ distinct boxes is $\\binom{5+3-1}{3-1} = 21$.',
          whyTrueOrFalse: 'False: distinct balls into distinct boxes is $3^5 = 243$, not Stars-and-Bars.',
        },
        {
          id: 'D',
          text: 'Every bijection $f$ on $\\{1,2,3,4,5\\}$ satisfying $f(f(n)) = n$ has an odd number of fixed points.',
          whyTrueOrFalse: 'True: 2-cycles use an even number of elements ($0, 2,$ or $4$), so among $5$ elements, the remaining fixed points must be $5, 3,$ or $1$ — always odd!',
        },
      ],
      correctOptions: ['A', 'B', 'D'],
      triggerHint: 'Test distinct-vs-identical carefully in C, and parity of 2-cycles in D.',
      intuitiveSolution: [
        'Option A is GATE 2024 Q.3: excluding $3$ or $6$ leaves a 4-digit set summing to $18$ or $15$, giving $2 \\times 24 = 48$.',
        'Option B: substituting $y_i = 5 - x_i \\ge 0$ turns $x_1+x_2+x_3=10$ into $y_1+y_2+y_3=5$, giving $\\binom{7}{2} = 21$.',
        'Option C confuses identical vs. distinct balls: $5$ distinct balls in $3$ distinct boxes have $3^5 = 243$ assignments.',
        'Option D: each 2-cycle consumes $2$ elements, so fixed points $= 5 - 2k$ is always odd.',
      ],
      directShortcutUsed: 'Parity of 2-cycles + upper-bound reflection $y_i = U - x_i$.',
    },
  ],
}

const chapter2: ChapterData = {
  id: 'prob1-ch2',
  number: 2,
  title: 'Probability Axioms, Conditional Probability & Bayes’ Theorem',
  shortTitle: 'Axioms & Bayes Theorem',
  estimatedHours: 3.5,
  dayLabel: 'Week 2 · Day 2',
  tagline:
    'Let’s build probability from Kolmogorov’s three clean rules, see conditional probability as zooming into a smaller universe, and turn Bayes’ Theorem into an intuitive 1,000-person frequency table that powers Naive Bayes and medical diagnosis.',
  syllabusMapping: [
    'Probability space, axioms of probability',
    'Conditional probability and Bayes’ theorem',
  ],
  whatIsImportant: [
    'Mutually exclusive ($P(A \\cap B)=0$, GATE 2024 Q.12) vs. non-empty zero-probability sets',
    'Conditional probability algebra: $P(A^c \\mid B) = 1 - P(A \\mid B)$ and $P(A \\cap B) = P(A\\mid B)P(B)$',
    'Bayes’ Theorem with prior + sensitivity + FPR (GATE 2026 Q.57, GATE 2024 Q.58) and unequal priors across 3 boxes (GATE 2025 Q.31)',
    'MAP classification & posterior misclassification probability (GATE 2025 Q.35)',
  ],
  whatIsNotImportant: [
    'Measure-theoretic $\\sigma$-algebras, Borel sets, and Vitali non-measurable sets (0 marks in GATE DA)',
    'Continuous conjugate prior integrals (Beta-Binomial / Normal-Normal posterior derivations)',
  ],
  inboundStream: 'Ch.1 Counting & Complement Sets',
  outboundStream: [
    'Ch.3 Independence & Total Probability Trees',
    'Module 3 Discrete/Continuous Conditional Distributions',
    'Module 14 Naive Bayes, Logistic Regression & MAP Risk',
    'Module 15 Bayesian Networks CPT Inference',
  ],
  glossary: [
    {
      term: 'Probability Space',
      symbol: '$(\\Omega, \\mathcal{F}, P)$',
      plainEnglish:
        'The formal three-piece home of any random experiment: the sample space $\\Omega$ of all outcomes, the family $\\mathcal{F}$ of valid events, and the probability rule $P$ that pours $1.0$ total weight across them.',
      tinyExample: 'A fair coin flip uses $\\Omega = \\{H, T\\}$ with $P(\\{H\\}) = P(\\{T\\}) = 0.5$.',
    },
    {
      term: 'Event & Complement',
      symbol: '$A, \\; A^c$',
      plainEnglish:
        'An event $A$ is any subset of outcomes you care about, and its complement $A^c$ is everything else in $\\Omega$ where $A$ does not happen. Since $A$ and $A^c$ split the $1.0$ budget cleanly, $P(A^c) = 1 - P(A)$.',
      tinyExample: 'If $P(\\text{rain}) = 0.35$, then $P(\\text{no rain}) = 1 - 0.35 = 0.65$.',
    },
    {
      term: 'Mutually Exclusive (Disjoint) Events',
      symbol: '$A \\cap B = \\emptyset$',
      plainEnglish:
        'Two events that can never happen at the same time—there is zero overlap between them. Because they share no outcomes, you can add their probabilities directly: $P(A \\cup B) = P(A) + P(B)$.',
      tinyExample: 'In $3$ coin tosses, "at least $2$ heads" and "at least $2$ tails" cannot both happen, so $P(T \\cap S) = 0$.',
    },
    {
      term: 'Exhaustive Partition',
      symbol: '$\\{H_1, \\dots, H_k\\}$',
      plainEnglish:
        'A set of hypotheses that do not overlap at all and together cover $100\\%$ of the sample space ($\\sum P(H_i) = 1$). Every single outcome falls into one and only one slice.',
      tinyExample: 'Every patient is either sick ($D$) or healthy ($\\bar{D}$): $P(D) + P(\\bar{D}) = 1$.',
    },
    {
      term: 'Conditional Probability',
      symbol: '$P(A \\mid B)$',
      plainEnglish:
        'The updated probability of $A$ once you know for sure that $B$ occurred. Think of it as crossing out everything outside $B$ and rescaling what survives inside $B$ so the new total equals $1$.',
      tinyExample: 'On a fair die, $P(X=6 \\mid \\text{even}) = \\frac{1/6}{3/6} = \\frac{1}{3}$.',
    },
    {
      term: 'Multiplication (Chain) Rule',
      symbol: '$P(A \\cap B) = P(A \\mid B)P(B)$',
      plainEnglish:
        'A step-by-step recipe for finding the chance that two events both happen: first land inside $B$, then multiply by the chance of landing in $A$ given you are already in $B$.',
      tinyExample: 'Drawing $2$ Aces without replacement: $\\frac{4}{52} \\times \\frac{3}{51} = \\frac{1}{221}$.',
    },
    {
      term: 'Prior Probability',
      symbol: '$P(H_i)$',
      plainEnglish:
        'Your baseline belief (or population prevalence) in hypothesis $H_i$ before you look at any new test result or clue.',
      tinyExample: 'If $30\\%$ of a clinic’s visitors have disease $D$, the prior is $P(D) = 0.30$.',
    },
    {
      term: 'Likelihood',
      symbol: '$P(E \\mid H_i)$',
      plainEnglish:
        'The forward chance of observing evidence $E$ assuming hypothesis $H_i$ is actually true. Be careful not to confuse this with the reversed posterior $P(H_i \\mid E)$!',
      tinyExample: 'If a test flags $80\\%$ of sick patients, the likelihood is $P(+ \\mid D) = 0.80$.',
    },
    {
      term: 'Posterior Probability',
      symbol: '$P(H_i \\mid E)$',
      plainEnglish:
        'Your revised belief in hypothesis $H_i$ after combining your prior with the observed evidence $E$ via Bayes’ Theorem.',
      tinyExample: 'With $240$ true positives and $70$ false positives, the posterior is $P(D \\mid +) = \\frac{240}{310} \\approx 0.774$.',
    },
    {
      term: 'Sensitivity & False Positive Rate (FPR)',
      symbol: '$P(+\\mid D), \\; P(+\\mid \\bar{D})$',
      plainEnglish:
        'Sensitivity is how reliably a test catches a true case (true positive rate), while FPR is how often it raises a false alarm on a healthy person.',
      tinyExample: 'Sensitivity $80\\%$ and FPR $10\\%$ mean $240/300$ sick and $70/700$ healthy people test positive.',
    },
    {
      term: 'MAP Classifier & Misclassification Risk',
      symbol: '$\\hat{y}(x) = \\arg\\max_c P(C_c \\mid x)$',
      plainEnglish:
        'The Bayes-optimal decision rule always predicts whichever class has the highest posterior probability at $x$; its exact error rate at $x$ is simply the leftover probability of the losing class(es).',
      tinyExample: 'If $P(C_1 \\mid x) = 0.60$ and $P(C_2 \\mid x) = 0.40$, MAP picks $C_1$ with error probability $0.40$.',
    },
  ],
  generatorId: 'bayes-posterior-gen',
  concepts: [
    {
      id: 'm2-c2-1',
      title: 'Probability Space & Kolmogorov’s Three Axioms',
      subtitle: 'Probability as a normalized 1-liter budget shared across disjoint outcomes',
      priority: 'core-pillar',
      buildsOn: 'Ch.1 Sample spaces & set operations',
      toyExample: {
        title: 'The 1-Liter Probability Jug on a Weighted 4-Sided Die',
        scenario:
          'Imagine a loaded 4-sided die with faces $\\Omega = \\{1, 2, 3, 4\\}$ assigned probabilities $0.1, 0.2, 0.3, 0.4$. Think of $1.0$ total probability as $1.0$ liter of water poured into 4 cups.',
        walkthroughSteps: [
          '1. **Non-negativity:** No cup can hold negative water ($P(A) \\ge 0$).',
          '2. **Normalization:** All 4 cups together hold $0.1 + 0.2 + 0.3 + 0.4 = 1.0$ liter ($P(\\Omega) = 1$).',
          '3. **Disjoint Additivity:** Let $E = \\{1, 2\\}$ and $O = \\{3, 4\\}$. Because they share no faces ($E \\cap O = \\emptyset$), $P(E \\cup O) = 0.3 + 0.7 = 1.0$.',
          '4. **Overlapping Additivity (Inclusion-Exclusion):** Let $A = \\{1, 2\\}$ ($0.3$) and $B = \\{2, 3\\}$ ($0.5$). Face $2$ is in both, so $P(A \\cup B) = 0.3 + 0.5 - 0.2 = 0.6$.',
        ],
        ahaMoment:
          'Notice how natural this is: every probability rule you will ever use—complement $P(A^c)=1-P(A)$, union bound $P(A\\cup B)\\le P(A)+P(B)$, and monotonicity $A\\subseteq B \\implies P(A)\\le P(B)$—just reflects common-sense accounting of a fixed $1$-liter water budget!',
      },
      theoremAndFormula: {
        statement:
          'A probability space $(\\Omega, \\mathcal{F}, P)$ satisfies Kolmogorov’s 3 axioms: non-negativity, unit normalization, and countable additivity on pairwise disjoint events.',
        formulaLatex:
          'P(A) \\ge 0, \\quad P(\\Omega) = 1, \\quad A\\cap B=\\emptyset \\implies P(A\\cup B)=P(A)+P(B), \\quad P(A\\cup B)=P(A)+P(B)-P(A\\cap B)',
        plainEnglishDecoding:
          'If two events can never happen together ($A \\cap B = \\emptyset$), their overlap is automatically $0$. On the flip side, if $P(A) + P(B) > 1$, the two events are forced to overlap by at least $P(A)+P(B)-1$ because their union can never exceed $1$.',
        workedMiniExamples: [
          {
            prompt:
              'Three fair coins are tossed. $T$ is the event of getting at least $2$ heads, and $S$ is the event of getting at least $2$ tails. Find $P(T \\cap S)$. (GATE DA 2024 Q.12)',
            solution:
              'In $3$ tosses, $\\ge 2$ heads means $2$ or $3$ heads (at most $1$ tail), whereas $\\ge 2$ tails means $2$ or $3$ tails (at most $1$ head). No outcome can have both! Thus $T \\cap S = \\emptyset \\implies P(T \\cap S) = 0$.',
          },
          {
            prompt:
              'If $P(A) = 0.7$ and $P(B) = 0.6$, find the minimum and maximum possible values of $P(A \\cap B)$.',
            solution:
              '$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 1.3 - P(A \\cup B)$. Since $\\max(0.7, 0.6) \\le P(A \\cup B) \\le 1$, we get $1.3 - 1 = 0.3 \\le P(A \\cap B) \\le 0.6$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $P(E) = 0$, then the event $E$ must be impossible ($E = \\emptyset$).',
          reality: 'True on discrete uniform spaces, **FALSE** on continuous spaces! A continuous variable like $X \\sim U[0,1]$ has $P(X = 0.5) = 0$ even though $0.5$ can occur.',
          counterExample: '$X \\sim \\mathcal{N}(0,1)$: $P(X = 0) = 0$, yet $0$ is in the support $\\mathbb{R}$.',
        },
        {
          myth: 'Mutually exclusive events with $P(A) > 0, P(B) > 0$ can still be independent.',
          reality: 'Never! Mutually exclusive forces $P(A \\cap B) = 0$, whereas independence requires $P(A \\cap B) = P(A)P(B) > 0$.',
          counterExample: '$P(A)=0.5, P(B)=0.5, A \\cap B = \\emptyset$: $0 \\neq 0.25$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'Softmax Multi-Class Probabilities',
          whyItMatters:
            'Every neural network classifier outputs class probabilities via $\\text{softmax}(z)_k = e^{z_k}/\\sum_j e^{z_j}$ specifically to enforce Kolmogorov’s axioms ($\\ge 0$ and sum $= 1$).',
        },
      ],
    },
    {
      id: 'm2-c2-2',
      title: 'Conditional Probability: Shrinking the Sample Space',
      subtitle: 'Conditioning on B simply deletes everything outside B and re-normalizes',
      priority: 'core-pillar',
      buildsOn: 'Kolmogorov’s axioms',
      toyExample: {
        title: 'Peeking at a Fair Die Roll',
        scenario:
          'You roll a fair 6-sided die $\\Omega = \\{1,2,3,4,5,6\\}$. Normally $P(X = 6) = 1/6$. Now a friend peeks and whispers: *"The number is even!"* ($B = \\{2, 4, 6\\}$).',
        walkthroughSteps: [
          '1. **Cross out impossible outcomes:** Since $B = \\{2, 4, 6\\}$ occurred, $\\{1, 3, 5\\}$ are dead.',
          '2. **Re-scale the remaining world:** Only $3$ equally likely outcomes remain ($P(B) = 3/6 = 1/2$).',
          '3. **Measure $A = \\{6\\}$ inside $B$:** Out of the surviving $3$ faces, $6$ is $1$ of them, so $P(A \\mid B) = \\frac{1/6}{3/6} = \\frac{1}{3}$.',
          '4. **Notice complement symmetry inside $B$:** $P(\\text{not } 6 \\mid B) = P(\\{2,4\\} \\mid \\{2,4,6\\}) = 2/3 = 1 - P(6 \\mid B)$!',
        ],
        ahaMoment:
          'Here is the liberating insight: conditional probability $P(\\cdot \\mid B)$ is a **brand-new valid probability measure** living inside the smaller universe $B$—so every single axiom ($P(A^c\\mid B) = 1-P(A\\mid B)$, inclusion-exclusion) works identically as long as you keep the condition $B$ fixed!',
      },
      theoremAndFormula: {
        statement:
          'For any event $B$ with $P(B) > 0$, the conditional probability of $A$ given $B$ scales $P(A \\cap B)$ by $1/P(B)$, yielding the chain/multiplication rule for joint events.',
        formulaLatex:
          'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\qquad P(A \\cap B) = P(A \\mid B)\\,P(B) = P(B \\mid A)\\,P(A)',
        plainEnglishDecoding:
          'When you want the chance that both $A$ and $B$ happen sequentially, first ask for the chance that $B$ happens ($P(B)$), and then multiply by the chance that $A$ follows inside that smaller $B$ world ($P(A \\mid B)$).',
        workedMiniExamples: [
          {
            prompt:
              'Given $P(A) = 0.5,\\; P(B) = 0.4,\\; P(A \\cup B) = 0.7$, compute $P(A \\mid B)$ and $P(A^c \\mid B)$.',
            solution:
              '$P(A \\cap B) = 0.5 + 0.4 - 0.7 = 0.2$. Thus $P(A \\mid B) = 0.2 / 0.4 = 0.5$, and $P(A^c \\mid B) = 1 - 0.5 = 0.5$.',
          },
          {
            prompt:
              'Two cards are drawn without replacement from a standard 52-card deck. What is the probability both are Aces?',
            solution:
              '$P(A_1 \\cap A_2) = P(A_1)\\,P(A_2 \\mid A_1) = \\frac{4}{52} \\times \\frac{3}{51} = \\frac{1}{13} \\times \\frac{1}{17} = \\frac{1}{221}$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: '$P(A \\mid B^c) = 1 - P(A \\mid B)$.',
          reality: 'FALSE! Flipping the **condition** ($B \\to B^c$) changes the denominator universe completely; only flipping the **target** ($A \\to A^c$) satisfies $P(A^c \\mid B) = 1 - P(A \\mid B)$.',
          counterExample: 'If a rare disease affects $1\\%$ of people and a test is $99\\%$ accurate: $P(+\\mid D) = 0.99$, while $P(+\\mid D^c) = 0.01$ ONLY by coincidence of symmetric error rates; if FPR is $10\\%$, $0.10 \\neq 1 - 0.99$.',
        },
        {
          myth: 'If $P(A \\mid B) = 0.9$, then $P(B \\mid A)$ must also be near $0.9$ (Prosecutor’s Fallacy).',
          reality: '$P(A \\mid B)$ and $P(B \\mid A)$ can differ wildly when base rates $P(A)$ and $P(B)$ differ!',
          counterExample: '$P(\\text{4 legs} \\mid \\text{Dog}) = 1$, yet $P(\\text{Dog} \\mid \\text{4 legs}) \\ll 1$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 3,
          topic: 'Chain Rule & Sequential Joint Distributions',
          whyItMatters:
            'Chaining $P(X_1, X_2, X_3) = P(X_1)P(X_2\\mid X_1)P(X_3\\mid X_1, X_2)$ is how Bayesian Networks and autoregressive models factorize joint probabilities.',
        },
      ],
    },
    {
      id: 'm2-c2-3',
      title: 'Bayes’ Theorem & The 1,000-Person Frequency Table',
      subtitle: 'Inverting P(Symptom | Disease) into P(Disease | Symptom) without base-rate blindness',
      priority: 'core-pillar',
      buildsOn: 'Conditional probability & partition of sample space',
      sandboxId: 'bayes-posterior-lab',
      toyExample: {
        title: '1,000 Patients Screened for Disease D (GATE 2026 Q.57 Numbers)',
        scenario:
          'Disease $D$ has prevalence $30\\%$. A diagnostic test has sensitivity $P(+ \\mid D) = 80\\%$ and false-positive rate $P(+ \\mid \\bar{D}) = 10\\%$. If you test positive, what is $P(D \\mid +)$?',
        walkthroughSteps: [
          '1. **Imagine $1,000$ people** instead of abstract fractions:',
          '2. **Split by prior ($30\\%$ vs $70\\%$):** $300$ people have $D$, and $700$ are healthy ($\\bar{D}$).',
          '3. **Apply test rates to each group:** Among the $300$ sick people, $80\\% \\times 300 = 240$ test $+$. Among the $700$ healthy people, $10\\% \\times 700 = 70$ test $+$.',
          '4. **Zoom into the positive-test universe:** Total $+$ tests $= 240 + 70 = 310$.',
          '5. **Read off the posterior:** $P(D \\mid +) = \\frac{240}{310} = \\frac{24}{31} \\approx 0.7742$!',
        ],
        ahaMoment:
          'See how transparent Bayes’ Theorem really is? There is no magic formula to memorize—you are just dividing **True Positives by All Positives**: $\\frac{\\text{Prior}\\times\\text{Sens}}{\\text{Prior}\\times\\text{Sens} + (1-\\text{Prior})\\times\\text{FPR}}$.',
      },
      theoremAndFormula: {
        statement:
          'Given mutually exclusive, exhaustive hypotheses $H_1, \\dots, H_k$ ($\\sum P(H_j)=1$) and observed evidence $E$ with $P(E) > 0$, Bayes’ Theorem updates prior $P(H_i)$ to posterior $P(H_i \\mid E)$.',
        formulaLatex:
          'P(H_i \\mid E) = \\frac{P(E \\mid H_i)\\,P(H_i)}{\\sum_{j=1}^k P(E \\mid H_j)\\,P(H_j)}',
        plainEnglishDecoding:
          'Think of Bayes’ rule as a two-step update: first multiply each hypothesis’s **prior weight** by its **likelihood** of producing the evidence $E$; then divide by the total sum of those weights so your updated probabilities add back up to $1$.',
        workedMiniExamples: [
          {
            prompt:
              'Given $P(\\bar{T}) = 0.6$, $P(S \\mid T) = 0.3$, and $P(S \\mid \\bar{T}) = 0.6$, find $P(T \\mid S)$. (GATE DA 2024 Q.58)',
            solution:
              '$P(T) = 1 - 0.6 = 0.4$. True branch: $0.4 \\times 0.3 = 0.12$. False branch: $0.6 \\times 0.6 = 0.36$. Total $P(S) = 0.12 + 0.36 = 0.48$. Thus $P(T \\mid S) = 0.12 / 0.48 = 0.25$.',
          },
          {
            prompt:
              'Three boxes have unequal selection priors $1/2, 1/6, 1/3$ (like GATE DA 2025 Q.31). If white-ball fractions in the 3 boxes are $1/2, 1/2, 1/4$, find $P(\\text{Box 2} \\mid \\text{White})$.',
            solution:
              'Joint weights: Box 1 $= \\frac{1}{2}\\cdot\\frac{1}{2} = \\frac{1}{4}$, Box 2 $= \\frac{1}{6}\\cdot\\frac{1}{2} = \\frac{1}{12}$, Box 3 $= \\frac{1}{3}\\cdot\\frac{1}{4} = \\frac{1}{12}$. Sum $= \\frac{3+1+1}{12} = \\frac{5}{12}$. Posterior $P(\\text{Box 2}\\mid W) = \\frac{1/12}{5/12} = 0.20$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If a test is $99\\%$ accurate ($P(+\\mid D)=0.99,\\; P(-\\mid \\bar{D})=0.99$), anyone testing positive has a $99\\%$ chance of having the disease.',
          reality: 'When prevalence $P(D)$ is tiny (e.g. $0.1\\%$), false positives from the $99.9\\%$ healthy population swamp true positives (Base-Rate Fallacy)!',
          counterExample: 'In $10,000$ people ($10$ sick): $9.9$ true $+$ vs. $99.9$ false $+ \\implies P(D\\mid +) \\approx 9\\%$, nowhere near $99\\%$!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 7',
          targetWeek: 7,
          topic: 'Bayesian Networks & Reasoning Under Uncertainty',
          whyItMatters:
            'In GATE DA 2026, Bayes’ Theorem Q.57 was literally placed inside the AI Reasoning-Under-Uncertainty slot.',
          pyqProof: 'GATE DA 2026 · Q.57 (2M NAT)',
        },
      ],
    },
    {
      id: 'm2-c2-4',
      title: 'Bayes Classification & MAP Misclassification Probability',
      subtitle: 'How Bayes’ rule chooses the winning class and measures its exact error rate',
      priority: 'high-yield',
      buildsOn: 'Bayes’ Theorem',
      toyExample: {
        title: 'Two-Class Email Filter on the Word "FREE" (GATE 2025 Q.35)',
        scenario:
          'Class $C_1$ (Spam) has prior $1/3$ and likelihood $P(x \\mid C_1) = 3/4$. Class $C_2$ (Ham) has prior $2/3$ and likelihood $P(x \\mid C_2) = 1/4$. A Bayes classifier predicts the higher posterior class. What is the probability of misclassifying $x$?',
        walkthroughSteps: [
          '1. **Compute unnormalized joint weights:**',
          '   - Weight for $C_1$: $\\frac{1}{3} \\times \\frac{3}{4} = \\frac{1}{4} = \\frac{3}{12}$.',
          '   - Weight for $C_2$: $\\frac{2}{3} \\times \\frac{1}{4} = \\frac{1}{6} = \\frac{2}{12}$.',
          '2. **Normalize to get posteriors:** Total evidence $P(x) = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$. So $P(C_1 \\mid x) = \\frac{3}{5} = 0.60$ and $P(C_2 \\mid x) = \\frac{2}{5} = 0.40$.',
          '3. **Make the MAP decision:** Since $0.60 > 0.40$, predict $C_1$.',
          '4. **Error probability:** Predicting $C_1$ is wrong whenever the true label is $C_2$, which occurs with posterior probability $P(C_2 \\mid x) = 0.40$!',
        ],
        ahaMoment:
          'Notice how clean this is: for any input $x$, the Bayes Optimal Classifier always bets on the larger posterior $\\max_c P(C_c \\mid x)$—which means its exact chance of being wrong at $x$ is simply the **smaller** posterior $1 - \\max_c P(C_c \\mid x)$!',
      },
      theoremAndFormula: {
        statement:
          'The Maximum A Posteriori (MAP) decision rule maximizes $P(C_c \\mid x) \\propto P(x \\mid C_c)P(C_c)$, minimizing pointwise misclassification risk.',
        formulaLatex:
          '\\hat{y}(x) = \\arg\\max_c P(x \\mid C_c)\\,P(C_c), \\qquad P(\\text{misclassify } x) = 1 - \\max_c P(C_c \\mid x) = \\min\\{P(C_1\\mid x), P(C_2\\mid x)\\}',
        plainEnglishDecoding:
          'If a question only asks which class wins, you can compare the unnormalized joint weights $P(x \\mid C_c)P(C_c)$ directly and skip dividing by $P(x)$. If it asks for the exact error probability at $x$, normalize those weights and report the losing class’s share.',
        workedMiniExamples: [
          {
            prompt:
              'If $P(C_1)=P(C_2)=0.5$, $P(x\\mid C_1)=0.8$, $P(x\\mid C_2)=0.2$, find the MAP class and error probability.',
            solution:
              'Equal priors mean MAP = MLE: $C_1$ wins ($0.4$ vs $0.1$). Posterior $P(C_2\\mid x) = 0.1 / (0.4+0.1) = 0.20$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'Misclassification probability at $x$ equals the losing class’s likelihood $P(x \\mid C_2)$ or prior $P(C_2)$.',
          reality: 'Misclassification given $x$ is ALWAYS a **posterior** probability $P(C_2 \\mid x)$, properly normalized by $P(x)$!',
          counterExample: 'In GATE 2025 Q.35, prior $P(C_2) = 2/3$ and likelihood $P(x\\mid C_2) = 0.25$, yet the true error rate is $0.40$!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'Generative (Naive Bayes) vs Discriminative (Logistic Regression)',
          whyItMatters:
            'Naive Bayes estimates $P(x\\mid C_c)P(C_c)$ via Bayes’ theorem; Logistic Regression models $P(C_c \\mid x)$ directly via sigmoid (GATE 2024 Q.18 & 2025 Q.35).',
          pyqProof: 'GATE DA 2025 · Q.35 (1M NAT)',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm2-c2-ht1',
      title: 'The 1,000-Item Frequency Grid for Multi-Hypothesis Bayes',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2025 · Q.31', 'GATE DA 2026 · Q.57'],
      problemStatement:
        'A disease affects $30\\%$ of a population. A test gives positive results for $80\\%$ of sick patients and $10\\%$ of healthy people. Compute $P(\\text{Disease} \\mid +)$.',
      triggerCue:
        'A base-rate prior ($P(D)$ or box weights) paired with forward conditional rates ($P(+\\mid D)$ and $P(+\\mid \\bar{D})$), asking for the **reversed** probability $P(D \\mid +)$.',
      bruteForceTrap:
        'Trying to memorize which term goes in $P(A\\mid B)P(B)$ vs $P(B\\mid A)P(A)$ under time pressure often leads to flipping sensitivity and false-positive rate.',
      mentalShift:
        'Draw a 2-branch frequency tree starting from $1000$ (or $1.00$) individuals: split by the prior first, multiply each branch by its test rate, and divide your target leaf by the sum of all matching leaves.',
      steps: [
        {
          label: '1. Split $1000$ people by prior',
          detail: 'Sick ($D$): $300$. Healthy ($\\bar{D}$): $700$.',
        },
        {
          label: '2. Multiply each group by its positive-test rate',
          detail:
            'True positives: $300 \\times 0.80 = 240$. False positives: $700 \\times 0.10 = 70$.',
        },
        {
          label: '3. Sum all positive leaves',
          detail: 'Total positive tests $= 240 + 70 = 310$.',
        },
        {
          label: '4. Divide target leaf by total',
          detail: '$P(D \\mid +) = 240 / 310 = 24/31 \\approx 0.7742$.',
        },
      ],
      lockInTakeaway:
        'Never invert Bayes algebraically in your head—write down the joint branch weights $w_i = P(H_i)P(E\\mid H_i)$ and compute $w_{\\text{target}} / \\sum w_i$.',
    },
    {
      id: 'm2-c2-ht2',
      title: 'MAP Misclassification Error in Two Lines',
      difficulty: 'Moderate',
      relatedPyqs: ['GATE DA 2025 · Q.35', 'GATE DA 2024 · Q.58'],
      problemStatement:
        'Two classes have priors $1/3, 2/3$ and class-conditional likelihoods $3/4, 1/4$ at feature $x$. Find the Bayes-optimal misclassification probability given $x$.',
      triggerCue:
        'Asks for **"probability of misclassifying $x$"** in a Bayes / Naive Bayes classifier given priors and feature likelihoods.',
      bruteForceTrap:
        'Computing only $P(x \\mid C_2) = 1/4$ or picking the wrong class because $P(C_2) = 2/3$ is larger than $P(C_1) = 1/3$.',
      mentalShift:
        'Joint probability = Prior $\\times$ Likelihood. The Bayes classifier predicts whichever joint weight is **bigger**, so the error probability at $x$ is simply the **smaller** joint weight divided by their sum!',
      steps: [
        {
          label: '1. Compute joint weights $w_c = P(C_c)P(x\\mid C_c)$',
          detail: '$w_1 = \\frac{1}{3} \\cdot \\frac{3}{4} = \\frac{1}{4} = 0.25$; $w_2 = \\frac{2}{3} \\cdot \\frac{1}{4} = \\frac{1}{6} \\approx 0.1667$.',
        },
        {
          label: '2. Identify the smaller weight',
          detail:
            'Since $w_1 > w_2$, the classifier picks $C_1$. Errors occur when the true class is $C_2$ (weight $w_2$).',
        },
        {
          label: '3. Normalize by $w_1 + w_2$',
          detail:
            '$P(\\text{error} \\mid x) = \\frac{w_2}{w_1 + w_2} = \\frac{1/6}{1/4 + 1/6} = \\frac{2}{3+2} = 0.40$.',
        },
      ],
      lockInTakeaway:
        'In 2-class MAP classification at point $x$, error probability is always $\\frac{\\min(w_1, w_2)}{w_1 + w_2}$.',
    },
  ],
  arsenalCards: [
    {
      id: 'm2-c2-a1',
      badge: 'Weapon 1 · Bayes Ratio',
      whenYouSpot: 'Prior $P(H_i)$ + forward likelihoods $P(E \\mid H_i)$ $\\to$ find $P(H_i \\mid E)$',
      directWeaponLatex:
        'w_i = P(H_i)\\,P(E\\mid H_i), \\qquad P(H_i \\mid E) = \\frac{w_i}{\\sum_j w_j}',
      instantRule:
        'Compute the unnormalized joint weights $w_i$ first; you only divide by $\\sum w_j$ at the very end.',
      tenSecondExample:
        '$w_1 = 0.3\\times 0.8 = 0.24,\\; w_2 = 0.7\\times 0.1 = 0.07 \\implies P(D\\mid +) = 24/31 \\approx 0.774$.',
      oneFatalTrap:
        'Ignoring the prior $P(H_i)$ (Base-Rate Fallacy) or mixing up $P(+\\mid D)$ with $P(D\\mid +)$.',
    },
    {
      id: 'm2-c2-a2',
      badge: 'Weapon 2 · Conditional Axioms',
      whenYouSpot: 'Identities involving $P(A \\mid B)$ and complements $A^c$ or $B^c$',
      directWeaponLatex:
        'P(A^c \\mid B) = 1 - P(A \\mid B), \\qquad P(A \\cup C \\mid B) = P(A\\mid B)+P(C\\mid B)-P(A\\cap C\\mid B)',
      instantRule:
        'Fixing the right-hand condition $B$ creates a normal probability law on the left-hand side.',
      tenSecondExample:
        'If $P(T \\mid S) = 0.25$, then $P(\\bar{T} \\mid S) = 0.75$ immediately—no extra data needed!',
      oneFatalTrap:
        'Writing $P(A \\mid B^c) = 1 - P(A \\mid B)$ (WRONG: you cannot complement the conditioning event!).',
    },
    {
      id: 'm2-c2-a3',
      badge: 'Weapon 3 · Disjoint vs Indep.',
      whenYouSpot: '"Mutually exclusive" events or bounds on $P(A \\cap B)$',
      directWeaponLatex:
        'A\\cap B=\\emptyset \\implies P(A\\cap B)=0, \\qquad \\max(0,\\, P(A)+P(B)-1) \\le P(A\\cap B) \\le \\min(P(A),P(B))',
      instantRule:
        'Mutually exclusive = can never occur together ($P(A\\cap B)=0$). Never use $P(A)P(B)$ for disjoint events!',
      tenSecondExample:
        '$3$ coin tosses: $\\ge 2$ heads and $\\ge 2$ tails cannot coexist $\\implies P(T\\cap S) = 0$ (GATE 2024 Q.12).',
      oneFatalTrap:
        'Thinking disjoint positive-probability events can be independent ($0 \\neq P(A)P(B) > 0$).',
    },
  ],
  questions: [
    {
      id: 'm2-c2-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1 · Probability Bounds',
      marks: 1,
      type: 'NAT',
      stem: 'Suppose $P(A) = 0.65$ and $P(B) = 0.55$ in a probability space. What is the minimum possible value of $P(A \\cap B)$? (Answer to 2 decimal places)',
      natAnswer: { min: 0.2, max: 0.2, exactDisplay: '0.20' },
      triggerHint: 'Use $P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$ and $P(A \\cup B) \\le 1$.',
      intuitiveSolution: [
        'By Inclusion-Exclusion, $P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.65 + 0.55 - P(A \\cup B) = 1.20 - P(A \\cup B)$.',
        'Since $P(A \\cup B) \\le 1$, the smallest possible value is $1.20 - 1 = 0.20$.',
      ],
      directShortcutUsed: 'Bonferroni lower bound $\\max(0, P(A)+P(B)-1) = 0.20$.',
    },
    {
      id: 'm2-c2-q2',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.12',
      year: 2024,
      marks: 1,
      type: 'MCQ',
      stem: 'Suppose a fair coin is tossed $3$ times independently. Let $T$ be the event of getting at least $2$ heads, and $S$ be the event of getting at least $2$ tails. What is $P(T \\cap S)$?',
      options: [
        { id: 'A', text: '$0$', whyTrueOrFalse: 'True: in 3 tosses you cannot simultaneously have $\\ge 2$ heads and $\\ge 2$ tails, so $T \\cap S = \\emptyset$.' },
        { id: 'B', text: '$1/4$', whyTrueOrFalse: 'False: mistakenly computes $P(T) \\times P(S) = \\frac{1}{2} \\times \\frac{1}{2}$ assuming independence.' },
        { id: 'C', text: '$1/2$', whyTrueOrFalse: 'False: $1/2$ is $P(T)$ or $P(S)$ individually.' },
        { id: 'D', text: '$1/8$', whyTrueOrFalse: 'False: no single outcome out of 8 lies in $T \\cap S$.' },
      ],
      correctOptions: ['A'],
      triggerHint: 'Can $3$ coins show at least $2$ heads AND at least $2$ tails at the same time?',
      intuitiveSolution: [
        'Event $T$ requires $\\text{Heads} \\ge 2$, while event $S$ requires $\\text{Tails} \\ge 2$ (meaning $\\text{Heads} \\le 1$).',
        'These conditions cannot hold simultaneously, so $T$ and $S$ are mutually exclusive ($T \\cap S = \\emptyset$).',
        'Therefore $P(T \\cap S) = 0$.',
      ],
      directShortcutUsed: 'Mutually exclusive structural zero: $T \\cap S = \\emptyset \\implies P = 0$.',
    },
    {
      id: 'm2-c2-q3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.58',
      year: 2024,
      marks: 2,
      type: 'NAT',
      stem: 'Consider two events $T$ and $S$. Given $P(\\bar{T}) = 0.6$, $P(S \\mid T) = 0.3$, and $P(S \\mid \\bar{T}) = 0.6$, compute $P(T \\mid S)$. (Answer to 2 decimal places)',
      natAnswer: { min: 0.25, max: 0.25, exactDisplay: '0.25' },
      triggerHint: 'Find $P(T) = 1 - P(\\bar{T})$, compute the two joint branch weights for $S$, and divide.',
      intuitiveSolution: [
        '$P(T) = 1 - P(\\bar{T}) = 1 - 0.6 = 0.4$.',
        'Joint weight $P(T \\cap S) = P(S \\mid T)P(T) = 0.3 \\times 0.4 = 0.12$.',
        'Joint weight $P(\\bar{T} \\cap S) = P(S \\mid \\bar{T})P(\\bar{T}) = 0.6 \\times 0.6 = 0.36$.',
        '$P(S) = 0.12 + 0.36 = 0.48$, so $P(T \\mid S) = 0.12 / 0.48 = 0.25$.',
      ],
      directShortcutUsed: 'Bayes’ 2-branch ratio $0.12 / (0.12 + 0.36) = 0.25$.',
    },
    {
      id: 'm2-c2-q4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.35',
      year: 2025,
      marks: 1,
      type: 'NAT',
      stem: 'A two-class Naive Bayes classifier has class priors $P(C_1) = 1/3$ and $P(C_2) = 2/3$. For an observation $x$, the class-conditional likelihoods are $P(x \\mid C_1) = 3/4$ and $P(x \\mid C_2) = 1/4$. What is the posterior probability of misclassifying $x$? (Answer to 2 decimal places)',
      natAnswer: { min: 0.4, max: 0.4, exactDisplay: '0.40' },
      triggerHint: 'Compute joint weights $w_1, w_2$; the classifier chooses the larger weight, so error is $\\frac{\\min(w_1,w_2)}{w_1+w_2}$.',
      intuitiveSolution: [
        'Joint weight $w_1 = P(C_1)P(x\\mid C_1) = \\frac{1}{3} \\times \\frac{3}{4} = \\frac{1}{4}$.',
        'Joint weight $w_2 = P(C_2)P(x\\mid C_2) = \\frac{2}{3} \\times \\frac{1}{4} = \\frac{1}{6}$.',
        '$P(x) = \\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12}$.',
        'Posteriors: $P(C_1 \\mid x) = \\frac{3}{5} = 0.60$ and $P(C_2 \\mid x) = \\frac{2}{5} = 0.40$. The MAP rule predicts $C_1$, so misclassification probability is $P(C_2 \\mid x) = 0.40$.',
      ],
      directShortcutUsed: '2-class MAP error $= \\frac{\\min(w_1, w_2)}{w_1 + w_2} = 0.40$.',
    },
    {
      id: 'm2-c2-q5',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.57',
      year: 2026,
      marks: 2,
      type: 'NAT',
      stem: 'In a population, the prevalence of Disease $D$ is $30\\%$. A diagnostic test for $D$ has a sensitivity (true positive rate) of $80\\%$ and a false positive rate of $10\\%$. If a randomly selected person tests positive, what is the probability that they actually have Disease $D$? (Round to 2 decimal places)',
      natAnswer: { min: 0.76, max: 0.78, exactDisplay: '0.77' },
      triggerHint: 'Test out of $100$ or $1000$ people: how many of the $30\\%$ sick and $70\\%$ healthy test positive?',
      intuitiveSolution: [
        'Take $1000$ people: $300$ have $D$ ($\\text{Prior}=0.30$), $700$ do not ($\\bar{D}=0.70$).',
        'True positives: $80\\%$ of $300 = 240$.',
        'False positives: $10\\%$ of $700 = 70$.',
        'Total positives $= 240 + 70 = 310$. Posterior $P(D \\mid +) = 240 / 310 \\approx 0.7742 \\approx 0.77$.',
      ],
      directShortcutUsed: '1,000-person Bayes grid: $240 / (240 + 70) \\approx 0.77$.',
    },
    {
      id: 'm2-c2-q6',
      tier: 'tricky',
      sourceLabel: 'IITM-Caliber Trap · Conditioning MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'Let $A$ and $B$ be events in a probability space $(\\Omega, \\mathcal{F}, P)$ with $0 < P(B) < 1$. Which of the following statements MUST hold?',
      options: [
        {
          id: 'A',
          text: '$P(A^c \\mid B) = 1 - P(A \\mid B)$.',
          whyTrueOrFalse: 'True: conditioning on a fixed $B$ gives a valid probability measure on $B$, so complement rule holds.',
        },
        {
          id: 'B',
          text: '$P(A \\mid B^c) = 1 - P(A \\mid B)$.',
          whyTrueOrFalse: 'False: if $A$ is independent of $B$ with $P(A)=0.3$, then $P(A \\mid B^c) = 0.3 \\neq 1 - P(A \\mid B) = 0.7$.',
        },
        {
          id: 'C',
          text: '$P(A) = P(A \\mid B)P(B) + P(A \\mid B^c)P(B^c)$.',
          whyTrueOrFalse: 'True: this is the Law of Total Probability for the 2-part partition $\\{B, B^c\\}$.',
        },
        {
          id: 'D',
          text: 'If $P(A \\cap B) = 0$ and $P(A) > 0$, then $A$ and $B$ cannot be independent.',
          whyTrueOrFalse: 'True: independence requires $P(A \\cap B) = P(A)P(B) > 0$, contradicting $0$.',
        },
      ],
      correctOptions: ['A', 'C', 'D'],
      triggerHint: 'Test B with any event $A$ independent of $B$ having $P(A) = 0.3$.',
      intuitiveSolution: [
        'A is always true because $P(\\cdot \\mid B)$ satisfies all Kolmogorov axioms.',
        'B is false: if $A \\perp B$ with $P(A) = 0.3$, then $P(A \\mid B^c) = 0.3$ whereas $1 - P(A \\mid B) = 0.7$.',
        'C is the Law of Total Probability since $0 < P(B) < 1$ ensures both $P(B)>0$ and $P(B^c)>0$.',
        'D is true because $P(A)P(B) > 0 \\neq 0 = P(A \\cap B)$.',
      ],
      directShortcutUsed: 'Check conditioning universe invariance + independent counter-example for B.',
    },
  ],
}

const chapter3: ChapterData = {
  id: 'prob1-ch3',
  number: 3,
  title: 'Independence, Pairwise vs Mutual Independence & Probability Trees',
  shortTitle: 'Independence & Trees',
  estimatedHours: 3.0,
  dayLabel: 'Week 2 · Day 3',
  tagline:
    'Let’s learn how to tell true independence apart from pairwise coincidences, untangle hidden overlaps cleanly using Total Probability Hinge Trees (GATE 2026 Q.64), and sidestep the collider "explaining-away" trap in Bayesian Networks (GATE 2024 Q.24).',
  syllabusMapping: [
    'Independent events (pairwise vs. mutual independence)',
    'Law of Total Probability & conditional independence',
  ],
  whatIsImportant: [
    'Complement product rule for $n$ independent trials: $P(\\text{at least one}) = 1 - \\prod(1 - p_i)$ (GATE 2025 Q.45)',
    'Pairwise vs. Mutual Independence: Bernstein’s 4-outcome / 2-coin-parity counter-examples',
    'Conditioning on a shared overlap cell / hinge in Total Probability Trees (GATE 2026 Q.64 Bernoulli matrix)',
    'Conditional independence $A \\perp B \\mid C$ vs. marginal independence $A \\perp B$ — fork vs. collider (GATE 2024 Q.24)',
  ],
  whatIsNotImportant: [
    'Infinite-sequence Borel-Cantelli lemmas and Kolmogorov 0-1 tail $\\sigma$-algebras',
    'Full $d$-separation trace algorithms on large 10+ node DAGs (covered in Module 15 AI Bayes Nets)',
  ],
  inboundStream: 'Ch.1 Counting & Ch.2 Conditional Probability / Bayes',
  outboundStream: [
    'Module 3 Discrete RVs (Binomial, Geometric & Memoryless Exponential)',
    'Module 4 Joint Distributions & Correlation vs. Independence',
    'Module 14 Machine Learning (i.i.d. Likelihood & Naive Bayes Conditional Independence)',
    'Module 15 AI Bayesian Networks (d-Separation & Exact CPTs, GATE 2024 Q.24 & Q.64)',
  ],
  glossary: [
    {
      term: 'Independent Events',
      symbol: '$A \\perp B$',
      plainEnglish:
        'Two events where learning that $B$ happened gives you zero new information about $A$: your odds of $A$ stay untouched ($P(A \\mid B) = P(A)$), which means their joint chance simply multiplies: $P(A \\cap B) = P(A)P(B)$.',
      tinyExample: 'Two fair coin tosses: $P(H_1 \\cap H_2) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.',
    },
    {
      term: 'Pairwise Independence',
      symbol: '$P(A_i \\cap A_j) = P(A_i)P(A_j)$',
      plainEnglish:
        'Every pair of events looks independent when checked two at a time—yet groups of three or more can still be secretly linked!',
      tinyExample: 'In $2$ fair coins, $A=H_1$, $B=H_2$, and $C=\\text{match}$ are pairwise independent, even though $A$ and $B$ together force $C$.',
    },
    {
      term: 'Mutual Independence',
      symbol: '$P(\\bigcap_{i \\in S} A_i) = \\prod_{i \\in S} P(A_i)$',
      plainEnglish:
        'The gold standard of full independence: not only must every pair multiply cleanly, but every triple, quadruple, and larger subset must factor into a product too.',
      tinyExample: 'For $3$ events, mutual independence requires $4$ equations: all $3$ pairs PLUS $P(A \\cap B \\cap C) = P(A)P(B)P(C)$.',
    },
    {
      term: 'Complement Product Rule',
      symbol: '$1 - \\prod_{i=1}^n (1 - p_i)$',
      plainEnglish:
        'Because independence passes right over to complements, the cleanest way to find "at least one success" across independent trials is to multiply the failure probabilities and subtract from $1$.',
      tinyExample: 'Rolling a fair die $100$ times gives $P(\\text{at least one } 1) = 1 - (5/6)^{100}$.',
    },
    {
      term: 'Law of Total Probability',
      symbol: '$P(E) = \\sum_{i=1}^k P(E \\mid H_i)P(H_i)$',
      plainEnglish:
        'When an event $E$ is awkward to compute directly, slice the universe into clean non-overlapping scenarios $H_i$, find $E$’s chance inside each slice, and take their weighted average.',
      tinyExample: 'Drawing from Urn 2 after transferring a random ball from Urn 1 splits cleanly into Red-transferred and Blue-transferred branches.',
    },
    {
      term: 'Hinge Variable (Shared Bottleneck)',
      symbol: '$H$',
      plainEnglish:
        'A single overlapping cell, draw, or latent piece connecting two events that would otherwise be independent. Condition on the hinge’s value first, and the two sides immediately decouple!',
      tinyExample: 'In a $5\\times 5$ random binary grid, fixing the shared entry $A_{2,3}$ makes the rest of Row 2 and Column 3 independent.',
    },
    {
      term: 'Conditional Independence',
      symbol: '$A \\perp B \\mid C$',
      plainEnglish:
        'Two events that become independent once you already know $C$: after observing $C$, learning $B$ adds nothing extra to your prediction of $A$.',
      tinyExample: 'In Naive Bayes, email words `"FREE"` and `"WIN"` are treated as conditionally independent given the Spam/Ham label $Y$.',
    },
    {
      term: 'Marginal Independence',
      symbol: '$A \\perp B$',
      plainEnglish:
        'Independence between $A$ and $B$ before conditioning on any third variable—found after summing out all other variables in the joint distribution.',
      tinyExample: 'Two independent fair coins $U$ and $V$ satisfy $U \\perp V$ marginally before you inspect their sum.',
    },
    {
      term: 'Fork (Common Cause)',
      symbol: '$X \\leftarrow W \\to Y$',
      plainEnglish:
        'A single cause $W$ drives two separate effects $X$ and $Y$. Marginally $X$ and $Y$ move together, but once you observe the common cause $W$, the link breaks and $X \\perp Y \\mid W$!',
      tinyExample: 'Knowing the true weather $W$ separates umbrella sightings $X$ from wet-sidewalk sightings $Y$.',
    },
    {
      term: 'Collider (Common Effect)',
      symbol: '$U \\to W \\leftarrow V$',
      plainEnglish:
        'Two independent causes $U$ and $V$ both feed into a shared outcome $W$. Before seeing $W$ they are unrelated ($U \\perp V$), yet observing $W$ couples them ("explaining away") so $U \\not\\perp V \\mid W$!',
      tinyExample: 'If a buzzer $W$ rings when two independent coins satisfy $U + V = 1$, hearing $W$ and seeing $U=1$ forces $V=0$.',
    },
  ],
  generatorId: 'stars-bars-gen',
  concepts: [
    {
      id: 'm2-c3-1',
      title: 'Independent Events, Complements & The "At Least One" Product',
      subtitle: 'When knowing B leaves the odds of A completely untouched',
      priority: 'core-pillar',
      buildsOn: 'Ch.2 Conditional Probability',
      toyExample: {
        title: 'Rolling 100 Dice vs. 2 Dice for "At Least One 1"',
        scenario:
          'Roll a fair 6-sided die $100$ times independently (GATE 2025 Q.45). What is the chance that **at least one** die shows a `1`?',
        walkthroughSteps: [
          '1. **Start with 2 dice first:** Out of $36$ equally likely pairs, $11$ contain at least one `1`. Notice $1 - (5/6)^2 = 1 - 25/36 = 11/36$.',
          '2. **Why complements multiply:** Let $F_i$ be the event "die $i$ fails to show `1`" ($P(F_i) = 5/6$). Because the rolls are independent, knowing die 1 failed doesn’t help or hurt die 2.',
          '3. **All 100 fail simultaneously:** By independence of complements, $P(F_1 \\cap \\dots \\cap F_{100}) = (5/6)^{100}$.',
          '4. **Flip back:** $P(\\text{at least one } 1) = 1 - (5/6)^{100}$.',
        ],
        ahaMoment:
          'Notice how cleanly independence carries over to complements: if $A \\perp B$, then $A^c \\perp B$, $A \\perp B^c$, and $A^c \\perp B^c$ all hold automatically. That turns any messy "at least one" union $P(\\bigcup A_i)$ into a single effortless product $1 - \\prod(1-P(A_i))$!',
      },
      theoremAndFormula: {
        statement:
          'Events $A$ and $B$ are independent ($A \\perp B$) iff $P(A \\cap B) = P(A)P(B)$ (equivalently $P(A \\mid B) = P(A)$ when $P(B)>0$). Independence implies $A^c \\perp B^c$.',
        formulaLatex:
          'A \\perp B \\iff P(A \\cap B) = P(A)\\,P(B), \\qquad P\\!\\left(\\bigcup_{i=1}^n A_i\\right) = 1 - \\prod_{i=1}^n \\bigl(1 - P(A_i)\\bigr) \\;\\text{ (mutually indep.)}',
        plainEnglishDecoding:
          'Make this a strict habit: always verify independence algebraically with $P(A\\cap B) = P(A)P(B)$ rather than guessing whether two events "feel unrelated"—and never mix up mutually exclusive (disjoint) with independent!',
        workedMiniExamples: [
          {
            prompt:
              'Prove that if $A$ and $B$ are independent, then $A$ and $B^c$ are also independent.',
            solution:
              '$P(A \\cap B^c) = P(A) - P(A \\cap B) = P(A) - P(A)P(B) = P(A)(1 - P(B)) = P(A)P(B^c)$. Done in one line!',
          },
          {
            prompt:
              'Three independent backups fail with probabilities $0.1, 0.2, 0.5$. What is the probability the system works (at least one backup succeeds)?',
            solution:
              'System fails only if all three fail: $P(\\text{all fail}) = 0.1 \\times 0.2 \\times 0.5 = 0.01$. So $P(\\text{works}) = 1 - 0.01 = 0.99$.',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $A$ and $B$ are independent, then $P(A \\cup B) = P(A) + P(B)$.',
          reality: 'Adding probabilities without subtracting $P(A\\cap B) = P(A)P(B)$ only works for **disjoint** events, NOT independent ones!',
          counterExample: 'Two fair coin tosses: $P(H_1)=0.5, P(H_2)=0.5$, yet $P(H_1 \\cup H_2) = 0.75 \\neq 1.0$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 6',
          targetWeek: 7,
          topic: 'i.i.d. Log-Likelihood & Bagging Ensembles',
          whyItMatters:
            'Because independent probabilities multiply, taking $\\ln$ turns the MLE objective $\\prod_i P(x_i\\mid \\theta)$ into a tractable sum $\\sum_i \\ln P(x_i\\mid \\theta)$.',
        },
      ],
    },
    {
      id: 'm2-c3-2',
      title: 'Pairwise vs. Mutual Independence (The 2-Coin Parity Trap)',
      subtitle: 'Why checking every pair is NOT enough to guarantee full independence',
      priority: 'high-yield',
      buildsOn: 'Independent events definition',
      toyExample: {
        title: 'Two Fair Coin Tosses + The "Do They Match?" Event',
        scenario:
          'Toss $2$ fair coins: $\\Omega = \\{\\text{HH}, \\text{HT}, \\text{TH}, \\text{TT}\\}$. Define three events: $A = \\text{1st is H}$, $B = \\text{2nd is H}$, and $C = \\text{both tosses match}$ ($\\{\\text{HH}, \\text{TT}\\}$).',
        walkthroughSteps: [
          '1. **Individual probabilities:** $P(A) = 1/2$, $P(B) = 1/2$, $P(C) = 2/4 = 1/2$.',
          '2. **Check every pair:**',
          '   - $P(A \\cap B) = P(\\{\\text{HH}\\}) = 1/4 = P(A)P(B)$ ($A \\perp B$).',
          '   - $P(A \\cap C) = P(\\{\\text{HH}\\}) = 1/4 = P(A)P(C)$ ($A \\perp C$).',
          '   - $P(B \\cap C) = P(\\{\\text{HH}\\}) = 1/4 = P(B)P(C)$ ($B \\perp C$).',
          '3. **Now check the triple:** What is $P(A \\cap B \\cap C)$? If 1st is H AND 2nd is H, they ALREADY match ($\\{\\text{HH}\\}$)! So $P(A \\cap B \\cap C) = 1/4 \\neq (1/2)^3 = 1/8$!',
        ],
        ahaMoment:
          'Pause and admire how sneaky this is: every single **pair** among $A, B, C$ is completely independent, yet knowing BOTH $A$ and $B$ reveals $C$ with $100\\%$ certainty ($P(C \\mid A \\cap B) = 1$)! That is why pairwise independence never guarantees mutual independence.',
      },
      theoremAndFormula: {
        statement:
          'Events $A_1, \\dots, A_n$ are **mutually independent** iff the intersection probability factors for **every** subset $S \\subseteq \\{1,\\dots,n\\}$ of size $|S| \\ge 2$ ($2^n - n - 1$ equations total). Checking only size $2$ gives **pairwise independence**.',
        formulaLatex:
          '\\text{Mutual Indep.: } \\forall S\\subseteq\\{1,\\dots,n\\}\\;(|S|\\ge 2), \\quad P\\!\\left(\\bigcap_{i\\in S} A_i\\right) = \\prod_{i\\in S} P(A_i)',
        plainEnglishDecoding:
          'For $3$ events, mutual independence asks you to verify **4 separate equations**: the $3$ pairwise products PLUS the triple product $P(A\\cap B\\cap C) = P(A)P(B)P(C)$. If even a single one fails, mutual independence is broken.',
        workedMiniExamples: [
          {
            prompt:
              'Can $P(A \\cap B \\cap C) = P(A)P(B)P(C)$ hold WITHOUT $A, B, C$ being mutually independent?',
            solution:
              'YES! Take $\\Omega = \\{1,\\dots,8\\}$ uniform, $A=\\{1,2,3,4\\}, B=\\{1,2,3,5\\}, C=\\{1,6,7,8\\}$. Then $P(A)=P(B)=P(C)=1/2$ and $P(A\\cap B\\cap C) = 1/8 = P(A)P(B)P(C)$, yet $P(A\\cap B) = 3/8 \\neq 1/4$!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $A\\perp B$, $B\\perp C$, and $A\\perp C$, then $A, B, C$ are mutually independent.',
          reality: 'False! Pairwise independence is strictly weaker than mutual independence.',
          counterExample: '2 fair coins: $A=\\text{1st H}$, $B=\\text{2nd H}$, $C=\\text{match}$. Pairwise independent, NOT mutually independent.',
        },
        {
          myth: 'If $P(A\\cap B\\cap C) = P(A)P(B)P(C)$, then $A, B, C$ are mutually independent.',
          reality: 'False! You must ALSO check all $3$ pairwise equations $P(A\\cap B) = P(A)P(B)$, etc.',
          counterExample: '$\\Omega=\\{1..8\\}$ example above has triple product $= 1/8$ while $P(A\\cap B) = 3/8 \\neq 1/4$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 4',
          targetWeek: 4,
          topic: 'Universal / Pairwise-Independent Hashing & Sum Variance',
          whyItMatters:
            'In Module 4 & DSA, $\\text{Var}(\\sum X_i) = \\sum \\text{Var}(X_i)$ only requires **pairwise** independence — mutual independence is overkill!',
        },
      ],
    },
    {
      id: 'm2-c3-3',
      title: 'Law of Total Probability & Hinge-Splitting Trees',
      subtitle: 'Breaking overlapping dependence by conditioning on the shared bottleneck',
      priority: 'core-pillar',
      buildsOn: 'Ch.2 Conditional probability & partition rule',
      toyExample: {
        title: 'Why Row 2 & Column 3 of a Binary Grid Are NOT Independent (GATE 2026 Q.64)',
        scenario:
          'Fill a $5 \\times 5$ grid independently with $\\text{Bernoulli}(0.5)$ coins ($0$ or $1$). What is the probability that **Row 2 sums to $3$** AND **Column 3 sums to $3$**?',
        walkthroughSteps: [
          '1. **Spot the trap:** Row 2 has $5$ cells, Column 3 has $5$ cells, and they collide at ONE shared cell $A_{2,3}$! So you CANNOT just multiply $P(R_2=3) \\times P(C_3=3)$.',
          '2. **Split a 2-branch tree on the hinge $A_{2,3}$:**',
          '   - **Branch 1 ($A_{2,3} = 1$, prob $1/2$):** Now Row 2 needs $2$ more ones in its other $4$ cells (prob $\\binom{4}{2}/2^4 = 6/16 = 3/8$), and Column 3 needs $2$ more ones in its other $4$ cells (prob $3/8$). Crucially, those $4+4=8$ remaining cells are **disjoint and independent**! Branch 1 prob $= \\frac{1}{2} \\times \\frac{3}{8} \\times \\frac{3}{8} = \\frac{9}{128}$.',
          '   - **Branch 2 ($A_{2,3} = 0$, prob $1/2$):** Now Row 2 needs $3$ ones in its other $4$ cells (prob $\\binom{4}{3}/2^4 = 4/16 = 1/4$), and Column 3 independently needs $3$ ones in its other $4$ cells (prob $1/4$). Branch 2 prob $= \\frac{1}{2} \\times \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{32} = \\frac{4}{128}$.',
          '3. **Add the tree leaves:** $\\frac{9}{128} + \\frac{4}{128} = \\frac{13}{128} \\approx 0.1016$.',
        ],
        ahaMoment:
          'Keep this mental move in your pocket: whenever two events share a single overlapping piece (a corner cell, a first draw, or a hidden switch), **condition on that hinge**. The instant you freeze the hinge, the remaining pieces stop touching and become **independent**!',
      },
      theoremAndFormula: {
        statement:
          'If $\\{H_1, \\dots, H_k\\}$ partitions $\\Omega$ with $P(H_i) > 0$, then any event $E$ (or joint event $A \\cap B$) decomposes cleanly across the partition.',
        formulaLatex:
          'P(E) = \\sum_{i=1}^k P(E \\mid H_i)\\,P(H_i), \\qquad P(A \\cap B) = \\sum_{i=1}^k P(A \\mid H_i)\\,P(B \\mid H_i)\\,P(H_i) \\;\\text{ (if } A \\perp B \\mid H_i\\text{)}',
        plainEnglishDecoding:
          'Sketch a quick tree branching out from the shared hinge $H_i$, multiply the probabilities along each branch, and add up the leaves that match your target event.',
        workedMiniExamples: [
          {
            prompt:
              'An urn has $3$ Red and $2$ Blue balls. One ball is drawn and discarded without looking. Find the probability the $2$nd ball drawn is Red.',
            solution:
              'Tree on 1st ball: $P(R_2) = P(R_1)P(R_2\\mid R_1) + P(B_1)P(R_2\\mid B_1) = \\frac{3}{5}\\cdot\\frac{2}{4} + \\frac{2}{5}\\cdot\\frac{3}{4} = \\frac{6+6}{20} = \\frac{3}{5}$ (symmetry preserved!).',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'For a $5\\times 5$ i.i.d. Bernoulli($0.5$) matrix, $P(\\text{Row } 2 = 3 \\text{ and Col } 3 = 3) = \\left(\\binom{5}{3}/32\\right)^2 = (10/32)^2 \\approx 0.0977$.',
          reality: 'Close numerically, yet mathematically WRONG! Because Row 2 and Col 3 share $A_{2,3}$, they are positively correlated: exact value is $13/128 \\approx 0.1016$.',
          counterExample: 'In a $1\\times 1$ matrix, Row 1 = Col 1, so $P(R_1=1, C_1=1) = 0.5 \\neq 0.5^2 = 0.25$!',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 1',
          targetWeek: 2,
          topic: 'Direct PYQ Match (GATE 2026 Q.64)',
          whyItMatters:
            'GATE DA 2026 Q.64 asked this exact $5\\times 5$ matrix problem for 2 NAT marks.',
          pyqProof: 'GATE DA 2026 · Q.64 (2M NAT)',
        },
      ],
    },
    {
      id: 'm2-c3-4',
      title: 'Conditional Independence vs. Marginal Independence (Collider Trap)',
      subtitle: 'Why observing a common effect couples two independent causes',
      priority: 'sleeping-giant',
      buildsOn: 'Bayes’ Theorem & Total Probability',
      toyExample: {
        title: 'Two Independent Coins & a "Sum Buzzer" (Collider)',
        scenario:
          'Flip two independent fair coins $U, V \\in \\{0, 1\\}$. A light $W$ turns ON iff $U + V = 1$ (one Head, one Tail). Are $U$ and $V$ independent before vs. after you look at $W$?',
        walkthroughSteps: [
          '1. **Before looking at $W$ (Marginal):** $U$ and $V$ were separate coin flips, so $P(U, V) = P(U)P(V)$. Knowing $U=1$ tells you nothing about $V$ ($U \\perp V$).',
          '2. **Now observe $W = \\text{ON}$ (Conditioning on the Collider):** You know one coin is $1$ and the other is $0$.',
          '3. **Check independence given $W = \\text{ON}$:** If someone now tells you $U = 1$, then $V$ MUST be $0$ with $100\\%$ certainty! Thus $P(V=1 \\mid U=1, W=\\text{ON}) = 0 \\neq P(V=1 \\mid W=\\text{ON}) = 0.5$.',
          '4. **Contrast with a Fork ($X \\leftarrow W \\to Y$):** If $W$ causes $X$ and $Y$ independently, $X$ and $Y$ are correlated marginally, yet become **independent** once you observe $W$ ($X \\perp Y \\mid W$)!',
        ],
        ahaMoment:
          'Look at the two opposite effects of conditioning: observing a **common cause (Fork)** *breaks* dependence ($X \\perp Y \\mid W$), whereas observing a **common effect (Collider)** *creates* dependence ($U \\not\\perp V \\mid W$ — often called "explaining away")!',
      },
      theoremAndFormula: {
        statement:
          'Events $A$ and $B$ are **conditionally independent given $C$** ($A \\perp B \\mid C$) iff $P(A \\cap B \\mid C) = P(A \\mid C)P(B \\mid C)$. Neither marginal independence nor conditional independence implies the other.',
        formulaLatex:
          'A \\perp B \\mid C \\iff P(A \\cap B \\mid C) = P(A \\mid C)\\,P(B \\mid C) \\iff P(A \\mid B, C) = P(A \\mid C)',
        plainEnglishDecoding:
          'Read a factored joint distribution like $P(U)P(V)P(W\\mid U,V)P(X\\mid W)P(Y\\mid W)$ (GATE 2024 Q.24) as a mini causal diagram: $U$ and $V$ meet head-to-head at $W$ (a collider), so $U \\perp V$ marginally yet $U \\not\\perp V \\mid W$. Meanwhile $X$ and $Y$ branch out from $W$ (a fork), so knowing $W$ makes $X \\perp Y \\mid W$.',
        workedMiniExamples: [
          {
            prompt:
              'In the Bayesian network $P(U,V,W,X,Y) = P(U)P(V)P(W\\mid U,V)P(X\\mid W)P(Y\\mid W)$ (GATE DA 2024 Q.24), verify why $U \\perp V$ holds yet $U \\perp V \\mid W$ fails.',
            solution:
              'Summing over $X,Y$ removes $P(X\\mid W), P(Y\\mid W)$ (each sums to $1$), and summing over $W$ removes $P(W\\mid U,V)$ (sums to $1$), leaving $P(U,V) = P(U)P(V) \\implies U \\perp V$. Conditioning on $W$ locks $P(W\\mid U,V)$ in place, coupling $U$ and $V$!',
          },
        ],
      },
      msqTraps: [
        {
          myth: 'If $A$ and $B$ are marginally independent ($A \\perp B$), they remain independent given any third event $C$ ($A \\perp B \\mid C$).',
          reality: 'FALSE whenever $C$ is a **collider** (common effect of $A$ and $B$)!',
          counterExample: 'GATE 2024 Q.24: $U \\perp V$ holds, while $U \\perp V \\mid W$ is FALSE.',
        },
        {
          myth: 'In a Naive Bayes model ($X_1 \\leftarrow Y \\to X_2$), features $X_1$ and $X_2$ are marginally independent ($X_1 \\perp X_2$).',
          reality: 'FALSE! Naive Bayes assumes **conditional** independence $X_1 \\perp X_2 \\mid Y$ given class $Y$. Marginally (averaging over Spam & Ham), words like `"FREE"` and `"WIN"` are strongly correlated!',
          counterExample: 'If $Y\\in\\{0,1\\}$ sets both $X_1, X_2$ to match $Y$ with prob $0.9$, $X_1 \\perp X_2 \\mid Y$ holds while $P(X_1=1, X_2=1) \\gg P(X_1=1)P(X_2=1)$.',
        },
      ],
      forwardBridges: [
        {
          targetSection: 'Sec 7',
          targetWeek: 7,
          topic: 'Naive Bayes & Bayesian Network d-Separation',
          whyItMatters:
            'Understanding the 3-node Fork ($X\\perp Y\\mid W$) vs. Collider ($U\\not\\perp V\\mid W$) explains both Naive Bayes and GATE DA 2024 Q.24.',
          pyqProof: 'GATE DA 2024 · Q.24 (1M MCQ)',
        },
      ],
    },
  ],
  howToThinkPlaybook: [
    {
      id: 'm2-c3-ht1',
      title: 'Split-the-Hinge Method for Overlapping Substructures',
      difficulty: 'Rank-Decider',
      relatedPyqs: ['GATE DA 2026 · Q.64'],
      problemStatement:
        'Each entry of a $5\\times 5$ matrix $A$ is independently $\\text{Bernoulli}(0.5)$. Find the probability that Row 2 sums to $3$ AND Column 3 sums to $3$.',
      triggerCue:
        'Two otherwise independent collections (a row and a column, two overlapping paths) that collide at **one shared element** ($A_{2,3}$).',
      bruteForceTrap:
        'Listing valid $5\\times 5$ grids or trying Inclusion-Exclusion across $2^9 = 512$ configurations of the 9 cells in Row 2 $\\cup$ Col 3.',
      mentalShift:
        'Condition on the exact value of the shared cell $A_{2,3} \\in \\{0, 1\\}$. The moment $A_{2,3}$ is fixed, the remaining $4$ cells of Row 2 and $4$ cells of Column 3 do NOT touch each other—so they multiply cleanly!',
      steps: [
        {
          label: '1. Identify the hinge cell',
          detail: 'Row 2 and Column 3 intersect solely at $A_{2,3}$, with $P(A_{2,3}=1) = P(A_{2,3}=0) = 1/2$.',
        },
        {
          label: '2. Evaluate Case $A_{2,3} = 1$',
          detail:
            'Remaining 4 row cells need sum $2$: $\\binom{4}{2}/16 = 6/16 = 3/8$. Remaining 4 col cells independently need sum $2$: $3/8$. Contribution $= \\frac{1}{2}\\cdot\\frac{3}{8}\\cdot\\frac{3}{8} = \\frac{9}{128}$.',
        },
        {
          label: '3. Evaluate Case $A_{2,3} = 0$',
          detail:
            'Remaining 4 row cells need sum $3$: $\\binom{4}{3}/16 = 4/16 = 1/4$. Remaining 4 col cells independently need sum $3$: $1/4$. Contribution $= \\frac{1}{2}\\cdot\\frac{1}{4}\\cdot\\frac{1}{4} = \\frac{4}{128}$.',
        },
        {
          label: '4. Sum the disjoint branches',
          detail: '$\\frac{9}{128} + \\frac{4}{128} = \\frac{13}{128} \\approx 0.1016$.',
        },
      ],
      lockInTakeaway:
        'Never multiply overlapping events directly—condition on the shared intersection first so the left and right halves decouple.',
    },
    {
      id: 'm2-c3-ht2',
      title: '20-Second X-Ray for Pairwise Independence & Colliders',
      difficulty: 'Tricky GATE 2-Mark',
      relatedPyqs: ['GATE DA 2024 · Q.24'],
      problemStatement:
        'Given a joint distribution $P(U,V,W,X,Y) = P(U)P(V)P(W\\mid U,V)P(X\\mid W)P(Y\\mid W)$, decide instantly which independence statements hold.',
      triggerCue:
        'Factored Bayesian Network product $P(A)P(B)P(C\\mid A,B)\\dots$ OR 3-event coin/ticket independence MSQ.',
      bruteForceTrap:
        'Constructing a giant 32-row joint truth table for $(U,V,W,X,Y)$ from scratch.',
      mentalShift:
        'Read the arrows directly from the conditional factors: $P(W\\mid U,V)$ means $U \\to W \\leftarrow V$ (**collider** at $W$), while $P(X\\mid W)P(Y\\mid W)$ means $X \\leftarrow W \\to Y$ (**fork** at $W$).',
      steps: [
        {
          label: '1. Check marginal parents $U, V$',
          detail:
            'Marginalizing out leaves $W, X, Y$ kills $P(X\\mid W), P(Y\\mid W), P(W\\mid U,V)$ via $\\sum = 1$, leaving $P(U)P(V)$: so $U \\perp V$ is TRUE.',
        },
        {
          label: '2. Check conditioning on collider $W$',
          detail:
            'Fixing $W$ pins $P(W\\mid U,V)$ inside the joint density, so $U$ and $V$ CANNOT factor apart: $U \\perp V \\mid W$ is FALSE.',
        },
        {
          label: '3. Check conditioning on fork/hub $W$ for descendants',
          detail:
            'Given $W$, $P(X,Y,U \\mid W)$ splits into separate factors $P(X\\mid W)P(Y\\mid W)P(U\\mid W)$, so $X \\perp Y \\mid W$ and $X \\perp U \\mid W$ are TRUE.',
        },
      ],
      lockInTakeaway:
        'Observing a **fork** ($\\leftarrow W \\to$) makes branches independent; observing a **collider** ($\\to W \\leftarrow$) makes parents dependent!',
    },
  ],
  arsenalCards: [
    {
      id: 'm2-c3-a1',
      badge: 'Weapon 1 · Hinge Split',
      whenYouSpot: 'Two events sharing one overlapping cell / draw / bottleneck $H$',
      directWeaponLatex:
        'P(A \\cap B) = \\sum_{h} P(H = h)\\,P(A \\mid H=h)\\,P(B \\mid H=h)',
      instantRule:
        'Condition on the shared piece $H$ so the remaining parts of $A$ and $B$ decouple and multiply.',
      tenSecondExample:
        '$5\\times 5$ matrix $P(R_2=3, C_3=3) = \\frac{1}{2}(3/8)^2 + \\frac{1}{2}(1/4)^2 = 13/128$ (GATE 2026 Q.64).',
      oneFatalTrap:
        'Multiplying $P(A)P(B)$ directly while ignoring the shared overlap cell $A_{2,3}$.',
    },
    {
      id: 'm2-c3-a2',
      badge: 'Weapon 2 · At Least One',
      whenYouSpot: '"At least one success" across $n$ independent trials',
      directWeaponLatex:
        'P(\\text{at least one}) = 1 - \\prod_{i=1}^n (1 - p_i) = 1 - (1-p)^n',
      instantRule:
        'Compute the chance every trial fails and subtract from $1$.',
      tenSecondExample:
        '$100$ fair dice, at least one `1`: $1 - (5/6)^{100}$ (GATE 2025 Q.45).',
      oneFatalTrap:
        'Summing $n \\cdot p$ directly (gives $> 1$ probabilities!) instead of multiplying complements.',
    },
    {
      id: 'm2-c3-a3',
      badge: 'Weapon 3 · Pairwise vs Collider',
      whenYouSpot: '3-event pairwise independence MSQ OR collider $P(W\\mid U,V)$',
      directWeaponLatex:
        '\\text{Pairwise Indep.} \\not\\implies \\text{Mutual Indep.}, \\qquad A\\perp B \\not\\iff A\\perp B \\mid C',
      instantRule:
        '2-coin parity ($H_1, H_2, H_1=H_2$) breaks mutual independence; observing a collider $W$ breaks $U\\perp V$.',
      tenSecondExample:
        'In $P(U)P(V)P(W\\mid U,V)P(X\\mid W)P(Y\\mid W)$ (GATE 2024 Q.24), $U \\perp V \\mid W$ is FALSE.',
      oneFatalTrap:
        'Assuming marginal independence $U \\perp V$ survives conditioning on a shared child $W$.',
    },
  ],
  questions: [
    {
      id: 'm2-c3-q1',
      tier: 'warmup',
      sourceLabel: 'Warmup Drill #1 · Parallel Reliability',
      marks: 1,
      type: 'NAT',
      stem: 'A server relies on two independent backup disks that work with probabilities $0.8$ and $0.9$, respectively. What is the probability that at least one disk works? (Answer to 2 decimal places)',
      natAnswer: { min: 0.98, max: 0.98, exactDisplay: '0.98' },
      triggerHint: 'Both fail only with probability $(1 - 0.8)(1 - 0.9)$.',
      intuitiveSolution: [
        'Disk 1 fails with probability $0.2$; Disk 2 fails with probability $0.1$.',
        'By independence, both fail with probability $0.2 \\times 0.1 = 0.02$.',
        '$P(\\text{at least one works}) = 1 - 0.02 = 0.98$.',
      ],
      directShortcutUsed: 'Complement product $1 - (0.2)(0.1) = 0.98$.',
    },
    {
      id: 'm2-c3-q2',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2025 · Q.45',
      year: 2025,
      marks: 2,
      type: 'MCQ',
      stem: 'A fair $6$-sided die is rolled $100$ times independently. What is the probability that at least one roll shows the face $1$?',
      options: [
        { id: 'A', text: '$\\left(\\frac{5}{6}\\right)^{100}$', whyTrueOrFalse: 'False: this is the probability that NO roll shows a $1$.' },
        { id: 'B', text: '$1 - \\left(\\frac{1}{6}\\right)^{100}$', whyTrueOrFalse: 'False: $(1/6)^{100}$ is the probability ALL 100 rolls show $1$.' },
        { id: 'C', text: '$1 - \\left(\\frac{5}{6}\\right)^{100}$', whyTrueOrFalse: 'True: complement of all 100 independent rolls showing $\\{2,3,4,5,6\\}$.' },
        { id: 'D', text: '$\\frac{100}{6}$', whyTrueOrFalse: 'False: exceeds $1$! Naive union sum ignores overlaps.' },
      ],
      correctOptions: ['C'],
      triggerHint: 'Invert "at least one $1$" to "all $100$ rolls avoid $1$".',
      intuitiveSolution: [
        'Each roll avoids $1$ with probability $5/6$.',
        'By independence of the $100$ rolls, all $100$ avoid $1$ with probability $(5/6)^{100}$.',
        'Subtract from $1$: $1 - (5/6)^{100}$.',
      ],
      directShortcutUsed: 'Independent complement rule $1 - (1-p)^n$.',
    },
    {
      id: 'm2-c3-q3',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2026 · Q.64',
      year: 2026,
      marks: 2,
      type: 'NAT',
      stem: 'Every entry of a $5 \\times 5$ matrix is filled independently with a $\\text{Bernoulli}(0.5)$ random variable (taking values $0$ or $1$ with equal probability $0.5$). What is the probability that the sum of entries in Row $2$ equals $3$ AND the sum of entries in Column $3$ simultaneously equals $3$? (Round to 2 decimal places)',
      natAnswer: { min: 0.095, max: 0.105, exactDisplay: '0.10 (exact: 13/128 ≈ 0.1016)' },
      triggerHint: 'Split into two cases based on the shared intersection entry $A_{2,3} \\in \\{0, 1\\}$.',
      intuitiveSolution: [
        'Row 2 and Column 3 intersect at a single cell $A_{2,3}$.',
        'Case $A_{2,3} = 1$ (prob $1/2$): the remaining $4$ cells of Row 2 must sum to $2$ (prob $\\binom{4}{2}/16 = 3/8$), and independently the remaining $4$ cells of Col 3 must sum to $2$ (prob $3/8$). Contribution $= \\frac{1}{2}\\cdot\\frac{3}{8}\\cdot\\frac{3}{8} = \\frac{9}{128}$.',
        'Case $A_{2,3} = 0$ (prob $1/2$): the remaining $4$ cells of Row 2 must sum to $3$ (prob $\\binom{4}{3}/16 = 1/4$), and independently the remaining $4$ cells of Col 3 must sum to $3$ (prob $1/4$). Contribution $= \\frac{1}{2}\\cdot\\frac{1}{4}\\cdot\\frac{1}{4} = \\frac{4}{128}$.',
        'Total probability $= \\frac{9+4}{128} = \\frac{13}{128} \\approx 0.1016 \\approx 0.10$.',
      ],
      directShortcutUsed: 'Hinge split on $A_{2,3}$: $\\frac{1}{2}(3/8)^2 + \\frac{1}{2}(1/4)^2 = 13/128$.',
    },
    {
      id: 'm2-c3-q4',
      tier: 'pyq',
      sourceLabel: 'GATE DA 2024 · Q.24',
      year: 2024,
      marks: 1,
      type: 'MCQ',
      stem: 'A joint probability distribution over five variables factorizes as $P(U, V, W, X, Y) = P(U)\\,P(V)\\,P(W \\mid U, V)\\,P(X \\mid W)\\,P(Y \\mid W)$. Which of the following conditional independence statements is FALSE?',
      options: [
        { id: 'A', text: '$U \\perp V$', whyTrueOrFalse: 'False to pick: $U \\perp V$ is TRUE after summing out $W, X, Y$.' },
        { id: 'B', text: '$X \\perp Y \\mid W$', whyTrueOrFalse: 'False to pick: $X \\leftarrow W \\to Y$ is a fork, so $X \\perp Y \\mid W$ is TRUE.' },
        { id: 'C', text: '$U \\perp V \\mid W$', whyTrueOrFalse: 'True (this statement is FALSE!): $W$ is a collider $U \\to W \\leftarrow V$; conditioning on $W$ induces dependence between $U$ and $V$.' },
        { id: 'D', text: '$X \\perp U \\mid W$', whyTrueOrFalse: 'False to pick: $W$ blocks the path $U \\to W \\to X$, so $X \\perp U \\mid W$ is TRUE.' },
      ],
      correctOptions: ['C'],
      triggerHint: 'Spot the collider $P(W \\mid U, V)$: conditioning on a common child couples its parents.',
      intuitiveSolution: [
        'Summing out $W, X, Y$ leaves $P(U,V) = P(U)P(V)$, so $U \\perp V$ is true.',
        'Conditioning on $W$ separates $P(X\\mid W)$, $P(Y\\mid W)$, and $P(U,V\\mid W)$, making $X \\perp Y \\mid W$ and $X \\perp U \\mid W$ true.',
        'However, $P(U, V \\mid W) \\propto P(U)P(V)P(W \\mid U, V)$, which does NOT factor into $g(U)h(V)$ in general — hence $U \\perp V \\mid W$ is FALSE.',
      ],
      directShortcutUsed: 'Collider rule: $U \\to W \\leftarrow V$ becomes dependent when $W$ is conditioned on.',
    },
    {
      id: 'm2-c3-q5',
      tier: 'tricky',
      sourceLabel: 'IITM-Caliber Trap · Pairwise vs Mutual MSQ',
      marks: 2,
      type: 'MSQ',
      stem: 'A fair coin is tossed twice independently. Let $A$ be "1st toss is Head", $B$ be "2nd toss is Head", and $C$ be "both tosses give the same outcome". Which of the following are TRUE?',
      options: [
        { id: 'A', text: '$A$ and $B$ are independent, and $A$ and $C$ are independent.', whyTrueOrFalse: 'True: $P(A\\cap B) = 1/4 = P(A)P(B)$ and $P(A\\cap C) = P(\\{\\text{HH}\\}) = 1/4 = P(A)P(C)$.' },
        { id: 'B', text: '$B$ and $C$ are independent.', whyTrueOrFalse: 'True: $P(B\\cap C) = P(\\{\\text{HH}\\}) = 1/4 = (1/2)(1/2)$.' },
        { id: 'C', text: '$A, B,$ and $C$ are mutually independent.', whyTrueOrFalse: 'False: $P(A\\cap B\\cap C) = P(\\{\\text{HH}\\}) = 1/4 \\neq (1/2)^3 = 1/8$.' },
        { id: 'D', text: '$P(C \\mid A \\cap B) = 1$.', whyTrueOrFalse: 'True: if both tosses are Head, they necessarily give the same outcome.' },
      ],
      correctOptions: ['A', 'B', 'D'],
      triggerHint: 'Compute $P(A\\cap B\\cap C)$ on $\\{\\text{HH}, \\text{HT}, \\text{TH}, \\text{TT}\\}$.',
      intuitiveSolution: [
        '$P(A)=P(B)=P(C)=1/2$, and each pairwise intersection is just $\\{\\text{HH}\\}$ with probability $1/4 = (1/2)(1/2)$, proving A and B.',
        'The triple intersection $A\\cap B\\cap C$ is ALSO $\\{\\text{HH}\\}$ with probability $1/4 \\neq 1/8$, so C is false.',
        'Given $A\\cap B$ ($\\text{HH}$), $C$ holds with certainty, making D true.',
      ],
      directShortcutUsed: '2-coin parity counter-example: pairwise independent $\\neq$ mutually independent.',
    },
    {
      id: 'm2-c3-q6',
      tier: 'tricky',
      sourceLabel: 'IITM-Style Total Probability Tree',
      marks: 2,
      type: 'NAT',
      stem: 'Urn 1 contains $3$ Red and $2$ Blue balls. Urn 2 contains $1$ Red and $4$ Blue balls. One ball is drawn at random from Urn 1 and placed into Urn 2 without looking. Then one ball is drawn at random from Urn 2. What is the probability that the ball drawn from Urn 2 is Red? (Round to 3 decimal places)',
      natAnswer: { min: 0.265, max: 0.268, exactDisplay: '4/15 ≈ 0.267' },
      triggerHint: 'Draw a 2-branch tree conditioned on the transferred ball being Red ($3/5$) or Blue ($2/5$).',
      intuitiveSolution: [
        'Branch 1 (transferred ball is Red, prob $3/5$): Urn 2 now has $2$ Red and $4$ Blue ($6$ balls total), so $P(\\text{Red}_2 \\mid \\text{Red}_1) = 2/6$.',
        'Branch 2 (transferred ball is Blue, prob $2/5$): Urn 2 now has $1$ Red and $5$ Blue ($6$ balls total), so $P(\\text{Red}_2 \\mid \\text{Blue}_1) = 1/6$.',
        'Total probability $= \\frac{3}{5}\\cdot\\frac{2}{6} + \\frac{2}{5}\\cdot\\frac{1}{6} = \\frac{6+2}{30} = \\frac{8}{30} = \\frac{4}{15} \\approx 0.267$.',
      ],
      directShortcutUsed: '2-step Total Probability tree across transferred ball color.',
    },
  ],
}

export const MODULE_2_CHAPTERS: ChapterData[] = [chapter1, chapter2, chapter3]

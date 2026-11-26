import type { ChapterData } from '../../types/curriculum'

export const MODULE_16_CHAPTERS: ChapterData[] = [
  {
    id: 'ga-ch1',
    number: 1,
    title: 'Quantitative Reasoning: Ratios, Percentages, Remainders, Series & Work-Speed',
    shortTitle: 'Quant, Series & Speed',
    estimatedHours: 3.5,
    dayLabel: 'Week 8 · Day 1',
    tagline:
      'Let us turn 15-mark General Aptitude into your calmest, highest-scoring bank of the exam: keep shifting percentage bases under control, solve work-rate problems with clean LCM units, use mod-3 and prime sieves on digit puzzles, swap logs without guessing, and split interleaved geometric series in seconds.',
    syllabusMapping: [
      'Quantitative Aptitude: Data interpretation, numerical computation and estimation (ratios, percentages, powers, exponents and logarithms, permutations and combinations, and series)',
      'Elementary mensuration, work-time-speed proportionality, and discrete probability',
    ],
    whatIsImportant: [
      'Effective base discipline in percentages (e.g., valid votes vs. total votes in GATE DA 2024 Q.5) and multiplicative scaling (area scales linearly with one scaled side, GATE DA 2025 Q.5)',
      'Modular arithmetic & prime factorization sieves for digit/number problems (mod 3 digit sum in 2024 Q.3; prime factoring 70 in 2026 Q.2)',
      'Exponent & logarithm algebra without solving for $x$ ($n^{\\log_{10} m} = m^{\\log_{10} n}$ in 2026 Q.4; $3^{x^2} = 27 \\cdot 9^x$ in 2025 Q.9)',
      'Splitting interleaved infinite geometric series into clean $\\frac{a}{1-r}$ sums (GATE DA 2024 Q.4) and constrained mean/median/mode counting (2026 Q.7)',
    ],
    whatIsNotImportant: [
      'Memorizing 50 obscure Vedic-math multiplication tricks — the GATE Virtual Scientific Calculator handles raw arithmetic',
      'Deep number theory theorems (Euler totient, Chinese Remainder Theorem for non-coprime moduli, Pell equations) — 0 marks in GATE DA GA',
      'Overly convoluted multi-train relative-motion or compound-installment banking formulas',
    ],
    inboundStream:
      'Modules 1–5 (Infinite geometric series from Calculus, counting & binomial probability from Prob & Stats).',
    outboundStream: [
      'Module 16 Ch.2 Data Interpretation weighted-base tables & cryptarithmetic',
      'Module 17 Full-paper time banking (finish all 10 GA questions in <= 20 minutes with >= 13/15 marks)',
    ],
    glossary: [
      {
        term: 'Percentage Change & Successive Multipliers',
        symbol: '$\\text{Net } \\%\\Delta = a + b + \\frac{ab}{100}$',
        plainEnglish:
          'Every percentage change acts as a multiplier $(1 + a/100)$ rather than a plain addition. That is why going up $20\\%$ and then down $20\\%$ does NOT bring you back to where you started — the second cut hits the bigger base!',
        tinyExample: 'Price $100 \\xrightarrow{+20\\%} 120 \\xrightarrow{-20\\%} 96$ (net $-4\\%$, matching $20 - 20 - 400/100 = -4\\%$).',
      },
      {
        term: 'Effective Base (Denominator Discipline)',
        symbol: '$\\text{Base}_{\\text{eff}} = \\text{Total} - \\text{Invalid}$',
        plainEnglish:
          'Whenever you read a percentage in a word problem, pause and ask: "$x\\%$ of WHAT?" In elections or surveys, percentages of *valid* votes must only multiply the valid pool, never the raw total.',
        tinyExample: 'With $1{,}15{,}000$ polled votes and $5{,}000$ invalid, $45\\%$ of valid votes is $0.45 \\times 1{,}10{,}000 = 49{,}500$.',
      },
      {
        term: 'Work–Rate Law & LCM Unit Method',
        symbol: '$W = \\text{LCM}(t_1, t_2, \\dots)$',
        plainEnglish:
          'Instead of wrestling with fractions like $\\frac{1}{12} + \\frac{1}{15} - \\frac{1}{20}$, pretend the whole job equals $\\text{LCM}(t_1, t_2, \\dots)$ bricks or liters. Every worker’s rate instantly becomes a neat whole number you can add or subtract!',
        tinyExample: 'For pipes taking $12, 15, 20$ hrs, set tank $= 60\\text{ L}$: rates are $+5, +4, -3\\text{ L/hr} \\implies$ net $+6\\text{ L/hr} \\implies 10\\text{ hrs}$.',
      },
      {
        term: 'Relative Speed & Harmonic Average Speed',
        symbol: '$v_{\\text{avg}} = \\frac{2v_1 v_2}{v_1 + v_2}$',
        plainEnglish:
          'When two objects move toward each other their relative speed adds ($v_1 + v_2$); in the same direction it subtracts ($|v_1 - v_2|$). And when one traveler covers two EQUAL distances at speeds $v_1$ and $v_2$, average speed is always the harmonic mean, never $\\frac{v_1 + v_2}{2}$.',
        tinyExample: 'Driving $60\\text{ km/h}$ out and $40\\text{ km/h}$ back over the same road averages $\\frac{2(60)(40)}{100} = 48\\text{ km/h}$, not $50$.',
      },
      {
        term: 'Divisibility & Modular Arithmetic (Mod 3 / Mod 9)',
        symbol: '$N \\equiv \\text{digit sum}(N) \\pmod 3$',
        plainEnglish:
          'An integer leaves the exact same remainder modulo $3$ (or $9$) as the sum of its decimal digits. In counting puzzles, checking which single omitted digit preserves divisibility by $3$ beats listing permutations every time.',
        tinyExample: 'Digits $\\{1,3,4,6,7\\}$ sum to $21 \\equiv 0 \\pmod 3$, so keeping $4$ digits divisible by $3$ means omitting $3$ or $6$ ($2 \\times 4! = 48$).',
      },
      {
        term: 'Prime Factorization Sieve',
        symbol: '$N = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$',
        plainEnglish:
          'Breaking a target product into prime building blocks instantly narrows down which single digits ($1..9$) can multiply together to make it, without brute-forcing combinations.',
        tinyExample: 'Since $70 = 2 \\times 5 \\times 7$ and $2 \\times 5 = 10$ cannot be a single digit, any 3-digit number with digit product $70$ MUST use $\\{2, 5, 7\\}$.',
      },
      {
        term: 'Exponent–Logarithm Swap Identity',
        symbol: '$n^{\\log_b m} = m^{\\log_b n}$',
        plainEnglish:
          'Taking $\\log_b$ of both sides turns a scary nested power into the symmetric product $(\\log_b m)(\\log_b n)$. Because multiplication is commutative, swapping the outer base $n$ and the inner argument $m$ never changes the value!',
        tinyExample: 'For any $m, n > 0$, $10^{\\log_{10} 100} = 10^2 = 100$ equals $100^{\\log_{10} 10} = 100^1 = 100$.',
      },
      {
        term: 'Interleaved Infinite Geometric Series',
        symbol: '$\\sum_{k=0}^{\\infty} a r^k = \\frac{a}{1 - r} \\; (|r| < 1)$',
        plainEnglish:
          'When an infinite sum alternates between two different denominators (like powers of $1/2$ and powers of $1/3$), split it into two separate geometric series and apply $\\frac{\\text{first term}}{1 - r}$ to each — splitting any leading integer like $2 = 1 + 1$ so both series start cleanly.',
        tinyExample: '$2 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{9} + \\dots = \\frac{1}{1-1/2} + \\frac{1}{1-1/3} = 2 + 1.5 = 3.5$.',
      },
      {
        term: 'Telescoping Series',
        symbol: '$\\frac{1}{k(k+d)} = \\frac{1}{d}\\left(\\frac{1}{k} - \\frac{1}{k+d}\\right)$',
        plainEnglish:
          'A telescoping sum collapses like a folding spyglass when partial fractions make consecutive terms cancel pairwise, leaving only the very first and very last pieces.',
        tinyExample: '$\\sum_{k=1}^{9} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 - \\frac{1}{10} = 0.9$.',
      },
      {
        term: 'Binomial Probability & Unique-Mode Squeezing',
        symbol: '$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$',
        plainEnglish:
          'For $n$ independent yes/no trials, count ALL valid orderings with $\\binom{n}{k}$ (don’t treat outcome counts as equally likely!). And for constrained mean/median/mode puzzles, lock the strictest ceiling (median and unique mode) from the top down before filling remaining slots.',
        tinyExample: 'In a $3$-child family, $2$ girls and $1$ boy occurs in $\\binom{3}{2} = 3$ orderings out of $2^3 = 8$, giving probability $3/8$.',
      },
    ],
    generatorId: 'ga-quant-series-gen',
    concepts: [
      {
        id: 'm16-c1-1',
        title: 'Percentages, Successive Scaling, Ratios & Work-Speed Invariants',
        subtitle: 'Why denominators shift silently—and how LCM units replace messy fractions',
        priority: 'core-pillar',
        buildsOn: 'Basic fractions and multiplicative factors',
        whyStudy:
          'General Aptitude accounts for 15 fast, high-leverage marks on every GATE DA paper—and quantitative word problems on elections, scaling rectangles, pipes, and travel speeds are the #1 source of silly denominator or fraction errors under clock pressure. Mastering multiplier chains and LCM unit conversion turns these into calm, 45-second guaranteed banks.',
        groundRules: [
          'Every percentage change is a multiplicative factor $(1 + a/100)$ applied to the CURRENT base, never a plain additive step—so $+a\\%$ followed by $+b\\%$ multiplies to net change $a + b + \\frac{ab}{100}\\%$ (meaning $+20\\%$ then $-20\\%$ always loses $4\\%$).',
          'Before multiplying any percentage, lock onto the exact effective denominator ("$x\\%$ of WHAT?"): e.g., percentages of *valid* votes multiply strictly $(\\text{Total} - \\text{Invalid})$, never raw total votes.',
          'For products like Area $= L \\times W$, scaling one factor by $c$ scales the entire product by $c$; for sums like Perimeter $= 2(L + W)$, scaling one term does NOT scale the whole sum by the same percentage.',
          'Rates—NOT times—add linearly when agents work together. Setting Total Work $= \\text{LCM}(t_1, t_2, \\dots)$ eliminates all fractions into clean integer rates; similarly, averaging speeds over EQUAL distances always gives the harmonic mean $\\frac{2v_1 v_2}{v_1 + v_2}$ because you spend more time driving at the slower speed.',
        ],
        toyExample: {
          title: 'The Shrinking Pizza & The Two Painters',
          scenario:
            'Suppose a rectangular brownie tray has length $L = 10\\text{ cm}$ and width $W = 4\\text{ cm}$ (area $= 40\\text{ cm}^2$). You widen the tray by $10\\%$ ($W_{\\text{new}} = 4.4\\text{ cm}$) while keeping $L$ fixed. Separately, Alice paints a wall in $6\\text{ hours}$ and Bob paints it in $4\\text{ hours}$. How fast do they finish together?',
          walkthroughSteps: [
            '1. **Multiplicative Scaling:** New area $= 10 \\times 4.4 = 44\\text{ cm}^2$. Increase $= 4 / 40 = +10\\%$. Notice you never needed $L$ or $W$—scaling one factor by $1.10$ scales the product by $1.10$!',
            '2. **Reverse-Base Warning:** If you then shrink the new $44\\text{ cm}^2$ tray by $10\\%$, you lose $4.4\\text{ cm}^2$ and land at $39.6\\text{ cm}^2$, NOT $40\\text{ cm}^2$!',
            '3. **Work-Rate via LCM Units:** Instead of adding fractions $\\frac{1}{6} + \\frac{1}{4}$, pretend the wall has $\\text{LCM}(6, 4) = 12\\text{ bricks}$.',
            '4. **Integer Rates:** Alice lays $12/6 = 2\\text{ bricks/hr}$ and Bob lays $12/4 = 3\\text{ bricks/hr}$. Together they lay $5\\text{ bricks/hr}$, finishing $12\\text{ bricks}$ in $12/5 = 2.4\\text{ hours}$.',
          ],
          ahaMoment:
            'Keep these two clean habits in mind: percentages act as **multiplier chains** ($\\times 1.10 \\times 0.90 = \\times 0.99$), never additive steps; and messy fraction work/pipe problems collapse into effortless whole-number addition the second you choose Total Work $= \\text{LCM}(\\text{times})$.',
        },
        theoremAndFormula: {
          statement:
            '1) **Successive Percentage Changes** $a\\%$ followed by $b\\%$ multiply by $(1 + a/100)(1 + b/100)$.\n2) **Work-Rate Law:** $\\text{Work} = \\text{Rate} \\times \\text{Time}$. Setting $\\text{Work} = \\text{LCM}(t_1, t_2, \\dots)$ converts all rates to integers.\n3) **Average Speed:** Over equal distances at speeds $v_1, v_2$, average speed is the harmonic mean $\\frac{2v_1 v_2}{v_1 + v_2}$, never $\\frac{v_1 + v_2}{2}$.',
          formulaLatex:
            '\\text{Net } \\%\\Delta = a + b + \\frac{ab}{100} \\qquad \\text{and} \\qquad v_{\\text{avg, equal dist}} = \\frac{2v_1 v_2}{v_1 + v_2}',
          plainEnglishDecoding:
            'Before multiplying any percentage by a number, pause for one heartbeat and ask: **"$x\\%$ of WHAT?"** In election or survey problems, percentages of *valid* votes must only multiply $(\\text{Total} - \\text{Invalid})$, never the raw Total.',
          workedMiniExamples: [
            {
              prompt:
                'Out of $1{,}15{,}000$ total votes polled, $5{,}000$ are invalid. Candidates B and C receive $25\\%$ and $20\\%$ of the valid votes respectively (GATE DA 2024 Q.5 pattern). Find their combined votes.',
              solution:
                'Valid votes $= 1{,}15{,}000 - 5{,}000 = 1{,}10{,}000$. Combined share $= 25\\% + 20\\% = 45\\%$ of valid votes $= 0.45 \\times 1{,}10{,}000 = 49{,}500$.',
            },
            {
              prompt:
                'If the width $W$ of every rectangle with $L > W$ increases by $10\\%$ while $L$ stays fixed (GATE DA 2025 Q.5 pattern), what happens to the area and perimeter?',
              solution:
                'Area $A_{\\text{new}} = L(1.1W) = 1.1LW$, so area always increases by exactly $10\\%$. Perimeter $2(L + 1.1W)$ increases by $\\frac{0.2W}{2(L+W)} < 5\\%$, which depends on $L/W$ and is NOT a fixed percentage!',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Increasing a price by $20\\%$ and then discounting by $20\\%$ returns to the original price.',
            reality: 'The $20\\%$ discount hits the inflated $1.2P$ base: $1.2 \\times 0.8 = 0.96$, a net $4\\%$ loss.',
            counterExample: '$100 \\xrightarrow{+20\\%} 120 \\xrightarrow{-20\\%} 96 \\neq 100$.',
          },
          {
            myth: 'If $L > W$ and $W$ increases by $10\\%$, the perimeter also increases by $10\\%$.',
            reality: 'Perimeter is a sum $2(L + W)$, not a product! Only the $W$ term scales by $1.1$.',
            counterExample: 'Take $L = 10, W = 1 \\implies P = 22$. New $W = 1.1 \\implies P_{\\text{new}} = 22.2$, only a $0.91\\%$ increase.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'GA Ch.2',
            targetWeek: 8,
            topic: 'Data Interpretation Tables & Pie Charts',
            whyItMatters:
              'DI traps in GATE DA almost always hide a shifted denominator (valid votes, active shifts, or net profit base).',
            pyqProof: 'GATE DA 2024 · Q.5 & 2025 · Q.5',
          },
        ],
      },
      {
        id: 'm16-c1-2',
        title: 'Divisibility, Remainders, Exponents & Logarithm Identities',
        subtitle: 'Solving digit puzzles and algebraic powers by invariant structure instead of brute force',
        priority: 'high-yield',
        buildsOn: 'Basic powers, prime factorization, and modular arithmetic',
        whyStudy:
          'GATE GA loves disguising tiny 20-second number-structure puzzles as terrifying calculations—like counting 4-digit multiples of $3$, deducing mystery digits whose product is $70$, or comparing $n^{\\log_{10} m}$ against $m^{\\log_{10} n}$. Knowing the underlying arithmetic invariants lets you solve them directly without touching brute-force trial lists or messy calculator roots.',
        groundRules: [
          'Because $10^k \\equiv 1 \\pmod 3$ and $10^k \\equiv 1 \\pmod 9$ for every $k \\ge 0$, any decimal integer leaves the exact same remainder mod $3$ (and mod $9$) as the sum of its digits—so picking $4$ of $5$ digits divisible by $3$ reduces to checking which single OMITTED digit keeps the remainder $0$.',
          'Prime factorization breaks any target digit product into indivisible building blocks. Because every decimal digit lies in $\\{0, 1, \\dots, 9\\}$, any prime factor $\\ge 5$ cannot merge with $2$ or $3$ into a single digit, immediately locking down the valid digit multiset.',
          'Logarithms convert nested powers into commutative multiplication: $\\log_b(n^{\\log_b m}) = (\\log_b m)(\\log_b n) = \\log_b(m^{\\log_b n})$, so $n^{\\log_b m} = m^{\\log_b n}$ holds identically for all $m, n > 0$ (no matter how large $m$ is compared to $n$!).',
          'In exponential equations like $3^{x^2} = 27 \\cdot 9^x$, rewrite every constant in one common prime base ($3$) to equate exponents directly—and check whether the target expression (like $2^{x^2 - 2x}$) can be evaluated from the composite exponent without ever solving for $x$.',
        ],
        toyExample: {
          title: 'Three Secret Digits Multiplying to 70',
          scenario:
            'A 3-digit integer has the product of its digits equal to $70$ (inspired by GATE DA 2026 Q.2). Can one of the digits be $1$? What is the sum of its digits?',
          walkthroughSteps: [
            '1. Factor $70$ into primes: $70 = 2 \\times 5 \\times 7$.',
            '2. Notice every prime factor ($2, 5, 7$) is a single-digit number ($< 10$).',
            '3. Could one digit be $1$? Then the remaining two digits must multiply to $70$. The largest possible product of two digits is $9 \\times 9 = 81$, and $70$ only splits into $7 \\times 10$ (since $10$ is not a single digit!).',
            '4. Therefore, regardless of digit order ($257, 572, 725, \\dots$), the multiset of digits MUST be $\\{2, 5, 7\\}$, so their sum is $2 + 5 + 7 = 14$.',
          ],
          ahaMoment:
            'Notice how cleanly prime factorization freezes the exact digits in place! Even without knowing which permutation of $\\{2, 5, 7\\}$ formed the number, you already know the exact digit sum.',
        },
        theoremAndFormula: {
          statement:
            '1) **Divisibility by 3 & 9:** $N \\equiv \\text{sum of digits}(N) \\pmod 3$ and $\\pmod 9$.\n2) **Log-Exponent Swap Identity:** Taking $\\log_b$ turns nested powers into a commutative product, proving $n^{\\log_b m} = m^{\\log_b n}$ for all $m, n > 0$ and base $b > 0, b \\neq 1$.\n3) **Remainder Cycle Rule:** $a^k \\bmod m$ always enters a short repeating cycle (often length $1, 2$, or $4$ mod $10$).',
          formulaLatex:
            'n^{\\log_{10} m} = m^{\\log_{10} n} \\qquad \\text{because} \\qquad \\log_{10}\\!\\left(n^{\\log_{10} m}\\right) = (\\log_{10} m)(\\log_{10} n)',
          plainEnglishDecoding:
            'Whenever a GATE GA question hands you an exponential equation like $3^{x^2} = 27 \\cdot 9^x$ (GATE DA 2025 Q.9) or compares $n^{\\log m}$ against $m^{\\log n}$ (GATE DA 2026 Q.4), resist the urge to punch decimals into the calculator — rewrite everything in one common prime base or take $\\log_{10}$ and watch the answer pop out cleanly.',
          workedMiniExamples: [
            {
              prompt:
                'How many 4-digit integers without repeated digits can be formed from $\\{1, 3, 4, 6, 7\\}$ that are divisible by $3$? (GATE DA 2024 Q.3)',
              solution:
                'Sum of all 5 digits is $1+3+4+6+7 = 21 \\equiv 0 \\pmod 3$. Choosing 4 digits means leaving 1 digit out. For the remaining 4 digits to sum to a multiple of $3$, the omitted digit must itself be a multiple of $3$ ($3$ or $6$). Leaving out $3$ gives $4! = 24$ numbers; leaving out $6$ gives $4! = 24$ numbers. Total $= 24 + 24 = 48$.',
            },
            {
              prompt:
                'If $3^{x^2} = 27 \\times 9^x$, evaluate $\\frac{2^{x^2}}{(2^x)^2}$ (GATE DA 2025 Q.9).',
              solution:
                'Rewrite in base $3$: $3^{x^2} = 3^3 \\cdot 3^{2x} = 3^{2x+3} \\implies x^2 - 2x = 3$. Then $\\frac{2^{x^2}}{2^{2x}} = 2^{x^2 - 2x} = 2^3 = 8$. You don’t even need to solve for $x$!',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $m > n > 0$, then $n^{\\log_{10} m} < m^{\\log_{10} n}$ because the larger base $m$ wins.',
            reality: 'Taking $\\log_{10}$ gives $\\log_{10} m \\cdot \\log_{10} n$ on both sides, so they are ALWAYS equal ($x = y$).',
            counterExample: '$n = 10, m = 100 \\implies 10^{\\log_{10} 100} = 10^2 = 100$ and $100^{\\log_{10} 10} = 100^1 = 100$.',
          },
          {
            myth: 'When a product of digits is $24$, the three digits must be $2, 3, 4$.',
            reality: 'Unlike $70 = 2 \\cdot 5 \\cdot 7$, composite small factors can merge or include $1$: $\\{1,3,8\\}, \\{1,4,6\\}, \\{2,2,6\\}, \\{2,3,4\\}$.',
            counterExample: '$1 \\times 3 \\times 8 = 24$ (sum $12$), while $2 \\times 3 \\times 4 = 24$ (sum $9$).',
          },
        ],
      },
      {
        id: 'm16-c1-3',
        title: 'Interleaved Infinite Series, Constrained Counting & Binomial Probability',
        subtitle: 'Decomposing messy series into $\\frac{a}{1-r}$ pairs and squeezing mean/median/mode tuples',
        priority: 'high-yield',
        buildsOn: 'Geometric series and elementary combinatorics',
        whyStudy:
          'Infinite series with alternating denominators, small-sample probability counts, and constrained mean/median/mode puzzles appear almost every year in GATE DA General Aptitude. Instead of punching endless partial sums into the calculator or enumerating dozens of tuples blindly, a few clean structural rules collapse each of these into a 30-second exact answer.',
        groundRules: [
          'An infinite geometric series $\\sum_{k=0}^{\\infty} a r^k$ converges to $\\frac{a}{1 - r}$ strictly when $|r| < 1$. When a sum mixes two different denominator families (like powers of $1/2$ and $1/3$), split it into two separate geometric series—breaking any leading constant (like $2 = 1 + 1$) so each series begins cleanly at $k = 0$.',
          'For rational series whose denominators factor as $k(k + d)$, partial fractions $\\frac{1}{k(k+d)} = \\frac{1}{d}(\\frac{1}{k} - \\frac{1}{k+d})$ create a telescoping chain where every interior term cancels pairwise, leaving only the boundary terms.',
          'In independent trial probability (such as $3$ children or $n$ coin flips), elementary ORDERED sequences ($2^n$ outcomes) are equally likely—NOT unordered counts! Always weight $k$ successes by the binomial ordering count $\\binom{n}{k}$.',
          'In constrained summary-statistic puzzles (fixed mean, median, and unique mode), sort the slots $a \\le b \\le c \\le d \\le e$ and anchor the tightest constraints FIRST from the top down (median fixes the middle slot; unique mode fixes frequency dominance and forbids ties elsewhere).',
        ],
        sandboxId: 'ga-synthesis-lab',
        toyExample: {
          title: 'Untangling Two Interleaved Tape Measures',
          scenario:
            'Look at the infinite sum $S = 2 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{27} + \\dots$ (GATE DA 2024 Q.4). Neighboring terms do NOT share a common ratio! How do you sum it in 15 seconds?',
          walkthroughSteps: [
            '1. Spot the two families hiding inside the tail: powers of $\\frac{1}{2}$ ($\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{16}, \\dots$) and powers of $\\frac{1}{3}$ ($\\frac{1}{3}, \\frac{1}{9}, \\frac{1}{27}, \\dots$).',
            '2. Notice the leading $2$ equals $1 + 1$! Give one $1$ to the $\\frac{1}{2}$ family and the other $1$ to the $\\frac{1}{3}$ family.',
            '3. Family 1: $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = \\frac{1}{1 - 1/2} = 2$.',
            '4. Family 2: $1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\dots = \\frac{1}{1 - 1/3} = \\frac{3}{2} = 1.5$.',
            '5. Add them: $S = 2 + 1.5 = 3.5 = \\frac{7}{2}$.',
          ],
          ahaMoment:
            'Whenever an infinite sum hops between two different denominators like $2^k$ and $3^k$, stay calm and **untangle it into two separate geometric series** — and remember to split a leading constant like $2 = 1 + 1$ so both series start neatly at power $0$!',
        },
        theoremAndFormula: {
          statement:
            '1) **Infinite Geometric Series:** For $|r| < 1$, $\\sum_{k=0}^{\\infty} a r^k = \\frac{a}{1-r}$.\n2) **Telescoping Partial Fractions:** $\\frac{1}{k(k+d)} = \\frac{1}{d}\\left(\\frac{1}{k} - \\frac{1}{k+d}\\right)$.\n3) **Binomial Probability:** In $n$ independent Bernoulli($p$) trials, $P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k} p^k (1-p)^{n-k}$.',
          formulaLatex:
            '\\sum_{k=0}^{\\infty} a r^k = \\frac{a}{1 - r} \\; (|r| < 1), \\qquad \\qquad P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}',
          plainEnglishDecoding:
            'Do not let an intimidating infinite sum scare you in General Aptitude: almost every single time, it is either **(a)** two interleaved geometric progressions with $|r| < 1$, or **(b)** a telescoping difference where all the middle terms cancel each other out.',
          workedMiniExamples: [
            {
              prompt:
                'In a 3-child family where each child is equally likely to be a boy or girl ($p = 1/2$), find the probability of having 2 girls and 1 boy (GATE DA 2024 Q.7).',
              solution:
                'Total outcomes $= 2^3 = 8$. Favorable orderings of $\\{G, G, B\\}$ $= \\binom{3}{2} = 3$ ($GGB, GBG, BGG$). Probability $= 3/8$.',
            },
            {
              prompt:
                'Count unordered 5-integer selections from $\\{0, 1, \\dots, 20\\}$ having mean $12$, median $18$, and single mode $20$ (GATE DA 2026 Q.7 pattern).',
              solution:
                'Order the 5 integers $a \\le b \\le c \\le d \\le e \\le 20$. Sum $= 5 \\times 12 = 60$, median $c = 18$. For $20$ to be the unique mode, $20$ must appear at least twice ($d = e = 20$), and $a, b, c$ must be strictly distinct ($a < b < 18$). Now $a + b = 60 - (18 + 20 + 20) = 2$. Since $0 \\le a < b$ are integers, only $(0, 2)$ works! So there is exactly $1$ valid selection: $\\{0, 2, 18, 20, 20\\}$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'In a 3-child family, the possible girl counts are $0, 1, 2, 3$, so 2 girls and 1 boy has probability $1/4$.',
            reality: 'Order matters in the sample space! $1$ girl + $2$ boys and $2$ girls + $1$ boy each happen in $3$ ways, whereas all-girls and all-boys happen in $1$ way each.',
            counterExample: '$P(2G, 1B) = 3/8 \\neq 1/4$.',
          },
          {
            myth: 'In $\\{a, b, 18, 20, 20\\}$ with $a + b = 2$, $(1, 1)$ is also a valid pair.',
            reality: 'If $a = b = 1$, then $1$ appears twice and $20$ appears twice—giving TWO modes instead of a *single* mode $20$!',
            counterExample: '$\\{1, 1, 18, 20, 20\\}$ is bimodal.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm16-c1-htt1',
        title: 'Spotting Hidden Exponent & Interleaved-Series Twins',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 Q.4', 'GATE DA 2025 Q.9', 'GATE DA 2026 Q.4'],
        problemStatement:
          'You face either a power equation like $3^{x^2} = 27 \\times 9^x$ asking for $\\frac{2^{x^2}}{(2^x)^2}$, or an infinite series $2 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{9} + \\dots$ whose consecutive terms have no constant ratio.',
        triggerCue:
          'Two different bases ($2^k, 3^k$) alternating in one sum, OR the exact algebraic expression in the exponent ($x^2 - 2x$) reappearing in the target fraction.',
        bruteForceTrap:
          'Computing decimal partial sums ($2 + 0.5 + 0.333 + \\dots$) or solving the quadratic for $x = 3, -1$ and substituting both roots into $2^{x^2}/2^{2x}$.',
        mentalShift:
          'Do not solve for the atomic variable or add terms sequentially—**match the composite exponent directly** ($x^2 - 2x = 3$) or **de-interleave the series by base** ($2^{-k}$ vs. $3^{-k}$).',
        steps: [
          {
            label: 'Step 1 — Factor into prime bases',
            detail:
              'Convert $27 \\times 9^x \\to 3^{2x+3}$, or group terms into powers of $1/2$ and powers of $1/3$.',
          },
          {
            label: 'Step 2 — Balance the leading constant',
            detail:
              'In $2 + \\frac{1}{2} + \\frac{1}{3} + \\dots$, split $2 = 1 + 1$ so both geometric progressions cleanly start at $a = 1$.',
          },
          {
            label: 'Step 3 — Evaluate in one line',
            detail:
              '$\\frac{1}{1-1/2} + \\frac{1}{1-1/3} = 2 + \\frac{3}{2} = \\frac{7}{2}$, or $2^{x^2-2x} = 2^3 = 8$.',
          },
        ],
        lockInTakeaway:
          'Never solve for $x$ if the target only uses $x^2 - 2x$; never sum sequentially if denominators split into two geometric families.',
      },
      {
        id: 'm16-c1-htt2',
        title: 'Squeezing Digit & Summary-Statistic Constraints from the Top Down',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 Q.3', 'GATE DA 2026 Q.2', 'GATE DA 2026 Q.7'],
        problemStatement:
          'Count how many unordered 5-integer selections from $0..20$ have mean $12$, median $18$, and a unique mode $20$ (or count 4-digit multiples of $3$ from 5 given digits).',
        triggerCue:
          'Word phrases like **"unique/single mode"**, **"without repetition"**, **"product of digits is 70"**, or **"divisible by 3"** on a tiny finite integer range.',
        bruteForceTrap:
          'Enumerating tuples blindly from $a = 0, 1, 2, \\dots$ or listing all $5 \\times 4 \\times 3 \\times 2 = 120$ 4-digit permutations and testing each by long division.',
        mentalShift:
          'Fix the **most restrictive constraint first** (mode/median from the top down, or which 1 digit is *excluded* mod 3) before touching the remaining slots.',
        steps: [
          {
            label: 'Step 1 — Anchor Median and Unique Mode',
            detail:
              'Sort $a \\le b \\le c \\le d \\le e \\le 20$. Median fixes $c = 18$; unique mode $20$ forces $d = e = 20$ (count $2$), because $20$ cannot appear $3$ times when $c=18$.',
          },
          {
            label: 'Step 2 — Convert Mean to Total Sum',
            detail:
              'Sum $= 5 \\times 12 = 60 \\implies a + b = 60 - (18 + 20 + 20) = 2$.',
          },
          {
            label: 'Step 3 — Enforce Unique-Mode Tie-Breaker',
            detail:
              'Since $20$ appears twice and is the *single* mode, $a$ and $b$ cannot tie: $a < b \\implies (0, 2)$ only ($1$ selection).',
          },
        ],
        lockInTakeaway:
          'High-constraint counting problems collapse when you anchor the ceiling (mode/median) or complement (the single omitted digit) first.',
      },
    ],
    arsenalCards: [
      {
        id: 'm16-c1-ars1',
        badge: 'Base & Scaling',
        whenYouSpot: 'Percentage split after invalid/excluded items, or one dimension scaled by $p\\%$',
        directWeaponLatex: '\\text{Base}_{\\text{eff}} = \\text{Total} - \\text{Invalid}, \\qquad A_{\\text{new}} = (1 + p/100)A',
        instantRule: 'Always subtract invalid/excluded items BEFORE applying share percentages; scaling one factor of a product scales the whole product identically.',
        tenSecondExample: '$115{,}000 - 5{,}000 = 110{,}000$; $45\\%$ of $110{,}000 = 49{,}500$ (2024 Q.5).',
        oneFatalTrap: 'Taking $45\\%$ of $115{,}000$ directly, or claiming $+10\\%$ then $-10\\%$ returns to $100\\%$.',
      },
      {
        id: 'm16-c1-ars2',
        badge: 'Power & Log Swap',
        whenYouSpot: 'Comparing $n^{\\log_b m}$ with $m^{\\log_b n}$, or matching bases in $3^{x^2} = 27 \\cdot 9^x$',
        directWeaponLatex: 'n^{\\log_b m} = m^{\\log_b n} \\quad (m, n > 0)',
        instantRule: 'Take $\\log_b$ of both expressions to turn asymmetric exponents into a symmetric product $(\\log_b m)(\\log_b n)$.',
        tenSecondExample: '$2^{\\log_{10} 8} = 8^{\\log_{10} 2} = 2^{3 \\log_{10} 2}$ immediately gives $x = y$ (2026 Q.4).',
        oneFatalTrap: 'Assuming the larger base $m > n$ makes $m^{\\log n} > n^{\\log m}$ without checking logarithms.',
      },
      {
        id: 'm16-c1-ars3',
        badge: 'Series & LCM Work',
        whenYouSpot: 'Interleaved powers in an infinite sum, or two agents with times $t_1, t_2$',
        directWeaponLatex: '\\sum_{k=0}^{\\infty} a r^k = \\frac{a}{1-r}, \\qquad W = \\text{LCM}(t_1, t_2)',
        instantRule: 'Split interleaved series by base (splitting leading integer $2 = 1+1$ if needed); set total work to $\\text{LCM}(t_1, t_2)$ for integer rates.',
        tenSecondExample: '$2 + \\frac{1}{2}+\\frac{1}{3}+\\frac{1}{4}+\\frac{1}{8}+\\frac{1}{9}+\\dots = \\frac{1}{1-1/2} + \\frac{1}{1-1/3} = 3.5$ (2024 Q.4).',
        oneFatalTrap: 'Forgetting to split the leading constant $2 = 1 + 1$, or averaging speeds arithmetically instead of harmonically.',
      },
    ],
    questions: [
      {
        id: 'm16-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Work-Rate LCM',
        marks: 1,
        type: 'NAT',
        stem: 'Pipe A fills a tank in $12\\text{ hours}$, Pipe B fills it in $15\\text{ hours}$, and Drain C empties the full tank in $20\\text{ hours}$. If all three are opened together on an empty tank, how many hours will it take to fill the tank completely?',
        natAnswer: { min: 10, max: 10, exactDisplay: '10' },
        triggerHint: 'Set tank capacity to $\\text{LCM}(12, 15, 20) = 60$ units.',
        intuitiveSolution: [
          'Let tank capacity $= \\text{LCM}(12, 15, 20) = 60\\text{ liters}$.',
          'Rates: A $= +5\\text{ L/hr}$, B $= +4\\text{ L/hr}$, C $= -3\\text{ L/hr}$.',
          'Net fill rate $= 5 + 4 - 3 = 6\\text{ L/hr}$, so time $= 60 / 6 = 10\\text{ hours}$.',
        ],
        directShortcutUsed: 'LCM integer-unit work conversion.',
      },
      {
        id: 'm16-c1-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.4 (1M)',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem: 'What is the sum of the infinite series $2 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{27} + \\dots$?',
        options: [
          { id: 'A', text: '$3.0$', whyTrueOrFalse: 'False — misses the $0.5$ remainder from the $1/3$ geometric sum.' },
          { id: 'B', text: '$3.5$', whyTrueOrFalse: 'True — splits into $(1+1/2+1/4+\\dots) + (1+1/3+1/9+\\dots) = 2 + 1.5 = 3.5$.' },
          { id: 'C', text: '$4.0$', whyTrueOrFalse: 'False — overestimates the $1/3$ series sum.' },
          { id: 'D', text: '$4.5$', whyTrueOrFalse: 'False — confuses $\\frac{1}{1-1/3} = 1.5$ with $2.5$.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Split $2 = 1 + 1$ so each geometric progression begins at $1$.',
        intuitiveSolution: [
          'Separate powers of $1/2$ and powers of $1/3$, giving $1$ from $2 = 1 + 1$ to each.',
          '$S_1 = \\sum_{k=0}^{\\infty} (1/2)^k = \\frac{1}{1 - 1/2} = 2$.',
          '$S_2 = \\sum_{k=0}^{\\infty} (1/3)^k = \\frac{1}{1 - 1/3} = \\frac{3}{2} = 1.5$.',
          'Total $= 2 + 1.5 = 3.5$.',
        ],
        directShortcutUsed: 'Interleaved GP decomposition with $2 = 1 + 1$.',
      },
      {
        id: 'm16-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.3 (1M)',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem: 'How many 4-digit integers without repeated digits can be formed from the digits $\\{1, 3, 4, 6, 7\\}$ such that the number is divisible by $3$?',
        options: [
          { id: 'A', text: '$24$', whyTrueOrFalse: 'False — only counts omitting one of the two multiples of $3$.' },
          { id: 'B', text: '$36$', whyTrueOrFalse: 'False — arithmetic miscount.' },
          { id: 'C', text: '$48$', whyTrueOrFalse: 'True — omitting $3$ or $6$ each gives $4! = 24$ valid 4-digit permutations.' },
          { id: 'D', text: '$60$', whyTrueOrFalse: 'False — not a multiple of $4! = 24$.' },
        ],
        correctOptions: ['C'],
        triggerHint: 'Check the sum of all 5 digits modulo $3$: $1+3+4+6+7 = 21$.',
        intuitiveSolution: [
          'The sum of all five available digits is $1+3+4+6+7 = 21 \\equiv 0 \\pmod 3$.',
          'Picking 4 digits means omitting 1 digit; the kept 4 sum to a multiple of $3$ iff the omitted digit is a multiple of $3$.',
          'Only $3$ and $6$ are divisible by $3$, giving $2 \\times 4! = 48$ valid integers.',
        ],
        directShortcutUsed: 'Complement-digit mod-3 invariant.',
      },
      {
        id: 'm16-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.4 (1M)',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem: 'For real numbers $m > n > 0$, define $x = n^{\\log_{10}(m)}$ and $y = m^{\\log_{10}(n)}$. Which relation always holds?',
        options: [
          { id: 'A', text: '$x > y$', whyTrueOrFalse: 'False — symmetry of $\\log_{10}(m)\\log_{10}(n)$ forces equality.' },
          { id: 'B', text: '$x < y$', whyTrueOrFalse: 'False — larger base does not outgrow smaller base here.' },
          { id: 'C', text: '$x = y$', whyTrueOrFalse: 'True — both have base-10 logarithm equal to $\\log_{10}(m)\\log_{10}(n)$.' },
          { id: 'D', text: '$x + y = 1$', whyTrueOrFalse: 'False — easily falsified at $m=100, n=10$ where $x=y=100$.' },
        ],
        correctOptions: ['C'],
        triggerHint: 'Take $\\log_{10}$ of both $x$ and $y$.',
        intuitiveSolution: [
          '$\\log_{10}(x) = \\log_{10}(m) \\cdot \\log_{10}(n)$.',
          '$\\log_{10}(y) = \\log_{10}(n) \\cdot \\log_{10}(m)$.',
          'Since $\\log_{10}$ is one-to-one on $(0, \\infty)$, $\\log_{10}(x) = \\log_{10}(y) \\implies x = y$.',
        ],
        directShortcutUsed: 'Logarithm-exponent swap identity.',
      },
      {
        id: 'm16-c1-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.9 (2M)',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'If $3^{x^2} = 27 \\times 9^x$, what is the value of $\\frac{2^{x^2}}{(2^x)^2}$?',
        options: [
          { id: 'A', text: '$2$', whyTrueOrFalse: 'False — corresponds to exponent $1$, not $3$.' },
          { id: 'B', text: '$4$', whyTrueOrFalse: 'False — corresponds to exponent $2$.' },
          { id: 'C', text: '$8$', whyTrueOrFalse: 'True — $3^{x^2} = 3^{2x+3} \\implies x^2 - 2x = 3 \\implies 2^{x^2 - 2x} = 2^3 = 8$.' },
          { id: 'D', text: '$16$', whyTrueOrFalse: 'False — corresponds to exponent $4$.' },
        ],
        correctOptions: ['C'],
        triggerHint: 'Express both sides as powers of $3$, and notice the target is $2^{x^2 - 2x}$.',
        intuitiveSolution: [
          '$27 \\times 9^x = 3^3 \\times (3^2)^x = 3^{2x+3}$.',
          'Equating exponents of base $3$: $x^2 = 2x + 3 \\implies x^2 - 2x = 3$.',
          'Target: $\\frac{2^{x^2}}{(2^x)^2} = 2^{x^2 - 2x} = 2^3 = 8$.',
        ],
        directShortcutUsed: 'Composite exponent matching without solving for $x$.',
      },
      {
        id: 'm16-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Mock · Mod-2026 Q.7 Pattern',
        marks: 2,
        type: 'NAT',
        stem: 'Consider unordered selections of $5$ integers from $\\{0, 1, 2, \\dots, 20\\}$ (repetitions allowed) such that the arithmetic mean is $12$, the median is $18$, and the unique mode is $20$. How many such unordered selections exist?',
        natAnswer: { min: 1, max: 1, exactDisplay: '1' },
        triggerHint: 'Fix $c = 18$ and $d = e = 20$ first; then check what keeps $20$ as the ONLY mode.',
        intuitiveSolution: [
          'Sort the 5 numbers $a \\le b \\le c \\le d \\le e \\le 20$. Median $c = 18$ and total sum $= 5 \\times 12 = 60$.',
          'Since $20$ is the unique mode and $c = 18$, $20$ can appear at most twice: $d = e = 20$.',
          'Then $a + b = 60 - (18 + 20 + 20) = 2$. Because $20$ appears twice, $a$ and $b$ cannot tie, forcing $0 \\le a < b$.',
          'The sole integer pair is $(a, b) = (0, 2)$, giving $1$ selection: $\\{0, 2, 18, 20, 20\\}$.',
        ],
        directShortcutUsed: 'Top-down median/mode anchoring + unique-mode tie exclusion.',
      },
    ],
  },
  {
    id: 'ga-ch2',
    number: 2,
    title: 'Data Interpretation, Venn Diagrams, Cryptarithmetic & Analytical Deduction',
    shortTitle: 'DI, Venn & Deduction',
    estimatedHours: 3.5,
    dayLabel: 'Week 8 · Day 2',
    tagline:
      'Let us read tables, bar histograms, overlapping diagrams, unimodal plots, cryptarithmetic squares, and knockout brackets with calm precision — canceling nuisance columns and pruning giant search spaces down to a single survivor.',
    syllabusMapping: [
      'Data Interpretation: Data graphs (bar graphs, pie charts, and other graphs representing data), 2- and 3-dimensional plots, maps, and tables',
      'Analytical Aptitude: Logic, deduction and induction, analogy, numerical relations and reasoning',
    ],
    whatIsImportant: [
      'Reading table/histogram means via shifted origin $\\bar{X} = x_0 + \\frac{1}{N}\\sum f_i(x_i - x_0)$ (Dr. Gita shift-earnings in GATE DA 2025 Q.10) and investment-difference linear checks (2024 Q.8)',
      'Exact inclusion-exclusion & additive region rules in overlapping shapes (GATE DA 2025 Q.4) and unimodal curve comparisons ($a_1 < 50 < a_2$, 2025 Q.7)',
      'Parity & units-digit sieving in digit cryptarithmetic ($(PQ)^2 + (RS)^2 = XYP$ in GATE DA 2026 Q.9)',
      'Tournament/scheduling invariant tracking (win counts and elimination parity in 2026 Q.8; planar region 4-color/3-color symmetry in 2024 Q.2)',
    ],
    whatIsNotImportant: [
      'Multi-page banking-exam DI sets requiring 15 decimal divisions per question — GATE DA gives 1–2 crisp steps per chart',
      'Obscure syllogism Venn-diagram terminology (Barbara, Celarent, Darii) — direct set containment diagrams suffice',
      'Full 6-variable linear system inversion on tables — look for the difference/ratio row first',
    ],
    inboundStream:
      'GA Ch.1 effective-base percentages; Sec 1 descriptive mean/counting; Sec 7 Propositional Logic.',
    outboundStream: [
      'Module 16 Ch.3 Spatial symmetry & verbal deductive traps',
      'Core DA Sections 1 & 5 (confusion tables, histogram reading, SQL/cube counts)',
    ],
    glossary: [
      {
        term: 'Working-Origin (Shifted) Histogram Mean',
        symbol: '$\\bar{X} = x_0 + \\frac{1}{N}\\sum_i f_i(x_i - x_0)$',
        plainEnglish:
          'Instead of multiplying big bin values by large counts, pick a central bin $x_0$ as your zero point, sum the tiny positive and negative deviations $f_i(x_i - x_0)$, divide by $N$, and add back to $x_0$.',
        tinyExample: 'Around $x_0 = 6$ with $100$ shifts and net deviation $+30$, $\\bar{X} = 6 + 30/100 = 6.3$ in seconds.',
      },
      {
        term: 'Column-Cancellation Difference Trick',
        symbol: '$\\Delta A \\cdot r_A = \\Delta \\text{Return}$',
        plainEnglish:
          'When two rows in a Data Interpretation table share identical amounts in all columns except one, simply subtract the two rows! Every shared unknown vanishes immediately, isolating the one column you care about.',
        tinyExample: 'If Investor Y holds the exact same Funds B and C as X, plus $\\text{Rs. } 10{,}000$ extra in Fund A earning $\\text{Rs. } 500$ more, $r_A = 500/10{,}000 = 5\\%$.',
      },
      {
        term: 'Complement Threshold Counting',
        symbol: '$\\#(U \\le t) = N_{\\text{total}} - \\#(U > t)$',
        plainEnglish:
          'When counting cells in a grid or matrix that satisfy a threshold (like $U \\le 4$), count whichever side is rarer and subtract from $N_{\\text{total}}$ — always double-checking whether the boundary is inclusive ($\\le$) or strict ($<$).',
        tinyExample: 'In a $4 \\times 4$ matrix ($16$ cells) where $5$ pixels have $U > 4$, exactly $16 - 5 = 11$ pixels satisfy $U \\le 4$.',
      },
      {
        term: 'Venn Inclusion–Exclusion Principle',
        symbol: '$|A \\cup B \\cup C| = \\sum |A| - \\sum |A \\cap B| + |A \\cap B \\cap C|$',
        plainEnglish:
          'When counting people in overlapping circles, adding the individual circles double-counts the pairwise overlaps, so we subtract them — and because that removes the triple center one too many times, we add $|A \\cap B \\cap C|$ back in.',
        tinyExample: 'If $60$ like Python, $50$ like SQL, and $85$ like at least one, then $60 + 50 - 85 = 25$ like both.',
      },
      {
        term: 'Additive Overlap Region Diagram',
        symbol: '$\\text{Region}(R \\cap T \\cap E) = R + T + E$',
        plainEnglish:
          'Some visual puzzles assign a secret number to each shape and show the *sum* of all shapes covering a point (different from Venn set counts!). Peel these puzzles from the outermost single-shape region inward.',
        tinyExample: 'If $R$-only $= 6$ and $(R \\cap T)\\setminus E = 11$, then $T = 11 - 6 = 5$ immediately.',
      },
      {
        term: 'Unimodal Straddle Property',
        symbol: '$x_1 < x_2,\\; f(x_1) = f(x_2) \\implies x_1 < x^* < x_2$',
        plainEnglish:
          'If a curve strictly climbs up to a single peak $x^*$ and strictly falls afterward, two different inputs can NEVER hit the same height on the same side of the peak — one must sit left of $x^*$ and one must sit right (without assuming symmetry!).',
        tinyExample: 'If weight rises strictly until age $50$ and falls strictly after, equal weights at ages $a_1 < a_2$ force $a_1 < 50 < a_2$.',
      },
      {
        term: 'Cryptarithmetic Parity & Bound Sieve',
        symbol: '$n^2 + (n+1)^2 \\equiv 1 \\pmod 2$',
        plainEnglish:
          'Instead of testing dozens of letter-to-digit assignments by trial and error, stack three fast filters first: digit-length bounds, even/odd parity on the units digit, and distinct-letter carry rules.',
        tinyExample: 'In $(PQ)^2 + (RS)^2 = XYP$ with consecutive $PQ, RS$, $2(PQ)^2 < 1000$ gives $PQ \\le 22$, odd parity forces $P = 1$, and $R \\neq 1$ forces $19, 20$.',
      },
      {
        term: 'Knockout Tournament Invariant',
        symbol: '$\\text{Total matches} = N - 1$',
        plainEnglish:
          'In any single-elimination tournament with $N$ players and no draws, every match sends home exactly $1$ loser. Since $N - 1$ players must be eliminated to crown $1$ champion, there are ALWAYS $N - 1$ total matches — regardless of bracket shape or byes!',
        tinyExample: 'A $16$-player knockout tournament plays exactly $16 - 1 = 15$ matches ($8 + 4 + 2 + 1$).',
      },
      {
        term: 'Chromatic Number & Odd-Wheel Coloring',
        symbol: '$\\chi(\\text{odd cycle}) = 3,\\; \\chi(\\text{odd wheel}) = 4$',
        plainEnglish:
          'The chromatic number is the fewest colors needed so no two adjacent map regions share a color. An even ring needs only $2$ colors, an odd ring needs $3$, and if a central hub touches every region in an odd ring, it forces a $4$-th color.',
        tinyExample: 'A $5$-region outer ring touching a central pentagon hub forms an odd wheel requiring $3 + 1 = 4$ colors.',
      },
      {
        term: 'Syllogism & Set-Containment Deduction',
        symbol: '$A \\subseteq B,\\; B \\subseteq C \\implies A \\subseteq C$',
        plainEnglish:
          'A syllogism tests whether a conclusion is *forced* in EVERY valid Venn diagram matching the premises ("All A are B", "Some B are C"). A single valid counter-diagram where the conclusion fails is enough to reject it.',
        tinyExample: 'From "All dogs are mammals" and "Some mammals swim", you cannot conclude "Some dogs swim" because the swimmers could all be whales.',
      },
    ],
    generatorId: 'ga-quant-series-gen',
    concepts: [
      {
        id: 'm16-c2-1',
        title: 'Data Interpretation: Tables, Bar Histograms, Pie Charts & Difference Tricks',
        subtitle: 'Reading visual data accurately and canceling shared columns by subtraction',
        priority: 'core-pillar',
        buildsOn: 'GA Ch.1 ratios, percentages, and weighted averages',
        whyStudy:
          'Unlike banking exams packed with tedious 6-digit divisions, GATE DA Data Interpretation questions test whether you spot clean algebraic shortcuts hidden inside tables, histograms, and pixel grids. Learning to cancel shared columns and shift histogram origins cuts solving time in half and protects you against arithmetic slips.',
        groundRules: [
          'Before solving simultaneous equations from a multi-column table, scan for two rows that match (or scale cleanly) in all columns except one—subtracting those two rows annihilates every nuisance unknown immediately.',
          'For any grouped frequency table or bar histogram, shifting by a central working origin $x_0$ computes the exact mean via tiny signed deviations: $\\bar{X} = x_0 + \\frac{1}{N}\\sum f_i(x_i - x_0)$. Always check the y-axis first to confirm whether bar heights are raw counts or proportions.',
          'By linearity of expectation, the average of any linear transformation $E = c(X - k)$ equals $c(\\bar{X} - k)$—so compute $\\bar{X}$ once and apply the pricing/payoff formula only at the very end.',
          'When counting cells satisfying a threshold (like $U \\le 4$) in a matrix, verify strict ($<$) vs. inclusive ($\\le$) boundaries and double-check via the complement $N_{\\text{total}} - \\#(U > 4)$ whenever the opposite side has fewer entries.',
        ],
        sandboxId: 'ga-synthesis-lab',
        toyExample: {
          title: 'Two Friends Splitting Three Mutual Funds',
          scenario:
            'Investor 1 puts $\\text{Rs. } 10{,}000$ in Fund A, $\\text{Rs. } 20{,}000$ in Fund B, and $\\text{Rs. } 20{,}000$ in Fund C. Investor 2 puts $\\text{Rs. } 20{,}000$ in Fund A, $\\text{Rs. } 20{,}000$ in Fund B, and $\\text{Rs. } 20{,}000$ in Fund C. Investor 2 earns $\\text{Rs. } 500$ more overall than Investor 1 (patterned on GATE DA 2024 Q.8). What is Fund A’s annual return rate?',
          walkthroughSteps: [
            '1. Do NOT write two long equations with rates $r_A, r_B, r_C$!',
            '2. Compare Investor 2 minus Investor 1 column by column: Fund B is identical ($20\\text{k} - 20\\text{k} = 0$) and Fund C is identical ($20\\text{k} - 20\\text{k} = 0$).',
            '3. The ONLY difference is an extra $\\text{Rs. } 10{,}000$ in Fund A.',
            '4. Since that extra $\\text{Rs. } 10{,}000$ yielded $\\text{Rs. } 500$, Fund A’s annual return is $\\frac{500}{10{,}000} = 5\\%$.',
          ],
          ahaMoment:
            'Always scan for symmetry before writing simultaneous equations: **subtracting or scaling matching rows** wipes out nuisance unknowns ($r_B, r_C$) in a single step!',
        },
        theoremAndFormula: {
          statement:
            '1) **Grouped Histogram Mean:** $\\bar{X} = \\frac{\\sum f_i x_i}{\\sum f_i}$. Choose a working origin $x_0$ so $\\bar{X} = x_0 + \\frac{\\sum f_i(x_i - x_0)}{N}$.\n2) **Linear Pricing / Earnings Transform:** If shift earning is $E = c(\\bar{X} - k)$, linearity of expectation gives $\\bar{E} = c(\\bar{X} - k)$ directly without computing per-bin earnings.\n3) **Matrix / Threshold Counting:** Scan row-by-row with running counts ($U \\le 4$ in a $4\\times 4$ matrix, GATE DA 2025 Q.3) and double-check via total cells minus complement ($16 - \\#(U > 4)$).',
          formulaLatex:
            '\\bar{X} = x_0 + \\frac{\\sum_{i} f_i (x_i - x_0)}{\\sum_i f_i}, \\qquad \\text{and} \\qquad \\#(U \\le 4) = N_{\\text{total}} - \\#(U > 4)',
          plainEnglishDecoding:
            'Whenever you open a bar-histogram question (like GATE DA 2025 Q.10 across $100$ shifts), first glance at the y-axis to confirm whether the bars sum to $100$ (raw counts) or $1.0$ (proportions). Then compute the mean $\\bar{X}$ cleanly around a central bin and plug it into linear formulas like $\\text{Rs. } 1000(\\bar{X} - 0.2)$ just once at the very end!',
          workedMiniExamples: [
            {
              prompt:
                'Over $100$ shifts, Dr. Gita sees $4, 5, 6, 7, 8$ patients in $10, 15, 30, 25, 20$ shifts respectively, and earns $\\text{Rs. } 1000(X - 0.2)$ per shift (GATE DA 2025 Q.10 pattern). Find her average earning per shift.',
              solution:
                'Take origin $x_0 = 6$: deviations are $-2,-1,0,+1,+2$. $\\sum f_i(x_i-6) = 10(-2) + 15(-1) + 30(0) + 25(1) + 20(2) = -20 - 15 + 25 + 40 = +30$. Thus $\\bar{X} = 6 + 30/100 = 6.3$, and average earning $= 1000(6.3 - 0.2) = \\text{Rs. } 6{,}100$.',
            },
            {
              prompt:
                'In a $4 \\times 4$ grayscale pixel matrix, entries $> 4$ occur at $5$ cells (GATE DA 2025 Q.3 pattern). How many pixels satisfy $U \\le 4$?',
              solution:
                'Total pixels $= 4 \\times 4 = 16$. Counting the complement is faster and less error-prone: $16 - 5 = 11$ pixels.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'In a $4 \\times 4$ intensity matrix asking for $U \\le 4$, entries equal to $4$ should be excluded.',
            reality: '$\\le 4$ is inclusive! Always check strict ($<$) vs. non-strict ($\\le$) boundaries on threshold DI questions.',
            counterExample: 'A pixel with value $4$ satisfies $U \\le 4$, whereas $U < 4$ excludes it.',
          },
          {
            myth: 'When two investors hold different total portfolios, their return difference cannot isolate one fund.',
            reality: 'If all *other* funds appear in equal amounts (or equal proportions after scaling one investor’s row), subtracting rows eliminates every unknown except one.',
            counterExample: 'Equal B and C holdings cancel cleanly regardless of B and C’s return rates.',
          },
        ],
      },
      {
        id: 'm16-c2-2',
        title: 'Venn Diagrams, Additive Region Rules & Unimodal Analytical Plots',
        subtitle: 'Solving overlapping-set counts and curve-comparison puzzles without formulas',
        priority: 'high-yield',
        buildsOn: 'Basic sets and function monotonicity',
        whyStudy:
          'Analytical aptitude questions frequently show overlapping shapes or qualitative rise-and-fall graphs with no algebraic formula at all. Knowing the exact distinction between set-count Venn diagrams and additive overlap puzzles—plus how unimodal curves constrain equal outputs—lets you deduce the exact truth without inventing fake equations.',
        groundRules: [
          'Always check which grammar an overlapping-shape diagram uses: in a Venn set-count diagram, regions partition people so overlaps subtract via Inclusion-Exclusion ($|A \\cup B \\cup C| = \\sum|A| - \\sum|A \\cap B| + |A \\cap B \\cap C|$); in an additive region puzzle, overlapping areas display the SUM of the numbers belonging to every covering shape.',
          'In word surveys, a label like "60 students study Math" means the ENTIRE Math circle (including overlaps), NOT "Math only"—unless the word *only* is explicitly printed.',
          'In an additive overlap diagram, peel from the outermost single-shape regions inward (or subtract nested regions step by step) to isolate each shape’s secret value cleanly.',
          'On a unimodal function that strictly increases up to a single peak $x^*$ and strictly decreases afterward, a strictly monotonic half can NEVER hit the same value twice—so $x_1 < x_2$ with $f(x_1) = f(x_2)$ forces $x_1 < x^* < x_2$ (without implying symmetry $x_1 + x_2 = 2x^*$!).',
        ],
        toyExample: {
          title: 'Three Overlapping Shapes with a Hidden Rule',
          scenario:
            'A rectangle (code $1$), triangle (code $2$), and ellipse (code $3$) overlap on a board (inspired by GATE DA 2025 Q.4). Suppose each shape contributes a secret integer value ($R, T, E$), and any point inside multiple shapes shows the **sum** of the values of the shapes containing it. If the rectangle-only region shows $3$, rectangle$\\cap$triangle shows $5$, and rectangle$\\cap$triangle$\\cap$ellipse shows $9$, what are $R, T, E$?',
          walkthroughSteps: [
            '1. Rectangle-only region contains ONLY the rectangle, so $R = 3$.',
            '2. Rectangle $\\cap$ triangle (outside ellipse) equals $R + T = 5 \\implies T = 5 - 3 = 2$.',
            '3. Triple overlap equals $R + T + E = 9 \\implies E = 9 - 5 = 4$.',
            '4. Every region is unlocked from the outermost single-shape region inward (or by subtracting nested overlaps)!',
          ],
          ahaMoment:
            'Pause for two seconds whenever you see overlapping circles or shapes and check which grammar the puzzle uses: **additive region values** (where overlaps add the numbers of containing shapes) behave completely differently from **Venn set counts** (where overlaps subtract via inclusion-exclusion)!',
        },
        theoremAndFormula: {
          statement:
            '1) **3-Set Inclusion-Exclusion:** $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |B \\cap C| - |C \\cap A| + |A \\cap B \\cap C|$.\n2) **Unimodal Function Rule:** If $f(x)$ strictly increases for $x < x^*$ and strictly decreases for $x > x^*$, then for any two distinct inputs $x_1 < x_2$ with $f(x_1) = f(x_2)$, they MUST straddle the peak: $x_1 < x^* < x_2$.',
          formulaLatex:
            '\\text{Unimodal peak at } x^* \\text{ and } x_1 < x_2 \\text{ with } f(x_1) = f(x_2) \\implies x_1 < x^* < x_2',
          plainEnglishDecoding:
            'Picture walking up a single hill and walking back down the other side: you can stand at the exact same altitude twice **only once on the climb and once on the descent**. Never invent a parabola equation when the hill shape alone locks in $a_1 < 50 < a_2$ (GATE DA 2025 Q.7)!',
          workedMiniExamples: [
            {
              prompt:
                'Body weight $W(a)$ strictly increases with age up to $50$ and strictly decreases thereafter. Two brothers of ages $a_1 < a_2$ weigh the exact same today (GATE DA 2025 Q.7). What must hold?',
              solution:
                'If both were $\\le 50$, strict increase forces $W(a_1) < W(a_2)$. If both were $\\ge 50$, strict decrease forces $W(a_1) > W(a_2)$. Thus $a_1 < 50 < a_2$.',
            },
            {
              prompt:
                'In a class of $100$ students, $60$ like Python, $50$ like SQL, and $15$ like neither. How many like BOTH?',
              solution:
                '$|\\text{Python} \\cup \\text{SQL}| = 100 - 15 = 85$. Hence $|P \\cap S| = 60 + 50 - 85 = 25$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $f(x)$ increases up to $50$ and decreases after $50$, and $a_1 < a_2$ have $f(a_1)=f(a_2)$, then $a_1 + a_2 = 100$.',
            reality: 'The curve need NOT be symmetric about $50$! The left climb can be steep while the right descent is gentle.',
            counterExample: 'If weight jumps fast in youth and drops slowly after $50$, $a_1 = 20$ can match $a_2 = 65$ ($20 + 65 = 85 \\neq 100$).',
          },
          {
            myth: 'In a Venn survey, "Students who study Math" means "Math ONLY".',
            reality: 'Unless the word **only** appears, $|\\text{Math}|$ includes all overlaps $|\\text{Math} \\cap \\text{CS}|$.',
            counterExample: 'Subtracting $|\\text{Math}| + |\\text{CS}|$ without removing $|M \\cap C|$ double-counts the intersection.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 3 Calculus',
            targetWeek: 1,
            topic: 'Monotonicity & Rolle’s / Unimodal Extrema',
            whyItMatters:
              'Recognizing unimodal shapes immediately kills root-counting and comparison MSQs in both GA and Calculus.',
            pyqProof: 'GATE DA 2025 · Q.7 & 2026 · Q.27',
          },
        ],
      },
      {
        id: 'm16-c2-3',
        title: 'Cryptarithmetic, Tournament Parity & Graph Coloring Deduction',
        subtitle: 'Pruning search spaces from $10{,}000$ candidates down to $1$ using bounds and parity',
        priority: 'high-yield',
        buildsOn: 'GA Ch.1 modular arithmetic and logical elimination',
        whyStudy:
          'Logic puzzles—like letter-digit square equations, knockout tournament brackets, and map coloring—look like exhausting trial-and-error traps if you start plugging in cases blindly. Mathematicians collapse huge search spaces down to a single survivor by stacking fast invariants (magnitude ceilings, even/odd parity, elimination counts, and odd-cycle color bounds) before doing any calculation.',
        groundRules: [
          'In cryptarithmetic, stack three zero-arithmetic sieves first: (1) digit-length bounds (e.g., a 3-digit sum caps $2(PQ)^2 < 1000 \\implies PQ \\le 22$), (2) even/odd parity on the units digit (e.g., $n^2 + (n+1)^2$ is always odd), and (3) distinct-letter rules across ALL input AND output letters.',
          'In any $N$-player single-elimination knockout tournament with no draws, every match eliminates exactly $1$ loser. Since $N - 1$ players must be eliminated to leave $1$ undefeated champion, total matches ALWAYS equal $N - 1$ regardless of seeding or byes.',
          'For planar map coloring, an even ring of mutually touching regions needs $2$ colors, while an odd ring (like a $5$-cycle) forces $3$ colors. If a central hub touches every region in an odd ring (forming an odd wheel), it forces a $4$-th color—never assume $4$ colors are always needed just because $4$ is the planar upper bound!',
          'In syllogisms and multi-round scheduling puzzles, a conclusion is valid ONLY if it holds in EVERY legal diagram/schedule; a single valid counter-example disproves it.',
        ],
        toyExample: {
          title: 'Two Consecutive 2-Digit Squares Summing to $XYP$',
          scenario:
            'Suppose $PQ$ and $RS$ are two consecutive two-digit integers ($RS = PQ + 1$) with distinct digits $P, Q, R, S, X, Y$ such that $(PQ)^2 + (RS)^2 = XYP$, a 3-digit number ending in $P$ (GATE DA 2026 Q.9). Find $Y$ without testing all ninety 2-digit numbers!',
          walkthroughSteps: [
            '1. **Upper Bound on Magnitude:** Since $(PQ)^2 + (RS)^2 < 1000$, we must have $2(PQ)^2 < 1000 \\implies (PQ)^2 < 500 \\implies PQ \\le 22$. Only $10 \\le PQ \\le 22$ can work, forcing $P \\in \\{1, 2\\}$!',
            '2. **Parity Sieve:** Among two consecutive integers $PQ$ and $RS$, one is even and one is odd. Therefore $(PQ)^2 + (RS)^2$ is ALWAYS **odd**, so its last digit $P$ must be odd! That eliminates $P = 2$ instantly $\\implies P = 1$.',
            '3. **Distinct-Digit Sieve:** Because $P = 1$ and $R$ must be a *distinct* digit ($R \\neq 1$), $RS = PQ + 1$ cannot stay in the tens ($11..19$)! It MUST roll over from $19$ to $20$!',
            '4. **Verify $PQ = 19, RS = 20$:** $19^2 + 20^2 = 361 + 400 = 761 = XYP$. Check digits: $P=1, Q=9, R=2, S=0, X=7, Y=6$ — all six are distinct, and the units digit matches $P=1$! Thus $Y = 6$.',
          ],
          ahaMoment:
            'Look how three zero-calculation sieves did all the work: the magnitude ceiling ($\\le 22$), consecutive-square parity ($P$ odd), and distinctness ($R \\neq P$) left **zero guessing** — only the single pair $(19, 20)$ even survived!',
        },
        theoremAndFormula: {
          statement:
            '1) **Cryptarithmetic Sieve:** Combine (i) digit-length bounds ($100 \\le N \\le 999$), (ii) units-digit / parity invariants, and (iii) distinct-digit exclusion ($R \\neq P$).\n2) **Knockout / Round-Robin Invariants:** In an $N$-player knockout tournament, every match eliminates $1$ player, so exactly $N - 1$ matches determine $1$ undefeated champion.\n3) **Planar Region Coloring:** An odd cycle of mutually touching regions needs $3$ colors; if a central region touches all of them (wheel $W_k$), you need $3 + 1 = 4$ colors whenever the outer ring is odd.',
          formulaLatex:
            '\\text{Consecutive integers: } n^2 + (n+1)^2 \\equiv 1 \\pmod 2, \\qquad \\chi(\\text{odd wheel}) = 4',
          plainEnglishDecoding:
            'When you tackle logical deduction puzzles (like GATE DA 2026 Q.8 chess knockouts or 2024 Q.2 15-region coloring), give your working memory a break — jot down a tiny **2-column ledger** (Round / Eliminations, or Ring / Hub) on your scribble pad so every constraint stays right in front of your eyes.',
          workedMiniExamples: [
            {
              prompt:
                'Suppose 15 symmetric regions on a plane form a central pentagon surrounded by two alternating 5-region rings where each outer boundary forms a 5-cycle touching an inner hub (GATE DA 2024 Q.2 pattern). Why can $3$ colors fail?',
              solution:
                'Any cycle of odd length ($5$ regions around a loop) already requires $3$ colors. If one shared hub or bridge touches all three color classes of an odd ring (a $K_4$ or odd-wheel structure), $4$ colors become mandatory; conversely, a bipartite/even-cycle ring with hub needs only $3$. Always check for odd cycles + shared neighbor!',
            },
            {
              prompt:
                'In a 3-round single-elimination knockout among 8 players (4 boys, 4 girls), 1 student wins all 3 matches and no two students from the same class face each other in Round 1 (GATE DA 2026 Q.8 pattern). How many total matches are played?',
              solution:
                'Every match eliminates $1$ player out of $8$, leaving $1$ undefeated champion, so $8 - 1 = 7$ matches occur ($4 + 2 + 1$). Tracking each round’s survivor count quickly pins down who remained undefeated.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'In cryptarithmetic, distinct letters only apply to the input numbers $P, Q, R, S$.',
            reality: 'Standard GATE cryptarithmetic applies distinctness across **all** named digit letters ($P, Q, R, S, X, Y$); always verify the output digits too!',
            counterExample: 'Even if $10^2+11^2=221$ had matched $P$, $1$ and $2$ repeat across digits.',
          },
          {
            myth: 'A planar map always needs $4$ colors.',
            reality: 'The Four-Color Theorem is an *upper* bound! Symmetric planar figures with even rings often need only $2$ or $3$ colors—you must test for an odd cycle + central hub.',
            counterExample: 'A checkerboard of 16 squares needs only $2$ colors.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm16-c2-htt1',
        title: 'The 3-Sieve Cryptarithmetic Collapse (Bounds → Parity → Distinctness)',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 Q.9'],
        problemStatement:
          'Consecutive two-digit integers $PQ$ and $RS$ satisfy $(PQ)^2 + (RS)^2 = XYP$, where every letter is a distinct decimal digit. Find $Y$.',
        triggerCue:
          'A **3-digit ceiling** ($XYP$) on a sum of squares, combined with **"consecutive"** and **"distinct digits"**.',
        bruteForceTrap:
          'Squaring $10^2+11^2, 12^2+13^2, \\dots, 21^2+22^2$ one by one under exam clock pressure.',
        mentalShift:
          'Apply three zero-arithmetic sieves before touching a single square: **ceiling** ($\\le 22$), **parity** ($P$ odd), and **carry-over distinctness** ($R \\neq P$).',
        steps: [
          {
            label: 'Step 1 — Magnitude bound',
            detail: '$2(PQ)^2 < 1000 \\implies PQ \\le 22$, so tens digit $P \\in \\{1, 2\\}$.',
          },
          {
            label: 'Step 2 — Parity kills $P=2$',
            detail: 'Sum of two consecutive squares is always odd, so units digit $P$ must be odd $\\implies P = 1$.',
          },
          {
            label: 'Step 3 — Distinct tens digit forces carry-over',
            detail:
              '$RS = PQ + 1$. Since $R \\neq P = 1$, $PQ$ must carry into the twenties: $PQ = 19, RS = 20 \\implies 19^2 + 20^2 = 761 \\implies Y = 6$.',
          },
        ],
        lockInTakeaway:
          'Parity + magnitude + distinctness turns a 13-case search into a single arithmetic check.',
      },
      {
        id: 'm16-c2-htt2',
        title: 'Column-Cancellation & Working-Origin DI',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 Q.8', 'GATE DA 2025 Q.10'],
        problemStatement:
          'Given a multi-investor 3-fund allocation table with a fixed return difference (or a 100-shift patient histogram with a linear pay formula), compute the target rate or average shift earnings.',
        triggerCue:
          'Multiple rows sharing identical entries in 2 of 3 columns, OR large total counts ($N = 100$) with small integer bin values.',
        bruteForceTrap:
          'Setting up a 3-variable system $10r_A + 20r_B + 20r_C = \\dots$ or computing $1000(x_i - 0.2)$ separately for every bar and multiplying by large frequencies.',
        mentalShift:
          '**Subtract rows first** to isolate the changing variable, and **shift the mean origin** before multiplying by any scaling constant.',
        steps: [
          {
            label: 'Step 1 — Cancel matching columns',
            detail:
              'Subtract Investor 1’s portfolio from Investor 2’s; equal B and C columns disappear, leaving $\\Delta A \\cdot r_A = \\Delta \\text{Return}$.',
          },
          {
            label: 'Step 2 — Center histogram deviations',
            detail:
              'Pick central bin $x_0$ (e.g. $6$), sum signed deviations $f_i(x_i - x_0)$, divide by $N = 100$, and add back to $x_0$.',
          },
          {
            label: 'Step 3 — Apply pay transform once',
            detail:
              'Evaluate $1000(\\bar{X} - 0.2)$ at the very end using linearity of expectation.',
          },
        ],
        lockInTakeaway:
          'Cancel before you solve; center before you multiply.',
      },
    ],
    arsenalCards: [
      {
        id: 'm16-c2-ars1',
        badge: 'Cryptarithmetic Sieve',
        whenYouSpot: 'Consecutive integers in a digit equation $(PQ)^2 + (RS)^2 = XYP$',
        directWeaponLatex: '2(PQ)^2 < 1000 \\implies PQ \\le 22, \\quad n^2 + (n+1)^2 \\text{ is odd}',
        instantRule: 'Pin the tens digit by magnitude, kill even units digits by consecutive-square parity, and check carry-over for $R \\neq P$.',
        tenSecondExample: '$P=1, R \\neq 1 \\implies PQ=19, RS=20 \\implies 361+400=761 \\implies Y=6$ (2026 Q.9).',
        oneFatalTrap: 'Forgetting that the output digits $X, Y$ must also be distinct from $P, Q, R, S$.',
      },
      {
        id: 'm16-c2-ars2',
        badge: 'Unimodal Straddle',
        whenYouSpot: '$f(x)$ strictly rises to peak $x^*$ then strictly falls, and $f(x_1) = f(x_2)$ for $x_1 < x_2$',
        directWeaponLatex: 'x_1 < x_2 \\;\\land\\; f(x_1) = f(x_2) \\implies x_1 < x^* < x_2',
        instantRule: 'Equal heights on a single-peak curve CANNOT sit on the same slope; one sits left of $x^*$ and one sits right.',
        tenSecondExample: 'Weight peaks at $50$; equal weights at ages $a_1 < a_2 \\implies a_1 < 50 < a_2$ (2025 Q.7).',
        oneFatalTrap: 'Assuming symmetry $x^* - x_1 = x_2 - x^*$ when the problem never stated symmetry.',
      },
      {
        id: 'm16-c2-ars3',
        badge: 'Shifted DI Mean',
        whenYouSpot: 'Bar chart / frequency table with $N = 100$ shifts and linear payoff $c(\\bar{X} - k)$',
        directWeaponLatex: '\\bar{X} = x_0 + \\frac{\\sum f_i(x_i - x_0)}{N}, \\qquad \\bar{E} = c(\\bar{X} - k)',
        instantRule: 'Pick the middle bin $x_0$ so half the deviations cancel in your head, then apply the linear formula once.',
        tenSecondExample: '$x_0=6$, deviations sum $+30/100 \\implies \\bar{X}=6.3 \\implies 1000(6.3-0.2)=\\text{Rs. } 6100$ (2025 Q.10).',
        oneFatalTrap: 'Forgetting to subtract the fixed deduction ($-0.2$) or misreading bin frequencies vs. percentages.',
      },
    ],
    questions: [
      {
        id: 'm16-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · 3-Set Venn Inclusion-Exclusion',
        marks: 1,
        type: 'NAT',
        stem: 'In a survey of $120$ GATE aspirants, $70$ use Python, $60$ use SQL, and $50$ use R. Furthermore, $30$ use both Python and SQL, $25$ use both SQL and R, $20$ use both Python and R, and $10$ use all three. How many aspirants use NONE of these three tools?',
        natAnswer: { min: 5, max: 5, exactDisplay: '5' },
        triggerHint: 'Compute $|P \\cup S \\cup R|$ first using alternating signs, then subtract from $120$.',
        intuitiveSolution: [
          '$|P \\cup S \\cup R| = 70 + 60 + 50 - (30 + 25 + 20) + 10 = 180 - 75 + 10 = 115$.',
          'Neither tool $= 120 - 115 = 5$.',
        ],
        directShortcutUsed: '3-set inclusion-exclusion formula.',
      },
      {
        id: 'm16-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.7 (2M)',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'Suppose human weight $W(a)$ strictly increases with age $a$ up to age $50$ and strictly decreases after age $50$. Two brothers of different ages $a_1 < a_2$ have the exact same weight today ($W(a_1) = W(a_2)$). Which inequality MUST hold?',
        options: [
          { id: 'A', text: '$a_1 < a_2 < 50$', whyTrueOrFalse: 'False — strict increase on $[0, 50]$ forbids equal weights.' },
          { id: 'B', text: '$a_1 < 50 < a_2$', whyTrueOrFalse: 'True — one age must be on the rising side and one on the falling side.' },
          { id: 'C', text: '$50 < a_1 < a_2$', whyTrueOrFalse: 'False — strict decrease on $[50, \\infty)$ forbids equal weights.' },
          { id: 'D', text: '$a_1 + a_2 = 100$', whyTrueOrFalse: 'False — $W(a)$ need not be symmetric around $a = 50$.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Can two distinct points on a strictly monotonic interval ever share the same output?',
        intuitiveSolution: [
          'If both $a_1 < a_2 \\le 50$, strict increase implies $W(a_1) < W(a_2)$.',
          'If both $50 \\le a_1 < a_2$, strict decrease implies $W(a_1) > W(a_2)$.',
          'Hence they must lie on opposite sides of the peak: $a_1 < 50 < a_2$.',
        ],
        directShortcutUsed: 'Unimodal straddle rule.',
      },
      {
        id: 'm16-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.9 (2M)',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem: 'Let $PQ$ and $RS$ be two consecutive two-digit integers ($RS = PQ + 1$) such that $(PQ)^2 + (RS)^2 = XYP$, where $P, Q, R, S, X, Y$ are all distinct decimal digits. What is the value of $Y$?',
        options: [
          { id: 'A', text: '$4$', whyTrueOrFalse: 'False — does not satisfy distinctness and units digit $P$.' },
          { id: 'B', text: '$5$', whyTrueOrFalse: 'False — $21^2 + 22^2 = 925$ ends in $5 \\neq P=2$.' },
          { id: 'C', text: '$6$', whyTrueOrFalse: 'True — $19^2 + 20^2 = 761$ gives distinct digits $(1,9,2,0,7,6)$ with $Y=6$.' },
          { id: 'D', text: '$8$', whyTrueOrFalse: 'False — fails magnitude and parity check.' },
        ],
        correctOptions: ['C'],
        triggerHint: 'Bound $PQ \\le 22$, use parity of $n^2 + (n+1)^2$, and force $R \\neq P$.',
        intuitiveSolution: [
          'Since $XYP < 1000$, $2(PQ)^2 < 1000 \\implies PQ \\le 22$, so $P \\in \\{1, 2\\}$.',
          'Sum of squares of consecutive integers is always odd, forcing units digit $P = 1$.',
          'Since $R \\neq P = 1$, $PQ + 1$ must carry into the $20$s: $PQ = 19, RS = 20$.',
          '$19^2 + 20^2 = 361 + 400 = 761$, so $X = 7, Y = 6, P = 1$.',
        ],
        directShortcutUsed: '3-sieve cryptarithmetic collapse (bounds + parity + distinctness).',
      },
      {
        id: 'm16-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.8 Pattern (2M)',
        year: 2024,
        marks: 2,
        type: 'MCQ',
        stem: 'Investor X invests $\\text{Rs. } 15{,}000$ in Mutual Fund A, $\\text{Rs. } 25{,}000$ in Fund B, and $\\text{Rs. } 10{,}000$ in Fund C. Investor Y invests $\\text{Rs. } 25{,}000$ in Fund A, $\\text{Rs. } 25{,}000$ in Fund B, and $\\text{Rs. } 10{,}000$ in Fund C. After one year, Investor Y earns $\\text{Rs. } 500$ more than Investor X. What is the annual return rate of Mutual Fund A?',
        options: [
          { id: 'A', text: '$4\\%$', whyTrueOrFalse: 'False — $\\text{Rs. } 400$ return on $\\text{Rs. } 10{,}000$.' },
          { id: 'B', text: '$5\\%$', whyTrueOrFalse: 'True — extra $\\text{Rs. } 10{,}000$ in Fund A yields $\\text{Rs. } 500 = 5\\%$.' },
          { id: 'C', text: '$6\\%$', whyTrueOrFalse: 'False — $\\text{Rs. } 600$ return on $\\text{Rs. } 10{,}000$.' },
          { id: 'D', text: '$10\\%$', whyTrueOrFalse: 'False — divides $\\text{Rs. } 500$ by $\\text{Rs. } 5{,}000$ instead of $\\text{Rs. } 10{,}000$.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Subtract Investor X’s holdings from Investor Y’s fund-by-fund.',
        intuitiveSolution: [
          'Funds B and C have identical amounts in both portfolios, so their return difference is $\\text{Rs. } 0$.',
          'Difference in Fund A principal $= \\text{Rs. } 25{,}000 - \\text{Rs. } 15{,}000 = \\text{Rs. } 10{,}000$.',
          'Rate of Fund A $= \\frac{500}{10{,}000} \\times 100\\% = 5\\%$.',
        ],
        directShortcutUsed: 'Row-difference column cancellation.',
      },
      {
        id: 'm16-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.10 Pattern (2M)',
        year: 2025,
        marks: 2,
        type: 'NAT',
        stem: 'Over $100$ clinic shifts, a doctor sees $4, 5, 6, 7,$ and $8$ patients in $10, 15, 30, 25,$ and $20$ shifts respectively. Her pay per shift with $X$ patients is $\\text{Rs. } 1000(X - 0.2)$. Compute her average earning per shift (in Rs.).',
        natAnswer: { min: 6100, max: 6100, exactDisplay: '6100' },
        triggerHint: 'Compute $\\bar{X}$ around working origin $x_0 = 6$ first, then evaluate $1000(\\bar{X} - 0.2)$.',
        intuitiveSolution: [
          'Deviations from $6$: $10(-2) + 15(-1) + 30(0) + 25(1) + 20(2) = -20 - 15 + 25 + 40 = +30$.',
          '$\\bar{X} = 6 + \\frac{30}{100} = 6.3$.',
          'Average pay $= 1000(6.3 - 0.2) = \\text{Rs. } 6{,}100$.',
        ],
        directShortcutUsed: 'Working-origin histogram mean + linearity.',
      },
      {
        id: 'm16-c2-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Mock · Additive Overlap & Knockout Invariant',
        marks: 2,
        type: 'MSQ',
        stem: 'A rectangle ($R$), triangle ($T$), and ellipse ($E$) overlap such that any point inside one or more shapes displays the **sum** of the fixed positive integers assigned to the shapes covering it. Suppose $R$-only $= 6$, $(R \\cap T)\\setminus E = 11$, and $R \\cap T \\cap E = 14$. Separately, a $16$-player single-elimination knockout chess tournament crowns $1$ undefeated champion. Which of the following statements are ALWAYS true?',
        options: [
          { id: 'A', text: 'The ellipse value $E$ equals $3$.', whyTrueOrFalse: 'True — $(R \\cap T \\cap E) - (R \\cap T \\setminus E) = 14 - 11 = 3$.' },
          { id: 'B', text: 'The $(T \\cap E)\\setminus R$ region displays $8$.', whyTrueOrFalse: 'True — $T = 11 - 6 = 5$, so $T + E = 5 + 3 = 8$.' },
          { id: 'C', text: 'Exactly $15$ matches are played in the knockout tournament.', whyTrueOrFalse: 'True — each match eliminates $1$ of the $15$ non-champions.' },
          { id: 'D', text: 'The $(R \\cap E)\\setminus T$ region displays $10$.', whyTrueOrFalse: 'False — $R + E = 6 + 3 = 9$, not $10$.' },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Peel the shapes from $R$-only outward, and count eliminations for the knockout.',
        intuitiveSolution: [
          'From $R$-only: $R = 6$. From $(R \\cap T)\\setminus E$: $T = 11 - 6 = 5$. From $R \\cap T \\cap E$: $E = 14 - 11 = 3$.',
          'Hence $(T \\cap E)\\setminus R = 5 + 3 = 8$ (B true), while $(R \\cap E)\\setminus T = 6 + 3 = 9$ (D false).',
          'In a $16$-player single-elimination knockout, $15$ players must be eliminated at $1$ per match, so $15$ matches are played (C true).',
        ],
        directShortcutUsed: 'Outward-to-inward additive peeling + $N-1$ knockout invariant.',
      },
    ],
  },
  {
    id: 'ga-ch3',
    number: 3,
    title: 'Spatial Geometry, Paper Folding, Mirror Symmetry & Verbal Aptitude Precision',
    shortTitle: 'Spatial & Verbal Precision',
    estimatedHours: 3.5,
    dayLabel: 'Week 8 · Day 3',
    tagline:
      'Let us replace blurry mental rotation with rock-solid geometric symmetry rules — and bank 5 to 6 calm, reliable Verbal Aptitude marks using intensity ladders, timeline tense markers, and strict counterfactual scope.',
    syllabusMapping: [
      'Spatial Aptitude: Transformation of shapes (translation, rotation, scaling, mirroring, assembling, grouping), paper folding, cutting, and patterns in 2 and 3 dimensions',
      'Verbal Aptitude: Basic English grammar (tenses, articles, adjectives, prepositions, conjunctions, verb-noun agreement), basic vocabulary (words, idioms, phrases), reading and comprehension, narrative sequencing',
    ],
    whatIsImportant: [
      'Circle/polygon decomposition via central angles and area conservation (regular dodecagon $\\to 3$ squares in GATE DA 2025 Q.8; inscribed-to-central $2\\theta$ angle in 2026 Q.10)',
      'Opposite-face exclusion ($1$-step skip in a 4-square strip) and L-corner hand-rule orientation for 3D dice nets (GATE DA 2024 Q.9)',
      '3D cross-section symmetry (two vertex-cut base-joined cones $\\to$ rhombus in GATE DA 2024 Q.10), paper-folding reflection invariance, and 2D puzzle area/corner matching (2026 Q.3)',
      'Verbal precision: degree-of-intensity analogies (2024 Q.1), synonym/antonym polarity (2025 Q.1, 2026 Q.1), past-perfect-continuous tense & prepositions (2025 Q.2, 2025 Q.6, 2026 Q.6), and strict reading-inference scope without outside assumptions (2024 Q.6, 2026 Q.5)',
    ],
    whatIsNotImportant: [
      'Memorizing 3,000 obscure GRE flashcards — GATE DA vocabulary tests high-frequency words and clear contextual relationships',
      'Advanced projective geometry or analytic 3D solid-angle integrals',
      'Literary criticism or poetic rhetoric analysis',
    ],
    inboundStream:
      'Core geometry basics & GA Ch.1–2 logical elimination habits.',
    outboundStream: [
      'Full 15-mark General Aptitude mastery (typically 5 Verbal + 5 Quant/DI/Spatial across Q1–Q10)',
      'Module 17 Full-length mock strategy & speed benchmarking',
    ],
    glossary: [
      {
        term: 'Regular $n$-gon Central Wedge Area',
        symbol: '$A_{\\text{wedge}} = \\frac{1}{2} r^2 \\sin\\!\\left(\\frac{360^\\circ}{n}\\right)$',
        plainEnglish:
          'Connect the center of a circle to all $n$ corners of an inscribed regular polygon to slice it into $n$ identical pizza wedges, each with two radius sides $r$ enclosing central angle $360^\\circ/n$.',
        tinyExample: 'A regular $12$-gon in radius $r$ has $12$ wedges of area $\\frac{1}{2}r^2\\sin 30^\\circ = \\frac{r^2}{4}$, totaling $3r^2$ ($3$ squares).',
      },
      {
        term: 'Inscribed-to-Central Angle Theorem',
        symbol: '$\\angle POR = 2\\angle PQR$',
        plainEnglish:
          'When an angle sits on the rim of a circle (inscribed $\\angle PQR = \\theta$), the angle standing on the exact same arc at the center $O$ is ALWAYS twice as big ($2\\theta$).',
        tinyExample: 'If $\\angle PQR = 45^\\circ$ on a circle, the minor central angle is $\\angle POR = 90^\\circ$, leaving $270^\\circ$ for the reflex angle.',
      },
      {
        term: 'Opposite-Face Exclusion in 3D Cube Nets',
        symbol: '$A \\text{ adjacent to } B \\implies \\text{not } 1\\text{-gap opposite}$',
        plainEnglish:
          'In any unfolded 2D cube net, two squares separated by one middle square in a straight strip (or a Z-step) fold onto OPPOSITE sides of the cube — so they can never touch in any 3D view.',
        tinyExample: 'If a 3D die shows faces $2$ and $3$ touching at an edge, immediately cross out any net placing $2\\text{-}1\\text{-}3$ in a straight row.',
      },
      {
        term: 'Handedness & Mirror Chirality',
        plainEnglish:
          'Two nets can have identical opposite faces and still be mirror-image twins that fold inside-out! Always verify the clockwise cycle of three faces meeting at one shared 3D corner ($F_1 \\to F_2 \\to F_3$).',
        tinyExample: 'Just like your left and right hands share the same finger adjacency yet cannot overlap by rotation alone, chiral nets have reversed clockwise order.',
      },
      {
        term: 'Mirror & Paper-Folding Symmetry',
        symbol: '$2^k \\text{ symmetric copies}$',
        plainEnglish:
          'Every fold line acts like a mirror when you unfold the paper in reverse order: distances reflect perpendicularly across the crease, and each non-overlapping fold doubles an interior punched hole.',
        tinyExample: 'Folding a square sheet once horizontally and once vertically and punching $1$ interior hole produces $2^2 = 4$ symmetric holes.',
      },
      {
        term: 'Double-Cone Cross-Section (Rhombus)',
        plainEnglish:
          'Join two identical right circular cones base-to-base and slice straight through both tips: all four outer edges trace cone slant generators of equal length $s$, forming a rhombus (and only a square if $h = r$).',
        tinyExample: 'For tall cones with $h = 10, r = 1$, the slice is a slender rhombus with $4$ equal sides $\\sqrt{101}$ and unequal diagonals $20$ and $2$.',
      },
      {
        term: 'Degree-of-Intensity & Polarity Analogy',
        symbol: '$A : B :: C : D$',
        plainEnglish:
          'Crack any word analogy systematically by checking three locks in order: (1) Relationship type (synonym, antonym, or escalating intensity), (2) Direction, and (3) Part of Speech (noun, verb, or adjective).',
        tinyExample: '*Verbosity : Brevity* (antonym nouns) pairs directly with *Insolence : Respect* (antonym nouns), rejecting adjective *Rude*.',
      },
      {
        term: 'Past Perfect Continuous Tense',
        symbol: '$\\text{had been} + \\text{V-ing}$',
        plainEnglish:
          'Use `had been + V-ing` whenever an ongoing action had already been running for some duration *before* a second past event interrupted or happened.',
        tinyExample: '*"By the time the coach arrived, the team **had been practicing** for forty minutes."*',
      },
      {
        term: 'Counterfactual Conditional & Contrapositive',
        symbol: '$P \\implies Q \\equiv \\neg Q \\implies \\neg P$',
        plainEnglish:
          'A contrapositive flips and negates an implication while keeping exact logical truth. Meanwhile, a past counterfactual (*"Had $X$ happened, $Y$ would have happened"*) strictly tells you two facts: $X$ did NOT happen, and $Y$ did NOT happen.',
        tinyExample: '*"Had the captain checked the forecast, they would not have practiced outdoors"* implies he did NOT check and they DID practice outdoors.',
      },
      {
        term: 'Reading-Inference Scope Lock',
        plainEnglish:
          'Treat GATE Reading Comprehension like a math proof: a valid inference MUST follow strictly from the passage alone. Reject any choice that brings in outside facts, reverses cause and effect, or upgrades *some/favored* to *all/never*.',
        tinyExample: 'From *"Dairy farming favored a mutation for milk digestion,"* never infer *"All ancient adults drank milk"* or *"The mutation caused dairy farming."* ',
      },
    ],
    generatorId: 'ga-quant-series-gen',
    concepts: [
      {
        id: 'm16-c3-1',
        title: '2D Mensuration, Regular Polygons & Circle Angle-Area Decompositions',
        subtitle: 'Cutting polygons into identical triangles and turning inscribed angles into central $90^\\circ$ wedges',
        priority: 'core-pillar',
        buildsOn: 'Basic triangle, square, and circle area formulas',
        whyStudy:
          'Spatial geometry problems in GATE DA—like turning a 12-sided polygon into squares or finding the area of a non-convex arrowhead inside a circle—are designed to stump anyone who relies on visual guesswork or memorized exotic polygon formulas. Slicing every circle or regular polygon from its center $O$ converts complex figures into twin triangles you can compute in two lines.',
        groundRules: [
          'Connecting the center $O$ of a circle of radius $r$ to all $n$ vertices of an inscribed regular $n$-gon splits it into $n$ identical isosceles wedges, each with two radius sides $r$, apex angle $\\frac{360^\\circ}{n}$, and exact area $\\frac{1}{2}r^2\\sin\\!\\left(\\frac{360^\\circ}{n}\\right)$.',
          'Area is conserved under cutting and reassembling: if a puzzle asks how many shapes of area $A_0$ equal a polygon of area $A_{\\text{total}}$, simply divide $A_{\\text{total}} / A_0$—no mental jigsaw cutting needed.',
          'By the Inscribed Angle Theorem, an angle $\\angle PQR = \\theta$ standing on the rim of a circle subtends a central angle $\\angle POR = 2\\theta$ on the exact same arc (twice as large, never equal to $\\theta$!).',
          'Whenever a circle figure has equal chords ($PQ = RQ$), draw the symmetry radius $OQ$ through the center: it splits the figure into two mirror-image triangles whose angles around $O$ add cleanly to $360^\\circ$.',
        ],
        sandboxId: 'ga-synthesis-lab',
        toyExample: {
          title: 'Reassembling a 12-Sided Pizza into Squares',
          scenario:
            'A regular dodecagon ($12$ equal sides) is inscribed in a circle of radius $r$ (GATE DA 2025 Q.8). Joining the center to all $12$ vertices slices it into $12$ congruent triangles. How many squares of side $r$ equal the total area of those $12$ triangles?',
          walkthroughSteps: [
            '1. Central apex angle of one triangle $= \\frac{360^\\circ}{12} = 30^\\circ$, with two legs of length $r$.',
            '2. Area of one triangle $= \\frac{1}{2} r \\cdot r \\sin(30^\\circ) = \\frac{1}{2} r^2 \\cdot \\frac{1}{2} = \\frac{r^2}{4}$.',
            '3. Notice $4$ such triangles have area $4 \\times \\frac{r^2}{4} = r^2$ — the exact area of one square of side $r$!',
            '4. Total $12$ triangles $= \\frac{12}{4} = 3$ squares (total area $3r^2$).',
          ],
          ahaMoment:
            'Look how clean that was — you never had to cut or fold triangles in your head! **Area conservation** ($\\frac{1}{2} r^2 \\sin 30^\\circ = \\frac{r^2}{4}$) tells you in two lines that exactly $3$ squares of side $r$ match the whole dodecagon.',
        },
        theoremAndFormula: {
          statement:
            '1) **Regular $n$-gon Inscribed in Radius $r$:** Splits into $n$ central isosceles triangles, each of area $\\frac{1}{2} r^2 \\sin\\!\\left(\\frac{360^\\circ}{n}\\right)$.\n2) **Inscribed Angle Theorem:** An inscribed angle $\\angle PQR = \\theta$ subtends a central angle $\\angle POR = 2\\theta$ on the same arc.\n3) **Non-Convex Kite / Arrowhead Decomposition:** Splitting along symmetry axis $OQ$ turns quadrilateral $PQRO$ into two congruent triangles $\\triangle POQ \\cong \\triangle ROQ$.',
          formulaLatex:
            'A_{\\text{wedge}} = \\frac{1}{2} r^2 \\sin\\!\\left(\\frac{360^\\circ}{n}\\right), \\qquad \\angle POR = 2\\angle PQR',
          plainEnglishDecoding:
            'Whenever a circle puzzle hands you equal chords ($PQ = RQ$) and an inscribed angle at the rim ($\\angle PQR = 45^\\circ$, just like GATE DA 2026 Q.10), immediately draw the symmetry radius $OQ$ — it slices the awkward shape into two twin triangles with easy central angles!',
          workedMiniExamples: [
            {
              prompt:
                'Points $P, Q, R$ lie on a circle of radius $10$ centered at $O$ such that $PQ = RQ$ and $\\angle PQR = 45^\\circ$ (GATE DA 2026 Q.10 setup). Find the area of the non-convex quadrilateral $PQRO$.',
              solution:
                'Inscribed $\\angle PQR = 45^\\circ$ makes the minor central angle $\\angle POR = 2 \\times 45^\\circ = 90^\\circ$, so the reflex angle around $O$ is $270^\\circ$. By symmetry across $OQ$, $\\angle POQ = \\angle ROQ = 135^\\circ$, with $OP = OQ = OR = 10$. Area $= 2 \\times \\frac{1}{2}(10)(10)\\sin(135^\\circ) = 100 \\cdot \\frac{\\sqrt{2}}{2} = 50\\sqrt{2}$.',
            },
            {
              prompt:
                'Find the area of a regular hexagon ($n=6$) inscribed in a circle of radius $2$.',
              solution:
                'Six equilateral triangles of side $2$: $6 \\times \\frac{1}{2}(2)^2 \\sin(60^\\circ) = 12 \\cdot \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If $\\angle PQR = 45^\\circ$ on a circle, then $\\angle POQ = 45^\\circ$ too.',
            reality: 'Central angle $\\angle POR = 90^\\circ$ sits *opposite* $Q$; the remaining $360^\\circ - 90^\\circ = 270^\\circ$ splits into $\\angle POQ = \\angle ROQ = 135^\\circ$.',
            counterExample: 'At $\\angle PQR = 60^\\circ$ (equilateral $\\triangle PQR$), $\\angle POQ = 120^\\circ \\neq 60^\\circ$.',
          },
          {
            myth: 'A regular $12$-gon in radius $r$ has area $\\pi r^2 \\approx 3.14 r^2$, so it makes $3.14$ squares.',
            reality: 'An *inscribed* dodecagon lies strictly inside the circle and happens to have exact rational area $12 \\cdot \\frac{r^2}{4} = 3r^2$.',
            counterExample: '$12 \\times \\frac{1}{2} r^2 \\sin 30^\\circ = 3r^2$, exact integer $3$.',
          },
        ],
      },
      {
        id: 'm16-c3-2',
        title: '3D Dice Nets, Conic Sections, Paper Folding, Mirrors & 2D Assembly',
        subtitle: 'Killing spatial questions with opposite-face pairs, edge lengths, and parity flips',
        priority: 'high-yield',
        buildsOn: '2D symmetry and basic 3D solid visualization',
        whyStudy:
          'Trying to mentally spin 3D dice nets, unfold multi-creased sheets, or visualize sliced double-cones under exam stress is notoriously error-prone. Replacing fuzzy imagination with strict geometric invariants—opposite-face exclusion, handedness cycles, slant-generator equality, and reverse-crease reflections—gives you 100% deterministic answers every time.',
        groundRules: [
          'In any 2D unfolded cube net, two squares separated by one square along a straight row/column (or by a Z-step of 2 squares across and 1 perpendicular) fold onto OPPOSITE faces—so any two faces touching in a 3D view can NEVER sit in an opposite pair on a valid net.',
          'Adjacency alone is not enough for 3D nets because a mirror-image net folds inside-out (chirality). Always confirm that three faces meeting at one corner follow the exact same clockwise cycle ($F_1 \\to F_2 \\to F_3$) in both the 3D view and the folded net.',
          'Every paper fold acts like a mirror when unfolded in reverse order: distances reflect perpendicularly across each crease, and each non-overlapping fold doubles an interior punched hole ($k$ folds $\\to 2^k$ symmetric holes).',
          'On any right circular cone, every straight line from the apex to the base circle equals the slant height $s$. Thus slicing two identical base-joined cones through both apexes cuts $4$ equal slant edges—always a rhombus (and a square ONLY in the special case $h = r$).',
        ],
        toyExample: {
          title: 'Unfolding a Die Without Touching Scissors',
          scenario:
            'Suppose a 3D die shows faces $1$ (top), $2$ (front), $3$ (right) in one view, and $1$ (top), $4$ (front), $2$ (right) in a second view. A candidate 2D cross-shaped net places $1$ in the center, $2$ above $1$, $4$ to the right of $1$, and $3$ directly *below* $1$. Can this net fold into our die?',
          walkthroughSteps: [
            '1. **Check Opposite Faces:** In a straight strip of $3$ squares ($2 - 1 - 3$), the two outer faces ($2$ and $3$) fold onto **opposite** sides of the cube!',
            '2. **Check 3D Evidence:** View 1 shows $2$ (front) and $3$ (right) sharing an edge—they are **adjacent**, NOT opposite!',
            '3. **Instant Elimination:** Two adjacent faces in 3D can NEVER sit $2$ steps apart in a straight line on the net. Reject this net in $3$ seconds!',
          ],
          ahaMoment:
            'Save your mental energy! **Opposite-face exclusion** knocks out $2$ or $3$ invalid cube nets in seconds — and on any survivor, a quick check of **clockwise corner order** ($1 \\to 2 \\to 3$) confirms the right answer with 100% certainty.',
        },
        theoremAndFormula: {
          statement:
            '1) **Cube-Net Opposite Rule:** Any two faces separated by one square in a straight row/column (or by a Z-step of $2$ squares across and $1$ perpendicular) are **opposite** and can never share a 3D corner.\n2) **Double-Cone Cross-Section (GATE DA 2024 Q.10):** Joining two identical cones base-to-base and slicing with a plane passing through *both* apexes cuts $4$ equal slant-height edges $\\implies$ outer boundary is a **rhombus** (not a rectangle, unless the cone apex angle is $90^\\circ$).\n3) **Paper Folding & Mirror Parity:** Every fold or mirror line across an axis reverses orientation (**chirality** / handedness) and reflects distance perpendicularly; two folds across parallel lines translate without reversing, while an odd number of reflections reverses.',
          formulaLatex:
            '\\text{Net opposite } (A, B) \\implies A \\cap B = \\varnothing \\text{ in every 3D view}',
          plainEnglishDecoding:
            'For 2D shape assembly puzzles (like GATE DA 2026 Q.3), match concrete fingerprints — **total area, acute corner angles, and the longest edge** — rather than spinning all four tiles in your head at once. And for paper folding/punching, simply unfold **one crease at a time in reverse order**, reflecting each hole straight across the crease.',
          workedMiniExamples: [
            {
              prompt:
                'Two identical right circular cones of slant height $s$ and base radius $r$ ($2r \\neq \\sqrt{2}s$) are joined at their circular bases. What is the outer boundary of the cross-section cut by a plane passing through both vertices? (GATE DA 2024 Q.10)',
              solution:
                'The plane intersects the shared circular base along a diameter of length $2r$ and connects each endpoint to both apexes via $4$ slant generators of equal length $s$. A quadrilateral with $4$ equal sides $s$ is always a **rhombus**.',
            },
            {
              prompt:
                'A square sheet is folded bottom-to-top, then left-to-right, and a triangular notch is cut out of the top-right corner of the folded quarter. How many notches appear when unfolded?',
              solution:
                'The cut sits at an **outer** corner (not the folded center), so unfolding left-to-right mirrors it to the top-left corner, and unfolding top-to-bottom mirrors both to the bottom corners: $4$ corner notches.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Slicing two base-joined cones through both vertices forms a diamond/square.',
            reality: 'All 4 sides equal slant height $s$, which guarantees a **rhombus**; the diagonals ($2r$ and $2h$) are equal only in the special $90^\\circ$ apex case, so a general cut is a rhombus, not a square.',
            counterExample: 'Tall thin cones ($h = 10, r = 1$) give a narrow rhombus with diagonals $20$ and $2$.',
          },
          {
            myth: 'If all $3$ visible faces on a die are adjacent in the net, the net is guaranteed valid.',
            reality: 'Handedness (mirror chirality) can still be backwards! Always verify clockwise order around the corner.',
            counterExample: 'A mirror-image net has identical adjacency pairs yet folds inside-out.',
          },
        ],
      },
      {
        id: 'm16-c3-3',
        title: 'Verbal Aptitude Precision: Analogies, Grammar, Phrasal Verbs & Reading Inference',
        subtitle: 'Zero-ambiguity rules for intensity scales, tense timelines, and counterfactual scope',
        priority: 'high-yield',
        buildsOn: 'Standard English grammar and reading comprehension',
        whyStudy:
          'Verbal Aptitude contributes 5 to 6 of the fastest marks in the entire GATE DA paper—often solvable in under 45 seconds each if you treat English grammar and comprehension like formal logic instead of vague "sounds-good" intuition. Disciplined scope and tense rules stop you from falling for plausible-sounding outside-knowledge distractors.',
        groundRules: [
          'Every word analogy ($A : B :: C : D$) must match three strict locks simultaneously: (1) Relationship type (synonym, antonym, or degree-of-intensity ladder), (2) Direction from left to right, and (3) Exact Part of Speech (noun, verb, or adjective).',
          'Use Past Perfect Continuous (`had been + V-ing`) strictly when an ongoing action lasted for some duration BEFORE a second past moment interrupted it (e.g., *"By the time the coach arrived, the team had been practicing for forty minutes"*).',
          'A Type-3 past counterfactual (*"Had $X$ happened, $Y$ would have happened"*) encodes exactly two hard facts: $X$ did NOT happen and $Y$ did NOT happen—never infer unstated motives or causes beyond those two negations.',
          'Treat Reading Comprehension like a mathematical entailment proof: a valid inference MUST follow strictly from the passage text alone. Immediately veto options that bring in outside facts, reverse cause and effect, or upgrade *some / favored* into extreme quantifiers like *all / only / never*.',
        ],
        toyExample: {
          title: 'The Thermometer Trick for Word Analogies',
          scenario:
            'Solve the GATE DA 2024 Q.1 analogy: `sick -> infirm -> moribund :: silly -> ___ -> daft`. Options: *(A) frown, (B) fawn, (C) vein, (D) vain*. How can we lock onto the exact answer even if one word looks unfamiliar?',
          walkthroughSteps: [
            '1. Read the first chain as a **degree-of-intensity ladder**: *sick* (mild illness) $\\to$ *infirm* (weak/frail) $\\to$ *moribund* (at the point of death).',
            '2. Notice the second chain moves along an **intensity or meaning ladder**: *silly* (mildly foolish) $\\to$ *fatuous / inane / vain* $\\to$ *daft* (completely absurd/foolish). Check part of speech too: all words are **adjectives**!',
            '3. Eliminate non-adjectives instantly: *frown* (verb/noun) and *fawn* (verb/noun) are out; *vein* (noun, blood vessel) is out; only **vain** (adjective: foolish/futile) matches the adjective category and meaning!',
          ],
          ahaMoment:
            'Even when one vocabulary word feels slightly unfamiliar, checking **Part-of-Speech alignment plus Polarity/Intensity direction** mechanically knocks out $2$ or $3$ distractors right away!',
        },
        theoremAndFormula: {
          statement:
            '1) **Analogy Checklist:** Check **(a) Relationship Type** (synonym in 2025 Q.1 *Courage : Bravery :: Yearning : Longing*; antonym in 2026 Q.1 *Verbosity : Brevity :: Insolence : Respect*; intensity in 2024 Q.1), **(b) Direction**, and **(c) Part of Speech**.\n2) **Past Perfect Continuous:** `had been + V-ing` marks an ongoing action that started *before* a past interruption (`When the bell rang, she had been playing for an hour`, 2025 Q.2).\n3) **Reading Inference Discipline:** A valid logical inference MUST follow from the passage alone—reject choices that flip cause/effect, add `"all/always/never"`, or extrapolate outside the text (2024 Q.6, 2026 Q.5).',
          formulaLatex:
            '\\text{Counterfactual: } \\text{"Had } X \\text{ happened, } Y \\text{ would have happened"} \\implies X \\text{ did NOT happen}',
          plainEnglishDecoding:
            'Read counterfactual sentences just like crisp logic statements (GATE DA 2026 Q.5): *"If the actor had read the script, he would not have signed the film"* strictly tells you two facts — **he did NOT read the script**, and **he DID sign the film** — and refuses to guess anything beyond those two facts!',
          workedMiniExamples: [
            {
              prompt:
                'Complete the sentence (GATE DA 2026 Q.6 pattern): *"The scientist arrived ___ the lab ___ great enthusiasm ___ the new experiment."*',
              solution:
                'Arrive **at** a specific venue/location (`at`), **of** / **with** phrasing per sentence context—in 2026 Q.6, *"at; of; for"* fits prepositional collocations (`at` location/time, `of` possession/association, `for` purpose/recipient). Always test each blank’s governing verb/noun independently!',
            },
            {
              prompt:
                'Passage (GATE DA 2024 Q.6 pattern): *"Ancient dairy farming created selective pressure favoring a genetic mutation that allowed adults to digest lactose."* Which inference holds?',
              solution:
                'Valid: Adult lactose digestion became advantageous after dairy farming emerged. Invalid trap: *"All ancient humans were dairy farmers"* or *"Lactose tolerance caused dairy farming"* (reverses cause and effect).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If the passage says *"Dairy farming favored a mutation for adult milk digestion"*, we can infer *"Adults could not survive without milk"*.',
            reality: '"Favored" means selective advantage, not absolute necessity for survival. Never upgrade *some/favored* to *all/required*.',
            counterExample: 'Any option using extreme quantifiers (*all, only, impossible, never*) without text support is false.',
          },
          {
            myth: '*"Had he studied, he would have passed"* implies he is lazy.',
            reality: 'A counterfactual only implies the negation of both clauses (*he did not study*, *he did not pass*), never unstated motives.',
            counterExample: 'He might have fallen ill rather than being lazy.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7 AI',
            targetWeek: 5,
            topic: 'Propositional Logic & Counterfactual Implications',
            whyItMatters:
              'Translating English conditionals (*unless, only if, had X*) cleanly prevents traps in both GA Verbal and Sec 7 Logic MSQs.',
            pyqProof: 'GATE DA 2026 · Q.5 & Q.38',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm16-c3-htt1',
        title: 'Two-Filter Elimination for 3D Dice Nets & Cross-Sections',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 Q.9', 'GATE DA 2024 Q.10', 'GATE DA 2026 Q.3'],
        problemStatement:
          'Given three 3D snapshots of a patterned/numbered cube and four unfolded 2D 6-square nets (or a plane slicing two base-joined identical cones through both apexes), determine the unique valid net (or cross-section shape).',
        triggerCue:
          'Multiple 3D views sharing one face, or 2D pieces/nets that tempt slow mental rotation.',
        bruteForceTrap:
          'Trying to mentally fold all four 6-square nets completely in 3D space one flap at a time.',
        mentalShift:
          'Filter 1 (**Opposite-pair clash**): any two faces visible together in a 3D view CANNOT lie $2$ steps apart in a straight strip. Filter 2 (**Clockwise corner order**): verify one shared 3-face corner.',
        steps: [
          {
            label: 'Step 1 — Harvest adjacent pairs from 3D views',
            detail:
              'Each 3D view shows $3$ faces meeting at a corner, instantly giving $3$ pairs that are **adjacent** (never opposite).',
          },
          {
            label: 'Step 2 — Strike out nets with illegal opposites',
            detail:
              'In each net, mark the $3$ opposite pairs ($1$-square gap in straight strips, or Z-offset). Eliminate any net placing a known adjacent pair opposite.',
          },
          {
            label: 'Step 3 — Confirm clockwise orientation',
            detail:
              'At one shared corner of the surviving net(s), verify the clockwise sequence $(F_1 \\to F_2 \\to F_3)$ matches the 3D view.',
          },
        ],
        lockInTakeaway:
          'Never fold a whole cube in your head—adjacent pairs kill invalid nets in seconds.',
      },
      {
        id: 'm16-c3-htt2',
        title: 'Counterfactual & Scope-Lock Protocol for Verbal GA',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 Q.6', 'GATE DA 2025 Q.2', 'GATE DA 2026 Q.5'],
        problemStatement:
          'Read a dense 3-sentence passage (or counterfactual conditional sentence) and pick the ONE statement that MUST be true without making outside assumptions.',
        triggerCue:
          'Phrases like **"which of the following MUST follow"**, **"had X not occurred"**, or tense markers **"before / by the time"**.',
        bruteForceTrap:
          'Picking the option that sounds most "scientifically plausible" or aligns with real-world background knowledge.',
        mentalShift:
          'Treat reading inference like a **mathematical implication**: negate counterfactual clauses literally, and veto any option containing *all/always/never/causes* unless verbatim in the prompt.',
        steps: [
          {
            label: 'Step 1 — Flip counterfactuals',
            detail:
              '*"Had the actor known X, he would not have done Y"* $\\implies$ Fact 1: he did NOT know X; Fact 2: he DID do Y.',
          },
          {
            label: 'Step 2 — Check timeline & preposition anchors',
            detail:
              'For grammar blanks, check whether an action began *before* another past event (`had been V-ing`) and match each preposition to its immediate head word.',
          },
          {
            label: 'Step 3 — Veto scope creep',
            detail:
              'Reject options that swap cause/effect or upgrade *"some/favored"* to *"all/only"*.',
          },
        ],
        lockInTakeaway:
          'In GATE Verbal, "plausible in real life" is the #1 distractor; only verbatim logical entailment counts.',
      },
    ],
    arsenalCards: [
      {
        id: 'm16-c3-ars1',
        badge: 'Polygon & Circle',
        whenYouSpot: 'Regular $n$-gon in radius $r$, or symmetric chord $PQ=RQ$ with inscribed $\\angle PQR = \\theta$',
        directWeaponLatex: 'A_{\\text{slice}} = \\frac{1}{2}r^2 \\sin\\!\\left(\\frac{360^\\circ}{n}\\right), \\qquad \\angle POR = 2\\theta',
        instantRule: 'Slice polygons from the center $O$; convert inscribed angle $\\theta$ to central angle $2\\theta$ and split symmetric quadrilaterals along $OQ$.',
        tenSecondExample: '12-gon in radius $r$: $12 \\cdot \\frac{1}{2} r^2 \\sin 30^\\circ = 3r^2$ ($3$ squares of side $r$, 2025 Q.8).',
        oneFatalTrap: 'Using inscribed angle $\\theta$ directly as the central angle instead of $2\\theta$.',
      },
      {
        id: 'm16-c3-ars2',
        badge: '3D Net & Conic Cut',
        whenYouSpot: '3D cube views vs. 2D nets, or plane cutting two base-joined cones through vertices',
        directWeaponLatex: '\\text{3D adjacent} \\implies \\text{NOT } 1\\text{-gap opposite in net}; \\qquad \\text{4 equal slants } s \\implies \\text{Rhombus}',
        instantRule: 'Check opposite-face clashes first, then clockwise corner order; two base-joined cones cut through both vertices have 4 equal sides $s$ (rhombus).',
        tenSecondExample: 'If $2$ and $3$ touch in a 3D view, any net with $2\\text{-}1\\text{-}3$ in a straight row is immediately impossible (2024 Q.9).',
        oneFatalTrap: 'Calling a general rhombus cross-section a square when base diameter $2r \\neq 2h$.',
      },
      {
        id: 'm16-c3-ars3',
        badge: 'Verbal Precision',
        whenYouSpot: 'Word analogies ($A : B :: C : \\_$), counterfactual conditionals, or tense blanks',
        directWeaponLatex: 'A : B \\implies \\text{Match } (\\text{Relation, Direction, POS})',
        instantRule: 'Match part-of-speech + intensity/polarity for analogies; negate both clauses in *"Had X, would Y"* counterfactuals; never extrapolate reading passages.',
        tenSecondExample: '*Verbosity : Brevity* (antonym nouns) $::$ *Insolence : Respect* (antonym nouns, 2026 Q.1).',
        oneFatalTrap: 'Picking a real-world true statement in Reading Comprehension that goes beyond the passage’s scope.',
      },
    ],
    questions: [
      {
        id: 'm16-c3-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Paper Folding & Mirror Parity',
        marks: 1,
        type: 'MCQ',
        stem: 'A square piece of paper is folded once horizontally (bottom half folded up over top half), and then once vertically (right half folded left over left half). A single circular hole is punched strictly in the **interior** of the resulting quarter-square (touching no fold edges). When completely unfolded, how many circular holes appear?',
        options: [
          { id: 'A', text: '$1$', whyTrueOrFalse: 'False — would only happen for a single central corner cut if un-mirrored, impossible inside the interior.' },
          { id: 'B', text: '$2$', whyTrueOrFalse: 'False — misses the second crease reflection.' },
          { id: 'C', text: '$4$', whyTrueOrFalse: 'True — $2$ creases double the interior hole count twice ($1 \\to 2 \\to 4$).' },
          { id: 'D', text: '$8$', whyTrueOrFalse: 'False — requires $3$ folds, not $2$.' },
        ],
        correctOptions: ['C'],
        triggerHint: 'Each non-overlapping fold across a crease doubles an interior hole.',
        intuitiveSolution: [
          'Unfolding the vertical crease mirrors the $1$ interior hole into $2$ holes in the top half.',
          'Unfolding the horizontal crease mirrors those $2$ holes into the bottom half, giving $4$ symmetric holes.',
        ],
        directShortcutUsed: 'Reverse-crease doubling rule for interior cuts.',
      },
      {
        id: 'm16-c3-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.8 (2M)',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'A regular dodecagon ($12$-sided polygon) is inscribed in a circle of radius $r$, dividing it into $12$ congruent central triangles each of area $r^2/4$. How many squares of side $r$ can be formed with total area equal to that of the dodecagon?',
        options: [
          { id: 'A', text: '$3$', whyTrueOrFalse: 'True — $12 \\times (r^2 / 4) = 3r^2$, equal to $3$ squares of area $r^2$.' },
          { id: 'B', text: '$4$', whyTrueOrFalse: 'False — $4$ triangles make $1$ square, not $4$ squares.' },
          { id: 'C', text: '$6$', whyTrueOrFalse: 'False — overcounts by a factor of $2$.' },
          { id: 'D', text: '$12$', whyTrueOrFalse: 'False — confuses number of triangles with number of squares.' },
        ],
        correctOptions: ['A'],
        triggerHint: 'Compare total polygon area $12 \\times (r^2/4)$ against one square’s area $r^2$.',
        intuitiveSolution: [
          'Each central triangle has area $\\frac{1}{2} r^2 \\sin(30^\\circ) = \\frac{r^2}{4}$.',
          'Total area of all $12$ triangles $= 12 \\times \\frac{r^2}{4} = 3r^2$.',
          'Each square of side $r$ has area $r^2$, so $3$ squares are formed ($4$ triangles per square).',
        ],
        directShortcutUsed: 'Area conservation via $n$-gon central slice formula.',
      },
      {
        id: 'm16-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.10 (2M)',
        year: 2024,
        marks: 2,
        type: 'MCQ',
        stem: 'Two identical right circular cones (with slant height $s$ and base radius $r$ such that height $h \\neq r$) are joined base-to-base. A plane slices the combined solid passing through both vertices. What is the shape of the outer boundary of the resulting cross-section?',
        options: [
          { id: 'A', text: 'Square', whyTrueOrFalse: 'False — diagonals $2r$ and $2h$ are unequal when $h \\neq r$.' },
          { id: 'B', text: 'Rhombus', whyTrueOrFalse: 'True — all $4$ boundary edges are slant generators of equal length $s$.' },
          { id: 'C', text: 'Rectangle (non-square)', whyTrueOrFalse: 'False — a non-square rectangle does not have $4$ equal sides.' },
          { id: 'D', text: 'Ellipse', whyTrueOrFalse: 'False — the plane cuts along straight generator lines through the apexes.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Any straight line from a cone’s apex to its base rim has length equal to the slant height $s$.',
        intuitiveSolution: [
          'The plane intersects the shared circular base along a diameter $AB$ of length $2r$.',
          'From $A$ and $B$ to both apexes $V_1, V_2$, all four boundary segments $V_1A, V_1B, V_2A, V_2B$ lie on the cone surfaces and have equal length $s$.',
          'A quadrilateral with $4$ equal sides and unequal diagonals ($2r \\neq 2h$) is a rhombus.',
        ],
        directShortcutUsed: 'Slant-height edge-equality invariant.',
      },
      {
        id: 'm16-c3-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.1 (1M)',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem: 'Choose the word that best completes the analogy: **Verbosity : Brevity :: Insolence : ___**',
        options: [
          { id: 'A', text: 'Arrogance', whyTrueOrFalse: 'False — synonym of insolence, whereas Verbosity : Brevity are antonyms.' },
          { id: 'B', text: 'Respect', whyTrueOrFalse: 'True — antonym noun matching the antonym pair Verbosity : Brevity.' },
          { id: 'C', text: 'Rude', whyTrueOrFalse: 'False — wrong part of speech (adjective) and wrong polarity (synonym).' },
          { id: 'D', text: 'Brevity', whyTrueOrFalse: 'False — repeats the first pair instead of answering insolence.' },
        ],
        correctOptions: ['B'],
        triggerHint: 'Check relationship (antonym) and part of speech (abstract noun).',
        intuitiveSolution: [
          '*Verbosity* (excessive wordiness) and *Brevity* (conciseness) are direct antonym nouns.',
          '*Insolence* (rude disrespect) requires its antonym noun: *Respect*.',
        ],
        directShortcutUsed: 'Relation + Part-of-Speech analogy filter.',
      },
      {
        id: 'm16-c3-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.2 & 2026 · Q.5 Synthesis (1M)',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Choose the grammatically accurate completion: *"By the time the coach arrived at the ground, the team ___ in the rain for forty minutes; had the captain checked the forecast, they ___ outdoors."*',
        options: [
          { id: 'A', text: 'was practicing; would not practice', whyTrueOrFalse: 'False — misses duration-before-past (*had been*) and counterfactual past (*would not have*).' },
          { id: 'B', text: 'had been practicing; would not have practiced', whyTrueOrFalse: 'True — past perfect continuous for prior duration + Type-3 counterfactual.' },
          { id: 'C', text: 'has been practicing; will not practice', whyTrueOrFalse: 'False — mixes present perfect into a past narrative.' },
          { id: 'D', text: 'practiced; had not practiced', whyTrueOrFalse: 'False — wrong counterfactual main-clause modal.' },
        ],
        correctOptions: ['B'],
        triggerHint: '"By the time + past tense + for forty minutes" triggers Past Perfect Continuous.',
        intuitiveSolution: [
          'Ongoing action lasting *for forty minutes* prior to a past moment (*arrived*) requires `had been practicing`.',
          'Counterfactual past condition (`had the captain checked`) pairs with `would not have practiced`.',
        ],
        directShortcutUsed: 'Timeline tense marker + Type-3 counterfactual pairing.',
      },
      {
        id: 'm16-c3-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Mock · 2026 Q.10 Circle Geometry Pattern',
        marks: 2,
        type: 'NAT',
        stem: 'Points $P, Q, R$ lie on a circle of radius $10$ centered at $O$ such that $PQ = RQ$ and the inscribed angle $\\angle PQR = 45^\\circ$, with $O$ lying inside $\\triangle PQR$. Compute the area of the non-convex quadrilateral $PQRO$ rounded to one decimal place (use $\\sqrt{2} \\approx 1.414$).',
        natAnswer: { min: 70.6, max: 70.8, exactDisplay: '70.7' },
        triggerHint: 'Find central angle $\\angle POR = 2 \\times 45^\\circ = 90^\\circ$, then split $PQRO$ along symmetry axis $OQ$.',
        intuitiveSolution: [
          'By the inscribed angle theorem, minor central angle $\\angle POR = 2\\angle PQR = 90^\\circ$.',
          'Since $O$ is inside $\\triangle PQR$ and $PQ = RQ$, symmetry across $OQ$ gives $\\angle POQ = \\angle ROQ = \\frac{360^\\circ - 90^\\circ}{2} = 135^\\circ$.',
          'Both $\\triangle POQ$ and $\\triangle ROQ$ have two sides $10, 10$ enclosing $135^\\circ$.',
          'Total area $= 2 \\times \\frac{1}{2}(10)(10)\\sin(135^\\circ) = 100 \\cdot \\frac{\\sqrt{2}}{2} = 50\\sqrt{2} \\approx 70.7$.',
        ],
        directShortcutUsed: 'Inscribed-to-central $2\\theta$ + radial symmetry split.',
      },
    ],
  },
]

import type { ChapterData } from '../../types/curriculum'

export const MODULE_8_CHAPTERS: ChapterData[] = [
  {
    id: 'pds1-ch1',
    number: 1,
    title: 'Python Object Semantics, Aliasing, Mutability, Slicing & Closures',
    shortTitle: 'Python Semantics & Closures',
    estimatedHours: 4.0,
    dayLabel: 'Week 4 · Day 1',
    tagline:
      'Let us make Python code tracing feel completely transparent! Together we will picture variable names as sticky notes stuck onto objects in memory, cleanly separate in-place mutation from rebinding, master half-open slicing, and crack mutable defaults and closure cells on sight.',
    syllabusMapping: [
      'Programming in Python: variables, object identity, aliasing, mutability, lists, sets, dicts',
      'Functions, default arguments, slicing, lexical scoping (LEGB) & closures',
    ],
    whatIsImportant: [
      'Aliasing vs copying (`b = a` vs `b = a[:]` vs nested `[[0]*3]*3`) and `+=` vs `+` on mutable lists',
      'In-place mutation methods (`list.extend`, `list.append`, `set` ops) tested in GATE 2025 Q.23 & Q.47',
      'Mutable default argument persistence (`def f(val, lst=[]):`), tested directly in GATE 2026 Q.16',
      'Closures & independent enclosing environments (`f1 = outer()`, `f2 = outer()`), tested in GATE 2026 Q.50',
    ],
    whatIsNotImportant: [
      'Metaclasses, `__slots__`, descriptors, asyncio coroutines, and CPython bytecode internals — 0 marks in GATE DA',
      'Obscure standard-library modules (`itertools` trivia, regex dialects, decorators with 3-level arguments)',
    ],
    inboundStream: 'Module 1–7 Math Foundations — basic logic, sets, and step-by-step table tracing.',
    outboundStream: [
      'Module 8 Ch.2 Recursive Python Call Stacks & In-Place List Mutation (GATE 2024 Q.41, 2026 Q.58)',
      'Module 10 Graph DFS/BFS Traversals using mutable `dict` adjacency lists & `visited` sets',
      'Module 14 Machine Learning NumPy array view vs copy traps & stateful optimizer callbacks',
    ],
    glossary: [
      {
        term: 'Object Identity (`id` & `is`)',
        symbol: '$\\texttt{a is b} \\iff \\text{id}(a) = \\text{id}(b)$',
        plainEnglish:
          'Every Python object sits at its own address in memory; using `is` asks whether two variable names are literally stuck onto the exact same object box.',
        tinyExample: 'After `a = [1, 2]; b = a`, `a is b` is `True`, whereas `a is [1, 2]` is `False`.',
      },
      {
        term: 'Value Equality (`==`)',
        symbol: '$\\texttt{a == b}$',
        plainEnglish:
          'Unlike `is`, the `==` operator only compares what is written inside the two objects — two completely separate lists with identical elements still satisfy `==`.',
        tinyExample: 'For `a = [1, 2]` and `b = a[:]`, `a == b` is `True` even though `a is b` is `False`.',
      },
      {
        term: 'Aliasing',
        symbol: '$\\texttt{b = a}$',
        plainEnglish:
          'Aliasing happens whenever two variable names point to the exact same mutable object in memory — editing the object through one name immediately shows up when you peek through the other.',
        tinyExample: 'After `a = [1]; b = a; a.append(2)`, looking at `b` reveals `[1, 2]`.',
      },
      {
        term: 'Mutability (Mutable vs. Immutable)',
        symbol: '$\\texttt{list/dict/set}$ vs. $\\texttt{int/str/tuple}$',
        plainEnglish:
          'A mutable object (`list`, `dict`, `set`) is like a whiteboard you can erase and edit in-place; an immutable object (`int`, `float`, `str`, `tuple`) is carved in stone, so changing a variable always creates a brand-new object.',
        tinyExample: '`a = [1]; a.append(2)` edits the same list, whereas `s = "hi"; s = s + "!"` builds a new string.',
      },
      {
        term: 'In-Place Mutation vs. Rebinding',
        symbol: '$\\texttt{a += [3]}$ vs. $\\texttt{a = a + [3]}$',
        plainEnglish:
          'In-place mutation edits the existing object (so all aliases see the change), while rebinding (`=`) simply peels one sticky note off and moves it onto a freshly created object.',
        tinyExample: 'On lists, `a += [3]` and `a.extend([3])` mutate in-place, whereas `a = a + [3]` allocates a new list.',
      },
      {
        term: 'Half-Open Slicing',
        symbol: '$\\texttt{seq[start:stop:step]}$',
        plainEnglish:
          'Slicing builds a brand-new shallow copy starting at index `start`, moving by `step`, and stopping strictly BEFORE `stop` — and if `stop - start` disagrees in sign with `step`, it returns `[]` immediately.',
        tinyExample: 'For `a = [10, 20, 30, 40, 50]`, `a[4:1:-1]` is `[50, 40, 30]` and `a[1:4:-1]` is `[]`.',
      },
      {
        term: 'Shallow Copy vs. Deep Copy',
        symbol: '$\\texttt{a[:]}$ vs. $\\texttt{copy.deepcopy(a)}$',
        plainEnglish:
          'A shallow copy (`a[:]`) creates a fresh outer list but copies only the inner references, so nested lists stay shared; a deep copy recursively clones every nested layer.',
        tinyExample: 'For `x = [[1], [2]]; y = x[:]`, `y[0].append(9)` mutates `x[0]` too because both point to `[1]`.',
      },
      {
        term: 'Mutable Default Argument',
        symbol: '$\\texttt{def f(val, lst=[]):}$',
        plainEnglish:
          'Python evaluates default parameter expressions ONCE when `def` runs — not on every call — so a default `lst=[]` acts like a single shared clipboard remembered across all calls that omit `lst`.',
        tinyExample: '`f(1)` returns `[1]`, `f(2)` returns `[1, 2]`, while `f(3, [])` uses a fresh list `[3]`.',
      },
      {
        term: 'Lexical Scope & LEGB Rule',
        symbol: '$L \\to E \\to G \\to B$',
        plainEnglish:
          'Whenever Python sees a variable name, it searches four layers in order — **L**ocal, **E**nclosing, **G**lobal, **B**uilt-in — and any assignment inside a function statically locks that name as Local unless `nonlocal` or `global` is declared.',
        tinyExample: 'Writing `c += 1` inside `inner()` without `nonlocal c` raises `UnboundLocalError`.',
      },
      {
        term: 'Closure & Enclosing Cell',
        symbol: '$\\texttt{f1 = outer(),\\; f2 = outer()}$',
        plainEnglish:
          'A closure is an inner function that carries a live memory backpack (closure cell) holding variables from its enclosing function even after `outer()` has finished — and each call to `outer()` mints its own private backpack.',
        tinyExample: 'Calling `f1 = outer()` and `f2 = outer()` gives `f1` and `f2` two completely separate lists.',
      },
      {
        term: 'Simultaneous Unpacking & Late Binding',
        symbol: '$\\texttt{A, B = rhs1, rhs2}$',
        plainEnglish:
          'In simultaneous assignment, Python evaluates every expression on the right-hand side completely BEFORE rebinding any name on the left; in late binding, lambdas created inside a loop all read the loop variable’s final value when called.',
        tinyExample: '`[f() for f in [lambda: i for i in range(3)]]` evaluates to `[2, 2, 2]`, not `[0, 1, 2]`.',
      },
    ],
    generatorId: 'recursion-stack-gen',
    concepts: [
      {
        id: 'm8-c1-1',
        title: 'Names as Sticky Notes: Object Identity, Aliasing & Mutability',
        subtitle: 'Why `b = a` shares a box, why `a += [3]` surprises aliases, and how `is` differs from `==`',
        priority: 'core-pillar',
        buildsOn: 'Basic Python variables, lists, and sets',
        toyExample: {
          title: 'Two Sticky Notes on One Whiteboard',
          scenario:
            'Think of `[10, 20]` as a whiteboard sitting in memory, and variable `a` as a sticky note stuck onto that board. Now execute `b = a`, followed by `a.append(30)` vs `a = a + [40]`.',
          walkthroughSteps: [
            '1. **`b = a` (Aliasing):** Python does NOT clone the whiteboard. It sticks a second label `b` onto the **exact same** whiteboard `[10, 20]`. So `a is b` is `True`.',
            '2. **`a.append(30)` (In-Place Mutation):** You write `30` onto the shared board. Looking through sticky note `b`, you now see `[10, 20, 30]` too!',
            '3. **`a = a + [40]` (Rebinding):** `+` builds a **brand-new** whiteboard `[10, 20, 30, 40]` and moves sticky note `a` onto the new board. Sticky note `b` stays on `[10, 20, 30]`!',
            '4. **The `+=` Plot Twist:** Unlike `a = a + [40]`, `a += [40]` on a `list` calls `__iadd__`, which **mutates in-place** like `.extend([40])` — so `b` would also change!',
          ],
          ahaMoment:
            'Keep this single picture in your head and Python aliasing will never trick you again: variables are **sticky-note references**, not boxes holding values. Mutation edits the object itself (so every sticky note pointing there sees it), while plain assignment (`=`) just moves one sticky note.',
        },
        theoremAndFormula: {
          statement:
            'Every Python runtime entity is an object `(id, type, value)`. **Immutable types** (`int`, `float`, `bool`, `str`, `tuple`, `frozenset`) never alter their value in-place; any "modification" allocates a new object and rebinds the name. **Mutable types** (`list`, `dict`, `set`) allow in-place mutation visible to all aliases sharing the same `id`.',
          formulaLatex:
            '\\texttt{a == b} \\iff \\text{val}(a) = \\text{val}(b), \\qquad \\texttt{a is b} \\iff \\text{id}(a) = \\text{id}(b)',
          plainEnglishDecoding:
            'Reach for `is` when you want to ask "are these two names pointing at the exact same object in memory?" and `==` when you only care whether their contents match. On lists, remember that `A.extend(B)` and `A += B` keep `id(A)` unchanged, whereas `A = A + B` builds a brand-new list with a new `id(A)`.',
          workedMiniExamples: [
            {
              prompt: 'Trace `x = [1, 2]; y = x; x += [3]; x = x + [4]`. What are `x` and `y`?',
              solution:
                'After `y = x`, both `x` and `y` point to `[1, 2]`. `x += [3]` mutates that shared list in-place to `[1, 2, 3]`, so `y` is `[1, 2, 3]`. Then `x = x + [4]` builds a new list `[1, 2, 3, 4]` and rebinds only `x`. Result: `x = [1, 2, 3, 4]`, `y = [1, 2, 3]`.',
            },
            {
              prompt: 'Contrast `A.append(B)` vs `A.extend(B)` for `A = [1, 2, 3]`, `B = [4, 5, 6]`.',
              solution:
                '`A.append(B)` adds `B` as a single nested element: `[1, 2, 3, [4, 5, 6]]`. `A.extend(B)` iterates over `B` and mutates `A` in-place into `[1, 2, 3, 4, 5, 6]` (GATE DA 2025 Q.23).',
            },
          ],
        },
        sandboxId: 'python-trace-lab',
        msqTraps: [
          {
            myth: '`x += [4]` is always identical to `x = x + [4]` in Python.',
            reality: 'True for immutable tuples/ints/strings, **FALSE for lists**! On a `list`, `+=` mutates in-place (preserving `id(x)` and changing aliases), whereas `x = x + [4]` creates a new object.',
            counterExample: '`a = [1]; b = a; a += [2]` leaves `b == [1, 2]`, whereas `a = a + [2]` leaves `b == [1]`.',
          },
          {
            myth: 'A `tuple` can never contain anything that changes.',
            reality: 'A tuple’s *slot references* are immutable, not the objects inside those slots! If a tuple holds a `list`, that inner list can still be mutated in-place.',
            counterExample: '`t = ([1, 2], 3); t[0].append(9)` succeeds and leaves `t == ([1, 2, 9], 3)` (only `t[0] = ...` raises `TypeError`).',
          },
          {
            myth: '`[[0]*2]*3` creates 3 independent rows.',
            reality: 'List multiplication `*3` copies the **reference** to the same inner `[0, 0]` list 3 times!',
            counterExample: '`g = [[0]*2]*3; g[0][0] = 7` turns `g` into `[[7, 0], [7, 0], [7, 0]]`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: Machine Learning',
            targetWeek: 7,
            topic: 'NumPy Array Views vs. Copies',
            whyItMatters:
              'Unlike Python lists where `b = a[1:3]` allocates a fresh shallow copy, **NumPy slicing `b = arr[1:3]` returns a memory view**! Mutating `b[0] = 0` silently corrupts `arr` — a classic bug in feature scaling and train/validation splitting.',
          },
          {
            targetSection: 'Sec 4: PDSA',
            targetWeek: 5,
            topic: 'Graph Adjacency Dicts & Set Mutations',
            whyItMatters:
              'GATE DA 2024 Q.38 passed a mutable `dict` across recursive tree calls, and GATE DA 2025 Q.47 traced simultaneous `set` `-` and `|` updates inside a `while` loop.',
            pyqProof: 'GATE DA 2024 Q.38 & 2025 Q.47',
          },
        ],
      },
      {
        id: 'm8-c1-2',
        title: 'Slicing, Shallow Copies & Mutable Default Arguments',
        subtitle: 'Why `lst=[]` in `def f(x, lst=[])` remembers past calls and how slice indices behave',
        priority: 'high-yield',
        buildsOn: 'Object identity and mutable vs immutable containers (Step 1.1)',
        toyExample: {
          title: 'The Sticky Clipboard Taped to a Function’s Door',
          scenario:
            'Suppose you write `def append_to_lst(val, lst=[]): lst.append(val); return lst`. When Python reads `def`, it creates ONE empty clipboard `[]` and tapes it to `append_to_lst`’s door as the default for `lst`.',
          walkthroughSteps: [
            '1. **Call 1 — `append_to_lst(1)`:** No list was handed in, so Python uses the taped clipboard, writes `1` on it, and returns `[1]`.',
            '2. **Call 2 — `append_to_lst(2)`:** Again no list is handed in, so Python grabs the **same** taped clipboard (which already holds `[1]`!), appends `2`, and returns `[1, 2]`.',
            '3. **Call 3 — `append_to_lst(3, [])`:** This time you hand in a **fresh** clipboard `[]`. Python writes `3` on your fresh clipboard and returns `[3]` — leaving the taped clipboard untouched at `[1, 2]`!',
          ],
          ahaMoment:
            'Remember that clipboard taped to the door: Python evaluates default argument expressions **only once when `def` runs**, NOT each time you call the function. That exact subtlety showed up verbatim in **GATE DA 2026 Q.16**!',
        },
        theoremAndFormula: {
          statement:
            '1) **Default Evaluation Rule:** In `def f(a, b=expr):`, `expr` is evaluated once when `def` executes and stored in `f.__defaults__`. Use `b=None` and `if b is None: b = []` for fresh per-call lists.\n2) **Slicing `seq[start:stop:step]`:** Returns a **new shallow copy** containing elements at indices $i = \\text{start} + k\\cdot\\text{step}$ strictly stopping before `stop` (half-open `[start, stop)`).',
          formulaLatex:
            'k_{\\max} = \\left\\lfloor \\frac{\\text{stop} - \\text{start} - \\text{sgn}(\\text{step})}{\\text{step}} \\right\\rfloor, \\qquad \\text{slice cost} = \\mathcal{O}(|\\text{output}|)',
          plainEnglishDecoding:
            'When reading a slice, check the sign of `step` first: with a positive `step`, `start` defaults to `0` and `stop` to `n`; with a negative `step` (like `[::-1]`), you walk backward from `n-1` down past `0`. And whenever `(stop - start)` points the opposite way from `step`, Python calmly hands back an empty list `[]`.',
          workedMiniExamples: [
            {
              prompt: 'Evaluate `a = [10, 20, 30, 40, 50]` on `a[4:1:-1]` and `a[1:4:-1]`.',
              solution:
                '`a[4:1:-1]` starts at index 4 (`50`), steps `-1` toward (excluding) index 1 (`20`) $\\implies$ `[50, 40, 30]`. `a[1:4:-1]` tries to walk from index 1 to 4 with step `-1` (wrong direction!) $\\implies$ `[]`.',
            },
            {
              prompt: 'Trace `x = [[1], [2]]; y = x[:]; y[0].append(9); y.append([3])`. What is `x`?',
              solution:
                '`y = x[:]` makes a **shallow** copy: `y` is a new outer list, but `y[0]` and `x[0]` still point to the same inner `[1]`. So `y[0].append(9)` mutates `x[0]` to `[1, 9]`, while `y.append([3])` only extends `y`. Thus `x == [[1, 9], [2]]`.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Passing an explicit `[]` like `append_to_lst(3, [])` resets the default `lst=[]` back to empty.',
            reality: 'Passing an explicit list only overrides `lst` for *that single call*. The function’s stored default list still holds `[1, 2]` for the next call without a second argument!',
            counterExample: 'A 4th call `append_to_lst(4)` returns `[1, 2, 4]`, not `[4]`.',
          },
          {
            myth: '`b = a[:]` completely isolates `b` from any mutation via `a`.',
            reality: '`a[:]` is only a **1-level shallow copy**. Nested mutable elements (`a[0]`) remain aliased unless `copy.deepcopy(a)` is used.',
            counterExample: '`a = [[1]]; b = a[:]; b[0].append(2)` makes `a == [[1, 2]]`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA',
            targetWeek: 4,
            topic: 'In-Place Recursion vs. Slice-Copying Overhead',
            whyItMatters:
              'Passing `D[1:]` in recursive functions costs $O(n)$ extra time & memory per call ($O(n^2)$ total!). Passing index bounds `(D, s1, s2)` (GATE DA 2024 Q.41) mutates in-place in $O(1)$ extra space per frame.',
            pyqProof: 'GATE DA 2024 Q.41 & 2026 Q.58',
          },
        ],
      },
      {
        id: 'm8-c1-3',
        title: 'Lexical Scope, LEGB Resolution & Closures',
        subtitle: 'How `f1 = outer()` and `f2 = outer()` maintain private persistent state without classes',
        priority: 'high-yield',
        buildsOn: 'Object references and nested functions',
        toyExample: {
          title: 'Two Independent Locker Boxes from One Factory',
          scenario:
            'Consider `def outer(): bag = []; def inner(x): bag.append(x); return bag; return inner`. Now run `f1 = outer()` and `f2 = outer()`, then `f1(10)`, `f2(99)`, `f1(20)`.',
          walkthroughSteps: [
            '1. **`f1 = outer()`:** Calling `outer()` creates a brand-new local list `bag_1 = []` and returns `inner_1` wired specifically to `bag_1`.',
            '2. **`f2 = outer()`:** Calling `outer()` a second time creates a **separate** `bag_2 = []` and returns `inner_2` wired to `bag_2`.',
            '3. **`f1(10)` then `f2(99)` then `f1(20)`:** `f1(10)` appends to `bag_1` (`[10]`); `f2(99)` appends to `bag_2` (`[99]`); `f1(20)` appends to `bag_1` (`[10, 20]`).',
          ],
          ahaMoment:
            'Notice how cleanly Python keeps private state alive: even after `outer()` returns, its local `bag` lives on inside the returned function’s **closure cell** — and every separate call to `outer()` mints its own isolated locker box, tested directly in **GATE DA 2026 Q.50**!',
        },
        theoremAndFormula: {
          statement:
            'Python resolves identifier names statically using **LEGB**: **L**ocal $\\to$ **E**nclosing $\\to$ **G**lobal $\\to$ **B**uilt-in. Any assignment (`x = ...`, `x += ...`) inside a function body marks `x` as **Local** at compile time unless `nonlocal x` (for Enclosing) or `global x` (for Global) is declared.',
          formulaLatex:
            '\\text{Lookup: } L \\to E \\to G \\to B \\qquad \\text{vs.} \\qquad \\text{Rebind } E \\implies \\texttt{nonlocal } x',
          plainEnglishDecoding:
            'Here is the key distinction to keep crystal clear: you are always welcome to *mutate* a mutable enclosing list (`bag.append(x)`) without writing `nonlocal` because `bag` itself is only looked up, never reassigned. The moment you try to rebind an enclosing name (`count += 1` or `bag = bag + [x]`) without `nonlocal`, Python immediately raises `UnboundLocalError`.',
          workedMiniExamples: [
            {
              prompt: 'Why does `def outer(): c = 0; def inc(): c += 1; return c` fail with `UnboundLocalError`?',
              solution:
                'Because `c += 1` binds `c` inside `inc`, Python treats `c` as Local throughout `inc`. When reading `c` before assigning it, local `c` is unassigned! Adding `nonlocal c` fixes it.',
            },
            {
              prompt: 'What does `[f() for f in [lambda: i for i in range(3)]]` return?',
              solution:
                'All 3 lambdas capture the **same** enclosing loop variable `i`, whose final value after the loop ends is `2`! So it returns `[2, 2, 2]`. Using `lambda i=i: i` binds each iteration’s value as a default argument, giving `[0, 1, 2]`.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Calling `f1 = outer()` and `f2 = outer()` shares the enclosing list `bag` between `f1` and `f2`.',
            reality: 'Each invocation of `outer()` creates a brand-new stack frame and a fresh `bag` object, so `f1` and `f2` have **completely independent** closure state (unless `bag` is a mutable default arg of `outer` or a global!).',
            counterExample: 'In `f1 = outer(); f2 = outer()`, `f1(1)` changes only `f1`’s list; `f2`’s list stays unaffected (GATE DA 2026 Q.50).',
          },
          {
            myth: 'If `inner()` reads `x` before `x = 10` inside `inner()`, it reads the enclosing `x` first and then creates a local `x`.',
            reality: 'Scope is determined **statically for the whole function body**! Any assignment to `x` anywhere in `inner()` makes `x` local on line 1 too, raising `UnboundLocalError`.',
            counterExample: '`x = 5; def g(): print(x); x = 1; g()` crashes with `UnboundLocalError` on `print(x)`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: Machine Learning',
            targetWeek: 7,
            topic: 'Optimizer Callbacks & Parametric Loss Closures',
            whyItMatters:
              'Custom learning-rate decay functions and regularized loss factories (`make_ridge_loss(lam)`) capture hyperparameters (`lam`, `eta`) via closures cleanly without global variables.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm8-c1-p1',
        title: 'Box-and-Arrow Trace for Aliasing, Sets & In-Place Mutations',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2025 · Q.23', 'GATE DA 2025 · Q.47'],
        problemStatement:
          'You are given 5–10 lines of Python mixing `=`, `+=`, `+`, `.extend()`, `.append()`, slicing `[:]`, or simultaneous tuple unpacking like `A, B, C = A - B, B | C, C - A` inside a loop.',
        triggerCue:
          'Multiple names referencing lists/sets, augmented assignment (`+=`), or simultaneous RHS updates (`A, B = ...`).',
        bruteForceTrap:
          'Mentally overwriting values inside variable boxes as if Python were C integers, or updating `A` on the left before evaluating `B` on the right in `A, B = expr1, expr2`.',
        mentalShift:
          'Draw object IDs (`#1`, `#2`) and arrows! On `A, B = expr1, expr2`, freeze **all** old values first, compute every RHS expression completely, and *only then* rebind all LHS names.',
        steps: [
          {
            label: 'Step 1 — Separate Mutation from Rebinding',
            detail: 'Ask: does this line call an in-place mutator (`.append`, `.extend`, `lst[i] = ...`, `lst += ...`) or a constructor (`+`, `-`, `|`, `[:]`) that builds a brand-new object?',
          },
          {
            label: 'Step 2 — Check Simultaneous Unpacking',
            detail: 'For `A, B, C = rhs1, rhs2, rhs3`, evaluate `rhs1`, `rhs2`, `rhs3` using the **start-of-iteration** objects before changing any variable.',
          },
          {
            label: 'Step 3 — Track Aliases After Each Line',
            detail: 'Only arrows pointing to the mutated `#id` see in-place edits; rebinding moves only the single variable’s arrow.',
          },
        ],
        lockInTakeaway:
          'In-place ops edit the box; `=` moves the sticky note; simultaneous unpacking evaluates all RHS expressions before moving any sticky note.',
      },
      {
        id: 'm8-c1-p2',
        title: 'Cracking Mutable Defaults vs. Closure Factories',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 · Q.16', 'GATE DA 2026 · Q.50'],
        problemStatement:
          'A function either defines `def f(val, lst=[]):` (called multiple times, sometimes with an explicit list) OR returns an inner closure `inner` modifying an enclosing list (`f1 = outer(); f2 = outer()`).',
        triggerCue:
          'Seeing `=[]` in a `def` header, OR seeing nested `def inner` returned from `outer()` and invoked as `f1(...)`, `f2(...)`.',
        bruteForceTrap:
          'Assuming `lst=[]` creates a fresh list on every call, OR assuming `f1` and `f2` share state just because they both came from `outer()`.',
        mentalShift:
          'Count how many times the container `[]` was actually **created**: once at `def` time (for `lst=[]` default) vs once per `outer()` call (for `bag = []` inside `outer`).',
        steps: [
          {
            label: 'Step 1 — Locate Every `[]` Allocation',
            detail: 'A `[]` inside a parameter default allocates **1 shared list** for the function’s lifetime. A `[]` inside `outer()`’s body allocates **1 fresh list per `outer()` call**.',
          },
          {
            label: 'Step 2 — Check Explicit Argument Overrides',
            detail: 'When `f(3, [])` is called, that call uses the caller’s `[]`, leaving the default list intact for future default calls.',
          },
          {
            label: 'Step 3 — Watch `nonlocal` vs Mutation',
            detail: 'If `inner` executes `x.append(...)`, it mutates the enclosing cell. If `inner` executes `x = ...` without `nonlocal`, expect `UnboundLocalError`.',
          },
        ],
        lockInTakeaway:
          'Default `lst=[]` = 1 list for all calls; `bag = []` inside `outer()` = 1 private list per `outer()` instance.',
      },
    ],
    arsenalCards: [
      {
        id: 'm8-c1-a1',
        badge: 'Identity vs Mutation',
        whenYouSpot: 'List aliasing (`b = a`), `+=`, `+`, `.append`, `.extend`, or `is` vs `==`',
        directWeaponLatex: '\\texttt{+=} \\text{ / } \\texttt{.extend} \\implies \\text{same } \\texttt{id}, \\qquad \\texttt{x = x + y} \\implies \\text{new } \\texttt{id}',
        instantRule: 'In-place mutations affect every alias; rebinding (`=`) moves only the named reference.',
        tenSecondExample: '`a=[1]; b=a; a+=[2]; a=a+[3]` $\\implies$ `b=[1,2]`, `a=[1,2,3]`.',
        oneFatalTrap: 'Thinking `[[0]*2]*3` creates 3 separate rows — all 3 slots alias the exact same inner list!',
      },
      {
        id: 'm8-c1-a2',
        badge: 'Defaults & Closures',
        whenYouSpot: '`def f(x, lst=[])` or `f1 = outer(); f2 = outer()`',
        directWeaponLatex: '\\texttt{lst=[]} \\to 1\\text{ box at }\\texttt{def}, \\qquad \\texttt{bag=[] inside outer} \\to 1\\text{ box per }\\texttt{outer()}',
        instantRule: 'Default args bind once at `def`; closure cells bind once per outer call.',
        tenSecondExample: '`f(1) -> [1]`, `f(2) -> [1,2]`, `f(3,[]) -> [3]` (default still `[1,2]`).',
        oneFatalTrap: 'Assuming `f(3, [])` wipes the stored default list, or assuming `f1` and `f2` share `outer()`’s local variables.',
      },
      {
        id: 'm8-c1-a3',
        badge: 'Slicing & LEGB',
        whenYouSpot: '`seq[start:stop:step]`, shallow copy `[:]`, or inner-function variable lookup',
        directWeaponLatex: '(\\text{stop} - \\text{start}) \\cdot \\text{step} \\le 0 \\implies \\texttt{[]}',
        instantRule: 'Slicing is half-open `[start, stop)` and 1-level shallow; any assignment inside a function marks that name Local everywhere in it.',
        tenSecondExample: '`[10,20,30,40][3:0:-1] == [40,30,20]`; `[10,20,30,40][0:3:-1] == []`.',
        oneFatalTrap: 'Expecting `inner()` to read enclosing `x` before executing `x = x + 1` without `nonlocal x` (raises `UnboundLocalError`).',
      },
    ],
    questions: [
      {
        id: 'm8-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Aliasing & +=',
        marks: 1,
        type: 'MCQ',
        stem:
          'What is printed by the following Python snippet?\n```python\na = [1, 2]\nb = a\na += [3]\na = a + [4]\nprint(b, a)\n```',
        options: [
          {
            id: 'A',
            text: '`[1, 2] [1, 2, 3, 4]`',
            whyTrueOrFalse: 'False — `a += [3]` mutates the shared list in-place, so `b` sees `3` too.',
          },
          {
            id: 'B',
            text: '`[1, 2, 3] [1, 2, 3, 4]`',
            whyTrueOrFalse: 'True — `+=` mutates `[1, 2]` in-place to `[1, 2, 3]` (seen by `b`), then `a + [4]` creates a new list rebound only to `a`.',
          },
          {
            id: 'C',
            text: '`[1, 2, 3, 4] [1, 2, 3, 4]`',
            whyTrueOrFalse: 'False — `a = a + [4]` creates a new list object and does not mutate `b`.',
          },
          {
            id: 'D',
            text: '`[1, 2, 3] [1, 2, 4]`',
            whyTrueOrFalse: 'False — `a + [4]` uses the current `[1, 2, 3]` value of `a`.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Distinguish `__iadd__` (`+=`, in-place on lists) from `__add__` (`+`, allocates new list).',
        intuitiveSolution: [
          '1. `b = a` aliases both names to object `#1 = [1, 2]`.',
          '2. `a += [3]` mutates `#1` in-place to `[1, 2, 3]`, so both `a` and `b` see `[1, 2, 3]`.',
          '3. `a = a + [4]` allocates `#2 = [1, 2, 3, 4]` and rebinds only `a` to `#2`. `b` stays at `#1 = [1, 2, 3]`.',
        ],
        directShortcutUsed: 'List `+=` mutates in-place; `=` with `+` rebinds to a new object.',
      },
      {
        id: 'm8-c1-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.23',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem:
          'Given `A = [1, 2, 3]` and `B = [4, 5, 6]`, which Python statement mutates `A` in-place so that `A` becomes `[1, 2, 3, 4, 5, 6]`?',
        options: [
          {
            id: 'A',
            text: '`A.extend(B)`',
            whyTrueOrFalse: 'True — `extend` appends each element of `B` into `A` in-place, producing `[1, 2, 3, 4, 5, 6]`.',
          },
          {
            id: 'B',
            text: '`A.append(B)`',
            whyTrueOrFalse: 'False — `append` inserts `B` as a single nested list element: `[1, 2, 3, [4, 5, 6]]`.',
          },
          {
            id: 'C',
            text: '`A + B`',
            whyTrueOrFalse: 'False — `A + B` returns a new concatenated list `[1, 2, 3, 4, 5, 6]` without modifying `A`.',
          },
          {
            id: 'D',
            text: '`A.insert(3, B)`',
            whyTrueOrFalse: 'False — `insert` also inserts `B` as a single nested element at index 3: `[1, 2, 3, [4, 5, 6]]`.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Look for the list method that unpacks an iterable directly into `A` in-place.',
        intuitiveSolution: [
          '1. `A.append(B)` and `A.insert(3, B)` treat `B` as one element, nesting `[4, 5, 6]` inside `A`.',
          '2. `A + B` is a pure expression creating a new list; `A` remains `[1, 2, 3]`.',
          '3. `A.extend(B)` iterates over `B` and appends `4`, `5`, `6` individually to `A` in-place.',
        ],
        directShortcutUsed: '`list.extend(iterable)` flattens 1 level in-place; `append` nests.',
      },
      {
        id: 'm8-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.16',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem:
          'Consider the following Python function and three print calls:\n```python\ndef append_to_lst(val, lst=[]):\n    lst.append(val)\n    return lst\n\nprint(append_to_lst(1))\nprint(append_to_lst(2))\nprint(append_to_lst(3, []))\n```\nWhat is the output?',
        options: [
          {
            id: 'A',
            text: '`[1]`, `[2]`, `[3]`',
            whyTrueOrFalse: 'False — default `lst=[]` is NOT recreated per call.',
          },
          {
            id: 'B',
            text: '`[1]`, `[1, 2]`, `[1, 2, 3]`',
            whyTrueOrFalse: 'False — the third call explicitly passes a fresh `[]`, bypassing the stored default list.',
          },
          {
            id: 'C',
            text: '`[1]`, `[1, 2]`, `[3]`',
            whyTrueOrFalse: 'True — calls 1 and 2 share the default list created at `def` time, while call 3 uses its own explicit `[]`.',
          },
          {
            id: 'D',
            text: '`[1]`, `[2]`, `[2, 3]`',
            whyTrueOrFalse: 'False — call 2 uses the same default list as call 1, and call 3 gets a fresh `[]`.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Evaluate `lst=[]` once when `def` runs, then trace which calls omit the 2nd argument.',
        intuitiveSolution: [
          '1. At `def` time, Python creates one default list object `D = []`.',
          '2. `append_to_lst(1)` uses `D`, mutates it to `[1]`, and prints `[1]`.',
          '3. `append_to_lst(2)` reuses the same `D`, mutates it to `[1, 2]`, and prints `[1, 2]`.',
          '4. `append_to_lst(3, [])` receives an explicit fresh `[]`, appends `3`, and prints `[3]`.',
        ],
        directShortcutUsed: 'Mutable default arg = single shared container across all default calls.',
      },
      {
        id: 'm8-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.50 (Closure Trace)',
        year: 2026,
        marks: 2,
        type: 'MSQ',
        stem:
          'Consider the Python closure factory below:\n```python\ndef outer():\n    data = []\n    def inner(x):\n        data.append(x)\n        return data\n    return inner\n\nf1 = outer()\nf2 = outer()\na = f1(10)\nb = f2(20)\nc = f1(30)\n```\nWhich of the following statements is/are **TRUE** after execution?',
        options: [
          {
            id: 'A',
            text: '`a is c` evaluates to `True`.',
            whyTrueOrFalse: 'True — `f1(10)` and `f1(30)` both mutate and return `f1`’s single enclosed list `data`, so `a` and `c` reference the exact same list object.',
          },
          {
            id: 'B',
            text: '`len(b)` is `1` and `b == [20]`.',
            whyTrueOrFalse: 'True — `f2 = outer()` created an independent closure list, so `f2(20)` contains only `[20]`.',
          },
          {
            id: 'C',
            text: '`a == [10]` because `a` was assigned before `c = f1(30)`.',
            whyTrueOrFalse: 'False — `a` holds a reference to `f1`’s `data` list, which was later mutated in-place by `f1(30)`, so `a == [10, 30]`.',
          },
          {
            id: 'D',
            text: '`f1` and `f2` share the same underlying `data` list object.',
            whyTrueOrFalse: 'False — each call to `outer()` allocates a separate local `data = []` closure cell.',
          },
        ],
        correctOptions: ['A', 'B'],
        triggerHint: 'Notice two things: (1) `outer()` is called twice; (2) `inner` returns a reference to the mutable list `data`.',
        intuitiveSolution: [
          '1. `f1 = outer()` allocates `data_1 = []`; `f2 = outer()` allocates a distinct `data_2 = []` (eliminating D).',
          '2. `a = f1(10)` mutates `data_1` to `[10]` and binds `a` to `data_1`.',
          '3. `b = f2(20)` mutates `data_2` to `[20]` and binds `b` to `data_2` (confirming B).',
          '4. `c = f1(30)` mutates `data_1` in-place to `[10, 30]` and binds `c` to `data_1`. Since `a` and `c` point to `data_1`, `a is c` is `True` (confirming A) and `a` is `[10, 30]` (eliminating C).',
        ],
        directShortcutUsed: '2 `outer()` calls = 2 closure lists; returning `data` aliases the caller variable to the closure cell.',
      },
      {
        id: 'm8-c1-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.47 (Adapted Set-Loop Trace)',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem:
          'Trace the simultaneous set updates inside the `while` loop below:\n```python\nA = {"this", "is", "gate"}\nB = {"gate", "da"}\nC = {"is", "test"}\nk = 0\nwhile k < 2:\n    A, B, C = (A - C) | (B & C), (B | A) - C, (C - B) | (A & C)\n    k += 1\n```\nAfter the loop finishes, which set(s) contain `"this"`?',
        options: [
          {
            id: 'A',
            text: 'Only `A`',
            whyTrueOrFalse: 'False — in iteration 1, `"this"` stays in `A` AND enters `B` via `B | A`. Wait: check carefully!',
          },
          {
            id: 'B',
            text: 'Both `A` and `B`',
            whyTrueOrFalse: 'True — let us trace: `"this"` is never in `C`, so `A - C` keeps it in `A` and `(B | A) - C` puts it in `B` in both iterations.',
          },
          {
            id: 'C',
            text: 'Only `B`',
            whyTrueOrFalse: 'False — `"this"` is in `A` and never enters `C`, so `A - C` preserves `"this"` in `A`.',
          },
          {
            id: 'D',
            text: 'Only `C`',
            whyTrueOrFalse: 'False — `"this"` never enters `C` (neither in `C - B` nor in `A & C`).',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Track only the single element `"this"` instead of computing all strings on every iteration!',
        intuitiveSolution: [
          '1. Initially, `"this"` is in `A`, and NOT in `B` or `C`.',
          '2. Notice `"this"` can enter `C_new = (C - B) | (A & C)` only if it is already in `C`! Since it starts outside `C`, `"this"` is NEVER in `C` in any iteration.',
          '3. Iteration 1 (`k = 0`): `"this"` $\\in A$ and $\\notin C \\implies$ it stays in `A_new = (A - C) | (B & C)` AND enters `B_new = (B | A) - C`.',
          '4. Iteration 2 (`k = 1`): `"this"` $\\in A$, $\\in B$, $\\notin C \\implies$ it remains in both `A` and `B`, and absent from `C`.',
        ],
        directShortcutUsed: 'Invariant tracking: track membership of the single queried element across simultaneous RHS rules.',
      },
      {
        id: 'm8-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber Tricky MSQ · Shallow Copy & Late Binding',
        marks: 2,
        type: 'MSQ',
        stem:
          'Analyze the following Python code:\n```python\ngrid = [[1, 2]] * 2\ncopy_grid = grid[:]\ncopy_grid[0][1] = 99\nfuncs = [lambda: i for i in range(3)]\n```\nWhich of the following is/are **TRUE**?',
        options: [
          {
            id: 'A',
            text: '`grid` evaluates to `[[1, 99], [1, 99]]`.',
            whyTrueOrFalse: 'True — `[[1, 2]] * 2` aliases both rows to the same `[1, 2]` list, and `grid[:]` only shallow-copies the outer list, so `copy_grid[0][1] = 99` mutates that single inner list seen twice in `grid`.',
          },
          {
            id: 'B',
            text: '`grid is copy_grid` evaluates to `False`.',
            whyTrueOrFalse: 'True — `grid[:]` creates a new outer list object (`id(copy_grid) != id(grid)`).',
          },
          {
            id: 'C',
            text: '`[f() for f in funcs]` evaluates to `[0, 1, 2]`.',
            whyTrueOrFalse: 'False — late binding in list comprehension closures captures the variable `i` (not its iteration snapshot), returning `[2, 2, 2]`.',
          },
          {
            id: 'D',
            text: '`grid[0] is grid[1]` evaluates to `True`.',
            whyTrueOrFalse: 'True — `* 2` replicated the reference to the same inner list object `[1, 2]`.',
          },
        ],
        correctOptions: ['A', 'B', 'D'],
        triggerHint: 'Combine three concepts: list replication aliasing (`* 2`), shallow copy (`[:]`), and closure late binding.',
        intuitiveSolution: [
          '1. `[[1, 2]] * 2` builds `[R, R]` where both slots point to the same inner list `R` (`grid[0] is grid[1]` is `True`).',
          '2. `copy_grid = grid[:]` creates a new outer list `[R, R]` (`grid is copy_grid` is `False`), still pointing to `R`.',
          '3. `copy_grid[0][1] = 99` mutates `R` to `[1, 99]`, so `grid` becomes `[[1, 99], [1, 99]]`.',
          '4. Each lambda in `funcs` looks up `i` when called after the comprehension ends (`i == 2`), giving `[2, 2, 2]`.',
        ],
        directShortcutUsed: 'Slice `[:]` creates a new outer container (`is` = False) but leaves nested objects aliased; loop lambdas bind late.',
      },
    ],
  },
  {
    id: 'pds1-ch2',
    number: 2,
    title: 'Recursion Call Stacks, Recurrences & Asymptotic Complexity',
    shortTitle: 'Recursion & Complexity',
    estimatedHours: 4.5,
    dayLabel: 'Week 4 · Day 2',
    tagline:
      'Let us take the mystery out of recursion and Big-$O$ once and for all! Together we will separate total call-tree activations from peak stack depth, spot hidden binary-halving shortcuts inside Python code without tedious unrolling, and solve recurrences cleanly using recursion trees and the Master Theorem.',
    syllabusMapping: [
      'Programming in Python: recursion & runtime call stack tracing',
      'Asymptotic worst-case & expected time/space complexity, recurrences & Master Theorem',
    ],
    whatIsImportant: [
      'Total runtime stack activations vs peak stack depth (GATE 2026 Q.39 `mystery(4) -> 15` activations)',
      'Binary-halving & dictionary/array recursion patterns (GATE 2024 Q.38 & Q.41, GATE 2025 Q.63, GATE 2026 Q.58)',
      'Binary search recurrence $F(n)=F(\\lfloor n/2 \\rfloor)+1$ & exact comparison counts (GATE 2024 Q.40, 2026 Q.31)',
      'Quicksort expected-time recurrence (GATE 2026 Q.15) & $O(n^2)$ triangular loop sums (GATE 2025 Q.12)',
    ],
    whatIsNotImportant: [
      'Akra-Bazzi theorem edge-case integrals and amortized potential-method proofs for Fibonacci heaps — 0 marks in GATE DA',
      'Smoothed analysis or P/NP completeness reductions (out of GATE DA syllabus)',
    ],
    inboundStream: 'Module 1 Geometric Series & Logs + Module 8 Ch.1 In-Place Mutation & Stack Frames.',
    outboundStream: [
      'Module 8 Ch.3 Heap `sift-down` $O(\\log n)$ & `build-heap` $\\Theta(n)$ series analysis',
      'Module 9 Sorting & Binary Search exact comparison counts & Quicksort expected recurrence',
      'Module 10 Graph DFS recursion depth $O(|V|)$ & Dijkstra $O((|V|+|E|)\\log |V|)$',
    ],
    glossary: [
      {
        term: 'Base Case & Recursive Step',
        symbol: '$\\texttt{if n <= 0: return 1}$',
        plainEnglish:
          'Every recursive function needs a clear stopping floor (base case) so it does not run forever, plus a shrinking rule (recursive step) that breaks a bigger problem into smaller copies of itself.',
        tinyExample: 'Changing `if n <= 1` to `if n <= 0` in `mystery(4)` jumps total calls from $9$ to $15$!',
      },
      {
        term: 'Call Stack & Activation Record',
        symbol: '$\\text{Frame}(f, \\text{locals}, \\text{return addr})$',
        plainEnglish:
          'Whenever Python calls a function, it places a fresh folder (activation record / stack frame) holding that call’s local variables on top of a vertical tray stack, and pops it off the moment `return` runs.',
        tinyExample: 'Calling `f(4) -> f(3) -> f(2) -> f(1) -> f(0)` stacks $5$ active frames at once.',
      },
      {
        term: 'Recursion Tree & Total Activations',
        symbol: '$C(n) = 1 + \\sum_{i=1}^k C(n_i)$',
        plainEnglish:
          'Drawing every function call as a tree node lets you count total activations — the total number of times the function starts running, which drives **time complexity** (and remember the `+ 1` for the parent call!).',
        tinyExample: 'For `mystery(4)` with base `n <= 0`, $C(0)=1, C(1)=3, C(2)=5, C(3)=9, C(4)=15$.',
      },
      {
        term: 'Peak Stack Depth (Stack Space)',
        symbol: '$D(n) = 1 + \\max_{1 \\le i \\le k} D(n_i)$',
        plainEnglish:
          'Because finished left branches pop off the stack before right branches begin, the maximum memory used at any instant equals only the **longest single root-to-leaf chain** (tree height), not total calls.',
        tinyExample: '`mystery(4)` makes $15$ total calls, yet never holds more than $5$ frames on the stack at once.',
      },
      {
        term: 'Recurrence Relation',
        symbol: '$T(n) = a\\,T(n/b) + f(n)$',
        plainEnglish:
          'A recurrence writes the running time on input size $n$ in terms of the time on smaller subproblems plus the combine/split work $f(n)$ done at the current level.',
        tinyExample: 'Binary search obeys $F(n) = F(\\lfloor n/2 \\rfloor) + 1$, while Mergesort obeys $T(n) = 2T(n/2) + \\Theta(n)$.',
      },
      {
        term: 'Master Theorem',
        symbol: '$f(n) \\text{ vs. } n^{\\log_b a}$',
        plainEnglish:
          'Think of the Master Theorem as a referee in a tug-of-war between root work $f(n)$ and leaf count $n^{\\log_b a}$: whichever side grows polynomially faster wins, and if they tie, you simply multiply by $\\log n$.',
        tinyExample: 'For $T(n) = 4T(n/2) + n^2\\log n$, $n^{\\log_2 4} = n^2$ ties $f(n)$ ($k=1$), giving $\\Theta(n^2 \\log^2 n)$.',
      },
      {
        term: 'Subtract-and-Conquer (Telescoping)',
        symbol: '$T(n) = T(n-1) + f(n)$',
        plainEnglish:
          'When each recursive step shrinks $n$ by a constant (like $n - 1$) instead of dividing $n$ by $b$, Master Theorem does not apply — instead you unroll and sum $\\sum f(k)$ directly.',
        tinyExample: '$T(n) = T(n-1) + n$ telescopes to $1 + 2 + \\dots + n = \\Theta(n^2)$.',
      },
      {
        term: 'Big-$O$ (Asymptotic Upper Bound)',
        symbol: '$f(n) = O(g(n))$',
        plainEnglish:
          'Big-$O$ works like $\\le$ for huge $n$ (ignoring constant multipliers): $f(n)$ grows no faster than $g(n)$ once $n$ gets sufficiently large.',
        tinyExample: '$1000n = O(n^2)$ and $2^{n+1} = O(2^n)$, whereas $2^{2n} = 4^n \\neq O(2^n)$.',
      },
      {
        term: 'Big-$\\Omega$ & Big-$\\Theta$ (Lower & Tight Bounds)',
        symbol: '$\\Omega(g(n)),\\; \\Theta(g(n))$',
        plainEnglish:
          'Big-$\\Omega$ works like $\\ge$ (a floor on growth), and Big-$\\Theta$ works like $=$ (both an upper and lower bound up to constant factors, pinning down the exact growth rate).',
        tinyExample: 'Summing $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$ is tightly $\\Theta(n^2)$.',
      },
      {
        term: 'Little-$o$ & Little-$\\omega$ (Strict Bounds)',
        symbol: '$\\lim_{n\\to\\infty} \\frac{f(n)}{g(n)} = 0 \\text{ or } \\infty$',
        plainEnglish:
          'Little-$o$ means strictly slower ($<$ as $n \\to \\infty$, ratio goes to $0$), while little-$\\omega$ means strictly faster ($>$ as $n \\to \\infty$, ratio blows up to $\\infty$).',
        tinyExample: '$(\\log_2 n)^{\\log_2 n} = \\omega(n^{10})$ because taking $\\log_2$ gives $(\\log_2 n)\\log_2\\log_2 n \\gg 10\\log_2 n$.',
      },
      {
        term: 'Binary Bit-Peeling & Inversion Count',
        symbol: '$\\texttt{a // 2},\\; \\{(i<j): A[i]>A[j]\\}$',
        plainEnglish:
          'Dividing an integer by $2$ (`// 2`) with `% 2` checks peels off its binary bits one by one from right to left, while adjacent-swap recursive loops always perform exactly one swap per out-of-order pair (inversion).',
        tinyExample: 'Since $15 = 1111_2$ has four `1` bits, `f(15, 10)` doubles $10$ four times to $160$.',
      },
    ],
    generatorId: 'recursion-stack-gen',
    concepts: [
      {
        id: 'm8-c2-1',
        title: 'Recursion Trees: Total Stack Activations vs. Maximum Stack Depth',
        subtitle: 'Why a 15-call recursion tree only ever holds 5 frames on the call stack at once',
        priority: 'core-pillar',
        buildsOn: 'Python function frames and local variables (Module 8 Ch.1)',
        toyExample: {
          title: 'Tracing `mystery(4)` Like a Call-Center Manager',
          scenario:
            'Consider `def mystery(n): if n <= 0: return 1; return mystery(n-1) + mystery(n-2)`. How many **total calls** happen during `mystery(4)`, and how many frames are **stacked simultaneously** at peak?',
          walkthroughSteps: [
            '1. **Notice the Base Boundary:** Base case is `n <= 0` (so `n = 1` STILL calls `mystery(0)` and `mystery(-1)`!).',
            '2. **Count Bottom-Up (`C(n) = 1 + C(n-1) + C(n-2)`):** `C(k) = 1` for $k \\le 0$. Then `C(1) = 1 + 1 + 1 = 3`, `C(2) = 1 + 3 + 1 = 5`, `C(3) = 1 + 5 + 3 = 9`, and `C(4) = 1 + 9 + 5 = 15`!',
            '3. **Check Peak Stack Depth:** Python finishes the entire `mystery(n-1)` left branch and **pops** those frames before starting `mystery(n-2)`. The deepest chain is `4 -> 3 -> 2 -> 1 -> 0` = **5 frames**!',
          ],
          ahaMoment:
            'Keep these two quantities cleanly separated in your mind: **total activations** counts *every node* in the recursion tree ($15$, matching **GATE DA 2026 Q.39** = time $\\Theta(\\phi^n)$), while **peak stack depth** counts only the *single deepest chain* alive at once ($5$, space $\\Theta(n)$)!',
        },
        theoremAndFormula: {
          statement:
            'For any recursive function making $k$ recursive calls on sub-inputs $n_1, \\dots, n_k$, **total activations** $C(n)$ adds across all branches (tree size), while **max stack depth** $D(n)$ takes the maximum across branches (tree height):',
          formulaLatex:
            'C(n) = 1 + \\sum_{i=1}^k C(n_i), \\qquad D(n) = 1 + \\max_{1 \\le i \\le k} D(n_i)',
          plainEnglishDecoding:
            'Here is a handy cross-check for any full binary call tree (where every non-base call branches into $2$ recursive calls): if you count $L$ base-case leaf calls, total activations MUST equal $C = 2L - 1$. In `mystery(4)` above, $L = 8$ leaves immediately confirms $2(8) - 1 = 15$ total calls!',
          workedMiniExamples: [
            {
              prompt: 'Trace `f(15, 10)` where `if a == 0: return b; if a % 2 == 1: return 2 * f((a-1)//2, b); return f(a//2, b)` (GATE DA 2025 Q.63 pattern).',
              solution:
                'Since $15 = 1111_2$ is odd at every step ($15 \\to 7 \\to 3 \\to 1 \\to 0$), the odd branch runs 4 times before hitting `a == 0`: `2 * 2 * 2 * 2 * 10 = 160`. Peak stack depth is $5$ frames.',
            },
            {
              prompt: 'What does `fun(D, s1, s2)` do if it swaps `D[s1], D[s2]` when `s1 < s2` and recurses `fun(D, s1+1, s2-1)` (GATE DA 2024 Q.41)?',
              solution:
                'It swaps symmetric outer pairs `(s1, s2)` inward until `s1 >= s2`, performing **in-place subarray reversal** in $\\lfloor (s_2-s_1+1)/2 \\rfloor$ swaps and $O(s_2-s_1)$ stack space.',
            },
          ],
        },
        sandboxId: 'python-trace-lab',
        msqTraps: [
          {
            myth: 'If a recursive function makes $15$ total calls, its call stack needs space for $15$ frames.',
            reality: 'Call-stack frames are popped on `return` before sibling recursive calls begin! Peak stack memory is tree **height** ($5$), not tree **size** ($15$).',
            counterExample: '`mystery(4)` has 15 total activations (`C(4)=15`) but maximum stack depth 5.',
          },
          {
            myth: 'In `f(n-1) + f(n-2)`, base cases `n <= 1` and `n <= 0` give the same call count minus 1.',
            reality: 'They differ exponentially! With `n <= 1` returning directly, `C(4) = 9`; with `n <= 0`, `n = 1` branches twice, giving `C(4) = 15` (a 67% jump!). Always verify the exact `if` base condition.',
            counterExample: '`C(1) = 1` when base is `n <= 1`, vs `C(1) = 3` when base is `n <= 0`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA',
            targetWeek: 5,
            topic: 'Recursive DFS on Trees & Graphs',
            whyItMatters:
              'Tree DFS (`count(child_dict, 0)` in GATE 2024 Q.38) visits every node once ($C = |V|$ activations) with stack depth $D = \\text{height} + 1 \\le |V|$.',
            pyqProof: 'GATE DA 2024 Q.38 & 2025 Q.65',
          },
        ],
      },
      {
        id: 'm8-c2-2',
        title: 'Solving Recurrences: Telescoping, Recursion Tree & Master Theorem',
        subtitle: 'Turning divide-and-conquer and subtract-and-conquer equations into tight $\\Theta$ bounds in seconds',
        priority: 'core-pillar',
        buildsOn: 'Geometric series (Module 1) and recursion call trees (Step 2.1)',
        toyExample: {
          title: 'Binary Search vs. Mergesort on 16 Items',
          scenario:
            'Compare searching a sorted 16-item list by halving (`T(n) = T(n/2) + 1`) against sorting it by splitting into two halves and merging (`T(n) = 2T(n/2) + n`).',
          walkthroughSteps: [
            '1. **Binary Search (`1` branch of size `n/2`):** Levels are `16 -> 8 -> 4 -> 2 -> 1`, doing $1$ comparison per level $\\implies 4 + 1 = \\lfloor \\log_2 16 \\rfloor + 1 = 5$ comparisons ($\\Theta(\\log n)$).',
            '2. **Mergesort (`2` branches of size `n/2`):** Level 0 does $16$; Level 1 does $8+8=16$; Level 2 does $4\\times 4 = 16$; Level 3 does $8\\times 2 = 16$. Every single level sums to $n = 16$ across $\\log_2 n = 4$ levels $\\implies \\Theta(n \\log n)$!',
          ],
          ahaMoment:
            'Picture every divide-and-conquer recurrence as a friendly **tug-of-war between root work $f(n)$ and leaf count $n^{\\log_b a}$**: if leaves grow faster, leaves win; if root work dominates, root wins; and if both sides tie across every level, you simply multiply by $\\log n$!',
        },
        theoremAndFormula: {
          statement:
            '**Master Theorem** for $T(n) = a\\,T(n/b) + f(n)$ ($a \\ge 1, b > 1$) with watershed $w(n) = n^{\\log_b a}$:\n1. **Leaf-Heavy:** $f(n) = O(n^{\\log_b a - \\epsilon})$ for some $\\epsilon > 0 \\implies T(n) = \\Theta(n^{\\log_b a})$.\n2. **Balanced:** $f(n) = \\Theta(n^{\\log_b a} \\log^k n)$ ($k \\ge 0$) $\\implies T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$.\n3. **Root-Heavy:** $f(n) = \\Omega(n^{\\log_b a + \\epsilon})$ and $a f(n/b) \\le c f(n)$ ($c < 1$) $\\implies T(n) = \\Theta(f(n))$.',
          formulaLatex:
            'T(n) = a\\,T\\!\\left(\\frac{n}{b}\\right) + f(n) \\quad \\text{vs.} \\quad n^{\\log_b a}, \\qquad F_{\\text{bsearch}}(n) = F_{\\text{bsearch}}\\!\\left(\\left\\lfloor \\frac{n}{2} \\right\\rfloor\\right) + 1',
          plainEnglishDecoding:
            'Keep an eye out for **non-Master** recurrences too: $T(n) = T(n-1) + n$ telescopes cleanly to $\\sum_{k=1}^n k = \\Theta(n^2)$ (just like triangular back-substitution in GATE 2025 Q.12), while $T(n) = 2T(n-1) + 1$ doubles every step into $\\Theta(2^n)$. For binary search on $n$ elements with an absent target, worst-case 3-way comparisons equal $\\lfloor \\log_2 n \\rfloor + 1$ (so $n = 1000$ gives $9 + 1 = 10$, GATE 2026 Q.31).',
          workedMiniExamples: [
            {
              prompt: 'Solve $T(n) = 4 T(n/2) + n^2 \\log n$.',
              solution:
                'Watershed is $n^{\\log_2 4} = n^2$. Since $f(n) = n^2 \\log^1 n$ matches Case 2 with $k=1$, $T(n) = \\Theta(n^2 \\log^2 n)$.',
            },
            {
              prompt: 'What is the worst-case number of comparisons in recursive binary search on $n=1000$ distinct elements when the key is absent (GATE 2026 Q.31)?',
              solution:
                'Recurrence $F(n) = F(\\lfloor n/2 \\rfloor) + 1$ with $F(0)=0, F(1)=1$ (or `mid` check plus recurse on at most $\\lfloor n/2 \\rfloor$: $1000 \\to 500 \\to 250 \\to 125 \\to 62 \\to 31 \\to 15 \\to 7 \\to 3 \\to 1 \\to 0$) performs $\\lfloor \\log_2 1000 \\rfloor + 1 = 9 + 1 = 10$ comparisons.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Master Theorem solves every divide-and-conquer recurrence of the form $T(n) = 2T(n/2) + f(n)$.',
            reality: 'False! There is a gap between Case 1 and Case 2 for sub-logarithmic divisors like $f(n) = n / \\log n$. You must draw the recursion tree: $\\sum_{i=0}^{\\log n - 1} \\frac{n}{\\log n - i} = \\Theta(n \\log \\log n)$.',
            counterExample: '$T(n) = 2T(n/2) + n/\\log n$ is $\\Theta(n \\log \\log n)$ — none of Master Theorem Cases 1, 2, or 3 applies!',
          },
          {
            myth: 'Randomized Quicksort’s expected recurrence $T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1}[T(k)+T(n-k-1)] + \\Theta(n)$ can be solved by plugging $a=2, b=2$ into Master Theorem directly.',
            reality: 'Master Theorem assumes a fixed split ratio; average-case Quicksort averages over all $n$ split indices $k$ (GATE 2026 Q.15) and solves via substitution/telescoping to $\\Theta(n \\log n)$.',
            counterExample: 'Worst-case Quicksort picks $k=0$ every time: $T(n) = T(n-1) + \\Theta(n) = \\Theta(n^2)$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA',
            targetWeek: 4,
            topic: 'Mergesort, Quicksort & Binary Search',
            whyItMatters:
              'Module 9 relies directly on $F(n) = F(\\lfloor n/2 \\rfloor) + 1$ (GATE 2024 Q.40) and the randomized Quicksort recurrence (GATE 2026 Q.15).',
            pyqProof: 'GATE DA 2024 Q.40, 2026 Q.15 & Q.31',
          },
        ],
      },
      {
        id: 'm8-c2-3',
        title: 'Asymptotic Notation ($O, \\Omega, \\Theta, o, \\omega$) & Growth Hierarchy',
        subtitle: 'Comparing tricky functions like $n^{\\log \\log n}$ vs $(\\log n)^{\\log n}$ using logs and limits',
        priority: 'high-yield',
        buildsOn: 'Logarithms and limits from Module 1',
        toyExample: {
          title: 'The Tortoise ($1000n$) vs. the Hare ($0.01n^2$)',
          scenario:
            'Algorithm A runs in $1000n$ steps and Algorithm B runs in $0.01n^2$ steps. At $n = 100$, A takes $100{,}000$ steps while B takes only $100$. Does that make B asymptotically faster?',
          walkthroughSteps: [
            '1. **Find the Crossover:** $1000n = 0.01n^2 \\implies n = 100{,}000$.',
            '2. **Beyond $n_0 = 100{,}000$:** For every $n > 100{,}000$, $1000n < 0.01n^2$, and the ratio $\\frac{1000n}{0.01n^2} = \\frac{10^5}{n} \\to 0$ as $n \\to \\infty$.',
            '3. **Conclusion:** $1000n = o(0.01n^2)$ and $1000n = O(n^2)$ — constant factors vanish in the long run!',
          ],
          ahaMoment:
            'Read these five symbols just like ordinary number comparisons for huge $n$ (ignoring positive constants): Big-$O$ means $\\le$, $\\Omega$ means $\\ge$, $\\Theta$ means $=$, little-$o$ means strictly $<$, and little-$\\omega$ means strictly $>$.',
        },
        theoremAndFormula: {
          statement:
            'For non-negative functions $f(n), g(n)$, evaluate $L = \\lim_{n\\to\\infty} \\frac{f(n)}{g(n)}$ (when the limit exists):\n- $L = 0 \\implies f = o(g)$ (strictly slower, so $f = O(g)$ and $f \\neq \\Theta(g)$)\n- $0 < L < \\infty \\implies f = \\Theta(g)$ (same asymptotic growth)\n- $L = \\infty \\implies f = \\omega(g)$ (strictly faster, so $f = \\Omega(g)$)',
          formulaLatex:
            '1 \\prec \\log \\log n \\prec \\log^k n \\prec n^{\\epsilon} \\prec n \\log n \\prec n^c \\prec c^n \\prec n! \\prec n^n \\quad (c>1,\\epsilon>0)',
          plainEnglishDecoding:
            'Whenever $n$ shows up in both the base and the exponent (like $n^{\\log \\log n}$ vs. $2^{\\sqrt{n}}$), calm the expression down by **taking $\\log_2$ of both sides**! Just watch one sneaky catch: if $\\log_2 f$ and $\\log_2 g$ differ by a constant factor (like $n$ vs. $2n$), taking $2^{(\\cdot)}$ turns that constant into an exponential gap ($2^n$ vs. $4^n$)!',
          workedMiniExamples: [
            {
              prompt: 'Compare $f(n) = (\\log_2 n)^{\\log_2 n}$ and $g(n) = n^5$.',
              solution:
                'Take $\\log_2$: $\\log_2 f(n) = (\\log_2 n) \\log_2\\log_2 n$, while $\\log_2 g(n) = 5 \\log_2 n$. Since $\\log_2 \\log_2 n \\to \\infty > 5$, $f(n) = \\omega(n^5)$ — super-polynomial!',
            },
            {
              prompt: 'Is $2^{n+1} = O(2^n)$? Is $2^{2n} = O(2^n)$?',
              solution:
                '$2^{n+1} = 2 \\cdot 2^n \\implies \\Theta(2^n)$ (constant factor $2$, so **YES**). Meanwhile $2^{2n} = 4^n$ has ratio $4^n / 2^n = 2^n \\to \\infty$, so $2^{2n} = \\omega(2^n)$ (**NO**).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Taking $\\log$ of $f$ and $g$: if $\\log f(n) = \\Theta(\\log g(n))$, then $f(n) = \\Theta(g(n))$.',
            reality: '**FALSE!** A constant factor inside an exponent creates an exponential gap! For $f(n) = 2^n$ and $g(n) = 4^n$, $\\log_2 f = n$ and $\\log_2 g = 2n$ are both $\\Theta(n)$, yet $4^n / 2^n = 2^n \\to \\infty$!',
            counterExample: '$f(n) = n^2$ vs $g(n) = n^3$: $\\log f = 2\\log n = \\Theta(\\log g)$, yet $n^2 = o(n^3)$.',
          },
          {
            myth: 'If $f(n) = O(g(n))$, then $\\lim_{n\\to\\infty} f(n)/g(n)$ must exist.',
            reality: 'A bounded oscillating function has $f(n) = \\Theta(g(n))$ even when its limit does not exist.',
            counterExample: '$f(n) = n(2 + (-1)^n)$ satisfies $n \\le f(n) \\le 3n \\implies f(n) = \\Theta(n)$, though $f(n)/n$ alternates between $1$ and $3$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA & Sec 6: ML',
            targetWeek: 5,
            topic: 'Sparse vs. Dense Graph & Matrix Complexity',
            whyItMatters:
              'Comparing $O(|V|^2)$ vs $O((|V|+|E|)\\log |V|)$ for Dijkstra, and $O(nd^2 + d^3)$ vs $O(n^2 d)$ for PCA/Ridge regression when $d \\gg n$.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm8-c2-p1',
        title: 'Collapsing Cryptic Recursion via Binary / Loop Invariants',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2025 · Q.63', 'GATE DA 2026 · Q.39', 'GATE DA 2026 · Q.58'],
        problemStatement:
          'A Python recursive function has an unfamiliar combination of `% 2`, `// 2`, list swaps, or dual `f(n-1) + f(n-2)` calls on a moderately large input like `a = 15` or `n = 4` or a 5-element array.',
        triggerCue:
          'Integer division `// 2` with `% 2` branching, OR `f(n-1) + f(n-2)` asking for **number of calls** rather than return value, OR repeated adjacent swaps.',
        bruteForceTrap:
          'Drawing a messy tree without labeling base-case boundaries, or missing the algorithmic identity (e.g., binary representation of `a`, or inversion count of an array).',
        mentalShift:
          'Spot the hidden math invariant first: `(a-1)//2` strips the trailing `1` bit of `a`; `C(n) = 1 + C(n-1) + C(n-2)` builds a 5-row bottom-up table in 10 seconds; adjacent swaps only ever fix **inversions**.',
        steps: [
          {
            label: 'Step 1 — Check Base-Case Boundary (`<= 0` vs `<= 1`)',
            detail: 'Test `n = 0` and `n = 1` explicitly so you do not miscount the bottom of the recursion tree.',
          },
          {
            label: 'Step 2 — Separate Return Value from Call Count',
            detail: 'If asked for total activations, compute `C(0), C(1), C(2), ...` using `C(n) = 1 + sum C(child)`, NOT the function’s arithmetic return value!',
          },
          {
            label: 'Step 3 — Look for Binary or Inversion Structure',
            detail: 'For `a // 2`, write `a` in binary (`15 = 1111_2`); for adjacent-swap passes (`GATE 2026 Q.58`), count pairs `(i < j)` with `A[i] > A[j]`.',
          },
        ],
        lockInTakeaway:
          'Build small-to-large tables for call counts (`C(0)->C(1)->...`), write `// 2` arguments in binary, and recognize adjacent-swap sorting as inversion counting.',
      },
      {
        id: 'm8-c2-p2',
        title: 'Two-Step Recurrence & Asymptotic Tie-Breaker',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.40', 'GATE DA 2026 · Q.15', 'GATE DA 2026 · Q.31'],
        problemStatement:
          'You must either solve a non-standard recurrence (e.g. `T(n) = 2T(n/2) + n/log n` or `T(n) = T(n-1) + 1/n`) or rank exotic growth functions like $n^{\\log \\log n}$, $2^{\\sqrt{n}}$, and $(\\log n)^{\\log n}$.',
        triggerCue:
          'Sub-logarithmic factors (`n / log n`), `n - 1` size reduction, or stacked exponents with `n` in both base and power.',
        bruteForceTrap:
          'Forcing Master Theorem onto `n - 1` recurrences or `n / log n`, or plugging in a single small test integer like `n = 8`.',
        mentalShift:
          'For recurrences, draw **3 levels of the recursion tree** and sum across levels; for asymptotic pairs, take **$\ln$ of both sides** and compare the resulting simpler functions.',
        steps: [
          {
            label: 'Step 1 — Check Master Theorem Applicability',
            detail: 'Verify form `a T(n/b) + f(n)` AND check whether $f(n)$ differs from $n^{\\log_b a}$ by a polynomial $n^\\epsilon$ (or $\\log^k n$ factor). If not, draw the tree!',
          },
          {
            label: 'Step 2 — Sum Level-by-Level Work',
            detail: 'Compute `(nodes at level i) * (work per node at level i)` and sum from $i = 0$ to tree height.',
          },
          {
            label: 'Step 3 — Log-Transform Power Comparisons',
            detail: 'Compare $\\ln f(n)$ and $\\ln g(n)$; if $\\ln f(n) - \\ln g(n) \\to +\\infty$, then $f(n) = \\omega(g(n))$ cleanly.',
          },
        ],
        lockInTakeaway:
          'Never guess on `n / log n` or `T(n-1)` — 3 levels of a recursion tree + $\\ln(f/g)$ settles every asymptotic battle.',
      },
    ],
    arsenalCards: [
      {
        id: 'm8-c2-a1',
        badge: 'Stack Calls vs Depth',
        whenYouSpot: 'Recursive function asking for "total activations / calls" vs "space / stack depth"',
        directWeaponLatex: 'C(n) = 1 + \\sum C(\\text{child}) = 2L - 1 \\text{ (full binary)}, \\qquad D(n) = 1 + \\max D(\\text{child})',
        instantRule: 'Total calls = tree size (time); peak stack depth = longest root-to-leaf path (space).',
        tenSecondExample: '`mystery(4)` with `n <= 0`: `C = [1, 3, 5, 9, 15]` $\\implies 15$ calls, depth $5$.',
        oneFatalTrap: 'Using `C(n) = C(n-1) + C(n-2)` without the `+ 1` for the current call frame!',
      },
      {
        id: 'm8-c2-a2',
        badge: 'Recurrence Toolkit',
        whenYouSpot: '$T(n) = aT(n/b) + f(n)$, $F(\\lfloor n/2 \\rfloor) + 1$, or $T(n-1) + f(n)$',
        directWeaponLatex: 'F_{\\text{bsearch}}(n) = \\lfloor \\log_2 n \\rfloor + 1, \\qquad T(n)=T(n-1)+n \\implies \\Theta(n^2)',
        instantRule: 'Compare $f(n)$ to $n^{\\log_b a}$; subtract-and-conquer with $a=1$ sums $f(k)$, with $a=2$ blows up to $\\Theta(2^n)$.',
        tenSecondExample: 'Absent target in $1000$ sorted keys: $\\lfloor \\log_2 1000 \\rfloor + 1 = 9 + 1 = 10$ comparisons.',
        oneFatalTrap: 'Applying Master Theorem to $T(n) = T(n-1) + 1$ or $T(n) = 2T(n/2) + n/\\log n$.',
      },
      {
        id: 'm8-c2-a3',
        badge: 'Asymptotic Log-Test',
        whenYouSpot: 'Comparing $a(n)^{b(n)}$ expressions or checking $O / \\Omega / \\Theta / o / \\omega$',
        directWeaponLatex: 'n^{\\log m} = m^{\\log n}, \\qquad \\lim_{n\\to\\infty}(\\ln f - \\ln g) = +\\infty \\implies f = \\omega(g)',
        instantRule: 'Constant multipliers inside exponents (`2^{2n} = 4^n`) change asymptotic class; outside multipliers (`2 \\cdot 2^n`) do not.',
        tenSecondExample: '`2^{n+1} = \\Theta(2^n)`, whereas `2^{2n} = 4^n = \\omega(2^n)`.',
        oneFatalTrap: 'Concluding $f = \\Theta(g)$ just because $\\ln f = \\Theta(\\ln g)$ (`n^2` vs `n^3` disproves this!).',
      },
    ],
    questions: [
      {
        id: 'm8-c2-q1',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.31',
        year: 2026,
        marks: 1,
        type: 'NAT',
        stem:
          'Consider recursive binary search on a sorted array of $n = 1000$ distinct integers, where each recursive invocation performs a single 3-way comparison between the target and the middle element (`mid`). What is the **maximum** number of 3-way comparisons performed when the target is **not** present in the array?',
        natAnswer: {
          min: 10,
          max: 10,
          exactDisplay: '10',
        },
        triggerHint: 'Use the worst-case binary search recurrence $F(n) = F(\\lfloor n/2 \\rfloor) + 1$ from GATE 2024 Q.40.',
        intuitiveSolution: [
          '1. Each 3-way comparison inspects `mid` and recurses on the larger subarray of size at most $\\lfloor n/2 \\rfloor$ (when $n$ is even, one half has $n/2$, the other $n/2 - 1$).',
          '2. Trace worst-case sizes: $1000 \\xrightarrow{1} 500 \\xrightarrow{2} 250 \\xrightarrow{3} 125 \\xrightarrow{4} 62 \\xrightarrow{5} 31 \\xrightarrow{6} 15 \\xrightarrow{7} 7 \\xrightarrow{8} 3 \\xrightarrow{9} 1 \\xrightarrow{10} 0$.',
          '3. Using the closed form $\\lfloor \\log_2(1000) \\rfloor + 1 = 9 + 1 = 10$ (since $2^9 = 512 \\le 1000 < 1024 = 2^{10}$).',
        ],
        directShortcutUsed: 'Worst-case 3-way binary search comparisons = $\\lfloor \\log_2 n \\rfloor + 1 = 10$.',
      },
      {
        id: 'm8-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.39',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem:
          'Consider the recursive Python function:\n```python\ndef mystery(n):\n    if n <= 0:\n        return 1\n    return mystery(n - 1) + mystery(n - 2)\n```\nHow many total runtime stack activations (including the initial call `mystery(4)`) occur during the execution of `mystery(4)`?',
        options: [
          {
            id: 'A',
            text: '`8`',
            whyTrueOrFalse: 'False — `8` is the number of base-case leaf calls (`n <= 0`), not total activations.',
          },
          {
            id: 'B',
            text: '`9`',
            whyTrueOrFalse: 'False — `9` would be the answer if the base case were `n <= 1` instead of `n <= 0`.',
          },
          {
            id: 'C',
            text: '`13`',
            whyTrueOrFalse: 'False — `1 + C(3) + C(2) = 1 + 9 + 5 = 15`.',
          },
          {
            id: 'D',
            text: '`15`',
            whyTrueOrFalse: 'True — building `C(n) = 1 + C(n-1) + C(n-2)` from `C(<=0) = 1` gives `C(1)=3`, `C(2)=5`, `C(3)=9`, `C(4)=15`.',
          },
        ],
        correctOptions: ['D'],
        triggerHint: 'Notice `n <= 0` (so `n = 1` still recurses!) and include `+ 1` for the parent call itself.',
        intuitiveSolution: [
          '1. Define $C(n)$ as total activations for `mystery(n)`. For $n \\le 0$, $C(n) = 1$.',
          '2. $C(1) = 1 + C(0) + C(-1) = 1 + 1 + 1 = 3$.',
          '3. $C(2) = 1 + C(1) + C(0) = 1 + 3 + 1 = 5$.',
          '4. $C(3) = 1 + C(2) + C(1) = 1 + 5 + 3 = 9$.',
          '5. $C(4) = 1 + C(3) + C(2) = 1 + 9 + 5 = 15$. (Peak simultaneous stack depth is $5$, total activations is $15$.)',
        ],
        directShortcutUsed: 'Bottom-up activation count $C(n) = 1 + C(n-1) + C(n-2)$ from `C(<=0) = 1`.',
      },
      {
        id: 'm8-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.63',
        year: 2025,
        marks: 2,
        type: 'NAT',
        stem:
          'What integer value is returned by calling `f(15, 10)` on the following Python function?\n```python\ndef f(a, b):\n    if a == 0:\n        return b\n    if a % 2 == 1:\n        return 2 * f((a - 1) // 2, b)\n    return f(a // 2, b)\n```',
        natAnswer: {
          min: 160,
          max: 160,
          exactDisplay: '160',
        },
        triggerHint: 'Write `15` in binary (`1111_2`) — every step halves `a` until `0`.',
        intuitiveSolution: [
          '1. `f(15, 10)`: `15` is odd $\\implies 2 \\cdot f(7, 10)$.',
          '2. `f(7, 10)`: `7` is odd $\\implies 2 \\cdot f(3, 10)$.',
          '3. `f(3, 10)`: `3` is odd $\\implies 2 \\cdot f(1, 10)$.',
          '4. `f(1, 10)`: `1` is odd $\\implies 2 \\cdot f(0, 10) = 2 \\cdot 10 = 20$.',
          '5. Unwinding: $2^4 \\times 10 = 160$ (in general, `f(a, b)` computes $2^{\\text{popcount}(a)} \\cdot b$).',
        ],
        directShortcutUsed: 'Binary bit-peeling: $15 = 1111_2$ has four `1` bits $\\implies 2^4 \\times 10 = 160$.',
      },
      {
        id: 'm8-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.15',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem:
          'When Randomized Quicksort runs on an array of $n$ distinct elements (picking a pivot uniformly at random at each step, leaving $k$ elements strictly smaller and $n - k - 1$ elements strictly larger), which recurrence models its **expected** running time $T(n)$?',
        options: [
          {
            id: 'A',
            text: '$T(n) = 2T(n/2) + \\Theta(n)$',
            whyTrueOrFalse: 'False — that models an always-balanced 50/50 split (like Mergesort), not uniform random pivot selection.',
          },
          {
            id: 'B',
            text: '$T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1}[T(k) + T(n-k-1)] + \\Theta(n)$',
            whyTrueOrFalse: 'True — each of the $n$ ranks $k \\in \\{0, \\dots, n-1\\}$ is chosen with equal probability $1/n$, after $\\Theta(n)$ partition work.',
          },
          {
            id: 'C',
            text: '$T(n) = \\sum_{k=0}^{n-1}[T(k) + T(n-k-1)] + \\Theta(n)$',
            whyTrueOrFalse: 'False — missing the $1/n$ expectation averaging factor.',
          },
          {
            id: 'D',
            text: '$T(n) = T(n-1) + \\Theta(n)$',
            whyTrueOrFalse: 'False — that is the *worst-case* (always min/max pivot) recurrence solving to $\\Theta(n^2)$.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Each of the $n$ possible pivot ranks $k = 0, 1, \\dots, n-1$ occurs with probability $1/n$.',
        intuitiveSolution: [
          '1. Partitioning an $n$-element subarray takes $\\Theta(n)$ comparisons.',
          '2. With uniform random pivot choice, the pivot lands at sorted rank $k \\in \\{0, \\dots, n-1\\}$ with probability $1/n$, producing subproblems of sizes $k$ and $n - k - 1$.',
          '3. By linearity of expectation, $T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1}[T(k) + T(n-k-1)] + \\Theta(n)$, which solves to $\\Theta(n \\log n)$.',
        ],
        directShortcutUsed: 'Uniform random rank $k \\in \\{0..n-1\\} \\implies \\frac{1}{n}\\sum_{k=0}^{n-1}[T(k)+T(n-k-1)] + \\Theta(n)$.',
      },
      {
        id: 'm8-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.58 (Recursive Swap Trace)',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem:
          'Consider the Python function below that recursively executes adjacent-swap passes on a list `A`:\n```python\ndef bubble_pass(A, i, n):\n    if i >= n - 1:\n        return 0\n    swaps = 0\n    if A[i] > A[i + 1]:\n        A[i], A[i + 1] = A[i + 1], A[i]\n        swaps = 1\n    return swaps + bubble_pass(A, i + 1, n)\n\ndef sort_count(A, n):\n    if n <= 1:\n        return 0\n    return bubble_pass(A, 0, n) + sort_count(A, n - 1)\n```\nWhat integer is returned by `sort_count([5, 3, 4, 1, 2], 5)`?',
        natAnswer: {
          min: 8,
          max: 8,
          exactDisplay: '8',
        },
        triggerHint: 'Each swap removes exactly 1 inversion! Count pairs $(i < j)$ with $A[i] > A[j]$ in `[5, 3, 4, 1, 2]`.',
        intuitiveSolution: [
          '1. `sort_count` implements recursive Bubble Sort, so it swaps adjacent out-of-order elements until sorted, returning the exact number of swaps = total **inversions** in `[5, 3, 4, 1, 2]`.',
          '2. Count inversions per element: `5` beats `(3, 4, 1, 2)` $\\to 4$; `3` beats `(1, 2)` $\\to 2$; `4` beats `(1, 2)` $\\to 2$; `1` and `2` beat $0$.',
          '3. Total swaps $= 4 + 2 + 2 = 8$. (Check by passes: Pass 1 does `4` swaps $\\to$ `[3, 4, 1, 2, 5]`; Pass 2 does `2` swaps $\\to$ `[3, 1, 2, 4, 5]`; Pass 3 does `2` swaps $\\to$ `[1, 2, 3, 4, 5]`; Passes 4–5 do `0` swaps; $4+2+2 = 8$.)',
        ],
        directShortcutUsed: 'Adjacent-swap sorting swaps = exact number of inversions in the initial array.',
      },
      {
        id: 'm8-c2-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber Tricky MSQ · Recurrences & Growth',
        marks: 2,
        type: 'MSQ',
        stem:
          'Which of the following asymptotic statements is/are **TRUE** for positive functions of $n$?',
        options: [
          {
            id: 'A',
            text: 'The recurrence $T(n) = 2T(n/2) + \\frac{n}{\\log_2 n}$ (with $T(2)=1$) solves to $T(n) = \\Theta(n \\log \\log n)$.',
            whyTrueOrFalse: 'True — summing $n / (\\log_2 n - i)$ across $i = 0, \\dots, \\log_2 n - 1$ levels yields $n \\cdot H_{\\log_2 n} = \\Theta(n \\log \\log n)$.',
          },
          {
            id: 'B',
            text: '$2^{n+1} = \\Theta(2^n)$ and $2^{2n} = O(2^n)$.',
            whyTrueOrFalse: 'False — $2^{n+1} = \\Theta(2^n)$ is true, but $2^{2n} = 4^n = \\omega(2^n)$, so $2^{2n} \\neq O(2^n)$.',
          },
          {
            id: 'C',
            text: '$(\\log_2 n)^{\\log_2 n} = \\omega(n^{10})$.',
            whyTrueOrFalse: 'True — taking $\\log_2$ gives $(\\log_2 n)\\log_2\\log_2 n$ vs $10\\log_2 n$; since $\\log_2\\log_2 n \\to \\infty$, the left side dominates any polynomial $n^c$.',
          },
          {
            id: 'D',
            text: 'On an $n \\times n$ upper triangular matrix, computing $U x$ requires $O(n^2)$ arithmetic operations.',
            whyTrueOrFalse: 'True — summing row work $\\sum_{i=1}^n i = \\frac{n(n+1)}{2} = \\Theta(n^2)$ (GATE DA 2025 Q.12).',
          },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Test Master Theorem gaps via recursion trees, check constant multipliers in exponents, and take $\\log_2$ for power comparisons.',
        intuitiveSolution: [
          '1. For A: level $i$ has $2^i$ nodes each doing $\\frac{n/2^i}{\\log_2(n/2^i)} = \\frac{n/2^i}{\\log_2 n - i}$ work, so level sum is $\\frac{n}{\\log_2 n - i}$. Summing over $i$ gives $n \\sum_{k=1}^{\\log_2 n} \\frac{1}{k} = \\Theta(n \\log \\log n)$.',
          '2. For B: $2^{2n}/2^n = 2^n \\to \\infty$, so B is false.',
          '3. For C: $\\log_2((\\log_2 n)^{\\log_2 n}) - \\log_2(n^{10}) = (\\log_2 n)(\\log_2\\log_2 n - 10) \\to +\\infty$, so C is true.',
          '4. For D: upper-triangular ops sum $1 + 2 + \\dots + n = O(n^2)$, so D is true.',
        ],
        directShortcutUsed: 'Recursion-tree Harmonic sum ($n \\log \\log n$) + log-difference test.',
      },
    ],
  },
  {
    id: 'pds1-ch3',
    number: 3,
    title: 'Stacks, Queues, Linked Lists, Heaps & Hash Tables with Open Addressing',
    shortTitle: 'Stacks, Heaps & Hashing',
    estimatedHours: 4.5,
    dayLabel: 'Week 4 · Day 3',
    tagline:
      'Let us master the workhorse data structures behind every fast algorithm! Together we will trace Stacks, Queues, and Deques without a single off-by-one slip, see why linked lists ruin $O(\\log n)$ binary search, turn flat arrays into Binary Min-Heaps, and walk through open-address linear probing like clockwork.',
    syllabusMapping: [
      'Data structures: stacks, queues, deques, linked lists, hash tables with open addressing',
      'Priority queues & binary heaps (insertion, extract-min, bottom-up heapify)',
    ],
    whatIsImportant: [
      'Stacks (LIFO), Queues (FIFO), Deques & Hash Table operation matching (GATE 2024 Q.16 & Q.32, GATE 2025 Q.64)',
      'Array random access $O(1)$ vs Linked List sequential access $O(n)$ (GATE 2025 Q.27 binary search trap)',
      'Open-address linear probing index traces & $\\frac{1}{1-\\alpha}$ probe bound (GATE 2024 Q.21, GATE 2025 Q.18)',
      'Binary Min-Heaps (Sleeping Giant for 2027: `parent=(i-1)//2`, $\\Theta(n)$ `build_heap`, $O(\\log n)$ push/pop)',
    ],
    whatIsNotImportant: [
      'Fibonacci heaps, binomial heaps, leftist trees, and van Emde Boas trees — 0 marks in GATE DA',
      'Cuckoo hashing, perfect hashing universal-family proofs, and lock-free concurrent queues',
    ],
    inboundStream: 'Module 8 Ch.1–2 Python Lists, Modular Indexing & $\\Theta(\\log n)$ / $\\Theta(n)$ Analysis.',
    outboundStream: [
      'Module 10 Graph Traversals: **FIFO Queue for BFS** & **LIFO Stack for DFS** (GATE 2024 Q.14, 2025 Q.65, 2026 Q.40)',
      'Module 10 **Dijkstra’s Shortest Path & $A^*$ Frontier Priority Queue** powered by a **Min-Heap** (GATE 2025 Q.44)',
      'Module 12 DBMS **Hash Indexing vs. $B^+$ Tree Range Indexing** (GATE 2024 Q.55)',
    ],
    glossary: [
      {
        term: 'Stack (LIFO)',
        symbol: '$\\texttt{push / pop}$',
        plainEnglish:
          'Picture a spring-loaded stack of cafeteria plates: the Last item In is always the First item Out (**LIFO**), supporting $O(1)$ `push` and `pop` at the top — and powering DFS and function call stacks.',
        tinyExample: 'Pushing `1, 2, 3` and popping twice returns `3` first, then `2`.',
      },
      {
        term: 'Queue (FIFO)',
        symbol: '$\\texttt{enqueue / dequeue}$',
        plainEnglish:
          'Just like a fair ticket line, the First item In is the First item Out (**FIFO**): new items enter at the rear and leave from the front in $O(1)$ time — powering Breadth-First Search (BFS).',
        tinyExample: 'Enqueuing `1, 2, 3` and dequeuing twice returns `1` first, then `2`.',
      },
      {
        term: 'Deque (Double-Ended Queue)',
        symbol: '$\\texttt{First / Last}$',
        plainEnglish:
          'A flexible hybrid of a stack and a queue that lets you insert or remove elements in $O(1)$ time from **both** the front (`First`) and the back (`Last`).',
        tinyExample: 'After `insertFirst(10), insertLast(17), insertFirst(5)`, the deque reads `[5, 10, 17]`.',
      },
      {
        term: 'Contiguous Array vs. Linked List',
        symbol: '$O(1) \\text{ vs. } O(n)\\text{ indexing}$',
        plainEnglish:
          'An array stores items side-by-side so you can jump directly to `A[mid]` in $O(1)$ arithmetic, whereas a linked list scatters nodes across memory linked by `next` pointers so reaching index $k$ takes $\\Theta(k)$ hops.',
        tinyExample: 'Binary search takes $O(\\log n)$ on a sorted array, but degrades to $\\Theta(n)$ on a sorted linked list.',
      },
      {
        term: 'Priority Queue & Binary Min-Heap',
        symbol: '$H[\\lfloor(i-1)/2\\rfloor] \\le H[i]$',
        plainEnglish:
          'A priority queue always serves the smallest (most urgent) key first; implemented as a Binary Min-Heap inside a plain 0-indexed array, every parent sits at `(i-1)//2` and is $\\le$ its children at `2i+1` and `2i+2`.',
        tinyExample: '`[2, 5, 4, 9, 8]` is a valid Min-Heap with minimum `2` right at `H[0]`.',
      },
      {
        term: 'Sift-Up & Sift-Down (Heapify)',
        symbol: '$O(\\log n)$',
        plainEnglish:
          'When you `insert` a new key at the end, sift-up bubbles it upward past larger parents; when you `extract_min`, you move the last element to the root and sift-down swaps it downward with its smaller child.',
        tinyExample: 'Extracting `2` from `[2, 5, 4, 9, 8]` places `8` at root and sifts down past `4` to `[4, 5, 8, 9]`.',
      },
      {
        term: 'Bottom-Up Build-Heap',
        symbol: '$T_{\\text{build}}(n) = \\Theta(n)$',
        plainEnglish:
          'Instead of inserting $n$ elements one by one ($O(n \\log n)$), calling sift-down backward from the last internal node `n//2 - 1` down to `0` builds a valid heap in linear $\\Theta(n)$ time because most nodes sit near the leaves!',
        tinyExample: 'Python’s `heapq.heapify(lst)` turns any $n$-item list into a Min-Heap in $\\Theta(n)$ time.',
      },
      {
        term: 'Hash Function & Collision',
        symbol: '$h(k) \\bmod m$',
        plainEnglish:
          'A hash function maps a key directly to an array slot `0..m-1` for $O(1)$ expected lookup; a **collision** occurs whenever two distinct keys hash to the exact same home slot.',
        tinyExample: 'With $h(x) = 3x \\bmod 10$, both `4` ($12 \\bmod 10 = 2$) and `14` ($42 \\bmod 10 = 2$) collide at slot `2`.',
      },
      {
        term: 'Load Factor',
        symbol: '$\\alpha = n / m$',
        plainEnglish:
          'The fullness ratio of a hash table holding $n$ keys across $m$ slots; in open addressing, every key sits inside the table itself so $0 \\le \\alpha \\le 1$ ALWAYS, whereas chaining permits $\\alpha > 1$.',
        tinyExample: 'Storing $8$ keys in a $10$-slot table gives $\\alpha = 0.8$ and insert bound $\\frac{1}{1-0.8} = 5$ probes.',
      },
      {
        term: 'Open Addressing & Linear Probing',
        symbol: '$h(k, i) = (h_1(k) + i) \\bmod m$',
        plainEnglish:
          'In open addressing, every colliding key stays inside the main array by stepping along a probe sequence until an open slot appears; linear probing simply walks $+1$ slot at a time (wrapping around `m`).',
        tinyExample: 'If slot `2` and `3` are occupied, linear probing parks `14` at slot `4`.',
      },
      {
        term: 'Primary Clustering & Tombstone (`DELETED`)',
        symbol: '$E[\\text{insert}] \\le \\frac{1}{1 - \\alpha}$',
        plainEnglish:
          'Linear probing causes occupied slots to clump into long blocks (**primary clustering**), and deleting a key must leave a `DELETED` tombstone instead of `EMPTY` so searches do not stop early and miss keys parked further down.',
        tinyExample: 'Deleting slot `3` without a tombstone would break searching for `14` parked at `2 -> 3 -> 4`.',
      },
      {
        term: 'Quadratic Probing & Double Hashing',
        symbol: '$(h_1(k) + i\\,h_2(k)) \\bmod m$',
        plainEnglish:
          'Quadratic probing jumps by $i^2$ to break up primary clusters (though creating secondary clusters), while double hashing uses a second hash step $h_2(k)$ with $\\gcd(h_2(k), m) = 1$ to spread probes across all $m$ slots.',
        tinyExample: 'If $m = 10$ and $h_2(k) = 4$, $\\gcd(4, 10) = 2 > 1$, so probing misses half the table!',
      },
    ],
    generatorId: 'linear-probe-gen',
    concepts: [
      {
        id: 'm8-c3-1',
        title: 'Stacks (LIFO), Queues (FIFO), Deques & Linked Lists vs. Arrays',
        subtitle: 'Why an array jumps to `A[mid]` in 1 step while a linked list crawls in $O(n)$',
        priority: 'core-pillar',
        buildsOn: 'Asymptotic complexity ($O(1)$ vs $O(\log n)$ vs $O(n)$) from Ch.2',
        toyExample: {
          title: 'Tracing a Double-Ended Queue (Deque) & a Scavenger-Hunt List',
          scenario:
            'Start with an empty deque `D = []` and run 7 commands: `insertFirst(10)`, `insertLast(17)`, `insertFirst(5)`, `insertLast(22)`, `removeFirst()`, `removeLast()`, `a = removeLast()`. Meanwhile, ask: how long does it take to read the 500th item in an array vs a singly linked list?',
          walkthroughSteps: [
            '1. **Deque Trace:** `insertFirst(10)` $\\to$ `[10]` $\\to$ `insertLast(17)` $\\to$ `[10, 17]` $\\to$ `insertFirst(5)` $\\to$ `[5, 10, 17]` $\\to$ `insertLast(22)` $\\to$ `[5, 10, 17, 22]`.',
            '2. **Removals:** `removeFirst()` drops `5` $\\to$ `[10, 17, 22]`; `removeLast()` drops `22` $\\to$ `[10, 17]`; `a = removeLast()` pops `17` (`a = 17`), mirroring **GATE DA 2024 Q.32**!',
            '3. **Array vs Linked List Access:** An array computes `base_addr + 499 * item_size` in **$O(1)$** arithmetic. A linked list holds scattered nodes — reaching item 500 requires chasing `499` `next` pointers (**$O(n)$**)!',
          ],
          ahaMoment:
            'Here is the crystal-clear reason binary search demands an array: it needs **$O(1)$ random access** to jump straight to `mid`. Because walking pointers to the middle of a sorted linked list takes $\\Theta(n)$ hops, binary search collapses to $\\Theta(n)$ — the exact 1-option MSQ trap in **GATE DA 2025 Q.27**!',
        },
        theoremAndFormula: {
          statement:
            '- **Stack (LIFO):** `push` & `pop` at top in $O(1)$.\n- **Queue (FIFO):** `enqueue` at rear, `dequeue` at front in $O(1)$ using circular buffer index wrap `(idx + 1) % N`.\n- **Deque:** $O(1)$ insert/remove at both ends (`front = (front - 1 + N) % N`).\n- **Linked List:** $O(1)$ insert/delete *given a pointer to predecessor*, $O(n)$ index lookup.',
          formulaLatex:
            'T_{\\text{bsearch}}(\\text{Array}) = \\mathcal{O}(\\log n), \\qquad T_{\\text{bsearch}}(\\text{Linked List}) = T\\!\\left(\\frac{n}{2}\\right) + \\Theta(n) = \\Theta(n)',
          plainEnglishDecoding:
            'Think of why a sorted linked list cannot rescue binary search: even though the remaining list shrinks by half each round, walking from the head to the midpoint costs $n/2 + n/4 + n/8 + \\dots = \\Theta(n)$ pointer hops!',
          workedMiniExamples: [
            {
              prompt: 'Push `0, 1, 2, 3, 4` onto stack `S`. Pop `x`; if `x` is odd, perform one extra `Pop(S)` (discarded). Sum all non-discarded `x`.',
              solution:
                'Stack top-to-bottom: `[4, 3, 2, 1, 0]`. Pop `4` (even, sum=4). Pop `3` (odd, sum=7; extra pop discards `2`). Pop `1` (odd, sum=8; extra pop discards `0`). Total = `8` (same pattern as GATE DA 2025 Q.64!).',
            },
            {
              prompt: 'How many distinct stack-sortable permutations exist for input `1, 2, 3` pushed in order?',
              solution:
                'Catalan number $C_3 = \\frac{1}{3+1}\\binom{6}{3} = 5$ (all 6 permutations except `3, 1, 2`, which requires popping `3` then `1` below `2` — impossible!).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Binary search always runs in $O(\log n)$ worst-case time whenever the input is sorted.',
            reality: 'It requires **both** sorted order AND **$O(1)$ random access** (array). On a sorted singly/doubly linked list, binary search takes $\\Theta(n)$ time (GATE 2025 Q.27)!',
            counterExample: 'Sorted linked list $1 \\to 2 \\to \\dots \\to n$: finding the middle node takes $\\Theta(n/2)$ hops on the very first step.',
          },
          {
            myth: 'Any permutation of $1, 2, \\dots, n$ can be generated by pushing `1..n` onto a single stack and popping.',
            reality: 'Impossible whenever three elements appear in `3-1-2` relative pop order (`large` popped first, then `small`, then `medium`).',
            counterExample: '`3, 1, 2` cannot be produced from pushing `1, 2, 3`: to pop `3` first, `1` and `2` must both already be on the stack with `2` above `1`, so `2` must pop before `1`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA & Sec 7: AI',
            targetWeek: 5,
            topic: 'BFS FIFO Queue vs. DFS LIFO Stack',
            whyItMatters:
              'BFS explores level-by-level using a **FIFO Queue**, while DFS dives deep using a **LIFO Stack** (explicit or call stack) — directly underpinning GATE 2024 Q.16/Q.44 and GATE 2025 Q.65.',
            pyqProof: 'GATE DA 2024 Q.16 & Q.44',
          },
        ],
      },
      {
        id: 'm8-c3-2',
        title: 'Binary Heaps & Priority Queues (Heapify, Push & Extract-Min)',
        subtitle: 'A Sleeping Giant for 2027: array tree indexing, $O(\\log n)$ sift-up/down, and $\\Theta(n)$ bottom-up build',
        priority: 'sleeping-giant',
        buildsOn: 'Complete binary tree indexing and geometric series',
        toyExample: {
          title: 'Hospital ER Priority Desk as a Flat Array',
          scenario:
            'Keep patients’ urgency scores in a **Min-Heap** array `H = [2, 5, 4, 9, 8]` (0-indexed). Notice `H[0] = 2` has children `H[1] = 5` and `H[2] = 4`; `H[1] = 5` has children `H[3] = 9` and `H[4] = 8`. Every parent $\\le$ its children!',
          walkthroughSteps: [
            '1. **`extract_min()`:** Remove root `2`, move the *last* element `8` to `H[0]` $\\to$ `[8, 5, 4, 9]`.',
            '2. **Sift-Down:** Compare `8` with its smaller child (`min(5, 4) = 4` at index 2). Since `8 > 4`, swap them $\\to$ `[4, 5, 8, 9]`. Now `8` has no children $\\implies$ valid Min-Heap restored!',
            '3. **`insert(3)`:** Append `3` at end `[4, 5, 8, 9, 3]` (index 4). Compare with parent at `(4-1)//2 = 1` (`5`): `3 < 5`, swap $\\to$ `[4, 3, 8, 9, 5]`. Compare with root `4`: `3 < 4`, swap $\\to$ `[3, 4, 8, 9, 5]`!',
          ],
          ahaMoment:
            'Look how clean that layout is: you never need a single `left` or `right` pointer object for a binary heap — **an ordinary flat Python list IS the complete binary tree**, with `parent(i) = (i-1)//2`!',
        },
        theoremAndFormula: {
          statement:
            'In a 0-indexed binary Min-Heap of size $n$, every node $i$ satisfies $H[\\lfloor (i-1)/2 \\rfloor] \\le H[i]$:\n- `insert` (sift-up) & `extract_min` / `decrease_key`: $O(\\log n)$ worst-case.\n- `peek_min`: $O(1)$ (`H[0]`).\n- Bottom-up `build_heap` (sift-down from $i = \\lfloor n/2 \\rfloor - 1$ down to $0$): $\\Theta(n)$ linear time!',
          formulaLatex:
            '\\text{parent}(i) = \\left\\lfloor \\frac{i-1}{2} \\right\\rfloor, \\quad \\text{left}(i) = 2i+1, \\quad \\text{right}(i) = 2i+2, \\qquad T_{\\text{build}}(n) = \\sum_{h=0}^{\\lfloor\\log_2 n\\rfloor} \\left\\lceil \\frac{n}{2^{h+1}} \\right\\rceil \\mathcal{O}(h) = \\Theta(n)',
          plainEnglishDecoding:
            'Here is the intuition everyone remembers once they hear it: why is bottom-up `build_heap` linear $\\Theta(n)$ rather than $O(n \\log n)$? Because half the nodes are leaves (height $0$, zero work), a quarter can sift down at most $1$ step, an eighth at most $2$ steps, and that gentle geometric series $\\sum_{h \\ge 1} h / 2^h$ adds up to just $2$!',
          workedMiniExamples: [
            {
              prompt: 'Convert array `[10, 7, 15, 3, 2]` into a Min-Heap via bottom-up `build_heap`.',
              solution:
                'Last internal node is `(5//2) - 1 = 1` (`7`). Sift-down `1` (`7` swaps with min child `2` at idx 4) $\\to$ `[10, 2, 15, 3, 7]`. Next, sift-down `0` (`10` swaps with min child `2` at idx 1, then swaps with `3` at idx 3) $\\to$ `[2, 3, 15, 10, 7]`.',
            },
            {
              prompt: 'Where can the **maximum** element sit in an $n$-element Min-Heap, and how fast can you find it?',
              solution:
                'Any parent is smaller than its children, so the maximum cannot have any children — it must sit at one of the $\\lceil n/2 \\rceil$ **leaves** (`H[n//2 : n]`). Scanning those leaves takes $\\Theta(n)$ time!',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Building a binary heap from $n$ unsorted elements always takes $\\Theta(n \\log n)$ time.',
            reality: 'Inserting $n$ items one-by-one into an empty heap takes $O(n \\log n)$, but **bottom-up `heapify` runs in $\\Theta(n)$**!',
            counterExample: 'Python’s `heapq.heapify(lst)` converts an $n$-element list in $\\Theta(n)$ time.',
          },
          {
            myth: 'In a Min-Heap of $n$ distinct elements, finding the largest element takes $O(\\log n)$.',
            reality: 'Because siblings are unordered relative to each other, the max can be **any** of the $\\lceil n/2 \\rceil$ leaves, forcing $\\Theta(n)$ comparisons.',
            counterExample: 'Array `[1, 2, 3, 4, 5, 6, 7]` and `[1, 5, 2, 7, 6, 3, 4]` are both valid Min-Heaps with max `7` at different leaves.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA & Sec 7: AI',
            targetWeek: 5,
            topic: 'Dijkstra’s Shortest Path & $A^*$ Priority Queue',
            whyItMatters:
              '**Dijkstra’s algorithm** (`extract-min` + `decrease-key`) and **$A^*$ search** (GATE 2025 Q.44) depend directly on a Min-Heap frontier to run in $O((|V|+|E|)\\log |V|)$ instead of $O(|V|^2)$.',
            pyqProof: 'GATE DA 2025 Q.44 (A* Frontier)',
          },
        ],
      },
      {
        id: 'm8-c3-3',
        title: 'Hash Tables, Load Factor & Open Addressing (Linear/Quadratic/Double)',
        subtitle: 'Parking keys into a fixed array, tombstones on delete, and the $\\frac{1}{1-\\alpha}$ probe wall',
        priority: 'high-yield',
        buildsOn: 'Modular arithmetic and array indexing',
        toyExample: {
          title: 'Parking 6 Cars in a 10-Slot Lot (`GATE DA 2025 · Q.18`)',
          scenario:
            'Insert keys `1, 4, 5, 6, 14, 15` in order into a 10-slot hash table (`0..9`) using hash function $h(x) = 3x \\bmod 10$ and **linear probing** (step $+1 \\bmod 10$ on collision). Where do `14` and `15` land?',
          walkthroughSteps: [
            '1. **First 4 keys (zero collisions):** `1` $\\to 3(1)\\bmod 10 = 3$; `4` $\\to 12\\bmod 10 = 2$; `5` $\\to 15\\bmod 10 = 5$; `6` $\\to 18\\bmod 10 = 8$. Table has `{2:4, 3:1, 5:5, 8:6}`.',
            '2. **Insert `14`:** $h(14) = 42 \\bmod 10 = 2$ (taken by `4`!) $\\to$ probe `3` (taken by `1`!) $\\to$ probe `4` (**empty!**). `14` parks at index **`4`**.',
            '3. **Insert `15`:** $h(15) = 45 \\bmod 10 = 5$ (taken by `5`!) $\\to$ probe `6` (**empty!**). `15` parks at index **`6`**.',
          ],
          ahaMoment:
            'Picture a crowded parking lot as $\\alpha = n/m \\to 1$: cars clump into long contiguous blocks (**primary clustering**), making every new driver cruise past more taken spots and pushing expected probes up like $\\frac{1}{1-\\alpha}$!',
        },
        theoremAndFormula: {
          statement:
            'For an open-addressed hash table of $m$ slots storing $n$ keys with load factor $\\alpha = n/m < 1$, under the **uniform hashing assumption**, expected probe counts satisfy:',
          formulaLatex:
            'E[\\text{probes}_{\\text{unsuccessful / insert}}] \\le \\frac{1}{1 - \\alpha}, \\qquad E[\\text{probes}_{\\text{successful}}] \\le \\frac{1}{\\alpha}\\ln\\frac{1}{1 - \\alpha}',
          plainEnglishDecoding:
            'Remember that **GATE DA 2024 Q.21** tested the $\\frac{1}{1-\\alpha}$ insert bound directly! Keep the three open-address probing recipes side-by-side for $i = 0, 1, \\dots, m-1$:\n- **Linear:** $(h_1(k) + i) \\bmod m$ (simple, suffers from primary clustering)\n- **Quadratic:** $(h_1(k) + c_1 i + c_2 i^2) \\bmod m$ (breaks primary clusters, still has secondary clustering)\n- **Double Hashing:** $(h_1(k) + i \\cdot h_2(k)) \\bmod m$ (best spread, as long as $\\gcd(h_2(k), m) = 1$ and $h_2(k) \\not\\equiv 0$).',
          workedMiniExamples: [
            {
              prompt: 'At $\\alpha = 0.75$ vs $\\alpha = 0.90$, what is the uniform-hashing upper bound on expected insert probes?',
              solution:
                'At $\\alpha = 0.75$: $\\frac{1}{1 - 0.75} = 4$ probes. At $\\alpha = 0.90$: $\\frac{1}{1 - 0.90} = 10$ probes!',
            },
            {
              prompt: 'Why must deletion in linear probing leave a `DELETED` tombstone instead of marking the slot `EMPTY`?',
              solution:
                'If slot 3 held `1` when `14` probed `2 -> 3 -> 4`, deleting `1` and setting slot 3 to `EMPTY` would make a search for `14` stop early at slot 3 and falsely report `14` absent! Marking slot 3 `DELETED` lets searches continue past it while allowing new insertions to reuse slot 3.',
            },
          ],
        },
        sandboxId: 'hash-table-lab',
        msqTraps: [
          {
            myth: 'Open addressing allows load factor $\\alpha > 1$, just like separate chaining.',
            reality: 'In open addressing every key sits inside the $m$-slot array, so $n \\le m$ and **$0 \\le \\alpha \\le 1$ ALWAYS**! Only separate chaining (linked lists per bucket) allows $\\alpha > 1$.',
            counterExample: 'A 10-slot linear-probing table cannot hold 11 keys without resizing/rehashing.',
          },
          {
            myth: 'In double hashing, any secondary function $h_2(k)$ guarantees visiting all $m$ slots.',
            reality: 'If $\\gcd(h_2(k), m) = d > 1$ (or $h_2(k) = 0$), the probe sequence cycles through only $m/d$ slots and can fail to find an empty slot!',
            counterExample: 'For $m = 10$ and $h_2(k) = 4$, probing from index `2` visits only `{2, 6, 0, 4, 8}` — never touching odd slots!',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5: DBMS & DW',
            targetWeek: 6,
            topic: 'Hash Indexes vs. $B^+$ Tree Indexes',
            whyItMatters:
              'Hash indexes answer exact equality predicates (`Genre.Name = "Comedy"`) in $O(1)$ expected time, but **cannot handle range predicates (`Rating > 3.4`)** where ordered $B^+$ trees shine (GATE DA 2024 Q.55).',
            pyqProof: 'GATE DA 2024 Q.55',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm8-c3-p1',
        title: 'Clean State-Box Tracing for Deques & Conditional Stack Loops',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 · Q.32', 'GATE DA 2025 · Q.64'],
        problemStatement:
          'You are given a 6–10 step sequence of `insertFirst`/`insertLast`/`removeFirst`/`removeLast` on a Deque, OR a `while` loop popping from a stack with conditional extra pops (like "if `x` is odd, pop again").',
        triggerCue:
          'Mixed front/back Deque calls or nested `Pop(S)` inside `if` branches inside a `while not isEmpty(S)` loop.',
        bruteForceTrap:
          'Tracking only the final output in your head or confusing which end is `First` (left/bottom) vs `Last` (right/top).',
        mentalShift:
          'Always draw an explicit bracket `[front ... back]` (for Deque) or `bottom [ ... ] top` (for Stack) after **every single line**, and annotate discarded pops visibly with a strikethrough.',
        steps: [
          {
            label: 'Step 1 — Lock Orientation Once',
            detail: 'Fix `left = First`, `right = Last` for Deques; `right = Top` for Stacks. Never flip conventions midway.',
          },
          {
            label: 'Step 2 — Check Guarded Nested Pops',
            detail: 'When a loop does `x = Pop(S)` and then an inner `if` calls `Pop(S)` again, verify whether `S` can become empty before the inner `Pop(S)` and whether the inner pop is added to `sum` or discarded.',
          },
          {
            label: 'Step 3 — Cross-Check Remaining Elements',
            detail: 'Count total pushes vs total pops (main + extra) — they must balance to zero if the loop runs until empty.',
          },
        ],
        lockInTakeaway:
          'Write the bracket state after every operation and count pushes = main pops + extra pops.',
      },
      {
        id: 'm8-c3-p2',
        title: 'Zero-Error Linear Probing & Open-Address Formula Selection',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 · Q.21', 'GATE DA 2025 · Q.18'],
        problemStatement:
          'Insert 5–8 keys sequentially into a size-$m$ hash table using $h(x) \\bmod m$ and linear/quadratic/double probing, OR choose the expected probe complexity as a function of load factor $\\alpha$.',
        triggerCue:
          'Modulo hash formula like $3x \\bmod 10$ with sequential key list, OR "open addressing" + "load factor $\\alpha$" + "expected number of probes".',
        bruteForceTrap:
          'Forgetting wrap-around `(slot + 1) % m`, colliding keys against an outdated mental table, or mixing up open addressing ($\\frac{1}{1-\\alpha}$) with chaining ($1 + \\alpha$).',
        mentalShift:
          'Draw a numbered 1-row grid `0 | 1 | ... | m-1` on scratch paper and cross off each slot as you insert; for $\\alpha$ questions, match the keyword **open addressing** $\\to \\frac{1}{1-\\alpha}$ vs **chaining** $\\to 1 + \\alpha$.',
        steps: [
          {
            label: 'Step 1 — Precompute Raw Hashes',
            detail: 'Write `h(x)` beside every key before touching the grid so arithmetic errors don’t cascade.',
          },
          {
            label: 'Step 2 — Probe With Wrap-Around',
            detail: 'Walk `(h(x) + i) % m` for `i = 0, 1, 2, ...` until hitting the first empty slot (or tombstone during insertion).',
          },
          {
            label: 'Step 3 — Match Probe-Bound Case',
            detail: 'Insertion / unsuccessful search in open addressing $\\le \\frac{1}{1-\\alpha}$; successful search $\\le \\frac{1}{\\alpha}\\ln\\frac{1}{1-\\alpha}$.',
          },
        ],
        lockInTakeaway:
          'Draw the `0..m-1` slot strip once, precompute `h(x)`, and never confuse chaining ($1+\\alpha$) with open addressing ($\\frac{1}{1-\\alpha}$).',
      },
    ],
    arsenalCards: [
      {
        id: 'm8-c3-a1',
        badge: 'Open Addressing',
        whenYouSpot: 'Hash table with open addressing, load factor $\\alpha = n/m$, or `DELETE` operation',
        directWeaponLatex: 'E[\\text{insert/miss}] \\le \\frac{1}{1-\\alpha}, \\qquad E[\\text{hit}] \\le \\frac{1}{\\alpha}\\ln\\frac{1}{1-\\alpha}',
        instantRule: 'Open addressing requires $\\alpha \\le 1$ and `TOMBSTONE` markers on delete; double hashing needs $\\gcd(h_2(k), m) = 1$.',
        tenSecondExample: 'Load factor $\\alpha = 0.8 \\implies$ insert bound $\\frac{1}{1-0.8} = 5$ probes (GATE 2024 Q.21).',
        oneFatalTrap: 'Setting deleted slots to `EMPTY` instead of `TOMBSTONE` — breaks searches for keys that probed past that slot!',
      },
      {
        id: 'm8-c3-a2',
        badge: 'Binary Min-Heap',
        whenYouSpot: '0-indexed heap array, `build-heap` (`heapify`), `extract-min`, or finding max in min-heap',
        directWeaponLatex: '\\text{parent}=\\lfloor(i-1)/2\\rfloor, \\quad T_{\\text{build}}=\\Theta(n), \\quad T_{\\text{push/pop}}=\\mathcal{O}(\\log n)',
        instantRule: 'Bottom-up `heapify` is linear $\\Theta(n)$; `insert` and `extract-min` take $O(\\log n)$; `find-max` in a min-heap takes $\\Theta(n)$.',
        tenSecondExample: 'In `[2, 5, 4, 9, 8]`, `extract_min()` moves `8` to root and sifts down via `4` $\\to$ `[4, 5, 8, 9]`.',
        oneFatalTrap: 'Saying `build_heap` takes $\\Theta(n \\log n)$ — only $n$ sequential `insert`s take $O(n \\log n)$; bottom-up `heapify` is $\\Theta(n)$!',
      },
      {
        id: 'm8-c3-a3',
        badge: 'Linear Structures',
        whenYouSpot: 'Binary search on linked list vs array, Stack/Queue/Hash matching, or Deque trace',
        directWeaponLatex: 'T_{\\text{bsearch}}(\\text{Array}) = \\mathcal{O}(\\log n), \\qquad T_{\\text{bsearch}}(\\text{Linked List}) = \\Theta(n)',
        instantRule: 'Queue = FIFO (BFS); Stack = LIFO (DFS); Hash Table = $O(1)$ expected lookup; Linked List lacks $O(1)$ random access.',
        tenSecondExample: 'Stack push `0..8` with odd double-pop sums `8+7+5+3+1 = 24` (GATE 2025 Q.64).',
        oneFatalTrap: 'Claiming binary search runs in $O(\\log n)$ on a sorted singly/doubly linked list (GATE 2025 Q.27).',
      },
    ],
    questions: [
      {
        id: 'm8-c3-q1',
        tier: 'warmup',
        sourceLabel: 'GATE DA 2024 · Q.16 & 2025 · Q.27 Foundation Check',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem:
          'Match the data structures in Column I with their defining characteristic/best-suited role in Column II:\n- **P:** Queue — **(1)** Last-In-First-Out (LIFO)\n- **Q:** Stack — **(2)** Average $O(1)$ key lookup\n- **R:** Hash Table — **(3)** First-In-First-Out (FIFO)',
        options: [
          {
            id: 'A',
            text: 'P–3, Q–1, R–2',
            whyTrueOrFalse: 'True — Queue is FIFO (3), Stack is LIFO (1), and Hash Table provides average $O(1)$ lookup (2).',
          },
          {
            id: 'B',
            text: 'P–1, Q–3, R–2',
            whyTrueOrFalse: 'False — swaps Queue (FIFO) and Stack (LIFO).',
          },
          {
            id: 'C',
            text: 'P–3, Q–2, R–1',
            whyTrueOrFalse: 'False — Stack is LIFO, not $O(1)$ key lookup.',
          },
          {
            id: 'D',
            text: 'P–2, Q–1, R–3',
            whyTrueOrFalse: 'False — Queue is FIFO, not $O(1)$ key lookup.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Recall GATE DA 2024 Q.16: Queue = FIFO, Stack = LIFO, Hash Table = Lookup.',
        intuitiveSolution: [
          '1. Queue serves elements in arrival order: **FIFO** (P $\\to$ 3).',
          '2. Stack serves the most recently pushed element first: **LIFO** (Q $\\to$ 1).',
          '3. Hash Table maps keys directly to slots for **Lookup** (R $\\to$ 2).',
        ],
        directShortcutUsed: 'Queue = FIFO, Stack = LIFO, Hash Table = Lookup.',
      },
      {
        id: 'm8-c3-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.18',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem:
          'Keys `1, 4, 5, 6, 14, 15` are inserted in that exact order into an initially empty hash table of size $10$ (indices `0` to `9`) using hash function $h(x) = (3x) \\bmod 10$ and **linear probing** for collision resolution. What are the final indices of keys `14` and `15`, respectively?',
        options: [
          {
            id: 'A',
            text: '`2` and `5`',
            whyTrueOrFalse: 'False — indices `2` and `5` are already occupied by `4` and `5`.',
          },
          {
            id: 'B',
            text: '`3` and `6`',
            whyTrueOrFalse: 'False — index `3` is already occupied by `1`, so `14` probes to `4`.',
          },
          {
            id: 'C',
            text: '`4` and `5`',
            whyTrueOrFalse: 'False — index `5` is occupied by `5`, so `15` probes to `6`.',
          },
          {
            id: 'D',
            text: '`4` and `6`',
            whyTrueOrFalse: 'True — `14` hashes to `2` (hits `4`, `1`) and lands at `4`; `15` hashes to `5` (hits `5`) and lands at `6`.',
          },
        ],
        correctOptions: ['D'],
        triggerHint: 'Insert one key at a time into the 10-slot array and probe $+1 \\bmod 10$ on every collision.',
        intuitiveSolution: [
          '1. `1`: $3(1) \\bmod 10 = 3 \\implies$ slot `3`.',
          '2. `4`: $3(4) \\bmod 10 = 2 \\implies$ slot `2`.',
          '3. `5`: $3(5) \\bmod 10 = 5 \\implies$ slot `5`.',
          '4. `6`: $3(6) \\bmod 10 = 8 \\implies$ slot `8`.',
          '5. `14`: $3(14) \\bmod 10 = 2$ (occupied by `4`) $\\to 3$ (occupied by `1`) $\\to 4$ (free) $\\implies$ slot **`4`**.',
          '6. `15`: $3(15) \\bmod 10 = 5$ (occupied by `5`) $\\to 6$ (free) $\\implies$ slot **`6`**.',
        ],
        directShortcutUsed: 'Sequential slot-strip trace: `2->3->4` for `14` and `5->6` for `15`.',
      },
      {
        id: 'm8-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.21',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem:
          'Consider an open-addressing hash table with load factor $\\alpha = n / m < 1$. Under the uniform hashing assumption, what is the tight standard upper bound on the expected number of probes required to **insert** a new element?',
        options: [
          {
            id: 'A',
            text: '$\\frac{1}{\\alpha}$',
            whyTrueOrFalse: 'False — at small $\\alpha$ (mostly empty table), inserting takes $\\approx 1$ probe, whereas $1/\\alpha \\to \\infty$.',
          },
          {
            id: 'B',
            text: '$\\frac{1}{1 - \\alpha}$',
            whyTrueOrFalse: 'True — probability of hitting an empty slot on each probe is at least $1 - \\alpha$, giving geometric expected probes $\\le \\frac{1}{1 - \\alpha}$.',
          },
          {
            id: 'C',
            text: '$1 + \\alpha$',
            whyTrueOrFalse: 'False — $1 + \\alpha$ is for **separate chaining** unsuccessful search, not open addressing.',
          },
          {
            id: 'D',
            text: '$\\frac{1}{\\alpha}\\ln\\frac{1}{1 - \\alpha}$',
            whyTrueOrFalse: 'False — that is the upper bound for a **successful** search, not an insertion (which mirrors an unsuccessful search).',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Test the boundary $\\alpha \\to 0$ (empty table $\\implies 1$ probe) and $\\alpha \\to 1$ (full table $\\implies \\infty$ probes).',
        intuitiveSolution: [
          '1. Inserting a new key probes until it finds an empty slot, identical to an unsuccessful search.',
          '2. At load factor $\\alpha$, at least $1 - \\alpha$ fraction of slots are empty; under uniform hashing, each successive probe hits an occupied slot with probability $\\le \\alpha$.',
          '3. Thus expected probes $\\le 1 + \\alpha + \\alpha^2 + \\dots = \\frac{1}{1 - \\alpha}$.',
        ],
        directShortcutUsed: 'Geometric series $1 + \\alpha + \\alpha^2 + \\dots = \\frac{1}{1-\\alpha}$ (and boundary check at $\\alpha \\to 0, 1$).',
      },
      {
        id: 'm8-c3-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.64',
        year: 2025,
        marks: 2,
        type: 'NAT',
        stem:
          'Consider an initially empty stack `S`. First, integers `0, 1, 2, 3, 4, 5, 6, 7, 8` are pushed onto `S` in that order (`0` first, `8` last). Next, the following procedure runs:\n```text\nsum = 0\nwhile S is not empty:\n    x = Pop(S)\n    sum = sum + x\n    if x is odd and S is not empty:\n        Pop(S)   // discarded\n```\nWhat is the final value of `sum`?',
        natAnswer: {
          min: 24,
          max: 24,
          exactDisplay: '24',
        },
        triggerHint: 'Trace from top (`8`) downward; every odd pop silently eats the even number directly below it!',
        intuitiveSolution: [
          '1. After pushing `0..8`, stack top-to-bottom is `[8, 7, 6, 5, 4, 3, 2, 1, 0]`.',
          '2. Pop `8` (even): `sum = 8` (no extra pop).',
          '3. Pop `7` (odd): `sum = 8 + 7 = 15`; extra `Pop(S)` discards `6`.',
          '4. Pop `5` (odd): `sum = 15 + 5 = 20`; extra `Pop(S)` discards `4`.',
          '5. Pop `3` (odd): `sum = 20 + 3 = 23`; extra `Pop(S)` discards `2`.',
          '6. Pop `1` (odd): `sum = 23 + 1 = 24`; extra `Pop(S)` discards `0`. Stack is now empty, final `sum = 24`.',
        ],
        directShortcutUsed: 'Top `8` is even, then every odd (`7, 5, 3, 1`) skips the even below it: `8+7+5+3+1 = 24`.',
      },
      {
        id: 'm8-c3-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.32 (Deque Trace)',
        year: 2024,
        marks: 1,
        type: 'NAT',
        stem:
          'Consider an initially empty double-ended queue (Deque) `D` supporting `insertFirst`, `insertLast`, `removeFirst`, and `removeLast`. Execute the following 7 operations in sequence:\n1. `insertFirst(10)`\n2. `insertLast(17)`\n3. `insertFirst(5)`\n4. `insertLast(22)`\n5. `removeFirst()`\n6. `removeLast()`\n7. `a = removeLast()`\nWhat is the value assigned to `a`?',
        natAnswer: {
          min: 17,
          max: 17,
          exactDisplay: '17',
        },
        triggerHint: 'Maintain `[front ... rear]` after every operation.',
        intuitiveSolution: [
          '1. `insertFirst(10)` $\\to$ `[10]`',
          '2. `insertLast(17)` $\\to$ `[10, 17]`',
          '3. `insertFirst(5)` $\\to$ `[5, 10, 17]`',
          '4. `insertLast(22)` $\\to$ `[5, 10, 17, 22]`',
          '5. `removeFirst()` removes `5` $\\to$ `[10, 17, 22]`',
          '6. `removeLast()` removes `22` $\\to$ `[10, 17]`',
          '7. `a = removeLast()` removes and returns `17`, leaving `[10]`. Thus `a = 17`.',
        ],
        directShortcutUsed: 'Left = First, Right = Last bracket trace.',
      },
      {
        id: 'm8-c3-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Caliber Tricky MSQ · Heaps, Linked Lists & Hashing',
        marks: 2,
        type: 'MSQ',
        stem:
          'Which of the following statements about linear data structures, binary heaps, and hash tables is/are **TRUE**?',
        options: [
          {
            id: 'A',
            text: 'Binary search takes $\\Theta(n)$ worst-case time on a sorted singly linked list of $n$ elements.',
            whyTrueOrFalse: 'True — without $O(1)$ random access, finding the midpoint takes $\\Theta(n)$ pointer traversals (GATE DA 2025 Q.27).',
          },
          {
            id: 'B',
            text: 'Bottom-up `build_heap` constructs a valid binary Min-Heap from an arbitrary $n$-element array in $\\Theta(n)$ worst-case time.',
            whyTrueOrFalse: 'True — sifting down from $\\lfloor n/2 \\rfloor - 1$ to $0$ costs $\\sum_{h} \\lceil n/2^{h+1}\\rceil O(h) = \\Theta(n)$.',
          },
          {
            id: 'C',
            text: 'In a binary Min-Heap of $n$ distinct keys, the largest key can be found in $O(\\log n)$ worst-case time.',
            whyTrueOrFalse: 'False — the largest key can reside at any of the $\\lceil n/2 \\rceil$ leaves, requiring $\\Theta(n)$ worst-case comparisons.',
          },
          {
            id: 'D',
            text: 'Deleting a key from a linear-probing hash table by resetting its slot to `EMPTY` (without a tombstone) can break future searches for keys already in the table.',
            whyTrueOrFalse: 'True — a search probing past the deleted slot would terminate prematurely at `EMPTY` and return a false negative.',
          },
        ],
        correctOptions: ['A', 'B', 'D'],
        triggerHint: 'Test each structure against its core invariant: linked list = no $O(1)$ indexing; min-heap = leaves unordered; open addressing = continuous probe chain.',
        intuitiveSolution: [
          '1. A is true: $T(n) = T(n/2) + \\Theta(n) = \\Theta(n)$ on a linked list (GATE DA 2025 Q.27).',
          '2. B is true: bottom-up `heapify` runs in linear $\\Theta(n)$ time.',
          '3. C is false: any leaf can hold the maximum in a Min-Heap, forcing $\\Theta(n)$ scan.',
          '4. D is true: open addressing requires `DELETED` tombstones so probe chains remain unbroken.',
        ],
        directShortcutUsed: 'Linked-list bsearch = $\\Theta(n)$; `build_heap` = $\\Theta(n)$; `find-max` in min-heap = $\\Theta(n)$; delete = tombstone.',
      },
    ],
  },
]

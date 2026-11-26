import type { ChapterData } from '../../types/curriculum'

export const MODULE_13_CHAPTERS: ChapterData[] = [
  {
    id: 'dw-ch1',
    number: 1,
    title: 'File Organization, Indexes & B / B+ Tree Block-Packing Math',
    shortTitle: 'Indexing & B+ Trees',
    estimatedHours: 3.5,
    dayLabel: 'Week 6 · Day 3',
    tagline:
      'Let’s see how databases skip scanning millions of disk blocks using primary, clustering, and secondary indexes—and nail the exact byte-packing inequalities and split rules that turn B+ Trees into effortless GATE DA marks.',
    syllabusMapping: [
      'File organization, indexing (e.g., B and B+ trees)',
      'Query optimization via index selection (Range vs Equality vs Join)',
    ],
    whatIsImportant: [
      'Blocking factor ($bfr = \\lfloor B/R \\rfloor$), data blocks ($\\lceil N/bfr \\rceil$), and Primary (sparse) vs Secondary (dense) index block counts',
      'B+ Tree internal node fanout inequality: internal nodes carry NO record pointers (tested in GATE DA 2026 Q.32)',
      'B+ Tree insertion splits: leaf splits COPY UP the separator key, whereas internal node splits PUSH UP the middle key (tested in GATE DA 2026 Q.41)',
      'Selecting B+ Tree vs Hash indexes for range predicates (`>`, `<`, `BETWEEN`), joins, and equality (`=`) filters (tested in GATE DA 2024 Q.55)',
    ],
    whatIsNotImportant: [
      'B+ Tree deletion underflow (borrowing from siblings and merging nodes) — 0 questions across GATE DA 2024–2026',
      'Extendible / Linear dynamic hashing directory bit-doubling mechanics',
      'Disk platter seek time, rotational latency physics, and OS buffer-pool replacement policies',
    ],
    inboundStream:
      'Module 12 (SQL queries, Primary/Foreign Keys) and Module 9 (Binary Search $O(\\log n)$ & Tree height bounds).',
    outboundStream: [
      'Module 13 Ch.2 (Indexing Fact & Dimension tables in Data Warehouses)',
      'Module 14–15 (KD-Trees, Locality-Sensitive Hashing & fast feature-store retrieval)',
    ],
    glossary: [
      {
        term: 'Disk Block & Unspanned Storage',
        symbol: '$B,\\; R$',
        plainEnglish:
          'A database reads and writes disk in fixed-size chunks called blocks (size $B$ bytes). Under unspanned storage, a single record of size $R$ bytes is never split across two blocks—any leftover tail bytes sit unused.',
        tinyExample: 'With $B = 1000\\text{ B}$ and $R = 400\\text{ B}$, each block holds $2$ full records and leaves $200\\text{ B}$ unused.',
      },
      {
        term: 'Blocking Factor',
        symbol: '$bfr = \\lfloor B / R \\rfloor$',
        plainEnglish:
          'The exact whole number of records (or index entries) that fit inside one single disk block—always rounded **down** with floor because partial records don’t count.',
        tinyExample: 'For $B = 4096\\text{ B}$ and $R = 128\\text{ B}$, $bfr = \\lfloor 4096 / 128 \\rfloor = 32$ records per block.',
      },
      {
        term: 'Heap File vs. Sorted File',
        plainEnglish:
          'A heap file drops new rows wherever free space exists (fast inserts, slow full-file scan), whereas a sorted file keeps rows physically ordered by one key so binary search takes only $\\lceil \\log_2 b \\rceil$ block reads.',
        tinyExample: 'Searching $6$ blocks takes up to $6$ reads in a heap file, but at most $\\lceil \\log_2 6 \\rceil = 3$ reads in a sorted file.',
      },
      {
        term: 'Dense vs. Sparse Index',
        plainEnglish:
          'A **dense** index stores one `(key, pointer)` entry for every single record ($N$ entries), whereas a **sparse** index stores only one anchor entry per disk block (or per distinct group)—requiring the file to be physically sorted on that field.',
        tinyExample: 'On $30{,}000$ rows across $938$ blocks, a sparse index needs $938$ entries while a dense index needs $30{,}000$.',
      },
      {
        term: 'Primary Index',
        plainEnglish:
          'A **sparse** index built on the table’s physically ordering key field (unique values), storing the first key of each data block plus its block pointer—at most one per table.',
        tinyExample: 'Sorting `Student` by `RollNo` lets a Primary Index jump straight to the right block in just $2$ disk reads.',
      },
      {
        term: 'Clustering Index',
        plainEnglish:
          'A **sparse** index built on a physically ordering **non-key** field (where duplicate values sit together), holding one index entry per distinct field value pointing to the first block of that group.',
        tinyExample: 'If `Employee` rows are physically sorted by `DeptID`, a Clustering Index has one entry per distinct `DeptID`.',
      },
      {
        term: 'Secondary Index',
        plainEnglish:
          'A **dense** index built on any non-ordering column (since rows are scattered randomly on disk for that column, every record needs its own index entry so none get missed).',
        tinyExample: 'Indexing `SSN` on a file sorted by `EmpID` requires a dense Secondary Index with $N$ entries.',
      },
      {
        term: 'B-Tree vs. B+ Tree',
        plainEnglish:
          'Both are self-balancing multi-way search trees sized to disk blocks, but a **B-Tree** keeps data record pointers inside every internal node, whereas a **B+ Tree** moves ALL record pointers down to horizontally linked leaves—giving higher fanout and blazing range scans!',
        tinyExample: 'B+ Tree internal nodes drop $P_{\\text{rec}}$, raising order from $124$ (B-Tree) to $195$ (B+ Tree) on a $4\\text{ KB}$ block.',
      },
      {
        term: 'B+ Tree Order / Fanout',
        symbol: '$p$',
        plainEnglish:
          'The maximum number of child node pointers a single non-leaf (internal) node can hold, solved from $p\\cdot P_{\\text{node}} + (p-1)K \\le B$ (ignoring $P_{\\text{rec}}$ completely!).',
        tinyExample: 'With $B=4096, P_{\\text{node}}=10, K=11$, $21p - 11 \\le 4096$ gives order $p = 195$.',
      },
      {
        term: 'Copy-Up vs. Push-Up Split',
        plainEnglish:
          'When a B+ Tree **leaf** overflows, it splits and **copies** the separator key up (so all keys stay in the leaves); when an **internal** node overflows, it **pushes** the middle key up without keeping a duplicate behind.',
        tinyExample: 'Leaf `[1,2,3]` splits to `[1]` & `[2,3]` (copies `2` up); internal `[2,10,20]` splits to `[2]` & `[20]` (pushes `10` up).',
      },
      {
        term: 'Hash Index vs. Range Index',
        plainEnglish:
          'A Hash Index jumps directly to exact equality matches (`col = val`) in $O(1)$ expected time but scrambles sort order—so only an ordered B+ Tree can accelerate range queries (`>`, `<`, `BETWEEN`, `ORDER BY`).',
        tinyExample: '`Genre.Name = "Comedy"` works with Hash or B+ Tree, while `Rating > 3.4` requires a B+ Tree.',
      },
    ],
    generatorId: 'btree-fanout-gen',
    concepts: [
      {
        id: 'dw-c1-1',
        title: 'Heap vs Sorted Files & Primary, Clustering, and Secondary Indexes',
        subtitle: 'Counting disk block I/Os from a 12-student toy table before touching formulas',
        priority: 'high-yield',
        buildsOn: 'Module 9 Binary Search & Module 12 Relational Tables',
        whyStudy:
          'A real database table holds millions of rows stored on slow disk blocks—scanning every block sequentially to find one student record takes seconds instead of milliseconds. Understanding how rows pack into disk blocks and how **Primary, Clustering, and Secondary indexes** shrink $100{,}000$ block scans down to $2$–$3$ reads is the foundation of every database storage engine.',
        groundRules: [
          '**Disk I/O transfers whole blocks ($B$ bytes), never single bytes:** Fetching one $128\\text{ B}$ row still pulls an entire $4096\\text{ B}$ disk block into RAM, so database lookup cost is measured in **block reads**, not CPU steps.',
          '**Unspanned storage obeys “floor for capacity, ceiling for block count”:** Because a record is never split across two blocks, one block fits $bfr = \\lfloor B / R \\rfloor$ full records (floor), and $N$ records require $b = \\lceil N / bfr \\rceil$ blocks (ceiling—even $1$ leftover row needs its own block).',
          '**A file on disk can be physically sorted in at most ONE order:** Therefore, a table can have at most **one** sparse index—either a **Primary Index** (on a unique ordering key, $E = b$ anchor entries) or a **Clustering Index** (on a non-unique ordering field, $E = d$ distinct value entries).',
          '**Any non-ordering column requires a DENSE Secondary Index:** Because rows are scattered randomly across blocks for a non-ordering column (like `SSN` on a file sorted by `EmpID`), the index must store $E = N$ entries (one per record) so no row gets missed.',
        ],
        toyExample: {
          title: 'Finding Student #11 Inside 6 Disk Blocks',
          scenario:
            'Suppose we store $N = 12$ student records (each $R = 400\\text{ bytes}$) inside disk blocks of size $B = 1000\\text{ bytes}$, where records cannot cross block boundaries (unspanned storage).',
          walkthroughSteps: [
            '1. **Pack records into blocks:** Each $1000\\text{ B}$ block fits $\\lfloor 1000 / 400 \\rfloor = 2$ records (the leftover $200\\text{ B}$ stays unused). So $12$ records occupy $12 / 2 = 6$ data blocks.',
            '2. **Unsorted Heap File:** To find Student #11 when rows are scattered randomly, you must scan block by block—up to **$6$ block reads** in the worst case.',
            '3. **Sorted File (Binary Search):** Sort rows by `RollNo` (`1..12`). Block 1 holds `{1,2}`, Block 2 `{3,4}`, ..., Block 6 `{11,12}`. Binary search checks at most $\\lceil \\log_2 6 \\rceil = 3$ blocks.',
            '4. **Add a Primary Index:** Create tiny `(anchor_RollNo, block_ptr)` pairs of size $16\\text{ B}$: `(1, B1), (3, B2), ..., (11, B6)`. All $6$ index entries easily fit inside **1 index block** ($6 \\times 16 = 96\\text{ B} \\le 1000\\text{ B}$)! Read $1$ index block + $1$ data block = **only $2$ disk reads**!',
          ],
          ahaMoment:
            'Look at why a **Primary Index** is so compact: because the data file is already physically sorted by that key, the index only needs to remember *one anchor per block* (sparse!), not every single row. On a million-row table, shrinking $100{,}000$ data blocks down to $1{,}500$ tiny index blocks turns a slow scan into just a handful of disk reads!',
        },
        theoremAndFormula: {
          statement:
            'Under unspanned allocation with block size $B$ and record size $R$, the **blocking factor** is $bfr = \\lfloor B/R \\rfloor$ and the number of data blocks is $b = \\lceil N/bfr \\rceil$. Every index type trades entry count $E$ against physical ordering:\n1) **Primary Index** (ordering key field): **Sparse**, $E = b$ entries (one anchor per data block).\n2) **Clustering Index** (ordering non-key field, e.g., `DeptID`): **Sparse**, $E = d$ entries (one per distinct field value).\n3) **Secondary Index** (any non-ordering field): **Dense**, $E = N$ entries (one per record).',
          formulaLatex:
            'bfr = \\left\\lfloor \\frac{B}{R} \\right\\rfloor, \\qquad b = \\left\\lceil \\frac{N}{bfr} \\right\\rceil, \\qquad b_{\\text{idx}} = \\left\\lceil \\frac{E}{\\lfloor B / (K + P_b) \\rfloor} \\right\\rceil',
          plainEnglishDecoding:
            'Remember the floor-then-ceiling rhythm so you never mix them up: first ask how many whole items fit inside ONE block using **floor** ($\\lfloor \\cdot \\rfloor$), because a half-record never fits. Next divide total items by that capacity using **ceiling** ($\\lceil \\cdot \\rceil$), because even $1$ leftover item still needs its own extra block!',
          workedMiniExamples: [
            {
              prompt:
                'A sorted file has $N = 30{,}000$ records ($R = 128\\text{ B}$) in $B = 4096\\text{ B}$ blocks. A Primary Index uses $K = 12\\text{ B}$ keys and $P_b = 8\\text{ B}$ block pointers. How many blocks does the Primary Index occupy?',
              solution:
                'Data blocking factor $bfr = \\lfloor 4096 / 128 \\rfloor = 32$ records/block, so data blocks $b = \\lceil 30000 / 32 \\rceil = 938$. Index blocking factor $bfr_i = \\lfloor 4096 / (12 + 8) \\rfloor = \\lfloor 4096 / 20 \\rfloor = 204$ entries/block. Thus Primary Index blocks $b_{\\text{idx}} = \\lceil 938 / 204 \\rceil = 5$ blocks.',
            },
            {
              prompt:
                'On the exact same file, how many blocks would a **Secondary Index** on a non-ordering candidate key occupy (using $K = 12\\text{ B}$, $P_b = 8\\text{ B}$)?',
              solution:
                'A secondary index MUST be **dense** ($E = N = 30{,}000$ entries, one per record). With $bfr_i = 204$ entries/block, $b_{\\text{idx}} = \\lceil 30000 / 204 \\rceil = 148$ blocks—nearly $30\\times$ larger than the sparse Primary Index!',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'A single table can have two Primary Indexes—one on `EmpID` and one on `SSN`.',
            reality:
              'Physical rows on disk can be sorted in at most **one** order! Therefore a table can have at most **one** Primary or Clustering index; every other index on that table must be a **dense Secondary index**.',
            counterExample:
              'If `Employee` rows are physically sorted by `EmpID`, `SSN` values sit in arbitrary blocks, so skipping any record in the `SSN` index could lose it.',
          },
          {
            myth: 'A Primary Index always uses 1 entry per record ($N$ entries).',
            reality:
              'Primary and Clustering indexes are **sparse** (one entry per data block or per distinct key group), whereas **Secondary** indexes on unsorted fields are **dense** ($N$ entries).',
            counterExample:
              'If $N = 10{,}000$ across $b = 1{,}000$ blocks, a Primary Index holds $1{,}000$ entries, NOT $10{,}000$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'ML Feature Stores & Inverted Indexes',
            whyItMatters:
              'Production ML feature stores partition data by entity key (primary physical order) and attach dense secondary/inverted indexes for fast slice filtering.',
          },
        ],
      },
      {
        id: 'dw-c1-2',
        title: 'B-Tree vs B+ Tree Node Anatomy & Block-Packing Fanout Math',
        subtitle: 'Why kicking record pointers out of internal nodes boosts B+ Tree fanout dramatically',
        priority: 'core-pillar',
        buildsOn: 'Step 1.1 Block-packing floor/ceiling arithmetic',
        whyStudy:
          'A Binary Search Tree branches only $2$ ways per node—so indexing $100$ million rows takes $\\log_2(10^8) \\approx 27$ separate disk reads! Database engines invented **B-Trees and B+ Trees** to pack each tree node into one full disk block ($4\\text{ KB}$), boosting branching fanout from $2$ to $\\sim 200$ so even $100$ million rows are reached in just $3$–$4$ disk I/Os.',
        groundRules: [
          '**One tree node equals one disk block ($B$ bytes):** Maximizing the child-pointer fanout ($p$) packed inside a single block directly crushes tree height ($\\approx \\log_p N$) and minimizes disk reads.',
          '**Every internal node of order $p$ holds $p$ child pointers and $(p - 1)$ routing keys:** Just as $p - 1$ signposts divide a number line into $p$ sub-intervals, there is always $1$ more child pointer than key.',
          '**B+ Tree internal (non-leaf) nodes NEVER carry data record pointers ($P_{\\text{rec}}$):** Unlike a B-Tree (which stores $P_{\\text{rec}}$ beside every key at every level), a B+ Tree pushes ALL record pointers down to horizontally linked leaf nodes—so non-leaf capacity solves $p\\,P_{\\text{node}} + (p - 1)K \\le B$ (always cross out $P_{\\text{rec}}$!).',
          '**The half-full occupancy rule exempts the root:** Every non-root internal node must hold at least $\\lceil p / 2 \\rceil$ child pointers (keeping the tree balanced), whereas the root may hold as few as $2$ children (or $1$ key when it is a leaf).',
        ],
        sandboxId: 'btree-olap-lab',
        toyExample: {
          title: 'Packing a Tiny 64-Byte Node: B-Tree vs B+ Tree',
          scenario:
            'Imagine a miniature disk block of $B = 64\\text{ bytes}$. Each child node pointer takes $P_{\\text{node}} = 10\\text{ B}$, each search key takes $K = 11\\text{ B}$, and each data record pointer takes $P_{\\text{rec}} = 12\\text{ B}$. Compare how many child branches ($p$) fit in ONE **internal node** of a B-Tree vs a B+ Tree.',
          walkthroughSteps: [
            '1. **Every tree node of order $p$** needs **$p$ child pointers** and **$(p-1)$ keys** acting as signposts separating those $p$ subtrees.',
            '2. **B-Tree internal node:** Stores data record pointers *inside* every internal node right next to each key! So each of the $(p-1)$ keys costs $K + P_{\\text{rec}} = 11 + 12 = 23\\text{ B}$. Inequality: $10p + 23(p-1) \\le 64 \\implies 33p \\le 87 \\implies p = 2$ children.',
            '3. **B+ Tree internal node:** Kicks ALL record pointers down to the leaves! Internal nodes store **only** child pointers and keys. Inequality: $10p + 11(p-1) \\le 64 \\implies 21p \\le 75 \\implies p = 3$ children.',
            '4. **Tree Height Payoff:** Higher fanout $p$ makes the B+ Tree shorter and wider, saving disk I/Os on every search—plus B+ Tree leaves link horizontally so range scans never climb back up!',
          ],
          ahaMoment:
            'Spot the examiner’s favorite decoy before you touch a calculator: in a **B+ Tree internal (non-leaf) node**, $P_{\\text{rec}}$ is **NEVER used**! Whenever a GATE problem hands you $B$, $P_{\\text{node}}$, $K$, AND $P_{\\text{rec}}$ and asks about a **non-leaf B+ Tree node**, cross out $P_{\\text{rec}}$ immediately!',
        },
        theoremAndFormula: {
          statement:
            'Let $B$ be the block size, $P_{\\text{node}}$ a tree-node pointer size, $K$ the search key size, and $P_{\\text{rec}}$ a data-record pointer size. Maximum child pointers $p$ (and leaf key capacity $p_{\\text{leaf}}$) satisfy:',
          formulaLatex:
            '\\text{B+ Tree Internal: } p \\cdot P_{\\text{node}} + (p-1)K \\le B \\qquad \\text{B-Tree Internal: } p \\cdot P_{\\text{node}} + (p-1)(K + P_{\\text{rec}}) \\le B \\\\[6pt] \\text{B+ Tree Leaf: } p_{\\text{leaf}}(K + P_{\\text{rec}}) + P_{\\text{node}} \\le B',
          plainEnglishDecoding:
            'Picture the two node layouts side by side: inside a **B+ Tree internal node**, $p$ child pointers sit between $(p-1)$ routing signposts—zero record pointers! Down inside a **B+ Tree leaf node**, every key brings its own $P_{\\text{rec}}$ pointer to the real data row, plus **one** trailing $P_{\\text{node}}$ link to the next leaf on the right.',
          workedMiniExamples: [
            {
              prompt:
                '(GATE DA 2026 Q.32 Archetype) A B+ Tree has block size $4096\\text{ B}$, node pointer $10\\text{ B}$, search key $11\\text{ B}$, and record pointer $12\\text{ B}$. Find the maximum number of **node pointers** in a non-leaf node.',
              solution:
                'Ignore the $12\\text{ B}$ record pointer because non-leaf B+ Tree nodes contain only node pointers and keys: $10p + 11(p - 1) \\le 4096 \\implies 21p - 11 \\le 4096 \\implies 21p \\le 4107 \\implies p = \\lfloor 4107 / 21 \\rfloor = 195$.',
            },
            {
              prompt:
                'For the same parameters ($B = 4096, P_{\\text{node}} = 10, K = 11, P_{\\text{rec}} = 12$), how many `(key, record_pointer)` entries fit in a single **leaf node**?',
              solution:
                'Reserve one $10\\text{ B}$ next-leaf pointer: $p_{\\text{leaf}}(11 + 12) + 10 \\le 4096 \\implies 23\\,p_{\\text{leaf}} \\le 4086 \\implies p_{\\text{leaf}} = \\lfloor 4086 / 23 \\rfloor = 177$ entries.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Including $P_{\\text{rec}}$ in the B+ Tree non-leaf inequality gives a valid tighter bound.',
            reality:
              'False! If you plug $P_{\\text{rec}} = 12$ into the 2026 Q.32 non-leaf node, you compute $(10 + 11 + 12)p \\le 4119 \\implies p = 124$, which is the **B-Tree** internal fanout, NOT the B+ Tree fanout ($195$)!',
            counterExample:
              'GATE DA 2026 Q.32 specifically supplied $12\\text{ B}$ record pointers as a decoy in a 1-mark NAT whose official key was $195$.',
          },
          {
            myth: 'Every node in a B+ Tree of order $p$, including the root, must have at least $\\lceil p/2 \\rceil$ pointers.',
            reality:
              'The root is exempt! Every **non-root internal node** must have at least $\\lceil p/2 \\rceil$ child pointers (and $\\lceil p/2 \\rceil - 1$ keys), whereas a non-leaf root needs only $\\ge 2$ children (and a leaf root needs $\\ge 1$ key).',
            counterExample:
              'After the very first leaf split of a B+ Tree of order $p = 100$, the brand-new root has only $1$ key and $2$ children—valid even though $2 < 50$!',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA',
            targetWeek: 4,
            topic: 'Balanced Search Trees & Multi-way Branching',
            whyItMatters:
              'B+ Trees generalize binary search trees from fanout $2$ to fanout $\\approx 200$ so tree height stays $3$–$4$ even for $10^8$ rows.',
          },
        ],
      },
      {
        id: 'dw-c1-3',
        title: 'B+ Tree Insertion Splits & B+ Tree vs Hash Index Selection',
        subtitle: 'Copy-up at leaves vs Push-up inside the tree, and why Hash indexes fail range queries',
        priority: 'high-yield',
        buildsOn: 'Step 1.2 B+ Tree node structure',
        whyStudy:
          'Indexes must stay balanced as new rows constantly overflow fixed-size disk blocks, and real SQL queries mix exact lookups (`=`), joins, and range filters (`>`, `<`, `BETWEEN`). Understanding how B+ Trees split overflowing nodes without breaking sequential leaf scans—and knowing why Hash indexes crush equality lookups yet fail ranges—lets you trace insertions and pick the right index for any query.',
        groundRules: [
          '**Every data key MUST remain at the B+ Tree leaf level (Leaf Split = COPY UP):** Because all leaves form a sorted linked list for range scans, splitting an overflowing leaf keeps ALL keys in the two leaves and **copies** the separator key up to the parent.',
          '**Internal nodes are pure routing signposts (Internal Split = PUSH UP):** When an internal node overflows, its exact median key **moves up** into the parent without leaving a duplicate behind—saving bytes and maximizing fanout.',
          '**B+ Trees preserve sorted key order, accelerating BOTH equality (`=`) and range (`>`, `<`, `BETWEEN`, `ORDER BY`):** One root-to-leaf lookup finds the range boundary, then horizontal leaf links sweep every matching record without re-descending the tree.',
          '**Hash indexes scramble key order, accelerating ONLY exact equality (`=`) and equijoins:** Hashing maps adjacent values like `3.41` and `3.50` into unrelated random buckets in $O(1)$ expected time, making Hash indexes useless for range predicates.',
        ],
        toyExample: {
          title: 'Overflowing a 2-Key Leaf vs a 2-Key Internal Node',
          scenario:
            'Suppose every B+ Tree node holds at most **2 keys** (internal nodes hold at most 3 child pointers). Trace inserting `3` when the left leaf `[1, 2]` is already full under parent `[10]` (with right leaf `[10, 12]`).',
          walkthroughSteps: [
            '1. **Insert into Leaf:** `3` belongs in the left leaf `[1, 2]`, creating temporary overflow `[1, 2, 3]`.',
            '2. **Leaf Split (COPY UP):** Split `[1, 2, 3]` into left leaf `[1]` and right leaf `[2, 3]` (or `[1, 2]` and `[3]` depending on tie-break; crucially, **all 3 keys remain at the leaf level**!). Notice the first key of the new right leaf (`2` or `3`) is **copied up** to the parent `[10]`.',
            '3. **What if the Parent Internal Node ALSO Overflows?** Suppose parent already held `[5, 10]` and receives `3`, temporarily overflowing to `[3, 5, 10]`.',
            '4. **Internal Split (PUSH UP):** Split `[3, 5, 10]` into left internal `[3]`, right internal `[10]`, and **PUSH UP** the middle key `5` into a brand-new root `[5]`! Notice `5` does **NOT** stay inside `[3]` or `[10]`—internal splits *move* the middle key up.',
          ],
          ahaMoment:
            'Here is the two-word mantra that makes every B+ Tree trace automatic: **Leaf Split = COPY UP** (because every data key must stay in the linked leaf layer for range scans!), whereas **Internal Split = PUSH UP** (because internal nodes are pure signposts, so leaving a duplicate behind would only waste space).',
        },
        theoremAndFormula: {
          statement:
            '**Split Mechanics & Index Selection Rules:**\n- **B+ Tree Leaf Overflow:** Split keys across two leaves and **copy** the separator key into the parent.\n- **B+ Tree Internal Overflow:** Split around the median key and **push** the median key up to the parent (do not duplicate it at the split level).\n- **Index Choice for SQL Queries:**\n  - **Equality (`col = val`):** Accelerated by **either** a B+ Tree index ($O(\\log_p N)$) or a Hash index ($O(1)$ expected).\n  - **Range (`col > val`, `BETWEEN`, `ORDER BY`):** Accelerated **ONLY by a B+ Tree index** (sorted leaves linked sequentially). Hash indexes destroy sort order and cannot help!',
          formulaLatex:
            '\\text{Range } (>, <, \\text{BETWEEN}): \\text{B+ Tree ONLY} \\qquad \\text{Equality } (=): \\text{B+ Tree OR Hash}',
          plainEnglishDecoding:
            'Picture a **Hash Index** like tossing every file into a randomly numbered locker based on its exact name: ask for `"Comedy"` and you walk straight to that locker in one step, but ask for “all movies rated `> 3.4`” and hashing scatters `3.41`, `3.5`, and `4.9` across random lockers—forcing a full table scan!',
          workedMiniExamples: [
            {
              prompt:
                '(GATE DA 2024 Q.55 Pattern) Which indexes help speed up this query?\n```sql\nSELECT *\nFROM Movie M, Genre G\nWHERE M.GenreID = G.ID\n  AND G.Name = "Comedy"\n  AND M.Rating > 3.4;\n```',
              solution:
                '1) `G.Name = "Comedy"` is an **equality** filter: **either** a B+ Tree or a Hash index on `Genre.Name` speeds it up. 2) `M.Rating > 3.4` is a **range** filter: **only** a B+ Tree index on `Movie.Rating` helps (a Hash index on `Rating` is useless!). 3) `M.GenreID = G.ID` is an equijoin: B+ Tree or Hash index on `M.GenreID` / `G.ID` speeds up the join.',
            },
            {
              prompt:
                'Suppose an internal node (max 2 keys / 3 pointers) holds `[10, 20]` and receives pushed-up key `5` with its new right-child pointer. What is the resulting parent key?',
              solution:
                'Temporary keys `[5, 10, 20]` split at the median `10`: left internal node keeps `[5]`, right internal node keeps `[20]`, and `10` is **pushed up** to become the separator in the parent above.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'When a B+ Tree leaf splits, the promoted key is removed from the leaf just like in a B-Tree.',
            reality:
              'Never! In a B+ Tree, **all** search keys (and their record pointers) must live at the leaf level. Only **internal** nodes push keys up without keeping a copy.',
            counterExample:
              'If splitting `[1, 2, 3]` deleted `2` from the leaves, a range scan starting from leaf 1 and walking the leaf linked list would silently skip `2`!',
          },
          {
            myth: 'A Hash index speeds up `Rating > 3.4` faster than a B+ Tree because hash lookup is $O(1)$.',
            reality:
              'Hash functions scramble numerical order (`h(3.5)` and `h(3.6)` have zero adjacency), so Hash indexes support **only equality (`=`)** predicates, never ranges (`>`, `<`, `BETWEEN`).',
            counterExample:
              'In GATE DA 2024 Q.55, options placing a Hash index on `CustomerRating` (`> 3.4`) were false distractors.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: '$k$-NN Spatial Trees vs Locality-Sensitive Hashing (LSH)',
            whyItMatters:
              'Tree indexes (KD-Tree / B+ Tree) preserve spatial/order structure for range & nearest-neighbor queries, whereas hashing trades order for $O(1)$ exact/bucket lookup.',
            pyqProof: 'GATE DA 2024 · Q.55 (2M MSQ)',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'dw-ht1',
        title: 'The "Cross-Out-the-Decoy-Byte" B+ Tree Fanout Method',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2026 · Q.32 (1M NAT)'],
        problemStatement:
          'A disk block is $4096\\text{ B}$. A node (block) pointer is $10\\text{ B}$, a search key is $11\\text{ B}$, and a data record pointer is $12\\text{ B}$. What is the maximum number of **node pointers** in a **non-leaf** node of a B+ Tree?',
        triggerCue:
          'Notice the question hands you **three** pointer/key sizes ($P_{\\text{node}}, K, P_{\\text{rec}}$) and asks specifically about a **non-leaf (internal)** node of a **B+ Tree**.',
        bruteForceTrap:
          'Blindly plugging every given number into $p\\,P_{\\text{node}} + (p-1)(K + P_{\\text{rec}}) \\le B$ computes $10p + 23(p-1) \\le 4096 \\implies p = 124$, which is the **B-Tree** formula—guaranteed wrong for a B+ Tree!',
        mentalShift:
          'Before writing any algebra, ask: *"Am I inside a B+ Tree internal node, a B+ Tree leaf, or a B-Tree?"* For a **B+ Tree internal node**, literally cross out $P_{\\text{rec}} = 12\\text{ B}$—record pointers NEVER live upstairs!',
        steps: [
          {
            label: 'Step 1 — Filter out distractors',
            detail:
              'Non-leaf B+ Tree nodes contain only child node pointers ($P_{\\text{node}} = 10\\text{ B}$) and routing keys ($K = 11\\text{ B}$). Discard $P_{\\text{rec}} = 12\\text{ B}$.',
          },
          {
            label: 'Step 2 — Write the $p$ pointers / $(p-1)$ keys inequality',
            detail:
              '$10p + 11(p - 1) \\le 4096 \\implies 21p - 11 \\le 4096 \\implies 21p \\le 4107$.',
          },
          {
            label: 'Step 3 — Floor-divide cleanly',
            detail:
              '$p = \\lfloor 4107 / 21 \\rfloor = \\lfloor 195.57 \\rfloor = 195$ node pointers (and $194$ search keys).',
          },
        ],
        lockInTakeaway:
          'B+ Tree Internal = $pP_{\\text{node}} + (p-1)K \\le B$ ($P_{\\text{rec}}$ is a decoy!). Only B-Tree internal nodes and B+ Tree leaves pay for $P_{\\text{rec}}$.',
      },
      {
        id: 'dw-ht2',
        title: 'Query Predicate → Index Matchmaker (Range vs Equality vs Join)',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.55 (2M MSQ)'],
        problemStatement:
          'Given an SQL query joining `Movie` and `Genre` on `Movie.GenreID = Genre.ID` with `WHERE Genre.Name = "Comedy" AND Movie.CustomerRating > 3.4`, which proposed index sets (combinations of B+ Tree and Hash indexes) speed up execution?',
        triggerCue:
          'An MSQ listing 4 index combinations (`B+ Tree on X`, `Hash on Y`) alongside a SQL `WHERE` clause mixing `=`, `>`, and a join.',
        bruteForceTrap:
          'Picking options just because they say "Hash index = $O(1)$ fast!"—or rejecting a valid B+ Tree on `Genre.Name` thinking only Hash indexes handle equality.',
        mentalShift:
          'Classify every predicate column into **Equality/Equijoin (`=`)** vs **Range (`>`, `<`, `BETWEEN`)**. Then test each option against ONE rule: B+ Tree helps **both**; Hash helps **ONLY Equality/Equijoin**!',
        steps: [
          {
            label: 'Step 1 — Tag every column in the query',
            detail:
              '`Genre.Name` uses `=` (Equality). `Movie.GenreID` and `Genre.ID` use `=` (Equijoin). `Movie.CustomerRating` uses `>` (Range!).',
          },
          {
            label: 'Step 2 — Eliminate any option putting Hash on a Range column',
            detail:
              'Any option proposing a **Hash index on `CustomerRating`** fails immediately—hashing destroys ordering and cannot locate `> 3.4` without scanning.',
          },
          {
            label: 'Step 3 — Accept B+ Tree on Range + (B+ Tree OR Hash) on Equality/Join',
            detail:
              'A B+ Tree on `CustomerRating` paired with either a B+ Tree or Hash index on `Genre.Name` (and/or join keys) genuinely speeds up the query—select ALL such valid MSQ options!',
          },
        ],
        lockInTakeaway:
          'Never reject a B+ Tree on an equality predicate—B+ Trees handle both `=` and `>`. Only reject a Hash index when paired with a range predicate!',
      },
    ],
    arsenalCards: [
      {
        id: 'dw-a1-1',
        badge: 'Fanout Weapon',
        whenYouSpot: 'Block size $B$ + $P_{\\text{node}}, K, P_{\\text{rec}}$ asking for B+ Tree non-leaf capacity',
        directWeaponLatex: 'p = \\left\\lfloor \\frac{B + K}{P_{\\text{node}} + K} \\right\\rfloor',
        instantRule:
          'Drop $P_{\\text{rec}}$ completely for B+ Tree non-leaf nodes; keep $P_{\\text{rec}}$ only for B+ Tree leaves or B-Tree nodes.',
        tenSecondExample:
          '$B=4096, P_{\\text{node}}=10, K=11, P_{\\text{rec}}=12 \\implies \\lfloor (4096+11)/(10+11) \\rfloor = \\lfloor 4107/21 \\rfloor = 195$.',
        oneFatalTrap:
          'Adding $P_{\\text{rec}}$ into a B+ Tree non-leaf node gives $124$ instead of $195$.',
      },
      {
        id: 'dw-a1-2',
        badge: 'Split Rule',
        whenYouSpot: 'B+ Tree insertion trace overflowing a leaf or internal node',
        directWeaponLatex: '\\text{Leaf} \\xrightarrow{\\text{COPY UP}} \\text{Parent} \\qquad \\text{Internal} \\xrightarrow{\\text{PUSH UP}} \\text{Grandparent}',
        instantRule:
          'Splitting a leaf keeps ALL keys in the two leaves and copies the separator upward; splitting an internal node pushes the median key up without leaving a duplicate.',
        tenSecondExample:
          'Leaf `[1,2,3]` splits into `[1]` & `[2,3]` (copies `2` up); Internal `[2,5,10]` splits into `[2]` & `[10]` (pushes `5` up).',
        oneFatalTrap:
          'Deleting the promoted key from a split leaf—breaks leaf sequential linked scans!',
      },
      {
        id: 'dw-a1-3',
        badge: 'Index Selector',
        whenYouSpot: 'SQL query optimization MSQ comparing B+ Tree vs Hash index',
        directWeaponLatex: '\\text{Range } (>,<): \\text{B+ Tree} \\quad|\\quad \\text{Equality } (=): \\text{B+ Tree or Hash}',
        instantRule:
          'Hash indexes accelerate ONLY exact equality (`=`) and equijoins; B+ Trees accelerate equality, equijoins, AND range/ORDER BY predicates.',
        tenSecondExample:
          '`Rating > 3.4` requires B+ Tree; `Genre = "Comedy"` works with either Hash or B+ Tree.',
        oneFatalTrap:
          'Assuming Hash is always useless or always better—Hash fails ranges, while B+ Tree still works for equality.',
      },
    ],
    questions: [
      {
        id: 'm13-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Primary Index Blocks',
        marks: 1,
        type: 'NAT',
        stem: 'A sorted student file contains $N = 10{,}000$ fixed-length records of size $R = 128\\text{ bytes}$ stored unspanned in disk blocks of size $B = 1024\\text{ bytes}$. A **Primary Index** is built on the ordering key ($K = 10\\text{ bytes}$, block pointer $P_b = 6\\text{ bytes}$). How many disk blocks does the Primary Index occupy?',
        natAnswer: { min: 20, max: 20, exactDisplay: '20' },
        triggerHint: 'Primary index is SPARSE: compute data blocks $b$ first, then pack index entries into $1024\\text{ B}$ blocks.',
        intuitiveSolution: [
          'Data blocking factor: $bfr = \\lfloor 1024 / 128 \\rfloor = 8$ records/block.',
          'Total data blocks: $b = \\lceil 10{,}000 / 8 \\rceil = 1250$ blocks. Because a Primary Index is sparse, it needs $E = 1250$ anchor entries.',
          'Each index entry takes $K + P_b = 10 + 6 = 16\\text{ bytes}$, so $bfr_i = \\lfloor 1024 / 16 \\rfloor = 64$ entries/block.',
          'Primary index blocks: $b_{\\text{idx}} = \\lceil 1250 / 64 \\rceil = \\lceil 19.53125 \\rceil = 20$ blocks.',
        ],
        directShortcutUsed: '$b_{\\text{idx}} = \\lceil \\lceil N / \\lfloor B/R \\rfloor \\rceil / \\lfloor B/(K+P_b) \\rfloor \\rceil$',
      },
      {
        id: 'm13-c1-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.32 (Exact Pattern)',
        year: 2026,
        marks: 1,
        type: 'NAT',
        stem: 'Consider a B+ Tree index with block size $B = 4096\\text{ bytes}$, tree node pointer size $P_{\\text{node}} = 10\\text{ bytes}$, search key size $K = 11\\text{ bytes}$, and data record pointer size $P_{\\text{rec}} = 12\\text{ bytes}$. Find the **maximum number of node pointers** that can be stored in a **non-leaf** node of this B+ Tree.',
        natAnswer: { min: 195, max: 195, exactDisplay: '195' },
        triggerHint: 'Non-leaf B+ Tree nodes contain ZERO record pointers—ignore $12\\text{ bytes}$!',
        intuitiveSolution: [
          'A non-leaf (internal) B+ Tree node of order $p$ stores $p$ node pointers and $(p - 1)$ search keys—no data record pointers.',
          'Set up the capacity inequality: $10p + 11(p - 1) \\le 4096$.',
          'Simplify: $21p - 11 \\le 4096 \\implies 21p \\le 4107$.',
          'Take the floor: $p = \\lfloor 4107 / 21 \\rfloor = 195$.',
        ],
        directShortcutUsed: '$p = \\lfloor (B + K) / (P_{\\text{node}} + K) \\rfloor = 195$ (dropping $P_{\\text{rec}}$)',
      },
      {
        id: 'm13-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.41 (Inspired Split Trace)',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem: 'In a B+ Tree where each leaf holds at most $2$ keys and each internal node holds at most $3$ child pointers (max $2$ keys), the current tree has root `[10, 20]` pointing to three leaves: `[1, 2]`, `[10, 15]`, and `[20, 25]`. Suppose when a node splits on receiving a 3rd key, a **leaf** splits into $1$ key on the left and $2$ keys on the right (copying the first key of the right leaf up), while an **internal** node pushes its exact middle key up. What key(s) sit in the **root node** immediately after inserting `3`?',
        options: [
          {
            id: 'A',
            text: '`[2]`',
            whyTrueOrFalse: 'Incorrect—the internal node `[2, 10, 20]` splits around its middle key `10`, not `2`.',
          },
          {
            id: 'B',
            text: '`[10]`',
            whyTrueOrFalse:
              'Correct! Inserting `3` splits leaf `[1, 2, 3]` into `[1]` and `[2, 3]`, copying `2` up to `[10, 20]`. That internal root overflows to `[2, 10, 20]` and pushes its median `10` up into a new root `[10]`.',
          },
          {
            id: 'C',
            text: '`[3, 10]`',
            whyTrueOrFalse: 'Incorrect—`3` stays in the right leaf `[2, 3]`; only `2` is copied up, and the overflowing root must split.',
          },
          {
            id: 'D',
            text: '`[2, 10, 20]`',
            whyTrueOrFalse: 'Incorrect—an internal node can hold at most $2$ keys ($3$ pointers), so `[2, 10, 20]` cannot remain unsplit.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Trace two cascading splits: first leaf `[1, 2, 3]` copies up `2`, then internal root `[2, 10, 20]` pushes up its median.',
        intuitiveSolution: [
          '1. Route `3`: since $3 < 10$, descend to the leftmost leaf `[1, 2]`.',
          '2. Insert `3`: leaf becomes `[1, 2, 3]` (overflow!). Per the split rule, left leaf keeps `[1]`, right leaf gets `[2, 3]`, and separator `2` is **copied up** to the parent.',
          '3. Parent overflows to `[2, 10, 20]` (3 keys > max 2 keys).',
          '4. Split internal node: left child gets `[2]`, right child gets `[20]`, and the middle key `10` is **pushed up** to become the sole key in the new root `[10]`.',
        ],
        directShortcutUsed: 'Leaf copy-up (`2`) $\\to$ Internal push-up of median (`10`)',
      },
      {
        id: 'm13-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.55 (Exact Pattern)',
        year: 2024,
        marks: 2,
        type: 'MSQ',
        stem: 'Consider tables `Movie(ID, Title, GenreID, CustomerRating)` and `Genre(ID, Name)` and the query:\n```sql\nSELECT M.Title\nFROM Movie M\nJOIN Genre G\n  ON M.GenreID = G.ID\nWHERE G.Name = "Comedy"\n  AND M.CustomerRating > 3.4;\n```\nWhich of the following index configurations will **help speed up** execution of this query? *(Select all that apply.)*',
        options: [
          {
            id: 'A',
            text: 'B+ Tree index on `Movie.CustomerRating` and Hash index on `Genre.Name`',
            whyTrueOrFalse:
              'True! B+ Tree handles the range predicate `CustomerRating > 3.4`, and Hash handles the equality predicate `Genre.Name = "Comedy"`.',
          },
          {
            id: 'B',
            text: 'Hash index on `Movie.CustomerRating` and B+ Tree index on `Genre.Name`',
            whyTrueOrFalse:
              'False—a Hash index on `CustomerRating` destroys order and CANNOT accelerate the range filter `> 3.4`.',
          },
          {
            id: 'C',
            text: 'B+ Tree index on `Movie.CustomerRating` and B+ Tree index on `Genre.Name`',
            whyTrueOrFalse:
              'True! B+ Tree handles BOTH range predicates (`> 3.4`) and equality predicates (`= "Comedy"`).',
          },
          {
            id: 'D',
            text: 'B+ Tree index on `Movie.GenreID` and Hash index on `Genre.ID`',
            whyTrueOrFalse:
              'True! Indexing both join attributes supports fast equijoin matching between `Movie.GenreID` and `Genre.ID`.',
          },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Map each column to Range vs Equality/Equijoin; only reject Hash on Range (`CustomerRating > 3.4`).',
        intuitiveSolution: [
          'Check every predicate: `CustomerRating > 3.4` is a **range** filter (requires B+ Tree; Hash fails).',
          '`Genre.Name = "Comedy"` is an **equality** filter (both B+ Tree and Hash work).',
          '`M.GenreID = G.ID` is an **equijoin** (both B+ Tree and Hash on join keys accelerate lookup/join).',
          'Therefore A, C, and D speed up execution, while B fails on the range predicate.',
        ],
        directShortcutUsed: 'Range $\\implies$ B+ Tree only; Equality/Equijoin $\\implies$ B+ Tree or Hash',
      },
      {
        id: 'm13-c1-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style MSQ · B-Tree vs B+ Tree',
        marks: 2,
        type: 'MSQ',
        stem: 'Comparing a **B-Tree** and a **B+ Tree** built on the exact same search key and block size $B$ (with $P_{\\text{rec}} > 0$), which of the following statements is/are ALWAYS true?',
        options: [
          {
            id: 'A',
            text: 'An internal (non-leaf) node of the B+ Tree has a strictly greater or equal maximum pointer fanout than an internal node of the B-Tree.',
            whyTrueOrFalse:
              'True! B+ Tree internal nodes omit $P_{\\text{rec}}$, so $(P_{\\text{node}} + K) < (P_{\\text{node}} + K + P_{\\text{rec}})$, giving $\\ge$ fanout.',
          },
          {
            id: 'B',
            text: 'Every search key present in the table appears in the leaf nodes of the B+ Tree, whereas a B-Tree may store a search key only in an internal node.',
            whyTrueOrFalse:
              'True! B+ Trees duplicate internal routing keys in the leaves; B-Trees store each key and its record pointer exactly once.',
          },
          {
            id: 'C',
            text: 'Searching for a key stored in the root node is always faster in a B-Tree than in a B+ Tree.',
            whyTrueOrFalse:
              'True! A B-Tree search can stop at the root upon finding the key and immediately follow its $P_{\\text{rec}}$; a B+ Tree search must always traverse down to a leaf.',
          },
          {
            id: 'D',
            text: 'Every non-empty node in a B+ Tree of order $p$, including the root, must contain at least $\\lceil p/2 \\rceil - 1$ keys.',
            whyTrueOrFalse:
              'False! The root is exempt from the half-full constraint and may contain as few as $1$ key.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Test root exemptions (`D`) and remember B-Trees carry $P_{\\text{rec}}$ inside internal nodes.',
        intuitiveSolution: [
          'A is true: Dropping $P_{\\text{rec}}$ frees bytes in every B+ Tree internal node, never reducing fanout.',
          'B is true: B+ Trees keep all data-pointing keys at the leaf level; B-Trees place keys across all levels without leaf duplication.',
          'C is true: Root-hit queries terminate in 1 node read in a B-Tree, whereas B+ Tree paths always end at a leaf.',
          'D is false: Only *non-root* nodes obey the half-full rule ($\\ge \\lceil p/2 \\rceil - 1$ keys in internal nodes).',
        ],
        directShortcutUsed: 'B-Tree = early stop + smaller internal fanout; B+ Tree = root-to-leaf + bigger fanout + root exempt from half-full',
      },
      {
        id: 'm13-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style NAT · 3-Level B+ Tree Capacity',
        marks: 2,
        type: 'NAT',
        stem: 'A 3-level B+ Tree has its root at Level 0, internal nodes at Level 1, and leaf nodes at Level 2. Each non-leaf node can hold at most $p = 5$ child pointers, and each leaf node can hold at most $L = 4$ data-entry keys. What is the **maximum number of data keys** that this 3-level B+ Tree can index?',
        natAnswer: { min: 100, max: 100, exactDisplay: '100' },
        triggerHint: 'Multiply max fanout at Level 0 $\\times$ max fanout at Level 1 $\\times$ max keys per leaf.',
        intuitiveSolution: [
          'Level 0 (root) has at most $p = 5$ child pointers $\\implies$ at most $5$ Level-1 internal nodes.',
          'Each of the $5$ Level-1 internal nodes has at most $p = 5$ child pointers $\\implies$ at most $5 \\times 5 = 25$ Level-2 leaf nodes.',
          'Each leaf node stores at most $L = 4$ keys (all data keys live in leaves in a B+ Tree).',
          'Maximum indexed keys $= 25 \\times 4 = 100$.',
        ],
        directShortcutUsed: '$\\text{Max keys} = p^{\\text{internal levels}} \\times L = 5^2 \\times 4 = 100$',
      },
    ],
  },
  {
    id: 'dw-ch2',
    number: 2,
    title: 'Data Warehousing, OLAP Operations & Feature Preprocessing',
    shortTitle: 'Warehousing, OLAP & Scaling',
    estimatedHours: 3.5,
    dayLabel: 'Week 6 · Day 4',
    tagline:
      'Let’s connect Star and Snowflake schemas, OLAP cube navigation, and the “$+1$ for ALL” cuboid counting shortcut directly to ML feature scaling (Min-Max vs. Z-Score), outlier compression, and preventing train-test data leakage.',
    syllabusMapping: [
      'Data warehousing: multidimensional data model, concept hierarchies',
      'Data transformation such as normalization, discretization, sampling, compression',
    ],
    whatIsImportant: [
      'Star Schema (denormalized dimensions, fast 1-hop joins) vs Snowflake Schema (normalized dimensions, extra joins) & Fact Measures (Additive / Semi-additive / Non-additive)',
      'OLAP Operations: Drill-down (GATE DA 2026 Q.18), Roll-up, Slice (1 dim fixed), Dice (2+ dims filtered), Pivot',
      'Exact counting formulas: `GROUP BY CUBE` tuples $\\le \\prod(|D_i|+1)$ (GATE DA 2025 Q.46) & Concept-hierarchy cuboids $\\prod(L_i+1)$ (GATE DA 2026 Q.43)',
      'Z-Score vs Min-Max vs Decimal Scaling (GATE DA 2024 Q.27), outlier compression in Min-Max, and Train/Test Data Leakage',
    ],
    whatIsNotImportant: [
      'Vendor-specific ETL tool GUIs or cloud warehouse billing architectures',
      'Slowly Changing Dimensions (SCD Types 1–6) DDL scripts',
      'Low-level MOLAP sparse-array compression formats',
    ],
    inboundStream:
      'Module 12 (SQL `GROUP BY`, Joins, Normalization) and Module 2 (Sample Mean $\\mu$ & Standard Deviation $\\sigma$).',
    outboundStream: [
      'Module 14 (ML Pipelines: why $k$-NN, SVM, Ridge & Gradient Descent break without scaling, while Decision Trees are invariant)',
      'Module 15 (PCA: why unstandardized high-variance columns hijack Principal Component 1)',
    ],
    glossary: [
      {
        term: 'Data Warehouse & OLAP',
        plainEnglish:
          'A subject-oriented, historical analytical database built for fast multi-dimensional summaries (Online Analytical Processing) rather than single-row transactional edits.',
        tinyExample: 'Aggregating $5$ years of retail sales by `(Country, Quarter, Category)` runs on an OLAP warehouse.',
      },
      {
        term: 'Fact Table & Measures',
        plainEnglish:
          'The central table of a warehouse storing numeric business measurements (measures) plus Foreign Keys to dimensions. Measures are **additive** (sum across all dims, like `Revenue`), **semi-additive** (not across time, like `AccountBalance`), or **non-additive** (never sum directly, like `UnitPrice`).',
        tinyExample: '`Sales_Fact(StoreID, DateID, ProdID, Revenue, Units)` links $3$ dimensions to $2$ additive measures.',
      },
      {
        term: 'Dimension Table',
        plainEnglish:
          'A descriptive lookup table providing the “who, what, where, and when” context (such as `Time`, `Store`, `Product`) that you group and filter fact measures by.',
        tinyExample: '`Dim_Location(StoreID, City, State, Country)` lets analysts slice revenue by geography.',
      },
      {
        term: 'Star Schema vs. Snowflake Schema',
        plainEnglish:
          'In a **Star Schema**, each dimension sits in one single denormalized table (fast $1$-hop joins, slight redundancy). In a **Snowflake Schema**, dimensions are normalized into chains of sub-tables (saves dimension space, adds extra joins).',
        tinyExample: 'Star joins `Fact -> Dim_Store` ($1$ join); Snowflake joins `Fact -> Store -> City -> State -> Country` ($4$ joins).',
      },
      {
        term: 'Concept Hierarchy',
        symbol: '$L_i$',
        plainEnglish:
          'A ladder of abstraction levels within a single dimension moving from fine detail up to broad groups (with $L_i$ named levels, plus the invisible top `ALL` apex).',
        tinyExample: '`City -> State -> Country` is a $3$-level location concept hierarchy ($3 + 1 = 4$ states including `ALL`).',
      },
      {
        term: 'Data Cube & Cuboid Lattice',
        symbol: '$\\prod_{i=1}^k (L_i + 1)$',
        plainEnglish:
          'A multi-dimensional array of aggregated measures where each possible combination of abstraction levels across dimensions defines one summary view called a cuboid.',
        tinyExample: '$3$ dimensions each with a $3$-level hierarchy produce $(3 + 1)^3 = 64$ total cuboids.',
      },
      {
        term: '`GROUP BY CUBE` vs. `ROLLUP`',
        symbol: '$\\prod_{i=1}^k (|D_i| + 1)$',
        plainEnglish:
          'SQL `CUBE(D1, ..., Dk)` computes all $2^k$ subset groupings (at most $\\prod(|D_i|+1)$ rows when all combos exist), whereas `ROLLUP` computes only the $k+1$ left-to-right prefix subtotals.',
        tinyExample: 'With $|D_1|=3$ and $|D_2|=2$ (all pairs present), `GROUP BY CUBE(D1, D2)` returns $(3+1)(2+1) = 12$ rows.',
      },
      {
        term: 'Roll-up & Drill-down',
        symbol: '$\\uparrow$ vs. $\\downarrow$ Hierarchy',
        plainEnglish:
          '**Roll-up** zooms out to coarser summaries by climbing up a concept hierarchy or dropping a dimension; **Drill-down** zooms in to finer detail by stepping down a hierarchy or adding a dimension.',
        tinyExample: 'Moving `(Product, Month, Country)` $\\to$ `(Product, Month, State)` is a **Drill-down**.',
      },
      {
        term: 'Slice, Dice & Pivot',
        plainEnglish:
          '**Slice** fixes **one** dimension to a single value (shrinking 3D $\\to$ 2D); **Dice** filters **two or more** dimensions to carve out a sub-cube; **Pivot** simply rotates row/column axes for display.',
        tinyExample: 'Fixing `Month = "Jan"` is a Slice; filtering `Month IN {"Jan","Feb"} AND Country = "India"` is a Dice.',
      },
      {
        term: 'Min-Max Normalization',
        symbol: '$\\frac{v - \\min_A}{\\max_A - \\min_A}$',
        plainEnglish:
          'Linearly stretches a feature’s observed range $[\\min_A, \\max_A]$ onto a target interval $[\\text{new\\_min}, \\text{new\\_max}]$ (often $[0, 1]$)—simple and bounded, yet vulnerable to one extreme outlier squashing all normal points near $0$.',
        tinyExample: 'Mapping $v = 45$ from $[20, 70]$ onto $[0, 10]$ gives $\\frac{45-20}{70-20} \\times 10 = 5.0$.',
      },
      {
        term: 'Z-Score Standardization',
        symbol: '$z = \\frac{v - \\mu_A}{\\sigma_A}$',
        plainEnglish:
          'Centers a feature at mean $0$ and scales its standard deviation to $1$, measuring how many standard deviations $v$ sits above or below $\\mu_A$—ignoring $\\min_A$ and $\\max_A$ completely and preserving normal spacing much better under outliers.',
        tinyExample: 'With $\\mu = 96{,}000$ and $\\sigma = 21{,}000$, $v = 106{,}000$ gives $z = 10{,}000 / 21{,}000 \\approx 0.476$.',
      },
      {
        term: 'Decimal Scaling & Train-Test Data Leakage',
        symbol: '$v / 10^j$',
        plainEnglish:
          'Decimal scaling shifts the decimal point by $10^j$ so $\\max|v\'| < 1$. For **every** scaler, you must fit $\\min/\\max$ or $\\mu/\\sigma$ strictly on `X_train`—fitting before `train_test_split` leaks test-set statistics into training!',
        tinyExample: 'If values reach $980$, decimal scaling picks $j = 3$ ($980 / 1000 = 0.98 < 1$); always call `.fit(X_train)` only.',
      },
    ],
    generatorId: 'olap-cube-gen',
    concepts: [
      {
        id: 'dw-c2-1',
        title: 'Star vs Snowflake Schemas, Fact Measures & Cuboid Counting',
        subtitle: 'Why "+1 for ALL" turns tricky OLAP lattice and CUBE questions into 5-second products',
        priority: 'core-pillar',
        buildsOn: 'Module 12 3NF/BCNF Normalization & SQL GROUP BY',
        whyStudy:
          'Transactional databases (OLTP) normalize tables into 3NF/BCNF to keep individual inserts and updates anomaly-free, yet summarizing 5 years of revenue across $10$ normalized tables forces massive multi-way joins that choke analytical dashboards. **Data Warehouses (OLAP)** intentionally reshape data into **Star/Snowflake schemas** and pre-aggregated **Data Cubes** so analysts and ML pipelines slice billion-row histories in milliseconds.',
        groundRules: [
          '**Star Schema intentionally denormalizes Dimension tables for 1-hop OLAP read speed:** Storing `City`, `State`, and `Country` inside one flat Dimension table introduces controlled 3NF redundancy—safe in read-only historical warehouses—and eliminates the multi-hop joins required by a normalized **Snowflake Schema**.',
          '**Fact measures obey strict additivity rules:** **Additive** measures (`Revenue`, `Units`) sum across all dimensions; **Semi-additive** measures (`AccountBalance`, `Inventory`) sum across stores/accounts but NEVER across time; **Non-additive** measures (`UnitPrice`, `Margin%`) cannot be summed directly.',
          '**Every dimension carries one extra hidden state called `ALL` (completely rolled up):** Whether counting rows returned by `GROUP BY CUBE(D1, ..., Dk)` ($|D_i|$ values plus `NULL`/`ALL`) or counting cuboids across $L_i$-level concept hierarchies ($L_i$ named levels plus `ALL`), total combinations multiply as $\\prod (x_i + 1)$.',
          '**`CUBE` computes all $2^k$ subset groupings; `ROLLUP` computes only $k + 1$ left-to-right prefixes:** Remembering that `CUBE` covers every subset while `ROLLUP` steps strictly down a prefix chain prevents off-by-one counting mistakes.',
        ],
        toyExample: {
          title: 'Counting Summaries of a 2-Dimension Retail Fact Table',
          scenario:
            'Suppose `Sales_Fact(City, Quarter, Revenue)` tracks $3$ Cities (`Blr, Del, Mum`) and $2$ Quarters (`Q1, Q2`), with all $3 \\times 2 = 6$ combinations present. How many summary rows does SQL `GROUP BY CUBE(City, Quarter)` produce?',
          walkthroughSteps: [
            '1. **Detailed cells (`City, Quarter`):** $3 \\times 2 = 6$ rows.',
            '2. **Roll up Quarter (`City, ALL`):** $3$ city totals.',
            '3. **Roll up City (`ALL, Quarter`):** $2$ quarterly totals.',
            '4. **Grand total (`ALL, ALL`):** $1$ overall store revenue row.',
            '5. **Notice the multiplication trick:** Each dimension effectively has its own values **PLUS 1 extra state (`ALL`)**! So total rows $= (3 + 1) \\times (2 + 1) = 4 \\times 3 = 12$!',
          ],
          ahaMoment:
            'Look how one tiny habit unlocks two full GATE DA 2-mark questions: every `CUBE` row count and every concept-hierarchy cuboid count obeys the exact same **“$+1$ for `ALL`”** rule! Both **GATE DA 2025 Q.46** and **GATE DA 2026 Q.43** solve cleanly in $5$ seconds via $\\prod (\\text{choices}_i + 1)$.',
        },
        theoremAndFormula: {
          statement:
            '1) **Star Schema:** Central Fact table joined in **1 hop** to **denormalized** Dimension tables (faster queries, slight dimension redundancy).\n2) **Snowflake Schema:** Dimension tables are **normalized** into sub-dimensions (saves dimension storage, slower multi-hop joins).\n3) **Measures:** **Additive** (summable across all dims, e.g., `Revenue`), **Semi-additive** (summable across some dims, NOT time, e.g., `AccountBalance`), **Non-additive** (never sum directly, e.g., `UnitPrice`, `Margin%`).\n4) **CUBE & Cuboid Counting:**',
          formulaLatex:
            '\\text{Max CUBE Tuples} = \\prod_{i=1}^{k} (|D_i| + 1), \\qquad \\text{Total Cuboids (with hierarchies)} = \\prod_{i=1}^{k} (L_i + 1)',
          plainEnglishDecoding:
            'Here is why that $+1$ always shows up: in `GROUP BY CUBE(D1, ..., Dk)`, each column $D_i$ can show any of its $|D_i|$ actual values OR `NULL`/`ALL` ($+1$) for its subtotal. Similarly, in a concept hierarchy with $L_i$ named levels (like `City -> State -> Country`, $L_i = 3$), adding the completely rolled-up `ALL` level gives $(L_i + 1)$ choices per dimension.',
          workedMiniExamples: [
            {
              prompt:
                '(GATE DA 2025 Q.46) Compute the number of tuples returned by `GROUP BY CUBE(D1, D2)` when `D1` has $3$ distinct values, `D2` has $2$ distinct values, and every `(D1, D2)` pair exists.',
              solution:
                'Plug directly into the `+1` rule: $(3 + 1)(2 + 1) = 4 \\times 3 = 12$ tuples.',
            },
            {
              prompt:
                '(GATE DA 2026 Q.43) A data warehouse has $3$ dimensions, and each dimension has a $3$-level concept hierarchy. How many **total data cuboids** can be formed?',
              solution:
                'Each dimension has $3$ hierarchy levels plus the top `ALL` apex = $3 + 1 = 4$ choices. Across $3$ independent dimensions: $4 \\times 4 \\times 4 = 4^3 = 64$ cuboids (if no hierarchies exist, $L_i = 1 \\implies 2^k$).',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Three dimensions with 3-level concept hierarchies produce $3^3 = 27$ cuboids.',
            reality:
              'Wrong! You forgot the **`ALL`** (completely aggregated) level on each dimension. A $3$-level hierarchy gives $3 + 1 = 4$ states per dimension, so $4^3 = 64$ cuboids!',
            counterExample:
              'Even with $1$ dimension having a $1$-level hierarchy (`City`), you still get $2$ cuboids (`City` and `ALL`), NOT $1^1 = 1$.',
          },
          {
            myth: 'Snowflake schemas are always faster than Star schemas because normalization removes duplicate data.',
            reality:
              'In OLAP, **Star schemas** are faster because each dimension sits in a single table (**1 join hop**). Snowflaking splits dimensions into sub-tables, adding join overhead.',
            counterExample:
              'Querying revenue by `Country` in a Star schema joins `Fact -> Dim_Store` ($1$ join); in a Snowflake schema it joins `Fact -> Dim_Store -> Dim_City -> Dim_State -> Dim_Country` ($4$ joins).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5: DBMS',
            targetWeek: 6,
            topic: 'SQL `GROUP BY CUBE` & `ROLLUP`',
            whyItMatters:
              '`ROLLUP(A, B, C)` produces only $k+1 = 4$ prefix groupings (`(A,B,C), (A,B), (A), ()`), whereas `CUBE(A, B, C)` produces all $2^3 = 8$ cuboids!',
            pyqProof: 'GATE DA 2025 · Q.46 & 2026 · Q.43',
          },
        ],
      },
      {
        id: 'dw-c2-2',
        title: 'OLAP Operations: Roll-up, Drill-down, Slice, Dice & Pivot',
        subtitle: 'Navigating granularity and cube dimensionality visually',
        priority: 'high-yield',
        buildsOn: 'Step 2.1 Concept hierarchies & multidimensional cubes',
        whyStudy:
          'Once business data sits inside a multidimensional cube—such as retail sales indexed by `(Product Type, Month, Country)`—analysts need standardized operations to zoom from country totals down into individual states, isolate a single month, or carve out a target region. Every Pandas `groupby`, BI dashboard drill click, and SQL `CUBE` filter executes one of five canonical **OLAP operations**.',
        groundRules: [
          '**Roll-up zooms OUT to coarser summaries:** Roll-up aggregates data either by climbing **up** a concept hierarchy (`State` $\\to$ `Country`, `Month` $\\to$ `Quarter`) or by dropping a dimension completely (rolling it into `ALL`).',
          '**Drill-down zooms IN to finer detail:** Drill-down disaggregates data either by stepping **down** a concept hierarchy (`Country` $\\to$ `State`) or by adding a new dimension—crucially, stepping down a hierarchy keeps the dimension count unchanged!',
          '**Slice locks EXACTLY ONE dimension to a single value:** Selecting `Month = "Jan"` cuts a thin cross-section out of the cube, always reducing dimensionality by $1$ (e.g., 3D $\\to$ 2D).',
          '**Dice filters TWO OR MORE dimensions; Pivot only rotates display axes:** Filtering multiple dimensions simultaneously carves out a smaller sub-cube (**Dice**), whereas swapping rows and columns for readability without changing granularity or data values is a **Pivot**.',
        ],
        sandboxId: 'btree-olap-lab',
        toyExample: {
          title: 'Steering a 3D Cube: `(Product Type, Month, Country)`',
          scenario:
            'Picture a 3D Rubik’s cube of sales numbers indexed by `Product Type` (`Laptop, Phone`), `Month` (`Jan, Feb, Mar`), and `Country` (`India, USA`). Watch what each OLAP command does to the cube:',
          walkthroughSteps: [
            '1. **Drill-down:** Replace `Country` with `State` $\\to$ `(Product Type, Month, State)`. You zoomed **down** the location hierarchy into finer detail!',
            '2. **Roll-up:** Climb `Month` up to `Quarter` (or drop `Country` to `ALL`). You zoomed **out** to a coarser summary.',
            '3. **Slice:** Fix **one** dimension to a single value, e.g., `Month = "Jan"`. A 3D cube becomes a 2D flat sheet `(Product Type, Country)`.',
            '4. **Dice:** Restrict **two or more** dimensions to subsets/ranges, e.g., `Product Type IN {"Laptop"} AND Month IN {"Jan", "Feb"} AND Country = "India"`. You carved out a smaller **sub-cube**.',
            '5. **Pivot (Rotate):** Swap rows and columns—for example, viewing `(Month as Rows, Country as Columns)` instead of `(Country as Rows, Month as Columns)`—without changing the numbers.',
          ],
          ahaMoment:
            'Keep **Drill-down** and **Dice** cleanly separated in your mind: Drill-down zooms in to **finer granularity** (like stepping `Country -> State` or adding a brand-new dimension), whereas Dice simply filters subsets inside the dimensions you already have.',
        },
        theoremAndFormula: {
          statement:
            '- **Roll-up (Drill-up):** Aggregates data by climbing UP a concept hierarchy (`State -> Country`) or reducing dimensions.\n- **Drill-down:** Disaggregates data by stepping DOWN a concept hierarchy (`Country -> State`) or adding a new dimension.\n- **Slice:** Performs a selection on **one** dimension, reducing cube dimensionality by $1$.\n- **Dice:** Defines a sub-cube by selecting values on **two or more** dimensions.',
          formulaLatex:
            '\\text{Roll-up}: \\text{Coarser } (\\uparrow \\text{Hierarchy}) \\quad | \\quad \\text{Drill-down}: \\text{Finer } (\\downarrow \\text{Hierarchy}) \\quad | \\quad \\text{Slice}: \\text{dim} \\to \\text{dim}-1',
          plainEnglishDecoding:
            'When a question shows a “before” and “after” cube, check two quick clues: did an attribute step **down** to finer detail (`Country` $\\to$ `State`) or did a new dimension appear? That is **Drill-down**. Did an attribute climb **up** (`Month` $\\to$ `Year`) or disappear into a summary? That is **Roll-up**.',
          workedMiniExamples: [
            {
              prompt:
                '(GATE DA 2026 Q.18) Which OLAP operation transforms a data cube from `(Product Type, Month, Country)` to `(Product Type, Month, State)`?',
              solution:
                'Moving from `Country` to `State` steps **down** the location concept hierarchy to finer granularity $\\implies$ **Drill-down**.',
            },
            {
              prompt:
                'Which operation maps `(Product, Month, Country)` to a 2D view `(Product, Country)` for `Month = "March"` only?',
              solution:
                'Fixing exactly **one** dimension (`Month = "March"`) drops the dimensionality from 3D to 2D $\\implies$ **Slice**.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Drill-down ALWAYS increases the number of dimensions in the cube.',
            reality:
              'False! Stepping down a concept hierarchy (`Country -> State`) keeps the dimension count at $3$ while increasing detail—this is still a classic **Drill-down** (GATE DA 2026 Q.18!).',
            counterExample:
              '`(Product, Month, Country)` $\\to$ `(Product, Month, State)` still has $3$ dimensions, yet is definitively Drill-down.',
          },
          {
            myth: 'Filtering `Country = "India" AND Month IN {"Jan", "Feb"}` is a Slice.',
            reality:
              'Because **two** dimensions are constrained simultaneously, it forms a sub-cube, making it a **Dice**—not a Slice.',
            counterExample:
              'Slice fixes **exactly 1** dimension (`Month = "Jan"`).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA / Python',
            targetWeek: 4,
            topic: 'Pandas `groupby`, `pivot_table` & Tensor Slicing',
            whyItMatters:
              'Every Pandas `df.groupby(["State"])` vs `df[df["Month"]=="Jan"]` EDA workflow is literally executing OLAP Roll-up/Drill-down/Slice operations in Python.',
            pyqProof: 'GATE DA 2026 · Q.18 (1M MCQ)',
          },
        ],
      },
      {
        id: 'dw-c2-3',
        title: 'Feature Scaling (Min-Max, Z-Score, Decimal) & Outlier / Leakage Traps',
        subtitle: 'Why unscaled features break k-NN/SVM/PCA—and why fitting a scaler before splitting ruins evaluation',
        priority: 'core-pillar',
        buildsOn: 'Module 2 Sample Mean & Standard Deviation',
        whyStudy:
          'Raw warehouse tables mix columns in wildly different physical units—`Age` spans $[18, 70]$ while `Income` spans $[10^4, 10^8]$. Feed raw numbers into $k$-NN, SVM, Ridge Regression, or PCA and `Income` completely dominates every Euclidean distance, gradient step, and variance direction! **Feature scaling** puts all attributes on comparable numerical footing—as long as you dodge outlier compression and train-test data leakage.',
        groundRules: [
          '**Each scaler depends strictly on its own summary statistics:** **Z-Score** ($z = (v - \\mu_A) / \\sigma_A$) uses ONLY mean $\\mu_A$ and standard deviation $\\sigma_A$ (ignoring $\\min/\\max$); **Min-Max** uses ONLY $\\min_A$ and $\\max_A$; **Decimal Scaling** divides by $10^j$ using the smallest integer $j$ so $\\max|v\'| < 1$.',
          '**Min-Max crushes normal points under extreme outliers; Z-Score stays unbounded:** Pinning a single billionaire to $1.0$ inside $[0, 1]$ squashes every regular applicant near $0.0$, whereas Z-Score keeps normal spacing far cleaner.',
          '**Always fit scaling parameters strictly on `X_train` AFTER splitting:** Computing $\\mu, \\sigma$ or $\\min, \\max$ across the entire dataset before `train_test_split` leaks future test-set statistics into training (**Data Leakage**)—always call `.fit(X_train)` and then `.transform(X_test)`.',
          '**Model geometry determines whether scaling matters:** Distance ($k$-NN, $k$-Means), margin (SVM), norm-penalized (Ridge/Lasso), gradient-based (MLP/Logistic), and variance (PCA) models require scaling; axis-aligned **Decision Trees** split on single-feature thresholds ($x_j \\le t$) and are invariant to strictly monotonic scaling.',
        ],
        toyExample: {
          title: 'Why Income Crushes Age in Euclidean Distance',
          scenario:
            'Consider two applicants: `A = (Age: 22, Income: 30,000)` and `B = (Age: 35, Income: 60,000)`. Compute their Euclidean distance before and after Min-Max scaling (`Age` in $[20, 60]$, `Income` in $[20{,}000, 100{,}000]$).',
          walkthroughSteps: [
            '1. **Raw Euclidean distance:** $\\sqrt{(35-22)^2 + (60000-30000)^2} = \\sqrt{169 + 900{,}000{,}000} \\approx 30{,}000.003$. `Age` contributed $0.00002\\%$—it was effectively deleted!',
            '2. **Min-Max scale to $[0, 1]$:** `Age`: $(22-20)/40 = 0.05$ and $(35-20)/40 = 0.375$ ($\\Delta = 0.325$). `Income`: $(30k-20k)/80k = 0.125$ and $(60k-20k)/80k = 0.500$ ($\\Delta = 0.375$).',
            '3. **Scaled distance:** $\\sqrt{0.325^2 + 0.375^2} \\approx 0.496$. Now `Age` and `Income` carry balanced weight!',
            '4. **Now inject ONE outlier (`Income = 10,000,000`):** Under Min-Max, `30,000` becomes $0.001$ and `60,000` becomes $0.004$—every normal person gets crushed against zero!',
          ],
          ahaMoment:
            'Feature scaling stops big-unit columns like `Income` from drowning out `Age` in distance and gradient models—yet stay alert to two real-world traps: Min-Max gets crushed flat by a single extreme outlier, and fitting $\\min/\\max$ or $\\mu/\\sigma$ *before* splitting train and test silently leaks test data!',
        },
        theoremAndFormula: {
          statement:
            'Let feature $A$ have observed values with $\\min_A, \\max_A$, mean $\\mu_A$, and standard deviation $\\sigma_A$ (computed **strictly on the training split**):\n1) **Min-Max Normalization** onto $[\\text{new\\_min}, \\text{new\\_max}]$:\n2) **Z-Score Standardization** (zero mean, unit variance):\n3) **Decimal Scaling:** divide by $10^j$ where $j$ is the smallest integer such that $\\max(|v\'|) < 1$.',
          formulaLatex:
            'v\'_{\\text{minmax}} = \\frac{v - \\min_A}{\\max_A - \\min_A}(\\text{new\\_max} - \\text{new\\_min}) + \\text{new\\_min}, \\qquad v\'_{z} = \\frac{v - \\mu_A}{\\sigma_A}, \\qquad v\'_{\\text{dec}} = \\frac{v}{10^j}',
          plainEnglishDecoding:
            'Think of **Z-Score** as asking: *“How many standard deviations is $v$ sitting above or below the mean?”*—so it uses ONLY $\\mu_A$ and $\\sigma_A$, never $\\min_A$ or $\\max_A$. Meanwhile **Min-Max** simply takes where $v$ stands proportionally between $\\min_A$ and $\\max_A$ and stretches that exact fraction onto $[\\text{new\\_min}, \\text{new\\_max}]$.',
          workedMiniExamples: [
            {
              prompt:
                '(GATE DA 2024 Q.27 Pattern) Feature `income` has $\\min = 12{,}000$, $\\max = 180{,}000$, $\\mu = 96{,}000$, and $\\sigma = 21{,}000$. What is the **z-score** normalized value of `106,000`?',
              solution:
                'Ignore `min` and `max` (distractors!): $z = \\frac{106{,}000 - 96{,}000}{21{,}000} = \\frac{10{,}000}{21{,}000} = \\frac{10}{21} \\approx 0.476$.',
            },
            {
              prompt:
                'Map `v = 45` with $\\min = 20, \\max = 70$ onto $[0, 10]$ using Min-Max scaling.',
              solution:
                '$v\' = \\frac{45 - 20}{70 - 20}(10 - 0) + 0 = \\frac{25}{50} \\times 10 = 5.0$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Min-Max normalization handles extreme outliers more gracefully than Z-Score because it bounds values inside $[0, 1]$.',
            reality:
              'The opposite is true! Bounding everything inside $[0, 1]$ forces one huge outlier to sit at $1.0$ and **squashes all normal points** into a tiny sliver near $0.0$. Z-Score leaves values unbounded so normal spacing is much better preserved (though $\\mu, \\sigma$ still shift).',
            counterExample:
              'Values `{10, 20, 30, 10000}` map under Min-Max to `{0.000, 0.001, 0.002, 1.000}`—the gap between $10$ and $30$ collapses to $0.002$!',
          },
          {
            myth: 'Running `StandardScaler().fit_transform(X)` on the full dataset before `train_test_split` is fine because scaling is unsupervised.',
            reality:
              'Classic **Data Leakage**! Computing $\\mu, \\sigma$ (or $\\min, \\max$) on the combined dataset leaks test-set distribution info into training. Always `fit` on `X_train` ONLY, then `.transform(X_test)`!',
            counterExample:
              'If a test spike raises $\\max_A$, pre-splitting Min-Max already shrinks training features using future test knowledge.',
          },
          {
            myth: 'Every ML model—including Decision Trees—performs poorly without feature scaling.',
            reality:
              'Axis-aligned **Decision Trees** (and Random Forests) split on threshold inequalities ($x_j \\le t$), so they are **invariant** to strictly monotonic scaling! Distance, margin, norm-penalized, and variance models ($k$-NN, $k$-Means, SVM, Ridge, PCA, MLP) DO depend heavily on scaling.',
            counterExample:
              'Multiplying `Age` by $1000$ leaves Gini/Entropy splits identical at $1000t$, but completely alters $k$-NN distances and PCA eigenvectors!',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'k-NN, SVM Margins, Ridge Penalty & PCA Variance Domination',
            whyItMatters:
              'PCA maximizes variance $u^T \\Sigma u$: if one column is measured in millimeters ($\\sigma^2 = 10^6$) and another in meters ($\\sigma^2 = 1$), PC1 blindly locks onto the millimeter column unless you standardize first!',
            pyqProof: 'GATE DA 2024 · Q.27 (1M MCQ) & 2025 · Q.60 (PCA)',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'dw-ht3',
        title: 'The "+1 for ALL" Cuboid & CUBE Lattice Shortcut',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2025 · Q.46 (2M MCQ)', 'GATE DA 2026 · Q.43 (2M MCQ)'],
        problemStatement:
          'How many total data cuboids exist for $3$ dimensions each having a $3$-level concept hierarchy? And how many rows does `GROUP BY CUBE(D1, D2)` return when $|D_1| = 3, |D_2| = 2$ (all pairs present)?',
        triggerCue:
          'Keywords: **`GROUP BY CUBE`** tuple count, OR **total data cuboids** across $k$ dimensions with **$L$-level concept hierarchies**.',
        bruteForceTrap:
          'Enumerating `(L1, L2, L3)`, `(L1, L2, ALL)`, ... by hand—guaranteed to miscount on 3 dimensions ($64$ cuboids!) or drop the apex `(ALL, ALL, ALL)` cuboid.',
        mentalShift:
          'Every dimension has a hidden extra state: **`ALL`** (aggregated out). Simply add **$+1$** to each dimension’s cardinality (for `CUBE` rows) or hierarchy depth $L_i$ (for cuboids), and multiply!',
        steps: [
          {
            label: 'Step 1 — Identify what is being counted',
            detail:
              'Are we counting **summary rows** (`CUBE` tuples using $|D_i|$) or **cuboid views** (lattice nodes using hierarchy depth $L_i$)?',
          },
          {
            label: 'Step 2 — Add +1 for the ALL state on every dimension',
            detail:
              'For `CUBE(D1, D2)`: $(3+1)(2+1) = 12$ rows. For 3 dimensions with 3-level hierarchies: $(3+1)^3 = 64$ cuboids.',
          },
          {
            label: 'Step 3 — Watch for empty combinations / ROLLUP variants',
            detail:
              'If the question asks for `ROLLUP(D1, ..., Dk)` cuboids instead of `CUBE`, only prefixes exist: $\\sum$ choices $= 1 + \\sum_{i=1}^k L_i$ (or $k+1$ without hierarchies).',
          },
        ],
        lockInTakeaway:
          'Never multiply $L_1 L_2 L_3$ without adding $+1$ to every factor! `CUBE` and concept-hierarchy cuboid counts ALWAYS follow $\\prod (x_i + 1)$.',
      },
      {
        id: 'dw-ht4',
        title: 'The "Spot-the-Decoy + Check-Leakage" Preprocessing Filter',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.27 (1M MCQ)'],
        problemStatement:
          'You are given `min = 12,000`, `max = 180,000`, `mean = 96,000`, `SD = 21,000` for an `income` attribute and asked for its z-score at `106,000`—or asked in an ML MSQ how scaling affects outliers, Decision Trees, PCA, and train/test splits.',
        triggerCue:
          'Question dumps all 4 summary stats (`min, max, mean, SD`) at once, OR asks about scaling inside a train/test ML pipeline.',
        bruteForceTrap:
          'Averaging `(min + max)/2` instead of using `mean`, OR treating all ML algorithms identically (forgetting Decision Trees ignore scaling while PCA/k-NN/SVM require it).',
        mentalShift:
          'Run a 3-point checklist: (1) **Formula isolation** (Z-score uses ONLY $\\mu, \\sigma$; Min-Max uses ONLY $\\min, \\max$), (2) **Outlier check** (Min-Max crushes normal data), (3) **Leakage & Model check** (fit on Train only; scale-sensitive = k-NN/SVM/Ridge/PCA; scale-invariant = Decision Trees).',
        steps: [
          {
            label: 'Step 1 — Lock onto the exact formula inputs',
            detail:
              'For Z-score of `106,000`, cross out `min` and `max`: $(106000 - 96000)/21000 = 10/21 \\approx 0.476$.',
          },
          {
            label: 'Step 2 — Check train/test boundary',
            detail:
              'Any pipeline computing $\\mu, \\sigma$ or $\\min, \\max$ *before* `train_test_split` is leaking test information.',
          },
          {
            label: 'Step 3 — Split models by geometric sensitivity',
            detail:
              'Euclidean distances ($k$-NN, $k$-Means), margins (SVM), $L_2$ penalties (Ridge), and covariance (PCA) need scaling; axis-aligned tree splits do not.',
          },
        ],
        lockInTakeaway:
          'Z-score ignores min/max; Min-Max squashes normal points under outliers; Scalers fit ONLY on train; Decision Trees don’t care!',
      },
    ],
    arsenalCards: [
      {
        id: 'dw-a2-1',
        badge: 'Cube & Lattice',
        whenYouSpot: '`GROUP BY CUBE` tuple count OR total cuboids with $L_i$-level hierarchies',
        directWeaponLatex: '\\text{CUBE Tuples} \\le \\prod_{i=1}^k (|D_i|+1), \\qquad \\text{Cuboids} = \\prod_{i=1}^k (L_i + 1)',
        instantRule:
          'Always add $+1$ per dimension for the `ALL` aggregation before multiplying.',
        tenSecondExample:
          '3 dims $\\times$ 3 levels $\\implies (3+1)^3 = 64$ cuboids; `CUBE(3 vals, 2 vals)` $\\implies 4 \\times 3 = 12$ rows.',
        oneFatalTrap:
          'Computing $3^3 = 27$ instead of $4^3 = 64$ by forgetting the `ALL` level.',
      },
      {
        id: 'dw-a2-2',
        badge: 'OLAP Compass',
        whenYouSpot: 'Cube transformation between dimension lists or hierarchy levels',
        directWeaponLatex: '\\downarrow \\text{Hierarchy} = \\text{Drill-down}, \\quad \\uparrow \\text{Hierarchy} = \\text{Roll-up}, \\quad 1\\text{ dim fixed} = \\text{Slice}',
        instantRule:
          'Drill-down adds detail (finer level or extra dim); Roll-up summarizes; Slice locks 1 dim; Dice subsets 2+ dims.',
        tenSecondExample:
          '`(Product, Month, Country)` $\\to$ `(Product, Month, State)` = **Drill-down** (GATE 2026 Q.18).',
        oneFatalTrap:
          'Confusing a 2-dimension subset filter (Dice) with a single-dimension Slice.',
      },
      {
        id: 'dw-a2-3',
        badge: 'Scaling & Leakage',
        whenYouSpot: 'Min-Max / Z-Score calculation or ML preprocessing pipeline MSQ',
        directWeaponLatex: 'z = \\frac{x - \\mu}{\\sigma}, \\qquad x_{\\text{mm}} = \\frac{x - \\min}{\\max - \\min}(b-a)+a',
        instantRule:
          'Fit scaling params on `X_train` ONLY; Z-score preserves relative spacing better than Min-Max when outliers exist; Trees are scale-invariant.',
        tenSecondExample:
          'Given min, max, mean $96k$, SD $21k$: z-score of $106k = (106k-96k)/21k \\approx 0.476$.',
        oneFatalTrap:
          'Fitting `StandardScaler` on the full dataset before splitting (causes Data Leakage!).',
      },
    ],
    questions: [
      {
        id: 'm13-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Min-Max Rescaling',
        marks: 1,
        type: 'NAT',
        stem: 'An attribute `score` has minimum value $20$ and maximum value $70$ in the training set. Using **Min-Max normalization**, transform the value $v = 45$ onto the new range $[0, 10]$.',
        natAnswer: { min: 5, max: 5, exactDisplay: '5' },
        triggerHint: 'Compute the fraction $(v - \\min) / (\\max - \\min)$ and stretch it to $[0, 10]$.',
        intuitiveSolution: [
          'Fraction along original span: $\\frac{45 - 20}{70 - 20} = \\frac{25}{50} = 0.5$.',
          'Map onto $[0, 10]$: $0.5 \\times (10 - 0) + 0 = 5$.',
        ],
        directShortcutUsed: '$v\' = \\frac{v - \\min}{\\max - \\min}(\\text{new\\_max} - \\text{new\\_min}) + \\text{new\\_min}$',
      },
      {
        id: 'm13-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.27 (Exact Pattern)',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem: 'In a dataset, the attribute `income` has minimum $12{,}000$, maximum $180{,}000$, mean $96{,}000$, and standard deviation $21{,}000$. Using **z-score normalization**, what is the normalized value for an income of $106{,}000$?',
        options: [
          {
            id: 'A',
            text: '$0.476$',
            whyTrueOrFalse: 'Correct! $z = (106{,}000 - 96{,}000) / 21{,}000 = 10/21 \\approx 0.476$.',
          },
          {
            id: 'B',
            text: '$0.560$',
            whyTrueOrFalse: 'Incorrect—this uses Min-Max scaling $(106k-12k)/(180k-12k) \\approx 0.560$, falling for the min/max distractors!',
          },
          {
            id: 'C',
            text: '$-0.476$',
            whyTrueOrFalse: 'Incorrect—$106{,}000$ is ABOVE the mean $96{,}000$, so the z-score must be positive.',
          },
          {
            id: 'D',
            text: '$0.104$',
            whyTrueOrFalse: 'Incorrect—dividing by the mean ($10k/96k$) instead of the standard deviation.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Cross out `minimum` and `maximum`—z-score uses only mean and SD.',
        intuitiveSolution: [
          'Z-score formula: $z = \\frac{v - \\mu}{\\sigma}$.',
          'Substitute $v = 106{,}000$, $\\mu = 96{,}000$, $\\sigma = 21{,}000$: $z = \\frac{10{,}000}{21{,}000} = \\frac{10}{21} \\approx 0.476$.',
          'Note that `min = 12,000` and `max = 180,000` are distractors testing whether you distinguish z-score from Min-Max.',
        ],
        directShortcutUsed: '$z = (v - \\mu)/\\sigma$ (ignore min & max decoys)',
      },
      {
        id: 'm13-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.46 (Exact Pattern)',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'Suppose relation `Sales(D1, D2, Amount)` has $3$ distinct values for `D1` and $2$ distinct values for `D2`, and every `(D1, D2)` combination appears in the table. How many tuples are returned by:\n```sql\nSELECT D1, D2, SUM(Amount)\nFROM Sales\nGROUP BY CUBE(D1, D2);\n```',
        options: [
          {
            id: 'A',
            text: '$6$',
            whyTrueOrFalse: 'Incorrect—$3 \\times 2 = 6$ counts only the base `(D1, D2)` cells (`GROUP BY D1, D2`), missing all sub-totals.',
          },
          {
            id: 'B',
            text: '$9$',
            whyTrueOrFalse: 'Incorrect—$9$ corresponds to `ROLLUP(D1, D2)` ($6$ base + $3$ `D1` subtotals + $1$ grand total would be $10$, not $9$).',
          },
          {
            id: 'C',
            text: '$11$',
            whyTrueOrFalse: 'Incorrect—misses the grand total `(NULL, NULL)` row.',
          },
          {
            id: 'D',
            text: '$12$',
            whyTrueOrFalse: 'Correct! $(3 + 1)(2 + 1) = 12$ tuples ($6$ base + $3$ `D1` totals + $2$ `D2` totals + $1$ grand total).',
          },
        ],
        correctOptions: ['D'],
        triggerHint: 'Each `CUBE` column takes its $|D_i|$ values PLUS `NULL`/`ALL`.',
        intuitiveSolution: [
          '`CUBE(D1, D2)` generates four grouping sets: `(D1, D2)` ($3\\times 2 = 6$ rows), `(D1)` ($3$ rows), `(D2)` ($2$ rows), and `()` ($1$ grand-total row).',
          'Total $= 6 + 3 + 2 + 1 = 12$, or directly $(3+1)(2+1) = 12$.',
        ],
        directShortcutUsed: '$\\prod_{i=1}^k (|D_i| + 1) = (3+1)(2+1) = 12$',
      },
      {
        id: 'm13-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.18 (Exact Pattern)',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem: 'An OLAP data cube originally summarized by dimensions `(Product Type, Month, Country)` is transformed into `(Product Type, Month, State)`. Which OLAP operation was performed?',
        options: [
          {
            id: 'A',
            text: 'Roll-up',
            whyTrueOrFalse: 'Incorrect—Roll-up moves UP to coarser granularity (`State` $\\to$ `Country`), the reverse direction.',
          },
          {
            id: 'B',
            text: 'Drill-down',
            whyTrueOrFalse: 'Correct! Moving from `Country` to `State` steps down the geography concept hierarchy into finer detail.',
          },
          {
            id: 'C',
            text: 'Slice',
            whyTrueOrFalse: 'Incorrect—Slice fixes one dimension to a single value (reducing 3D to 2D), without changing hierarchy level.',
          },
          {
            id: 'D',
            text: 'Pivot',
            whyTrueOrFalse: 'Incorrect—Pivot only rotates existing axes for display.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Compare granularity of `Country` vs `State`: finer detail = Drill-down.',
        intuitiveSolution: [
          '`Product Type` and `Month` remain unchanged.',
          'The third dimension moved from `Country` (coarse) to `State` (finer) along the location concept hierarchy.',
          'Stepping down a concept hierarchy is **Drill-down**.',
        ],
        directShortcutUsed: '$\\text{Coarse } (\\text{Country}) \\to \\text{Fine } (\\text{State}) \\implies \\text{Drill-down}$',
      },
      {
        id: 'm13-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.43 (Exact Pattern)',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem: 'A data warehouse cube has $3$ dimensions, and **each** dimension has a $3$-level concept hierarchy. What is the **total number of data cuboids** that can be formed in this cube?',
        options: [
          {
            id: 'A',
            text: '$2^3 = 8$',
            whyTrueOrFalse: 'Incorrect—$2^3$ applies only when dimensions have $1$ level (no multi-level hierarchies).',
          },
          {
            id: 'B',
            text: '$3^3 = 27$',
            whyTrueOrFalse: 'Incorrect—forgets the `ALL` (apex) aggregation level on each dimension.',
          },
          {
            id: 'C',
            text: '$4^3 = 64$',
            whyTrueOrFalse: 'Correct! Each dimension has $3$ hierarchy levels $+ 1$ (`ALL`) $= 4$ choices, giving $4 \\times 4 \\times 4 = 64$ cuboids.',
          },
          {
            id: 'D',
            text: '$3 \\times 4 = 12$',
            whyTrueOrFalse: 'Incorrect—combining independent dimensions multiplies choices ($4^3$), rather than adding or multiplying $3 \\times 4$.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Every $L$-level hierarchy gives $L + 1$ choices per dimension (including `ALL`).',
        intuitiveSolution: [
          'For each dimension with $L_i = 3$ levels, a cuboid can select Level 1, Level 2, Level 3, or `ALL` ($3 + 1 = 4$ options).',
          'Across $3$ independent dimensions, total cuboids $= \\prod_{i=1}^3 (L_i + 1) = 4 \\times 4 \\times 4 = 64$.',
        ],
        directShortcutUsed: '$\\prod_{i=1}^k (L_i + 1) = (3 + 1)^3 = 64$',
      },
      {
        id: 'm13-c2-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style MSQ · Scaling, Outliers & Data Leakage',
        marks: 2,
        type: 'MSQ',
        stem: 'A data scientist builds a classification pipeline with continuous features measured in vastly different units (e.g., `Age` in $[18, 70]$ and `NetWorth` in $[10^3, 10^8]$). Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: 'Fitting a `StandardScaler` (computing $\\mu$ and $\\sigma$) on the full dataset BEFORE performing a train/test split introduces **data leakage**.',
            whyTrueOrFalse:
              'True! Test-set values influence $\\mu$ and $\\sigma$, leaking future distribution statistics into training.',
          },
          {
            id: 'B',
            text: 'Without Z-score standardization, a standard CART **Decision Tree** cannot find valid split thresholds on `Age` because `NetWorth` has larger magnitude.',
            whyTrueOrFalse:
              'False! Decision Trees split each feature independently using axis-aligned thresholds ($x_j \\le t$), so they are invariant to monotonic feature scaling.',
          },
          {
            id: 'C',
            text: 'Applying **PCA** without standardizing features causes the first principal component to align heavily with `NetWorth` due to its huge numerical variance.',
            whyTrueOrFalse:
              'True! PCA maximizes projected variance $u^T \\Sigma u$, so raw unstandardized units with massive variance dominate PC1.',
          },
          {
            id: 'D',
            text: 'Adding one extreme billionaire outlier distorts normal applicant spacing MORE severely under **Z-score** normalization than under **Min-Max** scaling to $[0, 1]$.',
            whyTrueOrFalse:
              'False! Min-Max forces the outlier to $1.0$ and crushes every normal point into a tiny interval near $0.0$; Z-score preserves relative spacing among normal points far better.',
          },
        ],
        correctOptions: ['A', 'C'],
        triggerHint: 'Test all 3 pillars: Train-only fit, Tree invariance vs PCA variance domination, and Min-Max outlier crushing.',
        intuitiveSolution: [
          'A is true: Normalization parameters ($\\mu, \\sigma, \\min, \\max$) must be learned strictly from `X_train` and applied to `X_test`.',
          'B is false: Decision Trees inspect one coordinate at a time via rank/threshold tests, so multiplying a column by $10^6$ does not change Gini/Entropy splits.',
          'C is true: Because PCA maximizes variance, `NetWorth` (variance $\\sim 10^{15}$) completely overshadows `Age` (variance $\\sim 200$) unless standardized.',
          'D is false: Min-Max squashes all regular observations into $[0, \\varepsilon]$ when one extreme outlier sits at $1.0$.',
        ],
        directShortcutUsed: 'Fit on Train only; PCA/k-NN/SVM need scaling; Trees invariant; Min-Max crushed by outliers',
      },
    ],
  },
]

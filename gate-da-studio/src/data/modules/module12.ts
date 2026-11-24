import type { ChapterData } from '../../types/curriculum'

export const MODULE_12_CHAPTERS: ChapterData[] = [
  // ============================================================================
  // CHAPTER 1: ER Modeling, Weak Entities & Minimum Table Merging
  // ============================================================================
  {
    id: 'dbms-ch1',
    number: 1,
    title: 'ER Modeling, Weak Entities & Minimum Table Merging',
    shortTitle: 'ER Modeling & Table Merging',
    estimatedHours: 4,
    dayLabel: 'Week 5 · Day 1',
    tagline:
      'Let’s turn ER boxes, diamonds, and participation lines into the exact minimum number of 3NF relational tables—and lock down the 4-operation Foreign Key safety matrix that GATE DA tested in both 2025 and 2026.',
    syllabusMapping: [
      'Entity-Relationship (ER) model',
      'Relational model: Primary keys, Foreign keys & Referential integrity constraints',
      'ER-to-Relational table conversion & minimum relation counts in 3NF',
    ],
    whatIsImportant: [
      'Cardinality & participation merging rules: 1:1 (total both sides -> 1 table; partial -> 2), 1:N (always 2 tables, merge into N-side), M:N (always 3 tables, even with total participation!)',
      'Multi-valued attributes (add 1 extra table each) vs. Composite attributes (0 extra tables—just flatten columns)',
      'Weak entities: PK = Owner_PK + Discriminator; identifying relationship ALWAYS merges into the weak entity table (total 2 tables)',
      'Foreign key referential integrity (GATE DA 2025 Q.56 & 2026 Q.26): Insert into Parent & Delete from Child NEVER violate; child FK can be NULL unless NOT NULL is declared',
    ],
    whatIsNotImportant: [
      'Extended ER specialization/generalization subclasses (disjoint vs overlapping ISA hierarchies) — rarely numericalized in GATE DA',
      'Drawing notation trivia (Chen vs Crow’s Foot vs UML styling nuances)',
      'Transactions, ACID schedules, 2PL deadlocks & recovery logs — NOT in GATE DA syllabus (0 marks!)',
    ],
    inboundStream:
      'Set theory & mappings from Calculus Ch.1 + Propositional/Predicate structure from Logic (Module 11).',
    outboundStream: [
      'Ch.2 Functional Dependencies & 3NF/BCNF decomposition checks',
      'Ch.4 SQL DDL constraints (PRIMARY KEY, FOREIGN KEY, NOT NULL)',
      'Module 13 Data Warehousing Star & Snowflake schemas (Fact = M:N bridge + measures)',
    ],
    glossary: [
      {
        term: 'Entity & Strong Entity Set',
        plainEnglish:
          'A real-world object you want to store data about (like a Student or Doctor); a strong entity has its own unique primary key and stands on its own without borrowing another table’s key.',
        tinyExample: '`Student(SID, Name)` is a strong entity because `SID` uniquely identifies every student by itself.',
      },
      {
        term: 'Simple, Composite & Multi-Valued Attributes',
        plainEnglish:
          'Simple attributes hold one atomic value (`Age`), composite attributes break into flat sub-columns (`Name` $\\to$ `First, Last`—0 extra tables!), while multi-valued attributes hold a set of values (`PhoneNumbers`) and require $+1$ extra table.',
        tinyExample: '`Address(Street, City)` flattens into $2$ columns, whereas `PhoneNumbers` spawns `PersonPhone(Pid, Phone)`.',
      },
      {
        term: 'Derived Attribute',
        plainEnglish:
          'An attribute whose value can be computed on the fly from other stored attributes—so it adds $0$ extra tables (and usually isn’t stored as a physical column).',
        tinyExample: '`Age` derived from `DateOfBirth` needs $0$ extra tables.',
      },
      {
        term: 'Relationship & Cardinality Ratio',
        symbol: '$1:1,\\; 1:N,\\; M:N$',
        plainEnglish:
          'A diamond linking entities that states the maximum number of links each row can have—deciding whether the diamond merges into an entity table ($1:1$ or $1:N$) or must become its own bridge table ($M:N$).',
        tinyExample: 'Faculty-to-Student advising is $1:N$ (merges into `Student`); Student-to-Course enrollment is $M:N$ (needs `Enrolls`).',
      },
      {
        term: 'Total vs. Partial Participation',
        plainEnglish:
          'Total participation (double line) means every entity MUST take part in at least one link (`NOT NULL` constraint); partial participation (single line) means the link is optional. Only a $1:1$ link that is total on **both** sides collapses $2$ entities into $1$ table.',
        tinyExample: 'Total participation on an $M:N$ relationship still requires a $3$rd bridge table—it never merges!',
      },
      {
        term: 'Weak Entity & Owner Entity',
        plainEnglish:
          'An entity that cannot be uniquely identified by its own attributes alone and depends on a parent (owner) entity for both identity and existence.',
        tinyExample: '`Room(RoomNo)` is weak because `Room 101` repeats across buildings—it depends on owner `Building(BldgID)`.',
      },
      {
        term: 'Discriminator (Partial Key)',
        symbol: '$D_W$',
        plainEnglish:
          'The dashed-underlined attribute inside a weak entity that distinguishes siblings sharing the same owner, forming the weak entity’s full primary key when combined with the owner’s PK.',
        tinyExample: '`RoomNo` is the discriminator of `Room`, giving full PK `(BldgID, RoomNo)`.',
      },
      {
        term: 'Identifying Relationship',
        symbol: '$R_I$',
        plainEnglish:
          'The double-diamond $N:1$ relationship tying a weak entity totally to its owner; it always merges directly into the weak entity’s table (adding $0$ extra tables).',
        tinyExample: 'Owner `Building`, `LocatedIn`, and weak `Room` always map to just $2$ tables total.',
      },
      {
        term: 'Primary Key (PK)',
        symbol: '`PRIMARY KEY`',
        plainEnglish:
          'The chosen minimal identifier of a table whose values must be strictly **UNIQUE** and **NOT NULL** across every single row.',
        tinyExample: 'In `Customer(email PK, aadhaar FK)`, `email` can never be duplicated or `NULL`.',
      },
      {
        term: 'Foreign Key (FK)',
        symbol: '`FOREIGN KEY`',
        plainEnglish:
          'A column (or column set) in a child table pointing to a Primary or Candidate Key in a parent table; unless explicitly constrained, a child FK legally permits both duplicates and `NULL`s.',
        tinyExample: 'Two `Customer` accounts can share the same `aadhaar` FK, or hold `aadhaar = NULL` for a guest.',
      },
      {
        term: 'Referential Integrity Constraint',
        symbol: '$t[E] \\in \\Pi_A(R)$',
        plainEnglish:
          'The rule guaranteeing no dangling pointers: every non-`NULL` Foreign Key value in the child table $S$ must match an existing key in parent table $R$—so Insert into Parent and Delete from Child can never break it.',
        tinyExample: 'Inserting a new row into parent `Person` or deleting a row from child `Customer` is always FK-safe.',
      },
    ],
    generatorId: 'er-tables-gen',
    concepts: [
      {
        id: 'm12-c1-1',
        title: 'ER-to-Relational Mapping: Cardinality & Minimum Table Merging',
        subtitle:
          'Why 1:N absorbs into the N-side, 1:1 total-total collapses to 1 table, and M:N NEVER merges—even under total participation',
        priority: 'core-pillar',
        buildsOn: 'Basic functions & many-to-one vs many-to-many relations',
        toyExample: {
          title: '2 Students, 2 Faculty Advisors (1:N) vs. 2 Courses (M:N)',
          scenario:
            'Suppose Student `S1` (Ananya) and `S2` (Kabir) each have **at most 1** Faculty advisor (`1:N` from Faculty to Student), and each Student can enroll in **many** Courses (`M:N`).',
          walkthroughSteps: [
            '1. **1:N Advisor Rule:** Since Ananya has only 1 advisor (`F1`), we just add one single column `AdvisorID` inside the `Student` table: `(S1, Ananya, F1)`. No 3rd table needed—**2 tables** (`Faculty`, `Student`) suffice!',
            '2. **Why NOT merge into Faculty (the 1-side)?** Faculty `F1` might advise 50 students! Putting a comma-separated list `(S1, S2, ...)` in one cell breaks 1NF, and repeating `F1`’s name 50 times breaks 2NF/3NF.',
            '3. **M:N Enrollment Rule:** Ananya takes `{C1, C2}` AND Course `C1` has `{S1, S2}`. Neither `Student` nor `Course` can hold the other’s single ID without duplicating rows or breaking 1NF.',
            '4. **Bridge Table:** We MUST build a 3rd table `Enrolls(SID, CID)` with composite PK `(SID, CID)`—giving **3 tables** (`Student`, `Course`, `Enrolls`).',
          ],
          ahaMoment:
            'Here is the golden rule behind every ER-merging question: you can ONLY fold a relationship diamond into an entity table when **each row of that entity participates at most once**—which works on the **N-side of 1:N** or a **1:1** side, and NEVER in **M:N**!',
        },
        theoremAndFormula: {
          statement:
            'When converting an ER diagram to minimum 3NF relations (allowing nullable FKs on partial 1:1/1:N unless forbidden): every **1:N** relationship merges into the **N-side** entity; every **1:1** relationship merges into one entity (and if **total on both sides**, both entities and the relationship collapse into **1 table**); every **M:N** relationship and every **multi-valued attribute** requires its **own separate table**. **Composite** and **derived** attributes require **0** extra tables.',
          formulaLatex:
            'T_{\\min} = |E_{\\text{strong}}| + |E_{\\text{weak}}| + |R_{M:N}| + |A_{\\text{multi-valued}}| - |\\text{Total 1:1 Merges}|',
          plainEnglishDecoding:
            'Walk through this 4-step tally every time: give every entity (strong or weak) $1$ table, add $+1$ for every $M:N$ (or ternary) diamond, add $+1$ for every multi-valued attribute (with PK `{Entity_PK, MultiVal_Attr}`), and subtract $1$ ONLY when a $1:1$ relationship has **total participation on both sides** (forming an exact one-to-one pairing).',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2026 Q.61 Pattern: Two strong entities $E_1, E_2$ where $E_1$ has one multi-valued attribute $M$, linked by an $M:N$ relationship $R$ with **total participation on both sides**. What is the minimum number of 3NF tables?',
              solution:
                '$E_1 \\to 1$ table, $M \\to +1$ table `(E1_PK, M)` to preserve 1NF/3NF, $E_2 \\to 1$ table, and $R \\to +1$ bridge table `(E1_PK, E2_PK)`. Total $= 1 + 1 + 1 + 1 = 4$ tables! Total participation on an $M:N$ relationship is a pure constraint and NEVER lets you merge $R$ into $E_1$ or $E_2$.',
            },
            {
              prompt:
                'Suppose `Employee(Eid, Name(First, Last))` has a `1:1` relationship `Manages` with `Department(Did, Dname)`, where `Department` has **total** participation and `Employee` has **partial** participation.',
              solution:
                'Composite `Name` flattens into `First, Last` (0 extra tables). Because `Manages` is `1:1` and total on `Department`, merge `Manages` into `Department(Did, Dname, Manager_Eid NOT NULL)`. Since `Employee` is partial, we keep `Employee` separate to avoid NULLs for non-managers $\\implies \\mathbf{2}$ tables.',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: 'Total participation on an M:N relationship lets you merge the relationship into one of the entities.',
            reality:
              'FALSE! Total participation on M:N only means every entity participates in AT LEAST ONE link. Since it can still participate in multiple links, merging repeats all entity attributes and destroys 2NF/3NF.',
            counterExample:
              'Every student takes $\\ge 1$ course ($M:N$ total): merging `Student` into `Enrolls(SID, SName, CID)` repeats `SName` for every course a student takes (GATE DA 2026 Q.61).',
          },
          {
            myth: 'A composite attribute like `Address(Street, City, Pin)` needs a separate table just like a multi-valued attribute.',
            reality:
              'FALSE! Composite attributes have 1 value per entity and flatten directly into columns (`Street, City, Pin`) in the entity’s table. Only **multi-valued** attributes (`PhoneNumbers`) need a separate table.',
            counterExample:
              'A person has 1 address `(MG Road, BLR, 560001)` $\\to$ 3 scalar columns in `Person`; 3 phone numbers $\\to$ 3 rows in `PersonPhone(Pid, Phone)`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Module 13',
            targetWeek: 6,
            topic: 'Data Warehousing Star Schema & Fact Tables',
            whyItMatters:
              'A Star Schema Fact table is an $k$-ary M:N bridge table storing Foreign Keys to Dimension tables plus numeric measures (`Revenue, Units`), while Dimensions intentionally denormalize 3NF hierarchies into flat columns.',
            pyqProof: 'GATE DA 2025 Q.46 & 2026 Q.43 (OLAP Cuboids)',
          },
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Feature Engineering SQL Pipelines',
            whyItMatters:
              'Joining an entity table to a multi-valued attribute table (e.g., `Users` to `UserTags`) without aggregating first causes a 1-to-N row fan-out that silently duplicates training samples and skews loss weights.',
          },
        ],
      },
      {
        id: 'm12-c1-2',
        title: 'Weak Entities, Discriminators & Multi-Level Identifying Chains',
        subtitle:
          'Why a weak entity always absorbs its identifying diamond and inherits its owner’s primary key',
        priority: 'high-yield',
        buildsOn: 'Concept 1.1 (1:N total-participation merging)',
        toyExample: {
          title: 'Hotel Room 101 in Two Different Buildings',
          scenario:
            'A university has `Building(BldgID, BName)` and weak entity `Room(RoomNo, Capacity)` linked by identifying relationship `LocatedIn`. Both `Bldg A` and `Bldg B` have a `Room 101`.',
          walkthroughSteps: [
            '1. **Why Weak?** `RoomNo = 101` alone cannot tell two rooms apart across buildings—`RoomNo` is only a **partial key (discriminator)**.',
            '2. **Borrow Owner’s PK:** Combining `BldgID` (owner PK) + `RoomNo` (discriminator) uniquely identifies `(BldgA, 101)` vs `(BldgB, 101)`.',
            '3. **Cardinality of Identifying Relationship:** Each `Room` belongs to **exactly 1** `Building` (`N:1` from `Room` to `Building`, **total** on `Room`).',
            '4. **Auto-Merge:** Because it is `N:1` and total on `Room`, `LocatedIn` ALWAYS merges into `Room(BldgID, RoomNo, Capacity)` with PK `(BldgID, RoomNo)` $\\implies$ just **2 tables**!',
          ],
          ahaMoment:
            'Remember this whenever you see a double-rectangle weak entity: it NEVER adds an extra table for its identifying diamond—its own table is already the merged `(WeakEntity + IdentifyingRelationship)` table!',
        },
        theoremAndFormula: {
          statement:
            'A weak entity $W$ with partial key (discriminator) $D_W$ depending on owner entity $E$ (primary key $K_E$) via an identifying relationship $R_I$ has primary key $K_E \\cup D_W$, where $K_E$ is also a `NOT NULL` Foreign Key referencing $E$. Together, $(E, R_I, W)$ always map to **2 tables**.',
          formulaLatex:
            '\\text{PK}(W) = \\text{PK}(E) \\cup \\text{Discriminator}(W), \\qquad T_{\\min}(E, R_I, W) = 2',
          plainEnglishDecoding:
            'What if one weak entity owns *another* weak entity in a chain $E \\to W_1 \\to W_2$? No sweat—the primary key simply snowballs down the chain: $\\text{PK}(W_2) = \\text{PK}(E) \\cup D_1 \\cup D_2$, and all three entities still take just $3$ tables.',
          workedMiniExamples: [
            {
              prompt:
                'Suppose `Employee(Eid)` owns weak entity `Dependent(DepName)` which has a multi-valued attribute `Allergies`. Find the tables and their Primary Keys.',
              solution:
                '1) `Employee(Eid, ...)` PK: `Eid`.\n2) `Dependent(Eid, DepName, ...)` PK: `(Eid, DepName)` (absorbs identifying relationship).\n3) `DepAllergies(Eid, DepName, Allergy)` PK: `(Eid, DepName, Allergy)`.\nTotal = **3 tables**.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'An identifying relationship between an owner and weak entity can be M:N or partial on the weak entity.',
            reality:
              'FALSE! By definition, a weak entity’s participation in its identifying relationship is ALWAYS **total**, and the cardinality from weak entity to owner is ALWAYS **many-to-one** (or 1:1).',
            counterExample:
              'A `Dependent` cannot exist without its `Employee`, and in standard ER semantics each `Dependent` record belongs to one `Employee` owner.',
          },
          {
            myth: 'If an identifying relationship has a descriptive attribute (e.g., `SinceDate`), it forces a 3rd table.',
            reality:
              'FALSE! Since the identifying relationship merges into the weak entity table, any descriptive attributes on it simply become columns in the weak entity table!',
            counterExample:
              '`Room(BldgID, RoomNo, Capacity, PaintedDate)` keeps `PaintedDate` in `Room` without adding a 3rd table.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Module 13',
            targetWeek: 6,
            topic: 'Granularity of Fact Tables in Data Warehouses',
            whyItMatters:
              'Order line-items `(OrderID, LineNo)` are classic weak entities of `Orders(OrderID)`—establishing the finest-grain transaction Fact table before rolling up to daily/monthly aggregates.',
          },
        ],
      },
      {
        id: 'm12-c1-3',
        title: 'Primary Keys, Foreign Keys & Referential Integrity Constraints',
        subtitle:
          'Which SQL table operations can NEVER break a Foreign Key, and why NULLs are legal in a child FK',
        priority: 'core-pillar',
        buildsOn: 'Concept 1.1 (FK placement on N-side)',
        toyExample: {
          title: 'Parent `Person(aadhaar PK, name)` & Child `Customer(email PK, aadhaar FK)`',
          scenario:
            'Suppose `Person` has `{(111, "Riya"), (222, "Dev")}` and `Customer` has `{("a@x.com", 111), ("b@x.com", 111), ("c@x.com", NULL)}`. Notice two customers share `aadhaar = 111` and one customer has `NULL`!',
          walkthroughSteps: [
            '1. **Parent PK (`Person.aadhaar`):** Must be **unique** and **NOT NULL**—every person has a unique non-null Aadhaar.',
            '2. **Child FK (`Customer.aadhaar`):** CAN be **duplicated** (two accounts for Riya) and CAN be **`NULL`** (unless `NOT NULL` is explicitly declared—like a guest customer!).',
            '3. **Test Insert into Parent `Person(333, "Ira")`:** Does any child row break? **NO!** Adding new valid targets can NEVER violate an existing FK.',
            '4. **Test Delete from Child `Customer("a@x.com")`:** Does deleting a child row break anything? **NO!** Removing a reference cannot orphan anyone.',
            '5. **Test Delete from Parent `Person(111)` or Insert into Child `Customer("d@x.com", 999)`:** Both **VIOLATE** referential integrity because `999` is missing in `Person`, and deleting `111` orphans `"a@x.com"` and `"b@x.com"`!',
          ],
          ahaMoment:
            'Picture a Foreign Key as a one-way arrow `Child.E ---> Parent.A`. You can ALWAYS **grow the target pool (Insert into Parent)** or **shrink the pointer list (Delete from Child)** without ever leaving a broken arrow behind!',
        },
        theoremAndFormula: {
          statement:
            'If attribute(s) $E$ in referencing (child) relation $S$ is a Foreign Key referencing Primary/Candidate Key $A$ in referenced (parent) relation $R$, then every tuple $t \\in S$ must satisfy the Referential Integrity constraint:',
          formulaLatex:
            '\\forall t \\in S: \\quad t[E] = \\text{NULL} \\;\\lor\\; t[E] \\in \\Pi_A(R)',
          plainEnglishDecoding:
            'Memorize this crisp split: just two operations **NEVER** violate a Foreign Key constraint (assuming PK uniqueness holds)—**(1) Insert into Parent $R$**, and **(2) Delete from Child $S$**. The other four—Insert into $S$, Update $S.E$, Delete from $R$, and Update $R.A$—can all create an orphan reference.',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2026 Q.26 Pattern: Given $R(\\underline{A}, B)$ and $S(E, C)$ where $S.E$ references $R.A$, which operations will NEVER violate the Foreign Key constraint?',
              solution:
                'Only **(A) Insert into $r$** and **(B) Delete from $s$**! Deleting from $r$ or inserting into $s$ can leave a value in $s.E$ that is missing from $r.A$.',
            },
            {
              prompt:
                'GATE DA 2025 Q.56 Pattern: In `Person(aadhaar PK, name)` and `Customer(name, email PK, phone, aadhaar FK)`, can `Customer.aadhaar` be NULL? Can `Customer.email` be NULL?',
              solution:
                '`Customer.aadhaar` **CAN** be `NULL` (and duplicated) because it is only an FK without `NOT NULL`/`UNIQUE`. `Customer.email` **CANNOT** be `NULL` because it is the `PRIMARY KEY` of `Customer`.',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: 'A Foreign Key column in the child table cannot contain NULL or duplicate values.',
            reality:
              'FALSE! Unless `NOT NULL` or `UNIQUE` is explicitly added, a child FK can legally hold both `NULL`s and repeated parent keys (that’s literally how 1:N relationships work!).',
            counterExample:
              'GATE DA 2025 Q.56 (`Customer.aadhaar` FK): multiple customer emails can share one `aadhaar`, or have `aadhaar = NULL`.',
          },
          {
            myth: 'Deleting a tuple from the referenced (parent) table is always safe if the child table uses ON DELETE RESTRICT, or deleting from child violates FK.',
            reality:
              'Deleting from the **parent** causes a violation (which `RESTRICT` rejects or `CASCADE` cascades), whereas deleting from the **child** is ALWAYS unconditionally safe!',
            counterExample:
              'In GATE DA 2026 Q.26, `Delete from s` (child) never violates FK; `Delete from r` (parent) does.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Module 13',
            targetWeek: 6,
            topic: 'Star Schema Surrogate Keys & Referential Joins',
            whyItMatters:
              'Data warehouses enforce `NOT NULL` FKs on Fact tables using a dummy "Unknown" surrogate row in each Dimension so inner joins never silently drop revenue rows.',
          },
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Feature Engineering SQL Pipelines (Train/Serve Integrity)',
            whyItMatters:
              'Nullable child FKs mean an `INNER JOIN` between `Events` and `Users` silently discards anonymous events (`user_id IS NULL`)—use `LEFT JOIN` when building feature tables!',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm12-c1-ht1',
        title: 'Counting Minimum 3NF Tables in Complex ER Diagrams Without Over-Merging',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 · Q.61'],
        problemStatement:
          'Given an ER diagram with Strong entities, Weak entities, 1:1 / 1:N / M:N relationships (some marked with double-line Total participation), and multi-valued/composite attributes, find the exact minimum number of 3NF tables.',
        triggerCue:
          'You see phrases like "total participation", "M:N relationship", "multi-valued attribute", or "minimum number of tables in 3NF".',
        bruteForceTrap:
          'Blindly subtracting 1 table for EVERY double-line (total participation) edge—especially merging an entity with an M:N relationship—or creating extra tables for composite attributes.',
        mentalShift:
          'Treat total participation as a **NOT NULL constraint**, NOT a table-reduction ticket, EXCEPT in a **1:1** relationship total on **both** sides! Run a 4-item checklist: (1) Strong + Weak entities, (2) +1 per M:N diamond, (3) +1 per multi-valued attribute, (4) -1 per total-total 1:1.',
        steps: [
          {
            label: 'Step 1 · Count Entity Tables (Strong + Weak)',
            detail:
              'Give every Strong entity 1 table and every Weak entity 1 table. Weak entities automatically absorb their identifying relationship diamond—never add a table for an identifying relationship.',
          },
          {
            label: 'Step 2 · Check Every Relationship Diamond by Cardinality',
            detail:
              'M:N diamond $\\to +1$ table (regardless of total participation!). 1:N diamond $\\to +0$ tables (merges into N-side). 1:1 diamond $\\to +0$ tables if partial/one-sided total, and **$-1$ table** ONLY if **both** sides are total 1:1.',
          },
          {
            label: 'Step 3 · Scan Attribute Ovals',
            detail:
              'Composite or derived attributes $\\to +0$ tables. Multi-valued (double-oval) attributes $\\to +1$ table each (`(Owner_PK, Attr)`).',
          },
        ],
        lockInTakeaway:
          'In GATE DA 2026 Q.61, total participation on an M:N relationship did NOT save a table: 2 entities + 1 multi-valued attribute + 1 total M:N = `4` tables!',
      },
      {
        id: 'm12-c1-ht2',
        title: 'The 4-Operation Foreign Key Safety Matrix',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2026 · Q.26', 'GATE DA 2025 · Q.56'],
        problemStatement:
          'Given two tables $R(\\underline{A}, B)$ and $S(E, C)$ where $S.E$ is a Foreign Key referencing $R.A$, determine which `INSERT`, `DELETE`, and `UPDATE` operations can NEVER violate referential integrity.',
        triggerCue:
          'Questions asking "which operation(s) will NEVER violate the foreign key constraint" or checking NULL/duplicate legality in parent vs child.',
        bruteForceTrap:
          'Testing concrete sample rows ad-hoc and forgetting that an adversarial row might exist in the other table (e.g., forgetting a child row might match the deleted parent row).',
        mentalShift:
          'Ask one directional question: **"Does this action create an orphan pointer in $S$?"** Only two actions can NEVER create an orphan: expanding the parent dictionary (**Insert into $R$**) and removing a child pointer (**Delete from $S$**).',
        steps: [
          {
            label: 'Step 1 · Label Parent ($R$) vs Child ($S$)',
            detail:
              '$R.A$ is the referenced target (PK/UNIQUE, NOT NULL). $S.E$ is the referencing pointer (duplicates & NULLs allowed unless restricted).',
          },
          {
            label: 'Step 2 · Test the 4 Basic Operations',
            detail:
              'Insert into $R$: Safe! Delete from $S$: Safe! Insert into $S$: Unsafe (new $E$ might not be in $R.A$). Delete from $R$: Unsafe (existing $S.E$ might point to it).',
          },
          {
            label: 'Step 3 · Check Update Sub-cases',
            detail:
              'Setting $S.E \\leftarrow \\text{NULL}$ (if nullable) is safe; updating $S.E$ to a new value or updating $R.A$ can break referential integrity.',
          },
        ],
        lockInTakeaway:
          'Remember the rhyme: **Grow the Parent, Shrink the Child**—those are the ONLY two unconditionally FK-safe operations!',
      },
    ],
    arsenalCards: [
      {
        id: 'm12-c1-ar1',
        badge: 'CARD 12.1 · ER MERGING',
        whenYouSpot: 'ER diagram asking for minimum number of tables in 3NF',
        directWeaponLatex: 'T_{\\min} = |E_{\\text{strong}}| + |E_{\\text{weak}}| + |R_{M:N}| + |A_{\\text{MV}}| - |R_{1:1\\text{ total-both}}|',
        instantRule:
          '1:N always merges into N-side (0 extra tables). M:N always needs its own table (+1), even if participation is total. Only multi-valued attributes add +1; composite attributes add 0.',
        tenSecondExample: '2 strong entities + 1 multi-valued attr + 1 total M:N = 2 + 1 + 1 = 4 tables (2026 Q.61).',
        oneFatalTrap: 'Never merge an entity into an M:N relationship just because of total participation.',
      },
      {
        id: 'm12-c1-ar2',
        badge: 'CARD 12.2 · WEAK ENTITY',
        whenYouSpot: 'Double-rectangle Weak Entity $W$ with partial key $D$ and owner $E$',
        directWeaponLatex: '\\text{PK}(W) = \\text{PK}(E) \\cup D, \\qquad \\text{Tables}(E, R_I, W) = 2',
        instantRule:
          'The identifying relationship $R_I$ is N:1 total on $W$, so it ALWAYS merges into $W$’s table along with any descriptive attributes of $R_I$.',
        tenSecondExample: 'Univ(Uid) -> Dept(Dname) -> Course(Cno) => PK(Course) = (Uid, Dname, Cno) in 3 tables.',
        oneFatalTrap: 'Do not count +1 table for the identifying double-diamond of a weak entity.',
      },
      {
        id: 'm12-c1-ar3',
        badge: 'CARD 12.3 · FOREIGN KEYS',
        whenYouSpot: 'Foreign Key $S.E \\to R.A$ asking which operations NEVER violate or allow NULLs',
        directWeaponLatex: '\\text{Safe Always: } \\text{Insert}(R) \\;\\&\\; \\text{Delete}(S); \\qquad S.E \\in \\{\\text{NULL}\\} \\cup \\Pi_A(R)',
        instantRule:
          'Child FK $S.E$ allows NULLs and duplicates unless constrained. Parent $R.A$ must be UNIQUE and NOT NULL (PK/CK).',
        tenSecondExample: 'In Person(aadhaar PK) & Customer(email PK, aadhaar FK), Customer.aadhaar CAN be NULL (2025 Q.56).',
        oneFatalTrap: 'Deleting from Parent $R$ or Inserting into Child $S$ CAN violate FK integrity.',
      },
    ],
    questions: [
      {
        id: 'm12-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Attributes & Cardinality',
        marks: 1,
        type: 'MCQ',
        stem: 'An ER schema has two strong entities `Doctor(DocID, Name(First, Last), Specialization)` and `Patient(PatID, Age, PhoneNumbers)` where `PhoneNumbers` is multi-valued and `Name` is composite. Every patient is treated by at most one doctor (`1:N` from `Doctor` to `Patient`), and `Patient` participation is partial. What is the minimum number of 3NF tables required?',
        options: [
          {
            id: 'A',
            text: '2 tables',
            whyTrueOrFalse: 'False: `PhoneNumbers` is multi-valued, so keeping it inside `Patient` violates 1NF.',
          },
          {
            id: 'B',
            text: '3 tables',
            whyTrueOrFalse: 'True: `Doctor`, `Patient` (absorbing `DocID` FK), and `PatientPhone(PatID, Phone)` = 3 tables. Composite `Name` flattens.',
          },
          {
            id: 'C',
            text: '4 tables',
            whyTrueOrFalse: 'False: neither the composite `Name` nor the `1:N` relationship needs its own table.',
          },
          {
            id: 'D',
            text: '5 tables',
            whyTrueOrFalse: 'False: over-counts both composite attributes and the 1:N diamond.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Composite = flatten (0 extra); Multi-valued = +1 table; 1:N = merge into N-side.',
        intuitiveSolution: [
          '`Doctor` gets 1 table; composite `Name` becomes columns `First, Last` (0 extra tables).',
          '`Patient` gets 1 table and absorbs `DocID` (nullable FK) for the `1:N` relationship (0 extra tables).',
          'Multi-valued `PhoneNumbers` gets 1 table `PatientPhone(PatID, Phone)` $\\implies 1 + 1 + 1 = 3$ tables.',
        ],
        directShortcutUsed: 'ER Table Formula: $2\\text{ strong} + 1\\text{ multi-valued} = 3$.',
      },
      {
        id: 'm12-c1-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.61 Pattern',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Consider an ER diagram with two strong entities $E_1$ and $E_2$ participating in an $M:N$ relationship $R$ with **total participation on both $E_1$ and $E_2$**. Entity $E_1$ has one simple key attribute, two single-valued attributes, and **one multi-valued attribute**. Entity $E_2$ has one simple key attribute and one composite attribute made of three sub-attributes. What is the minimum number of relational tables required so that all resulting tables are in 3NF?',
        natAnswer: { min: 4, max: 4, exactDisplay: '4' },
        triggerHint: 'Total participation on M:N does NOT merge tables; composite attributes do NOT add tables.',
        intuitiveSolution: [
          '$E_1$ needs 1 table for its key and two single-valued attributes.',
          '$E_1$’s multi-valued attribute needs +1 separate table `(E1_PK, MultiVal)` to stay in 1NF/3NF.',
          '$E_2$ needs 1 table (its composite attribute flattens into 3 columns inside $E_2$).',
          'The $M:N$ relationship $R$ MUST have +1 bridge table `(E1_PK, E2_PK)` regardless of total participation $\\implies 1 + 1 + 1 + 1 = 4$.',
        ],
        directShortcutUsed: '$T_{\\min} = 2\\text{ strong} + 1\\text{ M:N} + 1\\text{ multi-valued} = 4$.',
      },
      {
        id: 'm12-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.26 Pattern',
        year: 2026,
        marks: 1,
        type: 'MSQ',
        stem: 'Consider two relations $R(\\underline{A}, B)$ and $S(E, C)$ where $A$ is the primary key of $R$, and $E$ in $S$ is a Foreign Key referencing $R.A$ (assume `ON DELETE RESTRICT`, no cascading actions, and any inserted tuple into $R$ has a fresh unique $A$). Which of the following database operations will **NEVER** violate the Foreign Key constraint?',
        options: [
          {
            id: 'A',
            text: 'Inserting a valid tuple into $R$',
            whyTrueOrFalse: 'True: adding a new referenced primary key in parent $R$ can never orphan any existing tuple in child $S$.',
          },
          {
            id: 'B',
            text: 'Deleting a tuple from $S$',
            whyTrueOrFalse: 'True: removing a child row from $S$ only removes a pointer; it can never create a dangling reference.',
          },
          {
            id: 'C',
            text: 'Deleting a tuple from $R$',
            whyTrueOrFalse: 'False: if any row in $S$ currently references that $R.A$ value, deleting it from $R$ violates referential integrity.',
          },
          {
            id: 'D',
            text: 'Inserting a tuple into $S$',
            whyTrueOrFalse: 'False: if the inserted non-NULL $E$ value does not exist in $R.A$, the FK constraint is violated.',
          },
        ],
        correctOptions: ['A', 'B'],
        triggerHint: 'Remember: Grow the Parent, Shrink the Child!',
        intuitiveSolution: [
          'Referential integrity requires every non-NULL $S.E$ to appear in $R.A$.',
          'Inserting into parent $R$ only enlarges the valid target set $R.A$ (always safe).',
          'Deleting from child $S$ only removes rows from $S$, so the universal condition on remaining $S$ rows still holds (always safe).',
          'Deleting from $R$ or inserting into $S$ can leave a non-NULL $S.E$ without a matching $R.A$.',
        ],
        directShortcutUsed: 'Safe FK matrix: Insert(Parent) & Delete(Child) = NEVER violate.',
      },
      {
        id: 'm12-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.56 Pattern',
        year: 2025,
        marks: 2,
        type: 'MSQ',
        stem: 'Consider the SQL DDL schema:\n`Person(aadhaar VARCHAR(12) PRIMARY KEY, name VARCHAR(50))`\n`Customer(name VARCHAR(50), email VARCHAR(80) PRIMARY KEY, phone VARCHAR(15), aadhaar VARCHAR(12) REFERENCES Person(aadhaar))`\nWhich of the following statements are ALWAYS valid under standard SQL integrity rules?',
        options: [
          {
            id: 'A',
            text: 'Two distinct rows in `Customer` cannot share the same `aadhaar` value.',
            whyTrueOrFalse: 'False: `Customer.aadhaar` is only a Foreign Key (not `UNIQUE`), so one person can have multiple customer email accounts.',
          },
          {
            id: 'B',
            text: 'A row in `Customer` can have `aadhaar = NULL` even if `Person` has no `NULL` values.',
            whyTrueOrFalse: 'True: `Customer.aadhaar` has no `NOT NULL` constraint, and SQL Foreign Keys permit `NULL` by default.',
          },
          {
            id: 'C',
            text: 'Every non-NULL `aadhaar` in `Customer` must appear in `Person.aadhaar`, and `Customer.email` can never be `NULL`.',
            whyTrueOrFalse: 'True: `REFERENCES` enforces referential integrity for non-NULL values, and `PRIMARY KEY` forbids both `NULL` and duplicates on `email`.',
          },
          {
            id: 'D',
            text: '`Customer.phone` must be unique because `Customer` has a Foreign Key.',
            whyTrueOrFalse: 'False: `phone` has neither `UNIQUE` nor `PRIMARY KEY`.',
          },
        ],
        correctOptions: ['B', 'C'],
        triggerHint: 'PK = UNIQUE + NOT NULL; bare FK = neither UNIQUE nor NOT NULL.',
        intuitiveSolution: [
          'In `Customer`, `email` is the `PRIMARY KEY`, so it cannot be `NULL` or duplicated.',
          '`Customer.aadhaar` is a bare `FOREIGN KEY`, so both `NULL`s and repeated values (multiple accounts per person) are legal.',
          'Any non-NULL `Customer.aadhaar` must exist in `Person.aadhaar`.',
        ],
        directShortcutUsed: 'Bare FK allows `NULL` and duplicates; PK bans both.',
      },
      {
        id: 'm12-c1-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Tricky · Weak Chain + 1:1 Total',
        marks: 2,
        type: 'NAT',
        stem: 'An organization models: (1) Strong entity `Company(Cid)` having one multi-valued attribute `Locations`; (2) Weak entity `Branch(Bno)` identifying on `Company`; (3) Weak entity `Desk(Dno)` identifying on `Branch`; and (4) Strong entity `Manager(Mid)` linked to `Branch` via a `1:1` relationship `Leads` that is **total** on `Branch` and **partial** on `Manager`. What is the minimum number of 3NF tables required?',
        natAnswer: { min: 5, max: 5, exactDisplay: '5' },
        triggerHint: 'Count strong + weak + multi-valued, absorb identifying diamonds, and check whether 1:1 is total on BOTH sides.',
        intuitiveSolution: [
          '`Company(Cid)` = 1 table; multi-valued `Locations(Cid, Loc)` = +1 table.',
          'Weak `Branch(Cid, Bno, Mid FK NOT NULL)` absorbs its identifying diamond with `Company` AND absorbs the `1:1` relationship `Leads` (total on `Branch`) = +1 table.',
          'Strong `Manager(Mid)` stays separate because `Leads` is partial on `Manager` = +1 table.',
          'Weak `Desk(Cid, Bno, Dno)` absorbs its identifying diamond with `Branch` = +1 table.',
          'Total minimum tables $= 1 + 1 + 1 + 1 + 1 = 5$.',
        ],
        directShortcutUsed: 'Strong(2) + Weak(2) + Multi-valued(1) - TotalBoth_1:1(0) = 5.',
      },
      {
        id: 'm12-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Tricky · ER & Cardinality Invariants',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following statements about ER-to-Relational conversion into 3NF are ALWAYS true?',
        options: [
          {
            id: 'A',
            text: 'If two strong entities $A$ and $B$ have a $1:1$ relationship with total participation on both sides, they can be merged into a single table without introducing NULLs or redundancy.',
            whyTrueOrFalse: 'True: total-total 1:1 is a bijection between $A$ and $B$, collapsing $(A, R, B)$ into 1 table.',
          },
          {
            id: 'B',
            text: 'In a $1:N$ relationship (1 on $A$, $N$ on $B$), merging the relationship into $A$ instead of $B$ preserves 1NF as long as $B$ has total participation.',
            whyTrueOrFalse: 'False: one $A$ still maps to many $B$s, so storing multiple $B$ keys in $A$ violates 1NF (or repeats $A$’s attributes, violating 2NF/3NF).',
          },
          {
            id: 'C',
            text: 'Every weak entity table contains the primary key of its owner entity as a Foreign Key inside its own Primary Key.',
            whyTrueOrFalse: 'True: $\\text{PK}(W) = \\text{PK}(\\text{Owner}) \\cup \\text{Discriminator}(W)$, and $\\text{PK}(\\text{Owner})$ is an FK referencing Owner.',
          },
          {
            id: 'D',
            text: 'If an identifying relationship $R_I$ of a weak entity has a descriptive attribute `Date`, `R_I` must be converted into a separate 3rd table.',
            whyTrueOrFalse: 'False: `Date` simply becomes a column inside the weak entity’s table when $R_I$ merges into $W$.',
          },
        ],
        correctOptions: ['A', 'C'],
        triggerHint: 'Test 1:1 bijection vs 1:N direction vs weak entity key inheritance.',
        intuitiveSolution: [
          'A: Total-total 1:1 creates a 1-to-1 pairing of every row in $A$ with one row in $B$ $\\to 1$ table.',
          'B: Merging $N$-side into $1$-side always violates 1NF or 3NF regardless of participation.',
          'C: Weak entities always inherit owner PK as both part of their PK and an FK.',
          'D: Descriptive attributes on $R_I$ merge directly into the weak entity table.',
        ],
        directShortcutUsed: '1:1 total-total $\\to 1$ table; Weak PK = Owner PK $\\cup$ Discriminator.',
      },
    ],
  },

  // ============================================================================
  // CHAPTER 2: Functional Dependencies, Candidate Keys & 2NF/3NF/BCNF
  // ============================================================================
  {
    id: 'dbms-ch2',
    number: 2,
    title: 'Functional Dependencies, Attribute Closure, Candidate Keys & 2NF/3NF/BCNF',
    shortTitle: 'FDs, Keys & Normalization',
    estimatedHours: 5,
    dayLabel: 'Week 5 · Day 2',
    tagline:
      'Let’s build a calm, 15-second L-M-R routine to find every single candidate key, diagnose exact Normal Form violations (2NF vs. 3NF vs. BCNF), and understand why BCNF can sacrifice dependency preservation—every pattern tested across GATE DA 2024, 2025, and 2026.',
    syllabusMapping: [
      'Relational database design: Functional dependencies & attribute closure',
      'Candidate keys & superkeys',
      'Normal forms: 1NF, 2NF, 3NF, BCNF; Lossless-join & Dependency-preserving decompositions',
    ],
    whatIsImportant: [
      'Attribute closure $X^+$ algorithm & Armstrong axioms (GATE DA 2024 Q.46) — NEVER split a composite LHS!',
      'L-M-R Shortcut for finding ALL Candidate Keys (GATE DA 2025 Q.57 & 2026 Q.17)',
      'Exact 2NF / 3NF / BCNF definitions: partial dependency vs transitive non-prime dependency vs non-superkey LHS',
      'Lossless join $(R_1 \\cap R_2)^+$ test & why BCNF guarantees lossless join but NOT dependency preservation (forcing extra JOINs, GATE DA 2025 Q.16)',
    ],
    whatIsNotImportant: [
      '4NF (Multi-Valued Dependencies) & 5NF (Join Dependencies) — zero GATE DA history',
      'Obscure Chase algorithm proofs on 4+ table decompositions (the binary lossless intersection check + 3NF synthesis covers 99% of questions)',
    ],
    inboundStream: 'Primary/Candidate Keys from Ch.1 + Graph reachability intuition (Module 10).',
    outboundStream: [
      'Ch.3 Joins recovering lossless decompositions',
      'Module 13 Star vs Snowflake schemas (deliberate 3NF violation for OLAP speed)',
      'Module 14 Feature collinearity & target leakage detection via FDs',
    ],
    glossary: [
      {
        term: 'Functional Dependency (FD)',
        symbol: '$X \\to Y$',
        plainEnglish:
          'A data rule saying that whenever two rows have the same values on column set $X$, they MUST also have the exact same values on column set $Y$ (knowing $X$ uniquely fixes $Y$).',
        tinyExample: '`Prof -> Dept` means knowing a professor’s name uniquely tells you which department they belong to.',
      },
      {
        term: 'Armstrong’s Axioms & FD Closure',
        symbol: '$F^+$',
        plainEnglish:
          'The three core inference rules—Reflexivity, Augmentation, and Transitivity—that generate every FD logically implied by a given set $F$ (called the closure $F^+$). Remember: you can split an RHS, never a composite LHS!',
        tinyExample: 'From $U \\to V$ and $V \\to X$, Transitivity implies $U \\to X \\in F^+$.',
      },
      {
        term: 'Attribute Closure',
        symbol: '$X^+$',
        plainEnglish:
          'The complete bag of columns you can unlock starting from $X$ by repeatedly firing every FD whose entire left-hand side is already inside your bag.',
        tinyExample: 'With `Room, Time -> Prof` and `Prof -> Dept`, `{Room, Time}+ = {Room, Time, Prof, Dept}`.',
      },
      {
        term: 'Superkey',
        symbol: '$X^+ = R$',
        plainEnglish:
          'Any column set $X$ whose attribute closure unlocks every single column in the entire table $R$—it may contain extra redundant columns.',
        tinyExample: 'If `A` alone unlocks all of `R(A,B,C)`, then `A`, `AB`, `AC`, and `ABC` are all superkeys.',
      },
      {
        term: 'Candidate Key (CK)',
        plainEnglish:
          'A **minimal** superkey—meaning $K^+ = R$, and dropping even one single attribute from $K$ breaks its ability to unlock the whole table.',
        tinyExample: 'If $A^+ = R$ and $(BC)^+ = R$ (with $B^+ \\neq R, C^+ \\neq R$), the candidate keys are `A` and `BC`.',
      },
      {
        term: 'Prime vs. Non-Prime Attribute',
        plainEnglish:
          'An attribute is **prime** if it belongs to *at least one* candidate key of the table (taking the union of ALL candidate keys!), and **non-prime** if it appears in zero candidate keys.',
        tinyExample: 'When CKs are `{A, BC}` on `R(A..G)`, `{A, B, C}` are prime and `{D, E, F, G}` are non-prime.',
      },
      {
        term: 'L-M-R-N Essential Core',
        symbol: '$E_0 = L \\cup N$',
        plainEnglish:
          'The fast candidate-key shortcut: attributes that never appear on any RHS ($L \\cup N$) MUST sit in every candidate key, whereas attributes appearing ONLY on the RHS ($R$) never join a minimal key.',
        tinyExample: 'In `{A->BC, CD->E, E->A}`, `D` is $L$-only (mandatory) and `B` is $R$-only (excluded).',
      },
      {
        term: 'Partial Dependency & 2NF',
        plainEnglish:
          'A partial dependency happens when a **proper subset** of a candidate key determines a non-prime attribute; a 1NF table is in **2NF** when zero partial dependencies exist.',
        tinyExample: 'If CK is `(SID, CID)` and `SID -> SName` (`SName` non-prime), that partial dependency breaks 2NF.',
      },
      {
        term: 'Transitive Dependency & 3NF',
        plainEnglish:
          'A table is in **3NF** if every non-trivial FD $X \\to A$ has either $X$ as a superkey OR $A$ as a prime attribute—blocking non-prime $\\to$ non-prime transitive chains.',
        tinyExample: 'With CKs `{A, BC}`, `E -> DG` passes 2NF (not partial) but breaks 3NF because `E` isn’t a superkey and `D, G` are non-prime.',
      },
      {
        term: 'Boyce-Codd Normal Form (BCNF)',
        plainEnglish:
          'The strictest FD-based normal form: for **every** non-trivial FD $X \\to A$, the left-hand side $X$ MUST be a superkey—zero exceptions even when $A$ is prime.',
        tinyExample: 'In `SCI(S, C, I)` with `SC -> I` and `I -> C`, `I -> C` passes 3NF (`C` is prime) but fails BCNF (`I` isn’t a superkey).',
      },
      {
        term: 'Lossless-Join Decomposition',
        symbol: '$(R_1 \\cap R_2)^+$',
        plainEnglish:
          'Splitting table $R$ into $R_1$ and $R_2$ safely so that taking $R_1 \\bowtie R_2$ recovers the exact original rows with zero fake (spurious) tuples—guaranteed iff the shared columns $(R_1 \\cap R_2)$ form a superkey of $R_1$ or $R_2$.',
        tinyExample: 'Splitting `R(A,B,C)` (`A->B`) into `(A,B)` and `(B,C)` shares `B`, yet $B^+ = \\{B\\}$ covers neither $\\implies$ lossy!',
      },
      {
        term: 'Dependency Preservation',
        plainEnglish:
          'A decomposition preserves dependencies if every original FD in $F$ can be checked inside individual decomposed tables without running cross-table `JOIN`s—always achievable in 3NF, not always in BCNF.',
        tinyExample: 'Splitting `SCI` into `(I, C)` and `(S, I)` loses local checking of `SC -> I`, forcing a `JOIN` on updates.',
      },
    ],
    generatorId: 'fd-candidate-keys-gen',
    concepts: [
      {
        id: 'm12-c2-1',
        title: 'Functional Dependencies & The Attribute Closure Engine ($X^+$)',
        subtitle:
          'How $X \\to Y$ acts like a directed reachability rule—and why you can split RHSs, never LHSs',
        priority: 'core-pillar',
        buildsOn: 'Key uniqueness from Ch.1',
        toyExample: {
          title: '4-Column Schedule Table `Class(Prof, Dept, Room, Time)`',
          scenario:
            'Every professor belongs to one department (`Prof -> Dept`), and at a given `(Room, Time)` only one professor teaches (`Room, Time -> Prof`). Suppose someone only tells you `(Room = 101, Time = 9AM)`. What else is uniquely forced?',
          walkthroughSteps: [
            '1. Start with what we know: `Closure = {Room, Time}`.',
            '2. Fire `Room, Time -> Prof`: now we know `{Room, Time, Prof}`!',
            '3. Fire `Prof -> Dept`: since `Prof` is now in our known bag, we unlock `Dept` $\\implies$ `{Room, Time, Prof, Dept}`!',
            '4. All 4 columns are unlocked! Therefore `(Room, Time)` is a **Superkey** of `Class`.',
            '5. Check `Prof` alone: `Prof+ = {Prof, Dept}` (doesn’t tell us Room or Time). Check `Room` alone: `Room+ = {Room}` (cannot fire `Room, Time -> Prof` without `Time`!).',
          ],
          ahaMoment:
            'Think of computing $X^+$ like setting off dominoes: start with $X$ in your pocket, and keep adding the right-hand side of any FD whose **entire left-hand side** is already in your pocket until no new column can be unlocked!',
        },
        theoremAndFormula: {
          statement:
            'Under Armstrong’s Axioms (Reflexivity, Augmentation, Transitivity—which are sound and complete), an FD $X \\to Y$ is logically implied by $F$ (i.e., $X \\to Y \\in F^+$) **if and only if** $Y$ is contained in the attribute closure $X^+$ under $F$.',
          formulaLatex:
            'X \\to Y \\in F^+ \\iff Y \\subseteq X^+_F \\qquad\\text{and}\\qquad X \\text{ is a Superkey} \\iff X^+_F = R',
          plainEnglishDecoding:
            'Watch the one asymmetry that trips students up: you CAN freely split the right-hand side ($X \\to YZ$ gives both $X \\to Y$ and $X \\to Z$), but you can **NEVER** split a composite left-hand side ($XY \\to Z$ does NOT mean $X \\to Z$ or $Y \\to Z$)!',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2024 Q.46 Exact FDs: On $R(U,V,W,X,Y,Z)$ with $F = \\{U\\to V,\\; U\\to W,\\; WX\\to Y,\\; WX\\to Z,\\; V\\to X\\}$, compute $U^+$ and $(WX)^+$.',
              solution:
                '$U^+ = \\{U\\} \\xrightarrow{U\\to V,W} \\{U,V,W\\} \\xrightarrow{V\\to X} \\{U,V,W,X\\} \\xrightarrow{WX\\to Y,Z} \\{U,V,W,X,Y,Z\\} = R$. So $U \\to XYZ$ holds and $U$ is a Candidate Key! Meanwhile $(WX)^+ = \\{W,X,Y,Z\\}$, so $WX \\to U$ does NOT hold.',
            },
            {
              prompt: 'Check if $V \\to Y$ holds under the same $F$.',
              solution:
                '$V^+ = \\{V, X\\}$. Since $W \\notin V^+$, $WX \\to Y$ never fires, so $V \\to Y$ is **FALSE**.',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: 'If $AB \\to C$ holds in $F$, then either $A \\to C$ or $B \\to C$ must also hold.',
            reality:
              'FALSE! Only the **RHS** decomposes ($A \\to BC \\implies A \\to B$ and $A \\to C$). A composite LHS requires **both** $A$ and $B$ together!',
            counterExample:
              'In `(Room, Time) -> Prof`, knowing only `Room` does NOT determine `Prof` across different hours.',
          },
          {
            myth: 'Two FD sets $F$ and $G$ are equivalent if they have the same number of FDs and same LHS attributes.',
            reality:
              'FALSE! Equivalence ($F^+ = G^+$) requires checking that every FD $X \\to Y \\in F$ satisfies $Y \\subseteq X^+_G$ AND every FD $A \\to B \\in G$ satisfies $B \\subseteq A^+_F$.',
            counterExample:
              '$\\{A\\to B, B\\to C\\}$ and $\\{A\\to C, B\\to C\\}$ have the same LHSs `{A, B}`, yet are NOT equivalent ($A \\to B$ is lost in the second!).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Module 13',
            targetWeek: 6,
            topic: 'Data Warehousing Star Schema Concept Hierarchies',
            whyItMatters:
              'A concept hierarchy like `Day -> Month -> Quarter -> Year` inside a `Time` Dimension table is literally a transitive chain of Functional Dependencies!',
          },
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Feature Engineering & Multicollinearity',
            whyItMatters:
              'If `ZipCode -> City` holds in your SQL feature table, `City` carries zero incremental information beyond `ZipCode`—spotting FDs prevents redundant high-cardinality features.',
          },
        ],
      },
      {
        id: 'm12-c2-2',
        title: 'Finding ALL Candidate Keys via L-M-R Attribute Classification',
        subtitle:
          'Never test $2^n$ subsets by brute force—lock in the Essential Core first and expand only into M',
        priority: 'core-pillar',
        buildsOn: 'Concept 2.1 (Attribute closure $X^+$)',
        toyExample: {
          title: 'Unlocking GATE DA 2026 Q.17 (`R(A,B,C,D,E)`) in 10 Seconds',
          scenario:
            'Given $R(A,B,C,D,E)$ with $F = \\{A \\to BC,\\; CD \\to E,\\; E \\to A\\}$, find ALL candidate keys without checking all $2^5 - 1 = 31$ subsets.',
          walkthroughSteps: [
            '1. **Classify each attribute:** Look at RHSs: `{B, C, E, A}`. Notice **`D` NEVER appears on any RHS!** (`L`-only!). `B` appears ONLY on RHS (`R`-only). `{A, C, E}` appear on both (`M`).',
            '2. **Essential Core Rule:** Since no FD can ever generate `D`, **EVERY candidate key MUST contain `D`**!',
            '3. **Test Core $D^+$:** $D^+ = \\{D\\} \\neq R$ (so `D` alone is not enough).',
            '4. **Expand `D` using ONLY `M = {A, C, E}` (skip `R`-only `B`!):**\n   - $(AD)^+ = \\{A,D,B,C,E\\} = R \\checkmark$\n   - $(CD)^+ = \\{C,D,E,A,B\\} = R \\checkmark$\n   - $(ED)^+ = \\{E,D,A,B,C\\} = R \\checkmark$',
            '5. **Can any superset be a CK?** No—any larger set containing `AD`, `CD`, or `ED` is non-minimal, and `BD` only gives `{B,D}`! Done: **`{AD, CD, ED}`**!',
          ],
          ahaMoment:
            'Here is why L-M-R saves so much exam time: any column missing from ALL right-hand sides (`L` and `N`) can never be derived from anything else, so it is **mandatory** in every key—while any column missing from ALL left-hand sides (`R`) can never unlock anything new, so you never waste time expanding with it!',
        },
        theoremAndFormula: {
          statement:
            'Partition attributes of $R$ with respect to non-trivial FDs in $F$: **L** (LHS only), **R** (RHS only), **M** (both LHS and RHS), **N** (neither). Then the Essential Core $E_0 = L \\cup N$ is a subset of **every** candidate key of $R$. If $E_0^+ = R$, then $E_0$ is the **unique** candidate key.',
          formulaLatex:
            'E_0 = L \\cup N \\subseteq K \\quad (\\forall \\text{ Candidate Key } K), \\qquad K \\setminus E_0 \\subseteq M',
          plainEnglishDecoding:
            'Always test $E_0^+$ first—if it already unlocks all of $R$, celebrate and stop immediately! Otherwise, grow $E_0$ one layer at a time by trying $1$ attribute from $M$, then $2$ attributes from $M$ (skipping supersets of keys you already found), and ignore $R$ completely.',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2025 Q.57 Exact Schema: $R(A,B,C,D,E,F,G)$ with $F = \\{A \\to BCEF,\\; E \\to DG,\\; BC \\to A\\}$. Find all candidate keys.',
              solution:
                'RHSs cover `{B,C,E,F,D,G,A}` $\\implies E_0 = \\emptyset$. `R`-only = `{D,F,G}`. `M = {A,B,C,E}`.\n- Size 1 from `M`: $A^+ = \\{A,B,C,E,F,D,G\\} = R \\implies \\mathbf{A}$ is a CK! ($B^+=B, C^+=C, E^+=EDG$).\n- Size 2 from `{B,C,E}` (excluding `A`): $(BC)^+ = \\{B,C,A,E,F,D,G\\} = R \\implies \\mathbf{BC}$ is a CK! $(BE)^+ = \\{B,E,D,G\\}$, $(CE)^+ = \\{C,E,D,G\\}$.\nCandidate Keys = **`{A, BC}`**! Prime attributes = `{A, B, C}`, Non-prime = `{D, E, F, G}`.',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: 'An attribute appearing on the RHS of an FD can never be inside a candidate key.',
            reality:
              'FALSE! Only **R-only** attributes (which NEVER appear on the LHS of any non-trivial FD) are excluded from minimal candidate keys. Attributes in **M** (like `A, C, E` in 2026 Q.17 and `A, B, C` in 2025 Q.57) appear inside candidate keys all the time!',
            counterExample:
              'In $A \\to B,\\; B \\to A$ on $R(A,B)$, both `A` and `B` are on RHSs, and BOTH `{A}` and `{B}` are candidate keys!',
          },
          {
            myth: 'Every relation has a unique prime attribute set equal to a single primary key.',
            reality:
              'FALSE! A **prime attribute** is ANY attribute belonging to **at least one** candidate key! In `R(A,B,C,D,E)` with keys `AD, CD, ED`, `{A, C, D, E}` are ALL prime!',
            counterExample:
              'In GATE DA 2025 Q.57 (`CKs = {A, BC}`), `A, B, C` are all prime attributes, even though `A` and `BC` are separate keys.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Module 13',
            targetWeek: 6,
            topic: 'Star Schema Dimension Surrogate Keys',
            whyItMatters:
              'Multi-attribute candidate keys like `(Region, StoreCode, DeptID)` slow down B+ tree index fanout; Star Schemas replace composite CKs with single integer surrogate PKs.',
          },
        ],
      },
      {
        id: 'm12-c2-3',
        title: '2NF, 3NF, BCNF & Lossless vs. Dependency-Preserving Splits',
        subtitle:
          'Spotting the exact highest normal form in seconds—and why BCNF sometimes forces expensive SQL JOINs',
        priority: 'core-pillar',
        buildsOn: 'Concept 2.2 (Prime vs Non-Prime attributes)',
        toyExample: {
          title: 'The Classic 3NF-Yes, BCNF-No Triangle: `SCI(Student, Course, Instr)`',
          scenario:
            'Each student-course pair has one instructor: `(Student, Course) -> Instr`. And each instructor teaches only ONE course: `Instr -> Course`.',
          walkthroughSteps: [
            '1. **Candidate Keys:** `(Student, Course)+ = R` and `(Student, Instr)+ = R`. So ALL 3 attributes `{Student, Course, Instr}` are **Prime**!',
            '2. **Check 3NF on `Instr -> Course`:** Is `Instr` a superkey? No. Is `Course` **prime**? **YES!** So `SCI` IS in **3NF**!',
            '3. **Check BCNF on `Instr -> Course`:** Is `Instr` a superkey? **NO!** BCNF shows no mercy for prime RHSs $\\implies$ **NOT in BCNF!**',
            '4. **Try decomposing into BCNF:** Split on `Instr -> Course` into `R1(Instr, Course)` and `R2(Student, Instr)`. Both are in BCNF, and `R1 ∩ R2 = Instr -> R1`, so the join is **Lossless**.',
            '5. **Wait—where did `(Student, Course) -> Instr` go?** Neither `R1` nor `R2` holds all 3 attributes! To check that a student doesn’t get two instructors for the same course, the DBMS must run a **`JOIN`** (**GATE DA 2025 Q.16**)!',
          ],
          ahaMoment:
            'Now you see the real reason 3NF exists! 3NF adds that one gentle escape hatch (“or the RHS is prime”) **specifically** so every table can be split with **both** Lossless Join AND Dependency Preservation. BCNF removes every last trace of FD redundancy, but sometimes forces you to give up Dependency Preservation!',
        },
        theoremAndFormula: {
          statement:
            'For every non-trivial FD $X \\to A$ ($A \\notin X$) in $F^+$: (1) **2NF** forbids $X \\subsetneq K$ for some CK $K$ when $A$ is non-prime; (2) **3NF** requires **$X$ is a superkey OR $A$ is prime**; (3) **BCNF** requires **$X$ is a superkey**. A binary decomposition $R = R_1 \\cup R_2$ is **Lossless** iff $(R_1 \\cap R_2)$ is a superkey of $R_1$ or $R_2$:',
          formulaLatex:
            '\\text{Lossless}(R_1, R_2) \\iff (R_1 \\cap R_2) \\to R_1 \\;\\lor\\; (R_1 \\cap R_2) \\to R_2',
          plainEnglishDecoding:
            'Grade any table calmly from the top of the ladder downward: if every non-trivial FD has a superkey LHS, it is in **BCNF**; otherwise if every failing FD has a prime RHS, it is in **3NF**; otherwise if none of those failing FDs has a **proper subset of a candidate key** on its LHS, it is in **2NF**; else it stops at **1NF**.',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2025 Q.57 Highest NF Check: $R(A,B,C,D,E,F,G)$ with $F = \\{A \\to BCEF,\\; E \\to DG,\\; BC \\to A\\}$ and CKs $= \\{A, BC\\}$. What is the highest normal form of $R$?',
              solution:
                '1) `A -> BCEF`: `A` is a superkey (BCNF ok).\n2) `BC -> A`: `BC` is a superkey (BCNF ok).\n3) `E -> DG`: `E` is NOT a superkey, and `D, G` are NOT prime (`Prime = {A,B,C}`) $\\implies$ fails **3NF** & **BCNF**! Does `E -> DG` fail **2NF**? NO, because `E` is NOT a proper subset of `A` or `BC`! What about partial dependencies from `B` or `C`? $B^+=B, C^+=C$ (no non-trivial FDs!). Therefore $R$ is in **2NF** (and NOT 3NF/BCNF)!',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: 'Every relation schema admits a decomposition into BCNF that is BOTH lossless-join AND dependency-preserving.',
            reality:
              'FALSE! Every relation admits a **lossless** BCNF decomposition, and every relation admits a **lossless + dependency-preserving** 3NF decomposition—but BCNF cannot always preserve all FDs!',
            counterExample:
              '$R(A,B,C)$ with $\\{AB \\to C,\\; C \\to B\\}$ is in 3NF, has NO dependency-preserving BCNF decomposition.',
          },
          {
            myth: 'Any FD whose LHS is not a candidate key violates 2NF.',
            reality:
              'FALSE! 2NF ONLY forbids **partial dependencies** where a **proper subset** of a candidate key determines a non-prime attribute. Transitive dependencies (`NonPrime -> NonPrime` like `E -> DG` in GATE 2025 Q.57) satisfy 2NF and violate 3NF!',
            counterExample:
              'In `R(A,B,C)` with `A -> B` and `B -> C` (CK = `A`), `B -> C` satisfies 2NF because `B` is not a proper subset of `A`, and fails 3NF.',
          },
          {
            myth: 'If $R_1 \\cap R_2 \\neq \\emptyset$, then decomposing $R$ into $R_1$ and $R_2$ is lossless.',
            reality:
              'FALSE! Having a common attribute is NOT enough—the common attribute(s) must functionally determine all of $R_1$ OR all of $R_2$!',
            counterExample:
              'Splitting `R(A,B,C)` with `A -> B` into `R1(A,B)` and `R2(B,C)` shares `B`, yet `B+ = {B}` determines neither `R1` nor `R2` $\\implies$ **Lossy**!',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Module 13',
            targetWeek: 6,
            topic: 'Star Schema vs Snowflake Schema Normalization',
            whyItMatters:
              'Snowflaking decomposes Dimension tables into 3NF/BCNF (removing transitive FDs like `City -> State -> Country`), whereas Star Schema intentionally stops at 2NF to avoid join overhead (remember GATE 2025 Q.16!).',
          },
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Feature Engineering SQL Pipelines (Lossless Re-Joins)',
            whyItMatters:
              'Joining split feature tables on a non-key attribute produces a Cartesian cross-join explosion (lossy join), silently inflating dataset row counts and corrupting train/validation splits.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm12-c2-ht1',
        title: 'The 15-Second L-M-R Engine for Finding ALL Candidate Keys',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 · Q.17', 'GATE DA 2025 · Q.57'],
        problemStatement:
          'Given a 5–7 attribute relation $R$ and 3–5 FDs, determine the exact set of all Candidate Keys without missing hidden alternate keys.',
        triggerCue:
          'You see `R(A,B,C,D,E...)` and are asked for "all candidate keys", "number of candidate keys", or "prime attributes".',
        bruteForceTrap:
          'Finding ONE key (like `AD` or `A`) and stopping early, or brute-forcing all $2^n - 1$ subsets.',
        mentalShift:
          'Classify attributes into **L** (LHS-only), **R** (RHS-only), **M** (both), **N** (neither). Lock in $E_0 = L \\cup N$, then grow ONLY along **M** via breadth-first levels while pruning supersets!',
        steps: [
          {
            label: 'Step 1 · Compute Essential Core $E_0 = L \\cup N$',
            detail:
              'Scan all RHSs of non-trivial FDs. Any attribute missing from every RHS belongs to $E_0$. If $E_0^+ = R$, stop immediately: $E_0$ is the unique key!',
          },
          {
            label: 'Step 2 · Identify Expandable Pool $M$',
            detail:
              'Discard all **R-only** attributes (they NEVER appear in any minimal candidate key). Only attributes in $M$ can join $E_0$.',
          },
          {
            label: 'Step 3 · Level-Order Closure Expansion',
            detail:
              'Test $E_0 \\cup \\{m\\}$ for each $m \\in M$; mark any hitting $R$ as a CK. Then test pairs from remaining $M$ attributes not yet forming a superset of a found CK, and so on.',
          },
        ],
        lockInTakeaway:
          'In GATE DA 2026 Q.17 (`A->BC, CD->E, E->A`), `D` is L-only and `B` is R-only, shrinking 31 subsets down to testing just `{AD, CD, ED}`!',
      },
      {
        id: 'm12-c2-ht2',
        title: 'Diagnosing Highest Normal Form & Lossless/DP Splits',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2025 · Q.57', 'GATE DA 2025 · Q.16', 'GATE DA 2024 · Q.46'],
        problemStatement:
          'Given $R$ and $F$, identify the highest normal form satisfied (1NF/2NF/3NF/BCNF), pinpoint violating FDs, and check whether a candidate decomposition is lossless and dependency-preserving.',
        triggerCue:
          'MSQs asking "highest normal form is X", "which FD violates BCNF/3NF", or "which operator runs more often when dependency preservation fails".',
        bruteForceTrap:
          'Confusing a transitive non-prime dependency (`E -> DG`) with a 2NF partial dependency, or forgetting to check if an RHS attribute is prime before failing 3NF.',
        mentalShift:
          'Find **all** CKs first so you know the exact **Prime** set. Then grade every non-trivial FD with 3 yes/no checks: (1) LHS superkey? (2) RHS prime? (3) LHS $\\subsetneq$ some CK?',
        steps: [
          {
            label: 'Step 1 · List CKs & Prime Attributes',
            detail:
              'Run the L-M-R engine to get the complete Prime set (union of all CKs).',
          },
          {
            label: 'Step 2 · Grade Every FD in F',
            detail:
              'Note: Check BOTH given FDs AND derived partial dependencies (e.g., if `AB` is a CK and `A -> C, C -> D`, then `A -> D` is also a partial dependency!).',
          },
          {
            label: 'Step 3 · Check Decomposition Losslessness',
            detail:
              'For binary split $(R_1, R_2)$, compute $(R_1 \\cap R_2)^+$. If it covers $R_1$ or $R_2$, it is lossless. For DP, check if FDs local to $R_1$ and $R_2$ imply all of $F$.',
          },
        ],
        lockInTakeaway:
          'Always test **all** CKs before grading 3NF—an alternate key can turn an attribute prime and rescue 3NF!',
      },
    ],
    arsenalCards: [
      {
        id: 'm12-c2-ar1',
        badge: 'CARD 12.4 · CANDIDATE KEYS',
        whenYouSpot: 'Schema $R$ + FD set $F$ asking for all candidate keys or count of keys',
        directWeaponLatex: 'E_0 = L \\cup N \\subseteq \\text{Every CK}, \\qquad \\text{Expand only with } M',
        instantRule:
          'Attributes never on any RHS ($L \\cup N$) are mandatory in EVERY key; attributes never on any LHS ($R$-only) are NEVER in any key.',
        tenSecondExample: 'R(A,B,C,D,E), {A->BC, CD->E, E->A}: D mandatory, B out, M={A,C,E} => AD, CD, ED (2026 Q.17).',
        oneFatalTrap: 'Never stop after finding 1 candidate key—always check swaps via M attributes.',
      },
      {
        id: 'm12-c2-ar2',
        badge: 'CARD 12.5 · NORMAL FORMS',
        whenYouSpot: 'Question asking highest NF (2NF / 3NF / BCNF) or which FD violates BCNF',
        directWeaponLatex: '\\text{BCNF}: X\\text{ superkey} \\quad|\\quad \\text{3NF}: X\\text{ superkey} \\lor A\\in\\text{Prime}',
        instantRule:
          '2NF bans ONLY proper-subset-of-CK -> non-prime. Transitive non-prime -> non-prime passes 2NF and fails 3NF/BCNF.',
        tenSecondExample: 'CKs={A, BC}, E->DG: E is not subset of A or BC => in 2NF! D,G non-prime => fails 3NF/BCNF (2025 Q.57).',
        oneFatalTrap: 'Checking 3NF using only ONE primary key instead of Prime = union of ALL candidate keys.',
      },
      {
        id: 'm12-c2-ar3',
        badge: 'CARD 12.6 · DECOMPOSITION',
        whenYouSpot: 'Lossless join vs Dependency preservation (3NF vs BCNF trade-off)',
        directWeaponLatex: '\\text{Lossless}(R_1, R_2) \\iff R_1 \\subseteq (R_1 \\cap R_2)^+ \\;\\lor\\; R_2 \\subseteq (R_1 \\cap R_2)^+',
        instantRule:
          '3NF ALWAYS achieves Lossless + Dependency Preserving. BCNF ALWAYS achieves Lossless, NOT always Dependency Preserving (forces JOINs to verify lost FDs, 2025 Q.16).',
        tenSecondExample: 'R(A,B,C), {AB->C, C->B}: BCNF split (C,B),(A,C) is lossless but loses AB->C.',
        oneFatalTrap: 'Assuming $R_1 \\cap R_2 \\neq \\emptyset$ alone guarantees a lossless join.',
      },
    ],
    questions: [
      {
        id: 'm12-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Attribute Closure',
        marks: 1,
        type: 'MCQ',
        stem: 'Consider $R(A, B, C, D)$ with functional dependencies $F = \\{AB \\to C,\\; C \\to D,\\; D \\to A\\}$. Which of the following is NOT a candidate key of $R$?',
        options: [
          {
            id: 'A',
            text: '$AB$',
            whyTrueOrFalse: 'False (it IS a CK): $(AB)^+ = \\{A,B,C,D\\}$, and $A^+=\\{A\\}, B^+=\\{B\\}$.',
          },
          {
            id: 'B',
            text: '$BC$',
            whyTrueOrFalse: 'False (it IS a CK): $(BC)^+ = \\{B,C,D,A\\}$, and $B^+=\\{B\\}, C^+=\\{C,D,A\\}$.',
          },
          {
            id: 'C',
            text: '$BD$',
            whyTrueOrFalse: 'False (it IS a CK): $(BD)^+ = \\{B,D,A,C\\}$, and $B^+=\\{B\\}, D^+=\\{D,A\\}$.',
          },
          {
            id: 'D',
            text: '$CD$',
            whyTrueOrFalse: 'True (NOT a CK): $(CD)^+ = \\{C,D,A\\}$, missing $B$ because $B$ is L-only!',
          },
        ],
        correctOptions: ['D'],
        triggerHint: 'Which attribute never appears on any RHS?',
        intuitiveSolution: [
          '$B$ never appears on any RHS, so $B$ MUST belong to every candidate key.',
          '$CD$ does not contain $B$, and $(CD)^+ = \\{C,D,A\\} \\neq R$.',
          'Expanding $B$ with $A, C, D$ gives candidate keys $AB, BC, BD$.',
        ],
        directShortcutUsed: 'L-only attribute $B$ must be in every key $\\implies CD$ is immediately disqualified.',
      },
      {
        id: 'm12-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.17',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem: 'Consider a relation $R(A, B, C, D, E)$ with the set of functional dependencies $F = \\{A \\to BC,\\; CD \\to E,\\; E \\to A\\}$. Which option lists **all** the candidate keys of $R$?',
        options: [
          {
            id: 'A',
            text: '$AD, ED$',
            whyTrueOrFalse: 'False: misses $CD$, since $(CD)^+ = \\{C,D,E,A,B\\} = R$.',
          },
          {
            id: 'B',
            text: '$AD, CD, ED$',
            whyTrueOrFalse: 'True: $D$ is L-only (mandatory), $B$ is R-only (excluded), and $AD, CD, ED$ all close to $R$.',
          },
          {
            id: 'C',
            text: '$A, CD, ED$',
            whyTrueOrFalse: 'False: $A^+ = \\{A,B,C\\}$ does not contain $D$ or $E$.',
          },
          {
            id: 'D',
            text: '$AD, BD, CD, ED$',
            whyTrueOrFalse: 'False: $(BD)^+ = \\{B,D\\} \\neq R$.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Check which attribute is missing from all RHSs.',
        intuitiveSolution: [
          '$D$ never appears on any RHS ($L$-only), so $D$ must be in every candidate key.',
          '$B$ never appears on any LHS ($R$-only), so $B$ cannot be part of a minimal key unless $D^+=R$ (false).',
          'Testing $D$ paired with each attribute of $M = \\{A,C,E\\}$: $(AD)^+ = R$, $(CD)^+ = R$, $(ED)^+ = R$.',
        ],
        directShortcutUsed: 'L-M-R Engine: Core $= \\{D\\}$, expand with $M = \\{A,C,E\\} \\implies AD, CD, ED$.',
      },
      {
        id: 'm12-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.57',
        year: 2025,
        marks: 2,
        type: 'MSQ',
        stem: 'Consider a relation schema $R(A, B, C, D, E, F, G)$ with functional dependencies $F = \\{A \\to BCEF,\\; E \\to DG,\\; BC \\to A\\}$. Which of the following statements are TRUE?',
        options: [
          {
            id: 'A',
            text: 'The relation has 3 candidate keys: $A$, $BC$, and $E$.',
            whyTrueOrFalse: 'False: $E^+ = \\{E, D, G\\} \\neq R$, so $E$ is not a superkey.',
          },
          {
            id: 'B',
            text: 'The set of all candidate keys of $R$ is $\\{A, BC\\}$.',
            whyTrueOrFalse: 'True: $A^+ = R$, $(BC)^+ = R$, while $B^+, C^+, E^+, (BE)^+, (CE)^+$ do not reach $R$.',
          },
          {
            id: 'C',
            text: '$R$ is in 3NF, and only $E \\to DG$ violates BCNF.',
            whyTrueOrFalse: 'False: $E \\to DG$ also violates 3NF because $E$ is not a superkey and $D, G$ are non-prime!',
          },
          {
            id: 'D',
            text: '$R$ is in 2NF (but not in 3NF), and $E \\to DG$ violates both 3NF and BCNF.',
            whyTrueOrFalse: 'True: No proper subset of $A$ or $BC$ determines a non-prime attribute (so 2NF holds), while $E \\to DG$ violates 3NF and BCNF.',
          },
        ],
        correctOptions: ['B', 'D'],
        triggerHint: 'Compute CKs first, then test whether `E` is a proper subset of any CK!',
        intuitiveSolution: [
          '$A^+ = \\{A,B,C,E,F,D,G\\} = R$ and $(BC)^+ = \\{B,C,A,E,F,D,G\\} = R$. Neither $B$ nor $C$ alone reaches $R$, and $E^+=\\{E,D,G\\}$. Thus CKs $= \\{A, BC\\}$.',
          'Prime attributes $= \\{A, B, C\\}$; non-prime $= \\{D, E, F, G\\}$.',
          'Check 2NF: proper subsets of CKs are $\\{B\\}$ and $\\{C\\}$, neither of which determines any non-prime attribute $\\implies R$ IS in 2NF.',
          'Check 3NF/BCNF on $E \\to DG$: $E$ is not a superkey and $D,G$ are non-prime $\\implies$ violates both 3NF and BCNF.',
        ],
        directShortcutUsed: 'CKs `{A, BC}` $\\implies$ `E -> DG` passes 2NF (not partial) and fails 3NF/BCNF.',
      },
      {
        id: 'm12-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.46 Pattern',
        year: 2024,
        marks: 2,
        type: 'MSQ',
        stem: 'Consider a relation $R(U, V, W, X, Y, Z)$ with the set of functional dependencies $F = \\{U \\to V,\\; U \\to W,\\; WX \\to Y,\\; WX \\to Z,\\; V \\to X\\}$. Which of the following functional dependencies can be derived from $F$ (i.e., lie in $F^+$)?',
        options: [
          {
            id: 'A',
            text: '$U \\to YZ$',
            whyTrueOrFalse: 'True: $U^+ = \\{U, V, W, X, Y, Z\\}$ contains both $Y$ and $Z$.',
          },
          {
            id: 'B',
            text: '$V \\to Y$',
            whyTrueOrFalse: 'False: $V^+ = \\{V, X\\}$, which lacks $W$ needed to trigger $WX \\to Y$.',
          },
          {
            id: 'C',
            text: '$VW \\to Y$',
            whyTrueOrFalse: 'True: $(VW)^+ = \\{V, W, X, Y, Z\\}$ via $V \\to X$ then $WX \\to Y, Z$.',
          },
          {
            id: 'D',
            text: '$WX \\to U$',
            whyTrueOrFalse: 'False: $(WX)^+ = \\{W, X, Y, Z\\}$ cannot reach $U$.',
          },
        ],
        correctOptions: ['A', 'C'],
        triggerHint: 'Compute $X^+$ for each LHS (`U`, `V`, `VW`, `WX`) and check RHS containment.',
        intuitiveSolution: [
          '$U^+ = \\{U,V,W\\} \\to \\{U,V,W,X\\} \\to \\{U,V,W,X,Y,Z\\} \\implies U \\to YZ$ holds.',
          '$V^+ = \\{V,X\\} \\implies V \\to Y$ fails.',
          '$(VW)^+ = \\{V,W,X,Y,Z\\} \\implies VW \\to Y$ holds.',
          '$(WX)^+ = \\{W,X,Y,Z\\} \\implies WX \\to U$ fails.',
        ],
        directShortcutUsed: '$X \\to Y \\in F^+ \\iff Y \\subseteq X^+$.',
      },
      {
        id: 'm12-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.16 Pattern',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Suppose a relation $R$ in 3NF is decomposed into BCNF relations $R_1, R_2$ in a **lossless** manner, but the decomposition is **not dependency-preserving** (an FD $X \\to Y$ spans across $R_1$ and $R_2$). Which relational operator will the DBMS have to execute more frequently during insertions/updates to enforce $X \\to Y$?',
        options: [
          {
            id: 'A',
            text: 'Selection ($\\sigma$)',
            whyTrueOrFalse: 'False: selection only scans rows inside a single relation.',
          },
          {
            id: 'B',
            text: 'Projection ($\\pi$)',
            whyTrueOrFalse: 'False: projection removes columns from one relation.',
          },
          {
            id: 'C',
            text: 'Join ($\\bowtie$)',
            whyTrueOrFalse: 'True: because $X$ and $Y$ sit in different decomposed tables, enforcing $X \\to Y$ requires joining $R_1 \\bowtie R_2$.',
          },
          {
            id: 'D',
            text: 'Set Difference ($-$)',
            whyTrueOrFalse: 'False: set difference requires union-compatible schemas, not cross-table FD checks.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'If an FD’s attributes live in two separate tables, how do you bring them together to check uniqueness?',
        intuitiveSolution: [
          'When an FD $X \\to Y$ is not contained in any single decomposed table, verifying it on updates requires reconstructing the combined tuples via `Join` ($R_1 \\bowtie R_2$).',
          'That exact runtime penalty is why designers sometimes prefer dependency-preserving 3NF over BCNF!',
        ],
        directShortcutUsed: 'Lost FD across tables $\\implies$ `Join` required on every update check.',
      },
      {
        id: 'm12-c2-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Tricky · Candidate Key Counting',
        marks: 2,
        type: 'NAT',
        stem: 'How many distinct **candidate keys** does relation $R(A, B, C, D, E)$ have under the functional dependencies $F = \\{A \\to B,\\; B \\to A,\\; C \\to D,\\; D \\to C,\\; AC \\to E\\}$?',
        natAnswer: { min: 4, max: 4, exactDisplay: '4' },
        triggerHint: 'Notice symmetric mutual pairs $A \\leftrightarrow B$ and $C \\leftrightarrow D$, plus $E$ only on RHS!',
        intuitiveSolution: [
          '$E$ appears ONLY on the RHS ($R$-only), so $E$ is never in any minimal candidate key.',
          '$A \\leftrightarrow B$ means $A$ and $B$ generate each other; similarly $C \\leftrightarrow D$ means $C$ and $D$ generate each other.',
          'Singletons $A^+=\\{A,B\\}$ and $C^+=\\{C,D\\}$ cannot reach the other pair or $E$.',
          'Choosing 1 attribute from $\\{A, B\\}$ and 1 attribute from $\\{C, D\\}$ gives $(AC)^+ = (AD)^+ = (BC)^+ = (BD)^+ = R$.',
          'Total minimal candidate keys $= 2 \\times 2 = 4$.',
        ],
        directShortcutUsed: 'Two independent 2-cycles $\\{A\\leftrightarrow B\\} \\times \\{C\\leftrightarrow D\\}$ give $2 \\times 2 = 4$ keys.',
      },
    ],
  },

  // ============================================================================
  // CHAPTER 3: Relational Algebra, Division, Outer Joins & TRC
  // ============================================================================
  {
    id: 'dbms-ch3',
    number: 3,
    title: 'Relational Algebra, Division, Outer Joins & Tuple Relational Calculus',
    shortTitle: 'Relational Algebra & TRC',
    estimatedHours: 4.5,
    dayLabel: 'Week 5 · Day 3',
    tagline:
      'Let’s trace multi-join Relational Algebra expressions inside-out without tripping on zero-row joins, crack Relational Division ($\\div$) via double negation, and write universally quantified Tuple Relational Calculus ($\\forall / \\exists$) without the classic $\\land$-vs-$\\implies$ bug.',
    syllabusMapping: [
      'Relational algebra: Selection, Projection, Set operations, Joins (Natural, Theta, Outer) & Division',
      'Tuple Relational Calculus (TRC): Safe queries & quantifiers',
      'Set semantics vs SQL multiset (bag) semantics',
    ],
    whatIsImportant: [
      'Subset inclusion via set difference: $A \\subseteq B \\iff A - B = \\emptyset$ (GATE DA 2024 Q.26)',
      'Nested Natural Join + Selection + Projection execution & empty-join detection (GATE DA 2025 Q.17 & 2026 Q.42)',
      'Relational Division ($R \\div S$): "For ALL" queries & exact execution on tables (GATE DA 2025 Q.62)',
      'Tuple Relational Calculus (TRC) with $\\exists$ / $\\forall$ + set duplicate elimination (GATE DA 2026 Q.59)',
    ],
    whatIsNotImportant: [
      'Domain Relational Calculus (DRC) obscure syntactic variations — TRC is the syllabus and PYQ focus',
      'Relational Algebra query-tree cost optimization formulas using disk seek latencies (covered via B+ Trees in Module 13)',
    ],
    inboundStream: 'First-Order Logic quantifiers ($\\forall \\implies$ vs $\\exists \\land$) from Module 11 + Foreign Key joins from Ch.1.',
    outboundStream: [
      'Ch.4 SQL translation (`NOT EXISTS`, `LEFT JOIN`, `DISTINCT` bag vs set)',
      'Module 13 Data Warehousing Star-Join filtering pushdowns',
      'Module 14 Cohort & funnel SQL feature pipelines',
    ],
    glossary: [
      {
        term: 'Set Semantics (Duplicate Elimination)',
        plainEnglish:
          'Both Relational Algebra and Tuple Relational Calculus treat every relation as a pure mathematical set—so duplicate rows are automatically merged into one copy after every projection or union (unlike default SQL!).',
        tinyExample: 'If `(1, 10)` and `(1, 30)` both match a query and you project `A`, RA/TRC returns `{(1)}`—just $1$ tuple.',
      },
      {
        term: 'Selection',
        symbol: '$\\sigma_P(R)$',
        plainEnglish:
          'A horizontal row filter that keeps only the tuples in table $R$ satisfying condition $P$, leaving all columns untouched.',
        tinyExample: '$\\sigma_{\\text{color}=\\text{"red"}}(\\text{Car})$ keeps only red car rows.',
      },
      {
        term: 'Projection',
        symbol: '$\\pi_X(R)$',
        plainEnglish:
          'A vertical column picker that keeps only the listed attributes $X$ and automatically strips away any duplicate rows that result.',
        tinyExample: '$\\pi_{\\text{branch}}(\\text{Loan})$ returns the set of distinct branches that issued loans.',
      },
      {
        term: 'Set Difference & Subset Inclusion',
        symbol: '$R - S$',
        plainEnglish:
          'Keeps rows present in $R$ but absent from $S$ (requiring matching schemas). Testing $A - B = \\emptyset$ is the standard RA way to assert subset inclusion $A \\subseteq B$.',
        tinyExample: '$\\pi_{\\text{name}}(\\text{Team}) - (\\pi_{\\text{name}}(\\text{Def}) \\cup \\pi_{\\text{name}}(\\text{Fwd})) = \\emptyset$ means every Team player is a Defender or Forward.',
      },
      {
        term: 'Cartesian Product',
        symbol: '$R \\times S$',
        plainEnglish:
          'Pairs every single row of $R$ with every single row of $S$, yielding $|R| \\cdot |S|$ combined tuples—the raw building block for joins and division.',
        tinyExample: 'Crossing $3$ students with $2$ mandatory tests builds all $3 \\times 2 = 6$ ideal `(student, test)` pairs.',
      },
      {
        term: 'Natural Join & Theta Join',
        symbol: '$R \\bowtie S$',
        plainEnglish:
          'Combines rows from $R$ and $S$ that match on all identically named attributes (Natural Join) or satisfy a custom condition $\\theta$ (Theta Join), silently dropping unmatched rows and `NULL`s.',
        tinyExample: 'Joining `Emp(Eid, Did)` with `Dept(Did, Dname)` pairs only rows with equal non-`NULL` `Did` values.',
      },
      {
        term: 'Outer Joins (Left, Right, Full)',
        symbol: '$\\bowtie_L,\\; \\bowtie_R,\\; \\bowtie_F$',
        plainEnglish:
          'Join variants that refuse to lose unmatched rows: Left keeps all rows of $R$, Right keeps all rows of $S$, and Full keeps unmatched rows from both sides by padding missing columns with `NULL`.',
        tinyExample: 'An employee with `Did = NULL` vanishes in `Emp ⋈ Dept` but survives in `Emp ⟕ Dept` with `Dname = NULL`.',
      },
      {
        term: 'Relational Division',
        symbol: '$R \\div S$',
        plainEnglish:
          'The “for ALL” operator of Relational Algebra: $R(A,B) \\div S(B)$ finds every $A$-value that is paired in $R$ with **every single** $B$-value listed in $S$ (extra $B$-values outside $S$ are allowed!).',
        tinyExample: 'If Anu took `{T1, T2, T3}` and required tests are `{T1, T2}`, `Taken ÷ Req` keeps `{Anu}`.',
      },
      {
        term: 'Tuple Relational Calculus (TRC)',
        symbol: '$\\{ t \\mid P(t) \\}$',
        plainEnglish:
          'A declarative, logic-based query language (what to retrieve, not how) that describes the desired output tuples $t$ using First-Order Logic predicates and quantifiers $\\exists$ and $\\forall$.',
        tinyExample: '$\\{ t \\mid \\exists x \\in X\\,(t[A] = x[A] \\land x[B] > 10) \\}$ describes all $A$-values with $B > 10$.',
      },
      {
        term: 'Safe TRC Expression',
        plainEnglish:
          'A TRC query guaranteed to return a finite answer using only values from the database’s active domain (constants + table entries), preventing infinite results like $\\{ t \\mid \\neg(t \\in R) \\}$.',
        tinyExample: '$\\{ t \\mid t \\in R \\land \\neg(t \\in S) \\}$ is safe, whereas $\\{ t \\mid \\neg(t \\in S) \\}$ is unsafe.',
      },
      {
        term: 'Selection Pushdown',
        symbol: '$\\sigma_P(R \\bowtie T) = \\sigma_P(R) \\bowtie T$',
        plainEnglish:
          'A core query-optimization equivalence: whenever a filter condition $P$ mentions only columns of table $R$, you can filter $R$ *before* joining with $T$ to shrink intermediate rows dramatically.',
        tinyExample: 'Filtering `maker = "ABC"` on `Make` before joining with `Car` and `Own` avoids joining non-ABC cars.',
      },
    ],
    generatorId: 'fd-candidate-keys-gen',
    concepts: [
      {
        id: 'm12-c3-1',
        title: 'Joins, Outer Joins & Set-Difference Inclusion Tricks',
        subtitle:
          'Why Natural Join silently drops unmatched/NULL rows, why Outer Joins restore them, and how $A - B = \\emptyset$ encodes $\\subseteq$',
        priority: 'core-pillar',
        buildsOn: 'Set operations & Foreign Keys from Ch.1',
        toyExample: {
          title: '3 Employees & 2 Departments Under 4 Join Flavors',
          scenario:
            'Let `Emp(Eid, Did) = {(1, 10), (2, 20), (3, NULL)}` and `Dept(Did, Dname) = {(10, "AI"), (30, "ML")}`.',
          walkthroughSteps: [
            '1. **Natural Join (`Emp ⋈ Dept`):** Matches ONLY `Did = 10` $\\implies$ **`1` row** `(1, 10, "AI")`. `Emp 2`, `Emp 3` (`NULL`!), and `Dept 30` all vanish!',
            '2. **Left Outer Join (`Emp ⟕ Dept`):** Keeps all 3 rows of `Emp`, padding unmatched right columns with `NULL` $\\implies$ **`3` rows**.',
            '3. **Right Outer Join (`Emp ⟖ Dept`):** Keeps all 2 rows of `Dept` $\\implies$ **`2` rows** (`(1, 10, "AI")` and `(NULL, 30, "ML")`).',
            '4. **Full Outer Join (`Emp ⟗ Dept`):** Keeps all unmatched rows from BOTH sides $\\implies$ **`4` rows**!',
          ],
          ahaMoment:
            'Keep this contrast vivid: Inner and Natural Joins quietly **discard** both `NULL` keys and unmatched rows, whereas Outer Joins rescue every unmatched row by padding the missing side with `NULL`—and when join keys match uniquely, `Full = Left + Right - Inner`!',
        },
        theoremAndFormula: {
          statement:
            'Relational Algebra is **set-based** (duplicates are always eliminated after $\\pi$ or $\\cup$). Subset inclusion $A \\subseteq B$ is tested via Set Difference, and **Outer Joins** preserve unmatched tuples using `NULL` padding (note: Outer Joins are **not** associative!):',
          formulaLatex:
            'A \\subseteq B \\iff A - B = \\emptyset \\qquad\\text{and}\\qquad \\pi_X(R - S) \\not\\equiv \\pi_X(R) - \\pi_X(S)',
          plainEnglishDecoding:
            'Whenever an English sentence says “Every $X$ is either $Y$ or $Z$”, look immediately for `All_X - (Y U Z) = empty` (just like GATE DA 2024 Q.26). And guard against one favorite MSQ trap: projection $\\pi$ distributes over union ($\\cup$), NEVER over set difference ($-$) or intersection ($\\cap$)!',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2025 Q.17 Pattern: Interpret $\\pi_{\\text{owner}}(\\text{Own} \\bowtie \\sigma_{\\text{color}=\\text{"red"}}(\\text{Car} \\bowtie \\sigma_{\\text{maker}=\\text{"ABC"}}\\text{Make}))$.',
              solution:
                'Step inside-out: pick maker `"ABC"` $\\to$ join with `Car` & filter `"red"` $\\to$ join with `Own` $\\to$ project `owner`. Meaning: **Owners who own at least one red car made by ABC** (NOT "all red cars" or "only red cars"!).',
            },
            {
              prompt:
                'GATE DA 2026 Q.42 Pattern: Suppose $A = \\sigma_{Q=Q_3 \\lor R=R_2}(X \\bowtie Y)$ produces `{(P1, Q3, R1)}` and $B = \\sigma_{S>1}(Y \\bowtie Z)$ produces `{(Q1, R2, S4)}`. What does $\\Pi_{PRS}(A \\bowtie B)$ return?',
              solution:
                'Common attributes between $A(P,Q,R)$ and $B(Q,R,S)$ are $(Q, R)$. Since `(Q3, R1) != (Q1, R2)`, the natural join $A \\bowtie B$ finds zero matching pairs $\\implies$ **Zero rows**!',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: '$\\pi_X(R - S) = \\pi_X(R) - \\pi_X(S)$ always holds.',
            reality:
              'FALSE! $\\pi_X(R) - \\pi_X(S) \\subseteq \\pi_X(R - S)$, and can be strictly smaller when two rows agree on $X$ but differ on another column!',
            counterExample:
              '$R=\\{(1, a)\\}, S=\\{(1, b)\\}$: $\\pi_X(R-S)=\\{1\\}$, whereas $\\pi_X(R)-\\pi_X(S)=\\emptyset$.',
          },
          {
            myth: 'If $R$ has 4 rows and $S$ has 2 rows, `R ⟕ S` always has exactly 4 rows.',
            reality:
              'FALSE! If one row of $R$ matches **3 rows** in $S$, `R ⟕ S` expands to $3 + 3 = 6$ rows! Left Outer Join has **at least** $|R|$ rows, not at most $|R|$.',
            counterExample:
              '1 Department matched with 5 Employees via `Dept ⟕ Emp` produces 5 rows, even if `Dept` had 1 row!',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Module 13',
            targetWeek: 6,
            topic: 'Star-Join Predicate Pushdown in OLAP Engines',
            whyItMatters:
              'Applying $\\sigma$ to small Dimension tables (`Make`, `Date`) BEFORE joining with large Fact tables (just like GATE DA 2025 Q.17) shrinks intermediate join sizes by $100\\times$.',
          },
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Feature Engineering SQL Pipelines (LEFT JOIN Safety)',
            whyItMatters:
              'Using Natural/Inner Join when attaching optional user features silently drops cold-start users with `NULL`s; always use `LEFT JOIN` from the master label cohort.',
          },
        ],
      },
      {
        id: 'm12-c3-2',
        title: 'Relational Division (`÷`) — The "For All" Operator',
        subtitle:
          'How double-negation turns "every required item" into a 10-second cancellation check',
        priority: 'core-pillar',
        buildsOn: 'Concept 3.1 (Set Difference & Cartesian Product)',
        toyExample: {
          title: 'Who Completed ALL Mandatory Gate Mock Tests?',
          scenario:
            'Let `Req(Test) = {T1, T2}` and `Taken(Student, Test) = {(Anu, T1), (Anu, T2), (Anu, T3), (Raj, T1), (Dev, T2)}`. Find `Taken ÷ Req`.',
          walkthroughSteps: [
            '1. **List all candidates:** `Π_Student(Taken) = {Anu, Raj, Dev}`.',
            '2. **Ideal All-Pairs Grid:** `Candidates × Req` needs `(Anu,T1),(Anu,T2), (Raj,T1),(Raj,T2), (Dev,T1),(Dev,T2)`.',
            '3. **Subtract actual `Taken` (Disqualification List):** Missing pairs are `(Raj, T2)` and `(Dev, T1)`. So `Disqualified = {Raj, Dev}`.',
            '4. **Subtract Disqualified from Candidates:** `{Anu, Raj, Dev} - {Raj, Dev} = {Anu}`! Notice Anu’s extra test `T3` did NOT disqualify her!',
          ],
          ahaMoment:
            'Think of Relational Division as a checklist inspection: it asks **“Does candidate $a$ cover $\\supseteq$ every required item in $S$?”**—NOT exact equality! Completing extra bonus items outside $S$ never disqualifies you.',
        },
        theoremAndFormula: {
          statement:
            'Given $R(A, B)$ and $S(B)$ where $B \\subseteq \\text{Attr}(R)$ and $A = \\text{Attr}(R) \\setminus B$, the division $R \\div S$ returns all $A$-tuples paired in $R$ with **every** tuple of $S$, expressed in the 5 basic RA operators as:',
          formulaLatex:
            'R \\div S = \\Pi_A(R) - \\Pi_A\\big((\\Pi_A(R) \\times S) - R\\big)',
          plainEnglishDecoding:
            'Read that famous formula inside-out like a three-step story: first build every ideal `(candidate, requirement)` pair ($\\Pi_A(R) \\times S$), next subtract what actually happened ($- R$) to catch everyone who missed at least one requirement, and finally subtract those disqualified folks from all candidates $\\Pi_A(R)$!',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2025 Q.62 Pattern: Evaluate $\\pi_{\\text{branch, customer}}(\\text{Loan} \\bowtie \\text{Borrower}) \\div \\pi_{\\text{branch}}(\\text{Loan})$.',
              solution:
                'Divisor $S = \\pi_{\\text{branch}}(\\text{Loan})$ is the set of all branches that issued loans. The dividend pairs each customer with the branches where they hold a loan. Thus the division returns **customers who have a loan at EVERY branch in $S$**.',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: '$R(A,B) \\div S(B)$ drops $A$-values that are paired with extra $B$-values not present in $S$.',
            reality:
              'FALSE! Division checks subset inclusion ($\\{b : (a,b) \\in R\\} \\supseteq S$), NOT equality. Extra pairs do not hurt.',
            counterExample:
              'In the toy example above, Anu took `T3` outside `Req = {T1, T2}` and STILL remained in `Taken ÷ Req`.',
          },
          {
            myth: 'If $S$ contains a value $b^*$ that appears nowhere in $R$, then $R \\div S = \\Pi_A(R)$ by ignoring $b^*$.',
            reality:
              'FALSE! Every candidate $a \\in \\Pi_A(R)$ fails to pair with $b^*$, so $(\\Pi_A(R) \\times S) - R$ disqualifies EVERY candidate, making $R \\div S = \\emptyset$!',
            counterExample:
              'If `Req = {T1, T99}` and nobody took `T99`, zero students completed all required tests (`∅`).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Cohort Selection in Feature Engineering SQL Pipelines',
            whyItMatters:
              'Finding users who completed ALL funnel steps (or sensors that reported at ALL timestamps) is literally Relational Division translated into SQL `GROUP BY ... HAVING COUNT(DISTINCT step) = (SELECT COUNT(*) FROM Steps)`.',
          },
        ],
      },
      {
        id: 'm12-c3-3',
        title: 'Tuple Relational Calculus (TRC), Safety & Quantifier Pitfalls',
        subtitle:
          'Evaluating $\\exists$ and $\\forall$ queries directly on tables—and fixing the FOL implication trap',
        priority: 'high-yield',
        buildsOn: 'First-Order Logic quantifiers (Module 11)',
        toyExample: {
          title: 'Evaluating a 2-Table TRC Query (`X` & `Y`) with Set Deduplication',
          scenario:
            'Let $X(A,B) = \\{(1,10), (1,30), (2,20), (3,30)\\}$ and $Y(B,C) = \\{(10,15), (20,8), (30,12)\\}$. Evaluate:\n`{ t | exists x in X (t[A] = x[A] and exists y in Y (y[B] = x[B] and y[C] > 10)) }`.',
          walkthroughSteps: [
            '1. Scan $x = (1, 10)$: $y=(10, 15)$ has $15 > 10$ $\\checkmark \\implies$ outputs `t[A] = 1`.',
            '2. Scan $x = (1, 30)$: $y=(30, 12)$ has $12 > 10$ $\\checkmark \\implies$ outputs `t[A] = 1` (Wait: TRC is a **SET**, so `1` is NOT duplicated!).',
            '3. Scan $x = (2, 20)$: only $y=(20, 8)$ matches $B=20$, and $8 \\not> 10$ $\\implies$ fails.',
            '4. Scan $x = (3, 30)$: $y=(30, 12)$ has $12 > 10$ $\\checkmark \\implies$ outputs `t[A] = 3`.',
            '5. Final TRC set result = `{(1), (3)}` $\\implies$ **`2` tuples**!',
          ],
          ahaMoment:
            'Notice the subtle counting catch: even though `A = 1` succeeds through TWO different rows (`B = 10` and `B = 30`), TRC returns a pure mathematical **set**, so `t[A] = 1` is counted **only once**—the exact set-deduplication check tested in **GATE DA 2026 Q.59**!',
        },
        theoremAndFormula: {
          statement:
            'A Tuple Relational Calculus query $\\{ t \\mid P(t) \\}$ is **safe** only if every value in the result comes from the finite active domain of the database (constants + table values). Universal quantification over a filtered subset MUST use **implication** ($\\implies$), equivalently rewritten via negated existence:',
          formulaLatex:
            '\\forall x \\in R\\,\\big(Q(x) \\implies C(x)\\big) \\;\\equiv\\; \\neg\\exists x \\in R\\,\\big(Q(x) \\land \\neg C(x)\\big)',
          plainEnglishDecoding:
            'It is the exact same golden rule you mastered in First-Order Logic: pair $\\exists$ with $\\land$ (“there exists a row in $R$ matching $Q$ AND $C$”), and pair $\\forall$ with $\\implies$ (“for every row in $R$, IF it matches $Q$, THEN it satisfies $C$”).',
          workedMiniExamples: [
            {
              prompt:
                'Translate into safe TRC: "Find all departments $d$ where **every** employee in department $d$ earns $> 50000$."',
              solution:
                '$\\{ d \\mid d \\in \\text{Dept} \\land \\forall e \\in \\text{Emp}\\, (e.\\text{did} = d.\\text{did} \\implies e.\\text{sal} > 50000) \\}$. (If `Emp` has NO employees in $d$, the implication is vacuously true—add $\\exists e \\in \\text{Emp}(e.\\text{did}=d.\\text{did})$ if empty departments should be excluded!).',
            },
          ],
        },
        msqTraps: [
          {
            myth: '`{ t | forall e in Emp (e.did = t.did AND e.sal > 50000) }` finds departments whose employees all earn > 50000.',
            reality:
              'FALSE! Using $\\land$ instead of $\\implies$ asserts that **every employee in the entire company** works in department $t$! (Exact same FOL bug tested in GATE DA 2026 Q.14!).',
            counterExample:
              'As soon as any employee works in another department, $e.\\text{did} = t.\\text{did}$ is false, making the $\\land$ statement false for ALL departments!',
          },
          {
            myth: '`{ t | not (t in R) }` is a valid Relational Algebra equivalent TRC query.',
            reality:
              'FALSE! It is **unsafe** because infinitely many tuples outside the database satisfy $\\neg(t \\in R)$. Relational Algebra can only express **safe** TRC queries.',
            counterExample:
              'If $R$ has integers `{1, 2}`, `{t | t not in R}` includes `3, 4, 5, ...` ad infinitum.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Ch.4',
            targetWeek: 5,
            topic: 'SQL `NOT EXISTS` & `LEFT JOIN` Translation',
            whyItMatters:
              'SQL has NO `FOR ALL` keyword! Converting $\\forall x (Q(x) \\implies C(x))$ to $\\neg\\exists x(Q(x) \\land \\neg C(x))$ gives you the exact SQL `WHERE NOT EXISTS (...)` clause every time.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm12-c3-ht1',
        title: 'Executing Nested Join-Filter-Division Chains on Small Tables',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2025 · Q.62', 'GATE DA 2026 · Q.42'],
        problemStatement:
          'Given 2–3 small relations (4–8 rows each) and a nested RA expression with $\\sigma$, $\\bowtie$, $\\pi$, and/or $\\div$, compute the exact output tuples or row count.',
        triggerCue:
          'Parenthesized multi-join expressions like `(σ(X ⋈ Y)) ⋈ (σ(Y ⋈ Z))` or `π(..., ...)(A ⋈ B) ÷ π(...)(A)`.',
        bruteForceTrap:
          'Writing out massive intermediate cross-products before filtering, or forgetting to eliminate duplicate tuples after $\\pi$ before running $\\div$.',
        mentalShift:
          'Work **inside-out** while eliminating duplicates immediately at every $\\pi$! In a chain `(branch1) ⋈ (branch2)`, compute each branch’s projected key set first—if their common-attribute sets are disjoint, return **0 rows** immediately!',
        steps: [
          {
            label: 'Step 1 · Simplify Each Leaf Filter ($\\sigma$) First',
            detail:
              'Cross out rows failing $\\sigma$ directly on the small input tables before doing any join.',
          },
          {
            label: 'Step 2 · Join & Deduplicate Projections ($\\pi$)',
            detail:
              'Whenever $\\pi$ runs, collapse duplicate tuples into a pure set (unlike SQL!).',
          },
          {
            label: 'Step 3 · For Division ($R(A,B) \\div S(B)$), Build a Checklist Matrix',
            detail:
              'List the unique elements of $S(B)$ as columns and unique $A$-candidates as rows; tick each $(a, b) \\in R$. Only rows with **all** ticks survive!',
          },
        ],
        lockInTakeaway:
          'Checklists beat algebra for small tables: in GATE DA 2025 Q.62 (`Loan ⋈ Borrower ÷ Branch`), ticking branches per customer takes 20 seconds flat!',
      },
      {
        id: 'm12-c3-ht2',
        title: 'Translating Between RA Division (÷), TRC (∀/∃), and Set Difference',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2026 · Q.59', 'GATE DA 2024 · Q.26'],
        problemStatement:
          'Verify whether an English query ("every", "only", "at least one", "none") matches a candidate Relational Algebra or TRC formula.',
        triggerCue:
          'Options mixing $\\forall$, $\\exists$, $\\implies$, $\\land$, $\\setminus$, and $\\div$ to express subset/universal conditions.',
        bruteForceTrap:
          'Reading $\\forall x (P(x) \\land Q(x))$ quickly as "for all $P$, $Q$ holds", or confusing "at least one red car" with "only red cars".',
        mentalShift:
          'Use the **3-Anchor Filter**: (1) $\\forall$ MUST pair with $\\implies$ (never $\\land$); (2) "All X are Y" = `X - Y = ∅` (or `¬∃` counterexample); (3) "At least one" = plain `⋈` + `π` (no `÷` or `-` needed).',
        steps: [
          {
            label: 'Step 1 · Spot the Quantifier Strength',
            detail:
              '"At least one" $\\implies \\exists$ (plain join/projection). "Every / All / Only" $\\implies \\forall$, `-`, or `÷`.',
          },
          {
            label: 'Step 2 · Audit TRC Connectives & Safety',
            detail:
              'Reject any $\\forall x (\\text{membership} \\land \\dots)$ on sight, and reject any free variable lacking a positive domain bound.',
          },
          {
            label: 'Step 3 · Test With a 2-Row Counterexample',
            detail:
              'Give one entity 1 good link + 1 bad link (e.g., an owner with 1 red car AND 1 blue car) to separate "at least one" from "only".',
          },
        ],
        lockInTakeaway:
          'A 2-row test entity (1 matching + 1 non-matching link) instantly separates `⋈` ("at least one") from `÷` / `-` ("every / only")!',
      },
    ],
    arsenalCards: [
      {
        id: 'm12-c3-ar1',
        badge: 'CARD 12.7 · DIVISION (÷)',
        whenYouSpot: 'Query asking for entities linked to ALL items in set $S$, or `R ÷ S`',
        directWeaponLatex: 'R(A,B) \\div S(B) = \\Pi_A(R) - \\Pi_A\\big((\\Pi_A(R) \\times S) - R\\big)',
        instantRule:
          'Division checks $\\supseteq$ ("at least all of $S$"), allowing extra items. If $S$ contains an item absent from $R$, result is $\\emptyset$.',
        tenSecondExample: 'Taken={(A,T1),(A,T2),(A,T3),(B,T1)} ÷ {T1,T2} = {A} (extra T3 allowed!).',
        oneFatalTrap: 'Thinking $R \\div S$ rejects $A$-tuples that have extra $B$-values outside $S$.',
      },
      {
        id: 'm12-c3-ar2',
        badge: 'CARD 12.8 · RA & OUTER JOINS',
        whenYouSpot: 'Set difference inclusion check or Outer Join (`⟕`, `⟖`, `⟗`) row count',
        directWeaponLatex: 'A \\subseteq B \\iff A - B = \\emptyset, \\qquad \\pi_X(R - S) \\neq \\pi_X(R) - \\pi_X(S)',
        instantRule:
          'Relational Algebra eliminates duplicates (SET semantics). Natural Join drops NULLs & unmatched rows; Outer Joins pad unmatched rows with NULL.',
        tenSecondExample: 'Team \\ (Defender U Forward) = ∅ means every Team player is Defender or Forward (2024 Q.26).',
        oneFatalTrap: 'Distributing $\\pi$ over $-$ or assuming Left Outer Join is associative.',
      },
      {
        id: 'm12-c3-ar3',
        badge: 'CARD 12.9 · TRC LOGIC',
        whenYouSpot: 'Tuple Relational Calculus `{ t | ∃/∀ ... }` query on tables',
        directWeaponLatex: '\\forall x\\,(Q(x) \\implies C(x)) \\equiv \\neg\\exists x\\,(Q(x) \\land \\neg C(x))',
        instantRule:
          'Pair $\\exists$ with $\\land$, and $\\forall$ with $\\implies$. TRC returns a **SET** (deduplicate final output tuples!).',
        tenSecondExample: 'If A=1 matches twice in X ⋈ Y under ∃, TRC still counts tuple `(1)` only ONCE (2026 Q.59).',
        oneFatalTrap: 'Using $\\forall x (\\text{member}(x) \\land C(x))$ instead of $\\implies$.',
      },
    ],
    questions: [
      {
        id: 'm12-c3-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Natural vs Full Outer Join',
        marks: 1,
        type: 'NAT',
        stem: 'Let `Emp(Eid, Did) = {(1, 10), (2, 10), (3, 20), (4, NULL)}` and `Dept(Did, Dname) = {(10, "AI"), (30, "ML")}`. Let $n_{\\text{nat}}$ be the number of tuples returned by `Emp ⋈ Dept` (natural join), and $n_{\\text{full}}$ be the number of tuples returned by `Emp ⟗ Dept` (full outer join). Compute $n_{\\text{nat}} + n_{\\text{full}}$.',
        natAnswer: { min: 7, max: 7, exactDisplay: '7' },
        triggerHint: 'Natural join matches `Did = 10` (and drops `NULL`); Full Outer Join keeps all unmatched rows from BOTH sides.',
        intuitiveSolution: [
          'Natural join `Emp ⋈ Dept` matches `(1, 10)` and `(2, 10)` with `(10, "AI")` $\\implies n_{\\text{nat}} = 2$.',
          'Full outer join `Emp ⟗ Dept` keeps those 2 matched rows PLUS unmatched `Emp` rows `(3, 20, NULL)` and `(4, NULL, NULL)` PLUS unmatched `Dept` row `(NULL, 30, "ML")` $\\implies n_{\\text{full}} = 5$.',
          'Sum $= 2 + 5 = 7$.',
        ],
        directShortcutUsed: '`n_nat = 2` (Did=10 matches), `n_full = 2 + 2 + 1 = 5`.',
      },
      {
        id: 'm12-c3-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.26 Pattern',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem: 'Consider relations `Team(name, age)`, `Defender(name, tackles)`, and `Forward(name, goals)`. What does the Relational Algebra condition $\\Pi_{\\text{name}}(\\text{Team}) - \\big(\\Pi_{\\text{name}}(\\text{Defender}) \\cup \\Pi_{\\text{name}}(\\text{Forward})\\big) = \\emptyset$ assert?',
        options: [
          {
            id: 'A',
            text: 'No player in `Team` is both a `Defender` and a `Forward`.',
            whyTrueOrFalse: 'False: disjointness would be $\\Pi_{\\text{name}}(\\text{Defender}) \\cap \\Pi_{\\text{name}}(\\text{Forward}) = \\emptyset$.',
          },
          {
            id: 'B',
            text: 'Every player in `Team` is listed in `Defender` or `Forward` (or both).',
            whyTrueOrFalse: 'True: $A - B = \\emptyset \\iff A \\subseteq B$, so every `Team` name lies in `Defender U Forward`.',
          },
          {
            id: 'C',
            text: 'Every `Defender` and every `Forward` is listed in `Team`.',
            whyTrueOrFalse: 'False: that would require $(\\Pi(\\text{Defender}) \\cup \\Pi(\\text{Forward})) - \\Pi(\\text{Team}) = \\emptyset$.',
          },
          {
            id: 'D',
            text: 'The `Team` relation is empty.',
            whyTrueOrFalse: 'False: if `Team` is a non-empty subset of `Defender U Forward`, the difference is still empty.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Recall $A - B = \\emptyset \\iff A \\subseteq B$.',
        intuitiveSolution: [
          'The condition $A - B = \\emptyset$ holds iff $A \\subseteq B$.',
          'Here $A = \\Pi_{\\text{name}}(\\text{Team})$ and $B = \\Pi_{\\text{name}}(\\text{Defender}) \\cup \\Pi_{\\text{name}}(\\text{Forward})$.',
          'Thus every player name in `Team` appears in `Defender`, `Forward`, or both.',
        ],
        directShortcutUsed: '$A - B = \\emptyset \\iff A \\subseteq B$.',
      },
      {
        id: 'm12-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.17 Pattern',
        year: 2025,
        marks: 1,
        type: 'MCQ',
        stem: 'Given relations `Make(car_id, maker)`, `Car(car_id, color)`, and `Own(owner, car_id)`, what does the Relational Algebra expression $\\pi_{\\text{owner}}\\big(\\text{Own} \\bowtie \\sigma_{\\text{color}=\\text{"red"}}(\\text{Car} \\bowtie \\sigma_{\\text{maker}=\\text{"ABC"}}\\text{Make})\\big)$ return?',
        options: [
          {
            id: 'A',
            text: 'Owners who own ONLY red cars made by ABC.',
            whyTrueOrFalse: 'False: owners who also own a blue car from XYZ still appear via their red ABC car.',
          },
          {
            id: 'B',
            text: 'Owners who own EVERY red car made by ABC.',
            whyTrueOrFalse: 'False: "every" requires Relational Division ($\\div$), not a plain Natural Join.',
          },
          {
            id: 'C',
            text: 'Owners who own at least one red car made by ABC.',
            whyTrueOrFalse: 'True: `Make` filters to ABC, `Car` filters to red, and joining with `Own` keeps any owner linked to at least one surviving `car_id`.',
          },
          {
            id: 'D',
            text: 'Owners who own at least one red car OR at least one car made by ABC.',
            whyTrueOrFalse: 'False: the join requires the SAME `car_id` to satisfy both `maker="ABC"` and `color="red"`.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Plain Natural Join + Projection is existential ("at least one"), never universal ("only" / "every").',
        intuitiveSolution: [
          '$\\sigma_{\\text{maker}="\\text{ABC}"}(\\text{Make})$ keeps ABC cars; joining with `Car` and filtering `color="red"` keeps red cars made by ABC.',
          'Joining with `Own` and projecting `owner` yields every owner who owns **at least one** such red ABC car.',
        ],
        directShortcutUsed: 'Join + Filter + Project = "at least one" match.',
      },
      {
        id: 'm12-c3-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.62 Pattern',
        year: 2025,
        marks: 2,
        type: 'NAT',
        stem: 'Consider two tables:\n`Loan(lno, branch) = {(L1, B1), (L2, B2), (L3, B1), (L4, B2), (L5, B3)}`\n`Borrower(customer, lno) = {(Anil, L1), (Anil, L2), (Anil, L5), (Bina, L1), (Bina, L4), (Chetan, L3)}`\nHow many tuples are returned by the Relational Algebra query $\\pi_{\\text{branch, customer}}(\\text{Loan} \\bowtie \\text{Borrower}) \\div \\pi_{\\text{branch}}(\\text{Loan})$?',
        natAnswer: { min: 1, max: 1, exactDisplay: '1' },
        triggerHint: 'List all branches in `Loan`, then check which customer(s) appear with EVERY branch.',
        intuitiveSolution: [
          'Divisor $\\pi_{\\text{branch}}(\\text{Loan}) = \\{B_1, B_2, B_3\\}$.',
          'Joining `Loan ⋈ Borrower` and projecting `(branch, customer)` gives:\n- `Anil`: `{B1, B2, B3}` (all 3!)\n- `Bina`: `{B1, B2}` (missing `B3`)\n- `Chetan`: `{B1}` (missing `B2, B3`).',
          'Only `Anil` survives division $\\implies \\mathbf{1}$ tuple.',
        ],
        directShortcutUsed: 'Division checklist against `{B1, B2, B3}` $\\implies$ only `Anil` checks all 3.',
      },
      {
        id: 'm12-c3-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.59 Pattern',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Consider two relations $X(A, B) = \\{(1, 10), (1, 30), (2, 20), (3, 30), (4, 20)\\}$ and $Y(B, C) = \\{(10, 15), (20, 8), (30, 12)\\}$. How many tuples are returned by the Tuple Relational Calculus (TRC) query:\n$\\{ t \\mid \\exists x \\in X\\, (t[A] = x[A] \\land \\exists y \\in Y\\, (y[B] = x[B] \\land y[C] > 10)) \\}$?',
        natAnswer: { min: 2, max: 2, exactDisplay: '2' },
        triggerHint: 'Watch out for duplicate `A` values: TRC returns a SET, not a multiset!',
        intuitiveSolution: [
          'Only $B = 10$ ($C=15$) and $B = 30$ ($C=12$) in $Y$ satisfy $y[C] > 10$.',
          'Scan $X$: `(1, 10)` matches $\\to t[A]=1$; `(1, 30)` matches $\\to t[A]=1$; `(2, 20)` fails; `(3, 30)` matches $\\to t[A]=3$; `(4, 20)` fails.',
          'Because TRC uses **set semantics**, duplicate `1` is eliminated, leaving `{(1), (3)}` $\\implies \\mathbf{2}$ tuples.',
        ],
        directShortcutUsed: 'TRC = Set semantics (`{1, 3}`, deduplicating `1`).',
      },
      {
        id: 'm12-c3-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Tricky · RA Equivalence Audit',
        marks: 2,
        type: 'MSQ',
        stem: 'Let $R(A, B)$ and $S(A, B)$ be two relations with identical schemas, and $T(B, C)$ be a third relation. Which of the following Relational Algebra statements are ALWAYS true for all valid finite instances?',
        options: [
          {
            id: 'A',
            text: '$\\pi_A(R - S) = \\pi_A(R) - \\pi_A(S)$',
            whyTrueOrFalse: 'False: projection does NOT distribute over set difference (counterexample: $R=\\{(1,2)\\}, S=\\{(1,3)\\}$).',
          },
          {
            id: 'B',
            text: '$\\pi_A(R \\cup S) = \\pi_A(R) \\cup \\pi_A(S)$',
            whyTrueOrFalse: 'True: projection distributes cleanly over union ($\\cup$).',
          },
          {
            id: 'C',
            text: '$\\sigma_{A > 5}(R \\bowtie T) = \\sigma_{A > 5}(R) \\bowtie T$',
            whyTrueOrFalse: 'True: attribute $A$ belongs only to $R$, so selection $\\sigma_{A>5}$ pushes down cleanly into $R$ before the natural join.',
          },
          {
            id: 'D',
            text: '$(R \\bowtie_{\\text{L}} S) \\bowtie_{\\text{L}} T = R \\bowtie_{\\text{L}} (S \\bowtie_{\\text{L}} T)$ (where $\\bowtie_{\\text{L}}$ is Left Outer Join)',
            whyTrueOrFalse: 'False: Left Outer Join is NOT associative in general when unmatched NULLs interact.',
          },
        ],
        correctOptions: ['B', 'C'],
        triggerHint: 'Test projection distribution over `U` vs `-`, selection pushdown, and outer-join associativity.',
        intuitiveSolution: [
          'A fails on $R=\\{(1,2)\\}, S=\\{(1,3)\\}$ (`{1} != ∅`).',
          'B always holds: projecting a union is the union of projections.',
          'C always holds: pushing a single-table predicate ($A$ is only in $R$) past an inner/natural join is valid.',
          'D fails: outer joins are non-associative (padding `NULL`s early changes later join matches).',
        ],
        directShortcutUsed: '$\\pi$ distributes over $\\cup$ (not $-$ or $\\cap$); outer joins are NOT associative.',
      },
    ],
  },

  // ============================================================================
  // CHAPTER 4: SQL Execution Order, GROUP BY/HAVING, NULL 3VL & Subqueries
  // ============================================================================
  {
    id: 'dbms-ch4',
    number: 4,
    title: 'SQL Execution Order, GROUP BY/HAVING, NULL 3-Valued Logic & Correlated Subqueries',
    shortTitle: 'SQL Semantics, NULLs & Subqueries',
    estimatedHours: 5,
    dayLabel: 'Week 5 · Day 4',
    tagline:
      'Let’s trace SQL queries in their real 6-step logical order, dodge the silent `NOT IN (NULL)` empty-set trap, and solve nested aggregates and correlated rank subqueries like GATE DA 2025 Q.33 and 2026 Q.51 / Q.60 with zero guesswork.',
    syllabusMapping: [
      'SQL: DDL & DML querying, Joins, Aggregates, GROUP BY & HAVING',
      'Nested, aggregate & correlated subqueries (`IN`, `NOT IN`, `EXISTS`, `ANY`, `ALL`)',
      'Three-valued NULL logic & multiset (bag) semantics',
    ],
    whatIsImportant: [
      'True SQL execution pipeline: `FROM/JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY`',
      '`GROUP BY` legality rules & valid ways to fetch `(EmpID, TeamSize)` (GATE DA 2026 Q.51)',
      'Three-valued logic (`TRUE / FALSE / UNKNOWN`): why `NOT IN (SELECT ...)` returns **0 rows** if ANY `NULL` exists, while `NOT EXISTS` stays safe!',
      'Correlated subqueries & nested `MAX`/`MIN` aggregates (GATE DA 2025 Q.33 & 2026 Q.60), plus `> ALL(∅) = TRUE` vs `> ANY(∅) = FALSE`',
    ],
    whatIsNotImportant: [
      'Vendor-specific SQL dialects (`PL/SQL`, `T-SQL`, triggers, stored procedures, JSON functions)',
      'SQL `WINDOW` syntax quirks (`OVER (PARTITION BY ...)` frames) — GATE DA tests standard SQL-92 joins, aggregates & correlated subqueries',
    ],
    inboundStream: 'TRC quantifiers & RA joins from Ch.3 + DDL keys from Ch.1.',
    outboundStream: [
      'Module 13 OLAP `GROUP BY CUBE` & `ROLLUP` multi-dimensional aggregation',
      'Module 14 Feature Engineering SQL Pipelines (safe filtering, group aggregations, preventing NULL-induced data drops)',
    ],
    glossary: [
      {
        term: 'Multiset (Bag) Semantics',
        plainEnglish:
          'Unlike Relational Algebra and TRC, default SQL keeps duplicate rows unless you explicitly write `SELECT DISTINCT` or use `UNION` (instead of `UNION ALL`).',
        tinyExample: 'If two employees share `Balance = 300`, `SELECT Balance` outputs `300` twice unless `DISTINCT` is added.',
      },
      {
        term: 'SQL Logical Execution Order',
        symbol: '`FROM` $\\to$ `WHERE` $\\to$ `GROUP BY` $\\to$ `HAVING` $\\to$ `SELECT`',
        plainEnglish:
          'The true sequence in which a SQL engine evaluates clauses—explaining why `WHERE` cannot use `SELECT` aliases or aggregates, and why `HAVING` can.',
        tinyExample: '`WHERE Salary IS NOT NULL` drops `NULL` rows *before* `GROUP BY TeamID` counts team sizes.',
      },
      {
        term: '`WHERE` vs. `HAVING`',
        plainEnglish:
          '`WHERE` acts early to filter individual raw rows before grouping begins, whereas `HAVING` acts afterward to filter whole summary buckets produced by `GROUP BY`.',
        tinyExample: '`WHERE Salary > 0` filters employees; `HAVING COUNT(*) >= 2` keeps only teams with at least $2$ surviving members.',
      },
      {
        term: '`GROUP BY` Legality Rule',
        plainEnglish:
          'Every column listed in `SELECT` or `HAVING` must either appear inside the `GROUP BY` list or be wrapped inside an aggregate function like `COUNT`, `SUM`, `AVG`, `MIN`, or `MAX`.',
        tinyExample: '`SELECT EmpID, COUNT(*) FROM Employee GROUP BY TeamID` is illegal SQL because `EmpID` is neither grouped nor aggregated.',
      },
      {
        term: 'SQL Aggregate Functions & `NULL`s',
        symbol: '`COUNT(*)`, `COUNT(col)`, `AVG`, `MAX`',
        plainEnglish:
          '`COUNT(*)` counts every row (even all-`NULL` rows), while `COUNT(col)`, `SUM`, `AVG`, `MIN`, and `MAX` all ignore `NULL`s. On an all-`NULL` or empty input, `COUNT(col)` returns `0`, whereas `SUM/AVG/MIN/MAX` return `NULL`!',
        tinyExample: 'On `[10, NULL, 30]`, `COUNT(*) = 3`, `COUNT(col) = 2`, and `AVG(col) = 40 / 2 = 20`.',
      },
      {
        term: 'Three-Valued Logic (3VL)',
        symbol: '`TRUE / FALSE / UNKNOWN`',
        plainEnglish:
          'SQL’s truth system when `NULL` (“unknown value”) appears: any comparison `=`, `<>`, `<`, or `>` against `NULL` yields `UNKNOWN`, and `WHERE` keeps ONLY rows that evaluate to `TRUE`.',
        tinyExample: '`1 <> NULL` is `UNKNOWN`, and `TRUE AND UNKNOWN` stays `UNKNOWN` (dropped by `WHERE`!).',
      },
      {
        term: '`NOT IN` `NULL` Poisoning',
        symbol: '`x NOT IN (..., NULL)`',
        plainEnglish:
          'Because `x NOT IN S` expands into an `AND`-chain of `x <> y`, even a single `NULL` inside `S` turns the whole condition into `(...) AND UNKNOWN`, silently returning **0 rows**!',
        tinyExample: 'For `P = {1, 2, 3}` and `Q = {2, NULL}`, `SELECT x FROM P WHERE x NOT IN (SELECT y FROM Q)` returns $0$ rows.',
      },
      {
        term: '`EXISTS` & `NOT EXISTS`',
        plainEnglish:
          'Boolean subquery predicates that only test whether the inner query produces at least one row (true/false only—never `UNKNOWN`!), making `NOT EXISTS` completely immune to `NULL` poisoning.',
        tinyExample: '`WHERE NOT EXISTS (SELECT * FROM Q WHERE Q.y = P.x)` safely returns `{1, 3}` even when `Q` contains `NULL`.',
      },
      {
        term: 'Uncorrelated vs. Correlated Subquery',
        plainEnglish:
          'An uncorrelated subquery is self-contained and runs once upfront, whereas a correlated subquery references an outer table alias and re-runs like a nested loop once for every candidate row of the outer table.',
        tinyExample: '`WHERE A2.Balance > A1.Balance` is correlated because inner `A2` compares against the current outer row `A1`.',
      },
      {
        term: 'Quantified Comparisons (`ANY` vs. `ALL`)',
        symbol: '`> ALL`, `> ANY`',
        plainEnglish:
          'Compare a scalar against every row (`ALL`) or at least one row (`ANY`) of a subquery. Watch empty sets: `x > ALL(∅)` is vacuously `TRUE` (keeps all rows), while `x > ANY(∅)` is `FALSE` (keeps $0$ rows)!',
        tinyExample: 'When `S` is empty, `WHERE a > ALL (SELECT b FROM S)` returns all of `R`, whereas `> (SELECT MAX(b) FROM S)` returns $0$ rows.',
      },
      {
        term: 'Self-Join & Derived Table',
        plainEnglish:
          'Joining a table to a second alias of itself (`Employee E1 JOIN Employee E2`) or joining against an inline subquery `(SELECT TeamID, COUNT(*) ...) T`—the standard legal ways to pair row-level columns with group-level aggregates.',
        tinyExample: '`E1 JOIN E2 ON E1.TeamID = E2.TeamID GROUP BY E1.EmpID` cleanly computes `(EmpID, TeamSize)`.',
      },
    ],
    generatorId: 'er-tables-gen',
    concepts: [
      {
        id: 'm12-c4-1',
        title: 'SQL Logical Execution Order, `GROUP BY` / `HAVING` & Bag Semantics',
        subtitle:
          'Why `WHERE` runs before grouping, why unaggregated columns fail `SELECT`, and how `COUNT(*)` differs from `COUNT(col)`',
        priority: 'core-pillar',
        buildsOn: 'Joins & Set vs Bag contrast from Ch.3',
        toyExample: {
          title: '5-Row `Employee(EmpID, TeamID, Salary)` Trace',
          scenario:
            'Rows: `(1, T1, 50), (2, T1, 70), (3, T2, 40), (4, T2, NULL), (5, T3, 90)`. Run:\n`SELECT TeamID, COUNT(*) AS C1, COUNT(Salary) AS C2, AVG(Salary) AS AvgSal FROM Employee WHERE Salary IS NOT NULL GROUP BY TeamID HAVING COUNT(*) >= 2;`',
          walkthroughSteps: [
            '1. **`FROM`:** Loads all 5 rows.',
            '2. **`WHERE Salary IS NOT NULL`:** Drops row `4` (`T2` now has only 1 row left!) $\\implies 4$ rows remain.',
            '3. **`GROUP BY TeamID`:** Builds 3 buckets: `T1: {1, 2}`, `T2: {3}`, `T3: {5}`.',
            '4. **`HAVING COUNT(*) >= 2`:** Drops `T2` (size 1) and `T3` (size 1)! Only `T1` survives.',
            '5. **`SELECT`:** Computes `T1, 2, 2, (50+70)/2 = 60`! Notice if `WHERE` hadn’t dropped row 4, `T2` would have passed `HAVING COUNT(*) >= 2` with `COUNT(Salary) = 1` and `AVG(Salary) = 40`!',
          ],
          ahaMoment:
            'Keep this division of labor crystal clear: `WHERE` filters **individual raw rows before grouping begins** (so it never sees `COUNT`/`SUM` or `SELECT` aliases), while `HAVING` filters **entire grouped buckets after `GROUP BY`**!',
        },
        theoremAndFormula: {
          statement:
            'SQL evaluates clauses in a strict 6-stage logical order (NOT top-to-bottom!). Under `GROUP BY G`, every non-aggregated attribute appearing in `SELECT` or `HAVING` **must** be included in `G` (or functionally dependent on `G` under strict SQL-99 PK rules). All SQL aggregates except `COUNT(*)` ignore `NULL`s:',
          formulaLatex:
            '\\text{FROM} \\to \\text{WHERE} \\to \\text{GROUP BY} \\to \\text{HAVING} \\to \\text{SELECT} \\to \\text{DISTINCT} \\to \\text{ORDER BY}',
          plainEnglishDecoding:
            'Ever need a row-level column like `EmpID` right next to a group-level metric like `TeamSize`? You cannot simply write `SELECT EmpID, COUNT(*) FROM Employee GROUP BY TeamID`—the compiler will reject it! Instead, pair them cleanly with a **self-join**, a **derived-table join**, or a **correlated subquery** (just like **GATE DA 2026 Q.51**!).',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2026 Q.51 Pattern: Given `Employee(EmpID, TeamID)`, compare `SELECT EmpID, COUNT(*) FROM Employee GROUP BY TeamID` vs `SELECT E1.EmpID, COUNT(*) FROM Employee E1 JOIN Employee E2 ON E1.TeamID = E2.TeamID GROUP BY E1.EmpID`.',
              solution:
                'The first query is **INVALID SQL** because `EmpID` is neither in `GROUP BY` nor aggregated. The second query is **VALID** and returns exact `(EmpID, TeamSize)`: joining `E1` to `E2` on `TeamID` replicates each `E1.EmpID` once per teammate, and grouping by `E1.EmpID` counts them!',
            },
            {
              prompt:
                'What does `AVG(col)` compute on `[10, NULL, 30]`?',
              solution:
                '`SUM(col) / COUNT(col) = (10 + 30) / 2 = 20`, NOT `40 / 3`! `AVG`, `SUM`, `MIN`, `MAX`, and `COUNT(col)` all skip `NULL`s.',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: '`COUNT(*)` and `COUNT(col)` return the same count inside `GROUP BY`, and `AVG(col)` divides by `COUNT(*)`.',
            reality:
              'FALSE! `COUNT(*)` counts **every row** (including all-NULL rows), whereas `COUNT(col)` counts only **non-NULL** values of `col`—and `AVG(col)` divides by `COUNT(col)`!',
            counterExample:
              'On `[10, NULL]`, `COUNT(*) = 2`, `COUNT(col) = 1`, and `AVG(col) = 10 / 1 = 10`.',
          },
          {
            myth: 'If all rows in a column are `NULL`, `SUM(col)` returns `0` and `COUNT(col)` returns `0`.',
            reality:
              'Half-true trap! `COUNT(col)` returns `0`, **but `SUM(col)`, `AVG(col)`, `MIN(col)`, and `MAX(col)` return `NULL`** when the input set has zero non-NULL values!',
            counterExample:
              '`SELECT MAX(Amount) FROM Loan WHERE Branch = "Ghost"` returns `NULL`, NOT `0`!',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5 · Module 13',
            targetWeek: 6,
            topic: 'Data Warehousing OLAP (`GROUP BY CUBE` & `ROLLUP`)',
            whyItMatters:
              'Understanding `GROUP BY` buckets leads directly to `GROUP BY CUBE(D1, D2)` producing $\\prod(|D_i| + 1)$ rows with `NULL`s representing subtotals (GATE DA 2025 Q.46).',
          },
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Feature Engineering SQL Pipelines (Group Features + Join-Back)',
            whyItMatters:
              'Just like GATE DA 2026 Q.51, attaching group-level features (user average spend, team size) onto individual training rows requires a derived-table `JOIN` or correlated subquery.',
          },
        ],
      },
      {
        id: 'm12-c4-2',
        title: 'Three-Valued Logic (`UNKNOWN`) & The `NOT IN (NULL)` Catastrophe',
        subtitle:
          'Why a single `NULL` inside a subquery turns `NOT IN` into the empty set—and why `NOT EXISTS` is immune',
        priority: 'sleeping-giant',
        buildsOn: 'Boolean truth tables (Module 11) + Concept 4.1',
        toyExample: {
          title: 'The Silent Wipeout: `Users = {1, 2, 3}` vs `Blocked = {2, NULL}`',
          scenario:
            'You want active users who are NOT blocked: `SELECT uid FROM Users WHERE uid NOT IN (SELECT uid FROM Blocked);`. Someone accidentally left one `NULL` in `Blocked`!',
          walkthroughSteps: [
            '1. SQL expands `uid NOT IN (2, NULL)` as **`(uid <> 2) AND (uid <> NULL)`**.',
            '2. Test `uid = 1`: `(1 <> 2)` is `TRUE`; `(1 <> NULL)` is **`UNKNOWN`**! `TRUE AND UNKNOWN = UNKNOWN`.',
            '3. Test `uid = 2`: `(2 <> 2)` is `FALSE`; `FALSE AND UNKNOWN = FALSE`.',
            '4. Test `uid = 3`: `(3 <> 2)` is `TRUE`; `TRUE AND UNKNOWN = UNKNOWN`.',
            '5. Since SQL `WHERE` keeps **ONLY `TRUE`** (discarding both `FALSE` and `UNKNOWN`), the query returns **`0` rows (EMPTY SET)**!',
          ],
          ahaMoment:
            'Never underestimate a stray `NULL`: just one single `NULL` hiding anywhere inside `S` turns **`x NOT IN S`** into `(...) AND UNKNOWN`, which can NEVER become `TRUE`—silently wiping out **100% of your query results** with zero error messages!',
        },
        theoremAndFormula: {
          statement:
            'SQL uses Kleene **Three-Valued Logic (`TRUE`, `FALSE`, `UNKNOWN`)**: any comparison `=`, `<>`, `<`, `>` with `NULL` yields `UNKNOWN`; `WHERE` retains ONLY `TRUE`. Because `IN` uses $\\bigvee$ (`OR`) while `NOT IN` uses $\\bigwedge$ (`AND`), a single `NULL` leaves `IN` functional (`TRUE OR UNKNOWN = TRUE`) while completely breaking `NOT IN`:',
          formulaLatex:
            'x \\in S \\equiv \\bigvee_{y \\in S}(x = y), \\qquad x \\notin S \\equiv \\bigwedge_{y \\in S}(x \\neq y) \\implies \\text{if } \\text{NULL} \\in S,\\; (x \\notin S) \\neq \\text{TRUE}',
          plainEnglishDecoding:
            'Build this rock-solid habit: whenever you want “not in another table,” reach for **`NOT EXISTS (SELECT * FROM S WHERE S.y = R.x)`** (or explicitly filter `WHERE y IS NOT NULL` inside `NOT IN`). And remember one helpful contrast: unlike `WHERE`, both `GROUP BY` and `DISTINCT` collect all `NULL`s together into one single `NULL` bucket!',
          workedMiniExamples: [
            {
              prompt:
                'Compare `SELECT x FROM P WHERE NOT EXISTS (SELECT * FROM Q WHERE Q.y = P.x)` vs `NOT IN` when `P = {1, 2, 3, 4}` and `Q = {2, NULL}`.',
              solution:
                'With `NOT IN`, **0 rows** return. With `NOT EXISTS`: for `x=1`, `Q.y = 1` evaluates to `FALSE` (on `2`) and `UNKNOWN` (on `NULL`), so the subquery returns 0 rows $\\implies$ `NOT EXISTS` is **`TRUE`**! Same for `3` and `4` $\\implies$ **`{1, 3, 4}` (3 rows)** survive!',
            },
          ],
        },
        sandboxId: 'dbms-fd-ra-lab',
        msqTraps: [
          {
            myth: 'If `R` has 10 rows and `IN (SELECT ...)` returns 3 rows, then `NOT IN (SELECT ...)` must return the other 7 rows.',
            reality:
              'FALSE! If the subquery contains even ONE `NULL` (or if `R`’s tested column has `NULL`s), `NOT IN` returns **0 rows** for all non-matching rows!',
            counterExample:
              '`1 NOT IN (2, NULL)` evaluates to `UNKNOWN`, NOT `TRUE`.',
          },
          {
            myth: 'Because `NULL = NULL` is `UNKNOWN`, `GROUP BY col` puts every `NULL` row into its own separate group.',
            reality:
              'FALSE! SQL explicitly defines `GROUP BY`, `SELECT DISTINCT`, and `UNION` to treat all `NULL`s as **equal for grouping/deduplication**, creating **one single `NULL` group**!',
            counterExample:
              'On `[(1, NULL), (2, NULL), (3, "A")]`, `SELECT COUNT(*) FROM T GROUP BY col` returns two counts: `2` and `1`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Feature Engineering SQL Pipelines (Bot/Outlier Exclusion)',
            whyItMatters:
              'A single `NULL` user_id in a `blacklist` table causes `WHERE user_id NOT IN (SELECT user_id FROM blacklist)` to silently output an empty ML training dataset with zero SQL errors!',
          },
        ],
      },
      {
        id: 'm12-c4-3',
        title: 'Nested Aggregate Subqueries, `ANY`/`ALL` & Correlated Loops',
        subtitle:
          'Tracing outer-to-inner correlated loops without mistakes—including rank comparisons and empty-set `ALL`',
        priority: 'high-yield',
        buildsOn: 'Concept 4.1 & Concept 4.2',
        toyExample: {
          title: 'Finding Accounts At or Below the Median (GATE DA 2026 Q.60)',
          scenario:
            'Given `Account(AccID, Balance) = {(A1, 100), (A2, 300), (A3, 300), (A4, 500), (A5, 800)}`, trace:\n`SELECT AccID FROM Account A1 WHERE (SELECT COUNT(*) FROM Account A2 WHERE A2.Balance > A1.Balance) >= (SELECT COUNT(*) FROM Account A3 WHERE A3.Balance < A1.Balance);`',
          walkthroughSteps: [
            '1. **Decode the Loop:** For each row `A1`, left subquery counts rows **strictly larger** than `A1.Balance`; right subquery counts rows **strictly smaller**.',
            '2. **Sort balances once (mental shortcut!):** `[100, 300, 300, 500, 800]`.',
            '3. **`A1 (100)`:** larger = `4`, smaller = `0` ($4 \\ge 0$ $\\checkmark$).',
            '4. **`A2 (300)` & `A3 (300)`:** larger = `2` (`500, 800`), smaller = `1` (`100`) ($2 \\ge 1$ $\\checkmark$ for BOTH!).',
            '5. **`A4 (500)`:** larger = `1`, smaller = `3` ($1 \\ge 3$ $\\times$). **`A5 (800)`:** larger = `0`, smaller = `4` ($0 \\ge 4$ $\\times$).',
            '6. Surviving rows: `A1, A2, A3` $\\implies$ **`3` rows**!',
          ],
          ahaMoment:
            'Here is the trick that turns a tedious nested-loop trace into a 20-second breeze: never scan an unsorted table $N$ times by hand! Just **sort the column once** on your scratch pad and read off `(# strictly above)` and `(# strictly below)` straight from each value’s position!',
        },
        theoremAndFormula: {
          statement:
            'An **uncorrelated** subquery runs once independently; a **correlated** subquery references an outer table alias and re-evaluates once per outer candidate row. For quantified comparisons against a subquery $S$, empty sets obey vacuous truth vs existential falsehood:',
          formulaLatex:
            'x > \\text{ALL}(\\emptyset) \\equiv \\text{TRUE} \\qquad\\text{whereas}\\qquad x > \\text{ANY}(\\emptyset) \\equiv \\text{FALSE}',
          plainEnglishDecoding:
            'Watch how `> ALL(S)` and `> (SELECT MAX(y) FROM S)` part ways on edge cases: `x > ALL(S)` checks every $y \\in S$ individually—so an empty $S$ passes vacuously (`TRUE`), while any `NULL` in $S$ poisons it to `UNKNOWN`. By contrast, `MAX(y)` skips `NULL`s peacefully, yet returns `NULL` on an empty $S$ (turning `x > NULL` into `UNKNOWN` and returning $0$ rows)!',
          workedMiniExamples: [
            {
              prompt:
                'GATE DA 2025 Q.33 Pattern: `SELECT COUNT(*) FROM Loan WHERE Amount > (SELECT MAX(Amount) FROM Loan WHERE Branch = "SR Nagar")`. What if `"SR Nagar"` has 0 rows?',
              solution:
                'If `"SR Nagar"` has rows, `MAX` returns their maximum and the outer `WHERE` counts loans strictly exceeding it. If `"SR Nagar"` has 0 rows, `MAX(...)` returns **`NULL`**, so `Amount > NULL` is `UNKNOWN` for every row and `COUNT(*)` returns **`0`**!',
            },
          ],
        },
        msqTraps: [
          {
            myth: '`WHERE x > ALL(SELECT y FROM S)` and `WHERE x > (SELECT MAX(y) FROM S)` always return the exact same rows.',
            reality:
              'FALSE on BOTH edge cases! (1) If `S` is empty, `> ALL(∅)` is **`TRUE`** (returns all `x`), while `> MAX(∅)` compares `x > NULL` (`UNKNOWN`, returns 0 rows)! (2) If `S = {10, NULL}`, `20 > ALL` is `UNKNOWN` (0 rows), while `MAX` skips `NULL` (`MAX=10`, returns `20`)!',
            counterExample:
              'Empty `S`: `x > ALL(∅)` keeps every row; `x > (SELECT MAX(y) FROM S)` drops every row!',
          },
          {
            myth: 'In a correlated tie-counting query like `Account A1`, duplicate balances don’t affect `>` vs `<` counts.',
            reality:
              'They DO affect whether ties are included! Because both inequalities are **strict** (`>` and `<`), a tied median value `300` has fewer smaller elements and can pass `larger >= smaller` for all tied rows!',
            counterExample:
              'In `[100, 300, 300, 500, 800]`, both `300` rows pass `2 >= 1`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 · Module 14',
            targetWeek: 7,
            topic: 'Feature Engineering SQL Pipelines (Leakage-Free Lag & Rank Features)',
            whyItMatters:
              'Correlated subqueries like `WHERE e2.ts < e1.ts` compute causal historical aggregates (`past_30d_clicks`) without peeking at future timestamps!',
            pyqProof: 'GATE DA 2026 · Q.60 (Correlated Rank Subquery)',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm12-c4-ht1',
        title: 'Tracing Correlated Rank & Aggregate Subqueries in One Sorted Pass',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 · Q.60', 'GATE DA 2025 · Q.33'],
        problemStatement:
          'Given a 5–8 row table and a correlated subquery comparing counts or values across rows (e.g., `COUNT(*) > ...`, `EXISTS`, `MAX`), find the exact number of returned rows.',
        triggerCue:
          'Same table aliased twice (`Account A1` outer, `Account A2` inner) with `A2.col > A1.col` or nested `SELECT MAX/MIN`.',
        bruteForceTrap:
          'Scanning an unsorted table from scratch for every outer row ($O(N^2)$ hand tracing), leading to off-by-one tie errors.',
        mentalShift:
          'Sort the comparison column **once** in ascending order on scratch paper, keeping multiplicities! Then read off `#strictly greater` and `#strictly smaller` by index position.',
        steps: [
          {
            label: 'Step 1 · Write Values in Sorted Order',
            detail:
              'For `[500, 100, 800, 300, 300]`, write `[100, 300, 300, 500, 800]`. Ties stay adjacent!',
          },
          {
            label: 'Step 2 · Compute Inner Counts by Block',
            detail:
              'All identical values (e.g., both `300`s) share the exact same `(larger, smaller)` pair—compute it once per distinct value!',
          },
          {
            label: 'Step 3 · Multiply by Frequency (Bag Semantics!)',
            detail:
              'SQL `SELECT` without `DISTINCT` outputs **every** qualifying row, including duplicates.',
          },
        ],
        lockInTakeaway:
          'Sort once, evaluate per distinct value, and multiply by row multiplicity—cuts trace time by $3\\times$ with zero off-by-one errors.',
      },
      {
        id: 'm12-c4-ht2',
        title: 'Debugging `GROUP BY` + `NOT IN (NULL)` Multi-Query MSQs',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2026 · Q.51'],
        problemStatement:
          'Given 4 SQL query options for a task (like computing `(EmpID, TeamSize)` or excluding a subset), determine which queries are syntactically valid and semantically identical—even when `NULL`s exist.',
        triggerCue:
          'MSQ options contrasting `GROUP BY`, self-joins, derived tables, `NOT IN`, and `NOT EXISTS`.',
        bruteForceTrap:
          'Assuming a query works because its English phrasing looks reasonable, while missing an ungrouped `SELECT` column or a `NULL` poisoning `NOT IN`.',
        mentalShift:
          'Run a 3-gate compiler check on EVERY option: **Gate 1 (`GROUP BY` syntax)** $\\to$ **Gate 2 (Join multiplication / missing NULLs)** $\\to$ **Gate 3 (`NOT IN` vs `NOT EXISTS` on a 1-`NULL` test row)**.',
        steps: [
          {
            label: 'Step 1 · Gate 1 — `GROUP BY` Legality',
            detail:
              'Verify every column in `SELECT` and `HAVING` is either in `GROUP BY` or wrapped in an aggregate (`COUNT`, `MAX`, etc.).',
          },
          {
            label: 'Step 2 · Gate 2 — Execution Order & Aliases',
            detail:
              'Confirm `WHERE` never uses an aggregate or a `SELECT` alias, and check whether `WHERE` drops rows before `GROUP BY` sees them.',
          },
          {
            label: 'Step 3 · Gate 3 — Inject One `NULL` Poison Pill',
            detail:
              'Mentally add a `NULL` to any `NOT IN (...)` subquery or join key: if `NOT IN` collapses to empty while `NOT EXISTS` keeps rows, they are NOT equivalent!',
          },
        ],
        lockInTakeaway:
          'The 3-gate audit (GROUP BY syntax $\\to$ execution order $\\to$ 1-NULL poison test) catches 95% of GATE SQL MSQ traps.',
      },
    ],
    arsenalCards: [
      {
        id: 'm12-c4-ar1',
        badge: 'CARD 12.10 · SQL PIPELINE',
        whenYouSpot: 'SQL query combining `WHERE`, `GROUP BY`, `HAVING`, `SELECT`, `DISTINCT`',
        directWeaponLatex: '\\text{FROM} \\to \\text{WHERE} \\to \\text{GROUP BY} \\to \\text{HAVING} \\to \\text{SELECT} \\to \\text{DISTINCT}',
        instantRule:
          'Unaggregated `SELECT`/`HAVING` columns MUST be in `GROUP BY`. `COUNT(col)` & `AVG(col)` skip `NULL`s; `COUNT(*)` counts all rows. `GROUP BY` merges all `NULL`s into 1 group.',
        tenSecondExample: 'To output (EmpID, TeamSize): self-join on TeamID + GROUP BY E1.EmpID, or correlated COUNT(*) (2026 Q.51).',
        oneFatalTrap: 'Using `WHERE` on aggregates or putting an ungrouped column in `SELECT`.',
      },
      {
        id: 'm12-c4-ar2',
        badge: 'CARD 12.11 · 3VL NULL TRAP',
        whenYouSpot: '`NOT IN (SELECT ...)` vs `NOT EXISTS` or `col = NULL` / `col <> 5`',
        directWeaponLatex: 'x \\notin (y, \\text{NULL}) \\equiv (x \\neq y) \\land \\text{UNKNOWN} \\neq \\text{TRUE}',
        instantRule:
          'A single `NULL` in `S` forces `x NOT IN S` to return **0 rows**! Always use `NOT EXISTS` (or filter `IS NOT NULL`). `IN` still works with `NULL`s because `TRUE OR UNKNOWN = TRUE`.',
        tenSecondExample: 'P={1,2}, Q={2, NULL}: `P NOT IN Q` gives 0 rows; `NOT EXISTS` gives {1}.',
        oneFatalTrap: 'Assuming `NOT IN` is the complement of `IN` when `NULL`s may exist.',
      },
      {
        id: 'm12-c4-ar3',
        badge: 'CARD 12.12 · SUBQUERY EDGE',
        whenYouSpot: '`> ALL`, `> ANY`, or `> (SELECT MAX(...))` on potentially empty/NULL sets',
        directWeaponLatex: 'x > \\text{ALL}(\\emptyset) = \\text{TRUE}, \\qquad x > \\text{ANY}(\\emptyset) = \\text{FALSE}, \\qquad \\text{MAX}(\\emptyset) = \\text{NULL}',
        instantRule:
          'Empty subquery makes `> ALL` TRUE (keeps all rows) but makes `> MAX` evaluate `x > NULL` = UNKNOWN (keeps 0 rows). `MAX` ignores `NULL`s; `> ALL` fails if a `NULL` is present.',
        tenSecondExample: 'Correlated `larger >= smaller` on sorted balances [100,300,300,500,800] returns 3 rows (2026 Q.60).',
        oneFatalTrap: 'Equating `> ALL(S)` with `> (SELECT MAX(...) FROM S)` when `S` can be empty or contain `NULL`.',
      },
    ],
    questions: [
      {
        id: 'm12-c4-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · WHERE, GROUP BY & COUNT(col)',
        marks: 1,
        type: 'NAT',
        stem: 'Consider `Sales(Sid, Region, Amt) = {(1, "N", 100), (2, "N", NULL), (3, "N", 200), (4, "S", 50), (5, "S", NULL)}`. What single integer is returned by:\n`SELECT SUM(x) FROM (SELECT COUNT(Amt) AS x FROM Sales GROUP BY Region HAVING COUNT(*) >= 3) T;`',
        natAnswer: { min: 2, max: 2, exactDisplay: '2' },
        triggerHint: '`COUNT(*)` checks total rows per region (including NULL `Amt`), while `COUNT(Amt)` skips NULLs.',
        intuitiveSolution: [
          '`GROUP BY Region` forms two groups: `"N"` (3 rows) and `"S"` (2 rows).',
          '`HAVING COUNT(*) >= 3` keeps ONLY `"N"` (`COUNT(*) = 3`).',
          'For `"N"`, `Amt` values are `{100, NULL, 200}`, so `COUNT(Amt) = 2` (skipping `NULL`).',
          'Outer `SUM(x)` returns `2`.',
        ],
        directShortcutUsed: '`HAVING` filters group `"N"` via `COUNT(*)=3`, then `COUNT(Amt)` skips `NULL` $\\to 2$.',
      },
      {
        id: 'm12-c4-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.33 Pattern',
        year: 2025,
        marks: 1,
        type: 'NAT',
        stem: 'Consider a 7-row `Loan(LoanID, Branch, Amount)` table:\n`(L1, "SR Nagar", 250), (L2, "SR Nagar", 400), (L3, "Madhapur", 350), (L4, "Madhapur", 500), (L5, "Kukatpally", 400), (L6, "Kukatpally", 600), (L7, "Gachibowli", 450)`.\nHow many rows are returned by:\n`SELECT LoanID FROM Loan WHERE Amount > (SELECT MAX(Amount) FROM Loan WHERE Branch = "SR Nagar");`',
        natAnswer: { min: 3, max: 3, exactDisplay: '3' },
        triggerHint: 'Compute the inner scalar `MAX` for `"SR Nagar"`, then count strictly greater amounts across ALL branches.',
        intuitiveSolution: [
          'The inner uncorrelated subquery finds `MAX(Amount)` where `Branch = "SR Nagar"` $= \\max(250, 400) = 400$.',
          'Outer `WHERE Amount > 400` checks all 7 rows (remember strict `>`, so `L5 = 400` does NOT pass!): `L4 (500), L6 (600), L7 (450)`.',
          'Total returned rows $= 3$.',
        ],
        directShortcutUsed: '`MAX("SR Nagar") = 400` $\\implies$ strictly $> 400$ gives `{L4, L6, L7} = 3` rows.',
      },
      {
        id: 'm12-c4-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.51 Pattern',
        year: 2026,
        marks: 2,
        type: 'MSQ',
        stem: 'Given `Employee(EmpID INT PRIMARY KEY, TeamID INT NOT NULL)`, which of the following SQL queries validly return `(EmpID, TeamSize)` for every employee (where `TeamSize` is the total number of employees sharing that employee’s `TeamID`)?',
        options: [
          {
            id: 'A',
            text: '`SELECT E1.EmpID, COUNT(*) AS TeamSize FROM Employee E1 JOIN Employee E2 ON E1.TeamID = E2.TeamID GROUP BY E1.EmpID;`',
            whyTrueOrFalse: 'True: self-joining on `TeamID` pairs each `E1.EmpID` with every teammate in `E2`, and grouping by `E1.EmpID` counts the exact team size.',
          },
          {
            id: 'B',
            text: '`SELECT EmpID, COUNT(*) AS TeamSize FROM Employee GROUP BY TeamID;`',
            whyTrueOrFalse: 'False: `EmpID` is neither inside `GROUP BY` nor aggregated, making this invalid SQL.',
          },
          {
            id: 'C',
            text: '`SELECT E1.EmpID, (SELECT COUNT(*) FROM Employee E2 WHERE E2.TeamID = E1.TeamID) AS TeamSize FROM Employee E1;`',
            whyTrueOrFalse: 'True: a valid scalar correlated subquery counts teammates for each outer `E1` row.',
          },
          {
            id: 'D',
            text: '`SELECT E.EmpID, T.TeamSize FROM Employee E JOIN (SELECT TeamID, COUNT(*) AS TeamSize FROM Employee GROUP BY TeamID) T ON E.EmpID = T.TeamID;`',
            whyTrueOrFalse: 'False: the join condition wrongly equates `E.EmpID = T.TeamID` instead of `E.TeamID = T.TeamID`!',
          },
        ],
        correctOptions: ['A', 'C'],
        triggerHint: 'Audit `GROUP BY` legality first, then inspect the `JOIN ON` column names closely!',
        intuitiveSolution: [
          'Option A is valid and pairs every employee with all teammates before grouping by `E1.EmpID`.',
          'Option B violates the `GROUP BY` rule (`EmpID` unaggregated and ungrouped).',
          'Option C is a valid correlated scalar subquery returning `(EmpID, TeamSize)`.',
          'Option D joins `E.EmpID` to `T.TeamID` (wrong column!), returning mismatched teams.',
        ],
        directShortcutUsed: 'Self-join + `GROUP BY EmpID` (A) and correlated scalar subquery (C) are valid.',
      },
      {
        id: 'm12-c4-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.60 Pattern',
        year: 2026,
        marks: 2,
        type: 'NAT',
        stem: 'Consider `Account(AccID, Balance) = {(A1, 100), (A2, 300), (A3, 300), (A4, 500), (A5, 800)}`. How many rows are returned by:\n`SELECT A1.AccID FROM Account A1 WHERE (SELECT COUNT(*) FROM Account A2 WHERE A2.Balance > A1.Balance) >= (SELECT COUNT(*) FROM Account A3 WHERE A3.Balance < A1.Balance);`',
        natAnswer: { min: 3, max: 3, exactDisplay: '3' },
        triggerHint: 'Compare `(strictly larger) >= (strictly smaller)` on the sorted list `[100, 300, 300, 500, 800]`.',
        intuitiveSolution: [
          '`A1 (100)`: larger = 4, smaller = 0 ($4 \\ge 0$ YES).',
          '`A2 (300)` & `A3 (300)`: larger = 2 (`500, 800`), smaller = 1 (`100`) ($2 \\ge 1$ YES for both).',
          '`A4 (500)`: larger = 1, smaller = 3 ($1 \\ge 3$ NO). `A5 (800)`: larger = 0, smaller = 4 ($0 \\ge 4$ NO).',
          'Surviving rows: `A1, A2, A3` $\\implies 3$ rows.',
        ],
        directShortcutUsed: 'Sorted rank check: `100` (4>=0), `300` x2 (2>=1) $\\implies 3$.',
      },
      {
        id: 'm12-c4-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Tricky · NOT IN (NULL) vs NOT EXISTS',
        marks: 2,
        type: 'NAT',
        stem: 'Consider single-column tables `P(x) = {(1), (2), (3), (4)}` and `Q(y) = {(2), (NULL)}`. Let $n_1$ be the row count returned by `SELECT x FROM P WHERE x NOT IN (SELECT y FROM Q);` and $n_2$ be the row count returned by `SELECT x FROM P WHERE NOT EXISTS (SELECT * FROM Q WHERE Q.y = P.x);`. Compute $n_1 + 10 \\cdot n_2$.',
        natAnswer: { min: 30, max: 30, exactDisplay: '30' },
        triggerHint: '`Q` contains `NULL`! Expand `x NOT IN (2, NULL)` using 3-valued logic.',
        intuitiveSolution: [
          'For $n_1$: `x NOT IN (2, NULL)` means `(x <> 2) AND (x <> NULL)`. Since `x <> NULL` is always `UNKNOWN`, the conjunction is either `FALSE` (at `x=2`) or `UNKNOWN` (at `x=1,3,4`). Zero rows evaluate to `TRUE` $\\implies n_1 = 0$.',
          'For $n_2$: `Q.y = P.x` matches a row ONLY when `P.x = 2` (since `NULL = P.x` is `UNKNOWN`, returning 0 rows from the inner query). Thus `NOT EXISTS` is `TRUE` for `1, 3, 4` $\\implies n_2 = 3$.',
          '$n_1 + 10 \\cdot n_2 = 0 + 10(3) = 30$.',
        ],
        directShortcutUsed: '`NOT IN (NULL)` $= 0$ rows; `NOT EXISTS` $= 3$ rows $\\implies 0 + 30 = 30$.',
      },
      {
        id: 'm12-c4-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Tricky · SQL 3VL & Subquery Edge Cases',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following SQL statements are ALWAYS true in standard SQL?',
        options: [
          {
            id: 'A',
            text: 'If `S` is empty, `SELECT * FROM R WHERE R.a > ALL (SELECT S.b FROM S)` returns all rows of `R`.',
            whyTrueOrFalse: 'True: `x > ALL(∅)` is vacuously `TRUE` for every row in `R`.',
          },
          {
            id: 'B',
            text: 'If `S` is empty, `SELECT * FROM R WHERE R.a > (SELECT MAX(S.b) FROM S)` returns all rows of `R`.',
            whyTrueOrFalse: 'False: `MAX` on an empty set returns `NULL`, and `R.a > NULL` evaluates to `UNKNOWN`, returning **0 rows**!',
          },
          {
            id: 'C',
            text: 'In `SELECT dept, COUNT(*) FROM Emp GROUP BY dept`, all rows with `dept IS NULL` are placed into a single `NULL` group.',
            whyTrueOrFalse: 'True: SQL `GROUP BY` and `DISTINCT` treat all `NULL`s as equal for grouping.',
          },
          {
            id: 'D',
            text: '`SELECT COUNT(col) FROM T` returns `NULL` when every value of `col` in `T` is `NULL`.',
            whyTrueOrFalse: 'False: `SUM/AVG/MIN/MAX` return `NULL` on all-NULL input, whereas `COUNT(col)` returns `0`.',
          },
        ],
        correctOptions: ['A', 'C'],
        triggerHint: 'Test empty-set `ALL` vs `MAX`, `GROUP BY NULL`, and `COUNT(all-NULL)`.',
        intuitiveSolution: [
          'A is TRUE by vacuous truth of `> ALL(∅)`.',
          'B is FALSE because `MAX(∅) = NULL`, making `R.a > NULL` equal `UNKNOWN` (0 rows).',
          'C is TRUE: SQL groups all `NULL`s together in `GROUP BY` and `DISTINCT`.',
          'D is FALSE: `COUNT(col)` returns `0`, never `NULL`.',
        ],
        directShortcutUsed: '`> ALL(∅) = TRUE`, `MAX(∅) = NULL`, `COUNT(all-NULL) = 0`, `GROUP BY` merges `NULL`s.',
      },
    ],
  },
]

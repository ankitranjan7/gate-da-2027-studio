# Personal Learning Style & Curriculum Authoring Blueprint (`LEARNING_STYLE.md`)

> **Status:** `v4.0 — First-Principles System Rules, Why-First Framing, Zero-Assumption Dissection & Multi-Line Code Blocks`
> **Purpose:** Single source of truth governing how every topic, glossary, code trace, numerical walkthrough, interactive visual, and practice set in the GATE DA 2027 Interactive Studio is authored across all 8 prerequisite-ordered subject tracks (17 modules, 52 chapters).

---

## 1. Learner Profile & Schedule Parameters
- **Target Exam:** GATE 2027 — Data Science & Artificial Intelligence (`DA`), organized by **IIT Madras** (Feb 2027).
- **8-Week Deep Mastery Window:** Nov 4, 2026 → Dec 29, 2026 (**56 days × ~6 quality hrs/day ≈ 336 hours**), leaving ~5 full weeks in Jan–Feb 2027 exclusively for full-length mocks, revision, and speed drills.
- **Starting Baseline:** Assume **zero prior knowledge** of the current topic and briefly unpack every prerequisite right where it appears (especially in Math chapters, and across Python/DSA, DBMS, ML, and AI too).
- **UI & Visual Ergonomics:**
  - Organized around **8 prerequisite-ordered broad subject tracks** (`Calculus` → `Probability & Statistics` → `Linear Algebra` → `Python & DSA` → `AI Search & Logic` → `DBMS & Warehousing` → `Machine Learning` → `General Aptitude & Synthesis`).
  - Delivered via a **full-height horizontal center-focus card deck (`1 Card = 1 Complete Topic/Unit`)** with softly peeking previous/next cards, zero trapped inner scrollbars, responsive iPhone/iPad touch swipe, and automatic private GitHub Gist cross-device sync.
  - Calm, low-glare dark study palettes (`Copper Paper` default + 4 switchable study accents; zero neon slop; soft off-white KaTeX math ink).

---

## 2. Core Pedagogical Principles (Clarity Always Beats Brevity)

1. **"Why Are We Studying This?" First (`whyStudy`):**
   - Before introducing any definition, theorem, or code, answer clearly: *What real problem does this solve? Why did mathematicians or computer scientists invent it? Where does it actually show up?*
2. **"How the Environment / System Actually Works" First (`groundRules`):**
   - Computers, programming languages, SQL engines, and mathematics follow explicit **ground-truth rules** chosen by their designers.
   - Always state those underlying rules FIRST (for example: *Python pre-scans an entire function body before running line 1 to build its Local variable list*; *SQL uses 3-valued logic where `NULL` means "unknown"*; *a function must return exactly one output per input so outputs are never ambiguous*).
   - Once the learner knows how the environment actually behaves, "weird errors" and "tricky exam traps" become 100% logical consequences rather than arbitrary trivia to memorize.
3. **Assume Zero Prior Knowledge (Including Prerequisites):**
   - Never casually drop "recall X" or assume the reader remembers notation like $\mathbb{R}$, $\in$, $\implies$, $\iff$, $\binom{n}{2}$, open vs. closed intervals `(-2, 2)`, or what `return inner` without parentheses does. Unpack every building block cleanly on the spot.
4. **Dissect Every Small Step for 1-Read Understanding:**
   - More words that cleanly separate each micro-step take **one effortless read**; overly compressed "concise" paragraphs force five re-reads and still leave confusion.
   - Write like a patient teacher sitting beside one student — complete, warm sentences, one small logical move per line.
5. **Proper Multi-Line Indented Code Blocks (Never One-Line Semicolon Code):**
   - Every Python, SQL, or pseudocode snippet longer than a single short expression MUST be formatted as a fenced multi-line code block (```` ```python ````, ```` ```sql ````) with real indentation and line breaks. Never cram multi-line Python onto one line with semicolons.

---

## 3. Non-Negotiable 5-Stage Chapter Flow

Every single chapter across the website **MUST** follow these five stages in order:

### Stage 0: Vocabulary Before Concepts (`Key Words & Terms` — Card 0)
- Every chapter opens with **Card 0 (`Key Words & Terms`)** before any concept or theorem appears.
- Define **8–14 topic- and math-specific words** introduced in that chapter (with optional KaTeX symbol) using **plain everyday English** and a **tiny concrete example** so unfamiliar words never block understanding in Topic 1.

### Stage 1: Ground-Up Concept Cards (`Learn from Zero` — 1 Card = 1 Complete Topic)
Each `ConceptBlock` flows in order:
1. **Why Are We Studying This? (`whyStudy`):** The real problem and core intuition.
2. **How the System Works (`groundRules`):** The 2–4 foundational rules of the language, engine, or mathematical world that make everything below predictable.
3. **Concrete Toy Example BEFORE General Formulas:** Vivid small-number / concrete trace (`x = 2`, 4 lockers, 3-line Python trace, 4-row SQL table) walked through step by step.
4. **General Theorem & Formula + Plain-English Decoding:** Formal statement and KaTeX equation immediately translated back into everyday words.
5. **Tap-to-Reveal Worked Mini-Examples:** Think first, reveal when ready.
6. **Interactive Visual Sandbox** *(where intuition benefits most)*.
7. **MSQ Trap & Counter-Example Radar + Forward Payoff Bridges.**

### Stage 2: Tricky Questions — "How to Think" Playbook
- Trigger Cue + 10-Min Brute-Force Trap vs. 30-Sec Mental Shift + progressive step-by-step reveal + Lock-In Rule.

### Stage 3: Two-Stage Memory Distillation (`Direct Exam Arsenal`)
- Compact scannable **"When You Spot → Direct Weapon → Instant Rule → 10-Sec Check → One Fatal Trap"** cards for fast second-pass solving.

### Stage 4: Progressive Practice & Infinite Numerical Drills (`Practice Arena`)
- Warmup Basics → Official GATE DA PYQs (2024–2026) → IITM-Caliber Tricky MSQs/NATs → Infinite Parameterized Numerical Drills, tested in single-question CBT mode.

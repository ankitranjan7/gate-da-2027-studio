# Personal Learning Style & Curriculum Authoring Blueprint (`LEARNING_STYLE.md`)

> **Status:** `v3.0 — Horizontal Center-Focus Deck, Chapter Glossaries & Teacher-to-Student Voice`
> **Purpose:** Single source of truth governing how every topic, glossary, numerical walkthrough, interactive visual, and practice set in the GATE DA 2027 Interactive Studio is authored across all 8 prerequisite-ordered subject tracks (17 modules, 52 chapters).

---

## 1. Learner Profile & Schedule Parameters
- **Target Exam:** GATE 2027 — Data Science & Artificial Intelligence (`DA`), organized by **IIT Madras** (Feb 2027).
- **8-Week Deep Mastery Window:** Nov 4, 2026 → Dec 29, 2026 (**56 days × ~6 quality hrs/day ≈ 336 hours**), leaving ~5 full weeks in Jan–Feb 2027 exclusively for full-length mocks, revision, and speed drills.
- **Starting Baseline:** Decent foundation across most topics, mixed with rusty / beginner pockets that require clean ground-up rebuilding without skipped steps.
- **UI & Visual Ergonomics:**
  - Organized around **8 prerequisite-ordered broad subject tracks** (`Calculus` → `Probability & Statistics` → `Linear Algebra` → `Python & DSA` → `AI Search & Logic` → `DBMS & Warehousing` → `Machine Learning` → `General Aptitude & Synthesis`) rather than raw syllabus numbering.
  - Delivered via a **full-height horizontal center-focus card deck (`1 Card = 1 Complete Topic/Unit`)** with softly peeking previous/next cards, zero trapped inner scrollbars on the focused card, and distraction-free progressive reveals.
  - Calm, low-glare dark study palettes (`Copper Paper` default with Copper/Ochre/Sage/Crimson restrained accents; zero neon slop; soft off-white KaTeX math ink).

---

## 2. Non-Negotiable Pedagogical Rules (The 5-Stage Flow + Teacher Voice)

### Warm Teacher-to-Student Voice (Applies Everywhere)
- **Write Like a Patient Mentor Talking Directly to One Student:** All theory, toy examples, plain-English decodings, playbooks, and question solutions must read as a calm, encouraging teacher walking a student through the idea step by step ("Notice why…", "Think of this as…", "Here is the catch…", "Let us test that on small numbers first…").
- **Never Drop Cold Textbook Shorthand:** Every symbol, step jump, or algebraic move must explain *why* it is happening in plain conversational language before or right beside the notation.

Every single module and chapter across the website **MUST** follow these five stages in order:

### Stage 0: Vocabulary Before Concepts (`Key Words & Terms` Card)
- Every chapter begins with **Card 0 (`Key Words & Terms`)** before any concept or theorem appears.
- Define **8–14 topic- and math-specific words** introduced in that chapter (including optional KaTeX symbol) using **plain English** and a **tiny concrete example** (e.g., a small number, 2×2 matrix, 3-node graph, or 3-row table) so unfamiliar jargon never blocks comprehension in Topic 1.

### Stage 1: Continuous Stream from Ground-Floor Basics (`Learn from Zero`)
1. **Zero Prerequisite Jumps:** Never introduce a concept, symbol, or formula that depends on an untaught topic. Follow the **True Prerequisite Graph** (Calculus → Probability/Stats → Linear Algebra → Python/DSA + AI Search → Logic + DBMS → Machine Learning + Bayes Nets → GA & Full Synthesis), *not* the arbitrary numbering of `syllabus.pdf`.
2. **Concrete Toy Example BEFORE General Theorems/Formulas:**
   - Every definition, theorem, and formula (especially in Math & DBMS/ML traces) must start with a vivid, small-number concrete example (`x = 2`, a 3-element set, a 2×2 matrix, a 4-row SQL table, a 3-point dataset) showing *what problem we are solving* and *how the mechanism works by hand*.
   - Only after the toy example clicks do we generalize to the formal theorem and algebraic formula.
3. **Explicit Scope & Priority Boundaries:**
   - Clearly label **What IS Important** (high-ROI exam patterns & mark weightage) vs. **What is NOT Important / Safe to Skip** (out-of-scope CS/Engineering rabbit holes like Transactions/Concurrency in DBMS or Transformers in ML that carry 0 GATE DA marks).
4. **Forward Payoff Bridges ("Where You Will Use This Later"):**
   - Explicitly show how each foundational Math or CS concept reappears downstream (e.g., Sigmoid/ReLU derivatives → Backprop; Centering matrix & eigenvalues → PCA; First-Order Logic `∀/∃` → Tuple Relational Calculus & SQL `NOT EXISTS`).
5. **MSQ Trap & Counter-Example Radar:**
   - Highlight exact edge cases and compact pocket counter-examples (`|x|`, `x^3`, 2-element FOL domain, singular/non-symmetric matrices, single-option MSQs) right alongside each theorem.

### Stage 2: Tricky Questions — "How to Think" Meta-Intuition (`How to Think Playbook`)
- Never present a tricky numerical solution as a cold wall of algebra.
- Structure every tricky archetype into:
  1. **Trigger Cue:** What exact phrase, symbol, or symmetry in the problem statement should make a lightbulb go off?
  2. **The Mental Shift (10-Min Brute-Force Trap vs. 30-Sec Insight):** Why naive calculation gets stuck, and how to re-frame the question intuitively so solving it feels easy.
  3. **Progressive Step-by-Step Solution:** Revealable step-by-step execution so you can test your own thinking before seeing the next line.

### Stage 3: Two-Stage Memory Distillation (`Direct Exam Arsenal`)
- First-principles build-up is essential *the first time* you learn a topic so you trust why it works. Once understood, re-deriving from basics in the exam is too slow—often a single final theorem, invariant, or structural shortcut solves 90% of questions directly.
- Every chapter must include a dedicated **Direct Exam Arsenal** view containing compact **"When You Spot → Direct Weapon → Instant Rule → 10-Sec Check → One Fatal Trap"** cards for rapid second-pass solving.

### Stage 4: Progressive Practice & Infinite Numerical Drills (`Practice Arena`)
- **Tier 1 (Foundation Check):** Warmup numericals directly testing the core formula.
- **Tier 2 (Authentic GATE DA PYQs — 2024, 2025, 2026):** Past questions mapped cleanly to that chapter with authentic MCQ (`-1/3`, `-2/3`), strict all-or-nothing MSQ, and exact-range NAT grading.
- **Tier 3 (IITM-Caliber Tricky Practice):** Fresh multi-concept MSQs, edge cases, and Sleeping Giants.
- **Tier 4 (Parameterized Numerical Drills):** "Generate New Numbers" NAT generators linked to the built-in GATE Virtual Scientific Calculator.

---

## 3. Approved Calibration Baseline
- [x] **Stage 0 Glossaries:** Mandatory Card 0 (`Key Words & Terms`) with 8–14 plain-English terms + tiny concrete examples per chapter.
- [x] **Warm Teacher-to-Student Voice:** Conversational, step-explaining prose across toy examples, formula decodings, playbooks, and solutions.
- [x] **Horizontal Center-Focus Deck:** `1 Card = 1 Complete Topic/Unit` at full natural height across 8 prerequisite-ordered broad subject tracks.
- [x] **Pacing & Granularity:** Approved — keep toy examples crisp, small-number, and immediately connected to the formal theorem.
- [x] **Visual Sandboxes:** Approved — interactive sliders/steppers embedded inline where intuition benefits most.
- [x] **"How to Think" Framing:** Approved — Trigger Cue + Brute-Force Trap vs. Mental Shift + step reveal.
- [x] **Direct Exam Arsenal:** Approved — clean Spot/Weapon/Trap cards + global searchable Master Arsenal.
- [x] **Dark UI Theme:** Locked to calm eye-comfort dark accents (`Copper Paper` default + 4 switchable study accents).

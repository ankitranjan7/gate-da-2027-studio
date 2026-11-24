# GATE DA 2027 Studio — Horizontal Center-Focus Deck, 8-Subject Navigation, Chapter Glossaries & Teacher-Voice Redesign

**Date:** 2026-11-20  
**Status:** Design Specification (Pending User Approval)  
**Scope:** Full repository (`gate-da-studio/` UI shell, navigation, views, schema, validator, `LEARNING_STYLE.md`, and all 52 chapters across 17 modules)

---

## 1. Problem & Goals

The current GATE DA 2027 Studio contains a complete, prerequisite-ordered 52-chapter curriculum, but every screen shows too much information simultaneously:
- Stacked navigation bars, open-by-default metadata cards, and all concepts/playbooks/questions dumped vertically on one long scroll create visual and cognitive overload.
- Navigating via a 17-module dropdown feels fragmented compared to thinking in terms of the broad GATE DA subjects.
- New chapters introduce unfamiliar mathematical and CS terminology before defining the words in plain English, and parts of the text read like compressed reference notes rather than a teacher guiding a student.

### Approved Design Goals
1. **8 Prerequisite-Ordered Subject Tracks:** Replace the 17-module dropdown with 1-click jumping across 8 broad subject tracks covering all 52 chapters in intuitive prerequisite order, plus a `"Continue Where You Left Off"` launcher.
2. **Full-Chapter Horizontal Center-Focus Card Deck:**
   - **1 Card = 1 Complete Topic/Unit** (matching active working memory — never fragmented into tiny 4-line cards, and never 4 full topics stacked vertically).
   - The active card sits centered (`min(860px, 72vw)`) at its **full natural height** (no artificial height cap or trapped inner scrollbar).
   - The **previous card** peeks softly on the left and the **next card** peeks softly on the right (`scale(0.94)`, `opacity: 0.48`, smoothly brightening on hover) so the learner can glance back/ahead and move effortlessly via clicking a peeking card, trackpad horizontal swipe, or keyboard `←` / `→`.
   - Every chapter is a complete, continuous horizontal loop from start to finish (`Words & Terms → Topic 1..M → Playbook → Direct Arsenal → Practice & PYQs → Continue to Next Chapter`).
3. **Card 0 — "Key Words & Terms" Glossary:** Every chapter opens with a dedicated first card defining all math-specific and topic-specific words used in that chapter in plain, teacher-to-student English with tiny concrete examples.
4. **Teacher-to-Student Voice:** All theory, toy examples, plain-English decodings, worked examples, playbook walkthroughs, and practice solutions across all 52 chapters read as if a patient teacher is explaining directly to a student.
5. **App-Wide Decluttering:** Apply the same calm, progressive-disclosure ergonomics to `8-Week Plan`, `Direct Arsenal`, `Mistake Vault`, and the top navigation chrome.

---

## 2. Information Architecture: 8 Broad Subject Tracks

A new registry file `gate-da-studio/src/data/subjectTracks.ts` groups all **52 chapters** (sourced from the existing 17 lazy-loaded module files, keeping code-splitting intact) into **8 prerequisite-ordered broad subject tracks**:

| # | Track ID | Broad Subject Track | Chapters | Source Modules / Chapter Slice |
|---|----------|---------------------|----------|--------------------------------|
| 1 | `calc` | **Calculus & Optimization** | 6 | Module 1 (`w1-m1`, all 6) |
| 2 | `prob` | **Probability & Statistics** | 11 | Modules 2–5 (`w1-m2` [3], `w2-m1` [3], `w2-m2` [3], `w2-m3` [2]) |
| 3 | `la` | **Linear Algebra** | 6 | Modules 6–7 (`w3-m1` [3], `w3-m2` [3]) |
| 4 | `dsa` | **Python, DSA & Graph Algorithms** | 7 | Modules 8–9 (`w4-m1` [3], `w4-m2` [3]) + Module 10 Ch.1 (`BFS, DFS & Topo Sort`) |
| 5 | `ai` | **AI: Search, Logic & Bayes Nets** | 5 | Module 10 Ch.2–3 (`Dijkstra, MST & A*`, `Minimax & Alpha-Beta`) + Module 11 (`w5-m2` [2]) + Module 15 Ch.3 (`Bayes Nets & Inference`) |
| 6 | `dbms` | **DBMS & Data Warehousing** | 6 | Modules 12–13 (`w6-m1` [4], `w6-m2` [2]) |
| 7 | `ml` | **Machine Learning** | 6 | Module 14 (`w7-m1` [4]) + Module 15 Ch.1–2 (`Clustering & Linkage`, `PCA & Eigen-Projection`) |
| 8 | `ga` | **General Aptitude & Synthesis** | 5 | Modules 16–17 (`w8-m1` [3], `w8-m2` [2]) |

- **Total:** `6 + 11 + 6 + 7 + 5 + 6 + 6 + 5 = 52` chapters (exact 1-to-1 coverage of every chapter in the repository).
- Each chapter receives a track-local display index (`Ch.1`..`Ch.N` within its subject track) while retaining its globally unique `chapter.id` so all existing progress in `user-progress.json` remains 100% compatible.
- `subjectTracks.ts` exposes:
  - `SUBJECT_TRACKS`: ordered array of track metadata + chapter references (`moduleId`, `chapterIndexInModule`)
  - `loadTrackChapters(trackId, moduleCache)`
  - `getTrackForChapter(chapterId)`
  - `getAdjacentChapter(chapterId, direction: 'prev' | 'next')` — flows seamlessly across chapter boundaries AND from the last chapter of one subject track into Chapter 1 of the next subject track.

---

## 3. Data Schema & Persistence (`src/types/curriculum.ts`)

### 3.1 Glossary Term Schema
```ts
export interface GlossaryTerm {
  term: string          // Plain name, e.g. "Injective (One-to-One)"
  symbol?: string       // Optional inline KaTeX notation, e.g. "$f(x_1)=f(x_2) \\implies x_1=x_2$"
  plainEnglish: string  // Conversational teacher explanation in plain English
  tinyExample: string   // Concrete 1-line example showing the term in action
}
```
Add `glossary: GlossaryTerm[]` to `ChapterData` (8–14 essential math/CS/topic-specific terms per chapter).

### 3.2 Progress Persistence (`UserProgressState`)
Extend `UserProgressState` with backwards-compatible optional fields persisted to both `localStorage` and `/api/progress` (`user-progress.json`):
```ts
chapterCardCursor?: Record<string, number> // Last active horizontal card index per chapter
lastVisitedChapterId?: string              // Powers the "Continue Where You Left Off" button
```
Existing fields (`completedConcepts`, `completedChapters`, `questionAttempts`, `bookmarkedQuestions`, `questionNotes`, `chapterConfidence`, `completedPlanModules`) remain unchanged and fully preserved.

---

## 4. UI Architecture & Components

### 4.1 Slim App Chrome (`src/App.tsx`)
- Single `48px` sticky top bar (`max-w-7xl` or full-width subtle border):
  - Brand mark (`GATE DA 2027 Studio`)
  - 4 clean top-level tabs: `Subjects` (default home/study hub) · `8-Week Plan` · `Direct Arsenal` · `Vault`
  - Utility icons: `Theme` picker · `Calc` toggle · `Style Log`
- When inside a chapter (`ChapterDeck` view), the top bar stays slim (`48px`) and shows chapter context cleanly without stacking a second module bar or chapter pill strip beneath it.

### 4.2 Subject Map Home View (`src/components/SubjectMap.tsx`)
- **Continue Strip:** Single calm card at the top showing the last visited chapter (`Subject · Ch.X · Card k / N`) with a primary `Resume Chapter →` button (defaults to `Calculus · Ch.1` on first visit).
- **8 Subject Track Pills:** Horizontal wrap strip (`1. Calculus` .. `8. GA & Synthesis`) displaying completed/total chapters (`e.g., 2/6`). Clicking any pill immediately switches the chapter list below.
- **Clean Chapter Path:** Vertical list of chapters for the active track — each row shows `Ch.N · Title`, estimated hours, card resume state or `Mastered ✓`, confidence stars, and a single `Start →` / `Resume →` button. Zero nested scope boxes or badge clutter.

### 4.3 Horizontal Center-Focus Chapter Deck (`src/components/ChapterDeck.tsx`)
Replaces the vertically stacked `ChapterStudio.tsx` as the primary chapter study experience.

#### Chapter Control Strip (1 Slim Bar + Thin Progress Line)
- **Left:** `← Subjects` button · `Subject · Ch.N ▾` quick-jump popover (jump to any of the 8 subjects or chapters in 2 clicks) · `Scope Radar ▾` popover (What IS Important vs. Safe to Skip + Builds On / Unlocks Downstream — closed by default, 1 click anytime).
- **Center:** Clickable horizontal card pills for every card in the chapter: `Words` · `1.1` · `1.2` · … · `Playbook` · `Arsenal` · `Practice`.
- **Right:** `k / N` card counter + `Style Feedback` icon.
- Directly underneath: `3px` copper progress line reflecting card progress through the chapter.

#### Complete Chapter Card Sequence (1 Card = 1 Complete Topic/Unit)
1. **Card 0 — Key Words & Terms (`GlossaryCard`):**
   - Teacher welcome line introducing what this chapter is about in plain language.
   - Clean 2-column grid of `GlossaryTerm` entries: Term heading + optional KaTeX symbol badge + warm plain-English teacher explanation + concrete 1-line example.
   - Subtle CTA at the bottom: `"Ready? Glance right or press → for Topic 1.1"`.
2. **Cards 1..M — Complete Concept Topics (`TopicCard`, 1 card per `ConceptBlock`):**
   - **Header:** `Topic X.Y of M`, priority pill, `Builds on`, `✓ Mark Understood` toggle, `Feedback` button.
   - **1. Intuition First (Toy Example):** Copper left-rail (`3px solid var(--accent)`), scenario, walkthrough steps, and `Aha Moment` box.
   - **2. General Theorem & Formula:** Formal statement, centered KaTeX display formula box (`--formula-border`), and `In Plain English` decoding.
   - **3. Worked Mini-Examples:** 2-column cards showing each prompt immediately with a click-to-toggle `"Reveal Solution"` button (supports active recall and keeps cards airy).
   - **4. Interactive Visual Sandbox:** Embedded `InteractiveSandbox` right inside the topic card when `concept.sandboxId` is present.
   - **5. MSQ Trap Radar & Forward Payoff:** Compact 2-column Myth vs. Reality + Counter-Example cards, followed by a subtle 1-line `Used Later in GATE DA` bridge strip.
3. **Card M+1 — "How to Think" Playbook (`PlaybookDeckCard`):**
   - Compact pill switcher across the chapter's tricky archetypes (`#1`, `#2`, ...), so all archetypes sit cleanly in one card without vertical walls.
   - Displays Problem Statement, Trigger Cue, Brute-Force Trap vs. Mental Shift, progressive `Reveal Next Step →` button, and Lock-In Rule.
4. **Card M+2 — Direct Exam Arsenal (`ArsenalDeckCard`):**
   - Scannable list of all chapter weapons showing `Badge + When You Spot → KaTeX Direct Weapon` immediately.
   - Click any row to toggle open `Instant Rule`, `10-Sec Check`, and `⚠ Fatal Trap`, plus an `Expand All / Collapse All` button.
5. **Card M+3 — Practice, PYQs & Infinite Drill (`PracticeDeckCard`):**
   - Compact numbered CBT question palette (`1 2 … Q` + `∞ Infinite Drill` tab) with tier/type indicator badges, showing **one question at a time** (reusing single-question `QuestionCard` grading, hints, bookmarks, and disk-saved notes) plus `InfiniteNumericalGenerator` on the `∞ Drill` tab.
   - **Chapter Completion Footer:** 1–5 star confidence selector, `Mark Chapter Mastered ✓` toggle, and primary **`Continue to Next Chapter →`** button (advances to next chapter in the subject track, or Ch.1 of the next subject track).

#### Center-Focus Horizontal Deck Mechanics
- **Card sizing:** Focused card `flex: 0 0 min(860px, 72vw)`, natural full height (`height: auto`, zero trapped inner scrollbar).
- **Adjacent peeks:** `i === activeIdx ± 1` render at `scale(0.94)`, `opacity: 0.48` (hover `0.72`, `scale(0.955)`), `transform-origin: top center`, with `pointer-events: none` on inner children so clicking anywhere on a peeking card slides it cleanly to center.
- **Height synchronization:** A `ResizeObserver` on the active card syncs `maxHeight` of inactive side cards to `Math.max(activeCard.offsetHeight, 520)` with a soft bottom gradient fade so tall inactive neighbors never create empty vertical dead space below a shorter active card.
- **Navigation ergonomics:**
  - Click peeking left/right card to focus it.
  - Trackpad horizontal swipe / `wheel` (`|deltaX| > |deltaY|`, debounced `320ms`), **explicitly skipping** events originating inside horizontally scrollable KaTeX blocks (`.katex-display`, `.overflow-x-auto`) or range sliders (`input[type="range"]`) so interacting with sandboxes or scrolling wide equations never accidentally changes cards.
  - Keyboard `←` / `→` (ignored when focus is inside `INPUT`, `TEXTAREA`, or `SELECT`).
  - Clicking top card pills jumps directly to any card.
  - Changing cards smoothly scrolls the window to the top (`window.scrollTo({ top: 0, behavior: 'smooth' })`) and saves `chapterCardCursor[chapter.id]`.

### 4.4 Decluttered Secondary Views
- **`PlanDashboard.tsx`:** Split into 2 clean sub-tabs: **`8-Week Roadmap`** (Weeks 1–8 as compact collapsible 1-line rows with progress indicators; expanding a week shows clean 1-line module rows with optional `Details ▾` drawer + `Open →` jumping straight to that module's first chapter in the deck) and **`3-Year Analytics & PDFs`** (Section Weightage Audit table, Zero-Negative Scoring Stats, and Official Workspace PDF links).
- **`GlobalArsenalView` (`GlobalArsenalAndVault.tsx`):** Search + 8-Subject Track filter (replacing 17-module filter) + compact scannable cards (`Spot → Formula`) that expand on click to show `Instant Rule` & `Fatal Trap`, plus an `Expand All` button.
- **`MistakeVaultView` (`GlobalArsenalAndVault.tsx`):** Filter pills (`All Vault` / `Missed` / `Bookmarked`) + single-question CBT palette stepper (matching Card M+3 Practice) so reviewing mistakes never produces a giant vertical wall.

---

## 5. Pedagogical & Content Upgrade Across All 52 Chapters

### 5.1 `LEARNING_STYLE.md` v3.0 Update
Document the two new non-negotiable rules alongside the existing 4-stage flow:
- **Stage 0 — Vocabulary Before Concepts (`Key Words & Terms` Card):** Every chapter must define 8–14 topic-specific and math-specific terms in plain English with a tiny concrete example before introducing Concept 1.
- **Warm Teacher-to-Student Voice:** Write as a patient mentor sitting beside the student — explain *why* each step happens in complete, clear English sentences rather than terse shorthand; avoid undefined jargon; keep KaTeX symbols paired with spoken meaning on first use.

### 5.2 All 52 Chapters Upgrade (`calculus/chapter1..6.ts` + `modules/module2..17.ts`)
For every single one of the 52 chapters:
1. Author a chapter-specific `glossary: GlossaryTerm[]` (8–14 terms) covering every mathematical, algorithmic, statistical, DBMS, ML, and AI word introduced in that chapter, written in warm plain English with concrete 1-line examples.
2. Polish the prose across `tagline`, `toyExample`, `theoremAndFormula` (`statement` & `plainEnglishDecoding`), `workedMiniExamples`, `howToThinkPlaybook`, and `questions` (`intuitiveSolution` & `triggerHint`) into clear, conversational teacher-to-student English while preserving 100% of mathematical rigor, exact answers, PYQ attributions, and KaTeX syntax.

### 5.3 Validator Upgrade (`scripts/validate-curriculum.mjs`)
- Require every chapter to have a non-empty `glossary` array with valid `term`, `plainEnglish`, and `tinyExample` strings.
- Validate all KaTeX expressions inside `glossary` fields (`term`, `symbol`, `plainEnglish`, `tinyExample`).
- Support validating all 17 curriculum entry files (`src/data/calculus/index.ts` + `src/data/modules/module2..17.ts`, covering all 52 chapters).

---

## 6. Verification Plan
1. **Schema & Math Validation:** Run `node scripts/validate-curriculum.mjs` across all 17 curriculum entry files (`src/data/calculus/index.ts` + `src/data/modules/module2..17.ts`) and verify 0 errors across all 52 chapters, all glossary entries, and all KaTeX expressions.
2. **TypeScript & Production Build:** Run `npm run build` (`tsc -b && vite build`) in `gate-da-studio/` and verify clean exit with 0 warnings/errors.
3. **Interactive Verification:** Launch `npm run dev` and inspect:
   - Subject Map (all 8 tracks, 52 chapters total, Resume strip)
   - Horizontal Center-Focus Deck on Calculus Ch.1 and multiple downstream tracks (Probability, Linear Algebra, Python/DSA, AI, DBMS, ML, GA) — verify Card 0 Glossary, full-height active card, synced side-card peeks, swipe/click/keyboard navigation, sandbox interaction safety, and Practice CBT palette
   - Decluttered 8-Week Plan, Global Direct Arsenal, Mistake Vault, GATE Calculator, Theme switcher, and `user-progress.json` cursor persistence.

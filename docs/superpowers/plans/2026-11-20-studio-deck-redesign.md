# GATE DA 2027 Studio — Horizontal Deck, 8-Subject Navigation, Glossaries & Teacher-Voice Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the GATE DA 2027 Studio into a calm, distraction-free learning environment featuring 8 prerequisite-ordered broad subject tracks, a full-height horizontal center-focus card deck (1 card = 1 complete topic/unit with softly peeking previous/next cards), a mandatory Card 0 "Key Words & Terms" plain-English glossary for all 52 chapters, warm teacher-to-student prose across all 52 chapters, and decluttered secondary views (`8-Week Plan`, `Direct Arsenal`, `Mistake Vault`).

**Architecture:** All 17 lazy-loaded curriculum modules (`src/data/calculus/` + `src/data/modules/module2..17.ts`, 52 chapters total) stay intact and code-split, mapped into 8 broad tracks via a new `src/data/subjectTracks.ts` registry. The UI replaces the stacked `ChapterStudio.tsx` with a modular `ChapterDeck.tsx` + `src/components/deck/*` card family and a `SubjectMap.tsx` home/jumper view, while extending `UserProgressState` backwards-compatibly with `chapterCardCursor` and `lastVisitedChapterId`.

**Tech Stack:** React 19, TypeScript 5.7, Vite 6, Tailwind CSS 4, KaTeX 0.16, Lucide React, Node (`scripts/validate-curriculum.mjs`).

## Global Constraints

- **Workspace root:** `/Users/ankitranjan/Desktop/GATE DA 2027` (app root: `gate-da-studio/`). Not a git repository (skip `git commit` steps; verify cleanly with `validate-curriculum.mjs` and `npm run build`).
- **Dark study theme preservation:** All new components MUST use the existing semantic CSS utility classes and custom properties in `gate-da-studio/src/styles/themes.css` (`s-canvas`, `s-surface`, `s-elevated`, `s-inset`, `s-text-primary`, `s-text-secondary`, `s-text-muted`, `s-border`, `s-btn-primary`, `s-btn-ghost`, `s-pill-accent`, `s-pill-formula`, `s-pill-ok`, `s-pill-bad`, `s-pill-neutral`, `s-rail-accent`, `s-rail-formula`, `s-input`). Never hardcode raw Tailwind slate/indigo colors.
- **No trapped inner scrollbars on focused cards:** Active center card uses `flex: 0 0 min(860px, 72vw)` and `height: auto`. Inactive neighboring cards sync their `maxHeight` via `ResizeObserver` to `Math.max(activeCard.offsetHeight, 520)` with a bottom gradient fade.
- **Gesture safety:** Horizontal wheel/trackpad card switching MUST ignore events originating inside `.katex-display`, `.overflow-x-auto`, or `input[type="range"]`. Keyboard `←`/`→` MUST ignore events when focus is inside `INPUT`, `TEXTAREA`, or `SELECT`.
- **Backwards-compatible progress:** Never rename existing `chapter.id`, `concept.id`, or `question.id` values; all new `UserProgressState` fields (`chapterCardCursor`, `lastVisitedChapterId`) default gracefully when absent from `user-progress.json`.
- **KaTeX validity:** Every LaTeX string in TypeScript files MUST double-escape backslashes (`\\frac`, `\\beta`, `\\text`, `\\right`) and pass `node scripts/validate-curriculum.mjs` with 0 errors.
- **Do not run pytest** (user global rule; this is a TypeScript/Vite project verified via `node scripts/validate-curriculum.mjs` and `npm run build`).

---

## File Map

| Path | Action | Responsibility |
|---|---|---|
| `LEARNING_STYLE.md` | Modify | Upgrade to v3.0 documenting Stage 0 Vocabulary Card & Warm Teacher-to-Student Voice |
| `gate-da-studio/src/types/curriculum.ts` | Modify | Add `GlossaryTerm`, `ChapterData.glossary`, `UserProgressState.chapterCardCursor` & `lastVisitedChapterId` |
| `gate-da-studio/scripts/validate-curriculum.mjs` | Modify | Validate `glossary` fields & KaTeX expressions (`--require-glossary` supported, then default) |
| `gate-da-studio/src/data/subjectTracks.ts` | Create | 8 prerequisite-ordered broad subject tracks mapping all 52 chapters + navigation helpers |
| `gate-da-studio/src/components/PracticeArena.tsx` | Modify | Export `QuestionCard` and support `singleQuestionMode` (compact CBT palette `1..N`, 1 question at a time) |
| `gate-da-studio/src/components/deck/GlossaryCard.tsx` | Create | Card 0: "Key Words & Terms" plain-English teacher glossary with tiny concrete examples |
| `gate-da-studio/src/components/deck/TopicCard.tsx` | Create | Cards 1..M: 1 complete `ConceptBlock` per card (Toy Example, Theorem/Formula, tap-to-reveal Mini-Examples, inline Sandbox, MSQ Traps, Forward Bridges) |
| `gate-da-studio/src/components/deck/PlaybookDeckCard.tsx` | Create | Card M+1: All chapter Playbook archetypes switchable via compact pills + progressive step reveal |
| `gate-da-studio/src/components/deck/ArsenalDeckCard.tsx` | Create | Card M+2: Scannable `Spot → Formula` rows expanding on click to `Instant Rule + 10-Sec Check + Fatal Trap` |
| `gate-da-studio/src/components/deck/PracticeDeckCard.tsx` | Create | Card M+3: Single-question CBT palette + `∞ Infinite Drill` tab + Confidence & `Continue to Next Chapter →` footer |
| `gate-da-studio/src/components/ChapterDeck.tsx` | Create | Horizontal center-focus deck orchestrator, slim chapter bar, Scope & Subject popovers, ResizeObserver height sync, swipe/click/keyboard navigation |
| `gate-da-studio/src/components/SubjectMap.tsx` | Create | Home & 8-subject jumper view with `"Continue Where You Left Off"` strip and clean chapter path |
| `gate-da-studio/src/App.tsx` | Modify | Slim 48px sticky header, wire `SubjectMap` ↔ `ChapterDeck`, persist `chapterCardCursor` & `lastVisitedChapterId` |
| `gate-da-studio/src/components/PlanDashboard.tsx` | Modify | Split into `8-Week Roadmap` (collapsible 1-line week rows) and `3-Year Analytics & PDFs` tabs |
| `gate-da-studio/src/components/GlobalArsenalAndVault.tsx` | Modify | 8-Subject track filter + expandable compact cards in Global Arsenal; single-question CBT mode in Mistake Vault |
| `gate-da-studio/src/data/calculus/chapter1..6.ts` | Modify | Add Card 0 `glossary` (8–14 terms each) + warm teacher-to-student prose pass (6 chapters) |
| `gate-da-studio/src/data/modules/module2..17.ts` | Modify | Add Card 0 `glossary` (8–14 terms each) + warm teacher-to-student prose pass (46 chapters across 4 parallel batches) |

---

### Task 1: Schema, Validator & `LEARNING_STYLE.md` v3.0

**Files:**
- Modify: `gate-da-studio/src/types/curriculum.ts`
- Modify: `gate-da-studio/scripts/validate-curriculum.mjs`
- Modify: `LEARNING_STYLE.md`

**Interfaces:**
- Produces:
  - `GlossaryTerm` interface (`term`, `symbol?`, `plainEnglish`, `tinyExample`)
  - `ChapterData.glossary?: GlossaryTerm[]`
  - `UserProgressState.chapterCardCursor?: Record<string, number>`
  - `UserProgressState.lastVisitedChapterId?: string`

- [ ] **Step 1: Extend `gate-da-studio/src/types/curriculum.ts`**

Add `GlossaryTerm` above `ChapterData`:
```ts
export interface GlossaryTerm {
  term: string
  symbol?: string
  plainEnglish: string
  tinyExample: string
}
```
Add `glossary?: GlossaryTerm[]` inside `ChapterData`, and add optional cursor fields inside `UserProgressState`:
```ts
  chapterCardCursor?: Record<string, number>
  lastVisitedChapterId?: string
```

- [ ] **Step 2: Update `gate-da-studio/scripts/validate-curriculum.mjs`**

Support an optional `--require-glossary` CLI flag (parsed before file paths). When `ch.glossary` is present (or when `--require-glossary` is passed):
- Verify `Array.isArray(ch.glossary)` and `ch.glossary.length >= 6`.
- For each entry `g` in `ch.glossary`, verify `g.term`, `g.plainEnglish`, and `g.tinyExample` are non-empty strings.
- Note: `walkStrings(ch, ...)` already traverses every string property recursively and validates all `$...$` and `$$...$$` KaTeX expressions inside `glossary`!

- [ ] **Step 3: Update `LEARNING_STYLE.md` to v3.0**

Add:
- **Stage 0: Key Words & Terms (`Glossary Card`)** — Every chapter begins with 8–14 plain-English definitions + tiny concrete examples of all math/CS terms introduced in that chapter.
- **Warm Teacher-to-Student Voice Rule** — Write explanations, toy examples, plain-English decodings, playbooks, and solutions as a patient mentor talking directly to a student ("Notice why…", "Think of this as…", "Here is the catch…").
- **Horizontal Center-Focus Deck Ergonomics** — 1 Card = 1 Complete Topic/Unit at full natural height across 8 prerequisite-ordered subject tracks.

- [ ] **Step 4: Run baseline curriculum validation**

Run:
```bash
cd "gate-da-studio" && node scripts/validate-curriculum.mjs src/data/calculus/index.ts src/data/modules/module*.ts
```
Expected: `OK: 17 file(s), 52 chapter(s), ... verified clean.`

---

### Task 2: 8 Prerequisite-Ordered Subject Tracks Registry

**Files:**
- Create: `gate-da-studio/src/data/subjectTracks.ts`

**Interfaces:**
- Consumes: `ALL_STUDY_MODULES`, `getModuleMetaById` from `./modulesRegistry`; `ChapterData` from `../types/curriculum`
- Produces:
  - `SubjectTrackId`: `'calc' | 'prob' | 'la' | 'dsa' | 'ai' | 'dbms' | 'ml' | 'ga'`
  - `TrackChapterRef`: `{ chapterId: string; moduleId: string; trackId: SubjectTrackId; trackOrder: number; shortTitle: string }`
  - `SubjectTrackMeta`: `{ id: SubjectTrackId; order: number; title: string; shortTitle: string; subtitle: string; chapters: TrackChapterRef[] }`
  - `SUBJECT_TRACKS: SubjectTrackMeta[]` (exact 52 chapter refs across 8 tracks)
  - `ALL_TRACK_CHAPTER_REFS: TrackChapterRef[]` (flattened 52-chapter prerequisite stream)
  - `getTrackById(trackId: SubjectTrackId): SubjectTrackMeta`
  - `getTrackForChapter(chapterId: string): SubjectTrackMeta`
  - `getChapterRefById(chapterId: string): TrackChapterRef`
  - `getAdjacentChapterRef(chapterId: string, dir: 'prev' | 'next'): TrackChapterRef | null`
  - `getRequiredModuleIdsForTrack(trackId: SubjectTrackId): string[]`

- [ ] **Step 1: Create `gate-da-studio/src/data/subjectTracks.ts`**

Encode the exact verified 52-chapter mapping:
1. `calc` (6 ch): `calc-ch1`..`calc-ch6` (`w1-m1`)
2. `prob` (11 ch): `prob1-ch1..3` (`w1-m2`), `prob2-ch1..3` (`w2-m1`), `prob3-ch1..3` (`w2-m2`), `prob4-ch1..2` (`w2-m3`)
3. `la` (6 ch): `la1-ch1..3` (`w3-m1`), `la2-ch1..3` (`w3-m2`)
4. `dsa` (7 ch): `pds1-ch1..3` (`w4-m1`), `pds2-ch1..3` (`w4-m2`), `graph-ch1` (`w5-m1`)
5. `ai` (5 ch): `graph-ch2..3` (`w5-m1`), `logic-ch1..2` (`w5-m2`), `ml2-ch3` (`w7-m2`)
6. `dbms` (6 ch): `dbms-ch1..4` (`w6-m1`), `dw-ch1..2` (`w6-m2`)
7. `ml` (6 ch): `ml1-ch1..4` (`w7-m1`), `ml2-ch1..2` (`w7-m2`)
8. `ga` (5 ch): `ga-ch1..3` (`w8-m1`), `synth-ch1..2` (`w8-m2`)

- [ ] **Step 2: Verify exact 52-chapter bijection against live curriculum files**

Run a quick Node + esbuild verification check confirming `ALL_TRACK_CHAPTER_REFS.length === 52`, zero duplicate `chapterId`s, and every `chapterId` exists in its declared `moduleId`.

---

### Task 3: Single-Question Practice Mode & Modular Deck Card Components

**Files:**
- Modify: `gate-da-studio/src/components/PracticeArena.tsx`
- Create: `gate-da-studio/src/components/deck/GlossaryCard.tsx`
- Create: `gate-da-studio/src/components/deck/TopicCard.tsx`
- Create: `gate-da-studio/src/components/deck/PlaybookDeckCard.tsx`
- Create: `gate-da-studio/src/components/deck/ArsenalDeckCard.tsx`
- Create: `gate-da-studio/src/components/deck/PracticeDeckCard.tsx`

**Interfaces:**
- Consumes: `ChapterData`, `ConceptBlock`, `GlossaryTerm`, `HowToThinkArchetype`, `ArsenalCard`, `PracticeQuestion`, `UserProgressState`, `PilotFeedbackItem`, `PRIORITY_META`, `MathText`, `InteractiveSandbox`, `InfiniteNumericalGenerator`
- Produces:
  - `PracticeArena` with optional `singleQuestionMode?: boolean` and exported `QuestionCard`
  - `GlossaryCard`, `TopicCard`, `PlaybookDeckCard`, `ArsenalDeckCard`, `PracticeDeckCard`

- [ ] **Step 1: Add `singleQuestionMode` to `PracticeArena.tsx`**

Keep existing props backwards-compatible and add optional `singleQuestionMode?: boolean`. When `singleQuestionMode` is true:
- Show compact tier/type filters + numbered CBT palette buttons (`1..N`, colored green if solved, red if previously missed, accent if active).
- Render **only the active `QuestionCard`** (keyed by `activeQuestion.id` so local state resets cleanly when switching questions) + crisp `← Prev Q` / `Next Q →` buttons below.

- [ ] **Step 2: Create `src/components/deck/GlossaryCard.tsx`**

Renders Card 0 ("Words You'll Hear in This Chapter"):
- Header badge: `Card 1 of N · Key Words Before You Begin` + term count pill.
- Warm teacher intro line (`chapter.tagline` + brief encouragement to scan these words before Topic 1).
- Clean 2-column grid of `GlossaryTerm` cards (`term`, optional KaTeX `symbol` pill, `plainEnglish` explanation, subtle `Example:` footer).
- Graceful fallback if `chapter.glossary` is empty (displays `chapter.syllabusMapping` + `Builds On` cleanly).
- Footer note: `"Ready for the concepts? Click the peeking card on the right or press →"`.

- [ ] **Step 3: Create `src/components/deck/TopicCard.tsx`**

Renders 1 complete `ConceptBlock` on a single calm, full-height card:
- Header: `Topic X.Y of M` + `PRIORITY_META` pill + `Builds on` + `Feedback` + `Mark Understood ✓`.
- **1. Intuition First (Toy Example):** `s-rail-accent` left rail, scenario, walkthrough steps, `Aha Moment` pill box.
- **2. General Theorem & Formula:** Statement, centered display KaTeX box (`formulaLatex`), `In Plain English` decoding.
- **3. Worked Mini-Examples:** 2-column grid showing prompts immediately with per-example `"Reveal Solution"` click toggle (plus `"Reveal All"` toggle).
- **4. Interactive Visual Sandbox:** Renders `<InteractiveSandbox sandboxId={concept.sandboxId} />` inline when present.
- **5. MSQ Trap & Counter-Example Radar:** Clean 2-column Myth (`var(--bad-text)`) vs Reality (`var(--ok-text)`) + Counter-Example cards.
- **6. Forward Payoff Bridge:** Compact bottom strip with `border-left: 3px solid var(--formula)` listing downstream topics & PYQ proofs.

- [ ] **Step 4: Create `src/components/deck/PlaybookDeckCard.tsx`**

Renders all `chapter.howToThinkPlaybook` archetypes inside 1 focused card:
- Compact pill switcher at the top (`#1 Title…`, `#2 Title…`, …).
- Displays selected archetype's difficulty, PYQ tags, Problem Statement, Trigger Cue, 2-column Brute-Force Trap vs Mental Shift, progressive step-by-step reveal (`Reveal Step k →` + `Reveal All`), and Lock-In Rule.

- [ ] **Step 5: Create `src/components/deck/ArsenalDeckCard.tsx`**

Renders all `chapter.arsenalCards` inside 1 focused card:
- Top bar with `Expand All / Collapse All` button.
- Scannable list where each row immediately shows `badge`, `When You Spot`, and display KaTeX `directWeaponLatex`.
- Clicking any row smoothly reveals `Instant Rule`, `10-Sec Check`, and `⚠ One Fatal Trap`.

- [ ] **Step 6: Create `src/components/deck/PracticeDeckCard.tsx`**

Renders Stage 4 inside 1 focused card:
- Sub-toggle between `Questions (N)` (renders `<PracticeArena singleQuestionMode ... />`) and `∞ Infinite Numerical Drill` (renders `<InfiniteNumericalGenerator generatorId={chapter.generatorId} />`).
- Chapter Completion Footer: 1–5 star confidence selector, `Mark Chapter Mastered ✓` toggle, and primary **`Continue to Next Chapter →`** button (calls `onNextChapter`).

---

### Task 4: Horizontal Center-Focus `ChapterDeck.tsx`, `SubjectMap.tsx` & Slim `App.tsx`

**Files:**
- Create: `gate-da-studio/src/components/ChapterDeck.tsx`
- Create: `gate-da-studio/src/components/SubjectMap.tsx`
- Modify: `gate-da-studio/src/App.tsx`

**Interfaces:**
- Consumes: `SUBJECT_TRACKS`, `getTrackForChapter`, `getAdjacentChapterRef`, `Deck` card components, `UserProgressState`
- Produces: Complete redesigned study shell

- [ ] **Step 1: Create `gate-da-studio/src/components/ChapterDeck.tsx`**

Implement:
- Dynamic card list for the chapter:
  - Index `0`: `GlossaryCard` (`Words`)
  - Indices `1..concepts.length`: `TopicCard` (`X.1`..`X.M`)
  - Index `concepts.length + 1`: `PlaybookDeckCard` (`Playbook`)
  - Index `concepts.length + 2`: `ArsenalDeckCard` (`Arsenal`)
  - Index `concepts.length + 3`: `PracticeDeckCard` (`Practice`)
- **Slim Chapter Control Bar** (sticky below `48px` header):
  - `← Subjects` button
  - `Subject · Ch.N ▾` quick-jump popover listing all 8 tracks + chapters of the selected track
  - `Scope Radar ▾` popover showing `What IS Important`, `What is NOT Important`, `Builds On`, and `Unlocks Downstream`
  - Clickable horizontal card pill strip (`Words · 1.1 · 1.2 · ... · Playbook · Arsenal · Practice`)
  - `k / totalCards` counter + `3px` copper progress bar
- **Horizontal Center-Focus Deck Viewport:**
  - `deck-track` translated via `translateX(${vpWidth / 2 - cardCenter}px)` with `cubic-bezier(0.22, 1, 0.36, 1)` `380ms` transition.
  - Active card: `flex: 0 0 min(860px, 72vw)`, `height: auto`, `max-height: none`, full opacity, subtle copper glow border.
  - Adjacent cards (`|i - activeIdx| === 1`): `scale(0.94)`, `opacity: 0.48` (hover `0.72`), `pointer-events: none` on children so clicking anywhere slides it to center.
  - `ResizeObserver` on active card syncing `maxHeight` of inactive cards to `Math.max(activeCard.offsetHeight, 520)` with bottom fade gradient.
  - Debounced horizontal `wheel` handler (`320ms`) skipping events inside `.katex-display`, `.overflow-x-auto`, or `input[type="range"]`.
  - Keyboard `←` / `→` listener skipping `INPUT`/`TEXTAREA`/`SELECT`.
  - Restores `progress.chapterCardCursor?.[chapter.id] ?? 0` when opening a chapter; calls `onCardCursorChange(chapter.id, idx)` on card change; scrolls window smoothly to top on card switch.

- [ ] **Step 2: Create `gate-da-studio/src/components/SubjectMap.tsx`**

Implement:
- Top `"Continue Where You Left Off"` card showing last visited chapter's subject, title, card cursor (`Card k / N` or `Start from Card 1`), and primary `Resume Chapter →` CTA.
- 8 Prerequisite-Ordered Subject Track pills (`1. Calculus` .. `8. GA & Synthesis`) with `completed / total` counts.
- Clean vertical chapter stepping path for the active subject track: each row shows `Ch.k`, title, tagline preview (1 line), hours, status (`Mastered ✓`, `Card k / N`, or `Not started`), confidence stars, and `Start →` / `Resume →` button.

- [ ] **Step 3: Refactor `gate-da-studio/src/App.tsx`**

- Slim `48px` sticky top bar (`Subjects` | `8-Week Plan` | `Direct Arsenal` | `Vault` + `Theme` + `Calc` + `Style Log`).
- Replace `activeModuleId` + 17-module bar with `activeTrackId`, `activeChapterId`, and `inChapterView` (`false` = `SubjectMap`, `true` = `ChapterDeck`).
- Ensure clicking a chapter ensures its backing module is loaded into `moduleCache`, updates `lastVisitedChapterId`, and opens `ChapterDeck`.
- Ensure clicking `Open Module` from `PlanDashboard` loads that module and opens its first chapter directly in `ChapterDeck`.
- Persist `chapterCardCursor` and `lastVisitedChapterId` via `persistProgress`.

- [ ] **Step 4: Run `npm run build` checkpoint**

Run:
```bash
cd "gate-da-studio" && npm run build
```
Expected: `tsc -b` + `vite build` succeed with 0 errors.

---

### Task 5: Declutter Secondary Views (`PlanDashboard.tsx` & `GlobalArsenalAndVault.tsx`)

**Files:**
- Modify: `gate-da-studio/src/components/PlanDashboard.tsx`
- Modify: `gate-da-studio/src/components/GlobalArsenalAndVault.tsx`

- [ ] **Step 1: Declutter `PlanDashboard.tsx`**

- Add a clean 2-tab switch at the top: `8-Week Roadmap` (default) | `3-Year Analytics & PDFs`.
- In `8-Week Roadmap`: render Weeks 1–8 as clean collapsible 1-line rows (`Week W · Theme · Date · Hours · done/total`) with only Week 1 (or the first incomplete week) expanded by default. Inside an expanded week, render compact module rows showing title, priority pill, PYQ yield, `Open →`, checkmark toggle, and a `Details ▾` toggle that reveals Syllabus Topics, Important vs. Skip, and Numerical Archetypes on demand.
- In `3-Year Analytics & PDFs`: render the Official Workspace PDF quick-openers, 3-Year Section Weightage Audit table, and Zero-Negative Question Type stats cleanly.

- [ ] **Step 2: Declutter `GlobalArsenalAndVault.tsx`**

- **`GlobalArsenalView`:** Replace the 17-module dropdown with an **8-Subject Track filter** (`All 8 Subjects` + Tracks 1–8) + search input + `Expand All / Collapse All` toggle. Each weapon card shows `Badge + Subject/Chapter + When You Spot + KaTeX Weapon` cleanly by default, and clicking any card expands `Instant Rule` and `⚠ Watch Trap`.
- **`MistakeVaultView`:** Pass `singleQuestionMode` to `<PracticeArena />` so reviewing missed/bookmarked questions uses the same calm 1-question-at-a-time CBT palette!

- [ ] **Step 3: Run `npm run build` checkpoint**

Run:
```bash
cd "gate-da-studio" && npm run build
```
Expected: Clean build, 0 TypeScript errors.

---

### Tasks 6–10: Chapter Glossaries (Card 0) + Warm Teacher-to-Student Voice Pass (All 52 Chapters)

Each batch edits a disjoint set of curriculum data files (safe to execute in parallel via subagents!) with identical strict authoring rules:
1. **Add `glossary: GlossaryTerm[]` (8–14 entries) to every chapter in the batch:**
   - Cover every key mathematical, statistical, algorithmic, DBMS, ML, or AI term introduced in that chapter.
   - Define each term in **warm, plain English** as a patient teacher talking to a student, with an optional inline KaTeX `symbol` and a concrete 1-line `tinyExample`.
2. **Teacher-to-Student Voice Polish across each chapter:**
   - Warm, clear, complete-sentence mentoring tone across `tagline`, `toyExample` (`scenario`, `walkthroughSteps`, `ahaMoment`), `theoremAndFormula` (`statement`, `plainEnglishDecoding`), `workedMiniExamples`, `howToThinkPlaybook` (`triggerCue`, `bruteForceTrap`, `mentalShift`, `steps`), and `questions` (`triggerHint`, `intuitiveSolution`).
   - **NEVER** change any `id`, `number`, `generatorId`, `sandboxId`, `correctOptions`, `natAnswer`, `year`, `marks`, or PYQ numbers/facts.
   - Escape every LaTeX backslash cleanly (`\\frac`, `\\mathbb`, `\\text`, etc.).
3. **Validate the batch immediately** with `node scripts/validate-curriculum.mjs --require-glossary <files>`.

- [ ] **Task 6 (Batch 1 — Track 1: Calculus, 6 chapters):**
  - Modify: `gate-da-studio/src/data/calculus/chapter1.ts` .. `chapter6.ts`
  - Validate: `cd "gate-da-studio" && node scripts/validate-curriculum.mjs --require-glossary src/data/calculus/index.ts`

- [ ] **Task 7 (Batch 2 — Track 2: Probability & Statistics, 11 chapters):**
  - Modify: `gate-da-studio/src/data/modules/module2.ts` .. `module5.ts`
  - Validate: `cd "gate-da-studio" && node scripts/validate-curriculum.mjs --require-glossary src/data/modules/module2.ts src/data/modules/module3.ts src/data/modules/module4.ts src/data/modules/module5.ts`

- [ ] **Task 8 (Batch 3 — Tracks 3 & 4: Linear Algebra + Python & DSA, 12 chapters):**
  - Modify: `gate-da-studio/src/data/modules/module6.ts` .. `module9.ts`
  - Validate: `cd "gate-da-studio" && node scripts/validate-curriculum.mjs --require-glossary src/data/modules/module6.ts src/data/modules/module7.ts src/data/modules/module8.ts src/data/modules/module9.ts`

- [ ] **Task 9 (Batch 4 — Tracks 5 & 6: Graphs/AI/Logic + DBMS/DW, 11 chapters):**
  - Modify: `gate-da-studio/src/data/modules/module10.ts` .. `module13.ts`
  - Validate: `cd "gate-da-studio" && node scripts/validate-curriculum.mjs --require-glossary src/data/modules/module10.ts src/data/modules/module11.ts src/data/modules/module12.ts src/data/modules/module13.ts`

- [ ] **Task 10 (Batch 5 — Tracks 7 & 8: Machine Learning + GA & Synthesis, 12 chapters):**
  - Modify: `gate-da-studio/src/data/modules/module14.ts` .. `module17.ts`
  - Validate: `cd "gate-da-studio" && node scripts/validate-curriculum.mjs --require-glossary src/data/modules/module14.ts src/data/modules/module15.ts src/data/modules/module16.ts src/data/modules/module17.ts`

---

### Task 11: Final Schema Hardening, Full-Repo Verification & Live UI Check

**Files:**
- Modify: `gate-da-studio/src/types/curriculum.ts` (make `glossary: GlossaryTerm[]` required on `ChapterData`)
- Modify: `gate-da-studio/scripts/validate-curriculum.mjs` (require non-empty `glossary` by default)

- [ ] **Step 1: Harden `glossary` as required in schema & validator**
- [ ] **Step 2: Run full 17-file / 52-chapter curriculum & KaTeX validation**

Run:
```bash
cd "gate-da-studio" && node scripts/validate-curriculum.mjs src/data/calculus/index.ts src/data/modules/module*.ts
```
Expected: `OK: 17 file(s), 52 chapter(s), ... glossary terms & KaTeX expressions verified clean.`

- [ ] **Step 3: Run full TypeScript + Vite production build**

Run:
```bash
cd "gate-da-studio" && npm run build
```
Expected: Clean `tsc -b && vite build` with 0 errors.

- [ ] **Step 4: Live browser verification**

Start the Vite dev server and verify via browser inspection:
- Subject Map renders all 8 prerequisite-ordered tracks totaling 52 chapters + Resume strip.
- Opening Calculus Ch.1 opens the 8-card horizontal center-focus deck (`Words` + `1.1..1.4` + `Playbook` + `Arsenal` + `Practice`), full natural card height with zero trapped inner scrollbar, crisp KaTeX rendering, peeking left/right cards, working horizontal click/keyboard navigation, interactive Series Sandbox, and Practice CBT palette.
- Jumping across other subject tracks (Prob & Stats, Linear Algebra, Python & DSA, AI & Logic, DBMS, ML, GA) loads their Card 0 Glossary + Topics cleanly.
- `8-Week Plan`, `Direct Arsenal`, `Mistake Vault`, and `GATE Calculator` all work cleanly.

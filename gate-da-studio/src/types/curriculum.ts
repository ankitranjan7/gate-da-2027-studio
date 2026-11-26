export type PriorityTier =
  | 'core-pillar'
  | 'high-yield'
  | 'sleeping-giant'
  | 'scope-boundary'

export type QuestionType = 'MCQ' | 'MSQ' | 'NAT'

export type SandboxId =
  // Module 1 (Calculus)
  | 'series-growth-lab'
  | 'limit-xray-lab'
  | 'piecewise-gluer-lab'
  | 'relu-sigmoid-diff-lab'
  | 'taylor-maclaurin-lab'
  | 'extrema-convexity-sgd-lab'
  // Modules 2-5 (Prob & Stats)
  | 'bayes-posterior-lab'
  | 'distribution-clt-lab'
  | 'hypothesis-test-lab'
  // Modules 6-7 (Linear Algebra)
  | 'projection-eigen-lab'
  | 'rotation-svd-lab'
  // Modules 8-9 (Python & DSA)
  | 'python-trace-lab'
  | 'hash-table-lab'
  | 'sorting-search-lab'
  // Modules 10-11 (Graphs, AI Search & Logic)
  | 'graph-astar-lab'
  | 'minimax-alphabeta-lab'
  | 'logic-truth-lab'
  // Modules 12-13 (DBMS & Warehousing)
  | 'dbms-fd-ra-lab'
  | 'btree-olap-lab'
  // Modules 14-15 (ML & Bayes Nets)
  | 'ml-svm-ridge-lab'
  | 'ml-pca-bayesnet-lab'
  // Modules 16-17 (GA & Synthesis)
  | 'ga-synthesis-lab'

export type GeneratorId =
  // Module 1 (Calculus)
  | 'double-series-gen'
  | 'rationalize-limit-gen'
  | 'piecewise-c1-gen'
  | 'sigmoid-sgd-gen'
  | 'maclaurin-limit-gen'
  | 'closed-interval-extrema-gen'
  // Modules 2-5 (Prob & Stats)
  | 'stars-bars-gen'
  | 'bayes-posterior-gen'
  | 'exp-memoryless-gen'
  | 'cdf-quantile-gen'
  | 'pairwise-var-gen'
  | 'streak-expectation-gen'
  | 'clt-prob-gen'
  | 'chi2-t-stat-gen'
  // Modules 6-7 (Linear Algebra)
  | 'rank-nullity-gen'
  | 'rotation-power-gen'
  | 'rank1-svd-gen'
  // Modules 8-9 (Python & DSA)
  | 'linear-probe-gen'
  | 'recursion-stack-gen'
  | 'sort-swaps-gen'
  | 'bsearch-depth-gen'
  // Modules 10-11 (Graphs, AI Search & Logic)
  | 'astar-trace-gen'
  | 'alphabeta-bound-gen'
  | 'truth-entailment-gen'
  // Modules 12-13 (DBMS & DW)
  | 'fd-candidate-keys-gen'
  | 'er-tables-gen'
  | 'btree-fanout-gen'
  | 'olap-cube-gen'
  // Modules 14-15 (ML & Bayes Nets)
  | 'ols-ridge-loss-gen'
  | 'mlp-backprop-gen'
  | 'confusion-metrics-gen'
  | 'pca-variance-gen'
  | 'bayesnet-cpt-gen'
  // Modules 16-17 (GA & Synthesis)
  | 'ga-quant-series-gen'
  | 'cross-topic-hybrid-gen'

export interface ForwardBridge {
  targetSection: string
  targetWeek: number
  topic: string
  whyItMatters: string
  pyqProof?: string
}

export interface ConceptBlock {
  id: string
  title: string
  subtitle: string
  priority: PriorityTier
  buildsOn: string
  /** Step 0a: Why are we studying this? Real problem & core intuition BEFORE any formula/code */
  whyStudy?: string
  /** Step 0b: Ground-truth rules of the environment/system (how Python/Math/SQL actually works under the hood) */
  groundRules?: string[]
  /** Step 1: Concrete ground-floor toy example BEFORE symbols/theorems */
  toyExample: {
    title: string
    scenario: string
    walkthroughSteps: string[]
    ahaMoment: string
  }
  /** Step 2: General theorem & formula built naturally from the toy example */
  theoremAndFormula: {
    statement: string
    formulaLatex: string
    plainEnglishDecoding: string
    workedMiniExamples: Array<{
      prompt: string
      solution: string
    }>
  }
  /** Optional embedded interactive visual lab */
  sandboxId?: SandboxId
  /** Step 3: MSQ edge-case & counter-example radar */
  msqTraps: Array<{
    myth: string
    reality: string
    counterExample: string
  }>
  /** Forward links into Prob/Stats, LA, ML, DBMS, AI */
  forwardBridges?: ForwardBridge[]
}

export interface HowToThinkArchetype {
  id: string
  title: string
  difficulty: 'Moderate' | 'Tricky GATE 2-Mark' | 'Rank-Decider'
  relatedPyqs: string[]
  problemStatement: string
  /** Exact visual/textual cue in the problem that triggers the right angle */
  triggerCue: string
  /** Why brute-force fails vs how to think intuitively */
  bruteForceTrap: string
  mentalShift: string
  /** Progressive revealable steps */
  steps: Array<{
    label: string
    detail: string
  }>
  lockInTakeaway: string
}

export interface ArsenalCard {
  id: string
  badge: string
  whenYouSpot: string
  directWeaponLatex: string
  instantRule: string
  tenSecondExample: string
  oneFatalTrap: string
}

export interface PracticeQuestion {
  id: string
  tier: 'warmup' | 'pyq' | 'tricky'
  sourceLabel: string // e.g., "GATE DA 2025 · Q.49" or "Warmup Drill #1" or "IITM-Style Mock"
  year?: 2024 | 2025 | 2026
  marks: 1 | 2
  type: QuestionType
  stem: string
  options?: Array<{
    id: 'A' | 'B' | 'C' | 'D'
    text: string
    whyTrueOrFalse: string
  }>
  correctOptions?: Array<'A' | 'B' | 'C' | 'D'> // For MCQ (length 1) or MSQ (length 1..4)
  natAnswer?: {
    min: number
    max: number
    exactDisplay: string
  }
  triggerHint: string
  intuitiveSolution: string[]
  directShortcutUsed: string
}

export interface GlossaryTerm {
  term: string
  symbol?: string
  plainEnglish: string
  tinyExample: string
}

export interface ChapterData {
  id: string
  number: number
  title: string
  shortTitle: string
  estimatedHours: number
  dayLabel: string
  tagline: string
  syllabusMapping: string[]
  whatIsImportant: string[]
  whatIsNotImportant: string[]
  inboundStream: string
  outboundStream: string[]
  glossary: GlossaryTerm[]
  concepts: ConceptBlock[]
  howToThinkPlaybook: HowToThinkArchetype[]
  arsenalCards: ArsenalCard[]
  questions: PracticeQuestion[]
  generatorId: GeneratorId
}

export interface StudyModuleMeta {
  id: string // matches PlanModuleSummary id: 'w1-m1' .. 'w8-m2'
  moduleNumber: number // 1..17
  week: number // 1..8
  sectionCode: string
  title: string
  shortTitle: string
  dayRange: string
  hours: number
  loadChapters: () => Promise<ChapterData[]>
}

export interface PlanModuleSummary {
  id: string
  week: number
  dayRange: string
  hours: number
  sectionCode: string
  title: string
  priority: PriorityTier
  pyqCount2024_2026: number
  avgMarks: string
  isPilotImplemented?: boolean
  prerequisites: string[]
  unlocksNext: string[]
  syllabusTopics: string[]
  importantFocus: string
  skipBoundary: string
  keyNumericalArchetypes: string[]
}

export interface WeekPlan {
  week: number
  dateRange: string
  theme: string
  rationale: string
  totalHours: number
  modules: PlanModuleSummary[]
}

export interface UserProgressState {
  completedConcepts: Record<string, boolean>
  completedChapters: Record<string, boolean>
  questionAttempts: Record<
    string,
    {
      correct: boolean
      userAnswer: string
      attempts: number
      lastAttemptAt: string
    }
  >
  bookmarkedQuestions: Record<string, boolean>
  questionNotes: Record<string, string>
  chapterConfidence: Record<string, 1 | 2 | 3 | 4 | 5>
  completedPlanModules: Record<string, boolean>
  chapterCardCursor?: Record<string, number>
  lastVisitedChapterId?: string
  lastViewMode?: 'deck' | 'subjects'
  updatedAt?: string
}

export interface PilotFeedbackItem {
  id: string
  createdAt: string
  contextType: 'chapter' | 'concept' | 'sandbox' | 'playbook' | 'arsenal' | 'question' | 'general'
  contextTitle: string
  sentiment: 'worked-great' | 'more-examples' | 'more-compact' | 'confusing' | 'style-rule'
  comment: string
}

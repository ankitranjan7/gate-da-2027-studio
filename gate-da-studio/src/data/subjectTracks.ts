export type SubjectTrackId = 'calc' | 'prob' | 'la' | 'dsa' | 'ai' | 'dbms' | 'ml' | 'ga'

export interface TrackChapterRef {
  chapterId: string
  moduleId: string
  trackId: SubjectTrackId
  trackChapterNumber: number
  shortTitle: string
}

export interface SubjectTrackMeta {
  id: SubjectTrackId
  order: number
  title: string
  shortTitle: string
  subtitle: string
  chapters: TrackChapterRef[]
}

const ch = (
  trackId: SubjectTrackId,
  trackChapterNumber: number,
  moduleId: string,
  chapterId: string,
  shortTitle: string
): TrackChapterRef => ({
  chapterId,
  moduleId,
  trackId,
  trackChapterNumber,
  shortTitle,
})

export const SUBJECT_TRACKS: SubjectTrackMeta[] = [
  {
    id: 'calc',
    order: 1,
    title: 'Calculus & Optimization',
    shortTitle: 'Calculus',
    subtitle: 'Functions, limits, continuity, derivatives, Taylor series & optimization',
    chapters: [
      ch('calc', 1, 'w1-m1', 'calc-ch1', 'Functions & Series'),
      ch('calc', 2, 'w1-m1', 'calc-ch2', 'Limits & Indeterminate Forms'),
      ch('calc', 3, 'w1-m1', 'calc-ch3', 'Continuity & IVT Roots'),
      ch('calc', 4, 'w1-m1', 'calc-ch4', 'Differentiability & Neural Slopes'),
      ch('calc', 5, 'w1-m1', 'calc-ch5', 'Taylor & Maclaurin Series'),
      ch('calc', 6, 'w1-m1', 'calc-ch6', 'Optimization, Convexity & SGD'),
    ],
  },
  {
    id: 'prob',
    order: 2,
    title: 'Probability & Statistics',
    shortTitle: 'Prob & Stats',
    subtitle: 'Counting, Bayes, distributions, expectation, variance, CLT & hypothesis testing',
    chapters: [
      ch('prob', 1, 'w1-m2', 'prob1-ch1', 'Counting & Stars-and-Bars'),
      ch('prob', 2, 'w1-m2', 'prob1-ch2', 'Axioms & Bayes Theorem'),
      ch('prob', 3, 'w1-m2', 'prob1-ch3', 'Independence & Trees'),
      ch('prob', 4, 'w2-m1', 'prob2-ch1', 'Discrete RVs, Bin/Pois/Geom'),
      ch('prob', 5, 'w2-m1', 'prob2-ch2', 'Continuous PDF/CDF & Exp'),
      ch('prob', 6, 'w2-m1', 'prob2-ch3', 'Normal, Z-Symmetry & Joint PDFs'),
      ch('prob', 7, 'w2-m2', 'prob3-ch1', 'Expectation & Indicators'),
      ch('prob', 8, 'w2-m2', 'prob3-ch2', 'Variance, Bounds & EVE/EVVE'),
      ch('prob', 9, 'w2-m2', 'prob3-ch3', 'Covariance & Correlation'),
      ch('prob', 10, 'w2-m3', 'prob4-ch1', 'Sampling, χ², t & CLT'),
      ch('prob', 11, 'w2-m3', 'prob4-ch2', 'CIs, Hypothesis Tests & p-value'),
    ],
  },
  {
    id: 'la',
    order: 3,
    title: 'Linear Algebra',
    shortTitle: 'Linear Algebra',
    subtitle: 'Vector spaces, rank-nullity, linear systems, projections, eigenvalues & SVD',
    chapters: [
      ch('la', 1, 'w3-m1', 'la1-ch1', 'Spaces, Norms & Subspaces'),
      ch('la', 2, 'w3-m1', 'la1-ch2', 'Rank-Nullity & 4 Subspaces'),
      ch('la', 3, 'w3-m1', 'la1-ch3', 'Systems, LU & Rank Rules'),
      ch('la', 4, 'w3-m2', 'la2-ch1', 'Projections, QR & Rotations'),
      ch('la', 5, 'w3-m2', 'la2-ch2', 'Eigenvalues & Cayley-Hamilton'),
      ch('la', 6, 'w3-m2', 'la2-ch3', 'SPD, Quadratic Forms & SVD'),
    ],
  },
  {
    id: 'dsa',
    order: 4,
    title: 'Python, DSA & Graph Algorithms',
    shortTitle: 'Python & DSA',
    subtitle: 'Python execution, recursion, stacks/hashing, trees, sorting & graph traversals',
    chapters: [
      ch('dsa', 1, 'w4-m1', 'pds1-ch1', 'Python Semantics & Closures'),
      ch('dsa', 2, 'w4-m1', 'pds1-ch2', 'Recursion & Complexity'),
      ch('dsa', 3, 'w4-m1', 'pds1-ch3', 'Stacks, Heaps & Hashing'),
      ch('dsa', 4, 'w4-m2', 'pds2-ch1', 'Binary Trees & BSTs'),
      ch('dsa', 5, 'w4-m2', 'pds2-ch2', 'Binary Search & O(n²) Sorts'),
      ch('dsa', 6, 'w4-m2', 'pds2-ch3', 'Mergesort, Quicksort & Stability'),
      ch('dsa', 7, 'w5-m1', 'graph-ch1', 'BFS, DFS & Topo Sort'),
    ],
  },
  {
    id: 'ai',
    order: 5,
    title: 'AI: Search, Logic & Bayes Nets',
    shortTitle: 'AI & Logic',
    subtitle: 'Shortest paths & A*, Minimax/Alpha-Beta, Propositional/FOL logic & Bayesian networks',
    chapters: [
      ch('ai', 1, 'w5-m1', 'graph-ch2', 'Dijkstra, MST & A*'),
      ch('ai', 2, 'w5-m1', 'graph-ch3', 'Minimax & Alpha-Beta'),
      ch('ai', 3, 'w5-m2', 'logic-ch1', 'Propositional Logic'),
      ch('ai', 4, 'w5-m2', 'logic-ch2', 'First-Order Logic'),
      ch('ai', 5, 'w7-m2', 'ml2-ch3', 'Bayes Nets & Inference'),
    ],
  },
  {
    id: 'dbms',
    order: 6,
    title: 'DBMS & Data Warehousing',
    shortTitle: 'DBMS & DW',
    subtitle: 'ER modeling, functional dependencies, BCNF, relational algebra, SQL, B+ trees & OLAP',
    chapters: [
      ch('dbms', 1, 'w6-m1', 'dbms-ch1', 'ER Modeling & Table Merging'),
      ch('dbms', 2, 'w6-m1', 'dbms-ch2', 'FDs, Keys & Normalization'),
      ch('dbms', 3, 'w6-m1', 'dbms-ch3', 'Relational Algebra & TRC'),
      ch('dbms', 4, 'w6-m1', 'dbms-ch4', 'SQL Semantics, NULLs & Subqueries'),
      ch('dbms', 5, 'w6-m2', 'dw-ch1', 'Indexing & B+ Trees'),
      ch('dbms', 6, 'w6-m2', 'dw-ch2', 'Warehousing, OLAP & Scaling'),
    ],
  },
  {
    id: 'ml',
    order: 7,
    title: 'Machine Learning',
    shortTitle: 'Machine Learning',
    subtitle: 'Regression, classification, SVM, k-NN, neural backprop, clustering & PCA',
    chapters: [
      ch('ml', 1, 'w7-m1', 'ml1-ch1', 'Linear, Ridge & Lasso'),
      ch('ml', 2, 'w7-m1', 'ml1-ch2', 'Logistic, NB, LDA & Trees'),
      ch('ml', 3, 'w7-m1', 'ml1-ch3', 'SVM, Kernels & k-NN'),
      ch('ml', 4, 'w7-m1', 'ml1-ch4', 'Eval Metrics & MLP Backprop'),
      ch('ml', 5, 'w7-m2', 'ml2-ch1', 'Clustering & Linkage'),
      ch('ml', 6, 'w7-m2', 'ml2-ch2', 'PCA & Eigen-Projection'),
    ],
  },
  {
    id: 'ga',
    order: 8,
    title: 'General Aptitude & Synthesis',
    shortTitle: 'GA & Synthesis',
    subtitle: 'Quantitative shortcuts, DI, spatial/verbal precision & 180-minute CBT synthesis',
    chapters: [
      ch('ga', 1, 'w8-m1', 'ga-ch1', 'Quant, Series & Speed'),
      ch('ga', 2, 'w8-m1', 'ga-ch2', 'DI, Venn & Deduction'),
      ch('ga', 3, 'w8-m1', 'ga-ch3', 'Spatial & Verbal Precision'),
      ch('ga', 4, 'w8-m2', 'synth-ch1', 'Cross-Topic Rank-Deciders'),
      ch('ga', 5, 'w8-m2', 'synth-ch2', '180-Min CBT & Revision'),
    ],
  },
]

export const ALL_TRACK_CHAPTER_REFS: TrackChapterRef[] = SUBJECT_TRACKS.flatMap(
  (track) => track.chapters
)

export function getTrackById(id: SubjectTrackId): SubjectTrackMeta {
  return SUBJECT_TRACKS.find((track) => track.id === id) ?? SUBJECT_TRACKS[0]
}

export function getTrackForChapter(chapterId: string): SubjectTrackMeta {
  return (
    SUBJECT_TRACKS.find((track) =>
      track.chapters.some((chapter) => chapter.chapterId === chapterId)
    ) ?? SUBJECT_TRACKS[0]
  )
}

export function getChapterRefById(chapterId: string): TrackChapterRef {
  return (
    ALL_TRACK_CHAPTER_REFS.find((chapter) => chapter.chapterId === chapterId) ??
    ALL_TRACK_CHAPTER_REFS[0]
  )
}

export function getAdjacentChapterRef(
  chapterId: string,
  dir: 'prev' | 'next'
): TrackChapterRef | null {
  const index = ALL_TRACK_CHAPTER_REFS.findIndex(
    (chapter) => chapter.chapterId === chapterId
  )
  if (index === -1) return null
  const nextIndex = dir === 'prev' ? index - 1 : index + 1
  return ALL_TRACK_CHAPTER_REFS[nextIndex] ?? null
}

export function getRequiredModuleIdsForTrack(trackId: SubjectTrackId): string[] {
  const track = getTrackById(trackId)
  return Array.from(new Set(track.chapters.map((chapter) => chapter.moduleId)))
}

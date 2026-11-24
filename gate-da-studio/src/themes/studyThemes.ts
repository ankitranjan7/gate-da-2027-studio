export type StudyThemeId =
  | 'copper-paper'
  | 'forest-sage'
  | 'honey-amber'
  | 'nordic-frost'
  | 'monochrome-ink'

export interface StudyThemeMeta {
  id: StudyThemeId
  name: string
  subtitle: string
  recommended?: boolean
  swatchBg: string
  swatchAccent: string
  swatchSecondary: string
}

export const STUDY_THEMES: StudyThemeMeta[] = [
  {
    id: 'copper-paper',
    name: 'Copper Paper',
    subtitle: 'Warm obsidian · lowest blue-light fatigue (Optimal)',
    recommended: true,
    swatchBg: '#131210',
    swatchAccent: '#D97757',
    swatchSecondary: '#C89B54',
  },
  {
    id: 'forest-sage',
    name: 'Forest Sage',
    subtitle: 'Matte graphite · calm low-tension green',
    swatchBg: '#111412',
    swatchAccent: '#74A584',
    swatchSecondary: '#C5A467',
  },
  {
    id: 'honey-amber',
    name: 'Honey Espresso',
    subtitle: 'Deep sepia · zero circadian glare at night',
    swatchBg: '#13100C',
    swatchAccent: '#D69E4E',
    swatchSecondary: '#C97B59',
  },
  {
    id: 'nordic-frost',
    name: 'Nordic Slate',
    subtitle: 'Desaturated Nord · clean technical steel',
    swatchBg: '#14171D',
    swatchAccent: '#7EA2C6',
    swatchSecondary: '#CEAA72',
  },
  {
    id: 'monochrome-ink',
    name: 'E-Ink Carbon',
    subtitle: 'True charcoal · distraction-free paper ink',
    swatchBg: '#121212',
    swatchAccent: '#C9C4BA',
    swatchSecondary: '#A8A39A',
  },
]

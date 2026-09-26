// Shared types for all site content.
// Content lives in src/content/*.json — edit those files, not the components.

export interface Link {
  label: string
  url: string
}

export interface Publication {
  id: string
  title: string
  authors: string[] // exact-name match against site.identity.name is bolded
  venue: string
  year: number
  type: 'journal' | 'conference' | 'preprint' | 'book' | 'other'
  cover?: string
  abstract?: string
  bibtex?: string
  links: Link[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  period: string
  status: 'active' | 'completed' | 'planned'
  description: string
  tags: string[]
  links: Link[]
}

export interface Work {
  id: string
  title: string
  titleZh?: string
  year?: number
  kind: 'fiction' | 'book' | 'essay' | 'other'
  description: string
  descriptionZh?: string
  cover?: string
  links: Link[]
}

export interface SiteContent {
  identity: {
    name: string
    nameZh: string
    brand: string
    tagline: string
    taglineZh: string
    affiliation: string
    email: string
    location: string
    profiles: Link[]
  }
  researchInterests: string[]
  news: { date: string; text: string }[]
  panunics: {
    summary: string
    summaryZh: string
    principles: { title: string; body: string }[]
    essays: { title: string; year: number; url?: string; note?: string }[]
  }
}

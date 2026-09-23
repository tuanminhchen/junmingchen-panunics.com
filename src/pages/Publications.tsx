import { useMemo, useState } from 'react'
import { PageHeader } from '@/components/Layout'
import site from '@/content/site.json'
import publications from '@/content/publications.json'
import type { Publication, SiteContent } from '@/types/content'

const content = site as SiteContent
const all = publications.items as Publication[]

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'journal', label: 'Journal' },
  { key: 'conference', label: 'Conference' },
  { key: 'preprint', label: 'Preprint' },
  { key: 'book', label: 'Book' },
] as const

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <p className="text-sm text-neutral-600">
      {authors.map((a, i) => (
        <span key={i}>
          {a === content.identity.name ? (
            <strong className="font-semibold text-neutral-900">{a}</strong>
          ) : (
            a
          )}
          {i < authors.length - 1 && ', '}
        </span>
      ))}
    </p>
  )
}

export default function Publications() {
  const [filter, setFilter] = useState<string>('all')

  const grouped = useMemo(() => {
    const list = all
      .filter((p) => filter === 'all' || p.type === filter)
      .slice()
      .sort((a, b) => b.year - a.year)
    const map = new Map<number, Publication[]>()
    for (const p of list) {
      if (!map.has(p.year)) map.set(p.year, [])
      map.get(p.year)!.push(p)
    }
    return [...map.entries()]
  }, [filter])

  return (
    <div>
      <PageHeader
        title="Publications"
        subtitle="Complete index of papers and publications."
      />

      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`border px-3 py-1 text-xs font-medium uppercase tracking-wide transition-colors ${
                filter === f.key
                  ? 'border-neutral-900 bg-neutral-900 text-white'
                  : 'border-neutral-300 text-neutral-600 hover:border-neutral-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {grouped.length === 0 && (
          <p className="mt-10 text-neutral-500">
            No publications in this category yet.
          </p>
        )}

        {grouped.map(([year, items]) => (
          <section key={year} className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-neutral-400">
              {year}
            </h2>
            <div className="mt-4 divide-y divide-neutral-200 border-t border-neutral-200">
              {items.map((p) => (
                <PubEntry key={p.id} pub={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function PubEntry({ pub }: { pub: Publication }) {
  const [showBib, setShowBib] = useState(false)
  return (
    <article className="py-6">
      <h3 className="text-base font-medium leading-snug sm:text-lg">
        {pub.title}
      </h3>
      <div className="mt-2">
        <AuthorList authors={pub.authors} />
      </div>
      <p className="mt-1 text-sm italic text-neutral-500">
        {pub.venue}, {pub.year}
      </p>
      {pub.abstract && (
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
          {pub.abstract}
        </p>
      )}
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
        {pub.links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent hover:underline underline-offset-4"
          >
            [{l.label}]
          </a>
        ))}
        {pub.bibtex && (
          <button
            onClick={() => setShowBib(!showBib)}
            className="text-sm text-accent hover:underline underline-offset-4"
          >
            [BibTeX]
          </button>
        )}
      </div>
      {showBib && pub.bibtex && (
        <pre className="mt-3 overflow-x-auto bg-neutral-50 border border-neutral-200 p-4 text-xs text-neutral-700">
          {pub.bibtex}
        </pre>
      )}
    </article>
  )
}

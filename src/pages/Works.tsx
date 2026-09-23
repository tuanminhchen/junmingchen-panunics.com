import { PageHeader } from '@/components/Layout'
import works from '@/content/works.json'
import type { Work } from '@/types/content'

const all = (works.items as Work[]).slice().sort((a, b) => b.year - a.year)

const kindLabel: Record<Work['kind'], string> = {
  fiction: 'Fiction',
  book: 'Book',
  essay: 'Essay',
  other: 'Other',
}

export default function Works() {
  return (
    <div>
      <PageHeader
        title="Sci-Fi & Books"
        subtitle="Science fiction, books, and other writing. Entries live in src/content/works.json."
      />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {all.map((w) => (
            <article key={w.id} className="py-8">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h2 className="font-display text-xl font-semibold">
                  {w.title}
                </h2>
                {w.titleZh && (
                  <span className="text-lg text-neutral-500">
                    {w.titleZh}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-neutral-400">
                {kindLabel[w.kind]} · {w.year}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">
                {w.description}
              </p>
              {w.links.some((l) => l.url) && (
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {w.links
                    .filter((l) => l.url)
                    .map((l) => (
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
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

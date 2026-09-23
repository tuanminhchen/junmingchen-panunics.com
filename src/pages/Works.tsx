import { PageHeader } from '@/components/Layout'
import works from '@/content/works.json'
import type { Work } from '@/types/content'

const all = works.items as Work[]
const tagline = (works as { tagline?: string }).tagline

export default function Works() {
  return (
    <div>
      <PageHeader
        title="Sci-Fi & Books"
        subtitle={
          tagline
            ? `${tagline} · 关于生活在非凡系统里的普通人。`
            : 'Science fiction and books. Entries live in src/content/works.json.'
        }
      />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2">
          {all.map((w) => (
            <article key={w.id} className="flex flex-col">
              {w.cover ? (
                <img
                  src={w.cover}
                  alt={`${w.title} cover`}
                  className="aspect-square w-full border border-neutral-200 object-cover"
                />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center border border-dashed border-neutral-300 bg-neutral-50 text-xs uppercase tracking-wide text-neutral-400">
                  Cover pending
                </div>
              )}
              <div className="flex flex-wrap items-baseline gap-x-3 pt-4">
                <h2 className="font-display text-lg font-semibold">
                  {w.title}
                </h2>
                {w.titleZh && (
                  <span className="text-neutral-500">{w.titleZh}</span>
                )}
              </div>
              {w.year && (
                <p className="mt-1 text-xs uppercase tracking-wide text-neutral-400">
                  {w.year}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {w.description}
              </p>
              {w.descriptionZh && (
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {w.descriptionZh}
                </p>
              )}
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

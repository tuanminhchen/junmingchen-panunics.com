import { PageHeader } from '@/components/Layout'
import projects from '@/content/projects.json'
import type { Project } from '@/types/content'

const all = projects.items as Project[]

const statusStyle: Record<Project['status'], string> = {
  active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  completed: 'bg-neutral-100 text-neutral-600 border-neutral-200',
  planned: 'bg-amber-50 text-amber-700 border-amber-200',
}

export default function Projects() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="Research projects and their public entry points. Edit src/content/projects.json to add or update entries."
      />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {all.map((p) => (
            <article
              key={p.id}
              className="flex flex-col border border-neutral-200 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-lg font-semibold leading-snug">
                  {p.title}
                </h2>
                <span
                  className={`shrink-0 border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${statusStyle[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{p.subtitle}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-neutral-400">
                {p.period}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
                {p.description}
              </p>
              {p.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {p.links.some((l) => l.url) && (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-neutral-100 pt-3">
                  {p.links
                    .filter((l) => l.url)
                    .map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-accent hover:underline underline-offset-4"
                      >
                        {l.label} →
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

import { PageHeader } from '@/components/Layout'
import site from '@/content/site.json'
import formal from '@/content/panunics-formal.json'
import type { SiteContent } from '@/types/content'

const content = site as SiteContent
const p = content.panunics

interface FormalItem {
  id: string
  name?: string
  statement: string
  proof?: string
  noteZh?: string
}

interface FormalSection {
  key: string
  label: string
  labelZh: string
  items: FormalItem[]
}

const sections = formal.sections as FormalSection[]

export default function Panunics() {
  return (
    <div>
      <PageHeader
        title="Panunics · 统域学"
        subtitle="The permanent home of the Panunics framework — principles, essays, and ongoing work. Edit src/content/site.json (the panunics section) to update."
      />

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              English
            </h2>
            <p className="mt-3 leading-relaxed text-neutral-700">{p.summary}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              中文
            </h2>
            <p className="mt-3 leading-relaxed text-neutral-700">
              {p.summaryZh}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-xl font-semibold">
            Core Principles
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {p.principles.map((pr) => (
              <div key={pr.title} className="border border-neutral-200 bg-white p-5">
                <h3 className="font-medium leading-snug">{pr.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {pr.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-2xl font-semibold">
            Formal Core
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-500">
            The axiom–theorem–lemma skeleton of Panunics, condensed from the
            foundational text. Data lives in src/content/panunics-formal.json.
          </p>

          <div className="mt-10 space-y-14">
            {sections.map((sec) => (
              <div key={sec.key}>
                <h3 className="flex items-baseline gap-3 border-b border-neutral-300 pb-2">
                  <span className="font-display text-lg font-semibold">
                    {sec.label}
                  </span>
                  <span className="text-sm text-neutral-400">{sec.labelZh}</span>
                </h3>
                <div className="divide-y divide-neutral-100">
                  {sec.items.map((item) => (
                    <article key={item.id} className="py-5">
                      <div className="flex items-baseline gap-3">
                        <span className="shrink-0 font-mono text-sm font-semibold text-accent">
                          {item.id}
                        </span>
                        {item.name && (
                          <h4 className="font-medium leading-snug">{item.name}</h4>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                        {item.statement}
                      </p>
                      {item.proof && (
                        <p className="mt-2 border-l-2 border-neutral-200 pl-3 text-sm leading-relaxed text-neutral-500">
                          <span className="font-medium text-neutral-600">
                            Proof (sketch).{' '}
                          </span>
                          {item.proof}
                        </p>
                      )}
                      {item.noteZh && (
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                          {item.noteZh}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-neutral-400">
            Source: {formal.source}
          </p>
        </div>
      </section>

      {p.essays.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="font-display text-xl font-semibold">Essays & Texts</h2>
          <ul className="mt-4 divide-y divide-neutral-200 border-t border-neutral-200">
          {p.essays.map((e, i) => (
            <li key={i} className="flex flex-wrap items-baseline gap-x-4 py-4">
              <span className="text-xs uppercase tracking-wide text-neutral-400">
                {e.year}
              </span>
              <span className="font-medium">
                {e.url ? (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline underline-offset-4"
                  >
                    {e.title}
                  </a>
                ) : (
                  e.title
                )}
              </span>
              {e.note && (
                <span className="text-sm text-neutral-500">{e.note}</span>
              )}
            </li>
          ))}
          </ul>
        </section>
      )}
    </div>
  )
}

import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import site from '@/content/site.json'
import publications from '@/content/publications.json'
import type { Publication, SiteContent } from '@/types/content'

const content = site as SiteContent
const pubs = (publications.items as Publication[]).slice(0, 4)
const recentNews = content.news.slice(0, 5)

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

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-20 sm:py-24 md:flex-row md:items-start md:justify-between">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              {content.identity.brand}
            </p>
            <h1 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
              JUNMING CHEN
            </h1>
            <p className="font-display mt-2 text-2xl text-neutral-500 sm:text-3xl">
              {content.identity.nameZh}
            </p>
            <p className="mt-6 max-w-2xl text-lg text-neutral-700">
              {content.identity.tagline}
            </p>
            <p className="mt-2 max-w-2xl text-neutral-500">
              {content.identity.taglineZh}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
              >
                Publications <ArrowRight size={16} />
              </Link>
              <Link
                to="/panunics"
                className="inline-flex items-center gap-2 border border-neutral-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-neutral-900"
              >
                Panunics · 统域学
              </Link>
            </div>
          </div>

          <div className="order-1 shrink-0 md:order-2 md:mt-[4.75rem]">
            <img
              src="images/portrait-2026.jpg"
              alt="Junming Chen (陈俊名)"
              className="w-48 border border-neutral-200 sm:w-56 md:w-64"
            />
          </div>
        </div>
      </section>

      {/* Research interests + News */}
      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold">
            Research Interests
          </h2>
          <ul className="mt-4 space-y-2">
            {content.researchInterests.map((r) => (
              <li
                key={r}
                className="border-l-2 border-accent pl-4 text-neutral-700"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">News</h2>
          <ul className="mt-4 space-y-3">
            {recentNews.map((n, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-neutral-400 pt-0.5">
                  {n.date}
                </span>
                <span className="text-sm text-neutral-700">{n.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recent publications */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-xl font-semibold">
              Selected Publications
            </h2>
            <Link
              to="/publications"
              className="text-sm text-accent hover:underline underline-offset-4"
            >
              View all →
            </Link>
          </div>
          <div className="mt-6 divide-y divide-neutral-200">
            {pubs.map((p) => (
              <article key={p.id} className="py-5">
                <h3 className="text-base font-medium leading-snug">
                  {p.title}
                </h3>
                <div className="mt-1.5">
                  <AuthorList authors={p.authors} />
                </div>
                <p className="mt-1 text-sm italic text-neutral-500">
                  {p.venue}, {p.year}
                </p>
                {p.links.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {p.links.map((l) => (
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
      </section>
    </div>
  )
}

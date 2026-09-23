import { PageHeader } from '@/components/Layout'
import site from '@/content/site.json'
import type { SiteContent } from '@/types/content'

const content = site as SiteContent
const id = content.identity

export default function About() {
  return (
    <div>
      <PageHeader
        title="About"
        subtitle={id.affiliation}
      />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-xl font-semibold">
              Biography
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-700">
              <p>
                {id.name} ({id.nameZh}) is the founder of the{' '}
                <strong>{id.brand}</strong> framework. This page is the
                permanent academic home: publications, projects, and writing.
              </p>
              <p className="text-neutral-500">
                Replace this placeholder biography with a full CV-style text.
                Long-form bio, education, appointments, and awards can either
                go here as plain text or be added as structured entries — tell
                me which you prefer and I will extend the content schema.
              </p>
            </div>
          </div>

          <aside>
            <h2 className="font-display text-xl font-semibold">Contact</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-neutral-400">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${id.email}`}
                    className="text-accent hover:underline underline-offset-4"
                  >
                    {id.email}
                  </a>
                </dd>
              </div>
              {id.location && (
                <div>
                  <dt className="text-xs uppercase tracking-wide text-neutral-400">
                    Location
                  </dt>
                  <dd className="mt-1 text-neutral-700">{id.location}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs uppercase tracking-wide text-neutral-400">
                  Profiles
                </dt>
                <dd className="mt-1 space-y-1">
                  {id.profiles
                    .filter((p) => p.url)
                    .map((p) => (
                      <div key={p.label}>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-accent hover:underline underline-offset-4"
                        >
                          {p.label}
                        </a>
                      </div>
                    ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </div>
  )
}

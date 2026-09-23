import { PageHeader } from '@/components/Layout'
import site from '@/content/site.json'
import type { SiteContent } from '@/types/content'

const content = site as SiteContent
const id = content.identity
const education = content.education ?? []

export default function About() {
  return (
    <div>
      <PageHeader title="About" subtitle={id.affiliation} />
      <div className="mx-auto max-w-5xl px-5 py-12">
        {/* Portrait + biography */}
        <div className="grid items-start gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <img
              src="/images/portrait-about.jpg"
              alt="Junming Chen (陈俊名)"
              className="w-full border border-neutral-200"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="font-display text-xl font-semibold">Biography</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-700">
              <p>
                {id.name} ({id.nameZh}) is a researcher and writer, and the
                founder of the <strong>{id.brand}</strong> framework. His work
                spans mathematical fluid mechanics, AI for geoscience and
                engineering, quantitative civilizational studies, multiphase
                flow, and international relations theory.
              </p>
              <p>
                He is currently affiliated with {id.affiliation}. He received
                his B.Sc. from China University of Geosciences, M.Sc. from the
                University of Adelaide, and Ph.D. from Kobe University.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        {education.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-xl font-semibold">
              Education
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {education.map((e) => {
                const inner = (
                  <>
                    {e.logo && (
                      <img
                        src={e.logo}
                        alt={`${e.school} logo`}
                        className="h-16 w-auto object-contain"
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium">{e.degree}</div>
                      <div className="mt-1 text-xs text-neutral-500">
                        {e.school}
                        {e.period ? ` · ${e.period}` : ''}
                      </div>
                    </div>
                  </>
                )
                return e.schoolUrl ? (
                  <a
                    key={e.school}
                    href={e.schoolUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-4 border border-neutral-200 px-6 py-8 text-center transition hover:border-neutral-300 hover:shadow-sm"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={e.school}
                    className="flex flex-col items-center gap-4 border border-neutral-200 px-6 py-8 text-center"
                  >
                    {inner}
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* Contact */}
        <h2 className="mt-14 font-display text-xl font-semibold">Contact</h2>
        <dl className="mt-4 grid gap-6 text-sm sm:grid-cols-3">
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
      </div>
    </div>
  )
}

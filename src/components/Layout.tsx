import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import site from '@/content/site.json'
import type { SiteContent } from '@/types/content'

const content = site as SiteContent

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/publications', label: 'Publications' },
  { to: '/projects', label: 'Projects' },
  { to: '/works', label: 'Sci-Fi & Books' },
  { to: '/amusement', label: 'Self Amusement' },
  { to: '/panunics', label: 'Panunics' },
  { to: '/about', label: 'About' },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 antialiased">
      <ScrollToTop />
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold tracking-wide">
              JUNMING CHEN
            </span>
            <span className="hidden text-xs uppercase tracking-[0.25em] text-accent sm:inline">
              Panunics
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? 'font-medium text-accent'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-1 text-neutral-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-neutral-200 bg-white md:hidden">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `block border-b border-neutral-100 px-5 py-3 text-sm ${
                    isActive ? 'font-medium text-accent' : 'text-neutral-700'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-neutral-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-medium text-neutral-800">
                {content.identity.name} · {content.identity.nameZh}
              </p>
              <p className="mt-1">{content.identity.email}</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {content.identity.profiles
                .filter((p) => p.url)
                .map((p) => (
                  <a
                    key={p.label}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-neutral-900 underline-offset-4 hover:underline"
                  >
                    {p.label}
                  </a>
                ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-neutral-400">
            © {new Date().getFullYear()} {content.identity.name} ·{' '}
            {content.identity.brand}. Static site, built to last.
          </p>
        </div>
      </footer>
    </div>
  )
}

export function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-neutral-600">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

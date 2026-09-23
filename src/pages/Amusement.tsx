import { PageHeader } from '@/components/Layout'
import amusement from '@/content/amusement.json'

interface AmusementItem {
  id: string
  title: string
  piece?: string
  date?: string
  duration?: string
  youtube?: string
  video?: string
  poster?: string
  description?: string
}

const items = (amusement.items as AmusementItem[]).slice().reverse()

function youtubeId(url: string): string {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/
  )
  return m ? m[1] : url.trim()
}

export default function Amusement() {
  return (
    <div>
      <PageHeader
        title="Self Amusement"
        subtitle="Piano and other recordings, kept here for no reason except that they exist."
      />
      <div className="mx-auto max-w-5xl space-y-14 px-5 py-12">
        {items.map((v) => (
          <article key={v.id}>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h2 className="font-display text-xl font-semibold">{v.title}</h2>
              {v.piece && (
                <span className="text-sm italic text-neutral-500">{v.piece}</span>
              )}
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-neutral-400">
              {[v.date, v.duration].filter(Boolean).join(' · ')}
            </p>

            {v.youtube ? (
              <div className="mt-4 aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId(v.youtube)}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : v.video ? (
              <video
                className="mt-4 aspect-video w-full bg-black"
                controls
                preload="metadata"
                playsInline
                {...(v.poster ? { poster: v.poster } : {})}
              >
                <source src={v.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="mt-4 flex aspect-video w-full items-center justify-center border border-dashed border-neutral-300 bg-neutral-50 text-sm text-neutral-400">
                Video link pending
              </div>
            )}

            {v.description && (
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">
                {v.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

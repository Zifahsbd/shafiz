import { motion } from 'framer-motion'
import { Play, Eye, Clock } from 'lucide-react'

type Video = {
  title: string
  category: string
  views: string
  duration: string
  gradient: string
  shape: 'blob' | 'rings' | 'grid' | 'wave' | 'dots' | 'prism'
}

const videos: Video[] = [
  { title: 'I Redesigned Famous Logos in 3D', category: '3D Design', views: '2.4M', duration: '14:32', gradient: 'from-pink-500 via-fuchsia-500 to-violet-600', shape: 'blob' },
  { title: 'The Color Theory No One Teaches You', category: 'Design School', views: '1.8M', duration: '11:07', gradient: 'from-cyan-400 via-sky-500 to-blue-600', shape: 'rings' },
  { title: 'Animating My Entire Life in 24 Hours', category: 'Motion', views: '3.1M', duration: '18:45', gradient: 'from-amber-400 via-orange-500 to-red-500', shape: 'wave' },
  { title: 'Why Every Creator Needs a Brand Kit', category: 'Creator Tips', views: '986K', duration: '9:58', gradient: 'from-lime-400 via-emerald-500 to-teal-600', shape: 'grid' },
  { title: 'Building a Dream Studio Setup Tour', category: 'Studio', views: '1.2M', duration: '16:20', gradient: 'from-violet-500 via-purple-500 to-indigo-600', shape: 'dots' },
  { title: 'Prism Effects in After Effects — Full Guide', category: 'Tutorial', views: '2.0M', duration: '22:14', gradient: 'from-rose-400 via-pink-500 to-purple-600', shape: 'prism' },
]

function ThumbArt({ shape }: { shape: Video['shape'] }) {
  // pure-CSS generative thumbnail art
  switch (shape) {
    case 'blob':
      return <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-white/25 blur-[2px]" />
    case 'rings':
      return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[112, 80, 48].map((s) => (
            <div key={s} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-white/30" style={{ width: s, height: s }} />
          ))}
        </div>
      )
    case 'wave':
      return (
        <svg className="absolute inset-x-0 bottom-6 w-full" height="70" viewBox="0 0 400 70" preserveAspectRatio="none">
          <path d="M0 35 Q 50 0 100 35 T 200 35 T 300 35 T 400 35" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="8" strokeLinecap="round" />
          <path d="M0 55 Q 50 20 100 55 T 200 55 T 300 55 T 400 55" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" strokeLinecap="round" />
        </svg>
      )
    case 'grid':
      return (
        <div className="absolute inset-6 grid grid-cols-6 gap-2 opacity-40">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="rounded-md bg-white/40" />
          ))}
        </div>
      )
    case 'dots':
      return (
        <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-4 p-8 opacity-50">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="h-3 w-3 rounded-full bg-white" style={{ opacity: 0.3 + ((i * 7) % 10) / 14 }} />
          ))}
        </div>
      )
    case 'prism':
      return (
        <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-white/30" />
      )
  }
}

export default function Videos() {
  return (
    <section id="videos" className="relative bg-[#0c0c16] py-28 overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-600/15 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-pink-400">Featured Work</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl">
              Videos that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">pop off</span>
            </h2>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            View all on YouTube →
          </a>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              className="group cursor-pointer"
            >
              <div
                className={`relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br ${v.gradient} shadow-lg shadow-black/40 transition-transform duration-500 group-hover:scale-[1.03] group-hover:-rotate-1`}
              >
                <ThumbArt shape={v.shape} />
                {/* play overlay */}
                <div className="absolute inset-0 grid place-items-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                  <span className="grid h-14 w-14 scale-75 place-items-center rounded-full bg-white/90 opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Play className="ml-0.5 h-5 w-5 fill-black text-black" />
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {v.duration}
                </span>
                <span className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {v.category}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3 px-1">
                <h3 className="font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400">
                  {v.title}
                </h3>
                <span className="flex shrink-0 items-center gap-1.5 text-sm text-white/50">
                  <Eye className="h-4 w-4" />
                  {v.views}
                </span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 px-1 text-xs text-white/40">
                <Clock className="h-3.5 w-3.5" /> Uploaded this season
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Palette, Clapperboard, Sparkles } from 'lucide-react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 480, suffix: 'K+', label: 'Subscribers', gradient: 'from-pink-500 to-rose-400' },
  { value: 62, suffix: 'M+', label: 'Total Views', gradient: 'from-violet-500 to-purple-400' },
  { value: 320, suffix: '+', label: 'Videos Published', gradient: 'from-cyan-500 to-sky-400' },
  { value: 40, suffix: '+', label: 'Brand Collabs', gradient: 'from-lime-500 to-emerald-400' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-[#0a0a12] py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-violet-700/15 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">About Me</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Designer by day,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                storyteller by upload.
              </span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              I started PRISM.studio in 2019 with a borrowed camera and an obsession with color. Today my channel
              explores the intersection of graphic design, 3D art and internet culture — breaking down complex
              creative techniques into videos anyone can vibe with.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Every upload is crafted end-to-end: concept, design, animation, edit and sound. No templates, no
              shortcuts — just pure creative energy.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Palette, text: 'Bold, color-first visual identity in every frame', color: 'text-pink-400' },
                { icon: Clapperboard, text: 'Cinematic edits with rhythm and pacing that hook', color: 'text-cyan-400' },
                { icon: Sparkles, text: '3D & motion graphics built from scratch', color: 'text-lime-400' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5">
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-white/25 transition-colors ${
                  i % 2 === 1 ? 'lg:translate-y-8' : ''
                }`}
              >
                <div
                  className={`pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
                />
                <p className={`font-display text-4xl font-extrabold sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r ${s.gradient}`}>
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/50">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

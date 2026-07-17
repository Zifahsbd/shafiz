import { motion } from 'framer-motion'
import { Boxes, Film, Lightbulb, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Boxes,
    title: '3D & Motion Content',
    desc: 'Eye-popping 3D art, logo animations and motion graphics series that make design feel alive.',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/30',
  },
  {
    icon: Lightbulb,
    title: 'Design Education',
    desc: 'Tutorials and video essays that break down color, type and composition for 480K+ learners.',
    gradient: 'from-amber-400 to-orange-500',
    glow: 'shadow-orange-500/30',
  },
  {
    icon: Film,
    title: 'Cinematic Vlogs',
    desc: 'Behind-the-scenes studio stories with bold grading, punchy edits and honest creator talk.',
    gradient: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/30',
  },
  {
    icon: Megaphone,
    title: 'Brand Partnerships',
    desc: 'Native, story-driven integrations for brands that want reach without killing the vibe.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/30',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0a12] py-28 overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-pink-600/15 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-violet-400">What I Do</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Four flavors of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400">
              creative
            </span>
          </h2>
          <p className="mt-5 text-white/60">
            Every video lives in one of these worlds — each with its own palette, pace and personality.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-white/25"
            >
              <div
                className={`pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
              />
              <span
                className={`inline-grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} p-3.5 shadow-lg ${s.glow} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
              >
                <s.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

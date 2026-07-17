import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const quotes = [
  {
    text: 'Nova turned our product launch into a mini blockbuster. The integration felt native, the numbers went vertical.',
    name: 'Maya Chen',
    role: 'Brand Lead, Chromatech',
    gradient: 'from-pink-500 to-rose-400',
  },
  {
    text: 'The most color-fearless creator on YouTube right now. Every frame is a poster you want to hang on a wall.',
    name: 'Dario Fontana',
    role: 'Editor, DesignWeekly',
    gradient: 'from-cyan-400 to-sky-500',
  },
  {
    text: 'Our collab video outperformed every ad we ran that quarter. Story-first sponsorships actually work.',
    name: 'Priya Nair',
    role: 'Marketing Dir., Loopaudio',
    gradient: 'from-violet-500 to-purple-400',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#0c0c16] py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-lime-400">Kind Words</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Loved by viewers,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
              trusted by brands
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-white/25 transition-colors"
            >
              <span className={`inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${q.gradient}`}>
                <Quote className="h-5 w-5 text-white" />
              </span>
              <blockquote className="mt-5 flex-1 text-white/70 leading-relaxed">“{q.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${q.gradient} font-display text-sm font-bold text-white`}>
                  {q.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <span>
                  <span className="block font-semibold text-white">{q.name}</span>
                  <span className="block text-sm text-white/45">{q.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

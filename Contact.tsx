import { useState } from 'react'
import { motion } from 'framer-motion'
import { Youtube, Instagram, Twitter, Mail, Send, CheckCircle2 } from 'lucide-react'

const socials = [
  { icon: Youtube, label: 'YouTube', handle: '@prismstudio', href: 'https://youtube.com', color: 'hover:bg-red-500/20 hover:text-red-400' },
  { icon: Instagram, label: 'Instagram', handle: '@prism.studio', href: 'https://instagram.com', color: 'hover:bg-pink-500/20 hover:text-pink-400' },
  { icon: Twitter, label: 'X / Twitter', handle: '@prismstudio', href: 'https://x.com', color: 'hover:bg-sky-500/20 hover:text-sky-400' },
  { icon: Mail, label: 'Email', handle: 'hello@prism.studio', href: 'mailto:hello@prism.studio', color: 'hover:bg-lime-500/20 hover:text-lime-400' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a12] py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-violet-700/15 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-orange-400">Let's Collab</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              Got a project?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500">
                Let's make it loud.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-white/60 leading-relaxed">
              Sponsorships, brand films, design consulting or just a wild idea — my inbox is open and my timeline is
              colorful.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/70 transition-all hover:border-white/25 ${s.color}`}
                >
                  <s.icon className="h-5 w-5 shrink-0" />
                  <span>
                    <span className="block text-sm font-semibold text-white">{s.label}</span>
                    <span className="block text-xs text-white/45">{s.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            {sent ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-lime-400" />
                <h3 className="mt-5 font-display text-2xl font-bold text-white">Message sent!</h3>
                <p className="mt-2 text-white/55">I'll get back to you within 48 hours. Stay colorful.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-white/70">Name</span>
                    <input
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-pink-400/60 focus:ring-2 focus:ring-pink-500/20"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-white/70">Email</span>
                    <input
                      required
                      type="email"
                      placeholder="you@brand.com"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-medium text-white/70">Project type</span>
                  <select
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition-colors focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                    defaultValue="Sponsorship"
                  >
                    <option>Sponsorship</option>
                    <option>Brand film</option>
                    <option>Design consulting</option>
                    <option>Something wild</option>
                  </select>
                </label>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-medium text-white/70">Message</span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your idea..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-pink-400/60 focus:ring-2 focus:ring-pink-500/20"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition-all hover:shadow-violet-500/60 hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

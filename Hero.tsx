import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowDown, Youtube } from 'lucide-react'

const HeroScene = lazy(() => import('../three/HeroScene'))

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a0a12]">
      {/* gradient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-pink-600/25 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      {/* 3D canvas */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* content overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
          </span>
          <span className="text-xs font-medium tracking-wide text-white/80 uppercase">Uploading every week</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Creating in
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 animate-gradient">
            Full Spectrum
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-xl text-base text-white/60 sm:text-lg"
        >
          Hey, I'm <span className="text-white font-semibold">Nova Reyes</span> — a YouTube creator turning design,
          motion and storytelling into videos that 480K+ subscribers can't stop watching.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="pointer-events-auto mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#videos"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-violet-600/40 hover:shadow-violet-500/70 hover:scale-105 transition-all"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
              <Play className="h-3.5 w-3.5 fill-white" />
            </span>
            Watch My Work
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all"
          >
            <Youtube className="h-4 w-4 text-red-500" />
            Subscribe — 480K
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  )
}

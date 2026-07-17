import { Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080f] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-400">
            <Youtube className="h-4 w-4 text-white" />
          </span>
          <span className="font-display font-bold text-white">
            PRISM<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">.studio</span>
          </span>
        </a>
        <p className="text-sm text-white/40">© {new Date().getFullYear()} Nova Reyes — Made with too much color.</p>
        <div className="flex gap-6 text-sm text-white/50">
          <a href="#videos" className="hover:text-white transition-colors">Videos</a>
          <a href="#services" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

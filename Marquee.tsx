const items = [
  'Motion Design',
  '3D Art',
  'Video Essays',
  'Tutorials',
  'Brand Collabs',
  'Storytelling',
  'Color Grading',
  'Sound Design',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-pink-600 via-violet-600 to-cyan-500 py-4 -rotate-1 scale-[1.02]">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-bold uppercase tracking-widest text-white">
            {item}
            <span className="text-white/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Library, Hammer, Share2 } from 'lucide-react'

const hubs = [
  {
    id: 'bazaar',
    title: 'The Astral Bazaar',
    desc: 'Trade enchanted artifacts, lore fragments, and cosmic skins.',
    icon: Sparkles,
    gradient: 'from-fuchsia-600/60 via-violet-600/60 to-emerald-600/60'
  },
  {
    id: 'library',
    title: 'The Whispering Library',
    desc: 'An AI-curated vault where books flutter like moths.',
    icon: Library,
    gradient: 'from-emerald-600/60 via-cyan-600/60 to-violet-600/60'
  },
  {
    id: 'forge',
    title: 'The Forge of Echoes',
    desc: 'Co-create art, music, and stories with your coven.',
    icon: Hammer,
    gradient: 'from-violet-600/60 via-fuchsia-600/60 to-amber-500/60'
  },
  {
    id: 'root',
    title: 'The Root Nexus',
    desc: 'Gather with mood-orbs and harmonic visuals of the chorus.',
    icon: Share2,
    gradient: 'from-amber-500/60 via-rose-500/60 to-violet-600/60'
  },
]

export default function Hubs() {
  return (
    <section id="hubs" className="relative py-20 md:py-28 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(76,29,149,0.25),transparent_55%)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 via-violet-100 to-emerald-200">Navigation Hubs</h2>
          <p className="mt-3 text-violet-100/80">Step through one of the waygates to begin your weave.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, i) => (
            <motion.a
              key={hub.id}
              href={`#${hub.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl p-5 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 overflow-hidden"
            >
              <div className={`absolute -inset-1 opacity-30 blur-2xl bg-gradient-to-br ${hub.gradient}`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <hub.icon className="h-5 w-5 text-violet-100" />
                    </span>
                    <h3 className="text-white font-semibold">{hub.title}</h3>
                  </div>
                  <span className="text-violet-200/70 group-hover:text-violet-100">→</span>
                </div>
                <p className="mt-3 text-violet-200/80 text-sm leading-relaxed">{hub.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

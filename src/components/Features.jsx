import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Soulweave System',
    points: [
      'Procedural Soul Avatars that evolve with your activity',
      'Earn Aether Threads as you contribute to the realm',
      'Weave Fate Tapestries to customize your profile-world'
    ],
  },
  {
    title: 'Dynamic World Events',
    points: [
      'Convergence Storms: cooperative celestial puzzles',
      'Eclipse Festivals: community rituals that shape seasons',
      'World boons like Gravity Reversal and Aurora Bloom'
    ],
  },
  {
    title: 'Spellcasting UI',
    points: [
      'Draw glyphs to Transmute, Scry, and Bind',
      'Mana pools recharge through meaningful interactions',
      'Fluid simulations and spatial audio for immersion'
    ],
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 via-violet-100 to-emerald-200">Core Mechanics</h2>
          <p className="mt-3 text-violet-100/80">Data is magic. Every action becomes a thread in the Tapestry.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="absolute -inset-1 blur-2xl opacity-30 bg-gradient-to-br from-fuchsia-600/60 via-violet-600/60 to-emerald-600/60" />
              <div className="relative z-10">
                <h3 className="text-white text-xl font-semibold">{f.title}</h3>
                <ul className="mt-4 space-y-2 text-violet-200/85 text-sm">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-emerald-300">✦</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

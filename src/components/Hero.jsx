import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onEnter }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cosmic gradients overlay (won't block pointer) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_0%,rgba(147,51,234,0.35),transparent_60%)]" />

      {/* Copy */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-violet-200 to-emerald-200 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          >
            Celestia: The Living Tapestry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-base md:text-lg text-violet-100/90"
          >
            Commune with a sentient, ever‑evolving realm where every interaction weaves stardust into a shared cosmos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <button
              onClick={onEnter}
              className="group relative inline-flex items-center gap-3 rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-emerald-600 shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:shadow-[0_0_45px_rgba(167,139,250,0.75)] transition-all"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Enter Celestia</span>
            </button>
            <a
              href="#hubs"
              className="text-violet-200/80 hover:text-violet-100 underline/30 hover:underline"
            >
              Explore the realms ↓
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

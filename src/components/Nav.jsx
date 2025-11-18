import React from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-emerald-500 shadow-[0_0_25px_rgba(147,51,234,0.6)]" />
            <span className="text-violet-100 font-semibold tracking-wide">Celestia</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-violet-200/80">
            <a href="#hubs" className="hover:text-violet-100 transition-colors">Hubs</a>
            <a href="#features" className="hover:text-violet-100 transition-colors">Soulweave</a>
            <a href="#events" className="hover:text-violet-100 transition-colors">Events</a>
            <a href="#access" className="hover:text-violet-100 transition-colors">Access</a>
          </nav>
          <button className="text-sm font-medium text-white bg-white/10 hover:bg-white/15 rounded-full px-4 py-2">Sign in</button>
        </div>
      </div>
    </header>
  )
}

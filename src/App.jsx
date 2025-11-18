import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Hubs from './components/Hubs'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const onEnter = () => {
    const el = document.getElementById('hubs')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Subtle starfield */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(59,7,100,0.45),transparent_60%)]" />

      <Nav />
      <main className="relative">
        <Hero onEnter={onEnter} />
        <Hubs />
        <Features />
        <section id="access" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h3 className="text-2xl font-semibold">Onboarding & Accessibility</h3>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-violet-100/85 text-sm">
                <li className="bg-white/5 border border-white/10 rounded-xl p-4">The First Breath Tutorial: hatch your Soul Avatar in a comet nursery.</li>
                <li className="bg-white/5 border border-white/10 rounded-xl p-4">Aether Mode: monochrome, high-contrast runes for clarity.</li>
                <li className="bg-white/5 border border-white/10 rounded-xl p-4">Kinetic Dampening: reduce motion for comfort.</li>
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App

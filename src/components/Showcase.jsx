import { motion } from 'framer-motion'
import { Code2, Component, Sparkles, Star, Zap } from 'lucide-react'

const items = [
  {
    icon: <Sparkles className="w-6 h-6 text-cyan-300" />,
    title: 'Micro-interactions',
    desc: 'Polished hover states, taps, and scroll animations that feel alive.'
  },
  {
    icon: <Component className="w-6 h-6 text-indigo-300" />,
    title: 'Design Systems',
    desc: 'Accessible, scalable components powered by Tailwind + Radix.'
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-300" />,
    title: 'Performance',
    desc: 'Lighthouse-focused builds with code-splitting and lazy loading.'
  },
  {
    icon: <Star className="w-6 h-6 text-violet-300" />,
    title: '3D & Motion',
    desc: 'Spline scenes, parallax layers, and buttery-smooth transitions.'
  },
  {
    icon: <Code2 className="w-6 h-6 text-teal-300" />,
    title: 'Modern Stack',
    desc: 'Vite, React, Tailwind, Framer Motion, and Lenis scrolling.'
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-black to-[#0a0f1a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-center"
        >
          Creative frontend that feels futuristic
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition backdrop-blur"
            >
              <div className="flex items-center gap-3">
                {it.icon}
                <h3 className="text-xl font-semibold">{it.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{it.desc}</p>
              <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400/50 via-blue-400/50 to-indigo-500/50 group-hover:from-cyan-400 group-hover:to-indigo-500 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

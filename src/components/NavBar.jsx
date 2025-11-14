import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 text-2xl tracking-tight">
          dev.vibes
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
          ))}
          <a href="#contact" className="ml-4 px-4 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">Hire me</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur text-white"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

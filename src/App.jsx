import SmoothScrollProvider from './components/SmoothScrollProvider'
import NavBar from './components/NavBar'
import ParallaxSection from './components/ParallaxSection'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-black text-white">
        <NavBar />
        <ParallaxSection />

        <section id="about" className="relative py-24 bg-[#0a0f1a] overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(56,189,248,0.15),transparent_60%)] blur-3xl pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-5xl font-bold">I design experiences that people love</h2>
              <p className="mt-4 text-slate-300 leading-7">
                I build beautiful, performant web apps with React, motion design, and 3D. I believe interfaces should feel effortless, playful, and fast. Let’s craft something users can’t stop talking about.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition">Let’s work together</a>
                <a href="#work" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold shadow-lg shadow-cyan-500/20">See projects</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-2 gap-4">
              {["React", "Tailwind", "Framer Motion", "Spline", "Lenis", "Vite"].map((tag, i) => (
                <motion.div key={tag} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="text-slate-200">{tag}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Showcase />

        <section id="contact" className="relative py-24 bg-[#05070c]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-bold text-center">Let’s build your next big thing</motion.h2>
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/50 transition" />
              <input placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/50 transition" />
              <input placeholder="Project budget" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/50 transition" />
              <input placeholder="Timeline" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/50 transition" />
              <textarea placeholder="Tell me about your project" rows={5} className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400/50 transition" />
              <button type="button" className="sm:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold shadow-lg shadow-cyan-500/20">Send</button>
            </motion.form>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}

export default App

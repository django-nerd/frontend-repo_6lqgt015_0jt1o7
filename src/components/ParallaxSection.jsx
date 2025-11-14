import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.8, 0.5])

  return (
    <section className="relative h-[140vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0b0f1a] to-black">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
          >
            Frontend Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-5 text-lg sm:text-xl text-slate-300"
          >
            Building delightful interfaces with React, animations, and 3D.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a href="#work" className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-white hover:bg-white/20 transition">
              View Work
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold shadow-lg shadow-cyan-500/20">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

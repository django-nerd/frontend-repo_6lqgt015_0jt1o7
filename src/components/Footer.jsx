export default function Footer() {
  return (
    <footer className="relative py-12 bg-black text-slate-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} dev.vibes — Crafted with React, Tailwind & Motion</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Dribbble</a>
        </div>
      </div>
    </footer>
  )
}

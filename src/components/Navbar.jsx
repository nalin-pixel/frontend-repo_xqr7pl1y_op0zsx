import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-orange-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold text-slate-900">AssessAI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
                {item.label}
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-slate-800 transition">
              Get started
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="rounded-md px-3 py-2 bg-slate-900 text-white" onClick={() => setOpen(false)}>
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

import { Sparkles, Gauge, ShieldCheck, Mic } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Voice-first interviews',
    desc: 'Natural conversations powered by an AI voice agent. Measure clarity, confidence, and domain knowledge.'
  },
  {
    icon: Gauge,
    title: 'Real-time scoring',
    desc: 'Competency-based scoring aligned to role profiles with configurable rubrics and calibrations.'
  },
  {
    icon: ShieldCheck,
    title: 'Bias-aware insights',
    desc: 'Fairness checks, anonymization, and explainable AI to support equitable decisions.'
  },
  {
    icon: Sparkles,
    title: 'Automations & ATS',
    desc: 'Auto-schedule, send invites, and sync outcomes to your ATS and internal tools.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-fuchsia-200/30 via-indigo-200/20 to-transparent blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Built for people-first assessments</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Powerful AI where it matters most: respectful experiences for candidates, objective insights for teams.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-orange-500 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

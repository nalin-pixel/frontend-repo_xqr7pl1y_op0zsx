import { PlayCircle, BarChart3, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: PlayCircle,
    title: 'Create an assessment',
    desc: 'Pick a role template or start from scratch. Configure competencies and question sets.'
  },
  {
    icon: BarChart3,
    title: 'Run conversations',
    desc: 'Send invite links or schedule automatically. Candidates interview with our AI voice agent.'
  },
  {
    icon: CheckCircle2,
    title: 'Review insights',
    desc: 'See structured scorecards, transcripts, and fairness checks. Move forward with confidence.'
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">How it works</h2>
            <p className="mt-3 text-slate-600">A streamlined flow from setup to decision — designed to be fair, fast, and delightful for everyone involved.</p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-orange-400 opacity-80" />
              <p className="mt-3 text-sm text-slate-600">Plug into your existing stack: Greenhouse, Lever, Workable, and more.</p>
            </div>
          </div>

          <div className="md:col-span-7 grid gap-4">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="ml-10 font-semibold text-slate-900">{title}</h3>
                <p className="ml-10 mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

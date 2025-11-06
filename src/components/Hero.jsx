import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/90" />
        <div className="h-[520px] md:h-[640px]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              AI voice agent assessments • HR-grade analytics
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              AI-powered employee assessments for modern teams
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl">
              Run voice-based interviews, evaluate competencies, and get instant, bias-aware insights. Designed for enterprise-grade hiring and performance reviews.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition">
                Start free trial
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50 transition">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div>GDPR & SOC2 ready</div>
              <div>Voice + Text modes</div>
              <div>ATS integrations</div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}

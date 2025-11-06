export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Start free. Upgrade as your hiring and assessment needs grow.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-1 text-sm text-slate-600">For small teams validating the workflow</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold text-slate-900">$0</span>
              <span className="text-slate-500">/month</span>
            </div>
            <ul className="mt-6 text-sm text-slate-600 space-y-2">
              <li>• 20 assessments / month</li>
              <li>• Core analytics</li>
              <li>• Basic templates</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800 transition">Get started</a>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border-2 border-slate-900 bg-gradient-to-b from-white to-slate-50 p-8 shadow-md relative">
            <div className="absolute -top-3 right-6 text-xs rounded-full bg-slate-900 text-white px-2 py-0.5">Popular</div>
            <h3 className="text-lg font-semibold text-slate-900">Growth</h3>
            <p className="mt-1 text-sm text-slate-600">For growing teams that need automation</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold text-slate-900">$149</span>
              <span className="text-slate-500">/month</span>
            </div>
            <ul className="mt-6 text-sm text-slate-600 space-y-2">
              <li>• 500 assessments / month</li>
              <li>• Bias-aware insights</li>
              <li>• ATS integrations</li>
              <li>• Custom scorecards</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800 transition">Start trial</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
            <p className="mt-1 text-sm text-slate-600">For complex orgs needing scale & security</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold text-slate-900">Custom</span>
            </div>
            <ul className="mt-6 text-sm text-slate-600 space-y-2">
              <li>• Unlimited assessments</li>
              <li>• SSO, SAML, SCIM</li>
              <li>• Dedicated support</li>
              <li>• Data residency options</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800 transition">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

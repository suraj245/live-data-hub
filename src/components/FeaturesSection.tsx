export default function FeatureSection() {
  return (
    <section className="bg-[#020617] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Live Data Hub?
          </h2>

          <p className="text-slate-400">
            Everything you need for real-time insights in one place.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 hover:border-[#ffa50066] hover:shadow-[1px_1px_6px_#ffa50070] rounded-2xl p-8">

            <div className="text-4xl mb-4">
              ⚡
            </div>

            <h3 className="text-white text-xl font-semibold mb-3">
              Fast Updates
            </h3>

            <p className="text-slate-400">
              Sub-second latency across all data streams. Our infrastructure delivers real-time tick data at market speed, keeping your dashboards always fresh.
            </p>

            <ul className="text-slate-400 mt-4 list-disc marker:text-orange-400 list-inside space-y-1">
              <li>500ms average latency</li>
              <li>WebSocket streaming</li>
              <li>99.9% uptime SLA</li>
            </ul>

          </div>

          <div className="bg-slate-900 border border-slate-800 hover:border-[#063af866] hover:shadow-[1px_1px_6px_#001bff4a] rounded-2xl p-8">

            <div className="text-4xl mb-4">
              🌍
            </div>

            <h3 className="text-white text-xl font-semibold mb-3">
              Live APIs
            </h3>

            <p className="text-slate-400">
              RESTful and WebSocket APIs designed for developers. Comprehensive documentation, SDKs for major languages, and generous free tier to get started.
            </p>

            <ul className="text-slate-400 mt-4  list-disc marker:text-blue-600 list-inside space-y-1">
              <li>REST + WebSocket</li>
              <li>OpenAPI 3.0 spec</li>
              <li>10M free calls/month</li>
            </ul>

          </div>

          <div className="bg-slate-900 border border-slate-800 hover:border-[#8500ff66] hover:shadow-[1px_1px_6px_#7c00ff70] rounded-2xl p-8">

            <div className="text-4xl mb-4">
              📱
            </div>

            <h3 className="text-white text-xl font-semibold mb-3">
              Responsive Design
            </h3>

            <p className="text-slate-400">
              Every dashboard adapts beautifully to any screen. Monitor markets on desktop, tablet, or mobile without losing a single data point.
            </p>

            <ul className="text-slate-400 mt-4 list-disc marker:text-green-600 list-inside space-y-1">
              <li>Mobile-first layout</li>
              <li>Dark & light modes</li>
              <li>Keyboard shortcuts</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}
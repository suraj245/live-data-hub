export default function HeroBanner() {
  return (
    <section className="bg-[#020617] text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-6">
              🚀 Real-Time Data Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Real-Time Insights
              <br />
              For Crypto,
              <span className="text-blue-500">
                {" "}Weather
              </span>
              &
              <span className="text-blue-500">
                {" "}Currency
              </span>
            </h1>

            <p className="text-slate-400 text-lg mb-8">
              Track live cryptocurrency prices,
              weather forecasts and currency
              exchange rates from one powerful dashboard.
            </p>

            <div className="flex gap-4">

              <button
                className="
                bg-blue-600
                hover:bg-blue-700
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
              >
                Explore Dashboard
              </button>

              <button
                className="
                border
                border-slate-700
                px-6
                py-3
                rounded-xl
                hover:bg-slate-800
                transition
              "
              >
                View APIs
              </button>

            </div>

          </div>

          {/* Right Content */}
          <div className="relative">

            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-800">

              <div className="space-y-4">

                <div className="bg-slate-800 p-4 rounded-xl">
                  <h3 className="text-sm text-slate-400">
                    Bitcoin
                  </h3>

                  <p className="text-2xl font-bold">
                    $108,245
                  </p>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  <h3 className="text-sm text-slate-400">
                    Weather
                  </h3>

                  <p className="text-2xl font-bold">
                    28°C Bengaluru
                  </p>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  <h3 className="text-sm text-slate-400">
                    USD → INR
                  </h3>

                  <p className="text-2xl font-bold">
                    ₹86.12
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
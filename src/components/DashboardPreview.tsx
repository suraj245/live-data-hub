export default function DashboardPreview() {
  return (
    <section className="bg-[#020617] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
        
            <h4 className="text-blue-500 font-semibold mb-2">
              DASHBOARDS
            </h4>
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything in one place
          </h2>

          <p className="text-slate-400 text-wrap w-md mx-auto">
            Three powerful dashboards, one seamless interface. Switch between asset classes without losing context.
          </p>

        </div>

        {/* Tabs */}

        <div className="flex justify-center gap-4 mb-10">

          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
            Crypto
          </button>

          <button className="bg-slate-800 text-slate-300 px-5 py-2 rounded-xl">
            Weather
          </button>

          <button className="bg-slate-800 text-slate-300 px-5 py-2 rounded-xl">
            Currency
          </button>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-slate-400 mb-2">
              Bitcoin
            </h3>

            <p className="text-white text-3xl font-bold">
              $108,245
            </p>

            <span className="text-green-400">
              +3.2%
            </span>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-slate-400 mb-2">
              Ethereum
            </h3>

            <p className="text-white text-3xl font-bold">
              $2,650
            </p>

            <span className="text-green-400">
              +1.8%
            </span>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h3 className="text-slate-400 mb-2">
              Solana
            </h3>

            <p className="text-white text-3xl font-bold">
              $152
            </p>

            <span className="text-red-400">
              -0.5%
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}
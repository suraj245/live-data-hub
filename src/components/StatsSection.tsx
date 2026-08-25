export default function StatsSection() {
  return (
    <section className="bg-[#020617] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h2 className="text-5xl font-bold text-blue-500 mb-3">
              100+
            </h2>

            <p className="text-slate-300">
              Supported Currencies
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h2 className="text-5xl font-bold text-blue-500 mb-3">
              5000+
            </h2>

            <p className="text-slate-300">
              Cryptocurrencies
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <h2 className="text-5xl font-bold text-blue-500 mb-3">
              Global
            </h2>

            <p className="text-slate-300">
              Weather Coverage
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
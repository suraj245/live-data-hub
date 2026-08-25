export default function TrendingCoins() {
  return (
    <section className="bg-[#0e152f] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-10">
          🔥 Trending Coins
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1,2,3].map((item)=>(
            <div
              key={item}
              className="bg-slate-900 rounded-2xl border border-slate-700 p-6 hover:border-blue-500 duration-300"
            >

              <h3 className="text-white text-2xl font-bold">
                Bitcoin
              </h3>

              <p className="text-slate-400 mt-2">
                Most searched cryptocurrency today.
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-white">
                View Details
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
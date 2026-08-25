import { CryptoCoin } from "@/src/types/crypto";

export type CoinCardprops = {
  cryptoData: CryptoCoin[];
}

export default function CoinCard({cryptoData}:CoinCardprops) {
  return (
    <section className="bg-[#0e152f] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white">
            Top Cryptocurrencies
          </h2>

          <p className="text-slate-400 mt-3">
            Live prices of the worlds leading cryptocurrencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* {[1,2,3,4,5,6,7,8,9,10].map((item)=>( */}
          {cryptoData.slice(0, 4).map((coin) => (
            <div
              key={coin.id}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 duration-300"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {coin.name}
                  </h3>

                  <p className="text-slate-400">
                    {coin.symbol}
                  </p>

                </div>

                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {coin.price_change_percentage_24h >= 0 ? "+" : ""}{coin.price_change_percentage_24h?.toFixed(2)}%
                </div>

              </div>

              <div className="mt-8">

                <h2 className="text-3xl font-bold text-white">
                  ${coin.current_price?.toLocaleString()}
                </h2>

                <div className="mt-6 space-y-2 text-sm text-slate-400">

                  <div className="flex justify-between">
                    <span>Market Cap</span>
                    <span>${coin.market_cap?.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Volume</span>
                    <span>${coin.total_volume?.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Rank</span>
                    <span>#{coin.market_cap_rank}</span>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
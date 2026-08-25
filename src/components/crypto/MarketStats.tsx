import {CryptoCoin} from "@/src/types/crypto";

type MarketStatsProps = {
  cryptoData: CryptoCoin[];
};

export default function MarketStats({ cryptoData }: MarketStatsProps) {
  return (
    
    <section className="bg-[#0e152f] text-white">
  <div className="max-w-7xl mx-auto px-6 py-4">

    <div className="grid md:grid-cols-3 gap-4">

      {cryptoData.slice(0, 3).map(
        ({
          id,
          name,
          symbol,
          current_price,
          price_change_percentage_24h,
        }) => (

          <div
            key={id}
            className="card border border-slate-700 px-5 py-2 rounded-xl hover:bg-slate-800 shadow-[0_0_8px_rgba(59,130,246,0.3)] transition"
          >
            <div className="grid grid-cols-2 gap-4">

              <div className="flex flex-col text-left">

                <h2 className="text-2xl font-bold text-blue-500 mb-1">
                  {name}
                </h2>

                <p className="text-slate-400">
                  {symbol.toUpperCase()}
                </p>

              </div>

              <div className="flex flex-col text-right">

                <h2 className="text-2xl font-bold text-white mb-1">
                  ${current_price.toLocaleString()}
                </h2>

                <p
                  className={
                    price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {price_change_percentage_24h >= 0 ? "+" : ""}
                  {price_change_percentage_24h.toFixed(2)}%
                </p>

              </div>

            </div>
          </div>

        )
      )}

    </div>

  </div>
</section>
  )};
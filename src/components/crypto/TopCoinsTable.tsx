import { CryptoCoin } from "@/src/types/crypto";

export type TopCoinsTableProps = {
  cryptoData: CryptoCoin[];
};

export default function TopCoinsTable({ cryptoData }: TopCoinsTableProps) {
  return (
    <section className="bg-[#0e152f] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-8">

          <h2 className="text-4xl font-bold text-white">
            Market Rankings
          </h2>

          <p className="text-slate-400 mt-2">
            Top cryptocurrencies by market capitalization.
          </p>

        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-700">

          <table className="min-w-full">

            <thead className="bg-slate-900">

              <tr className="text-left">

                <th className="px-6 py-4 text-slate-300">#</th>

                <th className="px-6 py-4 text-slate-300">Coin</th>

                <th className="px-6 py-4 text-slate-300">Price</th>

                <th className="px-6 py-4 text-slate-300">24h</th>

                <th className="px-6 py-4 text-slate-300">Market Cap</th>

                <th className="px-6 py-4 text-slate-300">Volume</th>

              </tr>

            </thead>

            <tbody>

              {/* {[1,2,3,4,5].map((item)=>( */}
              {cryptoData.slice(0,5).map((coin, index) => (
                <tr
                  key={coin.id}
                  className="border-t border-slate-800 hover:bg-slate-900"
                >

                  <td className="px-6 py-5 text-white">
                    {index + 1}
                  </td>

                  <td className="px-6 py-5 text-white">
                    {coin.name}
                  </td>

                  <td className="px-6 py-5 text-white">
                    ${coin.current_price.toFixed(2)}
                  </td>

                  <td className="px-6 py-5 text-green-400">
                    {coin.price_change_percentage_24h >= 0 ? "+" : ""}{coin.price_change_percentage_24h?.toFixed(2)}%
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {coin.market_cap?.toLocaleString()}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {coin.total_volume?.toLocaleString()}
                  </td>

                </tr>
               ))} 

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}
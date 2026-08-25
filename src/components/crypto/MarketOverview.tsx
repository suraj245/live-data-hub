import { CryptoCoin } from "@/src/types/crypto";

export type MarketOverviewProps = {
  cryptoData: CryptoCoin[];
};

export default function MarketOverview({ cryptoData }: MarketOverviewProps) {
  return (
    <section className="bg-[#0e152f] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Global Market Overview
          </h2>

          <p className="text-slate-400 mt-3">
            Overall cryptocurrency market statistics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">
            <p className="text-slate-400">Market Cap</p>
            <h2 className="text-3xl font-bold text-white mt-3">$3.52T</h2>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">
            <p className="text-slate-400">24h Volume</p>
            <h2 className="text-3xl font-bold text-white mt-3">$118B</h2>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">
            <p className="text-slate-400">BTC Dominance</p>
            <h2 className="text-3xl font-bold text-green-400 mt-3">58.2%</h2>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">
            <p className="text-slate-400">ETH Dominance</p>
            <h2 className="text-3xl font-bold text-blue-400 mt-3">11.8%</h2>
          </div>

        </div>

      </div>
    </section>
  );
}
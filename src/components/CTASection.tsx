import { CryptoCoin } from "../types/crypto";


export default function CTASection() {
  return (
    <section className="bg-[#020617] py-20">

      <div className="max-w-4xl bg-slate-900 mx-auto border border-slate-800 py-8 rounded-2xl px-8 text-center">

        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Explore Live Data?
        </h2>

        <p className="text-slate-400 mb-8">
          Access crypto prices, weather forecasts and currency rates in real time.
        </p>

        <button
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-4
          rounded-xl
          font-semibold
          transition
        "
        >
          Get Started
        </button>

      </div>

    </section>
  );
}
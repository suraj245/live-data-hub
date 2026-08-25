import { CryptoCoin } from "@/src/types/crypto";

type CryptoHeroProps = {
  cryptoData: CryptoCoin[];
};


export default function CryptoHero({ cryptoData }: CryptoHeroProps) {
console.log("this is cryto hero data :"+cryptoData);

  return (
    <section className="bg-[#0e152f] text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}

          <div>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
              ● Live Crypto Market
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Track Crypto
              <span className="text-blue-400">
                {" "}Markets
              </span>
              <br />
              In Real Time
            </h1>

            <p className="text-slate-300 mt-6">
              Monitor Bitcoin, Ethereum,
              Solana and thousands of
              cryptocurrencies with
              real-time market data.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
                Explore Coins
              </button>

              <button className="border border-slate-600 px-6 py-3 rounded-xl">
                View Market
              </button>

            </div>

          </div>

          {/* Right */}

          

        </div>

      </div>

    </section>
  );
}
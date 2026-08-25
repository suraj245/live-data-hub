import Image from "next/image";
import { CryptoCoin } from "@/src/types/crypto";

export type CryptoNewsProps = {
  cryptoData: CryptoCoin[];
};

export default function CryptoNews({ cryptoData }: CryptoNewsProps) {
  return (
    <section className="bg-[#0e152f] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">

          <h2 className="text-4xl font-bold text-white">
            Latest Crypto News
          </h2>

          <p className="text-slate-400 mt-3">
            Stay updated with the latest cryptocurrency news.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {cryptoData.map((coin) => (
            <div
              key={coin.id}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition"
            >

              <div className="h-52 bg-slate-800 flex items-center justify-center text-slate-500">
                <Image src={coin.image} alt={coin.name} width={96} height={96} className="h-24 w-24 object-contain" />
              </div>

              <div className="p-6">

                <span className="text-blue-400 text-sm">
                  Breaking News
                </span>

                <h3 className="text-white text-xl font-bold mt-3">
                  Bitcoin crosses another important resistance level.
                </h3>

                <p className="text-slate-400 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <button className="mt-6 text-blue-400 hover:text-blue-300">
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
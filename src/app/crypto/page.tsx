'use client';
import React from "react";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import CryptoHero from "../../components/crypto/CryptoHero";
import MarketStats from "@/src/components/crypto/MarketStats";
import CoinCard from "@/src/components/crypto/CoinCard";
import TopCoinsTable from "@/src/components/crypto/TopCoinsTable";
import TrendingCoins from "@/src/components/crypto/TrendingCoins";
import MarketOverview from "@/src/components/crypto/MarketOverview";
import CryptoNews from "@/src/components/crypto/CryptoNews";
import CryptoCTA from "@/src/components/crypto/CryptoCTA";
import { CryptoCoin } from "@/src/types/crypto";
import Footer from "../../components/Footer";


export default function CryptoPage() {
  const [cryptoData, setCryptoData] = useState<CryptoCoin[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCrypto() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
        );

        const data: CryptoCoin[] = await response.json();

        console.log(data);

        setCryptoData(data);
      } catch (err) {
        setError("Failed to fetch crypto data");
      } finally {
        setLoading(false);
      }
    }

    fetchCrypto();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <section>
        <Navbar />
        <CryptoHero cryptoData={cryptoData}/>

        <MarketStats cryptoData={cryptoData} />

        <CoinCard cryptoData={cryptoData} />

        <TopCoinsTable cryptoData={cryptoData} />

        <TrendingCoins  />

        <MarketOverview cryptoData={cryptoData} />

        <CryptoNews cryptoData={cryptoData} />

        <CryptoCTA />
        <Footer />
      </section>
    </div>
  );
}

// export default function CryptoPage() {
//   return(
//     <>
//     <p>crypto page</p>
//     </>
//   )
// }

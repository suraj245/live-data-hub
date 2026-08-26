"use client";

import { useState } from "react";

type WeatherSearchProps = {
  onSearch: (city: string) => void;
  loading: boolean;
  error: string;
  searchedCity: string;
};

export default function WeatherSearch({
  onSearch,
  loading,
  error,
  searchedCity,
}: WeatherSearchProps) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) {
      return;
    }

    onSearch(trimmedCity);
    setCity("");
  };

  return (
    <section className="bg-[#0e152f] text-white md:py-20 py-5">

      <div className="max-w-7xl mx-auto px-6">

        {/* Search Card */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-700/80
            bg-gradient-to-br
            from-slate-900
            via-slate-900
            to-blue-950/60
            p-8
            md:p-12
            shadow-2xl
          "
        >

          {/* Background Glow */}

          <div
            className="
              absolute
              -top-32
              -right-32
              w-80
              h-80
              bg-blue-600/20
              rounded-full
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-32
              -left-32
              w-80
              h-80
              bg-cyan-500/10
              rounded-full
              blur-3xl
            "
          />

          {/* Content */}

          <div className="relative z-10 max-w-4xl mx-auto">

            {/* Badge */}

            <div className="flex justify-center mb-6">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/10
                  border
                  border-blue-400/20
                  text-blue-300
                  text-sm
                  font-medium
                "
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

                Live Weather Search
              </span>

            </div>

            {/* Heading */}

            <div className="text-center">

              <h2 className="text-3xl md:text-4xl font-bold">
                Search Any City
              </h2>

              <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
                Search any city around the world and get real-time
                weather, forecasts, air quality and more.
              </p>

            </div>

            {/* Search Form */}

            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  gap-3
                  p-2
                  rounded-2xl
                  bg-slate-950/70
                  border
                  border-slate-700
                  shadow-xl
                  backdrop-blur
                "
              >

                {/* Input */}

                <div className="relative flex-1">

                  <span
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-xl
                    "
                  >
                    📍
                  </span>

                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name..."
                    disabled={loading}
                    className="
                      w-full
                      bg-transparent
                      px-5
                      pl-12
                      py-4
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      text-base
                      disabled:opacity-50
                    "
                  />

                </div>

                {/* Search Button */}

                <button
                  type="submit"
                  disabled={loading || !city.trim()}
                  className="
                    md:w-40
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    hover:from-blue-500
                    hover:to-cyan-400
                    disabled:from-slate-700
                    disabled:to-slate-700
                    disabled:cursor-not-allowed
                    px-7
                    py-4
                    rounded-xl
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    shadow-lg
                    shadow-blue-900/30
                  "
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Searching
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      🔎 Search
                    </span>
                  )}
                </button>

              </div>

            </form>

            {/* Status */}

            <div className="min-h-[28px] mt-5 text-center">

              {loading && (
                <p className="text-blue-400 text-sm">
                  🔍 Fetching live weather data...
                </p>
              )}

              {!loading && error && (
                <p className="text-red-400 text-sm font-medium">
                  ❌ {error}
                </p>
              )}

              {!loading && !error && searchedCity && (
                <p className="text-emerald-400 text-sm font-medium">
                  <span className="mr-1">✓</span>
                  Weather data loaded for{" "}
                  <span className="text-white font-semibold">
                    {searchedCity}
                  </span>
                </p>
              )}

            </div>

            {/* Bottom Info */}

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-xs text-slate-500">

              <span className="flex items-center gap-1">
                🌡️ Live Temperature
              </span>

              <span className="flex items-center gap-1">
                📅 5-Day Forecast
              </span>

              <span className="flex items-center gap-1">
                🌬️ Air Quality
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
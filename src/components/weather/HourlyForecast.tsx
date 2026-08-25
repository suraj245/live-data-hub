"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Forecast } from "@/src/types/weather/forecast";

type HourlyForecastProps = {
  forecastData: Forecast | null;
};

export default function HourlyForecast({
  forecastData,
}: HourlyForecastProps) {
  const hourlyData = forecastData?.list.slice(0, 8) ?? [];

  return (
    <section className="bg-[#0e152f] py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-10">

          <h2 className="text-4xl font-bold text-white">
            Hourly Forecast
          </h2>

          <p className="text-slate-400 mt-2">
            Detailed weather conditions throughout the day.
          </p>

        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 2.5,
            },

            1024: {
              slidesPerView: 3.2,
            },

            1280: {
              slidesPerView: 3.5,
            },
          }}
        >

          {hourlyData.map((item) => {

            const temperature = Math.round(item.main.temp);

            const rainChance = Math.round((item.pop ?? 0) * 100);

            return (

              <SwiperSlide key={item.dt}>

                <div
                  className="
                    bg-gradient-to-br
                    from-slate-900
                    to-slate-950
                    border
                    border-slate-700
                    rounded-2xl
                    p-5
                    text-white
                    hover:border-blue-500
                    transition-all
                    duration-300
                  "
                >

                  {/* Top Row */}
                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="text-lg font-bold">
                        {new Date(item.dt_txt).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "numeric",
                            minute: "2-digit",
                          }
                        )}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1">
                        Forecast
                      </p>

                    </div>

                    {/* Weather Icon */}
                    <div className="text-3xl">
                      {item.weather[0].icon === "01d"
                        ? "☀️"
                        : item.weather[0].icon === "01n"
                        ? "🌙"
                        : item.weather[0].icon.includes("02")
                        ? "🌤️"
                        : item.weather[0].icon.includes("03") ||
                          item.weather[0].icon.includes("04")
                        ? "☁️"
                        : item.weather[0].icon.includes("09") ||
                          item.weather[0].icon.includes("10")
                        ? "🌧️"
                        : item.weather[0].icon.includes("11")
                        ? "⛈️"
                        : "🌫️"}
                    </div>

                  </div>


                  {/* Temperature + Description */}
                  <div className="mt-6">

                    <div className="flex items-end gap-2">

                      <span className="text-3xl font-bold">
                        {temperature}°
                      </span>

                      <span className="text-blue-400 text-sm mb-1 capitalize">
                        {item.weather[0].description}
                      </span>

                    </div>

                  </div>


                  {/* Rain Probability */}
                  <div className="mt-5">

                    <div className="flex justify-between text-xs mb-2">

                      <span className="text-slate-400">
                        Rain chance
                      </span>

                      <span className="text-cyan-400 font-semibold">
                        {rainChance}%
                      </span>

                    </div>

                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-cyan-400 rounded-full"
                        style={{
                          width: `${rainChance}%`,
                        }}
                      />

                    </div>

                  </div>


                  {/* Weather Details */}
                  <div className="grid grid-cols-2 gap-2 mt-5">

                    {/* Visibility */}
                    <div className="bg-slate-800/70 rounded-xl p-3">

                      <p className="text-[10px] text-slate-400">
                        Visibility
                      </p>

                      <p className="text-cyan-400 font-bold text-sm mt-1">
                        {(item.visibility / 1000).toFixed(1)} km
                      </p>

                    </div>


                    {/* Dew Point */}
                    <div className="bg-slate-800/70 rounded-xl p-3">

                      <p className="text-[10px] text-slate-400">
                        Dew Point
                      </p>

                      <p className="text-purple-400 font-bold text-sm mt-1">
                        {Math.round(item.main.dew_point)}°
                      </p>

                    </div>


                    {/* Wind */}
                    <div className="bg-slate-800/70 rounded-xl p-3">

                      <p className="text-[10px] text-slate-400">
                        Wind
                      </p>

                      <p className="text-green-400 font-bold text-sm mt-1">
                        {item.wind.speed} m/s
                      </p>

                    </div>


                    {/* Pressure */}
                    <div className="bg-slate-800/70 rounded-xl p-3">

                      <p className="text-[10px] text-slate-400">
                        Pressure
                      </p>

                      <p className="text-orange-400 font-bold text-sm mt-1">
                        {item.main.pressure} hPa
                      </p>

                    </div>

                  </div>

                </div>

              </SwiperSlide>

            );
          })}

        </Swiper>

      </div>

    </section>
  );
}
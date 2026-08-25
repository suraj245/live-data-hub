"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Forecast } from "@/src/types/weather/forecast";

const tabs = ["Today", "Tomorrow", "5 Days"];

type WeeklyForecastProps = {
  forecastData: Forecast | null;
};

// Get emoji based on weather + temperature
const getWeatherEmoji = (weather: string, temp: number) => {
  if (weather === "Rain") {
    return "🌧️";
  }

  if (weather === "Clouds") {
    return "☁️";
  }

  if (weather === "Clear") {
    if (temp >= 30) {
      return "🔥";
    }

    if (temp < 20) {
      return "🥶";
    }

    return "☀️";
  }

  if (temp >= 30) {
    return "🔥";
  }

  if (temp < 20) {
    return "🥶";
  }

  return "🌤️";
};

// Format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
};

// Format time
const formatTime = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function WeeklyForecast({ forecastData }: WeeklyForecastProps) {
  const [activeTab, setActiveTab] = useState("Today");

  // Get forecast array safely
  const forecastList = forecastData?.list ?? [];

  // Decide which data should be displayed
  let filteredForecast = forecastList;

  if (activeTab === "Today") {
    filteredForecast = forecastList.slice(0, 8);
  }

  if (activeTab === "Tomorrow") {
    filteredForecast = forecastList.slice(8, 16);
  }

  if (activeTab === "5 Days") {
    filteredForecast = forecastList;
  }

  return (
    <section className="bg-[#0e152f] py-16" id="forecast">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="my-8">
          <h2 className="text-4xl font-bold text-white">Weekly Forecast</h2>

          {forecastData?.city?.name && (
            <p className="text-slate-400 my-3">
              📍 Weather forecast for{" "}
              <span className="text-blue-400 font-semibold">
                {forecastData.city.name}
              </span>
            </p>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6
                py-3
                rounded-xl
                transition
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Forecast Slider */}
        <Swiper
          spaceBetween={16}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {filteredForecast.map((item) => {
            const temp = Math.round(item.main.temp);

            const emoji = getWeatherEmoji(item.weather[0].main, temp);

            return (
              <SwiperSlide key={item.dt}>
                {/* Forecast Card */}
                <div
                  className="
                    bg-gradient-to-b
                    from-slate-800
                    to-slate-950
                    border
                    border-slate-700
                    rounded-2xl
                    p-3
                    text-white
                    hover:border-blue-500
                    hover:shadow-xl
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  {/* Date + Time */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-sm">
                        {formatDate(item.dt_txt)}
                      </h3>

                      <p className="text-xs text-blue-300 mt-1">
                        {formatTime(item.dt_txt)}
                      </p>
                    </div>

                    <span className="text-[10px] bg-slate-700 px-2 py-1 rounded-full">
                      Forecast
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <p className="text-sm text-slate-400">
                      {forecastData?.city?.name}
                    </p>
                  </div>

                  {/* Weather Emoji */}
                  <div className="flex justify-center my-4">
                    <div
                      className="
                        w-14
                        h-14
                        rounded-full
                        bg-slate-700/40
                        flex
                        items-center
                        justify-center
                        text-3xl
                      "
                    >
                      {emoji}
                    </div>
                  </div>

                  {/* Temperature */}
                  <div className="text-center">
                    <p className="text-[10px] tracking-[0.25em] text-slate-400 uppercase">
                      Temperature
                    </p>

                    <p className="text-3xl font-bold mt-1">{temp}°</p>

                    <p className="text-blue-400 text-xs mt-1 capitalize">
                      {item.weather[0].description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {/* Humidity */}
                    <div className="bg-slate-800/70 rounded-lg p-2">
                      <p className="text-[10px] text-slate-400">Humidity</p>

                      <p className="text-cyan-400 font-bold text-sm mt-1">
                        {item.main.humidity}%
                      </p>
                    </div>

                    {/* Feels Like */}
                    <div className="bg-slate-800/70 rounded-lg p-2">
                      <p className="text-[10px] text-slate-400">Feels Like</p>

                      <p className="text-orange-400 font-bold text-sm mt-1">
                        {Math.round(item.main.feels_like)}°
                      </p>
                    </div>
                  </div>

                  {/* Wind */}
                  <div
                    className="
                      bg-slate-800/70
                      rounded-lg
                      p-2
                      mt-2
                      flex
                      justify-between
                    "
                  >
                    <span className="text-xs text-slate-400">Wind</span>

                    <span className="text-white font-semibold text-xs">
                      💨 {item.wind.speed} m/s
                    </span>
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

"use client";

import { CurrentWeather } from "@/src/types/weather/weather";

type WeatherHighlightsProps = {
  weatherData: CurrentWeather | null;
};

// ----------------------------------
// Format Unix timestamp to local time
// ----------------------------------

function formatTime(timestamp: number, timezone: number) {
  const localTime = new Date(
    (timestamp + timezone) * 1000
  );

  return localTime.toISOString().slice(11, 16);
}

// ----------------------------------
// Weather Highlights Component
// ----------------------------------

export default function WeatherHighlights({
  weatherData,
}: WeatherHighlightsProps) {

  // Don't render cards until API data is available
  if (!weatherData) {
    return null;
  }

  const highlights = [
    {
      title: "Sunrise",
      value: formatTime(
        weatherData.sys.sunrise,
        weatherData.timezone
      ),
      icon: "🌅",
    },

    {
      title: "Sunset",
      value: formatTime(
        weatherData.sys.sunset,
        weatherData.timezone
      ),
      icon: "🌇",
    },

    {
      title: "Humidity",
      value: `${weatherData.main.humidity}%`,
      icon: "💧",
    },

    {
      title: "Wind Speed",
      value: `${(weatherData.wind.speed * 3.6).toFixed(1)} km/h`,
      icon: "🌬️",
    },

    {
      title: "Pressure",
      value: `${weatherData.main.pressure} hPa`,
      icon: "📈",
    },

    {
      title: "Clouds",
      value: `${weatherData.clouds.all}%`,
      icon: "☁️",
    },
  ];

  return (
    <section className="bg-[#0e152f] py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-white">
            Weather Highlights
          </h2>

          <p className="text-slate-400 mt-3">
            Important weather information at a glance.
          </p>

          <p className="text-blue-400 mt-2 text-sm">
            📍 {weatherData.name}
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {highlights.map((item) => (

            <div
              key={item.title}
              className="
                bg-gradient-to-b
                from-slate-800
                to-slate-950
                border
                border-slate-700
                rounded-2xl
                p-6
                text-white
                hover:border-blue-500
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-lg
              "
            >

              {/* Icon */}

              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-slate-700/50
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-5
                "
              >
                {item.icon}
              </div>

              {/* Title */}

              <p className="text-slate-400 text-sm">
                {item.title}
              </p>

              {/* Value */}

              <h3 className="text-3xl font-bold text-white mt-2">
                {item.value}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
"use client";

import { AirData } from "@/src/types/weather/AirData";

type AirQualityProps = {
  airData: AirData | null;
  
};

export default function AirQuality({airData}:AirQualityProps) {

   if (!airData) {
    return null;
  }

  const airQuality = {
    aqi: airData.list[0].main.aqi,
    status: "Good",
    pm25: airData.list[0].components.pm2_5,
    pm10: airData.list[0].components.pm10,
    co: airData.list[0].components.co,
    no2: airData.list[0].components.no2,
    o3: airData.list[0].components.o3,
    so2: airData.list[0].components.so2,
  };

  const pollutants = [
    {
      name: "PM2.5",
      value: airQuality.pm25,
      max: 100,
    },
    {
      name: "PM10",
      value: airQuality.pm10,
      max: 100,
    },
    {
      name: "CO",
      value: airQuality.co,
      max: 100,
    },
    {
      name: "NO₂",
      value: airQuality.no2,
      max: 100,
    },
    {
      name: "O₃",
      value: airQuality.o3,
      max: 100,
    },
    {
      name: "SO₂",
      value: airQuality.so2,
      max: 100,
    },
  ];

  const getStatusColor = (value: number) => {
    if (value <= 50) {
      return "text-green-400";
    }

    if (value <= 100) {
      return "text-yellow-400";
    }

    return "text-red-400";
  };

  return (
    <section className="bg-[#0e152f] text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-10">

          <div className="flex items-center gap-3">

            <h2 className="text-4xl font-bold">
              Air Quality
            </h2>

            {/* Live indicator */}

            <span className="relative flex h-3 w-3">

              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-emerald-400
                  opacity-60
                  animate-ping
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-3
                  w-3
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-400
                  to-cyan-400
                "
              />

            </span>

          </div>

          <p className="text-slate-400 mt-2">
            Real-time air pollution levels and atmospheric conditions.
          </p>

        </div>


        {/* Main Layout */}

        <div className="grid lg:grid-cols-3 gap-6">


          {/* ================= AQI CARD ================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-emerald-500/30
              bg-gradient-to-br
              from-slate-900
              via-slate-950
              to-emerald-950/30
              p-8
              min-h-[500px]
              flex
              flex-col
              items-center
              justify-center
              shadow-2xl
              shadow-emerald-500/5
              hover:border-emerald-400/50
              transition-all
              duration-500
            "
          >

            {/* Background glow */}

            <div
              className="
                absolute
                -top-24
                -right-24
                w-64
                h-64
                bg-emerald-500/10
                blur-3xl
                rounded-full
              "
            />

            <div
              className="
                absolute
                -bottom-24
                -left-24
                w-64
                h-64
                bg-cyan-500/10
                blur-3xl
                rounded-full
              "
            />


            {/* Card Header */}

            <div className="absolute top-8 left-8 right-8 flex justify-between">

              <p className="text-xs tracking-[0.25em] text-slate-500 uppercase">
                Air Quality Index
              </p>

              <span className="text-xs text-slate-500">
                AQI
              </span>

            </div>


            {/* AQI Circle */}

            <div
              className="
                relative
                w-48
                h-48
                rounded-full
                p-[7px]
                bg-gradient-to-br
                from-emerald-400
                via-cyan-400
                to-emerald-600
                shadow-[0_0_45px_rgba(16,185,129,0.15)]
              "
            >

              <div
                className="
                  w-full
                  h-full
                  rounded-full
                  bg-[#070d20]
                  border
                  border-emerald-400/30
                  flex
                  items-center
                  justify-center
                "
              >

                <div className="text-center">

                  <h3
                    className="
                      text-6xl
                      font-bold
                      bg-gradient-to-r
                      from-emerald-400
                      to-cyan-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {airQuality.aqi}
                  </h3>

                  <p className="text-emerald-400 font-semibold mt-1">
                    {airQuality.status}
                  </p>

                </div>

              </div>

            </div>


            {/* Status */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                border
                border-emerald-400/30
                bg-gradient-to-r
                from-emerald-500/10
                to-cyan-500/10
                text-slate-300
                text-sm
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-400
                  to-cyan-400
                  shadow-[0_0_10px_rgba(52,211,153,0.8)]
                "
              />

              Air quality is ideal.

            </div>

          </div>


          {/* ================= POLLUTANTS ================= */}

          <div
            className="
              lg:col-span-2
              rounded-3xl
              border
              border-slate-700/80
              bg-gradient-to-br
              from-slate-900
              via-slate-950
              to-blue-950/20
              p-8
              shadow-2xl
              shadow-blue-500/5
            "
          >

            {/* Header */}

            <div className="flex justify-between items-start mb-8">

              <div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    bg-gradient-to-r
                    from-white
                    via-blue-100
                    to-cyan-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  Pollutant Levels
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  Concentration of major air pollutants
                </p>

              </div>

              <span className="text-xs text-slate-500">
                μg/m³
              </span>

            </div>


            {/* Pollutants Grid */}

            <div className="grid md:grid-cols-2 gap-5">

              {pollutants.map((pollutant) => {

                const percentage = Math.min(
                  (pollutant.value / pollutant.max) * 100,
                  100
                );

                return (

                  <div
                    key={pollutant.name}
                    className="
                      group
                      rounded-2xl
                      border
                      border-slate-800
                      bg-gradient-to-br
                      from-slate-950
                      to-slate-900
                      p-5
                      hover:border-cyan-500/30
                      hover:-translate-y-0.5
                      transition-all
                      duration-300
                    "
                  >

                    {/* Name + Unit */}

                    <div className="flex justify-between items-center">

                      <span className="text-sm text-slate-300">
                        {pollutant.name}
                      </span>

                      <span className="text-[11px] text-slate-600">
                        μg/m³
                      </span>

                    </div>


                    {/* Value */}

                    <div className="flex justify-between items-end mt-4">

                      <span
                        className={`
                          text-2xl
                          font-bold
                          ${getStatusColor(pollutant.value)}
                        `}
                      >
                        {pollutant.value}
                      </span>

                      <span className="text-xs text-slate-500">
                        level
                      </span>

                    </div>


                    {/* Progress */}

                    <div className="mt-5">

                      <div
                        className="
                          w-full
                          h-1.5
                          rounded-full
                          bg-slate-800
                          overflow-hidden
                        "
                      >

                        <div
                          className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-blue-500
                            via-cyan-400
                            to-emerald-400
                            shadow-[0_0_10px_rgba(34,211,238,0.35)]
                            transition-all
                            duration-700
                          "
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
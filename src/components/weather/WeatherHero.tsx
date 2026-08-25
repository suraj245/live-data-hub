export default function WeatherHero() {
  return (
    <section className="bg-[#0e152f] text-white py-16 md:py-4">

      <div className="max-w-9xl mx-auto px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-blue-500/20
            bg-gradient-to-br
            from-blue-950
            via-slate-900
            to-[#07111f]
            px-8
            py-14
            md:px-14
            md:py-20
            shadow-2xl
            shadow-blue-950/30
          "
        >

          {/* Background Glow */}

          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

          {/* Decorative Weather Icons */}

          <div className="absolute top-10 right-12 text-7xl opacity-10">
            ☁️
          </div>

          <div className="absolute bottom-8 right-40 text-5xl opacity-10">
            🌧️
          </div>

          <div className="absolute top-20 right-52 text-4xl opacity-10">
            ✨
          </div>


          {/* Content */}

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              {/* Badge */}

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-500/10
                  border
                  border-blue-400/20
                  text-blue-300
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                <span className="animate-pulse">
                  ●
                </span>

                Live Weather Updates
              </span>


              {/* Heading */}

              <h1
                className="
                  text-4xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  leading-tight
                  mt-7
                "
              >
                Track Weather
                <span className="block text-blue-400 mt-2">
                  Before Getting Stuck.
                </span>
              </h1>


              {/* Description */}

              <p
                className="
                  text-slate-400
                  text-base
                  md:text-lg
                  leading-relaxed
                  mt-6
                  max-w-xl
                "
              >
                Stay updated with real-time weather conditions,
                forecasts, air quality and important weather
                insights wherever you are.
              </p>


              {/* Buttons */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  mt-9
                "
              >

                <button
                  className="
                    group
                    bg-blue-600
                    hover:bg-blue-500
                    px-7
                    py-4
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:shadow-blue-600/30
                  "
                >
                  Explore Weather

                  <span className="ml-2 group-hover:translate-x-1 inline-block transition">
                    →
                  </span>
                </button>


                <button
                  className="
                    bg-white/5
                    border
                    border-slate-600
                    hover:bg-white/10
                    hover:border-slate-500
                    px-7
                    py-4
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Get Updates
                </button>

              </div>

            </div>


            {/* Right Visual */}

            <div className="relative flex justify-center">

              <div
                className="
                  relative
                  w-64
                  h-64
                  md:w-80
                  md:h-80
                  rounded-full
                  bg-gradient-to-br
                  from-blue-500/20
                  via-cyan-400/10
                  to-transparent
                  border
                  border-blue-400/20
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                  shadow-blue-500/10
                "
              >

                {/* Outer Glow */}

                <div className="absolute inset-5 rounded-full border border-blue-400/10" />

                {/* Weather Icon */}

                <div className="text-8xl md:text-9xl">
                  🌤️
                </div>


                {/* Floating Temperature */}

                <div
                  className="
                    absolute
                    -top-3
                    right-4
                    bg-slate-900/90
                    backdrop-blur-md
                    border
                    border-slate-700
                    rounded-2xl
                    px-5
                    py-3
                    shadow-xl
                  "
                >
                  <p className="text-xs text-slate-400">
                    Weather
                  </p>

                  <p className="text-2xl font-bold text-white">
                    Live
                  </p>
                </div>


                {/* Floating Status */}

                <div
                  className="
                    absolute
                    bottom-4
                    -left-4
                    bg-slate-900/90
                    backdrop-blur-md
                    border
                    border-slate-700
                    rounded-2xl
                    px-5
                    py-3
                    shadow-xl
                  "
                >
                  <div className="flex items-center gap-2">

                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

                    <span className="text-sm text-slate-300">
                      Live Data
                    </span>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
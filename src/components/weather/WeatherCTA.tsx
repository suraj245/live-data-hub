export default function WeatherCTA() {
  return (
    <section className="bg-[#0e152f] text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

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
            p-10
            md:p-16
            shadow-2xl
            shadow-blue-950/30
          "
        >

          {/* Background Glow */}

          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="absolute top-10 right-16 text-6xl opacity-10">
            ☁️
          </div>

          <div className="absolute bottom-8 left-16 text-5xl opacity-10">
            🌤️
          </div>


          {/* Content */}

          <div className="relative z-10 text-center max-w-3xl mx-auto">

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
                shadow-lg
                shadow-blue-500/5
              "
            >
              <span className="animate-pulse">
                ●
              </span>

              Stay Weather Ready
            </span>


            {/* Heading */}

            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                mt-7
              "
            >
              Know the Weather.
              <span className="block text-blue-400 mt-2">
                Plan Better.
              </span>
            </h2>


            {/* Description */}

            <p
              className="
                text-slate-300
                mt-6
                text-base
                md:text-lg
                leading-relaxed
                max-w-2xl
                mx-auto
              "
            >
              Get real-time weather information, forecasts,
              air quality and important weather insights
              wherever you are.
            </p>


            {/* Buttons */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-4
                mt-9
              "
            >

              <button
                className="
                  group
                  bg-blue-600
                  hover:bg-blue-500
                  px-8
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
                Check Weather

                <span className="ml-2 group-hover:translate-x-1 inline-block transition">
                  →
                </span>
              </button>


              <button
                className="
                  border
                  border-slate-600
                  bg-white/5
                  hover:bg-white/10
                  hover:border-slate-500
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Explore Forecast
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
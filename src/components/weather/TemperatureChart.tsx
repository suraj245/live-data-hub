"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { Forecast } from "@/src/types/weather/forecast";

type TemperatureChartProps = {
  forecastData: Forecast | null;
};

export default function TemperatureChart({
  forecastData,
}: TemperatureChartProps) {

  // Get first 8 forecast points
  const chartData =
    forecastData?.list.slice(0, 8).map((item) => ({
      time: new Date(item.dt_txt).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),

      temperature: Math.round(item.main.temp),

      humidity: item.main.humidity,
    })) ?? [];

  return (
    <section className="bg-[#0e152f] py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10">

          <h2 className="text-4xl font-bold text-white">
            Temperature Trends
          </h2>

          <p className="text-slate-400 mt-2">
            See how temperature and humidity change throughout the forecast.
          </p>

        </div>


        {/* Chart Container */}
        <div
          className="
            bg-gradient-to-br
            from-slate-900
            to-slate-950
            border
            border-slate-700
            rounded-3xl
            p-6
            md:p-8
          "
        >

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mb-6">

            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-blue-500" />

              <span className="text-sm text-slate-300">
                Temperature
              </span>

            </div>


            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-cyan-400" />

              <span className="text-sm text-slate-300">
                Humidity
              </span>

            </div>

          </div>


          {/* Chart */}
          <div className="w-full h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 5,
                }}
              >

                <CartesianGrid
                  stroke="#1e293b"
                  strokeDasharray="4 4"
                  vertical={false}
                />


                <XAxis
                  dataKey="time"
                  stroke="#64748b"
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 12,
                  }}
                  tickLine={false}
                  axisLine={false}
                />


                <YAxis
                  stroke="#64748b"
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 12,
                  }}
                  tickLine={false}
                  axisLine={false}
                />


                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  labelStyle={{
                    color: "#94a3b8",
                    marginBottom: "6px",
                  }}
                />


                {/* Temperature */}
                <Line
                  type="monotone"
                  dataKey="temperature"
                  name="Temperature"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#3b82f6",
                  }}
                  activeDot={{
                    r: 7,
                  }}
                  animationDuration={1000}
                />


                {/* Humidity */}
                <Line
                  type="monotone"
                  dataKey="humidity"
                  name="Humidity"
                  stroke="#22d3ee"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  dot={{
                    r: 3,
                    fill: "#22d3ee",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                  animationDuration={1200}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>
  );
}
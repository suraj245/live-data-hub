"use client";

import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";

import WeatherHero from "@/src/components/weather/WeatherHero";
import WeatherSearch from "@/src/components/weather/WeatherSearch";
import WeatherHighlights from "@/src/components/weather/WeatherHighlights";
import HourlyForecast from "@/src/components/weather/HourlyForecast";
import WeeklyForecast from "@/src/components/weather/WeeklyForecast";
import TemperatureChart from "@/src/components/weather/TemperatureChart";
import AirQuality from "@/src/components/weather/AirQuality";
import WeatherGallery from "@/src/components/weather/WeatherGallery";
import WeatherFAQ from "@/src/components/weather/WeatherFAQ";
import WeatherCTA from "@/src/components/weather/WeatherCTA";

import { AirData } from "@/src/types/weather/AirData";
import { Forecast } from "@/src/types/weather/forecast";
import { GeoLocation } from "@/src/types/weather/GeoLocation";
import { CurrentWeather } from "@/src/types/weather/weather";

export default function WeatherPage() {

  const apiKey =
    process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  // -----------------------------
  // STATES
  // -----------------------------

  const [weatherData, setWeatherData] =
    useState<CurrentWeather | null>(null);

  const [forecastData, setForecastData] =
    useState<Forecast | null>(null);

  const [geoData, setGeoData] =
    useState<GeoLocation[] | null>(null);

  const [airData, setAirData] =
    useState<AirData | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [searchedCity, setSearchedCity] =
    useState("Ballari");

  // -----------------------------
  // FETCH WEATHER
  // -----------------------------

  async function fetchWeatherData(city: string) {

    if (!apiKey) {
      setError("Weather API key is missing.");
      return;
    }

    setLoading(true);
    setError("");

    try {

      // -----------------------------
      // 1. CURRENT WEATHER
      // -----------------------------

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&units=metric&appid=${apiKey}`
      );

      if (!weatherResponse.ok) {

        if (weatherResponse.status === 404) {
          throw new Error(
            `City "${city}" not found. Please try another city.`
          );
        }

        throw new Error(
          "Unable to fetch weather data."
        );
      }

      const weather: CurrentWeather =
        await weatherResponse.json();

      // -----------------------------
      // 2. FORECAST
      // -----------------------------

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          city
        )}&units=metric&appid=${apiKey}`
      );

      if (!forecastResponse.ok) {
        throw new Error(
          "Unable to fetch forecast data."
        );
      }

      const forecast: Forecast =
        await forecastResponse.json();

      // -----------------------------
      // 3. GEOLOCATION
      // -----------------------------

      const geoResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          city
        )}&limit=5&appid=${apiKey}`
      );

      const geo: GeoLocation[] =
        await geoResponse.json();

      // -----------------------------
      // 4. AIR QUALITY
      // -----------------------------

      const airResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${apiKey}`
      );

      const air: AirData =
        await airResponse.json();

      // -----------------------------
      // UPDATE STATES
      // -----------------------------

      setWeatherData(weather);
      setForecastData(forecast);
      setGeoData(geo);
      setAirData(air);

      setSearchedCity(weather.name);

      // -----------------------------
      // SCROLL TO FORECAST
      // -----------------------------

      // setTimeout(() => {

      //   document
      //     .getElementById("forecast")
      //     ?.scrollIntoView({
      //       behavior: "smooth",
      //       block: "start",
      //     });

      // }, 100);

    } catch (error) {

      console.error(error);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(
          "Something went wrong while fetching weather data."
        );
      }

    } finally {

      setLoading(false);

    }
  }

const handleSearch = async (city: string) => {
  await fetchWeatherData(city);

  setTimeout(() => {
    document
      .getElementById("forecast")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 100);
};

  // -----------------------------
  // INITIAL API CALL
  // -----------------------------

useEffect(() => {
  const loadInitialWeather = async () => {
    await fetchWeatherData("ballari");
  };

  loadInitialWeather();
}, []);


  // -----------------------------
  // PAGE
  // -----------------------------

  return (
    <div>

      <Navbar />

      <section className="bg-[#0e152f]">

        <WeatherHero />

        <WeatherSearch
          onSearch={handleSearch}
          loading={loading}
          error={error}
          searchedCity={searchedCity}
        />

        <WeatherHighlights weatherData={weatherData} />

        <HourlyForecast forecastData={forecastData} />

        <WeeklyForecast
          forecastData={forecastData}
        />

        <TemperatureChart forecastData={forecastData}/>

        <AirQuality airData={airData}/>

        <WeatherGallery />

        <WeatherFAQ />

        <WeatherCTA />

      </section>

      <Footer />

    </div>
  );
}
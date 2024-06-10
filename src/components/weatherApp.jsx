import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    //fetch data at initial load
    const fetchCurrentLocationWeather = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json",
          {
            params: {
              q: `${latitude},${longitude}`,
              key: apiKey,
            },
          }
        );
        setWeatherData(response.data);
      } catch (err) {
        setError("Could not fetch weather data for the current location.");
      }
    };

    //get location permission from user at initial load 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchCurrentLocationWeather(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        () => {
          setError(
            "Geolocation is not supported by this browser or permission denied."
          );
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSearch = async () => {
    if (!location) return;

    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json",
        {
          params: {
            q: location,
            key: apiKey,
          },
        }
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("Invalid location. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold  dark:text-white">
          {weatherData ? weatherData.location.name : "Weather App"}
        </h1>
        <p className="text-sm  dark:text-white">
          {weatherData ? weatherData.location.localtime : ""}
        </p>
      </div>
      <div className="border-b-2 border-gray-300 mb-4"></div>
      <div className="flex mb-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name or zip code"
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 mb-4  dark:text-white">{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default WeatherApp;

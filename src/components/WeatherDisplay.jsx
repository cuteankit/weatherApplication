import React, { useState } from "react";

function WeatherDisplay({ weatherData }) {
  const { current, location } = weatherData;
  const { temp_c, humidity, wind_kph, condition, uv } = current;

  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-2">
        <img src={condition.icon} alt="Logo" className="w-12 h-12" />
        <h1 className="text-5xl font-bold  dark:text-white">
          {temp_c}
          {"\u00B0"}
          <span className="align-bottom text-xl  dark:text-white">C</span>
        </h1>
      </div>
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
          <p className="text-sm text-gray-600  dark:text-white">Condition</p>
          <h1 className="text-md font-semibold  dark:text-white">
            {condition.text}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
          <p className="text-sm text-gray-600  dark:text-white">Humidity</p>
          <h1 className="text-md font-semibold  dark:text-white">
            {humidity}%
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
          <p className="text-sm text-gray-600  dark:text-white">Wind Speed</p>
          <h1 className="text-md font-semibold  dark:text-white">
            {wind_kph} Km/h
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
          <p className="text-sm text-gray-600  dark:text-white">UV Index</p>
          <h1 className="text-md font-semibold  dark:text-white">{uv}</h1>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;

import React from "react";
import Weather from "./Weather";
import CityHeader from "./CityHeader";
import CurrentWeather from "./CurrentWeather";

/**
 * Functional component which uses three reusable components to display the
 * weather forecast
 *
 * @param {Object} props
 */
export default function WeatherForecast(props) {
  // Object destructuring of forecastInfo
  let { city, cities, currentForecast, forecasts } = props.forecastInfo;
  return (
    <div className="weather-forecast">
      {/* CITY HEADER */}
      <CityHeader
        city={city}
        cities={cities}
        handleSelect={props.handleSelect}
      />
      {/* TODAY'S WEATHER FOR THE CITY */}
      <CurrentWeather currentForecast={currentForecast} />

      {/* WEATHER CARDS BASED ON THE NUMBER OF FORECAST AVAIALBLE FROM DB */}
      <div className="forecasts">
        {forecasts.map((forecast, index) => (
          <Weather key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
}

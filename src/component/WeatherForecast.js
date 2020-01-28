import React from "react";
import Weather from "./Weather";
import CityHeader from "./CityHeader";
import CurrentWeather from "./CurrentWeather";

class WeatherForecast extends React.Component {
  render() {
    let { city, cities, currentForecast, forecasts } = this.props.forecastInfo;
    return (
      <div className="weather-forecast">
        <CityHeader
          city={city}
          cities={cities}
          handleSelect={this.props.handleSelect}
        />

        <CurrentWeather currentForecast={currentForecast} />
        <div className="forecasts">
          {forecasts.map((forecast, index) => (
            <Weather key={index} forecast={forecast} />
          ))}
        </div>
      </div>
    );
  }
}

export default WeatherForecast;

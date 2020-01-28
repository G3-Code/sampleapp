import React from "react";
import Weather from "./Weather";
import "../App.css";
import Sunny from "../assets/partlysunny.png";

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let imgMessage = "Sunny";
    if (this.props.forecastInfo.currentForecast.message) {
      imgMessage = this.props.forecastInfo.currentForecast.message;
    }
    return (
      <div className="weather-forecast">
        <div className="city-header">
          <p>{this.props.forecastInfo.city}</p>
          <select
            ref="citySelector"
            onChange={() =>
              this.props.handleSelect(this.refs.citySelector.value)
            }
          >
            {this.props.forecastInfo.cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="city-latest-forecast">
          <img
            src={require("../assets/" + imgMessage + ".png")}
            alt="Sunny Day"
            className="img-weather-title"
          />
          <div className="current-temp">
            {this.props.forecastInfo.currentForecast.high}&deg;
          </div>
          <h4> {this.props.forecastInfo.currentForecast.message}</h4>
        </div>
        <div className="forecasts">
          {this.props.forecastInfo.forecasts.map((forecast, index) => (
            <Weather key={index} forecast={forecast} />
          ))}
        </div>
      </div>
    );
  }
}

export default WeatherForecast;

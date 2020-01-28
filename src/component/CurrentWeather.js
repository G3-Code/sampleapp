import React from "react";

export default function CurrentWeather(props) {
  let { high, message } = props.currentForecast;
  let imgMessage = "Sunny";
  if (message) {
    imgMessage = message;
  }
  return (
    <div className="city-latest-forecast">
      <img
        src={require("../assets/" + imgMessage + ".png")}
        alt="Sunny Day"
        className="img-weather-title"
      />
      <div className="current-temp">{high}&deg;</div>
      <h4> {message}</h4>
    </div>
  );
}

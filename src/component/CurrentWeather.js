import React from "react";

/**
 * Displays the current weather information
 *
 * This is a reusable component.
 *
 * @param {Object} props
 */
export default function CurrentWeather(props) {
  // Object destructuring of currentForecast from props
  let { high, message } = props.currentForecast;

  // This is for image rendering. Renders the image
  // curresponding to the name of the "message"
  let imgMessage = "Sunny";
  if (message) {
    imgMessage = message;
  }

  return (
    <div className="city-latest-forecast">
      {/* IMAGE */}
      <img
        src={require("../assets/" + imgMessage + ".png")}
        alt="Sunny Day"
        className="img-weather-title"
      />
      {/* CURRENT TEMPERATURE (used highest for the exercise) */}
      <div className="current-temp">{high}&deg;</div>

      {/* WEATHER DESCRIPTION */}
      <h4> {message}</h4>
    </div>
  );
}

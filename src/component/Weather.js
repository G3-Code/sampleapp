import React from "react";

/**
 * This is the weather card for each day.
 *
 * This is a reusable component
 *
 * @param {Object} props
 */
export default function Weather(props) {
  // Object destructuring of forecast from props
  let { id, day, message, high, low } = props.forecast;

  return (
    <div className="forecast-card" key={id}>
      {/* DAY */}
      <p>{day}</p>

      {/* IMAGE ON CARD AS PER MESSAGE */}
      <img
        src={require("../assets/" + message + ".png")}
        alt="Sunny day"
        className="img-weather"
      />

      {/* TEMPERATURES - HIGH AND LOW FOR THE DAY */}
      <div>
        <p>{high}&deg;</p>
        <p>{low}&deg;</p>
      </div>
    </div>
  );
}

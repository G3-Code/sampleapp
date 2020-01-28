import React from "react";

export default function Weather(props) {
  let { id, day, message, high, low } = props.forecast;
  return (
    <div className="forecast-card" key={id}>
      <p>{day}</p>
      <img
        src={require("../assets/" + message + ".png")}
        alt="Sunny day"
        className="img-weather"
      />
      <div>
        <p>{high}&deg;</p>
        <p>{low}&deg;</p>
      </div>
    </div>
  );
}

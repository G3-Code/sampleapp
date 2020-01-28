import React from "react";
import "../App.css";
// import Sunny from "../assets/sunny.png";
// import Cloudy from "../assets/cloudy.jpg";
// import Rainny from "../assets/rainny.png";
// import Snowy from "../assets/snowy.jpeg";

export default function Weather(props) {
  return (
    <div className="forecast-card" key={props.forecast.id}>
      <p>{props.forecast.day}</p>
      <img
        src={require("../assets/" + props.forecast.message + ".png")}
        alt="Sunny day"
        className="img-weather"
      />
      <div>
        <p>{props.forecast.high}&deg;</p>
        <p>{props.forecast.low}&deg;</p>
      </div>
    </div>
  );
}

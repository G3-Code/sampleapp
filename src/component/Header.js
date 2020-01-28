import React from "react";
import Logo from "../assets/weather-2-icon.png";

/**
 * Header containing the logo and title
 *
 * @param {Object} props
 */
export default function Header(props) {
  return (
    <nav>
      <img className="img-weather logo-header" src={Logo} alt="weather app" />
      <h1>{props.name}Weather App</h1>
    </nav>
  );
}

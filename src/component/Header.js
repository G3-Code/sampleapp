import React from "react";
import Logo from "../assets/weather-2-icon.png";
import PropTypes from "prop-types";

/**
 * Header containing the logo and title
 *
 * @param {Object} props
 */
export default function Header(props) {
  const { name } = props;
  return (
    <nav>
      <img className="img-weather logo-header" src={Logo} alt="weather app" />
      <h1>{name}Weather App</h1>
    </nav>
  );
}

Header.propTypes = {
  name: PropTypes.string
};

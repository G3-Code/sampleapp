import React from "react";
import PropTypes from "prop-types";

/**
 * The header information in the forecast containing the city name and dropdown with cities.
 *
 * This is a reusable component.
 *
 * Note: Select handler looks to the default implementation in the parent currently. However,
 * if need be it can also be implemented in the child class.
 */
export default class CityHeader extends React.Component {
  // Render function
  render() {
    // props object destructuring
    let { city, cities, handleSelect } = this.props;

    return (
      <div className="city-header">
        {/* DISPLAYS THE CITY INFO TO LEFT */}
        <p>{city}</p>

        {/* DISPLAYS THE DROPDOWN TO THE RIGHT */}
        <select
          ref="citySelector"
          onChange={() => handleSelect(this.refs.citySelector.value)}
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

CityHeader.propTypes = {
  city: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.string)
};

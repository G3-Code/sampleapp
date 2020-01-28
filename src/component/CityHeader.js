import React from "react";

export default class CityHeader extends React.Component {
  render() {
    let { city, cities, handleSelect } = this.props;
    return (
      <div className="city-header">
        <p>{city}</p>
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

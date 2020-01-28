import React from "react";
import { getForecast, getCities } from "../actions";
import { connect } from "react-redux";
import "../styles/App.css";
import { Route } from "react-router-dom";
import WeatherForecast from "./WeatherForecast";
import Header from "./Header";

/**
 * App handles the over all app's routing and loading info on the start
 */
class App extends React.Component {
  /**
   * Loads the forecast and distinct city information.
   * By default the city is "Chennai"
   */
  async componentDidMount() {
    await this.props.getForecast(this.props.city);
    await this.props.getCities();
  }

  /**
   * Select handler. When uses chooses a city from the dropdown it retrieves the
   * latest forecast for that city.
   */
  handleSelect = city => {
    this.setState({
      ...this.state,
      city: city
    });
    this.props.getForecast(city);
  };

  /**
   * App's render function.
   *
   * Displays app title and holds the default routing info for viewing forecast
   */
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* HEADER INFO */}
          <Header name="Gayathri's " />

          {/* FORECAST SECTION */}
          <section className="weather-section">
            <Route
              exact
              path="/"
              render={props => (
                <WeatherForecast
                  {...props}
                  forecastInfo={this.props}
                  handleSelect={this.handleSelect}
                />
              )}
            />
          </section>
        </div>
      </div>
    );
  }
}

/**
 * This function maps the state values to be used as props in render function.
 * This function is provided by redux.
 *
 * @param {Object} state
 */
const mapStateToProps = state => {
  return {
    ...state,
    forecasts: state.forecasts,
    error: state.error,
    city: state.city,
    currentForecast: state.currentForecast,
    cities: state.cities
  };
};

export default connect(mapStateToProps, { getForecast, getCities })(App);

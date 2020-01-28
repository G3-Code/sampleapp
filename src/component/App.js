import React from "react";
import { getForecast, getCities } from "../actions";
import { connect } from "react-redux";
import "../App.css";
import { Route } from "react-router-dom";
import WeatherForecast from "./WeatherForecast";

class App extends React.Component {
  async componentDidMount() {
    await this.props.getForecast(this.props.city);
    await this.props.getCities();
  }
  handleSelect = city => {
    this.setState({
      ...this.state,
      city: city
    });
    this.props.getForecast(city);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav>
            <h1>Weather App</h1>
          </nav>
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

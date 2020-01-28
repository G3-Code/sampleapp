import axios from "axios";

export const GET_FORECAST_SUCCESS = "GET_FORECAST_SUCCESS";
export const GET_FORECAST_FAIL = "GET_FORECAST_FAIL";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_FAIL = "GET_CITIES_FAIL";

// This is the REST API url hosted in Heroku

const APIURL = "https://weather-app-be.herokuapp.com/";

/**
 * This is the action creator to get the forecast for a particular city.
 *
 * GET_FORECAST_SUCCESS -> On successful retrieval of forecast info for a city
 * GET_FORECAST_FAIL -> When error is encountered retrieving info from API
 *
 * @param {String} city
 */
export const getForecast = city => {
  return async dispatch => {
    try {
      const data = await axios
        .get(`${APIURL}forecast/${city}`)
        .then(res => res.data);
      dispatch({
        type: "GET_FORECAST_SUCCESS",
        payload: data
      });
    } catch (err) {
      dispatch({
        type: "GET_FORECAST_FAIL",
        payload: err
      });
    }
  };
};

/**
 * This is the action creator to get all the distinct cities for which the
 * weather forecast is available.
 *
 * GET_CITIES_SUCCESS -> On success when cities are retrieved
 * GET_CITIES_FAIL -> When error is encountered retrieving info from API
 */
export const getCities = () => {
  return async dispatch => {
    try {
      const data = await axios.get(`${APIURL}cities`).then(res => res.data);
      dispatch({
        type: "GET_CITIES_SUCCESS",
        payload: data
      });
    } catch (err) {
      dispatch({
        type: "GET_CITIES_FAIL",
        payload: err
      });
    }
  };
};

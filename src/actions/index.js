import axios from "axios";

export const GET_FORECAST_SUCCESS = "GET_FORECAST_SUCCESS";
export const GET_FORECAST_FAIL = "GET_FORECAST_FAIL";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_FAIL = "GET_CITIES_FAIL";

const APIURL = "https://weather-app-be.herokuapp.com/";

export const getForecast = city => {
  return async dispatch => {
    try {
      const data = await axios
        .get(`${APIURL}forecast/${city}`)
        .then(res => res.data);
      console.log("====>>========" + data.currentForecast.message);
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

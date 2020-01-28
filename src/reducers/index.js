import {
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAIL,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL
} from "../actions";

const initialState = {
  forecasts: [],
  city: "Chennai",
  error: "",
  message: "",
  currentForecast: "",
  cities: []
};

export default function forecastReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST_SUCCESS: {
      return {
        ...state,
        forecasts: action.payload.forecasts,
        currentForecast: action.payload.currentForecast,
        city: action.payload.city
      };
    }

    case GET_FORECAST_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case GET_CITIES_SUCCESS: {
      return {
        ...state,
        cities: action.payload
      };
    }

    case GET_CITIES_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

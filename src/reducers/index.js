import {
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAIL,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL
} from "../actions";

// Initial state - Uses 'Chennai' as default city
const initialState = {
  forecasts: [],
  city: "Chennai",
  error: "",
  message: "",
  currentForecast: "",
  cities: []
};

/**
 *
 * Reducer for the forecast. This is where the state is updated from the payload
 * passed in the action.
 *
 * @param {Object} state
 * @param {Object} action
 */
export default function forecastReducer(state = initialState, action) {
  switch (action.type) {
    // Forecase success
    case GET_FORECAST_SUCCESS: {
      return {
        ...state,
        forecasts: action.payload.forecasts,
        currentForecast: action.payload.currentForecast,
        city: action.payload.city
      };
    }
    // Failed forecast
    case GET_FORECAST_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    // Getting distinct city information success
    case GET_CITIES_SUCCESS: {
      return {
        ...state,
        cities: action.payload
      };
    }

    // Failed to get the cities information
    case GET_CITIES_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    // Default case - current state returned if no action type available
    default: {
      return state;
    }
  }
}

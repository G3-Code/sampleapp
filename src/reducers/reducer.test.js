import {
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAIL,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL
} from "../actions";
import reducer from "./index";

describe("TS1: Testing the reducers", () => {
  it("TC1: It should return a default state", () => {
    const initialState = {
      forecasts: [],
      city: "Chennai",
      error: "",
      message: "",
      currentForecast: "",
      cities: []
    };
    const newState = reducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it("TC2: Should return a new state for Forecast Success", () => {
    const payload = {
      forecasts: [
        {
          city: "Chennai",
          high: 71,
          low: 65,
          message: "Sunny",
          id: 1
        },
        {
          city: "Chennai",
          high: 71,
          low: 65,
          message: "Sunny",
          id: 2
        }
      ],
      currentForecast: {
        city: "Chennai",
        high: 71,
        low: 65,
        message: "Sunny",
        id: 1
      },
      city: "Chennai"
    };
    const newState = reducer(undefined, {
      type: "GET_FORECAST_SUCCESS",
      payload
    });
    expect(newState.forecasts.length).toBe(2);
    expect(newState.currentForecast.message).toEqual("Sunny");
  });
});

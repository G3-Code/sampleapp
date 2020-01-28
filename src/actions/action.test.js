import moxios from "moxios";
import { testStore } from "../utils";
import { getForecast } from "../actions";

describe("TS1: Testing get Forecast action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it("TC1: Store updated correctly", () => {
    const expectedState = {
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

    const store = testStore();
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });

      return store.dispatch(getForecast()).then(() => {
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState);
      });
    });
  });
});

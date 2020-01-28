import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

/**
 * Utility for testing components.
 *
 *
 * @param {Object} component
 * @param {String} attr
 */
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware([thunk, logger])(
    createStore
  );
  return createStoreWithMiddleware;
};

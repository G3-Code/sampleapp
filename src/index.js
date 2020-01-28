import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./component/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import forecastReducers from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(forecastReducers, applyMiddleware(logger, thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

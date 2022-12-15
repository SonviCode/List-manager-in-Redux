import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer from "./Pages/Reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./style/settings.css";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
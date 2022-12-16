import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer from "./Redux/Reducers/index";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "./style/settings.css";
import { save, load } from "redux-localstorage-simple";
import logMiddleware from "./Redux/Middlewares/logMiddleware";

const createStoreWithMiddleware = applyMiddleware(
  save({
    states: ["reducerDragon.dragon", "reducerKnight.knight"],
  }), (logMiddleware)
)(createStore);

const store = createStoreWithMiddleware(
  reducer,
  load({
    states: ["reducerDragon.dragon", "reducerKnight.knight"],
  }) // Loading done here
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

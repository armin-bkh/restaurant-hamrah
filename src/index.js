import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./scss/main.scss";
import App from "./App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

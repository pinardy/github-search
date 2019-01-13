import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./views/MainPage";
import * as serviceWorker from "./serviceWorker";

// import { Route, Router, Switch } from "react-router";
// import { Provider } from "react-redux";

//TODO: Implement Provider, Router, Switch, Route here

ReactDOM.render(
  <MainPage />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./views/MainPage";
import * as serviceWorker from "./serviceWorker";

import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import Store from "./store";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

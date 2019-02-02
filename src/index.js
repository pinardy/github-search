import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// Routing
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";

// Redux
import { Provider } from "react-redux";
import Store from "./store";

// Views
import MainPage from "./views/MainPage";
import UserPage from "./views/UserPage";

const history = createBrowserHistory();

//TODO: "/user" route needs to be dynamic based on user input

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

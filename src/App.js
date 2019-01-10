import React, { Component } from "react";
import Header from "./components/Header/Header";
import User from "./components/User/User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <User />
      </div>
    );
  }
}

export default App;

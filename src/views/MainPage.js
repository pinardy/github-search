import React, { Component } from "react";
import Header from "../components/Header/Header";
import User from "../components/User/User";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };
  }

  searchUserHandler = e => {
    if (e.keyCode === 13) {
      const name = e.target.value;
      fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json())
        .then(data => this.setState({ userData: data }));
      console.log(this.state.userData);
    }
  };

  render() {
    return (
      <div className="MainPage">
        <Header searchUserHandler={this.searchUserHandler} />
        <User userData={this.state.userData} />
        {/* <Users results={this.state.userData} /> */}
      </div>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import Header from "../components/Header/Header";
import Users from "../components/User/Users";

import { isEmpty } from "../utils/isEmpty";
import Spinner from "../components/Layouts/Spinner";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: [],
      isLoading: false
    };
  }

  searchUserHandler = e => {
    if (e.keyCode === 13) {
      if (!isEmpty(e.target.value)) {
        this.setState({ isLoading: true });
        const name = e.target.value;
        fetch(`https://api.github.com/search/users?q=${name}`)
          .then(response => response.json())
          .then(data =>
            this.setState({ usersList: data.items, isLoading: false })
          );
      }
    }
  };

  //TODO: Spinner when loading
  render() {
    if (this.state.isLoading) {
      return (
        <div className="MainPage">
          <Header searchUserHandler={this.searchUserHandler} />
          <Spinner />
        </div>
      );
    } else {
      return (
        <div className="MainPage">
          <Header searchUserHandler={this.searchUserHandler} />
          <Users userData={this.state.usersList} />
        </div>
      );
    }
  }
}

export default MainPage;

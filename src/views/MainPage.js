import React, { Component } from "react";
import Header from "../components/Header/Header";
import Users from "../components/User/Users";

import { isEmpty } from "../utils/isEmpty";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: []
    };
  }

  searchUserHandler = e => {
    if (e.keyCode === 13) {
      if (!isEmpty(e.target.value)) {
        const name = e.target.value;
        fetch(`https://api.github.com/search/users?q=${name}`)
          .then(response => response.json())
          .then(data => this.setState({ usersList: data.items }));
      }
      console.log(this.state.usersList);
      console.log(isEmpty(this.state.usersList));
    }
  };

  //TODO: Spinner when loading
  render() {
    return (
      <div className="MainPage">
        <Header searchUserHandler={this.searchUserHandler} />
        {!isEmpty(this.state.usersList) ? (
          <Users userData={this.state.usersList} />
        ) : null}
      </div>
    );
  }
}

export default MainPage;

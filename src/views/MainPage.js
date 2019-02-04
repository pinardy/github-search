import React, { Component } from "react";
import Header from "../components/Header/Header";
import Users from "../components/User/Users";
import Spinner from "../components/Layouts/Spinner";

import { isEmpty } from "../utils/isEmpty";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchUsers, setLoading } from "../actions/searchActions";

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
        this.props.setLoading();
        const name = e.target.value;
        fetch(`https://api.github.com/search/users?q=${name}`)
          .then(response => response.json())
          .then(data => this.props.searchUsers(data));
      }
    }
  };

  render() {
    if (this.props.isLoading) {
      return (
        <div className="MainPage">
          <Header
            searchUserHandler={this.searchUserHandler}
            history={this.props.history}
          />
          <Spinner />
        </div>
      );
    } else {
      return (
        <div className="MainPage">
          <Header
            searchUserHandler={this.searchUserHandler}
            history={this.props.history}
          />
          <Users userData={this.props.usersList} history={this.props.history} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  usersList: state.search.usersList,
  isLoading: state.search.isLoading
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchUsers, setLoading }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

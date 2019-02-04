import React, { Component } from "react";
import Header from "../components/Header/Header";
import Spinner from "../components/Layouts/Spinner";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setLoading } from "../actions/searchActions";
import UserProfileContainer from "../components/User/UserProfileContainer";

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }
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
          <UserProfileContainer userDetails={this.props.userDetails} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  userDetails: state.user.userDetails
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setLoading }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

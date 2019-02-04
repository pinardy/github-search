import React, { Component } from "react";
import axios from "axios";
import UserProfileHeader from "./UserProfileHeader";
import UserProfileContent from "./UserProfileContent";

// Material-UI
import withStyles from "@material-ui/core/styles/withStyles";

//TODO: Exception handling for users without company, location, blog

const styles = theme => ({
  paper: {
    margin: "15px 150px 15px 150px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "space-between",
    backgroundColor: "#efefef",
    padding: `20px 10px 10px 10px`
  },
  imgLogo: {
    marginRight: "20px"
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  nameTitle: {
    paddingRight: "10px"
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "20px"
  },
  userInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start"
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row"
  },
  icon: {
    paddingRight: "5px"
  },
  padBottom: {
    paddingBottom: "10px"
  }
});

class UserProfileContainer extends Component {
  state = {
    avatar_url: "",
    name: "",
    username: "",
    bio: "",
    company: "",
    location: "",
    blog: "",
    followers: 0,
    following: 0,
    repos: 0,
    profilePage: ""
  };

  componentDidMount() {
    axios.get(this.props.userDetails.url).then(res => {
      console.log(res.data);
      this.setState({
        avatar_url: res.data.avatar_url,
        name: res.data.name,
        username: res.data.login,
        bio: res.data.bio,
        company: res.data.company,
        location: res.data.location,
        blog: res.data.blog,
        followers: res.data.followers,
        following: res.data.following,
        repos: res.data.public_repos,
        profilePage: res.data.html_url
      });
    });
  }

  render() {
    return (
      <div>
        <UserProfileHeader
          avatar_url={this.state.avatar_url}
          name={this.state.name}
          username={this.state.username}
          bio={this.state.bio}
          company={this.state.company}
          location={this.state.location}
          blog={this.state.blog}
          followers={this.state.followers}
          following={this.state.following}
          repos={this.state.repos}
          profilePage={this.state.profilePage}
        />

        <UserProfileContent />
      </div>
    );
  }
}

export default withStyles(styles)(UserProfileContainer);

import React from "react";

// Material-UI
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

// Icons
import CompanyIcon from "@material-ui/icons/People";
import LocationIcon from "@material-ui/icons/LocationOn";
import BlogIcon from "@material-ui/icons/Link";

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

function UserProfileHeader(props) {
  const {
    classes,
    avatar_url,
    name,
    username,
    bio,
    company,
    location,
    blog,
    followers,
    following,
    repos,
    profilePage
  } = props;

  return (
    <Paper className={classes.paper} elevation={0}>
      <div className={classes.imgLogo}>
        <img src={avatar_url} height="200" width="200" alt="new" />
      </div>
      <div>
        <div className={classes.nameContainer}>
          <div className={classes.nameTitle}>
            <Typography variant="h5">{name}</Typography>
          </div>
          <Typography>
            <a href={profilePage}>@{username}</a>
          </Typography>
        </div>

        <div className={classes.padBottom}>
          <Typography>{bio}</Typography>
        </div>

        <div className={classes.padBottom}>
          <div className={classes.iconContainer}>
            <CompanyIcon className={classes.icon} />
            <Typography>{company}</Typography>
          </div>

          <div className={classes.iconContainer}>
            <LocationIcon className={classes.icon} />
            <Typography>{location}</Typography>
          </div>

          <div className={classes.iconContainer}>
            <BlogIcon className={classes.icon} />
            <Typography>
              <a href={blog}>{blog}</a>
            </Typography>
          </div>
        </div>

        <div className={classes.userInfoContainer}>
          <div className={classes.userInfo}>
            <Typography variant="h5">{followers}</Typography>
            <Typography>Followers </Typography>
          </div>

          <div className={classes.userInfo}>
            <Typography variant="h5">{following}</Typography>
            <Typography>Following </Typography>
          </div>

          <div className={classes.userInfo}>
            <Typography variant="h5">{repos}</Typography>
            <Typography>Repos </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(UserProfileHeader);

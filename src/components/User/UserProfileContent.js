import React from "react";

// Material-UI
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import UserRepoCard from "./UserRepoCard";

const styles = () => ({
  repoCard: {
    margin: "15px 150px 15px 150px",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "space-between",
    backgroundColor: "#efefef",
    padding: `20px 10px 10px 10px`
  }
});

function UserProfileContent(props) {
  const { classes, repos } = props

  console.log(repos)

  return (
    <Paper className={classes.repoCard} elevation={0}>
      {repos.map((repo, id) => (
        <UserRepoCard key={id} repo={repo}/>
      ))}
    </Paper>
  );
}

export default withStyles(styles)(UserProfileContent);

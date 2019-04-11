import React from "react";

// Material-UI
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  paper: {
    margin: "15px 150px 15px 150px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "space-between",
    backgroundColor: "#efefef",
    padding: `20px 10px 10px 10px`
  }
});

function UserProfileContent(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography> Content </Typography>
    </Paper>
  );
}

export default withStyles(styles)(UserProfileContent);

import React from "react";
import PropTypes from "prop-types";

import GithubLogo from "./../../assets/github-logo.png";
import Search from "./Search";

// Material-UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  headerBackground: {
    background: "black"
  }
});

const routeToHome = history => {
  history.push("/");
};

const Header = props => {
  const { classes, history } = props;

  return (
    <AppBar
      position="static"
      className={classes.root}
      onClick={() => routeToHome(history)}
    >
      <Toolbar className={classes.headerBackground}>
        <img src={GithubLogo} alt="GithubLogo" width="50" height="50" />
        <Typography
          className={classes.title}
          variant="title"
          color="inherit"
          noWrap
          style={{marginLeft: 5}}
        >
          Github User Search
        </Typography>
        <div className={classes.grow} />
        <Search />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

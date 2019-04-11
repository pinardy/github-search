import React from "react";

// Utils
import { isEmpty } from "../../utils/isEmpty";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchUsers, setLoading } from "../../actions/searchActions";

const styles = theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

function Search(props) {
  const searchUserHandler = e => {
    if (e.keyCode === 13) {
      if (!isEmpty(e.target.value)) {
        props.setLoading();
        const name = e.target.value;
        fetch(`https://api.github.com/search/users?q=${name}`)
          .then(response => response.json())
          .then(data => props.searchUsers(data));
      }
    }
  };

  const { classes } = props;
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search user…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        onKeyDown={searchUserHandler}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchUsers, setLoading }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Search));

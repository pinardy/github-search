import React from "react";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { navigateTo } from "../../actions/routingActions";
import { updateVisitedUser } from "../../actions/userActions";

const styles = {
  card: {
    maxWidth: 345,
    marginTop: 30
  },
  flexStyle: {
    display: "flex",
    justifyContent: "center"
  }
};

const goToUserProfile = props => {
  const username = props.user.login;
  props.history.push("/user/" + username);
  props.navigateTo("UserProfile");
  props.updateVisitedUser(props.user);
};

function UserCard(props) {
  const { classes, user } = props;

  return (
    <div className={classes.flexStyle}>
      <Card
        className={classes.card}
        onClick={() => {
          goToUserProfile(props);
        }}
      >
        <CardActionArea>
          <CardContent>
            <img src={user.avatar_url} height="80" width="80" alt="new" />
            <Typography gutterBottom variant="h6">
              {user.login}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ navigateTo, updateVisitedUser }, dispatch);
};

export default withStyles(styles)(
  connect(
    null,
    matchDispatchToProps
  )(UserCard)
);

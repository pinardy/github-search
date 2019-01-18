import React from "react";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

function UserCard(props) {
  const { classes, user } = props;

  return (
    <div className={classes.flexStyle}>
      <Card className={classes.card}>
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

export default withStyles(styles)(UserCard);

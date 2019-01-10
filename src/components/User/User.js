import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

function User(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Username
          </Typography>
          <Typography component="p">Profile description here</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Repo
        </Button>
        <Button size="small" color="primary">
          Stars
        </Button>
        <Button size="small" color="primary">
          Followers
        </Button>
        <Button size="small" color="primary">
          Following
        </Button>
      </CardActions>
    </Card>
  );
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);

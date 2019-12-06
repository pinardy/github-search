import React from "react";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import StarIcon from "@material-ui/icons/Star";

const styles = {
  card: {
    maxWidth: "100%",
    marginTop: 30
  }
};


function UserRepoCard(props) {
  const { classes, repo } = props;

  function goToRepo(repoUrl) {
    window.open(repoUrl)
  }

  return (
    <Card className={classes.card} onClick={() => goToRepo(repo.html_url)}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6">
            {repo.name}
          </Typography>
          {repo.description}

          <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
            <div>
              {repo.language}
            </div>
            {/* <div>
              <StarIcon className={classes.icon} />
              {repo.stargazers_count}
              </div>
            <div>{repo.forks_count}</div> */}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(UserRepoCard);

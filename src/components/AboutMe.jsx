import React from 'react';
import Card from '@material-ui/core/Card'
import CardTitle from './CardTitle';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Portrait from './Portrait';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    overflow: 'visible'
  },
  cardContent: {
    paddingTop: 0
  },
  portrait: {
    position: 'relative',
  }
})

const AboutMe = () => {
  const classes = useStyles();
  
  return(
      <Card className={classes.card}>
        <Grid container
          justify="center"
          className={classes.portrait}
          spacing={0}
        >
          <Grid item>
            <Portrait />
          </Grid>
        </Grid>
        <CardContent className={classes.cardContent}>
          <CardTitle>About Me</CardTitle>

          <Typography
            variant="h5"
            paragraph
            >
            I am a software engineer living in San Francisco.
            I love to build products from the ground up.
            My ongoing projects include an Untappd clone,
            an image-based note-taking web app built on the MERN stack,
            and a JavaScript web app that visualizes Spotify user data.
          </Typography>
        </CardContent>
      </Card>
  )
};

export default AboutMe;
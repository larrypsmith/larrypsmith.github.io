import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(20)
  }
}))

const AboutMe = () => {
  const classes = useStyles();
  
  return(
    <Container maxWidth="sm" className={classes.root}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        align="center"
        paragraph
      >
        I am a software engineer living in San Francisco.
        I love to build products from the ground up.
        My ongoing projects include an Untappd clone,
        an image-based note-taking web app built on the MERN stack,
        and a JavaScript web app that visualizes Spotify user data.
      </Typography>
    </Container>
  )
};

export default AboutMe;
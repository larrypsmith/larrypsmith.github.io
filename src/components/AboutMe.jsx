import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const AboutMe = () => (
  <Container maxWidth="sm">
    <Typography
      variant="h3"
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
      My current projects include an Untappd clone,
      an image-based note-taking web app built on the MERN stack,
      and a JavaScript web app that visualizes Spotify user data.
    </Typography>
  </Container>
);

export default AboutMe;
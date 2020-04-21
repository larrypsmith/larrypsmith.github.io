import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import larrySmith from '../images/Larry_Smith.jpg';
import '../styles/larry-smith-picture.css'

const AboutMe = () => (
  <React.Fragment>
    <Avatar
      src={larrySmith}
      className="larry-smith-picture"
    />
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
        I am a softare engineer living in San Francisco.
        I love to build products from the ground up.
        My current projects include an Untappd clone, an image-based note-taking web app built on the MERN stack, and a JavaScript web app that visualizes Spotify user data.
      </Typography>
    </Container>
  </React.Fragment>
);

export default AboutMe;
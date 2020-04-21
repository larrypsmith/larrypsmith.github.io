import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../styles/GreetingBanner.css';

const GreetingBanner = () => (
  <Paper className="GreetingBanner">
    <div className="overlay" />
    <Container maxWidth="sm" className="title-text">
      <Typography
        variant="h2"
        align="center"
        gutterBottom
      >
        Hi, I'm Larry.
      </Typography>
      <Typography
        variant="h5"
        align="center"
      >
        I'm a software engineer who develops web applications with React, Redux, and Ruby on Rails.
      </Typography>
    </Container>
  </Paper>
);

export default GreetingBanner;
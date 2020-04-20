import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import '../styles/greeting.css'

export default () => (
  <Paper className="GreetingBanner">
    <Container>
      <div className="overlay" />
        <Typography variant="h2" className="title-text" gutterBottom>
          Hi, I'm Larry.
        </Typography>
        <Typography variant="h3" className="title-text">
          I build web apps that do cool stuff.
        </Typography>
    </Container>
  </Paper>
)
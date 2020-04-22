import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    position: 'relative',
    padding: '10rem 0'
  }
}));

const Greeting = () => {
  const classes = useStyles();
  
  return(
    <Container maxWidth="sm" className={classes.root}>
      <Typography
        variant="h1"
        align="center"
        gutterBottom
      >
        Hi, I'm Larry.
      </Typography>
      <Typography
        variant="h4"
        align="center"
      >
        I'm a software engineer who develops web applications with React, Redux, and Ruby on Rails.
      </Typography>
    </Container>
  )
};

export default Greeting;
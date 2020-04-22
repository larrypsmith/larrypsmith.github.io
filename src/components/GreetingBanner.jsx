import React from 'react';
import Container from '@material-ui/core/Container';
import Overlay from './Overlay';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import goldenGate from '../images/golden-gate.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundImage: `url(${goldenGate})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  text: {
    color: theme.palette.primary.contrastText,
    position: 'relative',
    padding: '10rem 0'
  }
}));

const GreetingBanner = () => {
  const classes = useStyles();
  
  return(
    <Paper className={classes.root}>
      <Overlay />
      <Container maxWidth="sm" className={classes.text}>
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
          {/* I'm testing something */}
          I'm a software engineer who develops web applications with React, Redux, and Ruby on Rails.
        </Typography>
      </Container>
    </Paper>
  )
};

export default GreetingBanner;
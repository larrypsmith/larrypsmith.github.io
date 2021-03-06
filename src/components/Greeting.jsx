import React from 'react';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    position: 'relative',
    padding: theme.spacing(20, 0)
  }
}));

const Greeting = () => {
  const classes = useStyles();
  
  return(
    <Fade in>
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
          I'm a programmer, quick learner, and avid cyclist.
        </Typography>
    </Container>
    </Fade>
  )
};

export default Greeting;
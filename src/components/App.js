import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AboutMe from './AboutMe';
import BackgroundImage from './BackgroundImage';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Greeting from './Greeting'
import Grid from '@material-ui/core/Grid';
import Projects from './Projects';
import Skills from './Skills';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    '& > *': {
      marginBottom: theme.spacing(20)
    }
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <BackgroundImage />
      <Container maxWidth="lg">
        <Greeting />
        <Grid
          container
          className={classes.gridContainer}
          justify="center"
        >
          <Grid item>
            <AboutMe />
          </Grid>
          <Grid item>
            <Projects />
          </Grid>
          <Grid item>
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </StylesProvider>
  );
};

export default App;

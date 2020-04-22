import React from 'react';
import AboutMe from './components/AboutMe';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'
import GreetingBanner from './components/GreetingBanner'
import HeadShot from './components/HeadShot';
import ProjectList from './components/ProjectList';
import { StylesProvider } from '@material-ui/core/styles'
import './App.css';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GreetingBanner />
      <Grid container justify="center">
        <Grid item>
          <HeadShot />
        </Grid>
      </Grid>
      <Container>
        <AboutMe />
        <ProjectList />
      </Container>
    </StylesProvider>
  );
};

export default App;

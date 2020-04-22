import React from 'react';
import AboutMe from './AboutMe';
import BackgroundImage from './BackgroundImage';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Greeting from './Greeting'
import Grid from '@material-ui/core/Grid';
import ProjectList from './ProjectList';
import { StylesProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <BackgroundImage />
      <Container maxWidth="lg">
        <Greeting />
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <AboutMe />
          </Grid>
          <Grid item xs={12}>
            <ProjectList />
          </Grid>
        </Grid>
      </Container>
    </StylesProvider>
  );
};

export default App;

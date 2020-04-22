import React from 'react';
import AboutMe from './AboutMe';
import BackgroundImage from './BackgroundImage';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Greeting from './Greeting'
import ProjectList from './ProjectList';
import { StylesProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <BackgroundImage />
      <Container maxWidth="lg">
        <Greeting />
        <AboutMe />
        {/* <ProjectList /> */}
      </Container>
    </StylesProvider>
  );
};

export default App;

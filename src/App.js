import React from 'react';
import {
  CssBaseline,
  Container
} from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles'
import ProjectList from './components/ProjectList';
import GreetingBanner from './components/GreetingBanner'
import './App.css';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
        <GreetingBanner />
      <Container>
        <ProjectList />
      </Container>
    </StylesProvider>
  );
}

export default App;

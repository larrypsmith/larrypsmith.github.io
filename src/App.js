import React from 'react';
import {
  CssBaseline,
  Container
} from '@material-ui/core'
import ProjectList from './components/ProjectList';
import Greeting from './components/Greeting'
import './App.css';

function App() {
  return (
    <Container>
      <CssBaseline />
      <Greeting />
      <ProjectList />
    </Container>
  );
}

export default App;

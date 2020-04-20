import React from 'react';
import {
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import { projects } from '../data';
import Project from './Project';

export default () => (
  <React.Fragment>
    <Typography variant="h3">
      Projects
    </Typography>
    <Grid container spacing={2}>
      {
        Object.values(projects).map((project, i) => (
          <Grid
            item
            key={i}
            xs={12}
            sm={4}
          >
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              website={project.website}
              gitHub={project.gitHub}
            />
          </Grid>
        ))
      }
    </Grid>
  </React.Fragment>
)
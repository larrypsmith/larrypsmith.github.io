import React from 'react';
import { projects } from '../data';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardTitle from './CardTitle';
import Grid from '@material-ui/core/Grid';
import Project from './Project';

export default function ProjectList() {
  return(
    <Card>
      <CardContent>
        <CardTitle>
          Projects
        </CardTitle>
        
        <Grid container spacing={2}>
          {
            Object.values(projects).map((project, i) => (
              <Grid
                item
                key={i}
                xs={12}
                sm={6}
                lg={4}
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
      </CardContent>
    </Card>
  )
};
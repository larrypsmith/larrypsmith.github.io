import React from 'react';
import { projects } from '../data';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project from './Project';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  header: {
    color: theme.palette.primary.contrastText
  }
}))

const ProjectList = () => {
  const classes = useStyles();
  
  return(
    <React.Fragment>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        className={classes.header}
      >
        Projects
      </Typography>
      
      <Grid container spacing={4}>
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
};

export default ProjectList;
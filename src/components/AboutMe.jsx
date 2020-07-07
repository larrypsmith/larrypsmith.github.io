import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { social } from '../data';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardTitle from './CardTitle';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Portrait from './Portrait';
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  card: {
    overflow: 'visible'
  },
  cardContent: {
    paddingTop: 0
  },
  portrait: {
    position: 'relative',
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}))

const AboutMe = () => {
  const classes = useStyles();
  
  return(
    <Slide direction="up" in timeout={2000}>
      <Card className={classes.card}>
        <Grid
          container
          justify="center"
          className={classes.portrait}
        >
          <Grid item><Portrait /></Grid>
        </Grid>
        <CardContent className={classes.cardContent}>
          <CardTitle>About Me</CardTitle>
          <Typography
            variant="h5"
            align="center"
            paragraph
          >
            I love to build products from the ground up and am constantly
            learning new things.

            My favorite technologies include React, Redux,
            Ruby on Rails, and Node.

            When I'm not coding, you can find me cycling in the Marin Headlands.

            Seeking frontend, backend, and full stack opportunities in the
            Bay Area. Please don't hesitate to reach out!
          </Typography>

          <Divider variant="middle" className={classes.divider} />

          <Grid
            container
            spacing={4}
            justify="space-around"
          >
            {
              Object.values(social).map((website, i) => (
                <Grid item key={i}>
                  <Link href={website.url} variant="body1">{website.name}</Link>
                </Grid>
              ))
            }
          </Grid>
        </CardContent>
      </Card>
    </Slide>
  )
};

export default AboutMe;
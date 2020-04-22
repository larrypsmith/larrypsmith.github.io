import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { social } from '../data';

const SocialButtons = () => (
  <Grid container>
    {
      Object.values(social).map(({ name, url, icon: Icon }, i) => (
        <Grid item key={i} xs={12} sm={4}>
          <Link href={url} underline="none">
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Icon />}
            >
              {name}
            </Button>
          </Link>
        </Grid>
      ))
    }
  </Grid>
);

export default SocialButtons;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  logo: {
    marginRight: theme.spacing(1)
  }
}))

const SkillCard = ({ logo: Logo, name }) => {
  const classes = useStyles();
  
  return (
    <Paper className={classes.root} variant="outlined">
      <Logo
        width={50}
        height={50}
        title={`${name} logo`}
        className={classes.logo}
      />
      <Typography variant="h5">{name}</Typography>
    </Paper>
  );
};

export default SkillCard;
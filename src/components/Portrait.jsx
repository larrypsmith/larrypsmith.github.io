import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import larrySmith from '../images/Larry_Smith.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[4],
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '150px',
      top: '-75px',
      marginBottom: '-50px'
    },
    [theme.breakpoints.up('md')]: {
      width: '200px',
      height: '200px',
      top: '-100px',
      marginBottom: '-75px'
    }
  }
}));

const Portrait = () => {
  const classes = useStyles();

  return (
    <Avatar
      src={larrySmith}
      className={classes.root}
    />
  )
};

export default Portrait;
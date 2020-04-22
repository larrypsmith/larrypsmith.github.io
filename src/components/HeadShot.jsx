import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import larrySmith from '../images/Larry_Smith.jpg';
// import '../styles/HeadShot.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[4],
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '150px',
      top: '-75px'
    },
    [theme.breakpoints.up('md')]: {
      width: '200px',
      height: '200px',
      top: '-100px'
    }
  }
}));

const HeadShot = () => {
  const classes = useStyles();

  return (
    <Avatar
      src={larrySmith}
      className={classes.root}
    />
  )
};

export default HeadShot;
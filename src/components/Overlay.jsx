import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
})

const Overlay = () => {
  const classes = useStyles();

  return(
    <div className={classes.root} />
  )
};

export default Overlay;
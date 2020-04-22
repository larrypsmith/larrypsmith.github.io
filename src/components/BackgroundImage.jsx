import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import goldenGate from '../images/golden-gate.jpg'
import Overlay from './Overlay';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    zIndex: -1
  },
  image: {
    objectFit: 'cover',
    width: '100vw',
    height: '100vh',
  }
})

const BackgroundImage = () => {
  const classes = useStyles();
  
  return(
    <div className={classes.root}>
      <Overlay />
      <img
        className={classes.image}
        src={goldenGate}
        alt='golden-gate.jpg'
      />
    </div>
  )
};

export default BackgroundImage;
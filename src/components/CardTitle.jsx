import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function CardTitle({ children }) {
  return(
    <Typography
      variant="h2"
      align="center"
      gutterBottom
    >
      {children}
    </Typography>
  )
}
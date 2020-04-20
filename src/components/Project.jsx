import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Link,
  Typography,
} from '@material-ui/core';

export default ({ title, description, image, website, gitHub }) => (
  <Card>
    <Link href={website} underline="none">
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          height={180}
        />
      </CardActionArea>
    </Link>
    <CardContent>
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Link href={website} underline="none">
        <Button color="primary" size="small">
          Website
        </Button>
      </Link>
      <Link href={gitHub} underline="none">
        <Button color="primary" size="small">
          GitHub
        </Button>
      </Link>
    </CardActions>
  </Card>
)
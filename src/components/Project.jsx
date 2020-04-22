import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default ({ title, description, image, website, gitHub }) => (
  <Card>
    <Link href={website} underline="none">
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          height={250}
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
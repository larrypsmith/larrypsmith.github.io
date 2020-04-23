import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import WebIcon from '@material-ui/icons/Web';

export default ({ title, description, image, website, gitHub }) => (
  <Card elevation={0} variant="outlined">
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
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Link href={website} underline="none">
        <Button
          color="primary"
          variant="outlined"
          size="small"
          startIcon={<WebIcon />}
          >
          Live Site
        </Button>
      </Link>
      <Link href={gitHub} underline="none">
        <Button
          color="primary"
          variant="outlined"
          size="small"
          startIcon={<GitHubIcon />}
          >
          GitHub
        </Button>
      </Link>
    </CardActions>
  </Card>
)
import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import '../styles/ProfileCard.css';

const ProfileCard = (props) => {
  const { name } = props

  return (
    <Card className="Card-item">
      <CardActionArea>
        <CardMedia
          className="Card-media"
          image={require(`../images/profiles/${name.toLowerCase().replace(/\s/g, '-')}.jpeg`).default}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Description for ${name} is not ready yet...\n
              But, ${name.split(' ')[0]} is extremely enjoyable to talk to!`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {`Buy ${name.split(' ')[0]}'s Time`}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
};

export default ProfileCard;
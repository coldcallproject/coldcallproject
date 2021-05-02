import React, { Component } from 'react';
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
import larry from '../images/larry-page.jpeg'

class ProfileCard extends Component {
  render() {
    return (
      <Card className="Card-item">
        <CardActionArea>
          <CardMedia
            className="Card-media"
            image={larry}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    )
  }
};

export default ProfileCard;
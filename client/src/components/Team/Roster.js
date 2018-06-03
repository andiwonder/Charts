import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import './roster.css';

const styles = theme => ({
  player__card: {
    width: '13%',
    paddingTop: '10px',
    marginBottom: '1.5em',
    display: 'inline-block',
    marginRight: '2%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontWeight: 700,
    letterSpacing: '.5px'
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: '67.25%' // 16:9
  }
});

class Roster extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="outlined" size="small" style={{ verticalAlign: 'top', marginTop: '3em', padding: '4px 16px' }}>
          <KeyboardArrowLeft />
          Prev
        </Button>
        <div className="player__card__container">
          <Card className={classes.player__card}>
            <CardMedia className={classes.media} image="/images/player/gsw/stephen.png" title="Contemplative Reptile" />
            <CardContent className="player__card__text">
              <Typography className={classes.title} component="h4">
                Stephen Curry
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.player__card}>
            <CardMedia
              className={classes.media}
              image="/images/player/gsw/quinn_cook.png"
              title="Contemplative Reptile"
            />
            <CardContent className="player__card__text">
              <Typography className={classes.title} component="h4">
                Quinn<br />Cook
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.player__card}>
            <CardMedia
              className={classes.media}
              image="/images/player/gsw/jordan_bell.png"
              title="Contemplative Reptile"
            />
            <CardContent className="player__card__text">
              <Typography className={classes.title} component="h4">
                Jordan<br />Bell
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.player__card}>
            <CardMedia
              className={classes.media}
              image="/images/player/gsw/klay_thompson.png"
              title="Contemplative Reptile"
            />
            <CardContent className="player__card__text">
              <Typography className={classes.title} component="h4">
                Klay<br />Thompson
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.player__card}>
            <CardMedia
              className={classes.media}
              image="/images/player/gsw/draymond_green.png"
              title="Contemplative Reptile"
            />
            <CardContent className="player__card__text">
              <Typography className={classes.title} component="h4">
                Draymond<br />Green
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.player__card}>
            <CardMedia
              className={classes.media}
              image="/images/player/gsw/kevin_durant.png"
              title="Contemplative Reptile"
            />
            <CardContent className="player__card__text">
              <Typography className={classes.title} component="h4">
                Kevin<br />Durant
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Button variant="outlined" size="small" style={{ verticalAlign: 'top', marginTop: '3em', padding: '4px 16px' }}>
          Next
          <KeyboardArrowRight />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Roster);

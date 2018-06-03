import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  main__article: {
    width: '48%',
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: '4%'
  },
  main__article__text: {
    width: '65%',
    marginRight: '5%',
    display: 'inline-block'
  },
  main__article__img__container: {
    width: '30%',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  main__article__img: {
    width: '100%'
  },
  main__article__desc: {
    marginTop: '.5em'
  },
  side__articles__container: {
    width: '48%',
    display: 'inline-block'
  },
  side__articles: {
    marginBottom: '.6em'
  },
  side__articles__divider: {
    marginBottom: '.6em'
  },
  side__articles__heading: {
    width: '80%',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  side__articles__thumb__container: {
    width: '20%',
    display: 'inline-block'
  },
  side__articles__thumb: {
    maxWidth: '100%'
  },
  button: {
    margin: theme.spacing.unit
  },
  article__icon: {
    color: '#757575',
    float: 'right'
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="display3" component="h1" paragraph>
          News
        </Typography>
        <div className={classes.main__article}>
          <div className={classes.main__article__text}>
            <Typography variant="headline" component="h3" paragraph>
              The Summer of Boogie: Pelicans' Top Offseason Priorities and Potential Targets.
            </Typography>
          </div>
          <div className={classes.main__article__img__container}>
            <img
              className={classes.main__article__img}
              src="https://img.bleacherreport.net/img/images/photos/003/740/704/hi-res-cdcf05cc914f311f3e9f716a6cd1557b_crop_exact.jpg?w=1200&h=1200&q=75"
              alt=""
            />
          </div>
          <div className={classes.main__article__desc}>
            <Typography component="p" paragraph>
              The New Orleans Pelicans ' ability to rally and reshape themselves after DeMarcus Cousins ' Achilles tear
              helped them score their first playoff-series victory of the Pelicans era —and, more importantly, of
              Anthony Davis' career...
            </Typography>
            <div>
              <Button size="small" variant="outlined" href="#flat-buttons">
                Read more
              </Button>
              <IconButton color="secondary" className={classes.article__icon} aria-label="Add an alarm">
                <Icon>star</Icon>
              </IconButton>
            </div>
          </div>
        </div>
        <div className={classes.side__articles__container}>
          <div className={classes.side__articles}>
            <div className={classes.side__articles__heading}>
              <Typography variant="subheading" component="h4" paragraph>
                Pelicans Respond to ESPN Analysts All Picking Warriors in Conference Semifinals
              </Typography>
            </div>
            <div className={classes.side__articles__thumb__container}>
              <img
                className={classes.side__articles__thumb}
                src="https://img.bleacherreport.net/img/images/photos/003/738/747/hi-res-f03533503d2c387f221d27443d76688a_crop_exact.jpg?w=1200&h=1200&q=75"
                alt=""
              />
            </div>
            <div>
              <Button size="small" variant="outlined" href="#flat-buttons">
                Read more
              </Button>
              <IconButton color="secondary" className={classes.article__icon} aria-label="Add an alarm">
                <Icon>star</Icon>
              </IconButton>
            </div>
          </div>
          <Divider className={classes.side__articles__divider} />
          <div className={classes.side__articles}>
            <div className={classes.side__articles__heading}>
              <Typography variant="subheading" component="h4" paragraph>
                New Orleans Pelicans vs. Golden State Warriors - Game Highlights - Bleacher Report
              </Typography>
            </div>
            <div className={classes.side__articles__thumb__container}>
              <img
                className={classes.side__articles__thumb}
                src="https://static-assets.bleacherreport.com/img/br_630_height.png"
                alt=""
              />
            </div>
            <div>
              <Button size="small" variant="outlined" href="#flat-buttons">
                Read more
              </Button>
              <IconButton color="secondary" className={classes.article__icon} aria-label="Add an alarm">
                <Icon>star</Icon>
              </IconButton>
            </div>
          </div>
          <Divider className={classes.side__articles__divider} />
          <div className={classes.side__articles}>
            <div className={classes.side__articles__heading}>
              <Typography variant="subheading" component="h4" paragraph>
                Stephen Curry Plans to Return Tuesday vs. Pelicans If Medical Staff Approves
              </Typography>
            </div>
            <div className={classes.side__articles__thumb__container}>
              <img
                className={classes.side__articles__thumb}
                src="https://img.bleacherreport.net/img/images/photos/003/738/865/hi-res-abf1e8e2d573e4d9baba84202df2ae4b_crop_exact.jpg?w=1200&h=1200&q=75"
                alt=""
              />
            </div>
            <div>
              <Button size="small" variant="outlined" href="#flat-buttons">
                Read more
              </Button>
              <IconButton color="secondary" className={classes.article__icon} aria-label="Add an alarm">
                <Icon>star</Icon>
              </IconButton>
            </div>
          </div>
          <Divider className={classes.side__articles__divider} />
          <div className={classes.side__articles}>
            <div className={classes.side__articles__heading}>
              <Typography variant="subheading" component="h4" paragraph>
                Metrics 101: Ranking the NBA's Most Valuable Shooters
              </Typography>
            </div>
            <div className={classes.side__articles__thumb__container}>
              <img
                className={classes.side__articles__thumb}
                src="https://img.bleacherreport.net/img/slides/photos/004/292/908/hi-res-a44c49c96b69cf62f3e6f7e5a4bf4859_crop_exact.jpg?w=1200&h=1200&q=75"
                alt=""
              />
            </div>
            <div>
              <Button size="small" variant="outlined" href="#flat-buttons">
                Read more
              </Button>
              <IconButton color="secondary" className={classes.article__icon} aria-label="Add an alarm">
                <Icon>star</Icon>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(News);

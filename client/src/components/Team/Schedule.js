import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TeamStats from './TeamStats';

import GameMenu from './menu/GameMenu';

import MobileStepper from '@material-ui/core/MobileStepper';

import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  game__team__main__container: {
    display: 'inline-block',
    marginLeft: '.66%',
    width: '53.33%'
  },
  game__team__logo__img: {
    width: '3rem',
    display: 'block',
    margin: '0 auto'
  },
  game__team__container: {
    display: 'inline-block',
    width: '13%'
  },
  game__team__logo: {
    display: 'inline-block'
  },
  game__team__score: {
    display: 'inline-block',
    color: theme.palette.text.secondary
  },
  game__team__away: {
    float: 'right'
  },
  game__team__bar__home: {
    display: 'inline-block',
    height: '.5rem',
    backgroundColor: 'blue',
    width: '46.2%'
  },
  game__team__bar__away: {
    display: 'inline-block',
    height: '.5rem',
    backgroundColor: 'red',
    width: '53.8%'
  },
  game__team__score__container: {
    width: '72%',
    display: 'inline-block',
    margin: '5px 1% 0 1%',
    verticalAlign: 'top'
  },
  game__team__paper: {
    padding: '3px'
  },
  game__team__item: {
    padding: '5px 0px !important'
  },
  game__team__stats__box__container: {
    display: 'inline-block',
    width: '40%',
    marginLeft: '6%',
    verticalAlign: 'top'
  },
  game__team__stats__box: {
    padding: '1em',
    marginBottom: '4.25em'
  }
});

class Schedule extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <Typography variant="display3" style={{ display: 'inline-block' }} component="h1" paragraph>
            Games
          </Typography>
          <GameMenu />
        </div>
        <Grid container spacing={24} className={classes.game__team__main__container}>
          <Grid md={12} item>
            <Typography
              variant="subheading"
              style={{ display: 'inline-block', backgroundColor: '#B1D5FB', padding: '4px' }}
            >
              Home
            </Typography>
            <Typography
              variant="subheading"
              style={{ display: 'inline-block', backgroundColor: '#B1D5FB', padding: '4px' }}
              className={classes.game__team__away}
            >
              Away
            </Typography>
          </Grid>
          <Typography variant="caption" component="h4" noWrap>
            4/12/2018
          </Typography>
          <Grid item md={12} className={classes.game__team__item}>
            <Paper elevation={1} className={classes.game__team__paper}>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/bos.png" alt="" className={classes.game__team__logo__img} />
              </div>
              <div className={classes.game__team__score__container}>
                <div className={classes.game__team__score__text}>
                  <div className={classes.game__team__score}>
                    <Typography variant="body2" component="h4" noWrap>
                      Boston Celtics - 99
                    </Typography>
                  </div>
                  <div className={(classes.game__team__score, classes.game__team__away)}>
                    <Typography variant="body2" component="h4" noWrap>
                      102 - Cleveland Cavaliers
                    </Typography>
                  </div>
                </div>
                <div className={classes.game__team__score__bars}>
                  <div className={classes.game__team__bar__home} />
                  <div className={classes.game__team__bar__away} />
                </div>
              </div>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/cle.png" alt="" className={classes.game__team__logo__img} />
              </div>
            </Paper>
          </Grid>
          <Typography variant="caption" component="h4" noWrap>
            3/28/2018
          </Typography>
          <Grid item md={12} className={classes.game__team__item}>
            <Paper elevation={1} className={classes.game__team__paper}>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/bos.png" alt="" className={classes.game__team__logo__img} />
              </div>
              <div className={classes.game__team__score__container}>
                <div className={classes.game__team__score__text}>
                  <div className={classes.game__team__score}>
                    <Typography variant="body2" component="h4" noWrap>
                      Boston Celtics - 110
                    </Typography>
                  </div>
                  <div className={(classes.game__team__score, classes.game__team__away)}>
                    <Typography variant="body2" component="h4" noWrap>
                      89 - New York Knicks
                    </Typography>
                  </div>
                </div>
                <div className={classes.game__team__score__bars}>
                  <div className={classes.game__team__bar__home} />
                  <div className={classes.game__team__bar__away} />
                </div>
              </div>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/nyk.png" alt="" className={classes.game__team__logo__img} />
              </div>
            </Paper>
          </Grid>
          <Typography variant="caption" component="h4" noWrap>
            3/25/2018
          </Typography>
          <Grid item md={12} className={classes.game__team__item}>
            <Paper elevation={1} className={classes.game__team__paper}>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/bos.png" alt="" className={classes.game__team__logo__img} />
              </div>
              <div className={classes.game__team__score__container}>
                <div className={classes.game__team__score__text}>
                  <div className={classes.game__team__score}>
                    <Typography variant="body2" component="h4" noWrap>
                      Boston Celtics - 100
                    </Typography>
                  </div>
                  <div className={(classes.game__team__score, classes.game__team__away)}>
                    <Typography variant="body2" component="h4" noWrap>
                      102 - Milwaukee Bucks
                    </Typography>
                  </div>
                </div>
                <div className={classes.game__team__score__bars}>
                  <div className={classes.game__team__bar__home} />
                  <div className={classes.game__team__bar__away} />
                </div>
              </div>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/mil.png" alt="" className={classes.game__team__logo__img} />
              </div>
            </Paper>
          </Grid>
          <Typography variant="caption" component="h4" noWrap>
            3/14/2018
          </Typography>
          <Grid item md={12} className={classes.game__team__item}>
            <Paper elevation={1} className={classes.game__team__paper}>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/bos.png" alt="" className={classes.game__team__logo__img} />
              </div>
              <div className={classes.game__team__score__container}>
                <div className={classes.game__team__score__text}>
                  <div className={classes.game__team__score}>
                    <Typography variant="body2" component="h4" noWrap>
                      Boston Celtics - 102
                    </Typography>
                  </div>
                  <div className={(classes.game__team__score, classes.game__team__away)}>
                    <Typography variant="body2" component="h4" noWrap>
                      92 - Philadelphia 76ers
                    </Typography>
                  </div>
                </div>
                <div className={classes.game__team__score__bars}>
                  <div className={classes.game__team__bar__home} />
                  <div className={classes.game__team__bar__away} />
                </div>
              </div>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/phi.png" alt="" className={classes.game__team__logo__img} />
              </div>
            </Paper>
          </Grid>
          <Typography variant="caption" component="h4" noWrap>
            3/8/2018
          </Typography>
          <Grid item md={12} className={classes.game__team__item}>
            <Paper elevation={1} className={classes.game__team__paper}>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/bos.png" alt="" className={classes.game__team__logo__img} />
              </div>
              <div className={classes.game__team__score__container}>
                <div className={classes.game__team__score__text}>
                  <div className={classes.game__team__score}>
                    <Typography variant="body2" component="h4" noWrap>
                      Boston Celtics - 108
                    </Typography>
                  </div>
                  <div className={(classes.game__team__score, classes.game__team__away)}>
                    <Typography variant="body2" component="h4" noWrap>
                      94 - San Antonio Spurs
                    </Typography>
                  </div>
                </div>
                <div className={classes.game__team__score__bars}>
                  <div className={classes.game__team__bar__home} />
                  <div className={classes.game__team__bar__away} />
                </div>
              </div>
              <div className={classes.game__team__container}>
                <img src="/images/team_logos/sas.png" alt="" className={classes.game__team__logo__img} />
              </div>
            </Paper>
          </Grid>
          <Grid item md={12} style={{ padding: '12px 12px 12px 0' }}>
            <MobileStepper
              variant="text"
              steps={5}
              position="static"
              activeStep={1}
              className={classes.mobileStepper}
              style={{ backgroundColor: '#EEEEEE', width: '100%' }}
              nextButton={
                <Button size="small">
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button size="small">
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          </Grid>
        </Grid>
        <Grid container className={classes.game__team__stats__box__container}>
          <Grid item md={12}>
            <Paper className={classes.game__team__stats__box} elevation={4}>
              <div>
                <Typography variant="caption" style={{ display: 'inline-block' }}>
                  Wins / Loss
                </Typography>
                <Typography variant="headline" style={{ display: 'inline-block', color: '#03A9F4', float: 'right' }}>
                  5th
                </Typography>
                <Typography
                  variant="display1"
                  style={{ marginTop: '.5em', fontWeight: 700, textAlign: 'center', color: 'rgba(0,0,0,.87)' }}
                >
                  <span style={{ color: '#8BC34A' }}>61</span> / <span style={{ color: '#F44336' }}>20</span>
                </Typography>
              </div>
            </Paper>
            <Paper className={classes.game__team__stats__box} elevation={4}>
              <div>
                <Typography variant="caption" style={{ display: 'inline-block' }}>
                  Average points per game
                </Typography>
                <Typography variant="headline" style={{ display: 'inline-block', color: '#03A9F4', float: 'right' }}>
                  11th
                </Typography>
                <Typography
                  variant="display1"
                  style={{ marginTop: '.5em', fontWeight: 700, textAlign: 'center', color: 'rgba(0,0,0,.87)' }}
                >
                  101.21
                </Typography>
              </div>
            </Paper>
            <Paper className={classes.game__team__stats__box} elevation={4}>
              <div>
                <Typography variant="caption" style={{ display: 'inline-block' }}>
                  Opp Average points per game
                </Typography>
                <Typography variant="headline" style={{ display: 'inline-block', color: '#03A9F4', float: 'right' }}>
                  6th
                </Typography>
                <Typography
                  variant="display1"
                  style={{ marginTop: '.5em', fontWeight: 700, textAlign: 'center', color: 'rgba(0,0,0,.87)' }}
                >
                  89
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <TeamStats />
      </div>
    );
  }
}

export default withStyles(styles)(Schedule);

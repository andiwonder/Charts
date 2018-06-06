import React, { Component } from 'react';

// Material Stuff
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// Custom components
import TeamStats from './TeamStats';
import GameMenu from './menu/GameMenu';
import Game from './game/Game';

//Redux Stuff
import { connect } from 'react-redux';
import { selectTeam } from '../../actions/index';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  game__team__main__container: {
    display: 'inline-block',
    marginLeft: '.66%',
    width: '53.33%'
  },
  game__team__away: {
    float: 'right'
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
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleNext = () => {
    const maxSteps = Math.ceil(this.props.schedule.length / 5);
    if (this.state.activeStep == maxSteps - 1) {
      return;
    }
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
    console.log(this.state.activeStep);
  };

  handleBack = () => {
    if (this.state.activeStep == 0) {
      return;
    }
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
    console.log(this.state.activeStep);
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    const games = this.props.schedule.slice(activeStep * 5, (activeStep + 1) * 5).map((game, index) => {
      return <Game {...game} key={index} />;
    });

    return (
      <div>
        <div>
          <Typography variant="display3" style={{ display: 'inline-block' }} component="h1" paragraph>
            Games
          </Typography>
          <GameMenu />
        </div>
        <Grid container spacing={8} className={classes.game__team__main__container}>
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
          {games}
          <Grid item md={12} style={{ padding: '12px 12px 12px 0' }}>
            <MobileStepper
              variant="text"
              steps={5}
              position="static"
              activeStep={1}
              className={classes.mobileStepper}
              style={{ backgroundColor: '#EEEEEE', width: '100%' }}
              nextButton={
                <Button size="small" onClick={this.handleNext}>
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button size="small" onClick={this.handleBack}>
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

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of Schedule
  return {
    schedule: state.schedule
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));

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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// Custom components
import TeamStats from './TeamStats';
import GameMenu from './menu/GameMenu';
import Game from './game/Game';
import SeasonalStanding from './SeasonalStanding/SeasonalStanding';
import DonutShow from '../Charts/DonutShow';
import LineShow from '../Charts/LineShow';

//Redux Stuff
import { connect } from 'react-redux';

const styles = theme => ({
  game__team__main__container: {
    display: 'block',
    margin: '0 auto',
    width: '60%'
  },
  game__team__away: {
    float: 'right'
  },
  graph__switch: {
    justifyContent: 'flex-end'
  },
  switch__label: {
    paddingTop: '0.9em',
    marginRight: '1em',
    fontSize: '0.875rem',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.87)'
  }
});

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      standingGraph: false,
      statsGraph: false
    };
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  handleSwitchChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  handleNext = () => {
    const maxSteps = Math.ceil(this.props.schedule.length / 5);
    if (this.state.activeStep === maxSteps - 1) {
      return;
    }
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    if (this.state.activeStep === 0) {
      return;
    }
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
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
        </div>
        <Grid container spacing={8} className={classes.game__team__main__container}>
          <Grid item md={12}>
            <FormGroup row className={classes.graph__switch}>
              <label className={classes.switch__label}>Text</label>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleSwitchChange('checkedA')}
                    value="checkedA"
                  />
                }
                label="Graph"
              />
            </FormGroup>
          </Grid>
          <Grid item md={12} item style={{ marginBottom: '1em' }}>
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
          <Grid item md={12} style={{ padding: '12px 12px 12px 0', marginBottom: '2em' }}>
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
        <Grid container style={{ marginBottom: '1em' }} justifyContent="space-around">
          <Grid item md={6} style={{ marginBottom: '2em' }}>
            <Typography variant="display3" style={{ display: 'inline-block' }} component="h1" paragraph>
              Standing
            </Typography>
          </Grid>
          <Grid item md={4} style={{ marginBottom: '2em' }}>
            <FormGroup row className={classes.graph__switch}>
              <label className={classes.switch__label}>Text</label>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.standingGraph}
                    onChange={this.handleSwitchChange('standingGraph')}
                    value="standingGraph"
                  />
                }
                label="Graph"
              />
            </FormGroup>
          </Grid>
          {!this.state.standingGraph ? (
            <div style={{ width: '100%' }}>
              <SeasonalStanding />
              <SeasonalStanding />
              <SeasonalStanding />
            </div>
          ) : (
            <DonutShow />
          )}
          <Grid item md={6} style={{ marginBottom: '0' }}>
            <Typography variant="display3" style={{ display: 'inline-block' }} component="h1" paragraph>
              Stats
            </Typography>
          </Grid>
          <Grid item md={4} style={{ marginBottom: '2em' }}>
            <FormGroup row className={classes.graph__switch}>
              <label className={classes.switch__label}>Text</label>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.statsGraph}
                    onChange={this.handleSwitchChange('statsGraph')}
                    value="statsGraph"
                  />
                }
                label="Graph"
              />
            </FormGroup>
          </Grid>
          <Grid item md={12} style={{ marginBottom: '2em' }}>
            {!this.state.statsGraph ? <TeamStats /> : <LineShow />}
          </Grid>
        </Grid>
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

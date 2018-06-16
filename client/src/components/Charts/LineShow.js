import React, { Component } from 'react';
import ScoreTable from './ScoreTable/ScoreTable';
import LineChart from './LineChart/LineChart';
import DonutChart from './DonutChart/DonutChart';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './charts.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { withStyles } from '@material-ui/core/styles';
// import classNames from 'classnames';

const styles = theme => ({
  donut__title: {
    marginLeft: '2em',
    marginTop: '1em'
  },
  donut__title__l: {
    marginLeft: '1em',
    marginTop: '1em'
  },
  donut__title__xl: {
    marginLeft: '.15em',
    marginTop: '1em'
  },
  linechart_svg: {
    marginBottom: '2em'
  }
});

export class LineShow extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <Grid container justify="space-around" style={{ marginBottom: '3em' }}>
        <Grid item md={12}>
          <Typography variant="display2" gutterBottom align="center">
            Possessions
          </Typography>
        </Grid>
        <Grid item md={5} align="center" sm={10} xs={10} className={classes.linechart_svg}>
          <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
            <Typography variant="subheading" color="secondary" gutterBottom align="center">
              Possessions
            </Typography>
            <LineChart />
          </ScrollAnimation>
        </Grid>
        <Grid item md={5} align="center" sm={10} xs={10} className={classes.linechart_svg}>
          <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
            <Typography variant="subheading" color="secondary" gutterBottom align="center">
              Trunovers
            </Typography>
            <LineChart />
          </ScrollAnimation>
        </Grid>
        <Grid item md={5} align="center" sm={10} xs={10} className={classes.linechart_svg}>
          <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
            <Typography variant="subheading" color="secondary" gutterBottom align="center">
              Fastbreak
            </Typography>
            <LineChart />
          </ScrollAnimation>
        </Grid>
        <Grid item md={5} align="center" sm={10} xs={10} className={classes.linechart_svg}>
          <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
            <Typography variant="subheading" color="secondary" gutterBottom align="center">
              Fouls
            </Typography>
            <LineChart />
          </ScrollAnimation>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(LineShow);

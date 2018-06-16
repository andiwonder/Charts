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
import PlayByPlay from './PlayByPlay/PlayByPlay';
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

export class Charts extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <div>
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true} animateOut="slideOutRight">
          <Grid container spacing={16} justify="center" style={{ marginBottom: '2em' }}>
            <Grid item md={12}>
              <Typography variant="display2" gutterBottom align="center">
                Top Scorers
              </Typography>
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
              <ScoreTable />
            </Grid>
          </Grid>
        </ScrollAnimation>

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

        <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
          <Grid container spacing={32} style={{ marginBottom: '2em' }} justify="space-around">
            <Grid item md={12}>
              <Typography variant="display2" gutterBottom align="center">
                Points
              </Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <DonutChart padAngle={0.03} made={9} att={34} />
              <Typography variant="title" gutterBottom className={classes.donut__title}>
                3-pts
              </Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <DonutChart padAngle={0.03} made={44} att={68} />
              <Typography variant="title" gutterBottom className={classes.donut__title}>
                2-pts
              </Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <DonutChart padAngle={0.03} made={25} att={32} />
              <Typography variant="title" gutterBottom className={classes.donut__title__l}>
                Freethrows
              </Typography>
            </Grid>
          </Grid>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
          <Grid container spacing={32} style={{ marginBottom: '2em' }} justify="space-around">
            <Grid item md={3} sm={6} xs={6}>
              <DonutChart padAngle={0.03} att={45} made={33} />
              <Typography variant="title" gutterBottom className={classes.donut__title__xl}>
                Points in Paint
              </Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <DonutChart padAngle={0.03} att={15} made={10} />
              <Typography variant="title" gutterBottom className={classes.donut__title__l}>
                2nd chance
              </Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <DonutChart padAngle={0.03} att={43} made={29} />
              <Typography variant="title" gutterBottom className={classes.donut__title__l}>
                Turnover
              </Typography>
            </Grid>
          </Grid>
        </ScrollAnimation>

        <PlayByPlay />
      </div>
    );
  }
}

export default withStyles(styles)(Charts);

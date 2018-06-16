import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  game__team__stats__box__container: {
    display: 'inline-block',
    width: '24%',
    marginLeft: '4%',
    verticalAlign: 'top'
  },
  game__team__stats__box: {
    padding: '1em',
    marginBottom: '4.25em'
  }
});

const SeasonalStanding = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.game__team__stats__box__container}>
      {/*<GameMenu />*/}
      <Grid item md={12}>
        <Paper className={classes.game__team__stats__box} elevation={4}>
          <div>
            <Typography variant="caption" style={{ display: 'inline-block' }}>
              Wins / Loss
            </Typography>
            <Typography variant="subheading" style={{ display: 'inline-block', color: '#03A9F4', float: 'right' }}>
              5th
            </Typography>
            <Typography
              variant="title"
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
            <Typography variant="subheading" style={{ display: 'inline-block', color: '#03A9F4', float: 'right' }}>
              11th
            </Typography>
            <Typography
              variant="title"
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
            <Typography variant="subheading" style={{ display: 'inline-block', color: '#03A9F4', float: 'right' }}>
              6th
            </Typography>
            <Typography
              variant="title"
              style={{ marginTop: '.5em', fontWeight: 700, textAlign: 'center', color: 'rgba(0,0,0,.87)' }}
            >
              89
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SeasonalStanding);

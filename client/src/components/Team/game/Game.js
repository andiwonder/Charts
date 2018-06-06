import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import listOfTeams from '../listOfTeams';

const styles = theme => ({
  game__team__logo__img: {
    width: '3rem',
    display: 'block',
    margin: '0 auto'
  },
  game__team__container: {
    display: 'inline-block',
    width: '13%'
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
    backgroundColor: 'blue'
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
  }
});

const Game = props => {
  // data required for this component

  //date

  // home_team_alias
  // home_team_mark
  // home_team_name
  // home_team__score

  // away_team_alias
  // away_team_mark
  // away_team_name
  // away_team__score

  const { date } = props;
  const formattedDate = date.substring(0, date.indexOf('T') - 1);

  // IF BACKEND WAS CORRECT, I WOULD USED THIS
  // const { home_team_name, home_team_mark, home_team_alias, home_team__score } = props;
  // const { away_team_name, away_team_mark, away_team_alias, away_team__score } = props;

  // Messed up back-end and didnt include name, hand to filter out name by alias
  const { home_team_alias, home_team__score } = props;
  var current_home_team = listOfTeams.filter(function(team) {
    return team.alias == home_team_alias;
  });
  const home_team_name = current_home_team[0].name;

  // Messed up back-end and didnt include name, hand to filter out name by alias
  const { away_team_alias, away_team__score } = props;
  var current_away_team = listOfTeams.filter(function(team) {
    return team.alias == away_team_alias;
  });
  console.log(current_away_team);
  const away_team_name = current_away_team[0].name;

  const { classes } = props;

  // get bar widths
  const home_team__score_int = parseInt(home_team__score, 10);
  const away_team__score_int = parseInt(away_team__score, 10);
  const home_team_bar = Math.round(
    home_team__score_int / (home_team__score_int + away_team__score_int) * 100 * 100 / 100
  );
  const away_team_bar = 100 - home_team_bar;
  const home_team_bar_string = home_team_bar.toString() + '%';
  const away_team_bar_string = away_team_bar.toString() + '%';

  // some destructuring

  return (
    <div>
      <Typography variant="caption" component="h4" noWrap>
        {formattedDate}
      </Typography>
      <Grid item md={12} className={classes.game__team__item}>
        <Paper elevation={1} className={classes.game__team__paper}>
          <div className={classes.game__team__container}>
            <img
              src={'/images/team_logos/' + home_team_alias + '.png'}
              alt=""
              className={classes.game__team__logo__img}
            />
          </div>
          <div className={classes.game__team__score__container}>
            <div className={classes.game__team__score__text}>
              <div className={classes.game__team__score}>
                <Typography variant="body2" component="h4" noWrap>
                  {`${home_team_name} - ${home_team__score}`}
                </Typography>
              </div>
              <div className={(classes.game__team__score, classes.game__team__away)}>
                <Typography variant="body2" component="h4" noWrap>
                  {`${away_team__score} - ${away_team_name} `}
                </Typography>
              </div>
            </div>
            <div className={classes.game__team__score__bars}>
              <div className={classes.game__team__bar__home} style={{ width: home_team_bar_string }} />
              <div className={classes.game__team__bar__away} style={{ width: away_team_bar_string }} />
            </div>
          </div>
          <div className={classes.game__team__container}>
            <img
              src={'/images/team_logos/' + away_team_alias + '.png'}
              alt=""
              className={classes.game__team__logo__img}
            />
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Game);

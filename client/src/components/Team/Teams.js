import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: 345,
    paddingTop: '1em',
    borderRadius: '4px'
  },
  media: {
    height: 0,
    width: '55%',
    display: 'block',
    margin: '0 auto',
    paddingTop: '60.25%' // 16:9
  },
  content: {
    padding: '16px 10px 16px 10px !important'
  },
  teamName: {
    letterSpacing: '.5px',
    fontWeight: 700
  }
};

const teams = [
  {
    name: 'Wizards',
    market: 'Washington',
    alias: 'WAS'
  },
  {
    name: 'Hornets',
    market: 'Charlotte',
    alias: 'CHA'
  },
  {
    name: 'Hawks',
    market: 'Atlanta',
    alias: 'ATL'
  },
  {
    name: 'Heat',
    market: 'Miami',
    alias: 'MIA'
  },
  {
    name: 'Magic',
    market: 'Orlando',
    alias: 'ORL'
  },
  {
    name: 'Knicks',
    market: 'New York',
    alias: 'NYK'
  },
  {
    name: '76ers',
    market: 'Philadelphia',
    alias: 'PHI'
  },
  {
    name: 'Nets',
    market: 'Brooklyn',
    alias: 'BKN'
  },
  {
    name: 'Celtics',
    market: 'Boston',
    alias: 'BOS'
  },
  {
    name: 'Raptors',
    market: 'Toronto',
    alias: 'TOR'
  },
  {
    name: 'Bulls',
    market: 'Chicago',
    alias: 'CHI'
  },
  {
    name: 'Cavaliers',
    market: 'Cleveland',
    alias: 'CLE'
  },
  {
    name: 'Pacers',
    market: 'Indiana',
    alias: 'IND'
  },
  {
    name: 'Pistons',
    market: 'Detroit',
    alias: 'DET'
  },
  {
    name: 'Bucks',
    market: 'Milwaukee',
    alias: 'MIL'
  },
  {
    name: 'Timberwolves',
    market: 'Minnesota',
    alias: 'MIN'
  },
  {
    name: 'Jazz',
    market: 'Utah',
    alias: 'UTA'
  },
  {
    name: 'Thunder',
    market: 'Oklahoma City',
    alias: 'OKC'
  },
  {
    name: 'Trail Blazers',
    market: 'Portland',
    alias: 'POR'
  },
  {
    name: 'Nuggets',
    market: 'Denver',
    alias: 'DEN'
  },
  {
    name: 'Grizzlies',
    market: 'Memphis',
    alias: 'MEM'
  },
  {
    name: 'Rockets',
    market: 'Houston',
    alias: 'HOU'
  },
  {
    name: 'Pelicans',
    market: 'New Orleans',
    alias: 'NOP'
  },
  {
    name: 'Spurs',
    market: 'San Antonio',
    alias: 'SAS'
  },
  {
    name: 'Mavericks',
    market: 'Dallas',
    alias: 'DAL'
  },
  {
    name: 'Warriors',
    market: 'Golden State',
    alias: 'GSW'
  },
  {
    name: 'Lakers',
    market: 'Los Angeles',
    alias: 'LAL'
  },
  {
    name: 'Clippers',
    market: 'Los Angeles',
    alias: 'LAC'
  },
  {
    name: 'Suns',
    market: 'Phoenix',
    alias: 'PHX'
  },
  {
    name: 'Kings',
    market: 'Sacramento',
    alias: 'SAC'
  }
];

function compare(a, b) {
  if (a.market < b.market) return -1;
  if (a.market > b.market) return 1;
  return 0;
}

function Teams(props) {
  const { classes } = props;

  const teamCards = teams.sort(compare).map(team => {
    return (
      <Grid item md={3}>
        <Card className={classes.card} component={Link} to={"/schedule/" + team.alias}>
          <CardMedia
            className={classes.media}
            image={`/images/team_logos/${team.alias.toLowerCase()}.png`}
            title={`${team.name}`}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom component="h4" align="center" noWrap className={classes.teamName}>
              {`${team.market} ${team.name}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        {teamCards}
      </Grid>
    </div>
  );
}

Teams.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Teams);

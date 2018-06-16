import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material UI Stuff
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// List of teams, Redux
import { bindActionCreators } from 'redux';
import teams from './listOfTeams';
import { connect } from 'react-redux';
import { getTeamSchedule } from '../../actions/index';

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

function compare(a, b) {
  if (a.market < b.market) return -1;
  if (a.market > b.market) return 1;
  return 0;
}

export class Teams extends Component {
  render() {
    const { getTeamSchedule, classes } = this.props;

    const teamCards = teams.sort(compare).map(team => {
      return (
        <Grid
          key={team.alias}
          item
          md={3}
          onClick={() => {
            getTeamSchedule(team.alias);
            // setSelectedTeamId(team.id);
            // getTeamStats(team.id);
          }}
        >
          <Card className={classes.card} component={Link} to={'/schedule/' + team.alias}>
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
}

function Teams(props) {}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTeamSchedule }, dispatch);
}

Teams.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Teams));

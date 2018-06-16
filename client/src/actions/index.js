import axios from 'axios';
import store from '../index';

export const FETCH_TEAM = 'fetch_team';
export const FETCH_GAME = 'fetch_game';
export const FETCH_SCHEDULE = 'fetch_schedule';
export const FETCH_STANDINGS = 'fetch_standings';
export const FETCH_SEASONAL_STATS = 'fetch_seasonal_stats';
export const FETCH_SEASONAL_STANDING = 'fetch_seasonal_standing';
export const FETCH_PLAY_BY_PLAY = 'fetch_play_by_play';

export const getTeamSchedule = team => async dispatch => {
  const res = await axios.get('http://35.169.170.18:8080/nba/api/games/' + team);
  dispatch({ type: FETCH_SCHEDULE, payload: res.data });
};

export const getSeasonalStats = () => async dispatch => {
  const res = await axios.get('http://35.169.170.18:8080/nba/api/seasonalstats/');
  dispatch({ type: FETCH_SEASONAL_STATS, payload: res.data });
};

export const getSeasonalStanding = () => async dispatch => {
  const res = await axios.get('http://35.169.170.18:8080/nba/api/seasonalstanding/');
  const teamsArr = [];
  await res.data.conferences.map(conference => {
    conference.divisions.map(division => {
      division.teams.map(team => {
        teamsArr.push(team);
      });
    });
  });
  dispatch({ type: FETCH_SEASONAL_STANDING, payload: teamsArr });
};

export const getPlayByPlay = game => async dispatch => {
  const res = await axios.get('http://35.169.170.18:8080/nba/api/playbyplay/' + game);
  const plays = parse_plays(res.data);
  dispatch({ type: FETCH_PLAY_BY_PLAY, playload: plays });
};

// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };

const parse_plays = json_data => {
  let events_arr = [];
  let unique_events = [];
  let homeTeamScore = 0;
  let awayTeamScore = 0;

  let homeTeam = json_data.home.name;
  let awayTeam = json_data.away.name;

  json_data.periods.map(period => {
    let quarter = period.number;
    period.events.map(event => {
      if (
        event.event_type === 'twopointmade' ||
        event.event_type === 'threepointmade' ||
        event.event_type === 'freethrowmade'
      ) {
        if (event.event_type === 'twopointmade') {
          if (event.attribution.name == homeTeam) {
            homeTeamScore = homeTeamScore + 2;
          } else {
            awayTeamScore = awayTeamScore + 2;
          }
        } else if (event.event_type == 'threepointmade') {
          if (event.attribution.name == homeTeam) {
            homeTeamScore = homeTeamScore + 3;
          } else {
            awayTeamScore = awayTeamScore + 3;
          }
        } else if (event.event_type == 'freethrowmade') {
          var posOf = event.description.indexOf('of');
          var num = +event.description.charAt(posOf - 2);
          if (event.attribution.name == homeTeam) {
            homeTeamScore = homeTeamScore + num;
          } else {
            awayTeamScore = awayTeamScore + num;
          }
        }
        const { clock, description, event_type } = event;
        let currEvent = {};
        currEvent.homeTeamScore = homeTeamScore;
        currEvent.awayTeamScore = awayTeamScore;
        currEvent.clock = clock;
        currEvent.description = description;
        currEvent.event_type = event_type;
        events_arr.push({ ...currEvent, quarter });
      }
    });
  });

  return events_arr;
};

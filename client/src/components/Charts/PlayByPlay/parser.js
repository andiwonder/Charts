const parser = pbp_json_data => {
  let events_arr = [];
  let unique_events = [];
  let homeTeamScore = 0;
  let awayTeamScore = 0;

  let homeTeam = pbp_json_data.home.name;
  let awayTeam = pbp_json_data.away.name;

  pbp_json_data.periods.map(period => {
    // console.log(period.events.length);
    let quarter = period.number;
    period.events.map(event => {
      // console.log(event.event_type);
      if (
        event.event_type === 'twopointmade' ||
        event.event_type === 'threepointmade' ||
        event.event_type === 'freethrowmade'
      ) {
        const { clock, description, event_type } = event;
        let currEvent = {};

        if (event.attribution.name == homeTeam) {
          currEvent.scoringteam = 'home';
        } else {
          currEvent.scoringteam = 'away';
        }

        if (event.event_type === 'twopointmade') {
          currEvent.scoreType = '2pts';
          if (event.attribution.name == homeTeam) {
            homeTeamScore = homeTeamScore + 2;
          } else {
            awayTeamScore = awayTeamScore + 2;
          }
        } else if (event.event_type == 'threepointmade') {
          currEvent.scoreType = '3pts';
          if (event.attribution.name == homeTeam) {
            homeTeamScore = homeTeamScore + 3;
          } else {
            awayTeamScore = awayTeamScore + 3;
          }
        } else if (event.event_type == 'freethrowmade') {
          currEvent.scoreType = 'fts';
          var posOf = event.description.indexOf('of');
          var num = +event.description.charAt(posOf - 2);
          if (event.attribution.name == homeTeam) {
            homeTeamScore = homeTeamScore + num;
          } else {
            awayTeamScore = awayTeamScore + num;
          }
        }

        currEvent.homeTeamScore = homeTeamScore;
        currEvent.awayTeamScore = awayTeamScore;
        currEvent.clock = clock;
        currEvent.description = description;
        currEvent.event_type = event_type;
        events_arr.push({ ...currEvent, quarter });
        // console.log(currEvent);
      }
    });
  });
  return events_arr;
};

export default parser;

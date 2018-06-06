var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/schedule.json', 'utf8'));

// console.log(obj.games[0]);

let gamesArr = [];
obj.games.map(game => {
  let newObj = {};
  newObj['date'] = game.scheduled;
  newObj['game_id'] = game.id;
  newObj['home_team_id'] = game.home.id;
  newObj['home_team_alias'] = game.home.alias;
  newObj['home_points'] = game.home_points;
  newObj['away_team_id'] = game.away.id;
  newObj['away_team_alias'] = game.away.alias;
  newObj['away_points'] = game.away_points;
  gamesArr.push(newObj);
});

console.log(gamesArr[0]);

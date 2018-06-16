// THIS FILE IS USED TO CREATE A SQL DUMP SEED FILE
// THE FILE WILL BE USED TO FILL UP THE DATABASE

const Sequelize = require('sequelize');
var fs = require('fs');
const sequelize = new Sequelize('postgres://iamwetalldid:password@localhost:5432/nba');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var Game = sequelize.define('game', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  api_game_id: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.STRING
  },
  home_team_id: {
    type: Sequelize.STRING
  },
  home_team_alias: {
    type: Sequelize.STRING
  },
  home_points: {
    type: Sequelize.INTEGER
  },
  away_team_id: {
    type: Sequelize.STRING
  },
  away_team_alias: {
    type: Sequelize.STRING
  },
  away_points: {
    type: Sequelize.INTEGER
  }
});

// Game.sync({ force: true });

var schedule_json_data = JSON.parse(fs.readFileSync('./data/schedule.json', 'utf8'));

schedule_json_data.games.map(game => {
  console.log(game.id);
  let newObj = {};
  newObj['date'] = game.scheduled;
  newObj['api_game_id'] = game.id;
  newObj['home_team_id'] = game.home.id;
  newObj['home_team_alias'] = game.home.alias;
  newObj['home_points'] = game.home_points;
  newObj['away_team_id'] = game.away.id;
  newObj['away_team_alias'] = game.away.alias;
  newObj['away_points'] = game.away_points;
  Game.create(newObj);
});

// User.create({
//   user_name: 'red',
//   first_name: 'blue',
//   last_name: 'green'
// })

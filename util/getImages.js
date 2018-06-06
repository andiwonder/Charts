var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

url = 'http://www.espn.com/nba/team/roster/_/name/nyk';
let playersArr = [];

var download = async function(uri, filename, callback) {
  request.head(uri, function(err, res, body) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
};

request(url, async function(error, response, html) {
  if (!error) {
    var $ = cheerio.load(html);
    $('tr').each(function(i, elm) {
      if ($(elm).hasClass('oddrow')) {
        playersArr.push(
          $(elm)
            .children()
            .find('a')
            .attr('href')
        );
      }
    });

    $('tr').each(function(i, elm) {
      if ($(elm).hasClass('evenrow')) {
        playersArr.push(
          $(elm)
            .children()
            .find('a')
            .attr('href')
        );
      }
    });
  }

  playersArr.map((player, i) => {
    console.log(player);
    let playerName = player.match(/[^/]+$/g)[0].replace('-', '_');
    let playerId = player
      .split('/')
      .splice(-2)
      .splice(0, 1);

    let imagesURL = `http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/${playerId}.png&w=350&h=254`;

    download(imagesURL, `./sample/${playerName}.png`, function() {
      console.log('done');
    });
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;

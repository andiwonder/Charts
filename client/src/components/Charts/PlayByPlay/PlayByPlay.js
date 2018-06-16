import React from 'react';
import data from './pbp.json';
import * as d3 from 'd3';
import parser from './parser';
import { Grid, Axis } from '../LineChart/GridAxis';
import PlayerAvatar from '../ScoreTable/PlayerAvatar';

const PlayByPlay = () => {
  console.log('data is ');
  const events = parser(data);
  const myevents = [];
  // console.log(events);
  let count = 0;

  events.map(event => {
    if (event.quarter === 1) {
      count++;
      myevents.push(event);
    }
  });

  console.log(myevents[0]);
  console.log(myevents[5]);

  const margin = { top: 5, right: 50, bottom: 20, left: 50 };
  let w = count * 200;
  let h = 500;
  const home = {};
  let tracker = [];

  const x = d3
    .scaleBand()
    .domain(
      myevents.map(function(d) {
        return d.clock;
      })
    )
    .rangeRound([0, w]);

  const y = d3
    .scaleLinear()
    .domain([-3, 3])
    .range([0, h * 2]);

  const home_alias = 'IND';
  const away_alias = 'BKN';

  const avatars = [];

  myevents.map(function(d) {
    let yloc = 0;
    if (d.scoreType === '2pts' && d.scoringteam === 'home') {
      // console.log(y(2));
      // return 2;
      yloc = parseInt(y(2)) || 0;
    } else if (d.scoreType === '3pts' && d.scoringteam === 'home') {
      // console.log(y(3));
      // yloc = 3;
      yloc = parseInt(y(2)) || 0;
    } else if (d.scoreType === 'fts' && d.scoringteam === 'home') {
      // console.log(y(1));
      // yloc = 1;
      yloc = parseInt(y(2)) || 0;
    } else if (d.scoreType === '2pts' && d.scoringteam === 'away') {
      // console.log(y(-2));
      // yloc = -2;
      yloc = y(-2);
    } else if (d.scoreType === '3pts' && d.scoringteam === 'away') {
      // console.log(y(-3));
      // yloc = -3;
      yloc = y(-3);
    } else if (d.scoreType === 'fts' && d.scoringteam === 'away') {
      // console.log(y(-1));
      // yloc = -1;
      yloc = y(-1);
    }
    avatars.push(<PlayerAvatar x={x(d.clock) + 100} y={yloc} player={'/images/player/gsw/draymond_green.png'} />);
  });

  const line = d3
    .line()
    .x(d => {
      // console.log('x is ');
      // console.log(x(d.clock) + 50);
      // tracker.push(x(d.clock) + 50);

      return x(d.clock) + 100;
    })
    .y(d => {
      // console.log('y is ');
      if (d.scoreType === '2pts' && d.scoringteam === 'home') {
        // console.log(y(2));
        // return 2;
        return parseInt(y(2)) || 0;
      } else if (d.scoreType === '3pts' && d.scoringteam === 'home') {
        // console.log(y(3));
        // return 3;
        return parseInt(y(2)) || 0;
      } else if (d.scoreType === 'fts' && d.scoringteam === 'home') {
        // console.log(y(1));
        // return 1;
        return parseInt(y(2)) || 0;
      } else if (d.scoreType === '2pts' && d.scoringteam === 'away') {
        // console.log(y(-2));
        // return -2;
        return y(-2);
      } else if (d.scoreType === '3pts' && d.scoringteam === 'away') {
        // console.log(y(-3));
        // return -3;
        return y(-3);
      } else if (d.scoreType === 'fts' && d.scoringteam === 'away') {
        // console.log(y(-1));
        // return -1;
        return y(-1);
      } else {
        debugger;
      }
    })
    .curve(d3.curveStepAfter);

  const yAxis = d3.axisLeft(y).ticks(3);

  const xAxis = d3.axisBottom(x).ticks(4);

  const yGrid = d3
    .axisLeft(y)
    .ticks(5)
    .tickSize(-w, 0, 0)
    .tickFormat('');

  let transform = `translate(${margin.left},${margin.top})`;

  let viewBox = '0, 0,' + w + ', 1100';

  console.log(tracker);

  return (
    <div style={{ width: '2000px', overflow: 'auto' }}>
      <svg viewBox={viewBox}>
        <g transform={transform}>
          <Grid h={h} grid={yGrid} gridType="y" />
          <Axis h={h} axis={yAxis} axisType="y" />
          <Axis h={h} axis={xAxis} axisType="x" />
          <g>
            <path className="awayline shadow" d={line(myevents)} strokeLinecap="round" />
          </g>
          {avatars}
        </g>
      </svg>
    </div>
  );
};

PlayByPlay.defaultProps = {
  width: 800,
  height: 300,
  chartId: 'v1_chart'
};

export default PlayByPlay;

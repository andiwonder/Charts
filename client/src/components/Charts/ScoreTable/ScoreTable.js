import React, { Component } from 'react';
// import PlayerAvatar from './PlayerAvatar';
import * as d3 from 'd3';
import './score_graph.css';

export class ScoreTable extends Component {
  render() {
    const data = [
      { player: 'K_durant', points_2: 16, points_3: 15, points_ft: 5, total: 32 },
      { player: 'S_curry', points_2: 10, points_3: 12, points_ft: 6, total: 28 },
      { player: 'K_thomp', points_2: 12, points_3: 9, points_ft: 0, total: 21 },
      { player: 'J_mcgee', points_2: 10, points_3: 0, points_ft: 0, total: 10 },
      { player: 'D_green', points_2: 4, points_3: 0, points_ft: 0, total: 4 }
    ];

    const data2 = [
      { player: 'L_james', points_2: 24, points_3: 15, points_ft: 5, total: 43 },
      { player: 'K_love', points_2: 6, points_3: 9, points_ft: 3, total: 18 },
      { player: 'G_hill', points_2: 6, points_3: 6, points_ft: 0, total: 12 },
      { player: 'J_smith', points_2: 2, points_3: 9, points_ft: 0, total: 11 },
      { player: 'L_nance', points_2: 10, points_3: 0, points_ft: 0, total: 8 }
    ];

    var stack = d3
      .stack()
      .keys(['points_2', 'points_3', 'points_ft'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const stacked_data = stack(data);
    const stacked_data2 = stack(data2);
    const keys = ['points_2', 'points_3', 'points_ft'];

    // var data2 = [4, 8, 15, 16, 23, 42];

    const width = 420;
    const barHeight = 20;

    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    // const h = 500 - (margin.top + margin.bottom);
    const transform = 'translate(' + margin.left + ',' + margin.top + ')';
    // const transformLeged = 'translate(15 ,150)';

    const allRects = [];
    const allRects2 = [];
    const color = ['#F83C4D', '#FDCB5A', '#4F88FB'];

    const x = d3
      .scaleLinear()
      // .scaleOrdinal('schemeDark2')
      .domain([
        0,
        d3.max(data2, d => {
          return +d.total;
        })
      ])
      .range([0, width]);

    // const x2 = d3
    //   .scaleLinear()
    //   .domain([0, 43])
    //   .range([width, 0]);

    // const y = d3
    //   .scaleOrdinal()
    //   .domain([0, 40])
    //   .range([0, 1, 2, 3, 4]);

    let rectBackground = stacked_data2.map(function(outerd, i) {
      // needs fix, used -5 to get some padding
      outerd.map(function(innerd, j) {
        let label;
        if (i === 0) {
          label = true;
        } else {
          label = false;
        }

        const fill = color[i];
        let width = x(innerd[1]) - x(innerd[0]);
        allRects2.push(
          <g key={innerd.data['player']}>
            {label && (
              <text x="430" y={j * 50 + 10} className="score_label">
                {innerd.data['player'].replace('_', ' ')} - {innerd.data['total']}
              </text>
            )}
            <rect
              className="score_rect"
              fill={fill}
              x={x(innerd[0]) + 430}
              y={j * 50 + 15}
              height={barHeight}
              width={width}
            />
            {width > 0 && (
              <text x={Math.abs(x(innerd[0]) + 430 + width / 2)} y={j * 50 + 30} className="score_text">
                {innerd.data[keys[i]]}
              </text>
            )}
          </g>
        );
      });
    });

    let awayBackground = stacked_data.map(function(outerd, i) {
      // needs fix, used -5 to get some padding
      outerd.map(function(innerd, j) {
        let label;
        if (i == 0) {
          label = true;
        } else {
          label = false;
        }
        const fill = color[i];
        let width = x(innerd[1]) - x(innerd[0]);
        allRects.push(
          <g key={innerd.data['player'] + j}>
            {label && (
              <text x="300" y={j * 50 + 10} className="score_label">
                {innerd.data['total']} - {innerd.data['player'].replace('_', ' ')}
              </text>
            )}
            <rect
              fill={fill}
              className="rotated"
              x={x(innerd[0]) - 410}
              y={j * 50 + 15}
              height={barHeight}
              width={width}
            />
            {width > 0 && (
              <text x={Math.abs(x(innerd[0]) - 410 + width / 2)} y={j * 50 + 30} className="score_text">
                {innerd.data[keys[i]]}
              </text>
            )}
          </g>
        );
      });
    });

    return (
      <svg viewBox="0 0 840 250" id="score_graph_svg">
        {/*<PlayerAvatar />*/}
        <g transform={transform}>{allRects2}</g>
        <g transform={transform}>{allRects}</g>
        <g transform={'translate(15 ,140)'}>
          <rect width="20" height="20" rx="2" rx="2" fill="#F83C4D" />
          <text x="30" y="15" className="browser-legend">
            2-pts
          </text>
        </g>
        <g transform={'translate(15 ,180)'}>
          <rect width="20" height="20" rx="2" rx="2" fill="#FDCB5A" />
          <text x="30" y="15" className="browser-legend">
            3-pts
          </text>
        </g>
        <g transform={'translate(15 ,220)'}>
          <rect width="20" height="20" rx="2" rx="2" fill="#4F88FB" />
          <text x="30" y="15" className="browser-legend">
            Freethrows
          </text>
        </g>
      </svg>
    );
  }
}

export default ScoreTable;

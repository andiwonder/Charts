import React, { Component } from 'react';
import * as d3 from 'd3';
import { Grid, Axis } from './GridAxis';
import Tooltip from './Tooltip';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './line_chart.css';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: { display: false, data: { key: '', value: '' } },
      width: this.props.width
    };
    this.showToolTip = this.showToolTip.bind(this);
    this.hideToolTip = this.hideToolTip.bind(this);
  }

  showToolTip(e) {
    e.target.setAttribute('fill', '#FFFFFF');

    this.setState(
      {
        tooltip: {
          display: true,
          data: {
            key: e.target.getAttribute('data-key'),
            value: e.target.getAttribute('data-value')
          },
          pos: {
            x: e.target.getAttribute('cx'),
            y: e.target.getAttribute('cy')
          }
        }
      },
      () => {
        console.log(this.state);
      }
    );
  }

  hideToolTip(e) {
    e.target.setAttribute('fill', '#7dc7f4');
    this.setState({ tooltip: { display: false, data: { key: '', value: '' } } });
  }

  render() {
    const home = {
      name: 'Celtics',
      data: [
        { qtr: '1st', count: 250 },
        { qtr: '2nd', count: 150 },
        { qtr: '3rd', count: 496 },
        { qtr: '4th', count: 140 }
      ]
    };

    const away = {
      name: 'Cavaliers',
      data: [
        { qtr: '1st', count: 290 },
        { qtr: '2nd', count: 110 },
        { qtr: '3rd', count: 396 },
        { qtr: '4th', count: 240 }
      ]
    };

    // const home = {
    //   name: 'Celtics',
    //   data: [
    //     { qtr: '1st', count: 28.64 },
    //     { qtr: '2nd', count: 28.96 },
    //     { qtr: '3rd', count: 29.2 },
    //     { qtr: '4th', count: 29.28 }
    //   ]
    // };

    // const away = {
    //   name: 'Cavaliers',
    //   data: [
    //     { qtr: '1st', count: 30.2 },
    //     { qtr: '2nd', count: 29.88 },
    //     { qtr: '3rd', count: 28.48 },
    //     { qtr: '4th', count: 28.52 }
    //   ]
    // };

    const margin = { top: 5, right: 50, bottom: 20, left: 50 };
    let w = this.state.width - (margin.left + margin.right);
    let h = this.props.height - (margin.top + margin.bottom);

    const x = d3
      .scaleBand()
      .domain(['1st', '2nd', '3rd', '4th'])
      .rangeRound([0, w]);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(home.data, d => {
          return d.count + 10;
        })
      ])
      .range([h, 0]);

    const line = d3
      .line()
      .x(d => {
        return x(d.qtr) + 90;
      })
      .y(d => {
        return y(d.count);
      })
      .curve(d3.curveLinear);

    const yAxis = d3.axisLeft(y).ticks(3);

    const xAxis = d3.axisBottom(x).ticks(4);

    const yGrid = d3
      .axisLeft(y)
      .ticks(5)
      .tickSize(-w, 0, 0)
      .tickFormat('');

    let transform = `translate(${margin.left},${margin.top})`;

    let viewBox = '0, 0, 800, 300';

    return (
      <div>
        <svg id={this.props.chartId} viewBox={viewBox}>
          <g transform={transform}>
            <Grid h={h} grid={yGrid} gridType="y" />
            <Axis h={h} axis={yAxis} axisType="y" />
            <Axis h={h} axis={xAxis} axisType="x" />
            <g>
              <path className="awayline shadow" d={line(away.data)} strokeLinecap="round" />
            </g>
            <g>
              <path className="line shadow" d={line(home.data)} strokeLinecap="round" />
            </g>
            <Dots
              name={home.name}
              data={home.data}
              x={x}
              y={y}
              showToolTip={this.showToolTip}
              hideToolTip={this.hideToolTip}
            />
            <Dots
              name={away.name}
              data={away.data}
              x={x}
              y={y}
              showToolTip={this.showToolTip}
              hideToolTip={this.hideToolTip}
            />
            <Tooltip tooltip={this.state.tooltip} />
          </g>
        </svg>
      </div>
    );
  }
}

class Dots extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    let circles = data.map((d, i) => {
      return (
        <circle
          className="dot"
          r="5"
          cx={this.props.x(d.qtr) + 90}
          cy={this.props.y(d.count)}
          stroke="#4F88FB"
          strokeWidth="5px"
          key={i}
          fill="#FDCB5A"
          onMouseOver={this.props.showToolTip}
          onMouseOut={this.props.hideToolTip}
          data-key={this.props.name}
          data-value={d.count}
        />
      );
    });

    return <g>{circles}</g>;
  }
}

LineChart.defaultProps = {
  width: 800,
  height: 300,
  chartId: 'v1_chart'
};

export default LineChart;

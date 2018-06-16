import React, { Component } from 'react';
import * as d3 from 'd3';
// import Typography from '@material-ui/core/Typography';

// TO-DO
// function arcTween(oldData, newData, arc) {
//   const copy = { ...oldData };
//   return function() {
//     const interpolateStartAngle = d3.interpolate(oldData.startAngle, newData.startAngle),
//       interpolateEndAngle = d3.interpolate(oldData.endAngle, newData.endAngle);

//     return function(t) {
//       copy.startAngle = interpolateStartAngle(t);
//       copy.endAngle = interpolateEndAngle(t);
//       return arc(copy);
//     };
//   };
// }

export default class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    this.pie = d3
      .pie()
      .value(d => {
        return d.count;
      })
      .padAngle(this.props.padAngle)
      .sort(null);

    this.color = d3.scaleOrdinal().range(['#4F88FB', '#F83C4D']);

    const missed = this.props.att - this.props.made || 45;
    const data = [{ name: 'made', count: this.props.made || 55 }, { name: 'missed', count: missed || 45 }];

    this.setState({ data: data, width: this.props.width });
  }

  render() {
    const viewbox = '0 0 450 250';

    return (
      <svg id={this.props.id} className="shadow" viewBox={viewbox}>
        <DonutChartPath
          width={this.state.width}
          height={this.props.height}
          pie={this.pie}
          color={this.color}
          data={this.state.data}
          style={{ filter: 'filter: drop-shadow( 0px 2px 2px rgba(0,0,0,.3) );' }}
        />
        <DonutChartLegend
          pie={this.pie}
          color={this.color}
          data={this.state.data}
          width={this.state.width}
          height={this.props.height}
        />
      </svg>
    );
  }
}

DonutChart.defaultProps = {
  width: 450,
  height: 250,
  padAngle: 0
};

class DonutChartPath extends Component {
  constructor(props) {
    super(props);
    this.createChart = this.createChart.bind(this);
  }

  componentWillMount() {
    let radius = this.props.height;

    let outerRadius = radius / 2;
    let innerRadius = radius / 3.3;

    this.arc = d3
      .arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    this.transform = `translate(${radius / 2},${radius / 2})`;
  }

  createChart() {
    let paths = this.props.pie(this.props.data).map((d, i) => {
      return <path fill={this.props.color(i)} d={this.arc(d)} key={i} />;
    });
    return paths;
  }

  render() {
    let paths = this.createChart();

    return <g transform={this.transform}>{paths}</g>;
  }
}

class DonutChartLegend extends Component {
  constructor(props) {
    super(props);
    this.createChart = this.createChart.bind(this);
  }

  createChart() {
    let texts = this.props.pie(this.props.data).map((d, i) => {
      const transform = `translate(10,${i * 30})`;
      const rectStyle = {
        fill: this.props.color(i),
        stroke: this.props.color(i)
      };
      const textStyle = {
        fill: this.props.color(i)
      };

      return (
        <g transform={transform} key={i}>
          <rect width="20" height="20" style={rectStyle} rx="2" rx="2" />
          <text x="30" y="15" className="browser-legend" style={textStyle}>
            {d.data.name}
          </text>
        </g>
      );
    });
    return texts;
  }

  render() {
    const style = {
      visiblity: 'visible'
    };

    if (this.props.width <= this.props.height + 70) {
      style.visiblity = 'hidden';
    }
    let texts = this.createChart();
    let transform = `translate(${this.props.width / 2 + 80},55)`;
    return (
      <g is transform={transform} style={style}>
        {texts}
      </g>
    );
  }
}

// DonutChart.defaultProps

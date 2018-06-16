import React, { Component } from 'react';

// for routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// for material ui and stlying
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/** ------------Custom components--------- */
// for layout
import SideBar from './components/Layout/sidebar/SideBar';
import SideBar2 from './components/Layout/sidebar/SideBar2';
import Header from './components/Layout/header/Header';

// Teams
import Teams from './components/Team/Teams';
import News from './components/News/News';
import Schedule from './components/Team/Schedule';
import Roster from './components/Team/Roster';
import Charts from './components/Charts/Charts';

// SeasonalStats
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSeasonalStanding } from './actions/index';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
    // paddingTop: '.5em'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Roboto Mono"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

const Scratch = () => {
  return <h1>Hello</h1>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  componentWillMount() {
    this.props.getSeasonalStanding();
  }

  handleDrawerOpen() {
    this.setState({
      left: true
    });
  }

  toggleDrawer = open => () => {
    this.setState({
      left: open
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Header handleDrawerOpen={this.handleDrawerOpen} />
            <SideBar2 toggleDrawer={this.toggleDrawer} open={this.state.left} />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/" component={Teams} />
                <Route exact path="/news" component={News} />
                <Route exact path="/teams/:name" component={Scratch} />
                <Route exact path="/schedule/:name" component={Schedule} />
                <Route exact path="/roster" component={Roster} />
                <Route exact path="/charts" component={Charts} />
              </Switch>
            </main>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSeasonalStanding }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));

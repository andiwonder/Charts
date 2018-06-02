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
import Header from './components/Layout/header/Header';
// Teams
import Teams from './components/Team/Teams';
import News from './components/News/News';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    paddingTop: '2em'
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

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Header />
            <SideBar />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/" component={Teams} />
                <Route exact path="/news" component={News} />
              </Switch>
            </main>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default withStyles(styles)(App);

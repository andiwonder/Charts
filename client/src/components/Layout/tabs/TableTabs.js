import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PointsTable from '../../Team/tables/PointsTable';
import PointsTypeTable from '../../Team/tables/PointsTypeTable';
import HustleTable from '../../Team/tables/HustleTable';
import GritTable from '../../Team/tables/GritTable';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: '0px !important'
  }
});

class TableTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Points" />
            <Tab label="Type" />
            <Tab label="Hustle" />
            <Tab label="Energy" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Grid container spacing={0}>
              <PointsTable />
            </Grid>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Grid container spacing={0}>
              <PointsTypeTable />
            </Grid>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <Grid container spacing={0}>
              <HustleTable />
            </Grid>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <Grid container spacing={0}>
              <GritTable />
            </Grid>
          </TabContainer>
        )}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

TableTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableTabs);

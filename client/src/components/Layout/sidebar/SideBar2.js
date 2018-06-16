import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  toolbar: theme.mixins.toolbar
});

class SideBar2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, open, toggleDrawer } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        {/*<Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>*/}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleDrawer(false)} style={{ float: 'right', marginRight: '1em' }}>
              {open === false ? (
                <ChevronRightIcon style={{ fontSize: '40px' }} />
              ) : (
                <ChevronLeftIcon style={{ fontSize: '40px' }} />
              )}
            </IconButton>
          </div>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer('left', false)}
            onKeyDown={this.props.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SideBar2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar2);

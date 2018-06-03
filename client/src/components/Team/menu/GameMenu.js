import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class GameMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div style={{ display: 'inline-block', float: 'right', marginRight: '8.33%', marginTop: '2.5%' }}>
        <Button
          variant="outlined"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Select Indicator
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <MenuItem onClick={this.handleClose}>Score</MenuItem>
          <MenuItem onClick={this.handleClose}>3-pts</MenuItem>
          <MenuItem onClick={this.handleClose}>2-pts</MenuItem>
          <MenuItem onClick={this.handleClose}>Freethrows</MenuItem>
          <MenuItem onClick={this.handleClose}>Rebounds</MenuItem>
          <MenuItem onClick={this.handleClose}>Assits</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default GameMenu;

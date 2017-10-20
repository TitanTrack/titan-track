import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    display: 'inline-block',
  },
};

class IconMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleItemOnClick = (itemOnClick) => () => {
    itemOnClick();
    this.handleRequestClose();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <IconButton
          aria-label="More"
          aria-owns={this.state.open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
        {this.props.items.map(({ onClick, label }, index) => (
          <MenuItem
            selected={false}
            key={`${label}${index}`}
            onClick={this.handleItemOnClick(onClick)}
          >
            {label}
          </MenuItem>
        ))}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(IconMenu);

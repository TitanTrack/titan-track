import React, { Component } from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

const styles = {
  avatar: {
    width: 24,
    height: 24,
  },
};

class ProfileNavItem extends Component {
  render () {
    return (
      <ListItem dense>
        <Avatar
          alt="profile picture"
        />
      <ListItemText primary="Username" />
      </ListItem>
    );
  }
}

export default withStyles(styles)(ProfileNavItem);

import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
  avatar: {
    width: 24,
    height: 24,
  },
};

class ProfileNavItem extends Component {
  render () {
    const { classes } = this.props;
    return (
      <ListItem dense>
        <Avatar
          alt="profile picture"
          src="https://lh3.googleusercontent.com/-_acoJLGn3GY/AAAAAAAAAAI/AAAAAAAAAFw/-QaMEkW61Bw/photo.jpg"
        />
      <ListItemText primary={"Kerem Kazan"} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(ProfileNavItem);

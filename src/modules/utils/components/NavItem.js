import React, { Component } from 'react';
import withNavigation from '../hocs/withNavigation';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import {
  array,
  string,
  object,
  func,
} from 'prop-types';

class NavItem extends Component {
  static propTypes = {
    label: string.isRequired,
    icon: object.isRequired,
    activeRegex: string.isRequired,
    path: string.isRequired,
    isActive: func.isRequired,
  }

  isActive = () => {
    const { activeRegex } = this.props;
    return this.props.isActive(activeRegex);
  }

  render () {
    const {
      label,
      icon,
      activeRegex,
      path,
    } = this.props;
    if (this.isActive()) {
      console.log('Is Active: ', label);
    }
    return (
      <ListItem
        dense
        button
        component={Link}
        to={path}
      >
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={label}
        />
      </ListItem>
    )
  }
}

export default withNavigation(NavItem);

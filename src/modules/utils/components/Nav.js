import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import {
  array,
  string,
  object,
  func,
} from 'prop-types';
import withNavigation from '../hocs/withNavigation';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import ProfileNavItem from './ProfileNavItem';
import NavItem from './NavItem';
import Divider from 'material-ui/Divider';

class Nav extends Component {
  static propTypes = {
    navItems: array.isRequired,
  }

  render () {
    const {
      classes,
      navItems,
    } = this.props;
    return (
      <List>
        {navItems.map((navItem, index) => (
          navItem.specialNavItem === 'profile' ?
          <ProfileNavItem key={`profileNavItem${index}`} />
          :
          navItem.specialNavItem === 'divider' ?
          <Divider key={`divider${index}`} />
          :
          <NavItem
            key={`${navItem.label}-${index}`}
            label={navItem.label}
            icon={navItem.icon}
            activeRegex={navItem.activeRegex}
            path={navItem.path}
          />
        ))}
      </List>
    );
  }
}

export default withNavigation(Nav);

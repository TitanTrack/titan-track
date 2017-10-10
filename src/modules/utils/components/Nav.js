import React, { Component } from 'react';
import List from 'material-ui/List';
import {
  array,
} from 'prop-types';
import withNavigation from '../hocs/withNavigation';
import ProfileNavItem from './ProfileNavItem';
import NavItem from './NavItem';
import Divider from 'material-ui/Divider';

class Nav extends Component {
  static propTypes = {
    navItems: array.isRequired,
  }

  render () {
    const {
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

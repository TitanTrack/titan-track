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

class NakedNavItem extends Component {
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

const NavItem = withNavigation(NakedNavItem);

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

import React from 'react';
import DashboardIcon from 'material-ui-icons/Dashboard';
import CheckIcon from 'material-ui-icons/Check';
import SettingsIcon from 'material-ui-icons/Settings';


const navItems = [{
  label: 'Dashboard',
  icon: <DashboardIcon />,
  path: '/',
  activeRegex: '/',
}, {
  label: 'Todos',
  icon: <CheckIcon />,
  path: '/todos',
  activeRegex: '/todos',
}, {
  label: 'Settings',
  icon: <SettingsIcon />,
  path: '/settings',
  activeRegex: '/settings',
}];

export default navItems;

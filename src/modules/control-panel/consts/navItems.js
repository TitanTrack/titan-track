import React from 'react';
import DashboardIcon from 'material-ui-icons/Dashboard';
import CheckIcon from 'material-ui-icons/Check';
import SettingsIcon from 'material-ui-icons/Settings';


const navItems = [{
  label: 'Dashboard',
  icon: <DashboardIcon />,
  path: '/',
}, {
  label: 'Todos',
  icon: <CheckIcon />,
  path: '/todos',
}, {
  label: 'Settings',
  icon: <SettingsIcon />,
  path: '/settings',
}];

export default navItems;

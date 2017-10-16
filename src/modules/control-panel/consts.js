import React from 'react';
import DashboardIcon from 'material-ui-icons/Dashboard';
import CheckIcon from 'material-ui-icons/Check';
import SettingsIcon from 'material-ui-icons/Settings';
import JournalIcon from 'material-ui-icons/LibraryBooks';

export const navItems = [{
  specialNavItem: 'profile',
},{
  specialNavItem: 'divider',
},
{
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
  label: 'Journals',
  icon: <JournalIcon />,
  path: '/journals',
  activeRegex: '/journals',
}, {
  label: 'Settings',
  icon: <SettingsIcon />,
  path: '/settings',
  activeRegex: '/settings',
}];

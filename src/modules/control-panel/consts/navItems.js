import React from 'react';
import MenuIcon from 'material-ui-icons/Menu';
import EditIcon from 'material-ui-icons/Edit';
import CheckIcon from 'material-ui-icons/Check';
import DashboardIcon from 'material-ui-icons/Dashboard';

const navItems = [{
  label: 'Dashboard',
  icon: <DashboardIcon />,
  path: '/',
}, {
  label: 'Todos',
  icon: <CheckIcon />,
  path: '/todos',
}];

export default navItems;

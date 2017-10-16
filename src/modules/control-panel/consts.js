import React from 'react';
import DashboardIcon from 'material-ui-icons/Dashboard';
import CheckIcon from 'material-ui-icons/Check';
import SettingsIcon from 'material-ui-icons/Settings';
import JournalIcon from 'material-ui-icons/LibraryBooks';
import TimeBudgetIcon from 'material-ui-icons/Schedule';
import LearnIcon from 'material-ui-icons/School';
import CommunityIcon from 'material-ui-icons/Group';
import TrackersIcon from 'material-ui-icons/Explore';

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
  label: 'Time Budget',
  icon: <TimeBudgetIcon />,
  path: '/time-budget',
  activeRegex: '/time-budget',
}, {
  label: 'Todos',
  icon: <CheckIcon />,
  path: '/todos',
  activeRegex: '/todos',
}, {
  label: 'Trackers',
  icon: <TrackersIcon />,
  path: '/trackers',
  activeRegex: '/trackers',
}, {
  label: 'Journals',
  icon: <JournalIcon />,
  path: '/journals',
  activeRegex: '/journals',
}, {
  label: 'Learn',
  icon: <LearnIcon />,
  path: '/learn',
  activeRegex: '/learn',
}, {
  label: 'Community',
  icon: <CommunityIcon />,
  path: '/community',
  activeRegex: '/community',
}, {
  label: 'Settings',
  icon: <SettingsIcon />,
  path: '/settings',
  activeRegex: '/settings',
}];

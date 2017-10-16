import React from 'react';
import DashboardIcon from 'material-ui-icons/Dashboard';
import CheckIcon from 'material-ui-icons/Check';
import SettingsIcon from 'material-ui-icons/Settings';
import JournalIcon from 'material-ui-icons/LibraryBooks';
import TimeBudgetIcon from 'material-ui-icons/Schedule';
import LearnIcon from 'material-ui-icons/School';
import CommunityIcon from 'material-ui-icons/Group';
import TrackersIcon from 'material-ui-icons/Explore';
import GoalsIcon from 'material-ui-icons/FitnessCenter';
import ScheduleIcon from 'material-ui-icons/DateRange';
import LogsIcon from 'material-ui-icons/Note';
import FlowchartsIcon from 'material-ui-icons/CallSplit';

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
  label: 'Goals',
  icon: <GoalsIcon />,
  path: '/goals',
  activeRegex: '/goals',
}, {
  label: 'Time Budget',
  icon: <TimeBudgetIcon />,
  path: '/time-budget',
  activeRegex: '/time-budget',
}, {
  label: 'Schedule',
  icon: <ScheduleIcon />,
  path: '/schedule',
  activeRegex: '/schedule',
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
  label: 'Logs',
  icon: <LogsIcon />,
  path: '/logs',
  activeRegex: '/logs',
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
  label: 'Flow Charts',
  icon: <FlowchartsIcon />,
  path: '/flowcharts',
  activeRegex: '/flowcharts',
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

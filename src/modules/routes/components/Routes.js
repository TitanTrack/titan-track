import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { history } from '../../../store';
import ControlPanelMainLayout from '../../control-panel/components/MainLayout';

import SigninPage from '../../auth/components/SigninPage';
import DashboardPage from '../../dashboard/components/DashboardPage';
import TodosMainPage from '../../todos/components/TodosMainPage';
import TodosListPage from '../../todos/components/TodosListPage';
import SettingsPage from '../../settings/components/SettingsPage';

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (<ControlPanelMainLayout><DashboardPage /></ControlPanelMainLayout>)}
          />
          <Route
            exact
            path="/todos"
            component={() => (<ControlPanelMainLayout><TodosMainPage /></ControlPanelMainLayout>)}
          />
          <Route
            path="/todos/:tid"
            component={() => (<ControlPanelMainLayout><TodosListPage /></ControlPanelMainLayout>)}
          />
          <Route
            exact
            path="/settings"
            component={() => (<ControlPanelMainLayout><SettingsPage /></ControlPanelMainLayout>)}
          />
          <Route
            exact
            path="/signin"
            component={() => (<ControlPanelMainLayout><SigninPage /></ControlPanelMainLayout>)}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

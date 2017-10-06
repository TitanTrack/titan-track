import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { history } from '../../../store';
import MainLayout from '../../control-panel/components/MainLayout';

import SigninPage from '../../auth/components/SigninPage';
import DashboardPage from '../../dashboard/components/DashboardPage';
import TodosPage from '../../todos/components/TodosPage';
import SettingsPage from '../../settings/components/SettingsPage';

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={() => (<MainLayout><DashboardPage /></MainLayout>)} />
          <Route exact path="/todos" component={() => (<MainLayout><TodosPage /></MainLayout>)} />
          <Route exact path="/settings" component={() => (<MainLayout><SettingsPage /></MainLayout>)} />
          <Route exact path="/signin" component={() => (<MainLayout><SigninPage /></MainLayout>)} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

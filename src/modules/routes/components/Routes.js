import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import SigninPage from '../../auth/components/SigninPage';
import TodosPage from '../../todos/components/TodosPage';
import { history } from '../../../store';

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/todos" component={TodosPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

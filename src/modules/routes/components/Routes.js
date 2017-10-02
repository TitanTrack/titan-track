import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import SigninPage from '../../auth/components/SigninPage';
import { history } from '../../../store';

class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/signin" component={SigninPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

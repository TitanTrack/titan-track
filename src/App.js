import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import 'typeface-roboto';
import Routes from './modules/routes/components/Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

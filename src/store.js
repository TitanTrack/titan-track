import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import {
  reactReduxFirebase,
  firebaseStateReducer,
} from 'react-redux-firebase';
import {
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  routing: routerReducer,
});
const initialState = {};

export const history = createHistory();

const middleware = [
  routerMiddleware(history),
  // logger,
];

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    reactReduxFirebase({
      apiKey: "AIzaSyDY35I7SyXTo6jaLQ1RWql1PbwbXvk9_4c",
      authDomain: "titan-track-98fcb.firebaseapp.com",
      databaseURL: "https://titan-track-98fcb.firebaseio.com",
      projectId: "titan-track-98fcb",
      storageBucket: "titan-track-98fcb.appspot.com",
      messagingSenderId: "961185076383"
    }, {
      userProfile: 'users',
      enableLogging: false
    })
  )
);

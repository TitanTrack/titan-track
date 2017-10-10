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
  firestoreReducer,
  reduxFirestore,
} from 'redux-firestore';
import {
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';
import firebase from 'firebase';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';
const config = {
  apiKey: "AIzaSyDY35I7SyXTo6jaLQ1RWql1PbwbXvk9_4c",
  authDomain: "titan-track-98fcb.firebaseapp.com",
  databaseURL: "https://titan-track-98fcb.firebaseio.com",
  projectId: "titan-track-98fcb",
  storageBucket: "titan-track-98fcb.appspot.com",
  messagingSenderId: "961185076383"
};
const rfConfig = { userProfile: 'users' };
const firebaseApp = firebase.initializeApp(config);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  firestore: firestoreReducer,
  routing: routerReducer,
});

const initialState = {};

export const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  routerMiddleware(history),
  createEpicMiddleware(rootEpic),
  // logger,
];

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    reduxFirestore(firebaseApp, rfConfig),
    reactReduxFirebase(config, rfConfig)
  )
);

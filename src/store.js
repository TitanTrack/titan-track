import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import {
  reactReduxFirebase,
  firebaseStateReducer,
  firestoreReducer,
} from 'react-redux-firebase';
import * as kerem from 'react-redux-firebase';
import {
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import firebase from 'firebase';
import 'firebase/firestore';
import { reducer as controlPanelNav } from './modules/control-panel/reducers/controlPanelNavReducer';
import thunk from 'redux-thunk'

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
firebase.initializeApp(config);
firebase.firestore();

const localUI = combineReducers({
  controlPanelNav,
});

const initialState = {};

export const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  routerMiddleware(history),
  createEpicMiddleware(rootEpic),
  thunk,
];

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  firestore: firestoreReducer,
  routing: routerReducer,
  localUI,
});

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    reactReduxFirebase(firebase, rfConfig)
  )
);

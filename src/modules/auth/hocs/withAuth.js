import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  firebaseConnect,
  pathToJS
} from 'react-redux-firebase';

export default compose(
  firebaseConnect(),
  connect(({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile'),
  }))
);

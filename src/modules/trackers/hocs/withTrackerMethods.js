import { compose } from 'recompose';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { TRACKERS_ROOT_PATH } from '../consts';
import { objToArr, generateNumericSort } from '../../utils/lib';
import firebase from 'firebase';
import { getTrackerUrl } from '../lib';

export default compose(
  firestoreConnect([{
    path: TRACKERS_ROOT_PATH,
  }]),
  connect(({ firestore }, { trackerId }) => ({
    onTrackerEdit: (({
      name,
      frequency,
      inputType,
    }) => firebase.firestore().doc(getTrackerUrl(trackerId)).update({
      name,
      frequency,
      inputType,
      updatedAt: Date.now(),
    })),

  }))
);

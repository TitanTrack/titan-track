import { compose } from 'recompose';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { TRACKERS_ROOT_PATH } from '../consts';
import { objToArr, generateNumericSort } from '../../utils/lib';
import firebase from 'firebase';

export default compose(
  firestoreConnect([{
    path: TRACKERS_ROOT_PATH,
  }]),
  connect(({ firestore }) => {
    const trackersRaw = firestore.data.trackers;
    const db = firebase.firestore();
    return {
      trackers: objToArr(trackersRaw, generateNumericSort({
        mapperFn: (tracker) => tracker.createdAt,
      })),

      onTrackerAdd: (({
        name,
        frequency,
        inputType,
      }) => db.collection(TRACKERS_ROOT_PATH).add({
        name,
        frequency,
        inputType,
      })),
      
    }
  })
);

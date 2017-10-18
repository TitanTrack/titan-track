import { compose } from 'recompose';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { TRACKERS_ROOT_PATH } from '../consts';
import { objToArr, generateNumericSort } from '../../utils/lib';

export default compose(
  firestoreConnect([{
    path: TRACKERS_ROOT_PATH,
  }]),
  connect(({ firestore }) => {
    const trackersRaw = firestore.data.trackers;
    return {
      trackers: objToArr(trackersRaw, generateNumericSort({
        mapperFn: (tracker) => tracker.createdAt,
      })),
    }
  })
);

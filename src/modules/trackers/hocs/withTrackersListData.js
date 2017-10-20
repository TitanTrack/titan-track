import { compose } from 'recompose';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { TRACKERS_ROOT_PATH } from '../consts';
import { objToArr, generateNumericSort } from '../../utils/lib';

const groupTrackers = (trackers) => {
  const buckets = {};
  trackers.forEach((tracker) => {
    const curBucket = buckets[tracker.frequency] || [];
    curBucket.push(tracker);
    buckets[tracker.frequency] = curBucket;
  });
  return buckets;
}

export default compose(
  firestoreConnect([{
    path: TRACKERS_ROOT_PATH,
  }]),
  connect(({ firestore }) => {
    const trackersRaw = firestore.data.trackers;
    const trackers = objToArr(trackersRaw, generateNumericSort({
      mapperFn: (tracker) => tracker.createdAt,
    }));
    const groupedTrackers = groupTrackers(trackers);
    return {
      trackers,
      groupedTrackers,
    }
  })
);

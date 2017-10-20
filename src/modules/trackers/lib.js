import path from 'path';
import { TRACKERS_ROOT_PATH } from './consts';


export const getTrackerUrl = (trackerId) => path.join(
  TRACKERS_ROOT_PATH,
  trackerId
);

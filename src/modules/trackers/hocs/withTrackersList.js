import { compose } from 'recompose';
import withTrackersListData from './withTrackersListData';
import withTrackersListMethods from './withTrackersListMethods';

export default compose(
  withTrackersListMethods,
  withTrackersListData,
);

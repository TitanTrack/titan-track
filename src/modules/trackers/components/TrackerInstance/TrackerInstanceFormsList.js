import React, { Component } from 'react';
import TrackerInstanceForm from './TrackerInstanceForm';
import withTrackersListData from '../../hocs/withTrackersListData';
import { object } from 'prop-types';
import {
  TRACKER_FRQUENCIES,
  TRACKER_FRQUENCY_MAPPINGS,
} from '../../consts';

class TrackerInstanceFormsList extends Component {
  static propTypes = {
    groupedTrackers: object.isRequired,
  }

  render () {
    const { groupedTrackers } = this.props;
    return TRACKER_FRQUENCIES.map((frequency) => (
      <TrackerInstanceForm
        frequency={frequency}
        key={frequency}
        fields={groupedTrackers[frequency]}
      />
    ));
  }
}

export default withTrackersListData(TrackerInstanceFormsList);

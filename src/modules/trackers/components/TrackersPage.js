import React, { Component } from 'react';
import TrackersTable from './TrackersTable';
import Grid from 'material-ui/Grid';
import TrackerInstanceFormsList from './TrackerInstance/TrackerInstanceFormsList';

class TrackersPage extends Component {
  render () {
    return (
      <Grid container spacing={24}>
        <Grid item sm={12} lg={6}>
          <TrackersTable />
        </Grid>
        <Grid item sm={12} lg={6}>
          <TrackerInstanceFormsList />
        </Grid>
      </Grid>
    );
  }
}

export default TrackersPage;

import React, { Component } from 'react';
import { string, object, func, array } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import IconMenu from '../../utils/components/IconMenu';
import TrackerTableRow from './TrackerTableRow';
import TrackerTableFormRow from './TrackerTableFormRow';
import withTrackersList from '../hocs/withTrackersList';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: 700,
  },
});

class TrackersTable extends Component {
  static propTypes = {
    classes: object.isRequired,
    trackers: array.isRequired,
    onTrackerAdd: func.isRequired,
  };

  render () {
    const { classes, trackers, onTrackerAdd } = this.props;

    return (
      <Paper className={classes.root}>
        <Toolbar>
          <Typography type="title">
            Trackers
          </Typography>
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tracker Name</TableCell>
              <TableCell numeric>Frequency</TableCell>
              <TableCell numeric>Input Type</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trackers.map((tracker, index) => {
              return (
                <TrackerTableRow
                  key={tracker.id}
                  name={tracker.name}
                  frequency={tracker.frequency}
                  inputType={tracker.inputType}
                  trackerId={tracker.id}
                />
              );
            })}
          </TableBody>
          <TableFooter>
            <TrackerTableFormRow onSubmit={onTrackerAdd} />
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

export default compose(
  withStyles(styles),
  withTrackersList
)(TrackersTable);

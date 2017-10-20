import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';
import TrackerTableFormRow from './TrackerTableFormRow';
import withTrackerMethods from '../hocs/withTrackerMethods';

class TrackersTableRow extends Component {
  static propTypes = {
    trackerId: string.isRequired,
    name: string.isRequired,
    frequency: string.isRequired,
    inputType: string.isRequired,
    onTrackerEdit: func.isRequired,
  }

  state = {
    isEdit: false,
  }

  handleOpenEdit = () => {
    this.setState({
      isEdit: true,
    });
  }

  handleCloseEdit = () => {
    this.setState({
      isEdit: false,
    });
  }

  handleEdit = ({
    name,
    frequency,
    inputType,
  }) => {
    const { onTrackerEdit } = this.props;
    this.handleCloseEdit();
    return onTrackerEdit({
      name,
      frequency,
      inputType,
    });
  }

  render () {
    const {
      name,
      frequency,
      inputType,
      trackerId,
    } = this.props;

    return (
      this.state.isEdit ?
      <TrackerTableFormRow
        onDone={this.handleCloseEdit}
        onSubmit={this.handleEdit}
        name={name}
        frequency={frequency}
        inputType={inputType}
      />
    :
      <TableRow hover onClick={this.handleOpenEdit}>
        <TableCell>{name}</TableCell>
        <TableCell numeric>{frequency}</TableCell>
        <TableCell numeric>{inputType}</TableCell>
        <TableCell />
      </TableRow>
    )
  }
}

export default withTrackerMethods(TrackersTableRow);

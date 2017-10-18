import React, { Component } from 'react';
import { string } from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';

class TrackersTableRow extends Component {
  static propTypes = {
    name: string.isRequired,
    frequency: string.isRequired,
    inputType: string.isRequired,
  }

  render () {
    const {
      name,
      frequency,
      inputType,
    } = this.props;

    return (
      <TableRow hover>
        <TableCell>{name}</TableCell>
        <TableCell numeric>{frequency}</TableCell>
        <TableCell numeric>{inputType}</TableCell>
        <TableCell />
      </TableRow>
    )
  }
}

export default TrackersTableRow;

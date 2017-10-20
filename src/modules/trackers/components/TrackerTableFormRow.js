import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import { MenuItem } from 'material-ui/Menu';
import { bool, func, string, object } from 'prop-types';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import {
  TRACKER_INPUT_TYPES,
  TRACKER_INPUT_TYPE_MAPPINGS,
  TRACKER_FRQUENCIES,
  TRACKER_FRQUENCY_MAPPINGS,
} from '../consts';
import withTrackerMethods from '../hocs/withTrackerMethods';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';

const styles = {
  deleteButton: {
    marginRight: 10,
  },
};

class TrackerTableFormRow extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    name: string.isRequired,
    frequency: string.isRequired,
    inputType: string.isRequired,
    onTrackerDelete: func.isRequired,
    classes: object.isRequired,
  }

  static defaultProps = {
    name: '',
    frequency: TRACKER_FRQUENCIES[0],
    inputType: TRACKER_INPUT_TYPES[0],
  }

  constructor (props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const { name, frequency, inputType } = this.props;
    return {
      name,
      frequency,
      inputType,
    };
  }

  handleFrequencyChange = (e) => {
    this.setState({
      frequency: e.target.value,
    });
  }

  handleInputTypeChange = (e) => {
    this.setState({
      inputType: e.target.value,
    });
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { name, frequency, inputType } = this.state;
    this.setState(this.getInitialState());
    return onSubmit({
      name,
      frequency,
      inputType,
    });
  }

  render () {
    const { onDone, onTrackerDelete, classes } = this.props;
    return (
      <TableRow>
        <TableCell>
          <form onSubmit={this.handleSubmit}>
            <TextField
              value={this.state.name}
              fullWidth
              placeholder="Tracker name"
              onChange={this.handleNameChange}
            />
          </form>
        </TableCell>
        <TableCell numeric>
          <Select
            value={this.state.frequency}
            fullWidth
            onChange={this.handleFrequencyChange}
            input={<Input id="tracker-frequency" />}
          >
          {TRACKER_FRQUENCIES.map((frequency) => (
            <MenuItem key={frequency} value={frequency}>
              {TRACKER_FRQUENCY_MAPPINGS[frequency]}
            </MenuItem>
          ))}
          </Select>
        </TableCell>
        <TableCell numeric>
          <Select
            fullWidth
            value={this.state.inputType}
            onChange={this.handleInputTypeChange}
            input={<Input id="tracker-input-type" />}
          >
          {TRACKER_INPUT_TYPES.map((inputType) => (
            <MenuItem key={inputType} value={inputType}>
              {TRACKER_INPUT_TYPE_MAPPINGS[inputType]}
            </MenuItem>
          ))}
          </Select>
        </TableCell>
        <TableCell numeric>
          {this.props.trackerId ?
            <Button
              raised
              color="secondary"
              onClick={onTrackerDelete}
              className={classes.deleteButton}
            >
              Delete
            </Button>

            :null
          }
          <Button raised color="primary" onClick={this.handleSubmit}>
            {this.props.trackerId ? 'Done' : 'Submit'}
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default compose(
  withStyles(styles),
  withTrackerMethods
)(TrackerTableFormRow);

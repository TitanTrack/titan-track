import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import { MenuItem } from 'material-ui/Menu';
import { bool, func, string } from 'prop-types';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';

class TrackerTableFormRow extends Component {
  static propTypes = {
    isInsert: bool.isRequired,
    onSubmit: func.isRequired,
    name: string.isRequired,
    frequency: string.isRequired,
    inputType: string.isRequired,
  }

  static defaultProps = {
    name: '',
    frequency: 'daily',
    inputType: 'numeric',
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
    const { onSubmit } = this.props;

  }

  render () {
    return (
      <TableRow>
        <TableCell>
          <TextField
            value={this.state.name}
            fullWidth
            placeholder="Tracker name"
            onChange={this.handleNameChange}
          />
        </TableCell>
        <TableCell numeric>
          <Select
            value={this.state.frequency}
            fullWidth
            onChange={this.handleFrequencyChange}
            input={<Input id="tracker-frequency" />}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </TableCell>
        <TableCell numeric>
          <Select
            fullWidth
            value={this.state.inputType}
            onChange={this.handleInputTypeChange}
            input={<Input id="tracker-input-type" />}
          >
            <MenuItem value="numeric">Numeric</MenuItem>
            <MenuItem value="short">Short Answer</MenuItem>
            <MenuItem value="paragraph">Paragraph</MenuItem>
            <MenuItem value="yesno">Yes / No</MenuItem>
            <MenuItem value="multiple">Multiple Choice</MenuItem>
            <MenuItem value="checkbox">Checkbox</MenuItem>
            <MenuItem value="dropdown">Dropdown</MenuItem>
          </Select>
        </TableCell>
        <TableCell numeric>
          <Button raised color="primary">
            Submit
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default TrackerTableFormRow;

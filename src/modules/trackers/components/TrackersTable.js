import React, { Component } from 'react';
import { string, object, bool } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';

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

class TrackersTableFormRow extends Component {
  static propTypes = {
    isInsert: bool.isRequired,
  }

  state = {
    frequency: 'daily',
  }

  handleFrequencyChange = (e) => {
    console.log(e.target.value);
  }

  handleInputTypeChange = (e) => {
    console.log(e.target.value);
  }

  render () {
    const {
      name,
      frequency,
      inputType,
    } = this.props;
    return (
      <TableRow>
        <TableCell>
          <TextField
            fullWidth
            placeholder="Tracker name"
          />
        </TableCell>
        <TableCell numeric>
          <Select
            fullWidth
            value={frequency || 'daily'}
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
            value={inputType || 'numeric'}
            onChange={this.handleFrequencyChange}
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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    width: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [{
  name: 'Watched TV',
  frequency: 'daily',
  inputType: 'short',
}, {
  name: 'Watched TV',
  frequency: 'weekly',
  inputType: 'paragraph',
}, {
  name: 'Watched TV',
  frequency: 'weekly',
  inputType: 'numeric',
}, {
  name: 'Watched TV',
  frequency: 'monthly',
  inputType: 'yesno',
}, {
  name: 'Watched TV',
  frequency: 'yearly',
  inputType: 'multiple',
}, {
  name: 'Watched TV',
  frequency: 'daily',
  inputType: 'checkbox',
}, {
  name: 'Watched TV',
  frequency: 'daily',
  inputType: 'dropdown',
}];

class TrackersTable extends Component {
  static propTypes = {
    classes: object.isRequired,
  };

  render () {
    const { classes } = this.props;

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
              <TableCell numeric>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((tracker, index) => {
              return (
                <TrackersTableRow
                  key={`tracker-${index}`}
                  {...tracker}
                />
              );
            })}
          </TableBody>
          <TableFooter>
            <TrackersTableFormRow isInsert/>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(TrackersTable);

import React, { Component } from 'react';
import { array, string, object } from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import TrackerInstanceFormInput from './TrackerInstanceFormInput';
import { withStyles } from 'material-ui/styles';
import {
  TRACKER_FRQUENCY_MAPPINGS,
} from '../../consts';
import Button from 'material-ui/Button';

const styles = {
  fields: {
    padding: 25,
  },
  root: {
    marginBottom: 20,
  },
};

class TrackerInstanceForm extends Component {
  static propTypes = {
    frequency: string.isRequired,
    fields: array.isRequired,
    classes: object.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITTED!');
  }

  render () {
    const { fields, frequency, classes } = this.props;
    console.log({fields});
    return (
      <Paper className={classes.root}>
        <Toolbar>
          <Typography type="title" color="inherit">
            {TRACKER_FRQUENCY_MAPPINGS[frequency]}
          </Typography>
        </Toolbar>
        <form
          className={classes.fields}
          onSubmit={this.handleSubmit}
        >
          {fields.map((field, index) => (
            <TrackerInstanceFormInput
              key={`${field.name}-index-${field.inputType}`}
              name={field.name}
              inputType={field.inputType}
            />
          ))}
          <Button
            raised
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>

      </Paper>
    );
  }
}

export default withStyles(styles)(TrackerInstanceForm);

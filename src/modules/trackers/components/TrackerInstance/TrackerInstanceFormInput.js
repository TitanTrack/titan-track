import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { string, object } from 'prop-types';

const styles = {
  input: {
    marginBottom: 15,
  },
};

class FormInput extends Component {
  static propTypes = {
    classes: object.isRequired,
    name: string.isRequired,
    inputType: string.isRequired,
  }

  render () {
    const {
      classes,
      name,
    } = this.props;
    return (
      <TextField
        className={classes.input}
        label={name}
        fullWidth
      />
    );
  }
}

export default withStyles(styles)(FormInput);

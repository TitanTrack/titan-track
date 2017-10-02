import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  div: {
    padding: '15px',
  },
  cancelButton: {
    marginLeft: '15px',
  },
};

class AddTodoItemForm extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    hintText: string.isRequired,
    floatingLabelText: string.isRequired,
    defaultValue: string,
    onCancel: func,
  }

  state = {
    canSubmit: true,
  }

  enableSubmit = () => {
    this.setState({
      canSubmit: true,
    });
  }

  disableSubmit = () => {
    this.setState({
      canSubmit: false,
    });
  }

  handleValidSubmit = (model) => {
    const { onSubmit } = this.props;
    onSubmit(model.title);
    this.refs.form.reset();
  }

  handleInvalidSubmit = () => {
    console.log('Invalid submit!');
  }

  render () {
    const {
      hintText,
      floatingLabelText,
      defaultValue,
      onCancel,
    } = this.props;

    return (
      <div style={styles.div}>
        <Formsy.Form
          ref="form"
          onValid={this.enableSubmit}
          onInvalid={this.disableSubmit}
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
        >
          <FormsyText
            name="title"
            validations={{}}
            validationError="Invalid input"
            hintText={hintText}
            floatingLabelText={floatingLabelText}
            defaultValue={defaultValue}
            fullWidth
          />
          <RaisedButton
            type="submit"
            label="Submit"
            disabled={!this.state.canSubmit}
          />
          {onCancel ?
            <RaisedButton
              style={styles.cancelButton}
              type="button"
              label="Cancel"
              onClick={onCancel}
            /> :
            null
          }
        </Formsy.Form>
      </div>
    );
  }
}

export default AddTodoItemForm;

import React, { Component } from 'react';
import { func } from 'prop-types';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  div: {
    padding: '15px',
  },
};

class AddTodoItemForm extends Component {
  static propTypes = {
    onTodoAdd: func.isRequired,
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
    const { onTodoAdd } = this.props;
    onTodoAdd(model.title);
    this.refs.form.reset();
  }

  handleInvalidSubmit = () => {
    console.log('Invalid submit!');
  }

  render () {
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
            hintText="Type your new list item"
            floatingLabelText="New item"
            fullWidth
          />
          <RaisedButton
            type="submit"
            label="Submit"
            disabled={!this.state.canSubmit}
          />
        </Formsy.Form>
      </div>
    );
  }
}

export default AddTodoItemForm;

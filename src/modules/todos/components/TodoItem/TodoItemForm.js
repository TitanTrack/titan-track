import React, { Component } from 'react';
import { func, string } from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const styles = {
  div: {
    padding: '15px',
  },
  cancelButton: {
    marginLeft: '15px',
  },
};

const initialState = {
  title: '',
};

class TodoItemForm extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    placeholder: string.isRequired,
    label: string.isRequired,
    title: string,
    onCancel: func,
  }

  state = initialState

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const { title } = this.props;
    return {
      title: title ? title : '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.title);
    this.setState(this.getInitialState());
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  render () {
    const {
      placeholder,
      label,
      onCancel,
    } = this.props;

    return (
      <div style={styles.div}>
        <form onSubmit={this.handleSubmit} >
          <TextField
            label={label}
            placeholder={placeholder}
            value={this.state.title}
            onChange={this.handleChange}
            fullWidth
          />
          <Button
            type="submit"
            raised
          >
            Submit
          </Button>
          {onCancel ?
            <Button
              raised
              style={styles.cancelButton}
              type="button"
              onClick={onCancel}
            >Cancel</Button> :
            null
          }
        </form>
      </div>
    );
  }
}

export default TodoItemForm;

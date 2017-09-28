import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import withTodos from '../hocs/withTodos';

const initialState = {
  todoTitle: '',
};

class AddTodoForm extends Component {
  state = initialState;

  handleTodoTitleChange = (e, title) => {
    this.setState({
      todoTitle: title,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { listKey, addTodoToList } = this.props;
    addTodoToList({
      listKey,
      todoTitle: this.state.todoTitle,
    });
    this.setState(initialState);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.todoTitle}
          name="newTodo"
          onChange={this.handleTodoTitleChange}
        />
      </form>
    );
  }
}

export default withTodos(AddTodoForm);

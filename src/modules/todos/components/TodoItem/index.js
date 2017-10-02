import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import EditTodoItem from './EditTodoItem';
import ViewTodoItem from './ViewTodoItem';

class TodoItem extends Component {
  static propTypes = {
    title: string.isRequired,
    completed: bool.isRequired,
    onTodoDelete: func.isRequired,
    onTodoToggle: func.isRequired,
    onTodoEdit: func.isRequired,
  }

  state = {
    mode: 'view',
  }

  handleTodoDelete = () => {
    const { onTodoDelete } = this.props;
    return onTodoDelete();
  }

  handleTodoToggle = (e, checked) => {
    const { onTodoToggle } = this.props;
    return onTodoToggle(checked);
  }

  handleTodoEdit = (todoTitle) => {
    const { onTodoEdit } = this.props;
    return onTodoEdit(todoTitle);
  }

  handleModeToggle = (mode) => {
    this.setState({
      mode,
    });
  }

  render () {
    const {
      title,
      completed,
    } = this.props;

    return (
      this.state.mode === 'view' ?
        <ViewTodoItem
          title={title}
          completed={completed}
          onTodoToggle={this.handleTodoToggle}
          onTodoDelete={this.handleTodoDelete}
          toggleEdit={() => { this.handleModeToggle('edit') }}
        /> :
        <EditTodoItem
          title={title}
          onTodoEdit={this.handleTodoEdit}
          toggleView={() => { this.handleModeToggle('view') }}
        />
    );
  }
}

export default TodoItem;

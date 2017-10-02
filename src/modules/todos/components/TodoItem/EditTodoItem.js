import React, { Component } from 'react';
import { string, func } from 'prop-types';

import TodoItemForm from './TodoItemForm';

class EditTodoItem extends Component {
  static propTypes = {
    title: string.isRequired,
    onTodoEdit: func.isRequired,
    toggleView: func.isRequired,
  }

  handleTodoEdit = (title) => {
    const {
      onTodoEdit,
      toggleView,
    } = this.props;
    onTodoEdit(title);
    toggleView();
  }

  render () {
    const {
      title,
    } = this.props;

    return (
      <TodoItemForm
        onSubmit={this.handleTodoEdit}
        hintText="Type to change your item's title"
        floatingLabelText="Edit item title"
        defaultValue={title}
      />
    )
  }
}

export default EditTodoItem;

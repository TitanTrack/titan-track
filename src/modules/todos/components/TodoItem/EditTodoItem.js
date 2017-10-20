import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { ListItem } from 'material-ui/List';

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
      toggleView,
    } = this.props;

    return (
      <ListItem dense>
        <TodoItemForm
          onSubmit={this.handleTodoEdit}
          placeholder="Type to change your item's title"
          label="Edit item title"
          title={title}
          onCancel={toggleView}
        />
      </ListItem>
    );
  }
}

export default EditTodoItem;

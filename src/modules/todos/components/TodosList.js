import React, { Component } from 'react';
import { array, func, string } from 'prop-types';
import Paper from 'material-ui/Paper';
import TodoItem from './TodoItem/index.js';
import List from 'material-ui/List';
import TodoItemForm from './TodoItem/TodoItemForm';
import VisibilityFilter from './VisibilityFilter';
import withTodosList from '../hocs/withTodosList';
import {
  VISIBILITY_FILTERS,
  VISIBILITY_FILTER_FNS,
} from '../consts';

const style = {
  paper: {
    display: 'block',
  },
};

class TodosList extends Component {
  static propTypes = {
    todosListId: string.isRequired,
    todoItems: array.isRequired,
    onTodoAdd: func.isRequired,
    onTodoDelete: func.isRequired,
    onTodoToggle: func.isRequired,
    onTodoEdit: func.isRequired,
  }

  static defaultProps = {
    todoItems: [],
  }

  state = {
    visibilityFilter: VISIBILITY_FILTERS.ALL,
  }

  handleSetVisibilityFilter = (visibilityFilter) => {
    this.setState({
      visibilityFilter,
    });
  }

  generateOnTodoDelete = (todoId) => () => {
    const { onTodoDelete } = this.props;
    return onTodoDelete({
      todoId,
    });
  }

  generateOnTodoToggle = (todoId) => (completed) => {
    const { onTodoToggle } = this.props;
    return onTodoToggle({
      todoId,
      completed,
    });
  }

  generateOnTodoEdit = (todoId) => (todoTitle) => {
    const { onTodoEdit } = this.props;
    return onTodoEdit({
      todoId,
      todoTitle,
    });
  }

  handleTodoAdd = (todoTitle) => {
    const { onTodoAdd } = this.props;
    return onTodoAdd({
      todoTitle,
    });
  }

  render () {
    const { todoItems, todosListId } = this.props;
    const filteredTodoItems = todoItems.filter(
      VISIBILITY_FILTER_FNS[this.state.visibilityFilter]
    );
    const TodoItems = () => (
      <List>
        {filteredTodoItems.map((todo) => (
          <TodoItem
            key={todo.id}
            todoId={todo.key}
            title={todo.title}
            completed={todo.completed}
            onTodoToggle={this.generateOnTodoToggle(todo.key)}
            onTodoDelete={this.generateOnTodoDelete(todo.key)}
            onTodoEdit={this.generateOnTodoEdit(todo.key)}
          />
        ))}
      </List>
    );
    return (
      <Paper style={style.paper}>
        <VisibilityFilter
          visibilityFilter={this.state.visibilityFilter}
          onSetVisibilityFilter={this.handleSetVisibilityFilter}
        />
        <TodoItemForm
          onSubmit={this.handleTodoAdd}
          placeholder="Write something to add to your list"
          label="Add new item"
        />
        <TodoItems />
      </Paper>
    );
  }
}

export default withTodosList(TodosList);

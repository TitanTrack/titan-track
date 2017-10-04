import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Paper from 'material-ui/Paper';
import TodoItem from './TodoItem/index.js';
import List from 'material-ui/List';
import TodoItemForm from './TodoItem/TodoItemForm';
import VisibilityFilter from './VisibilityFilter';
import {
  VISIBILITY_FILTERS,
  VISIBILITY_FILTER_FNS,
} from '../consts/VISIBILITY_FILTERS';

const style = {
  paper: {
    padding: '5px',
    display: 'block',
  },
};

class TodosList extends Component {
  static propTypes = {
    todos: array.isRequired,
    onTodoAdd: func.isRequired,
    onTodoDelete: func.isRequired,
    onTodoToggle: func.isRequired,
    onTodoEdit: func.isRequired,
  }

  static defaultProps = {
    todos: [],
  }

  state = {
    visibilityFilter: VISIBILITY_FILTERS.ALL,
  }

  handleSetVisibilityFilter = (visibilityFilter) => {
    this.setState({
      visibilityFilter,
    });
  }

  generateOnTodoDelete = (todoKey) => () => {
    const { onTodoDelete } = this.props;
    return onTodoDelete({
      todoKey,
    });
  }

  generateOnTodoToggle = (todoKey) => (completed) => {
    const { onTodoToggle } = this.props;
    return onTodoToggle({
      todoKey,
      completed,
    });
  }

  generateOnTodoEdit = (todoKey) => (todoTitle) => {
    const { onTodoEdit } = this.props;
    return onTodoEdit({
      todoKey,
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
    const { todos, onTodoAdd } = this.props;
    const filteredTodos = todos.filter(
      VISIBILITY_FILTER_FNS[this.state.visibilityFilter]
    );
    const TodoItems = () => (
      <List>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.key}
            todoKey={todo.key}
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

export default TodosList;

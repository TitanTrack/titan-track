import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Paper from 'material-ui/Paper';
import TodoItem from './TodoItem';
import { List } from 'material-ui/List';
import AddTodoItemForm from './AddTodoItemForm';
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

  render () {
    const { todos, onTodoAdd } = this.props;
    return (
      <Paper style={style.paper}>
        <VisibilityFilter
          visibilityFilter={this.state.visibilityFilter}
          onSetVisibilityFilter={this.handleSetVisibilityFilter}
        />
        <AddTodoItemForm
          onTodoAdd={onTodoAdd}
        />
        {todos
          .filter(
            VISIBILITY_FILTER_FNS[this.state.visibilityFilter]
          ).map((todo) => (
          <TodoItem
            key={todo.key}
            todoKey={todo.key}
            title={todo.title}
            completed={todo.completed}
            onTodoToggle={this.generateOnTodoToggle(todo.key)}
            onTodoDelete={this.generateOnTodoDelete(todo.key)}
          />
        ))}
      </Paper>
    );
  }
}

export default TodosList;

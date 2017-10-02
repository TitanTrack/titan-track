import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Paper from 'material-ui/Paper';
import TodoItem from './TodoItem';
import { List } from 'material-ui/List';

const style = {
  paper: {
    padding: '5px',
    display: 'block',
  },
};

class TodosList extends Component {
  static propTypes = {
    todos: array.isRequired,
    onTodoDelete: func.isRequired,
    onTodoToggle: func.isRequired,
  }

  static defaultProps = {
    todos: [],
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
    const { todos } = this.props;
    return (
      <Paper style={style.paper}>
        {todos.map((todo) => (
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

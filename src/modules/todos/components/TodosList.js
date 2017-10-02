import React, { Component } from 'react';
import { array, func } from 'prop-types';
import Paper from 'material-ui/Paper';
import TodoItem from './TodoItem';
import { List } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import AddTodoItemForm from './AddTodoItemForm';

const style = {
  paper: {
    padding: '5px',
    display: 'block',
  },
};

const VISIBILITY_FILTERS = {
  ALL: 'visibility_filters/all',
  COMPLETED: 'visibility_filters/completed',
  INCOMPLETE: 'visibility_filters/incomplete',
};

const VISIBILITY_FILTER_FNS = {
  [VISIBILITY_FILTERS.ALL]: () => true,
  [VISIBILITY_FILTERS.INCOMPLETE]: (todo) => !todo.completed,
  [VISIBILITY_FILTERS.COMPLETED]: (todo) => todo.completed,
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
        <Tabs
          value={this.state.visibilityFilter}
          onChange={this.handleSetVisibilityFilter}
        >
          <Tab label="All" value={VISIBILITY_FILTERS.ALL} />
          <Tab label="Incomplete" value={VISIBILITY_FILTERS.INCOMPLETE} />
          <Tab label="Completed" value={VISIBILITY_FILTERS.COMPLETED} />
        </Tabs>
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

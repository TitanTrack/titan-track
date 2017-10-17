import React, { Component } from 'react';
import { array, func, string } from 'prop-types';
import Paper from 'material-ui/Paper';
import TodoItem from './TodoItem/index.js';
import List from 'material-ui/List';
import TodoItemForm from './TodoItem/TodoItemForm';
import VisibilityFilter from './VisibilityFilter';
import withTodosList from '../hocs/withTodosList';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { compose } from 'recompose';

import {
  VISIBILITY_FILTERS,
  VISIBILITY_FILTER_FNS,
} from '../consts';

const styles = {
  paper: {
    display: 'block',
  },
  visibilityFilter: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 0,
  }
};

class TodosList extends Component {
  static propTypes = {
    title: string.isRequired,
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

  generateOnTodoEdit = (todoId) => (title) => {
    const { onTodoEdit } = this.props;
    return onTodoEdit({
      todoId,
      title,
    });
  }

  handleTodoAdd = (title) => {
    const { onTodoAdd } = this.props;
    return onTodoAdd({
      title,
    });
  }

  render () {
    const {
      todoItems,
      title,
      classes,
    } = this.props;
    const filteredTodoItems = todoItems.filter(
      VISIBILITY_FILTER_FNS[this.state.visibilityFilter]
    );
    const TodoItems = () => (
      <List>
        {filteredTodoItems.map((todo) => (
          <TodoItem
            key={todo.id}
            todoId={todo.id}
            title={todo.title}
            completed={todo.completed}
            onTodoToggle={this.generateOnTodoToggle(todo.id)}
            onTodoDelete={this.generateOnTodoDelete(todo.id)}
            onTodoEdit={this.generateOnTodoEdit(todo.id)}
          />
        ))}
      </List>
    );
    return (
      <Paper className={classes.paper}>
        <Toolbar>
          <Typography type="title" color="inherit">
            {title}
          </Typography>
          <VisibilityFilter
            className={classes.visibilityFilter}
            visibilityFilter={this.state.visibilityFilter}
            onSetVisibilityFilter={this.handleSetVisibilityFilter}
          />
        </Toolbar>
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

export default compose(
  withStyles(styles),
  withTodosList
)(TodosList);

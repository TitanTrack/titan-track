import React, { Component } from 'react';
import { isLoaded, toJS } from 'react-redux-firebase';
import withTodos from '../hocs/withTodos';
import TodosList from './TodosList';

class TodosPage extends Component {
  render () {
    const { todosOwnAll } = this.props;
    if (!isLoaded(todosOwnAll)) return null;
    console.log({todosOwnAll})
    return (
      <TodosList />
    )
  }
};

export default withTodos(TodosPage);

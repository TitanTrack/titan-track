import React, { Component } from 'react';
import { isLoaded, toJS } from 'react-redux-firebase';
import withTodos from '../hocs/withTodos';
import TodosList from './TodosList';
import Loading from '../../utils/components/Loading';
import populateTodo from '../utils/populateTodo';

class TodosPage extends Component {
  render () {
    const todosOwnRoot = this.props['todos.own.root'];
    const todosOwnAll = this.props['todos.own.all'];
    if (!isLoaded(todosOwnRoot)) return <Loading />;
    if (!isLoaded(todosOwnAll)) return <Loading />;
    const todosOwnRootPopulated = toJS(todosOwnRoot).map(({ key }) => populateTodo({
      key,
      allTodos: todosOwnAll,
    }));
    console.log({
      todosOwnRootPopulated,
    })
    return (
      <TodosList todos={todosOwnRootPopulated} />
    );
  }
};

export default withTodos(TodosPage);

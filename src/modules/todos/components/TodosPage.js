import React, { Component } from 'react';
import { isLoaded, toJS } from 'react-redux-firebase';
import withTodos from '../hocs/withTodos';
import TodosList from './TodosList';
import Loading from '../../utils/components/Loading';
import populateTodo from '../utils/populateTodo';

class TodosPage extends Component {
  render () {
    const { todosOwnAll, todosOwnRoot } = this.props;
    if (
      !isLoaded(todosOwnRoot) ||
      !isLoaded(todosOwnAll)
    ) return <Loading />;
    const todosOwnRootPopulated = toJS(todosOwnRoot).map(({ key }) => populateTodo({
      key,
      allTodos: todosOwnAll,
    }));
    return (
      <TodosList
        todos={todosOwnRootPopulated}
      />
    );
  }
};

export default withTodos(TodosPage);

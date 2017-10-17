import React, { Component } from 'react';
import TodosList from './TodosList';
import TodosListsMenu from './TodosListsMenu';
import withTodosListPage from '../hocs/withTodosListPage';

class TodosListPage extends Component {
  render () {
    const { todosListId } = this.props;
    return (
      <div>
        <TodosListsMenu />
        <TodosList todosListId={todosListId} />
      </div>
    );
  }
}

export default withTodosListPage(TodosListPage);

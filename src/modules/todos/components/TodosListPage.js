import React, { Component } from 'react';
import TodosList from './TodosList';
import TodosListsMenu from './TodosListsMenu';

class TodosListPage extends Component {
  render () {
    const { todos } = this.props;
    return (
      <div>
        <TodosListsMenu />
        <TodosList todos={todos} />
      </div>
    );
  }
}

export default TodosListPage;

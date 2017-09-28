import React, { Component } from 'react';
import { isLoaded } from 'react-redux-firebase';
import Loading from '../../utils/components/Loading';
import TodoItem from './TodoItem';

class TodosList extends Component {
  render () {
    const { todos } = this.props;
    if (!isLoaded(todos)) return (<Loading />);
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.key}
            todoKey={todo.key}
          />
        ))}
      </div>
    );
  }
}

export default TodosList;

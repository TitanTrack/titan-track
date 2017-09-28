import React, { Component } from 'react';
import withTodo from '../hocs/withTodo';
import { isLoaded } from 'react-redux-firebase';
import Loading from '../../utils/components/Loading';

class TodoItem extends Component {
  render () {
    const { todo } = this.props;
    if (!isLoaded(todo)) return (<Loading />);
    return (
      <div>
        {todo.title}
      </div>
    );
  }
}

export default withTodo(TodoItem);

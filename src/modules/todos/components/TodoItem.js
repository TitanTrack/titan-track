import React, { Component } from 'react';
import withTodo from '../hocs/withTodo';
import { isLoaded } from 'react-redux-firebase';
import Loading from '../../utils/components/Loading';
import Checkbox from 'material-ui/Checkbox';

class TodoItem extends Component {
  render () {
    const { todo, toggleTodo } = this.props;
    if (!isLoaded(todo)) return (<Loading />);
    return (
      <div>
        <Checkbox
          checked={todo.completed === true}
          onCheck={(event, isChecked) => toggleTodo(isChecked)}
          label={todo.title}
        />
      </div>
    );
  }
}

export default withTodo(TodoItem);

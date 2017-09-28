import React, { Component } from 'react';
import withTodo from '../hocs/withTodo';
import { isLoaded } from 'react-redux-firebase';
import Loading from '../../utils/components/Loading';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';

const TodoDetails = ({ todo }) => {
  if (todo.children.length < 1) return null;
  return (
    <Chip>
      {todo.children.filter((child) => child.completed).length} / {todo.children.length}
    </Chip>
  );
}

class TodoItem extends Component {
  render () {
    const { todo, toggleTodo } = this.props;
    if (!isLoaded(todo)) return (<Loading />);
    console.log({todo})
    return (
      <div>
        <Checkbox
          checked={todo.completed === true}
          onCheck={(event, isChecked) => toggleTodo(isChecked)}
          label={<span>{todo.title} <TodoDetails todo={todo}/></span>}
        />

      </div>
    );
  }
}

export default withTodo(TodoItem);

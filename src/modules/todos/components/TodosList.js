import React, { Component } from 'react';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import Loading from '../../utils/components/Loading';
import TodoItem from './TodoItem';
import Paper from 'material-ui/Paper';

const styles = {
  paper: {
    padding: '15px',
  },
};

class TodosList extends Component {
  render () {
    const { todos } = this.props;
    if (!isLoaded(todos)) return (<Loading />);
    if (isEmpty(todos)) return null;
    return (
      <Paper style={styles.paper}>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.key}
            todoKey={todo.key}
          />
        ))}
      </Paper>
    );
  }
}

export default TodosList;

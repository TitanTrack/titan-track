import React, { Component } from 'react';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import Loading from '../../utils/components/Loading';
import TodoItem from './TodoItem';
import Paper from 'material-ui/Paper';
import AddTodoForm from './AddTodoForm';

const styles = {
  paper: {
    margin: '15px',
    padding: '15px',
  },
};

class TodosList extends Component {
  render () {
    const { todos, listDepth = 0, listKey } = this.props;
    if (!isLoaded(todos)) return (<Loading />);
    if (listDepth > 5) return null;
    return (
      <Paper style={styles.paper}>
        <AddTodoForm
          listKey={listKey}
        />
        {this.props.todos.map((todo) => (
          <TodoItem
            listDepth={listDepth}
            key={todo.key}
            todoKey={todo.key}
          />
        ))}
      </Paper>
    );
  }
}

export default TodosList;

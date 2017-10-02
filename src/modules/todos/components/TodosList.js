import React, { Component } from 'react';
import { array } from 'prop-types';
import TodoItem from './TodoItem';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    height: 100,
    width: 100,
    margin: 20,
    display: 'block',
  },
};

class TodosList extends Component {

  static propTypes = {
    todos: array.isRequired,
  }

  static defaultProps = {
    todos: [],
  }

  render () {
    return (
      <Paper style={style.paper}>
        kerem
      </Paper>
    );
  }
}

export default TodosList;

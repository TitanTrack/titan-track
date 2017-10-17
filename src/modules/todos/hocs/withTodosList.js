import {
  compose,
  withProps,
} from 'recompose';
import path from 'path';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { getTodoItemsUrl } from '../lib';

export default compose(
  firestoreConnect((ownProps) => ([{
    path: getTodoItemsUrl(ownProps.todosListId),
  }])),
  connect(({ firestore }, ownProps) => {
    const orderedTodos = firestore.ordered.todos;
    const curTodo = orderedTodos ? orderedTodos[ownProps.todosListId] : {};
    const curTodoItems = curTodo ? curTodo.todo_items : [];

    console.log({
      orderedTodos,
      curTodo,
      curTodoItems,
    })
    return {
      todoItems: curTodoItems,
    };
  }),
  withProps((ownProps) => ({
    onTodoAdd: () => {

    },
    onTodoDelete: () => {

    },
    onTodoToggle: () => {

    },
    onTodoEdit: () => {

    },
  }))
);

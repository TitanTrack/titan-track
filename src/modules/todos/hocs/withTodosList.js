import {
  compose,
  withProps,
} from 'recompose';
import path from 'path';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import {
  getTodoItemsUrl,
  getTodoItemUrl,
} from '../lib';
import firebase from 'firebase';

export default compose(
  firestoreConnect((ownProps) => ([{
    path: getTodoItemsUrl(ownProps.todosListId),
  }])),
  connect(({ firestore }, ownProps) => {
    const orderedTodos = firestore.ordered.todos;
    const curTodo = orderedTodos ? orderedTodos[ownProps.todosListId] : {};
    const curTodoItems = curTodo ? curTodo.todo_items : [];
    return {
      todoItems: curTodoItems,
    };
  }),
  withProps((ownProps) => {
    const { todosListId } = ownProps;
    const todoItemsUrl = getTodoItemsUrl(todosListId);
    const getCurTodoItemUrl = (todoId) => getTodoItemUrl({
      listId: todosListId,
      todoId,
    });
    const db = firebase.firestore();

    return {
      onTodoAdd: ({
        title,
      }) => {
        return db.collection(todoItemsUrl).add({
          title,
          completed: false,
        });
      },

      onTodoDelete: ({
        todoId,
      }) => {
         const todoItemUrl = getCurTodoItemUrl(todoId);
         return db.doc(todoItemUrl).delete();
      },

      onTodoToggle: ({
        todoId,
        completed,
      }) => {
        const todoItemUrl = getCurTodoItemUrl(todoId);
        return db.doc(todoItemUrl).update({
          completed,
        });
      },

      onTodoEdit: ({
        todoId,
        title,
      }) => {
        const todoItemUrl = getCurTodoItemUrl(todoId);
        return db.doc(todoItemUrl).update({
          title,
        });
      },
    };
  })
);

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
import { objectToArr } from '../../utils/lib';

export default compose(
  firestoreConnect((ownProps) => ([{
    path: getTodoItemsUrl(ownProps.todosListId),
  }])),
  connect(({ firestore }, ownProps) => {
    const unorderedTodos = firestore.data.todos;
    const curTodo = unorderedTodos ? unorderedTodos[ownProps.todosListId] : {
      todo_items: [],
      title: '',
    };
    return {
      title: curTodo.title,
      todoItems: objectToArr(curTodo.todo_items),
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

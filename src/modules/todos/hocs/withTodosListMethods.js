import { withProps } from 'recompose';
import {
  getTodosListUrl,
  getTodoItemsUrl,
  getTodoItemUrl,
} from '../lib';
import firebase from 'firebase';


export default withProps((ownProps) => {
  const { todosListId } = ownProps;
  const todoItemsUrl = getTodoItemsUrl(todosListId);
  const todosListUrl = getTodosListUrl(todosListId);
  const getCurTodoItemUrl = (todoId) => getTodoItemUrl({
    listId: todosListId,
    todoId,
  });
  const db = firebase.firestore();
  const now = Date.now();

  return {
    onTodoAdd: ({
      title,
    }) => {
      return db.collection(todoItemsUrl).add({
        title,
        completed: false,
        createdAt: now,
        updatedAt: now,
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
        updatedAt: now,
      });
    },

    onTodoEdit: ({
      todoId,
      title,
    }) => {
      const todoItemUrl = getCurTodoItemUrl(todoId);
      return db.doc(todoItemUrl).update({
        title,
        updatedAt: now,
      });
    },

    onListTitleEdit: (title) => {
      return db.doc(todosListUrl).update({
        title,
        updatedAt: now,
      });
    },

    onListDelete: () => {
      // TODO: need to add dynamic redirect: sometimes redirect, sometimes dont redirect
      return db.doc(todosListUrl).delete();
    }
  };
});

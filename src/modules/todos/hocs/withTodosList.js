import {
  compose,
  withProps,
} from 'recompose';
import path from 'path';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import {
  getTodosListUrl,
  getTodoItemsUrl,
  getTodoItemUrl,
} from '../lib';
import firebase from 'firebase';
import {
  objToArr,
  generateAlphanumericSort,
} from '../../utils/lib';

export default compose(
  firestoreConnect((ownProps) => ([{
    path: getTodoItemsUrl(ownProps.todosListId),
  }])),
  connect(({ firestore }, ownProps) => {
    const unorderedTodos = firestore.data.todos;
    const curTodo = unorderedTodos ? unorderedTodos[ownProps.todosListId] : {
      todo_items: {},
      title: '',
    };
    return {
      title: curTodo.title,
      todoItems: objToArr(
        curTodo.todo_items,
        generateAlphanumericSort({
          mapperFn: (item) => item.title,
        })
      ),
    };
  }),
  withProps((ownProps) => {
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
        console.log('DELETE!');
      }
    };
  })
);

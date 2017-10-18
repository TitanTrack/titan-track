import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import {
  getTodosListUrl,
  getTodoItemsUrl,
} from '../lib';
import { TODOS_ROOT_PATH } from '../consts';
import firebase from 'firebase';
export default compose(
  firestoreConnect([TODOS_ROOT_PATH]),
  connect(({ firestore }) => {
    const todosRaw = firestore.ordered.todos ? firestore.ordered.todos : [];
    const db = firebase.firestore();
    const todosLists = todosRaw.map((todoRaw) => ({
      ...todoRaw,
      rootUrl: getTodosListUrl(todoRaw.id),
      itemsUrl: getTodoItemsUrl(todoRaw.id),
    }));
    return {
      todosLists,
      onTodosListAdd: (title) => {
        return db.collection(TODOS_ROOT_PATH).add({
          createdAt: Date.now(),
          updatedAt: Date.now(),
          title,
        });
      }
    };
  })
);

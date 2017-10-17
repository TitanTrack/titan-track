import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import {
  getTodosListUrl,
  getTodoItemsUrl,
} from '../lib';
import { TODOS_ROOT_PATH } from '../consts';
export default compose(
  firestoreConnect([TODOS_ROOT_PATH]),
  connect(({ firestore }) => {
    const todosRaw = firestore.ordered.todos ? firestore.ordered.todos : [];
    const todosLists = todosRaw.map((todoRaw) => ({
      ...todoRaw,
      rootUrl: getTodosListUrl(todoRaw.id),
      itemsUrl: getTodoItemsUrl(todoRaw.id),
    }));
    return {
      todosLists,
    };
  })
);

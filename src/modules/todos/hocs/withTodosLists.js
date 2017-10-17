import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import path from 'path';

import { TODOS_ROOT_PATH } from '../consts';

const getTodosListUrl = (listId) => (
  path.join(
    TODOS_ROOT_PATH,
    listId
  )
);

export default compose(
  firestoreConnect(['todos']),
  connect(({ firestore }) => {
    const todosRaw = firestore.ordered.todos ? firestore.ordered.todos : [];
    const todosLists = todosRaw.map((todoRaw) => ({
      ...todoRaw,
      url: getTodosListUrl(todoRaw.id),
    }));
    return {
      todosLists,
    };
  })
);

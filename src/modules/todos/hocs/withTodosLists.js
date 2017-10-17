import { compose, withProps } from 'recompose';
import { getTodosListUrl } from '../lib';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
export default compose(
  firestoreConnect(['todos']),
  connect(({ firestore }) => ({
    todosLists: firestore.ordered.todos,
  })),
  withProps((ownProps) => ({
    getTodosListUrl,
  })),
);

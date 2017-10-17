import { compose, withProps } from 'recompose';
import { getTodosListUrl } from '../lib';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
export default compose(
  firestoreConnect(['todos']),
  withProps((ownProps) => ({
    todosLists: [{
      key: 'kerem',
      title: 'keremkazan',
    }],
    getTodosListUrl,
  })),
  connect(({ firestore }) => {
    return {
      kerem: firestore.ordered.todos,
    };
  }),
);

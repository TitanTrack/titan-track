import withAuth from '../../auth/hocs/withAuth';
import { compose } from 'recompose';
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';

export default compose(
  withAuth,
  firebaseConnect((ownProps) => {
    const { auth } = ownProps;
    if (!isLoaded(auth)) return [];
    return [
      {
        path: `/todos/${auth.uid}/root`,
        storeAs: 'todos.own.root',
        queryParams: ['orderByKey'],
      },
      {
        path: `/todos/${auth.uid}/all`,
        storeAs: 'todos.own.all',
      },
    ];
  }),
  connect((state, ownProps) => {
    const { firebase } = state;
    return {
      'todos.own.all': dataToJS(firebase, 'todos.own.all'),
      'todos.own.root': firebase.getIn(['ordered', 'todos.own.root']),
    };
  })
);

import withAuth from '../../auth/hocs/withAuth';
import { compose } from 'recompose';
import { firebaseConnect, dataToJS, isLoaded, populatedDataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import getTodosPath from '../utils/getTodosPath';

const populates = [
  { child: 'children', root: '/todos/1ksxElrV4ZPETDdecllRqzpriHj1/all' },
];

export default compose(
  withAuth,
  connect((state, ownProps) => {
    const { auth } = ownProps;
    if (!isLoaded(auth)) return {};
    const allTodosPath = getTodosPath({
      uid: auth.uid,
      type: 'all',
    });
    const allTodosPopulates = [
      { child: 'children', root: allTodosPath },
    ];
    return {
      allTodosPath: getTodosPath({
        uid: auth.uid,
        type: 'all',
      }),
      allTodosPopulates,
    };
  }),
  firebaseConnect((ownProps) => {
    const { allTodosPath, allTodosPopulates } = ownProps;
    if (!allTodosPath) return [];
    return [
      {
        path: allTodosPath,
        queryParams: ['orderByKey'],
        storeAs: 'todos.own.all',
        populates: allTodosPopulates,
      },
    ];
  }),
  connect((state, ownProps) => {
    const { allTodosPopulates } = ownProps;
    if (!allTodosPopulates) return {};
    const { firebase } = state;
    return {
      todosOwnAll: populatedDataToJS(firebase, 'todos.own.all', allTodosPopulates),
    };
  })
);

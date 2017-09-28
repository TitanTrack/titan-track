import withAuth from '../../auth/hocs/withAuth';
import { compose } from 'recompose';
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';

export default compose(
  withAuth,
  connect((state, ownProps) => {
    const { auth } = ownProps;
    if (!isLoaded(auth)) return {};
    return {
      allTodosPath: `/todos/${auth.uid}/all`,
      rootTodosPath: `/todos/${auth.uid}/root`,
    };
  }),
  firebaseConnect((ownProps) => {
    const { allTodosPath, rootTodosPath } = ownProps;
    if (
      !isLoaded(allTodosPath) ||
      !isLoaded(rootTodosPath)
    ) return [];
    return [
      {
        path: rootTodosPath,
        storeAs: 'todos.own.root',
        queryParams: ['orderByKey'],
      },
      {
        path: allTodosPath,
        storeAs: 'todos.own.all',
      },
    ];
  }),
  connect((state, ownProps) => {
    const { firebase } = state;
    const { allTodosPath, rootTodosPath } = ownProps;
    return {
      'todos.own.all': dataToJS(firebase, 'todos.own.all'),
      'todos.own.root': firebase.getIn(['ordered', 'todos.own.root']),
      updateTodo: ({
        key,
        data,
      }) => {
        const todoPath = `${allTodosPath}/${key}`;
        return ownProps.firebase.update(todoPath, data);
      },
    };
  })
);

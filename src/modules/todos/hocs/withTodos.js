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
      userTodosPath: `todos/${auth.uid}`,
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
        storeAs: 'todosOwnRoot',
        queryParams: ['orderByKey'],
      },
      {
        path: allTodosPath,
        storeAs: 'todosOwnAll',
      },
    ];
  }),
  connect((state, ownProps) => {
    const { firebase } = state;
    const { allTodosPath, rootTodosPath, userTodosPath } = ownProps;
    return {
      todosOwnAll: dataToJS(firebase, 'todosOwnAll'),
      'todosOwnRoot': firebase.getIn(['ordered', 'todosOwnRoot']),
      addTodoToList: ({
        todoTitle,
        listKey,
      }) => {

        const newTodoKey = ownProps.firebase.ref().push().key;
        const newTodo = {
          parents: {},
          completed: false,
          title: todoTitle,
        };
        const updates = {
          [`all/${newTodoKey}`]: newTodo,
        };
        if (listKey) {
          newTodo.parents[listKey] = true;
          updates[`all/${listKey}/children/${newTodoKey}`] = newTodo;
        } else {
          updates[`root/${newTodoKey}`] = true;
        }
        return ownProps.firebase.update(userTodosPath, updates);
      },
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

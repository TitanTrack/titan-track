import { compose } from 'recompose';
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import withTodos from './withTodos';

export default compose(
  withTodos,
  connect((state, ownProps) => {
    const { firebase } = state;
    const todosOwnAll = ownProps['todos.own.all'];
    console.log('HERE1');
    if (!isLoaded(todosOwnAll)) return {};
    return {
      todo: todosOwnAll[ownProps.todoKey],
    };
  })
);

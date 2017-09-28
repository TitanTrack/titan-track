import { compose } from 'recompose';
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import withTodos from './withTodos';

export default compose(
  withTodos,
  connect((state, ownProps) => {
    const { firebase } = state;
    const todosOwnAll = ownProps['todos.own.all'];
    const { updateTodo } = ownProps;
    if (!isLoaded(todosOwnAll)) return {};
    const todo = todosOwnAll[ownProps.todoKey];
    return {
      todo,
      toggleTodo: (completed) => {
        updateTodo({
          key: ownProps.todoKey,
          data: {
            ...todo,
            completed,
          }
        })
      },
    };
  })
);

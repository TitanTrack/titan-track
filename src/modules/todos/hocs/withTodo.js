import { compose } from 'recompose';
import { firebaseConnect, dataToJS, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import withTodos from './withTodos';
import populateTodo from '../utils/populateTodo';

export default compose(
  withTodos,
  connect((state, ownProps) => {
    const { firebase } = state;
    const todosOwnAll = ownProps['todos.own.all'];
    const { updateTodo } = ownProps;
    if (!isLoaded(todosOwnAll)) return {};
    const todoUnpopulatedChildren = populateTodo({
      key: ownProps.todoKey,
      allTodos: todosOwnAll,
    });
    const todo = {
      ...todoUnpopulatedChildren,
      children: todoUnpopulatedChildren.children.map((childKey) => populateTodo({
        key: childKey,
        allTodos: todosOwnAll,
      })),
    };

    return {
      todo,
      toggleTodo: (completed) => {
        updateTodo({
          key: ownProps.todoKey,
          data: {
            completed,
          },
        })
      },
    };
  })
);

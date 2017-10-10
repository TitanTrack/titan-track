import {
  compose,
  withProps,
} from 'recompose';

export default compose(
  withProps((ownProps) => ({
    onTodoAdd: () => {

    },
    onTodoDelete: () => {

    },
    onTodoToggle: () => {

    },
    onTodoEdit: () => {

    },
  }))
);

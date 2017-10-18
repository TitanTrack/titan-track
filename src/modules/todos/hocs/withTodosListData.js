import {
  compose,
  withProps,
} from 'recompose';
import path from 'path';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import {
  getTodoItemsUrl,
  getTodoItemUrl,
} from '../lib';
import {
  objToArr,
  generateNumericSort,
} from '../../utils/lib';

export default compose(
  firestoreConnect((ownProps) => ([{
    path: getTodoItemsUrl(ownProps.todosListId),
  }])),
  connect(({ firestore }, ownProps) => {
    const unorderedTodos = firestore.data.todos;
    const curTodo = unorderedTodos ? unorderedTodos[ownProps.todosListId] : {
      todo_items: {},
      title: '',
    };
    return {
      title: curTodo.title,
      todoItems: objToArr(
        curTodo.todo_items,
        generateNumericSort({
          mapperFn: (item) => item.createdAt,
        })
      ),
    };
  })
);

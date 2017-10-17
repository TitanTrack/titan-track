import { TODOS_ROOT_PATH } from './consts';
import path from 'path';

export const getTodosListUrl = (listId) => (
  path.join(
    TODOS_ROOT_PATH,
    listId
  )
);

export const getTodoItemsUrl = (listId) => (
  path.join(
    getTodosListUrl(listId),
    'todo_items'
  )
);

export const getTodoItemUrl = ({
  listId,
  todoId,
}) => (
  path.join(
    getTodoItemsUrl(listId),
    todoId
  )
);

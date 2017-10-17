import { TODOS_ROOT_PATH } from './consts';
import path from 'path';

export const getTodosListUrl = (listId) => (
  path.join(
    TODOS_ROOT_PATH,
    listId
  )
);

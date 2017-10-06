import { TODOS_ROOT_PATH } from './consts';
import path from 'path';

export const getTodosListUrl = (listKey) => (
  path.join(
    TODOS_ROOT_PATH,
    listKey
  )
);

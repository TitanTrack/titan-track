export const VISIBILITY_FILTERS = {
  ALL: 'visibility_filters/all',
  COMPLETED: 'visibility_filters/completed',
  INCOMPLETE: 'visibility_filters/incomplete',
};

export const VISIBILITY_FILTER_FNS = {
  [VISIBILITY_FILTERS.ALL]: () => true,
  [VISIBILITY_FILTERS.INCOMPLETE]: (todo) => !todo.completed,
  [VISIBILITY_FILTERS.COMPLETED]: (todo) => todo.completed,
};

export const TODOS_ROOT_PATH = '/todos';

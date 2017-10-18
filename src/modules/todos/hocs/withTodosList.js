import withTodosListData from './withTodosListData';
import withTodosListMethods from './withTodosListMethods';
import { compose } from 'recompose';
export default compose(
  withTodosListData,
  withTodosListMethods,
);

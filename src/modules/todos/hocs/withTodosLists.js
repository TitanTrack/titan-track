import { compose, withProps } from 'recompose';
import { getTodosListUrl } from '../lib';

export default compose(
  withProps((ownProps) => ({
    todosLists: [{
      key: 'kerem',
      title: 'keremkazan',
    }],
    getTodosListUrl,
  }))
);

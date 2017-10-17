import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default compose(
  withRouter,
  withProps((ownProps) => ({
    todosListId: ownProps.match.params.tid,
  })),
);

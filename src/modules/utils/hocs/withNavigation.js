import { withRouter } from 'react-router';
import { compose, withProps } from 'recompose';

export default compose(
  withRouter,
  withProps((ownProps) => ({
    go: ownProps.history.push,
    isActive: (regex) => ownProps.match.path === regex,
  })),
);

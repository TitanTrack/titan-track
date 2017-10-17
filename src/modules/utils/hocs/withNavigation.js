import { withRouter } from 'react-router';
import { compose, withProps } from 'recompose';

export default compose(
  withRouter,
  withProps((ownProps) => ({
    isActive: (regex) => ownProps.match.path.match(regex),
  })),
);

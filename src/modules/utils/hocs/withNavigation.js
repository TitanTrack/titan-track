import { withRouter } from 'react-router';
import { compose, withProps } from 'recompose';

export default compose(
  withRouter,
  withProps((ownProps) => ({
    go: ownProps.history.push,
  })),
  withProps((ownProps) => {
    console.log({ownProps});
  })
);

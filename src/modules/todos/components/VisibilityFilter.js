import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { func, string } from 'prop-types';
import { withStyles } from 'material-ui/styles';


import { VISIBILITY_FILTERS } from '../consts';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class VisibilityFilter extends Component {
  static propTypes = {
    visibilityFilter: string.isRequired,
    onSetVisibilityFilter: func.isRequired,
  }

  handleChange = (event, val) => {
    const { onSetVisibilityFilter } = this.props;
    onSetVisibilityFilter(val);
  }

  render () {
    const { visibilityFilter, className } = this.props;
    return (
      <div className={className}>
        <Tabs
          value={visibilityFilter}
          onChange={this.handleChange}
        >
          <Tab label="All" value={VISIBILITY_FILTERS.ALL} />
          <Tab label="Incomplete" value={VISIBILITY_FILTERS.INCOMPLETE} />
          <Tab label="Completed" value={VISIBILITY_FILTERS.COMPLETED} />
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(VisibilityFilter);

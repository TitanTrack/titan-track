import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { func, string } from 'prop-types';

import { VISIBILITY_FILTERS } from '../consts/VISIBILITY_FILTERS';

class VisibilityFilter extends Component {
  static propTypes = {
    visibilityFilter: string.isRequired,
    onSetVisibilityFilter: func.isRequired,
  }

  render () {
    const {
      visibilityFilter,
      onSetVisibilityFilter,
    } = this.props;
    return (
      <Tabs
        value={visibilityFilter}
        onChange={onSetVisibilityFilter}
      >
        <Tab label="All" value={VISIBILITY_FILTERS.ALL} />
        <Tab label="Incomplete" value={VISIBILITY_FILTERS.INCOMPLETE} />
        <Tab label="Completed" value={VISIBILITY_FILTERS.COMPLETED} />
      </Tabs>
    );
  }
}

export default VisibilityFilter;

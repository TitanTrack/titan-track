import React, { Component } from 'react';
import IconMenu from '../../utils/components/IconMenu';
import withTodosListMethods from '../hocs/withTodosListMethods';
import { string, func } from 'prop-types';

class TodosListIconMenu extends Component {
  static propTypes = {
    todosListId: string.isRequired,
    onListDelete: func.isRequired,
    onOpenEdit: func.isRequired,
  }

  render () {
    const {
      onListDelete,
      onOpenEdit,
    } = this.props;
    return (
      <IconMenu
        items={[{
          onClick: onOpenEdit,
          label: "Edit",
        }, {
          onClick: onListDelete,
          label: "Delete",
        }]}
      />
    );
  }
}

export default withTodosListMethods(TodosListIconMenu);

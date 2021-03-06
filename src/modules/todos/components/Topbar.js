import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import VisibilityFilter from './VisibilityFilter';
import withTodosList from '../hocs/withTodosList';
import ListTitleForm from './ListTitleForm';
import TodosListIconMenu from './TodosListIconMenu';

class Topbar extends Component {
  state = {
    isEdit: false,
  }

  handleOpenEdit = () => {
    this.setState({
      isEdit: true,
    });
  }

  handleCloseEdit = () => {
    this.setState({
      isEdit: false,
    });
  }

  handleListTitleEdit = (title) => {
    const { onListTitleEdit } = this.props;
    this.handleCloseEdit();
    return onListTitleEdit(title);
  }

  render () {
    const {
      visibilityFilter,
      onSetVisibilityFilter,
      onListDelete,
      title,
      onListTitleEdit,
      todosListId,
    } = this.props;

    return (
      <Toolbar>
        {this.state.isEdit ?
          <ListTitleForm
            title={title}
            onSubmit={this.handleListTitleEdit}
            isEdit
          /> :
          <Typography type="title" color="inherit">
            {title}
          </Typography>
        }
        <VisibilityFilter
          visibilityFilter={visibilityFilter}
          onSetVisibilityFilter={onSetVisibilityFilter}
        />
        <TodosListIconMenu
          todosListId={todosListId}
          onOpenEdit={this.handleOpenEdit}
        />
      </Toolbar>
    );
  }
}

export default withTodosList(Topbar);

import React, { Component } from 'react';
import TodosList from './TodosList';
import TodosListsMenu from './TodosListsMenu';
import withTodosListPage from '../hocs/withTodosListPage';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { compose } from 'recompose';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class TodosListPage extends Component {
  render () {
    const { todosListId, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={12} lg={4}>
            <TodosListsMenu />
          </Grid>
          <Grid item sm={12} lg={8}>
            <TodosList todosListId={todosListId} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withTodosListPage,
)(TodosListPage);

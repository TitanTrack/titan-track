import React, { Component } from 'react';
import TodosListsMenu from './TodosListsMenu';
import Grid from 'material-ui/Grid';

class TodosMainPage extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item sm={12} lg={4}>
            <TodosListsMenu />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TodosMainPage;

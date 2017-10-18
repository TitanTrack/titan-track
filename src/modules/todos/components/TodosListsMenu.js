import React, { Component } from 'react';
import { array, func } from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { compose } from 'recompose';
import Divider from 'material-ui/Divider';
import ListTitleForm from './ListTitleForm';
import withTodosLists from '../hocs/withTodosLists';
import withTodosListMethods from '../hocs/withTodosListMethods';

const styles = {
  root: {
    marginBottom: 20,
  },
};

class TodosListMenuItemRaw extends Component {
  render () {
    const { todosList } = this.props;
    return (
      <ListItem
        component={Link}
        to={todosList.rootUrl}
        button
      >
        <ListItemText
          primary={todosList.title}
        />
      </ListItem>
    );
  }
}

const TodosListMenuItem = withTodosListMethods(TodosListMenuItemRaw);

class TodosListsMenu extends Component {
  static propTypes = {
    todosLists: array.isRequired,
  }

  render () {
    const {
      todosLists = [],
      classes,
      onTodosListAdd,
    } = this.props;
    return (
      <Paper className={classes.root}>
        <Toolbar>
          <Typography type="title" color="inherit">
            Todos Lists
          </Typography>
        </Toolbar>
        <List>
          <Divider />
          <ListItem>
            <ListTitleForm onSubmit={onTodosListAdd} />
          </ListItem>
          {todosLists.map((todosList, index) => (
            <TodosListMenuItem
              todosListId={todosList.id}
              key={`${todosList.key}-${index}`}
              todosList={todosList}
            />
          ))}
        </List>
      </Paper>
    );
  }
}

export default compose(
  withTodosLists,
  withStyles(styles)
)(TodosListsMenu);

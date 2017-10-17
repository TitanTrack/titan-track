import React, { Component } from 'react';
import { array, func } from 'prop-types';
import withTodosLists from '../hocs/withTodosLists';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

class TodosListsMenu extends Component {
  static propTypes = {
    todosLists: array.isRequired,
    getTodosListUrl: func.isRequired,
  }

  render () {
    const {
      todosLists = [],
      getTodosListUrl,
      kerem,
    } = this.props;
    console.log({kerem})
    return (
      <Paper>
        <List>
          {todosLists.map((todosList, index) => (
            <ListItem
              key={`${todosList.key}-${index}`}
              component={Link}
              to={getTodosListUrl(todosList.id)}
              button
            >
              <ListItemText
                primary={todosList.title}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

export default withTodosLists(TodosListsMenu);

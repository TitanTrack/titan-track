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
    } = this.props;
    return (
      <Paper>
        <List>
          {todosLists.map((todosList, index) => (
            <ListItem
              key={`${todosList.key}-${index}`}
              component={Link}
              to={getTodosListUrl(todosList.key)}
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

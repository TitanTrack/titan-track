import React, { Component } from 'react';
import { array, func } from 'prop-types';
import withTodosLists from '../hocs/withTodosLists';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';

class TodosMainPage extends Component {
  static propTypes = {
    todosLists: array.isRequired,
    getTodosListUrl: func.isRequired,
  }

  render () {
    const {
      todosLists = [],
      getTodosListUrl,
    } = this.props;
    console.log({
      todosLists,
    })
    return (
      <div>
        <Paper>
          <List>
            {todosLists.map((todosList, index) => (
              <ListItem key={`${todosList.key}-${index}`} button>
                <ListItemText
                  primary={`${getTodosListUrl(todosList.key)} - ${todosList.title}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}

export default withTodosLists(TodosMainPage);

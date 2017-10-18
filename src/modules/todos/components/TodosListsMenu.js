import React, { Component } from 'react';
import { array, func } from 'prop-types';
import withTodosLists from '../hocs/withTodosLists';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { compose } from 'recompose';
import Divider from 'material-ui/Divider';

const styles = {
  root: {
    marginBottom: 20,
  },
};

class TodosListsMenu extends Component {
  static propTypes = {
    todosLists: array.isRequired,
  }

  render () {
    const {
      todosLists = [],
      classes,
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
          {todosLists.map((todosList, index) => (
            <ListItem
              key={`${todosList.key}-${index}`}
              component={Link}
              to={todosList.rootUrl}
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

export default compose(
  withTodosLists,
  withStyles(styles)
)(TodosListsMenu);

import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { string, bool, func } from 'prop-types';
import IconMenu from '../../../utils/components/IconMenu';


const styles = {
  completed: {
    textDecoration:'line-through',
    color: 'gray',
  },
  incomplete: {},
};

class ViewTodoItem extends Component {
  static propTypes = {
    title: string.isRequired,
    completed: bool.isRequired,
    onTodoDelete: func.isRequired,
    onTodoToggle: func.isRequired,
    toggleEdit: func.isRequired,
  }

  render () {
    const {
      title,
      completed,
      toggleEdit,
      onTodoToggle,
      onTodoDelete,
    } = this.props;

    const textStyle = completed ? styles.completed : styles.incomplete;
    return (
      <ListItem
        dense
        button
        onClick={onTodoToggle}
      >
        <Checkbox
          checked={completed}
        />
        <ListItemText primary={<span style={textStyle}>{title}</span>} />
        <ListItemSecondaryAction>
          <IconMenu items={[{
            onClick: toggleEdit,
            label: "Edit",
          }, {
            onClick: onTodoDelete,
            label: "Delete",
          }]}
          >
          </IconMenu>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default ViewTodoItem;

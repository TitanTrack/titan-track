import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import { ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

import { grey400 } from 'material-ui/styles/colors';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const MoreVertButton = (
  <IconButton
    touch={true}
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const styles = {
  completed: {
    textDecoration:'line-through',
    color: grey400,
  },
  incomplete: {},
};

class TodoItem extends Component {
  static propTypes = {
    title: string.isRequired,
    completed: bool.isRequired,
    onTodoDelete: func.isRequired,
    onTodoToggle: func.isRequired,
  }

  handleTodoDelete = () => {
    const { onTodoDelete } = this.props;
    return onTodoDelete();
  }

  handleTodoToggle = (e, checked) => {
    const { onTodoToggle } = this.props;
    return onTodoToggle(checked);
  }

  render () {
    const {
      todoKey,
      title,
      completed,
    } = this.props;

    const TodoOptionsButton = (
      <IconMenu iconButtonElement={MoreVertButton}>
        <MenuItem onClick={this.handleTodoDelete} >
          Delete
        </MenuItem>
      </IconMenu>
    );

    const textStyle = completed ? styles.completed : styles.incomplete;

    return (
      <ListItem
        leftCheckbox={
          <Checkbox
            checked={completed}
            onCheck={this.handleTodoToggle}
          />
        }
        rightIconButton={TodoOptionsButton}
        primaryText={<span style={textStyle}>{title}</span>}
      />
    );
  }
}

export default TodoItem;

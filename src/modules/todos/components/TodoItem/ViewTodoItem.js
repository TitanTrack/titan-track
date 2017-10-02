import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400 } from 'material-ui/styles/colors';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { string, bool, func } from 'prop-types';

const styles = {
  completed: {
    textDecoration:'line-through',
    color: grey400,
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
    const MoreVertButton = (
      <IconButton
        touch={true}
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );
    const TodoOptionsButton = (
      <IconMenu iconButtonElement={MoreVertButton}>
        <MenuItem onClick={toggleEdit} >
          Edit
        </MenuItem>
        <MenuItem onClick={onTodoDelete} >
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
            onCheck={onTodoToggle}
          />
        }
        rightIconButton={TodoOptionsButton}
        primaryText={<span style={textStyle}>{title}</span>}
      />
    )
  }
}

export default ViewTodoItem;

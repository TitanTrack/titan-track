import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import withTodosList from '../hocs/withTodosList';
import { withStyles } from 'material-ui/styles';
import { string } from 'prop-types';

const styles = {
  rootForm: {
    width: '100%',
  },
};

class ListTitleForm extends Component {
  constructor (props) {
    super(props);
    this.state = this.getInitialState();
  }

  static propTypes = {
    title: string.isRequired,
  }

  static defaultProps = { title: '' };

  getInitialState = () => {
    return {
      title: this.props.title,
    }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const title = this.state.title;
    this.setState(this.getInitialState());
    return onSubmit(title);
  }

  render () {
    const { classes } = this.props;
    return (
      <form className={classes.rootForm} onSubmit={this.handleSubmit}>
        <TextField
          placeholder="Type a title for your list"
          label="List title"
          value={this.state.title}
          onChange={this.handleChange}
          fullWidth
        />
      </form>

    )
  }
}

export default withStyles(styles)(ListTitleForm);

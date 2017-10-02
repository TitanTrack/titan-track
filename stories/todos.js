import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodosList from '../src/modules/todos/components/TodosList';

const wrapWithTheme = (storyFn) => (
  <MuiThemeProvider>
    { storyFn() }
  </MuiThemeProvider>
);

const todos = [
  { key: '1', title: 'First Item', completed: true },
  { key: '2', title: 'Second Item', completed: true },
  { key: '3', title: 'Third Item', completed: false },
  { key: '4', title: 'Fourth Item', completed: false },
  { key: '5', title: 'Fifth Item', completed: true },
  { key: '6', title: 'Sixth Item', completed: false },
];

const onTodoDelete = ({
  todoKey,
}) => {
  action(`deleted todo with key: ${todoKey}`)();
}

const onTodoToggle = ({
  todoKey,
  completed,
}) => {
  action(`toggled todo: ${todoKey} to: ${completed}`)();
}

const onTodoAdd = (todoTitle) => {
  action(`added todo with title: ${todoTitle}`)();
}

export default () => {
  storiesOf('Todos', module)
    .addDecorator(wrapWithTheme)
    .add('with mixed todo items', () => (
      <TodosList
        onTodoDelete={onTodoDelete}
        onTodoToggle={onTodoToggle}
        onTodoAdd={onTodoAdd}
        todos={todos}
      />
    ));
}

import React from 'react';

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
  console.log(`Deleting todo with key: ${todoKey}`);
}

const onTodoToggle = ({
  todoKey,
  completed,
}) => {
  console.log(`Toggling todo with key: ${todoKey} to: ${completed}`)
}

export default () => {
  storiesOf('Todos', module)
    .addDecorator(wrapWithTheme)
    .add('with mixed todo items', () => (
      <TodosList
        onTodoDelete={onTodoDelete}
        onTodoToggle={onTodoToggle}
        todos={todos}
      />
    ));
}

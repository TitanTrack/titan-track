import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodosList from '../src/modules/todos/components/TodosList';

const wrapWithTheme = (storyFn) => (
  <MuiThemeProvider>
    { storyFn() }
  </MuiThemeProvider>
);

const todos = [
  { title: 'First Item', completed: true },
  { title: 'Second Item', completed: true },
  { title: 'Third Item', completed: false },
  { title: 'Fourth Item', completed: false },
  { title: 'Fifth Item', completed: true },
  { title: 'Sixth Item', completed: false },
];

export default () => {
  storiesOf('Todos', module)
    .addDecorator(wrapWithTheme)
    .add('with mixed todo items', () => (
      <TodosList />
    ));
}

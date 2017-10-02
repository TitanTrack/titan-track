import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default (storyFn) => (
  <MuiThemeProvider>
    { storyFn() }
  </MuiThemeProvider>
);

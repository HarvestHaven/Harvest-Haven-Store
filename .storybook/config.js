import React from 'react';
import '@storybook/addon-console';
import { addParameters, storiesOf, addDecorator, configure } from '@storybook/react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, install } from "@material-ui/styles";
import { muiTheme } from 'storybook-addon-material-ui';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#cddc39',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#ede5da'
      // default: '#313439'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

addDecorator(muiTheme())

addDecorator(storyFn =>
  <ThemeProvider {...{ theme }}>
    {storyFn()}
  </ThemeProvider>
);

addParameters({
  viewport: {
    defaultViewport: 'responsive',
  },
  backgrounds: [
    { name: 'default', value: '#FFFFFF' },
    { name: 'paper', value: '#f4f3ef', default: true },
  ],
});

const req = require.context('../src/presentation', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
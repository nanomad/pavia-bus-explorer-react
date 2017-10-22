import * as React from 'react';
import {
  AppBar
} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';

import { teal, blue, deepOrange } from 'material-ui/colors';

import './App.css';

const logo = require('./logo.svg');

const muiTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blue,
    error: deepOrange,
    type: 'dark'
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="App">
          <AppBar>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </AppBar>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

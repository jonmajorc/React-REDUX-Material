import React, {Component} from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import SideBar from './sidebar'
import Main from './main'

const muiTheme = getMuiTheme({
  palette: {
    color: cyan500
  },
  appBar: {
    height: 75,
    color: cyan500
  }
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="My AppBar"/>
            <SideBar />
            <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

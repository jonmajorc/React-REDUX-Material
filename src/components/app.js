import React, {Component} from 'react';
import {brown700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import SideBar from './side_bar'
var Scroll = require('react-scroll');

var Link = Scroll.Link;
var Element = Scroll.Element;

const muiTheme = getMuiTheme({
  palette: {
    color: brown700
  },
  appBar: {
    height: 75,
    color: brown700
  }
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="My AppBar"/>
            <SideBar/>
            <div id="container">
              <Element id="section-1" name="test1" className="element">
                test 1
              </Element>

              <Element id="section-2" name="test2" className="element">
                test 2
              </Element>

              <Element id="section-3" name="test3" className="element">
                test 3
              </Element>

              <Element id="section-4" name="test4" className="element">
                test 4
              </Element>

              <Element id="section-5" name="test5" className="element">
                test 5
              </Element>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

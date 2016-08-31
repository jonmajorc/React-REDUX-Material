import React, {Component} from 'react';
import Scroll, {Element} from 'react-scroll';
import AppBar from 'material-ui/AppBar';


export default class App extends Component {
  render() {
    return (
      <div id="container">
        <div ref="myInput">testing refs</div>
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
    );
  }
}

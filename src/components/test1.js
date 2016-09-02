import React, {Component} from 'react';
import Scroll, {Element} from 'react-scroll';
import {Sticky} from 'react-sticky';
import AppBar from 'material-ui/AppBar';
// when sidebar respective column is active fix appbar for that section

export default class Test1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollTop: null
    }
  }

  render() {
    return (
      <Element id="section-1" name="test1" className="element">
        <Sticky>
          <AppBar className='appbar' title="test1"/>
        </Sticky>
        test 1
      </Element>
    );
  }
}

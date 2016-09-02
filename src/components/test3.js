import React, {Component} from 'react';
import Scroll, {Element} from 'react-scroll';
import {Sticky} from 'react-sticky';
import AppBar from 'material-ui/AppBar';
// when sidebar respective column is active fix appbar for that section

export default class Test3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollTop: null
    }
  }

  render() {
    return (
      <Element id="section-3" name="test3" className="element">
        <Sticky>
          <AppBar className='appbar' title="test3"/>
        </Sticky>
        test 3
      </Element>
    );
  }
}

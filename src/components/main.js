import React, {Component} from 'react';
import Scroll, {Element} from 'react-scroll';
import {StickyContainer, Sticky} from 'react-sticky';
import AppBar from 'material-ui/AppBar';

import Test1 from './test1'
import Test2 from './test2'
import Test3 from './test3'
import Test4 from './test4'
import Test5 from './test5'
import Footer from './footer'
// when sidebar respective column is active fix appbar for that section

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollTop: null
    }
  }

  render() {
    return (
      <StickyContainer>
        <div id="container">
            <img src='../images/placeholder.jpg'></img>
          <Test1 />
          <Test2 />
          <Test3 />
          <Test4 />
          <Test5 />
          <Footer />
        </div>
      </StickyContainer>
    );
  }
}

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <AppBar 
            className='appbar'//Hiding away the hamburger menu on AppBar
            title="My AppBar"
            />
          <MenuItem><Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} >
          Test 1
        </Link></MenuItem>
          <MenuItem><Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500}>
          Test 2
        </Link></MenuItem>
          <MenuItem><Link className="test3" to="test3" spy={true} smooth={true} duration={500}>
          Test 3
        </Link></MenuItem>
          <MenuItem><Link className="test4" to="test4" spy={true} smooth={true} duration={500} >
          Test 4
        </Link></MenuItem>
        <MenuItem><Link className="test5" to="test5" spy={true} smooth={true} duration={500} >
          Test 5
        </Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}
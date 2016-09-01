import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Scroll, {Link, Element, Events, scroll, scrollSpy} from 'react-scroll';


export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
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
          <AppBar className='appbar' title="My AppBar"/>
          <Link activeClass="active" to="test1" spy={true} smooth={true} offset={0} duration={500}>
            <MenuItem>
              Test 1
            </MenuItem>
          </Link>
          <Link activeClass="active" to="test2" spy={true} smooth={true} offset={0} duration={500}>
            <MenuItem>
              Test 2
            </MenuItem>
          </Link>
          <Link activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500}>
            <MenuItem>
              Test 3
            </MenuItem>
          </Link>
          <Link activeClass="active" to="test4" spy={true} smooth={true} offset={0} duration={500}>
            <MenuItem>
              Test 4
            </MenuItem>
          </Link>
          <Link activeClass="active" to="test5" spy={true} smooth={true} offset={0} duration={500}>
            <MenuItem>
              Test 5
            </MenuItem>
          </Link>

        </Drawer>
      </div>
    );
  }
}

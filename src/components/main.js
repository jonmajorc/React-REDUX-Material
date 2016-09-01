import React, {Component} from 'react';
import Scroll, {Element} from 'react-scroll';
import {StickyContainer, Sticky} from 'react-sticky';
import AppBar from 'material-ui/AppBar';
// when sidebar respective column is active fix appbar for that section

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollTop: null
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // console.log(event.srcElement.body.scrollTop)
    // let scrollTop = event.srcElement.body.scrollTop,
    //     element = document.getElementById('sticky-header'),
    //     rectTop = element.getBoundingClientRect().top,
    //     section = document.getElementById('section-1'),
    //     sectionSize = section.getBoundingClientRect().height
    //     if (rectTop <= 0) {
    //         console.log(element.classList.add('stick'))
    //
    //     }else{
    //         console.log(element.classList.remove('stick'))
    //     }
    //     if(sectionSize > 719 || sectionSize > 794){
    //         console.log(element.classList.remove('stick'))
    //     }
    //     console.log('bounding rect',rectTop)
    //     console.log('value of scrollTop',scrollTop)
    //     console.log('height of section',sectionSize)
    // console.log('value of eleTop',eleTop)
    // console.log(itemTranslate)
    // this.setState({
    //   transform: scrollTop
    // });
  }

  render() {
    return (
      <StickyContainer>
        <div id="container">
          <Element id="section-1" name="test1" className="element">
            <Sticky>
              <AppBar className='appbar' title="test1"/>
            </Sticky>
            test 1
          </Element>

          <Element id="section-2" name="test2" className="element">
            <Sticky>
              <AppBar className='appbar' title="test2"/>
            </Sticky>
            test 2
          </Element>

          <Element id="section-3" name="test3" className="element">
            <Sticky>
              <AppBar className='appbar' title="test3"/>
            </Sticky>
            test 3
          </Element>

          <Element id="section-4" name="test4" className="element">
            <Sticky>
              <AppBar className='appbar' title="test4"/>
            </Sticky>
            test 4
          </Element>

          <Element id="section-5" name="test5" className="element">
            <Sticky>
              <AppBar className='appbar' title="test5"/>
            </Sticky>
            test 5
          </Element>
        </div>
      </StickyContainer>
    );
  }
}

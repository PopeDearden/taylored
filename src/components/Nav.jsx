import React, { Component } from "react";
import '../App.scss'
import Slide from 'react-reveal/Slide';
import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render() {
    return (
      // <Slide right>
        <div className="Nav-Bar" >
          <Link
            to="Home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="Nav-Button">
              <h2>Home</h2>
            </div>
          </Link>
          <Link
            to="About"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="Nav-Button">
              <h2>ABOUT</h2>
            </div>
          </Link>
          <Link
            to="Projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="Nav-Button">
              <h2>PORTFOLIO</h2>
            </div>
          </Link>
          <div className="Nav-Button">
            <h2>EXPERIENCE</h2>
          </div>
          <div className="Nav-Button">
            <h2>CONTACT</h2>
          </div>
        </div>
      // </Slide>
    )

  }
}

export default Nav;

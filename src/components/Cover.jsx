import React, { Component } from "react";
import '../App.scss'
import { Link, animateScroll as scroll } from "react-scroll";


class Cover extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className = "Cover" id="Home" >
          <div className = "Box1">
              <h1>Hello! My name is <b id="My-Name">Taylor Dearden,</b></h1>
              <h1>I'm a full stack software engineer.</h1>
          </div>
          <Link
            to="About"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
              <div className="Cover-Button"><h2>Learn More</h2><i class="far fa-arrow-alt-circle-right"></i></div>
          </Link>
      </div>
    )

  }
}

export default Cover;

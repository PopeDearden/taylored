import React, { Component } from "react";
import '../App.scss'
import { Link, animateScroll as scroll } from "react-scroll";


class Cover extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  componentDidMount(){
    setTimeout(()=>{
      window.location.href="https://tayloredsoftware.dev"
    }, 5000)
  }
  render(){
    return(
      <div className = "Cover" id="Home" >
          <div className = "Box1">
              <h1><b id="My-Name">Taylor Dearden</b> has a new portfolio!</h1>
              <h1>You will be redirected there shortly.</h1>
          </div>
          {/* <Link
            to="About"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
              <div className="Cover-Button"><h2>Learn More</h2><i class="far fa-arrow-alt-circle-right"></i></div>
          </Link> */}
      </div>
    )

  }
}

export default Cover;

import React, { Component } from "react";
import '../App.scss'



class Nav extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className = "Nav-Bar" >
          <div className="Nav-Button">
              <h2>HOME</h2>
          </div>
          <div className="Nav-Button">
              <h2>ABOUT</h2>
          </div>
          <div className="Nav-Button">
              <h2>PORTFOLIO</h2>
          </div>
          <div className="Nav-Button">
              <h2>EXPERIENCE</h2>
          </div>
          <div className="Nav-Button">
              <h2>CONTACT</h2>
          </div>
      </div>
    )

  }
}

export default Nav;

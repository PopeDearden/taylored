import React, { Component } from "react";
import '../App.scss'



class Cover extends Component {
  constructor(s) {
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className = "Cover" >
          <div className = "Box1">
              <h1>Hello! My name is <b id="My-Name">Taylor Dearden,</b></h1>
              <h1>I'm a full stack software engineer.</h1>
          </div>
              <div className="Cover-Button"><h2>View my work</h2><i class="far fa-arrow-alt-circle-right"></i></div>
      </div>
    )

  }
}

export default Cover;

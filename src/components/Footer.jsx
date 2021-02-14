import React, { Component } from "react";
import '../App.scss'
import { Link, animateScroll as scroll } from "react-scroll";


class Footer extends Component {
    constructor(s) {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="Footer" >
                <div className="Footer-Box">
                    <div className="Footer-Text">
                        <h2>Contact info:</h2>
                        <p>taylordearden@gmail.com</p>
                        <p>(801) 425-4122</p>
                        <p>© Taylor Dearden 2021</p>
                    </div>
                
                </div>
            </div>
        )

    }
}

export default Footer;

import React, { Component } from "react";
import '../App.scss'
import { Link, animateScroll as scroll } from "react-scroll";
import Slide from 'react-reveal/Slide';

class Contact extends Component {
    constructor(s) {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <Slide left cascade>
                <div className="Contact" id="Contact" >
                    <div className="Page-Title">
                        <h1>Contact</h1>
                    </div>
                    <div className="Contact-Format">
                        <div className="Contact-Text">
                            <h2>Directly</h2>
                            <p>(801) 425-4122 </p>
                            <p>taylordearden@gmail.com</p>
                            <p>taylor@goodalways.com</p>
                        </div>
                        <div className="Contact-Text">
                            <h2>Social</h2>
                            <h2>
                                <a href="https://www.linkedin.com/in/taylor-kyle-dearden" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                              LinkedIn
                            </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </Slide>
        )

    }
}

export default Contact;

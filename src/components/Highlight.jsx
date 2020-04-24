import React, { Component } from "react";
import '../App.scss'

import Fade from 'react-reveal/Fade';




class Highlight extends Component {
    constructor(s) {
        super()
        this.state = {
        }
    }
    render(props) {
        return (
            <Fade bottom>
                <div className="DisplayCase">
                    <div className="MarginFix">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.description}</h2>
                        <p>{this.props.body}</p>
                        <h2>Technologies Used</h2>
                        <p>{this.props.technologies}</p>
                        <div className="ProjectInfo">
                            <h2>More information ( Scroll Down )</h2>

                            <a href={this.props.url} target="_blank">
                                <button>Visit Site</button>
                            </a>
                        </div>

                        {this.props.photos.map(image => (
                            <div className="ProjectInfo">
                                <p>{image.description}</p>
                                <img src={image.url} alt="technoglyph screenshot"></img>
                            </div>
                        ))}
                        {/* <h2>{this.props.description}</h2>
                        <p>{this.props.body}</p>
                        <h2>Technologies Used</h2>
                        <p>{this.props.technologies}</p>



                        <h2>More information ( Scroll Down )</h2>
                        <a href={this.props.url} target="_blank">
                            <button>Visit Site</button>
                        </a>

                        {this.props.photos.map(image => (
                            <div className="Split">
                                <p>{image.description}</p>
                                <img src={image.url} alt="technoglyph screenshot"></img>
                            </div>
                        ))} */}
                    </div>
                </div>
            </Fade>
        )

    }
}

export default Highlight;

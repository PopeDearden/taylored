import React, { Component } from "react";
import '../App.scss'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
class About extends Component {
    constructor(s) {
        super()
        this.state = {
            pic1: 'https://lh3.googleusercontent.com/dYfvKnkVdG2OYhK_2-u1ODFSSgJRvXelapjIGcmH95cl3u38kVO97PUAAqCYQbBeRs_V9OZlBUILSv46yYaeXHfoef-CnxyIPvHpJBNWJAtvEMzQ1lb7ZzNIY1sVJM-YX8rjoJW4my0Vh9mJgK3Mbfb9MFrgBWZp7hxveXHFkggiPK5lIhDK6sUmdHDc0ilO9zIhu2Lp273D2rXKvrjk9ACOKfm2JK54OFSJgdxBjDi_IWrJ-yGAMjjFoG0Ebqj-5svRiibHexhPlJl9h3NTf9anJE_qQYTN8dfM3F27ZYIQM2WnIx2nvNauV3qL_KWm3Ji_tIrACZpgKKvMltI-7qbHQQzMOaHhXOgAQzviRvXAfF6rYdwndKK1jZMcZB-XUxS9mR_afW9V0j651B_8EOnPw-55bgGtRfHf_NfkzxO7gn6MC49Z0VYpY3IxPRV_vccwETTus8CGmVY1357WYq_ly2UlqsfUMkZPw5rBgaIUcpohfniww_10m0sNKfNKmLwHpmCxuOJCdN2HahYfAQBAzDprAPtA5Hw3aAJNXtf7VZRT1S58uhj-pTeQ8EACQLEah23umWqMGHEYJAXThCwz0b_fjdoRAcHV-sTSR11Njgl5tL1kTmpij-bDALg4FRw4fHkBR1aMnoFiY0N55ppzGeUTCt0xJnpkffpvCvHTPX0-rHjhB7uvSXGCxax6hWFJ0cj_iJQtYvZ-bx3MU_Ddw5aZqFZKugv0cYjdb9iOAD0ipz9bX_k=s903-no'
        }
    }
    render() {
        return (
            <div className="About" >
                <Fade bottom>
                    <div className="Page-Title">
                        <h1>What I do</h1>
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div className="About-List">
                        <div className="List-Item">
                            <div className="Circle">
                                <i class="fas fa-laptop-code"></i>
                            </div>
                            <h2>Web <br></br>Development</h2>
                            <p>Software Engineer, Pluralsight apprentice, independent contractor</p>
                        </div>
                        <div className="List-Item">
                            <div className="Circle">
                                <i class="fas fa-hand-holding-heart"></i>
                            </div>
                            <h2>Social<br></br> Entrepreneurship</h2>
                            <p>North America Director of Good Always™ Inc</p>
                        </div>
                        <div className="List-Item">
                            <div className="Circle">
                                <i class="fas fa-ankh"></i>
                            </div>
                            <h2>Antiquity <br></br>Research</h2>
                            <p>Board member of The Ancient Historical Research Foundation</p>
                        </div>
                        <div className="List-Item">
                            <div className="Circle">
                            <i class="fas fa-donate"></i>
                            </div>
                            <h2>Humanitarian <br></br>Work</h2>
                            <p>Volunteer for Stones of Light Education Foundation and Light-It-Forward</p>
                        </div>
                    </div>
                </Fade>

                <div className="About-Section">
                    <Fade bottom cascade>
                        <div className="Profile-Box">
                            <img src={this.state.pic1} alt="Taylor Dearden" />
                            <h2>My Vision</h2>
                            <p>I am focused on helping as many families escape extreme poverty as I can. I believe tech skills and online education is the best path to make that difference.</p>
                        </div>
                    </Fade>
                    <div className="Experience">
                        <Fade top>
                        <h1>Tech Skills</h1>
                        </Fade>
                        <Flip right cascade>
                            <div className="Skills-Box">
                                <div className="Skill">
                                    <i class="fab fa-react"></i>
                                    <h2>React</h2>
                                </div>
                                <div className="Skill">
                                    <i class="fab fa-js"></i>
                                    <h2>Javascript</h2>
                                </div>
                                <div className="Skill">
                                    <i class="fab fa-html5"></i>
                                    <h2>HTML5</h2>
                                </div>
                                <div className="Skill">
                                    <i class="fab fa-css3-alt"></i>
                                    <h2>CSS3</h2>
                                </div>
                                <div className="Skill">
                                    <i class="fab fa-sass"></i>
                                    <h2>Sass</h2>
                                </div>
                                <div className="Skill">
                                    <i class="fab fa-git-alt"></i>
                                    <h2>Git</h2>
                                </div>
                                <div className="Skill">
                                    <i class="fab fa-node"></i>
                                    <h2>Node.js</h2>
                                </div>
                                <div className="Skill">
                                    <img src="https://lh3.googleusercontent.com/boheM_xZeeQ-SQEzpECoOl2Z4fsai8NGLLd_-fCbGk3vd_NIa5JIpFa9oIBGfEEFzMR32Y6x2crdSMbCv5SndYkGPlMXOLg0aDHRBQYthmD1bGGds0zhsm4xuzpXYKCF1d_Qq7Hac367_nI2wngB7UVxDLwqC0SMAiMV9mNbiszOv28uGGjiFgZ8qBY6hxE_j2mM-7kCoNfwhUcNfZNF0X2PwYXvBs3gqXNztCBo-P9KKMeWuOGyKtBP0rYd2dzFCogvEBFjqknGMVlT-r-ueZ6QpGsN0OXpOn49DBaOnOV6G3g9v0lF3c_mzbhJVq_SNNBajXRnOOBrlDCRjCy43j5p4x4Ve7eX2BEF0JwI-yhwmjElbVi5PcIKAG61N1WuubFif_w5v65nysmPHL5K3doCimq4MHAmnqzHSGteUdkLGjA2wkWPQ8hFDa41I9Z_DRgVb1kFPqhs5615Hveyway0umI6yWrwFrz32XTKYqkipGK5jV6cevYwVKWqXZHUYxDdNCvKvbqOwIa5HDbGsmDDdPB-fiOUEiRf4EJFgV6NiPgW4gNIsX6IMbxK-V5U4fAp5zWUM9IiwQwCwQzXJaN00t8ZFyYqxe9cOoRHfn0ZjdpmdZ-S5v_b3e-kiyiLE_PeLEFj_wdmpd6TYTkhMQZACpJgR4Vm9X7LDsMVC1LuCZTpKH4TDY5gjYcVPB7KLIdCpEn975sp-E3BDeNtkUD1DuPMya9-jPBDD4bC8bf5zt5HbL9Z27Y=s96-no" alt="postgreSQL" width="50px"></img>
                                    <h2>PostgreSQL</h2>
                                </div>
                                <div className="Skill">
                                    <i class="fab fa-shopify"></i>
                                    <h2>Shopify</h2>
                                </div>
                            </div>
                        </Flip>
                    </div>

                </div>
            </div>
        )

    }
}

export default About;

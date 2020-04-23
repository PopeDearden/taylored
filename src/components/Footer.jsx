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
                    <img src="https://lh3.googleusercontent.com/SvmzGD8Fc-tMtYFwfOtenwwq-9g4qhved2mK8-_lCHelkZGRmcaY_N8LjzFCkC0c2CMzyCBqnBvlbSM2ETJ5o7odyXkoxNuudO9HA46m9HRXZ-tS0OzdKBBkCRs3KBrHKwyNhPQbyWsMMnb3Bkdn61m9JoO-oCRARiDyHGMgcT4NefTzDsSMWrcdLHFhCt1C9GNw3YAoNXgLoky5oFLqRT4--Y43yV9g1bru40wOfwF6ns7BCS5NJTBFdH6Xk4ZdMeVhy7PPVSXXW2aVBP4Hv4DmluotqYBq-RoBInP3qEL3VVjKF773Sow1GDC3i2_cfWeQxy6heZH_CgLhejt72u4EsyINudZPJWwdK5_9GujmRxjZJlLpEzeOtCsjdRnSmG5K1SbyBFAWay1XdUFe_CYJMhq36Mfq1zx0NMDBANFQttzLNiaRAXQkToSG2Kikwz4nOSJ8yGm99E8Uw4qb_eJMWy9G8buwPu6CD8hBKxabiZePSMhPzDGPbSAsBfbpHl_hxnI8i6EcL-IYU_gK6x_DxplFT2uf9aTU26wZCimFddLyiQyOxHd9yLU4haDvDiF03Vp3bd95xpq0p5LRoTQV_8JXqiVX3exWKaPdIBR7Pw_lj7OSuxdibERGJ1PHyHOO7NqKOJ-6ApKUb6Pm2dlfXaXBnUNcrmhCBhToV-wdkEzTGhchOXXBSD_pmK8wgVihxbkhVNhmEfczh9z5yNyPyQmDvZiaYuLys9U2TJYBdUnelmb5pII=s825-no" alt="logo" />
                    <div className="Footer-Text">
                        <h2>tayloredcoding.com</h2>
                        <p>© Taylor Dearden 2020</p>
                        <p>taylordearden@gmail.com</p>
                    </div>
                </div>
            </div>
        )

    }
}

export default Footer;

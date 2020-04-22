import React, { Component } from "react";
import '../App.scss'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


class Projects extends Component {
    constructor(s) {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="Projects">
                <div className="Page-Title">
                    <h1>Noteable Projects</h1>
                </div>
                <div className="Projects-List">
                    <Flip top>
                    <div className="Project-Box">
                        <img src="https://lh3.googleusercontent.com/lZ31QqRAygzgQjRLFDxEVobn7l9ABWaoPHA65am4oi2Ibpb4QDwOXh8By46OdoOaP7hFQbt6roqxzajpocLEaCgeZB-4Gt7lH_2ppbUhEFBh8aWH7981RyDlloq13mDy-4MfRCK4yQCLbDnFql0Jx8gVDJbQvUh61vj0-TR8zhSqLZ_TR-N9KVyqvKfVc7VFaPBKJH9MLxlLDKQNDtTJyIxr9DZPWaXrJG51caomfszVD7FxemVSVk6HbKpvobNa1qayN_nXsfterx4CCocjkkVyLQu5OVNE8PnSWV-MFMlArmA8zoPOtvYvV4hhmNXQ-VTOqgMSsSlfHvBPr_nFUjMGFFC1aQZEKTt7FOkdUeKUsjGSghlY8Q77gtaaR5B8ASEsF0g0MJa4el-SSP1nWp1uuyZVfgBy4x8ypItrNyU7p23myrlRCy_sGEym89X2_RhGuFmUXmFN5k_r0V3hkPdzjKGOXq767Kr4e-jSVOh2z3FQxEGkgdsmWLgNsYaawiaX5h-_bIrSOO14Gxwma5gNE5MERGBUJ2Xd_Wi8TzouOkukZkxpdSzyt5Xu9x8yfeFF8bnAptjITPijgcWzvcq-czJaxCqG1L9GHnsxSHifHqNGDKOX47TJ76EnWNWsHjdympDWiLvKUstvCFjzeGr_bFt2jI4wg1-JgxTUQ5449URgWzSZwU4MQzFaf4a9wAcOtLh_4A72U7DnxsjP58GSNiq1NUUUR54fUvmZRdqAz3tMqoyg-N0=w1853-h903-no" alt="Technoglyph"/>
                        <Flip top>
                        <div className="Project-Words">
                        <h2>Technoglyph</h2>
                        <h3>Petroglyph Analysis Software</h3>
                        </div>
                        </Flip>
                    </div>
                    </Flip>
                    <Flip top>
                    <div className="Project-Box">
                        {/* <img src="https://lh3.googleusercontent.com/lZ31QqRAygzgQjRLFDxEVobn7l9ABWaoPHA65am4oi2Ibpb4QDwOXh8By46OdoOaP7hFQbt6roqxzajpocLEaCgeZB-4Gt7lH_2ppbUhEFBh8aWH7981RyDlloq13mDy-4MfRCK4yQCLbDnFql0Jx8gVDJbQvUh61vj0-TR8zhSqLZ_TR-N9KVyqvKfVc7VFaPBKJH9MLxlLDKQNDtTJyIxr9DZPWaXrJG51caomfszVD7FxemVSVk6HbKpvobNa1qayN_nXsfterx4CCocjkkVyLQu5OVNE8PnSWV-MFMlArmA8zoPOtvYvV4hhmNXQ-VTOqgMSsSlfHvBPr_nFUjMGFFC1aQZEKTt7FOkdUeKUsjGSghlY8Q77gtaaR5B8ASEsF0g0MJa4el-SSP1nWp1uuyZVfgBy4x8ypItrNyU7p23myrlRCy_sGEym89X2_RhGuFmUXmFN5k_r0V3hkPdzjKGOXq767Kr4e-jSVOh2z3FQxEGkgdsmWLgNsYaawiaX5h-_bIrSOO14Gxwma5gNE5MERGBUJ2Xd_Wi8TzouOkukZkxpdSzyt5Xu9x8yfeFF8bnAptjITPijgcWzvcq-czJaxCqG1L9GHnsxSHifHqNGDKOX47TJ76EnWNWsHjdympDWiLvKUstvCFjzeGr_bFt2jI4wg1-JgxTUQ5449URgWzSZwU4MQzFaf4a9wAcOtLh_4A72U7DnxsjP58GSNiq1NUUUR54fUvmZRdqAz3tMqoyg-N0=w1853-h903-no" alt="Technoglyph"/> */}
                        <Flip top>
                        <div className="Project-Words">
                        <h2>Fundraiser Portal</h2>
                        <h3>Sales and inventory management software</h3>
                        </div>
                        </Flip>
                    </div>
                    </Flip>
                    <Flip top>
                    <div className="Project-Box">
                        {/* <img src="https://lh3.googleusercontent.com/lZ31QqRAygzgQjRLFDxEVobn7l9ABWaoPHA65am4oi2Ibpb4QDwOXh8By46OdoOaP7hFQbt6roqxzajpocLEaCgeZB-4Gt7lH_2ppbUhEFBh8aWH7981RyDlloq13mDy-4MfRCK4yQCLbDnFql0Jx8gVDJbQvUh61vj0-TR8zhSqLZ_TR-N9KVyqvKfVc7VFaPBKJH9MLxlLDKQNDtTJyIxr9DZPWaXrJG51caomfszVD7FxemVSVk6HbKpvobNa1qayN_nXsfterx4CCocjkkVyLQu5OVNE8PnSWV-MFMlArmA8zoPOtvYvV4hhmNXQ-VTOqgMSsSlfHvBPr_nFUjMGFFC1aQZEKTt7FOkdUeKUsjGSghlY8Q77gtaaR5B8ASEsF0g0MJa4el-SSP1nWp1uuyZVfgBy4x8ypItrNyU7p23myrlRCy_sGEym89X2_RhGuFmUXmFN5k_r0V3hkPdzjKGOXq767Kr4e-jSVOh2z3FQxEGkgdsmWLgNsYaawiaX5h-_bIrSOO14Gxwma5gNE5MERGBUJ2Xd_Wi8TzouOkukZkxpdSzyt5Xu9x8yfeFF8bnAptjITPijgcWzvcq-czJaxCqG1L9GHnsxSHifHqNGDKOX47TJ76EnWNWsHjdympDWiLvKUstvCFjzeGr_bFt2jI4wg1-JgxTUQ5449URgWzSZwU4MQzFaf4a9wAcOtLh_4A72U7DnxsjP58GSNiq1NUUUR54fUvmZRdqAz3tMqoyg-N0=w1853-h903-no" alt="Technoglyph"/> */}
                        <Flip top>
                        <div className="Project-Words">
                        <h2>Good Always</h2>
                        <h3>Customized Shopify Store, profits help combat extreme poverty!</h3>
                        </div>
                        </Flip>
                    </div>
                    </Flip>
                    <Flip top>
                    <div className="Project-Box">
                        {/* <img src="https://lh3.googleusercontent.com/lZ31QqRAygzgQjRLFDxEVobn7l9ABWaoPHA65am4oi2Ibpb4QDwOXh8By46OdoOaP7hFQbt6roqxzajpocLEaCgeZB-4Gt7lH_2ppbUhEFBh8aWH7981RyDlloq13mDy-4MfRCK4yQCLbDnFql0Jx8gVDJbQvUh61vj0-TR8zhSqLZ_TR-N9KVyqvKfVc7VFaPBKJH9MLxlLDKQNDtTJyIxr9DZPWaXrJG51caomfszVD7FxemVSVk6HbKpvobNa1qayN_nXsfterx4CCocjkkVyLQu5OVNE8PnSWV-MFMlArmA8zoPOtvYvV4hhmNXQ-VTOqgMSsSlfHvBPr_nFUjMGFFC1aQZEKTt7FOkdUeKUsjGSghlY8Q77gtaaR5B8ASEsF0g0MJa4el-SSP1nWp1uuyZVfgBy4x8ypItrNyU7p23myrlRCy_sGEym89X2_RhGuFmUXmFN5k_r0V3hkPdzjKGOXq767Kr4e-jSVOh2z3FQxEGkgdsmWLgNsYaawiaX5h-_bIrSOO14Gxwma5gNE5MERGBUJ2Xd_Wi8TzouOkukZkxpdSzyt5Xu9x8yfeFF8bnAptjITPijgcWzvcq-czJaxCqG1L9GHnsxSHifHqNGDKOX47TJ76EnWNWsHjdympDWiLvKUstvCFjzeGr_bFt2jI4wg1-JgxTUQ5449URgWzSZwU4MQzFaf4a9wAcOtLh_4A72U7DnxsjP58GSNiq1NUUUR54fUvmZRdqAz3tMqoyg-N0=w1853-h903-no" alt="Technoglyph"/> */}
                        <Flip top>
                        <div className="Project-Words">
                        <h2>Foundation for Ancient American Studies</h2>
                        <h3>Custom React App informational website</h3>
                        </div>
                        </Flip>
                    </div>
                    </Flip>
                   
                </div>
            </div>
        )

    }
}

export default Projects;

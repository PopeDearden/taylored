import React, { Component } from "react";
import '../App.scss'
import Flip from 'react-reveal/Flip';
import Highlight from './Highlight'
import Slide from 'react-reveal/Slide';

function Projects () {



        return (
            <div id="section1" className="Projects">
                <div className="Page-Title">
                    <h1>Noteable Projects</h1>
                </div>
                <div className="Projects-List">
                    <Flip top>
                        <div className="Project-Box">
                            <img src="https://lh3.googleusercontent.com/lZ31QqRAygzgQjRLFDxEVobn7l9ABWaoPHA65am4oi2Ibpb4QDwOXh8By46OdoOaP7hFQbt6roqxzajpocLEaCgeZB-4Gt7lH_2ppbUhEFBh8aWH7981RyDlloq13mDy-4MfRCK4yQCLbDnFql0Jx8gVDJbQvUh61vj0-TR8zhSqLZ_TR-N9KVyqvKfVc7VFaPBKJH9MLxlLDKQNDtTJyIxr9DZPWaXrJG51caomfszVD7FxemVSVk6HbKpvobNa1qayN_nXsfterx4CCocjkkVyLQu5OVNE8PnSWV-MFMlArmA8zoPOtvYvV4hhmNXQ-VTOqgMSsSlfHvBPr_nFUjMGFFC1aQZEKTt7FOkdUeKUsjGSghlY8Q77gtaaR5B8ASEsF0g0MJa4el-SSP1nWp1uuyZVfgBy4x8ypItrNyU7p23myrlRCy_sGEym89X2_RhGuFmUXmFN5k_r0V3hkPdzjKGOXq767Kr4e-jSVOh2z3FQxEGkgdsmWLgNsYaawiaX5h-_bIrSOO14Gxwma5gNE5MERGBUJ2Xd_Wi8TzouOkukZkxpdSzyt5Xu9x8yfeFF8bnAptjITPijgcWzvcq-czJaxCqG1L9GHnsxSHifHqNGDKOX47TJ76EnWNWsHjdympDWiLvKUstvCFjzeGr_bFt2jI4wg1-JgxTUQ5449URgWzSZwU4MQzFaf4a9wAcOtLh_4A72U7DnxsjP58GSNiq1NUUUR54fUvmZRdqAz3tMqoyg-N0=w1853-h903-no" alt="Technoglyph" />
                            <Flip top>
                                <div className="Project-Words">
                                    <h2>Technoglyph</h2>
                                    <h3>Petroglyph Analysis Software.</h3>
                                    <div className="Spliting">
                                        {/* <button onClick={() => this.setState({ technoglyph: true })}>LEARN MORE</button> */}
                                        <a href="https://www.technoglyph.org" target="_blank">
                                            <button>VISIT SITE</button>
                                        </a>
                                    </div>
                                </div>
                            </Flip>
                        </div>
                    </Flip>
                    <Flip top>
                        <div className="Project-Box">
                            <img src="https://lh3.googleusercontent.com/-zxNY3bNuoO1cDPCISSQjIxx0ZT3CRg68PqdwP_42uTSIK6rOzgF2jpDJPnRB2FIFgrZCZ_rPK1RF2Ik1ATBZiBj7xX9Mo3uvEoHLoMH6BW1SU_cYSVQEJYRFHOqYiqPt0m2BDJqO5NbvsY9_chqS9QbSNFOaUmDkMgSfi1aWkORSFWy-_aeFD2Db494oPTFU0wjDbs7I18qny90ZXQJHhHUAy7QfiVRE_UNDkUyBMqF7j5Znh1y77DBCdPU6N-W3AK5vawJBVtGFiDjzgoMtTsPTO_uNRShVo4wgl5WoS-PZuY5ePf_tkhclw3LYy9jEaCwmiRr2lbYl4cvNcqROAkCU98kCcl1yFHxY1wDgi475x8MB6nfHXyMZvIegz4o-k-6D28TQqIbW8q06Bv-pb2BKbQtOeePQQdH03zhphEYv7DSt7tuBa8o33Yuvo5ohncYokfGlcI8zfIkE6V9fsD_X2bEcEWgmYzoj0T9qU8FVC49o9XBoYk7DxO8JYgaBZ__sCiaWAhtQZ8uc6zAXKBDUnaK-GpF9t-v9BGq_IYLVfxUggpkg3CEJp3YTwZbUOB546gjKEBcIaFBKd0I3QC_cuSJErYsJUJRRHrWVnq5bWMiMz9GneZNsIvrRt6izKPq6t2cwWtsCvFLuCBpeQN3e4occ7VqOJWgeOOtBW6SmrumkoagRPa1LYE2TriYRe56jvkviIs9FDBqDiGo2GO3GGclHhcYeHsqicn9IqD60Z08AeYVGns=w1781-h886-no" alt="Fundraiser Portal" />
                            <Flip top>
                                <div className="Project-Words">
                                    <h2>Fundraiser Portal</h2>
                                    <h3>Fundraiser sales and inventory management software used by teachers and students!</h3>
                                    <a href="https://www.fundraiserportal.com" target="_blank"><button>Visit Site</button></a>
                                </div>
                            </Flip>
                        </div>
                    </Flip>
                    <Flip top>
                        <div className="Project-Box">
                            <img src="https://lh3.googleusercontent.com/0F-2XNYZwK7g19zrG7dv60FBkyubna20RQF3rFT_4npQ6CgRotF8oPTwkUSz7C9LWgmvmEGZGGOpcIyFJndy6UF4pSR8ffMbIJom57wx35sRWyDx6RM4oW_yjURIzCSpBTYywShlpi4VIi_IRws-XHF3vD_MPOlbFKgHXmuho3d-37fnxItkqbXpzMcNn6VTxL4EsVR6rRBLL767X2Kk4d6CQFlrxYzVY4xlCn9P_V5ytcEBWT8TRU9Ypqeo--_T_IVZap0wIPDKqyS3oJhRRcTG3CMwqQ0AwhRKOJ0jxlJRyIB-SvYu37-9CKkTpuN0cuGGtFy61reI7yHbOn1BgTuQiEtIEp5yStKM7aEZlsopFqxCsi94RVAbmn1zP-Mwks3dsnAjxF6tvg4UnrHc5OWkrVqlVJqkVIuvjyExueyn4SLL5HM0V-4w5Ge6nvKXiM1FHtldGMJLpxQYZDDEViDAjhiWQnVZiZWFSfRK-kRJ4uozue1mKpXDAFWTpHZ8iiun31ND9BwgsQzfZNq6a0Gc9FsiJJZP2BBJPOY5IgX4HA7Ango7VW0nba8snksn2kVDuH_9wQXJmddOY7-UHx-s2xfaQrmUiCbLkOtvOSYWr_W0BKHqhCI3GBIp95tEpODvSoXkfGn9sOmziSbGPqv2RqyNx_xtEfjCVqFPetmdU9Ge-v_KuXBRMoX5a0tMHDh9wgMGypFeXnnJj5Vj9B0XXoWThTB6qpL55ZSbYgOE6eQNpe6ykZw=w1777-h899-no" alt="Technoglyph"/>
                            <Flip top>
                                <div className="Project-Words">
                                    <h2>Good Always</h2>
                                    <h3>Customized Shopify Store, profits help combat extreme poverty!</h3>
                                    <a href="https://www.goodalways.com" target="_blank"><button>Visit Site</button></a>
                                </div>
                            </Flip>
                        </div>
                    </Flip>
                    <Flip top>
                        <div className="Project-Box">
                            <img src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/stones_of_light_website_snapshot.png?v=1613271612" alt="Technoglyph"/>
                            <Flip top>
                                <div className="Project-Words">
                                    <h2>Stones Of Light</h2>
                                    <h3>React App focused on receiving donations.</h3>
                                    <a href="https://stonesoflight.org/" target="_blank"><button>Visit Site</button></a>
                                </div>
                            </Flip>
                        </div>
                    </Flip>

                </div>
            </div>
        )
}

export default Projects;

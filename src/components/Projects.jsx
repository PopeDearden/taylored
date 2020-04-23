import React, { Component } from "react";
import '../App.scss'
import Flip from 'react-reveal/Flip';
import Highlight from './Highlight'
import Slide from 'react-reveal/Slide';

class Projects extends Component {
    constructor(s) {
        super()
        this.state = {
            technoglyph: false,
            ffaas: false,
            good: false,
            fund: false,
        }
    }
    render() {
        return (
            <div id="section1" className="Projects">
                <div className="Page-Title">
                    <h1>Noteable Projects</h1>
                </div>
                <div className={`Technoglyph-${this.state.technoglyph}`}>
                    <Highlight
                        title="Technoglyph"
                        description="Technoglyph is a unique full stack web application built with the React library."
                        technologies="Technologies used: React, Redux, Sass, CSS, HTML5, JavaScript Es6, Node, Express, Bcrypt, PostgreSQL, Google Maps API, ChartsJS"
                        body="Throughout the Wester United States, there are mysterious petroglyphs that to date, no one has been able to decipher. Technoglyph was created to assist in the research of these mysterious petroglyphs. The application provides a platform to store information about each petroglyph location and detailed data on each symbol. The application combines the data from each symbol and location allowing for in-depth research on potential geo-relations to each symbol."
                        url="https://www.technoglyph.org"
                        photos={[
                            {
                                description: 'The Symbol Library combines all symbols found at each loaction and displays them in one collection. Symbols can be searched for by attribute, like "Hand". When a symbol is selected, potential meanings are displayed on the right side of the dash. If "View locations" is selected, the application will open a page displaying each location the symbol is found at.',
                                url: 'https://lh3.googleusercontent.com/IuoFEwY9bOz-TmixPFvzRZOIP3CSIDuZKL3ppnj_OhnvasK9B2RcuWSbp5PShGJ6essH3nmac9QiXElgcTCC5H1R2wTfSo9HFF8G7yjX68aaNWhcf2zBU0F-J2OtQm3GT1RBT8R-PYG4kZtgaEsHyzKoWPhUozmoSUnsGAIL9s3oL8BXTdc6Jafi5PtKOQzjpZLcxA7cqxSC6-NySFG5sRmx64ySDRYVDWQAvJYb-fEUSp6kzHPUgoJfZNwFbg-cQwrO5qQ19uwe2luPdkCi5Hd3l8q6HZlJ0jhg6quFLYKhQLlY33rbZygjWeBdJcAYqkBZnxAYdTlz_OBXAfIUEtGEH_9r-eJdJsU5Lmn2FuPGwghoMk5W8IsFhOS3ADbT6h69VOYvxTGn-Rtg7CwacTmRfj34ohGl6-ABAM6zqJWgKF6woSmY3g5I_IdkGGpFNkvvjLhm5o1rr18dBWYFm90CFKlbpWoFn_PeyCDkBvKtry3hgniXImIUXQ6kyA9BVPaPc4HpfQ6trrkAYyEE7uRWds0m1QA1-SK3zsIjzfaqX3mu_4PLLWVOzjjeWjMsvik_KcOACSaIj-SWnUf8N6N-ZRWWYhnVK4v09MIhTqtDIeBHAT7TbFi2PvxFDWXVE88KxgtcLSugHiMnE60CblpKZM0Gsg2LD9dup3VMSQR-M-jTVI-uKngQvnQDE9RgDrJJ2hSzosDVkpdKw2IudK3QPblkpx3CSHa0E00zvIQ4N3P7=w1915-h933-no'
                            },
                            {
                                description: 'Contact Taylor for login information.',
                                url: 'https://lh3.googleusercontent.com/XbwCVYxFUsqQOFokyPTXfHSGGSnOgSf2sHVJrEz26d9WYuMNu641UHC206dD6rvZFLh95cCwVMQBjuRJr0l8K6o7zGNOSVDkpGru3GY1PduljOl7lp0LaY5QibPleMGzFrLkZ_su9H6MnuZdNYs6X0iHNzdCmhuAlJH1WAGBBC7kuh8Cc3bpBY9tHT0lzpoOM9o3NJfkaJZCRqLVmUJh5z6INJe6KLGXtNoC5BC1Wy1j_Jur3OVeZFvVUuaGiEC1CA9Rhh857s2T8vH0cCeuA8owwBMsQ0DLsaf5OtGkIAiR1gVhV7FQMDxQazJoiaACKGGmjqZl8T4Muse7QpswFn6r86v_K9bBf-_gMV2H6Au8Qk4f-eMFT2USFEhsn2V7kbCmh4_4SVlvm9OtLP1wfevOlREAOzBXPQdCEHeo8QUpDEodwwBJQHL336yVivc3YqBMEtuHOBhYizPofLymoEPK6IoSnmSQkrF2F74DPgj4yc7AKGvcbbMYLBZY974K6MM_UxqqaaKiyGcJoZ4Nlc8Ryz_kJHHugjuP5khYFk2hXLBz09DssUtnlIYhdcfm-D51BJGd5IUj5OJWNQjuWspFuCs0AfXBiPgq470RPvBTe_9kEx90-486kZPwudA0x5Vq27Wy-gaKRITyxZ5Ritp5U_KmdPBtnjOmW6Y0WpabKBptcJFx5AeH9Kr7MiSF8rs5J1TWxrJSKnFhWoL8XCSbxgsmhrRG_JdWlru1Aq76ueg4=w575-h282-no'
                            },
                            {
                                description: 'The Glyph Locations dashboard displays an image of each location that is in the database. Selecting the image will open the "Location Dashboard".',
                                url: 'https://lh3.googleusercontent.com/MfpC9Dbr8V3kFyBtg_m4fL0CWA51W3R2zX4p0WTCFVLRAwk2-3orFRc-WzSX3NNAEUzWmxwJ1l44hHVEeqM6zk7QQ96adesXC1nwsSJ4D3TSb6vXx8ZBEKH6nCnJp5RHWegeQRCtPKf-YbdlIxA4ttT2AIp2B404eSVGR1S143tuXV5v0og0zNbehvWK4JAdh0bZ-RqRpcOp_rbzrZxPUAMwlBC7tGjhH4sK5Kco4OL4axXSy-TzGapM5lejRw3SzLgF1WIU406E5sNA-2NFK74tX_59l4WteKp0NWyt_bNw44FMnXbTb4Lv7TuzHsjQF5cvbKm316kpYZB5K41zmrftIXDnkbpXX4R3bW4NGmRKh60b1jRk-PkhSqMc86x-MzR_OM6kqjQdbu1wcPwYRgfr609E8dKGPBaqZDmyzk7IJNsZiimBaygSmMJccZq6P442v8UVZWu2co7KfxAto1hWLnWmOdi4yenzc0H-ke0Ghhk1kQj4JUDcE8qB3AuyKNPt7SNj5wA-YPY0ayoX7YSPslz2-BYVC08AWkqScRz-pY3Qovl_jo8fI9nEuW8eHMARvUYz2NYKrrLniQHBhxo4gIbaSL_l51-aW23vc4Dm7gV-2mFm70tjwvxUnqAHPDWQFbJDi0rKADOyxQ3tp3F70hi6DooNxUPBDHVBN-C5knel_1t8zMTcBEPI-aNP0o3zBNieBn-vvtWqxyZOdUUzJdNlQuJL9VQxtw7nEreYDd-x=w1897-h926-no'
                            },
                            {
                                description: 'The Location Dashboard displays each image that is found at the location. Admins can select the image and edit the glyphs information like attributes and meanings. Each glyph has data assocaited with it so that the symbols appear in the same order and position as they are found in the real word petroglyph panel. Notes can be added to each location by admins.',
                                url: 'https://lh3.googleusercontent.com/hKmZTE0v4YAHC4lpapTxh6g0C3rK3Kssqn_d-2Ems4Vogc8TmkMjyDDbWty4J35QBBh_EXp8RJcFjdczaojuXHrWzFKHxD22kMfjHhVpsIw3O7ULEzeTZreO0hHrUQ9X9xdQHLs4pgSuHroSHU5Ptt6vWbcUQfpf_eJA_sxueCQI6YbfYZPecyTiv-pWKCU5qCxjOvjD69pY50Knbn45toGPw3nO7SrV6QzWg-DTTlvBAa02C68aHVR5z1Lmm_ZAaF2sJv_mVm5zLRw0EGNeCk-yoihYRKVR0hfDh4IZBXck3z4q5g0yEFhseb9c3ZM89nTjOkxUijUg-30XFNyoA1xnsXS6dOF3M0ALNznUkmfrJF1ybjIM06PBKiGLPvK32tmvakJln6z02SOCJtuK-24rnqQgVWj0wHOyO-vzDoHw_Ce92h1EgOtA-DHDJpFY-8Luju4ytbK6zXy-YfeT9RuGGvFpL1ZlL0xxw1Uqw7rcDz4SI1Lamp5i1D-aqCYHUmBfRse1rdont2e7JvKTOoaITiel89B-xBOEw409wlecUCDIbylgk_alfzjwQeaW-keoGav6WHrkwOvxoAqT4SsjJqioZwisM3AnRGmKycuckt45IUl54On796PtDfglWuKLKUHDMVRUtozhCnwpOSwxSpZyBAviCJx9uCniOzVE8gB2Q9G70X9yn09uQr_uiYbGE2jc-nPVH1MABRyGQGC7-XpP2TplVAy43OuBF12x6_i8=w714-h349-no'
                            },
                            {
                                description: 'The Google Map displays the location of each petroglyph panel. When a user clicks on the pin, it will redirect them to the location dashboard associated with that location.',
                                url: 'https://lh3.googleusercontent.com/-_u2IG6cXiIxXrS5D31ALEU2nTjJ7kNuokobPu_8HJHIm0lrFy4JpuhjcpitwOOF1JUrStgCIZaKqId2Gj4025vv8VbkQthZ7Rim3KNl_4U3n-HGj9oV9JB6f2ILW6d4Zj4GC2k5j0cFj9vPHjq9j1p88gbeFFa67z_6eL1MAg0jjowGz786M6N9tB81sfiHBLtqiprC9X2q60Q2_-qNU5mB2I7vryzRNNkRhmwsTQ9-_b1d4nTdLyQmyrhGhLePNh6fHS0RRM6sX7JN7MnYCn3IwxcfmUHHyH-afqdogLVZMEVy5U7Onrc53gJkZ6P-QrPDlkNKC4-qqAYikzym2-5f5kEhNSri4ySYlGDdv9q6aqzUSpSOmH85gb2Ad55CYSp--V2Oq9fQQ213eYOr6Tyff5chI6bsVh37SoMjyUQOd7liHi8P-nRKeey9p_gOAw1GeqaTDY0tdiJD6zWkZJTdu-MshYn7XXlwwdOhVOUvC6uuFZZbC655_FzklJp6ib-62lt8q0Cja0B7uueshD35zpQUKDdqs0eZMIJ2pWwOvhMh5nQUW0yomZLEYpQ5bMf4519yNlDxRbmIltI_m849oHV8-5jfqdQuRhjX3Ur_Tp7WfGUelTC5aiGcJZEDCFavOGNIh1ohze9G2RN9-7ypbBSnzxf-S9qrsTqrpxXJh-PHAyg3bUbgPfysEgu3sINY7f9qNhKppAKUs8bunlevU8BGbWlOt85Pu_PZWAA7MtbA=w1891-h919-no'
                            },
                            {
                                description: 'This feature of the application is my favorite. It combines symbol location, attributes, and panel information into one search function. You can search for symbols by attributes, the applicaiton will instantly filter through the symbols with that attribute displaying the location it is found at and dually displaying the location on the Google Map.',
                                url: 'https://lh3.googleusercontent.com/tC-whD913O2Fs3Vrs3MLufu8iyojeABv-gb0VHgMeG15csuWgkYVbevkgApOETOdKu5HP9UxJ4CHW2O1NQ7pkUafAYPIgn0ndUCiyaS4y7LvrsgnsoXPkSxA58pAE2xYI8amFA4Ap9CDrFYkFmGTQYdmeRJxbNBA-TzI94vgB5LRsSirbw1VJp7l4ViWdA1WxjFSxYnz8e5voCADgILCka9K1okqWaOoC-o8MYfoj_sjOt6eywXhr5BGZzOuWIiVb71rjpwfV7997nLZe_LSS-XgaJHBfsoBBW_k-t3WeRhAuHrtWaGkRtJJtbq2Vg6-wWjh4lsHuOYuztoteqrK6KSeeYrwyygLzTSLcATkDFyQTz_VR553MSaeOCm0B1yggC4TTHjNNGgtZYn07Atwu--CUK0TLWA7c-UfnejIgC9bFUS_xquvuOcmGJYBgYYjGB8gBelrwZksxbtSPV5Ww8tWfQ__PzqUuURmP17ESKkuopTV6ae9Ep1QHrdROBiDHdKQD6uoOXtZIL-tMeplQj3wEZf4SkeHnWfCQ-IXuSIs4cJDGV4pE7afkQPJZQOV3BSBMf1VS3SdyFrzNTgsx9Di6C2b8UJDptpaDZb5OuFbqNVkw8Ddoa4cLliDrCtip-4eFLa4wIkHoO3zuRklqpfEOc2NlaTtKKJOdPzfj6HOFCE8HPPqUWO7p7xyVOeHKZ1r3vvVWcB1Uz3ce6SL22AyHYqIVziV3ZM3eL1tWfnVV8t5=w722-h347-no'
                            },

                        ]}
                    />

                    <Slide top>
                        <div onClick={() => this.setState({ technoglyph: false })} className="Exit">
                            <h2>Close</h2>
                        </div>
                    </Slide>
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
                                        <button onClick={() => this.setState({ technoglyph: true })}>LEARN MORE</button>
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
                                    <h3>Custom React App informational website.</h3>
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

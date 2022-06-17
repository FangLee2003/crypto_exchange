import React from 'react';
import cssModules from 'react-css-modules'
import {Slide} from 'components'
import styles from './index.css'

const MarketCap = () => (
        <div className="flex-container">
            <Slide/>
            <div className="col-2-3 text-center fadeInDown">
                <h1><b><span className="green-text">Top 100</span> Cryptocurrencies</b></h1>
                <div className="form">
                    <iframe
                        src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=100&pref_coin_id=1505&graph=yes"
                        width="103%" height="1000px" marginWidth={0} marginHeight={0} frameBorder={0} border={0}>
                    </iframe>
                </div>
            </div>
        </div>
    )
;
export default cssModules(MarketCap, styles);
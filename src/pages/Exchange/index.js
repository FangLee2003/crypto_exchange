import React from 'react';
import cssModules from 'react-css-modules'
import styles from './index.css'

const Exchange = () => (
    <div className="flex-container">
        <div className="col-3-3 fadeInUp">
            <div id="candle-chart"/>
        </div>
    </div>
);
export default cssModules(Exchange, styles);
import React from 'react'
import cssModules from 'react-css-modules'
import styles from './index.css'

export default class HistoryTable extends React.Component() {
    historyTable = () => {
        var data = '';
        for (let i = 0; i < 5; i++) {
            data += '<tr>'
                + '<td>22:35:59</td>'
                + '<td>Dogecoin</td>'
                + ' <td className="green-text">Buy</td>'
                + '   <td className="green-text">0.000056</td>'
                + '  <td className="green-text">0.000056</td>'
                + '</tr>'
                + '<tr>'
                + '    <td>22:35:59</td>'
                + '    <td>Bitcoin</td>'
                + '     <td className="red-text">Sell</td>'
                + '     <td className="red-text">0.000056</td>'
                + '     <td className="red-text">0.000056</td>'
                + '  </tr>';
        }
        return data;
    }

    render() {
        return (
            {this.historyTable}
        )
    }
}
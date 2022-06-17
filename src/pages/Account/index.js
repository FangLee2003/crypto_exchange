import React from 'react';
import HistoryTable from './HistoryTable'
import cssModules from 'react-css-modules'
import styles from './index.css'

const Account = () => (
    <div className="flex-container">
        <div className="col-1-3 fadeInUp">
            <div className="doughnut-chart">
                <canvas id="doughnut-canvas"/>
            </div>
        </div>
        <div className="col-1-3 text-center fadeInUp">
            <div className="form">
                <table>
                    <tbody>
                    <tr>
                        <th colSpan={2}>
                            <h4 className="green-text">Wire bank transfer</h4>
                        </th>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <p> Made up to 2 workdays</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="Bank Account Number" name="bank-account"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="Amount" name="amount"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="Swift Code" name="swift"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <select>
                                <option>Country</option>
                                <option>Viet Nam</option>
                                <option>United States</option>
                                <option>Japan</option>
                                <option>Singapore</option>
                                <option>United States</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href className="button-green">Deposit</a>
                        </td>
                        <td>
                            <a href className="button-red">Withdraw</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col-1-3 fadeInUp">
            <div className="scroll-table">
                <table className="history-table">
                    <thead>
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Buy/sell</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <HistoryTable/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
export default cssModules(Account, styles);
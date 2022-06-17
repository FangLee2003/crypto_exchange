import React from 'react';
import cssModules from 'react-css-modules'
import styles from './index.css'

const RecoverPassword = () => (
    <div className="form sign-in fadeInUp">
        <table>
            <tbody>
            <tr>
                <th>
                    <div className="logo">
                        <img src="images/logo-color.png" alt="logo-image"/>
                        <h1>Recover Password</h1>
                    </div>
                </th>
            </tr>
            <tr>
                <td>
                    <input type="text" placeholder="Email / phone" name="bank-account"/>
                </td>
            </tr>
            <tr>
                <td>
                    <button className="button-purple">Recover</button>
                </td>
            </tr>
            <tr>
                <td>
                    <p className="float-left"><a href="register.html">Register</a></p>
                    <p className="float-right"><a href="login.html">Login</a></p>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
);
export default cssModules(RecoverPassword, styles);
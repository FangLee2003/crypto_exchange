import React from 'react'
import cssModules from 'react-css-modules'
import styles from 'index.css'

const Login = () => (
    <div id="fb-root"/>
<div className="form sign-in fadeInUp">
    <table>
        <tbody>
        <tr>
            <th>
                <div className="logo">
                    <img src="images/logo-color.png" alt="logo-image"/>
                    <h1>Login</h1>
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
                <input type="password" placeholder="Password" name="amount"/>
            </td>
        </tr>
        <tr>
            <td>
                <button className="button-purple">Login</button>
            </td>
        </tr>
        <tr>
            <td>
                <div className="fb-login-button" data-width data-size="medium" data-button-type="continue_with"
                     data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"/>
            </td>
        </tr>
        <tr>
            <td>
                <p className="float-left"><a href="register.html">Register</a></p>
                <p className="float-right"><a href="recover-password.html">Recover Password</a></p>
            </td>
        </tr>
        </tbody>
    </table>
</div>
)
export default cssModules(Login, styles);
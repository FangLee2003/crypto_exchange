import React from 'react';

export default function NavBar() {
    return (
        <div>
            <div className="nav-bar-left">
                <div className="logo">
                    <a href="index.html">
                        <img src="images/logo.png" alt=""/>
                    </a>
                </div>
            </div>
            <div className="nav-bar-right">
                <ul>
                    <li><a href="index.html">Market cap</a></li>
                    <li><a href="exchange.html">Exchange</a></li>
                    <li><a href="../../pages/Account/account.html">Account</a></li>
                    <li className="nav-bar-red"><a href="register.html">register</a></li>
                    <li className="nav-bar-green"><a href="login.html">login</a></li>
                </ul>
            </div>
        </div>
    )
}
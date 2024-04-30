import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="header">
                <ul>
                    <li>
                        <Link to="/">Logo</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/team">TEAM</Link>
                    </li>
                    <li>
                        <Link to="/ourwork">WORK</Link>
                    </li>
                    <li>
                        <Link to="/price">PRICING</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;
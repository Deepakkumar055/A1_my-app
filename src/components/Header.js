import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
function Header() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(!modalIsOpen);
    }


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
                <ul>
                    <li>
                        <button onClick={openModal}>Login</button>
                        <LoginModal openModal={modalIsOpen} />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;
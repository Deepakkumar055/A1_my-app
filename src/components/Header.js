import React from "react";

function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Team</a>
                        </li>
                        <li>
                            <a>Work</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
import React from "react";
import "./nav.css";

function Nav() {
    return (
        <div>
            <nav >
                <div className="buttons">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
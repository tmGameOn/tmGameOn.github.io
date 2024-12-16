import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <h1>T&M GameOn Imports</h1>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contato
                    </a>
                </li>
                <li><a href="#about">Sobre Nós</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

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
            {/* Ícone do menu hambúrguer */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Links do Navbar */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li>
                    <a
                        href="https://wa.me/5511999999999" // Número do WhatsApp (substitua pelo seu)
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

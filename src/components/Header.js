import React from "react";
import Tabs from "./Tabs";

function Header({ activeTab, setActiveTab }) {
    return (
        <header className="app-header">
            <video className="background-video" autoPlay muted loop>
                <source
                    src="https://static.videezy.com/system/resources/previews/000/051/040/original/Retro_Style_Grid.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="overlay-content">
                <h2>Bem-vindo à T&M GameOn Imports</h2>
                <p>Os melhores produtos importados para Gamers e Esportes em um só lugar!</p>
            </div>

            {/* Tabs dentro do app-header */}
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </header>
    );
}

export default Header;

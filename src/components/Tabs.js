import React from "react";

function Tabs({ activeTab, setActiveTab }) {
    return (
        <div className="tabs">
            <button
                className={activeTab === "nerds" ? "active" : ""}
                onClick={() => setActiveTab("nerds")}
            >
                Importados Gamers
            </button>
            <button
                className={activeTab === "beachtennis" ? "active" : ""}
                onClick={() => setActiveTab("beachtennis")}
            >
                Importados Sports
            </button>
        </div>
    );
}

export default Tabs;

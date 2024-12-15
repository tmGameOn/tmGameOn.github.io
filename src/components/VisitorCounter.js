import React, { useEffect, useState } from "react";

function VisitorCounter() {
    const [count, setCount] = useState(0); // Estado inicial do contador

    useEffect(() => {
        // Obter o valor do contador do localStorage ou inicializar com 0
        const storedCount = localStorage.getItem("visitorCount");

        if (storedCount) {
            // Se já existe um contador salvo, incrementa
            const updatedCount = parseInt(storedCount, 10) + 1;
            localStorage.setItem("visitorCount", updatedCount);
            setCount(updatedCount);
        } else {
            // Se não existe, inicializa com 1
            localStorage.setItem("visitorCount", 1);
            setCount(1);
        }
    }, []); // Executa apenas uma vez ao montar o componente

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Contador de Visitantes</h2>
            <p>Você é o visitante número: <strong>{count}</strong></p>
        </div>
    );
}

export default VisitorCounter;

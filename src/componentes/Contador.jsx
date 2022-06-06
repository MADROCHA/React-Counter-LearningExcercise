import React from 'react';
import '../hojas-d-estilo/Contador.css'

function Contador({ numeroCLics }) {
    return (
        <div className="contador">
            { numeroCLics }

        </div>
    );
}

export default Contador;
import React from 'react';
import '../hojas-d-estilo/Boton.css'; 

function Boton ({ texto, esBotonCLic, manejarClic }) {
    return (
        <button
        className={ esBotonCLic ? "boton-clic" : "boton-reiniciar" }
        onClick={ manejarClic }>
            {texto}
        </button>

    );
}

export default Boton;
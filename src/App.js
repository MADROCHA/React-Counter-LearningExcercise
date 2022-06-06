import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import projectCafeLogo from './imagenes/cafelogo.png';
import { useState } from 'react';

function App() {

  const [ numeroCLics, setNumClics ] = useState(0);

  const manejarClic = () => {
    setNumClics (numeroCLics + 1);
  }
  const reiniciarContador = () => {
    setNumClics (0);
  }

  return (
    <div className="App">
        <div className='proyecto-dos-logo-contenedor'>
          <img
          className='proyecto-logo-cafelogo' 
          src={projectCafeLogo} 
          alt='logo de practica' />
        </div>
        <div className='contenedor-principal'>
          <Contador 
          numeroCLics={numeroCLics} />

          <Boton
            texto="Clic"
            esBotonCLic={true}
            manejarClic={manejarClic}/>
          <Boton
            texto="Reiniciar"
            esBotonCLic={false}
            manejarClic={reiniciarContador}/>
          

        </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import InitForm from './InitForm';
import Grid from './Grid';

function App() {
  // Accedemos a los datos del slice 'game'
  const { jugando, filas, columnas, empty } = useSelector((state) => state.game);

  return (
  <div className="App">
      <h1>React Redux Puzzle</h1>
      
      {!jugando ? (
        <InitForm />
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Grid 
            
          />
          {/* Aquí podrías añadir un botón para volver al formulario */}
        </div>
      )}
    </div>
  );
}

export default App

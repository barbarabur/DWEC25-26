function Fila({ tamano, numero, color }) {
  // Necesitamos crear un array para poder usar .map() 
  // y dibujar la cantidad de cuadrados que indica 'numero'
  const cuadrados = Array.from({ length: numero });

  return (
    <div className="fila" style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
      {cuadrados.map((_, index) => (
        <div 
          key={index}
          className="cuadro"
          style={{
            /* 🎨 Aquí va la lógica de estilo */
            width: `${tamano}px`,
            height: `${tamano}px`,
            backgroundColor: color,
            marginRight: '5px' 
          }}
        ></div>
      ))}
    </div>
  );
}

export default Fila;
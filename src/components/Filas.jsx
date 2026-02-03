import { useSelector } from 'react-redux';
import Fila from './Fila';

function Filas() {
  // 📥 Extraemos la lista de filas del estado global
  // El estado tiene una propiedad llamada 'appCuadrados' (definida en el store)
  // y dentro de ella está 'listaFilas' (definida en el slice).
  const lista = useSelector((state) => state.appCuadrados.listaFilas);

  return (
    <div className="filas">
      {lista.map((item, index) => (
        <Fila 
          key={index} 
          tamano={item.tamano} 
          numero={item.numero} 
          color={item.color} 
        />
      ))}
    </div>
  );
}

export default Filas;
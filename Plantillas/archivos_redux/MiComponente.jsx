import { useSelector, useDispatch } from "react-redux";
import { agregarElemento } from "./miEntidadSlice";

function MiComponente() {
  const dispatch = useDispatch();
  
  // Leemos: state.NOMBRE_DEL_STORE.PROPIEDAD
  const lista = useSelector((state) => state.datos.lista);

  const handleClick = () => {
    // Escribimos: dispatch(ACCION(DATOS))
    dispatch(agregarElemento("Nuevo item"));
  };

  return (
    <div>
      <ul>
        {lista.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button onClick={handleClick}>Añadir</button>
    </div>
  );
}

export default MiComponente;
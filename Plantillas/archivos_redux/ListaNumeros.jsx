import { useSelector } from "react-redux";
function ListaNumeros() {
    // Accedemos al estado usando el nombre que pusimos en el store.js
  const numeros = useSelector((state) => state.datosNumericos.lista);
  
    return (
    <div>
      <ul className="lista-numeros">
        {numeros.map((num, index) => (
          <li 
            key={index} 
            className="lista-numeros__item" 
            // IMPORTANTE: style recibe un objeto {{ }}
            style={{ 
              color: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`, 
              fontSize: `${num}px` 
            }}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>

);
}
export default ListaNumeros
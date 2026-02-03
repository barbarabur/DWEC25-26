//Seleccionar elementos

const btn = document.getElementById('miBoton');
const input = document.querySelector('#miInput');
const items = document.querySelectorAll('.item');

//Agregar eventos
btn.addEventListener('click', function(e) {
  console.log('Botón clickeado!');
});

element.addEventListener(evento, función, opciones)

//evento inline mezcalndo js con html
<button onclick="alert('Hola!')">Clic</button>


//remover eventos
function miEvento() {
  console.log('Evento');
}

btn.addEventListener('click', miEvento);
btn.removeEventListener('click', miEvento);

//!! Solo funciona si pasas la misma función, no una anónima

//objeto evento (event o e)
btn.addEventListener('click', function(e) {
  console.log(e.type);        // tipo de evento
  console.log(e.target);      // elemento que disparó el evento
  e.preventDefault();          // previene comportamiento por defecto
  e.stopPropagation();         // evita burbujeo hacia padres
});

//bubbling y captura
div.addEventListener('click', () => console.log('Captura'), true);  // fase captura
div.addEventListener('click', () => console.log('Burbuja'), false); // fase burbuja
// true: captura desde padre hacia hijo
//false: burbuja desde hijo hacia padre

//eventos del formulario

const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // evita recargar página
  console.log('Formulario enviado');
});



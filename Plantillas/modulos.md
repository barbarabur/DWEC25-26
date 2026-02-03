# Resumen de estructuras: CommonJS vs ES6 Modules

## 1) CommonJS (CJS)
Sistema de módulos tradicional de Node.js.  
Usa `require()` y `module.exports`.

### Estructura de exportación
```js
// archivo.cjs
function sumar(a, b) {
  return a + b;
}

module.exports = {
    sumar
};
```
### Estructura de importación
```js
// usar.cjs
const { sumar } = require('./archivo.cjs');

console.log(sumar(2, 3));
````
### Características
- Compatible veriones antiguas node
- No utiliza import/export


## 2) ES3 modules (ESM)
Sistema moderno basado en el estandar oficial de js.  
Usa `import` y `export`.

### Estructura de exportación
```js
// archivo.mjs
export function sumar(a, b) {
  return a + b;
  //al final del archivo
}


//puede ser tambien 
export default nombrefuncion

//o tambien puede ser 

export {nombreFuncion};
````
### Estructura de importacion
```js
// usar.mjs
import { sumar } from './archivo.mjs';
//al principio del archivo

console.log(sumar(2, 3));
````
### Para que js lo reconozca
Si ponemos extension .mjs node lo reconoce automaticamente.
Si no se puede usar la extension .js añadiendo al package.json
```js
{
    "type": "module"
}
````
# Incluir módulos en HTML (`type="module"`)

A **cómo usar módulos ES6 directamente en HTML** .

## Usar módulos ES (nativo en el navegador)

###  Archivo html 
```html
<!-- index.html -->
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Demo módulos</title>
  </head>
  <body>
    <script type="module" src="./score.mjs"></script>
    <!-- o, si score.mjs sólo exporta funciones, importa desde un "entry" -->
    <script type="module" src="./app.mjs"></script>
  </body>
</html>
````
### Archivo app.mjs
````js
import { iniciarJuego, puntoJugador, resultado } from './score.mjs';

iniciarJuego();
puntoJugador(1);
console.log(resultado());
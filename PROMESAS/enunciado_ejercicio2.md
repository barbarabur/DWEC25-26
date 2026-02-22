# Ejercicio 2 (Tardes)

Dispones de un array de pedidos online, donde cada pedido es un objeto con las propiedades: id, cliente, total y entregado (booleano).

```javascript
const pedidos = [
  { id: 1, cliente: "Ana", total: 120, entregado: true },
  { id: 2, cliente: "Luis", total: 75, entregado: false },
  { id: 3, cliente: "Marta", total: 230, entregado: true },
  { id: 4, cliente: "Juan", total: 45, entregado: false },
];
```

Se pide:

## Apartado 1 (4 puntos)

Crear una función, `crearDescuento`, que reciba un porcentaje como parámetro y retorne una nueva función. Esta nueva función debe recibir un pedido y aplicar el descuento al total del pedido, devolviendo un nuevo objeto con el total actualizado. Sólo debe actualizar el total si el pedido no ha sido entregado.

Para aplicar el descuento, se debe restar al total el porcentaje indicado:
```javascript
totalConDescuento = total * (1 - porcentaje / 100);
```


Ejemplo de funcionamiento:

```javascript
const descuento10 = crearDescuento(10);
const pedidoConDescuento = descuento10({ id: 2, cliente: "Luis", total: 75, entregado: false });
// Devuelve: { id: 2, cliente: "Luis", total: 67.5, entregado: false }
const pedidoSinDescuento = descuento10({ id: 1, cliente: "Ana", total: 120, entregado: true });
// Devuelve: { id: 1, cliente: "Ana", total: 120, entregado: true }
```



## Apartado 2 (4 puntos)

Crear una nueva función, `aplicarDescuento`, que reciba dos parámetros: el primero se llamará `criterio` y será una función que determine si un pedido debe recibir el descuento; dicha función recibirá un pedido como único parámetro y devolverá un booleano. El segundo parámetro será la función descuento a aplicar.

Ejemplo de funcionamiento:
```javascript
function totalMayor100(pedido) {
  return pedido.total > 100;
}

const aplicarDescuentoMayor100 = aplicarDescuento(totalMayor100, descuento10);

const pedidoConDescuento = aplicarDescuentoMayor100({ id: 2, cliente:  "Luis", total: 75, entregado: false });
// Devuelve: { id: 2, cliente: "Luis", total: 75, entregado: false }
const pedidoConDescuento2 = aplicarDescuentoMayor100({ id: 1, cliente:  "Ana", total: 100, entregado: false });
// Devuelve: { id: 1, cliente: "Ana", total: 90, entregado: false }
```

## Apartado 3 (2 puntos)

Utilizando dichas funciones, y sin utilizar bucles for, aplicar un 10% de descuento a todos los pedidos mayores de 100 euros.

## Criterios de evaluación

- El programa es correcto, realiza la función que se solicita en el enunciado
- Se han utilizado estructuras del lenguaje adecuadas: bucles, condicionales, operadores, etc.
- Se ha estructurado correctamente el código utilizando módulos
- Se han utilizado variables y constantes de forma adecuada
- Se utilizan correctamente y cuando corresponda los tipos de datos y objetos predefinidos del lenguaje (Arrays, objetos planos, Map, Set, etc.)
- Se han utilizado funciones para estructurar el código, definiendo y utilizando parámetros y valores de respuesta de forma adecuada
- El programa es lo más sencillo posible para realizar su función.
- No existe código repetido: se han extraído los comportamientos comunes a funciones y se ha intentado hacer el código genérico.
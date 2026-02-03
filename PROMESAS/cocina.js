import {tomarPedido, cocinarPizza, cocinarHamburquesa} from './chef.js'

async function prepararPlato() {
    const pedido = await(tomarPedido());
    if (pedido=== "pizza") {
        return cocinarPizza();

    } else {
       return cocinarHamburquesa();
    }
   
}

// FUNCIÓN AUXILIAR DE MEDICIÓN (Necesaria para la Tarea 2)
async function medirCocinado(func) {
    const inicio = performance.now();
    const resultado = await func();
    return { 
        plato: resultado, 
        tiempo: performance.now() - inicio 
    };
}
async function cocinandoRapido(platoNombre, cantidad) {

    // 1. Identificamos la función a usar
    const funcACocinar = platoNombre === 'pizza' ? cocinarPizza : cocinarHamburguesa;

    // 2. Creamos el array de ejecuciones paralelas
    // Cada elemento del array es una promesa de medirCocinado
    const promesas = Array.from({ length: cantidad }, () => medirCocinado(funcACocinar));

    // 3. Esperamos a que todos los platos terminen
    const resultados = await Promise.all(promesas);

    return resultados;
}

async function dueloDeChefs() {

    
     const pizzas = cocinandoRapido('pizza', 3);
     const hamburguesas = cocinandoRapido('hamburguesa', 3);

      
    try {
        const winner = await Promise.any([pizzas, hamburguesas]);
        return winner;
    } catch (error) {
        throw "¡Cocina quemada!";
    }
    
}
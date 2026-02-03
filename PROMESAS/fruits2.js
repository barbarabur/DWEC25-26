import {fruit, banana, papaya} from './fruits.js'

/* Crea una función llamada getFruit() que llame a fruit y, en función
 de la fruta devuelta ('banana' o 'papaya') llame a banana() o papaya() respectivamente.
La función debe devolver una promesa que se resuelva con el resultado de llamar a 
banana() o papaya(). No hace falta que controles los errores de fruit en la función. */
async function getFruit() {
    // 1. Llamamos a fruit() y esperamos a saber qué fruta es
    const fruitName = await fruit();
    
    // 2. Dependiendo del string recibido, llamamos a una función u otra
    if (fruitName === 'banana') {
        return banana(); // Retornamos la promesa que devuelve banana()
    } else {
        return papaya(); // Retornamos la promesa que devuelve papaya()
    }
}

//para llamar a la funcion 2 opciones
getFruit().then(resultado => {
    console.log("El resultado final es:", resultado);
}).catch(error => {
    console.error("Algo falló en el proceso:", error);
});
//opcion 2
const resultado = await getFruit();
console.log(resultado);

/* Crea una función llamada fiveFruits que llame a getFruit() 5 veces 
y devuelva una promesa que se resuelva con un array de los resultados.
Las llamadas a getFruit() deben hacerse en paralelo. 
No hace falta que controles los errores de getFruit en esta función. */

async function fiveFruits() {
    
    const promisesArray = Array.from({length:5}, ()=>getFruit());

    const results = await Promise.all(promisesArray);

    return results;
}

async function tenFruits() {
        
    try {
        // 1. Lanzamos las 3 llamadas en paralelo
        const p1 = fiveFruits();
        const p2 = fiveFruits();
        const p3 = fiveFruits();

        let contador = 0;

        // 2. Definimos una función interna para procesar cada array cuando llegue
        const procesarFrutas = (frutas) => {
            frutas.forEach(fruta => {
                if (contador < 10) {
                    console.log(fruta);
                    contador++;
                }
            });
        };
        // 3. Usamos .then() en cada promesa para imprimir "tan pronto como las obtenga"
        // y Promise.all para detectar si alguna falla

        await Promise.all([
            p1.then(procesarFrutas),
            p2.then(procesarFrutas),
            p3.then(procesarFrutas)
        ]);

    } catch (error) {
        throw "¡Mango!";
    }

}

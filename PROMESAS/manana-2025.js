import {fruit, banana, papaya} from './fruits.js';

async function getFruit() {
    const nombreFruta = await fruit();
    if(nombreFruta === 'banana') {
        return await banana();
    } else {
        return await papaya();
    }   
}
// ¿Cómo llamarías a la función para obtener el resultado de la promesa?
// Respuesta:
getFruit().then(resultado => console.log(resultado));

// O también podrías usar await si estás en un entorno que lo permita:
/* const resultado = await getFruit();
console.log(resultado); */

async function fiveFruits() {
    // Array.from necesita un objeto con length y una función de mapeo
    const promesas = Array.from({ length: 5 }, () => getFruit());

    const result = await Promise.all(promesas);
    return  result;
    
}

// Ejemplo de uso:
fiveFruits().then(res => console.log("Mis 5 frutas:", res));


async function tenFruits() {
    try {
        const promesas = Array.from({ length: 3 }, () => fiveFruits());
        let impresas = 0;

    // 2. Mapeamos cada promesa para que, en cuanto termine, imprima sus frutas
        promesas.forEach(p => {
            p.then(lista => {
                lista.forEach(fruta => {
                    if (impresas < 10) {
                        console.log(fruta);
                        impresas++;
                    }
                });
            }).catch(() => {}); // El error lo manejamos en el Promise.all
        });
    
    // 3. Esperamos a que todas terminen para asegurar el flujo y capturar errores
        await Promise.all(promesas);

    } catch (error) {
        throw "Mango!";
    }

}
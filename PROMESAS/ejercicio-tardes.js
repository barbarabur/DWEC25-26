import {obtenerDatosUsuario, obtenerEstadisticas} from "./userlib.js";

async function procesarUsuario(userId) {
   try {
        // Lanzamos ambas peticiones simultáneamente
        const [usuario, estats] = await Promise.all([
            obtenerDatosUsuario(userId),
            obtenerEstadisticas(userId)
        ]);

        // Extraemos userId de estats para que no se repita dentro del sub-objeto
        const { userId: _, ...soloEstadisticas } = estats;
        return {
            userId,
            ...usuario,
            estadisticas: { ...soloEstadisticas }
        };
    } catch (error) {
        console.error(`Error con el usuario ${userId}:`, error);
        throw error; 
    }
}

async function procesarUsuarios(userIds) {
    const promesas = userIds.map(id => procesarUsuario(id));    
    // Esperamos a que todas terminen
    return await Promise.all(promesas);
}

console.log (await procesarUsuario(2));
const listaIds = [1, 2, 5, 8];
const resultados = await procesarUsuarios(listaIds);
console.log(JSON.stringify(resultados, null, 2));

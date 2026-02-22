import { obtenerRegistros, obtenerConfiguracion } from "./devicelib.js";

// Apartado 1: Con manejo de errores individual
async function procesarDispositivo(deviceId) {
    try {
        const config = await obtenerConfiguracion(deviceId);
        const registros = await obtenerRegistros(config.nombre);

        return { 
            deviceId, 
            ...config, 
            registros 
        };
    } catch (error) {
        // Si algo falla, devolvemos un objeto que indique el error
        console.error(`Error procesando dispositivo ${deviceId}:`, error.message);
        return { deviceId, error: "No se pudo cargar la información" };
    }
}

// Apartado 2: Procesar todos
async function procesarDispositivos(deviceIds) {
    try {
        const promises = deviceIds.map(id => procesarDispositivo(id));
        // Promise.all resolverá incluso si procesarDispositivo capturó un error interno
        return await Promise.all(promises);
    } catch (error) {
        console.error("Error crítico en el lote de dispositivos:", error);
        return [];
    }
}

// --- PRUEBA DE EJECUCIÓN ---
const ids = [10, 2, 5];

procesarDispositivos(ids).then(resultados => {
    // Usamos JSON.stringify para ver los objetos anidados completos
    console.log("--- RESULTADOS COMPLETOS ---");
    console.log(JSON.stringify(resultados, null, 2));
});
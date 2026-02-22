import { obtenerRegistros, obtenerConfiguracion } from "./devicelib.js";

async function procesarDispositivo(deviceId) {
    const config = await obtenerConfiguracion(deviceId);
    const registro = await obtenerRegistros(config.nombre);

   return { deviceId, ...config, registro
    };
}


const deviceIds = [10, 2, 5];

async function procesarDispositivos(deviceIds) {
   const promises = deviceIds.map(id => procesarDispositivo(id));
    return await Promise.all(promises);
    
}
// Para probarlo
/* procesarDispositivo(10).then(res => console.log("Resultado único:", res));

const ids = [10, 2, 5];
procesarDispositivos(ids).then(res => console.log("Resultado múltiple:", res)); */

const devices = [1,2,10];
const result = await procesarDispositivos(devices);
console.log(result);
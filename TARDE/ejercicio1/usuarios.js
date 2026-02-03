import { obtenerDatosUsuario, obtenerEstadisticas } from "./userlib.js";

async function procesarUsuario(userId) {
   const promesaDatos = obtenerDatosUsuario(userId);
   const promesaEstadistica = obtenerEstadisticas(userId);

   const datos = await promesaDatos;
   const estats = await promesaEstadistica;

   return {
    ...datos, 
    estadisticas: {...estats}
   }

}
// Uso:
const usuario = await procesarUsuario(1);
console.log(usuario);
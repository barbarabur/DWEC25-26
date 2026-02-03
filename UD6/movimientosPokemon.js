async function movimientos(name) {
    try {
        //obtener la respuesta de la api
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        //extraer el cuerpo json de la respuesta
        const datosPokemon = await respuesta.json();
    
    } catch (error) {
        console.log('Error al obtener los datos de ' . name);
        return [];
    }

    const movimientosPokemon = datosPokemon.moves;
    const promMovimientos = movimientosPokemon.map(async (movimiento) => {
    // 2. Extraemos la URL específica para el movimiento
    const urlDetalle = movimiento.move.url;
    
    // 3. Hacemos la llamada fetch y la conversión a JSON
    // Usamos await para que map devuelva una Promesa que resuelve en el JSON
    const res = await fetch(urlDetalle);
    return res.json();
});

// 4. Usamos AWAIT Promise.all() para esperar a que todas las Promesas se resuelvan
const resultadosDetalle = await Promise.all(promesasMovimientos);
}
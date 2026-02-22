function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function obtenerConfiguracion(deviceId) {
  await delay(rand(60, 180));

  const nombre = `Dispositivo-${deviceId}-${rand(100, 999)}`;
  const tipo = deviceId % 2 === 0 ? 'actuador' : 'sensor';
  const estado = rand(0, 1) === 0 ? 'ok' : 'mantenimiento';

  return { nombre, tipo, estado };
}

export async function obtenerRegistros(nombre) {
  await delay(rand(100, 320));

  const niveles = ['debug', 'info', 'warn', 'error'];
  const now = Date.now();

  const registros = Array.from({ length: rand(3, 8) }).map((_, i) => {
    const nivel = niveles[rand(0, niveles.length - 1)];
    return {
      timestamp: new Date(now - i * 60 * 1000).toISOString(),
      nivel,
      mensaje: `Evento ${i} en ${nombre} (nivel=${nivel})`
    };
  });

  return registros;
}

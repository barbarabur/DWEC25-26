export async function obtenerDatosUsuario(userId) {
  const delay = Math.random() * 1000 + 1000; // 1-2 segundos

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId,
        nombre: `Usuario ${userId}`,
        email: `user${userId}@example.com`,
        fechaRegistro: new Date(2020 + userId, 0, 1).toISOString()
      });
    }, delay);
  });
}

export async function obtenerEstadisticas(userId) {
  const delay = Math.random() * 1000 + 1000; // 1-2 segundos

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId,
        posts: Math.floor(Math.random() * 100),
        seguidores: Math.floor(Math.random() * 300),
        siguiendo: Math.floor(Math.random() * 200)
      });
    }, delay);
  });
}

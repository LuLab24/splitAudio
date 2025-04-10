fetch('https://pokeapi.co/api/v2/pokemon/ditto') // URL de ejemplo
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos obtenidos:', data); // Muestra los datos en la consola
  })
  .catch(error => {
    console.error('Hubo un problema:', error); // Maneja errores
  });

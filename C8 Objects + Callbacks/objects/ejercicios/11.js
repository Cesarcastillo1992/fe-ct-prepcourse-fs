function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
  objeto[metodo]();
  
}

const persona = {
  saludar: function() {
    console.log('¡Hola!');
  }
};
console.log(invocarMetodo(persona, 'saludar'));
module.exports = invocarMetodo;

function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  if (status == 1) {
    return "Online";
  } else if (status == 3) {
    return "Away";
  } else {
    return "Offline"
  }
}
var resultado = conection(2);
console.log(resultado);

module.exports = conection;

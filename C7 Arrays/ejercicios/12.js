function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(elemento => elemento.toUpperCase());
  
}
console.log(convertirStringAMayusculas(["uno","dos","tres","cuatro","cinco"]));

module.exports = convertirStringAMayusculas;

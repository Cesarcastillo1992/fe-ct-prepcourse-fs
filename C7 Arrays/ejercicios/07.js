function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a, b) => a - b);
}
console.log(ordenarArray([10,2,8,4,6]))

module.exports = ordenarArray;

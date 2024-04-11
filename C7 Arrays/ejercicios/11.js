function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  return array.map(numero => numero * 2);
}
console.log(duplicarElementos([2,4,6,8]))

module.exports = duplicarElementos;

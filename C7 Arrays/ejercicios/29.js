function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  var min = Math.min(...numeros);
  var max = Math.max(...numeros);
  var sumaTotal = ((min + max) * (max - min + 1)) / 2;
  var sumaActual = numeros.reduce((total, num) => total + num, 0);
  if (sumaTotal === sumaActual) {
    return null;
  }
  return sumaTotal - sumaActual;

}
console.log(encontrarNumeroFaltante([1,2,3,4,5,6,8,9]))

module.exports = encontrarNumeroFaltante;
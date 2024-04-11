function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  const mayoresA10 = array.filter(elemento => elemento > 10);
  return mayoresA10.length;
}
console.log(contarElementosMayoresA10([8,9,10,11,12,50]));

module.exports = contarElementosMayoresA10;

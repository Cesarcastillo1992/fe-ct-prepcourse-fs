function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(agregarNumeros([1,2,3,4,5]))
module.exports = agregarNumeros;

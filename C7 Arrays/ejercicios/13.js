function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(num => num % 2 === 0);
}
console.log(filtrarNumerosPares([0,1,2,3,4,5,6,7,8,9,10]))

module.exports = filtrarNumerosPares;

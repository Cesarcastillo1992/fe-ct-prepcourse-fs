function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let mayor = array[0]; 
  let indiceMayor = 0; 
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i]; 
      indiceMayor = i; 
    }
  }
  return indiceMayor; 
}
console.log(encontrarIndiceMayor([1,5,7,9,8,2,3,6,4]))

module.exports = encontrarIndiceMayor;

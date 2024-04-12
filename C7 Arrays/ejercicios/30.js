function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var contador = {};
  for (var i = 0; i < numeros.length; i++) {
    if (contador[numeros[i]] !== undefined) {
      return numeros[i];
    } else {
      contador[numeros[i]] = true;
    }
  }  
}
console.log(encontrarElementoRepetido([1,2,9,3,4,5,6,6,7,7]))
module.exports = encontrarElementoRepetido;
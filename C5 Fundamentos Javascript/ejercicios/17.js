function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}
var resultado = esPar(50);
console.log(resultado);

module.exports = esPar;

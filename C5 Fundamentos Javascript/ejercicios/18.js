function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 != 0) {
    return true;
  } else {
    return false;
  }
}
var resultado = esImpar(2);
console.log(resultado)

module.exports = esImpar;
function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var digitos = num.toString().length;
  if (digitos == 3) {
    return true;
  } else {
    return false;
  }
}
var resultado = tieneTresDigitos(1000);
console.log(resultado);

module.exports = tieneTresDigitos;

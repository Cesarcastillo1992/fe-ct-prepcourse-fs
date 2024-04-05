function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
var resultado = menosQueNoventa(100)
console.log(resultado)
module.exports = menosQueNoventa;
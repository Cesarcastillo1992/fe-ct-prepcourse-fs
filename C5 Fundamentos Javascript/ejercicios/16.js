function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:
  if (num > 50) {
    return true;
  } else {
    return false
  }
}
var resultado = mayorQueCincuenta(51);
console.log(resultado);

module.exports = mayorQueCincuenta;

function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if (num > 20 && num < 50) {
    return true; 
  } else {
    return false;
  }
}
var resutado = estaEnRango(50);
console.log(resutado);

module.exports = estaEnRango;

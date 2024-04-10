function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor == "verdadero") {
    return "Soy verdadero"
  } else {
    return "Soy falso"
  }
}
var resultado = esVerdadero("verdader0");
console.log(resultado);
module.exports = esVerdadero;

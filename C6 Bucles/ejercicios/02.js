function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if (booleano1 == true && booleano2 == true) {
    return true;
  } else {
    return false;
  }
}
var resultado = esVerdaderoYFalso(true, true);
console.log(resultado);
module.exports = esVerdaderoYFalso;

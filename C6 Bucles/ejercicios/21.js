function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero === 1) {
    return true;
  }
  var exponente = 0;
  while (Math.pow(2, exponente) <= numero) {
    if (Math.pow(2, exponente) === numero) {
      return true;
    }
    exponente++;
  }
  return false;
}
console.log(esPotenciaDeDos(524288)); 

module.exports = esPotenciaDeDos;

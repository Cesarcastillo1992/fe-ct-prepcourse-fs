function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  if (x === y) {
    return true;    
  } else {
    return false;
  }
}

var resultado = sonIguales(17, 17);
console.log(resultado);

module.exports = sonIguales;
function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   var palindromo = string.toLowerCase().replace(/\s/g, '');
   var stringInvertido = string.split('').reverse().join('');
   if (palindromo == stringInvertido) {
      return true;
   } else {
      return false;
   }
}

var resultado = esPalindromo("ojo");
console.log(resultado);

module.exports = esPalindromo;

function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  
  for (let num of secuencia) {
    if (num % n === 0) {
      return num;
    }
  }
  
}
console.log(encontrarPrimerMultiploDeN(17, [1,2,3,17,18]))

module.exports = encontrarPrimerMultiploDeN;
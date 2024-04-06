// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  var exponente = Math.pow(num, exponent);
  console.log(exponente);
  return exponente;
}
elevar(2, 4)


module.exports = elevar;
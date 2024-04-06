// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  var redondeaArriba = Math.ceil(num);
  //console.log(redondeaArriba);
  return redondeaArriba;
}
redondearHaciaArriba(9.000000001)
module.exports = redondearHaciaArriba;
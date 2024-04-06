// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   var redondear = Math.round(num);
   console.log(redondear);
   return redondear;
}
redondearNumero(1.5);
module.exports = redondearNumero;

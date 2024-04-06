function esFechaValida(fecha) {
  var date = new Date(fecha);
  return !isNaN(date) && date.getTime() === new Date(fecha).getTime();
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
}
esFechaValida("enero")

module.exports = esFechaValida;



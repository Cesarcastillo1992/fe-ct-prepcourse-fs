function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  var longitud_str1 = str1.length;
  var longitud_str2 = str2.length;
  if (longitud_str1 === longitud_str2) {
    return true;
  } else {
    return false;
  }
}
tienenMismaLongitud("hola", "aloh");


module.exports = tienenMismaLongitud;
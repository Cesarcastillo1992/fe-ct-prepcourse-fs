function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  var letraLongitud = letra.length;
  var letraMin = letra.toLowerCase()
  if (letraMin == "a" || letraMin == "e" ||letraMin == "i" ||letraMin == "o" ||letraMin == "u"){
    return ("Es vocal");
  } else if (letraLongitud > 1){
    return ("Dato incorrecto");
  } else {
    return ("Dato incorrecto");
  }
}

esVocal("A");


module.exports = esVocal;

function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  if (idioma == undefined) {
    return "Hola!";
  }
  if (idioma == "aleman") {
    return "Guten Tag!";
  } else if (idioma == "mandarin") {
    return "Ni Hao!";
  } else if (idioma == "ingles"){
    return "Hello!";
  } else if(idioma != "aleman" || idioma != "mandarin"|| idioma != "ingles"){
    return "Hola!"
  }
}
var resultado = saludo("undefined");
console.log(resultado);

module.exports = saludo;

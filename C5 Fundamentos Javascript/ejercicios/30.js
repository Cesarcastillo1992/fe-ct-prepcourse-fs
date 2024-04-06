function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   var perimetro = lado * 4;
   console.log(perimetro);
   return perimetro
}
retornarPerimetro(25);

module.exports = retornarPerimetro;

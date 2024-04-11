function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var indiceAleatorio = Math.floor(Math.random() * array.length);
   return array[indiceAleatorio];

}
console.log(obtenerElementoAleatorio([0,1,2,3]));

module.exports = obtenerElementoAleatorio;

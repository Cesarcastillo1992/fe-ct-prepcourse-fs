function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let filteredArray = [];
   for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0] === 'a') {
         filteredArray.push(arrayOfStrings[i]);
      }
   }
   return filteredArray;
}
console.log(filter(["avion", "anciana", "anon", "amarillo", "azul", "perro", "gato"]));
module.exports = filter;

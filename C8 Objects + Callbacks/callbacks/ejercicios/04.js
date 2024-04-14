function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   const suma = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
   cb(suma);
}
function imprimirResultado(resultado) {
   console.log("La suma es:", resultado);
 }
 
const numeros = [1, 2, 3, 4, 5];
sumarArray(numeros, imprimirResultado); // Imprime: La suma es: 15

module.exports = sumarArray;

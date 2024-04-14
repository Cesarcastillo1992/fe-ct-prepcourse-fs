function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   return objeto;
}
var animal = {
   nombre: 'leon',
   especie: 'salvaje',
   numeroDePatas: 4
};
console.log(actualizarValorPropiedad(animal, 'nombre', 'zorro')); 

module.exports = actualizarValorPropiedad;

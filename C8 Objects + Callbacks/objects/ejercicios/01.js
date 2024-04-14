const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   const a = objeto[propiedad];

   return a;
};
const persona = {
   nombre: 'Juan',
   edad: 30,
   ciudad: 'Madrid'
};
console.log(obtenerValorPropiedad(persona, 'nombre'))

module.exports = obtenerValorPropiedad;

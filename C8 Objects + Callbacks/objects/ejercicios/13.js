function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}

const miObjeto = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Bogotá'
};

console.log(eliminarPropiedad(miObjeto, 'edad'))

module.exports = eliminarPropiedad;

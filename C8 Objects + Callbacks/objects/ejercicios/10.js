function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  objeto[propiedad] = null;
  return objeto;
}

var animal = {
  nombre: 'leon',
  especie: 'salvaje',
  numeroDePatas: 4
};

console.log(agregarPropiedad(animal, 'nombre'))

module.exports = agregarPropiedad;

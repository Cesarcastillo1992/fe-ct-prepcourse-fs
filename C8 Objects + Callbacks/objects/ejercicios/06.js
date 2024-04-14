const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let totalPropiedades = 0;
  for (let propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      totalPropiedades++;
    }
  }
  return totalPropiedades;
};

var animal = {
  nombre: 'leon',
  especie: 'salvaje',
  numeroDePatas: 4
};
console.log(contarPropiedades(animal))
module.exports = contarPropiedades;

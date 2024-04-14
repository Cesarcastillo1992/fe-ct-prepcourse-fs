const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;
};

var marca = {
  nombre: 'mazda',
  modelo: 2024,
  color: 'plateado'
}; 
console.log(agregarNuevaPropiedad(marca, 'puertas', 5))
module.exports = agregarNuevaPropiedad;

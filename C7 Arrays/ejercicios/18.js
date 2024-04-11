function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = resultadosTest.reduce((acumulador, resultado) => acumulador + resultado, 0);
  var promedio = suma / resultadosTest.length;
  return promedio;
}
console.log(promedioResultadosTest([2,4,6,8,10])) 
module.exports = promedioResultadosTest;

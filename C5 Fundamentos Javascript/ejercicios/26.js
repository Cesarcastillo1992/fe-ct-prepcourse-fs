function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  var agrega = str + '!';
  //console.log(agrega)
  return agrega;
}
agregarSimboloExclamacion("hello world");

module.exports = agregarSimboloExclamacion;

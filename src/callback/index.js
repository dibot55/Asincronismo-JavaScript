// Callback - Funcion que se ejecuta como argumento de otra funcion
function sum(num1, num2) {
  return num1 + num2;
}
function calc(num1, num2, callback) {
  return callback(num1, num2);
}
console.log(calc(6, 2, sum));

// Web APis - setTimeout
setTimeout(function () {
  console.log("Hola JavaScript");
}, 2000);
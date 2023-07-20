// Generator - Forma de trabajar con una funcion que permite llamar o parar las solicitudes que hagamos
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
// 1
console.log(g.next().value);
// 2
console.log(g.next().value);
// 3
console.log(g.next().value);
// Controlamos cuando accedemos a los elementos de la funcion con cada ejecucion

function* iterate(array){
  for(let value of array){
    yield value;
  }
}
const it = iterate(['oscar', 'omar', 'lucia', 'ana', 'juan']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// Async - Define una funcion asincrona el cual duelve un objeto
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000)
      : reject(new Error('Error!'));
  });
}
const anotherFn = async () => { 
  const something = await fnAsync();
  console.log(something); // Esto tiene que esperar para que la siguiente linea de codigo pueda suceder
  console.log('Hello!');
}
console.log('Before');
anotherFn();
console.log('After');
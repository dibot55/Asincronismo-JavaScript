// Promesas - Algo que puede pasar hoy, mañana o nunca, tiene 3 estados: pendiente, cumplido y rechazado
const promise = new Promise((resolve, reject) => {
  resolve("Correcto");
});
// Ejemplo:
const cow = 15;
// Promesa
const countCows = new Promise((resolve, reject) => {
  if(cow > 10){
    resolve("Minimo deseado");
  } else {
    reject("Rechazado")
  }
});
// Ejecutar la promesa
countCows.then((result) => {
  console.log(result);
});
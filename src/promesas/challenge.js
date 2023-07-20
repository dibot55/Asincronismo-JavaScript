// Promesas usando APIS
//import fetch from "node-fetch";
const API_URL = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi){
  return fetch(urlApi);
}
// Ejecutar una promesa
/*
fetchData(`${API_URL}/products`)
  .then(response => response.json())
  .then(data =>console.log(data))
  .catch(error => console.log(error));
*/
// Ejemplo de llamado multiple de un API
fetchData(`${API_URL}/products`)
  // Muestra todos los productos
  .then(response => response.json())
  .then(products => {
    console.log(products);
    return fetchData(`${API_URL}/products/${products[0].id}`);
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title)
    return fetchData(`${API_URL}/categories/${product.category.id}`);
  })
  .then(response => response.json())
  .then(category => console.log(category.name))
  .catch(error => console.log(error))
  .finally(() => console.log("Terminado"));
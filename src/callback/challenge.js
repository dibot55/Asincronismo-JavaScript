//xmlhttprequest
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API_URL = "https://fakeapi.platzi.com/api/v1/";

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  // Inicia la conexion
  xhttp.open("GET", urlApi, true);
  // ¿Cuando esta disponible la informacion?
  xhttp.onreadystatechange = function (event) {
    // Validar el estado en el que se encuentra la peticion
    if (xhttp.readyState === 4) {// 0-No incializado 1-Cargando 2-Cargado 3-Procesado 4-Completado
      // Estado de respuesta
      if (xhttp.status === 200) {
        // Parseo a JSON
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // Manejo de errores
        const error = new Error("Error" + urlApi);
        return callback(error, null);
      }
    }
  };
  // Enviar la peticion
  xhttp.send();
}
// Fetch data
fetchData(`${API_URL}/products`, function (error1, data1) {
  // Error 1 en caso de tener un error al hacer la peticion
  if (error1) return console.error(error1);
  // En caso de que la peticion sea correcta, llamamos a un elemento con un indice
  fetchData(`${API_URL}/products/${data1[0].id}`, function (error2, data2) {
    // Si hay un error al hacer la peticion con un indice
    if (error2) return console.error(error2);
    // Hacer una peticion a otro endpoint
    fetchData(`${API_URL}/categories/${data2?.category?.id}`, function (error3, data3) { // ? optional shading - por si no existe el endpoint como lo escribimos
      // Si hay un error al hacer la peticion
      if (error3) return console.error(error3);
      // Imprimir los resultados de las peticiones en consola
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
})
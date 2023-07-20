//xmlhttprequest
import { XMLHttpRequest } from "xmlhttprequest";

const API_URL = "https://fakeapi.platzi.com/api/v1";

function fetchData(urlApi, callback) {
  const xhttp = new XMLHttpRequest();
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
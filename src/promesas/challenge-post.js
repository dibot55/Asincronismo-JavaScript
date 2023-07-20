// Fetch POST
//import fetch from "node-fetch";
const API_URL = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data){
  const response = fetch(urlAPI, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin', // Si no hay auth no pasa nada
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // Para enviar la data como texto
  });
  return response;
}

const data = {
  "title": "New Product Course",
  "price": 9999,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

postData(`${API_URL}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
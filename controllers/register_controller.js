import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => { //recibe el evento luego de presionar el boton
  event.preventDefault();
  const name = document.querySelector("[data-name]").value; //almacena los valores de nombre y email
  const email = document.querySelector("[data-email]").value;
  clientServices
    .createClient(name, email) //crea el cliente pasandole los valores
    .then((response) => {
      window.location.href = "/screens/register_complete.html"; //llama a la pagina de exito
    })
    .catch((err) => console.log(err));
});
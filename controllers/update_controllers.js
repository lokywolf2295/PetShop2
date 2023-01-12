import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]"); //almacena el contenido del formulario

const getInformation = async() => { //convertimos la función en una asincrona //obtendrá la información del cada cliente mediante su id
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const name = document.querySelector("[data-name]"); //almacenamos la info de nombre y email
  const email = document.querySelector("[data-email]");

  try {
    const profile = await clientServices.detailClient(id); //llamamos a la funcion de detalles y le pasamos el nombre y email recibidos para que los almacene en el json
    if (profile.name && profile.email) {
      name.value = profile.name;
      email.value = profile.email;
    } else { //creamos un objeto de la clase error para llamar al catch
      throw new Error();
    }
  } catch (error) {
    //en caso de que se produzca un error
    window.location.href = "/screens/error.html";
  }
};

getInformation();//llamamos a la funcion obtener información

form.addEventListener("submit", (event) => { //una vez presionado el boton editar cliente
  event.preventDefault(); //evitamos que el formulario reaccione de manera normal
  const url = new URL(window.location); //almacenamos la url 
  const id = url.searchParams.get("id"); //obtenemos de la url el id y lo almacenamos

  const name = document.querySelector("[data-name]").value; //almacenamos el valor del input nombre y email
  const email = document.querySelector("[data-email]").value;
  clientServices.updateClient(name, email, id).then(() => { //llamamos a la funcion actualizar y le pasamos los nuevos datos con su id
    window.location.href = "/screens/edition_concluded.html"; //si todo está correcto redirecciona la pagina
  });
});
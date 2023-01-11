const listClients = () => //crea la conexion con el servidor y obtiene los datos de la lista de clientes
  fetch("http://localhost:3000/profile").then((respuesta) => respuesta.json());

const createClient = (name, email) => { //funcion que crea el cliente recibiendo los valores de nombre y email
  return fetch("http://localhost:3000/profile", { //lo direcciona al servidor
    method: "POST", //y lo agrega en su json
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, id: uuid.v4() }), //el contenido a agregar es nombre, email y el id obtenido por el script agregado
  });
};

const deleteClient = (id) => { //función que permite eliminar los clientes del json
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  });
};

export const clientServices = { //exportamos la función padre que contiene las demas funciones
  listClients,
  createClient,
  deleteClient,
};

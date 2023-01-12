const listClients = () => //crea la conexion con el servidor y obtiene los datos de la lista de clientes
  fetch("http://localhost:3000/profile").then((response) => response.json());

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

const detailClient = (id) => { //mostramos toda la información del cliente
  return fetch(`http://localhost:3000/profile/${id}`).then((response) =>
  response.json()
  );
};

const updateClient = (name, email, id) => { //recibe el nombre email e id 
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT", //permite actualizar los datos del json
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }), //pasandole como datos a actualizar el nombre y email
  })
    .then((response) => response)
    .catch((err) => console.log(err));
};

export const clientServices = { //exportamos la función padre que contiene las demas funciones
  listClients,
  createClient,
  deleteClient,
  detailClient,
  updateClient,
};

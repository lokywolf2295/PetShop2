const listClients = () =>
  fetch("http://localhost:3000/profile").then((respuesta) => respuesta.json());

export const clientServices = {
  listClients,
};

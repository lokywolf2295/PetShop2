import { clientServices } from "../service/client-service.js";

//backticks
const createNewLine = (name, email, id) => { //crea las filas de la tabla que contiene el nombre, email e id
  const line = document.createElement("tr");
  const content = `
      <td class="td" data-td>
        ${name}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/edit_client.html?id=${id}"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
  line.innerHTML = content;

  const btn = line.querySelector("button"); //recibimos el llamado del boton
  btn.addEventListener("click", () => { //escuchamos el evento del click
    const id = btn.id;
    clientServices
      .deleteClient(id) //llamamos a la función y le pasamos el id
      .then((response) => {
        Swal.fire({ //luego de eliminar correctamente aparece un pop up de exito
          position: "center",
          icon: "success",
          title: "Eliminado Exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return line;
};

const table = document.querySelector("[data-table]");

clientServices
  .listClients() //llamamos a la funcion listar pasandole los nombres, email e ID para agregar cada cliente a la lista
  .then((data) => {
    data.forEach(({ name, email, id }) => {
      const newLine = createNewLine(name, email, id);
      table.appendChild(newLine);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

import { clientServices } from "../service/client-service.js";

//backticks
const createNewLine = (name, email) => { //crea las 
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
              href="../screens/edit_client.html"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
  line.innerHTML = content;
  return line;
};

const table = document.querySelector("[data-table]");

clientServices
  .listClients()
  .then((data) => {
    data.forEach((profile) => {
      const newLine = createNewLine(profile.name, profile.email);
      table.appendChild(newLine);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

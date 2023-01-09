//backticks
const createNewLine = (name, email) => {
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
  
  //Abrir http (método,url)
  
  // CRUD   - Métodos HTTP
  // Create - POST
  // Read   - GET
  // Update - PUT/PATCH
  // Delete - DELETE
  
  const listClients = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/profile");
  
      http.send();
  
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };
  
  listClients()
    .then((data) => {
      data.forEach((profile) => {
        const newLine = createNewLine(profile.name, profile.email);
        table.appendChild(newLine);
      });
    })
    .catch((error) => alert("Ocurrió un error"));
  
  // console.log(data);
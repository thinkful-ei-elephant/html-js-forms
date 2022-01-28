const mockDb = [
  {
    email: "bob@jones.com",
    password: "password",
    address: "123 Easy st",
    city: "Dallas",
    state: "TX",
    zip: "75001",
    gridCheck: true,
  },
];

window.addEventListener("DOMContentLoaded", main);

function main() {
  const form = document.querySelector("form");

  form.addEventListener("submit", handleSubmit);
  document.querySelector('.sort').addEventListener('click', sortData);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.target);
    let formObject = Object.fromEntries(formData);
    mockDb.push(formObject);
    render();
  }

  function render() {
    const tBody = document.querySelector("tbody");
    let html = generateTemplate();
    tBody.innerHTML = html;
  }

  function generateTemplate() {
    let html = [];
    for (let user of mockDb) {
      console.log(user);
      let template = `<tr>
            <td>${user.email}</td>
           <td>${user.address}</td>
           <td>${user.city}</td>
           <td>${user.state}</td>
           <td>${user.zip}</td>
           <td>${user.gridCheck}</td>
         </tr>
            `;
      html.push(template);
    }

    return html.join("");
  }

  function sortData() {
    mockDb.sort((a, b) => {
      if (a.city.toLowerCase() > b.city.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
    render();
  }
  render();
}

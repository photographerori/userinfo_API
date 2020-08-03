const container = document.getElementById("container");
const idData = document.getElementById("id-data");
const nameData = document.getElementById("name-data");
const emailData = document.getElementById("email-data");
const phoneData = document.getElementById("phone-data");

async function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);

  const createIdRow = function (n) {
    const tableData = document.createElement("td");
    tableData.textContent = users[n].id;
    idData.append(tableData);
    container.append(idData);
  };
  for (let n = 0; n < users.length; n++) {
    createIdRow(n);
  }

  for (let n = 0; n < users.length; n++) {
    const createNameRow = function (x) {
      const tableData = document.createElement("td");
      tableData.textContent = users[n].name;
      x.append(tableData);
      container.append(x);
    };
    createNameRow(nameData);
  }

  for (let n = 0; n < users.length; n++) {
    const createEmailRow = function () {
      const tableData = document.createElement("td");
      tableData.textContent = users[n].email;
      emailData.append(tableData);
      container.append(emailData);
    };
    createEmailRow();
  }

  for (let n = 0; n < users.length; n++) {
    const createPhoneRow = function () {
      const tableData = document.createElement("td");
      tableData.textContent = users[n].phone;
      phoneData.append(tableData);
      container.append(phoneData);
    };
    createPhoneRow();
  }
}

callApi();

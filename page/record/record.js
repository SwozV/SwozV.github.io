fetch("./records.json")
  .then((response) => response.json())
  .then((data) => {
    const myData = JSON.parse(JSON.stringify(data));
    const table = document.getElementById("records");
    const tableHeader = table.createTHead();
    const headerRow = tableHeader.insertRow();
    headerRow.innerHTML =
      "<th>Time</th><th>Name</th><th>Type</th><th>Score</th>";
    for (let i = 0; i < myData.length; i++) {
      const dataRow = table.insertRow();
      dataRow.innerHTML = `<td>${myData[i].time}</td><td>${myData[i].name}</td><td>${myData[i].class}</td><td>${myData[i].score}</td>`;
    }
  })
  .catch((error) => console.error(error));

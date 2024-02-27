fetch("records.json")
  .then((response) => response.json())
  .then((data) => {
    const table = document.getElementById("records");

    // 创建表头
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    for (let key in data[0]) {
      const headerCell = document.createElement("th");
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
    }

    // 创建表格内容
    const tbody = table.createTBody();
    data.forEach((item) => {
      const row = tbody.insertRow();
      for (let key in item) {
        const cell = row.insertCell();
        cell.textContent = item[key];
      }
    });
  })
  .catch((error) => console.error("Error:", error));

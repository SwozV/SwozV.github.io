// 获取表格数据
fetch("test.json")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("table-body");

    // 遍历数据并创建表格行
    data.forEach((item) => {
      const row = document.createElement("tr");

      // 创建单元格并填充数据
      for (const key in item) {
        const cell = document.createElement("td");
        cell.appendChild(document.createTextNode(item[key]));
        row.appendChild(cell);
      }

      // 将行添加到表格体
      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.log(error));

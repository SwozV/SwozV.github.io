// 调整页面的宽度和高度以适应窗口大小的变化
function resize() {
  document.body.style.width = window.innerWidth + "px";
  document.body.style.height = window.innerHeight + "px";
}

resize();
window.addEventListener("resize", resize);

// 基本的导航菜单功能
document.querySelectorAll(".left-box ul li[data-class]").forEach(function (li) {
  li.onclick = function () {
    document
      .querySelectorAll(".left-box ul li[data-class]")
      .forEach(function (li) {
        li.classList.remove("act");
      });
    this.classList.add("act");
    let c = this.getAttribute("data-class");
    window.location.hash = c;
  };
});

// 左侧导航关联右侧内容
window.onhashchange = function () {
  console.log("change");
  processing();
};

function processing() {
  let hash = location.hash;
  console.log(hash);
  if (hash) {
    document.querySelector(".right-content").classList.add("show");
    document.querySelector(".left-box").classList.add("hide");
    document.querySelectorAll(".page").forEach(function (p) {
      p.style.display = "";
    });
    try {
      document.querySelector(".page." + hash.slice(1)).style.display = "block";
    } catch (e) {}
  } else {
    document.querySelector(".right-content").classList.remove("show");
    document.querySelector(".left-box").classList.remove("hide");
    if (window.innerWidth >= 700) {
      setTimeout(function () {
        document.querySelector('.left-box ul li[data-class="hello"]').click();
      }, 100);
    }
  }
}

processing();

// 1. 使用fetch API获取JSON文件
fetch("data/records.json")
  .then((response) => response.json())
  .then((data) => {
    // 2. 解析JSON数据
    const myData = JSON.parse(JSON.stringify(data));

    // 3. 创建表格元素和表头
    const table = document.getElementById("records-table");
    const tableHeader = table.createTHead();
    const headerRow = tableHeader.insertRow();
    headerRow.innerHTML =
      "<th>Time</th><th>Name</th><th>Type</th><th>Score</th>";

    // 4. 将数据填充到表格中
    for (let i = 0; i < myData.length; i++) {
      const dataRow = table.insertRow();
      dataRow.innerHTML = `<td>${myData[i].time}</td><td>${myData[i].name}</td><td>${myData[i].class}</td><td>${myData[i].score}</td>`;
    }
  })
  .catch((error) => console.error(error));

// motto
var motto = [
  "All tragedies erased, I see only wonders.",
  "忘却所有悲伤，所见皆是奇迹。",
];

var motto_counter = -1;
function g() {
  var sayii = 0;
  function domore(cb) {
    var inter = setInterval(function () {
      sayii++;
      if (sayii > motto[motto_counter].length) {
        clearInterval(inter);
        cb();
      } else {
        document.querySelector(".motto").innerHTML = motto[
          motto_counter
        ].substring(0, sayii);
      }
    }, 80);
  }
  function doless(cb) {
    var inter = setInterval(function () {
      sayii--;
      if (sayii < 0) {
        clearInterval(inter);
        cb();
      } else {
        document.querySelector(".motto").innerHTML = motto[
          motto_counter
        ].substring(0, sayii);
      }
    }, 80);
  }

  function dos() {
    if (motto_counter == motto.length - 1) {
      motto_counter = 0;
    } else {
      motto_counter++;
    }
    domore(function () {
      setTimeout(function () {
        doless(dos);
      }, 2000);
    });
  }
  dos();
}
g();

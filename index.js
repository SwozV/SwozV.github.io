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
    var c = this.getAttribute("data-class");
    window.location.hash = c;
  };
});

// 左侧导航关联右侧内容
window.onhashchange = function () {
  console.log("change");
  processing();
};
function processing() {
  var hash = location.hash;
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

// Page load and jump
(function () {
  var currentURL = window.location.href;
  var xhr = null;

  function updatePage(url) {
    if (xhr && xhr.readyState !== 4) {
      xhr.abort();
    }

    xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var res = xhr.responseText;
        var t = res.match(/<title>[\s\S]*<\/title>/);
        if (t && t.length > 0) {
          document.title = t[0].replace("<title>", "").replace("</title>", "");
        }

        var r = res.match(/<!-- content start -->[\s\S]*<!-- content end -->/);
        if (r && r.length > 0) {
          document.querySelector(".rightContent").innerHTML = r[0];
          var cssPath = url.substring(0, url.lastIndexOf("/")) + "/index.css";
          loadCSS(cssPath);
        }
      }
    };
    xhr.send();
  }

  function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.head.appendChild(link);
  }

  window.addEventListener("load", function () {
    updatePage(currentURL);
  });

  setInterval(function () {
    if (window.location.href !== currentURL) {
      currentURL = window.location.href;
      updatePage(currentURL);
      updateSideBar(currentURL);
    }
  }, 100);

  document.querySelectorAll("a[noNavigate]").forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault();
      history.pushState(null, null, this.href);
      currentURL = this.href;
      updatePage(currentURL);
    };
  });
})();

// Adjust page to fit window
function resize() {
  document.body.style.width = window.innerWidth + "px";
  document.body.style.height = window.innerHeight + "px";
}
resize();
window.addEventListener("resize", resize);

// motto
var motto = [
  "All tragedies erased, I see only wonders",
  "忘却所有悲伤, 所见皆是奇迹",
];
var motto_counter = -1;
function Motto() {
  var counter = 0;
  function domore(f) {
    var inter = setInterval(function () {
      counter++;
      if (counter > motto[motto_counter].length) {
        clearInterval(inter);
        f();
      } else {
        document.querySelector(".motto").innerHTML = motto[
          motto_counter
        ].substring(0, counter);
      }
    }, 80);
  }
  function doless(f) {
    var inter = setInterval(function () {
      counter--;
      if (counter < 0) {
        clearInterval(inter);
        f();
      } else {
        document.querySelector(".motto").innerHTML = motto[
          motto_counter
        ].substring(0, counter);
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
Motto();

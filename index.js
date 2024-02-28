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

var musicList = ["music/Say Hello - Rosie Thomas.flac"];

var bgMusic = document.getElementById("bgMusic");
var index = Math.floor(Math.random() * musicList.length);
bgMusic.src = musicList[index];

//播放音乐
function playBgMusic() {
    var index = Math.floor(Math.random() * musicList.length);
    var bgMusic = document.getElementById("bgMusic");
    bgMusic.src = musicList[index];
    bgMusic.play();
}

window.onload = playBgMusic;
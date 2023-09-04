const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

// song list
const songList = [
    {
        // 你的音乐的路径
        path: "Still Alive - 小濑村晶.mp3",
        // 你的音乐的名字
        songName: "Still Alive - 小濑村晶",
    },
];

let songPlaying = false;

//play song
const playSong = () => {
    songPlaying = true;
    audio.play();
    playPause.classList.add('active');
    playPause.innerHTML = '<span class="material-icons">pause</span>';
}

//pause song
const pauseSong = () => {
    songPlaying = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = ' <span class="material-icons">play_arrow</span>';

}
//play/pause song
playPause.addEventListener("click", () => (songPlaying ? pauseSong() : playSong()));

//load song
const loadSong = (songList) => {
    title.textContent = songList.songName;
    audio.src = songList.path;//

}
let i = 0;
loadSong(songList[i]);

//previous song
const prevSong = () => {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}

prev.addEventListener("click", prevSong);

//next song
const nextSong = () => {
    i++;
    if (i > (songList.length - 1)) {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}

next.addEventListener("click", nextSong);
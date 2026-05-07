const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const mutedBtn = document.querySelector("#muted-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const mutedImg = document.querySelector("#muted-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");
playPauseBtn.addEventListener("click", togglePlayPause);
mutedBtn.addEventListener("click", toggleMute);
audio.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (audio.paused == true || audio.ended == true) {
    audio.play();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=Wf72tFY1MCeV&format=png&color=000000";
  } else {
    audio.pause();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=5GnFrcQmc9iB&format=png&color=000000";
  }
}

function toggleMute() {
  if (audio.muted == true) {
    audio.muted = false;
    mutedImg.src =
      "https://img.icons8.com/?size=100&id=IlvXrZQW2plu&format=png&color=000000";
  } else {
    audio.muted = true;
    mutedImg.src =
      "https://img.icons8.com/?size=100&id=K2qo7aCu72SI&format=png&color=000000";
  }
}
function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here
// pause play etc, in html where button is styled and in a flexbox: <button id="pause-button">pause audio</button>  <button id="play-button">play audio</button>
//in js const pauseButton = document.querySelector("#pause-button"); console.log (pause)
//cont. pauseButton.addEventListener("click", pauseAudio);
//cont. function pauseAudio() {airportAudio.pause();}
//access element, event listener, function
//https://archive.org/details/studyvid

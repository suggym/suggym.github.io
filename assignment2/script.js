const audio = document.querySelector("#custom-audio-player");

//buttons + images QSs
const playPauseBtn = document.querySelector("#play-pause-btn");
const mutedBtn = document.querySelector("#muted-btn");
const skip5secBtn = document.querySelector("#skip5sec-btn");
const loopBtn = document.querySelector("#loop-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const mutedImg = document.querySelector("#muted-img");
const loopImg = document.querySelector("#loop-img");
const skip5secimg = document.querySelector("#skip5sec-img");

//middle section QSs
const albumCover = document.querySelector("#album-cover");
const previousSongBtn = document.querySelector("#previous-song-btn");
const nextSongBtn = document.querySelector("#next-song-btn");

//progress bar query selectors
const progressBar = document.querySelector("#progress-bar-fill");
const timeDisplay = document.querySelector("#time-display");
const progressBarContainer = document.querySelector(".progress-bar");

//timer query selectors
const timerDisplay = document.querySelector("#timer-display");
const timerStartBtn = document.querySelector("#timer-start-btn");
const timerResetBtn = document.querySelector("#timer-reset-btn");

//more variables
let currentSong = 0;
let timerSeconds = 25 * 60;
let timerInterval;
let timerRunning = false;

//event listeners
audio.removeAttribute("controls");
playPauseBtn.addEventListener("click", togglePlayPause);
mutedBtn.addEventListener("click", toggleMute);
loopBtn.addEventListener("click", toggleLoop);
skip5secBtn.addEventListener("click", skip5sec);
audio.addEventListener("timeupdate", updateProgressBar);
nextSongBtn.addEventListener("click", nextSong);
previousSongBtn.addEventListener("click", previousSong);
audio.addEventListener("ended", nextSong);
progressBarContainer.addEventListener("click", changeTime);
document.addEventListener("keydown", keyFunction);
timerStartBtn.addEventListener("click", startPauseTimer);
timerResetBtn.addEventListener("click", resetTimer);

//functions
function startPauseTimer() {
  if (timerRunning == false) {
    timerRunning = true;

    timerStartBtn.textContent = "pause";

    timerInterval = setInterval(function () {
      timerSeconds = timerSeconds - 1;

      updateTimerDisplay();

      if (timerSeconds <= 0) {
        clearInterval(timerInterval);

        alert("take a break <3");
      }
    }, 1000);
  } else {
    timerRunning = false;

    timerStartBtn.textContent = "start";

    clearInterval(timerInterval);
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);

  const seconds = timerSeconds % 60;

  if (seconds < 10) {
    timerDisplay.textContent = minutes + ":0" + seconds;
  } else {
    timerDisplay.textContent = minutes + ":" + seconds;
  }
}

function resetTimer() {
  clearInterval(timerInterval);

  timerRunning = false;

  timerSeconds = 25 * 60;

  timerStartBtn.textContent = "start";

  updateTimerDisplay();
}

function changeTime(event) {
  const barWidth = progressBarContainer.clientWidth;

  const clickPosition = event.offsetX;

  const clickPercent = clickPosition / barWidth;

  audio.currentTime = clickPercent * audio.duration;
}

function keyFunction(event) {
  if (event.code === "Space") {
    event.preventDefault();
    togglePlayPause();
  }

  if (event.code === "ArrowRight") {
    nextSong();
  }

  if (event.code === "ArrowLeft") {
    previousSong();
  }
}

function skip5sec() {
  audio.currentTime = audio.currentTime + 10;
}

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

loopBtn.style.opacity = "0.4";

function toggleLoop() {
  if (audio.loop == true) {
    audio.loop = false;
    loopImg.src =
      "https://img.icons8.com/?size=100&id=N2IrhI7SMhXo&format=png&color=000000";
    loopBtn.style.opacity = "0.4";
  } else {
    audio.loop = true;
    loopImg.src =
      "https://img.icons8.com/?size=100&id=N2IrhI7SMhXo&format=png&color=000000";
    loopBtn.style.opacity = "1";
  }
}

function updateProgressBar() {
  if (!audio.duration) {
    return;
  }

  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";

  timeDisplay.textContent =
    formatTime(audio.currentTime) + " | " + formatTime(audio.duration);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  if (seconds < 10) {
    return minutes + ":0" + seconds;
  } else {
    return minutes + ":" + seconds;
  }
}

const musicList = [
  {
    id: 1,
    src: "erokia.mp3",
    name: "Erokia",
    cover: "erokia.png",
  },
  {
    id: 2,
    src: "goodnight.mp3",
    name: "Good Night",
    cover: "goodnight.png",
  },
  {
    id: 3,
    src: "close.mp3",
    name: "Close",
    cover: "close.png",
  },
];

function chooseSong(songNumber) {
  audio.src = musicList[songNumber].src;
  albumCover.src = musicList[songNumber].cover;
  progressBar.style.width = "0%";
  audio.play();
}

function nextSong() {
  currentSong = currentSong + 1;

  if (currentSong > musicList.length - 1) {
    currentSong = 0;
  }

  chooseSong(currentSong);
}

function previousSong() {
  currentSong = currentSong - 1;

  if (currentSong < 0) {
    currentSong = musicList.length - 1;
  }

  chooseSong(currentSong);
}

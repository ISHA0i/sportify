// can't
// play next&privious
// play by selecting
// play gif

console.log("Wlecom to 0i-music");

let songIndex = 0;
let audioElement = new Audio("songs/Alan Walker - Spectre [NCS Release].mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songitem = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  {
    songName: "specter",
    filePath: "songs/Alan Walker - Spectre [NCS Release].mp3",
    coverPath: "images/Designer (1).png",
  },
  {
    songName: "Amplifier",
    filePath: "songs/Amplifier - Imran Khan 128 Kbps.mp3",
    coverPath: "images/Designer (5).png",
  },
  {
    songName: "Kandhon Se Milte Hein",
    filePath: "songs/02 Kandhon Se Milte Hein - www.downloadming.com.mp3",
    coverPath: "images/3.jpg",
  },
  {
    songName: "Make_Me_Move",
    filePath:
      "songs/Culture_Code_feat_Karra_-_Make_Me_Move_Loadedsongs.com.mp3",
    coverPath: "images/4.jpg",
  },
  {
    songName: "Maahi Ve",
    filePath: "songs/Maahi Ve - Highway 320 Kbps.mp3",
    coverPath: "images/5.webp",
  },
  {
    songName: "Naija-Mixes-Hot-Afro-DJ-Mix",
    filePath: "songs/Naija-Mixes-Hot-Afro-DJ-Mix.mp3",
    coverPath: "images/document.jpeg",
  },
  {
    songName: "Collaterl Love",
    filePath: "songs/Z TAO   Collateral Love.mp3",
    coverPath: "images/7.jpg",
  },
  {
    songName: "Reluctanly",
    filePath: "songs/Z TAO - Reluctanly  MV.mp3",
    coverPath: "images/boy.webp",
  },
  {
    songName: "CROWN",
    filePath: "songs/Z.TAO – CROWN (Music Video).mp3",
    coverPath: "images/Designer (1).png",
  },
  {
    songName: "Beggar",
    filePath: "songs/ZTAO - Beggar.mp3",
    coverPath: "images/Designer (2).png",
  },
  {
    songName: "Black White",
    filePath: "songs/ZTAO - Black White (AB).mp3",
    coverPath: "images/Designer (3).png",
  },
  {
    songName: "Hello Hello",
    filePath: "songs/ZTAO - Hello, Hello ft. Wiz Khalifa.mp3",
    coverPath: "images/Designer (4).png",
  },
  {
    songName: "The Road",
    filePath: "songs/ZTAO - The Road.mp3",
    coverPath: "images/Designer.png",
  },
  {
    songName: "Stay",
    filePath:
      "songs/ZTAO, Diplo & Mø  ⭐️ Stay Open MV (Official Music Video - China).mp3",
    coverPath: "images/document.jpeg",
  },
  {
    songName: "Calm Down Calm Down",
    filePath: "songs/Calm Down Calm Down_320(PaglaSongs).mp3",
    coverPath: "images/2.png",
  },
  {
    songName: "Castles in the Sky",
    filePath:
      "songs/Castles in the Sky-Kaimo K Ft. Mariske Hekkenberg & Trance Classics-VlcMusic.CoM.mp3",
    coverPath: "images/document.jpeg",
  },
  {
    songName: "Sugar & Brownies",
    filePath: "songs/Sugar & Brownies-Dharia-VlcMusic.CoM.mp3",
    coverPath: "images/download1.png",
  },
];
// Done song detail/////////////////////////////////
songitem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Done push play down of progressbar////////////////////////////
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
    gif.play();
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
    gif.pause();
  }
});

// Done progressbar time update///////////////////////////////////
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  console.log(progress);
  myProgressBar.value = progress;
});

// document.addEventListener("time");

// Done change//////////////////////////////////////////
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlay();
      songIndex = parseInt(e.target.id.replace("song", ""));
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;

      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;

  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  gif.style.opacity = 1;
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  gif.style.opacity = 1;
});
audioElement.addEventListener("ended", () => {
  masterPlay.classList.remove("fa-pause");
  masterPlay.classList.add("fa-play");
  gif.style.opacity = 0; // Hide the GIF when music ends
  gif.pause();
});

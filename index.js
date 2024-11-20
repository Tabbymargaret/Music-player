let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let previousButton = document.getElementById('previousButton');
let nextButton = document.getElementById('nextButton');

let mySongs = ["touch.mp3", "I believe I'm fine.mp3", "ritual.mp3"];


song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause()
{
    if (ctrlIcon.classList.contains('fa-play')) {
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
        song.play();
    }
    else{
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
        song.pause();
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
}

// function songDetails(name, artist)
// {
//     this.name = name;
//     this.artist = artist;
// }
// let touch = new songDetails("Touch", "Little Mix");
// let Believe = new songDetails("I believe I'm fine", "Robin Schulz ft. Hugel");
// let Ritual = new songDetails("Ritual", "Tiesto");


let songInfo = {
    "touch.mp3": { name: "Touch", artist: "Little Mix" },
    "I believe I'm fine.mp3": { name: "I Believe I'm Fine", artist: "Robin Schulz Ft. Hugel" },
    "ritual.mp3": { name: "Ritual", artist: "Tiesto" }
};

song = new Audio(); // Initialize audio player
let songTitle = document.getElementById("songTitle"); // Assuming there's an element with id 'songTitle'
let songArtist = document.getElementById("songArtist"); // Assuming there's an element with id 'songArtist'

let currentSongIndex = 0; // Track current song index

function nextSong() {
    // Increment the index and reset to 0 if it's the last song
    currentSongIndex = (currentSongIndex + 1) % mySongs.length;
    
    // Get the next song
    let nextSong = mySongs[currentSongIndex];
    
    // Update the audio source and play the song
    song.src = nextSong;
    song.play();

    // Update song title and artist dynamically based on the song
    let songDetails = songInfo[nextSong];
    songTitle.innerHTML = songDetails.name;
    songArtist.innerHTML = songDetails.artist;
}

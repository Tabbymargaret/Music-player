let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');


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
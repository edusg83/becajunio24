const audioPlayer = document.getElementById('music-player');
const sources = audioPlayer.getElementsByTagName('source');
let currentTrackIndex = 0;
const currentSongElement = document.getElementById('current-song');

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % sources.length;
    audioPlayer.src = sources[currentTrackIndex].src;
    audioPlayer.play();
    updateCurrentSongName();
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + sources.length) % sources.length;
    audioPlayer.src = sources[currentTrackIndex].src;
    audioPlayer.play();
    updateCurrentSongName();
}

function updateCurrentSongName() {
    const currentSongName = sources[currentTrackIndex].src.split('/').pop();
    currentSongElement.textContent = `Canción actual: ${currentSongName}`;
}

window.onload = updateCurrentSongName;

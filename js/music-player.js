const audioPlayer = document.getElementById('music-player');
const sources = audioPlayer.getElementsByTagName('source');
let currentTrackIndex = 0;

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
}
function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + sources.length) % sources.length;
    audioPlayer.src = sources[currentTrackIndex].src;
    audioPlayer.play();
}

var loop = new Audio("audio/loop.mp3");

var beat = [];
beat.push(new Audio("audio/01_kick_drum.wav"));
beat.push(new Audio("audio/02_closed_hihat.wav"));
beat.push(new Audio("audio/03_open_hihat.wav"));
beat.push(new Audio("audio/04_clap.wav"));
beat.push(new Audio("audio/05_snap.wav"));
beat.push(new Audio("audio/06_crash.wav"));
beat.push(new Audio("audio/07_tom1.wav"));
beat.push(new Audio("audio/08_tom2.wav"));
beat.push(new Audio("audio/09_tambourine.wav"));

$('#play-btn').on('click', playMusic);
$('#stop-btn').on('click', stopMusic);

$(document).on('keydown', addPlaying);
$(document).on('keyup', subPlaying);

function playMusic() {
    loop.play();
}

function stopMusic() {
    loop.pause();
    loop.currentTime = 0; 
}

function addPlaying(event) {
    $('#cell' + event.key).addClass('playing');
    beat[Number(event.key) - Number(1)].play();
    beat[Number(event.key) - Number(1)].currentTime = 0;
}

function subPlaying(event) {
    $('#cell' + event.key).removeClass('playing');
}

status1 = "";
video = "";
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(500, 450);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById('status').innerHTML = "Status: Detection Objects";
}

function modelloaded() {
    console.log('Model is loaded');
    status1 = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}
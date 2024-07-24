harrypotter_song = "";
peterpan_song = "";

function preload()
{
    harrypotter_song = loadSound("harry_potter_theme.mp3");
    peterpan_song = loadSound("peter_pan.mp3");

}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song1 = " ";
song2 = " ";
function preload()
{
    song1 = loadSound("harry_potter.mp3");
    song2 = loadSound("frozen.mp3");
}
function setup()
{
    canvas = createCanvas(500, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    image(video , 0 , 0 ,500 , 350);
}

function modelLoaded()
{
    console.log("modelLoaded");

}
function play_sound()
{
  
    song2.play();
  
    song2.setVolume(1);
    song2.rate(1);
}
function stop_sound()
{
    song1.stop();
    song2.stop();
}
function play_sound2()
{
    song1.play();
   
    song1.setVolume(1);
    song1.rate(1);
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX  " + leftWristX + "leftWristY  " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX  " + rightWristX + "rightWristY  " + rightWristY);
    }
}
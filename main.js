song="";

function preload() {
    song=loadSound("music.mp3");
}
scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;

leftWristX=0;
lefttWristY=0;

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses() {
    if (results.length>0) {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("righttWristX="+rightWristX+"rightWristY="+rightWristY);

        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLefttWrist = results[0].pose.keypoints[9].score;
        console.log(result)

    }
}
function draw() {
    image(video,0,0,600,500);
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
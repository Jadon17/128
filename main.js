music1 = "";
music2 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    music1 = loadSound("Music1.mp3");
    music2 = loadSound("Music2.mp3");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(570,220);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);

}

function draw(){
    image(video,0,0,400,400);
}

function modelloaded(){
    console.log("Model has loaded !!!")
}

function gotposes(results){
    if (results.length > 0){
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("right Wrist X = " + rightWristX + "right Wrist Y = " + rightWristY);
    }
    
}


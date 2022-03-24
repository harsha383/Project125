noseX=0;
noseY=0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#678FC3');
    textSize(difference);
    fill('#FAEB86');
    stroke('#FAEB86');
    text('Harsha', noseX, noseY);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0) 
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        document.getElementById("font_size").innerHTML = difference; 
        console.log("leftWristX = " + leftWristX + "rightWristY = " + rightWristX + "difference = " + difference);
    }
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 80)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Intialized!!");
}

function gotPoses(results){
    if(results.length > 0){
          console.log(results);
          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX-rightWristX);
          
    }
}

function draw(){
    background('#f5f0f0');

    textSize(difference);
    fill('#140103');
    text('Sanvi', 50, 400);
}

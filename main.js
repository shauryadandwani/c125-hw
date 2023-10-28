noseX=0;
noseY=0;
difference=0;
leftWrist=0;
rightWrist=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);


    canvas= createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY = "+noseY);

        leftWrist= results[0].pose.leftWrist.x;
        rightWrist= results[0].pose.rightWrist.x;
        difference= floor(leftWrist-rightWrist);
console.log("leftWrist=" +leftWrist +"rightWrist = "+rightWrist+"diffrence ="+difference);
    }
}
function draw(){
    background("red");
    fill('blue');
    stroke('blue');
    document.getElementById("square_size").innerHTML= "width and hight of a Square will be="+ difference +"px"
    
    square(noseX, noseY, difference);
}
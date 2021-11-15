function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,70);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#00b1d9');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function modelLoaded(){
    console.log('poseNet is intialized');
}

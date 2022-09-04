img2 = "";
status2 = "";
function back2(){
    window.location = "index.html";
}
function preload(){
    img2 = loadImage("bdais.jpg");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(450, 50);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status2").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img2, 0, 0, 380, 380);
}
function modelLoaded(){
    console.log("Model has loaded");
    status = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
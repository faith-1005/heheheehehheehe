var human = "";
nature = [];
var techno = "";

function preload(){

}

function draw(){
image(video, 0, 0, 400, 320);

if(human != ""){
    objectDetector.detect(video, gotResult);
    r=random(255);
    g=random(255);
    b=random(255);
for(r = 0; r < nature.length; r++){
    document.getElementById("life").innerHTML = "status : object is detected(but i dont think it can detect your existence)";
    document.getElementById("num").innerHTML = "number of objects detected are : "+nature.length;
    fill(r,g,b);
    techno = floor(nature[r].confidence*100);
    text(nature[r].label+" "+techno+"%",nature[r].x+10,nature[r].y+10);
    noFill();
    stroke(r,g,b);
    rect(nature[r].x, nature[r].y, nature[r].width, nature[r].height);
}
}

}

function setup(){
canvas = createCanvas(400, 320);
canvas.center();

video = createCapture(VIDEO);
video.size(400, 320);
video.hide();

}

function start(){

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("life").innerHTML = "status : detecting objects";

}

function modelLoaded(){
console.log("modelLoaded");

human = true;
}

function gotResult(error, results){

if(error){
console.log(error);
}

else{
console.log(results);
nature = results;

}
}
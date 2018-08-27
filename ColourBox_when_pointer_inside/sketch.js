function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if(mouseX>200&&mouseX<300&&mouseY>400&&mouseY<500){
    fill(random(0,255),random(0,255),random(0,255));
  }
  rect(200,400,100,100);
}
function onClick(){
  fill(random(0,255),random(0,255),random(0,255));
  rect(200,500,50,100);
}
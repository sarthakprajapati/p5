var x=5;
function setup() {
  createCanvas(900,900);
}

function draw() {
  background(x,x+40,200);
  noStroke();
  fill(x,x-80,0);
  ellipse(x,x,80,80);
  x=x+1;
}
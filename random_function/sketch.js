function setup() {
 createCanvas(1000,900);
 background(0);
}

function draw() {
  var r,g,b;
  var spot = {
    x:0,y:0
  };
  r=random(0,255);
  g=0;
  b=random(0,255);
  spot.x=random(0,height);
  spot.y=random(0,width);
  fill(r,g,b,100);
  noStroke();
  ellipse(spot.x,spot.y,50,50);
}
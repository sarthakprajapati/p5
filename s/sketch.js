var x =0;
function setup() {
  createCanvas(600,600);


}

function draw() {
  	var r=0;
  var g=0;
  var b=0;

    background(0);
  r=random(0,255);
  b=random(0,255);
    noStroke();
  fill(r,g,b);
 
  if(x<height){
  x=x+3;
  ellipse(x,300,60,60);
 }
 else{x=0;}
  
}
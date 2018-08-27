
function setup() {
  createCanvas(1200,600);
}

function draw() {
  background(200);
  ellipseMode(CENTER);
  fill(0);
  //edges
  line(300,300,200,200);
  line(300,300,250,390);
  line(300,300,390,305);
  
  //rope_in_downward
  strokeWeight(2);
  line(290,300,290,450);
  line(300,300,300,450);
  line(310,300,310,450);
  //main_circle
  ellipse(300,300,80,80);
  //small_circles
  fill(130);
  ellipse(300,280,10,10);
  ellipse(325,300,10,10);
  ellipse(285,320,10,10);  
  //middle_circle
  fill(255);
  ellipse(300,300,20,20);
  //center_black_circle
  fill(0);
  ellipse(300,300,5,5);
  //shadow_ellipse
  fill(150);
  ellipse(280,520,60,60);
  //downward_square
  fill(0);
  rect(230,450,100,80);
  //strip_in_block
  fill(200);
  rect(230,460,100,5);
  
}



function pulley(){

 fill(0);
  //edges
  line(300,300,200,200);
  line(300,300,250,390);
  line(300,300,390,305);
  
  //rope_in_downward
  strokeWeight(2);
  line(290,300,290,450);
  line(300,300,300,450);
  line(310,300,310,450);
  //main_circle
  ellipse(300,300,80,80);
  //small_circles
  fill(130);
  ellipse(300,280,10,10);
  ellipse(325,300,10,10);
  ellipse(285,320,10,10);  
  //middle_circle
  fill(255);
  ellipse(300,300,20,20);
  //center_black_circle
  fill(0);
  ellipse(300,300,5,5);
  //shadow_ellipse
  fill(150);
  ellipse(280,520,60,60);
  //downward_square
  fill(0);
  rect(230,450,100,80);
  //strip_in_block
  fill(200);
  rect(230,460,100,5);
  
  
}
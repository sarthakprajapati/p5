function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

Stack.prototype.getBuffer = function() {
    return this.array.slice();
}

Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}

//instance of the stack class
var stack1 = new Stack();

console.log(stack1); // {array: []}

Stack.prototype.push = function(value) {
    this.array.push(value);
}



Stack.prototype.pop = function() {
    this.array.pop();
}


Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
    }



function setup(){
  createCanvas(displayWidth,300);
}

function draw(){
  background("grey");
     strokeWeight(3);
    stroke('black');
  line(10,45,90,45);
  rect(10,30,40,30);
    noStroke();
      text("TOP",20,50);
  for(var i = stack1['array'].length-1; i>=0;i--){
    var p = 10;
    translate(70,0);
    strokeWeight(3);
    stroke('black');
    line(10+p,45,p+80,45);
    noStroke();
    rect(10+p,30,40+p,30);
    text(stack1['array'][i],40,50);
    p +=10;
  }
  textSize(16);
  text("Current Top : "+stack1.peek(),0,130); // 10
  textSize(13);

}

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(19);

stack1.pop();
stack1.pop();

stack1.push(20);
stack1.push(30);
//textSize(70);

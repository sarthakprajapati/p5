// Define Stack function 
function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

// Add Get Buffer property to object constructor which slices the array
Stack.prototype.getBuffer = function() {
    return this.array.slice();
}

//Add isEmpty properties to object constructor which returns the length of the array
Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}

//instance of the stack class
var stack1 = new Stack(); //Stack { array: [] }

// Add Push property to object constructor which push elements to the array
Stack.prototype.push = function(value) {
    this.array.push(value);
}

function setup(){
// Create Canvas of size display width * 300

createCanvas(displayWidth, 300);
}

function draw(){
// Set background color

background("grey");

// set stroke weight

    strokeWeight(3);

// set stroke color
    stroke('black');
line(10, 45, 90, 45);
rect(10, 30, 40, 30);
    noStroke();
    text("TOP", 20, 50);

// display stack 
for(var i = stack1['array'].length-1; i>=0;i--){
    var p = 10;
    translate(70, 0);
    strokeWeight(3);
    stroke('black');
    line(10+p, 45, p+80, 45);
    noStroke();
    rect(10+p, 30, 40+p, 30);
    text(stack1['array'][i], 40, 50);
    p +=10;
}
}

// Call to push operation
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(19);
stack1.push(11);
stack1.push(12);

// Pop function
Stack.prototype.pop = function() {
   return this.array.pop();
}

// Peek Function
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

// stack1.push(1);
// stack1.push(2);
// stack1.push(3);
// stack1.push(19);

// stack1.pop();
// stack1.pop();

// stack1.push(20);
// stack1.push(30);
// stack1.push(14);
//console.log(stack1);

// Access Element 

function stackAccessNthNode(array,index){
    var bufferArray = array.getBuffer();
    if(index <=0) throw 'error';
    if (index > bufferArray.length) throw 'Index is out of range';
    var bufferStack = new Stack(bufferArray); 
    while(--index!==0){
        bufferStack.pop();
}
return bufferStack.pop();

}
 var stack2 = new Stack();
stack2.push(20);
stack2.push(30);
stack2.push(14);
stack2.push(1);
stack2.push(2);
stack2.push(3);
stack2.push(19);

// var t = document.getElementById("index").elements[0].value;
// console.log(t);

console.log(stackAccessNthNode(stack2,4));
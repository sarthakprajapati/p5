// Define Queue function 
function Queue(array) {
    this.array = [];
    if (array) this.array = array;
}

// Add Get Buffer property to object constructor which slices the array
Queue.prototype.getBuffer = function() {
    return this.array.slice();
}

//Add isEmpty properties to object constructor which returns the length of the array
Queue.prototype.isEmpty = function() {
    return this.array.length == 0;
}

//instance of the Queue class
var queue1 = new Queue(); //Queue { array: [] }

console.log(queue1);
// Add Push property to object constructor which push elements to the array
Queue.prototype.enqueue = function(value) {
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
rect(10, 30, 60, 30);
    noStroke();
    text("FRONT", 20, 50);

// display queue
for(var i = 0; i<=queue1['array'].length-1;i++){
    var p = 10;
    translate(70, 0);
    strokeWeight(3);
    stroke('black');
    line(10+p, 45, p+80, 45);
    noStroke();
    rect(10+p, 30, 40+p, 30);
    text(queue1['array'][i], 40, 50);
    p +=10;
}
// set stroke color
stroke('black');
translate(70, 0);
rect(10, 30, 60, 30);
noStroke();
text("REAR", 20, 50);
}


// Dequeue function
Queue.prototype.dequeue = function() {
   return this.array.shift();
}

// Peek Function
Queue.prototype.peek = function(){
    return this.array[this.array.length-1];
    }

// Driver Code
// Call to Enqueue operation
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(19);
queue1.enqueue(11);
queue1.enqueue(15);
queue1.enqueue(14);
queue1.enqueue(18);

// Call to Dequeue Function
queue1.dequeue();
queue1.dequeue();

console.log(queue1);
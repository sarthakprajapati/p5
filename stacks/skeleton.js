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

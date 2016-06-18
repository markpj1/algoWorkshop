/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.
*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection
myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection
myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection
myQueue.count()
=> number of elements in queue
*** Additional Exercises:
Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
 */

function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    //console.log(this._storage); ////look @ object
    return this.count();
  }
  return 'Max input, delete Element before adding new one';
};
// Time complexity:

Queue.prototype.dequeue = function() {
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) {
    this._head++;
  }
  return element;
};
// Time complexity:

Queue.prototype.peek = function() {
  return this._storage[this._head];
};

Queue.prototype.count = function() {
  return this._tail - this._head;
};

Queue.prototype.contains = function(value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) {
      return true;
    }
  }
  return true;
};

Queue.prototype.until = function (value) {
    for (var i = this._head; i < this._tail; i++) {
      if(this._storage[i] === value) {
        return i;
      }
    }
    return null;
};
// Time complexity:

var myQueue = new Queue(3);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be MAXED OUT');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.contains('b'), 'should be true');


console.log(myQueue.until('b'), 'should be 1');
console.log(myQueue.until('c'), 'should be 2');
console.log(myQueue.until('d'), 'should be null');






/*
*** Exercises:
1. Implement a queue using two stacks.
2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
 */

function Stack (capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
    if(this._count < this._capacity) {
      this._storage[this._count++] = value;
      console.log('Storage# ', this._storage[this._count++]);
      return this._count;
    }
    return 'Max Capacity reached, remove element before adding a new one';
};

Stack.prototype.pop = function () {
  var value = this._storage[--this._capacity];
  delete this._storage[this._count];
  if(this._count < 0) {
    this._count = 0;
  }
  return value;
};

Stack.prototype.peek = function () {
  return this._storage[this._count-1];
};

Stack.prototype.count = function () {
  return this._count;
};

function Queue_TwoStacks () {
  this.stackIn = new Stack();
  this.stackOut = new Stack();
}

Queue_TwoStacks.enqueue = function (val) {
  this._.stackIn.push(val);
};

Queue_TwoStacks.prototype.transferStacks = function () {
  while(this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

Queue_TwoStacks.prototype.dequeue = function () {
  if(this._stackOut.count() === 0) {
    this.transferStacks();
    return this._stackOut.pop();
  }
};

Queue_TwoStacks.prototype.count = function () {
  return this._stackIn.count() + this._stackOut.count();
};

Queue_TwoStacks.prototype.peek = function () {
  if (this._stackOut.count() === 0) {
    this._transferStacks();
  }
  return this._stackOut.peek();
};

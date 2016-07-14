//var ngrok = require('ngrok');
//constuctor function for pseudo Class or pseudoClass
function Building (floors) {
  this.floors = floors; //properties (per instance);
  this.what = 'stuff';
}

//Methods for all instances
Building.prototype.countFloors = function () {
  //console.log(buildingOne);
  var textElem = document.getElementById('text');
  textElem.innerHTML = '<p>' + 'I have '+ this.floors + ' floors' + '</p>';

};

//new instances
var buildingOne = new Building(15);
var buildingTwo = new Building(25);

//Invoking unique instances
buildingTwo.countFloors();
buildingOne.countFloors();
console.log('Building.proto: ',Building.prototype);


// var Stack = function () {
//   this.storage = '';
// };
//
// Stack.prototype.push = function (val) {
//   return this.storage += val + ', ';
// };
// Stack.prototype.pop = function (val) {
//   return this.storage.split(',').slice(0,-2).join(',');
//
// };
// Stack.prototype.size = function (val) {
//   return this.storage.split('').length;
//
// };
//
// var myWeeklyMenu = new Stack();
// myWeeklyMenu.push('redBeans');
// myWeeklyMenu.push('redBeans');
// myWeeklyMenu.push('redBeans');
// myWeeklyMenu.push('redBeans');
// console.log(myWeeklyMenu.pop());
//
// console.log('myWeeklyMenu',myWeeklyMenu.storage);

// //This function is used to view the stack on chrome devtools
// function crackEggs (n) {
//   console.log('crackedEggs: ',n);
// }
//
// function whipEggs(crackedEggs) {
//   console.log('WhippedEggs: ','Yum');
// }
// function fryEgg(preppedEggs) {
//   console.log('fryEgg: ','yummier');
// }
//
// var makeEggs = function(style, n) {
//     var completedEgg;
//     if (style !== "boiled") {
//         var crackedEggs = crackEggs(n);
//         if (style !== "scrambled") {
//             completedEgg = fryEgg(crackedEggs, style);
//         } else {
//             var preppedEggs = whipEggs(crackedEggs);
//             completedEgg = fryEgg(preppedEggs);
//         }
//     }
//     //... other procedures here
//     return completedEgg;
// };
//
// makeEggs('scrambled', 3);
// //makeBacon('crispy', 2);

/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.
*** Operations:
myStack.push(value)
=> count of stack
add value to collection
myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection
myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection
myStack.count()
=> number of elements in stack
*** Additional Exercises:
Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?
 */

function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
  if(this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Maxed Out StackOverflow!!!!';
};

// Time complexity:

Stack.prototype.pop = function() {
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if(this._count < 0) {
    this._count = 0;
  }
  return value;
};
// Time complexity:

Stack.prototype.peek = function() {
  return this._storage[this._count-1];
};
// Time complexity:

Stack.prototype.count = function() {
  return this._count;
};
// Time complexity:

var myStack = new Stack(3);
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.push('d'), 'should be Max capacity reached');
// console.log(myStack.pop(), 'should be c');
// console.log(myStack.count(), 'should be 2');
// console.log(myStack.peek(), 'should be b');
// console.log(myStack.count(), 'should be 2');

/*
*** Exercises:
1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.
2. Sort a stack so that its elements are in ascending order.
3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false
4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */

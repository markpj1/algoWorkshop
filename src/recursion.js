/*
Implement factorial.
factorial(5) => 5*4*3*2*1 => 120
*/
function factorial (num) {
  if(num === 0 || num === '') {
    return 1;
  }
  return num * factorial(num-1);
}

var numberElem = document.getElementById('factorial');
var numberText = 'factorialRecursion: ' + factorial(5);
numberElem.innerHTML = numberText;


/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

function fibonacciRecursion (num) {
  if(num <= 2) {
    return 1;
  }
  else {
    return this.fibonacciRecursion(num-1) + this.fibonacciRecursion(num-2);
  }
}

//console.log('recursion: ',fibonacciRecursion(18));
var fibbonacciElement = document.getElementById('fibonacci');
var fibbonacciText = 'fibbonacciRecursion: ' + fibonacciRecursion(18);

fibbonacciElement.innerHTML = 'Returns: ' + fibbonacciText;

var xs = [1, 2, 3, 4, 5];

// pure
//xs.slice(0, 3);
//numberElem.innerHTML = xs.slice(0, 3);
//=> [1, 2, 3]

//xs.slice(0, 3);
var sliceElement = document.getElementById('slice');
var sliceText = 'returns PURE: ' +  xs.slice(0, 3);
sliceElement.innerHTML = sliceText;


//console.log(xs.slice(0, 3));

//=> [1, 2, 3]

//xs.slice(0, 3);
console.log(xs.slice(0, 3));

//=> [1, 2, 3]
var xs = [1, 2, 3, 4, 5];

var spliceElement = document.getElementById('splice');
var spliceText = 'returns destructive: ' + xs.splice(0, 3)  + ' < ' + xs.splice(0, 3) + ' < ' + xs.splice(0, 3) + '[]';
spliceElement.innerHTML = spliceText;

// pure
//xs.slice(0, 3);
console.log(xs.splice(0, 3));
//=> [1, 2, 3]

//xs.splice(0, 3);
console.log(xs.splice(0, 3));

//=> [1, 2, 3]

//xs.splice(0, 3);
console.log(xs.splice(0, 3));

//=> [1, 2, 3]

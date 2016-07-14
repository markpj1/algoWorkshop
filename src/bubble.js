//function bubble
  //for k loop through 1 to n-k-1
    //for i loop 0 to n-2
      //if A[i] is greater than A[i+1];
        //swap A[i] with A[i+1].
var unsortedArray = [5,4,8,9,0,6,1];


function bubbleSort (array) {
  var wall = array.length;
  while(wall >= 0) {
    for (var i = 0; i < wall; i++) {
      if(array[i] > array[i+1]) {
        array = swap(array, i, i+1);
      }
    }
    wall--;
  }
  return array;
}

function swap (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

var sorted = bubbleSort(unsortedArray);
console.log(sorted);

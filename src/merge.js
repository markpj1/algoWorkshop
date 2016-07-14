//Pseudocode: Merge Routine

// merge (l,r)
// Rpointer = 0
// Lpointer = 0
// outputArray = []
// loop until L === R & r === L
//   if (Lpointer[0] > Rpointer[o])
//     push lower number
//     to output array
//     Rpointer increment
//
//   else
//     push Lpointer
//     into output array

// mergeSort(list)
// base case if list .length < 2 return
// break the ist into halve L & return
// Lsorted = mergeSort(l)
// Rsorted = mergeSort(r)
// return merge(Lsorted, Rsorted);

//Quicksort Pseudocode

// position(arr, lo, hi)
//   choose last element as pivot
//
//   keep track of index for pivotLoc 0
//   initialized as lo..
//
//     for i, loop from low to high 0 to arr.length
//     if current arr[i] <= pivot 2 <= 4
//       swap pivot and i
//       increment pivotLoc 1
//   

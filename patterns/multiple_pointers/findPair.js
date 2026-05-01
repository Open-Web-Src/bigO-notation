// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
// This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
// findPair([1,2,3], 0) // false
// Part 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)

// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)

// Space Complexity Requirement - O(1)

function findPair(arr, n) {
  // if empty array, return false
  if (arr.length === 0) return false;

  // sort the array
  arr.sort((a, b) => a - b); // O(n log n)

  // start at the first (i) and the second (j) index of the array
  let i = 0,
    j = 1;

  while (j < arr.length) {
    let subtraction = arr[j] - arr[i];

    // return true if ABS of subtraction between ith and jth equal to ABS of n
    if (subtraction === Math.abs(n)) return true;

    // increase i by 1 if the subtraction greater than n
    if (subtraction > Math.abs(n)) i++;

    // increase j by 1 if either substraction is less than n OR i === j
    if (subtraction < Math.abs(n) || i === j) j++;
  }

  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2));
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
console.log(findPair([4, -2, 3, 10], -6));
console.log(findPair([6, 1, 4, 10, 2, 4], 22));
console.log(findPair([], 0));
console.log(findPair([5, 5], 0));
console.log(findPair([-4, 4], -8));
console.log(findPair([-4, 4], 8));
console.log(findPair([1, 3, 4, 6], -2));
console.log(findPair([0, 1, 3, 4, 6], -2));
console.log(findPair([1, 2, 3], 0));

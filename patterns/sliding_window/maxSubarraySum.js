// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum(arr, subArrLen) {
  // return null if sub array's length greater than array's actual length
  if (subArrLen > arr.length) return null;

  // set the temporary maximum as negative infinity
  let max = -Infinity;
  // loop to calculate the sum of first subArrLen items
  let sum = 0;
  for (let i = 0; i < subArrLen; i++) {
    sum += arr[i];
  }
  // moving
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2));
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
// console.log(maxSubarraySum([2, 3], 3));

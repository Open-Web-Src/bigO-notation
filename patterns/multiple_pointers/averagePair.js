// Write a function called averagePair.
// Given a sorted array of integers and a target average, determine if there is a pair of values
// in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(sortedIntArr, avg) {
  // sortedIntArr is empty -> return false
  if (sortedIntArr.length === 0) return false;

  // start at both first element (i) and last element (j), calculate the AVG of ith and jth
  let i = 0,
    j = sortedIntArr.length - 1;

  while (i < j) {
    // calculate computedAvg between ith and jth position
    let computedAvg = (sortedIntArr[i] + sortedIntArr[j]) / 2;

    // return true if there's a pair generating computedAvg === avg
    if (computedAvg === avg) return true;

    // if computedAvg less then avg, move to next item from left side
    if (computedAvg < avg) i++;
    else j--; // otherwise, move back by 1 item from right side
  }

  // return false if i >= j
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(firstNum, secondNum) {
  // Passing invalid num ->  return false
  if (isNaN(firstNum) || isNaN(secondNum)) return false;

  // Convert 2 num into string
  let firstNumStr = `${firstNum}`;
  let secondNumStr = `${secondNum}`;

  // Different in length -> return false
  if (firstNumStr.length != secondNumStr.length) return false;

  // Initialize a summarized object for counting chars frequencies
  let firstNumChars = {};
  for (let char of firstNumStr) {
    firstNumChars[char] = ++firstNumChars[char] || 1;
  }

  // Compare to the secondNum string
  for (let char of secondNumStr) {
    if (!firstNumChars[char]) return false;

    firstNumChars[char] -= 1;
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

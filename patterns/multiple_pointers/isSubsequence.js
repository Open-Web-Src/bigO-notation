// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(firstStr, secondStr) {
  // firstStr must shorter or equal to secondStr
  if (firstStr.length > secondStr.length) return false;

  // either first string or second string is empty -> return false
  if (firstStr.length === 0 || secondStr.length === 0) return false;

  // start at first items of each string, i and j
  let i = 0,
    j = 0;

  while (i < firstStr.length && j < secondStr.length) {
    // increase both i and j by 1 if firstStr[i] === secondStr[j]
    if (firstStr[i] === secondStr[j]) {
      i++;
    }
    // looking the next char in secondString
    j++;
  }

  // return true if i equal to firstStr.length
  return i === firstStr.length;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message, letters) {
  // Assump that one of these args is empty would result in false
  if (message.length === 0 || letters.length === 0) return false;

  // construct the summary of provided letters
  let summary = {};
  for (let char of letters) {
    summary[char] = ++summary[char] || 1;
  }

  // compare each char in message is exit in letter's summary
  for (let char of message) {
    // if not exist, then return false
    if (!summary[char]) return false;

    // remove the char that already was checked
    summary[char] -= 1;
  }

  return true;
}

console.log(constructNote("aa", "abc"));
console.log(constructNote("abc", "dcba"));
console.log(constructNote("aabbcc", "bcabcaddff"));

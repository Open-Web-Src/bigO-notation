// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(firstStr, secondStr) {
  // check the length
  if (firstStr.length !== secondStr.length) return false;

  // create summary object for each string
  let lookup = {};

  // loop through each string and counting the frequency of each char
  for (let char of firstStr) {
    lookup[char] = ++lookup[char] || 1;
  }

  // validate the second string with lookup
  for (let char of secondStr) {
    if (!lookup[char]) return false;
    else lookup[char] -= 1;
  }

  return true;
}

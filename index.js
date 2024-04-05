function isPalindrome(word) {
  // Write your algorithm here => Word that is the same when read from either left or right
  // convert each character of a word to lowerCase
  const newWord = word.toLowerCase();
  // Initialise the pointers, one from the beginning and the other from the end of the word
  let left = 0;
  let right = newWord.length - 1;
  // Loop untill the two pointers are equal(meeting)
  while (left < right) {
    // If the characters are not equal, return false
    if (newWord[left]!== newWord[right]) {
      return false;
    }

    left++;
    right--;
  
}
  // Return true if the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

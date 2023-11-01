/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase().replace(/\W/g, "");
  console.log(str1.trim(" "));
  let isPalindrome = true;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str1[str1.length - 1 - i]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

module.exports = isPalindrome;

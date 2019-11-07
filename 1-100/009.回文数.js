// https://leetcode-cn.com/problems/palindrome-number/

function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0) || String(x) === '-0') {
    return false;
  }
  let reverseNumber = 0;
  while (x > reverseNumber) {
    reverseNumber = x % 10 + reverseNumber * 10;
    x = parseInt(x / 10);
  }
  return x === reverseNumber || x === parseInt(reverseNumber / 10);
}

console.log(isPalindrome(1212));

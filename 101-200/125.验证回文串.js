// https://leetcode-cn.com/problems/valid-palindrome/

var isPalindrome = function(s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  var regx = /^[A-Za-z0-9]*$/;
  while (leftIndex !== rightIndex) {
    const leftChar = s[leftIndex].toLowerCase();
    const rightChar = s[rightIndex].toLowerCase();
    if (regx.test(leftChar) && regx.test(rightChar) && leftChar === rightChar) {

    }
    return;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
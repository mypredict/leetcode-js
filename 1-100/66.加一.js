// https://leetcode-cn.com/problems/plus-one/

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const addNum = digits[i] + 1;
    if (addNum <= 9) {
      digits[i] = addNum;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 4, 9]));
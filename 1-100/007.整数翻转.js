// https://leetcode-cn.com/problems/reverse-integer/

function reverse(x) {
  let currentNum = '';
  let quotient = x;   // 商
  let remainder = 0;  // 余数
  if (x < 0) {
    currentNum = '-';
    quotient = -x;
  }
  while (quotient > 0) {
    remainder = quotient % 10;
    quotient = parseInt(quotient / 10);
    currentNum += remainder;
  }
  if (currentNum > 2147483647 || currentNum < -2147483648) {
    return 0
  }
  return +currentNum;
}

console.log(reverse(-123));

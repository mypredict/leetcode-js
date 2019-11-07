// https://leetcode-cn.com/problems/string-to-integer-atoi/

function myAtoi(str) {
  const targetNumber = parseInt(str.trim());
  if (isNaN(targetNumber)) {
    return 0;
  }
  return Math.min(Math.max(targetNumber, -2147483648), 2147483647);
}

console.log(myAtoi(' -4193 12with words    '));

// https://leetcode-cn.com/problems/happy-number/

var isHappy = function(n) {
  const numMap = {};
  function computeNum(num) {
    let newNum = 0;
    while (num > 0) {
      newNum += (num % 10) ** 2;
      num = ~~(num / 10);
    }
    if (numMap[newNum]) return;
    numMap[newNum] = true;
    computeNum(newNum);
  }
  computeNum(n);
  if (numMap[1]) return true;
  return false;
};

console.log(isHappy(2));
// https://leetcode-cn.com/problems/largest-number/

var largestNumber = function(nums) {
  const targetString = nums.sort((a, b) => 
    (String(b) + String(a)) - (String(a) + String(b))
  ).join('');
  if (-targetString === 0) return '0';
  return targetString;
};

console.log(largestNumber([3,30,34,5,9]));
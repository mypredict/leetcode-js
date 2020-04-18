// https://leetcode-cn.com/problems/contiguous-array/

var findMaxLength = function(nums) {
  const hashMap = { 0: -1 };
  let longestSubarray = 0;
  let num = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === 1) {
      num += 1;
    } else {
      num -= 1;
    }
    if (hashMap[num] >= -1) {
      longestSubarray = Math.max(longestSubarray, i - hashMap[num]);
    } else {
      hashMap[num] = i;
    }
  }
  return longestSubarray;
};

console.log(findMaxLength([0,0,1]));
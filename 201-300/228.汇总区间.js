// https://leetcode-cn.com/problems/summary-ranges/

var summaryRanges = function(nums) {
  const targetArray = [];
  let start = nums[0];
  for (let i=1, j=nums.length; i<j; i++) {
    if (nums[i] - nums[i - 1] !== 1) {
      console.log(nums[i], nums[i - 1], start)
      if (nums[i - 1] - start === 0) {
        targetArray.push(String(start));
      } else {
        targetArray.push(`${start}->${nums[i - 1]}`);
      }
      start = nums[i];
    }
  }
  return targetArray;
};

console.log(summaryRanges([0,2,3,4,6,8,9]));
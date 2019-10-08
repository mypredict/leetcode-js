// https://leetcode-cn.com/problems/two-sum/

function twoSum(nums, target) {
  const obj = {};
  for (let i=0, j=nums.length; i<j; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i;
  }
}

console.log(twoSum([3, 2, 4], 6));

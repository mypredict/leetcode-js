// https://leetcode-cn.com/problems/house-robber/

var rob = function (nums) {
  if (nums.length < 1) return 0;
  if (nums.length < 3) return Math.max(...nums);
  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    [a, b] = [b, Math.max(a + nums[i], b)];
  }
  return b;
};

const nums = [1, 2, 3, 1, 4, 2, 7, 3];
console.log(rob(nums));
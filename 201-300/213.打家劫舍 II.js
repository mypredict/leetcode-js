// https://leetcode-cn.com/problems/house-robber-ii/

function getMax(nums) {
  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    [a, b] = [b, Math.max(a + nums[i], b)];
  }
  return b;
}
var rob = function (nums) {
  if (nums.length < 1) return 0;
  if (nums.length <= 2) return Math.max(...nums);

  return Math.max(getMax(nums.slice(0, -1)), getMax(nums.slice(1)));
};

const nums = [1, 2, 3, 1];
console.log(rob(nums));
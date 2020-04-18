// https://leetcode-cn.com/problems/binary-search/

var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const index = ~~((end - start) / 2 + start);
    if (nums[index] === target) return index;
    if (nums[index] > target) {
      end = index - 1;
    } else {
      start = index + 1;
    }
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
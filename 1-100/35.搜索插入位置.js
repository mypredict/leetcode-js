// https://leetcode-cn.com/problems/search-insert-position/

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
  return start;
};

var searchInsert = function(nums, target) {
  return search(nums, target);
};

console.log(searchInsert([1,3,5,6], 4));
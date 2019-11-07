// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/

var removeDuplicates = function(nums) {
  if (nums.length < 3) return nums.length;
  let currentIndex = 0;
  while (currentIndex < nums.length) {
    if (nums[currentIndex - 1] === nums[currentIndex + 1]) {
      nums.splice(currentIndex, 1);
    } else {
      currentIndex++;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
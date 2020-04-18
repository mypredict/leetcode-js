// https://leetcode-cn.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i=0, j=nums.length; i<j; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], true);
    if (map.size > k) {
      map.delete(nums[i - k]);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
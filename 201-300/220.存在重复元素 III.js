// https://leetcode-cn.com/problems/contains-duplicate-iii/

var containsNearbyAlmostDuplicate = function(nums, k, t) {
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

console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));
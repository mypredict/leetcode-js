// https://leetcode-cn.com/problems/next-greater-element-i/

var nextGreaterElement = function(nums1, nums2) {
  const hashMap = {};
  for (let i=0, j=nums2.length; i<j; i++) {
    const stack = [nums2[i]];
    i < 
  }
  return nums1;
};

console.log(nextGreaterElement([2,4], [1,2,3,4]));